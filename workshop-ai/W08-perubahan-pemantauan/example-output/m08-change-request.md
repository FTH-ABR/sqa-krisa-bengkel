# Templat Borang Permohonan Pindaan (Change Request Form)

> **Templat ini mencerminkan (mirrors):** PPrISA10 Borang Permohonan Pindaan: [PDF](../../../references/pprisa-2.0/templates/pdf/PPrISA10-Borang_Pindaan.pdf), [Word](../../../references/pprisa-2.0/templates/word/PPrISA10-BorangPindaan.doc). Log berkaitan: PPrISA11 Log Penyelesaian Pindaan: [PDF](../../../references/pprisa-2.0/templates/pdf/PPrISA11-Log_Penyelesaian_Pindaan.pdf).
>
> **Rujukan panduan:** [PPrISA 2.0, 4.2.3 c) Pengurusan Pindaan (Change Request)](../../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=73); [PPrISA 2.0, 5.4.2 Pemantauan (permohonan pindaan)](../../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=92); [KRISAv2 Bab 8, 8.3.3 Penyelarasan Pengurusan Perubahan dan Risiko](../../../references/krisa-v2-beta-2026/BAB8-PENYELARASAN-PEMBANGUNAN-SISTEM-DEVOPS.pdf#page=9)
>
> Cara guna: medan bertanda (ShopFast) ialah tambahan bengkel untuk keterjejakan. Lengkapkan juga [Impact-Analysis-template.md](../../../lab/templates/Impact-Analysis-template.md) dan [Rollback-Plan-template.md](../../../lab/templates/Rollback-Plan-template.md). Data sintetik sahaja.

**BORANG PERMOHONAN PINDAAN (CHANGE REQUEST FORM)**

| Medan | Isian |
|---|---|
| Nama Projek | ShopFast Checkout v1.1 |
| ID Pindaan (diisi oleh Pengurus Projek) | `CR-SF-001` |

## Permohonan oleh

| Medan | Isian |
|---|---|
| Nama | Nur Hanisah binti Kamarudin |
| Jawatan | Pegawai Pembangunan Usahawan |
| Bahagian / Agensi | Bahagian Pembangunan Usahawan, Perbadanan Usahawan Digital |
| Alamat Emel | `nur.hanisah@example.test` |
| Nombor Telefon | 012-8765432 |
| Tarikh Permohonan | 13/09/2026 |
| Modul | Subsistem Jualan, Modul Troli dan Modul Checkout |
| Sub Modul | Guna kod promosi; Kira jumlah |
| Tarikh Kelulusan Pindaan Diperlukan (jika ada) | `[ANDAIAN: 30/10/2026]` |
| Tarikh Pindaan Diperlukan (jika ada) | `[ANDAIAN: 15/02/2027, sebelum kempen bermula 1 Mac 2027]` |
| Tandatangan Pemohon | Nur Hanisah binti Kamarudin (draf, belum disahkan) |

## 1. Jenis Pindaan (tandakan yang berkenaan)

- [ ] Skop
- [ ] Proses Kerja
- [ ] Teknologi
- [x] Penambahbaikan Sistem / Fungsi
- [ ] Lain-lain, nyatakan: `<isi>`

## 2. Keterangan Pindaan

**Keadaan semasa:** ShopFast menyokong kod promosi kempen melalui REQ-CHK-02, dengan kod aktif RAYA15 (diskaun promosi 15%) dan MEGA20 (diskaun promosi 20%), manakala kod EXPIRED15 telah tamat tempoh pada 31 Disember 2025 dan ditolak dengan 422 `CODE_EXPIRED`. Diskaun promosi dikira dalam checkout dan jumlah diskaun (diskaun ahli tambah diskaun promosi) tidak boleh melebihi 25% daripada subtotal (REQ-CHK-03).

**Keadaan yang dikehendaki:** Tambah kod promosi baharu RAYA26 dengan diskaun promosi 26% dan tempoh sah dari 1 hingga 31 Mac 2027 pada checkout ShopFast. Kod ini hendaklah diterima sebagai kod aktif sama seperti RAYA15 dan MEGA20, dan ditolak dengan 422 `CODE_EXPIRED` selepas 31 Mac 2027.

**Keperluan terjejas (ShopFast):**

- `[TIADA ID DALAM SRS]` Keperluan baharu: Sistem hendaklah menyokong kod promosi RAYA26 (diskaun promosi 26%) yang sah dari 1 hingga 31 Mac 2027 (permohonan daripada Bahagian Pembangunan Usahawan).
- `BR-03` (BRS): "Agensi boleh menawarkan kod promosi kempen dengan tempoh sah, dan ahli berdaftar program usahawan (member) menerima diskaun ahli, tertakluk kepada had jumlah diskaun yang ditetapkan oleh Unit Kewangan." [Pemilik Proses: Bahagian Pembangunan Usahawan]
- `BR-08` (BRS): "Sistem sentiasa tersedia dan kekal responsif sepanjang tempoh kempen jualan, termasuk jualan musim perayaan." `[ANDAIAN: RAYA26 ialah kempen musim perayaan, jadi kesan beban sistem perlu disemak bersama BR-08.]`
- `REQ-CHK-02` (SRS): "Kod aktif: RAYA15 (diskaun promosi 15%) dan MEGA20 (diskaun promosi 20%). Kod EXPIRED15 tamat tempoh pada 31 Disember 2025 dan ditolak dengan 422 `CODE_EXPIRED`. Kod yang formatnya sah tetapi tidak dikenali ditolak dengan 422 `INVALID_CODE`."
- `REQ-CHK-03` (SRS): "Jumlah diskaun (diskaun ahli tambah diskaun promosi) tidak melebihi 25% daripada subtotal."
- Nota: Kamus data SRS seksyen 4.3, entiti `KOD_PROMOSI`, menyenaraikan contoh kod "RAYA15, MEGA20, EXPIRED15" dan hendaklah dikemas kini dengan RAYA26.

`[ANDAIAN: kadar diskaun RAYA26 26% melebihi had 25% dalam REQ-CHK-03. Keputusan Unit Kewangan diperlukan sama ada menaikkan had atau merendahkan kadar diskaun sebelum pindaan dilaksanakan.]`

## 3. Impak terhadap Projek

- **Skop:** Penambahan konfigurasi kod promosi kepada senarai kod aktif dalam REQ-CHK-02, kamus data `KOD_PROMOSI` (SRS 4.3), kontrak API `openapi.yaml`, matriks keterjejakan (RTM) dan set ujian automatik.
- **Reka bentuk:** Logik pengiraan diskaun, jumlah dan peraturan satu kod bagi setiap troli tidak berubah, tetapi kadar 26% mesti diuji terhadap had REQ-CHK-03.
- **Tempoh:** Kecil; anggaran penambahan konfigurasi, pengemaskinian dokumentasi dan ujian regresi. `[ANDAIAN: 3 hingga 5 hari bekerja]`
- **Kos:** Rendah; tiada infrastruktur baharu diperlukan. `[ANDAIAN: masa pasukan dalaman separa hari hingga 1 hari tambahan untuk ujian beban]`
- **Kualiti:** Risiko utama ialah perlanggaran kadar 26% dengan had 25% dalam REQ-CHK-03. Kempen perayaan Mac 2027 dijangka menambah bilangan pengguna serentak, maka prestasi checkout (REQ-CHK-06, p95 kurang daripada 2 saat) dan ketersediaan sistem (NFR-06, 99.5%) perlu disemak. `[ANDAIAN]`
- Butiran lanjut: Impact-Analysis-template.md.

## 4. Justifikasi

`[ANDAIAN: Bahagian Pembangunan Usahawan mahu menyokong kempen Hari Raya Aidilfitri 2027 bagi meningkatkan jualan dalam talian usahawan bimbingan, selaras dengan Objektif 3 BRS "Menyokong kempen promosi agensi (contoh: jualan musim perayaan) melalui kod promosi dan diskaun ahli" dan BR-03.]`

## 5. Impak terhadap Projek, jika Pindaan Tidak Dilaksanakan

`[ANDAIAN: Kempen Hari Raya Aidilfitri 2027 tidak dapat ditawarkan kepada pelanggan. Objektif 1 BRS untuk meningkatkan jualan dalam talian usahawan sebanyak 30% dalam tempoh 12 bulan berisiko tidak tercapai, pelanggan hanya menggunakan kod sedia ada RAYA15 dan MEGA20, dan agensi kehilangan peluang promosi musim perayaan pada Mac 2027.]`

## 6. Alternatif Lain

`[ANDAIAN: cadangan alternatif berikut perlu diputuskan oleh pemohon dan Unit Kewangan]`

- A1: Merendahkan kadar diskaun RAYA26 kepada 25% atau kurang supaya mematuhi had REQ-CHK-03 tanpa mengubah had sedia ada. Kos rendah tetapi tidak memenuhi permintaan 26%.
- A2: Menaikkan had jumlah diskaun dalam REQ-CHK-03 (contoh: daripada 25% kepada 30%) tertakluk kelulusan Unit Kewangan. Mempengaruhi semua kod promosi dan diskaun ahli, bukan hanya RAYA26.
- A3: Menangguhkan pindaan sehingga selepas pengesahan keputusan Unit Kewangan. Tidak disyorkan kerana tempoh sah RAYA26 ialah Mac 2027.

**Cadangan:** Sahkan had jumlah diskaun dengan Unit Kewangan terlebih dahulu, kemudian pilih A1 atau A2 sebelum melaksanakan pindaan.

**Lampiran disertakan:** Tidak

## 7. Pelan Undur (Rollback Plan)

Pelan Undur diperlukan. Sebab: perubahan ini melibatkan pengiraan diskaun dan jumlah bayaran (nilai wang). Jika RAYA26 didapati mengira diskaun melebihi had 25% dalam REQ-CHK-03 atau menyebabkan jumlah bayaran salah selepas diterapkan, kod RAYA26 boleh disahaktifkan daripada senarai kod aktif dan sistem kembali kepada kod aktif sedia ada (RAYA15, MEGA20) tanpa menjejaskan transaksi lain. Butiran dalam Rollback-Plan-template.md.

---

## Untuk Diisi oleh Pengurus Projek

| Medan | Isian |
|---|---|
| Tarikh Diterima | `<isi>` |
| Analisis Impak | `Rujuk /impact-analysis` |

| Impak (Tinggi / Sederhana / Rendah) | Keutamaan (Tinggi / Sederhana / Rendah) | Keputusan (Lulus / Tidak Lulus / Ditangguhkan) | Pegawai Bertanggungjawab | Cadangan Pelaksanaan / Catatan |
|---|---|---|---|---|
| | | | | |

**Disahkan oleh:** Pengurus Projek

| Nama | Jawatan | Tarikh |
|---|---|---|
| `<nama rekaan>` | `<isi>` | `<isi>` |

## Log Penyelesaian Pindaan (format PPrISA11 ringkas)

| ID Pindaan | Keterangan Ringkas | Tarikh Diterima | Keputusan | Pegawai Bertanggungjawab | Tarikh Sasaran | Status |
|---|---|---|---|---|---|---|
| `CR-SF-001` | Tambah kod promosi RAYA26 (diskaun 26%) di checkout | | | | | |

---

## Rujukan

- [PPrISA 2.0, 4.2.3 c) Pengurusan Pindaan (Change Request)](../../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=73)
- [PPrISA10 Borang Permohonan Pindaan](../../../references/pprisa-2.0/templates/pdf/PPrISA10-Borang_Pindaan.pdf)
- [KRISAv2 Bab 8, 8.3.3 Penyelarasan Pengurusan Perubahan dan Risiko](../../../references/krisa-v2-beta-2026/BAB8-PENYELARASAN-PEMBANGUNAN-SISTEM-DEVOPS.pdf#page=9)

## Semak manusia / Human check
1. Senarai keperluan terjejas lengkap: semak RTM dan SRS untuk keperluan lain yang bergantung pada keperluan yang diubah.
2. Justifikasi dan impak jika pindaan tidak dilaksanakan datang daripada pemohon sebenar, bukan direka oleh AI.
3. Bahagian Pengurus Projek dibiarkan untuk keputusan manusia: Lulus, Tidak Lulus atau Ditangguhkan.