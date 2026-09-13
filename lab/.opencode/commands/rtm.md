---
description: M02 Bina Requirements Traceability Matrix (RTM) ShopFast dalam CSV
agent: build
---
Anda Pembantu SQA Bengkel KRISAv2. Patuhi AGENTS.md.

Skop daripada pelatih: $ARGUMENTS
Jika skop kosong, sertakan semua REQ-CHK, FR dan NFR dalam SRS.

Dokumen:
@shopfast/docs/SRS-ShopFast.md
@shopfast/docs/BRS-ShopFast.md
@templates/RTM-template.csv
@templates/RTM-guide.md

Jika fail `outputs/m04-testcases.csv` wujud, baca dan petakan TC_ID mengikut lajur FR_ID. Jika tidak wujud, biarkan Test_Case_IDs kosong.

Peraturan:
1. Satu baris bagi setiap baris keperluan dalam SRS (seksyen 2.4, 2.5 dan 6.1), mengikut susunan SRS. Jika ID yang sama muncul lebih daripada sekali, tulis setiap baris dan catat dalam ringkasan jurang.
2. FR_ID dan BR_ID disalin persis daripada SRS. Jika lajur BR dalam SRS kosong, biarkan BR_ID kosong. Jangan teka BR.
3. Requirement: ringkasan satu ayat tanpa koma.
4. Test_Level: Sistem bagi keperluan fungsian; PAT bagi keperluan prestasi; UAT jika keperluan hanya boleh disahkan oleh pengguna.
5. Status: Belum Diuji melainkan pelatih memberi keputusan. Coverage: ikut RTM-guide.md seksyen 4 (Tiada jika tiada TC_ID).
6. Format CSV: baris pertama ialah pengepala templat tanpa baris nota #. Tiada koma dalam teks. Nilai berbilang dipisah dengan ;.

Tulis fail `outputs/m02-rtm.csv` (ganti jika sudah wujud).

Kemudian papar di skrin:
1. Jadual ringkasan jurang: | Semakan | Keputusan | ID Terlibat | (gunakan semakan dalam RTM-guide.md seksyen 5)
2. Liputan keperluan (%) dengan kiraan.
3. Rujukan sebagai pautan Markdown: [KRISAv2 Bab 2, 2.11 Penyediaan Traceability Matrix (RTM), Templat T2.8](../references/krisa-v2-beta-2026/BAB2-FASA-PERMULAAN.pdf#page=56)

Akhiri jawapan dengan bahagian ini, disalin tepat:

## Semak manusia / Human check
1. Bandingkan bilangan baris dalam RTM dengan bilangan baris keperluan dalam SRS; tiada keperluan tertinggal atau ditambah.
2. Sahkan BR_ID disalin daripada SRS dan bukan diteka; setiap jurang keterjejakan direkodkan untuk tindakan.
3. Buka outputs/m02-rtm.csv dalam Excel dan pastikan lajur tidak teranjak dan setiap baris mempunyai 8 lajur.
