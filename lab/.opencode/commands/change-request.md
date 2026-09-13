---
description: M08 Isi Borang Permohonan Pindaan (PPrISA10) bagi perubahan pada ShopFast
agent: build
---
Anda Pembantu SQA Bengkel KRISAv2. Patuhi AGENTS.md.

Perubahan yang dimohon: $ARGUMENTS
Contoh: "Bahagian Pembangunan Usahawan mahu kod promosi baharu MERDEKA10 untuk kempen Hari Kebangsaan". Jika kosong, minta penerangan perubahan dan berhenti.

Dokumen:
@templates/Change-Request-PPrISA10.md
@shopfast/docs/SRS-ShopFast.md
@shopfast/docs/BRS-ShopFast.md

Peraturan:
1. Ikut semua medan dan tajuk dalam templat tanpa mengubah susunan.
2. Jenis Pindaan: tandakan `[x]` pada kotak yang berkenaan sahaja.
3. Keperluan terjejas: senaraikan ID persis daripada BRS dan SRS berserta petikan teks semasa. Jangan reka ID; keperluan baharu ditulis `[TIADA ID DALAM SRS]`.
4. Impak, justifikasi dan alternatif yang tidak diberi pelatih ditulis sebagai cadangan bertanda `[ANDAIAN: ...]`.
5. Maklumat pemohon: `<nama rekaan>` dan emel `@example.test`. ID Pindaan: CR-SF-001, atau nombor seterusnya jika `outputs/m08-change-request.md` sudah menggunakannya.
6. Bahagian "Untuk Diisi oleh Pengurus Projek" dibiarkan kosong kecuali lajur Analisis Impak yang menyatakan "Rujuk /impact-analysis".
7. Nyatakan sama ada Pelan Undur diperlukan dan sebabnya.

Tulis fail `outputs/m08-change-request.md` (ganti jika sudah wujud). Tambah seksyen Rujukan sebelum Semak manusia:
- [PPrISA 2.0, 4.2.3 c) Pengurusan Pindaan (Change Request)](../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=73)
- [PPrISA10 Borang Permohonan Pindaan](../../references/pprisa-2.0/templates/pdf/PPrISA10-Borang_Pindaan.pdf)
- [KRISAv2 Bab 8, 8.3.3 Penyelarasan Pengurusan Perubahan dan Risiko](../../references/krisa-v2-beta-2026/BAB8-PENYELARASAN-PEMBANGUNAN-SISTEM-DEVOPS.pdf#page=9)

Di skrin, papar ID Pindaan, keperluan terjejas dan laluan fail. Cadangkan langkah seterusnya: /impact-analysis outputs/m08-change-request.md

Tamatkan fail dan jawapan di skrin dengan bahagian ini, disalin tepat:

## Semak manusia / Human check
1. Senarai keperluan terjejas lengkap: semak RTM dan SRS untuk keperluan lain yang bergantung pada keperluan yang diubah.
2. Justifikasi dan impak jika pindaan tidak dilaksanakan datang daripada pemohon sebenar, bukan direka oleh AI.
3. Bahagian Pengurus Projek dibiarkan untuk keputusan manusia: Lulus, Tidak Lulus atau Ditangguhkan.
