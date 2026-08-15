# Replace AMC Website Images

All visible website image links are now kept in one file:

> `client/src/lib/imageConfig.ts`

Open this file and replace the URL inside quotation marks for the image you want to change. For example, replace the value beside `hero` to change the large home-page photograph, or replace `chickenKarahi` to change that specific menu card.

## Where to replace each kind of image

| Website area | Configuration group | Example key |
|---|---|---|
| Logo | `siteImages` | `logo` |
| Large home-page photo | `siteImages` | `hero` |
| About, buffet, and menu feature images | `siteImages` | `about`, `buffet`, `menuFeature` |
| Individual food/menu cards | `menuImages` | `chickenKarahi`, `lahoriBiryani` |
| Catering-event gallery | `galleryImages` | `grill`, `tableStyling`, `familyFeast` |

## Add your photos

Use a public image URL in this format:

```ts
hero: "https://your-image-host.example.com/amc-hero.jpg",
```

When using this site in Manus, first upload the image to the project’s static storage, then paste the uploaded `/manus-storage/...` URL into `imageConfig.ts`. If you host the site elsewhere, use your own image-hosting URL or your deployment’s public image path. Do not place large photos inside the project source folders.

## Recommended photo sizes

| Image type | Recommended crop | Minimum size | Notes |
|---|---:|---:|---|
| Logo | Square or transparent mark | 600 × 600 px | PNG works best; transparent background preferred. |
| Home-page hero | Landscape | 1800 × 1300 px | Keep the key food/people subject toward the right half. |
| Supporting feature images | Portrait or landscape | 1200 × 900 px | Use warm, well-lit preparation or setup photographs. |
| Menu cards | Landscape 4:3 | 1000 × 750 px | One dish per photograph; avoid text overlays. |
| Gallery images | Landscape or portrait | 1400 px on longest side | Use real events, table setups, food service, and close food details. |

## Before publishing

Check that the images load on mobile and desktop, that food is not cropped awkwardly, and that you have permission to use every photograph. Keep filenames and image URLs descriptive so future edits remain easy.
