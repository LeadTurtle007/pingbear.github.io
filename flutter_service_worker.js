'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9ff27bafb910474cf287264d318b3fb5",
"version.json": "3f0320199b70edba658158e9a2f39783",
"index.html": "4c09fca2ddf2d29cd423e5ad9c5036f5",
"/": "4c09fca2ddf2d29cd423e5ad9c5036f5",
"main.dart.js": "8499a2f6d87fbc89984e7122ec0e27ca",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1e3ff7fe33d37db2153bf2a9ef122d52",
"assets/AssetManifest.json": "a62cac0bcff56790509cda53e189fda5",
"assets/NOTICES": "93f2ba1f0a517001e073f3193ab02dc2",
"assets/FontManifest.json": "15206daa4ee8209a202eae63994825ec",
"assets/AssetManifest.bin.json": "f05f65c7b53d040fe4aa8599a83513c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_cashfree_pg_sdk/assets/discover.png": "8fb5c3dd58ffb198644a9aac0d0a5da2",
"assets/packages/flutter_cashfree_pg_sdk/assets/rupay.png": "b6c88a3273204df54bc46e374b633570",
"assets/packages/flutter_cashfree_pg_sdk/assets/diners.png": "6bc0a26fbe98312d2cde3ca06a9b9518",
"assets/packages/flutter_cashfree_pg_sdk/assets/maestro.png": "49f3167896883d38eb9770f6527fa961",
"assets/packages/flutter_cashfree_pg_sdk/assets/visa.png": "3442819455f79b208c50094bae6843e8",
"assets/packages/flutter_cashfree_pg_sdk/assets/credit-card-default.png": "e987949373676bb7b9a6bb85c19dba1b",
"assets/packages/flutter_cashfree_pg_sdk/assets/jcb.png": "903e2793c61fc15e48fed184d6eadbe7",
"assets/packages/flutter_cashfree_pg_sdk/assets/amex.png": "99f1d408e289af3e6359feffc5abc003",
"assets/packages/flutter_cashfree_pg_sdk/assets/mastercard.png": "64dd58b0f24ee7bf272d964f508660bb",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "46ede63c445d92a73ecd8d00899cc757",
"assets/fonts/Autobus.ttf": "66c56bb07435a51903de24dc0bda0b37",
"assets/fonts/LCD_Solid.ttf": "1cb7c6ea746ff369304a02b0538ce0f1",
"assets/fonts/MaterialIcons-Regular.otf": "6435ab3405fd817d24dd92f5cf5fcaf3",
"assets/assets/white_logo.png": "02d5b47f6b098e9730ff046422fd6637",
"assets/assets/sounds/oh_boy_499.mp3": "3bb47f51848297447e0e52fc820ef85f",
"assets/assets/sounds/fingerlicking_message_tone.mp3": "2e802508a197d36422050a3e1e2712f3",
"assets/assets/sounds/so_proud_notification.mp3": "e11b3b491b8a6e7ecb34e31ff6c3ad9f",
"assets/assets/sounds/hangover_sound.mp3": "89a8dfbe7339794b8cf6d43c21c4c263",
"assets/assets/sounds/oringz_w442_357.mp3": "ffaad06e6929193a5c1806e430d5a91d",
"assets/assets/sounds/upset_sound_tone.mp3": "d8f75dd088d7a10c09bf274a4b40ab3e",
"assets/assets/sounds/alarming_304.mp3": "7bebbf7805fb98f85663b0b1d4c0d57c",
"assets/assets/sounds/anxious_586.mp3": "d91899a7e609ee2edee8c90b5449e88a",
"assets/assets/sounds/system_189.mp3": "cb3d533a59bfcecdbd768a3053448308",
"assets/assets/sounds/emergence_ringtone.mp3": "2814fb0ccf9369ebb5c18e9496a2f4b9",
"assets/assets/sounds/tone_message_deep_voice.mp3": "df5561b954c63a5d0b8590c5f01e4eb0",
"assets/assets/sounds/alarma_142.mp3": "a6f097cb1eee8fdfbcb753fd6a2efbec",
"assets/assets/sounds/strong_minded_ringtone.mp3": "9da012bc425628657e3d5272756fd4f0",
"assets/assets/sounds/light_hearted_message_tone.mp3": "01f1623b70f663784e8d146c861a9dfe",
"assets/assets/sounds/ringtone_its_for_you_man.mp3": "3073f1bc3bcdf57172ba480730ffc1ba",
"assets/assets/sounds/relax_message_tone.mp3": "6d3a035961da6e7e4b2432a3469ea45c",
"assets/assets/sounds/message_ringtone_magic.mp3": "1a3c0b859331796900833fec85fb186c",
"assets/assets/sounds/oringz_w429_349.mp3": "a288255ff001752d6f2ddcd91e913000",
"assets/assets/sounds/not_kiddin_243.mp3": "77a5fcbe356d7850744e9778d69a160d",
"assets/assets/sounds/annoy_me_124.mp3": "a09324dd305a4389cb2dd790d7863ab4",
"assets/assets/sounds/deduction_588.mp3": "9b72a8756c11cc66c46ab5a90eaa2038",
"assets/assets/sounds/smile_ringtone.mp3": "740f413e7054184b93f06133ac1b0414",
"assets/assets/sounds/message_girl_voice_tone.mp3": "43bcea51d3cca8852ccfcdb2ea3a99d0",
"assets/assets/sounds/got_it_done_613.mp3": "a0d0720bca1c0c160af821c7fbc8e380",
"assets/assets/sounds/ringtone_you_would_be_glad_to_know.mp3": "921894b0dd98d84a842fc498eb50c542",
"assets/assets/sounds/inquisitiveness_481.mp3": "366e5ddcf3a2d6a779ceca826309f28e",
"assets/assets/sounds/attention_required_127.mp3": "78a6da208bb5d362922ac94193663cb8",
"assets/assets/sounds/slow_spring_board_longer_tail_571.mp3": "cf06d70c9b43fbe47d0106b122eb57b1",
"assets/assets/sounds/dtmf_dialing_sound_love.mp3": "2be32c613dd45dc8f555f8eebcfe892d",
"assets/assets/black_logo.png": "a6992730ca406d298cdf6c51b40d8d4d",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
