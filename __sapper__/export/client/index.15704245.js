import{S as t,i as e,s as a,e as s,t as n,q as l,c,a as r,b as o,d as i,r as u,f as d,g as h,h as f,j as v,D as m,F as g,G as p,E as x,H as b,I as w,u as y,v as E,y as $,J as I,K as L,z as k,L as N,k as O,l as T,m as V,n as D,o as S,p as B,M as H,w as P,x as U,N as j,A as F,B as z,C,O as M}from"./client.53b22393.js";function _(t){let e,a,g,p,x,b,w,y,E,$,I=t[0].yourBoards+"",L=t[1].content+"",k=t[1].author+"";return{c(){e=s("div"),a=s("h2"),g=n(I),p=l(),x=s("q"),b=n(L),w=l(),y=s("span"),E=n("- "),$=n(k),this.h()},l(t){e=c(t,"DIV",{class:!0});var s=r(e);a=c(s,"H2",{class:!0});var n=r(a);g=o(n,I),n.forEach(i),p=u(s),x=c(s,"Q",{class:!0});var l=r(x);b=o(l,L),l.forEach(i),w=u(s),y=c(s,"SPAN",{class:!0});var d=r(y);E=o(d,"- "),$=o(d,k),d.forEach(i),s.forEach(i),this.h()},h(){d(a,"class","font-semibold tracking-wide uppercase text-4xl"),d(x,"class","mt-4 max-w-2xl text-sm text-gray-500 lg:mx-auto"),d(y,"class","mt-4 max-w-2xl text-sm text-blue-500 lg:mx-auto"),d(e,"class","text-center")},m(t,s){h(t,e,s),f(e,a),f(a,g),f(e,p),f(e,x),f(x,b),f(e,w),f(e,y),f(y,E),f(y,$)},p(t,[e]){1&e&&I!==(I=t[0].yourBoards+"")&&v(g,I),2&e&&L!==(L=t[1].content+"")&&v(b,L),2&e&&k!==(k=t[1].author+"")&&v($,k)},i:m,o:m,d(t){t&&i(e)}}}function A(t,e,a){var s=this&&this.__awaiter||function(t,e,a,s){return new(a||(a=Promise))((function(n,l){function c(t){try{o(s.next(t))}catch(t){l(t)}}function r(t){try{o(s.throw(t))}catch(t){l(t)}}function o(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(c,r)}o((s=s.apply(t,e||[])).next())}))};let n={author:"",content:""},{datoHardcodedStrings:l}=e;return g((()=>s(void 0,void 0,void 0,(function*(){try{const t=yield p.get("https://api.quotable.io/random",{params:{tags:"inspirational",maxLength:80}});a(1,n.author=t.data.author,n),a(1,n.content=t.data.content,n)}catch(t){a(1,n.author="",n),a(1,n.content="",n)}})))),t.$$set=t=>{"datoHardcodedStrings"in t&&a(0,l=t.datoHardcodedStrings)},[l,n]}class K extends t{constructor(t){super(),e(this,t,A,_,a,{datoHardcodedStrings:0})}}function q(t){let e,a,g,p,I,L,k,N,O,T,V,D,S,B,H,P,U,j,F,z,C,M,_,A,K,q,G,J,Q,R,W,X,Y,Z,tt,et,at,st,nt,lt,ct=t[2].createNewList+"",rt=t[2].typeOfList+"",ot=t[2].single+"",it=t[2].multiple+"",ut=t[2].logger+"",dt=t[2].cancel+"",ht=t[2].createList+"";return{c(){e=s("div"),a=s("div"),g=s("div"),p=s("div"),I=s("div"),L=x("svg"),k=x("path"),N=l(),O=s("div"),T=s("h3"),V=n(ct),D=l(),S=s("input"),H=l(),P=s("div"),U=s("h3"),j=n(rt),F=l(),z=s("div"),C=s("button"),M=n(ot),A=l(),K=s("button"),q=n(it),J=l(),Q=s("button"),R=n(ut),X=l(),Y=s("div"),Z=s("button"),tt=n(dt),et=l(),at=s("button"),st=n(ht),this.h()},l(t){e=c(t,"DIV",{class:!0,style:!0});var s=r(e);a=c(s,"DIV",{class:!0});var n=r(a);g=c(n,"DIV",{class:!0});var l=r(g);p=c(l,"DIV",{class:!0});var d=r(p);I=c(d,"DIV",{class:!0});var h=r(I);L=c(h,"svg",{class:!0,xmlns:!0,width:!0,height:!0,viewBox:!0},1);var f=r(L);k=c(f,"path",{d:!0},1),r(k).forEach(i),f.forEach(i),h.forEach(i),d.forEach(i),N=u(l),O=c(l,"DIV",{class:!0});var v=r(O);T=c(v,"H3",{class:!0});var m=r(T);V=o(m,ct),m.forEach(i),D=u(v),S=c(v,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),v.forEach(i),H=u(l),P=c(l,"DIV",{class:!0});var x=r(P);U=c(x,"H3",{class:!0});var b=r(U);j=o(b,rt),b.forEach(i),F=u(x),z=c(x,"DIV",{class:!0});var w=r(z);C=c(w,"BUTTON",{class:!0});var y=r(C);M=o(y,ot),y.forEach(i),A=u(w),K=c(w,"BUTTON",{class:!0});var E=r(K);q=o(E,it),E.forEach(i),J=u(w),Q=c(w,"BUTTON",{class:!0});var $=r(Q);R=o($,ut),$.forEach(i),w.forEach(i),x.forEach(i),X=u(l),Y=c(l,"DIV",{class:!0});var B=r(Y);Z=c(B,"BUTTON",{type:!0,class:!0});var _=r(Z);tt=o(_,dt),_.forEach(i),et=u(B),at=c(B,"BUTTON",{type:!0,class:!0});var G=r(at);st=o(G,ht),G.forEach(i),B.forEach(i),l.forEach(i),n.forEach(i),s.forEach(i),this.h()},h(){d(k,"d","M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"),d(L,"class","fill-current text-black"),d(L,"xmlns","http://www.w3.org/2000/svg"),d(L,"width","18"),d(L,"height","18"),d(L,"viewBox","0 0 18 18"),d(I,"class","modal-close cursor-pointer z-50"),d(p,"class","flex justify-end"),d(T,"class","text-xl text-gray-700 mb-2 font-bold"),d(S,"type","text"),d(S,"name","create new list"),d(S,"placeholder",B=t[2].listnamePlaceholder),d(S,"class","svelte-1vttsc0"),d(O,"class","my-5"),d(U,"class","text-xl text-gray-700 mb-2 font-bold"),d(C,"class",_=b("single"===t[1]?"selected":"notSelected")+" svelte-1vttsc0"),d(K,"class",G=b("multiple"===t[1]?"selected":"notSelected")+" svelte-1vttsc0"),d(Q,"class",W=b("logger"===t[1]?"selected":"notSelected")+" svelte-1vttsc0"),d(z,"class","flex rounded-lg text-lg"),d(P,"class",""),d(Z,"type","button"),d(Z,"class","border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"),d(at,"type","button"),d(at,"class","border border-blue-500 bg-blue-500 hover:border-blue-300 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline"),d(Y,"class","flex justify-end pt-2"),d(g,"class","modal-content py-4 text-left px-6"),d(a,"class","border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"),d(e,"class","main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster svelte-1vttsc0"),w(e,"background","rgba(0, 0, 0, 0.7)")},m(s,n){h(s,e,n),f(e,a),f(a,g),f(g,p),f(p,I),f(I,L),f(L,k),f(g,N),f(g,O),f(O,T),f(T,V),f(O,D),f(O,S),y(S,t[0]),f(g,H),f(g,P),f(P,U),f(U,j),f(P,F),f(P,z),f(z,C),f(C,M),f(z,A),f(z,K),f(K,q),f(z,J),f(z,Q),f(Q,R),f(g,X),f(g,Y),f(Y,Z),f(Z,tt),f(Y,et),f(Y,at),f(at,st),nt||(lt=[E(S,"input",t[5]),E(C,"click",t[6]),E(K,"click",t[7]),E(Q,"click",t[8]),E(Z,"click",t[3]),E(at,"click",t[4])],nt=!0)},p(t,[e]){4&e&&ct!==(ct=t[2].createNewList+"")&&v(V,ct),4&e&&B!==(B=t[2].listnamePlaceholder)&&d(S,"placeholder",B),1&e&&S.value!==t[0]&&y(S,t[0]),4&e&&rt!==(rt=t[2].typeOfList+"")&&v(j,rt),4&e&&ot!==(ot=t[2].single+"")&&v(M,ot),2&e&&_!==(_=b("single"===t[1]?"selected":"notSelected")+" svelte-1vttsc0")&&d(C,"class",_),4&e&&it!==(it=t[2].multiple+"")&&v(q,it),2&e&&G!==(G=b("multiple"===t[1]?"selected":"notSelected")+" svelte-1vttsc0")&&d(K,"class",G),4&e&&ut!==(ut=t[2].logger+"")&&v(R,ut),2&e&&W!==(W=b("logger"===t[1]?"selected":"notSelected")+" svelte-1vttsc0")&&d(Q,"class",W),4&e&&dt!==(dt=t[2].cancel+"")&&v(tt,dt),4&e&&ht!==(ht=t[2].createList+"")&&v(st,ht)},i:m,o:m,d(t){t&&i(e),nt=!1,$(lt)}}}function G(t,e,a){var s=this&&this.__awaiter||function(t,e,a,s){return new(a||(a=Promise))((function(n,l){function c(t){try{o(s.next(t))}catch(t){l(t)}}function r(t){try{o(s.throw(t))}catch(t){l(t)}}function o(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(c,r)}o((s=s.apply(t,e||[])).next())}))};const n=I();let l="",c="multiple",r=null,o=null;L.subscribe((t=>{null!==t&&(r=t)})),k.subscribe((t=>{null!==t&&a(2,o=t)}));const i=()=>{n("closeModal")};return[l,c,o,i,()=>s(void 0,void 0,void 0,(function*(){c&&l&&r&&(yield N(c,l,r),i())})),function(){l=this.value,a(0,l)},()=>a(1,c="single"),()=>a(1,c="multiple"),()=>a(1,c="logger")]}class J extends t{constructor(t){super(),e(this,t,G,q,a,{})}}function Q(t,e,a){const s=t.slice();return s[10]=e[a],s}function R(t){let e,a,m,g,p,x,b,w,y,$,I,L=t[10].NameOfList+"";function k(){return t[7](t[10])}return{c(){e=s("li"),a=s("img"),p=l(),x=s("a"),b=n(L),y=l(),this.h()},l(t){e=c(t,"LI",{class:!0});var s=r(e);a=c(s,"IMG",{class:!0,src:!0,alt:!0}),p=u(s),x=c(s,"A",{href:!0});var n=r(x);b=o(n,L),n.forEach(i),y=u(s),s.forEach(i),this.h()},h(){d(a,"class","flex-none w-8 mr-2 rounded"),a.src!==(m=t[10].Avatar)&&d(a,"src",m),d(a,"alt",g=`Icon related with ${t[10].NameOfList}`),d(x,"href",w=t[5](t[10])),d(e,"class","flex items-center mb-3")},m(t,s){h(t,e,s),f(e,a),f(e,p),f(e,x),f(x,b),f(e,y),$||(I=E(a,"click",k),$=!0)},p(e,s){t=e,1&s&&a.src!==(m=t[10].Avatar)&&d(a,"src",m),1&s&&g!==(g=`Icon related with ${t[10].NameOfList}`)&&d(a,"alt",g),1&s&&L!==(L=t[10].NameOfList+"")&&v(b,L),1&s&&w!==(w=t[5](t[10]))&&d(x,"href",w)},d(t){t&&i(e),$=!1,I()}}}function W(t){let e,a;return e=new J({}),e.$on("closeModal",t[4]),{c(){O(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){V(e,t,s),a=!0},p:m,i(t){a||(D(e.$$.fragment,t),a=!0)},o(t){S(e.$$.fragment,t),a=!1},d(t){B(e,t)}}}function X(t){let e,a,n,o,v,m,g,p,b,w,y,$,I,L,k,N;n=new K({props:{datoHardcodedStrings:t[2]}});let F=t[0],z=[];for(let e=0;e<F.length;e+=1)z[e]=R(Q(t,F,e));let C=t[1]&&W(t);return{c(){e=s("section"),a=s("div"),O(n.$$.fragment),o=l(),v=s("div"),m=s("ul");for(let t=0;t<z.length;t+=1)z[t].c();g=l(),p=s("div"),b=s("button"),w=x("svg"),y=x("path"),$=l(),C&&C.c(),I=H(),this.h()},l(t){e=c(t,"SECTION",{class:!0});var s=r(e);a=c(s,"DIV",{class:!0});var l=r(a);T(n.$$.fragment,l),o=u(l),v=c(l,"DIV",{class:!0});var d=r(v);m=c(d,"UL",{class:!0});var h=r(m);for(let t=0;t<z.length;t+=1)z[t].l(h);h.forEach(i),g=u(d),p=c(d,"DIV",{class:!0});var f=r(p);b=c(f,"BUTTON",{class:!0});var x=r(b);w=c(x,"svg",{viewBox:!0,"enable-background":!0,class:!0},1);var E=r(w);y=c(E,"path",{fill:!0,d:!0},1),r(y).forEach(i),E.forEach(i),x.forEach(i),f.forEach(i),d.forEach(i),l.forEach(i),s.forEach(i),$=u(t),C&&C.l(t),I=H(),this.h()},h(){d(m,"class","list-reset text-black mb-8 p-8 text-grey-darker rounded shadow-lg"),d(y,"fill","#FFFFFF"),d(y,"d","M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601\n              C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399\n              C15.952,9,16,9.447,16,10z"),d(w,"viewBox","0 0 20 20"),d(w,"enable-background","new 0 0 20 20"),d(w,"class","w-6 h-6 inline-block"),d(b,"class","p-0 w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-300 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"),d(p,"class","flex flex-row-reverse"),d(v,"class","container my-8 mx-auto px-4 leading-normal"),d(a,"class","container mx-auto"),d(e,"class","py-12")},m(s,l){h(s,e,l),f(e,a),V(n,a,null),f(a,o),f(a,v),f(v,m);for(let t=0;t<z.length;t+=1)z[t].m(m,null);f(v,g),f(v,p),f(p,b),f(b,w),f(w,y),h(s,$,l),C&&C.m(s,l),h(s,I,l),L=!0,k||(N=E(b,"click",t[3]),k=!0)},p(t,[e]){const a={};if(4&e&&(a.datoHardcodedStrings=t[2]),n.$set(a),97&e){let a;for(F=t[0],a=0;a<F.length;a+=1){const s=Q(t,F,a);z[a]?z[a].p(s,e):(z[a]=R(s),z[a].c(),z[a].m(m,null))}for(;a<z.length;a+=1)z[a].d(1);z.length=F.length}t[1]?C?(C.p(t,e),2&e&&D(C,1)):(C=W(t),C.c(),D(C,1),C.m(I.parentNode,I)):C&&(P(),S(C,1,1,(()=>{C=null})),U())},i(t){L||(D(n.$$.fragment,t),D(C),L=!0)},o(t){S(n.$$.fragment,t),S(C),L=!1},d(t){t&&i(e),B(n),j(z,t),t&&i($),C&&C.d(t),t&&i(I),k=!1,N()}}}function Y(t,e,a){var s=this&&this.__awaiter||function(t,e,a,s){return new(a||(a=Promise))((function(n,l){function c(t){try{o(s.next(t))}catch(t){l(t)}}function r(t){try{o(s.throw(t))}catch(t){l(t)}}function o(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(c,r)}o((s=s.apply(t,e||[])).next())}))};let n=null,l=[],c=!1,r=null;L.subscribe((t=>{null!==t&&(n=t)})),k.subscribe((t=>{null!==t&&a(2,r=t)})),g((()=>s(void 0,void 0,void 0,(function*(){let t=null;t=F.database().ref().child(`boards/${n}`),t.on("value",(t=>{const e=t.val();a(0,l=Object.values(e));const s=Object.keys(e);l.forEach(((t,e)=>{t.KeyId=s[e]}))}))}))));const o=t=>{let e=t.TypeOfList;z(`${e}?id=${t.KeyId}`)};return[l,c,r,()=>{a(1,c=!0)},()=>{a(1,c=!c)},t=>`${t.TypeOfList}?id=${t.KeyId}`,o,t=>o(t)]}class Z extends t{constructor(t){super(),e(this,t,Y,X,a,{})}}function tt(t){let e,a;return e=new Z({}),{c(){O(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){V(e,t,s),a=!0},i(t){a||(D(e.$$.fragment,t),a=!0)},o(t){S(e.$$.fragment,t),a=!1},d(t){B(e,t)}}}function et(t){let e,a,s,n=t[0]&&tt();return{c(){e=l(),n&&n.c(),a=H(),this.h()},l(t){C('[data-svelte="svelte-1ru68kf"]',document.head).forEach(i),e=u(t),n&&n.l(t),a=H(),this.h()},h(){document.title="Dahsboard"},m(t,l){h(t,e,l),n&&n.m(t,l),h(t,a,l),s=!0},p(t,[e]){t[0]?n?1&e&&D(n,1):(n=tt(),n.c(),D(n,1),n.m(a.parentNode,a)):n&&(P(),S(n,1,1,(()=>{n=null})),U())},i(t){s||(D(n),s=!0)},o(t){S(n),s=!1},d(t){t&&i(e),n&&n.d(t),t&&i(a)}}}var at=function(t,e,a,s){return new(a||(a=Promise))((function(n,l){function c(t){try{o(s.next(t))}catch(t){l(t)}}function r(t){try{o(s.throw(t))}catch(t){l(t)}}function o(t){var e;t.done?n(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(c,r)}o((s=s.apply(t,e||[])).next())}))};function st(t,e){return at(this,void 0,void 0,(function*(){let{user:t}=e;if(!t&&"false"!==t)return this.redirect(302,"/")}))}function nt(t,e,a){let s=!1;return M.subscribe((t=>{null!==t&&a(0,s=!0)})),[s]}export default class extends t{constructor(t){super(),e(this,t,nt,et,a,{})}}export{st as preload};