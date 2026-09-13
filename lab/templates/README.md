# Templat SQA Bengkel (Markdown dan CSV)

Setiap templat di sini ialah versi ringkas yang boleh diisi oleh AI dan manusia, dan mencerminkan templat rasmi KRISA atau PPrISA dalam [`../../references`](../../references/README.md). Templat CSV bermula dengan baris nota `#`; buang baris tersebut apabila membuka fail dalam Excel jika perlu.

| Templat | Mencerminkan (Mirrors) | Fail Rasmi | Arahan opencode | Modul |
|---|---|---|---|---|
| [QA-Plan-PPrISA05-D12.md](QA-Plan-PPrISA05-D12.md) | PPrISA05 Pelan Pengurusan Kualiti; D12 Pelan Induk Pengujian | [PPrISA05 PDF](../../references/pprisa-2.0/templates/pdf/PPrISA05-Pelan_Pengurusan_Kualiti.pdf), [D12 DOCX](../../references/templates-D01-D18/docx/D12_DOKUMEN_PELAN_INDUK_PENGUJIAN.docx) | `/quality-gate` | M02, M09 |
| [RTM-template.csv](RTM-template.csv), [RTM-guide.md](RTM-guide.md) | KRISAv2 Bab 2, 2.11 Templat T2.8 | [BAB2 PDF halaman 56](../../references/krisa-v2-beta-2026/BAB2-FASA-PERMULAAN.pdf#page=56) | `/rtm` | M02 |
| [Design-Review-Checklist.md](Design-Review-Checklist.md) | KRISAv2 Bab 4, 4.5; D04 SDS; OWASP Top 10:2025 | [D04 DOCX](../../references/templates-D01-D18/docx/D04_DOKUMEN_SPESIFIKASI_REKABENTUK_SISTEM_SDS.docx) | `/design-review` | M03 |
| [Risk-Register-PPrISA07.csv](Risk-Register-PPrISA07.csv) | PPrISA07 Pelan Pengurusan Risiko; D12 Daftar Risiko | [PPrISA07 PDF](../../references/pprisa-2.0/templates/pdf/PPrISA07-Pelan_Pengurusan_Risiko.pdf) | `/risk-register` | M03 |
| [Test-Cases-D13.csv](Test-Cases-D13.csv) | D13 Pelan Ujian Penerimaan (Lampiran); KRISAv2 Bab 6, 6.7 | [D13 DOCX](../../references/templates-D01-D18/docx/D13_DOKUMEN_PELAN_UJIAN_PENERIMAAN_UAT-PAT.docx) | `/testcases`, `/rewrite-gwt`, `/gen-api-tests`, `/gen-ui-test` | M02, M04, M05 |
| [Bug-Report-Template.md](Bug-Report-Template.md) | KRISAv2 Bab 6, 6.3 dan Jadual 6.3; PPrISA14 Borang Pelaporan Isu | [PPrISA14 PDF](../../references/pprisa-2.0/templates/pdf/PPrISA14-Borang_Pelaporan_Isu.pdf) | `/bug-report` | M06 |
| [Quality-Metrics.csv](Quality-Metrics.csv), [Quality-Metrics-guide.md](Quality-Metrics-guide.md) | KRISAv2 Bab 6, 6.6 Metrik Pengukuran; D14 Pengukuran Hasil Ujian | [D14 DOCX](../../references/templates-D01-D18/docx/D14_DOKUMEN_LAPORAN_UJIAN_PENERIMAAN_UAT_PAT.docx) | `/metrics` | M06 |
| [Audit-Checklist-ISO-CMMI-lite.md](Audit-Checklist-ISO-CMMI-lite.md) | PPrISA05 seksyen 4 dan 6 (Audit); ISO 9001; CMMI | [PPrISA05 PDF](../../references/pprisa-2.0/templates/pdf/PPrISA05-Pelan_Pengurusan_Kualiti.pdf) | `/audit` | M07 |
| [CAPA-template.md](CAPA-template.md) | PPrISA08 Pelan Pengurusan Isu; PPrISA15 Log Penyelesaian Isu | [PPrISA15 PDF](../../references/pprisa-2.0/templates/pdf/PPrISA15-Log_Penyelesaian_Isu.pdf) | `/capa` | M07 |
| [Test-Summary-D14-D16.md](Test-Summary-D14-D16.md) | D14 Laporan Ujian Penerimaan; D16 Laporan Penamatan Ujian | [D16 DOCX](../../references/templates-D01-D18/docx/D16_DOKUMEN_LAPORAN_PENAMATAN_UJIAN.docx) | `/test-summary`, `/quality-gate` | M07, M09 |
| [Change-Request-PPrISA10.md](Change-Request-PPrISA10.md) | PPrISA10 Borang Permohonan Pindaan; PPrISA11 Log | [PPrISA10 PDF](../../references/pprisa-2.0/templates/pdf/PPrISA10-Borang_Pindaan.pdf) | `/change-request` | M08 |
| [Impact-Analysis-template.md](Impact-Analysis-template.md) | PPrISA10 Analisis Impak; PPrISA09 Pelan Pengurusan Perubahan | [PPrISA09 PDF](../../references/pprisa-2.0/templates/pdf/PPrISA09-Pelan_Pengurusan_Perubahan_Change_Mgt.pdf) | `/impact-analysis` | M08 |
| [Rollback-Plan-template.md](Rollback-Plan-template.md) | PPrISA09; KRISAv2 Bab 8, 8.3.3 | [BAB8 PDF halaman 9](../../references/krisa-v2-beta-2026/BAB8-PENYELARASAN-PEMBANGUNAN-SISTEM-DEVOPS.pdf#page=9) | `/impact-analysis`, `/change-request` | M08 |
