# Templat Borang Permohonan Pindaan (Change Request Form)

> **Templat ini mencerminkan (mirrors):** PPrISA10 Borang Permohonan Pindaan: [PDF](../../references/pprisa-2.0/templates/pdf/PPrISA10-Borang_Pindaan.pdf), [Word](../../references/pprisa-2.0/templates/word/PPrISA10-BorangPindaan.doc). Log berkaitan: PPrISA11 Log Penyelesaian Pindaan: [PDF](../../references/pprisa-2.0/templates/pdf/PPrISA11-Log_Penyelesaian_Pindaan.pdf).
>
> **Rujukan panduan:** [PPrISA 2.0, 4.2.3 c) Pengurusan Pindaan (Change Request)](../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=73); [PPrISA 2.0, 5.4.2 Pemantauan (permohonan pindaan)](../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=92); [KRISAv2 Bab 8, 8.3.3 Penyelarasan Pengurusan Perubahan dan Risiko](../../references/krisa-v2-beta-2026/BAB8-PENYELARASAN-PEMBANGUNAN-SISTEM-DEVOPS.pdf#page=9)
>
> Cara guna: medan bertanda (ShopFast) ialah tambahan bengkel untuk keterjejakan. Lengkapkan juga [Impact-Analysis-template.md](Impact-Analysis-template.md) dan [Rollback-Plan-template.md](Rollback-Plan-template.md). Data sintetik sahaja.

**BORANG PERMOHONAN PINDAAN (CHANGE REQUEST FORM)**

| Medan | Isian |
|---|---|
| Nama Projek | `<contoh: ShopFast Checkout v1.1>` |
| ID Pindaan (diisi oleh Pengurus Projek) | `CR-SF-<nnn>` |

## Permohonan oleh

| Medan | Isian |
|---|---|
| Nama | `<nama rekaan>` |
| Jawatan | `<isi>` |
| Bahagian / Agensi | `<isi>` |
| Alamat Emel | `<nama>@example.test` |
| Nombor Telefon | `<nombor rekaan>` |
| Tarikh Permohonan | `<hh/bb/tttt>` |
| Modul | `<isi>` |
| Sub Modul | `<isi>` |
| Tarikh Kelulusan Pindaan Diperlukan (jika ada) | `<isi>` |
| Tarikh Pindaan Diperlukan (jika ada) | `<isi>` |
| Tandatangan Pemohon | `<isi>` |

## 1. Jenis Pindaan (tandakan yang berkenaan)

- [ ] Skop
- [ ] Proses Kerja
- [ ] Teknologi
- [ ] Penambahbaikan Sistem / Fungsi
- [ ] Lain-lain, nyatakan: `<isi>`

## 2. Keterangan Pindaan

`<Apa yang perlu diubah; keadaan semasa dan keadaan yang dikehendaki.>`

**Keperluan terjejas (ShopFast):** `<BR-xx, REQ-CHK-xx, FR-xx, NFR-xx persis daripada BRS dan SRS>`

## 3. Impak terhadap Projek

`<Ringkasan impak kepada skop, tempoh, kos dan kualiti. Butiran dalam Impact-Analysis-template.md.>`

## 4. Justifikasi

`<Sebab pindaan diperlukan.>`

## 5. Impak terhadap Projek, jika Pindaan Tidak Dilaksanakan

`<isi>`

## 6. Alternatif Lain

`<isi>`

**Lampiran disertakan:** Ya / Tidak (potong yang tidak berkenaan)

---

## Untuk Diisi oleh Pengurus Projek

| Medan | Isian |
|---|---|
| Tarikh Diterima | `<isi>` |
| Analisis Impak | `<rujukan: outputs/m08-impact-analysis atau ringkasan>` |

| Impak (Tinggi / Sederhana / Rendah) | Keutamaan (Tinggi / Sederhana / Rendah) | Keputusan (Lulus / Tidak Lulus / Ditangguhkan) | Pegawai Bertanggungjawab | Cadangan Pelaksanaan / Catatan |
|---|---|---|---|---|
| `<isi>` | `<isi>` | `<isi>` | `<isi>` | `<isi>` |

**Disahkan oleh:** Pengurus Projek

| Nama | Jawatan | Tarikh |
|---|---|---|
| `<nama rekaan>` | `<isi>` | `<isi>` |

## Log Penyelesaian Pindaan (format PPrISA11 ringkas)

| ID Pindaan | Keterangan Ringkas | Tarikh Diterima | Keputusan | Pegawai Bertanggungjawab | Tarikh Sasaran | Status |
|---|---|---|---|---|---|---|
| `<CR-SF-001>` | `<isi>` | `<isi>` | `<isi>` | `<isi>` | `<isi>` | `<isi>` |
