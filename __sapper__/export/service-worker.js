!function(){"use strict";const e=1613127601410,n=`cache${e}`,t=["/client/client.8a2b73f9.js","/client/inject_styles.5607aec6.js","/client/index.a6b26db5.js","/client/Spinner.9a3d7319.js","/client/index.7cb1cdea.js","/client/index.7909c4a6.js","/client/index.6eb78bf9.js","/client/randomColor.209594a2.js","/client/index.1b6a27ee.js","/client/index.6ff4c8f3.js","/client/index.aa8e2182.js","/client/about.0bf9f9db.js","/client/index.24c0cc05.js","/client/[slug].7807a0cf.js","/client/sv.049e2686.js","/client/is.739ecaec.js","/client/main.d4746673.js","/client/main.1c74981a.js"].concat(["/service-worker-index.html","/daysLogoMini.png","/england.png","/favicon.png","/global.css","/iceland.png","/logo-192.png","/logo-512.png","/manifest.json","/sweden.png"]),c=new Set(t);self.addEventListener("install",(e=>{e.waitUntil(caches.open(n).then((e=>e.addAll(t))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const t of e)t!==n&&await caches.delete(t);self.clients.claim()})))})),self.addEventListener("fetch",(n=>{if("GET"!==n.request.method||n.request.headers.has("range"))return;const t=new URL(n.request.url),s=t.protocol.startsWith("http"),a=t.hostname===self.location.hostname&&t.port!==self.location.port,i=t.host===self.location.host&&c.has(t.pathname),l="only-if-cached"===n.request.cache&&!i;!s||a||l||n.respondWith((async()=>i&&await caches.match(n.request)||async function(n){const t=await caches.open(`offline${e}`);try{const e=await fetch(n);return t.put(n,e.clone()),e}catch(e){const c=await t.match(n);if(c)return c;throw e}}(n.request))())}))}();
