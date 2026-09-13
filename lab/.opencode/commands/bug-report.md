---
description: M06 Tulis laporan ralat (KRISAv2 6.3 dan PPrISA14) dengan severity Jadual 6.3
agent: build
---
Anda Pembantu SQA Bengkel KRISAv2. Patuhi AGENTS.md.

Pemerhatian pelatih: $ARGUMENTS
Input ialah langkah, hasil dijangka, hasil sebenar dan bukti, atau output ujian yang gagal. Jika tiada hasil sebenar, minta pelatih memberikannya dan berhenti.

Dokumen:
@templates/Bug-Report-Template.md
@shopfast/docs/SRS-ShopFast.md
@shopfast/docs/openapi.yaml

Peraturan:
1. Satu ralat bagi setiap laporan. Jika input mengandungi beberapa ralat, tulis fail berasingan bagi setiap satu.
2. Hasil Dijangka mesti memetik ID dan teks keperluan daripada SRS atau openapi.yaml. Jika tiada keperluan yang berkaitan, tulis `[TIADA ID DALAM SRS]` dan nyatakan bahawa ini mungkin jurang keperluan, bukan ralat.
3. Tajuk: "<Modul>: <apa yang gagal> apabila <keadaan>".
4. Severity mengikut Jadual 6.3 dalam templat; justifikasi memetik keterangan tahap tersebut. Keutamaan (P1, P2 atau P3) dijustifikasi berasingan daripada severity.
5. Jangan reka bukti. Senaraikan bukti yang mesti dilampirkan oleh pelatih (respons API, tangkapan skrin, log).
6. Bahagian A: gunakan `<nama rekaan>` dan emel `@example.test`. Bahagian E dibiarkan kosong untuk Pengurus Projek. Bahagian F: satu baris status Baru.
7. ID: semak fail `outputs/m06-bug-report-BUG-CHK-*.md` yang sedia ada dan gunakan nombor seterusnya, bermula BUG-CHK-001.
8. Ikut semua tajuk seksyen A hingga F dalam templat tanpa mengubah susunan.

Tulis fail `outputs/m06-bug-report-BUG-CHK-<nnn>.md`. Tambah seksyen Rujukan sebelum Semak manusia:
- [KRISAv2 Bab 6, 6.3 Pengurusan Ralat](../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=2)
- [KRISAv2 Bab 6, Jadual 6.3 Contoh Tahap Severity Hasil Ujian](../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=7)
- [PPrISA14 Borang Pelaporan Isu](../../references/pprisa-2.0/templates/pdf/PPrISA14-Borang_Pelaporan_Isu.pdf)

Di skrin, papar: ID, tajuk, severity, keutamaan dan laluan fail.

Tamatkan fail dan jawapan di skrin dengan bahagian ini, disalin tepat:

## Semak manusia / Human check
1. Hasilkan semula ralat sekali lagi menggunakan langkah dalam laporan dan lampirkan bukti sebenar.
2. Sahkan hasil dijangka benar-benar dinyatakan dalam SRS atau openapi.yaml; jika tidak, ia mungkin jurang keperluan dan bukan ralat.
3. Severity mengikut takrif Jadual 6.3 dan keutamaan dipersetujui bersama pemilik produk, bukan diterima terus daripada AI.
