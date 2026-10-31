# Little Print landing page and support

Static responsive landing page, full app privacy notice, and support instructions for the 1.1 iPhone app and Photos extension. No analytics, externally hosted fonts, backend, enrollment, or personal contact information. Public reports use the existing GitHub issue forms; their public nature is explained before users submit.

## Local preview

From the parent workspace run `python3 -m http.server 8765 --directory SupportSite`, then open `http://localhost:8765`. All CSS, JavaScript, images, and the icon are local. No build or dependency installation is required. Do not push/publish until the release owner has reviewed the page.

## Release status

The app is currently Waiting for Review. `release.js` deliberately sets `isReleased: false`; the primary call to action is a disabled Coming to the App Store button. Change this only after confirming the public listing is live. When releasing, also update the description/Open Graph metadata in index.html to remove Coming to the App Store. No TestFlight installation link is advertised because its current public availability is not established.

## Assets

- `icon-monochrome.png`: existing app-owned icon.
- `assets/editor.png`, `share.png`, `collage.png`, `collection.png`: actual native view renders from the current store screenshot set under `build/marketing-lifestyle-shots/1290x2796/` in the parent workspace. Example images are demonstration content, not a user's print history. The page labels these as interface previews.
- `assets/social-card.png`: 1200×630 social card from `build/marketing-v4/social-og-1200x630.png` in the parent workspace, using the app-owned icon and actual editor render.

The original privacy and support sections are retained, including local processing, Bluetooth, same-phone App Group sharing, waiting tray limits, explicit printing, exports, deletion limits, public issue handling, and voluntary TestFlight feedback. This site does not advertise shared albums, simultaneous printer connections, removed creative-camera features, or compatibility with all printers.

Production URL: https://printharsh.github.io/little-print-support/

The staged v3 visual system uses locally hosted Manrope (weight 650 headlines, 500 body/captions), with its SIL Open Font License in `assets/fonts/Manrope-OFL.txt`. System sans-serif fallbacks remain available. Lifestyle example images are rendered within the actual native app UI. The Photos-share section describes the real extension flow, not a background or automatic printing service.
