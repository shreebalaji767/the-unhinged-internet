const CACHE='unhinged-v13';
const FILES=['./','./index.html','./manifest.json','./logo.svg'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(
    keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))
  )));
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;
  event.respondWith(caches.match(request).then(cached=>{
    if(cached)return cached;
    return fetch(request).then(response=>{
      if(response.ok){
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put(request,copy)).catch(()=>{});
      }
      return response;
    }).catch(()=>{
      if(request.mode==='navigate')return caches.match('./index.html');
      return new Response('',{status:503,statusText:'Offline'});
    });
  }));
});
