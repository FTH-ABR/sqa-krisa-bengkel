# Laporan Audit Kualiti: outputs/m02-rtm.csv dan outputs/m04-testcases.csv

## Laporan Audit Ringkas

| AU | Soalan Ringkas | Bukti Dilihat | Klasifikasi | Penemuan |
|---|---|---|---|---|
| AU-01 | BRS dan SRS diluluskan dan dikawal versinya? | `shopfast/docs/BRS-ShopFast.md` (Versi 1.0, "Untuk semakan"), `shopfast/docs/SRS-ShopFast.md` (Versi 1.1, "Untuk semakan"), kedua-duanya ada jadual kawalan dokumen | TB | Rekod kelulusan D02/D03 di luar skop audit m02/m04; status "Untuk semakan" menunjukkan bil belum diluluskan |
| AU-02 | Setiap keperluan mempunyai ID unik dan kriteria penerimaan yang boleh diuji? | `outputs/m04-testcases.csv`; `shopfast/docs/SRS-ShopFast.md` seksyen 2.4, 2.5, 6.1; `templates/Test-Cases-D13.csv` | NC Minor | `FR_ID` m04 guna `REQ-CHK-001`/`REQ-CHK-003` yang tidak persis dengan SRS; data kes TC-CHK-001, 007 dan 009 tidak konsisten dengan jangkaan; liputan hanya REQ-CHK-01 dan REQ-CHK-03 |
| AU-03 | RTM menunjukkan keterjejakan dua hala BR, keperluan, ujian dan ralat? | `outputs/m02-rtm.csv`; `outputs/m04-testcases.csv`; `outputs/m06-bug-report-BUG-CHK-001.md`; `outputs/m07-test-summary.md`; `templates/RTM-guide.md`; `templates/RTM-template.csv` | NC Major | `Test_Case_IDs` dan `Defect_IDs` kosong; `Coverage` semua "Tiada"; FR dan NFR tiada baris; status pelaksanaan tidak dikemas kini selepas ujian |
| AU-04 | Semakan reka bentuk dengan tindakan direkodkan? | Tiada dalam skop | TB | Bukti di luar skop m02/m04 |
| AU-05 | Risiko keselamatan dinilai dan dipetakan kepada ujian? | Tiada dalam skop (`outputs/m03-risk-register.csv` wujud) | TB | Bukti di luar skop m02/m04 |
| AU-06 | Pelan Induk Pengujian dan Pelan UAT diluluskan sebelum ujian? | Tiada dalam skop | TB | Bukti di luar skop (D12, D13) |
| AU-07 | Kriteria masuk dan keluar dinilai dengan bukti sebelum gate? | Tiada dalam skop | TB | Bukti di luar skop (gate dinilai dalam `outputs/m09-quality-gate.md`) |
| AU-08 | Ujian regresi automatik bagi setiap perubahan kod? | Tiada dalam skop | TB | Bukti di luar skop (log CI) |
| AU-09 | Data ujian sintetik dan tiada data peribadi sebenar? | `outputs/m04-testcases.csv` (emel aminah@example.test, produk P001 hingga P006, `X-Session-Id` trainee-01); `shopfast/docs/openapi.yaml` | Patuh | Hanya data rekaan ShopFast; tiada data peribadi sebenar |
| AU-10 | Setiap ralat direkod dengan severity, keutamaan, modul dan PIC? | Tiada dalam skop | TB | Bukti di luar skop (m06); pautan ralat ke RTM dinilai dalam AU-03 |
| AU-11 | Ralat dibaiki diuji semula dan status dikemas kini? | Tiada dalam skop | TB | Bukti di luar skop |
| AU-12 | Ralat produksi dianalisis punca akar dan tindakan pencegahan? | Tiada dalam skop | TB | Bukti di luar skop |
| AU-13 | Kod dan dokumen dalam repositori dengan kawalan versi dan tag? | Tiada dalam skop | TB | Bukti di luar skop |
| AU-14 | Perubahan melalui Borang Pindaan dan analisis impak? | Tiada dalam skop | TB | Bukti di luar skop (PPrISA10, PPrISA11) |
| AU-15 | Pelan undur wujud dan diuji? | Tiada dalam skop | TB | Bukti di luar skop |
| AU-16 | Metrik kualiti dikumpul, dianalisis dan dilaporkan? | Tiada dalam skop | TB | Bukti di luar skop (`outputs/m06-metrics.csv`) |
| AU-17 | Audit dalaman dirancang dan penemuan lepas ditutup? | Tiada dalam skop | TB | Bukti di luar skop |
| AU-18 | Lessons learned direkod dan digunakan? | Tiada dalam skop | TB | Bukti di luar skop (D14) |

## Ringkasan Penemuan

