# Templat Laporan Ringkasan Ujian dan Keputusan Pelepasan (Test Summary)

> **Templat ini mencerminkan (mirrors):**
> - D14 Dokumen Laporan Ujian Penerimaan (UAT/PAT): [DOCX](../../references/templates-D01-D18/docx/D14_DOKUMEN_LAPORAN_UJIAN_PENERIMAAN_UAT_PAT.docx) (seksyen bertanda D14)
> - D16 Dokumen Laporan Penamatan Ujian: [DOCX](../../references/templates-D01-D18/docx/D16_DOKUMEN_LAPORAN_PENAMATAN_UJIAN.docx) (seksyen bertanda D16)
>
> **Rujukan panduan:** [KRISAv2 Bab 6, 6.10 Laporan Ujian Penerimaan (UAT dan PAT) [F5.6]](../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=26); [KRISAv2 Bab 7, 7.6 Ujian Penerimaan Akhir dan Laporan Penamatan Ujian](../../references/krisa-v2-beta-2026/BAB7-FASA-PELAKSANAAN.pdf#page=9); [PPrISA 2.0, 6.1.2 Penilaian Akhir](../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=98)
>
> Cara guna: isi setiap seksyen dengan bukti (metrik, RTM, laporan ralat). Seksyen 16 wajib: keputusan GO, NO-GO atau CONDITIONAL.

## Butiran Dokumen

| Perkara | Butiran |
|---|---|
| Nama Sistem | `<isi>` |
| Versi Binaan Diuji | `<isi>` |
| Disediakan oleh | `<nama rekaan>` |
| Disemak oleh | `<nama rekaan>` |
| Disahkan oleh | `<nama rekaan>` |
| Tarikh | `<isi>` |

## Pindaan Dokumen

| Versi | Tarikh | Ringkasan Pindaan |
|---|---|---|
| `<isi>` | `<isi>` | `<isi>` |

---

## 1. Maklumat Spesifik Dokumen (D16)

`<Nombor ID, versi, tarikh dihasilkan dan dikemas kini, organisasi, penulis dan senarai edaran.>`

## 2. Objektif Ujian (D16)

`<Objektif ujian yang dijalankan.>`

## 3. Skop Ujian (D16)

| Dalam Skop (fungsian dan kualiti) | Luar Skop |
|---|---|
| `<contoh: REQ-CHK-01 hingga REQ-CHK-05, FR-01 hingga FR-12>` | `<isi dan sebab>` |

## 4. Butiran Ujian (D16)

| Perkara | Butiran |
|---|---|
| Tempoh ujian | `<tarikh mula hingga tarikh tamat>` |
| Peringkat ujian | `<Sistem / UAT / PAT / FAT>` |
| Peserta | `<peranan dan bilangan, nama rekaan>` |

## 5. Keperluan Persekitaran (D16)

| Komponen | Butiran |
|---|---|
| Perkakasan | `<isi>` |
| Perisian dan versi | `<contoh: Node.js 20, Chrome versi semasa>` |
| Alat ujian | `<contoh: Newman, Playwright, GitHub Actions>` |
| URL persekitaran | `<contoh: http://localhost:3000>` |

## 6. Ujian Yang Dijalankan (D14)

`<Penerangan ringkas ujian yang telah dijalankan.>`

## 7. Perubahan Daripada Pelan Pengujian (D14)

| Perkara Dalam Pelan | Perubahan Sebenar | Sebab | Kesan |
|---|---|---|---|
| `<isi>` | `<isi>` | `<isi>` | `<isi>` |

## 8. Hasil Ujian dan Pengukuran Hasil Ujian (D16 Hasil Ujian, D14 Pengukuran Hasil Ujian)

### 8.1 Pelaksanaan Kes Ujian

| Jumlah Kes | Dilaksana | Lulus | Gagal | Disekat | Kadar Lulus |
|---|---|---|---|---|---|
| `<n>` | `<n>` | `<n>` | `<n>` | `<n>` | `<%>` |

### 8.2 Isu Yang Dilaporkan mengikut Severity dan Status

| Severity (KRISAv2 Jadual 6.3) | Dilaporkan | Ditutup | Terbuka | Ditangguhkan |
|---|---|---|---|---|
| 1 / Tinggi | `<n>` | `<n>` | `<n>` | `<n>` |
| 2 / Sederhana | `<n>` | `<n>` | `<n>` | `<n>` |
| 3 / Rendah | `<n>` | `<n>` | `<n>` | `<n>` |

### 8.3 Kategori Isu (D16: Functionality, Usability, Operational)

| Kategori | Bilangan | Contoh ID Ralat |
|---|---|---|
| Functionality | `<n>` | `<BUG-CHK-xxx>` |
| Usability | `<n>` | `<BUG-CHK-xxx>` |
| Operational | `<n>` | `<BUG-CHK-xxx>` |

### 8.4 Metrik Kualiti

| ID | Metrik | Nilai | Sasaran | Status |
|---|---|---|---|---|
| QM-01 | Kadar lulus ujian | `<isi>` | `<isi>` | `<isi>` |
| QM-02 | Ketumpatan ralat | `<isi>` | `<isi>` | `<isi>` |
| QM-03 | DRE | `<isi>` | `<isi>` | `<isi>` |
| QM-04 | Kebocoran ralat | `<isi>` | `<isi>` | `<isi>` |
| QM-05 | MTTR | `<isi>` | `<isi>` | `<isi>` |

### 8.5 Ulasan Keputusan Ujian (D16)

`<Ulasan keseluruhan hasil ujian.>`

## 9. Penilaian Penamatan Ujian (D14)

| Kriteria Keluar (daripada QA Plan / D12 / D13) | Sasaran | Sebenar | Dipenuhi (Ya / Tidak) |
|---|---|---|---|
| `<contoh: tiada ralat severity 1 terbuka>` | `<0>` | `<n>` | `<isi>` |
| `<contoh: liputan keperluan RTM>` | `<100%>` | `<%>` | `<isi>` |

## 10. Faktor Yang Menghalang Kemajuan (D14)

`<Faktor yang menghalang atau melewatkan kemajuan ujian.>`

## 11. Risiko (D14)

| ID Risiko | Risiko Baharu / Berubah / Belum Selesai | Skor | Tindakan |
|---|---|---|---|
| `<RSK-xx>` | `<isi>` | `<isi>` | `<isi>` |

## 12. Serahan Ujian (D14)

`<Senarai serahan: pelan ujian, kes ujian, RTM, laporan ralat, laporan ini.>`

## 13. Aset Ujian Yang Boleh Digunakan Semula (D14)

`<Spesifikasi ujian, skrip automatik, persekitaran dan data ujian yang boleh digunakan semula.>`

## 14. Lesson Learned (D14)

| Perkara | Apa Berjalan Baik | Apa Perlu Diperbaiki | Tindakan |
|---|---|---|---|
| `<isi>` | `<isi>` | `<isi>` | `<isi>` |

## 15. Rumusan (D16)

`<Rumusan hasil ujian.>`

## 16. Keputusan Pelepasan (Release Decision): GO / NO-GO / CONDITIONAL

| Keputusan | Maksud | Syarat Digunakan |
|---|---|---|
| **GO** | Sistem sedia untuk dilepaskan | Semua kriteria keluar dipenuhi; tiada ralat severity 1 atau 2 terbuka; risiko Kritikal telah dimitigasi |
| **NO-GO** | Sistem tidak boleh dilepaskan | Mana-mana ralat severity 1 terbuka, atau kriteria keluar utama tidak dipenuhi, atau risiko Kritikal tanpa mitigasi |
| **CONDITIONAL** | Lepas bersyarat | Hanya ralat severity 2 atau 3 terbuka dengan penyelesaian sementara (workaround), pemilik dan tarikh akhir yang dipersetujui Pemilik Projek |

**Keputusan:** `<GO / NO-GO / CONDITIONAL>`

**Justifikasi (rujuk bukti seksyen 8 dan 9):** `<isi>`

**Syarat (jika CONDITIONAL):**

| Bil | Syarat / Tindakan | Pemilik | Tarikh Akhir | Bukti Penutupan |
|---|---|---|---|---|
| 1 | `<isi>` | `<isi>` | `<isi>` | `<isi>` |

## Pengesahan

| Peranan | Nama | Tandatangan | Tarikh |
|---|---|---|---|
| Ketua Ujian | `<nama rekaan>` | | `<isi>` |
| Pengurus Projek | `<nama rekaan>` | | `<isi>` |
| Pemilik Projek | `<nama rekaan>` | | `<isi>` |
