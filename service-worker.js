const CACHE_NAME = 'boletim-cache';
const urlsToCache = [
    '/',
    '/css/bootstrap.min.css',
    '/js/bootstrap.bundle.min.js',
    '/main-pwa.js'
]

self.addEventListener('install', function(event){
    event.waitUntil(
        cahces.open('v1')
        .then(function(cahce){
            console.log('Opened cache');
            return caches.addAll(urlsToCache)
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', event =>{
    event.responWith(caches.match(event.request).then( response => {
        return response || fetch(event.request)
    }))
})