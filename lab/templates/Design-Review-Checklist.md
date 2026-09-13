# Senarai Semak Semakan Reka Bentuk (Design Review Checklist)

> **Templat ini mencerminkan (mirrors):**
> - KRISAv2 Bab 4, 4.5 Reka Bentuk Seni Bina Sistem: [BAB4-FASA-REKA-BENTUK.pdf, halaman 4](../../references/krisa-v2-beta-2026/BAB4-FASA-REKA-BENTUK.pdf#page=4)
> - Templat D04 Spesifikasi Reka Bentuk Sistem (SDS): [DOCX](../../references/templates-D01-D18/docx/D04_DOKUMEN_SPESIFIKASI_REKABENTUK_SISTEM_SDS.docx)
> - PPrISA05 seksyen 6 (Audit / Semakan bagi serahan Reka Bentuk): [PDF](../../references/pprisa-2.0/templates/pdf/PPrISA05-Pelan_Pengurusan_Kualiti.pdf)
>
> **Rujukan tambahan:** [KRISAv2 Bab 1, 1.6.7 Faktor Keselamatan ICT](../../references/krisa-v2-beta-2026/BAB1-PERANCANGAN.pdf#page=24); [KRISAv2 Bab 5, 5.6.8 Amalan Pengaturcaraan Selamat](../../references/krisa-v2-beta-2026/BAB5-FASA-PEMBANGUNAN.pdf#page=30); [PPrISA 2.0, 4.2.3 a) Pengurusan Risiko](../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=71); OWASP Top 10:2025.
>
> Cara guna: untuk setiap item, tanda Status `Ya` (dipenuhi), `Tidak` (penemuan) atau `TB` (tidak berkenaan). Setiap `Tidak` mesti ada bukti lokasi (contoh: architecture.md RB-04) dan dipindahkan ke Risk-Register-PPrISA07.csv.

| Perkara | Butiran |
|---|---|
| Dokumen disemak | `<contoh: shopfast/docs/architecture.md v1.1 dan openapi.yaml v1.1.0>` |
| Tarikh semakan | `<isi>` |
| Penyemak | `<nama rekaan>` |
| Kaedah | Walkthrough / Inspection |

## Skala Risiko (untuk setiap penemuan)

Skor = Kebarangkalian (1 hingga 5) x Impak (1 hingga 5). Tahap: 1 hingga 4 **Rendah**; 5 hingga 9 **Sederhana**; 10 hingga 16 **Tinggi**; 20 hingga 25 **Kritikal**. Keutamaan ujian: P1 untuk Tinggi dan Kritikal, P2 untuk Sederhana, P3 untuk Rendah.

## A. Kebolehujian (Testability)

| ID | Soalan Semakan | Status | Bukti / Lokasi | Penemuan |
|---|---|---|---|---|
| T-01 | Setiap komponen dan endpoint boleh diuji secara berasingan (keadaan boleh ditetapkan semula, kebergantungan boleh diganti dengan mock)? | | | |
| T-02 | Setiap keperluan bukan fungsian diterjemah kepada reka bentuk yang boleh diukur (had masa, beban, had kuantiti)? | | | |
| T-03 | Data ujian dan persekitaran boleh disediakan semula dengan konsisten? | | | |
| T-04 | Log dan pemantauan membolehkan hasil disahkan tanpa mendedahkan data peribadi? | | | |
| T-05 | Peraturan bisnes yang berubah (kadar diskaun, jadual peralihan status) disimpan sebagai konfigurasi yang boleh diuji? | | | |
| T-06 | Logik bergantung masa (tarikh luput, tempoh kunci akaun) boleh dikawal semasa ujian? | | | |

## B. Pengendalian Ralat (Error Handling)

| ID | Soalan Semakan | Status | Bukti / Lokasi | Penemuan |
|---|---|---|---|---|
| E-01 | Laluan gagal, lambat dan tamat masa (timeout) bagi setiap integrasi pihak ketiga direka bentuk? | | | |
| E-02 | Operasi yang mungkin dihantar dua kali (checkout, bayaran, guna kod) adalah idempotent? | | | |
| E-03 | Format ralat konsisten dan tidak mendedahkan mesej dalaman atau stack trace? | | | |
| E-04 | Keadaan dan peralihan tidak sah ditolak dengan kod status yang jelas (400, 409, 422)? | | | |
| E-05 | Kegagalan separa (contoh: pesanan dicipta tetapi emel gagal) dikendalikan? | | | |
| E-06 | Data dan keadaan dipulihkan dengan betul selepas proses dimulakan semula? | | | |

## C. Keselamatan (OWASP Top 10:2025)

| ID | Kategori OWASP | Soalan Semakan | Status | Bukti / Lokasi | Penemuan |
|---|---|---|---|---|---|
| S-A01 | A01 Broken Access Control | Pemilikan objek disemak pada setiap endpoint yang memulangkan atau mengubah data (IDOR); peranan dipisahkan? | | | |
| S-A02 | A02 Security Misconfiguration | CORS, header keselamatan dan tetapan lalai sesuai untuk produksi? | | | |
| S-A03 | A03 Software Supply Chain Failures | Kebergantungan dan alat binaan dipin versinya dan diimbas? | | | |
| S-A04 | A04 Cryptographic Failures | Kata laluan disimpan dengan hash yang perlahan (bcrypt, scrypt, Argon2id); trafik menggunakan HTTPS; token rawak dan bertempoh? | | | |
| S-A05 | A05 Injection | Semua input disahkan di pelayan dan output dikodkan? | | | |
| S-A06 | A06 Insecure Design | Model ancaman (threat model) wujud; had kadar dan kawalan anti-automasi direka bentuk? | | | |
| S-A07 | A07 Authentication Failures | Log masuk dilindungi daripada serangan brute force dan password spraying; sesi dan token diurus dengan selamat? | | | |
| S-A08 | A08 Software or Data Integrity Failures | Callback dan data daripada pihak ketiga (contoh: status bayaran) disahkan integritinya? | | | |
| S-A09 | A09 Security Logging and Alerting Failures | Peristiwa keselamatan dilog dengan identiti pelaku, tanpa data peribadi, dan ada amaran? | | | |
| S-A10 | A10 Mishandling of Exceptional Conditions | Keadaan luar biasa ditangani secara selamat (fail closed) tanpa membocorkan maklumat? | | | |

## D. Kontrak API (API Contract)

| ID | Soalan Semakan | Status | Bukti / Lokasi | Penemuan |
|---|---|---|---|---|
| C-01 | Setiap endpoint dalam reka bentuk wujud dalam openapi.yaml dan sebaliknya? | | | |
| C-02 | Setiap kod status dan kod ralat yang mungkin (400, 401, 403, 404, 409, 422, 423, 500) didokumenkan? | | | |
| C-03 | Skema permintaan dan respons lengkap dengan kekangan (min, max, pattern, enum)? | | | |
| C-04 | Keperluan pengesahan (security scheme) diisytiharkan bagi setiap endpoint? | | | |
| C-05 | Versi API dan keserasian ke belakang dinyatakan? | | | |
| C-06 | Pengecam sumber (contoh: orderId) tidak mudah diteka, atau akses dikawal walaupun ID diteka? | | | |
| C-07 | Setiap keperluan (REQ-CHK, FR) dipetakan kepada sekurang-kurangnya satu endpoint? | | | |

## E. Ringkasan Penemuan

| No. Penemuan | Item Senarai Semak | Lokasi | Penemuan | Kebarangkalian | Impak | Skor | Keutamaan Ujian |
|---|---|---|---|---|---|---|---|
| DR-01 | `<contoh: S-A01>` | `<contoh: architecture.md RB-xx>` | `<isi>` | `<1-5>` | `<1-5>` | `<K x I>` | `<P1/P2/P3>` |

## F. Analisis STRIDE (pilihan)

| STRIDE | Elemen | Ancaman | Kawalan Sedia Ada | Kawalan Dicadangkan | Idea Ujian |
|---|---|---|---|---|---|
| Spoofing | `<isi>` | `<isi>` | `<isi>` | `<isi>` | `<isi>` |
| Tampering | | | | | |
| Repudiation | | | | | |
| Information disclosure | | | | | |
| Denial of service | | | | | |
| Elevation of privilege | | | | | |

## Pengesahan Semakan

| Peranan | Nama | Keputusan | Tarikh |
|---|---|---|---|
| Penyemak | `<nama rekaan>` | Diterima / Diterima bersyarat / Semak semula | `<isi>` |
| Arkitek / Ketua Pembangun | `<nama rekaan>` | | `<isi>` |
