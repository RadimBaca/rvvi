import{s as J,b as I,j as g,f as d,t as L,e as $,u as N,d as w,r as T,i as y,k as E,q as O,a as S,c as j,A as q,B as K,g as U}from"../chunks/scheduler.C9EcQ0XW.js";import{S as Q,i as X,t as k,b as v,g as P,d as R,c as x,a as D,m as H,e as M}from"../chunks/index.BaFYQsWh.js";import{j as A,u as Y,o as Z,I as ee,k as te,T as le,l as ae}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.bFEDpPBm.js";import"../chunks/entry.C0NwGi4S.js";import{h as ne,u as re}from"../chunks/await_block.BbeJ363K.js";function B(h,e,l){const t=h.slice();return t[8]=e[l][0],t[9]=e[l][1],t}function F(h,e,l){const t=h.slice();return t[12]=e[l][0],t[13]=e[l][1],t}function oe(h){let e,l,t=h[16].message+"",a;return{c(){e=L(`An error was encountered while loading project schema.

	`),l=$("pre"),a=L(t),this.h()},l(i){e=N(i,`An error was encountered while loading project schema.

	`),l=w(i,"PRE",{class:!0});var f=T(l);a=N(f,t),f.forEach(d),this.h()},h(){y(l,"class","px-4 py-2 bg-red-800 text-white")},m(i,f){g(i,e,f),g(i,l,f),E(l,a)},p:O,i:O,o:O,d(i){i&&(d(e),d(l))}}}function se(h){let e,l,t,a=[],i=new Map,f,m=A(Object.entries(h[7]));const c=n=>n[8];for(let n=0;n<m.length;n+=1){let r=B(h,m,n),_=c(r);i.set(_,a[n]=G(_,r))}return{c(){e=$("section"),l=$("div"),t=$("ul");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=w(n,"SECTION",{});var r=T(e);l=w(r,"DIV",{});var _=T(l);t=w(_,"UL",{class:!0});var s=T(t);for(let p=0;p<a.length;p+=1)a[p].l(s);s.forEach(d),_.forEach(d),r.forEach(d),this.h()},h(){y(t,"class","list-none m-0 p-0 flex flex-col gap-1 mb-1")},m(n,r){g(n,e,r),E(e,l),E(l,t);for(let _=0;_<a.length;_+=1)a[_]&&a[_].m(t,null);f=!0},p(n,r){r&7&&(m=A(Object.entries(n[7])),P(),a=Y(a,r,c,1,n,m,i,t,Z,G,null,B),R())},i(n){if(!f){for(let r=0;r<m.length;r+=1)k(a[r]);f=!0}},o(n){for(let r=0;r<a.length;r+=1)v(a[r]);f=!1},d(n){n&&d(e);for(let r=0;r<a.length;r+=1)a[r].d()}}}function V(h){let e,l=[],t=new Map,a,i,f=A(Object.entries(h[9]));const m=c=>c[12];for(let c=0;c<f.length;c+=1){let n=F(h,f,c),r=m(n);t.set(r,l[c]=z(r,n))}return{c(){e=$("ul");for(let c=0;c<l.length;c+=1)l[c].c();a=S(),this.h()},l(c){e=w(c,"UL",{class:!0});var n=T(e);for(let r=0;r<l.length;r+=1)l[r].l(n);a=j(n),n.forEach(d),this.h()},h(){y(e,"class","list-none m-0 flex flex-col gap-1")},m(c,n){g(c,e,n);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null);E(e,a),i=!0},p(c,n){n&5&&(f=A(Object.entries(c[9])),P(),l=Y(l,n,m,1,c,f,t,e,Z,z,a,F),R())},i(c){if(!i){for(let n=0;n<f.length;n+=1)k(l[n]);i=!0}},o(c){for(let n=0;n<l.length;n+=1)v(l[n]);i=!1},d(c){c&&d(e);for(let n=0;n<l.length;n+=1)l[n].d()}}}function W(h){let e,l;return e=new ae({props:{columns:h[13].columns,rowClass:"ml-6 "}}),{c(){x(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,a){H(e,t,a),l=!0},p:O,i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){M(e,t)}}}function z(h,e){let l,t,a,i,f=e[12]+"",m,c,n,r,_,s;a=new ee({props:{src:le,class:"text-gray-700 w-5 h-5 mr-1"}});function p(){return e[5](e[13])}let o=e[0]===e[13]&&W(e);return{key:h,first:null,c(){l=$("li"),t=$("button"),x(a.$$.fragment),i=S(),m=L(f),c=S(),o&&o.c(),n=I(),this.h()},l(u){l=w(u,"LI",{class:!0});var b=T(l);t=w(b,"BUTTON",{class:!0});var C=T(t);D(a.$$.fragment,C),i=j(C),m=N(C,f),C.forEach(d),b.forEach(d),c=j(u),o&&o.l(u),n=I(),this.h()},h(){y(t,"class","bg-gray-200 px-2 py-1 rounded flex w-full hover:bg-blue-200"),q(t,"bg-blue-200",e[0]===e[13]),y(l,"class","font-mono m-0 text-sm font-bold ml-3"),this.first=l},m(u,b){g(u,l,b),E(l,t),H(a,t,null),E(t,i),E(t,m),g(u,c,b),o&&o.m(u,b),g(u,n,b),r=!0,_||(s=K(t,"click",p),_=!0)},p(u,b){e=u,(!r||b&5)&&q(t,"bg-blue-200",e[0]===e[13]),e[0]===e[13]?o?(o.p(e,b),b&1&&k(o,1)):(o=W(e),o.c(),k(o,1),o.m(n.parentNode,n)):o&&(P(),v(o,1,1,()=>{o=null}),R())},i(u){r||(k(a.$$.fragment,u),k(o),r=!0)},o(u){v(a.$$.fragment,u),v(o),r=!1},d(u){u&&(d(l),d(c),d(n)),M(a),o&&o.d(u),_=!1,s()}}}function G(h,e){let l,t,a,i,f=e[8]+"",m,c,n,r,_,s;a=new ee({props:{src:te,class:"text-white w-5 h-5 mr-1"}});function p(){return e[4](e[8])}let o=e[1]===e[8]&&V(e);return{key:h,first:null,c(){l=$("li"),t=$("button"),x(a.$$.fragment),i=S(),m=L(f),c=S(),o&&o.c(),n=I(),this.h()},l(u){l=w(u,"LI",{class:!0});var b=T(l);t=w(b,"BUTTON",{class:!0});var C=T(t);D(a.$$.fragment,C),i=j(C),m=N(C,f),C.forEach(d),b.forEach(d),c=j(u),o&&o.l(u),n=I(),this.h()},h(){y(t,"class","bg-gray-500 px-2 py-1 rounded font-bold flex w-full hover:bg-blue-500"),q(t,"bg-blue-500",e[1]===e[8]),y(l,"class","font-mono m-0 text-sm text-white"),this.first=l},m(u,b){g(u,l,b),E(l,t),H(a,t,null),E(t,i),E(t,m),g(u,c,b),o&&o.m(u,b),g(u,n,b),r=!0,_||(s=K(t,"click",p),_=!0)},p(u,b){e=u,(!r||b&6)&&q(t,"bg-blue-500",e[1]===e[8]),e[1]===e[8]?o?(o.p(e,b),b&2&&k(o,1)):(o=V(e),o.c(),k(o,1),o.m(n.parentNode,n)):o&&(P(),v(o,1,1,()=>{o=null}),R())},i(u){r||(k(a.$$.fragment,u),k(o),r=!0)},o(u){v(a.$$.fragment,u),v(o),r=!1},d(u){u&&(d(l),d(c),d(n)),M(a),o&&o.d(u),_=!1,s()}}}function ce(h){let e;return{c(){e=L("Loading Schema Information...")},l(l){e=N(l,"Loading Schema Information...")},m(l,t){g(l,e,t)},p:O,i:O,o:O,d(l){l&&d(e)}}}function ie(h){let e,l,t={ctx:h,current:null,token:null,hasCatch:!0,pending:ce,then:se,catch:oe,value:7,error:16,blocks:[,,,]};return ne(h[2](),t),{c(){e=I(),t.block.c()},l(a){e=I(),t.block.l(a)},m(a,i){g(a,e,i),t.block.m(a,t.anchor=i),t.mount=()=>e.parentNode,t.anchor=e,l=!0},p(a,[i]){h=a,re(t,h,i)},i(a){l||(k(t.block),l=!0)},o(a){for(let i=0;i<3;i+=1){const f=t.blocks[i];v(f)}l=!1},d(a){a&&d(e),t.block.d(a),t.token=null,t=null}}}function ue(h,e,l){let{data:t}=e,{__db:a}=t;async function i(){const r=await a.query("SELECT * FROM information_schema.tables WHERE table_catalog = 'memory' AND table_name != 'stats'"),_={};return await Promise.all(r.map(async s=>{const p=await a.query(`SELECT * FROM information_schema.columns WHERE table_name = '${s.table_name}' AND table_schema = '${s.table_schema}'`);_[s.table_schema]||(_[s.table_schema]={}),_[s.table_schema][s.table_name]={table:s,columns:p}})),_}let f="",m="";const c=r=>{l(1,m=m===r?"":r),l(0,f="")},n=r=>{l(0,f=f===r?"":r)};return h.$$set=r=>{"data"in r&&l(3,t=r.data)},[f,m,i,t,c,n]}class fe extends Q{constructor(e){super(),X(this,e,ue,ie,J,{data:3})}}function he(h){let e,l="Project Schema",t,a,i="This page details the tables and columns that are currently loaded in your project.",f,m,c="Sources",n,r,_;return r=new fe({props:{data:h[0]}}),{c(){e=$("h1"),e.textContent=l,t=S(),a=$("p"),a.textContent=i,f=S(),m=$("h2"),m.textContent=c,n=S(),x(r.$$.fragment),this.h()},l(s){e=w(s,"H1",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-15777oi"&&(e.textContent=l),t=j(s),a=w(s,"P",{class:!0,"data-svelte-h":!0}),U(a)!=="svelte-ak948l"&&(a.textContent=i),f=j(s),m=w(s,"H2",{class:!0,"data-svelte-h":!0}),U(m)!=="svelte-9qt1ro"&&(m.textContent=c),n=j(s),D(r.$$.fragment,s),this.h()},h(){y(e,"class","markdown"),y(a,"class","markdown"),y(m,"class","markdown")},m(s,p){g(s,e,p),g(s,t,p),g(s,a,p),g(s,f,p),g(s,m,p),g(s,n,p),H(r,s,p),_=!0},p(s,[p]){const o={};p&1&&(o.data=s[0]),r.$set(o)},i(s){_||(k(r.$$.fragment,s),_=!0)},o(s){v(r.$$.fragment,s),_=!1},d(s){s&&(d(e),d(t),d(a),d(f),d(m),d(n)),M(r,s)}}}function me(h,e,l){let{data:t}=e;return h.$$set=a=>{"data"in a&&l(0,t=a.data)},[t]}class ke extends Q{constructor(e){super(),X(this,e,me,he,J,{data:0})}}export{ke as component};