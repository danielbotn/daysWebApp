import{S as s,i as a,s as t,e as r,t as i,c as e,a as o,b as n,d,g as c,h as l,D as u}from"./client.d0b99206.js";function f(s){let a,t,f;return{c(){a=r("div"),t=r("p"),f=i("logger list")},l(s){a=e(s,"DIV",{});var r=o(a);t=e(r,"P",{});var i=o(t);f=n(i,"logger list"),i.forEach(d),r.forEach(d)},m(s,r){c(s,a,r),l(a,t),l(t,f)},p:u,i:u,o:u,d(s){s&&d(a)}}}function p(s){return{id:s.params.id}}function g(s,a,t){let{id:r}=a;return s.$$set=s=>{"id"in s&&t(0,r=s.id)},[r]}export default class extends s{constructor(s){super(),a(this,s,g,f,t,{id:0})}}export{p as preload};
