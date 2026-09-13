# Laporan Ringkasan Ujian dan Keputusan Pelepasan (D14 dan D16) untuk ShopFast Checkout v1.0.0

## Butiran Dokumen

| Perkara | Butiran |
|---|---|
| Nama Sistem | ShopFast Checkout |
| Versi Binaan Diuji | 1.0.0 (input pelatih) |
| Disediakan oleh | `<nama rekaan>` (Jurutera SQA) |
| Disemak oleh | `<nama rekaan>` (Ketua Ujian) |
| Disahkan oleh | `<nama rekaan>` (Pengurus Projek) |
| Tarikh | 15/09/2026 [ANDAIAN: laporan disediakan selepas tempoh ujian sistem 14 hingga 15 September 2026 tamat] |

## Pindaan Dokumen

| Versi | Tarikh | Ringkasan Pindaan |
|---|---|---|
| 1.0 | 15/09/2026 | Draf awal laporan Ujian Sistem binaan 1.0.0 |

---

## 1. Maklumat Spesifik Dokumen (D16)

ID Dokumen: D14/D16-TEST-SUMMARY-SF-1.0; versi 1.0; dihasilkan pada 15/09/2026 dan dikemas kini pada 15/09/2026. Organisasi: Perbadanan Usahawan Digital. Penulis: `<nama rekaan>` (Jurutera SQA). Senarai edaran: Pemilik Projek, Pengurus Projek, Ketua Ujian, Pasukan Pembangunan ShopFast.

## 2. Objektif Ujian (D16)

1. Mengesahkan keperluan REQ-CHK-01 (kuantiti item troli 1 hingga 10) dan REQ-CHK-03 (diskaun ahli dan promosi, had 25%, caj penghantaran percuma) berfungsi mengikut SRS-ShopFast.md dan openapi.yaml. Sumber jangkaan: `shopfast/docs/`; senarai kes di `outputs/m04-testcases.csv`.
2. Mengukur kesediaan binaan 1.0.0 terhadap kriteria keluar QA Plan (`templates/QA-Plan-PPrISA05-D12.md` seksyen 7) untuk Gate G3 Sedia UAT dan Gate G4 Sedia Produksi.
3. Menyediakan bukti metrik, liputan dan keputusan pelepasan yang boleh diaudit kepada Pemilik Projek.

## 3. Skop Ujian (D16)

| Dalam Skop (fungsian dan kualiti) | Luar Skop |
|---|---|
| REQ-CHK-01 hingga REQ-CHK-05 pada peringkat Sistem (sumber: `outputs/m02-rtm.csv`) | REQ-CHK-06 (PAT, prestasi p95 beban 50 pengguna). Sebab: tiada persekitaran beban dilaporkan dan RSK-11 masih Terbuka (`outputs/m03-risk-register.csv`) |
| Kes ujian TC-CHK-001 hingga TC-CHK-010 bagi REQ-CHK-01 dan REQ-CHK-03 (sumber: `outputs/m04-testcases.csv`) | Ujian keselamatan mendalam bagi RSK-01 hingga RSK-05 serta RSK-07. Sebab: keutamaan ujian P1 bagi risiko ini tertangguh dan tiada bukti pelaksanaan dalam `outputs/` |
| | UAT dan PAT belum dijalankan dalam tempoh 14 hingga 15 September 2026; peringkat ujian ialah Sistem |

## 4. Butiran Ujian (D16)

| Perkara | Butiran |
|---|---|
| Tempoh ujian | 14/09/2026 hingga 15/09/2026 (input pelatih) |
| Peringkat ujian | Sistem (bukan UAT, PAT atau FAT) |
| Peserta | 4 penguji (input pelatih), peranan Penguji; nama rekaan: `<nama rekaan>`; Ketua Ujian `<nama rekaan>` |

## 5. Keperluan Persekitaran (D16)

