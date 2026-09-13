# W09 Kemuncak bersama rakan AI: buktikan quality gate / Capstone with an AI pair: prove the quality gate

Masa: 10 minit (Hari 2, 17:10 hingga 17:20). Jalankan dalam folder `lab` kecuali dinyatakan.

## Langkah 1: Jalankan /quality-gate dengan larian ujian langsung. opencode menjalankan npm test (dibenarkan dalam opencode.json) dan meminta kebenaran sebelum menulis. AI membaca dokumen dahulu dan mungkin berhenti seketika pada Preparing write. Apabila dialog Permission required muncul, baca pratonton dan pilih Allow once.

Di: opencode (Build)

```
/quality-gate G3 jalankan-ujian
```

## Langkah 2: Allow once. Baca keputusan dan bukti bagi setiap kriteria.

Di: opencode

```
Allow once (Enter)
```

## Langkah 3: Tukar ke Plan dan minta AI mengkritik kesimpulannya sendiri.

Di: opencode (Plan)

```
Senaraikan 3 kesimpulan paling lemah dalam keputusan quality gate tadi dan bukti tambahan yang diperlukan untuk setiap satu. Jangan tulis fail.
```

## Langkah 4: Sediakan outputs anda sebagai bukti audit dan commit. Guna -f kerana lab/outputs diabaikan oleh .gitignore supaya kerja pelatih tidak termasuk ke repositori awam secara tidak sengaja.

Di: PowerShell

```
git add -f outputs shopfast/tests/ui/m05-senario.spec.js
git status --short
git commit -m "bukti kemuncak pasukan"
git log --oneline -3
```

## Semakan manusia / Human check

- Setiap kriteria dipautkan ke fail bukti dan nilai sebenar
- Tiada GO selagi ada kriteria tidak dipenuhi atau tanpa bukti
- Sekurang-kurangnya satu kesilapan AI ditemui dan dibetulkan oleh pasukan
