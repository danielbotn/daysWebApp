import{S as e,i as t,s as n,e as a,t as c,c as s,a as i,b as o,d as l,f as r,g as d,h as f,j as u,k as m,l as h,m as _,n as p,o as g,p as $,q as v,M as I,r as y,w as b,x as N,F as w,R as x,A as E,a2 as S,a3 as j,a4 as C,a5 as P,a6 as O,C as k,K as D,T,U as A}from"./client.ee82ed19.js";import{F as M,I as R,r as J}from"./randomColor.3014df81.js";function K(e){let t,n;return{c(){t=a("h1"),n=c(e[0]),this.h()},l(a){t=s(a,"H1",{class:!0});var c=i(t);n=o(c,e[0]),c.forEach(l),this.h()},h(){r(t,"class","font-semibold tracking-wide uppercase text-4xl text-center")},m(e,a){d(e,t,a),f(t,n)},p(e,t){1&t&&u(n,e[0])},d(e){e&&l(t)}}}function F(e){let t,n;return t=new R({props:{infoModalObject:e[2]}}),t.$on("closeModal",e[4]),{c(){m(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){_(t,e,a),n=!0},p(e,n){const a={};4&n&&(a.infoModalObject=e[2]),t.$set(a)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function L(e){let t,n,c,o,u,w,x=e[0]&&K(e);c=new M({props:{options:e[3]}});let E=e[1]&&F(e);return{c(){t=a("div"),x&&x.c(),n=v(),m(c.$$.fragment),o=v(),E&&E.c(),u=I(),this.h()},l(e){t=s(e,"DIV",{class:!0});var a=i(t);x&&x.l(a),n=y(a),h(c.$$.fragment,a),a.forEach(l),o=y(e),E&&E.l(e),u=I(),this.h()},h(){r(t,"class","justify-self-center")},m(e,a){d(e,t,a),x&&x.m(t,null),f(t,n),_(c,t,null),d(e,o,a),E&&E.m(e,a),d(e,u,a),w=!0},p(e,[a]){e[0]?x?x.p(e,a):(x=K(e),x.c(),x.m(t,n)):x&&(x.d(1),x=null);const s={};8&a&&(s.options=e[3]),c.$set(s),e[1]?E?(E.p(e,a),2&a&&p(E,1)):(E=F(e),E.c(),p(E,1),E.m(u.parentNode,u)):E&&(b(),g(E,1,1,(()=>{E=null})),N())},i(e){w||(p(c.$$.fragment,e),p(E),w=!0)},o(e){g(c.$$.fragment,e),g(E),w=!1},d(e){e&&l(t),x&&x.d(),$(c),e&&l(o),E&&E.d(e),e&&l(u)}}}function W(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(c,s){function i(e){try{l(a.next(e))}catch(e){s(e)}}function o(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}l((a=a.apply(e,t||[])).next())}))};let c,{uId:s}=t,{listId:i}=t,{boardName:o}=t,{language:l}=t,r=!1,d=null,f=[];const u=e=>a(void 0,void 0,void 0,(function*(){const t=S(new Date),n=yield j(s),a=yield C(s),o=(e=>{let t;for(let n=0;n<c.length;n++)if(e===c[n].Day){t=c[n];break}return t})(e);void 0===o?P(s,i,e,n,a.Email,t):O(s,i,o.KeyId)})),m=()=>{const e=[];return c&&c.forEach((t=>{e.push({title:"✔️",date:t.Day,id:t.KeyId,firstName:t.FirstNameWhoChecked,lastName:t.LastNameWhoChecked,time:t.Time,listId:t.ListId,email:t.EmailWhoChecked,color:J(),day:t.Day})})),e},h=e=>{let t="";return t="Íslenska"===e?"is":"English"===e?"en":"sv",t};let _={initialView:"dayGridMonth",plugins:[],height:"500px",contentHeight:100,events:m(),dateClick:e=>u(e.dateStr),weekends:!0,eventClick:e=>(e=>{n(1,r=!0),n(2,d=e.extendedProps)})(e.event._def),locale:"en",locales:f};return w((()=>a(void 0,void 0,void 0,(function*(){f.push((yield Promise.all([import("./sv.bdc15c92.js"),__inject_styles(["client-0153459a.css"])]).then((function(e){return e[0]})).then((function(e){return e.s}))).default),f.push((yield Promise.all([import("./is.a5601467.js"),__inject_styles(["client-0153459a.css"])]).then((function(e){return e[0]})).then((function(e){return e.i}))).default),n(3,_=Object.assign(Object.assign({},_),{plugins:[(yield Promise.all([import("./main.137e3519.js"),__inject_styles(["client-0153459a.css","randomColor-ee571a9e.css","main-a1515909.css"])]).then((function(e){return e[0]}))).default,(yield Promise.all([import("./main.3b5b15c8.js"),__inject_styles(["client-0153459a.css","randomColor-ee571a9e.css"])]).then((function(e){return e[0]}))).default],locales:f,locale:h(l)}))})))),x((()=>{if(s&&i){E.database().ref(`/boardsData/${s}/${i}`).on("value",(e=>{const t=e.val(),a=Object.values(t),s=Object.keys(t);a.forEach(((e,t)=>{e.KeyId=s[t]})),a&&(c=a,n(3,_.events=m(),_),n(3,_.locale=h(l),_),n(3,_=Object.assign({},_)))}))}})),e.$$set=e=>{"uId"in e&&n(5,s=e.uId),"listId"in e&&n(6,i=e.listId),"boardName"in e&&n(0,o=e.boardName),"language"in e&&n(7,l=e.language)},[o,r,d,_,()=>{n(1,r=!r)},s,i,l]}class q extends e{constructor(e){super(),t(this,e,W,L,n,{uId:5,listId:6,boardName:0,language:7})}}function H(e){let t,n;return t=new q({props:{uId:e[1],listId:e[0],boardName:e[2],language:e[3]}}),{c(){m(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,a){_(t,e,a),n=!0},p(e,n){const a={};2&n&&(a.uId=e[1]),1&n&&(a.listId=e[0]),4&n&&(a.boardName=e[2]),8&n&&(a.language=e[3]),t.$set(a)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function V(e){let t,n,a,c;document.title=t=e[2]?e[2]:"Single list";let s=e[1]&&e[0]&&e[2]&&H(e);return{c(){n=v(),s&&s.c(),a=I()},l(e){k('[data-svelte="svelte-xgsxay"]',document.head).forEach(l),n=y(e),s&&s.l(e),a=I()},m(e,t){d(e,n,t),s&&s.m(e,t),d(e,a,t),c=!0},p(e,[n]){(!c||4&n)&&t!==(t=e[2]?e[2]:"Single list")&&(document.title=t),e[1]&&e[0]&&e[2]?s?(s.p(e,n),7&n&&p(s,1)):(s=H(e),s.c(),p(s,1),s.m(a.parentNode,a)):s&&(b(),g(s,1,1,(()=>{s=null})),N())},i(e){c||(p(s),c=!0)},o(e){g(s),c=!1},d(e){e&&l(n),s&&s.d(e),e&&l(a)}}}async function G(e){const{id:t}=e.query;return{id:t}}function U(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(c,s){function i(e){try{l(a.next(e))}catch(e){s(e)}}function o(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}l((a=a.apply(e,t||[])).next())}))};let{id:c}=t,s="",i=null,o="";return D.subscribe((e=>{null!==e&&(n(1,s=e),a(void 0,void 0,void 0,(function*(){if(!i){const e=yield T(s,c);n(2,i=e.NameOfList)}})))})),A.subscribe((e=>{null!==e&&n(3,o=e)})),e.$$set=e=>{"id"in e&&n(0,c=e.id)},[c,s,i,o]}export default class extends e{constructor(e){super(),t(this,e,U,V,n,{id:0})}}export{G as preload};

import __inject_styles from './inject_styles.5607aec6.js';