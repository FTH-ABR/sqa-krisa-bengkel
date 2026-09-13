# Keputusan Quality Gate G3

Gate: G3 Sedia UAT. Fasa KRISA: Pembangunan / Pengujian. Serahan diperiksa: Laporan ujian sistem, metrik. Pelulus: Ketua Ujian (QA-Plan-PPrISA05-D12.md seksyen 8).

Binaan: ShopFast Checkout v1.0.0. Bukti ujian segar daripada `npm test` dalam `shopfast` pada 13/09/2026.

| Kriteria | Sumber Kriteria | Bukti (fail) | Nilai Sebenar | Dipenuhi |
|---|---|---|---|---|
| 100% kes ujian P1 dilaksanakan | QA-Plan seksyen 8 (G3) dan seksyen 7 (Ujian Sistem: 100% kes ujian P1 dilaksanakan) | `outputs/m02-rtm.csv`, `outputs/m04-testcases.csv`, `outputs/m07-test-summary.md` | m04 mencatat kesepuluh TC-CHK "Belum Dilaksana"; m02 mencatat semua keperluan "Belum Diuji"; m07 melapor 18 keputusan tanpa pecahan P1 dan P2. Tiada bukti 100% kes P1 dilaksanakan | Tidak |
| Kadar lulus sekurang-kurangnya 95% | QA-Plan seksyen 7 (Ujian Sistem: kadar lulus sekurang-kurangnya 95%) dan seksyen 11 (QM-01) | `outputs/m06-metrics.csv` (QM-01), `outputs/m07-test-summary.md`, `npm test` (shopfast) | Metrik QM-01: 72.2% (13 lulus, 5 gagal) di bawah sasaran 95.0%. `npm test` 13/09/2026: API Newman 8/8 permintaan dan 16/16 asersi lulus (exit 0); UI Playwright 2/3 lulus, 1 gagal (TC-CHK-004, BUG-CHK-001) | Tidak |
| Tiada ralat severity 1 terbuka | QA-Plan seksyen 7 (Ujian Sistem: tiada ralat severity 1 terbuka) dan seksyen 6 (Jadual 6.3) | `outputs/m06-bug-report-BUG-CHK-001.md` | 0 ralat severity 1 terbuka; 1 ralat severity 2 terbuka (BUG-CHK-001, status Baru, tiada workaround) | Ya |
| CI hijau | QA-Plan seksyen 8 (G3: CI hijau) | `npm test` (shopfast) | `npm test` pulangkan exit code 1 kerana ujian UI gagal 1 daripada 3 (TC-CHK-004, m05-senario.spec.js); subset Newman exit 0. CI tidak hijau | Tidak |

## Keputusan: NO-GO

Gate G3 Sedia UAT tidak diluluskan.

## Justifikasi

Nilai setiap kriteria satu demi satu menunjukkan 3 daripada 4 kriteria tidak dipenuhi: (1) 100% kes ujian P1 dilaksanakan tiada bukti dan tidak boleh disahkan (m04 masih "Belum Dilaksana", m07 melapor tiada pecahan P1/P2); (2) kadar lulus 72.2% di bawah sasaran 95.0% (QM-01, m06-metrics.csv) dan `npm test` masih gagal pada TC-CHK-004; (3) CI tidak hijau kerana `npm test` pulangkan exit code 1 (UI 1/3 gagal). Hanya kriteria tiada ralat severity 1 terbuka (0 terbuka) dipenuhi.

Menurut jadual keputusan seksyen 16 (Test-Summary-D14-D16.md): GO tidak dibenarkan kerana kriteria keluar utama tidak dipenuhi; CONDITIONAL tidak terpakai kerana bukan "hanya ralat severity 2 atau 3 terbuka dengan workaround" yang tinggal, sebaliknya kadar lulus dan CI berkenaan dengan kriteria keluar utama tidak tercapai, BUG-CHK-001 (severity 2) terbuka tanpa workaround, dan risiko Kritikal RSK-01 (skor 25) dan RSK-02 (skor 20) masih Terbuka tanpa bukti mitigasi (m03-risk-register.csv). Maka keputusan ialah NO-GO. Binaan 1.0.0 belum sedia memasuki UAT.

## Syarat (jika CONDITIONAL)

Tidak berkenaan. Keputusan ialah NO-GO, bukan CONDITIONAL.

| Bil | Syarat | Pemilik | Tarikh Akhir | Bukti Penutupan |
|---|---|---|---|---|
| 1 | Tidak berkenaan | `<tiada data>` | `<tiada data>` | `<tiada data>` |

## Rujukan

- [KRISAv2 Bab 8, 8.3.1 Penyelarasan Aktiviti (Gate Review)](../../../references/krisa-v2-beta-2026/BAB8-PENYELARASAN-PEMBANGUNAN-SISTEM-DEVOPS.pdf#page=5)
- [KRISAv2 Bab 6, 6.6 Pelan Induk Pengujian (kriteria masuk dan keluar)](../../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=6)
- [PPrISA 2.0, 4.2.4 a) Pengurusan Kualiti](../../../references/pprisa-2.0/PPrISA_2.0_Versi_Beta_Februari_2025.pdf#page=74)

## Semak manusia / Human check
1. Setiap bukti yang disebut wujud, terkini dan untuk versi binaan yang sama dengan yang akan dilepaskan.
2. Kriteria "Tiada bukti" tidak dianggap lulus; dapatkan bukti atau kekalkan keputusan NO-GO atau CONDITIONAL.
3. Keputusan akhir dibuat dan ditandatangani oleh pelulus gate yang dinamakan dalam QA Plan, bukan oleh AI.