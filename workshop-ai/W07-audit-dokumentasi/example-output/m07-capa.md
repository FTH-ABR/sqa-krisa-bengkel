# Tindakan Pembetulan dan Pencegahan (CAPA) Laporan Audit m02 dan m04

> **Mencerminkan (mirrors):**
> - PPrISA08 Pelan Pengurusan Isu: [PDF](../../../references/pprisa-2.0/templates/pdf/PPrISA08-Pelan_Pengurusan_Isu.pdf)
> - PPrISA15 Log Penyelesaian Isu: [PDF](../../../references/pprisa-2.0/templates/pdf/PPrISA15-Log_Penyelesaian_Isu.pdf)
> - PPrISA14 Borang Pelaporan Isu (Analisis Impak, Keutamaan, Keputusan): [PDF](../../../references/pprisa-2.0/templates/pdf/PPrISA14-Borang_Pelaporan_Isu.pdf)
> - PPrISA 2.0, 5.4.2 i b) Isu: Borang Pelaporan dan Log Penyelesaian Isu: [halaman 92](../../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=92)
>
> Sumber: Laporan Audit `outputs/m07-audit.md` (7 penemuan: 2 NC Major, 3 NC Minor, 2 OFI).
> CAPA dikelompok mengikut punca akar. Setiap CAPA menutup satu kluster NC berkaitan.
> ID: CAPA-001 hingga CAPA-003.

---

## CAPA-001: RTM Tidak Melengkapkan Keterjejakan dan Liputan

### 1. Maklumat CAPA

| Medan | Isian |
|---|---|
| ID CAPA | CAPA-001 |
| Sumber | AUD-01 (NC Major, AU-03), AUD-02 (NC Major, AU-03), AUD-03 (NC Minor, AU-03) |
| Tarikh dibuka | 13/09/2026 |
| Pemilik CAPA | Jurutera SQA (nama rekaan) |
| Keperluan / proses terjejas | RTM (`outputs/m02-rtm.csv`), proses semakan keterjejakan (KRISAv2 Bab 2, 2.11 [F1.8]) |
| Impak | Tinggi: keterjejakan dua hala gagal; liputan tidak dapat disahkan; keputusan Gate G3 terhalang |
| Keutamaan | Tinggi: 2 NC Major dan 1 NC Minor dalam satu audit berurutan |

### 2. Penerangan Ketakakuran (Nonconformity)

Ketiga-tiga penemuan ini berkaitan dengan kegagalan RTM (`outputs/m02-rtm.csv`) memainkan peranan sebagaimana yang ditetapkan dalam KRISAv2 Bab 2, 2.11:

**AUD-01 (NC Major):** Semua 6 baris RTM mempunyai `Test_Case_IDs` kosong, `Defect_IDs` kosong dan `Coverage` "Tiada", walaupun 10 kes ujian (`TC-CHK-001` hingga `TC-CHK-010`) telah disediakan dalam `outputs/m04-testcases.csv` bagi `REQ-CHK-01` dan `REQ-CHK-03`, dan satu laporan ralat (`BUG-CHK-001`) wujud bagi `REQ-CHK-01`.

**AUD-02 (NC Major):** RTM hanya memetakan 6 keperluan (`REQ-CHK-01` hingga `REQ-CHK-06`). `FR-01` hingga `FR-12` (SRS 2.5, baris 118 hingga 129) dan `NFR-01` hingga `NFR-08` (SRS 6.1, baris 301 hingga 311) tiada baris. `BR-01` dan `BR-07` tiada keperluan dipetakan.

**AUD-03 (NC Minor):** Status pelaksanaan kekal "Belum Diuji" (`outputs/m02-rtm.csv`) dan "Belum Dilaksana" (`outputs/m04-testcases.csv`) walaupun ujian telah dijalankan (18 keputusan direkodkan dalam `outputs/m06-metrics.csv` QM-01: 13 lulus, 5 gagal). `outputs/m07-test-summary.md` baris 79 dan 137 menggelar jurang ini sebagai "jurang dokumentasi".

