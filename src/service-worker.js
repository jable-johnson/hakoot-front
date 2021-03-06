import { precacheAndRoute } from 'workbox-precaching';
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

workbox.core.setCacheNameDetails({ prefix: 'hakoot-play' });

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
/**
 * Messaging worker
 */
const icon = '/img/icons/favicon-32x32.png';
const showDelay = 500;

const showNotification = (title, options) =>
  new Promise((resolve) => {
    setTimeout(() => {
      self.registration.showNotification(title, options).then(() => resolve());
    }, showDelay);
  });

self.addEventListener('push', function (event) {
  const res = JSON.parse(event.data.text());
  console.log('Received a push message', res);

  const { title, body, url } = res.payload;
  const options = {
    body,
    icon,
    vibrate: [100],
    data: { url },
  };

  event.waitUntil(showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const { url } = event.notification.data;
  if (url) {
    event.waitUntil(clients.openWindow(url));
  }
});

self.addEventListener('install', () => {
  self.skipWaiting();
});