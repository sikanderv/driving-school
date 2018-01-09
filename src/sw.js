importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "my-app.html",
    "revision": "ea12583ba0dd8b518369faf138349fb7"
  },
  {
    "url": "my-icons.html",
    "revision": "d22053a9e7225f216c370948a7ca76ad"
  },
  {
    "url": "my-view1.html",
    "revision": "e1ecbc74b8bd1eb90b5d187cf9c32db7"
  },
  {
    "url": "my-view2.html",
    "revision": "583fde71c401bd006090720aa64bee3f"
  },
  {
    "url": "my-view3.html",
    "revision": "5deff4970ad9dd3dbfa57564b79fe898"
  },
  {
    "url": "my-view404.html",
    "revision": "36dd264fa8b533dbfe63291d80cff752"
  },
  {
    "url": "shared-styles.html",
    "revision": "931e0fed6e69de1026233d233e0ade6a"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
