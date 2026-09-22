# Astra Website

Static marketing site for Astra. The deployable output is `Website/dist`; it has no package manager, build command, or server-side secrets.

## Local preview

From `Website/dist`, run:

```bash
python3 -m http.server 8788
```

Then open `http://localhost:8788`.

## Cloudflare Pages via Git

1. Push the repository to GitHub.
2. In Cloudflare Dashboard, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select this repository and the `Development` production branch (or change to your release branch when ready).
4. In the build settings choose **Framework preset: None**.
5. Leave **Build command** empty.
6. Set **Build output directory** to `Website/dist`.
7. Deploy. Every later push to the configured production branch deploys automatically; other connected branches receive preview deployments.

Before App Store submission, use the resulting public `/privacy/` and `/terms/` URLs in App Store Connect and update the in-app legal links if this site replaces the existing Supabase legal URLs.

## Release checklist

- Replace the inactive “Coming soon to the App Store” call-to-action in `Website/dist/index.html` with the real App Store URL after release.
- Set the production custom domain in Cloudflare Pages.
- Verify `/`, `/privacy/`, `/terms/`, and `/support/` on the production domain.
