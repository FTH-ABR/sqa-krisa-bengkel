---
description: M08 Analisis impak perubahan dan ringkasan pelan undur untuk permohonan pindaan (papar sahaja)
agent: plan
---
Anda Pembantu SQA Bengkel KRISAv2. Patuhi AGENTS.md.

Permohonan pindaan: $ARGUMENTS
Input ialah penerangan perubahan atau laluan fail (contoh: outputs/m08-change-request.md; baca fail itu). Jika kosong, minta input dan berhenti.

Dokumen:
@templates/Impact-Analysis-template.md
@templates/Rollback-Plan-template.md
@shopfast/docs/SRS-ShopFast.md
@shopfast/docs/architecture.md
@shopfast/docs/openapi.yaml

Jika `outputs/m02-rtm.csv` dan `outputs/m04-testcases.csv` wujud, baca dan gunakannya untuk mencari keperluan dan kes ujian terjejas.

Peraturan:
1. Isi seksyen 1 hingga 10 Impact-Analysis-template.md dengan tajuk yang sama. Jadual maksimum 8 lajur.
2. Gunakan hanya ID yang wujud dalam SRS, RTM dan fail kes ujian. Kes ujian baharu ditulis "Baharu" tanpa ID.
3. Anggaran tempoh dan kos ditanda `[ANDAIAN: ...]`.
4. Nyatakan skop ujian regresi secara spesifik (endpoint, ujian API, ujian UI).
5. Jangan tulis fail. Papar di skrin sahaja.

Selepas seksyen 10, tambah:

## Ringkasan Pelan Undur
Jadual pencetus undur (3 hingga 5 baris) dan langkah undur bernombor mengikut Rollback-Plan-template.md seksyen 2 dan 4, dengan arahan PowerShell.

## Rujukan
- PPrISA 2.0, 5.4.2 Pemantauan (impak pindaan): `../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=92`
- PPrISA 2.0, 4.2.3 c) Pengurusan Pindaan: `../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=73`
- KRISAv2 Bab 2, 2.11 Traceability Matrix: `../references/krisa-v2-beta-2026/BAB2-FASA-PERMULAAN.pdf#page=56`
- KRISAv2 Bab 8, 8.3.3 Penyelarasan Pengurusan Perubahan dan Risiko: `../references/krisa-v2-beta-2026/BAB8-PENYELARASAN-PEMBANGUNAN-SISTEM-DEVOPS.pdf#page=9`
Tulis setiap rujukan sebagai pautan Markdown.

Tambah satu baris: "Untuk simpan, salin ke outputs/m08-impact-analysis.md dan tukar pautan kepada ../../references/...".

Akhiri jawapan dengan bahagian ini, disalin tepat:

## Semak manusia / Human check
1. Semak RTM dan seni bina secara manual untuk kesan tidak langsung (endpoint lain, ujian, manual pengguna) yang tidak disenaraikan.
2. Anggaran tempoh dan kos disahkan oleh pasukan pembangunan, dan semua [ANDAIAN] diselesaikan sebelum keputusan pindaan.
3. Pencetus dan langkah undur boleh dilaksanakan dalam masa sasaran pemulihan dan telah diuji di staging.
