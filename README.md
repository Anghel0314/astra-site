# Astra Website

Static marketing site for Astra. The deployable output is `dist`; it has no package manager, build command, or server-side secrets.

## Local preview

From `dist`, run:

```bash
python3 -m http.server 8788
```

Then open `http://localhost:8788`.

## Cloudflare Pages via Git

1. Push the repository to GitHub.
2. In Cloudflare Dashboard, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select this repository and the `main` production branch.
4. In the build settings choose **Framework preset: None**.
5. Leave **Build command** empty.
6. Set **Build output directory** to `dist` (the standalone `astra-site` repository root contains this directory).
7. Deploy. Every later push to the configured production branch deploys automatically; other connected branches receive preview deployments.

Before App Store submission, use the resulting public `/privacy/` and `/terms/` URLs in App Store Connect and update the in-app legal links if this site replaces the existing Supabase legal URLs.

## Release checklist

- Replace the inactive “Coming soon to the App Store” call-to-action in `dist/index.html` with the real App Store URL after release.
- Set the production custom domain in Cloudflare Pages.
- Verify `/`, `/privacy/`, `/terms/`, and `/support/` on the production domain.

## Development Paths update — 2026-10-02

The landing page now leads with the eight Development Paths and the practice/reflection/outcome/history loop. Approved iPhone and iPad marketing screenshots are optimized as WebP assets. The direction selector is a website preview, not a personalized calculation. Free local Paths/history and Premium Daily Brief/Forecast/Advisor are described separately. Support includes path navigation and local history persistence. Privacy and Terms text remains unchanged.

`Astra-website.zip` contains the complete deployable site with `index.html` at its root for a Cloudflare Pages upload. Preview and package preparation do not publish the website. No App Store release URL has been supplied, so the release CTA remains Coming soon.
