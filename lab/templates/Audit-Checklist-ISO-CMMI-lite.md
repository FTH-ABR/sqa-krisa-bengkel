# Senarai Semak Audit Kualiti (ISO dan CMMI versi ringkas)

> **Templat ini mencerminkan (mirrors):**
> - PPrISA05 Pelan Pengurusan Kualiti, seksyen 4 Peralatan Kualiti (Audit) dan seksyen 6 Pelan Jaminan dan Kawalan Kualiti: [PDF](../../references/pprisa-2.0/templates/pdf/PPrISA05-Pelan_Pengurusan_Kualiti.pdf)
> - PPrISA 2.0, 5.4.2 ii b) Penilaian Kualiti Serahan Projek: [halaman 94](../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=94)
> - KRISAv2 Bab 1, 1.6.4 Jaminan Kualiti Perisian (SQA): [BAB1-PERANCANGAN.pdf, halaman 19](../../references/krisa-v2-beta-2026/BAB1-PERANCANGAN.pdf#page=19)
> - Piawaian luar (ringkasan, tiada salinan dalam repositori): ISO 9001:2015 klausa 7.5, 8.3, 8.5.2, 8.6, 8.7, 9.1, 9.2, 10.2; kawasan amalan CMMI (RDM, PR, VV, CM, PQA, MPM, RSK, CAR).
>
> Cara guna: untuk setiap item, rekod bukti objektif yang dilihat (nama fail, versi, tarikh). Klasifikasi: **Patuh**, **NC Major** (ketakakuran major), **NC Minor** (ketakakuran minor), **OFI** (peluang penambahbaikan) atau **TB** (tidak berkenaan). Setiap NC mesti ada CAPA ([CAPA-template.md](CAPA-template.md)).

| Perkara | Butiran |
|---|---|
| Projek / Skop audit | `<contoh: ShopFast Checkout v1.1, fasa Analisis hingga Pengujian>` |
| Tarikh audit | `<isi>` |
| Juruaudit | `<nama rekaan>` |
| Auditee | `<nama rekaan>` |
| Bukti disemak | `<contoh: shopfast/docs, outputs/, laporan CI, RTM>` |

## A. Keperluan dan Keterjejakan

| ID | Soalan Audit | Rujukan | Bukti Diperlukan | Klasifikasi | Catatan |
|---|---|---|---|---|---|
| AU-01 | BRS dan SRS diluluskan dan dikawal versinya? | ISO 9001 7.5; CMMI RDM; KRISAv2 Bab 3 3.10 | Rekod versi dan pengesahan D02, D03 | | |
| AU-02 | Setiap keperluan mempunyai ID unik dan kriteria penerimaan yang boleh diuji? | ISO 9001 8.2.3; CMMI RDM | Senarai REQ-CHK, FR, NFR dalam SRS | | |
| AU-03 | RTM wujud dan menunjukkan keterjejakan dua hala BR, keperluan, ujian dan ralat? | ISO 9001 8.5.2; KRISAv2 Bab 2 2.11 | RTM terkini | | |

## B. Reka Bentuk dan Semakan Rakan Sekerja (Peer Review)

| ID | Soalan Audit | Rujukan | Bukti Diperlukan | Klasifikasi | Catatan |
|---|---|---|---|---|---|
| AU-04 | Semakan reka bentuk dijalankan dan penemuan direkodkan dengan tindakan? | ISO 9001 8.3.4; CMMI PR | Senarai semak semakan reka bentuk bertandatangan | | |
| AU-05 | Risiko keselamatan dinilai dan dipetakan kepada ujian? | ISO 9001 6.1; CMMI RSK; KRISAv2 Bab 1 1.6.7 | Daftar risiko dengan skor dan keutamaan ujian | | |

## C. Pengujian (Verification and Validation)

| ID | Soalan Audit | Rujukan | Bukti Diperlukan | Klasifikasi | Catatan |
|---|---|---|---|---|---|
| AU-06 | Pelan Induk Pengujian dan Pelan UAT diluluskan sebelum ujian bermula? | CMMI VV; KRISAv2 Bab 6 6.6 | D12, D13 dengan tarikh kelulusan | | |
| AU-07 | Kriteria masuk dan keluar dinilai dengan bukti sebelum setiap gate? | ISO 9001 8.6; KRISAv2 Bab 8 8.3.1 | Rekod keputusan gate GO / NO-GO / CONDITIONAL | | |
| AU-08 | Ujian regresi automatik dijalankan bagi setiap perubahan kod? | CMMI VV; KRISAv2 Bab 5 5.7 | Log CI (shopfast-quality-gate) | | |
| AU-09 | Data ujian adalah sintetik dan tiada data peribadi sebenar digunakan? | Akta 709; KRISAv2 Bab 7 7.11 | Sampel data ujian dan skrip | | |

## D. Pengurusan Ralat

| ID | Soalan Audit | Rujukan | Bukti Diperlukan | Klasifikasi | Catatan |
|---|---|---|---|---|---|
| AU-10 | Setiap ralat direkod dengan severity, keutamaan, modul dan pihak bertanggungjawab? | ISO 9001 8.7; KRISAv2 Bab 6 6.3 | Sampel 5 laporan ralat | | |
| AU-11 | Ralat yang dibaiki diuji semula dan statusnya dikemas kini? | ISO 9001 8.7; KRISAv2 Bab 6 6.3 | Sejarah status ralat | | |
| AU-12 | Ralat produksi dianalisis punca akar dan ada tindakan pencegahan? | ISO 9001 10.2; CMMI CAR | Rekod CAPA | | |

## E. Pengurusan Konfigurasi dan Perubahan

| ID | Soalan Audit | Rujukan | Bukti Diperlukan | Klasifikasi | Catatan |
|---|---|---|---|---|---|
| AU-13 | Kod sumber dan dokumen berada dalam repositori dengan kawalan versi dan tag pelepasan? | ISO 9001 7.5.3; CMMI CM; KRISAv2 Bab 7 7.9 | Sejarah git, tag | | |
| AU-14 | Setiap perubahan selepas keperluan dimuktamadkan melalui Borang Permohonan Pindaan dan analisis impak? | ISO 9001 8.3.6 dan 8.5.6; PPrISA 2.0 4.2.3 c) | PPrISA10, PPrISA11, analisis impak | | |
| AU-15 | Pelan undur (rollback) wujud dan diuji sebelum pemasangan produksi? | ISO 9001 8.5.6; KRISAv2 Bab 8 8.3.3 | Pelan undur dan rekod ujian | | |

