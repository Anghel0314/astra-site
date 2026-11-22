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

## Deployment troubleshooting

If a push does not create a Pages deployment, check the project’s Deployments page for a disconnected Git account warning. Reauthenticate the existing GitHub integration and confirm it still has access to `Anghel0314/astra-site`. Production uses `main`, an empty build command, and `dist` as the output directory. A new push after reconnecting triggers a fresh deployment; verify its success and the public page before treating publication as complete.

## Header and footer brand correction — 2026-10-07

Both shared components now render the SaaS compass SVG used by the favicon. Previous
favicon-only update did not replace the visible letter A in the header/footer.

## Astra 1.8 website refresh — 2026-11-22

Updated the actual eight local Paths, decisions, journal, free birth chart/transits and the upcoming personal Today/Outlook/Compass. The page explicitly marks 1.8 as a preview while the official App Store metadata reports 1.7.0. The App Store action now links to the verified current app (ID 6831565760, bundle com.elena.fieldnotepaths). No invented AI output or InterpretationPreviewView fixture is used in marketing captures.

Fresh images are native app screenshots from isolated QA devices, with an example local profile and illustrative local notes. The capture source, app commit/build and file hashes are recorded in docs/website-180-verification.json. Support, Terms and Privacy now describe actual current/1.8 routing, consent, local storage, shared-account deletion, Apple/Stripe access and optional AI processing.

The existing public Cloudflare Pages project and /privacy/, /terms/, /support/ paths are retained. Deployment is complete only when those public pages and replacement images are verified; a Git push alone is not proof of publication.

## Website copy and capture review

Public marketing and support copy no longer display app release numbers or a version badge. Upcoming functionality is described as part of the next App Store update until it is distributed. Visible numeric versions in policy/terms must be reconciled by the legal-content owner separately; cache query parameters and asset filenames are implementation details.

The Today capture must be refreshed after the collapsed day selector and reading presentation fixes. Existing Paths, practice, decision, journal, natal chart, transit chart and iPad Paths images stay applicable unless those screens change during integration. Review Settings and the Plus purchase/access state as QA surfaces, even though those screens are not among the current eight website images. Preserve native sample-data disclosure and do not fabricate paid AI readings for marketing.

The owner requests automatic personal-reading preparation when a signed-in user with a birth profile opens the feature. Marketing and Support describe that entry flow without an enable-personalization or data-processing permission step. Detailed processing disclosures remain in Terms and Privacy. Plus is still required for paid readings, Outlook and Compass. Notification OS permission remains a separate existing platform setting.
