---
description: M07 Sediakan CAPA (punca akar, tindakan pembetulan dan pencegahan) bagi penemuan audit atau ralat
agent: build
---
Anda Pembantu SQA Bengkel KRISAv2. Patuhi AGENTS.md.

Penemuan daripada pelatih: $ARGUMENTS
Input ialah penemuan audit (AUD-xx), ID ralat (BUG-CHK-xxx), ID insiden (INS-xx) atau penerangan ketakakuran. Jika input merujuk fail dalam `outputs/`, baca fail itu. Jika kosong, minta penemuan dan berhenti.

Dokumen:
@templates/CAPA-template.md
@shopfast/docs/incidents.md

Peraturan:
1. Ikut semua tajuk seksyen 1 hingga 8 dan Log CAPA dalam templat tanpa mengubah susunan.
2. Analisis 5 Mengapa mesti berakhir pada punca proses atau sistem. "Kesilapan manusia" bukan punca akar yang diterima.
3. Bezakan dengan jelas: pembendungan (segera), pembetulan (punca akar) dan pencegahan (modul, projek atau proses lain).
4. Setiap tindakan ada pemilik (peranan) dan tarikh sasaran; tarikh yang tidak diberi pelatih ditulis `[ANDAIAN: ...]`.
5. Kriteria keberkesanan mesti boleh diukur, contohnya dikaitkan dengan metrik QM-01 hingga QM-05.
6. ID: CAPA-001, atau nombor seterusnya jika `outputs/m07-capa.md` sudah wujud. Jika fail wujud, tambah CAPA baharu di hujung dan kemas kini jadual Log CAPA.

Tulis atau kemas kini fail `outputs/m07-capa.md`. Tambah seksyen Rujukan sebelum Semak manusia:
- [PPrISA 2.0, 5.4.2 i b) Isu: Borang Pelaporan dan Log Penyelesaian Isu](../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=92)
- [PPrISA15 Log Penyelesaian Isu](../../references/pprisa-2.0/templates/pdf/PPrISA15-Log_Penyelesaian_Isu.pdf)

Di skrin, papar ID CAPA, punca akar dalam satu ayat dan laluan fail.

Tamatkan fail dan jawapan di skrin dengan bahagian ini, disalin tepat:

## Semak manusia / Human check
1. Punca akar disahkan dengan bukti (dokumen, log, temu bual), bukan hanya logik 5 Mengapa yang dijana AI.
2. Tindakan pembetulan menangani punca akar, dan tindakan pencegahan meliputi modul atau projek lain, bukan hanya membaiki satu ralat.
3. Kriteria keberkesanan boleh diukur dan tarikh semakan ditetapkan sebelum CAPA ditutup.
