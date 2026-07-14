# starlinksdubai

Static Bootstrap 5 business website for a Dubai-based printing and advertising company.

## Pages

- `index.html`
- `about.html`
- `services.html`
- `portfolio.html`
- `contact.html`

## Assets

- `assets/css/style.css`
- `assets/js/main.js`
- `assets/img/*.svg`

## Launch Notes

- WhatsApp quote submissions are configured to `+971527266343`.
- Quote email is configured as `star06@eim.ae`.
- New Star Links image assets are included under `assets/img/` and the original source uploads are preserved under `assets/img/new-images/`.
- Replace the map background image with a live Google Maps embed if you want interactive map controls.
- Upload the folder contents to any static hosting service.

## Vercel Deploy

This folder is ready for Vercel static hosting as project `starlinksdubai`.

1. Install Node.js from `https://nodejs.org/`.
2. Install Vercel CLI:
   ```powershell
   npm install -g vercel
   ```
3. Open this folder in PowerShell:
   ```powershell
   cd "C:\Users\Administrator\Documents\Codex\2026-07-09\you-are-a-senior-ui-ux\outputs\star-links-advertising"
   ```
4. Log in and deploy:
   ```powershell
   vercel login
   vercel --prod --name starlinksdubai
   ```

You can also upload the ZIP manually from the Vercel dashboard.