| No. Penemuan | Item | Klasifikasi | Penemuan | Bukti | Tindakan / CAPA | Tarikh Sasaran |
|---|---|---|---|---|---|---|
| AUD-01 | AU-03 | NC Major | RTM tidak mengaitkan kes ujian, ralat dan liputan. Semua 6 baris `outputs/m02-rtm.csv` mempunyai `Test_Case_IDs` kosong walaupun `outputs/m04-testcases.csv` menyediakan TC-CHK-001 hingga 010 bagi REQ-CHK-01 dan REQ-CHK-03; `Coverage` semua "Tiada"; `Defect_IDs` kosong walaupun `outputs/m06-bug-report-BUG-CHK-001.md` wujud bagi REQ-CHK-01 (kuantiti 10 ditolak). | `outputs/m02-rtm.csv` baris 2 hingga 7; `outputs/m04-testcases.csv`; `outputs/m06-bug-report-BUG-CHK-001.md` | CAPA: tautkan TC-CHK-001 hingga 010 ke baris REQ-CHK-01 dan REQ-CHK-03, pautkan BUG-CHK-001 ke REQ-CHK-01, kemas kini `Coverage` mengikut `templates/RTM-guide.md` seksyen 4 dan 5. Jalankan /capa. | `[ANDAIAN: 14 hari bekerja]` |
| AUD-02 | AU-03 | NC Major | RTM tidak lengkap: hanya memetakan REQ-CHK-01 hingga 06. FR-01 hingga FR-12 (SRS 2.5, baris 118 hingga 129) dan NFR-01 hingga NFR-08 (SRS 6.1, baris 301 hingga 311) tiada baris; BR-01 dan BR-07 tiada keperluan dipetakan, jadi semakan jurang `templates/RTM-guide.md` seksyen 5 kecuali keterjejakan ke hadapan gagal. | `outputs/m02-rtm.csv`; `shopfast/docs/SRS-ShopFast.md` seksyen 2.5 dan 6.1; `shopfast/docs/BRS-ShopFast.md` seksyen 3.1.4; `templates/RTM-guide.md` seksyen 5 | CAPA: tambah satu baris bagi setiap FR dan NFR dengan `BR_ID` induk, laksana semakan gap hadapan dan belakang. Jalankan /capa. | `[ANDAIAN: 14 hari bekerja]` |
| AUD-03 | AU-03 | NC Minor | Status pelaksanaan tidak dikemas kini. `outputs/m02-rtm.csv` mencatat semua Status "Belum Diuji" dan `outputs/m04-testcases.csv` mencatat semua Keputusan "Belum Dilaksana", sedangkan ujian telah dijalankan: `outputs/m05-api-tests.md` (TC-CHK-001 hingga 010), `outputs/m06-metrics.csv` QM-01 (13 lulus, 5 gagal) dan `outputs/m07-test-summary.md` seksyen 8.1 menggelar jurang ini sebagai "jurang dokumentasi"; `outputs/m09-quality-gate.md` menilai m02/m04 sebagai tiada bukti pelaksanaan. | `outputs/m02-rtm.csv` baris 2 hingga 7; `outputs/m04-testcases.csv` baris 2 hingga 11; `outputs/m07-test-summary.md` baris 79 dan 137; `outputs/m09-quality-gate.md` baris 9 | CAPA: kemas kini Status dan Keputusan selepas pelaksanaan ujian dan sebelum Gate G3, sertakan `Defect_IDs`. Jalankan /capa. | `[ANDAIAN: 7 hari bekerja]` |
| AUD-04 | AU-02 | NC Minor | ID keperluan dalam m04 tidak persis: `outputs/m04-testcases.csv` guna `REQ-CHK-001` dan `REQ-CHK-003` sedangkan SRS menulis `REQ-CHK-01` dan `REQ-CHK-03`, melanggar nota `templates/Test-Cases-D13.csv` baris 4 (FR_ID mesti ID persis daripada SRS) dan pecah keterjejakan dengan RTM yang menulis ID betul. | `outputs/m04-testcases.csv` baris 2 hingga 11; `shopfast/docs/SRS-ShopFast.md` seksyen 2.4; `templates/Test-Cases-D13.csv` baris 4 | CAPA: tukar semua `FR_ID` kepada ID persis SRS dan sinkronkan dengan `outputs/m02-rtm.csv` serta `outputs/m05-api-tests.md`. Jalankan /capa. | `[ANDAIAN: 7 hari bekerja]` |
| AUD-05 | AU-02 | NC Minor | Data ujian dan jangkaan tidak konsisten: TC-CHK-001 tajuk "Kuantiti 2 diterima" tetapi data kuantiti 1 dan jangkaan "kuantiti dalam respons ialah 1", serta Teknik "Sah" bukan nilai sah templat (EP/BVA/Decision Table/State Transition/Use Case/Error Guessing); TC-CHK-007 prasyarat "P001 x 2 (subtotal 179.80)" tetapi jangkaan subtotal 200.00, sedangkan FR-03 menetapkan P001 x 2 = 179.80; TC-CHK-009 menuntut P002 x 2 = subtotal 100.00 padahal `outputs/m05-api-tests.md` nota mengesahkan P002 = RM35.00 (subtotal 70.00) dan skrip m05 telah selaraskan data ke P003. | `outputs/m04-testcases.csv` baris 2, 8, 10; `shopfast/docs/SRS-ShopFast.md` FR-03 (baris 120) dan REQ-CHK-03 (baris 109); `outputs/m05-api-tests.md` baris 20 | CAPA: betulkan tajuk, nilai Teknik dan data prasyarat supaya konsisten dengan SRS dan harga produk, selaraskan dengan skrip m05. Jalankan /capa. | `[ANDAIAN: 7 hari bekerja]` |
| AUD-06 | AU-02 | OFI | Liputan reka bentuk kes ujian terhad: m04 hanya meliputi REQ-CHK-01 dan REQ-CHK-03. REQ-CHK-02, REQ-CHK-04, REQ-CHK-05 dan REQ-CHK-06 tiada kes ujian dalam m04, sepadan dengan `Coverage` "Tiada" dalam RTM; templat hanya menyediakan contoh TC-CHK-010, 011 dan 030. | `outputs/m04-testcases.csv`; `outputs/m02-rtm.csv` baris 3 hingga 6; `shopfast/docs/SRS-ShopFast.md` seksyen 2.4; `templates/Test-Cases-D13.csv` baris 7 hingga 9 | OFI: rancang kes ujian tambahan (EP/BVA kod promosi REQ-CHK-02, kad tamat tempoh REQ-CHK-04, State Transition kitar hayat REQ-CHK-05, ujian beban p95 REQ-CHK-06) dan kemas kini RTM. | `[ANDAIAN: 30 hari bekerja]` |
| AUD-07 | AU-03 | OFI | SRS mengandungi ID unik bermasalah: `shopfast/docs/SRS-ShopFast.md` seksyen 2.5 menyenaraikan FR-05 dua kali (baris 122 pengesahan medan dan baris 123 CART_EMPTY) dengan maksud berbeza; mengikut semakan jurang `templates/RTM-guide.md` seksyen 5 (ID unik), kewujudan ini menjejaskan keterjejakan dalam RTM. | `shopfast/docs/SRS-ShopFast.md` baris 122 dan 123; `templates/RTM-guide.md` seksyen 5 | OFI: lapor kepada pemilik SRS untuk guna semula nombor atau penggantian ID sebelum RTM dimuktamadkan. | `[ANDAIAN: 30 hari bekerja]` |

