# W04 Reka bentuk ujian AI: EP, BVA dan jurang liputan / AI test design: EP, BVA and coverage gaps

Masa: 15 minit (Hari 1, 16:40 hingga 16:55). Jalankan dalam folder `lab` kecuali dinyatakan.

## Langkah 1: Jalankan /testcases untuk dua keperluan checkout. AI membaca dokumen dahulu dan mungkin berhenti seketika pada Preparing write. Apabila dialog Permission required muncul, baca pratonton dan pilih Allow once.

Di: opencode (Build)

```
/testcases REQ-CHK-01 dan REQ-CHK-03, maksimum 10 kes ujian
```

## Langkah 2: Allow once. Kes ujian format D13 disimpan.

Di: opencode

```
Allow once (Enter)
```

## Langkah 3: Buka CSV dan semak. Dalam larian sebenar ini AI menulis REQ-CHK-001 dan bukan REQ-CHK-01, melabel satu kes Sah dan bukan teknik, dan terlepas sempadan 10, nilai yang paling mungkin menyembunyikan pepijat. Betulkan sebelum fail digunakan.

Di: PowerShell

```
Import-Csv outputs\m04-testcases.csv | Format-Table -AutoSize -Wrap
```

## Langkah 4: Minta ejen Plan membandingkan kes ujian dengan RTM. Ia betul menyenaraikan 4 keperluan tanpa liputan, tetapi mendakwa REQ-CHK-001 wujud dalam RTM sedangkan RTM menggunakan REQ-CHK-01. AI tidak menyemak ID sendiri: anda yang mesti menyemak.

Di: opencode (Plan)

```
Bandingkan outputs/m04-testcases.csv dengan outputs/m02-rtm.csv. Senaraikan keperluan tanpa kes ujian dan kes ujian tanpa keperluan. Jangan tulis fail.
```

## Semakan manusia / Human check

- Nilai sempadan 10 dan RM200.00 ada
- Setiap kes menamakan teknik dan ID REQ-CHK
- Hasil dijangka datang daripada SRS, bukan daripada tingkah laku aplikasi
