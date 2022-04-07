'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "01bfb6d9068a29a075c1c6e33529fc41",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/lib/resimler/3lu-set_20.10.2021_05_29_57.jpg": "3a895ce67af5131be74c6dd2f75e49b0",
"assets/lib/resimler/az-citir-uclu_21.05.2021_04_54_33.jpg": "2a902f13e44eeea638f3280bc89cce32",
"assets/lib/resimler/et-doner_21.05.2021_12_03_47.jpg": "e0b7b218d4be1328970ca0a2f874031b",
"assets/lib/resimler/icli-kofte_01.06.2021_11_49_23.jpg": "26ee0f90a8b0cfa6232039c140f5bbf6",
"assets/lib/resimler/ikili-yarim-ekmek-menu_27.01.2022_08_07_51.jpg": "8689756de108d389470ceff6cedea2e9",
"assets/lib/resimler/kedimamasi/acana.jpg": "8bc1b7e0749df8ac29443f02af862605",
"assets/lib/resimler/kedimamasi/acanaBountifulSomonveRingaBalikli.jpg": "2e3ed2ba476ce405e7da7f9faf6bb37c",
"assets/lib/resimler/kedimamasi/acanaFirstFeastKittenYavruKediMamasi.jpg": "a25e1fa55be64140104c517171efc7b1",
"assets/lib/resimler/kedimamasi/acanaPacifica.jpg": "67a2a01944f79238e21b9c99c32a7254",
"assets/lib/resimler/kedimamasi/acanaWildPrairie.jpg": "ee423d7875a7521b61161641f7ca8d69",
"assets/lib/resimler/kedimamasi/nd.jpg": "a20b446793a518b3d381a4aaca6fcdef",
"assets/lib/resimler/kedimamasi/nddusuktahillitavukvenarli.jpg": "a13af07e323afce88b1493e71b35cc8e",
"assets/lib/resimler/kedimamasi/nddusuktahillivesomonlukisirlastirilmiskedimamasi.jpg": "ecb7e021eabfcc1791c2625116d4b043",
"assets/lib/resimler/kedimamasi/ndkuzuetliveyabanmersinli.jpg": "177ebf00453f1556c17cf2d8c7445ea6",
"assets/lib/resimler/kedimamasi/ndportakallivemorinabalikli.jpg": "1129fed8532f66226853c04d65550f10",
"assets/lib/resimler/kedimamasi/ndtavukluvenarli.jpg": "e0aac3ca282ad6e1ae26b29c70769c13",
"assets/lib/resimler/kedimamasi/proplan.jpg": "54d1cd8a3e74975051112f53ba76454f",
"assets/lib/resimler/kedimamasi/proplanjuniortavuklu.jpg": "051be0c5d490b842928925a55c5035ab",
"assets/lib/resimler/kedimamasi/proplansomonlu.jpg": "a999a59d8929dc2473204f74aaf56057",
"assets/lib/resimler/kedimamasi/proplantavuklu.jpg": "79b0eaf41641628bf633c138f2f0eeb2",
"assets/lib/resimler/kedimamasi/royalcanin.jpg": "1edc14ab21ffbeb53691be324cf1bb06",
"assets/lib/resimler/kedimamasi/royalcaninbalikli.jpg": "cddc56718ddf87a8cac54382acecada0",
"assets/lib/resimler/kedimamasi/royalcaninkittenyavrukedi.jpg": "e9c26c890751d17c76c16a1113026a21",
"assets/lib/resimler/kedimamasi/royalcanintavuklu.jpg": "79e3fca6e98f3696d3738bcb70442b1c",
"assets/lib/resimler/piyaz_07.10.2021_01_21_24.jpg": "244d5f24d5b0cd2a2a9675f51c7e71e1",
"assets/lib/resimler/porsiyon-patates_01.12.2021_02_30_51.jpg": "d9c2c077a66cf720d3641af8763a97b7",
"assets/lib/resimler/tam-kofte_24.08.2021_12_07_24.jpg": "bf1bc62c67348615bc6149effc942b85",
"assets/NOTICES": "515ea1c285127fd9adccb30350c13739",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "acf93b435b856235bfa2c05ef7fdd86a",
"/": "acf93b435b856235bfa2c05ef7fdd86a",
"main.dart.js": "a2490eab94d295b74a9a6bc7d2fbc20c",
"manifest.json": "cf430a65ea2a9a76289139cc8bf628b2",
"version.json": "e2dd5fe28a309367a1a2d0d78487cdf0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