Bukti objektif: `outputs/m02-rtm.csv` baris 2 hingga 7; `outputs/m04-testcases.csv` baris 2 hingga 11; `outputs/m06-metrics.csv` QM-01; `outputs/m07-test-summary.md` baris 79 dan 137; `templates/RTM-guide.md` seksyen 4 dan 5.

### 3. Tindakan Pembendungan Segera (Containment)

| Tindakan | Oleh | Tarikh | Status |
|---|---|---|---|
| Kemas kini `outputs/m02-rtm.csv`: isi `Test_Case_IDs` bagi `REQ-CHK-01` (TC-CHK-001 hingga 006) dan `REQ-CHK-03` (TC-CHK-007 hingga 010); isi `Defect_IDs` bagi `REQ-CHK-01` (BUG-CHK-001) | Jurutera SQA | 15/09/2026 | Terbuka |
| Kemas kini `Coverage` mengikut formula dalam `templates/RTM-guide.md` seksyen 4: "Diliputi" jika semua kriteria penerimaan mempunyai kes ujian | Jurutera SQA | 15/09/2026 | Terbuka |
| Kemas kini `Status` dan `Keputusan` dalam `outputs/m02-rtm.csv` dan `outputs/m04-testcases.csv` mengikut keputusan sebenar ujian | Jurutera SQA | 15/09/2026 | Terbuka |

### 4. Analisis Punca Akar (Root Cause Analysis)

#### 4.1 Kaedah 5 Mengapa (5 Whys)

| Mengapa | Jawapan |
|---|---|
| 1. Mengapa RTM tidak mengaitkan kes ujian, ralat dan liputan? | Kerana kolum `Test_Case_IDs`, `Defect_IDs` dan `Coverage` dibiarkan kosong selepas kes ujian disediakan |
| 2. Mengapa kolum tersebut dibiarkan kosong? | Kerana tiada checkpoint wajib yang mengesahkan RTM dikemas kini sebelum Gate G3 |
| 3. Mengapa tiada checkpoint wajib itu? | Kerana arahan dalam `templates/RTM-guide.md` seksyen 3 Langkah 3 dan 4 tidak dilaksanakan sebagai senarai semak semula (review checklist) |
| 4. Mengapa ia tidak dilaksanakan? | Kerana tiada skrip atau prosedur automatik yang mengesahkan setiap baris RTM mempunyai maklumat lengkap sebelum status "Selesai" ditetapkan |
| 5. Mengapa tiada skrip atau prosedur itu? | Kerana aliran kerja ujian tidak menyepadukan kemas kini RTM sebagai aktiviti mandatori dalam kitaran ujian; pengisian RTM dianggap sebagai kerja selepas pasca-ujian, bukan sebahagian daripada aliran kerja |

#### 4.2 Kategori Punca (Fishbone ringkas)

| Kategori | Punca Berkemungkinan | Disahkan (Ya / Tidak) |
|---|---|---|
| Manusia (kemahiran, beban kerja) | Jurutera SQA tidak pasti bila dan bagaimana mengemas kini RTM selepas pelaksanaan ujian | Tidak |
| Kaedah (proses, templat, senarai semak) | Arahan dalam RTM-guide tidak dijadikan checkpoint wajib; tiada aliran kerja yang menyepadukan kemas kini RTM dengan pelaksanaan ujian | Ya |
| Alat (CI, alat ujian, persekitaran) | Tiada alat pengesahan automatik untuk memeriksa kelengkapan RTM sebelum gate | Tidak |
| Bahan (keperluan, data ujian) | Tiada |
| Ukuran (metrik, kriteria keluar) | Kriteria keluar Gate G3 tidak memasukkan pengesahan liputan RTM secara eksplisit | Tidak |
| Persekitaran (jadual, organisasi) | Tiada |

**Punca akar yang disahkan:** Tiada proses wajib (mandatory review checkpoint) yang menghubungkan pelaksanaan ujian dengan kemas kini RTM, termasuk pengesahan liputan dan penjejakan ralat secara wajib sebelum Gate G3.

