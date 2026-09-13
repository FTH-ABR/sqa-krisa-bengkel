# Templat Tindakan Pembetulan dan Pencegahan (CAPA)

> **Templat ini mencerminkan (mirrors):**
> - PPrISA08 Pelan Pengurusan Isu: [PDF](../../references/pprisa-2.0/templates/pdf/PPrISA08-Pelan_Pengurusan_Isu.pdf)
> - PPrISA15 Log Penyelesaian Isu: [PDF](../../references/pprisa-2.0/templates/pdf/PPrISA15-Log_Penyelesaian_Isu.pdf)
> - PPrISA14 Borang Pelaporan Isu (Analisis Impak, Keutamaan, Keputusan): [PDF](../../references/pprisa-2.0/templates/pdf/PPrISA14-Borang_Pelaporan_Isu.pdf)
> - PPrISA 2.0, 5.4.2 i b) Isu: Borang Pelaporan dan Log Penyelesaian Isu: [halaman 92](../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=92)
> - Piawaian luar (ringkasan): ISO 9001:2015 klausa 10.2 Ketakakuran dan Tindakan Pembetulan; CMMI Causal Analysis and Resolution (CAR).
>
> Cara guna: satu CAPA bagi setiap ketakakuran (NC) audit, ralat produksi atau insiden berulang. ID `CAPA-<nnn>`. Data sintetik sahaja.

## 1. Maklumat CAPA

| Medan | Isian |
|---|---|
| ID CAPA | `CAPA-<nnn>` |
| Sumber | `<Penemuan audit AUD-xx / Ralat BUG-CHK-xxx / Insiden / Aduan>` |
| Tarikh dibuka | `<hh/bb/tttt>` |
| Pemilik CAPA | `<nama rekaan dan jawatan>` |
| Keperluan / proses terjejas | `<contoh: REQ-CHK-03; proses semakan SRS>` |
| Impak (Tinggi / Sederhana / Rendah) | `<isi>` |
| Keutamaan (Tinggi / Sederhana / Rendah) | `<isi>` |

## 2. Penerangan Ketakakuran (Nonconformity)

`<Apa yang berlaku, di mana, bila, bukti objektif. Nyatakan keperluan atau prosedur yang tidak dipatuhi.>`

## 3. Tindakan Pembendungan Segera (Containment)

| Tindakan | Oleh | Tarikh | Status |
|---|---|---|---|
| `<contoh: hentikan pemasangan; tambah ujian manual sementara>` | `<isi>` | `<isi>` | `<isi>` |

## 4. Analisis Punca Akar (Root Cause Analysis)

### 4.1 Kaedah 5 Mengapa (5 Whys)

| Mengapa | Jawapan |
|---|---|
| 1. Mengapa masalah berlaku? | `<isi>` |
| 2. Mengapa? | `<isi>` |
| 3. Mengapa? | `<isi>` |
| 4. Mengapa? | `<isi>` |
| 5. Mengapa? | `<isi>` |

### 4.2 Kategori Punca (Fishbone ringkas)

| Kategori | Punca Berkemungkinan | Disahkan (Ya / Tidak) |
|---|---|---|
| Manusia (kemahiran, beban kerja) | `<isi>` | |
| Kaedah (proses, templat, senarai semak) | `<isi>` | |
| Alat (CI, alat ujian, persekitaran) | `<isi>` | |
| Bahan (keperluan, data ujian) | `<isi>` | |
| Ukuran (metrik, kriteria keluar) | `<isi>` | |
| Persekitaran (jadual, organisasi) | `<isi>` | |

**Punca akar yang disahkan:** `<isi>`

## 5. Tindakan Pembetulan (Corrective Action)

Membetulkan punca akar supaya masalah yang sama tidak berulang.

| Bil | Tindakan | Pemilik | Tarikh Sasaran | Status |
|---|---|---|---|---|
| 1 | `<isi>` | `<isi>` | `<isi>` | `<Terbuka / Dalam Tindakan / Selesai>` |

## 6. Tindakan Pencegahan (Preventive Action)

Mencegah masalah serupa di modul, projek atau proses lain.

| Bil | Tindakan | Pemilik | Tarikh Sasaran | Status |
|---|---|---|---|---|
| 1 | `<contoh: tambah item semakan dalam Design-Review-Checklist.md>` | `<isi>` | `<isi>` | `<isi>` |

## 7. Pengesahan Keberkesanan (Effectiveness Verification)

| Kriteria Keberkesanan | Kaedah Pengesahan | Tarikh Semakan | Keputusan |
|---|---|---|---|
| `<contoh: tiada ralat serupa dalam 2 kitaran ujian seterusnya>` | `<contoh: semak laporan ralat dan metrik QM-04>` | `<isi>` | `<Berkesan / Tidak Berkesan>` |

## 8. Penutupan

| Medan | Isian |
|---|---|
| Keputusan | `<Ditutup / Dibuka semula / Ditangguhkan>` |
| Disahkan oleh | `<nama rekaan dan jawatan>` |
| Tarikh ditutup | `<isi>` |

## Log CAPA (format PPrISA15 ringkas)

| ID CAPA | Sumber | Keterangan Ringkas | Pemilik | Tarikh Dibuka | Tarikh Sasaran | Status | Tarikh Ditutup |
|---|---|---|---|---|---|---|---|
| `<CAPA-001>` | `<isi>` | `<isi>` | `<isi>` | `<isi>` | `<isi>` | `<isi>` | `<isi>` |