| Komponen | Butiran |
|---|---|
| Perkakasan | `<tiada data>` [ANDAIAN: mesin kerja penguji; Windows 11 mengikut persekitaran yang direkodkan dalam `outputs/m06-bug-report-BUG-CHK-001.md`] |
| Perisian dan versi | ShopFast 1.0.0 di http://localhost:3000; pelayar Microsoft Edge, Windows 11 (sumber: `outputs/m06-bug-report-BUG-CHK-001.md`) |
| Alat ujian | Node.js dengan node:test untuk API (`outputs/m05-api-tests.md`); Newman (`npm run test:api`); Playwright untuk UI (`outputs/m05-ui-test.md`) |
| URL persekitaran | `http://localhost:3000` |

## 6. Ujian Yang Dijalankan (D14)

1. Ujian API automatik node:test memetakan TC-CHK-001 hingga TC-CHK-010 bagi REQ-CHK-01 dan REQ-CHK-03 (sumber: `outputs/m05-api-tests.md`). Data input TC-CHK-007 dan TC-CHK-009 diselaraskan kepada produk P003 dengan `[ANDAIAN: harga P003 ialah RM100.00]` kerana P001 x 2 (RM179.80) dan P002 (RM35.00) tidak mencapai subtotal yang dikehendaki jangkaan SRS.
2. Ujian UI Playwright TC-CHK-004 (tambah P002 kuantiti 10 ke troli) gagal dan menghasilkan laporan ralat BUG-CHK-001 (sumber: `outputs/m05-ui-test.md`, `outputs/m06-bug-report-BUG-CHK-001.md`).
3. REQ-CHK-06 (PAT) tidak dijalankan kerana tiada persekitaran beban dan RSK-11 masih Terbuka (sumber: `outputs/m03-risk-register.csv`).

## 7. Perubahan Daripada Pelan Pengujian (D14)

| Perkara Dalam Pelan | Perubahan Sebenar | Sebab | Kesan |
|---|---|---|---|
| Data ujian TC-CHK-007 dan TC-CHK-009 menggunakan P002 | Skrip m05 menggunakan produk P003 | Harga P001 x 2 = RM179.80 dan P002 = RM35.00 tidak mencapai subtotal RM200.00 dan RM100.00 yang dikehendaki jangkaan SRS (`outputs/m05-api-tests.md`) | Jangkaan daripada SRS kekal sah; semakan manual dengan P002 perlu ditambah |
| 10 kes ujian dirancang (TC-CHK-001 hingga TC-CHK-010, `outputs/m04-testcases.csv`) | Metrik mencatat 18 keputusan dilaksanakan (13 lulus, 5 gagal, `outputs/m06-metrics.csv` QM-01) | Keputusan sebenar termasuk kes tambahan daripada skrip m05 dan ujian UI | Status dalam `outputs/m02-rtm.csv` dan `outputs/m04-testcases.csv` tidak dikemas kini kepada keputusan sebenar; jurang dokumentasi |
| Ujian beban REQ-CHK-06 (PAT) dalam jadual | Tidak dilaksanakan | Tiada persekitaran beban; RSK-11 Terbuka (`outputs/m03-risk-register.csv`) | Kriteria keluar Ujian Sistem dan UAT tidak dipenuhi |

## 8. Hasil Ujian dan Pengukuran Hasil Ujian (D16 Hasil Ujian, D14 Pengukuran Hasil Ujian)

### 8.1 Pelaksanaan Kes Ujian

| Jumlah Kes | Dilaksana | Lulus | Gagal | Disekat | Kadar Lulus |
|---|---|---|---|---|---|
| 18 | 18 | 13 | 5 | 0 | 72.2% |

Sumber: `outputs/m06-metrics.csv` QM-01 (Lulus=13; Gagal=5; Tiada kes Disekat). Angka 13 dan 5 dikira semula: 13 / (13 + 5) x 100 = 72.2%. [ANDAIAN: Jumlah kes 18 ditakrifkan sebagai 13 lulus + 5 gagal dalam metrik.] Jurang: `outputs/m04-testcases.csv` masih mencatat kesepuluh kes sebagai "Belum Dilaksana" dan `outputs/m02-rtm.csv` mencatat semua keperluan sebagai "Belum Diuji"; keadaan sebenar perlu dikemas kini sebelum Gate G3.