### 5. Tindakan Pembetulan (Corrective Action)

Membetulkan punca akar supaya masalah yang sama tidak berulang.

| Bil | Tindakan | Pemilik | Tarikh Sasaran | Status |
|---|---|---|---|---|
| 1 | Tambah checkpoint wajib dalam `templates/RTM-guide.md` seksyen 3: setiap baris RTM mesti mempunyai `Test_Case_IDs`, `Status` dan `Coverage` dikemas kini sebelum ujian dianggap selesai | Jurutera SQA | 22/09/2026 [ANDAIAN: 7 hari bekerja] | Terbuka |
| 2 | Tambah item semakan "Liputan RTM = 100%" dalam kriteria keluar Gate G3, selaras dengan metrik QM-01 (kadar lulus) dan semakan jurang `templates/RTM-guide.md` seksyen 5 | Jurutera SQA | 22/09/2026 [ANDAIAN: 7 hari bekerja] | Terbuka |
| 3 | Tambah baris RTM bagi setiap FR-01 hingga FR-12 dan NFR-01 hingga NFR-08 dengan `BR_ID` induk, laksana semakan jurang hadapan dan belakang mengikut `templates/RTM-guide.md` seksyen 5 | Jurutera SQA | 27/09/2026 [ANDAIAN: 14 hari bekerja] | Terbuka |

### 6. Tindakan Pencegahan (Preventive Action)

Mencegah masalah serupa di modul, projek atau proses lain.

| Bil | Tindakan | Pemilik | Tarikh Sasaran | Status |
|---|---|---|---|---|
| 1 | Tambah semakan automatik (CI lint): skrip skrip mesti mengesahkan tiada baris `Coverage` "Tiada" dalam RTM sebelum pelaporan liputan | Jurutera SQA | 11/10/2026 [ANDAIAN: 30 hari bekerja] | Terbuka |
| 2 | Standardkan templat RTM (`templates/RTM-template.csv`) dengan panduan pengisian automatik bagi setiap lajur, termasuk formula `Coverage` dalam `templates/RTM-guide.md` seksyen 4 | Jurutera SQA | 11/10/2026 [ANDAIAN: 30 hari bekerja] | Terbuka |
| 3 | Tambah item "Pengesahan liputan keterjejakan" dalam PPrISA05 Pelan Pengurusan Kualiti sebagai aktiviti wajib sebelum gate review | Jurutera SQA | 11/10/2026 [ANDAIAN: 30 hari bekerja] | Terbuka |

### 7. Pengesahan Keberkesanan (Effectiveness Verification)

| Kriteria Keberkesanan | Kaedah Pengesahan | Tarikh Semakan | Keputusan |
|---|---|---|---|
| Tiada baris RTM dengan `Test_Case_IDs` kosong atau `Coverage` "Tiada" selepas pelaksanaan ujian | Semak `outputs/m02-rtm.csv` dan pengesahan gap mengikut `templates/RTM-guide.md` seksyen 5 | 01/11/2026 [ANDAIAN: 30 hari bekerja dari tarikh pembetulan] | Belum Dinilai |
| Metrik QM-01 mencatat kadar lulus sekurang-kurangnya 95.0% dalam kitaran ujian seterusnya | Semak `outputs/m06-metrics.csv` QM-01 | 01/11/2026 | Belum Dinilai |
| Kriteria keluar Gate G3 dipenuhi sepenuhnya dengan bukti liputan keterjejakan | Semak `outputs/m09-quality-gate.md` | 01/11/2026 | Belum Dinilai |

### 8. Penutupan

| Medan | Isian |
|---|---|
| Keputusan | Dibuka |
| Disahkan oleh | `<nama rekaan>` (Pengurus Projek) |
| Tarikh ditutup | `<selepas pengesahan keberkesanan>` |

---

## CAPA-002: Ketidaktepatan ID Keperluan dan Data Ujian dalam Dokumen m04

