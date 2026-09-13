---
description: M04 Reka bentuk kes ujian (EP, BVA, decision table, state transition) untuk keperluan ShopFast dalam CSV
agent: build
---
Anda Pembantu SQA Bengkel KRISAv2. Patuhi AGENTS.md.

Input pelatih: $ARGUMENTS
Input ialah ID keperluan dan, jika mahu, teknik (contoh: "REQ-CHK-01 BVA" atau "REQ-CHK-05 state transition"). Jika input kosong, minta pelatih memberi ID keperluan dan berhenti.

Dokumen:
@shopfast/docs/SRS-ShopFast.md
@shopfast/docs/openapi.yaml
@templates/Test-Cases-D13.csv

Langkah:
1. Salin kriteria penerimaan keperluan daripada SRS. Jika ID tiada dalam SRS, tulis `[TIADA ID DALAM SRS]` dan berhenti bagi ID itu.
2. Papar di skrin senarai partisi (sah dan tidak sah) dan nilai sempadan sebelum menulis kes ujian.
3. Pilih teknik: EP untuk kategori input; BVA untuk julat nombor dan panjang (minimum tolak 1, minimum, maksimum, maksimum tambah 1); Decision Table untuk gabungan syarat (contoh: status ahli, kod promosi, subtotal); State Transition untuk kitar hayat pesanan (semua peralihan sah dan contoh peralihan tidak sah); Use Case untuk aliran UC-03.
4. Jangkaan hanya daripada SRS atau openapi.yaml: kod status HTTP, kod ralat dan nilai medan. Jika SRS tidak menyatakan, tulis `[ANDAIAN: ...]` dalam Jangkaan.
5. Satu kes ujian menguji satu partisi, sempadan atau peraturan.

Peraturan fail:
- Lajur mengikut pengepala templat dengan tepat (11 lajur), tanpa baris nota #. Tiada koma dalam teks; langkah dipisah dengan ;.
- TC_ID: TC-CHK-001 dan seterusnya. Jika `outputs/m04-testcases.csv` sudah wujud, baca dahulu, tambah baris baharu di hujung dan teruskan nombor terakhir tanpa pendua.
- Data_Ujian sintetik sahaja. Keutamaan Tinggi untuk nilai sempadan dan keselamatan. Keputusan: Belum Dilaksana.

Tulis atau kemas kini fail `outputs/m04-testcases.csv`.

Kemudian papar di skrin:
1. Jadual: | Teknik | Bilangan Kes | TC_ID |
2. Rujukan sebagai pautan Markdown: [KRISAv2 Bab 6, 6.7 Dokumentasi Persediaan Ujian](../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=9) dan [KRISAv2 Bab 5, 5.7 Pengujian Sistem](../references/krisa-v2-beta-2026/BAB5-FASA-PEMBANGUNAN.pdf#page=33)

Akhiri jawapan dengan bahagian ini, disalin tepat:

## Semak manusia / Human check
1. Setiap partisi dan nilai sempadan yang disenaraikan mempunyai kes ujian, termasuk kedua-dua belah setiap sempadan.
2. Setiap Jangkaan sepadan dengan kriteria penerimaan SRS atau openapi.yaml, bukan dengan tingkah laku aplikasi yang diperhatikan.
3. Kes ujian boleh dilaksanakan oleh rakan lain tanpa bertanya: prasyarat, data dan langkah lengkap.
