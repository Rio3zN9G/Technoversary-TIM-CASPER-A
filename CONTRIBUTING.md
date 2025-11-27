# Contributing to PURE

Terima kasih atas minat Anda untuk berkontribusi pada **PURE (Planet Unity for Resource Environment)**! 🌱

Kami menyambut kontribusi dari siapa saja yang ingin membantu membuat platform ini lebih baik. Dokumen ini berisi panduan untuk berkontribusi.

## 📋 Daftar Isi

- [Code of Conduct](#code-of-conduct)
- [Cara Berkontribusi](#cara-berkontribusi)
- [Proses Pull Request](#proses-pull-request)
- [Standar Kode](#standar-kode)
- [Pelaporan Bug](#pelaporan-bug)
- [Usulan Fitur](#usulan-fitur)

## 🤝 Code of Conduct

Dengan berpartisipasi dalam proyek ini, Anda setuju untuk menjaga lingkungan yang ramah dan inklusif. Kami mengharapkan:

- Komunikasi yang sopan dan profesional
- Menghormati pendapat dan pengalaman yang berbeda
- Memberikan dan menerima kritik konstruktif dengan baik
- Fokus pada apa yang terbaik untuk komunitas

## 🚀 Cara Berkontribusi

### 1. Fork Repository

```bash
# Fork repository melalui GitHub UI, kemudian clone
git clone https://github.com/[username-anda]/Technoversary-TIM-CASPER-A.git
cd Technoversary-TIM-CASPER-A
```

### 2. Buat Branch Baru

```bash
# Gunakan nama branch yang deskriptif
git checkout -b fitur/nama-fitur-anda
# atau
git checkout -b perbaikan/nama-bug
```

### 3. Lakukan Perubahan

- Pastikan kode Anda mengikuti [Standar Kode](#standar-kode)
- Tulis komentar yang jelas dan deskriptif
- Test perubahan Anda secara menyeluruh

### 4. Commit Perubahan

```bash
git add .
git commit -m "feat: menambahkan fitur X"
# atau
git commit -m "fix: memperbaiki bug Y"
```

**Format Commit Message:**
- `feat:` untuk fitur baru
- `fix:` untuk perbaikan bug
- `docs:` untuk perubahan dokumentasi
- `style:` untuk perubahan formatting
- `refactor:` untuk refactoring kode
- `test:` untuk menambah test
- `chore:` untuk maintenance

### 5. Push ke GitHub

```bash
git push origin fitur/nama-fitur-anda
```

### 6. Buat Pull Request

Buka Pull Request di GitHub dengan:
- Judul yang jelas dan deskriptif
- Deskripsi detail tentang perubahan
- Screenshot (jika relevan)
- Referensi ke issue terkait (jika ada)

## 📝 Proses Pull Request

1. **Review Otomatis**: PR Anda akan di-review oleh maintainer
2. **Diskusi**: Kami mungkin meminta perubahan atau klarifikasi
3. **Approval**: Setelah disetujui, PR akan di-merge
4. **Kredit**: Kontribusi Anda akan dicantumkan di README

### Checklist PR

Sebelum submit PR, pastikan:

- [ ] Kode berjalan tanpa error
- [ ] Tidak ada konflik dengan branch `main`
- [ ] Kode mengikuti standar yang ada
- [ ] Dokumentasi diperbarui (jika perlu)
- [ ] Screenshot/GIF ditambahkan (untuk perubahan UI)

## 💻 Standar Kode

### HTML
- Gunakan indentasi 4 spasi
- Gunakan semantic HTML5
- Tambahkan komentar untuk section kompleks

### CSS
- Gunakan CSS Variables untuk warna dan spacing
- Ikuti konvensi penamaan yang ada
- Gunakan mobile-first approach

### JavaScript
- Gunakan ES6+ syntax
- Hindari global variables
- Tambahkan komentar untuk logika kompleks
- Gunakan `const` dan `let`, hindari `var`

### Contoh Kode yang Baik

```javascript
// Good ✅
const calculateCarbonFootprint = (transport, energy, waste) => {
    const transportEmission = transport * 0.2;
    const energyEmission = energy * 0.5;
    const wasteEmission = waste * 0.3;
    
    return transportEmission + energyEmission + wasteEmission;
};

// Bad ❌
function calc(t,e,w) {
    return t*0.2+e*0.5+w*0.3;
}
```

## 🐛 Pelaporan Bug

Jika Anda menemukan bug, silakan buat issue dengan:

**Template Bug Report:**
```markdown
**Deskripsi Bug**
Penjelasan singkat tentang bug

**Cara Reproduksi**
1. Buka halaman '...'
2. Klik pada '...'
3. Scroll ke '...'
4. Lihat error

**Hasil yang Diharapkan**
Apa yang seharusnya terjadi

**Screenshot**
Jika memungkinkan, tambahkan screenshot

**Environment:**
 - OS: [e.g. Windows 11]
 - Browser: [e.g. Chrome 120]
 - Versi: [e.g. 1.0.0]
```

## 💡 Usulan Fitur

Punya ide untuk fitur baru? Buat issue dengan:

**Template Feature Request:**
```markdown
**Deskripsi Fitur**
Penjelasan jelas tentang fitur yang diusulkan

**Masalah yang Dipecahkan**
Masalah apa yang akan dipecahkan oleh fitur ini?

**Solusi yang Diusulkan**
Bagaimana fitur ini akan bekerja?

**Alternatif**
Solusi alternatif yang sudah dipertimbangkan

**Mockup/Wireframe**
Jika ada, tambahkan mockup visual
```

## 🎨 Kontribusi Desain

Untuk kontribusi desain UI/UX:
- Gunakan Figma atau tools serupa
- Ikuti design system yang ada (warna, typography, spacing)
- Pastikan desain responsive
- Sertakan prototype interaktif jika memungkinkan

## 📚 Kontribusi Dokumentasi

Dokumentasi yang baik sangat penting! Anda bisa membantu dengan:
- Memperbaiki typo
- Menambah contoh kode
- Menerjemahkan dokumentasi
- Membuat tutorial

## 🏆 Kontributor

Semua kontributor akan dicantumkan di README.md. Terima kasih atas kontribusi Anda!

## 📞 Kontak

Jika ada pertanyaan:
- **Email**: ario.zulkaisi@smkpertiwikng.sch.id
- **GitHub Issues**: [Buat issue baru](https://github.com/Rio3zN9G/Technoversary-TIM-CASPER-A/issues)
- **Instagram**: [@itsriod](https://instagram.com/itsriod)

---

**Terima kasih telah berkontribusi untuk masa depan yang lebih hijau! 🌍💚**
