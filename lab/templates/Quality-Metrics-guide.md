# Panduan Metrik Kualiti (Quality Metrics Guide)

> **Templat ini mencerminkan (mirrors):**
> - KRISAv2 Bab 6, 6.6 Langkah 5 d) Metrik Pengukuran (bilangan dan peratus kes ujian lulus dan gagal, purata masa tindak balas): [BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf, halaman 6](../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=6)
> - D14 Laporan Ujian Penerimaan (UAT/PAT), seksyen Pengukuran Hasil Ujian: [DOCX](../../references/templates-D01-D18/docx/D14_DOKUMEN_LAPORAN_UJIAN_PENERIMAAN_UAT_PAT.docx)
> - D12 Pelan Induk Pengujian, Strategi Ujian (Pengukuran Metrik): [DOCX](../../references/templates-D01-D18/docx/D12_DOKUMEN_PELAN_INDUK_PENGUJIAN.docx)
> - PPrISA 2.0, 5.4.2 ii b) Penilaian Kualiti Serahan Projek: [halaman 94](../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=94)
>
> Fail kerja: [Quality-Metrics.csv](Quality-Metrics.csv)

## 1. Definisi dan Formula

| ID | Metrik | Formula | Apa yang diukur | Sasaran Cadangan |
|---|---|---|---|---|
| QM-01 | Kadar lulus ujian (Test pass rate) | Lulus / (Lulus + Gagal) x 100 | Kematangan binaan pada masa itu | Sekurang-kurangnya 95.0% pada exit |
| QM-02 | Ketumpatan ralat (Defect density) | Ralat sebelum pelepasan / Saiz | Kualiti relatif kepada saiz; saiz dalam UFP (SRS seksyen 7) atau KLOC | Tidak melebihi 0.25 setiap UFP |
| QM-03 | Keberkesanan penyingkiran ralat (Defect Removal Efficiency, DRE) | Ralat sebelum pelepasan / (Ralat sebelum pelepasan + Ralat selepas pelepasan) x 100 | Keberkesanan keseluruhan aktiviti SQA dan ujian | Sekurang-kurangnya 90.0% |
| QM-04 | Kebocoran ralat (Defect leakage) | Ralat ditemui dalam UAT / Ralat ditemui dalam ujian sistem x 100 | Berapa banyak ralat terlepas daripada ujian sistem ke UAT | Tidak melebihi 10.0% |
| QM-05 | Purata masa pembaikan (Mean Time To Repair, MTTR) | Jumlah jam pembaikan / Bilangan ralat dibaiki | Kepantasan pasukan membaiki ralat | Severity 1 tidak melebihi 8 jam |

Peraturan kiraan:
1. Kes ujian **Disekat** tidak dimasukkan dalam QM-01 tetapi mesti dilaporkan berasingan.
2. Ralat **Ditolak** (bukan ralat atau pendua) tidak dikira dalam QM-02 hingga QM-05.
3. "Selepas pelepasan" bermaksud ralat yang dilaporkan dalam 30 hari pertama produksi.
4. Jam pembaikan (QM-05) dikira dari status Disahkan hingga Sedia Diuji Semula.
5. Tulis peratus dengan 1 tempat perpuluhan dan tunjukkan nombor input bersama nilai.

## 2. Contoh Kiraan (data rekaan)

Projek contoh: ShopFast Checkout v1.1, saiz 89 UFP (SRS seksyen 7).

| Data | Nilai |
|---|---|
| Kes ujian dilaksanakan dalam ujian sistem | 64 (Lulus 54, Gagal 8, Disekat 2) |
| Ralat ditemui dalam ujian sistem | 16 |
| Ralat ditemui dalam UAT | 4 |
| Ralat ditemui dalam 30 hari produksi | 2 |
| Ralat dibaiki sebelum pelepasan | 20 |
| Jumlah jam pembaikan bagi 20 ralat | 86 jam |

| ID | Kiraan | Keputusan | Sasaran | Status |
|---|---|---|---|---|
| QM-01 | 54 / (54 + 8) x 100 | 87.1% | Sekurang-kurangnya 95.0% | Tidak Capai |
| QM-02 | (16 + 4) / 89 | 0.22 ralat setiap UFP | Tidak melebihi 0.25 | Capai |
| QM-03 | 20 / (20 + 2) x 100 | 90.9% | Sekurang-kurangnya 90.0% | Capai |
| QM-04 | 4 / 16 x 100 | 25.0% | Tidak melebihi 10.0% | Tidak Capai |
| QM-05 | 86 / 20 | 4.3 jam | Severity 1 tidak melebihi 8 jam | Perlu data mengikut severity |

Tafsiran:
- QM-01 dan QM-04 tidak capai: ujian sistem belum cukup berkesan dan binaan belum sedia untuk gate G3. Semak kes ujian yang tertinggal (contoh: nilai sempadan) dalam RTM.
- QM-03 capai tetapi hampir dengan sasaran; dua ralat produksi perlu dianalisis punca akar (lihat [CAPA-template.md](CAPA-template.md)).
- QM-05 ialah purata semua severity. Asingkan mengikut severity sebelum dibandingkan dengan sasaran.

## 3. Perangkap Biasa

1. Membandingkan ketumpatan ralat antara projek yang menggunakan unit saiz berbeza (UFP berbanding KLOC).
2. Kadar lulus tinggi kerana kes ujian terlalu mudah: sentiasa baca bersama liputan RTM.
3. Mengira ralat pendua dua kali.
4. Menjadikan metrik sasaran individu; metrik digunakan untuk memperbaiki proses, bukan menghukum orang.
