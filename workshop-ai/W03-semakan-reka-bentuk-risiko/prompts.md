# W03 Semakan reka bentuk AI dan daftar risiko 5 x 5 / AI design review and 5 x 5 risk register

Masa: 20 minit (Hari 1, 15:05 hingga 15:25). Jalankan dalam folder `lab` kecuali dinyatakan.

## Langkah 1: Jalankan semakan reka bentuk dalam mod Plan untuk endpoint pesanan.

Di: opencode (Plan)

```
/design-review GET /api/orders/{orderId}
```

## Langkah 2: Cabar AI: minta baris tepat yang membuktikan penemuan.

Di: opencode (Plan)

```
Petik baris tepat dalam shopfast/docs/openapi.yaml yang membuktikan penemuan anda tentang GET /api/orders/{orderId}.
```

## Langkah 3: Tukar ke Build dan jalankan /risk-register. Semak kebenaran. AI membaca dokumen dahulu dan mungkin berhenti seketika pada Preparing write. Apabila dialog Permission required muncul, baca pratonton dan pilih Allow once.

Di: opencode (Build)

```
/risk-register checkout ShopFast berdasarkan penemuan semakan reka bentuk di atas
```

## Langkah 4: Allow once. CSV daftar risiko disimpan.

Di: opencode

```
Allow once (Enter)
```

## Langkah 5: Susun mengikut skor dan setuju tiga keutamaan ujian teratas.

Di: PowerShell

```
Import-Csv outputs\m03-risk-register.csv | Sort-Object {[int]$_.Skor} -Descending | Format-Table -AutoSize -Wrap
```

## Semakan manusia / Human check

- Penemuan memetik laluan atau baris tepat dalam openapi.yaml atau architecture.md
- Skor menggunakan skala 1 hingga 5 dan Skor = K x I
- Setiap risiko utama mempunyai keutamaan ujian, bukan sekadar mitigasi
