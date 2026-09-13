# W00 Sediakan pembantu AI SQA anda / Set up your SQA-AI assistant

Masa: 30 minit (Hari 1, 09:00 hingga 09:30). Jalankan dalam folder `lab` kecuali dinyatakan.

## Langkah 0A: Buka PowerShell (Start, taip PowerShell, tekan Enter). Semak sama ada Git dan Node.js sudah dipasang. Jika ketiga-tiga memaparkan versi (node v20 atau lebih baharu), terus ke Langkah 1.

Di: PowerShell

```
git --version
node --version
npm --version
```

## Langkah 0B: Nampak 'is not recognized'? Pada PC dengan hak admin, pasang kedua-duanya dengan winget. Klik Yes jika Windows meminta kebenaran. Kemudian tutup PowerShell dan buka semula.

Di: PowerShell

```
winget install -e --id Git.Git --accept-source-agreements --accept-package-agreements
winget install -e --id OpenJS.NodeJS.LTS --accept-source-agreements --accept-package-agreements
```

## Langkah 0C: Tiada winget, tiada hak admin, atau winget gagal? Muat turun skrip kursus dan jalankan. Ia memasang Git dan Node.js versi portable dalam folder pengguna anda. Hak admin tidak diperlukan.

Di: PowerShell

```
cd $HOME
Invoke-WebRequest https://fth-abr.github.io/sqa-krisa-bengkel/setup/install-prereqs.ps1 -OutFile install-prereqs.ps1 -UseBasicParsing
powershell -ExecutionPolicy Bypass -File .\install-prereqs.ps1
```

## Langkah 0D: Tutup PowerShell dan buka tetingkap baharu supaya PATH dikemas kini. Semak semula. Ketiga-tiga mesti memaparkan versi sebelum meneruskan ke Langkah 1.

Di: PowerShell (new window)

```
git --version
node --version
npm --version
```

## Langkah 1: Buka PowerShell, pergi ke folder rumah dan klon repositori kursus.

Di: PowerShell

```
cd $HOME
git clone https://github.com/FTH-ABR/sqa-krisa-bengkel.git
cd sqa-krisa-bengkel
```

## Langkah 2: Jalankan semakan kesediaan makmal. Setiap baris mesti OK. Betulkan yang lain menggunakan lajur Fix.

Di: PowerShell

```
powershell -ExecutionPolicy Bypass -File .\setup\check-lab.ps1
```

## Langkah 3: Pasang opencode dengan npm, sahkan versi dan senaraikan model percuma OpenCode Zen.

Di: PowerShell

```
npm install -g opencode-ai
opencode --version
opencode models opencode
```

## Langkah 4: Masuk ke folder lab dan mulakan opencode dengan model percuma Big Pickle. Tiada akaun atau kunci API diperlukan.

Di: PowerShell

```
cd lab
opencode -m opencode/big-pickle
```

## Langkah 5: Taip soalan pertama dan tekan Enter. Pembantu membaca folder dan AGENTS.md sebelum menjawab.

Di: opencode

```
Terangkan dalam 3 ayat apakah isi folder lab ini dan fail yang paling penting untuk bengkel.
```

## Langkah 6: Tekan Tab untuk bertukar antara Build (boleh ubah fail) dan Plan (baca sahaja). Guna Plan untuk semakan.

Di: opencode

```
Tab
```

## Langkah 7: Taip @ dan sebahagian nama fail untuk melampirkan fail pada prompt. Pilih daripada senarai.

Di: opencode

```
@shopfast/docs/inci
```

## Langkah 8: Taip / untuk melihat arahan. Kursus menambah 16 arahan SQA seperti /review-srs dan /testcases.

Di: opencode

```
/mod
```

## Langkah 9: /models memaparkan model percuma. Kekalkan Big Pickle melainkan jurulatih mengarahkan lain.

Di: opencode

```
/models
```

## Langkah 10: Mulakan baris dengan ! untuk menjalankan arahan terminal tanpa keluar dari opencode.

Di: opencode

```
!git status
```

## Semakan manusia / Human check

- check-lab.ps1 menunjukkan SEMUA OK
- opencode --version memaparkan 1.18.x
- Baris status memaparkan Big Pickle, OpenCode Zen
