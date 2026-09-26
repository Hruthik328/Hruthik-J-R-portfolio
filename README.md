# Hruthik J R Portfolio

A frontend-only personal portfolio built with **React + Vite**. There is no Spring Boot, MySQL server, Express backend, or other server-side application required to run the portfolio.

## Run locally

```bash
npm install
npm run dev
```

Vite normally starts the site at `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## EmailJS contact form

The contact form uses EmailJS in the browser. Copy `.env.example` to `.env.local` and add the existing EmailJS values locally:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

`.env.local` is ignored by Git and must never be committed.

For GitHub Pages, add these three values as repository **Actions secrets** with the same names. The deployment workflow injects them only during the Vite build.

## GitHub Pages

The Vite base path is configured for the repository:

`/Hruthik-J-R-portfolio/`

Deployment is handled by `.github/workflows/deploy.yml` using the official GitHub Pages Actions flow. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

## Included portfolio assets

- `public/assets/resume.pdf`
- `public/assets/internship-certificate.pdf`
- `public/assets/cloud-computing-certificate.pdf`
- `public/assets/publication-certificate.pdf`
- `public/assets/power-bi-certificate.pdf`

All public asset links use Vite's `BASE_URL`, so they work both locally and under the GitHub Pages repository path.

## Repository hygiene

The project intentionally does not include generated dependencies or build output in version control:

- `node_modules/` is ignored
- `dist/` is ignored
- `.env.local` and other local environment files are ignored
