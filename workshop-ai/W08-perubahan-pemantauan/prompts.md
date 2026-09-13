# W08 Permohonan pindaan, analisis impak dan semakan CI dibantu AI / AI change request, impact analysis and CI review

Masa: 15 minit (Hari 2, 16:10 hingga 16:25). Jalankan dalam folder `lab` kecuali dinyatakan.

## Langkah 1: Jalankan /change-request untuk kod promo RAYA26. AI membaca dokumen dahulu dan mungkin berhenti seketika pada Preparing write. Apabila dialog Permission required muncul, baca pratonton dan pilih Allow once.

Di: opencode (Build)

```
/change-request Tambah kod promo RAYA26 (diskaun 26 peratus, sah 1 hingga 31 Mac 2027) pada checkout ShopFast
```

## Langkah 2: Allow once. Permohonan pindaan gaya PPrISA10 disimpan.

Di: opencode

```
Allow once (Enter)
```

## Langkah 3: Jalankan /impact-analysis dalam mod Plan.

Di: opencode (Plan)

```
/impact-analysis RAYA26
```

## Langkah 4: Minta ejen Plan menyemak quality gate GitHub Actions.

Di: opencode (Plan)

```
Semak ../.github/workflows/shopfast-quality-gate.yml sebagai quality gate. Nyatakan apa yang disemak, apa yang tiada (contoh imbasan keselamatan atau ambang liputan) dan 3 cadangan. Jangan tulis fail.
```

## Semakan manusia / Human check

- RAYA26 pada 26 peratus melanggar had 25 peratus dalam REQ-CHK-03: adakah AI perasan?
- Set regresi adalah minimum dan dijejak ke ID REQ-CHK
- Rollback mempunyai pencetus yang jelas dan pemilik
