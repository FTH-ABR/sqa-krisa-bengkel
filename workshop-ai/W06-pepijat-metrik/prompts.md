# W06 Laporan pepijat dan metrik kualiti dibantu AI / AI bug reports and quality metrics

Masa: 25 minit (Hari 2, 12:00 hingga 12:25). Jalankan dalam folder `lab` kecuali dinyatakan.

## Langkah 1: Jalankan /bug-report dengan bukti penghasilan semula anda. AI membaca dokumen dahulu dan mungkin berhenti seketika pada Preparing write. Apabila dialog Permission required muncul, baca pratonton dan pilih Allow once.

Di: opencode (Build)

```
/bug-report Langkah: tambah P002 kuantiti 10 melalui POST /api/cart/items. Dijangka: 201 dan kuantiti 10 diterima (REQ-CHK-01). Sebenar: 400 VALIDATION_ERROR. Bukti: ujian tests/ui/m05-senario.spec.js gagal, binaan 1.0.0.
```

## Langkah 2: Allow once. Semak severity dengan KRISAv2 Jadual 6.3.

Di: opencode

```
Allow once (Enter)
```

## Langkah 3: Jalankan /metrics dengan angka larian ujian anda. AI membaca dokumen dahulu dan mungkin berhenti seketika pada Preparing write. Apabila dialog Permission required muncul, baca pratonton dan pilih Allow once.

Di: opencode (Build)

```
/metrics kes dirancang 20, dilaksana 18, lulus 13, gagal 5, pepijat ditemui 5, pepijat bocor ke produksi 1, saiz kod 1.2 KLOC
```

## Langkah 4: Allow once. CSV metrik memaparkan setiap formula.

Di: opencode

```
Allow once (Enter)
```

## Langkah 5: Tukar ke Plan dan minta ringkasan triage tiga baris.

Di: opencode (Plan)

```
Ringkaskan pepijat terbuka mengikut severity dan keutamaan untuk mesyuarat triage dalam 3 baris. Jangan tulis fail.
```

## Semakan manusia / Human check

- Langkah boleh dihasilkan semula oleh orang lain
- Severity mengikut KRISAv2 Jadual 6.3; keutamaan ialah keputusan bisnes
- Formula metrik dipaparkan supaya angka boleh disemak semula
