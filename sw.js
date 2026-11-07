const CACHE='unhinged-v37';
const CACHE_PREFIX='unhinged-';
const FILES=['./','./index.html','./manifest.json','./logo.svg','./favicon.svg'];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(cache=>cache.addAll(FILES))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(
        keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE)
          .map(key=>caches.delete(key))
      ))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;

  if(request.mode==='navigate'){
    event.respondWith((async()=>{
      const indexUrl=new URL('index.html',self.registration.scope).href;
      try{
        const response=await fetch(request);
        if(response.ok){
          const cache=await caches.open(CACHE);
          await cache.put(request,response.clone());
          await cache.put(indexUrl,response.clone());
        }
        return response;
      }catch(error){
        return await caches.match(request)
          ||await caches.match(indexUrl)
          ||new Response('You are offline and this page is not cached.',{status:503,statusText:'Offline'});
      }
    })());
    return;
  }

  event.respondWith((async()=>{
    const cached=await caches.match(request);
    if(cached)return cached;
    try{
      const response=await fetch(request);
      if(response.ok){
        const cache=await caches.open(CACHE);
        await cache.put(request,response.clone()).catch(()=>{});
      }
      return response;
    }catch(error){
      return new Response('',{status:503,statusText:'Offline'});
    }
  })());
});
