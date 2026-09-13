# Tulis Semula Keperluan (Given/When/Then)

## REQ-CHK-03

**Teks asal:** Ahli yang log masuk (bearer token dihantar) menerima diskaun ahli 10% daripada subtotal. Diskaun promosi dikira mengikut kod. Jumlah diskaun (diskaun ahli tambah diskaun promosi) tidak melebihi 25% daripada subtotal. Caj penghantaran ialah RM8.00 dan penghantaran adalah percuma bagi subtotal RM200 dan ke atas.

**Masalah:** Ambiguiti: formula dikenakan had diskaun 25% tidak menyatakan diskaun mana (ahli atau promosi) yang dikurangkan apabila jumlah melebihi had, dan tidak menyatakan sama ada medan memberDiscount serta promoDiscount memaparkan nilai sebelum atau selepas had dikenakan.

| Senario | Jenis | Given | When | Then | Partisi_Atau_Peraturan |
|---|---|---|---|---|---|
| GWT-REQ-CHK-03-01 | Positif | Ahli aminah@example.test log masuk (Authorization: Bearer token) dengan sesi troli baharu (X-Session-Id: trainee-01) mengandungi P003 x 2, subtotal RM200.00, dan kod RAYA15 diterapkan | GET /api/cart dihantar dengan pengepala X-Session-Id dan Authorization | HTTP 200 dengan subtotal 200.00, memberDiscount 20.00, promoDiscount 30.00, discount 50.00, shipping 0 dan total 150.00 | Partisi sah: ahli + RAYA15 pada had diskaun tepat 25% (10% + 15%) dan subtotal RM200.00 (sempadan penghantaran percuma); sepadan dengan kriteria penerimaan SRS |
| GWT-REQ-CHK-03-02 | Positif | Ahli aminah@example.test log masuk dengan sesi troli mengandungi P003 x 1, subtotal RM100.00, dan tiada kod promosi | GET /api/cart dihantar dengan pengepala X-Session-Id dan Authorization | HTTP 200 dengan memberDiscount 10.00, promoDiscount 0, discount 10.00, shipping 8.00 dan total 98.00 | Partisi sah: ahli tanpa kod promosi; diskaun ahli 10% sahaja, caj penghantaran RM8.00 kerana subtotal bawah RM200 |
| GWT-REQ-CHK-03-03 | Negatif | Pelanggan tidak log masuk (tiada header Authorization) dengan sesi troli mengandungi P003 x 1, subtotal RM100.00, dan tiada kod promosi | GET /api/cart dihantar hanya dengan pengepala X-Session-Id | HTTP 200 dengan memberDiscount 0, promoDiscount 0, discount 0, shipping 8.00 dan total 108.00 | Partisi tidak sah: bukan ahli (tiada token); tiada diskaun ahli, caj penghantaran RM8.00; sepadan dengan kriteria penerimaan SRS |
| GWT-REQ-CHK-03-04 | Sempadan | Ahli aminah@example.test log masuk dengan sesi troli mengandungi P003 x 1, subtotal RM100.00, dan kod MEGA20 diterapkan | GET /api/cart dihantar dengan pengepala X-Session-Id dan Authorization | HTTP 200 dengan discount 25.00 (dipermoton daripada 30.00 kerana 10% + 20% = 30% melebihi had 25%), shipping 8.00 dan total 83.00. [ANDAIAN: SRS tidak menyatakan diskaun mana dikurangkan; diandaikan promoDiscount dikurangkan dahulu kepada 15.00 manakala memberDiscount kekal 10.00] | Sempadan had diskaun: jumlah peratus diskaun (30%) melebihi 25% daripada subtotal, jadi diskaun dihadkan kepada 25.00 |
| GWT-REQ-CHK-03-05 | Sempadan | Pelanggan tidak log masuk dengan sesi troli mengandungi P003 x 2, subtotal RM200.00, dan tiada kod promosi | GET /api/cart dihantar dengan pengepala X-Session-Id | HTTP 200 dengan discount 0, shipping 0 (penghantaran percuma kerana subtotal RM200.00 tepat pada sempadan) dan total 200.00 | Sempadan penghantaran percuma: subtotal = RM200.00 (nilai tepat pada sempadan) mendapat percuma |
| GWT-REQ-CHK-03-06 | Sempadan | Pelanggan tidak log masuk dengan sesi troli mengandungi P002 x 5 dan P004 x 1, subtotal RM199.95, dan tiada kod promosi | GET /api/cart dihantar dengan pengepala X-Session-Id | HTTP 200 dengan discount 0, shipping 8.00 (subtotal bawah RM200.00) dan total 207.95. [ANDAIAN: tiada kombinasi P001 hingga P006 menghasilkan subtotal RM199.99; RM199.95 ialah nilai pencapaian terdekat di bawah sempadan RM200.00] | Sempadan penghantaran percuma: subtotal bawah RM200.00 (nilai terdekat yang tercapai, RM199.95) dikenakan RM8.00 |

**Soalan untuk pemilik produk:**
1. Apabila diskaun ahli + diskaun promosi melebihi 25% daripada subtotal, diskaun mana yang dikurangkan dahulu: diskaun promosi, diskaun ahli atau berkadar kedua-duanya?
2. Adakah medan memberDiscount dan promoDiscount dalam respons /api/cart memaparkan nilai sebelum had atau selepas had dikenakan?
3. Adakah had 25% terpakai kepada gabungan kedua-dua jenis diskaun sahaja atau turut terpakai kepada diskaun individu yang mungkin melebihi 25%?

## REQ-CHK-04

