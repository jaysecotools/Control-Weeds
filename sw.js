// sw.js - Production-ready offline-first service worker for AHCPMG301 Weed Training

// ⚡ UPDATE THIS ONE NUMBER WHEN YOU MAKE CHANGES ⚡
const APP_VERSION = '4.1.2';
// ================================================

const CACHE_NAME = `weed-control-v${APP_VERSION.replace(/\./g, '-')}`;
const OFFLINE_URL = '/offline.html';

// Critical assets to pre-cache
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/offline.html',

    // Font Awesome CDN (optional, cached safely)
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-solid-900.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-regular-400.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-brands-400.woff2'
];

// INSTALL: Pre-cache critical assets safely
self.addEventListener('install', event => {
    console.log('[SW] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('[SW] Caching critical assets');
            return Promise.all(
                urlsToCache.map(url =>
                    cache.add(url).catch(err => {
                        console.warn('[SW] Failed to cache:', url);
                    })
                )
            );
        })
    );
    self.skipWaiting();
});

// ACTIVATE: Clean up old caches
self.addEventListener('activate', event => {
    console.log('[SW] Activating...');
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => {
                        console.log('[SW] Deleting old cache:', key);
                        return caches.delete(key);
                    })
            );
        }).then(() => self.clients.claim())
    );
});

// FETCH: Runtime caching strategies
self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // 🌿 Weed images: cache on first load (cache-first after)
    if (url.pathname.startsWith('/weeds/') && request.destination === 'image') {
        event.respondWith(
            caches.match(request).then(cached => {
                if (cached) return cached;

                return fetch(request)
                    .then(response => {
                        if (!response || response.status !== 200) {
                            return response;
                        }

                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(request, clone);
                        });

                        return response;
                    })
                    .catch(() => {
                        return fetch('https://placehold.co/400x300/e9ecef/495057?text=Image+offline');
                    });
            })
        );
        return;
    }

    // 📄 HTML navigation: network-first, fallback to cache, then offline page
    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then(response => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, clone);
                    });
                    return response;
                })
                .catch(() => {
                    return caches.match(request).then(res => res || caches.match(OFFLINE_URL));
                })
        );
        return;
    }

    // ⚡ All other assets: cache-first, then network
    event.respondWith(
        caches.match(request).then(cached => {
            if (cached) return cached;

            return fetch(request)
                .then(response => {
                    if (
                        response &&
                        response.status === 200 &&
                        response.type === 'basic'
                    ) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(request, clone);
                        });
                    }
                    return response;
                })
                .catch(() => {
                    if (request.destination === 'image') {
                        return fetch('https://placehold.co/400x300/e9ecef/495057?text=Image+unavailable');
                    }

                    return new Response('Offline', {
                        status: 503,
                        headers: { 'Content-Type': 'text/plain' }
                    });
                });
        })
    );
});