### 1. Maklumat CAPA

| Medan | Isian |
|---|---|
| ID CAPA | CAPA-002 |
| Sumber | AUD-04 (NC Minor, AU-02), AUD-05 (NC Minor, AU-02) |
| Tarikh dibuka | 13/09/2026 |
| Pemilik CAPA | Jurutera Ujian (nama rekaan) |
| Keperluan / proses terjejas | Kes ujian (`outputs/m04-testcases.csv`), proses semakan SRS (`shopfast/docs/SRS-ShopFast.md`) |
| Impak | Sederhana: kes ujian tidak konsisten dengan SRS; pautan keterjejakan pecah antara m04 dan m05 |
| Keutamaan | Sederhana: 2 NC Minor dalam kategori AU-02 (setiap keperluan mempunyai ID unik dan kriteria penerimaan yang boleh diuji) |

### 2. Penerangan Ketakakuran (Nonconformity)

**AUD-04 (NC Minor):** `outputs/m04-testcases.csv` menggunakan `FR_ID` berbentuk `REQ-CHK-001` dan `REQ-CHK-003`, sedangkan `shopfast/docs/SRS-ShopFast.md` menulis `REQ-CHK-01` dan `REQ-CHK-03`. Ini melanggar nota `templates/Test-Cases-D13.csv` baris 4 (FR_ID mesti ID persis daripada SRS) dan pecahkan keterjejakan dengan `outputs/m02-rtm.csv` yang menulis ID betul.

**AUD-05 (NC Minor):** Tiga ketidaktepatan data ujian dan jangkaan:
- TC-CHK-001 tajuk "Kuantiti 2 diterima" tetapi data kuantiti 1 dan jangkaan "kuantiti dalam respons ialah 1"; Teknik "Sah" bukan nilai sah templat (EP/BVA/Decision Table/State Transition/Use Case/Error Guessing).
- TC-CHK-007 prasyarat "P001 x 2 (subtotal 179.80)" tetapi jangkaan subtotal 200.00, sedangkan FR-03 menetapkan P001 x 2 = 179.80.
- TC-CHK-009 menuntut P002 x 2 = subtotal 100.00 padahal `outputs/m05-api-tests.md` nota mengesahkan P002 = RM35.00 (subtotal 70.00) dan skrip m05 telah selaraskan data ke P003.

Bukti objektif: `outputs/m04-testcases.csv` baris 2, 8, 10; `shopfast/docs/SRS-ShopFast.md` FR-03 (baris 120) dan REQ-CHK-03 (baris 109); `outputs/m05-api-tests.md` baris 20.

### 3. Tindakan Pembendungan Segera (Containment)

| Tindakan | Oleh | Tarikh | Status |
|---|---|---|---|
| Tukar `FR_ID` dalam `outputs/m04-testcases.csv` kepada ID persis SRS: `REQ-CHK-01` dan `REQ-CHK-03` | Jurutera Ujian | 15/09/2026 | Terbuka |
| Selaraskan `outputs/m04-testcases.csv` dengan `outputs/m05-api-tests.md`: betulkan tajuk TC-CHK-001, nilai Teknik dan data prasyarat TC-CHK-007 dan TC-CHK-009 mengikut harga sebenar produk | Jurutera Ujian | 15/09/2026 | Terbuka |

### 4. Analisis Punca Akar (Root Cause Analysis)

#### 4.1 Kaedah 5 Mengapa (5 Whys)

