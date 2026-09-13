---
description: M07 Sediakan laporan ringkasan ujian (D14 dan D16) dengan keputusan GO, NO-GO atau CONDITIONAL
agent: build
---
Anda Pembantu SQA Bengkel KRISAv2. Patuhi AGENTS.md.

Maklumat pelatih: $ARGUMENTS
Contoh: "Ujian sistem 7 hingga 11 September 2026, binaan 1.1.0, penguji 4 orang". Boleh kosong jika semua bukti ada dalam outputs/.

Dokumen:
@templates/Test-Summary-D14-D16.md
@templates/QA-Plan-PPrISA05-D12.md

Bukti: baca fail berikut jika wujud: `outputs/m06-metrics.csv`, `outputs/m02-rtm.csv`, `outputs/m04-testcases.csv`, `outputs/m03-risk-register.csv` dan semua `outputs/m06-bug-report-BUG-CHK-*.md`.

Peraturan:
1. Ikut semua tajuk seksyen 1 hingga 16 dan Pengesahan dalam templat, dengan label (D14) dan (D16) dikekalkan.
2. Setiap nombor mesti datang daripada fail bukti atau input pelatih; sebut sumbernya. Nombor yang tiada ditulis `<tiada data>` dengan `[ANDAIAN: ...]` jika perlu.
3. Seksyen 9: nilai kriteria keluar daripada QA-Plan-PPrISA05-D12.md seksyen 7 satu demi satu.
4. Seksyen 16: pilih GO, NO-GO atau CONDITIONAL dengan tepat mengikut jadual peraturan dalam templat. Namakan kriteria yang menentukan keputusan. Kriteria tanpa bukti dianggap tidak dipenuhi. Jangan lembutkan keputusan NO-GO.
5. Nama orang ditulis `<nama rekaan>`.

Tulis fail `outputs/m07-test-summary.md` (ganti jika sudah wujud). Tambah seksyen Rujukan sebelum Semak manusia:
- [KRISAv2 Bab 6, 6.10 Laporan Ujian Penerimaan (UAT dan PAT)](../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=26)
- [KRISAv2 Bab 7, Laporan Penamatan Ujian](../../references/krisa-v2-beta-2026/BAB7-FASA-PELAKSANAAN.pdf#page=9)
- [D14 Laporan Ujian Penerimaan](../../references/templates-D01-D18/docx/D14_DOKUMEN_LAPORAN_UJIAN_PENERIMAAN_UAT_PAT.docx) dan [D16 Laporan Penamatan Ujian](../../references/templates-D01-D18/docx/D16_DOKUMEN_LAPORAN_PENAMATAN_UJIAN.docx)

Di skrin, papar keputusan, 3 sebab utama dan laluan fail.

Tamatkan fail dan jawapan di skrin dengan bahagian ini, disalin tepat:

## Semak manusia / Human check
1. Setiap angka dalam laporan boleh dijejak ke fail bukti dan dikira semula.
2. Keputusan GO, NO-GO atau CONDITIONAL mengikut peraturan seksyen 16 dan kriteria keluar QA Plan, bukan ringkasan AI yang terlalu optimistik.
3. Setiap syarat CONDITIONAL mempunyai pemilik, tarikh akhir dan bukti penutupan yang dipersetujui Pemilik Projek.
