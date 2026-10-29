# devjoe Garmin site

Public support and product site for independent Garmin apps by devjoe.

- Production URL: <https://garmin.devjoe.app>
- Public issues: <https://github.com/devjoe/devjoe-garmin-site/issues>
- Hosting target: Cloudflare Pages
- Framework: Astro with static output

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run check
npm run build
```

Cloudflare Pages uses `npm run build` and publishes `dist/`. Pull requests and
`main` must pass GitHub Actions before deployment.

The product data in `src/data/release.json` is a sanitized export from the
private application repository. It contains no signing keys, application UUIDs,
raw prompts, private evidence, account data, or supporter messages.

## Product content updates

- `src/data/store-listing.json` carries the approved public Store copy and
  historical version summaries. Append new summaries without replacing history.
- `src/data/device-features.json` records per-model options verified against the
  signed release package. Check every hardware variant for each model; a touch
  screen or display type alone is not enough to infer feature availability.
- `src/data/release.json` supplies the current version and supported-model list.
  Keep these three files on the same release version.
- Reuse unchanged Store images. The 1.13.0 data-fields GIF adds weekly swim;
  Hero and images 1–4 remain the same approved artwork.
- Validate the model selector and mobile table overflow, preserve old release
  notes, and keep account/device/error reports out of this public repository.
- Test interactivity with the `public/_headers` Content Security Policy applied.
  Astro must emit external script/style files; an unconfigured local static
  server does not reproduce the production CSP.

## License

Source code and site content are proprietary. See [LICENSE](LICENSE).
