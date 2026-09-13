# Bengkel Amali SQA: KRISAv2 dan PPrISA 2.0
### Menguasai Jaminan Kualiti Perisian (SQA) moden, dipraktikkan hujung ke hujung

| | |
|---|---|
| **Tarikh** | 14 hingga 15 September 2026 (Isnin dan Selasa) |
| **Masa** | 9:30 pagi hingga 5:00 petang |
| **Tempat** | Makmal Komputer (Aras 11), Menara MyIPO |
| **Penceramah** | Encik Al-Abrar bin Abdul Wahid, Jurulatih SQA |
| **Laman web kursus** | https://fth-abr.github.io/sqa-krisa-bengkel/ |

Repositori ini mengandungi semua bahan peserta: slaid setiap modul, bengkel pembantu AI (opencode), kit makmal ShopFast,
templat SQA dan salinan rujukan rasmi JDN (KRISAv2 Beta 2026, PPrISA 2.0, templat D01 hingga D18, templat PPrISA01 hingga PPrISA18).

This repository holds everything trainees need: module slides, the hands-on SQA-AI assistant workshop (opencode),
the ShopFast lab kit, SQA templates, and offline copies of the official JDN references.

---

## 1. Mula di sini / Start here (5 minit)

Buka **PowerShell** atau **Windows Terminal**, kemudian:

```powershell
cd $HOME
git clone https://github.com/FTH-ABR/sqa-krisa-bengkel.git
cd sqa-krisa-bengkel
powershell -ExecutionPolicy Bypass -File .\setup\check-lab.ps1
```

Jika `opencode` belum dipasang:

```powershell
powershell -ExecutionPolicy Bypass -File .\setup\install-opencode.ps1
```

Tiada git? Muat turun ZIP: **Code > Download ZIP** di halaman GitHub, kemudian extract ke `C:\Users\<nama>\sqa-krisa-bengkel`.

Kemas kini bahan pada hari kedua / Update on Day 2:

```powershell
cd $HOME\sqa-krisa-bengkel
git pull
```

Panduan penuh pemasangan: [workshop-ai/W00-setup](workshop-ai/W00-setup/index.html)

---

## 2. Jadual / Agenda

| Masa | Hari 1: Membina Kualiti Sebelum Pembinaan | Slaid | Bengkel AI |
|---|---|---|---|
| 09:00 hingga 09:30 | Aluan, pra-penilaian, persediaan PC | | [W00 Setup](workshop-ai/W00-setup/) |
| 09:30 hingga 11:00 | Modul 1: Minda Kualiti | [M01](slides/M01-M02/) | [W01](workshop-ai/W01-minda-kualiti/) |
| 11:15 hingga 13:00 | Modul 2: Perancangan QA dan Kualiti Proaktif | [M02](slides/M01-M02/) | [W02](workshop-ai/W02-perancangan-qa/) |
| 14:00 hingga 15:30 | Modul 3: Semakan Reka Bentuk dan Perancangan Ujian Berasaskan Risiko | [M03](slides/M03/) | [W03](workshop-ai/W03-semakan-reka-bentuk-risiko/) |
| 15:45 hingga 17:00 | Modul 4: Reka Bentuk Ujian dan Asas Pengurusan Ujian | [M04](slides/M04/) | [W04](workshop-ai/W04-reka-bentuk-ujian/) |

| Masa | Hari 2: Ujian, Kualiti Berterusan dan Jaminan Produksi | Slaid | Bengkel AI |
|---|---|---|---|
| 09:00 hingga 10:30 | Modul 5: Pengujian Perisian dan Automasi Ujian | [M05](slides/M05/) | [W05](workshop-ai/W05-automasi-ujian/) |
| 10:45 hingga 12:30 | Modul 6: Pengurusan Pepijat dan Metrik Kualiti | [M06](slides/M06/) | [W06](workshop-ai/W06-pepijat-metrik/) |
| 13:30 hingga 15:00 | Modul 7: Audit, Pematuhan dan Dokumentasi Kualiti | [M07](slides/M07/) | [W07](workshop-ai/W07-audit-dokumentasi/) |
| 15:15 hingga 16:30 | Modul 8: Pengurusan Perubahan, Pemantauan dan Kualiti Berterusan | [M08](slides/M08/) | [W08](workshop-ai/W08-perubahan-pemantauan/) |
| 16:30 hingga 17:30 | Modul 9: Latihan Kemuncak dan Penutup Kursus | [M09](slides/M09/) | [W09](workshop-ai/W09-kemuncak/) |

Setiap modul berakhir dengan segmen **Hands-On SQA-AI Assistant Workshop** (15 hingga 25 minit).

---

## 3. Isi repositori / What is in this repository

```
slides/          Slaid setiap modul (PDF) + halaman pautan (index.html)
workshop-ai/     Bengkel pembantu AI opencode, langkah demi langkah dengan tangkapan skrin sebenar
lab/             Folder kerja makmal: kit ShopFast, templat SQA, arahan opencode (.opencode/commands)
references/      Salinan rasmi JDN: KRISAv2 Beta 2026, KRISA 1.0, PPrISA 2.0, templat D01 hingga D18 dan PPrISA01 hingga 18
setup/           Skrip semakan PC dan pemasangan opencode
docs/            Pelan kursus
```

- Semua pautan rujukan: [references/README.md](references/README.md)
- Kit makmal: [lab/README.md](lab/README.md)

---

## 4. Peraturan data / Data rules for the AI workshop

1. Guna **data sintetik ShopFast sahaja**. Jangan tampal dokumen, data peribadi atau maklumat terperingkat agensi sebenar ke dalam mana-mana alat AI.
2. Model percuma OpenCode Zen dihoskan di luar negara (Amerika Syarikat) dan data boleh digunakan untuk menambah baik model.
3. Perkongsian sesi dimatikan (`"share": "disabled"` dalam `lab/opencode.json`).
4. Output AI ialah **draf**. Setiap artifak mesti disemak manusia terhadap templat KRISA/PPrISA sebelum digunakan.

---

## 5. Notis / Notices

- Dokumen dalam `references/` ialah hak cipta Jabatan Digital Negara (JDN). Lihat [references/NOTICE-JDN.md](references/NOTICE-JDN.md).
- ShopFast ialah sistem fiktif untuk latihan. Semua nama, emel dan data adalah rekaan.
- opencode ialah perisian sumber terbuka (MIT) oleh Anomaly: https://opencode.ai

**Jurulatih:** Al-Abrar bin Abdul Wahid · [abrar.abdulwahid@gmail.com](mailto:abrar.abdulwahid@gmail.com) · [LinkedIn](https://www.linkedin.com/in/al-abrar-abdul-wahid/)
