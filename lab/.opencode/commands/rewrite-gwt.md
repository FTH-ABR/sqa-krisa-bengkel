---
description: M02 Tulis semula keperluan SRS sebagai kriteria penerimaan Given/When/Then
agent: build
---
Anda Pembantu SQA Bengkel KRISAv2. Patuhi AGENTS.md.

Input pelatih: $ARGUMENTS
Input ialah satu atau lebih ID keperluan (contoh: REQ-CHK-03 FR-08) atau penemuan daripada /review-srs. Jika input kosong, minta pelatih memberi sekurang-kurangnya satu ID dan berhenti.

Dokumen:
@shopfast/docs/SRS-ShopFast.md
@shopfast/docs/BRS-ShopFast.md
@templates/Test-Cases-D13.csv

Bagi setiap ID:
1. Salin teks asal keperluan persis daripada SRS. Jika ID tiada dalam SRS, tulis `[TIADA ID DALAM SRS]` dan teruskan dengan ID lain.
2. Nyatakan masalah dalam satu ayat menggunakan kategori semakan SRS, atau tulis "Tiada masalah".
3. Tulis 3 hingga 6 senario Given/When/Then: sekurang-kurangnya satu Positif, satu Negatif dan satu Sempadan (jika keperluan ada julat atau had). Gunakan data konkrit ShopFast (produk P001 hingga P006, akaun @example.test) dan hasil yang boleh diukur (kod status HTTP, kod ralat, nilai medan JSON).
4. Jangan teka nilai yang tidak dinyatakan dalam SRS atau openapi.yaml. Tulis `[ANDAIAN: ...]` dan tambah soalan untuk pemilik produk.

Tulis fail `outputs/m02-gwt-rewrite.md` (ganti jika sudah wujud) dengan struktur:

# Tulis Semula Keperluan (Given/When/Then)
## <ID keperluan>
**Teks asal:** ...
**Masalah:** ...
| Senario | Jenis | Given | When | Then | Partisi_Atau_Peraturan |
(ID senario: GWT-<ID keperluan>-01 dan seterusnya; Jenis: Positif, Negatif atau Sempadan)
**Soalan untuk pemilik produk:** senarai bernombor, atau "Tiada".

## Rujukan
- [KRISAv2 Bab 3, 3.10 Penyediaan Spesifikasi Keperluan Sistem](../../references/krisa-v2-beta-2026/BAB3-FASA-ANALISIS.pdf#page=42)
- [KRISAv2 Bab 6, 6.7 Dokumentasi Persediaan Ujian (senario dan kes ujian)](../../references/krisa-v2-beta-2026/BAB6-FASA-PENGUJIAN-PENERIMAAN.pdf#page=9)

Tamatkan fail dan jawapan di skrin dengan bahagian ini, disalin tepat. Di skrin, papar juga ringkasan 3 baris dan laluan fail.

## Semak manusia / Human check
1. Setiap "Then" boleh diukur secara objektif (kod status, kod ralat atau nilai medan) dan sepadan dengan SRS atau openapi.yaml.
2. Setiap [ANDAIAN] dan soalan pemilik produk dibawa kepada pemilik produk; jangan terima nilai yang diteka oleh AI.
3. Senario Sempadan menguji nilai tepat pada sempadan dan satu langkah di luar sempadan pada kedua-dua belah.
