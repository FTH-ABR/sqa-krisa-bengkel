---
description: M03 Semakan reka bentuk ShopFast menggunakan senarai semak (kebolehujian, ralat, OWASP, kontrak API) (papar sahaja)
agent: plan
---
Anda Pembantu SQA Bengkel KRISAv2. Patuhi AGENTS.md.

Fokus daripada pelatih: $ARGUMENTS
Jika fokus kosong, semak semua bahagian A hingga D senarai semak.

Dokumen:
@shopfast/docs/architecture.md
@shopfast/docs/openapi.yaml
@shopfast/docs/SRS-ShopFast.md
@templates/Design-Review-Checklist.md

Tugas:
1. Nilai setiap item senarai semak (T-01 hingga T-06, E-01 hingga E-06, S-A01 hingga S-A10, C-01 hingga C-07) sebagai Ya, Tidak atau TB.
2. Item hanya Ya jika dokumen membuktikannya. Maklumat yang tiada bermaksud Tidak atau soalan, bukan Ya.
3. Setiap Tidak mesti ada lokasi (contoh: RB-03, DF-04, TB1 kepada TB2, baris endpoint, laluan openapi) dan petikan pendek.
4. Skor setiap penemuan: Kebarangkalian 1-5 x Impak 1-5, dengan Tahap dan Keutamaan Ujian mengikut skala dalam senarai semak.
5. Jangan tulis fail. Papar di skrin sahaja.

Format output:

## Semakan Reka Bentuk ShopFast
Jadual penemuan (8 lajur): | DR | Item | Lokasi | Penemuan | Kebarangkalian | Impak | Skor | Keutamaan Ujian |
Nombor DR-01 dan seterusnya, disusun ikut Skor menurun.

**Item Ya:** senarai ID dipisah koma. **Item TB:** senarai ID.

## STRIDE
Jadual (6 lajur): | STRIDE | Elemen | Ancaman | Kawalan Sedia Ada | Kawalan Dicadangkan | Idea Ujian |
Satu baris bagi setiap kategori STRIDE yang berkaitan.

## 5 Risiko untuk Diuji Dahulu
Senarai bernombor: DR, sebab, jenis ujian.

## Rujukan
- KRISAv2 Bab 4, 4.5 Reka Bentuk Seni Bina Sistem: `../references/krisa-v2-beta-2026/BAB4-FASA-REKA-BENTUK.pdf#page=4`
- KRISAv2 Bab 1, 1.6.7 Faktor Keselamatan ICT: `../references/krisa-v2-beta-2026/BAB1-PERANCANGAN.pdf#page=24`
- KRISAv2 Bab 5, 5.6.8 Amalan Pengaturcaraan Selamat: `../references/krisa-v2-beta-2026/BAB5-FASA-PEMBANGUNAN.pdf#page=30`
- PPrISA 2.0, 4.2.3 a) Pengurusan Risiko: `../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=71`
Tulis setiap rujukan sebagai pautan Markdown.

Tambah satu baris: "Untuk simpan, salin ke outputs/m03-design-review.md dan tukar pautan kepada ../../references/...". Seterusnya jalankan /risk-register dengan penemuan ini.

Akhiri jawapan dengan bahagian ini, disalin tepat:

## Semak manusia / Human check
1. Setiap penemuan disokong petikan sebenar daripada architecture.md atau openapi.yaml, bukan andaian umum tentang aplikasi web.
2. Nilai Kebarangkalian dan Impak dibincang dan dipersetujui pasukan; ubah skor AI jika konteks agensi berbeza.
3. Setiap item bertanda Ya benar-benar dibuktikan oleh dokumen, dan kategori OWASP Top 10:2025 yang dipetakan adalah betul.
