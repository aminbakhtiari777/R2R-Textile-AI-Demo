/* R2R service worker: precache everything for full offline use */
const CACHE = "r2r-v6";
const ASSETS = [
 "./",
 "index.html",
 "fonts.css",
 "css/styles.css",
 "js/data.js",
 "js/data-more.js",
 "js/data-mill.js",
 "js/data-chain.js",
 "assets/img/c1_p1.jpg",
 "assets/img/c1_p2.jpg",
 "assets/img/c1_p3.jpg",
 "assets/img/c1_render.jpg",
 "assets/img/c1_repeat.jpg",
 "assets/img/c2_p1.jpg",
 "assets/img/c2_p2.jpg",
 "assets/img/c2_p3.jpg",
 "assets/img/c2_render.jpg",
 "assets/img/c2_repeat.jpg",
 "assets/img/f1_p1.jpg",
 "assets/img/f1_p2.jpg",
 "assets/img/f1_p3.jpg",
 "assets/img/f1_render.jpg",
 "assets/img/f1_repeat.jpg",
 "assets/img/f1_swatch.jpg",
 "assets/img/f2_p1.jpg",
 "assets/img/f2_p2.jpg",
 "assets/img/f2_p3.jpg",
 "assets/img/f2_render.jpg",
 "assets/img/f2_swatch.jpg",
 "assets/img/f3_p1.jpg",
 "assets/img/f3_p2.jpg",
 "assets/img/f3_p3.jpg",
 "assets/img/f3_render.jpg",
 "assets/img/f3_swatch.jpg",
 "assets/img/f4_p1.jpg",
 "assets/img/f4_p2.jpg",
 "assets/img/f4_p3.jpg",
 "assets/img/f4_render.jpg",
 "assets/img/f4_swatch.jpg",
 "assets/img/f5_p1.jpg",
 "assets/img/f5_p2.jpg",
 "assets/img/f5_p3.jpg",
 "assets/img/f5_render.jpg",
 "assets/img/f5_swatch.jpg",
 "assets/img/f6_p1.jpg",
 "assets/img/f6_p2.jpg",
 "assets/img/f6_p3.jpg",
 "assets/img/f6_render.jpg",
 "assets/img/f6_swatch.jpg",
 "assets/img/f7_p1.jpg",
 "assets/img/f7_p2.jpg",
 "assets/img/f7_p3.jpg",
 "assets/img/f7_render.jpg",
 "assets/img/f7_swatch.jpg",
 "assets/img/f8_p1.jpg",
 "assets/img/f8_p2.jpg",
 "assets/img/f8_p3.jpg",
 "assets/img/f8_render.jpg",
 "assets/img/f8_swatch.jpg",
 "assets/img/f9_p1.jpg",
 "assets/img/f9_p2.jpg",
 "assets/img/f9_p3.jpg",
 "assets/img/f9_render.jpg",
 "assets/img/f9_repeat.jpg",
 "assets/img/f9_swatch.jpg",
 "assets/img/m1_cover.jpg",
 "assets/img/m1_cw1.jpg",
 "assets/img/m1_cw2.jpg",
 "assets/img/m1_cw3.jpg",
 "assets/img/m1_defect.jpg",
 "assets/img/m1_defect_boxed.jpg",
 "assets/img/m2_cover.jpg",
 "assets/img/m2_cw1.jpg",
 "assets/img/m2_cw2.jpg",
 "assets/img/m2_cw3.jpg",
 "assets/img/m2_defect.jpg",
 "assets/img/m2_defect_boxed.jpg",
 "assets/img/m3_cover.jpg",
 "assets/img/m3_cw1.jpg",
 "assets/img/m3_cw2.jpg",
 "assets/img/m3_cw3.jpg",
 "assets/img/m3_defect.jpg",
 "assets/img/m3_defect_boxed.jpg",
 "js/app.js",
 "manifest.json",
 "assets/icons/apple-touch-icon.png",
 "assets/icons/icon-192.png",
 "assets/icons/icon-512.png",
 "assets/icons/icon-maskable-512.png"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(u => new Request(u, {cache: "reload"})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("r2r-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(req, {ignoreSearch: true}).then(hit => hit || fetch(req).then(res => {
      if (res && res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
      return res;
    }).catch(() => req.mode === "navigate" ? caches.match("index.html") : Response.error()))
  );
});
