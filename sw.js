const CACHE_NAME = 'wuda-bebe-1v1';
const BACKGROUND_CHECK_VERSION_TAG = 'background-check-version'

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll([
//            '/',
            '/converter.js',
            '/converter.css'
        ]);
    })());
});

self.addEventListener('fetch', event => {
    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);

        // Get the resource from the cache.
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
            return cachedResponse;
        } else {
            try {
                // If the resource was not in the cache, try the network.
                const fetchResponse = await fetch(event.request);

                // Save the resource in the cache and return it.
                cache.put(event.request, fetchResponse.clone());
                return fetchResponse;
            } catch (e) {
                // The network failed.
            }
        }
    })());
});

async function requestBackgroundSync() {
    if (!self.registration.sync) {
        return;
    }

    // We're offline. register a Background Sync to do the query again later when online.
    await self.registration.sync.register(BACKGROUND_CHECK_VERSION_TAG);

    // Remember the search query so we can do it later.
    localforage.setItem(BACKGROUND_CHECK_VERSION_TAG, query);
}

// Network is back up, we're being awaken, let's do the requests we were trying to do before if any.
self.addEventListener('sync', event => {
    // Check if we had a tag of version check
    if (event.tag === BACKGROUND_CHECK_VERSION_TAG) {
        event.waitUntil((async () => { 

        })());
    }

    // Check if we ...
});
