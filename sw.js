self.addEventListener('install', (e) => {
  console.log('[Service Worker] Terpasang');
});

self.addEventListener('fetch', (e) => {
  // Tetap ambil data secara online agar sinkron dengan Google Sheets
  e.respondWith(fetch(e.request));
});
