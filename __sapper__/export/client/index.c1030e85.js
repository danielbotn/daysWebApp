import{S as e,i as t,s as a,e as n,q as s,t as c,c as o,a as r,d as l,r as i,b as d,f as u,g as f,h,v as m,j as v,E as p,I as g,D as b,N as y,y as x,J as _,K as I,z as w,P as E,Q as $,k as N,l as D,m as k,n as j,o as P,p as O,M as S,w as V,x as C,F as T,R as L,A as B,T as A,U as z}from"./client.dc76426f.js";import{F,r as J}from"./randomColor.1974056a.js";function M(e,t,a){const n=e.slice();return n[16]=t[a],n}function R(e){let t,a,p,g,b,y,x,_,I,w,E,$,N,D=e[16].Name+"";function k(...t){return e[10](e[16],...t)}return{c(){t=n("div"),a=n("div"),p=n("input"),x=s(),_=n("div"),I=n("label"),w=c(D),E=s(),this.h()},l(e){t=o(e,"DIV",{class:!0});var n=r(t);a=o(n,"DIV",{class:!0});var s=r(a);p=o(s,"INPUT",{id:!0,name:!0,type:!0,class:!0,checked:!0}),s.forEach(l),x=i(n),_=o(n,"DIV",{class:!0});var c=r(_);I=o(c,"LABEL",{for:!0,class:!0});var u=r(I);w=d(u,D),u.forEach(l),c.forEach(l),E=i(n),n.forEach(l),this.h()},h(){u(p,"id",g=e[16].Name),u(p,"name",b=e[16].Name),u(p,"type","checkbox"),u(p,"class","focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"),p.checked=y=e[6](e[16]),u(a,"class","flex items-center h-5"),u(I,"for","comments"),u(I,"class","font-medium text-gray-700"),u(_,"class","ml-3 text-sm"),u(t,"class","flex items-start")},m(e,n){f(e,t,n),h(t,a),h(a,p),h(t,x),h(t,_),h(_,I),h(I,w),h(t,E),$||(N=m(p,"change",k),$=!0)},p(t,a){e=t,1&a&&g!==(g=e[16].Name)&&u(p,"id",g),1&a&&b!==(b=e[16].Name)&&u(p,"name",b),1&a&&y!==(y=e[6](e[16]))&&(p.checked=y),1&a&&D!==(D=e[16].Name+"")&&v(w,D)},d(e){e&&l(t),$=!1,N()}}}function K(e){let t,a,_,I,w,E,$,N,D,k,j,P,O,S,V,C,T,L,B,A,z,F,J,K,U,H,q,G,Q=e[3].day+"",W=e[3].cancel+"",X=e[3].save+"",Y=e[0],Z=[];for(let t=0;t<Y.length;t+=1)Z[t]=R(M(e,Y,t));return{c(){t=n("div"),a=n("div"),_=n("div"),I=n("div"),w=n("div"),E=p("svg"),$=p("path"),N=s(),D=n("div"),k=n("h3"),j=c(e[1]),P=s(),O=n("fieldset"),S=n("legend"),V=c(Q),C=c(": "),T=c(e[2]),L=s(),B=n("div");for(let e=0;e<Z.length;e+=1)Z[e].c();A=s(),z=n("div"),F=n("button"),J=c(W),K=s(),U=n("button"),H=c(X),this.h()},l(n){t=o(n,"DIV",{class:!0,style:!0});var s=r(t);a=o(s,"DIV",{class:!0});var c=r(a);_=o(c,"DIV",{class:!0});var u=r(_);I=o(u,"DIV",{class:!0});var f=r(I);w=o(f,"DIV",{class:!0});var h=r(w);E=o(h,"svg",{class:!0,xmlns:!0,width:!0,height:!0,viewBox:!0},1);var m=r(E);$=o(m,"path",{d:!0},1),r($).forEach(l),m.forEach(l),h.forEach(l),f.forEach(l),N=i(u),D=o(u,"DIV",{class:!0});var v=r(D);k=o(v,"H3",{class:!0});var p=r(k);j=d(p,e[1]),p.forEach(l),P=i(v),O=o(v,"FIELDSET",{});var g=r(O);S=o(g,"LEGEND",{class:!0});var b=r(S);V=d(b,Q),C=d(b,": "),T=d(b,e[2]),b.forEach(l),L=i(g),B=o(g,"DIV",{class:!0});var y=r(B);for(let e=0;e<Z.length;e+=1)Z[e].l(y);y.forEach(l),g.forEach(l),v.forEach(l),A=i(u),z=o(u,"DIV",{class:!0});var x=r(z);F=o(x,"BUTTON",{type:!0,class:!0});var M=r(F);J=d(M,W),M.forEach(l),K=i(x),U=o(x,"BUTTON",{type:!0,class:!0});var R=r(U);H=d(R,X),R.forEach(l),x.forEach(l),u.forEach(l),c.forEach(l),s.forEach(l),this.h()},h(){u($,"d","M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"),u(E,"class","fill-current text-black"),u(E,"xmlns","http://www.w3.org/2000/svg"),u(E,"width","18"),u(E,"height","18"),u(E,"viewBox","0 0 18 18"),u(w,"class","modal-close cursor-pointer z-50"),u(I,"class","flex justify-end"),u(k,"class","text-xl text-gray-700 mb-2 font-bold"),u(S,"class","text-base font-medium text-gray-900"),u(B,"class","mt-4 space-y-4"),u(D,"class","my-5"),u(F,"type","button"),u(F,"class","border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"),u(U,"type","button"),u(U,"class","border border-blue-500 bg-blue-500 hover:border-blue-300 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline"),u(z,"class","flex justify-end pt-2"),u(_,"class","modal-content py-4 text-left px-6"),u(a,"class","border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"),u(t,"class","main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster svelte-1x2k9hu"),g(t,"background","rgba(0, 0, 0, 0.7)")},m(n,s){f(n,t,s),h(t,a),h(a,_),h(_,I),h(I,w),h(w,E),h(E,$),h(_,N),h(_,D),h(D,k),h(k,j),h(D,P),h(D,O),h(O,S),h(S,V),h(S,C),h(S,T),h(O,L),h(O,B);for(let e=0;e<Z.length;e+=1)Z[e].m(B,null);h(_,A),h(_,z),h(z,F),h(F,J),h(z,K),h(z,U),h(U,H),q||(G=[m(w,"click",e[4]),m(F,"click",e[4]),m(U,"click",e[5])],q=!0)},p(e,[t]){if(2&t&&v(j,e[1]),8&t&&Q!==(Q=e[3].day+"")&&v(V,Q),4&t&&v(T,e[2]),193&t){let a;for(Y=e[0],a=0;a<Y.length;a+=1){const n=M(e,Y,a);Z[a]?Z[a].p(n,t):(Z[a]=R(n),Z[a].c(),Z[a].m(B,null))}for(;a<Z.length;a+=1)Z[a].d(1);Z.length=Y.length}8&t&&W!==(W=e[3].cancel+"")&&v(J,W),8&t&&X!==(X=e[3].save+"")&&v(H,X)},i:b,o:b,d(e){e&&l(t),y(Z,e),q=!1,x(G)}}}function U(e,t,a){var n=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(s,c){function o(e){try{l(n.next(e))}catch(e){c(e)}}function r(e){try{l(n.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,r)}l((n=n.apply(e,t||[])).next())}))};const s=_();let c=null,o=null,r=[],{fields:l=[]}=t,{boardName:i}=t,{boardData:d=[]}=t,{selectedDay:u=""}=t,{listId:f}=t;I.subscribe((e=>{null!==e&&(c=e)})),w.subscribe((e=>{null!==e&&a(3,o=e)}));const h=()=>{r=[],s("closeModal")},m=(e,t)=>{r.push({name:e.Name,keyId:e.KeyId,selectedDay:u,toogle:t.checked,timeStamp:new Date,index:r.length})};return e.$$set=e=>{"fields"in e&&a(0,l=e.fields),"boardName"in e&&a(1,i=e.boardName),"boardData"in e&&a(8,d=e.boardData),"selectedDay"in e&&a(2,u=e.selectedDay),"listId"in e&&a(9,f=e.listId)},[l,i,u,o,h,()=>n(void 0,void 0,void 0,(function*(){const e=r.reverse().reduce((function(e,t){var a=[t.keyId].join("|");return-1===e.temp.indexOf(a)&&(e.out.push(t),e.temp.push(a)),e}),{temp:[],out:[]}).out;r=e,r.forEach((e=>{e.toogle?E(e,c,f,i):$(e,c,f)})),h()})),e=>{let t=!1;for(const a of d)if(a.Day===u&&e.KeyId===a.FieldId){t=!0;break}return t},m,d,f,(e,t)=>m(e,t.target)]}class H extends e{constructor(e){super(),t(this,e,U,K,a,{fields:0,boardName:1,boardData:8,selectedDay:2,listId:9})}}function q(e){let t,a;return{c(){t=n("h1"),a=c(e[1]),this.h()},l(n){t=o(n,"H1",{class:!0});var s=r(t);a=d(s,e[1]),s.forEach(l),this.h()},h(){u(t,"class","font-semibold tracking-wide uppercase text-4xl text-center")},m(e,n){f(e,t,n),h(t,a)},p(e,t){2&t&&v(a,e[1])},d(e){e&&l(t)}}}function G(e){let t,a;return t=new H({props:{fields:e[2],boardName:e[1],boardData:e[3],selectedDay:e[5],listId:e[0]}}),t.$on("closeModal",e[9]),{c(){N(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){k(t,e,n),a=!0},p(e,a){const n={};4&a&&(n.fields=e[2]),2&a&&(n.boardName=e[1]),8&a&&(n.boardData=e[3]),32&a&&(n.selectedDay=e[5]),1&a&&(n.listId=e[0]),t.$set(n)},i(e){a||(j(t.$$.fragment,e),a=!0)},o(e){P(t.$$.fragment,e),a=!1},d(e){O(t,e)}}}function Q(e){let t,a,c,d,m,v,p=e[1]&&q(e);c=new F({props:{options:e[6]}});let g=e[4]&&G(e);return{c(){t=n("div"),p&&p.c(),a=s(),N(c.$$.fragment),d=s(),g&&g.c(),m=S(),this.h()},l(e){t=o(e,"DIV",{class:!0});var n=r(t);p&&p.l(n),a=i(n),D(c.$$.fragment,n),n.forEach(l),d=i(e),g&&g.l(e),m=S(),this.h()},h(){u(t,"class","justify-self-center")},m(e,n){f(e,t,n),p&&p.m(t,null),h(t,a),k(c,t,null),f(e,d,n),g&&g.m(e,n),f(e,m,n),v=!0},p(e,[n]){e[1]?p?p.p(e,n):(p=q(e),p.c(),p.m(t,a)):p&&(p.d(1),p=null);const s={};64&n&&(s.options=e[6]),c.$set(s),e[4]?g?(g.p(e,n),16&n&&j(g,1)):(g=G(e),g.c(),j(g,1),g.m(m.parentNode,m)):g&&(V(),P(g,1,1,(()=>{g=null})),C())},i(e){v||(j(c.$$.fragment,e),j(g),v=!0)},o(e){P(c.$$.fragment,e),P(g),v=!1},d(e){e&&l(t),p&&p.d(),O(c),e&&l(d),g&&g.d(e),e&&l(m)}}}function W(e,t,a){var n=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(s,c){function o(e){try{l(n.next(e))}catch(e){c(e)}}function r(e){try{l(n.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,r)}l((n=n.apply(e,t||[])).next())}))};let{listId:s}=t,{language:c}=t,{uId:o}=t,{boardName:r}=t,l=[],i=[],d=[],u=[],f=!1,h="";const m=e=>{let t="";return t="Íslenska"===e?"is":"English"===e?"en":"sv",t};T((()=>n(void 0,void 0,void 0,(function*(){l.push((yield Promise.all([import("./sv.2348f98c.js"),__inject_styles(["client-0153459a.css"])]).then((function(e){return e[0]})).then((function(e){return e.s}))).default),l.push((yield Promise.all([import("./is.df48b0c0.js"),__inject_styles(["client-0153459a.css"])]).then((function(e){return e[0]})).then((function(e){return e.i}))).default),a(6,p=Object.assign(Object.assign({},p),{plugins:[(yield Promise.all([import("./main.5adc4571.js"),__inject_styles(["client-0153459a.css","randomColor-c390f706.css","main-a1515909.css"])]).then((function(e){return e[0]}))).default,(yield Promise.all([import("./main.2cedce30.js"),__inject_styles(["client-0153459a.css","randomColor-c390f706.css"])]).then((function(e){return e[0]}))).default],locales:l,locale:m(c)}))}))));const v=e=>{let t=[];e.forEach((e=>{t.push({title:e.NameOfField+"✔️",date:e.Day,color:J({luminosity:"light"}),textColor:"black"})})),u=t,a(6,p.events=u,p),a(6,p=Object.assign({},p))};L((()=>{if(o&&s){let e=[];const t=B.database(),n=t.ref(`/multipleBoardsData/${o}/${s}`),c=t.ref(`/multipleBoards/${o}/${s}`);n.on("value",(t=>{const n=t.val();Object.values(n).forEach((t=>{Object.values(t).forEach((t=>{const a=Object.values(t);e.push(a[0])}))})),a(3,d=e),v(d)})),c.on("value",(e=>{const t=e.val(),n=Object.values(t),s=Object.keys(t);n.forEach(((e,t)=>{e.KeyId=s[t]})),a(2,i=n),v(d)}))}}));let p={initialView:"dayGridMonth",plugins:[],height:"500px",contentHeight:100,events:u,dateClick:e=>{return t=e.dateStr,a(4,f=!0),void a(5,h=t);var t},weekends:!0,locale:"en",locales:l};return e.$$set=e=>{"listId"in e&&a(0,s=e.listId),"language"in e&&a(7,c=e.language),"uId"in e&&a(8,o=e.uId),"boardName"in e&&a(1,r=e.boardName)},[s,r,i,d,f,h,p,c,o,()=>a(4,f=!f)]}class X extends e{constructor(e){super(),t(this,e,W,Q,a,{listId:0,language:7,uId:8,boardName:1})}}function Y(e){let t,a;return t=new X({props:{listId:e[0],language:e[1],uId:e[2],boardName:e[3]}}),{c(){N(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){k(t,e,n),a=!0},p(e,[a]){const n={};1&a&&(n.listId=e[0]),2&a&&(n.language=e[1]),4&a&&(n.uId=e[2]),8&a&&(n.boardName=e[3]),t.$set(n)},i(e){a||(j(t.$$.fragment,e),a=!0)},o(e){P(t.$$.fragment,e),a=!1},d(e){O(t,e)}}}var Z=function(e,t,a,n){return new(a||(a=Promise))((function(s,c){function o(e){try{l(n.next(e))}catch(e){c(e)}}function r(e){try{l(n.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,r)}l((n=n.apply(e,t||[])).next())}))};function ee(e){return Z(this,void 0,void 0,(function*(){const{id:t}=e.query;return{id:t}}))}function te(e,t,a){var n=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(s,c){function o(e){try{l(n.next(e))}catch(e){c(e)}}function r(e){try{l(n.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,r)}l((n=n.apply(e,t||[])).next())}))};let{id:s}=t,c="",o="",r=null;return I.subscribe((e=>{null!==e&&(a(2,o=e),n(void 0,void 0,void 0,(function*(){if(!r){const e=yield A(o,s);a(3,r=e.NameOfList)}})))})),z.subscribe((e=>{null!==e&&a(1,c=e)})),e.$$set=e=>{"id"in e&&a(0,s=e.id)},[s,c,o,r]}export default class extends e{constructor(e){super(),t(this,e,te,Y,a,{id:0})}}export{ee as preload};

import __inject_styles from './inject_styles.5607aec6.js';