### 8.2 Isu Yang Dilaporkan mengikut Severity dan Status

| Severity (KRISAv2 Jadual 6.3) | Dilaporkan | Ditutup | Terbuka | Ditangguhkan |
|---|---|---|---|---|
| 1 / Tinggi | 0 | 0 | 0 | 0 |
| 2 / Sederhana | 1 | 0 | 1 | 0 |
| 3 / Rendah | 0 | 0 | 0 | 0 |

Sumber: satu-satunya fail ralat yang wujud ialah `outputs/m06-bug-report-BUG-CHK-001.md` (severity 2, status "Baru" pada 13/09/2026, keutamaan P1, tarikh sasaran pembetulan 20/09/2026, tiada penyelesaian sementara atau workaround direkodkan). Jurang: `outputs/m06-metrics.csv` QM-02 dan QM-03 menggunakan "Ralat=5" dan "Sebelum=5; Selepas=1", tetapi hanya satu laporan ralat tersedia. Baki 4 ralat tidak dapat dijejak ke mana-mana fail bukti dalam `outputs/`.

### 8.3 Kategori Isu (D16: Functionality, Usability, Operational)

| Kategori | Bilangan | Contoh ID Ralat |
|---|---|---|
| Functionality | 1 | BUG-CHK-001 |
| Usability | 0 | `<tiada data>` |
| Operational | 0 | `<tiada data>` |

Sumber: `outputs/m06-bug-report-BUG-CHK-001.md` (modul Troli, output tidak sepadan dengan SRS). Klasifikasi severity mengikut Jadual 6.3 KRISAv2 ([page 7](../../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=7)).

### 8.4 Metrik Kualiti

| ID | Metrik | Nilai | Sasaran | Status |
|---|---|---|---|---|
| QM-01 | Kadar lulus ujian | 72.2% | Sekurang-kurangnya 95.0% | Tidak Capai |
| QM-02 | Ketumpatan ralat | 4.2 ralat setiap KLOC | Tidak melebihi 0.25 ralat setiap UFP | Tiada Data |
| QM-03 | DRE | 83.3% | Sekurang-kurangnya 90.0% | Tidak Capai |
| QM-04 | Kebocoran ralat | `<tiada data>` | Tidak melebihi 10.0% | Tiada Data |
| QM-05 | MTTR | `<tiada data>` | Severity 1 tidak melebihi 8 jam | Tiada Data |

Sumber: `outputs/m06-metrics.csv`. DRE 83.3% dikira semula: 5 / (5 + 1) x 100 = 83.3%. Catatan: QM-02 tiada data kerana unit saiz berbeza, iaitu KLOC berbanding UFP; QM-04 tiada pengasingan ralat UAT dan ujian sistem; QM-05 tiada data jam pembaikan.

### 8.5 Ulasan Keputusan Ujian (D16)

Kadar lulus 72.2% berada jauh di bawah sasaran 95.0% (sumber: `outputs/m06-metrics.csv` QM-01). Satu ralat severity 2 (BUG-CHK-001) terbuka, menyekat ujian UI modul troli, dan tiada penyelesaian sementara direkodkan (`outputs/m06-bug-report-BUG-CHK-001.md`). Liputan keperluan tidak dapat disahkan kerana RTM masih mencatat semua keperluan "Belum Diuji" (`outputs/m02-rtm.csv`), manakala tiga metrik (QM-02, QM-04, QM-05) tidak lengkap. Kesimpulan: binaan 1.0.0 belum menunjukkan bukti kualiti yang diperlukan untuk pelepasan.

## 9. Penilaian Penamatan Ujian (D14)

Kriteria keluar diambil satu demi satu daripada `templates/QA-Plan-PPrISA05-D12.md` seksyen 7, peringkat Ujian Sistem dan UAT.