| Mengapa | Jawapan |
|---|---|
| 1. Mengapa ID keperluan dalam m04 tidak persis dengan SRS? | Kerana penulis m04 menganggap `REQ-CHK-001` dan `REQ-CHK-01` adalah sama dan tidak disemak secara sistematik |
| 2. Mengapa penganggapan ini berlaku? | Kerana tiada pengesahan automatik atau senarai semak yang membandingkan `FR_ID` dalam m04 dengan ID dalam SRS sebelum kes ujian dilaksanakan |
| 3. Mengapa tiada pengesahan itu? | Kerana proses penyediaan kes ujian berakhir pada penyediaan fail CSV tanpa checkpoint pengesahan silang (cross-reference) dengan SRS |
| 4. Mengapa checkpoint pengesahan silang tidak wujud? | Kerana aliran kerja semakan SRS dan penyediaan kes ujian dijalankan secara berasingan tanpa kaitan formal antara satu sama lain |
| 5. Mengapa aliran kerja itu berasingan? | Kerana tiada prosedur yang mentakrifkan semakan semula dokumen (document review) sebagai aktiviti wajib sebelum pelaksanaan ujian bermula |

#### 4.2 Kategori Punca (Fishbone ringkas)

| Kategori | Punca Berkemungkinan | Disahkan (Ya / Tidak) |
|---|---|---|
| Manusia (kemahiran, beban kerja) | Penulis m04 tidak disemak oleh penyelia sebelum kes ujian dilaksanakan | Tidak |
| Kaedah (proses, templat, senarai semak) | Tiada checkpoint pengesahan silang ID keperluan dengan SRS sebelum pelaksanaan; tiada panduan khusus tentang nilai sah lajur Teknik | Ya |
| Alat (CI, alat ujian, persekitaran) | Tiada skrip pengesahan automatik untuk memeriksa kesahan ID keperluan dalam fail ujian | Tidak |
| Bahan (keperluan, data ujian) | Data ujian (harga, kuantiti) tidak disahkan terhadap SRS sebelum digunakan | Tidak |
| Ukuran (metrik, kriteria keluar) | Tiada |
| Persekitaran (jadual, organisasi) | Tiada |

**Punca akar yang disahkan:** Tiada prosedur semakan semula dokumen yang mewajibkan pengesahan silang (cross-reference) ID keperluan, data ujian dan kriteria penerimaan dengan SRS sebelum pelaksanaan ujian.

### 5. Tindakan Pembetulan (Corrective Action)

Membetulkan punca akar supaya masalah yang sama tidak berulang.

| Bil | Tindakan | Pemilik | Tarikh Sasaran | Status |
|---|---|---|---|---|
| 1 | Tambah checkpoint "Semakan SRS" dalam `templates/Test-Cases-D13.csv`: penulis mesti mengesahkan setiap `FR_ID` sepadan dengan ID persis dalam SRS sebelum menyerahkan kes ujian | Jurutera Ujian | 22/09/2026 [ANDAIAN: 7 hari bekerja] | Terbuka |
| 2 | Tambah item "Konsistensi data ujian" dalam templat: nilai medan Prasyarat dan Jangkaan mesti disahkan terhadap SRS dan harga sebenar produk sebelum kes ujian dilaksanakan | Jurutera Ujian | 22/09/2026 [ANDAIAN: 7 hari bekerja] | Terbuka |
| 3 | Sinkronkan `outputs/m04-testcases.csv` dengan `outputs/m02-rtm.csv` dan `outputs/m05-api-tests.md` mengikut ID yang dipbetulkan | Jurutera Ujian | 22/09/2026 [ANDAIAN: 7 hari bekerja] | Terbuka |

### 6. Tindakan Pencegahan (Preventive Action)

Mencegah masalah serupa di modul, projek atau proses lain.

| Bil | Tindakan | Pemilik | Tarikh Sasaran | Status |
|---|---|---|---|---|
| 1 | Tambah pengesahan automatik (CI lint): skrip mesti membandingkan `FR_ID` dalam fail ujian dengan ID yang disenaraikan dalam SRS dan menandakan ketidakpadanan | Jurutera SQA | 11/10/2026 [ANDAIAN: 30 hari bekerja] | Terbuka |
| 2 | Tambah item "Senarai semak data ujian" dalam PPrISA05 Pelan Pengurusan Kualiti: semua data input ujian (harga, kuantiti, subtotal) mesti disahkan terhadap SRS dan spesifikasi produk sebelum pelaksanaan | Jurutera Ujian | 11/10/2026 [ANDAIAN: 30 hari bekerja] | Terbuka |
| 3 | Latih pasukan ujian tentang penggunaan nilai sah lajur Teknik mengikut `templates/Test-Cases-D13.csv` (EP, BVA, Decision Table, State Transition, Use Case, Error Guessing) | Jurutera Ujian | 11/10/2026 [ANDAIAN: 30 hari bekerja] | Terbuka |

