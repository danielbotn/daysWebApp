import{S as t,i as s,s as e,q as n,e as a,t as o,B as i,d as r,r as c,c as u,a as l,b as h,f,g as d,h as p,j as m,C as v}from"./client.3d13778d.js";function y(t){let s,e,y,j,x,g,w=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){e=n(),y=a("h1"),j=o(w),x=n(),g=a("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),e=c(t),y=u(t,"H1",{});var s=l(y);j=h(s,w),s.forEach(r),x=c(t),g=u(t,"DIV",{class:!0}),l(g).forEach(r),this.h()},h(){f(g,"class","content svelte-utjyme")},m(t,s){d(t,e,s),d(t,y,s),p(y,j),d(t,x,s),d(t,g,s),g.innerHTML=E},p(t,[e]){1&e&&s!==(s=t[0].title)&&(document.title=s),1&e&&w!==(w=t[0].title+"")&&m(j,w),1&e&&E!==(E=t[0].html+"")&&(g.innerHTML=E)},i:v,o:v,d(t){t&&r(e),t&&r(y),t&&r(x),t&&r(g)}}}var j=function(t,s,e,n){return new(e||(e=Promise))((function(a,o){function i(t){try{c(n.next(t))}catch(t){o(t)}}function r(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var s;t.done?a(t.value):(s=t.value,s instanceof e?s:new e((function(t){t(s)}))).then(i,r)}c((n=n.apply(t,s||[])).next())}))};function x({params:t}){return j(this,void 0,void 0,(function*(){const s=yield this.fetch(`blog/${t.slug}.json`),e=yield s.json();if(200===s.status)return{post:e};this.error(s.status,e.message)}))}function g(t,s,e){let{post:n}=s;return t.$$set=t=>{"post"in t&&e(0,n=t.post)},[n]}export default class extends t{constructor(t){super(),s(this,t,g,y,e,{post:0})}}export{x as preload};
