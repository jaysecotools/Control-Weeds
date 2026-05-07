# Control Weeds · Tasmanian Learning Resource

**A field judgement training tool for Certificate III in Conservation and Ecosystem Management students.**

---

## 🔄 How to Update This App (1-Step Process)

### To publish a new version:

**1. Edit `sw.js` - change line 4:**

```javascript
const APP_VERSION = '2.0.0';  // ← CHANGE THIS NUMBER ONLY
```

Examples:

· 2.0.0 → 2.0.1 (small fixes)
· 2.0.0 → 2.1.0 (new features)
· 2.0.0 → 3.0.0 (major changes)

2. Save and upload to your server

That's it! The footer will auto-update, and users will get the new version.

Note: Users may need to hard refresh (Ctrl+Shift+R) or reinstall the app to see changes immediately.

---

📱 How to Install on Devices

iPhone / iPad (Safari)

1. Open Safari and go to your app URL
2. Tap the Share button (square with arrow up) at the bottom
3. Scroll down and tap "Add to Home Screen"
4. Edit the name if desired, then tap "Add" in top-right
5. The app icon will appear on your home screen

⚠️ Note: iOS requires Safari - Chrome and other browsers won't show the Add to Home Screen option.

Android (Chrome)

1. Open Chrome and go to your app URL
2. Tap the three dots menu (⋮) in top-right corner
3. Tap "Install app" or "Add to Home Screen"
4. Confirm by tapping "Install"
5. The app will open in standalone mode with your icon

💡 Alternative: A banner may appear at the bottom of the screen asking to install - tap "Install"

Android (Samsung Internet)

1. Open Samsung Internet and go to your app URL
2. Tap the three lines menu (☰) at the bottom
3. Tap "Add page to" → "Home screen"
4. Confirm by tapping "Add"
5. The app will install with your custom icon

Windows / Mac Desktop (Chrome, Edge, Brave)

1. Open Chrome/Edge and go to your app URL
2. Look for the install icon (⊕) in the address bar (right side)
3. Click the icon and select "Install"
4. The app will open in its own window with your icon

💡 Alternative: Click the three dots menu → "Install [App Name]" → "Install"

After Installation

· The app opens in standalone mode (no browser address bar)
· Works offline after first visit to each section
· Updates automatically when you change the version number
· Access from your device's home screen like any other app

To Uninstall

Device Method
iPhone/iPad Touch and hold app icon → "Remove App" → "Delete App"
Android Touch and hold app icon → "Uninstall" or drag to "Remove"
Desktop Right-click app icon in start menu → "Uninstall"

---

📋 Overview

This is not a reference guide — it's judgement training. Students predict outcomes before revealing answers, building field-ready decision-making skills.

Key Features

Feature Description
16 learning tabs Ecology, failures, seedbank, field signals, methods, weed library, calendar, safety, quiz, references, resistance, what NOT to do, confidence traps, indigenous, micro-scenarios, media
Prediction-first learning Each concept has a "predict before revealing" pattern
Confidence tracking Rate your certainty and receive feedback
PWA enabled Works offline, installable on mobile devices
18 Tasmanian weeds Library includes declared and environmental weeds
Seasonal calendar Tasmanian-specific treatment timing

---

📁 File Structure

```
root/
├── index.html          # Main application
├── manifest.json       # PWA configuration
├── sw.js              # Service worker (update version here)
├── offline.html       # Offline fallback page
├── icons/             # PWA icons (all sizes)
│   ├── icon-96x96.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   ├── icon-512x512.png
│   ├── icon-192x192-maskable.png
│   └── icon-512x512-maskable.png
├── screenshots/       # App store screenshots
│   ├── desktop.png
│   └── mobile.png
└── weeds/             # Weed identification images
    ├── gorse.jpg
    ├── montpelier-broom.jpg
    └── ... (12+ images)
```

---

🚀 Deployment

1. Upload all files to your web server
2. Ensure HTTPS is enabled (required for PWA)
3. Test with Chrome DevTools → Application tab
4. Install on device via "Add to Home Screen" (see instructions above)

---

📱 PWA Features

· ✅ Installable on iOS/Android/Desktop
· ✅ Offline capable
· ✅ Custom home screen icon
· ✅ Standalone app mode
· ✅ Shortcuts to key pages
· ✅ Automatic updates (when version changes)

---

⚠️ Dependencies

· Font Awesome 6.0.0 (CDN - requires internet for first load)
· YouTube embeds (require internet)
· External NRE Tas links (require internet)

All core functionality works offline after first visit.

---

📝 License

Educational use only. For AHCPMG301 training purposes.

---

🙏 Acknowledgements

· NRE Tas for weed control guidelines
· Biosecurity Act 2019 (Tasmania)
· Weeds Australia for species profiles
· Tasmanian Aboriginal traditional land management practices

---

🔧 Troubleshooting

Icons not appearing?

· Check /icons/ folder has all PNG files
· Verify filenames match manifest.json exactly
· Clear browser cache and reinstall

App not updating?

· Increment APP_VERSION in sw.js
· Hard refresh (Ctrl+Shift+R)
· Uninstall and reinstall from home screen

Offline not working?

· Visit all tabs once while online
· Check service worker is activated (DevTools → Application)

Can't install on iPhone?

· Must use Safari browser (not Chrome, Firefox, or Edge)
· Ensure private browsing is turned off
· Check "Block Pop-ups" is disabled

Install button missing on Android?

· Update Chrome to latest version
· Clear Chrome cache and try again
· Some custom Android skins may hide the option - use Samsung Internet instead

```

This now includes:
- 📱 Step-by-step installation for iPhone, Android (Chrome & Samsung), and Desktop
- ⚠️ Platform-specific notes (Safari required for iOS, etc.)
- 🗑️ Uninstall instructions for each device
- 🔧 Additional troubleshooting for installation issues
