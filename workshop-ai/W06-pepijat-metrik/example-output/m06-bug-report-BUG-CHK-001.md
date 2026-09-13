# Laporan Ralat: Troli: Kuantiti 10 ditolak dengan VALIDATION_ERROR apabila menambah item melalui API

---

## A. Maklumat Pelaporan (PPrISA14)

| Medan | Isian |
|---|---|
| ID Ralat (ID Isu) | `BUG-CHK-001` |
| Nama Projek | ShopFast Checkout v1.0.0 |
| Dilaporkan oleh: Nama | Siti Aminah binti Mohd Razak |
| Jawatan | Jurutera SQA |
| Bahagian / Agensi | Perbadanan Usahawan Digital |
| Alamat E-mel | siti.aminah@example.test |
| Nombor Telefon | 0128765432 |
| Tarikh Pelaporan | 13/09/2026 |
| Tandatangan Pelapor | Siti Aminah binti Mohd Razak |

## B. Butiran Ralat (KRISAv2 6.3: perihal isu, modul terlibat)

| Medan | Isian |
|---|---|
| Tajuk | Troli: Kuantiti 10 ditolak dengan VALIDATION_ERROR apabila menambah item P002 |
| Perihal Isu (Keterangan Isu) | Permintaan `POST /api/cart/items` dengan `productId` P002 dan `quantity` 10 memulangkan kod status 400 dengan ralat `VALIDATION_ERROR`. Kuantiti 10 sepatutnya diterima kerana ia berada dalam julat 1 hingga 10 yang dibenarkan oleh keperluan REQ-CHK-01. |
| Modul Terlibat | Troli |
| Keperluan Berkaitan | REQ-CHK-01 |
| Kes Ujian Berkaitan | [TIADA ID DALAM SRS] (ujian UI: `tests/ui/m05-senario.spec.js`) |
| Persekitaran | ShopFast 1.0.0, http://localhost:3000, Microsoft Edge, Windows 11 |
| Kekerapan | Sentiasa |

**Langkah Menghasilkan Semula (Steps to Reproduce)**

1. Buka pelayar dan pastikan pelayan ShopFast berjalan di http://localhost:3000.
2. Hantar permintaan `POST /api/cart/items` dengan pengepala `X-Session-Id: trainee-01` dan badan permintaan JSON `{"productId": "P002", "quantity": 10}`.
3. Semak kod status dan respons yang dipulangkan.

**Data Ujian:** `X-Session-Id: trainee-01; badan permintaan JSON {"productId": "P002", "quantity": 10}`

**Hasil Dijangka (Expected):** Kod status 201 dan respons mengandungi item P002 dengan `quantity` 10 diterima dalam troli, selaras dengan REQ-CHK-01 yang menyatakan "Kuantiti bagi setiap item dalam troli hendaklah nombor bulat antara 1 hingga 10 (termasuk 1 dan 10)" dan kontrak API `openapi.yaml` yang mentakrifkan `quantity` dengan `minimum: 1` dan `maximum: 10`.

**Hasil Sebenar (Actual):** Kod status 400 dengan tindak balas JSON mengandungi `error: "VALIDATION_ERROR"`. Item tidak ditambah ke dalam troli.

**Bukti:** Lampirkan: (1) respons API penuh termasuk kod status dan badan JSON, (2) tangkapan skrin ujian `tests/ui/m05-senario.spec.js` yang gagal, (3) log binaan 1.0.0.

## C. Klasifikasi (KRISAv2 6.3: tahap keterukan, keutamaan, pihak bertanggungjawab)

### Tahap Keterukan (Severity), disalin daripada KRISAv2 Bab 6 Jadual 6.3

| Tahap Severity | Keterangan |
|---|---|
| 1 / Tinggi | Ralat kritikal yang menyebabkan kegagalan fungsi sistem seperti kehilangan data atau kegagalan fungsi utama (blocker / showstopper). |
| 2 / Sederhana | Ralat yang kritikal tetapi tidak melibatkan kehilangan data dan kegagalan fungsi sistem seperti output yang tidak sepadan atau laporan yang tidak tepat. |
| 3 / Rendah | Ralat yang tidak menjejaskan fungsi sistem seperti kesilapan ejaan dan label. |