| Kriteria Keluar (daripada QA Plan / D12 / D13) | Sasaran | Sebenar | Dipenuhi (Ya / Tidak) |
|---|---|---|---|
| 100% kes ujian P1 dilaksanakan | 100% | `<tiada data>`; metrik mencatat 18 dilaksanakan tanpa pecahan P1/P2 dan `outputs/m04-testcases.csv` masih "Belum Dilaksana" | Tidak |
| Kadar lulus sekurang-kurangnya 95% | Sekurang-kurangnya 95% | 72.2% (`outputs/m06-metrics.csv` QM-01) | Tidak |
| Tiada ralat severity 1 terbuka | 0 | 0 (satu laporan ralat severity 2 sahaja, `outputs/m06-bug-report-BUG-CHK-001.md`) | Ya |
| Semua senario UAT dilaksanakan | Semua senario | `<tiada data>`; tiada bukti UAT dalam `outputs/` | Tidak |
| Tiada severity 1 dan 2 terbuka | 0 | 1 severity 2 terbuka (BUG-CHK-001) | Tidak |
| Pengesahan SME | Sijil pengesahan SME | `<tiada data>`; tiada bukti pengesahan dalam `outputs/` | Tidak |

Keputusan: hanya 1 daripada 6 kriteria keluar dipenuhi. Kriteria tanpa bukti dianggap tidak dipenuhi.

## 10. Faktor Yang Menghalang Kemajuan (D14)

1. BUG-CHK-001 (kuantiti 10 ditolak) menyekat kes ujian TC-CHK-004 dan senario UI `m05-senario.spec.js` (sumber: `outputs/m06-bug-report-BUG-CHK-001.md`).
2. Tiada persekitaran beban menyebabkan REQ-CHK-06 dan RSK-11 tidak dapat dilaksanakan (sumber: `outputs/m03-risk-register.csv` RSK-11).
3. Data metrik tidak lengkap: QM-02 unit tidak sepadan (KLOC berbanding UFP), QM-04 dan QM-05 tiada data (sumber: `outputs/m06-metrics.csv`).
4. RTM dan senarai kes ujian tidak dikemas kini selepas pelaksanaan, menghalang pengesahan liputan (sumber: `outputs/m02-rtm.csv`, `outputs/m04-testcases.csv`).

## 11. Risiko (D14)

Sumber: `outputs/m03-risk-register.csv`. Semua risiko kekal Terbuka (Belum Selesai).

| ID Risiko | Risiko Baharu / Berubah / Belum Selesai | Skor | Tindakan |
|---|---|---|---|
| RSK-01 | Belum Selesai; kebocoran data peribadi melalui GET /api/orders/{orderId} tanpa autentikasi | 25 (Kritikal) | Ujian Newman akses tanpa token; pastikan 401 atau 403 |
| RSK-02 | Belum Selesai; ID pesanan berjujukan SF-1001 boleh diteka | 20 (Kritikal) | Ujian enumerasi ID tanpa token; pastikan tiada 200 dengan data peribadi |
| RSK-03 | Belum Selesai; kata laluan SHA-256 + salt bukan bcrypt atau Argon2id | 16 (Tinggi) | Audit kod log masuk; guna bcrypt atau Argon2id |
| RSK-04 | Belum Selesai; tiada rate limiting; password spraying tidak dikawal | 16 (Tinggi) | Pasang rate limiter; ujian spraying |
| RSK-05 | Belum Selesai; callback FPX tiada tandatangan | 16 (Tinggi) | Tolak transisi tanpa tandatangan; guna HMAC atau token FPX |
| RSK-06 | Belum Selesai; data hilang apabila proses dimulakan semula | 15 (Tinggi) | Pertimbang SQLite atau DB lain sebelum Gate G3 |
| RSK-07 | Belum Selesai; CORS membenarkan semua origin | 9 (Sederhana) | Hadkan origin dalam pengeluaran |
| RSK-08 | Belum Selesai; email dan phone bocor ke log stdout | 9 (Sederhana) | Audit log; buang data peribadi daripada log |
| RSK-09 | Belum Selesai; tiada laluan gagal FPX dan emel | 9 (Sederhana) | Ujian timeout; cadang retry atau dead letter queue |
| RSK-10 | Belum Selesai; kontrak API tiada kod 404 | 9 (Sederhana) | Kemas kini openapi.yaml untuk 404 |
| RSK-11 | Belum Selesai; REQ-CHK-06 (p95 < 2 saat) belum diuji | 12 (Tinggi) | Ujian beban 50 pengguna maya; pantau p95 |

