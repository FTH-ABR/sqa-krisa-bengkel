# SQA Bengkel KRISAv2 - lab PC readiness check
# Run from the repo folder:
#   powershell -ExecutionPolicy Bypass -File .\setup\check-lab.ps1
# Safe to run many times. It only READS your PC; it installs nothing.

$ErrorActionPreference = "SilentlyContinue"
$results = @()

function Add-Result($item, $ok, $detail, $fix) {
  $script:results += [pscustomobject]@{ Item = $item; Status = $(if ($ok) { "OK" } else { "PERLU TINDAKAN" }); Detail = $detail; Fix = $(if ($ok) { "" } else { $fix }) }
}

# 1. Windows version
$os = Get-CimInstance Win32_OperatingSystem
Add-Result "Windows" ($os.Version -ge "10.0") "$($os.Caption) $($os.Version)" "Windows 10 atau 11 diperlukan"

# 2. Node.js 20 or newer
$node = (node --version) 2>$null
$nodeOk = $false
if ($node -match "^v(\d+)\.") { $nodeOk = ([int]$Matches[1] -ge 20) }
Add-Result "Node.js >= 20" $nodeOk "$node" "Pasang Node.js LTS: winget install OpenJS.NodeJS.LTS (atau https://nodejs.org)"

# 3. npm global folder on PATH
$npmPrefix = (npm config get prefix) 2>$null
$onPath = $false
if ($npmPrefix) { $onPath = ($env:Path -split ";" | Where-Object { $_.TrimEnd("\") -ieq $npmPrefix.TrimEnd("\") }).Count -gt 0 }
Add-Result "npm global di PATH" $onPath "$npmPrefix" "Tambah folder ini ke PATH pengguna, kemudian buka semula terminal"

# 4. Git
$git = (git --version) 2>$null
Add-Result "Git" ([bool]$git) "$git" "Pasang Git: winget install Git.Git (atau https://git-scm.com)"

# 5. opencode
$oc = (opencode --version) 2>$null
Add-Result "opencode" ([bool]$oc) "$oc" "Jalankan: powershell -ExecutionPolicy Bypass -File .\setup\install-opencode.ps1"

# 6. Internet to opencode.ai and github.com
foreach ($u in @("https://opencode.ai/zen/v1/models", "https://github.com")) {
  $ok = $false
  try { $r = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 15; $ok = ($r.StatusCode -eq 200) } catch { }
  Add-Result "Internet: $u" $ok "" "Semak proksi rangkaian. Jika ada proksi: set HTTPS_PROXY dan NO_PROXY=localhost,127.0.0.1"
}

# 7. Port 3000 free for ShopFast
$busy = Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue
Add-Result "Port 3000 kosong" (-not $busy) "" "Tutup aplikasi yang guna port 3000, atau set `$env:PORT=3001 sebelum npm start"

# 8. PowerShell execution policy (npm creates .ps1 shims)
$pol = Get-ExecutionPolicy -Scope CurrentUser
$polOk = @("RemoteSigned", "Unrestricted", "Bypass") -contains "$pol" -or ((Get-ExecutionPolicy) -ne "Restricted")
Add-Result "Execution policy" $polOk "CurrentUser=$pol Effective=$(Get-ExecutionPolicy)" "Set-ExecutionPolicy -Scope CurrentUser RemoteSigned  (atau guna opencode.cmd)"

$results | Format-Table -AutoSize -Wrap
$bad = ($results | Where-Object { $_.Status -ne "OK" }).Count
if ($bad -eq 0) { Write-Host "SEMUA OK. PC sedia untuk bengkel. / All checks passed." -ForegroundColor Green }
else { Write-Host "$bad perkara perlu tindakan. Lihat lajur Fix. / $bad item(s) need action." -ForegroundColor Yellow }
