# Reeti Srivastava — Portfolio

Single-page personal portfolio built with **Vite + React + Tailwind CSS + Framer Motion**, with a gradient mesh background + interactive starfield.

## Tech
- React (Vite)
- Tailwind CSS
- Framer Motion
- `react-scroll`, `react-icons`
- `react-tsparticles` + `tsparticles`
- `react-type-animation`
- `react-parallax-tilt`

## Local setup

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Resume download
The "Download Resume" button points to `/resume.pdf`. Add your resume at:
- `public/resume.pdf`

## Deploy to Vercel
This repo includes:
- `vercel.json` rewrite for SPA routing
- GitHub Actions workflow at `.github/workflows/deploy.yml`

### Required GitHub secrets
Add these secrets in your GitHub repo settings:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

After pushing to `main`, the workflow will build and deploy production using the Vercel CLI.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
