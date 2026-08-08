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

## License

Source code and site content are proprietary. See [LICENSE](LICENSE).