## 12. Serahan Ujian (D14)

- Pelan Induk Pengujian dan Pelan Kualiti dirujuk melalui `templates/QA-Plan-PPrISA05-D12.md`
- Senarai kes ujian: `outputs/m04-testcases.csv`
- Traceability Matrix: `outputs/m02-rtm.csv`
- Skrip ujian API dan UI: `outputs/m05-api-tests.md`, `outputs/m05-api-tests.test.mjs`, `outputs/m05-ui-test.md`
- Daftar risiko: `outputs/m03-risk-register.csv`
- Laporan ralat: `outputs/m06-bug-report-BUG-CHK-001.md`
- Laporan metrik: `outputs/m06-metrics.csv`
- Laporan ini: `outputs/m07-test-summary.md`

## 13. Aset Ujian Yang Boleh Digunakan Semula (D14)

- Skrip API node:test `outputs/m05-api-tests.test.mjs` (boleh dibina semula dengan `node --test`).
- Skrip UI Playwright `m05-senario.spec.js` (rujuk `outputs/m05-ui-test.md`).
- Kes ujian `outputs/m04-testcases.csv` selepas lajur keputusan dikemas kini.
- Data ujian sintetik `@example.test` (aminah@example.test; bala@example.test).

## 14. Lesson Learned (D14)

| Perkara | Apa Berjalan Baik | Apa Perlu Diperbaiki | Tindakan |
|---|---|---|---|
| Perancangan ujian | Kes BVA, EP dan decision table disediakan bagi REQ-CHK-01 dan REQ-CHK-03 (`outputs/m04-testcases.csv`) | Status keputusan kekal "Belum Dilaksana" selepas ujian dijalankan | Kemas kini lajur Keputusan dan RTM sebelum Gate G3 |
| Pelaksanaan ujian | Skrip API menghasilkan 18 keputusan dan satu ralat didokumenkan (`outputs/m06-metrics.csv` QM-01; `outputs/m06-bug-report-BUG-CHK-001.md`) | "Ralat=5" dalam metrik tidak dapat dijejak kepada laporan ralat; skrip menggunakan produk P003 walaupun kes menetapkan P002 | Terbitkan laporan ralat bagi setiap kegagalan; segerakkan data input dengan m04 |
| Pengukuran kualiti | Metrik QM-01 hingga QM-05 disenaraikan dengan formula (`outputs/m06-metrics.csv`) | QM-02 unit tidak sepadan (KLOC berbanding UFP); QM-04 dan QM-05 tiada data | Tetapkan saiz (UFP) dan jam pembaikan sebelum kitaran seterusnya |
| Pengurusan ralat | Laporan BUG-CHK-001 lengkap dengan langkah reproduksi ([KRISAv2 Bab 6, 6.3](../../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=2)) | Tiada penyelesaian sementara (workaround) direkodkan; bahagian E dan F belum diisi Pengurus Projek | Lengkapkan bahagian E dan F serta rakam workaround |

## 15. Rumusan (D16)

Binaan ShopFast 1.0.0 lulus 13 daripada 18 ujian (72.2%, dikira daripada `outputs/m06-metrics.csv` QM-01), jauh di bawah sasaran 95.0%. Satu ralat severity 2 (BUG-CHK-001) terbuka tanpa workaround. Liputan keperluan tidak dapat disahkan kerana RTM belum dikemas kini (`outputs/m02-rtm.csv`), dan ujian beban REQ-CHK-06 serta semua risiko Kritikal (RSK-01, RSK-02) belum diselesaikan (`outputs/m03-risk-register.csv`). Binaan 1.0.0 belum bersedia untuk UAT mahupun produksi.

