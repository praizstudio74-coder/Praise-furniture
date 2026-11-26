/**
 * PRAISE FURNITURE - PWA SERVICE WORKER
 * Caches core app assets for instant luxury loading & offline performance.
 */

const CACHE_NAME = 'praise-furniture-v2';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './about.html',
  './services.html',
  './contact.html',
  './css/style.css',
  './js/slider.js',
  './js/store.js',
  './js/main.js',
  './manifest.json',
  './assets/images/inspiration-flyer.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('Pre-cache partial error:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        // Fetch in background to revalidate cache
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          }
        }).catch(() => {});
        return cached;
      }
      return fetch(event.request);
    }).catch(() => caches.match('./index.html'))
  );
});