## F. Jaminan Kualiti Proses dan Pengukuran

| ID | Soalan Audit | Rujukan | Bukti Diperlukan | Klasifikasi | Catatan |
|---|---|---|---|---|---|
| AU-16 | Metrik kualiti dikumpul, dianalisis dan dilaporkan kepada pengurusan? | ISO 9001 9.1; CMMI MPM | Laporan metrik (QM-01 hingga QM-05) | | |
| AU-17 | Audit dalaman dirancang dan penemuan audit lepas telah ditutup? | ISO 9001 9.2; CMMI PQA | Jadual audit, log CAPA | | |
| AU-18 | Pengajaran (lessons learned) direkod dan digunakan dalam projek seterusnya? | ISO 9001 10.3; D14 Lesson Learned | Seksyen Lesson Learned D14 | | |

## G. Ringkasan Penemuan

| No. Penemuan | Item | Klasifikasi | Penemuan | Bukti | Tindakan / CAPA | Tarikh Sasaran |
|---|---|---|---|---|---|---|
| AUD-01 | `<AU-xx>` | `<NC Major / NC Minor / OFI>` | `<isi>` | `<isi>` | `<CAPA-xxx>` | `<isi>` |

| Jumlah Patuh | NC Major | NC Minor | OFI | TB |
|---|---|---|---|---|
| `<n>` | `<n>` | `<n>` | `<n>` | `<n>` |

Tandatangan Juruaudit: `<nama rekaan>` Tarikh: `<isi>`
