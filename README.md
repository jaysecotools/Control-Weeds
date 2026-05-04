Here's a comprehensive README.md for your project. Save this as README.md in the same folder as your index.html.

---

```markdown
# AHCPMG301 · Weed Control · Prediction-First Learning

**A field judgement training tool for Certificate III in Conservation and Ecosystem Management students.**

---

## 📋 Overview

This is not a reference guide — it's **judgement training**. Students predict outcomes before revealing answers, building field-ready decision-making skills.

### Key Features

| Feature | Description |
|---------|-------------|
| **16 learning tabs** | Ecology, failures, seedbank, field signals, methods, weed library, calendar, safety, quiz, references, resistance, what NOT to do, confidence traps, indigenous, micro-scenarios, media |
| **Prediction-first learning** | Each concept requires a prediction before revealing the answer |
| **Confidence tracking** | Students rate their confidence on each prediction |
| **Pattern recognition pauses** | Built-in reflection points to develop metacognition |
| **18 weeds covered** | 6 declared weeds + 6 environmental weeds (expandable) |
| **Self-check quiz** | 10 questions with automatic scoring and persistence |
| **Offline-first PWA** | Works in the field without internet (after first load) |
| **Accessibility ready** | ARIA labels, keyboard navigation, screen reader support |

---

## 🚀 Quick Start

### 1. File Structure

```

your-project-folder/
├── index.html          (main application - REQUIRED)
├── sw.js               (service worker for offline - REQUIRED)
├── manifest.json       (PWA manifest - REQUIRED)
├── offline.html        (offline fallback page - REQUIRED)
├── README.md           (this file)
├── weeds/              (folder for weed photos - REQUIRED)
│   ├── gorse.jpg
│   ├── montpelier-broom.jpg
│   ├── ragwort.jpg
│   ├── pampas-grass.jpg
│   ├── boneseed.jpg
│   ├── blackberry.jpg
│   ├── capeweed.jpg
│   ├── banana-passionfruit.jpg
│   ├── spear-thistle.jpg
│   ├── cotoneaster.jpg
│   ├── mirror-bush.jpg
│   └── sweet-pittosporum.jpg
└── icons/              (optional - PWA home screen icons)
├── icon-72.png
├── icon-96.png
├── icon-128.png
├── icon-144.png
├── icon-152.png
├── icon-192.png
├── icon-384.png
└── icon-512.png

```

### 2. Deploy to Web Server

Upload all files to any web server (Netlify, GitHub Pages, etc.) OR run locally with:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using PHP
php -S localhost:8000
```

Then open http://localhost:8000 in your browser.

3. Install as PWA (Optional but Recommended)

1. Open the app in Chrome/Edge on desktop or mobile
2. Look for the install icon (⊕ or "Install app") in the address bar
3. Click to install to your device's home screen
4. The app will work offline after installation

---

📸 Adding Your Weed Photos

Photo Requirements

Specification Value
Format JPG or PNG
Recommended size 400x300 pixels (will crop to fit)
Orientation Landscape preferred
File naming exactly as below (case-sensitive)

Required Filenames

Place all photos in the weeds/ folder:

Declared Weeds (6)

```
weeds/gorse.jpg
weeds/montpelier-broom.jpg
weeds/ragwort.jpg
weeds/pampas-grass.jpg
weeds/boneseed.jpg
weeds/blackberry.jpg
```

Environmental Weeds (6)

```
weeds/capeweed.jpg
weeds/banana-passionfruit.jpg
weeds/spear-thistle.jpg
weeds/cotoneaster.jpg
weeds/mirror-bush.jpg
weeds/sweet-pittosporum.jpg
```

Adding More Weeds

To add additional weeds to the library:

1. Add the photo to the weeds/ folder
2. Open index.html and find the Weed Library section
3. Copy an existing .weed-card block and modify:
   · Image source
   · Weed name
   · Key ID features
   · Habitat
   · NRE Tas or Weeds Australia link

---

🔧 PWA Files

sw.js - Service Worker

Creates offline capability. Caches:

· Main HTML page
· CSS (inline)
· Weed images (on first view)
· Font Awesome (external CDN - cached)

