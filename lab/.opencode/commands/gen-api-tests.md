---
description: M05 Jana ujian API automatik (Node.js node:test) daripada kes ujian ShopFast
agent: build
---
Anda Pembantu SQA Bengkel KRISAv2. Patuhi AGENTS.md.

Input pelatih: $ARGUMENTS
Input ialah TC_ID (contoh: TC-CHK-001 TC-CHK-002) atau ID keperluan (contoh: REQ-CHK-02). Jika input kosong, minta pelatih memberi TC_ID atau ID keperluan dan berhenti.

Dokumen:
@shopfast/docs/openapi.yaml
@shopfast/docs/SRS-ShopFast.md
@templates/Test-Cases-D13.csv

Jika `outputs/m04-testcases.csv` wujud, baca kes ujian yang dinyatakan dan gunakan Langkah, Data_Ujian dan Jangkaan daripadanya.

Peraturan kod:
1. Satu fail JavaScript lengkap untuk Node.js 20 yang hanya menggunakan `node:test`, `node:assert/strict` dan `fetch` global (sintaks ES module, tiada pakej luar).
2. `const BASE = process.env.BASE_URL || 'http://localhost:3000';`
3. Satu `test()` bagi setiap kes ujian; nama ujian bermula dengan TC_ID.
4. Setiap ujian menggunakan `X-Session-Id` unik sendiri dan menyediakan troli sendiri melalui API. Ujian mesti bebas daripada ujian lain.
5. Semak kod status dan medan `error` persis seperti SRS dan openapi.yaml; semak nilai wang dengan 2 tempat perpuluhan.
6. Log masuk ahli: `aminah@example.test` dan `Latihan123!`, hantar `Authorization: Bearer <token>`. Jangan uji penguncian akaun melainkan diminta, kerana akaun akan dikunci 15 minit.
7. Jangan ubah nilai dijangka supaya ujian lulus. Ujian yang gagal ialah calon ralat.

Tulis fail `outputs/m05-api-tests.md` (ganti jika sudah wujud) dengan struktur:

# Ujian API Automatik ShopFast
## Pemetaan Ujian
| TC_ID | Keperluan | Kaedah dan Laluan | Badan Permintaan | Status Dijangka | Semakan Respons |
## Kod Ujian
Satu blok kod ```js yang lengkap.
## Cara Menjalankan (PowerShell)
Terminal 1: `cd shopfast` kemudian `npm start`.
Terminal 2 (dalam folder lab): simpan blok kod sebagai `outputs\m05-api-tests.test.mjs`, kemudian `node --test outputs\m05-api-tests.test.mjs`.
Jika ujian gagal, sahkan secara manual dan laporkan dengan /bug-report.
## Rujukan
- [KRISAv2 Bab 5, 5.7 Pengujian Sistem](../../references/krisa-v2-beta-2026/BAB5-FASA-PEMBANGUNAN.pdf#page=33)
- [KRISAv2 Bab 7, 7.9 Repositori dan Serahan Kod Sumber (CI/CD)](../../references/krisa-v2-beta-2026/BAB7-FASA-PELAKSANAAN.pdf#page=17)

Tamatkan fail dan jawapan di skrin dengan bahagian ini, disalin tepat:

## Semak manusia / Human check
1. Setiap assertion menyemak nilai daripada SRS atau openapi.yaml, dan tiada nilai dijangka diubah supaya ujian lulus.
2. Jalankan ujian sendiri dan sahkan setiap kegagalan ialah kecacatan sebenar, bukan kesilapan skrip (sesi, data atau urutan).
3. Setiap ujian boleh dijalankan bersendirian dan dalam sebarang urutan dengan keputusan yang sama.
