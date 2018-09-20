module.exports = {
  globDirectory: '.www',
  swDest: '.www/sw.js',
  maximumFileSizeToCacheInBytes: 4.5 * 1024 * 1024,
  runtimeCaching: [
    // HTML, CSS and JS
    {
      urlPattern: new RegExp('.(?:js|css|html)$'),
      handler: 'staleWhileRevalidate',
    },
    // Multimedia
    {
      urlPattern: new RegExp('.(?:png|webp|jpg|mp4)$'),
      handler: 'cacheFirst',
      options: {
        cacheName: 'media',
        expiration: {
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }
      }
    }
  ]
};
