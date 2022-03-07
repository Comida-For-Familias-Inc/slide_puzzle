'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "edac6610d63f93aebfb1c09a76230248",
"index.html": "78b8686d73838ae11043177fac1dc427",
"/": "78b8686d73838ae11043177fac1dc427",
"main.dart.js": "53879100d348573c078cfc87b4e76d14",
"favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/Icon-192.png": "12d05db1c0b26d429b54e3f8c946a496",
"icons/favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"icons/Icon-512.png": "aabba36693aba0ec8d954adf297d3125",
"manifest.json": "f932c1a9542ccae23459127aecb755b7",
"assets/AssetManifest.json": "04dd1341d2b5b552a65775a85b55712d",
"assets/NOTICES": "eaa1153c633fb6aa029336a0ddde55af",
"assets/FontManifest.json": "a6a35a39ab693849dcde3aba2d4304a7",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/simple_dash_large.png": "6d7a1d5d67e29366ac0754db5ad988b2",
"assets/assets/images/audio_control/simple_on.png": "63e24186aec21d19e6f82f88d656a951",
"assets/assets/images/audio_control/dashatar_on.png": "927040d878eeeb9c0700d50fac87674f",
"assets/assets/images/audio_control/yellow_dashatar_off.png": "f1606e5fb255a5a48dbadc722a983060",
"assets/assets/images/audio_control/green_dashatar_off.png": "8aae7e7135d47a7536b2cca91d877c2a",
"assets/assets/images/audio_control/blue_dashatar_off.png": "fb9cf31f68997341215e5484252350fe",
"assets/assets/images/audio_control/simple_off.png": "ecac9ec0e8dc5d526e204651b5e62dcc",
"assets/assets/images/logo_flutter_color.png": "496548be6768a0945cafe0cf7c12b389",
"assets/assets/images/simple_dash_small.png": "9d9474673ddb5090e5c8ccccfe110155",
"assets/assets/images/shuffle_icon.png": "32ebb4a7c6f9b07157a57f537f254619",
"assets/assets/images/timer_icon.png": "284049eb59c25888ebe6ecf864728727",
"assets/assets/images/logo_flutter_white.png": "fe99d806f7819c9ef2d2c9a1dc350693",
"assets/assets/images/dashatar/tree/4.gif": "668cfa8c3d3a284d8573ca8103888f5b",
"assets/assets/images/dashatar/tree/5.gif": "ba0c3db71e26b57b3d435e4e79ae3838",
"assets/assets/images/dashatar/tree/7.gif": "1592962cfda0f1525cf53ee5f9bc4880",
"assets/assets/images/dashatar/tree/6.gif": "6e099ca1b3cc4b48f1c830962e01103c",
"assets/assets/images/dashatar/tree/2.gif": "03ebab93d3b0248bde6e8a4c0e0e1039",
"assets/assets/images/dashatar/tree/3.gif": "3d8d54546d66be26bd35bcdff07a577e",
"assets/assets/images/dashatar/tree/1.gif": "0f72570eb65422cdead1ae2fa5f31fe8",
"assets/assets/images/dashatar/tree/8.gif": "1d96f9895fda4e5ab480bf9c08238619",
"assets/assets/images/dashatar/tree/9.gif": "f4309b71553cdd462327fd0d591ff168",
"assets/assets/images/dashatar/tree/14.gif": "ef7c98b63fa4805e24c21b03e910beef",
"assets/assets/images/dashatar/tree/15.gif": "ac3d7efd49c564c8d35a48e5c2f4f4a2",
"assets/assets/images/dashatar/tree/16.gif": "7ad96c56c10ddd52e701d6e505e4c64e",
"assets/assets/images/dashatar/tree/12.gif": "a02370b4fa3a08e98e3324c210a1f458",
"assets/assets/images/dashatar/tree/13.gif": "8ae5027a829e348e74cc3aaacbf38d31",
"assets/assets/images/dashatar/tree/11.gif": "d5489364643242def9797bd9b898c1ea",
"assets/assets/images/dashatar/tree/10.gif": "57c41d4c59550e383f0ffb13de4b528b",
"assets/assets/images/dashatar/city/4.gif": "e5d46fa1f82fb8f19490781804a0a979",
"assets/assets/images/dashatar/city/5.gif": "0ca7134e881e7fed1a6066e6c198bb5c",
"assets/assets/images/dashatar/city/7.gif": "7cb68d9a9320ff126b8537e0b3a052d7",
"assets/assets/images/dashatar/city/6.gif": "1c766dc46ed8b15fde1b76dc8ac78ff9",
"assets/assets/images/dashatar/city/2.gif": "8af66448d074748196089825a795eea0",
"assets/assets/images/dashatar/city/3.gif": "99d6c4bcfc30f2a207187e90e2975454",
"assets/assets/images/dashatar/city/1.gif": "022e397f4b1dd2b6594831b4b8281623",
"assets/assets/images/dashatar/city/8.gif": "88644f317c0829eec158aefd1e7679bd",
"assets/assets/images/dashatar/city/9.gif": "9fb692b2202ba1a760b714691f81e09a",
"assets/assets/images/dashatar/city/14.gif": "0064aeb270d45d88f3e316e09e0dcf10",
"assets/assets/images/dashatar/city/15.gif": "5a9669d79ee8792ce24dfde39d1a8263",
"assets/assets/images/dashatar/city/16.gif": "a96bafc35b8e4283f769f1d1c7f18f6c",
"assets/assets/images/dashatar/city/12.gif": "914e4c4260b5db4bfaa9fe78d44bd5f5",
"assets/assets/images/dashatar/city/13.gif": "e32ff9c80d3cdd563891bb51e23bfd86",
"assets/assets/images/dashatar/city/11.gif": "0c0f74b5a085050134ac8e8f84e66054",
"assets/assets/images/dashatar/city/10.gif": "97edf0d4954e6b02450d2d9df21ece28",
"assets/assets/images/dashatar/success/tree.gif": "1f2973a320241e969edd0354017deb5d",
"assets/assets/images/dashatar/success/racecar.gif": "bb6c83d773abc78e2100e5ecd06e1d73",
"assets/assets/images/dashatar/success/yellow.png": "463f9b0eddcae6089e8fd33f3ded3164",
"assets/assets/images/dashatar/success/blue.png": "993266c9723f234300d052cd4fda43d1",
"assets/assets/images/dashatar/success/green.png": "7c284d7b36bb5388c4d87b1dd5cf3f88",
"assets/assets/images/dashatar/success/city.gif": "a41f71718c2691b69a5c3bf0a151a600",
"assets/assets/images/dashatar/racecar/4.gif": "b34281fcb47385e91c172219000f639d",
"assets/assets/images/dashatar/racecar/5.gif": "5a4745c6104045851c14796fbe157d82",
"assets/assets/images/dashatar/racecar/7.gif": "3930aefd5cd4aee2ac97989c36cdf64b",
"assets/assets/images/dashatar/racecar/6.gif": "b9b6bda52ccb9ac65406c70c696e6f72",
"assets/assets/images/dashatar/racecar/2.gif": "077486c2ebaad8da2f070eb5f0e9c818",
"assets/assets/images/dashatar/racecar/3.gif": "b1cdb7dd7f5b6704f3e2803f98af844e",
"assets/assets/images/dashatar/racecar/1.gif": "48198eb89b54f022fba6216b69addab3",
"assets/assets/images/dashatar/racecar/8.gif": "ec5bcd2a864bd48b12636b69f9e69b14",
"assets/assets/images/dashatar/racecar/9.gif": "0d5f4d921586430e3630db8ddcaf143e",
"assets/assets/images/dashatar/racecar/14.gif": "4729bee86cc53be80fad1ae7f6768639",
"assets/assets/images/dashatar/racecar/15.gif": "6a8e92d64996ca1b7a1261f27461c5d9",
"assets/assets/images/dashatar/racecar/16.gif": "f36d67c82025c737dd49826d3d01e373",
"assets/assets/images/dashatar/racecar/12.gif": "938800090b1e129f0dd27b7975efe6e3",
"assets/assets/images/dashatar/racecar/13.gif": "6403131e55a33e816f1bc05147b045fc",
"assets/assets/images/dashatar/racecar/11.gif": "be9bf9f6cf1f94db00cc7a02cdc577be",
"assets/assets/images/dashatar/racecar/10.gif": "dd0785afa8f5eae7f174c3cd1c6f7a8b",
"assets/assets/images/dashatar/gallery/tree.gif": "1f2973a320241e969edd0354017deb5d",
"assets/assets/images/dashatar/gallery/racecar.gif": "bb6c83d773abc78e2100e5ecd06e1d73",
"assets/assets/images/dashatar/gallery/yellow.png": "8529c74259d6963491ceda3a82a8df30",
"assets/assets/images/dashatar/gallery/blue.png": "0d11f20efc6570a048f7fdaaaf91fb01",
"assets/assets/images/dashatar/gallery/green.png": "56aabe4c6f02f0000fb00cf8d7a93544",
"assets/assets/images/dashatar/gallery/city.gif": "a41f71718c2691b69a5c3bf0a151a600",
"assets/assets/images/dashatar/logo/8.png": "0d668ce623311ab7ccad973ea7a3fa44",
"assets/assets/images/dashatar/logo/9.png": "f2171155f586f50f6024e878bf0f8049",
"assets/assets/images/dashatar/logo/14.png": "f112542ecc761dc88295cafb178444b5",
"assets/assets/images/dashatar/logo/15.png": "07c25a277bc3bfa98d7c7ceba708249a",
"assets/assets/images/dashatar/logo/16.png": "d643d358cda9dac1aa06198b1e035230",
"assets/assets/images/dashatar/logo/12.png": "66e32f30614d9559c36ebdb133e87f98",
"assets/assets/images/dashatar/logo/13.png": "7d0f364561da3b800961e65024d4fcde",
"assets/assets/images/dashatar/logo/11.png": "98ec946e983f8ca278fa698f98b73b9b",
"assets/assets/images/dashatar/logo/10.png": "1aa5dfe610c01352fe5f38d36f960783",
"assets/assets/images/dashatar/logo/4.png": "9731b3890f2aa30c66e5a7d9f0b7d2ec",
"assets/assets/images/dashatar/logo/5.png": "e70958ca4710b73084a8406d4f6c8bdf",
"assets/assets/images/dashatar/logo/7.png": "0f0bb4e9618d7b01bb5283c3211c406a",
"assets/assets/images/dashatar/logo/6.png": "61e0a5df30f29018efb30157d09d8ea0",
"assets/assets/images/dashatar/logo/2.png": "dff59a7c2dbc5902192a9204d4a43d27",
"assets/assets/images/dashatar/logo/3.png": "341c7107e462be9e9f36ca026a8ab8a7",
"assets/assets/images/dashatar/logo/1.png": "a9290ec85e40c605b3936056e0d4f89a",
"assets/assets/images/facebook_icon.png": "284d2a1d2782e5e24b1f9bce25f3ea9a",
"assets/assets/images/simple_dash_medium.png": "dd8ac5722ee464b65126c77f2f3638e8",
"assets/assets/images/twitter_icon.png": "f9a8b83fc280f6a6363783cdbdd81573",
"assets/assets/audio/sandwich.mp3": "5a3cf659842b0db22ab9495ea2cdc80a",
"assets/assets/audio/skateboard.mp3": "13e460479dc92b0ff1574d35a5204392",
"assets/assets/audio/tile_move.mp3": "f4056eec1581ee5264ab8f481a59d5d3",
"assets/assets/audio/shuffle.mp3": "0ac82d67f08b71d43046256dbc2db12d",
"assets/assets/audio/click.mp3": "7b257864b73a219a79572b785910e685",
"assets/assets/audio/success.mp3": "746679b7331cf687df94188b40ff6f67",
"assets/assets/audio/dumbbell.mp3": "aa341eb857b4fd972767430aa5babb30",
"assets/assets/fonts/GoogleSans-Italic.ttf": "b08c7421b2d5350ea3003c8f38932601",
"assets/assets/fonts/GoogleSans-Bold.ttf": "c0370e8a74992bab73461f8348e3b369",
"assets/assets/fonts/GoogleSans-BoldItalic.ttf": "aebc8fe5e393970fa3d468524e64b670",
"assets/assets/fonts/GoogleSans-Regular.ttf": "51134713ade7b1f137e06ce395d39d40",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
