# Glosari QA ShopFast (m01)

Glosari 12 istilah Jaminan Kualiti Perisian (SQA) dalam Bahasa Melayu dan Inggeris. Draf untuk disemak manusia.

Rujukan:
- [KRISAv2 Bab 1, 1.6.4 Jaminan Kualiti Perisian (SQA)](../../../references/krisa-v2-beta-2026/BAB1-PERANCANGAN.pdf#page=19)
- [KRISAv2 Bab 6, 6.3 Pengurusan Ralat](../../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=2)
- [KRISAv2 Bab 7, 7.9 Repositori Kod dan CI/CD](../../../references/krisa-v2-beta-2026/BAB7-FASA-PELAKSANAAN.pdf#page=17)
- [KRISAv2 Bab 8, 8.3.1 Gate Review dan DevOps](../../../references/krisa-v2-beta-2026/BAB8-PENYELARASAN-PEMBANGUNAN-SISTEM-DEVOPS.pdf#page=5)

| Istilah | Takrif Bahasa Melayu | Takrif Bahasa Inggeris |
|---|---|---|
| QA (Quality Assurance) | Aktiviti pencegahan yang meliputi perancangan, semakan, audit dan penambahbaikan proses untuk memastikan kualiti dibina ke dalam setiap fasa SDLC. | Process-focused preventive activities covering planning, review, audit and process improvement to build quality into every SDLC phase. |
| QC (Quality Control) | Aktiviti pasca-produk yang mengesan kecacatan melalui pemeriksaan, pengujian dan pembetulan hasil, misalnya ujian sistem dan ujian penerimaan. | Product-focused activities that detect defects after the product is built, such as inspection, testing and correction of results. |
| Verifikasi | Semakan bahawa hasil kerja sesuatu fasa memenuhi keperluan yang dinyatakan pada fasa itu, contohnya perisian betul dibina. | Checking that work products of a phase meet the specified requirements of that phase, for example the software is built right. |
| Validasi | Semakan bahawa hasil akhir memenuhi keperluan dan jangkaan pengguna, contohnya perisian yang betul dibina. | Checking that the end product meets user requirements and expectations, for example the right software is built. |
| Ujian Statik | Pemeriksaan kod, dokumen dan reka bentuk tanpa menjalankan perisian, seperti semakan kod, semakan keperluan atau analisis alat. | Testing by examining code, documents and designs without executing the software, such as code review, requirement review or tool-based analysis. |
| Shift-Left | Strategi mengalihkan aktiviti kualiti ke fasa awal SDLC supaya kecacatan dikesan paling murah melalui semakan keperluan, reka bentuk dan ujian unit. | Strategy to move quality activities earlier into the SDLC so defects are found at their lowest cost via requirement review, design review and unit testing. |
| Shift-Right | Strategi memantau kualiti dalam persekitaran hidup (production) menggunakan pencerapan, ujian datang daripada pengeluaran dan maklum balas pengguna untuk penambahbaikan berterusan. | Strategy to monitor quality in the live environment using observability, production-driven testing and user feedback for continuous improvement. |
| Quality Gate | Titik kawalan rasmi antara fasa atau peringkat yang menyemak kriteria kemasukan dan keluar; jika tidak dipenuhi, fasa seterusnya tidak diluluskan. | Formal control point between phases or stages that checks entry and exit criteria; if unmet, the next phase is not approved. |
| Kecacatan | Kecacatan ialah keadaan tidak sesuai yang sedia ada dalam kod, reka bentuk atau keperluan dan boleh menyebabkannya gagal; contohnya diskaun digunakan dua kali. | A defect is a pre-existing non-conformance in code, design or requirements that can cause failure; for example a discount applied twice. |
| Kegagalan | Kegagalan ialah manifestasi kecacatan yang diperhatikan apabila sistem dijalankan tidak memenuhi hasil dijangka, contohnya poskod ditolak atau butang checkout tersembunyi. | A failure is the observable manifestation of a defect when the system is executed and deviates from the expected result. |
| IV&V (Keusahawanan Verifikasi dan Validasi) | Aktiviti verifikasi dan validasi yang dijalankan oleh pihak bebas serta menilai keterkaitan setiap aktiviti dengan keperluan sepanjang kitar hayat. | Independent verification and validation activities evaluating whether each activity and product conforms to requirements throughout the lifecycle. |
| DevOps | Amalan kerja sama antara pembangunan IT dengan operasi sistem dalam repositori yang sama, peringkat gate untuk setiap fasa dan gabungan CI/CD bagi menghantar perubahan dengan kerap dan selamat. | Collaborative practice between ICT development and system operations using a shared repository, gate reviews for each phase and CI/CD to deliver frequent and safe changes. |

## Semak manusia / Human check

1. Sahkan takrif Verifikasi dan Validasi mencerminkan maksud KRISAv2 Bab 1, 1.6.4 (SQA) dan istilah "pembinaan terhadap perkara yang betul" pengguna sektor awam.
2. Sahkan takrif IV&V (verifikasi dan validasi bebas) dan urutan Gate SQA itu selaras dengan KRISAv2 Bab 1, 1.6.4; semak istilah ini dengan dokumen rasmi KRISAv2.
3. Sahkan contoh ShopFast yang dipilih (diskaun dua kali, poskod, butang checkout) selaras dengan shopfast/docs/incidents.md dan istilah masih tepat untuk pelatih.