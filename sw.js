 
const cacheVersion = 2;

const activeCaches = {
  static: `static-v${cacheVersion}`,
  dynamic: `dynamic-v${cacheVersion}`,
};

self.addEventListener("install", (event) => { 
  event.waitUntil(
    caches.open(activeCaches["static"]).then((cache) => {
      cache.addAll([
        "/",
        "/fallback.html", 
        "js/index.js", 
        "styles/style.css",
        "assets/images"
      ]);
    })
  );
});

self.addEventListener("activate", (event) => { 
  const activeCacheNames = Object.values(activeCaches);

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.forEach((cacheName) => {
          if (!activeCacheNames.includes(cacheName)) {
            return caches.delete(cacheName); // :))
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => { 
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
          .then((serverResponse) => {
            return caches.open([activeCaches["dynamic"]]).then((cache) => {
              cache.put(event.request, serverResponse.clone());
              return serverResponse;
            });
          })
          .catch((err) => {
            return caches.match("/fallback.html");
          });
      }
    })
  );

  
});
