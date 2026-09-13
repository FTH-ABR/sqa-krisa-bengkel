'use strict';

const { spawn } = require('node:child_process');
const http = require('node:http');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const PORT = 3000;
const HEALTH_URL = 'http://localhost:' + PORT + '/api/health';

function run(label, script, args) {
  return new Promise((resolve) => {
    console.log('\n=== ' + label + ' ===');
    const child = spawn(process.execPath, [script, ...args], { cwd: ROOT, stdio: 'inherit' });
    child.on('close', (code) => resolve(code === null ? 1 : code));
  });
}

function checkHealth() {
  return new Promise((resolve) => {
    const req = http.get(HEALTH_URL, (res) => {
      res.resume();
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(1000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function waitForHealth(timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await checkHealth()) return true;
    await new Promise((r) => setTimeout(r, 300));
  }
  return false;
}

function stopServer(server) {
  return new Promise((resolve) => {
    if (!server || server.exitCode !== null) {
      resolve();
      return;
    }
    server.once('close', () => resolve());
    server.kill();
    setTimeout(resolve, 3000).unref();
  });
}

async function main() {
  if (await checkHealth()) {
    console.error('Port ' + PORT + ' is already serving ' + HEALTH_URL + '. Stop that server before running npm test.');
    process.exit(1);
  }

  console.log('Starting ShopFast on port ' + PORT + ' for the API tests...');
  const server = spawn(process.execPath, ['app/server.js'], {
    cwd: ROOT,
    env: { ...process.env, PORT: String(PORT) },
    stdio: ['ignore', 'ignore', 'inherit']
  });

  const ready = await waitForHealth(15000);
  if (!ready) {
    console.error('ShopFast did not become healthy within 15 seconds.');
    await stopServer(server);
    process.exit(1);
  }

  const newmanBin = require.resolve('newman/bin/newman.js', { paths: [ROOT] });
  const apiCode = await run('API tests (Newman)', newmanBin, [
    'run',
    'tests/api/shopfast.postman_collection.json',
    '-e',
    'tests/api/local.postman_environment.json'
  ]);

  await stopServer(server);

  const playwrightPkg = require.resolve('@playwright/test/package.json', { paths: [ROOT] });
  const playwrightBin = path.join(path.dirname(playwrightPkg), 'cli.js');
  const uiCode = await run('UI tests (Playwright)', playwrightBin, ['test']);

  console.log('\nAPI tests exit code: ' + apiCode);
  console.log('UI tests exit code: ' + uiCode);
  process.exit(apiCode !== 0 || uiCode !== 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
