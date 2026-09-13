# SQA Bengkel KRISAv2 - Langkah 0: pasang Git dan Node.js (Step 0: install Git and Node.js)
#
# Muat turun dan jalankan (tanpa Git) / Download and run (no Git needed):
#   cd $HOME
#   Invoke-WebRequest https://fth-abr.github.io/sqa-krisa-bengkel/setup/install-prereqs.ps1 -OutFile install-prereqs.ps1 -UseBasicParsing
#   powershell -ExecutionPolicy Bypass -File .\install-prereqs.ps1
#
# Cara kerja / What it does:
#   1. Git dan Node.js 20+ sudah ada: tiada apa dipasang.
#   2. winget ada: pasang Git.Git dan OpenJS.NodeJS.LTS (mungkin minta kebenaran admin).
#   3. Tiada winget, tiada admin, atau winget gagal: versi portable ke %LOCALAPPDATA%\sqa-tools
#      dan tambah ke PATH pengguna. Tiada hak admin diperlukan.
# Pilihan / Options:  -Portable (terus guna portable)  -Force  -Root <folder>  -NoPath (ujian sahaja)

param(
  [switch]$Portable,
  [switch]$Force,
  [string]$Root = (Join-Path $env:LOCALAPPDATA "sqa-tools"),
  [switch]$NoPath
)

$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"
try { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 } catch { }

$GitZipUrl = "https://github.com/git-for-windows/git/releases/download/v2.55.0.windows.5/MinGit-2.55.0.5-64-bit.zip"
$NodeVersion = "v24.21.0"

function Say([string]$m, [string]$c = "Cyan") { Write-Host $m -ForegroundColor $c }
function Has([string]$cmd) { return [bool](Get-Command $cmd -ErrorAction SilentlyContinue) }
function NodeOk {
  if (-not (Has "node")) { return $false }
  $v = (& node --version) 2>$null
  return ($v -match '^v(\d+)\.' -and [int]$Matches[1] -ge 20)
}
function Refresh-Path {
  $m = [Environment]::GetEnvironmentVariable("Path", "Machine")
  $u = [Environment]::GetEnvironmentVariable("Path", "User")
  $env:Path = "$m;$u"
}
function Add-UserPath([string]$dir) {
  if (-not ($env:Path -split ";" | Where-Object { $_.TrimEnd("\") -ieq $dir.TrimEnd("\") })) { $env:Path = "$dir;$env:Path" }
  if ($NoPath) { return }
  $u = [Environment]::GetEnvironmentVariable("Path", "User")
  if (-not $u) { $u = "" }
  if (-not ($u -split ";" | Where-Object { $_.TrimEnd("\") -ieq $dir.TrimEnd("\") })) {
    [Environment]::SetEnvironmentVariable("Path", ($dir + ";" + $u).TrimEnd(";"), "User")
    Say "  PATH pengguna ditambah: $dir" "DarkGray"
  }
}
function Show-Versions {
  Say ""
  Say "Versi / Versions:" "White"
  foreach ($c in @("git", "node", "npm")) {
    if (Has $c) { $v = (& $c --version) 2>$null; Say ("  {0,-5} {1}" -f $c, $v) "Green" }
    else { Say ("  {0,-5} TIADA / MISSING" -f $c) "Red" }
  }
}

$needGit = $Force -or -not (Has "git")
$needNode = $Force -or -not (NodeOk)
Say "SQA Bengkel: Langkah 0 / Step 0" "White"
if (-not $needGit -and -not $needNode) {
  Say "Git dan Node.js sudah dipasang. Terus ke Langkah 1. / Already installed. Go to Step 1." "Green"
  Show-Versions
  exit 0
}

$usePortable = $Portable -or -not (Has "winget")
if (-not $usePortable) {
  Say "Kaedah / Method: winget"
  $wargs = @("--accept-source-agreements", "--accept-package-agreements", "--disable-interactivity")
  if ($needGit) { Say "Memasang Git... / Installing Git..."; & winget install -e --id Git.Git @wargs }
  if ($needNode) { Say "Memasang Node.js LTS... / Installing Node.js LTS..."; & winget install -e --id OpenJS.NodeJS.LTS @wargs }
  Refresh-Path
  $needGit = -not (Has "git")
  $needNode = -not (NodeOk)
  if ($needGit -or $needNode) { Say "winget tidak berjaya sepenuhnya. Beralih ke kaedah portable. / winget incomplete, switching to portable." "Yellow"; $usePortable = $true }
}

if ($usePortable) {
  Say "Kaedah / Method: portable (tanpa admin / no admin), folder: $Root"
  New-Item -ItemType Directory -Force -Path $Root | Out-Null
  $tmp = Join-Path $env:TEMP "sqa-prereqs"
  New-Item -ItemType Directory -Force -Path $tmp | Out-Null

  if ($needGit) {
    $zip = Join-Path $tmp "mingit.zip"
    Say "Muat turun Git (MinGit, kira-kira 40 MB)... / Downloading Git..."
    Invoke-WebRequest -Uri $GitZipUrl -OutFile $zip -UseBasicParsing
    $gitDir = Join-Path $Root "git"
    if (Test-Path $gitDir) { Remove-Item -Recurse -Force $gitDir }
    Expand-Archive -Path $zip -DestinationPath $gitDir -Force
    Add-UserPath (Join-Path $gitDir "cmd")
    Say "  Git sedia / ready" "Green"
  }

  if ($needNode) {
    $ver = $NodeVersion
    $url = "https://nodejs.org/dist/$ver/node-$ver-win-x64.zip"
    $zip = Join-Path $tmp "node.zip"
    Say "Muat turun Node.js $ver (kira-kira 35 MB)... / Downloading Node.js..."
    try { Invoke-WebRequest -Uri $url -OutFile $zip -UseBasicParsing }
    catch {
      $idx = Invoke-RestMethod -Uri "https://nodejs.org/dist/index.json" -UseBasicParsing
      $lts = $idx | Where-Object { $_.lts -and ($_.files -contains "win-x64-zip") } | Select-Object -First 1
      $ver = $lts.version
      $url = "https://nodejs.org/dist/$ver/node-$ver-win-x64.zip"
      Invoke-WebRequest -Uri $url -OutFile $zip -UseBasicParsing
    }
    $nodeDir = Join-Path $Root "node"
    if (Test-Path $nodeDir) { Remove-Item -Recurse -Force $nodeDir }
    Expand-Archive -Path $zip -DestinationPath $tmp -Force
    Move-Item -Path (Join-Path $tmp "node-$ver-win-x64") -Destination $nodeDir
    $npmGlobal = Join-Path $env:APPDATA "npm"
    New-Item -ItemType Directory -Force -Path $npmGlobal | Out-Null
    Add-UserPath $npmGlobal
    Add-UserPath $nodeDir
    Say "  Node.js dan npm sedia / ready" "Green"
  }
  Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
}

Show-Versions
Say ""
Say "SELESAI. Tutup PowerShell, buka semula, kemudian teruskan ke Langkah 1 (git clone)." "Green"
Say "DONE. Close PowerShell, open it again, then continue to Step 1 (git clone)." "Green"
