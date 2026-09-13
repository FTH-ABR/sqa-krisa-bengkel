# Kit Makmal ShopFast (Bengkel SQA KRISAv2 dan PPrISA 2.0)

Folder `lab/` ialah ruang kerja amali. Semua data ShopFast adalah **fiktif**. Jangan masukkan data peribadi atau dokumen agensi sebenar ke dalam mana-mana alat AI.

## 1. Kandungan `lab/`

| Laluan | Kandungan |
|---|---|
| `shopfast/app/` | Aplikasi ShopFast: API Node.js dan halaman web checkout |
| `shopfast/tests/` | Ujian permulaan: API (Postman/Newman) dan UI (Playwright) |
| `shopfast/docs/BRS-ShopFast.md` | Spesifikasi Keperluan Bisnes (format D02) |
| `shopfast/docs/SRS-ShopFast.md` | Spesifikasi Keperluan Sistem (format D03), keperluan REQ-CHK-01 hingga REQ-CHK-06 |
| `shopfast/docs/architecture.md` | Seni bina 3 lapisan, sempadan kepercayaan, aliran data dan senarai endpoint |
| `shopfast/docs/openapi.yaml` | Kontrak API |
| `shopfast/docs/incidents.md` | Kisah insiden produksi untuk Modul 1 |
| `templates/` | Templat SQA (Markdown dan CSV) yang mencerminkan KRISA dan PPrISA; indeks di [templates/README.md](templates/README.md) |
| `.opencode/commands/` | 16 arahan opencode untuk bengkel pembantu AI |
| `AGENTS.md` | Peraturan pembantu AI (peranan, rujukan, format output, data sintetik) |
| `opencode.json` | Konfigurasi opencode projek (perkongsian dimatikan, kebenaran edit dan bash) |
| `outputs/` | Tempat semua hasil kerja anda disimpan |

Rujukan rasmi JDN berada di [`../references`](../references/README.md).

## 2. Jalankan Aplikasi ShopFast

Keperluan: Node.js 20 atau lebih baharu. Buka **PowerShell**:

```powershell
cd $HOME\sqa-krisa-bengkel\lab\shopfast
npm install
npm start
```

Buka http://localhost:3000 dalam pelayar. Semak API dalam terminal lain:

```powershell
Invoke-RestMethod http://localhost:3000/api/health
```

Akaun latihan: `aminah@example.test` (ahli) dan `bala@example.test` (bukan ahli), kata laluan `Latihan123!`.

Jalankan ujian (dalam folder `shopfast`):

```powershell
npx playwright install chromium
npm test
```

Jika port 3000 sedang digunakan: `$env:PORT = 3001; npm start`

## 3. Mulakan opencode dalam `lab/`

opencode mesti dimulakan dari folder `lab/` supaya `AGENTS.md`, `opencode.json` dan arahan dalam `.opencode/commands/` dimuatkan.

```powershell
cd $HOME\sqa-krisa-bengkel\lab
opencode
```

Dalam opencode:
1. Taip `/models` dan pilih model percuma OpenCode Zen yang diarahkan oleh jurulatih.
2. Taip `/` untuk melihat senarai arahan, kemudian jalankan arahan dengan input, contohnya `/testcases REQ-CHK-02 EP`.
3. Arahan bertanda agen **plan** hanya memaparkan hasil (tiada fail ditulis). Arahan bertanda **build** menulis fail ke `outputs/` dan akan meminta kebenaran sebelum menyunting.
4. Setiap hasil berakhir dengan senarai **Semak manusia / Human check**. Hasil AI ialah draf sehingga anda menyemaknya.

## 4. Jadual Arahan

| Arahan | Modul | Agen | Contoh Input | Output |
|---|---|---|---|---|
| `/review-srs` | M02 Perancangan QA | plan | `seksyen 2.4` | Papar di skrin (simpan sebagai `outputs/m02-srs-review.md`) |
| `/rewrite-gwt` | M02 Perancangan QA | build | `REQ-CHK-03 FR-08` | `outputs/m02-gwt-rewrite.md` |
| `/rtm` | M02 Perancangan QA | build | (kosong) | `outputs/m02-rtm.csv` |
| `/design-review` | M03 Semakan Reka Bentuk dan Risiko | plan | `keselamatan` | Papar di skrin (simpan sebagai `outputs/m03-design-review.md`) |
| `/risk-register` | M03 Semakan Reka Bentuk dan Risiko | build | tampal penemuan /design-review | `outputs/m03-risk-register.csv` |
| `/testcases` | M04 Reka Bentuk Ujian | build | `REQ-CHK-01 BVA` | `outputs/m04-testcases.csv` |
| `/gen-api-tests` | M05 Automasi Ujian | build | `TC-CHK-001 TC-CHK-002` | `outputs/m05-api-tests.md` |
| `/gen-ui-test` | M05 Automasi Ujian | build | `checkout ahli dengan RAYA15` | `outputs/m05-ui-test.md` |
| `/bug-report` | M06 Pepijat dan Metrik | build | langkah, jangkaan, hasil sebenar | `outputs/m06-bug-report-BUG-CHK-001.md` |
| `/metrics` | M06 Pepijat dan Metrik | build | `Lulus 54 Gagal 8 ...` | `outputs/m06-metrics.csv` |
| `/audit` | M07 Audit dan Dokumentasi | plan | `fasa pengujian` | Papar di skrin (simpan sebagai `outputs/m07-audit.md`) |
| `/capa` | M07 Audit dan Dokumentasi | build | `AUD-01 ...` | `outputs/m07-capa.md` |
| `/test-summary` | M07 Audit dan Dokumentasi | build | tempoh dan binaan ujian | `outputs/m07-test-summary.md` |
| `/change-request` | M08 Perubahan dan Pemantauan | build | penerangan perubahan | `outputs/m08-change-request.md` |
| `/impact-analysis` | M08 Perubahan dan Pemantauan | plan | `outputs/m08-change-request.md` | Papar di skrin (simpan sebagai `outputs/m08-impact-analysis.md`) |
| `/quality-gate` | M09 Latihan Kemuncak | build | `G3` atau `G4 jalankan-ujian` | `outputs/m09-quality-gate.md` |

Modul 1 (Minda Kualiti) menggunakan [shopfast/docs/incidents.md](shopfast/docs/incidents.md) untuk perbincangan dan tidak memerlukan arahan.

## 5. Peraturan Data

1. Data sintetik ShopFast sahaja; emel `@example.test`.
2. Model percuma dihoskan di luar negara; jangan tampal maklumat terperingkat atau peribadi.
3. Perkongsian sesi dimatikan dalam `opencode.json` (`"share": "disabled"`); `git push` disekat untuk agen.
4. Semak setiap output terhadap templat dan rujukan KRISA atau PPrISA sebelum digunakan.
