import{S as s,i as t,s as a,e as i,t as r,c as e,a as n,b as d,d as l,g as o,h as c,D as u}from"./client.d0b99206.js";function p(s){let t,a,p;return{c(){t=i("div"),a=i("p"),p=r("multiple list")},l(s){t=e(s,"DIV",{});var i=n(t);a=e(i,"P",{});var r=n(a);p=d(r,"multiple list"),r.forEach(l),i.forEach(l)},m(s,i){o(s,t,i),c(t,a),c(a,p)},p:u,i:u,o:u,d(s){s&&l(t)}}}function f(s){return{id:s.params.id}}function m(s,t,a){let{id:i}=t;return s.$$set=s=>{"id"in s&&a(0,i=s.id)},[i]}export default class extends s{constructor(s){super(),t(this,s,m,p,a,{id:0})}}export{f as preload};