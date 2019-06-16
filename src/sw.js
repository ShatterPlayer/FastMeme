workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets'
  })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);
