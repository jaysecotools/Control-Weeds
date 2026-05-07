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
4. Install on device via "Add to Home Screen"

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

```

This is your complete README with:
- ✅ Fixed markdown formatting
- ✅ Version update instructions
- ✅ File structure
- ✅ Deployment guide
- ✅ Troubleshooting section
- ✅ All your original content
