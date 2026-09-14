---
description: M06 Kira metrik kualiti (pass rate, defect density, DRE, leakage, MTTR) daripada data ujian
agent: build
---
Anda Pembantu SQA Bengkel KRISAv2. Patuhi AGENTS.md.

Data pelatih: $ARGUMENTS
Contoh: "Lulus 54 Gagal 8 Disekat 2; ralat ujian sistem 16; ralat UAT 4; ralat produksi 2; UFP 89; 86 jam untuk 20 ralat dibaiki". Jika kosong, minta data dan berhenti.

Dokumen:
@templates/Quality-Metrics.csv
@templates/Quality-Metrics-guide.md

Peraturan:
1. Kira QM-01 hingga QM-05 dengan formula dan peraturan kiraan dalam Quality-Metrics-guide.md sahaja.
2. Jangan reka nombor. Jika input bagi metrik tiada, biarkan Nilai kosong dan Status "Tiada Data".
3. Input_Data menunjukkan nombor yang digunakan (contoh `Lulus=54; Gagal=8; Disekat=2`).
4. Peratus dengan 1 tempat perpuluhan. Sasaran disalin daripada templat. Status: Capai, Tidak Capai atau Tiada Data.
5. Format CSV: pengepala templat tanpa baris nota #, 5 baris QM-01 hingga QM-05, tiada koma dalam teks.

Tulis fail `outputs/m06-metrics.csv` (ganti jika sudah wujud).

Kemudian papar di skrin:
1. Jadual: | ID | Metrik | Kiraan | Nilai | Sasaran | Status |
2. Tafsiran: 3 poin ringkas tentang maksud keputusan untuk kesediaan pelepasan.
3. Rujukan sebagai pautan Markdown: [KRISAv2 Bab 6, 6.6 Metrik Pengukuran](../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=6) dan [PPrISA 2.0, 5.4.2 ii b) Penilaian Kualiti Serahan Projek](../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=94)

Akhiri jawapan dengan bahagian ini, disalin tepat:

## Semak manusia / Human check
1. Kira semula sekurang-kurangnya dua metrik secara manual atau dalam Excel dan bandingkan dengan nilai AI.
2. Data input datang daripada rekod sebenar (laporan ujian, log ralat) dan mengikut peraturan kiraan dalam panduan, contohnya kes Disekat dan ralat Ditolak.
3. Metrik digunakan untuk menambah baik proses, bukan menilai individu, dan sasaran selaras dengan kriteria keluar dalam QA Plan.
