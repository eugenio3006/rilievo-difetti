const CACHE = "rilievo-v1";
const FILES = ["/rilievo-difetti/", "/rilievo-difetti/index.html", "/rilievo-difetti/manifest.json"];
 
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});
 
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match("/index.html")))
  );
});
