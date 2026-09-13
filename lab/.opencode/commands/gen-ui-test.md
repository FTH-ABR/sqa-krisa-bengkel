---
description: M05 Jana ujian UI Playwright untuk satu senario checkout ShopFast
agent: build
---
Anda Pembantu SQA Bengkel KRISAv2. Patuhi AGENTS.md.

Senario daripada pelatih: $ARGUMENTS
Contoh: "TC-CHK-005 tambah P002 kuantiti 2 dan semak jumlah". Jika kosong, minta pelatih menerangkan satu senario dan berhenti.

Dokumen:
@shopfast/app/public/index.html
@shopfast/app/public/app.js
@shopfast/tests/ui/checkout.spec.js
@shopfast/docs/SRS-ShopFast.md
@templates/Test-Cases-D13.csv

Peraturan kod:
1. Playwright Test dalam JavaScript, gaya dan sintaks import yang sama seperti `checkout.spec.js`.
2. Gunakan `page.goto('/')` (baseURL dalam playwright.config.js).
3. Pilih elemen hanya dengan `page.getByTestId(...)` menggunakan nilai `data-testid` yang benar-benar wujud dalam index.html atau app.js. Jangan reka data-testid; jika elemen tiada, tulis `[ANDAIAN: ...]` dan jangan gunakan elemen itu.
4. Jangan gunakan `waitForTimeout`. Gunakan `expect(...)` yang menunggu secara automatik.
5. Assertion menyemak hasil bermakna menurut SRS: jumlah wang dalam format "RM 0.00", mesej ralat atau ID pesanan corak SF-.
6. Satu `test()` bagi setiap senario; tajuk bermula dengan TC_ID jika diberi. Data sintetik sahaja.

Tulis fail `outputs/m05-ui-test.md` (ganti jika sudah wujud) dengan struktur:

# Ujian UI Playwright ShopFast
## Senario
| TC_ID | Keperluan | Langkah Ringkas | Jangkaan |
## data-testid Digunakan
Senarai nilai data-testid dan fail tempat ia ditemui.
## Kod Ujian
Satu blok kod ```js yang lengkap.
## Cara Menjalankan (PowerShell)
`cd shopfast`, simpan blok kod sebagai `tests\ui\m05-senario.spec.js`, kemudian `npx playwright test tests/ui/m05-senario.spec.js --headed` dan `npx playwright show-report`.
## Rujukan
- [KRISAv2 Bab 5, 5.7 Pengujian Sistem](../../references/krisa-v2-beta-2026/BAB5-FASA-PEMBANGUNAN.pdf#page=33)
- [KRISAv2 Bab 3, 3.5 Pemodelan Use Case dan Senario Use Case](../../references/krisa-v2-beta-2026/BAB3-FASA-ANALISIS.pdf#page=5)

Tamatkan fail dan jawapan di skrin dengan bahagian ini, disalin tepat:

## Semak manusia / Human check
1. Setiap data-testid dalam kod wujud dalam index.html atau app.js; jalankan dengan --headed dan perhatikan setiap langkah berlaku.
2. Assertion menyemak hasil yang bermakna kepada pengguna (jumlah, mesej ralat, ID pesanan) mengikut SRS, bukan sekadar elemen kelihatan.
3. Ujian lulus atau gagal secara konsisten apabila dijalankan 3 kali berturut-turut dan tidak bergantung pada data ujian lain.
