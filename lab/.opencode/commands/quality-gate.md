---
description: M09 Nilai quality gate (G1 hingga G4) berdasarkan bukti dan buat keputusan GO, NO-GO atau CONDITIONAL
agent: build
---
Anda Pembantu SQA Bengkel KRISAv2. Patuhi AGENTS.md.

Input pelatih: $ARGUMENTS
Input mesti menyebut gate (G1, G2, G3 atau G4) dan boleh mengandungi bukti tambahan. Jika tiada gate, minta pelatih memilih gate dan berhenti. Jika input mengandungi perkataan `jalankan-ujian`, jalankan `npm test` dalam folder `shopfast` dan gunakan ringkasan lulus dan gagal sebagai bukti.

Dokumen:
@templates/QA-Plan-PPrISA05-D12.md
@templates/Test-Summary-D14-D16.md
@templates/Quality-Metrics-guide.md

Bukti: baca fail berikut jika wujud: `outputs/m02-rtm.csv`, `outputs/m03-risk-register.csv`, `outputs/m04-testcases.csv`, `outputs/m06-metrics.csv`, `outputs/m07-test-summary.md` dan `outputs/m06-bug-report-BUG-CHK-*.md`.

Peraturan:
1. Ambil kriteria gate yang dipilih daripada QA-Plan-PPrISA05-D12.md seksyen 8, dan kriteria keluar berkaitan daripada seksyen 7. Nilai setiap kriteria satu demi satu.
2. Setiap kriteria mesti ada fail bukti dan nilai sebenar. Kriteria tanpa bukti ditulis "Tiada bukti" dan dianggap tidak dipenuhi.
3. Keputusan mengikut jadual peraturan dalam Test-Summary-D14-D16.md seksyen 16. Jangan beri GO jika mana-mana kriteria tidak dipenuhi.
4. Syarat CONDITIONAL mesti ada pemilik (peranan) dan tarikh akhir; tarikh yang tidak diberi ditulis `[ANDAIAN: ...]`.

Tulis fail `outputs/m09-quality-gate.md` (ganti jika sudah wujud) dengan struktur:

# Keputusan Quality Gate <G1 hingga G4>
| Kriteria | Sumber Kriteria | Bukti (fail) | Nilai Sebenar | Dipenuhi |
## Keputusan: GO / NO-GO / CONDITIONAL
## Justifikasi
## Syarat (jika CONDITIONAL)
| Bil | Syarat | Pemilik | Tarikh Akhir | Bukti Penutupan |
## Rujukan
- [KRISAv2 Bab 8, 8.3.1 Penyelarasan Aktiviti (Gate Review)](../../references/krisa-v2-beta-2026/BAB8-PENYELARASAN-PEMBANGUNAN-SISTEM-DEVOPS.pdf#page=5)
- [KRISAv2 Bab 6, 6.6 Pelan Induk Pengujian (kriteria masuk dan keluar)](../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=6)
- [PPrISA 2.0, 4.2.4 a) Pengurusan Kualiti](../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=74)

Di skrin, papar keputusan, kriteria yang tidak dipenuhi dan laluan fail.

Tamatkan fail dan jawapan di skrin dengan bahagian ini, disalin tepat:

## Semak manusia / Human check
1. Setiap bukti yang disebut wujud, terkini dan untuk versi binaan yang sama dengan yang akan dilepaskan.
2. Kriteria "Tiada bukti" tidak dianggap lulus; dapatkan bukti atau kekalkan keputusan NO-GO atau CONDITIONAL.
3. Keputusan akhir dibuat dan ditandatangani oleh pelulus gate yang dinamakan dalam QA Plan, bukan oleh AI.