Important: After updating index.html, increment the CACHE_NAME version number (e.g., 'weed-control-v4') to force students' browsers to get the latest version.

manifest.json - PWA Manifest

Controls how the app appears when installed to home screen. Includes:

· App name and description
· Theme colours
· Shortcuts to key tabs (Weed Library, Micro-scenarios, Quiz)
· Icons (if added to icons/ folder)

offline.html - Offline Fallback

Shown when the user tries to access a page that hasn't been cached yet while offline.

---

🧪 Testing Checklist

Before Student Trial

· All 18 weed photos added to weeds/ folder
· sw.js and manifest.json in same folder as index.html
· App loads without errors in Chrome
· Test offline: DevTools → Network → Offline → Refresh
· Test install to home screen (Chrome → ⋮ → Install app)
· Test all tabs work
· Test prediction reveal buttons
· Test quiz saves answers after refresh
· Test confidence rating saves to localStorage

Browser Compatibility

Browser Online Offline Install PWA
Chrome (desktop) ✅ ✅ ✅
Chrome (Android) ✅ ✅ ✅
Safari (iOS) ✅ ✅* ✅ (Add to Home Screen)
Firefox ✅ ✅ ⚠️ (limited PWA support)
Edge ✅ ✅ ✅

\* Safari requires the app to be added to Home Screen before offline works reliably.

---

📚 Student Feedback Questions

Ask students these questions after using the app (not "Did you like it?"):

Decision Friction

"Where did you feel unsure what to do?"
"Which questions made you stop and think?"

False Confidence

"Which ones did you feel confident about but got wrong?"

Real-world Transfer

"Would this help you on-site, or just in class?"

Behaviour

"Did you actually predict before opening answers?" (They'll tell the truth if you frame it right.)

Watch for This Pattern

Students rapidly clicking: question → reveal → next

If this happens, the system becomes content consumption again, not judgement training. If you see it, consider adding friction (required confidence selection, forced delay, or "lock until prediction").

---

📝 Version History

Version Date Changes
v1.0 Initial Original resource with 11 tabs
v2.0  Added prediction-first learning model
v3.0  Added media tab with working videos
v4.0  Added confidence ratings, consequence cards, pattern pauses
v5.0  Added 18 weed library, seasonal calendar, safety & legal tabs
v6.0 Current Added PWA offline support, ARIA accessibility, quiz persistence, deep linking

---

🔗 External Resources Referenced

Resource URL Purpose
NRE Tas Weeds https://nre.tas.gov.au/agriculture/weeds Tasmanian government weed control guidelines
Weeds Australia https://weeds.org.au National weed profiles and ID tools
APVMA https://apvma.gov.au Herbicide permits and registrations
Font Awesome https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css Icons (cached offline)

---

⚠️ Important Notes

1. This is a training tool only — always check product labels and NRE Tas guidelines before field work
2. Videos require internet — YouTube embeds won't work offline. The app shows a clear message when offline
3. First load needs internet — students must open the app once online to cache files for offline use
4. Photo placeholders — If weed photos are missing, placeholders show "Add photo"
5. Browser localStorage — Answers, confidence ratings, and last tab are saved in the browser. Clearing browser data resets progress.

---

🛠️ Troubleshooting

Service Worker not registering

· Check sw.js is in the same folder as index.html
· Open DevTools → Application → Service Workers → Update/Reload
· Clear site data and reload

Images not showing

· Check filenames match exactly (case-sensitive)
· Check images are in weeds/ folder, not Weeds/ or images/
· Check image format is JPG or PNG

Offline not working

· Reload app while online to refresh cache
· Check Console for service worker errors
· Increment CACHE_NAME in sw.js to force update

Quiz answers lost after refresh

· Check browser isn't in Private/Incognito mode
· Check localStorage is enabled (Chrome → Settings → Privacy → Cookies)

---

📧 Support

For issues or feature requests, refer to the original development documentation or contact your training provider.

---

📄 License

This resource is for educational use within registered training organisations delivering AHCPMG301 and AHC31424.

---

Remember: Field judgement > content knowledge.

```

---

This README gives you everything you need to maintain the project, add photos, troubleshoot issues, and collect meaningful student feedback. Save it as `README.md` in your project folder.
