# Ian Sinambela Portfolio

Website portfolio pribadi untuk DevOps Engineer dengan fokus pada Azure, Kubernetes, Terraform, CI/CD, DevSecOps, dan observability.

## Overview

Website ini dibuat dengan Next.js App Router, TypeScript strict mode, dan Tailwind CSS. Output production dibuat sebagai static export agar ringan untuk VPS kecil.

Kontak yang dikonfigurasi:

- GitHub: https://github.com/sinambela99/project-portfolio
- LinkedIn: https://www.linkedin.com/in/ian-paulus-sinambela/
- Email: sinambelaian@gmail.com

## Fitur

- Hero DevOps dengan visual pipeline dan ringkasan sistem.
- Section tentang saya, keahlian, project, Kubernetes, progressive delivery, observability, pengalaman, sertifikasi, dan kontak.
- Halaman detail project di `/projects/[slug]`.
- Halaman DevSecOps interaktif di `/devsecops`.
- Halaman arsitektur interaktif di `/architecture`.
- Link CV dan 6 file sertifikasi yang tersedia di repository.
- Metadata SEO, sitemap, robots, structured data, dan security headers.

## Teknologi

- Next.js
- TypeScript
- React
- Tailwind CSS
- Lucide Icons

## Arsitektur

Alur utama yang ditampilkan:

Developer -> Git Repository -> CI/CD -> Security Scanning -> Container Registry -> Kubernetes -> Observability

Security scanning mencakup CodeQL, Gitleaks, Trivy, dan Checkov sebagai contoh security gate.

Catatan observability: application monitoring adalah praktik memantau aplikasi, sedangkan LGTM adalah stack observability yang terdiri dari Loki, Grafana, Tempo, dan Mimir.

## Struktur Project

```text
src/
├── app/
├── components/
├── data/
└── lib/
```

## Development

```bash
npm install
npm run dev
```

## Environment Variables

Tidak ada secret yang dibutuhkan untuk menjalankan website ini. URL GitHub, LinkedIn, email, domain, dan path CV dapat diperbarui di `src/lib/site-config.ts`.

## Build

```bash
npm run typecheck
npm run lint
npm run build
```

Hasil static export berada di folder `out/`.

## Docker

```bash
docker build -t ian-sinambela-portfolio .
docker run -p 8080:8080 ian-sinambela-portfolio
```

## CI/CD

Contoh pipeline tersedia di `.github/workflows/ci.yml` dengan tahapan checkout, install dependency, lint, typecheck, build, secret scan, container build, container scan, IaC scan, dan deploy placeholder.

## Security

- Tidak menyimpan secret di source code.
- External link memakai `noreferrer noopener` ketika URL sudah dikonfigurasi.
- Security headers disiapkan di `nginx.conf` untuk deployment static/Docker.
- Pipeline contoh memblokir critical/high vulnerability melalui Trivy.

## Deployment

Domain target dikonfigurasi sebagai `https://sinambelaian.com`. Perbarui konfigurasi DNS dan platform hosting sesuai environment produksi.

## Future Improvement

- Tambahkan verification URL resmi untuk setiap sertifikasi.
- Tambahkan test otomatis untuk komponen interaktif.
- Hubungkan telemetry sungguhan bila website nanti membaca data observability nyata.