### Keutamaan (Priority)

| Keutamaan | Maksud |
|---|---|
| P1 | Baiki segera; menyekat ujian, pelepasan atau melibatkan keselamatan dan data peribadi |
| P2 | Baiki dalam kitaran semasa sebelum gate seterusnya |
| P3 | Baiki apabila ada kapasiti atau dalam pelepasan akan datang |

| Medan | Isian |
|---|---|
| Severity | 2 / Sederhana |
| Keutamaan | P1 |
| Justifikasi Severity dan Keutamaan | **Severity 2 / Sederhana:** Ralat ini menyebabkan output yang tidak sepadan antara sistem sebenar dengan keperluan SRS. Kuantiti 10 adalah sah menurut REQ-CHK-01 tetapi ditolak. Tiada kehilangan data berlaku (Jadual 6.3 tahap 2: "output yang tidak sepadan"). **Keutamaan P1:** Ralat ini menyekat ujian automatik (`tests/ui/m05-senario.spec.js` gagal) dan menghalang pengujian modul troli serta Checkout yang bergantung padanya. Tanpa pembetulan, ujian integrasi dan UAT tidak boleh diteruskan. |
| Pihak Bertanggungjawab | Pasukan Pembangunan ShopFast |
| Tarikh Sasaran Pembetulan | 20/09/2026 |

## D. Impak dan Cadangan (PPrISA14 seksyen 1 hingga 3)

| Medan | Isian |
|---|---|
| Impak terhadap projek | **Pengguna:** Pelanggan tidak boleh menambah kuantiti maksimum (10) sesuatu produk ke troli, menjejaskan pengalaman membeli dalam kuantiti besar. **Jadual:** Ujian automatik dan UI terjejas; gate review tertangguh sehingga troli berfungsi. **Pematuhan:** Tidak mematuhi kontrak API dan SRS. |
| Cadangan Penyelesaian | Semak logik pengesahan kuantiti dalam pengendali `POST /api/cart/items`. Pastikan semakan `quantity >= 1 && quantity <= 10` tidak menggunakan operator `>` atau `<` secara tidak betul. |
| Lampiran disertakan | Ya |

## E. Untuk Diisi oleh Pengurus Projek (PPrISA14 halaman 2)

| Tarikh Diterima | Analisis Impak | Impak (Tinggi / Sederhana / Rendah) | Keutamaan (Tinggi / Sederhana / Rendah) | Keputusan | Pegawai Bertanggungjawab |
|---|---|---|---|---|---|
| | | | | | |

Disahkan oleh: Pengurus Projek `<nama rekaan>`, Jawatan `<isi>`, Tarikh `<isi>`

## F. Status dan Ujian Semula (KRISAv2 6.3: re-test)

| Tarikh | Status | Oleh | Catatan (versi binaan, keputusan ujian semula, ujian regresi) |
|---|---|---|---|
| 13/09/2026 | Baru | Siti Aminah binti Mohd Razak | Binaan 1.0.0; ujian UI `m05-senario.spec.js` gagal |

---

## Rujukan

- [KRISAv2 Bab 6, 6.3 Pengurusan Ralat](../../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=2)
- [KRISAv2 Bab 6, Jadual 6.3 Contoh Tahap Severity Hasil Ujian](../../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=7)
- [PPrISA14 Borang Pelaporan Isu](../../../references/pprisa-2.0/templates/pdf/PPrISA14-Borang_Pelaporan_Isu.pdf)

## Semak manusia / Human check
1. Hasilkan semula ralat sekali lagi menggunakan langkah dalam laporan dan lampirkan bukti sebenar.
2. Sahkan hasil dijangka benar-benar dinyatakan dalam SRS atau openapi.yaml; jika tidak, ia mungkin jurang keperluan dan bukan ralat.
3. Severity mengikut takrif Jadual 6.3 dan keutamaan dipersetujui bersama pemilik produk, bukan diterima terus daripada AI.
