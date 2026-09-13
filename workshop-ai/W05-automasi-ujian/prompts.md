# W05 Ujian UI dan API dijana AI yang menemui pepijat sebenar / AI-generated UI and API tests that find a real bug

Masa: 15 minit (Hari 2, 10:10 hingga 10:25). Jalankan dalam folder `lab` kecuali dinyatakan.

## Langkah 1: Jalankan /gen-ui-test untuk kes sempadan kuantiti 10. AI membaca dokumen dahulu dan mungkin berhenti seketika pada Preparing write. Apabila dialog Permission required muncul, baca pratonton dan pilih Allow once.

Di: opencode (Build)

```
/gen-ui-test TC-CHK-004 tambah P002 kuantiti 10 ke troli dan semak troli menerima kuantiti 10 (REQ-CHK-01)
```

## Langkah 2: Allow once. Ujian dan arahan disimpan dalam outputs/m05-ui-test.md.

Di: opencode

```
Allow once (Enter)
```

## Langkah 3: Simpan blok kod sebagai fail spec dan jalankan. Kegagalan di sini ialah penemuan sebenar untuk dihasilkan semula dan dilaporkan dalam Modul 6.

Di: PowerShell

```
$md = Get-Content outputs\m05-ui-test.md -Raw
[regex]::Match($md, '(?s)```(?:js|javascript)\s*(.*?)```').Groups[1].Value | Set-Content -Encoding utf8 shopfast\tests\ui\m05-senario.spec.js
cd shopfast
npx playwright test tests/ui/m05-senario.spec.js --reporter=list
```

## Langkah 4: Kembali ke opencode, jalankan /gen-api-tests daripada kontrak OpenAPI. AI membaca dokumen dahulu dan mungkin berhenti seketika pada Preparing write. Apabila dialog Permission required muncul, baca pratonton dan pilih Allow once.

Di: opencode (Build)

```
/gen-api-tests REQ-CHK-01 REQ-CHK-03
```

## Langkah 5: Allow once. Semak ujian API yang dijana sebelum digunakan.

Di: opencode

```
Allow once (Enter)
```

## Semakan manusia / Human check

- Ujian memilih elemen melalui data-testid yang benar-benar wujud
- Ujian yang gagal ialah penemuan: hasilkan semula secara manual sebelum log pepijat
- Ujian yang dijana disemak seperti kod sebelum di-commit
