// service-worker.js
self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('your-cache-name').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/static/js/main.js',
          '/static/css/main.css',
          // Add other assets to cache
        ]);
      })
    );
  });
  