# vijayb-fiverr-profile

GitHub Pages site for displaying the DevOps Fiverr launch artifact.

## Local run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output will be created in `dist/`.

## GitHub Pages publish

1. Push this repo to GitHub.
2. Make sure the default branch is `main`.
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Source: GitHub Actions`.
5. Push to `main` or run the `Deploy GitHub Pages` workflow manually.

The workflow will build the Vite app and publish the site to GitHub Pages.

## Entry point

The page renders [`fiverr_kit_v3_artifact.jsx`](./fiverr_kit_v3_artifact.jsx) through [`src/main.jsx`](./src/main.jsx).