## 16. Keputusan Pelepasan (Release Decision): GO / NO-GO / CONDITIONAL

| Keputusan | Maksud | Syarat Digunakan |
|---|---|---|
| **GO** | Sistem sedia untuk dilepaskan | Semua kriteria keluar dipenuhi; tiada ralat severity 1 atau 2 terbuka; risiko Kritikal telah dimitigasi |
| **NO-GO** | Sistem tidak boleh dilepaskan | Mana-mana ralat severity 1 terbuka, atau kriteria keluar utama tidak dipenuhi, atau risiko Kritikal tanpa mitigasi |
| **CONDITIONAL** | Lepas bersyarat | Hanya ralat severity 2 atau 3 terbuka dengan penyelesaian sementara (workaround), pemilik dan tarikh akhir yang dipersetujui Pemilik Projek |

**Keputusan:** NO-GO

**Justifikasi (rujuk bukti seksyen 8 dan 9):** Kriteria penentu NO-GO ialah (1) kadar lulus 72.2% di bawah sasaran 95.0% (seksyen 8.1 dan 9), (2) 100% kes ujian P1 tidak dapat disahkan, (3) tiada severity 1 dan 2 terbuka tidak dipenuhi kerana BUG-CHK-001 severity 2 terbuka tanpa workaround, (4) risiko Kritikal RSK-01 (skor 25) dan RSK-02 (skor 20) masih Terbuka tanpa bukti mitigasi. Semua jalur keputusan GO dan CONDITIONAL tidak terpakai: kadar lulus di bawah sasaran, kriteria keluar utama tidak dipenuhi, risiko Kritikal tanpa mitigasi, dan ralat severity 2 tidak disertai penyelesaian sementara yang dipersetujui Pemilik Projek.

**Syarat (jika CONDITIONAL):**

| Bil | Syarat / Tindakan | Pemilik | Tarikh Akhir | Bukti Penutupan |
|---|---|---|---|---|
| 1 | Tidak berkenaan. Keputusan ialah NO-GO, bukan CONDITIONAL | `<tiada data>` | `<tiada data>` | `<tiada data>` |

## Pengesahan

| Peranan | Nama | Tandatangan | Tarikh |
|---|---|---|---|
| Ketua Ujian | `<nama rekaan>` | | 15/09/2026 |
| Pengurus Projek | `<nama rekaan>` | | 15/09/2026 |
| Pemilik Projek | `<nama rekaan>` | | 15/09/2026 |

## Rujukan

- [KRISAv2 Bab 6, 6.10 Laporan Ujian Penerimaan (UAT dan PAT)](../../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=26)
- [KRISAv2 Bab 7, Laporan Penamatan Ujian](../../../references/krisa-v2-beta-2026/BAB7-FASA-PELAKSANAAN.pdf#page=9)
- [D14 Laporan Ujian Penerimaan](../../../references/templates-D01-D18/docx/D14_DOKUMEN_LAPORAN_UJIAN_PENERIMAAN_UAT_PAT.docx) dan [D16 Laporan Penamatan Ujian](../../../references/templates-D01-D18/docx/D16_DOKUMEN_LAPORAN_PENAMATAN_UJIAN.docx)

## Semak manusia / Human check
1. Setiap angka dalam laporan boleh dijejak ke fail bukti dan dikira semula.
2. Keputusan GO, NO-GO atau CONDITIONAL mengikut peraturan seksyen 16 dan kriteria keluar QA Plan, bukan ringkasan AI yang terlalu optimistik.
3. Setiap syarat CONDITIONAL mempunyai pemilik, tarikh akhir dan bukti penutupan yang dipersetujui Pemilik Projek.