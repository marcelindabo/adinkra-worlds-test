const CACHE='adinkra-worlds-v1-test';
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(['/','/index.html','/manifest.webmanifest','/src/main.jsx','/src/styles.css','/icons/icon-192.svg','/icons/icon-512.svg'])))});
self.addEventListener('fetch',event=>{event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)))});
