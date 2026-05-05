self.addEventListener('install', event => {
  event.waitUntil(caches.open('pdx-simple-v1.2.2').then(cache => cache.addAll(['./index.html','./manifest.json'])));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
