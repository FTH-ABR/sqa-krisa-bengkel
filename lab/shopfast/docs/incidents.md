# Kisah Insiden Produksi (Production Incident Stories)

> Bahan Modul 1: Minda Kualiti. Semua agensi, sistem, angka dan kos di bawah adalah **fiktif** tetapi realistik, disusun untuk perbincangan.
> Setiap kisah berlaku pada platform e-dagang sektor awam yang serupa dengan ShopFast.
> Rujukan: [KRISAv2 Bab 1, 1.6.4 Jaminan Kualiti Perisian (SQA)](../../../references/krisa-v2-beta-2026/BAB1-PERANCANGAN.pdf#page=19) dan [KRISAv2 Bab 1, Jadual 1.4 Jenis Pengujian IV&V](../../../references/krisa-v2-beta-2026/BAB1-PERANCANGAN.pdf#page=22).

## Ringkasan

| ID | Insiden | Fasa Kecacatan Disuntik (Injected) | Fasa Dikesan (Detected) | Kos Anggaran (RM) |
|---|---|---|---|---|
| INS-01 | Diskaun jualan Raya digunakan dua kali | Reka Bentuk | Produksi | 81,600 |
| INS-02 | Poskod Sabah dan Sarawak ditolak | Analisis Keperluan | Produksi | 117,750 |
| INS-03 | Masa tamat FPX mencipta pesanan berganda | Reka Bentuk | Produksi | 58,300 |
| INS-04 | Beza RM0.01 dengan penyata bank | Pembangunan | Operasi (penyelarasan bulanan) | 36,800 |
| INS-05 | Kemas kini Jumaat petang menyembunyikan butang checkout | Pembangunan dan Pengurusan Perubahan | Produksi | 42,000 |
| | **Jumlah** | | | **336,450** |

---

## INS-01: Diskaun jualan Raya digunakan dua kali

**Sistem:** PasarNiaga (fiktif), Agensi Pemasaran Desa (fiktif)

Pada pagi pertama kempen Jualan Raya, kod promosi 20% diiklankan di media sosial. Ramai pelanggan menekan butang "Guna" dua kali kerana halaman lambat. Dua permintaan tiba hampir serentak dan kedua-duanya menambah diskaun ke troli yang sama, jadi pelanggan mendapat 40% dan bukannya 20%. Keperluan menyatakan "satu kod promosi bagi setiap troli" (setara REQ-CHK-02 ShopFast), tetapi reka bentuk tidak menyatakan bagaimana permintaan serentak dikendalikan dan tiada kes ujian untuk tekanan berganda (double submit).

| Perkara | Butiran |
|---|---|
| Tempoh sebelum dikesan | 9 jam (dikesan oleh Unit Kewangan kerana margin jualan negatif) |
| Pesanan terjejas | 4,200 |
| Kos | Diskaun berlebihan RM75,600 (purata RM18 setiap pesanan); kerja lebih masa khidmat pelanggan RM6,000 |
| Fasa disuntik | Reka Bentuk: tiada peraturan idempotensi untuk operasi guna kod |
| Pengajaran | Semakan reka bentuk perlu bertanya "apa berlaku jika permintaan ini dihantar dua kali?" |

## INS-02: Poskod Sabah dan Sarawak ditolak

**Sistem:** NiagaNusantara (fiktif), Perbadanan Kraf Tangan Bersepadu (fiktif)

Borang checkout menolak poskod yang bermula dengan 88 hingga 98. Pembangun mengesahkan poskod menggunakan senarai julat yang disalin daripada contoh data dalam BRS, dan contoh itu hanya mengandungi alamat di Semenanjung. Keperluan hanya menulis "poskod Malaysia yang sah" tanpa sumber data rujukan. Ujian UAT dijalankan oleh pegawai di Putrajaya menggunakan alamat pejabat masing-masing, jadi tiada siapa mencuba poskod Sabah atau Sarawak.

| Perkara | Butiran |
|---|---|
| Tempoh sebelum dikesan | 3 minggu (aduan melalui media sosial daripada usahawan di Tawau dan Miri) |
| Kesan | 1,150 checkout ditinggalkan |
| Kos | Anggaran jualan hilang RM109,250 (purata RM95 setiap pesanan); pembetulan segera (hotfix) dan ujian semula RM8,500 |
| Fasa disuntik | Analisis Keperluan: keperluan tidak lengkap dan data ujian tidak mewakili semua negeri |
| Pengajaran | Partisi kesetaraan (equivalence partitioning) mesti meliputi semua kumpulan pengguna sebenar, bukan hanya data yang mudah didapati |

## INS-03: Masa tamat FPX mencipta pesanan berganda

**Sistem:** eKedaiPKS (fiktif), Majlis Usahawan Muda (fiktif)

Pada malam gaji, gerbang pembayaran mengambil masa sehingga 30 saat untuk membalas. Aplikasi web menetapkan masa tamat (timeout) 15 saat dan secara automatik mencuba semula checkout. Setiap cubaan semula mencipta pesanan baharu dan permintaan bayaran baharu. Sebahagian pelanggan dicaj dua kali. Reka bentuk hanya menerangkan aliran bayaran berjaya; keadaan bayaran lambat, gagal atau tamat masa tidak direka bentuk dan tiada kunci idempotensi (idempotency key).

| Perkara | Butiran |
|---|---|
| Tempoh sebelum dikesan | 2 hari |
| Transaksi terjejas | 612 caj berganda |
| Kos | Pemprosesan bayaran balik RM2,450; penyelarasan manual oleh 3 pegawai kewangan selama 10 hari RM18,850; pampasan baucar RM30,600; audit dalaman RM6,400 |
| Fasa disuntik | Reka Bentuk: laluan ralat (error path) dan keadaan PAYMENT_FAILED tidak direka bentuk |
| Pengajaran | Setiap integrasi pihak ketiga perlu reka bentuk dan ujian untuk laluan lambat, gagal dan berulang |

## INS-04: Beza RM0.01 dengan penyata bank

**Sistem:** MyTaniMart (fiktif), Lembaga Pasaran Hasil Tani (fiktif)

Jumlah bayaran dikira menggunakan nombor titik apungan (floating point). Bagi sesetengah kombinasi harga dan diskaun, API membundarkan RM150.005 kepada RM150.00 manakala aplikasi web membundarkannya kepada RM150.01, dan jumlah yang dihantar ke gerbang pembayaran berbeza daripada jumlah dalam rekod pesanan. Unit Kewangan mendapati 9% transaksi bulan itu tidak sepadan dengan penyata bank semasa penyelarasan hujung bulan.

| Perkara | Butiran |
|---|---|
| Tempoh sebelum dikesan | 5 minggu |
| Transaksi terjejas | 3,870 |
| Kos | Penyelarasan manual RM24,300; pembetulan kod dan ujian regresi RM9,200; teguran audit dan laporan penjelasan RM3,300 |
| Fasa disuntik | Pembangunan: jenis data yang salah untuk wang dan tiada ujian unit untuk nilai sempadan pembundaran |
| Pengajaran | Peraturan pembundaran mesti dinyatakan dalam SRS dan diuji dengan nilai sempadan seperti .005 |

## INS-05: Kemas kini Jumaat petang menyembunyikan butang checkout

**Sistem:** SuqDigital (fiktif), Yayasan Ekonomi Komuniti (fiktif)

Satu kemas kini kecil pada pustaka antara muka (UI library) dipasang (deploy) pada jam 5:30 petang Jumaat tanpa Borang Permohonan Pindaan dan tanpa ujian regresi. Pembangun hanya menyemak halaman pada monitor komputer. Pada skrin telefon pintar yang lebarnya kurang daripada 400 px, butang "Buat Pesanan" terlindung di bawah panel troli dan tidak boleh ditekan. 62% pelanggan membeli melalui telefon pintar. Tiada pelan undur (rollback plan) dan pembangun yang terlibat sedang bercuti.

| Perkara | Butiran |
|---|---|
| Tempoh sebelum dipulihkan | 2 hari 6 jam |
| Kesan | Jualan melalui telefon pintar jatuh 85% sepanjang hujung minggu |
| Kos | Anggaran jualan hilang RM26,500; kerja lebih masa pasukan teknikal hujung minggu RM11,000; lanjutan kempen jualan RM4,500 |
| Fasa disuntik | Pembangunan (perubahan kod) dan Pengurusan Perubahan (tiada analisis impak, ujian regresi merentas peranti dan pelan undur) |
| Pengajaran | Setiap perubahan, walaupun kecil, perlu melalui kawalan pindaan, ujian regresi automatik pada saiz skrin sasaran dan pelan undur |

---

## Soalan Perbincangan (Modul 1)

1. Bagi setiap insiden, pada fasa SDLC manakah kecacatan paling murah untuk dikesan? Aktiviti SQA apakah yang sepatutnya mengesannya (semakan keperluan, semakan reka bentuk, ujian unit, UAT, kawalan perubahan)?
2. Jika kos membetulkan kecacatan meningkat kira-kira 10 kali ganda bagi setiap fasa kemudian, anggarkan kos INS-02 jika dikesan semasa semakan BRS.
3. Insiden manakah berpunca daripada proses, bukan kod? Apakah bukti yang seorang juruaudit akan minta?
4. Kenal pasti satu risiko serupa dalam ShopFast dengan membaca [SRS-ShopFast.md](SRS-ShopFast.md) dan [architecture.md](architecture.md).
