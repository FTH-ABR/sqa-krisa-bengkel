# W01 AI sebagai jurulatih kualiti / AI as your quality coach

Masa: 20 minit (Hari 1, 10:35 hingga 10:55). Jalankan dalam folder `lab` kecuali dinyatakan.

## Langkah 1: Mulakan opencode dalam mod Plan dengan prompt analisis insiden.

Di: opencode

```
opencode -m opencode/big-pickle --agent plan

Baca @shopfast/docs/incidents.md. Bagi setiap insiden berikan: punca akar, fasa SDLC kecacatan disuntik, fasa ia ditemui, dan aktiviti SQA yang boleh menangkapnya lebih awal. Rujuk KRISAv2 Bab 1 1.6.4 menggunakan jadual rujukan dalam AGENTS.md. Jadual maksimum 6 lajur.
```

## Langkah 2: Dalam sesi yang sama, minta jadual Cost of Poor Quality.

Di: opencode

```
Bina jadual Cost of Poor Quality (fasa, kos relatif, contoh ShopFast) dan terangkan Shift-Left dalam 3 ayat.
```

## Langkah 3: Tekan Tab untuk tukar ke Build dan minta fail glosari. opencode meminta kebenaran sebelum menulis: semak pratonton, kemudian pilih Allow once.

Di: opencode

```
Tulis fail outputs/m01-glosari-qa.md: 12 istilah (QA, QC, Verifikasi, Validasi, Ujian Statik, Shift-Left, Shift-Right, Quality Gate, Kecacatan, Kegagalan, IV&V, DevOps) dalam satu jadual dengan takrif Bahasa Melayu dan Inggeris.
```

## Langkah 4: Luluskan sebarang suntingan susulan. Fail disimpan dalam outputs/.

Di: opencode

```
Allow once (Enter)
```

## Langkah 5: Buka hasil dalam PowerShell (atau VS Code) dan buat semakan manusia.

Di: PowerShell

```
Get-Content outputs\m01-glosari-qa.md -TotalCount 30
```

## Semakan manusia / Human check

- Setiap insiden dipetakan ke fasa KRISAv2 yang sebenar (Permulaan hingga Pelaksanaan)
- QA diterangkan sebagai pencegahan dan QC sebagai pengesanan
- Pautan merujuk jadual halaman KRISAv2, bukan nombor halaman rekaan