Penyemakan jurang (gap check) "Keperluan tanpa ujian, Coverage = Tiada" dan "ID berulang" mengikut `templates/RTM-guide.md` seksyen 5.

### Jadual Kiraan

| Patuh | NC Major | NC Minor | OFI | TB |
|---|---|---|---|---|
| 1 | 2 | 3 | 2 | 15 |

Catatan: kiraan NC Major, NC Minor dan OFI mengikut bilangan penemuan AUD; TB mengikut bilangan perkara AU yang berada di luar skop audit.

## Rujukan

- PPrISA05 Pelan Pengurusan Kualiti: [PPrISA05 PDF](../../../references/pprisa-2.0/templates/pdf/PPrISA05-Pelan_Pengurusan_Kualiti.pdf)
- PPrISA 2.0, 5.4.2 ii b) Penilaian Kualiti Serahan Projek: [halaman 94](../../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=94)
- KRISAv2 Bab 1, 1.6.4 Jaminan Kualiti Perisian (SQA): [BAB1-PERANCANGAN.pdf, halaman 19](../../../references/krisa-v2-beta-2026/BAB1-PERANCANGAN.pdf#page=19)
- Sokongan keterjejakan: KRISAv2 Bab 2, 2.11 RTM Templat T2.8 [F1.8]: [BAB2-FASA-PERMULAAN.pdf, halaman 56](../../../references/krisa-v2-beta-2026/BAB2-FASA-PERMULAAN.pdf#page=56)
- Senario dan kes ujian: KRISAv2 Bab 6, 6.7 [F5.2]: [BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf, halaman 9](../../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=9)

## Semak manusia / Human check

1. Buka setiap fail bukti yang disebut dan sahkan ia wujud dan benar-benar menyokong klasifikasi.
2. Klasifikasi NC Major dan NC Minor diputuskan oleh juruaudit manusia berdasarkan kriteria objektif, bukan pendapat AI.
3. Setiap NC dimaklumkan kepada auditee dan mempunyai CAPA yang dirancang melalui /capa.