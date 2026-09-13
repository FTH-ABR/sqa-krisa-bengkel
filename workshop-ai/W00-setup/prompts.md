# W00 Sediakan pembantu AI SQA anda / Set up your SQA-AI assistant

Masa: 30 minit (Hari 1, 09:00 hingga 09:30). Jalankan dalam folder `lab` kecuali dinyatakan.

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
