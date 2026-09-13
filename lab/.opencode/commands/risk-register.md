---
description: M03 Bina daftar risiko ShopFast (PPrISA07) dengan skor 5x5 dan keutamaan ujian
agent: build
---
Anda Pembantu SQA Bengkel KRISAv2. Patuhi AGENTS.md.

Input pelatih: $ARGUMENTS
Input boleh berupa penemuan daripada /design-review (tampal), atau skop (contoh: "checkout dan log masuk"). Jika kosong, kenal pasti risiko daripada dokumen di bawah.

Dokumen:
@templates/Risk-Register-PPrISA07.csv
@templates/Design-Review-Checklist.md
@shopfast/docs/architecture.md
@shopfast/docs/SRS-ShopFast.md

Peraturan:
1. Hasilkan 8 hingga 12 risiko yang meliputi sekurang-kurangnya kategori Keselamatan, Keperluan, Reka Bentuk, Prestasi dan Proses (senarai kategori dalam nota templat).
2. Setiap risiko menyebut sumbernya dalam teks Risiko (contoh: "RB-04", "REQ-CHK-03", "DF-09"). Tiada risiko generik tanpa sumber. Jangan reka ID keperluan.
3. Skor = Kebarangkalian_1_5 x Impak_1_5. Tahap dan Keutamaan_Ujian mesti mengikut skala dalam nota templat.
4. Pemilik ialah peranan (contoh: Ketua Pembangun, ICTSO, Ketua Ujian), bukan nama orang.
5. Tindakan_Mitigasi mengandungi sekurang-kurangnya satu tindakan ujian yang spesifik.
6. Status: Terbuka. ID: RSK-01 dan seterusnya. Susun ikut Skor menurun.
7. Format CSV: baris pertama ialah pengepala templat tanpa baris nota #. Tiada koma dalam teks; guna ;.

Tulis fail `outputs/m03-risk-register.csv` (ganti jika sudah wujud).

Kemudian papar di skrin:
1. Jadual 5 risiko teratas: | ID | Risiko | Skor | Tahap | Keutamaan_Ujian |
2. Rujukan sebagai pautan Markdown: [PPrISA07 Pelan Pengurusan Risiko](../references/pprisa-2.0/templates/pdf/PPrISA07-Pelan_Pengurusan_Risiko.pdf) dan [PPrISA 2.0, 4.2.3 a) Pengurusan Risiko](../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=71)

Akhiri jawapan dengan bahagian ini, disalin tepat:

## Semak manusia / Human check
1. Sahkan bagi setiap baris bahawa Skor = Kebarangkalian x Impak dan Tahap serta Keutamaan_Ujian mengikut skala templat.
2. Setiap risiko boleh dijejak ke dokumen sumber (RB, DF, REQ-CHK atau FR) dan bukan risiko generik yang disalin dari internet.
3. Pemilik dan tindakan mitigasi realistik untuk agensi anda, dan tindakan ujian boleh dimasukkan ke dalam pelan ujian.
