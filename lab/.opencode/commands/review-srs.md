---
description: M02 Semak SRS ShopFast berbanding BRS dan senaraikan kecacatan keperluan (papar sahaja)
agent: plan
---
Anda Pembantu SQA Bengkel KRISAv2. Patuhi AGENTS.md.

Skop semakan daripada pelatih: $ARGUMENTS
Jika skop kosong, semak keseluruhan SRS.

Dokumen:
@shopfast/docs/SRS-ShopFast.md
@shopfast/docs/BRS-ShopFast.md
@templates/RTM-guide.md

Tugas: semakan statik (static review) setiap REQ-CHK, FR, NFR dan senario UC-03 dalam skop. Gunakan kategori ini sahaja:
Kekaburan (ambiguity); Tidak boleh diuji (untestable); Konflik (conflict) dengan BRS atau bahagian lain SRS; Maklumat hilang (missing), termasuk pengendalian ralat dan peraturan bisnes; ID pendua (duplicate); Keperluan majmuk (compound); Istilah tidak ditakrif (undefined term); Tiada kriteria penerimaan; Keterjejakan (traceability) seperti dalam RTM-guide.md seksyen 5.

Peraturan:
1. Setiap penemuan mesti ada petikan tepat daripada dokumen. Jangan reka ID atau petikan.
2. Semak jadual secara silang, antara baris dan antara dokumen, bukan ayat demi ayat sahaja.
3. Jangan tulis fail. Papar hasil di skrin sahaja.

Format output:

## Semakan SRS ShopFast
Jadual penemuan dengan tepat 6 lajur: | No | Lokasi | Petikan | Kategori | Mengapa Penting | Cadangan Ringkas |
Nombor SR-01, SR-02 dan seterusnya, disusun mengikut lokasi dalam SRS.

Jadual ringkasan: | Kategori | Bilangan |

## Rujukan
- KRISAv2 Bab 3, 3.8 Penentuan Keperluan Bukan Fungsian: `../references/krisa-v2-beta-2026/BAB3-FASA-ANALISIS.pdf#page=33`
- KRISAv2 Bab 3, 3.10 Penyediaan Spesifikasi Keperluan Sistem: `../references/krisa-v2-beta-2026/BAB3-FASA-ANALISIS.pdf#page=42`
- KRISAv2 Bab 2, 2.11 Traceability Matrix: `../references/krisa-v2-beta-2026/BAB2-FASA-PERMULAAN.pdf#page=56`
Tulis setiap rujukan sebagai pautan Markdown.

Tambah satu baris: "Untuk simpan, salin ke outputs/m02-srs-review.md dan tukar pautan kepada ../../references/...".

Akhiri jawapan dengan bahagian ini, disalin tepat:

## Semak manusia / Human check
1. Buka SRS dan sahkan setiap petikan wujud persis di lokasi yang dinyatakan; buang penemuan yang tidak dapat dibuktikan.
2. Semak silang semua jadual SRS dengan BRS dan UC-03 secara manual, kerana AI sering terlepas isu yang hanya kelihatan apabila dua jadual dibandingkan.
3. Tandakan penemuan yang memerlukan keputusan pemilik produk, bukan sekadar pembetulan ayat, dan bawa ke mesyuarat semakan.