### 7. Pengesahan Keberkesanan (Effectiveness Verification)

| Kriteria Keberkesanan | Kaedah Pengesahan | Tarikh Semakan | Keputusan |
|---|---|---|---|
| Semua `FR_ID` dalam fail ujian sepadan dengan ID persis dalam SRS (100% padanan) | Semak `outputs/m04-testcases.csv` berbanding `shopfast/docs/SRS-ShopFast.md` | 01/11/2026 [ANDAIAN: 30 hari bekerja] | Belum Dinilai |
| Tiada ketidaktepatan data ujian (harga, kuantiti, subtotal) antara fail ujian dan SRS | Semak semula setiap baris fail ujian terhadap spesifikasi SRS dan harga produk | 01/11/2026 | Belum Dinilai |
| Tiada ralat ketidakpadanan ID dalam laporan CI lint seterusnya | Semak log CI lint selepas pengesahan automatik dipasang | 01/11/2026 | Belum Dinilai |

### 8. Penutupan

| Medan | Isian |
|---|---|
| Keputusan | Dibuka |
| Disahkan oleh | `<nama rekaan>` (Pengurus Projek) |
| Tarikh ditutup | `<selepas pengesahan keberkesanan>` |

---

## CAPA-003: ID FR-05 Berulang dalam SRS Menjejaskan Keterjejakan RTM

### 1. Maklumat CAPA

| Medan | Isian |
|---|---|
| ID CAPA | CAPA-003 |
| Sumber | AUD-07 (OFI, AU-03) |
| Tarikh dibuka | 13/09/2026 |
| Pemilik CAPA | Penganalisis Sistem (nama rekaan) |
| Keperluan / proses terjejas | SRS (`shopfast/docs/SRS-ShopFast.md` seksyen 2.5), keterjejakan RTM (`templates/RTM-guide.md` seksyen 5) |
| Impak | Sederhana: FR-05 muncul dua kali dengan maksud berbeza (baris 122 pengesahan medan, baris 123 CART_EMPTY), menjejaskan keunikan ID yang diperlukan oleh RTM |
| Keutamaan | Sederhana: OFI tetapi menjejaskan integriti keterjejakan |

### 2. Penerangan Ketakakuran (Nonconformity)

`shopfast/docs/SRS-ShopFast.md` seksyen 2.5 menyenaraikan `FR-05` dua kali: baris 122 untuk pengesahan medan (`fullName`, `email`, `phone`, `postcode`, `paymentMethod`) dan baris 123 untuk "Checkout dengan troli kosong hendaklah ditolak" (`CART_EMPTY`). Kedua-dua mempunyai ID yang sama tetapi kriteria penerimaan yang berbeza. Mengikut `templates/RTM-guide.md` seksyen 5 (Semakan Jurang, "ID unik"), kewujudan ID berulang menjejaskan keupayaan keterjejakan ke hadapan dan ke belakang dalam RTM.

Bukti objektif: `shopfast/docs/SRS-ShopFast.md` baris 122 dan 123; `templates/RTM-guide.md` seksyen 5 (semakan "ID unik").

### 3. Tindakan Pembendungan Segera (Containment)

| Tindakan | Oleh | Tarikh | Status |
|---|---|---|---|
| Laporkan kepada pemilik SRS tentang FR-05 berulang dan cadangkan penggantian ID (contoh: FR-05a dan FR-05b, atau FR-13 bagi CART_EMPTY) | Penganalisis Sistem | 16/09/2026 | Terbuka |
| Dalam `outputs/m02-rtm.csv`, nyatakan secara eksplisit ID mana yang dirujuk bagi setiap baris yang berkaitan dengan FR-05 | Jurutera SQA | 16/09/2026 | Terbuka |

