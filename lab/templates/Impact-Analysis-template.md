# Templat Analisis Impak Perubahan (Change Impact Analysis)

> **Templat ini mencerminkan (mirrors):** bahagian "Analisis Impak", "Impak" dan "Keutamaan" dalam PPrISA10 Borang Permohonan Pindaan: [PDF](../../references/pprisa-2.0/templates/pdf/PPrISA10-Borang_Pindaan.pdf), serta PPrISA09 Pelan Pengurusan Perubahan: [PDF](../../references/pprisa-2.0/templates/pdf/PPrISA09-Pelan_Pengurusan_Perubahan_Change_Mgt.pdf).
>
> **Rujukan panduan:** [PPrISA 2.0, 5.4.2 (impak pindaan daripada segi skop, tempoh, kos dan kualiti)](../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=92); [PPrISA 2.0, 4.2.3 c) Pengurusan Pindaan](../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=73); [KRISAv2 Bab 2, 2.11 Traceability Matrix (menganggar implikasi perubahan)](../../references/krisa-v2-beta-2026/BAB2-FASA-PERMULAAN.pdf#page=56); [KRISAv2 Bab 8, 8.3.3 Penyelarasan Pengurusan Perubahan dan Risiko](../../references/krisa-v2-beta-2026/BAB8-PENYELARASAN-PEMBANGUNAN-SISTEM-DEVOPS.pdf#page=9)
>
> Cara guna: gunakan RTM untuk mencari semua keperluan, kes ujian dan ralat yang terjejas. Tandakan setiap andaian dengan `[ANDAIAN: ...]`.

| Perkara | Butiran |
|---|---|
| ID Pindaan | `CR-SF-<nnn>` |
| Tajuk Pindaan | `<isi>` |
| Dianalisis oleh | `<nama rekaan>` |
| Tarikh | `<isi>` |

## 1. Ringkasan Perubahan

`<Keadaan semasa, keadaan dikehendaki, sebab.>`

## 2. Keperluan Terjejas (daripada RTM)

| ID Keperluan | BR Induk | Jenis Kesan (Ubah / Tambah / Buang) | Keterangan Kesan |
|---|---|---|---|
| `<REQ-CHK-xx / FR-xx>` | `<BR-xx>` | `<isi>` | `<isi>` |

## 3. Komponen Seni Bina dan Kontrak API Terjejas

| Komponen / Endpoint | Rujukan (architecture.md, openapi.yaml) | Perubahan Diperlukan |
|---|---|---|
| `<contoh: POST /api/discounts/apply>` | `<isi>` | `<isi>` |

## 4. Kes Ujian Terjejas dan Skop Regresi

| TC_ID | Tindakan (Kekal / Kemas Kini / Baharu / Bersara) | Automatik (Ya / Tidak) | Catatan |
|---|---|---|---|
| `<TC-CHK-xxx>` | `<isi>` | `<isi>` | `<isi>` |

**Skop ujian regresi:** `<contoh: semua ujian API checkout dan ujian UI aliran checkout>`

## 5. Impak kepada Projek (PPrISA 2.0: skop, tempoh, kos, kualiti)

| Dimensi | Impak (Tinggi / Sederhana / Rendah) | Keterangan | Anggaran |
|---|---|---|---|
| Skop | `<isi>` | `<isi>` | `<isi>` |
| Tempoh (jadual) | `<isi>` | `<isi>` | `<hari kerja>` |
| Kos | `<isi>` | `<isi>` | `<RM>` |
| Kualiti | `<isi>` | `<isi>` | `<isi>` |

## 6. Impak Keselamatan, Data Peribadi dan Operasi

| Aspek | Ada Impak (Ya / Tidak) | Keterangan |
|---|---|---|
| Keselamatan (OWASP Top 10:2025) | `<isi>` | `<isi>` |
| Data peribadi (Akta 709) | `<isi>` | `<isi>` |
| Prestasi (contoh: REQ-CHK-06) | `<isi>` | `<isi>` |
| Operasi, latihan dan dokumentasi pengguna | `<isi>` | `<isi>` |

## 7. Risiko Baharu

| ID Risiko | Risiko | Kebarangkalian (1-5) | Impak (1-5) | Skor | Mitigasi |
|---|---|---|---|---|---|
| `<RSK-xx>` | `<isi>` | `<isi>` | `<isi>` | `<isi>` | `<isi>` |

## 8. Impak jika Pindaan Tidak Dilaksanakan

`<isi>`

## 9. Alternatif

| Pilihan | Kelebihan | Kekurangan | Anggaran |
|---|---|---|---|
| `<isi>` | `<isi>` | `<isi>` | `<isi>` |

## 10. Cadangan Keputusan (untuk PPrISA10 bahagian Pengurus Projek)

| Impak Keseluruhan | Keutamaan | Cadangan (Lulus / Tidak Lulus / Ditangguhkan) | Pelan Undur Diperlukan |
|---|---|---|---|
| `<Tinggi / Sederhana / Rendah>` | `<Tinggi / Sederhana / Rendah>` | `<isi>` | `<Ya: Rollback-Plan-template.md / Tidak>` |

**Justifikasi:** `<isi>`
