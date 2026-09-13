# Templat Laporan Ralat (Bug Report)

> **Templat ini mencerminkan (mirrors):**
> - KRISAv2 Bab 6, 6.3 Pengurusan Ralat (Defect Management): [BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf, halaman 2](../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=2)
> - KRISAv2 Bab 6, Jadual 6.3 Contoh Tahap Severity Hasil Ujian: [halaman 7](../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=7)
> - PPrISA14 Borang Pelaporan Isu (Issue Submission Form): [PDF](../../references/pprisa-2.0/templates/pdf/PPrISA14-Borang_Pelaporan_Isu.pdf), [Word](../../references/pprisa-2.0/templates/word/PPrISA14-BorangPelaporanIsu.doc)
> - Log berkaitan: PPrISA15 Log Penyelesaian Isu: [PDF](../../references/pprisa-2.0/templates/pdf/PPrISA15-Log_Penyelesaian_Isu.pdf)
>
> Cara guna: satu laporan bagi setiap ralat. ID ralat `BUG-CHK-001` dan seterusnya. Gunakan nama, emel (`@example.test`) dan nombor telefon rekaan sahaja.

---

## A. Maklumat Pelaporan (PPrISA14)

| Medan | Isian |
|---|---|
| ID Ralat (ID Isu) | `BUG-CHK-<nnn>` |
| Nama Projek | `<contoh: ShopFast Checkout v1.1>` |
| Dilaporkan oleh: Nama | `<nama rekaan>` |
| Jawatan | `<isi>` |
| Bahagian / Agensi | `<isi>` |
| Alamat E-mel | `<nama>@example.test` |
| Nombor Telefon | `<nombor rekaan>` |
| Tarikh Pelaporan | `<hh/bb/tttt>` |
| Tandatangan Pelapor | `<pengesahan digital atau nama>` |

## B. Butiran Ralat (KRISAv2 6.3: perihal isu, modul terlibat)

| Medan | Isian |
|---|---|
| Tajuk | `<ringkas dan spesifik: apa gagal, di mana, dalam keadaan apa>` |
| Perihal Isu (Keterangan Isu) | `<penerangan>` |
| Modul Terlibat | `<Katalog / Troli / Checkout / Pesanan / Log Masuk / Operasi>` |
| Keperluan Berkaitan | `<REQ-CHK-xx atau FR-xx persis daripada SRS>` |
| Kes Ujian Berkaitan | `<TC-CHK-xxx>` |
| Persekitaran | `<versi aplikasi, URL, pelayar dan versi, sistem pengoperasian>` |
| Kekerapan | `<Sentiasa / Kadang-kadang / Sekali>` |

**Langkah Menghasilkan Semula (Steps to Reproduce)**

1. `<langkah 1>`
2. `<langkah 2>`
3. `<langkah 3>`

**Data Ujian:** `<contoh: X-Session-Id=trainee-01; badan permintaan JSON>`

**Hasil Dijangka (Expected):** `<menurut keperluan dan kriteria penerimaan SRS>`

**Hasil Sebenar (Actual):** `<apa yang berlaku; sertakan kod status dan respons JSON>`

**Bukti:** `<tangkapan skrin, log, respons API, laporan Playwright atau Newman>`

## C. Klasifikasi (KRISAv2 6.3: tahap keterukan, keutamaan, pihak bertanggungjawab)

### Tahap Keterukan (Severity), disalin daripada KRISAv2 Bab 6 Jadual 6.3

| Tahap Severity | Keterangan |
|---|---|
| 1 / Tinggi | Ralat kritikal yang menyebabkan kegagalan fungsi sistem seperti kehilangan data atau kegagalan fungsi utama (blocker / showstopper). |
| 2 / Sederhana | Ralat yang kritikal tetapi tidak melibatkan kehilangan data dan kegagalan fungsi sistem seperti output yang tidak sepadan atau laporan yang tidak tepat. |
| 3 / Rendah | Ralat yang tidak menjejaskan fungsi sistem seperti kesilapan ejaan dan label. |

### Keutamaan (Priority)

Severity ialah kesan teknikal; keutamaan ialah kesegeraan bisnes untuk membaiki (KRISAv2 6.6 Langkah 5 g).

| Keutamaan | Maksud |
|---|---|
| P1 | Baiki segera; menyekat ujian, pelepasan atau melibatkan keselamatan dan data peribadi |
| P2 | Baiki dalam kitaran semasa sebelum gate seterusnya |
| P3 | Baiki apabila ada kapasiti atau dalam pelepasan akan datang |

| Medan | Isian |
|---|---|
| Severity | `<1 / Tinggi, 2 / Sederhana atau 3 / Rendah>` |
| Keutamaan | `<P1 / P2 / P3>` |
| Justifikasi Severity dan Keutamaan | `<isi>` |
| Pihak Bertanggungjawab | `<pasukan atau pegawai rekaan>` |
| Tarikh Sasaran Pembetulan | `<hh/bb/tttt>` |

## D. Impak dan Cadangan (PPrISA14 seksyen 1 hingga 3)

| Medan | Isian |
|---|---|
| Impak terhadap projek | `<pengguna, kewangan, jadual, pematuhan>` |
| Cadangan Penyelesaian | `<isi>` |
| Lampiran disertakan | Ya / Tidak |

## E. Untuk Diisi oleh Pengurus Projek (PPrISA14 halaman 2)

| Tarikh Diterima | Analisis Impak | Impak (Tinggi / Sederhana / Rendah) | Keutamaan (Tinggi / Sederhana / Rendah) | Keputusan | Pegawai Bertanggungjawab |
|---|---|---|---|---|---|
| `<isi>` | `<isi>` | `<isi>` | `<isi>` | `<isi>` | `<isi>` |

Disahkan oleh: Pengurus Projek `<nama rekaan>`, Jawatan `<isi>`, Tarikh `<isi>`

## F. Status dan Ujian Semula (KRISAv2 6.3: re-test)

Kitar hayat status: **Baru**, **Disahkan (Triaged)**, **Dalam Pembetulan**, **Sedia Diuji Semula**, **Ditutup**; atau **Dibuka Semula**, **Ditolak**, **Ditangguhkan**.

| Tarikh | Status | Oleh | Catatan (versi binaan, keputusan ujian semula, ujian regresi) |
|---|---|---|---|
| `<isi>` | Baru | `<isi>` | `<isi>` |

---

## Contoh Pengisian Ringkas (fiktif, format sahaja)

| Medan | Isian |
|---|---|
| ID Ralat | BUG-CHK-001 |
| Tajuk | Label butang "Guna Kod" pada panel troli tertulis "Guna Kood" |
| Modul Terlibat | Troli |
| Keperluan Berkaitan | REQ-CHK-02 |
| Persekitaran | ShopFast 1.1.0, http://localhost:3000, Microsoft Edge, Windows 11 |
| Langkah | 1. Buka http://localhost:3000; 2. Tambah P002 ke troli; 3. Lihat butang di sebelah medan kod promosi |
| Hasil Dijangka | Label "Guna Kod" |
| Hasil Sebenar | Label "Guna Kood" |
| Severity / Keutamaan | 3 / Rendah; P3 |
| Justifikasi | Kesilapan ejaan label; fungsi kod promosi tidak terjejas (Jadual 6.3 tahap 3) |