**Teks asal:** Apabila paymentMethod ialah CARD, medan cardExpiry berformat MM/YY adalah wajib dan hendaklah bulan semasa atau kemudian. Kad yang tamat tempoh ditolak dengan 400 CARD_EXPIRED. Nilai yang tiada atau formatnya salah ditolak dengan 400 VALIDATION_ERROR.

**Masalah:** Ambiguiti: kaedah menentukan "bulan semasa" (sumber tarikh dan zon waktu) tidak dinyatakan walaupun tarikh semasa menentukan hasil sempadan keperluan ini, yang menjejaskan kebolehulangan ujian tempoh masa.

| Senario | Jenis | Given | When | Then | Partisi_Atau_Peraturan |
|---|---|---|---|---|---|
| GWT-REQ-CHK-04-01 | Positif | Sesi troli trainee-01 mengandungi P001 x 1 dan maklumat checkout sah (fullName Aminah binti Ali, email aminah@example.test, phone 0123456789, postcode 50480); sistem dalam keadaan baharu tanpa pesanan terdahulu [ANDAIAN]. Bulan semasa ialah September 2026 | POST /api/checkout dihantar dengan paymentMethod CARD dan cardExpiry 10/26 (satu bulan selepas bulan semasa) | HTTP 201 dengan orderId SF-1001 dan status NEW | Partisi sah: cardExpiry selepas bulan semasa (10/26) diterima |
| GWT-REQ-CHK-04-02 | Sempadan | Sesi troli trainee-01 mengandungi P001 x 1 dan maklumat checkout sah seperti GWT-REQ-CHK-04-01; bulan semasa ialah September 2026 | POST /api/checkout dihantar dengan paymentMethod CARD dan cardExpiry 09/26 (tepat bulan semasa) | HTTP 201 dengan orderId SF-1001 dan status NEW | Sempadan bawah tempoh sah: cardExpiry = bulan semasa (09/26) ialah nilai terkecil yang diterima; sepadan dengan kriteria penerimaan SRS |
| GWT-REQ-CHK-04-03 | Sempadan | Sesi troli trainee-01 mengandungi P001 x 1 dan maklumat checkout sah seperti GWT-REQ-CHK-04-01; bulan semasa ialah September 2026 | POST /api/checkout dihantar dengan paymentMethod CARD dan cardExpiry 08/26 (satu bulan sebelum bulan semasa) | HTTP 400 dengan error CARD_EXPIRED dan tiada pesanan diwujudkan | Sempadan bawah tempoh sah: cardExpiry satu bulan di bawah sempadan (08/26) ditolak sebagai kad tamat tempoh |
| GWT-REQ-CHK-04-04 | Negatif | Sesi troli trainee-01 mengandungi P001 x 1 dan maklumat checkout sah seperti GWT-REQ-CHK-04-01 | POST /api/checkout dihantar dengan paymentMethod CARD tetapi tanpa medan cardExpiry | HTTP 400 dengan error VALIDATION_ERROR dan medan cardExpiry disenaraikan sebagai wajib | Partisi tidak sah: cardExpiry wajib bagi CARD tetapi tiada; ditolak 400 VALIDATION_ERROR |
| GWT-REQ-CHK-04-05 | Negatif | Sesi troli trainee-01 mengandungi P001 x 1 dan maklumat checkout sah seperti GWT-REQ-CHK-04-01 | POST /api/checkout dihantar dengan paymentMethod CARD dan cardExpiry 13/27 (bulan tiada dalam 01 hingga 12) | HTTP 400 dengan error VALIDATION_ERROR dan tiada pesanan diwujudkan | Partisi tidak sah: cardExpiry tidak menepati format MM/YY (bulan 13); sepadan dengan kriteria penerimaan SRS |
| GWT-REQ-CHK-04-06 | Negatif | Sesi troli trainee-01 mengandungi P001 x 1 dan maklumat checkout sah seperti GWT-REQ-CHK-04-01 | POST /api/checkout dihantar dengan paymentMethod CARD dan cardExpiry kosong ("") | HTTP 400 dengan error VALIDATION_ERROR dan tiada pesanan diwujudkan | Partisi tidak sah: cardExpiry nilai kosong; sepadan dengan kriteria penerimaan SRS |

**Soalan untuk pemilik produk:**
1. Apakah sumber tarikh untuk menentukan "bulan semasa": jam pelayan (dan zon waktu yang mana) atau jam pelayar pelanggan?
2. Adakah kad berstatus bulan semasa kekal sah sepanjang bulan tersebut, tanpa mengira tarikh dalam bulan itu (contoh: 09/26 sah hingga akhir September 2026)?
3. Apakah tindakan sistem apabila cardExpiry dihantar tetapi paymentMethod ialah FPX atau EWALLET (SRS tidak menyatakan)?

## Rujukan
- [KRISAv2 Bab 3, 3.10 Penyediaan Spesifikasi Keperluan Sistem](../../../references/krisa-v2-beta-2026/BAB3-FASA-ANALISIS.pdf#page=42)
- [KRISAv2 Bab 6, 6.7 Dokumentasi Persediaan Ujian (senario dan kes ujian)](../../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=9)

## Semak manusia / Human check
1. Setiap "Then" boleh diukur secara objektif (kod status, kod ralat atau nilai medan) dan sepadan dengan SRS atau openapi.yaml.
2. Setiap [ANDAIAN] dan soalan pemilik produk dibawa kepada pemilik produk; jangan terima nilai yang diteka oleh AI.
3. Senario Sempadan menguji nilai tepat pada sempadan dan satu langkah di luar sempadan pada kedua-dua belah.