# Solid Image to Ascii art

A web application that renders selected image as an ascii art using `FileReader`, `canvas` and [SolidJS](https://www.solidjs.com/).

User can change found hex colors to other characters and they can copy ascii art to clipboard.

Files are not uploaded to external services, everything is done in visitor's browser.

## Dev

- `pnpm install`
- `pnpm dev`
- goto: http://localhost:3000

## Prod

- `pnpm install`
- `pnpm build`
- assets can be found in `dist`-folder
