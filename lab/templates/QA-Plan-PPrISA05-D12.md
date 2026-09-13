# Templat Pelan Kualiti dan Pengujian (QA Plan)

> **Templat ini mencerminkan (mirrors):**
> - PPrISA05 Pelan Pengurusan Kualiti: [PDF](../../references/pprisa-2.0/templates/pdf/PPrISA05-Pelan_Pengurusan_Kualiti.pdf), [Word](../../references/pprisa-2.0/templates/word/PPrISA05-PelanPengurusanKualiti.docx) (seksyen 1 hingga 6)
> - D12 Dokumen Pelan Induk Pengujian: [DOCX](../../references/templates-D01-D18/docx/D12_DOKUMEN_PELAN_INDUK_PENGUJIAN.docx) (Konteks Pengujian, Daftar Risiko, Strategi Ujian, Jadual, Struktur Perjawatan)
>
> **Rujukan panduan:** [PPrISA 2.0, 4.2.4 a) Pengurusan Kualiti](../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=74); [KRISAv2 Bab 6, 6.6 Penyediaan Pelan Induk Pengujian [F5.1]](../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=4); [KRISAv2 Bab 8, 8.3.1 Penyelarasan Aktiviti (Gate Review)](../../references/krisa-v2-beta-2026/BAB8-PENYELARASAN-PEMBANGUNAN-SISTEM-DEVOPS.pdf#page=5)
>
> Cara guna: ganti setiap `<isi>`. Baris bertanda "Contoh ShopFast" boleh dipadam atau disesuaikan. Gunakan data sintetik sahaja.

| Perkara | Butiran |
|---|---|
| Nama Projek | `<isi>` (Contoh ShopFast: ShopFast Checkout v1.1) |
| Pengurus Projek | `<isi nama rekaan>` |
| Tarikh Mula / Tarikh Selesai | `<hh/bb/tttt>` / `<hh/bb/tttt>` |
| No. Rujukan Fail | `<isi>` |
| Versi Dokumen | `<isi>` |

## Rekod Pengemaskinian Dokumen

| Versi | Tarikh | Dikemas kini oleh | Disahkan oleh | Ringkasan Perubahan |
|---|---|---|---|---|
| `<isi>` | `<isi>` | `<isi>` | `<isi>` | `<isi>` |

---

## 1. Tujuan (PPrISA05 seksyen 1)

`<Terangkan tujuan dokumen: teknik dan piawaian kualiti yang digunakan serta personel yang bertanggungjawab.>`

## 2. Skop (D12 Konteks Pengujian)

### 2.1 Item Ujian

| Modul / Item | Keperluan Berkaitan | Catatan |
|---|---|---|
| `<isi>` | `<BR, REQ-CHK atau FR>` | `<isi>` |
| Contoh ShopFast: Modul Checkout | REQ-CHK-01 hingga REQ-CHK-06 | Keutamaan tertinggi |

### 2.2 Skop Ujian

- **Dalam skop:** `<ciri fungsian dan bukan fungsian yang akan diuji>`
- **Luar skop:** `<ciri yang tidak akan diuji dan sebabnya>`

### 2.3 Kekangan

`<Contoh: persekitaran staging belum tersedia; data ujian mesti sintetik; tempoh UAT 5 hari.>`

## 3. Peranan dan Tanggungjawab (PPrISA05 seksyen 2, D12 Struktur Perjawatan)

| Peranan | Tanggungjawab | Pegawai Bertanggungjawab |
|---|---|---|
| Pemilik Projek | Meluluskan pelan kualiti dan keputusan gate | `<nama rekaan>` |
| Pengurus Projek | Memantau projek mengikut piawaian kualiti dan prosedur kerja | `<nama rekaan>` |
| Pengurus / Ketua Ujian | Merancang, mengurus dan melaporkan pengujian | `<nama rekaan>` |
| Pasukan Kualiti (SQA) | Audit dan semakan proses serta serahan; cadangan penambahbaikan | `<nama rekaan>` |
| Pembangun Sistem | Pembangunan, ujian unit dan pembetulan ralat | `<nama rekaan>` |
| SME / Pemilik Proses | Mengesahkan keperluan dan melaksanakan UAT | `<nama rekaan>` |

## 4. Piawaian Kualiti (PPrISA05 seksyen 3)

1. Kitar hayat pembangunan: KRISAv2 Versi Beta 2026
2. Pengurusan projek: PPrISA 2.0
3. Model kualiti produk: ISO/IEC 25010
4. Dokumentasi ujian: ISO/IEC/IEEE 29119-3
5. Keselamatan aplikasi: OWASP Top 10:2025
6. `<piawaian agensi lain>`

## 5. Peralatan Kualiti (PPrISA05 seksyen 4)

| Peralatan | Kegunaan | Contoh ShopFast |
|---|---|---|
| Semakan (Inspection / Walkthrough) | Semakan BRS, SRS dan reka bentuk | `/review-srs`, `/design-review` |
| Audit | Pematuhan proses | `/audit` dengan Audit-Checklist-ISO-CMMI-lite.md |
| Ujian automatik | Regresi API dan UI | Newman, Playwright, GitHub Actions |
| Ujian penerimaan | UAT dan PAT | Test-Cases-D13.csv |

## 6. Strategi Ujian (D12 Strategi Ujian)

| Peringkat Ujian | Jenis Ujian | Teknik Reka Bentuk Ujian | Pelaksana |
|---|---|---|---|
| Unit | Fungsian | Liputan kod, BVA | Pembangun |
| Sistem / Integrasi | Fungsian, API contract, keselamatan asas | EP, BVA, decision table, state transition | Penguji |
| UAT | Fungsian end-to-end | Senario use case | SME dan pengguna |
| PAT | Prestasi, keselamatan | Ujian beban, imbasan keselamatan | Pasukan teknikal |

- **Data ujian:** `<sintetik sahaja; contoh akaun example.test>`
- **Persekitaran ujian:** `<Dev, CI, Staging>`
- **Penetapan tahap severity:** ikut [KRISAv2 Bab 6, Jadual 6.3](../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=7) (1 Tinggi, 2 Sederhana, 3 Rendah). Rujuk [Bug-Report-Template.md](Bug-Report-Template.md).
- **Kriteria penangguhan dan penyambungan semula (Suspension and resumption):** `<contoh: gantung ujian jika persekitaran tidak stabil lebih 2 jam>`

## 7. Kriteria Masuk dan Kriteria Keluar (Entry and Exit Criteria)

| Peringkat | Kriteria Masuk (Entry) | Kriteria Keluar (Exit) |
|---|---|---|
| Ujian Sistem | SRS diluluskan; binaan lulus CI; data ujian tersedia | 100% kes ujian P1 dilaksanakan; kadar lulus sekurang-kurangnya 95%; tiada ralat severity 1 terbuka |
| UAT | Exit ujian sistem dipenuhi; pelan UAT (D13) diluluskan | Semua senario UAT dilaksanakan; tiada severity 1 dan 2 terbuka; pengesahan SME |
| `<isi>` | `<isi>` | `<isi>` |

## 8. Quality Gates

| Gate | Fasa KRISA | Serahan Diperiksa | Kriteria Lulus | Pelulus |
|---|---|---|---|---|
| G1 Keperluan | Analisis | BRS, SRS, RTM | Tiada ID pendua; setiap keperluan ada kriteria penerimaan dan BR; semakan SRS ditutup | Pemilik Projek |
| G2 Reka Bentuk | Reka Bentuk | Seni bina, openapi.yaml, daftar risiko | Semua penemuan risiko Kritikal ada mitigasi; kontrak API lengkap | Pengurus Projek |
| G3 Sedia UAT | Pembangunan / Pengujian | Laporan ujian sistem, metrik | Exit ujian sistem dipenuhi; CI hijau | Ketua Ujian |
| G4 Sedia Produksi | Pengujian Penerimaan / Pelaksanaan | Laporan UAT/PAT (D14), Laporan Penamatan Ujian (D16), pelan undur | Exit UAT dipenuhi; REQ-CHK-06 disahkan; pelan undur diuji | Pemilik Projek |

Keputusan setiap gate: **GO**, **NO-GO** atau **CONDITIONAL** (lulus bersyarat dengan tindakan dan tarikh akhir). Rekod keputusan dalam [Test-Summary-D14-D16.md](Test-Summary-D14-D16.md).

## 9. Kriteria Penerimaan (PPrISA05 seksyen 5)

| Milestones | Serahan Utama | Kriteria Penerimaan | Pegawai Bertanggungjawab |
|---|---|---|---|
| Analisis | Dokumen Spesifikasi Keperluan (BRS, SRS) | Persetujuan SME melalui Sijil Pengesahan | `<isi>` |
| Reka Bentuk | Dokumen Teknikal (seni bina, kontrak API) | Walkthrough dan Sijil Pengesahan | `<isi>` |
| Pengujian | Skrip UAT dan Laporan UAT | UAT / FAT diterima oleh SME dan pengguna sistem | `<isi>` |

## 10. Pelan Jaminan dan Kawalan Kualiti (PPrISA05 seksyen 6)

| Milestones | Serahan Utama | Pelan Tindakan | Pegawai Bertanggungjawab |
|---|---|---|---|
| Analisis | BRS, SRS | Audit / Semakan | Pasukan Kualiti |
| Reka Bentuk | Dokumen Teknikal | Audit / Semakan | Pasukan Kualiti |
| Pengujian | Skrip dan Laporan UAT | Audit / Semakan | Pasukan Kualiti |
| Pelaksanaan | Aplikasi | Post Implementation Review (PIR) | Pasukan khas bukan ahli pasukan projek |

## 11. Metrik Kualiti (D12 Pengukuran Metrik)

| Metrik | Formula Ringkas | Sasaran | Kekerapan |
|---|---|---|---|
| Kadar lulus ujian (Pass rate) | Lulus / Dilaksana x 100 | Sekurang-kurangnya 95% pada exit | Harian semasa ujian |
| Ketumpatan ralat (Defect density) | Ralat / Saiz (UFP) | `<isi>` | Setiap kitaran |
| Keberkesanan penyingkiran ralat (DRE) | Ralat sebelum pelepasan / Jumlah ralat x 100 | Sekurang-kurangnya 90% | Selepas 30 hari produksi |
| Kebocoran ralat (Defect leakage) | Ralat UAT / Ralat ujian sistem x 100 | Tidak melebihi 10% | Selepas UAT |
| MTTR | Jumlah masa pembaikan / Bilangan ralat dibaiki | Severity 1: tidak melebihi 8 jam | Mingguan |

Butiran formula dan contoh kiraan: [Quality-Metrics-guide.md](Quality-Metrics-guide.md).

## 12. Daftar Risiko (D12 Daftar Risiko, PPrISA07)

Rekod risiko dalam [Risk-Register-PPrISA07.csv](Risk-Register-PPrISA07.csv). Skala 1 (Rendah) hingga 5 (Tinggi); Skor = Kebarangkalian x Impak.

## 13. Jadual Perancangan Ujian (D12)

| Bil | Aktiviti | Minggu 1 | Minggu 2 | Minggu 3 | Minggu 4 |
|---|---|---|---|---|---|
| 1 | Ujian Sistem | X | X | | |
| 2 | Pembetulan dan ujian semula | | X | X | |
| 3 | UAT | | | X | |
| 4 | PAT dan keputusan G4 | | | | X |

## 14. Kaedah Komunikasi (D12)

| Situasi | Peranan | Tindakan | Medium Komunikasi |
|---|---|---|---|
| Semakan dan pengesahan pelan ujian | Pengurus Ujian, Pemilik Sistem | Walkthrough | Mesyuarat, emel |
| Penemuan ralat | Penguji | Laporkan ralat | Bug-Report-Template.md, alat pengurusan ujian |
| Pembetulan ralat | Pasukan pembangun | Kemas kini status ralat | Alat pengurusan ujian |

## Pengesahan Dokumen

| Peranan | Nama | Jawatan | Tarikh |
|---|---|---|---|
| Pengurus Projek | `<nama rekaan>` | `<isi>` | `<isi>` |
| Pengarah Projek (jika ada) | `<nama rekaan>` | `<isi>` | `<isi>` |
| Pemilik Projek | `<nama rekaan>` | `<isi>` | `<isi>` |