### 4. Analisis Punca Akar (Root Cause Analysis)

#### 4.1 Kaedah 5 Mengapa (5 Whys)

| Mengapa | Jawapan |
|---|---|
| 1. Mengapa FR-05 muncul dua kali dengan maksud berbeza dalam SRS? | Kerana semakan semula SRS tidak mengesan ID berulang semasa pengesahan dokumen |
| 2. Mengapa semakan semula tidak mengesan ini? | Kerana tiada pengesahan keunikan ID secara automatik atau senarai semak khusus untuk memeriksa ID unik |
| 3. Mengapa tiada pengesahan itu? | Kerana SRS ditulis secara berperingkat dan ID tidak disemak secara menyeluruh sebelum dokumen dimuktamadkan |
| 4. Mengapa ia tidak disemak secara menyeluruh? | Kerana tiada prosedur pengesahan SRS yang menuntut pengesahan keunikan ID sebagai sebahagian daripada semakan kualiti dokumen |
| 5. Mengapa tiada prosedur itu? | Kerana kawalan kualiti SRS bergantung kepada semakan manusia tanpa bantuan alat pengesahan automatik |

#### 4.2 Kategori Punca (Fishbone ringkas)

| Kategori | Punca Berkemungkinan | Disahkan (Ya / Tidak) |
|---|---|---|
| Manusia (kemahiran, beban kerja) | Penulis SRS mengendalikan medan dan logik troli kosong sebagai dua entiti berasingan tanpa menyedari ID yang sama digunakan | Tidak |
| Kaedah (proses, templat, senarai semak) | Tiada pengesahan keunikan ID sebagai item wajib dalam semakan SRS | Ya |
| Alat (CI, alat ujian, persekitaran) | Tiada skrip pengesahan automatik untuk ID unik dalam dokumen SRS | Tidak |
| Bahan (keperluan, data ujian) | Tiada |
| Ukuran (metrik, kriteria keluar) | Tiada |
| Persekitaran (jadual, organisasi) | Tiada |

**Punca akar yang disahkan:** Tiada pengesahan keunikan ID sebagai item wajib dalam proses pengesahan kualiti SRS sebelum dokumen dimuktamadkan.

### 5. Tindakan Pembetulan (Corrective Action)

Membetulkan punca akar supaya masalah yang sama tidak berulang.

| Bil | Tindakan | Pemilik | Tarikh Sasaran | Status |
|---|---|---|---|---|
| 1 | Tukar ID FR-05 kedua kepada ID baharu (contoh: FR-13) dalam `shopfast/docs/SRS-ShopFast.md` dan kemas kini sebarang rujukan berkaitan | Penganalisis Sistem | 22/09/2026 [ANDAIAN: 7 hari bekerja] | Terbuka |
| 2 | Tambah item "ID unik" dalam senarai semak pengesahan SRS: setiap ID mesti unik sebelum dokumen diluluskan | Penganalisis Sistem | 22/09/2026 [ANDAIAN: 7 hari bekerja] | Terbuka |

### 6. Tindakan Pencegahan (Preventive Action)

Mencegah masalah serupa di modul, projek atau proses lain.

| Bil | Tindakan | Pemilik | Tarikh Sasaran | Status |
|---|---|---|---|---|
| 1 | Tambah pengesahan automatik (CI lint): skrip mesti menyenaraikan semua ID dalam SRS dan menandakan sebarang pengulangan | Jurutera SQA | 11/10/2026 [ANDAIAN: 30 hari bekerja] | Terbuka |
| 2 | Standardkan templat SRS untuk memasukkan medan "ID Unik Disahkan" (Ya/Tidak) sebagai sebahagian daripada kriteria penerimaan dokumen SRS | Penganalisis Sistem | 11/10/2026 [ANDAIAN: 30 hari bekerja] | Terbuka |

