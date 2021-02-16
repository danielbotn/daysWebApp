import{S as e,i as t,s,e as a,t as n,c as r,a as l,b as o,d as c,f as d,g as i,h as u,j as f,D as h,q as m,r as p,v as b,N as $,M as g,F as v,A as I,_ as N,$ as x,a0 as y,k as w,l as k,m as D,n as E,o as j,p as H,w as O,x as S,z as L,a1 as T,C as V,K as _,T as K}from"./client.b0c4ec78.js";function P(e){let t,s;return{c(){t=a("h1"),s=n(e[0]),this.h()},l(a){t=r(a,"H1",{class:!0});var n=l(t);s=o(n,e[0]),n.forEach(c),this.h()},h(){d(t,"class","font-semibold tracking-wide uppercase text-4xl text-center")},m(e,a){i(e,t,a),u(t,s)},p(e,t){1&t&&f(s,e[0])},d(e){e&&c(t)}}}function U(e){let t,s=e[0]&&P(e);return{c(){t=a("div"),s&&s.c(),this.h()},l(e){t=r(e,"DIV",{class:!0});var a=l(t);s&&s.l(a),a.forEach(c),this.h()},h(){d(t,"class","justify-self-center")},m(e,a){i(e,t,a),s&&s.m(t,null)},p(e,[a]){e[0]?s?s.p(e,a):(s=P(e),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},i:h,o:h,d(e){e&&c(t),s&&s.d()}}}function q(e,t,s){let{boardName:a}=t;return e.$$set=e=>{"boardName"in e&&s(0,a=e.boardName)},[a]}class z extends e{constructor(e){super(),t(this,e,q,U,s,{boardName:0})}}function F(e){let t,s,b,$,g,v,I,N,x=e[0].add+"";return{c(){t=a("div"),s=a("div"),b=a("input"),g=m(),v=a("div"),I=a("button"),N=n(x),this.h()},l(e){t=r(e,"DIV",{class:!0});var a=l(t);s=r(a,"DIV",{class:!0});var n=l(s);b=r(n,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),n.forEach(c),g=p(a),v=r(a,"DIV",{});var d=l(v);I=r(d,"BUTTON",{type:!0,class:!0});var i=l(I);N=o(i,x),i.forEach(c),d.forEach(c),a.forEach(c),this.h()},h(){d(b,"type","text"),d(b,"name","create new list"),d(b,"placeholder",$=e[0].addNewItem),d(b,"class","svelte-1suvsex"),d(s,"class","flex-auto"),d(I,"type","button"),d(I,"class","border border-blue-500 bg-blue-500 hover:border-blue-300 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline mb-6"),d(t,"class","flex items-center lg:px-24 px-6")},m(e,a){i(e,t,a),u(t,s),u(s,b),u(t,g),u(t,v),u(v,I),u(I,N)},p(e,[t]){1&t&&$!==($=e[0].addNewItem)&&d(b,"placeholder",$),1&t&&x!==(x=e[0].add+"")&&f(N,x)},i:h,o:h,d(e){e&&c(t)}}}function A(e,t,s){let{datoHardcodedStrings:a}=t;return e.$$set=e=>{"datoHardcodedStrings"in e&&s(0,a=e.datoHardcodedStrings)},[a]}class B extends e{constructor(e){super(),t(this,e,A,F,s,{datoHardcodedStrings:0})}}function C(e,t,s){const a=e.slice();return a[10]=t[s],a}function M(e){let t,s=e[0],n=[];for(let t=0;t<s.length;t+=1)n[t]=G(C(e,s,t));return{c(){t=a("ul");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=r(e,"UL",{class:!0});var s=l(t);for(let e=0;e<n.length;e+=1)n[e].l(s);s.forEach(c),this.h()},h(){d(t,"class","list-reset text-black mb-8 p-8 text-grey-darker rounded shadow-lg")},m(e,s){i(e,t,s);for(let e=0;e<n.length;e+=1)n[e].m(t,null)},p(e,a){if(13&a){let r;for(s=e[0],r=0;r<s.length;r+=1){const l=C(e,s,r);n[r]?n[r].p(l,a):(n[r]=G(l),n[r].c(),n[r].m(t,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=s.length}},d(e){e&&c(t),$(n,e)}}}function G(e){let t,s,h,$,g,v,I,N,x,y=e[10].Name+"";function w(){return e[8](e[10])}return{c(){t=a("li"),s=a("div"),h=a("input"),g=m(),v=n(y),I=m(),this.h()},l(e){t=r(e,"LI",{class:!0});var a=l(t);s=r(a,"DIV",{class:!0});var n=l(s);h=r(n,"INPUT",{type:!0,class:!0,checked:!0}),n.forEach(c),g=p(a),v=o(a,y),I=p(a),a.forEach(c),this.h()},h(){d(h,"type","checkbox"),d(h,"class","form-checkbox h-5 w-5 text-blue-500"),h.checked=$=e[2](e[10]),d(s,"class","pr-5"),d(t,"class","flex items-center mb-3")},m(e,a){i(e,t,a),u(t,s),u(s,h),u(t,g),u(t,v),u(t,I),N||(x=b(h,"click",w),N=!0)},p(t,s){e=t,1&s&&$!==($=e[2](e[10]))&&(h.checked=$),1&s&&y!==(y=e[10].Name+"")&&f(v,y)},d(e){e&&c(t),N=!1,x()}}}function J(e){let t,s=e[0].length>0&&e[1].length>0&&M(e);return{c(){s&&s.c(),t=g()},l(e){s&&s.l(e),t=g()},m(e,a){s&&s.m(e,a),i(e,t,a)},p(e,[a]){e[0].length>0&&e[1].length>0?s?s.p(e,a):(s=M(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},i:h,o:h,d(e){s&&s.d(e),e&&c(t)}}}function Q(e,t,s){var a=this&&this.__awaiter||function(e,t,s,a){return new(s||(s=Promise))((function(n,r){function l(e){try{c(a.next(e))}catch(e){r(e)}}function o(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(l,o)}c((a=a.apply(e,t||[])).next())}))};let{userId:n}=t,{listId:r}=t,{boardName:l}=t,{userDisplayName:o}=t,c=[],d=[];v((()=>a(void 0,void 0,void 0,(function*(){let e=null,t=null,a=[];const l=I.database().ref();e=l.child(`logger/${n}/${r}`),t=l.child(`loggerData/${n}/${r}`),e.on("value",(e=>{const t=e.val(),a=Object.values(t),n=Object.keys(t);a.forEach(((e,t)=>{e.KeyId=n[t]})),s(0,c=a)})),t.on("value",(e=>{const t=e.val(),n=Object.values(t),r=Object.keys(t);n.forEach(((e,t)=>{e.KeyId=r[t],a.push(Object.values(e)[0])})),s(1,d=a)}))}))));const i=e=>a(void 0,void 0,void 0,(function*(){"data is not empty"===(yield N(e,n,r)).status?x(n,r,e):y(n,r,e,o,l)}));return e.$$set=e=>{"userId"in e&&s(4,n=e.userId),"listId"in e&&s(5,r=e.listId),"boardName"in e&&s(6,l=e.boardName),"userDisplayName"in e&&s(7,o=e.userDisplayName)},[c,d,e=>{let t=!1;for(const s of d)if(e.KeyId===s.FieldId){t=!0;break}return t},i,n,r,l,o,e=>i(e)]}class R extends e{constructor(e){super(),t(this,e,Q,J,s,{userId:4,listId:5,boardName:6,userDisplayName:7})}}function W(e){let t,s;return t=new R({props:{userId:e[1],listId:e[2],boardName:e[0],userDisplayName:e[4]}}),{c(){w(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){D(t,e,a),s=!0},p(e,s){const a={};2&s&&(a.userId=e[1]),4&s&&(a.listId=e[2]),1&s&&(a.boardName=e[0]),16&s&&(a.userDisplayName=e[4]),t.$set(a)},i(e){s||(E(t.$$.fragment,e),s=!0)},o(e){j(t.$$.fragment,e),s=!1},d(e){H(t,e)}}}function X(e){let t,s,a,n,r,l;t=new z({props:{boardName:e[0]}}),a=new B({props:{datoHardcodedStrings:e[3]}});let o=e[4]&&e[1]&&e[2]&&e[0]&&W(e);return{c(){w(t.$$.fragment),s=m(),w(a.$$.fragment),n=m(),o&&o.c(),r=g()},l(e){k(t.$$.fragment,e),s=p(e),k(a.$$.fragment,e),n=p(e),o&&o.l(e),r=g()},m(e,c){D(t,e,c),i(e,s,c),D(a,e,c),i(e,n,c),o&&o.m(e,c),i(e,r,c),l=!0},p(e,[s]){const n={};1&s&&(n.boardName=e[0]),t.$set(n);const l={};8&s&&(l.datoHardcodedStrings=e[3]),a.$set(l),e[4]&&e[1]&&e[2]&&e[0]?o?(o.p(e,s),23&s&&E(o,1)):(o=W(e),o.c(),E(o,1),o.m(r.parentNode,r)):o&&(O(),j(o,1,1,(()=>{o=null})),S())},i(e){l||(E(t.$$.fragment,e),E(a.$$.fragment,e),E(o),l=!0)},o(e){j(t.$$.fragment,e),j(a.$$.fragment,e),j(o),l=!1},d(e){H(t,e),e&&c(s),H(a,e),e&&c(n),o&&o.d(e),e&&c(r)}}}function Y(e,t,s){let{boardName:a}=t,{userId:n}=t,{listId:r}=t,l=null,o=null;return L.subscribe((e=>{null!==e&&s(3,l=e)})),T.subscribe((e=>{null!==e&&s(4,o=e)})),e.$$set=e=>{"boardName"in e&&s(0,a=e.boardName),"userId"in e&&s(1,n=e.userId),"listId"in e&&s(2,r=e.listId)},[a,n,r,l,o]}class Z extends e{constructor(e){super(),t(this,e,Y,X,s,{boardName:0,userId:1,listId:2})}}function ee(e){let t,s;return t=new Z({props:{boardName:e[1],userId:e[2],listId:e[0]}}),{c(){w(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,a){D(t,e,a),s=!0},p(e,s){const a={};2&s&&(a.boardName=e[1]),4&s&&(a.userId=e[2]),1&s&&(a.listId=e[0]),t.$set(a)},i(e){s||(E(t.$$.fragment,e),s=!0)},o(e){j(t.$$.fragment,e),s=!1},d(e){H(t,e)}}}function te(e){let t,s,a,n;document.title=t=e[1]?e[1]:"Logger";let r=e[2]&&e[0]&&e[1]&&ee(e);return{c(){s=m(),r&&r.c(),a=g()},l(e){V('[data-svelte="svelte-zxuiss"]',document.head).forEach(c),s=p(e),r&&r.l(e),a=g()},m(e,t){i(e,s,t),r&&r.m(e,t),i(e,a,t),n=!0},p(e,[s]){(!n||2&s)&&t!==(t=e[1]?e[1]:"Logger")&&(document.title=t),e[2]&&e[0]&&e[1]?r?(r.p(e,s),7&s&&E(r,1)):(r=ee(e),r.c(),E(r,1),r.m(a.parentNode,a)):r&&(O(),j(r,1,1,(()=>{r=null})),S())},i(e){n||(E(r),n=!0)},o(e){j(r),n=!1},d(e){e&&c(s),r&&r.d(e),e&&c(a)}}}function se(e){const{id:t}=e.query;return{id:t}}function ae(e,t,s){var a=this&&this.__awaiter||function(e,t,s,a){return new(s||(s=Promise))((function(n,r){function l(e){try{c(a.next(e))}catch(e){r(e)}}function o(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(l,o)}c((a=a.apply(e,t||[])).next())}))};let{id:n}=t,r=null,l="";return _.subscribe((e=>{null!==e&&(s(2,l=e),a(void 0,void 0,void 0,(function*(){if(!r){const e=yield K(l,n);s(1,r=e.NameOfList)}})))})),e.$$set=e=>{"id"in e&&s(0,n=e.id)},[n,r,l]}export default class extends e{constructor(e){super(),t(this,e,ae,te,s,{id:0})}}export{se as preload};