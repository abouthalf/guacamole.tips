"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","0e278824a9b79d69b141e7464622bb7b"],["/static/css/main.f8da2daa.css","9e7334274d3d50496c6063ef81a28e60"],["/static/js/main.04b98bee.js","385dbd6478f958b4cd4799efea3613ed"],["/static/media/Cut.f6f02e1d.png","f6f02e1d82d2532b31a682d48dcc8285"],["/static/media/Day.3ba2b583.jpg","3ba2b58394b2f3dee769ed76181965a2"],["/static/media/Four-Limes.9115a8fa.png","9115a8faf8fe99bb5c06e3c44afe0f3c"],["/static/media/Garlic.964e1159.png","964e1159e4f1a9bf969da036aeebf20f"],["/static/media/Good.df906cff.png","df906cffe1221774f1a9cc0ea8dade7e"],["/static/media/Green-avocados.d7225392.png","d72253923386dceb54c8fc97b56016dd"],["/static/media/Half-limes.9a48ec39.png","9a48ec3941e9687a7e97242420024a09"],["/static/media/Lights.a097bbba.png","a097bbbab44d1cbc1cce8c1e105052a0"],["/static/media/Lime-wedge.80d895f1.png","80d895f153858e7236dbbcbb86a3abbb"],["/static/media/Microwave.2bc8bc1b.png","2bc8bc1bd506d5d5e08c24c2c0130859"],["/static/media/Night.0841805a.jpg","0841805a18c246cd3538aa6ae4f212f8"],["/static/media/Onion.1cf08eb1.png","1cf08eb1919734e59942a632e13ccfd0"],["/static/media/Pitted-avocados.80fa094c.png","80fa094c99b406d7ee270f81ecc403bf"],["/static/media/Tomato.5080e991.png","5080e991772d76e2a9e8fa90df54ad91"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});