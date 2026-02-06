'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5e0c11dcb2284e0c7072ba45a27114d0",
"assets/AssetManifest.bin.json": "2c305209db9b6f6c347873b26167ec0a",
"assets/AssetManifest.json": "ab5f4cee3c3638249325b8551b1911e2",
"assets/assets/fonts/Inter_24pt-Black.ttf": "2392341284c30f5fffb9fe0ab0cd983e",
"assets/assets/fonts/Inter_24pt-Bold.ttf": "8b04b3bd9435341377d7f4b4d68b6ecc",
"assets/assets/fonts/Inter_24pt-ExtraBold.ttf": "995fb5ac38b90303c0cc1a0b21e2c9fe",
"assets/assets/fonts/Inter_24pt-Light.ttf": "65ec965bd90e1a297cdb3be407420abc",
"assets/assets/fonts/Inter_24pt-Medium.ttf": "4591e900425d177e6ba268d165bf12e8",
"assets/assets/fonts/Inter_24pt-Regular.ttf": "e48c1217adab2a0e44f8df400d33c325",
"assets/assets/fonts/Inter_24pt-SemiBold.ttf": "c77560a8441d664af3e65dd57026dff9",
"assets/assets/fonts/Inter_24pt-Thin.ttf": "1e9e30c74648950a240427636b6c1992",
"assets/assets/icons/ic_education.png": "d591ca4f62fe8c5faec2d101399eb04b",
"assets/assets/icons/ic_email.png": "42ff6b90e1cbb369a6593bbe75d1202f",
"assets/assets/icons/ic_email.svg": "bfee3227b0ff198f035068863296f748",
"assets/assets/icons/ic_experience.png": "787791f6c704d658657840d368ff8ee2",
"assets/assets/icons/ic_github.png": "bb26e7bcfb1fa416ac26c1e03ed77272",
"assets/assets/icons/ic_linkedin.png": "2a004ce93c854dc6c0e40c4069f82362",
"assets/assets/icons/ic_overview.png": "edc40b9df82ab40bd133cb3c5088df18",
"assets/assets/icons/ic_phone.png": "16a7aa5c9daed426cf8a0ebc1eec307c",
"assets/assets/icons/ic_projects.png": "01b7bf12998758d6a0827f7d715075ae",
"assets/assets/images/background_1.jpg": "01d931191ed8e8736e2984dce9111336",
"assets/assets/images/background_5.png": "aafab1ea60bbad160fec8492b7b85f91",
"assets/assets/images/gog_thumb.png": "783f24b9d199895ab2c8962d5f41490c",
"assets/assets/images/img_profile.jpeg": "1263b26fc9d930e281976b3662e6802a",
"assets/assets/images/manipal_doctors_thumb.png": "e669d065b744ffe1a8e84443fe1fba02",
"assets/assets/images/plantonic_thumb_re.png": "887ea7e532685afa054098267f20b471",
"assets/assets/images/sbig_thumb_1.png": "7e4b78b19accbb4324a6e7be26e184ff",
"assets/assets/images/tekx_thumb.png": "1cae262b13b8be7cbc4841b68846b004",
"assets/assets/pdf/Santanu_Mukherjee_Resume.pdf": "a8a95385230d6a62e6f62219b6a1a1fc",
"assets/assets/pdf/Santanu_s_Resume.pdf": "8b4959acbf4b5d56509046a847051280",
"assets/FontManifest.json": "0d9e83eb186a2d03f19fee31ee0529b6",
"assets/fonts/MaterialIcons-Regular.otf": "a4434195d548256e82bed44e5dad5069",
"assets/NOTICES": "5ceb800229c6d42813c5f0d67bb32edf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"dummy_support.js": "18535543ba037ad890e633d2c1a45b87",
"favicon.png": "e6fc3cd4601d2fa3f2b164bdb0096c18",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "6b060d7d599e24128289037d8a8d5e70",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "428c874219c6cf5175fc2fa9f751f9ce",
"/": "428c874219c6cf5175fc2fa9f751f9ce",
"main.dart.js": "8a344abdb1827c176ecf2dbed3f25325",
"manifest.json": "e82ec7360719fe72bdc3c23132a009d8",
"preview.png": "38a65a516e778dd7590c3cca1bc872b2",
"robots.txt": "20b7b2fe10b644b220d8e848bcf474b0",
"sitemap.xml": "2fb4fcaf546bac932d8f676aac884b27",
"version.json": "74f80ac8e98b6ba209e4eb96eb7f918f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
