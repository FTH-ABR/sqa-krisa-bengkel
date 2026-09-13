# SQA Bengkel KRISAv2 - install opencode (AI assistant) on Windows
# Run:  powershell -ExecutionPolicy Bypass -File .\setup\install-opencode.ps1
# Method 1 (default): npm global install. Needs Node.js 20+.
# Method 2 (fallback, no admin, no Node): portable zip from GitHub releases
#   into %LOCALAPPDATA%\opencode and added to the user PATH.
param([switch]$Portable)

$ErrorActionPreference = "Stop"

function Test-OpenCode {
  try { $v = (opencode --version) 2>$null; if ($v) { return $v } } catch { }
  return $null
}

$existing = Test-OpenCode
if ($existing -and -not $Portable) {
  Write-Host "opencode sudah dipasang: $existing" -ForegroundColor Green
  exit 0
}

if (-not $Portable) {
  $node = $null
  try { $node = (node --version) 2>$null } catch { }
  if ($node) {
    Write-Host "Memasang opencode melalui npm (Node $node) ..." -ForegroundColor Cyan
    npm install -g opencode-ai
    $v = Test-OpenCode
    if ($v) { Write-Host "Berjaya: opencode $v" -ForegroundColor Green; exit 0 }
    Write-Host "npm selesai tetapi arahan 'opencode' belum dijumpai. Buka terminal baharu dan cuba: opencode --version" -ForegroundColor Yellow
    Write-Host "Jika masih gagal, jalankan skrip ini dengan -Portable" -ForegroundColor Yellow
    exit 1
  }
  Write-Host "Node.js tidak dijumpai. Guna kaedah portable." -ForegroundColor Yellow
}

# Portable method
$dest = Join-Path $env:LOCALAPPDATA "opencode"
New-Item -ItemType Directory -Force $dest | Out-Null
$arch = if ($env:PROCESSOR_ARCHITECTURE -eq "ARM64") { "arm64" } else { "x64" }
$api = "https://api.github.com/repos/anomalyco/opencode/releases/latest"
Write-Host "Mendapatkan maklumat keluaran terkini ..." -ForegroundColor Cyan
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$rel = Invoke-RestMethod -Uri $api -UseBasicParsing
$asset = $rel.assets | Where-Object { $_.name -eq "opencode-windows-$arch.zip" } | Select-Object -First 1
if (-not $asset) { throw "Tiada fail opencode-windows-$arch.zip dalam keluaran $($rel.tag_name)" }
$zip = Join-Path $env:TEMP $asset.name
Write-Host "Memuat turun $($asset.name) ($($rel.tag_name)) ..." -ForegroundColor Cyan
Invoke-WebRequest -Uri $asset.browser_download_url -OutFile $zip -UseBasicParsing
Expand-Archive -Path $zip -DestinationPath $dest -Force
$exe = Get-ChildItem $dest -Recurse -Filter opencode.exe | Select-Object -First 1
if (-not $exe) { throw "opencode.exe tidak dijumpai selepas unzip" }
$bin = $exe.DirectoryName
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
if (($userPath -split ";") -notcontains $bin) {
  [Environment]::SetEnvironmentVariable("Path", "$userPath;$bin", "User")
}
$env:Path = "$env:Path;$bin"
Write-Host "Berjaya: $(& $exe.FullName --version) di $bin" -ForegroundColor Green
Write-Host "Buka terminal baharu supaya PATH dikemas kini." -ForegroundColor Yellow
