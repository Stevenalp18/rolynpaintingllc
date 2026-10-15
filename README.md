# Rolyn Painting LLC

Website for Rolyn Painting LLC — residential & commercial painting in DC, MD and VA. Built with Astro + Tailwind by Helix Web Solutions.

- English at `/`, Spanish at `/es/`
- All copy lives in `src/i18n/ui.ts`
- Estimate form posts to FormSubmit (the first submission sends an activation email to rolyn_perez@icloud.com)

```sh
npm install
npm run images   # one-time: pulls the 6 job photos from the old WordPress site into public/assets
npm run dev
npm run build    # outputs ./dist for Netlify
```
