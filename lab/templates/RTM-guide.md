# Panduan RTM (Requirements Traceability Matrix)

> **Templat ini mencerminkan (mirrors):** KRISAv2 Bab 2, seksyen 2.11 Penyediaan Traceability Matrix (RTM) [F1.8], Templat T2.8 Traceability Matrix: [BAB2-FASA-PERMULAAN.pdf, halaman 56](../../references/krisa-v2-beta-2026/BAB2-FASA-PERMULAAN.pdf#page=56). Lampiran RTM juga disenaraikan dalam [D13 Pelan Ujian Penerimaan (UAT/PAT)](../../references/templates-D01-D18/docx/D13_DOKUMEN_PELAN_UJIAN_PENERIMAAN_UAT-PAT.docx) seksyen Lampiran.
>
> Fail kerja: [RTM-template.csv](RTM-template.csv)

## 1. Tujuan RTM (KRISAv2 2.11.1)

RTM menjejaki setiap keperluan sepanjang kitar hayat pembangunan sistem untuk memastikan:
1. semua keperluan sistem telah dibangunkan;
2. keperluan atau fungsi yang dibangunkan telah diuji; dan
3. semua pindaan ke atas aktiviti berkaitan dilaksanakan.

Kelebihan: memastikan keseluruhan keperluan diuji, mengenal pasti keperluan yang tidak dinyatakan atau tidak konsisten, mengenal pasti ralat dan status ujian berorientasikan keperluan bisnes, dan membantu menganggar implikasi pembetulan ralat atau perubahan.

## 2. Pemetaan Medan T2.8 kepada Lajur CSV

Jadual 2.18 KRISAv2 menyenaraikan medan T2.8: ID Senario Ujian, ID Use Case, ID Kes Ujian dan Keterangan Kes Ujian. Templat bengkel menambah BR dan status supaya keterjejakan dua hala (bidirectional) boleh disemak.

| Lajur CSV | Medan T2.8 / Sumber | Cara Isi |
|---|---|---|
| BR_ID | Tambahan (BRS seksyen 3.1.4) | ID keperluan bisnes induk, contoh BR-03 |
| FR_ID | ID keperluan dalam SRS (dirujuk melalui ID Use Case) | REQ-CHK-01 hingga REQ-CHK-06, FR-xx atau NFR-xx persis seperti dalam SRS |
| Requirement | Ringkasan keperluan | Satu ayat pendek tanpa koma |
| Test_Case_IDs | ID Kes Ujian | TC-CHK-001 dan seterusnya; berbilang dipisah dengan `;` |
| Test_Level | Tambahan (D12 Strategi Ujian) | Unit, Integrasi, Sistem, UAT atau PAT |
| Status | Tambahan | Belum Diuji, Lulus, Gagal, Disekat atau Tidak Berkenaan |
| Defect_IDs | Tambahan (KRISAv2 Bab 6, 6.3) | BUG-CHK-001 dan seterusnya; kosong jika tiada |
| Coverage | Tambahan | Diliputi, Separa atau Tiada (lihat seksyen 4) |

ID Senario Ujian dan ID Use Case (contoh UC-03) boleh dicatat dalam lajur `Tajuk` atau `Prasyarat` fail [Test-Cases-D13.csv](Test-Cases-D13.csv).

## 3. Langkah Pengisian

1. Senaraikan setiap BR daripada BRS dan setiap REQ-CHK, FR dan NFR daripada SRS. Satu baris bagi setiap pasangan BR dan keperluan.
2. Jangan cipta ID baharu. Jika keperluan tiada BR induk, biarkan `BR_ID` kosong dan catat dalam laporan semakan.
3. Petakan kes ujian daripada Test-Cases-D13.csv ke lajur `Test_Case_IDs`.
4. Selepas pelaksanaan ujian, kemas kini `Status` dan `Defect_IDs`.
5. Kira liputan (seksyen 4) dan semak jurang (seksyen 5).

## 4. Nilai Coverage dan Formula

| Nilai | Maksud |
|---|---|
| Diliputi | Setiap kriteria penerimaan keperluan mempunyai sekurang-kurangnya satu kes ujian, termasuk kes negatif dan sempadan |
| Separa | Ada kes ujian tetapi tidak semua kriteria penerimaan atau sempadan diliputi |
| Tiada | Tiada kes ujian |

**Liputan keperluan (%)** = Bilangan keperluan berstatus Diliputi / Jumlah keperluan x 100

**Liputan pelaksanaan (%)** = Bilangan keperluan dengan sekurang-kurangnya satu kes ujian dilaksanakan / Jumlah keperluan x 100

Contoh (angka rekaan): 20 keperluan, 14 Diliputi, 4 Separa, 2 Tiada. Liputan keperluan = 14 / 20 x 100 = 70.0%.

## 5. Semakan Jurang (Gap Check)

| Semakan | Soalan | Tindakan jika gagal |
|---|---|---|
| Keterjejakan ke hadapan (forward) | Adakah setiap BR mempunyai sekurang-kurangnya satu keperluan sistem? | Tambah keperluan atau sahkan BR luar skop |
| Keterjejakan ke belakang (backward) | Adakah setiap keperluan sistem mempunyai BR induk? | Laporkan sebagai isu keterjejakan |
| ID unik | Adakah mana-mana ID muncul dua kali dengan maksud berbeza? | Laporkan kepada pemilik SRS |
| Keperluan tanpa ujian | Adakah ada baris Coverage = Tiada? | Tambah kes ujian atau catat risiko |
| Ujian tanpa keperluan | Adakah ada kes ujian yang tidak dipetakan? | Petakan atau buang |
| Ralat terbuka | Adakah keperluan berstatus Gagal mempunyai Defect_IDs? | Lengkapkan laporan ralat |

## 6. Contoh Baris (format sahaja)

| BR_ID | FR_ID | Requirement | Test_Case_IDs | Test_Level | Status | Defect_IDs | Coverage |
|---|---|---|---|---|---|---|---|
| BR-03 | REQ-CHK-02 | Kod promosi 6 hingga 10 aksara huruf besar dan digit sahaja | TC-CHK-010;TC-CHK-011 | Sistem | Belum Diuji | | Separa |
