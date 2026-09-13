# W07 Audit, CAPA dan Laporan Ringkasan Ujian dibantu AI / AI audit, CAPA and Test Summary Report

Masa: 20 minit (Hari 2, 14:35 hingga 14:55). Jalankan dalam folder `lab` kecuali dinyatakan.

## Langkah 1: Jalankan /audit dalam mod Plan pada RTM dan kes ujian. Ia memaparkan pematuhan, ketidakpatuhan (NC Major dan Minor) dan bukti.

Di: opencode (Plan)

```
/audit outputs/m02-rtm.csv dan outputs/m04-testcases.csv
```

## Langkah 2: Tekan Tab untuk tukar ke Build dan minta pembantu menyimpan audit. AI membaca dokumen dahulu dan mungkin berhenti seketika pada Preparing write. Apabila dialog Permission required muncul, baca pratonton dan pilih Allow once.

Di: opencode (Build)

```
Simpan hasil audit di atas ke outputs/m07-audit.md dengan pautan ../../references/.
```

## Langkah 3: Allow once. Audit disimpan sebagai bukti dalam outputs/m07-audit.md.

Di: opencode

```
Allow once (Enter)
```

## Langkah 4: Jalankan /capa pada fail audit yang disimpan. AI membaca dokumen dahulu dan mungkin berhenti seketika pada Preparing write. Apabila dialog Permission required muncul, baca pratonton dan pilih Allow once.

Di: opencode (Build)

```
/capa semua NC dalam outputs/m07-audit.md
```

## Langkah 5: Allow once. Setiap NC mendapat punca akar (5 Mengapa), pembetulan, pencegahan, pemilik dan tarikh.

Di: opencode

```
Allow once (Enter)
```

## Langkah 6: Jalankan /test-summary dengan tempoh ujian dan binaan. AI membaca dokumen dahulu dan mungkin berhenti seketika pada Preparing write. Apabila dialog Permission required muncul, baca pratonton dan pilih Allow once.

Di: opencode (Build)

```
/test-summary Ujian sistem 14 hingga 15 September 2026, binaan 1.0.0, penguji 4 orang
```

## Langkah 7: Allow once. Baca cadangan, kemudian putuskan sebagai pasukan.

Di: opencode

```
Allow once (Enter)
```

## Semakan manusia / Human check

- Setiap ketidakpatuhan memetik bukti (fail dan baris)
- Kriteria keluar menggunakan angka KRISAv2 Bab 6 6.8 (95% lulus, severity 1 dan 2 ditutup)
- Keputusan keluaran dibuat dan ditandatangani oleh manusia
