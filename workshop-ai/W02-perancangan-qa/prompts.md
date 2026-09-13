# W02 Semakan keperluan dan RTM dibantu AI / AI-assisted requirement review and RTM

Masa: 25 minit (Hari 1, 12:30 hingga 12:55). Jalankan dalam folder `lab` kecuali dinyatakan.

## Langkah 1: Jalankan arahan semakan SRS dalam mod Plan. Ia membaca SRS, BRS dan panduan RTM dan memaparkan penemuan.

Di: opencode (Plan)

```
/review-srs REQ-CHK-03 dan REQ-CHK-04
```

## Langkah 2: Jalankan /rewrite-gwt dalam mod Build dan semak kebenaran menulis. AI membaca dokumen dahulu dan mungkin berhenti seketika pada Preparing write. Apabila dialog Permission required muncul, baca pratonton dan pilih Allow once.

Di: opencode (Build)

```
/rewrite-gwt REQ-CHK-03 REQ-CHK-04
```

## Langkah 3: Allow once. Tulis semula Given/When/Then disimpan.

Di: opencode

```
Allow once (Enter)
```

## Langkah 4: Jalankan /rtm untuk mendraf matriks kebolehkesanan. AI membaca dokumen dahulu dan mungkin berhenti seketika pada Preparing write. Apabila dialog Permission required muncul, baca pratonton dan pilih Allow once.

Di: opencode (Build)

```
/rtm REQ-CHK-01 hingga REQ-CHK-06
```

## Langkah 5: Allow once. CSV RTM disimpan.

Di: opencode

```
Allow once (Enter)
```

## Langkah 6: Buka CSV dan bandingkan baris dengan ID keperluan SRS.

Di: PowerShell

```
Import-Csv outputs\m02-rtm.csv | Select-Object -First 12 | Format-Table -AutoSize
```

## Semakan manusia / Human check

- Setiap penemuan memetik teks yang benar-benar wujud dalam SRS
- Setiap Given/When/Then mempunyai satu Then yang boleh diperhatikan
- Baris RTM sepadan dengan ID keperluan dalam SRS, tiada yang direka
