# Templat Pelan Undur (Rollback Plan)

> **Templat ini mencerminkan (mirrors):** PPrISA09 Pelan Pengurusan Perubahan: [PDF](../../references/pprisa-2.0/templates/pdf/PPrISA09-Pelan_Pengurusan_Perubahan_Change_Mgt.pdf) dan bahagian "Cadangan Pelaksanaan" dalam PPrISA10 Borang Permohonan Pindaan: [PDF](../../references/pprisa-2.0/templates/pdf/PPrISA10-Borang_Pindaan.pdf).
>
> **Rujukan panduan:** [KRISAv2 Bab 8, 8.3.3 Penyelarasan Pengurusan Perubahan dan Risiko](../../references/krisa-v2-beta-2026/BAB8-PENYELARASAN-PEMBANGUNAN-SISTEM-DEVOPS.pdf#page=9); [KRISAv2 Bab 7, 7.9 Repositori dan Serahan Kod Sumber](../../references/krisa-v2-beta-2026/BAB7-FASA-PELAKSANAAN.pdf#page=17); [KRISAv2 Bab 7, 7.10 Persekitaran Pembangunan Sistem](../../references/krisa-v2-beta-2026/BAB7-FASA-PELAKSANAAN.pdf#page=19)
>
> Cara guna: pelan undur mesti disediakan dan diuji **sebelum** pemasangan. Arahan contoh menggunakan PowerShell.

## 1. Maklumat Perubahan

| Perkara | Butiran |
|---|---|
| ID Pindaan | `CR-SF-<nnn>` |
| Versi semasa (dipulihkan jika undur) | `<contoh: tag v1.1.0>` |
| Versi baharu | `<contoh: tag v1.2.0>` |
| Tetingkap pemasangan | `<tarikh dan masa; elakkan petang Jumaat dan tempoh kempen>` |
| Pemilik pelan undur | `<nama rekaan>` |
| Masa sasaran pemulihan (RTO) | `<contoh: 30 minit>` |

## 2. Kriteria Pencetus Undur (Rollback Triggers)

Undur dilaksanakan jika **mana-mana** berikut berlaku dalam `<contoh: 60 minit>` selepas pemasangan:

| Bil | Pencetus | Cara Dikesan |
|---|---|---|
| 1 | `GET /api/health` tidak memulangkan 200 lebih daripada 2 minit | Pemantauan |
| 2 | Ujian asap (smoke test) checkout gagal | Newman / Playwright |
| 3 | Ralat severity 1 baharu dilaporkan | Laporan ralat |
| 4 | Masa respons checkout p95 melebihi sasaran REQ-CHK-06 | Pemantauan prestasi |
| 5 | `<isi>` | `<isi>` |

## 3. Persediaan Sebelum Pemasangan

| Bil | Tindakan | Oleh | Selesai (Ya / Tidak) |
|---|---|---|---|
| 1 | Tag versi semasa dalam git dan sahkan binaan CI hijau | `<isi>` | |
| 2 | Sandaran konfigurasi dan data (jika berkenaan) | `<isi>` | |
| 3 | Uji langkah undur di persekitaran staging | `<isi>` | |
| 4 | Maklumkan pemegang taruh tentang tetingkap pemasangan | `<isi>` | |

## 4. Langkah Undur

| Langkah | Tindakan | Arahan / Rujukan | Anggaran Masa |
|---|---|---|---|
| 1 | Umumkan keputusan undur | Kumpulan komunikasi projek | 2 minit |
| 2 | Hentikan aplikasi versi baharu | `Stop-Process -Id <PID>` atau hentikan servis | 2 minit |
| 3 | Kembali ke versi semasa | Lihat blok arahan di bawah | 5 minit |
| 4 | Pulihkan konfigurasi dan data (jika berkenaan) | `<isi>` | `<isi>` |
| 5 | Mulakan aplikasi | `npm start` | 2 minit |

```powershell
cd $HOME\sqa-krisa-bengkel\lab\shopfast
git fetch --tags
git checkout <tag versi semasa>
npm ci
npm start
```

## 5. Pengesahan Selepas Undur

| Bil | Semakan | Arahan | Jangkaan |
|---|---|---|---|
| 1 | Kesihatan sistem | `Invoke-RestMethod http://localhost:3000/api/health` | `status` ok dan `version` sepadan versi semasa |
| 2 | Ujian API | `npm run test:api` | Semua ujian lulus |
| 3 | Ujian UI checkout | `npm run test:ui` | Semua ujian lulus |

## 6. Komunikasi

| Bila | Kepada | Mesej | Medium |
|---|---|---|---|
| Sebelum undur | Pemilik Projek, Khidmat Pelanggan | `<isi>` | `<isi>` |
| Selepas undur | Semua pemegang taruh | `<isi>` | `<isi>` |

## 7. Peranan

| Peranan | Nama | Tanggungjawab |
|---|---|---|
| Pembuat keputusan undur | `<nama rekaan>` | Meluluskan undur berdasarkan pencetus |
| Pelaksana teknikal | `<nama rekaan>` | Melaksanakan langkah 2 hingga 5 |
| Pengesah | `<nama rekaan>` | Melaksanakan pengesahan seksyen 5 |

## 8. Rekod Pelaksanaan dan Pengajaran

| Tarikh | Undur Dilaksanakan (Ya / Tidak) | Masa Pemulihan Sebenar | Punca | Tindakan Susulan (CAPA) |
|---|---|---|---|---|
| `<isi>` | `<isi>` | `<isi>` | `<isi>` | `<CAPA-xxx>` |