### 7. Pengesahan Keberkesanan (Effectiveness Verification)

| Kriteria Keberkesanan | Kaedah Pengesahan | Tarikh Semakan | Keputusan |
|---|---|---|---|
| Tiada ID berulang dalam SRS selepas pembetulan | Semak `shopfast/docs/SRS-ShopFast.md` dan jalankan skrip pengesahan ID unik | 01/11/2026 [ANDAIAN: 30 hari bekerja] | Belum Dinilai |
| Semakan jurang "ID unik" dalam `templates/RTM-guide.md` seksyen 5 berjaya untuk semua baris RTM | Jalankan senarai semak keterjejakan mengikut seksyen 5 | 01/11/2026 | Belum Dinilai |

### 8. Penutupan

| Medan | Isian |
|---|---|
| Keputusan | Dibuka |
| Disahkan oleh | `<nama rekaan>` (Pengurus Projek) |
| Tarikh ditutup | `<selepas pengesahan keberkesanan>` |

---

## Log CAPA (format PPrISA15 ringkas)

| ID CAPA | Sumber | Keterangan Ringkas | Pemilik | Tarikh Dibuka | Tarikh Sasaran | Status | Tarikh Ditutup |
|---|---|---|---|---|---|---|---|
| CAPA-001 | AUD-01, AUD-02, AUD-03 (NC Major/Minor) | RTM tidak melengkapkan keterjejakan dan liputan; tiada proses wajib kemas kini selepas ujian | Jurutera SQA | 13/09/2026 | 27/09/2026 [ANDAIAN: 14 hari bekerja] | Terbuka | `<selepas pengesahan>` |
| CAPA-002 | AUD-04, AUD-05 (NC Minor) | ID keperluan tidak persis dan data ujian tidak konsisten dengan SRS | Jurutera Ujian | 13/09/2026 | 22/09/2026 [ANDAIAN: 7 hari bekerja] | Terbuka | `<selepas pengesahan>` |
| CAPA-003 | AUD-07 (OFI) | ID FR-05 berulang dalam SRS menjejaskan keterjejakan RTM | Penganalisis Sistem | 13/09/2026 | 22/09/2026 [ANDAIAN: 7 hari bekerja] | Terbuka | `<selepas pengesahan>` |

## Rujukan

- [PPrISA 2.0, 5.4.2 i b) Isu: Borang Pelaporan dan Log Penyelesaian Isu](../../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=92)
- [PPrISA15 Log Penyelesaian Isu](../../../references/pprisa-2.0/templates/pdf/PPrISA15-Log_Penyelesaian_Isu.pdf)
- [KRISAv2 Bab 2, 2.11 RTM (F1.8)](../../../references/krisa-v2-beta-2026/BAB2-FASA-PERMULAAN.pdf#page=56)
- [KRISAv2 Bab 6, 6.3 Pengurusan Ralat](../../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=2)
- [KRISAv2 Bab 6, 6.7 Senario dan Kes Ujian (F5.2)](../../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=9)
- [PPrISA05 Pelan Pengurusan Kualiti](../../../references/pprisa-2.0/templates/pdf/PPrISA05-Pelan_Pengurusan_Kualiti.pdf)
- [PPrISA 2.0, 4.2.4 a) Pengurusan Kualiti](../../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=74)
- [KRISAv2 Bab 1, 1.6.4 Jaminan Kualiti Perisian (SQA)](../../../references/krisa-v2-beta-2026/BAB1-PERANCANGAN.pdf#page=19)

## Semak manusia / Human check

1. Punca akar disahkan dengan bukti (dokumen, log, temu bual), bukan hanya logik 5 Mengapa yang dijana AI.
2. Tindakan pembetulan menangani punca akar, dan tindakan pencegahan meliputi modul atau projek lain, bukan hanya membaiki satu ralat.
3. Kriteria keberkesanan boleh diukur dan tarikh semakan ditetapkan sebelum CAPA ditutup.
