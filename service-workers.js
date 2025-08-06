const cacheName = 'tarimonoel-cache-v1';
const filesToCache = ['/', '/index.html', '/style.css', 'manifest.json'];
self.addeventListener('install', (event) => {
    event.waitUntill(
        caches.open(cacheName.then(
            (cache) =>
                cache.addAll(falesToCache))
        );
});
self.addEventListener('activate', (event) => {
    event.waitUntill(
        caches.keys().then((keyList)
            =>
            Promise.all(keyList.map((key) => {
                if (key !== cacheName) {
                    return
                    caches.delete(key);
                }
            }))
        )
    );
});
self.addEventListener('fetch', (event) => {
    event.respondwidth(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});
