/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/style.css",
    "revision": "90b60288ca4468c9ef286a82419cd60b"
  },
  {
    "url": "index.html",
    "revision": "5c3c36d172f38e49f4e1e8e69b61e88e"
  },
  {
    "url": "js/lazyload.js",
    "revision": "00eda4785f52b1556047992effdfab24"
  },
  {
    "url": "js/main.js",
    "revision": "41b11f693b2cf575c1b7351649165efa"
  },
  {
    "url": "js/presentation.js",
    "revision": "d1005edebea088a149bd59f6dc54cb83"
  },
  {
    "url": "js/prism-javascript.js",
    "revision": "8dd9f0d5cf1b7665ebcff3ba856c5cdc"
  },
  {
    "url": "js/prismjs.js",
    "revision": "169fc94fe53eb8841ccc0fc211afa43b"
  },
  {
    "url": "js/upgrade.js",
    "revision": "0376eb6f7a501fbd7102da3763bad5f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.(?:js|css|html)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/.(?:png|webp|jpg|mp4)$/, workbox.strategies.cacheFirst({ "cacheName":"media", plugins: [new workbox.expiration.Plugin({"maxEntries":60,"maxAgeSeconds":2592000,"purgeOnQuotaError":false})] }), 'GET');
