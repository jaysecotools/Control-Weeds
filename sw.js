// sw.js - Complete offline-first service worker for AHCPMG301 Weed Training
const CACHE_NAME = 'weed-control-v' + Date.now();
const OFFLINE_URL = 'offline.html';

// ALL critical assets to pre-cache
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './offline.html',
    // Font Awesome CDN (cache it)
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-solid-900.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-regular-400.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-brands-400.woff2'
];

// Add weed photos if they exist (optional, will fallback gracefully)
// The service worker will dynamically cache them on first view

// INSTALL: Pre-cache critical assets
self.addEventListener('install', event => {
    console.log('[SW] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('[SW] Caching critical assets');
            return cache.addAll(urlsToCache);
        }).catch(err => {
            console.log('[SW] Cache addAll failed:', err);
        })
    );
    self.skipWaiting();
});

// ACTIVATE: Clean up old caches and take control
self.addEventListener('activate', event => {
    console.log('[SW] Activating...');
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => {
                        console.log('[SW] Deleting old cache:', key);
                        return caches.delete(key);
                    })
            );
        }).then(() => {
            console.log('[SW] Now controlling clients');
            return self.clients.claim();
        })
    );
});

// FETCH: Runtime caching with network-first for critical resources
self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') {
        event.respondWith(fetch(request));
        return;
    }
    
    // Special handling for weed images (optional - cache them)
    if (url.pathname.startsWith('/weeds/') && url.pathname.endsWith('.jpg')) {
        event.respondWith(
            caches.match(request).then(response => {
                return response || fetch(request).then(networkResponse => {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            }).catch(() => {
                // Return placeholder if image fails
                return fetch('https://placehold.co/400x300/e9ecef/495057?text=Image+offline');
            })
        );
        return;
    }
    
    // For HTML pages: Network-first, fallback to cache, then offline page
    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request).catch(() => {
                return caches.match(request).then(cachedResponse => {
                    if (cachedResponse) return cachedResponse;
                    return caches.match(OFFLINE_URL);
                });
            })
        );
        return;
    }
    
    // For all other assets: Cache-first (fastest offline)
    event.respondWith(
        caches.match(request).then(response => {
            if (response) {
                return response;
            }
            return fetch(request).then(networkResponse => {
                // Only cache successful responses that aren't from CDN with strict CORS
                if (networkResponse && networkResponse.status === 200) {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, networkResponse.clone());
                        return networkResponse;
                    });
                }
                return networkResponse;
            }).catch(() => {
                // Fallback for images that fail completely
                if (request.destination === 'image') {
                    return fetch('https://placehold.co/400x300/e9ecef/495057?text=Image+unavailable');
                }
                return new Response('Network error occurred', {
                    status: 408,
                    headers: { 'Content-Type': 'text/plain' }
                });
            });
        })
    );
});
