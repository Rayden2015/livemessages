(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ll(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const we={},Kr=[],en=()=>{},py=()=>!1,ta=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ul=t=>t.startsWith("onUpdate:"),qe=Object.assign,hl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gy=Object.prototype.hasOwnProperty,ve=(t,e)=>gy.call(t,e),ne=Array.isArray,zr=t=>na(t)==="[object Map]",Uf=t=>na(t)==="[object Set]",le=t=>typeof t=="function",De=t=>typeof t=="string",Yn=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Bf=t=>(Pe(t)||le(t))&&le(t.then)&&le(t.catch),$f=Object.prototype.toString,na=t=>$f.call(t),my=t=>na(t).slice(8,-1),jf=t=>na(t)==="[object Object]",dl=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ks=ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ra=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_y=/-(\w)/g,Wn=ra(t=>t.replace(_y,(e,n)=>n?n.toUpperCase():"")),yy=/\B([A-Z])/g,Jn=ra(t=>t.replace(yy,"-$1").toLowerCase()),qf=ra(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qa=ra(t=>t?`on${qf(t)}`:""),Bn=(t,e)=>!Object.is(t,e),ho=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Hf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Rc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},vy=t=>{const e=De(t)?Number(t):NaN;return isNaN(e)?t:e};let vh;const sa=()=>vh||(vh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ia(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=De(r)?wy(r):ia(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(De(t)||Pe(t))return t}const Ty=/;(?![^(]*\))/g,Iy=/:([^]+)/,Ey=/\/\*[^]*?\*\//g;function wy(t){const e={};return t.replace(Ey,"").split(Ty).forEach(n=>{if(n){const r=n.split(Iy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function oi(t){let e="";if(De(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=oi(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ay="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",by=ll(Ay);function Wf(t){return!!t||t===""}const Kf=t=>!!(t&&t.__v_isRef===!0),Jt=t=>De(t)?t:t==null?"":ne(t)||Pe(t)&&(t.toString===$f||!le(t.toString))?Kf(t)?Jt(t.value):JSON.stringify(t,zf,2):String(t),zf=(t,e)=>Kf(e)?zf(t,e.value):zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ya(r,i)+" =>"]=s,n),{})}:Uf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ya(n))}:Yn(e)?Ya(e):Pe(e)&&!ne(e)&&!jf(e)?String(e):e,Ya=(t,e="")=>{var n;return Yn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class Ry{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){wt=this}off(){wt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Sy(){return wt}let be;const Ja=new WeakSet;class Gf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&wt.active&&wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ja.has(this)&&(Ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Th(this),Jf(this);const e=be,n=qt;be=this,qt=!0;try{return this.fn()}finally{Xf(this),be=e,qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)gl(e);this.deps=this.depsTail=void 0,Th(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sc(this)&&this.run()}get dirty(){return Sc(this)}}let Qf=0,zs,Gs;function Yf(t,e=!1){if(t.flags|=8,e){t.next=Gs,Gs=t;return}t.next=zs,zs=t}function fl(){Qf++}function pl(){if(--Qf>0)return;if(Gs){let e=Gs;for(Gs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zs;){let e=zs;for(zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Jf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),gl(r),Py(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Sc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Zf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Zf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ai))return;t.globalVersion=ai;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Sc(t)){t.flags&=-3;return}const n=be,r=qt;be=t,qt=!0;try{Jf(t);const s=t.fn(t._value);(e.version===0||Bn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{be=n,qt=r,Xf(t),t.flags&=-3}}function gl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)gl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Py(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let qt=!0;const ep=[];function Xn(){ep.push(qt),qt=!1}function Zn(){const t=ep.pop();qt=t===void 0?!0:t}function Th(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=be;be=void 0;try{e()}finally{be=n}}}let ai=0;class Cy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ml{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!be||!qt||be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==be)n=this.activeLink=new Cy(be,this),be.deps?(n.prevDep=be.depsTail,be.depsTail.nextDep=n,be.depsTail=n):be.deps=be.depsTail=n,tp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=be.depsTail,n.nextDep=void 0,be.depsTail.nextDep=n,be.depsTail=n,be.deps===n&&(be.deps=r)}return n}trigger(e){this.version++,ai++,this.notify(e)}notify(e){fl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{pl()}}}function tp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)tp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Pc=new WeakMap,yr=Symbol(""),Cc=Symbol(""),ci=Symbol("");function rt(t,e,n){if(qt&&be){let r=Pc.get(t);r||Pc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ml),s.map=r,s.key=n),s.track()}}function fn(t,e,n,r,s,i){const o=Pc.get(t);if(!o){ai++;return}const c=l=>{l&&l.trigger()};if(fl(),e==="clear")o.forEach(c);else{const l=ne(t),h=l&&dl(n);if(l&&n==="length"){const d=Number(r);o.forEach((p,y)=>{(y==="length"||y===ci||!Yn(y)&&y>=d)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(ci)),e){case"add":l?h&&c(o.get("length")):(c(o.get(yr)),zr(t)&&c(o.get(Cc)));break;case"delete":l||(c(o.get(yr)),zr(t)&&c(o.get(Cc)));break;case"set":zr(t)&&c(o.get(yr));break}}pl()}function Ur(t){const e=_e(t);return e===t?e:(rt(e,"iterate",ci),Dt(t)?e:e.map(st))}function oa(t){return rt(t=_e(t),"iterate",ci),t}const ky={__proto__:null,[Symbol.iterator](){return Xa(this,Symbol.iterator,st)},concat(...t){return Ur(this).concat(...t.map(e=>ne(e)?Ur(e):e))},entries(){return Xa(this,"entries",t=>(t[1]=st(t[1]),t))},every(t,e){return hn(this,"every",t,e,void 0,arguments)},filter(t,e){return hn(this,"filter",t,e,n=>n.map(st),arguments)},find(t,e){return hn(this,"find",t,e,st,arguments)},findIndex(t,e){return hn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return hn(this,"findLast",t,e,st,arguments)},findLastIndex(t,e){return hn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return hn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Za(this,"includes",t)},indexOf(...t){return Za(this,"indexOf",t)},join(t){return Ur(this).join(t)},lastIndexOf(...t){return Za(this,"lastIndexOf",t)},map(t,e){return hn(this,"map",t,e,void 0,arguments)},pop(){return Os(this,"pop")},push(...t){return Os(this,"push",t)},reduce(t,...e){return Ih(this,"reduce",t,e)},reduceRight(t,...e){return Ih(this,"reduceRight",t,e)},shift(){return Os(this,"shift")},some(t,e){return hn(this,"some",t,e,void 0,arguments)},splice(...t){return Os(this,"splice",t)},toReversed(){return Ur(this).toReversed()},toSorted(t){return Ur(this).toSorted(t)},toSpliced(...t){return Ur(this).toSpliced(...t)},unshift(...t){return Os(this,"unshift",t)},values(){return Xa(this,"values",st)}};function Xa(t,e,n){const r=oa(t),s=r[e]();return r!==t&&!Dt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Ny=Array.prototype;function hn(t,e,n,r,s,i){const o=oa(t),c=o!==t&&!Dt(t),l=o[e];if(l!==Ny[e]){const p=l.apply(t,i);return c?st(p):p}let h=n;o!==t&&(c?h=function(p,y){return n.call(this,st(p),y,t)}:n.length>2&&(h=function(p,y){return n.call(this,p,y,t)}));const d=l.call(o,h,r);return c&&s?s(d):d}function Ih(t,e,n,r){const s=oa(t);let i=n;return s!==t&&(Dt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,st(c),l,t)}),s[e](i,...r)}function Za(t,e,n){const r=_e(t);rt(r,"iterate",ci);const s=r[e](...n);return(s===-1||s===!1)&&Tl(n[0])?(n[0]=_e(n[0]),r[e](...n)):s}function Os(t,e,n=[]){Xn(),fl();const r=_e(t)[e].apply(t,n);return pl(),Zn(),r}const Dy=ll("__proto__,__v_isRef,__isVue"),np=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yn));function Oy(t){Yn(t)||(t=String(t));const e=_e(this);return rt(e,"has",t),e.hasOwnProperty(t)}class rp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?qy:ap:i?op:ip).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ne(e);if(!s){let l;if(o&&(l=ky[n]))return l;if(n==="hasOwnProperty")return Oy}const c=Reflect.get(e,n,at(e)?e:r);return(Yn(n)?np.has(n):Dy(n))||(s||rt(e,"get",n),i)?c:at(c)?o&&dl(n)?c:c.value:Pe(c)?s?cp(c):yl(c):c}}class sp extends rp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Ir(i);if(!Dt(r)&&!Ir(r)&&(i=_e(i),r=_e(r)),!ne(e)&&at(i)&&!at(r))return l?!1:(i.value=r,!0)}const o=ne(e)&&dl(n)?Number(n)<e.length:ve(e,n),c=Reflect.set(e,n,r,at(e)?e:s);return e===_e(s)&&(o?Bn(r,i)&&fn(e,"set",n,r):fn(e,"add",n,r)),c}deleteProperty(e,n){const r=ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&fn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Yn(n)||!np.has(n))&&rt(e,"has",n),r}ownKeys(e){return rt(e,"iterate",ne(e)?"length":yr),Reflect.ownKeys(e)}}class Vy extends rp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const My=new sp,Ly=new Vy,xy=new sp(!0);const kc=t=>t,to=t=>Reflect.getPrototypeOf(t);function Fy(t,e,n){return function(...r){const s=this.__v_raw,i=_e(s),o=zr(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),d=n?kc:e?Nc:st;return!e&&rt(i,"iterate",l?Cc:yr),{next(){const{value:p,done:y}=h.next();return y?{value:p,done:y}:{value:c?[d(p[0]),d(p[1])]:d(p),done:y}},[Symbol.iterator](){return this}}}}function no(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Uy(t,e){const n={get(s){const i=this.__v_raw,o=_e(i),c=_e(s);t||(Bn(s,c)&&rt(o,"get",s),rt(o,"get",c));const{has:l}=to(o),h=e?kc:t?Nc:st;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&rt(_e(s),"iterate",yr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=_e(i),c=_e(s);return t||(Bn(s,c)&&rt(o,"has",s),rt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=_e(c),h=e?kc:t?Nc:st;return!t&&rt(l,"iterate",yr),c.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return qe(n,t?{add:no("add"),set:no("set"),delete:no("delete"),clear:no("clear")}:{add(s){!e&&!Dt(s)&&!Ir(s)&&(s=_e(s));const i=_e(this);return to(i).has.call(i,s)||(i.add(s),fn(i,"add",s,s)),this},set(s,i){!e&&!Dt(i)&&!Ir(i)&&(i=_e(i));const o=_e(this),{has:c,get:l}=to(o);let h=c.call(o,s);h||(s=_e(s),h=c.call(o,s));const d=l.call(o,s);return o.set(s,i),h?Bn(i,d)&&fn(o,"set",s,i):fn(o,"add",s,i),this},delete(s){const i=_e(this),{has:o,get:c}=to(i);let l=o.call(i,s);l||(s=_e(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&fn(i,"delete",s,void 0),h},clear(){const s=_e(this),i=s.size!==0,o=s.clear();return i&&fn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Fy(s,t,e)}),n}function _l(t,e){const n=Uy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ve(n,s)&&s in r?n:r,s,i)}const By={get:_l(!1,!1)},$y={get:_l(!1,!0)},jy={get:_l(!0,!1)};const ip=new WeakMap,op=new WeakMap,ap=new WeakMap,qy=new WeakMap;function Hy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wy(t){return t.__v_skip||!Object.isExtensible(t)?0:Hy(my(t))}function yl(t){return Ir(t)?t:vl(t,!1,My,By,ip)}function Ky(t){return vl(t,!1,xy,$y,op)}function cp(t){return vl(t,!0,Ly,jy,ap)}function vl(t,e,n,r,s){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Wy(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Gr(t){return Ir(t)?Gr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ir(t){return!!(t&&t.__v_isReadonly)}function Dt(t){return!!(t&&t.__v_isShallow)}function Tl(t){return t?!!t.__v_raw:!1}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function zy(t){return!ve(t,"__v_skip")&&Object.isExtensible(t)&&Hf(t,"__v_skip",!0),t}const st=t=>Pe(t)?yl(t):t,Nc=t=>Pe(t)?cp(t):t;function at(t){return t?t.__v_isRef===!0:!1}function Ut(t){return Gy(t,!1)}function Gy(t,e){return at(t)?t:new Qy(t,e)}class Qy{constructor(e,n){this.dep=new ml,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:_e(e),this._value=n?e:st(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Dt(e)||Ir(e);e=r?e:_e(e),Bn(e,n)&&(this._rawValue=e,this._value=r?e:st(e),this.dep.trigger())}}function Ls(t){return at(t)?t.value:t}const Yy={get:(t,e,n)=>e==="__v_raw"?t:Ls(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return at(s)&&!at(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function lp(t){return Gr(t)?t:new Proxy(t,Yy)}class Jy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ml(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ai-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return Yf(this,!0),!0}get value(){const e=this.dep.track();return Zf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Xy(t,e,n=!1){let r,s;return le(t)?r=t:(r=t.get,s=t.set),new Jy(r,s,n)}const ro={},Co=new WeakMap;let hr;function Zy(t,e=!1,n=hr){if(n){let r=Co.get(n);r||Co.set(n,r=[]),r.push(t)}}function ev(t,e,n=we){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=U=>s?U:Dt(U)||s===!1||s===0?pn(U,1):pn(U);let d,p,y,T,P=!1,D=!1;if(at(t)?(p=()=>t.value,P=Dt(t)):Gr(t)?(p=()=>h(t),P=!0):ne(t)?(D=!0,P=t.some(U=>Gr(U)||Dt(U)),p=()=>t.map(U=>{if(at(U))return U.value;if(Gr(U))return h(U);if(le(U))return l?l(U,2):U()})):le(t)?e?p=l?()=>l(t,2):t:p=()=>{if(y){Xn();try{y()}finally{Zn()}}const U=hr;hr=d;try{return l?l(t,3,[T]):t(T)}finally{hr=U}}:p=en,e&&s){const U=p,se=s===!0?1/0:s;p=()=>pn(U(),se)}const k=Sy(),$=()=>{d.stop(),k&&k.active&&hl(k.effects,d)};if(i&&e){const U=e;e=(...se)=>{U(...se),$()}}let K=D?new Array(t.length).fill(ro):ro;const z=U=>{if(!(!(d.flags&1)||!d.dirty&&!U))if(e){const se=d.run();if(s||P||(D?se.some((ie,R)=>Bn(ie,K[R])):Bn(se,K))){y&&y();const ie=hr;hr=d;try{const R=[se,K===ro?void 0:D&&K[0]===ro?[]:K,T];l?l(e,3,R):e(...R),K=se}finally{hr=ie}}}else d.run()};return c&&c(z),d=new Gf(p),d.scheduler=o?()=>o(z,!1):z,T=U=>Zy(U,!1,d),y=d.onStop=()=>{const U=Co.get(d);if(U){if(l)l(U,4);else for(const se of U)se();Co.delete(d)}},e?r?z(!0):K=d.run():o?o(z.bind(null,!0),!0):d.run(),$.pause=d.pause.bind(d),$.resume=d.resume.bind(d),$.stop=$,$}function pn(t,e=1/0,n){if(e<=0||!Pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,at(t))pn(t.value,e,n);else if(ne(t))for(let r=0;r<t.length;r++)pn(t[r],e,n);else if(Uf(t)||zr(t))t.forEach(r=>{pn(r,e,n)});else if(jf(t)){for(const r in t)pn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&pn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bi(t,e,n,r){try{return r?t(...r):t()}catch(s){aa(s,e,n)}}function Wt(t,e,n,r){if(le(t)){const s=bi(t,e,n,r);return s&&Bf(s)&&s.catch(i=>{aa(i,e,n)}),s}if(ne(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Wt(t[i],e,n,r));return s}}function aa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||we;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,h)===!1)return}c=c.parent}if(i){Xn(),bi(i,null,10,[t,l,h]),Zn();return}}tv(t,n,s,r,o)}function tv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const ft=[];let Xt=-1;const Qr=[];let On=null,$r=0;const up=Promise.resolve();let ko=null;function hp(t){const e=ko||up;return t?e.then(this?t.bind(this):t):e}function nv(t){let e=Xt+1,n=ft.length;for(;e<n;){const r=e+n>>>1,s=ft[r],i=li(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Il(t){if(!(t.flags&1)){const e=li(t),n=ft[ft.length-1];!n||!(t.flags&2)&&e>=li(n)?ft.push(t):ft.splice(nv(e),0,t),t.flags|=1,dp()}}function dp(){ko||(ko=up.then(pp))}function rv(t){ne(t)?Qr.push(...t):On&&t.id===-1?On.splice($r+1,0,t):t.flags&1||(Qr.push(t),t.flags|=1),dp()}function Eh(t,e,n=Xt+1){for(;n<ft.length;n++){const r=ft[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ft.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function fp(t){if(Qr.length){const e=[...new Set(Qr)].sort((n,r)=>li(n)-li(r));if(Qr.length=0,On){On.push(...e);return}for(On=e,$r=0;$r<On.length;$r++){const n=On[$r];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}On=null,$r=0}}const li=t=>t.id==null?t.flags&2?-1:1/0:t.id;function pp(t){try{for(Xt=0;Xt<ft.length;Xt++){const e=ft[Xt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xt<ft.length;Xt++){const e=ft[Xt];e&&(e.flags&=-2)}Xt=-1,ft.length=0,fp(),ko=null,(ft.length||Qr.length)&&pp()}}let At=null,gp=null;function No(t){const e=At;return At=t,gp=t&&t.type.__scopeId||null,e}function Qs(t,e=At,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Dh(-1);const i=No(e);let o;try{o=t(...s)}finally{No(i),r._d&&Dh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function fo(t,e){if(At===null)return t;const n=da(At),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=we]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&pn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function cr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Xn(),Wt(l,n,8,[t.el,c,t,e]),Zn())}}const sv=Symbol("_vte"),mp=t=>t.__isTeleport,Vn=Symbol("_leaveCb"),so=Symbol("_enterCb");function _p(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ri(()=>{t.isMounted=!0}),bp(()=>{t.isUnmounting=!0}),t}const kt=[Function,Array],yp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},vp=t=>{const e=t.subTree;return e.component?vp(e.component):e},iv={name:"BaseTransition",props:yp,setup(t,{slots:e}){const n=zp(),r=_p();return()=>{const s=e.default&&El(e.default(),!0);if(!s||!s.length)return;const i=Tp(s),o=_e(t),{mode:c}=o;if(r.isLeaving)return ec(i);const l=wh(i);if(!l)return ec(i);let h=ui(l,o,r,n,p=>h=p);l.type!==mt&&Er(l,h);let d=n.subTree&&wh(n.subTree);if(d&&d.type!==mt&&!fr(l,d)&&vp(n).type!==mt){let p=ui(d,o,r,n);if(Er(d,p),c==="out-in"&&l.type!==mt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},ec(i);c==="in-out"&&l.type!==mt?p.delayLeave=(y,T,P)=>{const D=Ip(r,d);D[String(d.key)]=d,y[Vn]=()=>{T(),y[Vn]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{P(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Tp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==mt){e=n;break}}return e}const ov=iv;function Ip(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ui(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:y,onLeave:T,onAfterLeave:P,onLeaveCancelled:D,onBeforeAppear:k,onAppear:$,onAfterAppear:K,onAppearCancelled:z}=e,U=String(t.key),se=Ip(n,t),ie=(m,w)=>{m&&Wt(m,r,9,w)},R=(m,w)=>{const A=w[1];ie(m,w),ne(m)?m.every(E=>E.length<=1)&&A():m.length<=1&&A()},_={mode:o,persisted:c,beforeEnter(m){let w=l;if(!n.isMounted)if(i)w=k||l;else return;m[Vn]&&m[Vn](!0);const A=se[U];A&&fr(t,A)&&A.el[Vn]&&A.el[Vn](),ie(w,[m])},enter(m){let w=h,A=d,E=p;if(!n.isMounted)if(i)w=$||h,A=K||d,E=z||p;else return;let v=!1;const Ae=m[so]=lt=>{v||(v=!0,lt?ie(E,[m]):ie(A,[m]),_.delayedLeave&&_.delayedLeave(),m[so]=void 0)};w?R(w,[m,Ae]):Ae()},leave(m,w){const A=String(t.key);if(m[so]&&m[so](!0),n.isUnmounting)return w();ie(y,[m]);let E=!1;const v=m[Vn]=Ae=>{E||(E=!0,w(),Ae?ie(D,[m]):ie(P,[m]),m[Vn]=void 0,se[A]===t&&delete se[A])};se[A]=t,T?R(T,[m,v]):v()},clone(m){const w=ui(m,e,n,r,s);return s&&s(w),w}};return _}function ec(t){if(ca(t))return t=Kn(t),t.children=null,t}function wh(t){if(!ca(t))return mp(t.type)&&t.children?Tp(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&le(n.default))return n.default()}}function Er(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Er(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function El(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===gt?(o.patchFlag&128&&s++,r=r.concat(El(o.children,e,c))):(e||o.type!==mt)&&r.push(c!=null?Kn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ep(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Do(t,e,n,r,s=!1){if(ne(t)){t.forEach((P,D)=>Do(P,e&&(ne(e)?e[D]:e),n,r,s));return}if(Ys(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Do(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?da(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===we?c.refs={}:c.refs,p=c.setupState,y=_e(p),T=p===we?()=>!1:P=>ve(y,P);if(h!=null&&h!==l&&(De(h)?(d[h]=null,T(h)&&(p[h]=null)):at(h)&&(h.value=null)),le(l))bi(l,c,12,[o,d]);else{const P=De(l),D=at(l);if(P||D){const k=()=>{if(t.f){const $=P?T(l)?p[l]:d[l]:l.value;s?ne($)&&hl($,i):ne($)?$.includes(i)||$.push(i):P?(d[l]=[i],T(l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else P?(d[l]=o,T(l)&&(p[l]=o)):D&&(l.value=o,t.k&&(d[t.k]=o))};o?(k.id=-1,Et(k,n)):k()}}}sa().requestIdleCallback;sa().cancelIdleCallback;const Ys=t=>!!t.type.__asyncLoader,ca=t=>t.type.__isKeepAlive;function av(t,e){wp(t,"a",e)}function cv(t,e){wp(t,"da",e)}function wp(t,e,n=ot){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(la(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ca(s.parent.vnode)&&lv(r,e,n,s),s=s.parent}}function lv(t,e,n,r){const s=la(e,t,r,!0);Rp(()=>{hl(r[e],s)},n)}function la(t,e,n=ot,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Xn();const c=Si(n),l=Wt(e,n,t,o);return c(),Zn(),l});return r?s.unshift(i):s.push(i),i}}const An=t=>(e,n=ot)=>{(!di||t==="sp")&&la(t,(...r)=>e(...r),n)},uv=An("bm"),Ri=An("m"),hv=An("bu"),Ap=An("u"),bp=An("bum"),Rp=An("um"),dv=An("sp"),fv=An("rtg"),pv=An("rtc");function gv(t,e=ot){la("ec",t,e)}const mv=Symbol.for("v-ndc");function _v(t,e,n,r){let s;const i=n,o=ne(t);if(o||De(t)){const c=o&&Gr(t);let l=!1;c&&(l=!Dt(t),t=oa(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(l?st(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Pe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}const Dc=t=>t?Gp(t)?da(t):Dc(t.parent):null,Js=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dc(t.parent),$root:t=>Dc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Pp(t),$forceUpdate:t=>t.f||(t.f=()=>{Il(t.update)}),$nextTick:t=>t.n||(t.n=hp.bind(t.proxy)),$watch:t=>Uv.bind(t)}),tc=(t,e)=>t!==we&&!t.__isScriptSetup&&ve(t,e),yv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const T=o[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(tc(r,e))return o[e]=1,r[e];if(s!==we&&ve(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&ve(h,e))return o[e]=3,i[e];if(n!==we&&ve(n,e))return o[e]=4,n[e];Oc&&(o[e]=0)}}const d=Js[e];let p,y;if(d)return e==="$attrs"&&rt(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==we&&ve(n,e))return o[e]=4,n[e];if(y=l.config.globalProperties,ve(y,e))return y[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return tc(s,e)?(s[e]=n,!0):r!==we&&ve(r,e)?(r[e]=n,!0):ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==we&&ve(t,o)||tc(e,o)||(c=i[0])&&ve(c,o)||ve(r,o)||ve(Js,o)||ve(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ah(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Oc=!0;function vv(t){const e=Pp(t),n=t.proxy,r=t.ctx;Oc=!1,e.beforeCreate&&bh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:y,beforeUpdate:T,updated:P,activated:D,deactivated:k,beforeDestroy:$,beforeUnmount:K,destroyed:z,unmounted:U,render:se,renderTracked:ie,renderTriggered:R,errorCaptured:_,serverPrefetch:m,expose:w,inheritAttrs:A,components:E,directives:v,filters:Ae}=e;if(h&&Tv(h,r,null),o)for(const Te in o){const ge=o[Te];le(ge)&&(r[Te]=ge.bind(n))}if(s){const Te=s.call(n,n);Pe(Te)&&(t.data=yl(Te))}if(Oc=!0,i)for(const Te in i){const ge=i[Te],xt=le(ge)?ge.bind(n,n):le(ge.get)?ge.get.bind(n,n):en,tr=!le(ge)&&le(ge.set)?ge.set.bind(n):en,an=aT({get:xt,set:tr});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>an.value,set:Ue=>an.value=Ue})}if(c)for(const Te in c)Sp(c[Te],r,n,Te);if(l){const Te=le(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(ge=>{Rv(ge,Te[ge])})}d&&bh(d,t,"c");function Oe(Te,ge){ne(ge)?ge.forEach(xt=>Te(xt.bind(n))):ge&&Te(ge.bind(n))}if(Oe(uv,p),Oe(Ri,y),Oe(hv,T),Oe(Ap,P),Oe(av,D),Oe(cv,k),Oe(gv,_),Oe(pv,ie),Oe(fv,R),Oe(bp,K),Oe(Rp,U),Oe(dv,m),ne(w))if(w.length){const Te=t.exposed||(t.exposed={});w.forEach(ge=>{Object.defineProperty(Te,ge,{get:()=>n[ge],set:xt=>n[ge]=xt})})}else t.exposed||(t.exposed={});se&&t.render===en&&(t.render=se),A!=null&&(t.inheritAttrs=A),E&&(t.components=E),v&&(t.directives=v),m&&Ep(t)}function Tv(t,e,n=en){ne(t)&&(t=Vc(t));for(const r in t){const s=t[r];let i;Pe(s)?"default"in s?i=po(s.from||r,s.default,!0):i=po(s.from||r):i=po(s),at(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function bh(t,e,n){Wt(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sp(t,e,n,r){let s=r.includes(".")?jp(n,r):()=>n[r];if(De(t)){const i=e[t];le(i)&&go(s,i)}else if(le(t))go(s,t.bind(n));else if(Pe(t))if(ne(t))t.forEach(i=>Sp(i,e,n,r));else{const i=le(t.handler)?t.handler.bind(n):e[t.handler];le(i)&&go(s,i,t)}}function Pp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Oo(l,h,o,!0)),Oo(l,e,o)),Pe(e)&&i.set(e,l),l}function Oo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Oo(t,i,n,!0),s&&s.forEach(o=>Oo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Iv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Iv={data:Rh,props:Sh,emits:Sh,methods:xs,computed:xs,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:xs,directives:xs,watch:wv,provide:Rh,inject:Ev};function Rh(t,e){return e?t?function(){return qe(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function Ev(t,e){return xs(Vc(t),Vc(e))}function Vc(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function xs(t,e){return t?qe(Object.create(null),t,e):e}function Sh(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:qe(Object.create(null),Ah(t),Ah(e??{})):e}function wv(t,e){if(!t)return e;if(!e)return t;const n=qe(Object.create(null),t);for(const r in e)n[r]=ht(t[r],e[r]);return n}function Cp(){return{app:null,config:{isNativeTag:py,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Av=0;function bv(t,e){return function(r,s=null){le(r)||(r=qe({},r)),s!=null&&!Pe(s)&&(s=null);const i=Cp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Av++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:lT,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&le(d.install)?(o.add(d),d.install(h,...p)):le(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,y){if(!l){const T=h._ceVNode||xe(r,s);return T.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),t(T,d,y),l=!0,h._container=d,d.__vue_app__=h,da(T.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Wt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Yr;Yr=h;try{return d()}finally{Yr=p}}};return h}}let Yr=null;function Rv(t,e){if(ot){let n=ot.provides;const r=ot.parent&&ot.parent.provides;r===n&&(n=ot.provides=Object.create(r)),n[t]=e}}function po(t,e,n=!1){const r=ot||At;if(r||Yr){const s=Yr?Yr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&le(e)?e.call(r&&r.proxy):e}}const kp={},Np=()=>Object.create(kp),Dp=t=>Object.getPrototypeOf(t)===kp;function Sv(t,e,n,r=!1){const s={},i=Np();t.propsDefaults=Object.create(null),Op(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ky(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Pv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=_e(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let y=d[p];if(ua(t.emitsOptions,y))continue;const T=e[y];if(l)if(ve(i,y))T!==i[y]&&(i[y]=T,h=!0);else{const P=Wn(y);s[P]=Mc(l,c,P,T,t,!1)}else T!==i[y]&&(i[y]=T,h=!0)}}}else{Op(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!ve(e,p)&&((d=Jn(p))===p||!ve(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Mc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!ve(e,p))&&(delete i[p],h=!0)}h&&fn(t.attrs,"set","")}function Op(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ks(l))continue;const h=e[l];let d;s&&ve(s,d=Wn(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:ua(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=_e(n),h=c||we;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Mc(s,l,p,h[p],t,!ve(h,p))}}return o}function Mc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=ve(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&le(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Si(s);r=h[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Jn(n))&&(r=!0))}return r}const Cv=new WeakMap;function Vp(t,e,n=!1){const r=n?Cv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!le(t)){const d=p=>{l=!0;const[y,T]=Vp(p,e,!0);qe(o,y),T&&c.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Pe(t)&&r.set(t,Kr),Kr;if(ne(i))for(let d=0;d<i.length;d++){const p=Wn(i[d]);Ph(p)&&(o[p]=we)}else if(i)for(const d in i){const p=Wn(d);if(Ph(p)){const y=i[d],T=o[p]=ne(y)||le(y)?{type:y}:qe({},y),P=T.type;let D=!1,k=!0;if(ne(P))for(let $=0;$<P.length;++$){const K=P[$],z=le(K)&&K.name;if(z==="Boolean"){D=!0;break}else z==="String"&&(k=!1)}else D=le(P)&&P.name==="Boolean";T[0]=D,T[1]=k,(D||ve(T,"default"))&&c.push(p)}}const h=[o,c];return Pe(t)&&r.set(t,h),h}function Ph(t){return t[0]!=="$"&&!Ks(t)}const Mp=t=>t[0]==="_"||t==="$stable",wl=t=>ne(t)?t.map(Zt):[Zt(t)],kv=(t,e,n)=>{if(e._n)return e;const r=Qs((...s)=>wl(e(...s)),n);return r._c=!1,r},Lp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Mp(s))continue;const i=t[s];if(le(i))e[s]=kv(s,i,r);else if(i!=null){const o=wl(i);e[s]=()=>o}}},xp=(t,e)=>{const n=wl(e);t.slots.default=()=>n},Fp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Nv=(t,e,n)=>{const r=t.slots=Np();if(t.vnode.shapeFlag&32){const s=e._;s?(Fp(r,e,n),n&&Hf(r,"_",s,!0)):Lp(e,r)}else e&&xp(t,e)},Dv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Fp(s,e,n):(i=!e.$stable,Lp(e,s)),o=e}else e&&(xp(t,e),o={default:1});if(i)for(const c in s)!Mp(c)&&o[c]==null&&delete s[c]},Et=Kv;function Ov(t){return Vv(t)}function Vv(t,e){const n=sa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:y,setScopeId:T=en,insertStaticContent:P}=t,D=(I,b,N,L=null,V=null,x=null,H=void 0,j=null,B=!!b.dynamicChildren)=>{if(I===b)return;I&&!fr(I,b)&&(L=cn(I),Ue(I,V,x,!0),I=null),b.patchFlag===-2&&(B=!1,b.dynamicChildren=null);const{type:F,ref:Z,shapeFlag:W}=b;switch(F){case ha:k(I,b,N,L);break;case mt:$(I,b,N,L);break;case rc:I==null&&K(b,N,L,H);break;case gt:E(I,b,N,L,V,x,H,j,B);break;default:W&1?se(I,b,N,L,V,x,H,j,B):W&6?v(I,b,N,L,V,x,H,j,B):(W&64||W&128)&&F.process(I,b,N,L,V,x,H,j,B,Gt)}Z!=null&&V&&Do(Z,I&&I.ref,x,b||I,!b)},k=(I,b,N,L)=>{if(I==null)r(b.el=c(b.children),N,L);else{const V=b.el=I.el;b.children!==I.children&&h(V,b.children)}},$=(I,b,N,L)=>{I==null?r(b.el=l(b.children||""),N,L):b.el=I.el},K=(I,b,N,L)=>{[I.el,I.anchor]=P(I.children,b,N,L,I.el,I.anchor)},z=({el:I,anchor:b},N,L)=>{let V;for(;I&&I!==b;)V=y(I),r(I,N,L),I=V;r(b,N,L)},U=({el:I,anchor:b})=>{let N;for(;I&&I!==b;)N=y(I),s(I),I=N;s(b)},se=(I,b,N,L,V,x,H,j,B)=>{b.type==="svg"?H="svg":b.type==="math"&&(H="mathml"),I==null?ie(b,N,L,V,x,H,j,B):m(I,b,V,x,H,j,B)},ie=(I,b,N,L,V,x,H,j)=>{let B,F;const{props:Z,shapeFlag:W,transition:J,dirs:te}=I;if(B=I.el=o(I.type,x,Z&&Z.is,Z),W&8?d(B,I.children):W&16&&_(I.children,B,null,L,V,nc(I,x),H,j),te&&cr(I,null,L,"created"),R(B,I,I.scopeId,H,L),Z){for(const ce in Z)ce!=="value"&&!Ks(ce)&&i(B,ce,null,Z[ce],x,L);"value"in Z&&i(B,"value",null,Z.value,x),(F=Z.onVnodeBeforeMount)&&Qt(F,L,I)}te&&cr(I,null,L,"beforeMount");const ee=Mv(V,J);ee&&J.beforeEnter(B),r(B,b,N),((F=Z&&Z.onVnodeMounted)||ee||te)&&Et(()=>{F&&Qt(F,L,I),ee&&J.enter(B),te&&cr(I,null,L,"mounted")},V)},R=(I,b,N,L,V)=>{if(N&&T(I,N),L)for(let x=0;x<L.length;x++)T(I,L[x]);if(V){let x=V.subTree;if(b===x||Hp(x.type)&&(x.ssContent===b||x.ssFallback===b)){const H=V.vnode;R(I,H,H.scopeId,H.slotScopeIds,V.parent)}}},_=(I,b,N,L,V,x,H,j,B=0)=>{for(let F=B;F<I.length;F++){const Z=I[F]=j?Mn(I[F]):Zt(I[F]);D(null,Z,b,N,L,V,x,H,j)}},m=(I,b,N,L,V,x,H)=>{const j=b.el=I.el;let{patchFlag:B,dynamicChildren:F,dirs:Z}=b;B|=I.patchFlag&16;const W=I.props||we,J=b.props||we;let te;if(N&&lr(N,!1),(te=J.onVnodeBeforeUpdate)&&Qt(te,N,b,I),Z&&cr(b,I,N,"beforeUpdate"),N&&lr(N,!0),(W.innerHTML&&J.innerHTML==null||W.textContent&&J.textContent==null)&&d(j,""),F?w(I.dynamicChildren,F,j,N,L,nc(b,V),x):H||ge(I,b,j,null,N,L,nc(b,V),x,!1),B>0){if(B&16)A(j,W,J,N,V);else if(B&2&&W.class!==J.class&&i(j,"class",null,J.class,V),B&4&&i(j,"style",W.style,J.style,V),B&8){const ee=b.dynamicProps;for(let ce=0;ce<ee.length;ce++){const fe=ee[ce],Je=W[fe],He=J[fe];(He!==Je||fe==="value")&&i(j,fe,Je,He,V,N)}}B&1&&I.children!==b.children&&d(j,b.children)}else!H&&F==null&&A(j,W,J,N,V);((te=J.onVnodeUpdated)||Z)&&Et(()=>{te&&Qt(te,N,b,I),Z&&cr(b,I,N,"updated")},L)},w=(I,b,N,L,V,x,H)=>{for(let j=0;j<b.length;j++){const B=I[j],F=b[j],Z=B.el&&(B.type===gt||!fr(B,F)||B.shapeFlag&70)?p(B.el):N;D(B,F,Z,null,L,V,x,H,!0)}},A=(I,b,N,L,V)=>{if(b!==N){if(b!==we)for(const x in b)!Ks(x)&&!(x in N)&&i(I,x,b[x],null,V,L);for(const x in N){if(Ks(x))continue;const H=N[x],j=b[x];H!==j&&x!=="value"&&i(I,x,j,H,V,L)}"value"in N&&i(I,"value",b.value,N.value,V)}},E=(I,b,N,L,V,x,H,j,B)=>{const F=b.el=I?I.el:c(""),Z=b.anchor=I?I.anchor:c("");let{patchFlag:W,dynamicChildren:J,slotScopeIds:te}=b;te&&(j=j?j.concat(te):te),I==null?(r(F,N,L),r(Z,N,L),_(b.children||[],N,Z,V,x,H,j,B)):W>0&&W&64&&J&&I.dynamicChildren?(w(I.dynamicChildren,J,N,V,x,H,j),(b.key!=null||V&&b===V.subTree)&&Up(I,b,!0)):ge(I,b,N,Z,V,x,H,j,B)},v=(I,b,N,L,V,x,H,j,B)=>{b.slotScopeIds=j,I==null?b.shapeFlag&512?V.ctx.activate(b,N,L,H,B):Ae(b,N,L,V,x,H,B):lt(I,b,B)},Ae=(I,b,N,L,V,x,H)=>{const j=I.component=tT(I,L,V);if(ca(I)&&(j.ctx.renderer=Gt),nT(j,!1,H),j.asyncDep){if(V&&V.registerDep(j,Oe,H),!I.el){const B=j.subTree=xe(mt);$(null,B,b,N)}}else Oe(j,I,b,N,V,x,H)},lt=(I,b,N)=>{const L=b.component=I.component;if(Hv(I,b,N))if(L.asyncDep&&!L.asyncResolved){Te(L,b,N);return}else L.next=b,L.update();else b.el=I.el,L.vnode=b},Oe=(I,b,N,L,V,x,H)=>{const j=()=>{if(I.isMounted){let{next:W,bu:J,u:te,parent:ee,vnode:ce}=I;{const Xe=Bp(I);if(Xe){W&&(W.el=ce.el,Te(I,W,H)),Xe.asyncDep.then(()=>{I.isUnmounted||j()});return}}let fe=W,Je;lr(I,!1),W?(W.el=ce.el,Te(I,W,H)):W=ce,J&&ho(J),(Je=W.props&&W.props.onVnodeBeforeUpdate)&&Qt(Je,ee,W,ce),lr(I,!0);const He=kh(I),Pt=I.subTree;I.subTree=He,D(Pt,He,p(Pt.el),cn(Pt),I,V,x),W.el=He.el,fe===null&&Wv(I,He.el),te&&Et(te,V),(Je=W.props&&W.props.onVnodeUpdated)&&Et(()=>Qt(Je,ee,W,ce),V)}else{let W;const{el:J,props:te}=b,{bm:ee,m:ce,parent:fe,root:Je,type:He}=I,Pt=Ys(b);lr(I,!1),ee&&ho(ee),!Pt&&(W=te&&te.onVnodeBeforeMount)&&Qt(W,fe,b),lr(I,!0);{Je.ce&&Je.ce._injectChildStyle(He);const Xe=I.subTree=kh(I);D(null,Xe,N,L,I,V,x),b.el=Xe.el}if(ce&&Et(ce,V),!Pt&&(W=te&&te.onVnodeMounted)){const Xe=b;Et(()=>Qt(W,fe,Xe),V)}(b.shapeFlag&256||fe&&Ys(fe.vnode)&&fe.vnode.shapeFlag&256)&&I.a&&Et(I.a,V),I.isMounted=!0,b=N=L=null}};I.scope.on();const B=I.effect=new Gf(j);I.scope.off();const F=I.update=B.run.bind(B),Z=I.job=B.runIfDirty.bind(B);Z.i=I,Z.id=I.uid,B.scheduler=()=>Il(Z),lr(I,!0),F()},Te=(I,b,N)=>{b.component=I;const L=I.vnode.props;I.vnode=b,I.next=null,Pv(I,b.props,L,N),Dv(I,b.children,N),Xn(),Eh(I),Zn()},ge=(I,b,N,L,V,x,H,j,B=!1)=>{const F=I&&I.children,Z=I?I.shapeFlag:0,W=b.children,{patchFlag:J,shapeFlag:te}=b;if(J>0){if(J&128){tr(F,W,N,L,V,x,H,j,B);return}else if(J&256){xt(F,W,N,L,V,x,H,j,B);return}}te&8?(Z&16&&rr(F,V,x),W!==F&&d(N,W)):Z&16?te&16?tr(F,W,N,L,V,x,H,j,B):rr(F,V,x,!0):(Z&8&&d(N,""),te&16&&_(W,N,L,V,x,H,j,B))},xt=(I,b,N,L,V,x,H,j,B)=>{I=I||Kr,b=b||Kr;const F=I.length,Z=b.length,W=Math.min(F,Z);let J;for(J=0;J<W;J++){const te=b[J]=B?Mn(b[J]):Zt(b[J]);D(I[J],te,N,null,V,x,H,j,B)}F>Z?rr(I,V,x,!0,!1,W):_(b,N,L,V,x,H,j,B,W)},tr=(I,b,N,L,V,x,H,j,B)=>{let F=0;const Z=b.length;let W=I.length-1,J=Z-1;for(;F<=W&&F<=J;){const te=I[F],ee=b[F]=B?Mn(b[F]):Zt(b[F]);if(fr(te,ee))D(te,ee,N,null,V,x,H,j,B);else break;F++}for(;F<=W&&F<=J;){const te=I[W],ee=b[J]=B?Mn(b[J]):Zt(b[J]);if(fr(te,ee))D(te,ee,N,null,V,x,H,j,B);else break;W--,J--}if(F>W){if(F<=J){const te=J+1,ee=te<Z?b[te].el:L;for(;F<=J;)D(null,b[F]=B?Mn(b[F]):Zt(b[F]),N,ee,V,x,H,j,B),F++}}else if(F>J)for(;F<=W;)Ue(I[F],V,x,!0),F++;else{const te=F,ee=F,ce=new Map;for(F=ee;F<=J;F++){const We=b[F]=B?Mn(b[F]):Zt(b[F]);We.key!=null&&ce.set(We.key,F)}let fe,Je=0;const He=J-ee+1;let Pt=!1,Xe=0;const Rn=new Array(He);for(F=0;F<He;F++)Rn[F]=0;for(F=te;F<=W;F++){const We=I[F];if(Je>=He){Ue(We,V,x,!0);continue}let Ct;if(We.key!=null)Ct=ce.get(We.key);else for(fe=ee;fe<=J;fe++)if(Rn[fe-ee]===0&&fr(We,b[fe])){Ct=fe;break}Ct===void 0?Ue(We,V,x,!0):(Rn[Ct-ee]=F+1,Ct>=Xe?Xe=Ct:Pt=!0,D(We,b[Ct],N,null,V,x,H,j,B),Je++)}const Ts=Pt?Lv(Rn):Kr;for(fe=Ts.length-1,F=He-1;F>=0;F--){const We=ee+F,Ct=b[We],Ui=We+1<Z?b[We+1].el:L;Rn[F]===0?D(null,Ct,N,Ui,V,x,H,j,B):Pt&&(fe<0||F!==Ts[fe]?an(Ct,N,Ui,2):fe--)}}},an=(I,b,N,L,V=null)=>{const{el:x,type:H,transition:j,children:B,shapeFlag:F}=I;if(F&6){an(I.component.subTree,b,N,L);return}if(F&128){I.suspense.move(b,N,L);return}if(F&64){H.move(I,b,N,Gt);return}if(H===gt){r(x,b,N);for(let W=0;W<B.length;W++)an(B[W],b,N,L);r(I.anchor,b,N);return}if(H===rc){z(I,b,N);return}if(L!==2&&F&1&&j)if(L===0)j.beforeEnter(x),r(x,b,N),Et(()=>j.enter(x),V);else{const{leave:W,delayLeave:J,afterLeave:te}=j,ee=()=>r(x,b,N),ce=()=>{W(x,()=>{ee(),te&&te()})};J?J(x,ee,ce):ce()}else r(x,b,N)},Ue=(I,b,N,L=!1,V=!1)=>{const{type:x,props:H,ref:j,children:B,dynamicChildren:F,shapeFlag:Z,patchFlag:W,dirs:J,cacheIndex:te}=I;if(W===-2&&(V=!1),j!=null&&Do(j,null,N,I,!0),te!=null&&(b.renderCache[te]=void 0),Z&256){b.ctx.deactivate(I);return}const ee=Z&1&&J,ce=!Ys(I);let fe;if(ce&&(fe=H&&H.onVnodeBeforeUnmount)&&Qt(fe,b,I),Z&6)nr(I.component,N,L);else{if(Z&128){I.suspense.unmount(N,L);return}ee&&cr(I,null,b,"beforeUnmount"),Z&64?I.type.remove(I,b,N,Gt,L):F&&!F.hasOnce&&(x!==gt||W>0&&W&64)?rr(F,b,N,!1,!0):(x===gt&&W&384||!V&&Z&16)&&rr(B,b,N),L&&Be(I)}(ce&&(fe=H&&H.onVnodeUnmounted)||ee)&&Et(()=>{fe&&Qt(fe,b,I),ee&&cr(I,null,b,"unmounted")},N)},Be=I=>{const{type:b,el:N,anchor:L,transition:V}=I;if(b===gt){Oa(N,L);return}if(b===rc){U(I);return}const x=()=>{s(N),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(I.shapeFlag&1&&V&&!V.persisted){const{leave:H,delayLeave:j}=V,B=()=>H(N,x);j?j(I.el,x,B):B()}else x()},Oa=(I,b)=>{let N;for(;I!==b;)N=y(I),s(I),I=N;s(b)},nr=(I,b,N)=>{const{bum:L,scope:V,job:x,subTree:H,um:j,m:B,a:F}=I;Ch(B),Ch(F),L&&ho(L),V.stop(),x&&(x.flags|=8,Ue(H,I,b,N)),j&&Et(j,b),Et(()=>{I.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},rr=(I,b,N,L=!1,V=!1,x=0)=>{for(let H=x;H<I.length;H++)Ue(I[H],b,N,L,V)},cn=I=>{if(I.shapeFlag&6)return cn(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const b=y(I.anchor||I.el),N=b&&b[sv];return N?y(N):b};let ys=!1;const Fi=(I,b,N)=>{I==null?b._vnode&&Ue(b._vnode,null,null,!0):D(b._vnode||null,I,b,null,null,null,N),b._vnode=I,ys||(ys=!0,Eh(),fp(),ys=!1)},Gt={p:D,um:Ue,m:an,r:Be,mt:Ae,mc:_,pc:ge,pbc:w,n:cn,o:t};return{render:Fi,hydrate:void 0,createApp:bv(Fi)}}function nc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function lr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Mv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Up(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Mn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Up(o,c)),c.type===ha&&(c.el=o.el)}}function Lv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Bp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bp(e)}function Ch(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const xv=Symbol.for("v-scx"),Fv=()=>po(xv);function go(t,e,n){return $p(t,e,n)}function $p(t,e,n=we){const{immediate:r,deep:s,flush:i,once:o}=n,c=qe({},n),l=e&&r||!e&&i!=="post";let h;if(di){if(i==="sync"){const T=Fv();h=T.__watcherHandles||(T.__watcherHandles=[])}else if(!l){const T=()=>{};return T.stop=en,T.resume=en,T.pause=en,T}}const d=ot;c.call=(T,P,D)=>Wt(T,d,P,D);let p=!1;i==="post"?c.scheduler=T=>{Et(T,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(T,P)=>{P?T():Il(T)}),c.augmentJob=T=>{e&&(T.flags|=4),p&&(T.flags|=2,d&&(T.id=d.uid,T.i=d))};const y=ev(t,e,c);return di&&(h?h.push(y):l&&y()),y}function Uv(t,e,n){const r=this.proxy,s=De(t)?t.includes(".")?jp(r,t):()=>r[t]:t.bind(r,r);let i;le(e)?i=e:(i=e.handler,n=e);const o=Si(this),c=$p(s,i.bind(r),n);return o(),c}function jp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Bv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Wn(e)}Modifiers`]||t[`${Jn(e)}Modifiers`];function $v(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),o=i&&Bv(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>De(d)?d.trim():d)),o.number&&(s=n.map(Rc)));let c,l=r[c=Qa(e)]||r[c=Qa(Wn(e))];!l&&i&&(l=r[c=Qa(Jn(e))]),l&&Wt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Wt(h,t,6,s)}}function qp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!le(t)){const l=h=>{const d=qp(h,e,!0);d&&(c=!0,qe(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Pe(t)&&r.set(t,null),null):(ne(i)?i.forEach(l=>o[l]=null):qe(o,i),Pe(t)&&r.set(t,o),o)}function ua(t,e){return!t||!ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(t,e[0].toLowerCase()+e.slice(1))||ve(t,Jn(e))||ve(t,e))}function kh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:d,props:p,data:y,setupState:T,ctx:P,inheritAttrs:D}=t,k=No(t);let $,K;try{if(n.shapeFlag&4){const U=s||r,se=U;$=Zt(h.call(se,U,d,p,T,y,P)),K=c}else{const U=e;$=Zt(U.length>1?U(p,{attrs:c,slots:o,emit:l}):U(p,null)),K=e.props?c:jv(c)}}catch(U){Xs.length=0,aa(U,t,1),$=xe(mt)}let z=$;if(K&&D!==!1){const U=Object.keys(K),{shapeFlag:se}=z;U.length&&se&7&&(i&&U.some(ul)&&(K=qv(K,i)),z=Kn(z,K,!1,!0))}return n.dirs&&(z=Kn(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&Er(z,n.transition),$=z,No(k),$}const jv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ta(n))&&((e||(e={}))[n]=t[n]);return e},qv=(t,e)=>{const n={};for(const r in t)(!ul(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Hv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Nh(r,o,h):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const y=d[p];if(o[y]!==r[y]&&!ua(h,y))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Nh(r,o,h):!0:!!o;return!1}function Nh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ua(n,i))return!0}return!1}function Wv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Hp=t=>t.__isSuspense;function Kv(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):rv(t)}const gt=Symbol.for("v-fgt"),ha=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),rc=Symbol.for("v-stc"),Xs=[];let bt=null;function dt(t=!1){Xs.push(bt=t?null:[])}function zv(){Xs.pop(),bt=Xs[Xs.length-1]||null}let hi=1;function Dh(t,e=!1){hi+=t,t<0&&bt&&e&&(bt.hasOnce=!0)}function Wp(t){return t.dynamicChildren=hi>0?bt||Kr:null,zv(),hi>0&&bt&&bt.push(t),t}function pt(t,e,n,r,s,i){return Wp(ue(t,e,n,r,s,i,!0))}function Gv(t,e,n,r,s){return Wp(xe(t,e,n,r,s,!0))}function Vo(t){return t?t.__v_isVNode===!0:!1}function fr(t,e){return t.type===e.type&&t.key===e.key}const Kp=({key:t})=>t??null,mo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?De(t)||at(t)||le(t)?{i:At,r:t,k:e,f:!!n}:t:null);function ue(t,e=null,n=null,r=0,s=null,i=t===gt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kp(e),ref:e&&mo(e),scopeId:gp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:At};return c?(Al(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=De(n)?8:16),hi>0&&!o&&bt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&bt.push(l),l}const xe=Qv;function Qv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===mv)&&(t=mt),Vo(t)){const c=Kn(t,e,!0);return n&&Al(c,n),hi>0&&!i&&bt&&(c.shapeFlag&6?bt[bt.indexOf(t)]=c:bt.push(c)),c.patchFlag=-2,c}if(oT(t)&&(t=t.__vccOpts),e){e=Yv(e);let{class:c,style:l}=e;c&&!De(c)&&(e.class=oi(c)),Pe(l)&&(Tl(l)&&!ne(l)&&(l=qe({},l)),e.style=ia(l))}const o=De(t)?1:Hp(t)?128:mp(t)?64:Pe(t)?4:le(t)?2:0;return ue(t,e,n,r,s,o,i,!0)}function Yv(t){return t?Tl(t)||Dp(t)?qe({},t):t:null}function Kn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?Xv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Kp(h),ref:e&&e.ref?n&&i?ne(i)?i.concat(mo(e)):[i,mo(e)]:mo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kn(t.ssContent),ssFallback:t.ssFallback&&Kn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Er(d,l.clone(d)),d}function Fs(t=" ",e=0){return xe(ha,null,t,e)}function Jv(t="",e=!1){return e?(dt(),Gv(mt,null,t)):xe(mt,null,t)}function Zt(t){return t==null||typeof t=="boolean"?xe(mt):ne(t)?xe(gt,null,t.slice()):Vo(t)?Mn(t):xe(ha,null,String(t))}function Mn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kn(t)}function Al(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Al(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Dp(e)?e._ctx=At:s===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:At},n=32):(e=String(e),r&64?(n=16,e=[Fs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=oi([e.class,r.class]));else if(s==="style")e.style=ia([e.style,r.style]);else if(ta(s)){const i=e[s],o=r[s];o&&i!==o&&!(ne(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Qt(t,e,n,r=null){Wt(t,e,7,[n,r])}const Zv=Cp();let eT=0;function tT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Zv,i={uid:eT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ry(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vp(r,s),emitsOptions:qp(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$v.bind(null,i),t.ce&&t.ce(i),i}let ot=null;const zp=()=>ot||At;let Mo,Lc;{const t=sa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Mo=e("__VUE_INSTANCE_SETTERS__",n=>ot=n),Lc=e("__VUE_SSR_SETTERS__",n=>di=n)}const Si=t=>{const e=ot;return Mo(t),t.scope.on(),()=>{t.scope.off(),Mo(e)}},Oh=()=>{ot&&ot.scope.off(),Mo(null)};function Gp(t){return t.vnode.shapeFlag&4}let di=!1;function nT(t,e=!1,n=!1){e&&Lc(e);const{props:r,children:s}=t.vnode,i=Gp(t);Sv(t,r,i,e),Nv(t,s,n);const o=i?rT(t,e):void 0;return e&&Lc(!1),o}function rT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,yv);const{setup:r}=n;if(r){Xn();const s=t.setupContext=r.length>1?iT(t):null,i=Si(t),o=bi(r,t,0,[t.props,s]),c=Bf(o);if(Zn(),i(),(c||t.sp)&&!Ys(t)&&Ep(t),c){if(o.then(Oh,Oh),e)return o.then(l=>{Vh(t,l)}).catch(l=>{aa(l,t,0)});t.asyncDep=o}else Vh(t,o)}else Qp(t)}function Vh(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=lp(e)),Qp(t)}function Qp(t,e,n){const r=t.type;t.render||(t.render=r.render||en);{const s=Si(t);Xn();try{vv(t)}finally{Zn(),s()}}}const sT={get(t,e){return rt(t,"get",""),t[e]}};function iT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sT),slots:t.slots,emit:t.emit,expose:e}}function da(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(lp(zy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Js)return Js[n](t)},has(e,n){return n in e||n in Js}})):t.proxy}function oT(t){return le(t)&&"__vccOpts"in t}const aT=(t,e)=>Xy(t,e,di);function cT(t,e,n){const r=arguments.length;return r===2?Pe(e)&&!ne(e)?Vo(e)?xe(t,null,[e]):xe(t,e):xe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Vo(n)&&(n=[n]),xe(t,e,n))}const lT="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xc;const Mh=typeof window<"u"&&window.trustedTypes;if(Mh)try{xc=Mh.createPolicy("vue",{createHTML:t=>t})}catch{}const Yp=xc?t=>xc.createHTML(t):t=>t,uT="http://www.w3.org/2000/svg",hT="http://www.w3.org/1998/Math/MathML",dn=typeof document<"u"?document:null,Lh=dn&&dn.createElement("template"),dT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?dn.createElementNS(uT,t):e==="mathml"?dn.createElementNS(hT,t):n?dn.createElement(t,{is:n}):dn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>dn.createTextNode(t),createComment:t=>dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Lh.innerHTML=Yp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Lh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},kn="transition",Vs="animation",ts=Symbol("_vtc"),Jp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Xp=qe({},yp,Jp),fT=t=>(t.displayName="Transition",t.props=Xp,t),sc=fT((t,{slots:e})=>cT(ov,Zp(t),e)),ur=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},xh=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function Zp(t){const e={};for(const E in t)E in Jp||(e[E]=t[E]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=o,appearToClass:d=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:y=`${n}-leave-active`,leaveToClass:T=`${n}-leave-to`}=t,P=pT(s),D=P&&P[0],k=P&&P[1],{onBeforeEnter:$,onEnter:K,onEnterCancelled:z,onLeave:U,onLeaveCancelled:se,onBeforeAppear:ie=$,onAppear:R=K,onAppearCancelled:_=z}=e,m=(E,v,Ae,lt)=>{E._enterCancelled=lt,Dn(E,v?d:c),Dn(E,v?h:o),Ae&&Ae()},w=(E,v)=>{E._isLeaving=!1,Dn(E,p),Dn(E,T),Dn(E,y),v&&v()},A=E=>(v,Ae)=>{const lt=E?R:K,Oe=()=>m(v,E,Ae);ur(lt,[v,Oe]),Fh(()=>{Dn(v,E?l:i),Yt(v,E?d:c),xh(lt)||Uh(v,r,D,Oe)})};return qe(e,{onBeforeEnter(E){ur($,[E]),Yt(E,i),Yt(E,o)},onBeforeAppear(E){ur(ie,[E]),Yt(E,l),Yt(E,h)},onEnter:A(!1),onAppear:A(!0),onLeave(E,v){E._isLeaving=!0;const Ae=()=>w(E,v);Yt(E,p),E._enterCancelled?(Yt(E,y),Fc()):(Fc(),Yt(E,y)),Fh(()=>{E._isLeaving&&(Dn(E,p),Yt(E,T),xh(U)||Uh(E,r,k,Ae))}),ur(U,[E,Ae])},onEnterCancelled(E){m(E,!1,void 0,!0),ur(z,[E])},onAppearCancelled(E){m(E,!0,void 0,!0),ur(_,[E])},onLeaveCancelled(E){w(E),ur(se,[E])}})}function pT(t){if(t==null)return null;if(Pe(t))return[ic(t.enter),ic(t.leave)];{const e=ic(t);return[e,e]}}function ic(t){return vy(t)}function Yt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ts]||(t[ts]=new Set)).add(e)}function Dn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ts];n&&(n.delete(e),n.size||(t[ts]=void 0))}function Fh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let gT=0;function Uh(t,e,n,r){const s=t._endId=++gT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=eg(t,e);if(!o)return r();const h=o+"end";let d=0;const p=()=>{t.removeEventListener(h,y),i()},y=T=>{T.target===t&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},c+1),t.addEventListener(h,y)}function eg(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${kn}Delay`),i=r(`${kn}Duration`),o=Bh(s,i),c=r(`${Vs}Delay`),l=r(`${Vs}Duration`),h=Bh(c,l);let d=null,p=0,y=0;e===kn?o>0&&(d=kn,p=o,y=i.length):e===Vs?h>0&&(d=Vs,p=h,y=l.length):(p=Math.max(o,h),d=p>0?o>h?kn:Vs:null,y=d?d===kn?i.length:l.length:0);const T=d===kn&&/\b(transform|all)(,|$)/.test(r(`${kn}Property`).toString());return{type:d,timeout:p,propCount:y,hasTransform:T}}function Bh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>$h(n)+$h(t[r])))}function $h(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Fc(){return document.body.offsetHeight}function mT(t,e,n){const r=t[ts];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jh=Symbol("_vod"),_T=Symbol("_vsh"),yT=Symbol(""),vT=/(^|;)\s*display\s*:/;function TT(t,e,n){const r=t.style,s=De(n);let i=!1;if(n&&!s){if(e)if(De(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&_o(r,c,"")}else for(const o in e)n[o]==null&&_o(r,o,"");for(const o in n)o==="display"&&(i=!0),_o(r,o,n[o])}else if(s){if(e!==n){const o=r[yT];o&&(n+=";"+o),r.cssText=n,i=vT.test(n)}}else e&&t.removeAttribute("style");jh in t&&(t[jh]=i?r.display:"",t[_T]&&(r.display="none"))}const qh=/\s*!important$/;function _o(t,e,n){if(ne(n))n.forEach(r=>_o(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=IT(t,e);qh.test(n)?t.setProperty(Jn(r),n.replace(qh,""),"important"):t[r]=n}}const Hh=["Webkit","Moz","ms"],oc={};function IT(t,e){const n=oc[e];if(n)return n;let r=Wn(e);if(r!=="filter"&&r in t)return oc[e]=r;r=qf(r);for(let s=0;s<Hh.length;s++){const i=Hh[s]+r;if(i in t)return oc[e]=i}return e}const Wh="http://www.w3.org/1999/xlink";function Kh(t,e,n,r,s,i=by(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Wh,e.slice(6,e.length)):t.setAttributeNS(Wh,e,n):n==null||i&&!Wf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Yn(n)?String(n):n)}function zh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Yp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Wf(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function jr(t,e,n,r){t.addEventListener(e,n,r)}function ET(t,e,n,r){t.removeEventListener(e,n,r)}const Gh=Symbol("_vei");function wT(t,e,n,r,s=null){const i=t[Gh]||(t[Gh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=AT(e);if(r){const h=i[e]=ST(r,s);jr(t,c,h,l)}else o&&(ET(t,c,o,l),i[e]=void 0)}}const Qh=/(?:Once|Passive|Capture)$/;function AT(t){let e;if(Qh.test(t)){e={};let r;for(;r=t.match(Qh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jn(t.slice(2)),e]}let ac=0;const bT=Promise.resolve(),RT=()=>ac||(bT.then(()=>ac=0),ac=Date.now());function ST(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Wt(PT(r,n.value),e,5,[r])};return n.value=t,n.attached=RT(),n}function PT(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Yh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,CT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?mT(t,r,o):e==="style"?TT(t,n,r):ta(e)?ul(e)||wT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kT(t,e,r,o))?(zh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!De(r))?zh(t,Wn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Kh(t,e,r,o))};function kT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yh(e)&&le(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yh(e)&&De(n)?!1:e in t}const tg=new WeakMap,ng=new WeakMap,Lo=Symbol("_moveCb"),Jh=Symbol("_enterCb"),NT=t=>(delete t.props.mode,t),DT=NT({name:"TransitionGroup",props:qe({},Xp,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=zp(),r=_p();let s,i;return Ap(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!xT(s[0].el,n.vnode.el,o))return;s.forEach(VT),s.forEach(MT);const c=s.filter(LT);Fc(),c.forEach(l=>{const h=l.el,d=h.style;Yt(h,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=h[Lo]=y=>{y&&y.target!==h||(!y||/transform$/.test(y.propertyName))&&(h.removeEventListener("transitionend",p),h[Lo]=null,Dn(h,o))};h.addEventListener("transitionend",p)})}),()=>{const o=_e(t),c=Zp(o);let l=o.tag||gt;if(s=[],i)for(let h=0;h<i.length;h++){const d=i[h];d.el&&d.el instanceof Element&&(s.push(d),Er(d,ui(d,c,r,n)),tg.set(d,d.el.getBoundingClientRect()))}i=e.default?El(e.default()):[];for(let h=0;h<i.length;h++){const d=i[h];d.key!=null&&Er(d,ui(d,c,r,n))}return xe(l,null,i)}}}),OT=DT;function VT(t){const e=t.el;e[Lo]&&e[Lo](),e[Jh]&&e[Jh]()}function MT(t){ng.set(t,t.el.getBoundingClientRect())}function LT(t){const e=tg.get(t),n=ng.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function xT(t,e,n){const r=t.cloneNode(),s=t[ts];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=eg(r);return i.removeChild(r),o}const Xh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>ho(e,n):e};function FT(t){t.target.composing=!0}function Zh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cc=Symbol("_assign"),yo={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[cc]=Xh(s);const i=r||s.props&&s.props.type==="number";jr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Rc(c)),t[cc](c)}),n&&jr(t,"change",()=>{t.value=t.value.trim()}),e||(jr(t,"compositionstart",FT),jr(t,"compositionend",Zh),jr(t,"change",Zh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[cc]=Xh(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Rc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},UT=["ctrl","shift","alt","meta"],BT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>UT.some(n=>t[`${n}Key`]&&!e.includes(n))},ed=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=BT[e[o]];if(c&&c(s,e))return}return t(s,...i)})},$T={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},jT=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Jn(s.key);if(e.some(o=>o===i||$T[o]===i))return t(s)})},qT=qe({patchProp:CT},dT);let td;function HT(){return td||(td=Ov(qT))}const WT=(...t)=>{const e=HT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=zT(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,KT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function KT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function zT(t){return De(t)?document.querySelector(t):t}var nd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},GT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let y=(c&15)<<2|h>>6,T=h&63;l||(T=64,o||(y=64)),r.push(n[d],n[p],n[y],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):GT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new QT;const y=i<<2|c>>4;if(r.push(y),h!==64){const T=c<<4&240|h>>2;if(r.push(T),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class QT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YT=function(t){const e=rg(t);return sg.encodeByteArray(e,!0)},xo=function(t){return YT(t).replace(/\./g,"")},ig=function(t){try{return sg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=()=>JT().__FIREBASE_DEFAULTS__,ZT=()=>{if(typeof process>"u"||typeof nd>"u")return;const t=nd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ig(t[1]);return e&&JSON.parse(e)},fa=()=>{try{return XT()||ZT()||eI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},og=t=>{var e,n;return(n=(e=fa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ag=t=>{const e=og(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cg=()=>{var t;return(t=fa())===null||t===void 0?void 0:t.config},lg=t=>{var e;return(e=fa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xo(JSON.stringify(n)),xo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function rI(){var t;const e=(t=fa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oI(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aI(){return!rI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dg(){try{return typeof indexedDB=="object"}catch{return!1}}function fg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function cI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="FirebaseError";class Mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lI,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cr.prototype.create)}}class Cr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?uI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Mt(s,c,r)}}function uI(t,e){return t.replace(hI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const hI=/\{\$([^}]+)}/g;function dI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(rd(i)&&rd(o)){if(!fi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function rd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Bs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fI(t,e){const n=new pI(t,e);return n.subscribe.bind(n)}class pI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=lc),s.error===void 0&&(s.error=lc),s.complete===void 0&&(s.complete=lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=1e3,_I=2,yI=4*60*60*1e3,vI=.5;function sd(t,e=mI,n=_I){const r=e*Math.pow(n,t),s=Math.round(vI*r*(Math.random()-.5)*2);return Math.min(yI,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}class Ot{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EI(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:II(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function II(t){return t===dr?void 0:t}function EI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const AI={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},bI=de.INFO,RI={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},SI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=RI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pa{constructor(e){this.name=e,this._logLevel=bI,this._logHandler=SI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const PI=(t,e)=>e.some(n=>t instanceof n);let id,od;function CI(){return id||(id=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kI(){return od||(od=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pg=new WeakMap,Uc=new WeakMap,gg=new WeakMap,uc=new WeakMap,bl=new WeakMap;function NI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($n(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pg.set(n,t)}).catch(()=>{}),bl.set(e,t),e}function DI(t){if(Uc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Uc.set(t,e)}let Bc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OI(t){Bc=t(Bc)}function VI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hc(this),e,...n);return gg.set(r,e.sort?e.sort():[e]),$n(r)}:kI().includes(t)?function(...e){return t.apply(hc(this),e),$n(pg.get(this))}:function(...e){return $n(t.apply(hc(this),e))}}function MI(t){return typeof t=="function"?VI(t):(t instanceof IDBTransaction&&DI(t),PI(t,CI())?new Proxy(t,Bc):t)}function $n(t){if(t instanceof IDBRequest)return NI(t);if(uc.has(t))return uc.get(t);const e=MI(t);return e!==t&&(uc.set(t,e),bl.set(e,t)),e}const hc=t=>bl.get(t);function mg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=$n(o);return r&&o.addEventListener("upgradeneeded",l=>{r($n(o.result),l.oldVersion,l.newVersion,$n(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const LI=["get","getKey","getAll","getAllKeys","count"],xI=["put","add","delete","clear"],dc=new Map;function ad(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dc.get(e))return dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||LI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return dc.set(e,i),i}OI(t=>({...t,get:(e,n,r)=>ad(e,n)||t.get(e,n,r),has:(e,n)=>!!ad(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function UI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $c="@firebase/app",cd="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new pa("@firebase/app"),BI="@firebase/app-compat",$I="@firebase/analytics-compat",jI="@firebase/analytics",qI="@firebase/app-check-compat",HI="@firebase/app-check",WI="@firebase/auth",KI="@firebase/auth-compat",zI="@firebase/database",GI="@firebase/data-connect",QI="@firebase/database-compat",YI="@firebase/functions",JI="@firebase/functions-compat",XI="@firebase/installations",ZI="@firebase/installations-compat",eE="@firebase/messaging",tE="@firebase/messaging-compat",nE="@firebase/performance",rE="@firebase/performance-compat",sE="@firebase/remote-config",iE="@firebase/remote-config-compat",oE="@firebase/storage",aE="@firebase/storage-compat",cE="@firebase/firestore",lE="@firebase/vertexai-preview",uE="@firebase/firestore-compat",hE="firebase",dE="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="[DEFAULT]",fE={[$c]:"fire-core",[BI]:"fire-core-compat",[jI]:"fire-analytics",[$I]:"fire-analytics-compat",[HI]:"fire-app-check",[qI]:"fire-app-check-compat",[WI]:"fire-auth",[KI]:"fire-auth-compat",[zI]:"fire-rtdb",[GI]:"fire-data-connect",[QI]:"fire-rtdb-compat",[YI]:"fire-fn",[JI]:"fire-fn-compat",[XI]:"fire-iid",[ZI]:"fire-iid-compat",[eE]:"fire-fcm",[tE]:"fire-fcm-compat",[nE]:"fire-perf",[rE]:"fire-perf-compat",[sE]:"fire-rc",[iE]:"fire-rc-compat",[oE]:"fire-gcs",[aE]:"fire-gcs-compat",[cE]:"fire-fst",[uE]:"fire-fst-compat",[lE]:"fire-vertex","fire-js":"fire-js",[hE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Map,pE=new Map,qc=new Map;function ld(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kt(t){const e=t.name;if(qc.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;qc.set(e,t);for(const n of Fo.values())ld(n,t);for(const n of pE.values())ld(n,t);return!0}function er(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new Cr("app","Firebase",gE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=dE;function _g(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jn.create("bad-app-name",{appName:String(s)});if(n||(n=cg()),!n)throw jn.create("no-options");const i=Fo.get(s);if(i){if(fi(n,i.options)&&fi(r,i.config))return i;throw jn.create("duplicate-app",{appName:s})}const o=new wI(s);for(const l of qc.values())o.addComponent(l);const c=new mE(n,r,o);return Fo.set(s,c),c}function ga(t=jc){const e=Fo.get(t);if(!e&&t===jc&&cg())return _g();if(!e)throw jn.create("no-app",{appName:t});return e}function _t(t,e,n){var r;let s=(r=fE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(c.join(" "));return}Kt(new Ot(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="firebase-heartbeat-database",yE=1,pi="firebase-heartbeat-store";let fc=null;function yg(){return fc||(fc=mg(_E,yE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pi)}catch(n){console.warn(n)}}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),fc}async function vE(t){try{const n=(await yg()).transaction(pi),r=await n.objectStore(pi).get(vg(t));return await n.done,r}catch(e){if(e instanceof Mt)Tn.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function ud(t,e){try{const r=(await yg()).transaction(pi,"readwrite");await r.objectStore(pi).put(e,vg(t)),await r.done}catch(n){if(n instanceof Mt)Tn.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function vg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=1024,IE=30*24*60*60*1e3;class EE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=IE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hd(),{heartbeatsToSend:r,unsentEntries:s}=wE(this._heartbeatsCache.heartbeats),i=xo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Tn.warn(n),""}}}function hd(){return new Date().toISOString().substring(0,10)}function wE(t,e=TE){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),dd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),dd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dg()?fg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dd(t){return xo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t){Kt(new Ot("platform-logger",e=>new FI(e),"PRIVATE")),Kt(new Ot("heartbeat",e=>new EE(e),"PRIVATE")),_t($c,cd,t),_t($c,cd,"esm2017"),_t("fire-js","")}bE("");function Rl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Tg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RE=Tg,Ig=new Cr("auth","Firebase",Tg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new pa("@firebase/auth");function SE(t,...e){Uo.logLevel<=de.WARN&&Uo.warn(`Auth (${kr}): ${t}`,...e)}function vo(t,...e){Uo.logLevel<=de.ERROR&&Uo.error(`Auth (${kr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,...e){throw Pl(t,...e)}function yt(t,...e){return Pl(t,...e)}function Sl(t,e,n){const r=Object.assign(Object.assign({},RE()),{[e]:n});return new Cr("auth","Firebase",r).create(e,{appName:t.name})}function vn(t){return Sl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function PE(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Vt(t,"argument-error"),Sl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ig.create(t,...e)}function G(t,e,...n){if(!t)throw Pl(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vo(e),new Error(e)}function In(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Eg(){return fd()==="http:"||fd()==="https:"}function fd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Eg()||hg()||"connection"in navigator)?navigator.onLine:!0}function kE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=nI()||iI()}get(){return CE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=new Pi(3e4,6e4);function St(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lt(t,e,n,r,s={}){return Ag(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=hs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return sI()||(h.referrerPolicy="no-referrer"),wg.fetch()(bg(t,t.config.apiHost,n,c),h)})}async function Ag(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NE),e);try{const s=new VE(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $s(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $s(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $s(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw $s(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Sl(t,d,h);Vt(t,d)}}catch(s){if(s instanceof Mt)throw s;Vt(t,"network-request-failed",{message:String(s)})}}async function Nr(t,e,n,r,s={}){const i=await Lt(t,e,n,r,s);return"mfaPendingCredential"in i&&Vt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function bg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Cl(t.config,s):`${t.config.apiScheme}://${s}`}function OE(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yt(this.auth,"network-request-failed")),DE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $s(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=yt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t){return t!==void 0&&t.getResponse!==void 0}function gd(t){return t!==void 0&&t.enterprise!==void 0}class ME{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return OE(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LE(t){return(await Lt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function xE(t,e){return Lt(t,"GET","/v2/recaptchaConfig",St(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FE(t,e){return Lt(t,"POST","/v1/accounts:delete",e)}async function Rg(t,e){return Lt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UE(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),s=kl(r);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zs(pc(s.auth_time)),issuedAtTime:Zs(pc(s.iat)),expirationTime:Zs(pc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pc(t){return Number(t)*1e3}function kl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=ig(n);return s?JSON.parse(s):(vo("Failed to decode base64 JWT payload"),null)}catch(s){return vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function md(t){const e=kl(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mt&&BE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await gi(t,Rg(n,{idToken:r}));G(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Sg(i.providerUserInfo):[],c=qE(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Wc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function jE(t){const e=Fe(t);await Bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qE(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Sg(t){return t.map(e=>{var{providerId:n}=e,r=Rl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(t,e){const n=await Ag(t,{},async()=>{const r=hs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=bg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",wg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function WE(t,e){return Lt(t,"POST","/v2/accounts:revokeToken",St(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):md(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=md(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await HE(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Jr;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Rl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $E(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gi(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UE(this,e)}reload(){return jE(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await gi(this,FE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(c=n.tenantId)!==null&&c!==void 0?c:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,$=(h=n.createdAt)!==null&&h!==void 0?h:void 0,K=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:z,emailVerified:U,isAnonymous:se,providerData:ie,stsTokenManager:R}=n;G(z&&R,e,"internal-error");const _=Jr.fromJSON(this.name,R);G(typeof z=="string",e,"internal-error"),Nn(p,e.name),Nn(y,e.name),G(typeof U=="boolean",e,"internal-error"),G(typeof se=="boolean",e,"internal-error"),Nn(T,e.name),Nn(P,e.name),Nn(D,e.name),Nn(k,e.name),Nn($,e.name),Nn(K,e.name);const m=new _n({uid:z,auth:e,email:y,emailVerified:U,displayName:p,isAnonymous:se,photoURL:P,phoneNumber:T,tenantId:D,stsTokenManager:_,createdAt:$,lastLoginAt:K});return ie&&Array.isArray(ie)&&(m.providerData=ie.map(w=>Object.assign({},w))),k&&(m._redirectEventId=k),m}static async _fromIdTokenResponse(e,n,r=!1){const s=new Jr;s.updateFromServerResponse(n);const i=new _n({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Bo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Sg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Jr;c.updateFromIdToken(r);const l=new _n({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Wc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=new Map;function yn(t){In(t instanceof Function,"Expected a class definition");let e=_d.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_d.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pg.type="NONE";const yd=Pg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t,e,n){return`firebase:${t}:${e}:${n}`}class Xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=To(this.userKey,s.apiKey,i),this.fullPersistenceKey=To("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xr(yn(yd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||yn(yd);const o=To(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(o);if(d){const p=_n._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Xr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Xr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vg(e))return"Blackberry";if(Mg(e))return"Webos";if(kg(e))return"Safari";if((e.includes("chrome/")||Ng(e))&&!e.includes("edge/"))return"Chrome";if(Og(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cg(t=ct()){return/firefox\//i.test(t)}function kg(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ng(t=ct()){return/crios\//i.test(t)}function Dg(t=ct()){return/iemobile/i.test(t)}function Og(t=ct()){return/android/i.test(t)}function Vg(t=ct()){return/blackberry/i.test(t)}function Mg(t=ct()){return/webos/i.test(t)}function Nl(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KE(t=ct()){var e;return Nl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zE(){return oI()&&document.documentMode===10}function Lg(t=ct()){return Nl(t)||Og(t)||Mg(t)||Vg(t)||/windows phone/i.test(t)||Dg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t,e=[]){let n;switch(t){case"Browser":n=vd(ct());break;case"Worker":n=`${vd(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(t,e={}){return Lt(t,"GET","/v2/passwordPolicy",St(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=6;class JE{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:YE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Td(this),this.idTokenSubscription=new Td(this),this.beforeStateQueue=new GE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ig,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Rg(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(vn(this));const n=e?Fe(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QE(this),n=new JE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Cr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await WE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&SE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bn(t){return Fe(t)}class Td{constructor(e){this.auth=e,this.observer=null,this.addObserver=fI(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZE(t){Ci=t}function Dl(t){return Ci.loadJS(t)}function ew(){return Ci.recaptchaV2Script}function tw(){return Ci.recaptchaEnterpriseScript}function nw(){return Ci.gapiScript}function Fg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const rw="recaptcha-enterprise",sw="NO_RECAPTCHA";class iw{constructor(e){this.type=rw,this.auth=bn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{xE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new ME(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;gd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(sw)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&gd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=tw();l.length!==0&&(l+=c),Dl(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Id(t,e,n,r=!1){const s=new iw(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ed(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Id(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Id(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t,e){const n=er(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fi(i,e??{}))return s;Vt(s,"already-initialized")}return n.initialize({options:e})}function aw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cw(t,e,n){const r=bn(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ug(e),{host:o,port:c}=lw(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),uw()}function Ug(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lw(t){const e=Ug(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:wd(o)}}}function wd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function hw(t,e){return Lt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dw(t,e){return Nr(t,"POST","/v1/accounts:signInWithPassword",St(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fw(t,e){return Nr(t,"POST","/v1/accounts:signInWithEmailLink",St(t,e))}async function pw(t,e){return Nr(t,"POST","/v1/accounts:signInWithEmailLink",St(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends ma{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new mi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new mi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ed(e,n,"signInWithPassword",dw);case"emailLink":return fw(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ed(e,r,"signUpPassword",hw);case"emailLink":return pw(e,{idToken:n,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(t,e){return Nr(t,"POST","/v1/accounts:signInWithIdp",St(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="http://localhost";class wr extends ma{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Rl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new wr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:gw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(t,e){return Lt(t,"POST","/v1/accounts:sendVerificationCode",St(t,e))}async function _w(t,e){return Nr(t,"POST","/v1/accounts:signInWithPhoneNumber",St(t,e))}async function yw(t,e){const n=await Nr(t,"POST","/v1/accounts:signInWithPhoneNumber",St(t,e));if(n.temporaryProof)throw $s(t,"account-exists-with-different-credential",n);return n}const vw={USER_NOT_FOUND:"user-not-found"};async function Tw(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Nr(t,"POST","/v1/accounts:signInWithPhoneNumber",St(t,n),vw)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends ma{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ei({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ei({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return _w(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return yw(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Tw(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!n&&!s&&!i?null:new ei({verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ew(t){const e=Us(Bs(t)).link,n=e?Us(Bs(e)).deep_link_id:null,r=Us(Bs(t)).deep_link_id;return(r?Us(Bs(r)).link:null)||r||n||e||t}class Ol{constructor(e){var n,r,s,i,o,c;const l=Us(Bs(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Iw((s=l.mode)!==null&&s!==void 0?s:null);G(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Ew(e);try{return new Ol(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.providerId=ds.PROVIDER_ID}static credential(e,n){return mi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ol.parseLink(n);return G(r,"argument-error"),mi._fromEmailAndCode(e,r.code,r.tenantId)}}ds.PROVIDER_ID="password";ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Vl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends ki{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends ki{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends ki{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await _n._fromIdTokenResponse(e,r,s),o=Ad(r);return new ns({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ad(r);return new ns({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ad(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends Mt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$o.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $o(e,n,r,s)}}function Bg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$o._fromErrorAndOperation(t,i,e,r):i})}async function ww(t,e,n=!1){const r=await gi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(t,e,n=!1){const{auth:r}=t;if(Bt(r.app))return Promise.reject(vn(r));const s="reauthenticate";try{const i=await gi(t,Bg(r,s,e,t),n);G(i.idToken,r,"internal-error");const o=kl(i.idToken);G(o,r,"internal-error");const{sub:c}=o;return G(t.uid===c,r,"user-mismatch"),ns._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(t,e,n=!1){if(Bt(t.app))return Promise.reject(vn(t));const r="signIn",s=await Bg(t,r,e),i=await ns._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function jg(t,e){return $g(bn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(t){const e=bn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Rw(t,e,n){return Bt(t.app)?Promise.reject(vn(t)):jg(Fe(t),ds.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bw(t),r})}function Sw(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function Pw(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function Cw(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function kw(t){return Fe(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e){return Lt(t,"POST","/v2/accounts/mfaEnrollment:start",St(t,e))}const jo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jo,"1"),this.storage.removeItem(jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=1e3,Ow=10;class Hg extends qg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ow):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hg.type="LOCAL";const Vw=Hg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg extends qg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wg.type="SESSION";const Kg=Wg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new _a(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await Mw(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_a.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Ml("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return window}function xw(t){Me().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){return typeof Me().WorkerGlobalScope<"u"&&typeof Me().importScripts=="function"}async function Fw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Uw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bw(){return Ll()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="firebaseLocalStorageDb",$w=1,qo="firebaseLocalStorage",Gg="fbase_key";class Ni{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ya(t,e){return t.transaction([qo],e?"readwrite":"readonly").objectStore(qo)}function jw(){const t=indexedDB.deleteDatabase(zg);return new Ni(t).toPromise()}function Kc(){const t=indexedDB.open(zg,$w);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qo,{keyPath:Gg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qo)?e(r):(r.close(),await jw(),e(await Kc()))})})}async function bd(t,e,n){const r=ya(t,!0).put({[Gg]:e,value:n});return new Ni(r).toPromise()}async function qw(t,e){const n=ya(t,!1).get(e),r=await new Ni(n).toPromise();return r===void 0?null:r.value}function Rd(t,e){const n=ya(t,!0).delete(e);return new Ni(n).toPromise()}const Hw=800,Ww=3;class Qg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ww)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ll()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_a._getInstance(Bw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Fw(),!this.activeServiceWorker)return;this.sender=new Lw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Uw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kc();return await bd(e,jo,"1"),await Rd(e,jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ya(s,!1).getAll();return new Ni(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qg.type="LOCAL";const Kw=Qg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t,e){return Lt(t,"POST","/v2/accounts/mfaSignIn:start",St(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=500,Qw=6e4,io=1e12;class Yw{constructor(e){this.auth=e,this.counter=io,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Jw(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||io;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||io;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||io;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class Jw{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;G(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Xw(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Qw)},Gw))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Xw(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=Fg("rcb"),Zw=new Pi(3e4,6e4);class eA{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Me().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return G(tA(n),e,"argument-error"),this.shouldResolveImmediately(n)&&pd(Me().grecaptcha)?Promise.resolve(Me().grecaptcha):new Promise((r,s)=>{const i=Me().setTimeout(()=>{s(yt(e,"network-request-failed"))},Zw.get());Me()[gc]=()=>{Me().clearTimeout(i),delete Me()[gc];const c=Me().grecaptcha;if(!c||!pd(c)){s(yt(e,"internal-error"));return}const l=c.render;c.render=(h,d)=>{const p=l(h,d);return this.counter++,p},this.hostLanguage=n,r(c)};const o=`${ew()}?${hs({onload:gc,render:"explicit",hl:n})}`;Dl(o).catch(()=>{clearTimeout(i),s(yt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Me().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function tA(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class nA{async load(e){return new Yw(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="recaptcha",rA={theme:"light",type:"image"};class sA{constructor(e,n,r=Object.assign({},rA)){this.parameters=r,this.type=Yg,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=bn(e),this.isInvisible=this.parameters.size==="invisible",G(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof n=="string"?document.getElementById(n):n;G(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new nA:new eA,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){G(!this.parameters.sitekey,this.auth,"argument-error"),G(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),G(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Me()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){G(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){G(Eg()&&!Ll(),this.auth,"internal-error"),await iA(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await LE(this.auth);G(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return G(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function iA(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ei._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function aA(t,e,n){if(Bt(t.app))return Promise.reject(vn(t));const r=bn(t),s=await cA(r,e,Fe(n));return new oA(s,i=>jg(r,i))}async function cA(t,e,n){var r;const s=await n.verify();try{G(typeof s=="string",t,"argument-error"),G(n.type===Yg,t,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return G(o.type==="enroll",t,"internal-error"),(await Nw(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{G(o.type==="signin",t,"internal-error");const c=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;return G(c,t,"missing-multi-factor-info"),(await zw(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await mw(t,{phoneNumber:i.phoneNumber,recaptchaToken:s});return o}}finally{n._reset()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t,e){return e?yn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends ma{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lA(t){return $g(t.auth,new xl(t),t.bypassAuthState)}function uA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Aw(n,new xl(t),t.bypassAuthState)}async function hA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),ww(n,new xl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lA;case"linkViaPopup":case"linkViaRedirect":return hA;case"reauthViaPopup":case"reauthViaRedirect":return uA;default:Vt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=new Pi(2e3,1e4);async function fA(t,e,n){if(Bt(t.app))return Promise.reject(yt(t,"operation-not-supported-in-this-environment"));const r=bn(t);PE(t,e,Vl);const s=Jg(r,n);return new gr(r,"signInViaPopup",e,s).executeNotNull()}class gr extends Xg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gr.currentPopupAction&&gr.currentPopupAction.cancel(),gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Ml();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dA.get())};e()}}gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA="pendingRedirect",Io=new Map;class gA extends Xg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Io.get(this.auth._key());if(!e){try{const r=await mA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Io.set(this.auth._key(),e)}return this.bypassAuthState||Io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mA(t,e){const n=vA(e),r=yA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function _A(t,e){Io.set(t._key(),e)}function yA(t){return yn(t._redirectPersistence)}function vA(t){return To(pA,t.config.apiKey,t.name)}async function TA(t,e,n=!1){if(Bt(t.app))return Promise.reject(vn(t));const r=bn(t),s=Jg(r,e),o=await new gA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=10*60*1e3;class EA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sd(e))}saveEventToCache(e){this.cachedEventUids.add(Sd(e)),this.lastProcessedEventTime=Date.now()}}function Sd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e={}){return Lt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RA=/^https?/;async function SA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AA(t);for(const n of e)try{if(PA(n))return}catch{}Vt(t,"unauthorized-domain")}function PA(t){const e=Hc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RA.test(n))return!1;if(bA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=new Pi(3e4,6e4);function Pd(){const t=Me().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kA(t){return new Promise((e,n)=>{var r,s,i;function o(){Pd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pd(),n(yt(t,"network-request-failed"))},timeout:CA.get()})}if(!((s=(r=Me().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Me().gapi)===null||i===void 0)&&i.load)o();else{const c=Fg("iframefcb");return Me()[c]=()=>{gapi.load?o():n(yt(t,"network-request-failed"))},Dl(`${nw()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function NA(t){return Eo=Eo||kA(t),Eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=new Pi(5e3,15e3),OA="__/auth/iframe",VA="emulator/auth/iframe",MA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xA(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cl(e,VA):`https://${t.config.authDomain}/${OA}`,r={apiKey:e.apiKey,appName:t.name,v:kr},s=LA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${hs(r).slice(1)}`}async function FA(t){const e=await NA(t),n=Me().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:xA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=yt(t,"network-request-failed"),c=Me().setTimeout(()=>{i(o)},DA.get());function l(){Me().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BA=500,$A=600,jA="_blank",qA="http://localhost";class Cd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HA(t,e,n,r=BA,s=$A){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},UA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ct().toLowerCase();n&&(c=Ng(h)?jA:n),Cg(h)&&(e=e||qA,l.scrollbars="yes");const d=Object.entries(l).reduce((y,[T,P])=>`${y}${T}=${P},`,"");if(KE(h)&&c!=="_self")return WA(e||"",c),new Cd(null);const p=window.open(e||"",c,d);G(p,t,"popup-blocked");try{p.focus()}catch{}return new Cd(p)}function WA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="__/auth/handler",zA="emulator/auth/handler",GA=encodeURIComponent("fac");async function kd(t,e,n,r,s,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:kr,eventId:s};if(e instanceof Vl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ki){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${GA}=${encodeURIComponent(l)}`:"";return`${QA(t)}?${hs(c).slice(1)}${h}`}function QA({config:t}){return t.emulator?Cl(t,zA):`https://${t.authDomain}/${KA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="webStorageSupport";class YA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kg,this._completeRedirectFn=TA,this._overrideRedirectResult=_A}async _openPopup(e,n,r,s){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await kd(e,n,r,Hc(),s);return HA(e,o,Ml())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await kd(e,n,r,Hc(),s);return xw(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(In(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await FA(e),r=new EA(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mc,{type:mc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[mc];o!==void 0&&n(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lg()||kg()||Nl()}}const JA=YA;var Nd="@firebase/auth",Dd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eb(t){Kt(new Ot("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xg(t)},h=new XE(r,s,i,l);return aw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kt(new Ot("auth-internal",e=>{const n=bn(e.getProvider("auth").getImmediate());return(r=>new XA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(Nd,Dd,ZA(t)),_t(Nd,Dd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=5*60,nb=lg("authIdTokenMaxAge")||tb;let Od=null;const rb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nb)return;const s=n==null?void 0:n.token;Od!==s&&(Od=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sb(t=ga()){const e=er(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ow(t,{popupRedirectResolver:JA,persistence:[Kw,Vw,Kg]}),r=lg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=rb(i.toString());Pw(n,o,()=>o(n.currentUser)),Sw(n,c=>o(c))}}const s=og("auth");return s&&cw(n,`http://${s}`),n}function ib(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ZE({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=yt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ib().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eb("Browser");var ob="firebase",ab="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t(ob,ab,"app");var Vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vr,em;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,_){function m(){}m.prototype=_.prototype,R.D=_.prototype,R.prototype=new m,R.prototype.constructor=R,R.C=function(w,A,E){for(var v=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)v[Ae-2]=arguments[Ae];return _.prototype[A].apply(w,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,_,m){m||(m=0);var w=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)w[A]=_.charCodeAt(m++)|_.charCodeAt(m++)<<8|_.charCodeAt(m++)<<16|_.charCodeAt(m++)<<24;else for(A=0;16>A;++A)w[A]=_[m++]|_[m++]<<8|_[m++]<<16|_[m++]<<24;_=R.g[0],m=R.g[1],A=R.g[2];var E=R.g[3],v=_+(E^m&(A^E))+w[0]+3614090360&4294967295;_=m+(v<<7&4294967295|v>>>25),v=E+(A^_&(m^A))+w[1]+3905402710&4294967295,E=_+(v<<12&4294967295|v>>>20),v=A+(m^E&(_^m))+w[2]+606105819&4294967295,A=E+(v<<17&4294967295|v>>>15),v=m+(_^A&(E^_))+w[3]+3250441966&4294967295,m=A+(v<<22&4294967295|v>>>10),v=_+(E^m&(A^E))+w[4]+4118548399&4294967295,_=m+(v<<7&4294967295|v>>>25),v=E+(A^_&(m^A))+w[5]+1200080426&4294967295,E=_+(v<<12&4294967295|v>>>20),v=A+(m^E&(_^m))+w[6]+2821735955&4294967295,A=E+(v<<17&4294967295|v>>>15),v=m+(_^A&(E^_))+w[7]+4249261313&4294967295,m=A+(v<<22&4294967295|v>>>10),v=_+(E^m&(A^E))+w[8]+1770035416&4294967295,_=m+(v<<7&4294967295|v>>>25),v=E+(A^_&(m^A))+w[9]+2336552879&4294967295,E=_+(v<<12&4294967295|v>>>20),v=A+(m^E&(_^m))+w[10]+4294925233&4294967295,A=E+(v<<17&4294967295|v>>>15),v=m+(_^A&(E^_))+w[11]+2304563134&4294967295,m=A+(v<<22&4294967295|v>>>10),v=_+(E^m&(A^E))+w[12]+1804603682&4294967295,_=m+(v<<7&4294967295|v>>>25),v=E+(A^_&(m^A))+w[13]+4254626195&4294967295,E=_+(v<<12&4294967295|v>>>20),v=A+(m^E&(_^m))+w[14]+2792965006&4294967295,A=E+(v<<17&4294967295|v>>>15),v=m+(_^A&(E^_))+w[15]+1236535329&4294967295,m=A+(v<<22&4294967295|v>>>10),v=_+(A^E&(m^A))+w[1]+4129170786&4294967295,_=m+(v<<5&4294967295|v>>>27),v=E+(m^A&(_^m))+w[6]+3225465664&4294967295,E=_+(v<<9&4294967295|v>>>23),v=A+(_^m&(E^_))+w[11]+643717713&4294967295,A=E+(v<<14&4294967295|v>>>18),v=m+(E^_&(A^E))+w[0]+3921069994&4294967295,m=A+(v<<20&4294967295|v>>>12),v=_+(A^E&(m^A))+w[5]+3593408605&4294967295,_=m+(v<<5&4294967295|v>>>27),v=E+(m^A&(_^m))+w[10]+38016083&4294967295,E=_+(v<<9&4294967295|v>>>23),v=A+(_^m&(E^_))+w[15]+3634488961&4294967295,A=E+(v<<14&4294967295|v>>>18),v=m+(E^_&(A^E))+w[4]+3889429448&4294967295,m=A+(v<<20&4294967295|v>>>12),v=_+(A^E&(m^A))+w[9]+568446438&4294967295,_=m+(v<<5&4294967295|v>>>27),v=E+(m^A&(_^m))+w[14]+3275163606&4294967295,E=_+(v<<9&4294967295|v>>>23),v=A+(_^m&(E^_))+w[3]+4107603335&4294967295,A=E+(v<<14&4294967295|v>>>18),v=m+(E^_&(A^E))+w[8]+1163531501&4294967295,m=A+(v<<20&4294967295|v>>>12),v=_+(A^E&(m^A))+w[13]+2850285829&4294967295,_=m+(v<<5&4294967295|v>>>27),v=E+(m^A&(_^m))+w[2]+4243563512&4294967295,E=_+(v<<9&4294967295|v>>>23),v=A+(_^m&(E^_))+w[7]+1735328473&4294967295,A=E+(v<<14&4294967295|v>>>18),v=m+(E^_&(A^E))+w[12]+2368359562&4294967295,m=A+(v<<20&4294967295|v>>>12),v=_+(m^A^E)+w[5]+4294588738&4294967295,_=m+(v<<4&4294967295|v>>>28),v=E+(_^m^A)+w[8]+2272392833&4294967295,E=_+(v<<11&4294967295|v>>>21),v=A+(E^_^m)+w[11]+1839030562&4294967295,A=E+(v<<16&4294967295|v>>>16),v=m+(A^E^_)+w[14]+4259657740&4294967295,m=A+(v<<23&4294967295|v>>>9),v=_+(m^A^E)+w[1]+2763975236&4294967295,_=m+(v<<4&4294967295|v>>>28),v=E+(_^m^A)+w[4]+1272893353&4294967295,E=_+(v<<11&4294967295|v>>>21),v=A+(E^_^m)+w[7]+4139469664&4294967295,A=E+(v<<16&4294967295|v>>>16),v=m+(A^E^_)+w[10]+3200236656&4294967295,m=A+(v<<23&4294967295|v>>>9),v=_+(m^A^E)+w[13]+681279174&4294967295,_=m+(v<<4&4294967295|v>>>28),v=E+(_^m^A)+w[0]+3936430074&4294967295,E=_+(v<<11&4294967295|v>>>21),v=A+(E^_^m)+w[3]+3572445317&4294967295,A=E+(v<<16&4294967295|v>>>16),v=m+(A^E^_)+w[6]+76029189&4294967295,m=A+(v<<23&4294967295|v>>>9),v=_+(m^A^E)+w[9]+3654602809&4294967295,_=m+(v<<4&4294967295|v>>>28),v=E+(_^m^A)+w[12]+3873151461&4294967295,E=_+(v<<11&4294967295|v>>>21),v=A+(E^_^m)+w[15]+530742520&4294967295,A=E+(v<<16&4294967295|v>>>16),v=m+(A^E^_)+w[2]+3299628645&4294967295,m=A+(v<<23&4294967295|v>>>9),v=_+(A^(m|~E))+w[0]+4096336452&4294967295,_=m+(v<<6&4294967295|v>>>26),v=E+(m^(_|~A))+w[7]+1126891415&4294967295,E=_+(v<<10&4294967295|v>>>22),v=A+(_^(E|~m))+w[14]+2878612391&4294967295,A=E+(v<<15&4294967295|v>>>17),v=m+(E^(A|~_))+w[5]+4237533241&4294967295,m=A+(v<<21&4294967295|v>>>11),v=_+(A^(m|~E))+w[12]+1700485571&4294967295,_=m+(v<<6&4294967295|v>>>26),v=E+(m^(_|~A))+w[3]+2399980690&4294967295,E=_+(v<<10&4294967295|v>>>22),v=A+(_^(E|~m))+w[10]+4293915773&4294967295,A=E+(v<<15&4294967295|v>>>17),v=m+(E^(A|~_))+w[1]+2240044497&4294967295,m=A+(v<<21&4294967295|v>>>11),v=_+(A^(m|~E))+w[8]+1873313359&4294967295,_=m+(v<<6&4294967295|v>>>26),v=E+(m^(_|~A))+w[15]+4264355552&4294967295,E=_+(v<<10&4294967295|v>>>22),v=A+(_^(E|~m))+w[6]+2734768916&4294967295,A=E+(v<<15&4294967295|v>>>17),v=m+(E^(A|~_))+w[13]+1309151649&4294967295,m=A+(v<<21&4294967295|v>>>11),v=_+(A^(m|~E))+w[4]+4149444226&4294967295,_=m+(v<<6&4294967295|v>>>26),v=E+(m^(_|~A))+w[11]+3174756917&4294967295,E=_+(v<<10&4294967295|v>>>22),v=A+(_^(E|~m))+w[2]+718787259&4294967295,A=E+(v<<15&4294967295|v>>>17),v=m+(E^(A|~_))+w[9]+3951481745&4294967295,R.g[0]=R.g[0]+_&4294967295,R.g[1]=R.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,R.g[2]=R.g[2]+A&4294967295,R.g[3]=R.g[3]+E&4294967295}r.prototype.u=function(R,_){_===void 0&&(_=R.length);for(var m=_-this.blockSize,w=this.B,A=this.h,E=0;E<_;){if(A==0)for(;E<=m;)s(this,R,E),E+=this.blockSize;if(typeof R=="string"){for(;E<_;)if(w[A++]=R.charCodeAt(E++),A==this.blockSize){s(this,w),A=0;break}}else for(;E<_;)if(w[A++]=R[E++],A==this.blockSize){s(this,w),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var _=1;_<R.length-8;++_)R[_]=0;var m=8*this.o;for(_=R.length-8;_<R.length;++_)R[_]=m&255,m/=256;for(this.u(R),R=Array(16),_=m=0;4>_;++_)for(var w=0;32>w;w+=8)R[m++]=this.g[_]>>>w&255;return R};function i(R,_){var m=c;return Object.prototype.hasOwnProperty.call(m,R)?m[R]:m[R]=_(R)}function o(R,_){this.h=_;for(var m=[],w=!0,A=R.length-1;0<=A;A--){var E=R[A]|0;w&&E==_||(m[A]=E,w=!1)}this.g=m}var c={};function l(R){return-128<=R&&128>R?i(R,function(_){return new o([_|0],0>_?-1:0)}):new o([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return k(h(-R));for(var _=[],m=1,w=0;R>=m;w++)_[w]=R/m|0,m*=4294967296;return new o(_,0)}function d(R,_){if(R.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(R.charAt(0)=="-")return k(d(R.substring(1),_));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=h(Math.pow(_,8)),w=p,A=0;A<R.length;A+=8){var E=Math.min(8,R.length-A),v=parseInt(R.substring(A,A+E),_);8>E?(E=h(Math.pow(_,E)),w=w.j(E).add(h(v))):(w=w.j(m),w=w.add(h(v)))}return w}var p=l(0),y=l(1),T=l(16777216);t=o.prototype,t.m=function(){if(D(this))return-k(this).m();for(var R=0,_=1,m=0;m<this.g.length;m++){var w=this.i(m);R+=(0<=w?w:4294967296+w)*_,_*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(P(this))return"0";if(D(this))return"-"+k(this).toString(R);for(var _=h(Math.pow(R,6)),m=this,w="";;){var A=U(m,_).g;m=$(m,A.j(_));var E=((0<m.g.length?m.g[0]:m.h)>>>0).toString(R);if(m=A,P(m))return E+w;for(;6>E.length;)E="0"+E;w=E+w}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function P(R){if(R.h!=0)return!1;for(var _=0;_<R.g.length;_++)if(R.g[_]!=0)return!1;return!0}function D(R){return R.h==-1}t.l=function(R){return R=$(this,R),D(R)?-1:P(R)?0:1};function k(R){for(var _=R.g.length,m=[],w=0;w<_;w++)m[w]=~R.g[w];return new o(m,~R.h).add(y)}t.abs=function(){return D(this)?k(this):this},t.add=function(R){for(var _=Math.max(this.g.length,R.g.length),m=[],w=0,A=0;A<=_;A++){var E=w+(this.i(A)&65535)+(R.i(A)&65535),v=(E>>>16)+(this.i(A)>>>16)+(R.i(A)>>>16);w=v>>>16,E&=65535,v&=65535,m[A]=v<<16|E}return new o(m,m[m.length-1]&-2147483648?-1:0)};function $(R,_){return R.add(k(_))}t.j=function(R){if(P(this)||P(R))return p;if(D(this))return D(R)?k(this).j(k(R)):k(k(this).j(R));if(D(R))return k(this.j(k(R)));if(0>this.l(T)&&0>R.l(T))return h(this.m()*R.m());for(var _=this.g.length+R.g.length,m=[],w=0;w<2*_;w++)m[w]=0;for(w=0;w<this.g.length;w++)for(var A=0;A<R.g.length;A++){var E=this.i(w)>>>16,v=this.i(w)&65535,Ae=R.i(A)>>>16,lt=R.i(A)&65535;m[2*w+2*A]+=v*lt,K(m,2*w+2*A),m[2*w+2*A+1]+=E*lt,K(m,2*w+2*A+1),m[2*w+2*A+1]+=v*Ae,K(m,2*w+2*A+1),m[2*w+2*A+2]+=E*Ae,K(m,2*w+2*A+2)}for(w=0;w<_;w++)m[w]=m[2*w+1]<<16|m[2*w];for(w=_;w<2*_;w++)m[w]=0;return new o(m,0)};function K(R,_){for(;(R[_]&65535)!=R[_];)R[_+1]+=R[_]>>>16,R[_]&=65535,_++}function z(R,_){this.g=R,this.h=_}function U(R,_){if(P(_))throw Error("division by zero");if(P(R))return new z(p,p);if(D(R))return _=U(k(R),_),new z(k(_.g),k(_.h));if(D(_))return _=U(R,k(_)),new z(k(_.g),_.h);if(30<R.g.length){if(D(R)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var m=y,w=_;0>=w.l(R);)m=se(m),w=se(w);var A=ie(m,1),E=ie(w,1);for(w=ie(w,2),m=ie(m,2);!P(w);){var v=E.add(w);0>=v.l(R)&&(A=A.add(m),E=v),w=ie(w,1),m=ie(m,1)}return _=$(R,A.j(_)),new z(A,_)}for(A=p;0<=R.l(_);){for(m=Math.max(1,Math.floor(R.m()/_.m())),w=Math.ceil(Math.log(m)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),E=h(m),v=E.j(_);D(v)||0<v.l(R);)m-=w,E=h(m),v=E.j(_);P(E)&&(E=y),A=A.add(E),R=$(R,v)}return new z(A,R)}t.A=function(R){return U(this,R).h},t.and=function(R){for(var _=Math.max(this.g.length,R.g.length),m=[],w=0;w<_;w++)m[w]=this.i(w)&R.i(w);return new o(m,this.h&R.h)},t.or=function(R){for(var _=Math.max(this.g.length,R.g.length),m=[],w=0;w<_;w++)m[w]=this.i(w)|R.i(w);return new o(m,this.h|R.h)},t.xor=function(R){for(var _=Math.max(this.g.length,R.g.length),m=[],w=0;w<_;w++)m[w]=this.i(w)^R.i(w);return new o(m,this.h^R.h)};function se(R){for(var _=R.g.length+1,m=[],w=0;w<_;w++)m[w]=R.i(w)<<1|R.i(w-1)>>>31;return new o(m,R.h)}function ie(R,_){var m=_>>5;_%=32;for(var w=R.g.length-m,A=[],E=0;E<w;E++)A[E]=0<_?R.i(E+m)>>>_|R.i(E+m+1)<<32-_:R.i(E+m);return new o(A,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,em=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,vr=o}).apply(typeof Vd<"u"?Vd:typeof self<"u"?self:typeof window<"u"?window:{});var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tm,js,nm,wo,zc,rm,sm,im;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof oo=="object"&&oo];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in f))break e;f=f[S]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,S={next:function(){if(!g&&f<a.length){var C=f++;return{value:u(C,a[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function y(a,u,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,y.apply(null,arguments)}function T(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,S,C){for(var q=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)q[Ee-2]=arguments[Ee];return u.prototype[S].apply(g,q)}}function D(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function k(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const S=a.length||0,C=g.length||0;a.length=S+C;for(let q=0;q<C;q++)a[S+q]=g[q]}else a.push(g)}}class ${constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function K(a){return/^[\s\xa0]*$/.test(a)}function z(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function U(a){return U[" "](a),a}U[" "]=function(){};var se=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function ie(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function R(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function _(a){const u={};for(const f in a)u[f]=a[f];return u}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,u){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)a[f]=g[f];for(let C=0;C<m.length;C++)f=m[C],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function E(a){c.setTimeout(()=>{throw a},0)}function v(){var a=xt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Ae{constructor(){this.h=this.g=null}add(u,f){const g=lt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var lt=new $(()=>new Oe,a=>a.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,ge=!1,xt=new Ae,tr=()=>{const a=c.Promise.resolve(void 0);Te=()=>{a.then(an)}};var an=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(f){E(f)}var u=lt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ge=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var Oa=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return a}();function nr(a,u){if(Be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(se){e:{try{U(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:rr[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nr.aa.h.call(this)}}P(nr,Be);var rr={2:"touch",3:"pen",4:"mouse"};nr.prototype.h=function(){nr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var cn="closure_listenable_"+(1e6*Math.random()|0),ys=0;function Fi(a,u,f,g,S){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=S,this.key=++ys,this.da=this.fa=!1}function Gt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function vs(a){this.src=a,this.g={},this.h=0}vs.prototype.add=function(a,u,f,g,S){var C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);var q=b(a,u,g,S);return-1<q?(u=a[q],f||(u.fa=!1)):(u=new Fi(u,this.src,C,!!g,S),u.fa=f,a.push(u)),u};function I(a,u){var f=u.type;if(f in a.g){var g=a.g[f],S=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=S)&&Array.prototype.splice.call(g,S,1),C&&(Gt(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function b(a,u,f,g){for(var S=0;S<a.length;++S){var C=a[S];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return S}return-1}var N="closure_lm_"+(1e6*Math.random()|0),L={};function V(a,u,f,g,S){if(Array.isArray(u)){for(var C=0;C<u.length;C++)V(a,u[C],f,g,S);return null}return f=te(f),a&&a[cn]?a.K(u,f,h(g)?!!g.capture:!1,S):x(a,u,f,!1,g,S)}function x(a,u,f,g,S,C){if(!u)throw Error("Invalid event type");var q=h(S)?!!S.capture:!!S,Ee=W(a);if(Ee||(a[N]=Ee=new vs(a)),f=Ee.add(u,f,g,q,C),f.proxy)return f;if(g=H(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Oa||(S=q),S===void 0&&(S=!1),a.addEventListener(u.toString(),g,S);else if(a.attachEvent)a.attachEvent(F(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function H(){function a(f){return u.call(a.src,a.listener,f)}const u=Z;return a}function j(a,u,f,g,S){if(Array.isArray(u))for(var C=0;C<u.length;C++)j(a,u[C],f,g,S);else g=h(g)?!!g.capture:!!g,f=te(f),a&&a[cn]?(a=a.i,u=String(u).toString(),u in a.g&&(C=a.g[u],f=b(C,f,g,S),-1<f&&(Gt(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete a.g[u],a.h--)))):a&&(a=W(a))&&(u=a.g[u.toString()],a=-1,u&&(a=b(u,f,g,S)),(f=-1<a?u[a]:null)&&B(f))}function B(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[cn])I(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(F(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=W(u))?(I(f,a),f.h==0&&(f.src=null,u[N]=null)):Gt(a)}}}function F(a){return a in L?L[a]:L[a]="on"+a}function Z(a,u){if(a.da)a=!0;else{u=new nr(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&B(a),a=f.call(g,u)}return a}function W(a){return a=a[N],a instanceof vs?a:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(a){return typeof a=="function"?a:(a[J]||(a[J]=function(u){return a.handleEvent(u)}),a[J])}function ee(){Ue.call(this),this.i=new vs(this),this.M=this,this.F=null}P(ee,Ue),ee.prototype[cn]=!0,ee.prototype.removeEventListener=function(a,u,f,g){j(this,a,u,f,g)};function ce(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Be(u,a);else if(u instanceof Be)u.target=u.target||a;else{var S=u;u=new Be(g,a),w(u,S)}if(S=!0,f)for(var C=f.length-1;0<=C;C--){var q=u.g=f[C];S=fe(q,g,!0,u)&&S}if(q=u.g=a,S=fe(q,g,!0,u)&&S,S=fe(q,g,!1,u)&&S,f)for(C=0;C<f.length;C++)q=u.g=f[C],S=fe(q,g,!1,u)&&S}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)Gt(f[g]);delete a.g[u],a.h--}}this.F=null},ee.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},ee.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function fe(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,C=0;C<u.length;++C){var q=u[C];if(q&&!q.da&&q.capture==f){var Ee=q.listener,Ke=q.ha||q.src;q.fa&&I(a.i,q),S=Ee.call(Ke,g)!==!1&&S}}return S&&!g.defaultPrevented}function Je(a,u,f){if(typeof a=="function")f&&(a=y(a,f));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function He(a){a.g=Je(()=>{a.g=null,a.i&&(a.i=!1,He(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Pt extends Ue{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:He(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xe(a){Ue.call(this),this.h=a,this.g={}}P(Xe,Ue);var Rn=[];function Ts(a){ie(a.g,function(u,f){this.g.hasOwnProperty(f)&&B(u)},a),a.g={}}Xe.prototype.N=function(){Xe.aa.N.call(this),Ts(this)},Xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var We=c.JSON.stringify,Ct=c.JSON.parse,Ui=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Va(){}Va.prototype.h=null;function Pu(a){return a.h||(a.h=a.i())}function Cu(){}var Is={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ma(){Be.call(this,"d")}P(Ma,Be);function La(){Be.call(this,"c")}P(La,Be);var sr={},ku=null;function Bi(){return ku=ku||new ee}sr.La="serverreachability";function Nu(a){Be.call(this,sr.La,a)}P(Nu,Be);function Es(a){const u=Bi();ce(u,new Nu(u))}sr.STAT_EVENT="statevent";function Du(a,u){Be.call(this,sr.STAT_EVENT,a),this.stat=u}P(Du,Be);function ut(a){const u=Bi();ce(u,new Du(u,a))}sr.Ma="timingevent";function Ou(a,u){Be.call(this,sr.Ma,a),this.size=u}P(Ou,Be);function ws(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function As(){this.g=!0}As.prototype.xa=function(){this.g=!1};function W_(a,u,f,g,S,C){a.info(function(){if(a.g)if(C)for(var q="",Ee=C.split("&"),Ke=0;Ke<Ee.length;Ke++){var me=Ee[Ke].split("=");if(1<me.length){var Ze=me[0];me=me[1];var et=Ze.split("_");q=2<=et.length&&et[1]=="type"?q+(Ze+"="+me+"&"):q+(Ze+"=redacted&")}}else q=null;else q=C;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+f+`
`+q})}function K_(a,u,f,g,S,C,q){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+f+`
`+C+" "+q})}function Mr(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+G_(a,f)+(g?" "+g:"")})}function z_(a,u){a.info(function(){return"TIMEOUT: "+u})}As.prototype.info=function(){};function G_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var q=1;q<S.length;q++)S[q]=""}}}}return We(f)}catch{return u}}var $i={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xa;function ji(){}P(ji,Va),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},xa=new ji;function Sn(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new Xe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mu}function Mu(){this.i=null,this.g="",this.h=!1}var Lu={},Fa={};function Ua(a,u,f){a.L=1,a.v=Ki(ln(u)),a.m=f,a.P=!0,xu(a,null)}function xu(a,u){a.F=Date.now(),qi(a),a.A=ln(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Ju(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Mu,a.g=gh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Pt(y(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(Rn[0]=S.toString()),S=Rn);for(var C=0;C<S.length;C++){var q=V(f,S[C],g||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Es(),W_(a.i,a.u,a.A,a.l,a.R,a.m)}Sn.prototype.ca=function(a){a=a.target;const u=this.M;u&&un(a)==3?u.j():this.Y(a)},Sn.prototype.Y=function(a){try{if(a==this.g)e:{const et=un(this.g);var u=this.g.Ba();const Fr=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||sh(this.g)))){this.J||et!=4||u==7||(u==8||0>=Fr?Es(3):Es(2)),Ba(this);var f=this.g.Z();this.X=f;t:if(Fu(this)){var g=sh(this.g);a="";var S=g.length,C=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),bs(this);var q="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(C&&u==S-1)});g.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,K_(this.i,this.u,this.A,this.l,this.R,et,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,Ke=this.g;if((Ee=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Ee)){var me=Ee;break t}}me=null}if(f=me)Mr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$a(this,f);else{this.o=!1,this.s=3,ut(12),ir(this),bs(this);break e}}if(this.P){f=!0;let Ft;for(;!this.J&&this.C<q.length;)if(Ft=Q_(this,q),Ft==Fa){et==4&&(this.s=4,ut(14),f=!1),Mr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==Lu){this.s=4,ut(15),Mr(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else Mr(this.i,this.l,Ft,null),$a(this,Ft);if(Fu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||q.length!=0||this.h.h||(this.s=1,ut(16),f=!1),this.o=this.o&&f,!f)Mr(this.i,this.l,q,"[Invalid Chunked Response]"),ir(this),bs(this);else if(0<q.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),za(Ze),Ze.M=!0,ut(11))}}else Mr(this.i,this.l,q,null),$a(this,q);et==4&&ir(this),this.o&&!this.J&&(et==4?hh(this.j,this):(this.o=!1,qi(this)))}else dy(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),ir(this),bs(this)}}}catch{}finally{}};function Fu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Q_(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?Fa:(f=Number(u.substring(f,g)),isNaN(f)?Lu:(g+=1,g+f>u.length?Fa:(u=u.slice(g,g+f),a.C=g+f,u)))}Sn.prototype.cancel=function(){this.J=!0,ir(this)};function qi(a){a.S=Date.now()+a.I,Uu(a,a.I)}function Uu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ws(y(a.ba,a),u)}function Ba(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Sn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(z_(this.i,this.A),this.L!=2&&(Es(),ut(17)),ir(this),this.s=2,bs(this)):Uu(this,this.S-a)};function bs(a){a.j.G==0||a.J||hh(a.j,a)}function ir(a){Ba(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ts(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function $a(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||ja(f.h,a))){if(!a.K&&ja(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Xi(f),Yi(f);else break e;Ka(f),ut(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=ws(y(f.Za,f),6e3));if(1>=ju(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ar(f,11)}else if((a.K||f.g==a)&&Xi(f),!K(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let me=S[u];if(f.T=me[0],me=me[1],f.G==2)if(me[0]=="c"){f.K=me[1],f.ia=me[2];const Ze=me[3];Ze!=null&&(f.la=Ze,f.j.info("VER="+f.la));const et=me[4];et!=null&&(f.Aa=et,f.j.info("SVER="+f.Aa));const Fr=me[5];Fr!=null&&typeof Fr=="number"&&0<Fr&&(g=1.5*Fr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ft=a.g;if(Ft){const eo=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eo){var C=g.h;C.g||eo.indexOf("spdy")==-1&&eo.indexOf("quic")==-1&&eo.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(qa(C,C.h),C.h=null))}if(g.D){const Ga=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Ga&&(g.ya=Ga,Re(g.I,g.D,Ga))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var q=a;if(g.qa=ph(g,g.J?g.ia:null,g.W),q.K){qu(g.h,q);var Ee=q,Ke=g.L;Ke&&(Ee.I=Ke),Ee.B&&(Ba(Ee),qi(Ee)),g.g=q}else lh(g);0<f.i.length&&Ji(f)}else me[0]!="stop"&&me[0]!="close"||ar(f,7);else f.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?ar(f,7):Wa(f):me[0]!="noop"&&f.l&&f.l.ta(me),f.v=0)}}Es(4)}catch{}}var Y_=class{constructor(a,u){this.g=a,this.map=u}};function Bu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $u(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ju(a){return a.h?1:a.g?a.g.size:0}function ja(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function qa(a,u){a.g?a.g.add(u):a.h=u}function qu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Bu.prototype.cancel=function(){if(this.i=Hu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Hu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return D(a.i)}function J_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function X_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function Wu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=X_(a),g=J_(a),S=g.length,C=0;C<S;C++)u.call(void 0,g[C],f&&f[C],a)}var Ku=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Z_(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),S=null;if(0<=g){var C=a[f].substring(0,g);S=a[f].substring(g+1)}else C=a[f];u(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof or){this.h=a.h,Hi(this,a.j),this.o=a.o,this.g=a.g,Wi(this,a.s),this.l=a.l;var u=a.i,f=new Ps;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),zu(this,f),this.m=a.m}else a&&(u=String(a).match(Ku))?(this.h=!1,Hi(this,u[1]||"",!0),this.o=Rs(u[2]||""),this.g=Rs(u[3]||"",!0),Wi(this,u[4]),this.l=Rs(u[5]||"",!0),zu(this,u[6]||"",!0),this.m=Rs(u[7]||"")):(this.h=!1,this.i=new Ps(null,this.h))}or.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ss(u,Gu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ss(u,Gu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ss(f,f.charAt(0)=="/"?ny:ty,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ss(f,sy)),a.join("")};function ln(a){return new or(a)}function Hi(a,u,f){a.j=f?Rs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Wi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function zu(a,u,f){u instanceof Ps?(a.i=u,iy(a.i,a.h)):(f||(u=Ss(u,ry)),a.i=new Ps(u,a.h))}function Re(a,u,f){a.i.set(u,f)}function Ki(a){return Re(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Rs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ss(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,ey),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ey(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Gu=/[#\/\?@]/g,ty=/[#\?:]/g,ny=/[#\?]/g,ry=/[#\?@]/g,sy=/#/g;function Ps(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Pn(a){a.g||(a.g=new Map,a.h=0,a.i&&Z_(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ps.prototype,t.add=function(a,u){Pn(this),this.i=null,a=Lr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Qu(a,u){Pn(a),u=Lr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Yu(a,u){return Pn(a),u=Lr(a,u),a.g.has(u)}t.forEach=function(a,u){Pn(this),this.g.forEach(function(f,g){f.forEach(function(S){a.call(u,S,g,this)},this)},this)},t.na=function(){Pn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const S=a[g];for(let C=0;C<S.length;C++)f.push(u[g])}return f},t.V=function(a){Pn(this);let u=[];if(typeof a=="string")Yu(this,a)&&(u=u.concat(this.g.get(Lr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Pn(this),this.i=null,a=Lr(this,a),Yu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Ju(a,u,f){Qu(a,u),0<f.length&&(a.i=null,a.g.set(Lr(a,u),D(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const C=encodeURIComponent(String(g)),q=this.V(g);for(g=0;g<q.length;g++){var S=C;q[g]!==""&&(S+="="+encodeURIComponent(String(q[g]))),a.push(S)}}return this.i=a.join("&")};function Lr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function iy(a,u){u&&!a.j&&(Pn(a),a.i=null,a.g.forEach(function(f,g){var S=g.toLowerCase();g!=S&&(Qu(this,g),Ju(this,S,f))},a)),a.j=u}function oy(a,u){const f=new As;if(c.Image){const g=new Image;g.onload=T(Cn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=T(Cn,f,"TestLoadImage: error",!1,u,g),g.onabort=T(Cn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=T(Cn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function ay(a,u){const f=new As,g=new AbortController,S=setTimeout(()=>{g.abort(),Cn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(C=>{clearTimeout(S),C.ok?Cn(f,"TestPingServer: ok",!0,u):Cn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Cn(f,"TestPingServer: error",!1,u)})}function Cn(a,u,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function cy(){this.g=new Ui}function ly(a,u,f){const g=f||"";try{Wu(a,function(S,C){let q=S;h(S)&&(q=We(S)),u.push(g+C+"="+encodeURIComponent(q))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function zi(a){this.l=a.Ub||null,this.j=a.eb||!1}P(zi,Va),zi.prototype.g=function(){return new Gi(this.l,this.j)},zi.prototype.i=function(a){return function(){return a}}({});function Gi(a,u){ee.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Gi,ee),t=Gi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,ks(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Cs(this):ks(this),this.readyState==3&&Xu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Cs(this))},t.Qa=function(a){this.g&&(this.response=a,Cs(this))},t.ga=function(){this.g&&Cs(this)};function Cs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ks(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function ks(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zu(a){let u="";return ie(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ha(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Zu(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Re(a,u,f))}function ke(a){ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ke,ee);var uy=/^https?$/i,hy=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xa.g(),this.v=this.o?Pu(this.o):Pu(xa),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){eh(this,C);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),S=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(hy,u,void 0))||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,q]of f)this.g.setRequestHeader(C,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rh(this),this.u=!0,this.g.send(a),this.u=!1}catch(C){eh(this,C)}};function eh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,th(a),Qi(a)}function th(a){a.A||(a.A=!0,ce(a,"complete"),ce(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ce(this,"complete"),ce(this,"abort"),Qi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?nh(this):this.bb())},t.bb=function(){nh(this)};function nh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||un(a)!=4||a.Z()!=2)){if(a.u&&un(a)==4)Je(a.Ea,0,a);else if(ce(a,"readystatechange"),un(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=q===0){var S=String(a.D).match(Ku)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),g=!uy.test(S?S.toLowerCase():"")}f=g}if(f)ce(a,"complete"),ce(a,"success");else{a.m=6;try{var C=2<un(a)?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.Z()+"]",th(a)}}finally{Qi(a)}}}}function Qi(a,u){if(a.g){rh(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ce(a,"ready");try{f.onreadystatechange=g}catch{}}}function rh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Ct(u)}};function sh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function dy(a){const u={};a=(a.g&&2<=un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(K(a[g]))continue;var f=A(a[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[S]||[];u[S]=C,C.push(f)}R(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ns(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function ih(a){this.Aa=0,this.i=[],this.j=new As,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ns("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ns("baseRetryDelayMs",5e3,a),this.cb=Ns("retryDelaySeedMs",1e4,a),this.Wa=Ns("forwardChannelMaxRetries",2,a),this.wa=Ns("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Bu(a&&a.concurrentRequestLimit),this.Da=new cy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ih.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){ut(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=ph(this,null,this.W),Ji(this)};function Wa(a){if(oh(a),a.G==3){var u=a.U++,f=ln(a.I);if(Re(f,"SID",a.K),Re(f,"RID",u),Re(f,"TYPE","terminate"),Ds(a,f),u=new Sn(a,a.j,u),u.L=2,u.v=Ki(ln(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=gh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),qi(u)}fh(a)}function Yi(a){a.g&&(za(a),a.g.cancel(),a.g=null)}function oh(a){Yi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Xi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ji(a){if(!$u(a.h)&&!a.s){a.s=!0;var u=a.Ga;Te||tr(),ge||(Te(),ge=!0),xt.add(u,a),a.B=0}}function fy(a,u){return ju(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ws(y(a.Ga,a,u),dh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new Sn(this,this.j,a);let C=this.o;if(this.S&&(C?(C=_(C),w(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=ch(this,S,u),f=ln(this.I),Re(f,"RID",a),Re(f,"CVER",22),this.D&&Re(f,"X-HTTP-Session-Id",this.D),Ds(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(Zu(C)))+"&"+u:this.m&&Ha(f,this.m,C)),qa(this.h,S),this.Ua&&Re(f,"TYPE","init"),this.P?(Re(f,"$req",u),Re(f,"SID","null"),S.T=!0,Ua(S,f,null)):Ua(S,f,u),this.G=2}}else this.G==3&&(a?ah(this,a):this.i.length==0||$u(this.h)||ah(this))};function ah(a,u){var f;u?f=u.l:f=a.U++;const g=ln(a.I);Re(g,"SID",a.K),Re(g,"RID",f),Re(g,"AID",a.T),Ds(a,g),a.m&&a.o&&Ha(g,a.m,a.o),f=new Sn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=ch(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),qa(a.h,f),Ua(f,g,u)}function Ds(a,u){a.H&&ie(a.H,function(f,g){Re(u,g,f)}),a.l&&Wu({},function(f,g){Re(u,g,f)})}function ch(a,u,f){f=Math.min(a.i.length,f);var g=a.l?y(a.l.Na,a.l,a):null;e:{var S=a.i;let C=-1;for(;;){const q=["count="+f];C==-1?0<f?(C=S[0].g,q.push("ofs="+C)):C=0:q.push("ofs="+C);let Ee=!0;for(let Ke=0;Ke<f;Ke++){let me=S[Ke].g;const Ze=S[Ke].map;if(me-=C,0>me)C=Math.max(0,S[Ke].g-100),Ee=!1;else try{ly(Ze,q,"req"+me+"_")}catch{g&&g(Ze)}}if(Ee){g=q.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function lh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Te||tr(),ge||(Te(),ge=!0),xt.add(u,a),a.v=0}}function Ka(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ws(y(a.Fa,a),dh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,uh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ws(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Yi(this),uh(this))};function za(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function uh(a){a.g=new Sn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=ln(a.qa);Re(u,"RID","rpc"),Re(u,"SID",a.K),Re(u,"AID",a.T),Re(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Re(u,"TO",a.ja),Re(u,"TYPE","xmlhttp"),Ds(a,u),a.m&&a.o&&Ha(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ki(ln(u)),f.m=null,f.P=!0,xu(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Yi(this),Ka(this),ut(19))};function Xi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function hh(a,u){var f=null;if(a.g==u){Xi(a),za(a),a.g=null;var g=2}else if(ja(a.h,u))f=u.D,qu(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;g=Bi(),ce(g,new Ou(g,f)),Ji(a)}else lh(a);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&fy(a,u)||g==2&&Ka(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),S){case 1:ar(a,5);break;case 4:ar(a,10);break;case 3:ar(a,6);break;default:ar(a,2)}}}function dh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function ar(a,u){if(a.j.info("Error code "+u),u==2){var f=y(a.fb,a),g=a.Xa;const S=!g;g=new or(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Hi(g,"https"),Ki(g),S?oy(g.toString(),f):ay(g.toString(),f)}else ut(2);a.G=0,a.l&&a.l.sa(u),fh(a),oh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function fh(a){if(a.G=0,a.ka=[],a.l){const u=Hu(a.h);(u.length!=0||a.i.length!=0)&&(k(a.ka,u),k(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function ph(a,u,f){var g=f instanceof or?ln(f):new or(f);if(g.g!="")u&&(g.g=u+"."+g.g),Wi(g,g.s);else{var S=c.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var C=new or(null);g&&Hi(C,g),u&&(C.g=u),S&&Wi(C,S),f&&(C.l=f),g=C}return f=a.D,u=a.ya,f&&u&&Re(g,f,u),Re(g,"VER",a.la),Ds(a,g),g}function gh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new ke(new zi({eb:f})):new ke(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function mh(){}t=mh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Zi(){}Zi.prototype.g=function(a,u){return new It(a,u)};function It(a,u){ee.call(this),this.g=new ih(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!K(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!K(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new xr(this)}P(It,ee),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Wa(this.g)},It.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=We(a),a=f);u.i.push(new Y_(u.Ya++,a)),u.G==3&&Ji(u)},It.prototype.N=function(){this.g.l=null,delete this.j,Wa(this.g),delete this.g,It.aa.N.call(this)};function _h(a){Ma.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}P(_h,Ma);function yh(){La.call(this),this.status=1}P(yh,La);function xr(a){this.g=a}P(xr,mh),xr.prototype.ua=function(){ce(this.g,"a")},xr.prototype.ta=function(a){ce(this.g,new _h(a))},xr.prototype.sa=function(a){ce(this.g,new yh)},xr.prototype.ra=function(){ce(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,im=function(){return new Zi},sm=function(){return Bi()},rm=sr,zc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$i.NO_ERROR=0,$i.TIMEOUT=8,$i.HTTP_ERROR=6,wo=$i,Vu.COMPLETE="complete",nm=Vu,Cu.EventType=Is,Is.OPEN="a",Is.CLOSE="b",Is.ERROR="c",Is.MESSAGE="d",ee.prototype.listen=ee.prototype.K,js=Cu,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,tm=ke}).apply(typeof oo<"u"?oo:typeof self<"u"?self:typeof window<"u"?window:{});const Md="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new pa("@firebase/firestore");function Ms(){return Ar.logLevel}function Y(t,...e){if(Ar.logLevel<=de.DEBUG){const n=e.map(Fl);Ar.debug(`Firestore (${fs}): ${t}`,...n)}}function En(t,...e){if(Ar.logLevel<=de.ERROR){const n=e.map(Fl);Ar.error(`Firestore (${fs}): ${t}`,...n)}}function rs(t,...e){if(Ar.logLevel<=de.WARN){const n=e.map(Fl);Ar.warn(`Firestore (${fs}): ${t}`,...n)}}function Fl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: `+t;throw En(e),new Error(e)}function Ie(t,e){t||re()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class lb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ub{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ie(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new om(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new nt(e)}}class hb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class db{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new hb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ie(this.o===void 0);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.R=n.token,new fb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=gb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new $e(0,0))}static max(){return new oe(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _i.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _i?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends _i{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const mb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends _i{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return mb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Q(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Q(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Se.fromString(e))}static fromName(e){return new X(Se.fromString(e).popFirst(5))}static empty(){return new X(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Se(e.slice()))}}function _b(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new zn(s,X.empty(),e)}function yb(t){return new zn(t.readTime,t.key,-1)}class zn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zn(oe.min(),X.empty(),-1)}static max(){return new zn(oe.max(),X.empty(),-1)}}function vb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ib{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==Tb)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Eb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Oi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ul.oe=-1;function va(t){return t==null}function Ho(t){return t===0&&1/t==-1/0}function wb(t){return typeof t=="number"&&Number.isInteger(t)&&!Ho(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ao(this.root,e,this.comparator,!0)}}class ao{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ze.RED,this.left=s??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xd(this.data.getIterator())}getIteratorFrom(e){return new xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new $t([])}unionWith(e){let n=new Qe(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lm("Invalid base64 string: "+i):i}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const Ab=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=Ab.exec(t);if(Ie(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $l(t){const e=t.mapValue.fields.__previous_value__;return Bl(e)?$l(e):e}function yi(t){const e=Gn(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class vi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co={mapValue:{}};function Rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bl(t)?4:Sb(t)?9007199254740991:Rb(t)?10:11:re()}function rn(t,e){if(t===e)return!0;const n=Rr(t);if(n!==Rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yi(t).isEqual(yi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Gn(s.timestampValue),c=Gn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return br(s.bytesValue).isEqual(br(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ne(s.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ne(s.integerValue)===Ne(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ne(s.doubleValue),c=Ne(i.doubleValue);return o===c?Ho(o)===Ho(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ld(o)!==Ld(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!rn(o[l],c[l])))return!1;return!0}(t,e);default:return re()}}function Ti(t,e){return(t.values||[]).find(n=>rn(n,e))!==void 0}function is(t,e){if(t===e)return 0;const n=Rr(t),r=Rr(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ne(i.integerValue||i.doubleValue),l=Ne(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Fd(t.timestampValue,e.timestampValue);case 4:return Fd(yi(t),yi(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,o){const c=br(i),l=br(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ye(c[h],l[h]);if(d!==0)return d}return ye(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ye(Ne(i.latitude),Ne(o.latitude));return c!==0?c:ye(Ne(i.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ud(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,d;const p=i.fields||{},y=o.fields||{},T=(c=p.value)===null||c===void 0?void 0:c.arrayValue,P=(l=y.value)===null||l===void 0?void 0:l.arrayValue,D=ye(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return D!==0?D:Ud(T,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===co.mapValue&&o===co.mapValue)return 0;if(i===co.mapValue)return 1;if(o===co.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const y=ye(l[p],d[p]);if(y!==0)return y;const T=is(c[l[p]],h[d[p]]);if(T!==0)return T}return ye(l.length,d.length)}(t.mapValue,e.mapValue);default:throw re()}}function Fd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Gn(t),r=Gn(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function Ud(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=is(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function os(t){return Gc(t)}function Gc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Gn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gc(n.fields[o])}`;return s+"}"}(t.mapValue):re()}function Bd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qc(t){return!!t&&"integerValue"in t}function jl(t){return!!t&&"arrayValue"in t}function $d(t){return!!t&&"nullValue"in t}function jd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ao(t){return!!t&&"mapValue"in t}function Rb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Sb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ti(n)}setAll(e){let n=Ge.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ti(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ao(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ps(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Nt(ti(this.value))}}function um(t){const e=[];return ps(t.fields,(n,r)=>{const s=new Ge([n]);if(Ao(r)){const i=um(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new $t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new it(e,0,oe.min(),oe.min(),oe.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,s){return new it(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new it(e,2,n,oe.min(),oe.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,oe.min(),oe.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.position=e,this.inclusive=n}}function qd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=is(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n="asc"){this.field=e,this.dir=n}}function Pb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{}class Le extends hm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kb(e,n,r):n==="array-contains"?new Ob(e,r):n==="in"?new Vb(e,r):n==="not-in"?new Mb(e,r):n==="array-contains-any"?new Lb(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Nb(e,r):new Db(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(is(n,this.value)):n!==null&&Rr(this.value)===Rr(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends hm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new zt(e,n)}matches(e){return dm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function dm(t){return t.op==="and"}function fm(t){return Cb(t)&&dm(t)}function Cb(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function Yc(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+os(t.value);if(fm(t))return t.filters.map(e=>Yc(e)).join(",");{const e=t.filters.map(n=>Yc(n)).join(",");return`${t.op}(${e})`}}function pm(t,e){return t instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&rn(r.value,s.value)}(t,e):t instanceof zt?function(r,s){return s instanceof zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&pm(o,s.filters[c]),!0):!1}(t,e):void re()}function gm(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof zt?function(n){return n.op.toString()+" {"+n.getFilters().map(gm).join(" ,")+"}"}(t):"Filter"}class kb extends Le{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class Nb extends Le{constructor(e,n){super(e,"in",n),this.keys=mm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Db extends Le{constructor(e,n){super(e,"not-in",n),this.keys=mm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class Ob extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jl(n)&&Ti(n.arrayValue,this.value)}}class Vb extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ti(this.value.arrayValue,n)}}class Mb extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ti(this.value.arrayValue,n)}}class Lb extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ti(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Wd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new xb(t,e,n,r,s,i,o)}function ql(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),va(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.ue=n}return e.ue}function Hl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Pb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hd(t.startAt,e.startAt)&&Hd(t.endAt,e.endAt)}function Jc(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Fb(t,e,n,r,s,i,o,c){return new gs(t,e,n,r,s,i,o,c)}function Wl(t){return new gs(t)}function Kd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _m(t){return t.collectionGroup!==null}function ni(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Qe(Ge.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ii(i,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new Ii(Ge.keyField(),r))}return e.ce}function tn(t){const e=ae(t);return e.le||(e.le=Ub(e,ni(t))),e.le}function Ub(t,e){if(t.limitType==="F")return Wd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ii(s.field,i)});const n=t.endAt?new Wo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wo(t.startAt.position,t.startAt.inclusive):null;return Wd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xc(t,e){const n=t.filters.concat([e]);return new gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Zc(t,e,n){return new gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ta(t,e){return Hl(tn(t),tn(e))&&t.limitType===e.limitType}function ym(t){return`${ql(tn(t))}|lt:${t.limitType}`}function qr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>gm(s)).join(", ")}]`),va(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>os(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>os(s)).join(",")),`Target(${r})`}(tn(t))}; limitType=${t.limitType})`}function Ia(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ni(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=qd(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,ni(r),s)||r.endAt&&!function(o,c,l){const h=qd(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,ni(r),s))}(t,e)}function Bb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vm(t){return(e,n)=>{let r=!1;for(const s of ni(t)){const i=$b(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function $b(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?is(l,h):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return cm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=new Ce(X.comparator);function wn(){return jb}const Tm=new Ce(X.comparator);function qs(...t){let e=Tm;for(const n of t)e=e.insert(n.key,n);return e}function Im(t){let e=Tm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function mr(){return ri()}function Em(){return ri()}function ri(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const qb=new Ce(X.comparator),Hb=new Qe(X.comparator);function he(...t){let e=Hb;for(const n of t)e=e.add(n);return e}const Wb=new Qe(ye);function Kb(){return Wb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ho(e)?"-0":e}}function wm(t){return{integerValue:""+t}}function zb(t,e){return wb(e)?wm(e):Kl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this._=void 0}}function Gb(t,e,n){return t instanceof Ei?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bl(i)&&(i=$l(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof wi?bm(t,e):t instanceof Ai?Rm(t,e):function(s,i){const o=Am(s,i),c=zd(o)+zd(s.Pe);return Qc(o)&&Qc(s.Pe)?wm(c):Kl(s.serializer,c)}(t,e)}function Qb(t,e,n){return t instanceof wi?bm(t,e):t instanceof Ai?Rm(t,e):n}function Am(t,e){return t instanceof Ko?function(r){return Qc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ei extends Ea{}class wi extends Ea{constructor(e){super(),this.elements=e}}function bm(t,e){const n=Sm(e);for(const r of t.elements)n.some(s=>rn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ai extends Ea{constructor(e){super(),this.elements=e}}function Rm(t,e){let n=Sm(e);for(const r of t.elements)n=n.filter(s=>!rn(s,r));return{arrayValue:{values:n}}}class Ko extends Ea{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function zd(t){return Ne(t.integerValue||t.doubleValue)}function Sm(t){return jl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n){this.field=e,this.transform=n}}function Jb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof wi&&s instanceof wi||r instanceof Ai&&s instanceof Ai?ss(r.elements,s.elements,rn):r instanceof Ko&&s instanceof Ko?rn(r.Pe,s.Pe):r instanceof Ei&&s instanceof Ei}(t.transform,e.transform)}class Xb{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wa{}function Pm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zl(t.key,Ht.none()):new Vi(t.key,t.data,Ht.none());{const n=t.data,r=Nt.empty();let s=new Qe(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Dr(t.key,r,new $t(s.toArray()),Ht.none())}}function Zb(t,e,n){t instanceof Vi?function(s,i,o){const c=s.value.clone(),l=Qd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(s,i,o){if(!bo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Qd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Cm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function si(t,e,n,r){return t instanceof Vi?function(i,o,c,l){if(!bo(i.precondition,o))return c;const h=i.value.clone(),d=Yd(i.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(i,o,c,l){if(!bo(i.precondition,o))return c;const h=Yd(i.fieldTransforms,l,o),d=o.data;return d.setAll(Cm(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return bo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function eR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Am(r.transform,s||null);i!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,i))}return n||null}function Gd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ss(r,s,(i,o)=>Jb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vi extends wa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Dr extends wa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Qd(t,e,n){const r=new Map;Ie(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Qb(o,c,n[s]))}return r}function Yd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Gb(i,o,e))}return r}class zl extends wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tR extends wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Zb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Em();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Pm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>Gd(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>Gd(n,r))}}class Gl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ie(e.mutations.length===r.length);let s=function(){return qb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Gl(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,pe;function iR(t){switch(t){default:return re();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function km(t){if(t===void 0)return En("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ve.OK:return O.OK;case Ve.CANCELLED:return O.CANCELLED;case Ve.UNKNOWN:return O.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return O.INTERNAL;case Ve.UNAVAILABLE:return O.UNAVAILABLE;case Ve.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ve.NOT_FOUND:return O.NOT_FOUND;case Ve.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ve.ABORTED:return O.ABORTED;case Ve.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ve.DATA_LOSS:return O.DATA_LOSS;default:return re()}}(pe=Ve||(Ve={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=new vr([4294967295,4294967295],0);function Jd(t){const e=oR().encode(t),n=new em;return n.update(e),new Uint8Array(n.digest())}function Xd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vr([n,r],0),new vr([s,i],0)]}class Ql{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hs(`Invalid padding: ${n}`);if(r<0)throw new Hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=vr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(vr.fromNumber(r)));return s.compare(aR)===1&&(s=new vr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Jd(e),[r,s]=Xd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ql(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Jd(e),[r,s]=Xd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Mi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Aa(oe.min(),s,new Ce(ye),wn(),he())}}class Mi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Mi(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Nm{constructor(e,n){this.targetId=e,this.me=n}}class Dm{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Zd{constructor(){this.fe=0,this.ge=tf(),this.pe=Ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=he(),n=he(),r=he();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:re()}}),new Mi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=tf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ie(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class cR{constructor(e){this.Le=e,this.Be=new Map,this.ke=wn(),this.qe=ef(),this.Qe=new Ce(ye)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Jc(i))if(r===0){const o=new X(i.path);this.Ue(n,o,it.newNoDocument(o,oe.min()))}else Ie(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=br(r).toUint8Array()}catch(l){if(l instanceof lm)return rs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ql(o,s,i)}catch(l){return rs(l instanceof Hs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Jc(c.target)){const l=new X(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,it.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=he();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Aa(e,n,this.Qe,this.ke,r);return this.ke=wn(),this.qe=ef(),this.Qe=new Ce(ye),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Zd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Qe(ye),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Zd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ef(){return new Ce(X.comparator)}function tf(){return new Ce(X.comparator)}const lR={asc:"ASCENDING",desc:"DESCENDING"},uR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hR={and:"AND",or:"OR"};class dR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function el(t,e){return t.useProto3Json||va(e)?e:{value:e}}function zo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Om(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fR(t,e){return zo(t,e.toTimestamp())}function nn(t){return Ie(!!t),oe.fromTimestamp(function(n){const r=Gn(n);return new $e(r.seconds,r.nanos)}(t))}function Yl(t,e){return tl(t,e).canonicalString()}function tl(t,e){const n=function(s){return new Se(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Vm(t){const e=Se.fromString(t);return Ie(Um(e)),e}function nl(t,e){return Yl(t.databaseId,e.path)}function _c(t,e){const n=Vm(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(Lm(n))}function Mm(t,e){return Yl(t.databaseId,e)}function pR(t){const e=Vm(t);return e.length===4?Se.emptyPath():Lm(e)}function rl(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Lm(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function nf(t,e,n){return{name:nl(t,e),fields:n.value.mapValue.fields}}function gR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ie(d===void 0||typeof d=="string"),Ye.fromBase64String(d||"")):(Ie(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ye.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const d=h.code===void 0?O.UNKNOWN:km(h.code);return new Q(d,h.message||"")}(o);n=new Dm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_c(t,r.document.name),i=nn(r.document.updateTime),o=r.document.createTime?nn(r.document.createTime):oe.min(),c=new Nt({mapValue:{fields:r.document.fields}}),l=it.newFoundDocument(s,i,o,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Ro(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_c(t,r.document),i=r.readTime?nn(r.readTime):oe.min(),o=it.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ro([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_c(t,r.document),i=r.removedTargetIds||[];n=new Ro([],i,s,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new sR(s,i),c=r.targetId;n=new Nm(c,o)}}return n}function mR(t,e){let n;if(e instanceof Vi)n={update:nf(t,e.key,e.value)};else if(e instanceof zl)n={delete:nl(t,e.key)};else if(e instanceof Dr)n={update:nf(t,e.key,e.data),updateMask:bR(e.fieldMask)};else{if(!(e instanceof tR))return re();n={verify:nl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ei)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof wi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ai)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ko)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:fR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function _R(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?nn(s.updateTime):nn(i);return o.isEqual(oe.min())&&(o=nn(i)),new Xb(o,s.transformResults||[])}(n,e))):[]}function yR(t,e){return{documents:[Mm(t,e.path)]}}function vR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Mm(t,s);const i=function(h){if(h.length!==0)return Fm(zt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(y){return{field:Hr(y.field),direction:ER(y.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=el(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function TR(t){let e=pR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ie(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const y=xm(p);return y instanceof zt&&fm(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(P){return new Ii(Wr(P.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(n.orderBy));let c=null;n.limit&&(c=function(p){let y;return y=typeof p=="object"?p.value:p,va(y)?null:y}(n.limit));let l=null;n.startAt&&(l=function(p){const y=!!p.before,T=p.values||[];return new Wo(T,y)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const y=!p.before,T=p.values||[];return new Wo(T,y)}(n.endAt)),Fb(e,s,o,i,c,"F",l,h)}function IR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Wr(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Wr(n.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wr(n.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wr(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Wr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zt.create(n.compositeFilter.filters.map(r=>xm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function ER(t){return lR[t]}function wR(t){return uR[t]}function AR(t){return hR[t]}function Hr(t){return{fieldPath:t.canonicalString()}}function Wr(t){return Ge.fromServerFormat(t.fieldPath)}function Fm(t){return t instanceof Le?function(n){if(n.op==="=="){if(jd(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NAN"}};if($d(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jd(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NAN"}};if($d(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hr(n.field),op:wR(n.op),value:n.value}}}(t):t instanceof zt?function(n){const r=n.getFilters().map(s=>Fm(s));return r.length===1?r[0]:{compositeFilter:{op:AR(n.op),filters:r}}}(t):re()}function bR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Um(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r,s,i=oe.min(),o=oe.min(),c=Ye.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.ct=e}}function SR(t){const e=TR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.un=new CR}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(zn.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(zn.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class CR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new as(0)}static kn(){return new as(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&si(r.mutation,s,$t.empty(),$e.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=mr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=wn();const o=ri(),c=function(){return ri()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Dr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),si(d.mutation,h,d.mutation.getFieldMask(),$e.now())):o.set(h.key,$t.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new NR(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=ri();let s=new Ce((o,c)=>o-c),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||$t.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||he()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=Em();d.forEach(y=>{if(!i.has(y)){const T=Pm(n.get(y),r.get(y));T!==null&&p.set(y,T),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_m(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(mr());let c=-1,l=i;return o.next(h=>M.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(y=>{l=l.insert(d,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,he())).next(d=>({batchId:c,changes:Im(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qs();return this.indexManager.getCollectionParents(e,i).next(c=>M.forEach(c,l=>{const h=function(p,y){return new gs(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,it.newInvalidDocument(d)))});let c=qs();return o.forEach((l,h)=>{const d=i.get(l);d!==void 0&&si(d.mutation,h,$t.empty(),$e.now()),Ia(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:nn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:SR(s.bundledQuery),readTime:nn(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(){this.overlays=new Ce(X.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=mr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=mr(),i=n.length+1,o=new X(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ce((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=mr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=mr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return M.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rR(n,r));let i=this.Ir.get(n);i===void 0&&(i=he(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.Tr=new Qe(je.Er),this.dr=new Qe(je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Se([])),r=new je(n,e),s=new je(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Se([])),r=new je(n,e),s=new je(n,e+1);let i=he();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||ye(e.wr,n.wr)}static Ar(e,n){return ye(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Qe(je.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new je(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),s=new je(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(ye);return n.forEach(s=>{const i=new je(s,0),o=new je(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new je(new X(i),0);let c=new Qe(ye);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),M.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ie(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,s=>{const i=new je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new je(n,0),s=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.Mr=e,this.docs=function(){return new Ce(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=wn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=wn();const o=n.path,c=new X(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||vb(yb(d),r)<=0||(s.has(d.key)||Ia(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){re()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FR(this)}getSize(e){return M.resolve(this.size)}}class FR extends kR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.persistence=e,this.Nr=new ms(n=>ql(n),Hl),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Jl,this.targetCount=0,this.kr=as.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new as(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Ul(0),this.Kr=!1,this.Kr=!0,this.$r=new MR,this.referenceDelegate=e(this),this.Ur=new UR(this),this.indexManager=new PR,this.remoteDocumentCache=function(s){return new xR(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new RR(n),this.Gr=new OR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new VR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new LR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new $R(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class $R extends Ib{constructor(e){super(),this.currentSequenceNumber=e}}class Xl{constructor(e){this.persistence=e,this.Jr=new Jl,this.Yr=null}static Zr(e){return new Xl(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const s=X.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return aI()?8:Eb(ct())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new jR;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ms()<=de.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Ms()<=de.DEBUG&&Y("QueryEngine","Query:",qr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ms()<=de.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(n))):M.resolve())}Yi(e,n){if(Kd(n))return M.resolve(null);let r=tn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Zc(n,null,"F"),r=tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,c);return this.ns(n,h,o,l.readTime)?this.Yi(e,Zc(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,s){return Kd(n)||s.isEqual(oe.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?M.resolve(null):(Ms()<=de.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qr(n)),this.rs(e,o,n,_b(s,-1)).next(c=>c))})}ts(e,n){let r=new Qe(vm(e));return n.forEach((s,i)=>{Ia(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ms()<=de.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",qr(n)),this.Ji.getDocumentsMatchingQuery(e,n,zn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ce(ye),this._s=new ms(i=>ql(i),Hl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function WR(t,e,n,r){return new HR(t,e,n,r)}async function Bm(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=he();for(const h of s){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function KR(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,y=p.keys();let T=M.resolve();return y.forEach(P=>{T=T.next(()=>d.getEntry(l,P)).next(D=>{const k=h.docVersions.get(P);Ie(k!==null),D.version.compareTo(k)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),d.addEntry(D)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=he();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function $m(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function zR(t,e){const n=ae(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((d,p)=>{const y=s.get(p);if(!y)return;c.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let T=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Ye.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),s=s.insert(p,T),function(D,k,$){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(y,T,d)&&c.push(n.Ur.updateTargetData(i,T))});let l=wn(),h=he();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(GR(i,o,e.documentUpdates).next(d=>{l=d.Ps,h=d.Is})),!r.isEqual(oe.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return M.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=s,i))}function GR(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=wn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Y("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function QR(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function YR(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Un(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function sl(t,e,n){const r=ae(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Oi(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function rf(t,e,n){const r=ae(t);let s=oe.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,d){const p=ae(l),y=p._s.get(d);return y!==void 0?M.resolve(p.os.get(y)):p.Ur.getTargetData(h,d)}(r,o,tn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:he())).next(c=>(JR(r,Bb(e),c),{documents:c,Ts:i})))}function JR(t,e,n){let r=t.us.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class sf{constructor(){this.activeTargetIds=Kb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XR{constructor(){this.so=new sf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new sf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo=null;function yc(){return lo===null?lo=function(){return 268435456+Math.round(2147483648*Math.random())}():lo++,"0x"+lo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class n0 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=yc(),l=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,l,h,s).then(d=>(Y("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw rs("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=e0[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=yc();return new Promise((o,c)=>{const l=new tm;l.setWithCredentials(!0),l.listenOnce(nm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case wo.NO_ERROR:const d=l.getResponseJson();Y(tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case wo.TIMEOUT:Y(tt,`RPC '${e}' ${i} timed out`),c(new Q(O.DEADLINE_EXCEEDED,"Request time out"));break;case wo.HTTP_ERROR:const p=l.getStatus();if(Y(tt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let y=l.getResponseJson();Array.isArray(y)&&(y=y[0]);const T=y==null?void 0:y.error;if(T&&T.status&&T.message){const P=function(k){const $=k.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf($)>=0?$:O.UNKNOWN}(T.status);c(new Q(P,T.message))}else c(new Q(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Q(O.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{Y(tt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Y(tt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=yc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=im(),c=sm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");Y(tt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let y=!1,T=!1;const P=new t0({Io:k=>{T?Y(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(y||(Y(tt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),Y(tt,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},To:()=>p.close()}),D=(k,$,K)=>{k.listen($,z=>{try{K(z)}catch(U){setTimeout(()=>{throw U},0)}})};return D(p,js.EventType.OPEN,()=>{T||(Y(tt,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),D(p,js.EventType.CLOSE,()=>{T||(T=!0,Y(tt,`RPC '${e}' stream ${s} transport closed`),P.So())}),D(p,js.EventType.ERROR,k=>{T||(T=!0,rs(tt,`RPC '${e}' stream ${s} transport errored:`,k),P.So(new Q(O.UNAVAILABLE,"The operation could not be completed")))}),D(p,js.EventType.MESSAGE,k=>{var $;if(!T){const K=k.data[0];Ie(!!K);const z=K,U=z.error||(($=z[0])===null||$===void 0?void 0:$.error);if(U){Y(tt,`RPC '${e}' stream ${s} received error:`,U);const se=U.status;let ie=function(m){const w=Ve[m];if(w!==void 0)return km(w)}(se),R=U.message;ie===void 0&&(ie=O.INTERNAL,R="Unknown error status: "+se+" with message "+U.message),T=!0,P.So(new Q(ie,R)),p.close()}else Y(tt,`RPC '${e}' stream ${s} received:`,K),P.bo(K)}}),D(c,rm.STAT_EVENT,k=>{k.stat===zc.PROXY?Y(tt,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===zc.NOPROXY&&Y(tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function vc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){return new dR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new jm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(En(n.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Q(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class r0 extends qm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=gR(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?nn(o.readTime):oe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=rl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Jc(l)?{documents:yR(i,l)}:{query:vR(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Om(i,o.resumeToken);const h=el(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(oe.min())>0){c.readTime=zo(i,o.snapshotVersion.toTimestamp());const h=el(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=IR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=rl(this.serializer),n.removeTarget=e,this.a_(n)}}class s0 extends qm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=_R(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=rl(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Q(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,tl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(O.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,tl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class o0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(En(n),this.D_=!1):Y("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Or(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=ae(l);h.L_.add(4),await Li(h),h.q_.set("Unknown"),h.L_.delete(4),await Ra(h)}(this))})}),this.q_=new o0(r,s)}}async function Ra(t){if(Or(t))for(const e of t.B_)await e(!0)}async function Li(t){for(const e of t.B_)await e(!1)}function Hm(t,e){const n=ae(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ru(n)?nu(n):_s(n).r_()&&tu(n,e))}function eu(t,e){const n=ae(t),r=_s(n);n.N_.delete(e),r.r_()&&Wm(n,e),n.N_.size===0&&(r.r_()?r.o_():Or(n)&&n.q_.set("Unknown"))}function tu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_s(t).A_(e)}function Wm(t,e){t.Q_.xe(e),_s(t).R_(e)}function nu(t){t.Q_=new cR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),_s(t).start(),t.q_.v_()}function ru(t){return Or(t)&&!_s(t).n_()&&t.N_.size>0}function Or(t){return ae(t).L_.size===0}function Km(t){t.Q_=void 0}async function c0(t){t.q_.set("Online")}async function l0(t){t.N_.forEach((e,n)=>{tu(t,e)})}async function u0(t,e){Km(t),ru(t)?(t.q_.M_(e),nu(t)):t.q_.set("Unknown")}async function h0(t,e,n){if(t.q_.set("Online"),e instanceof Dm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Go(t,r)}else if(e instanceof Ro?t.Q_.Ke(e):e instanceof Nm?t.Q_.He(e):t.Q_.We(e),!n.isEqual(oe.min()))try{const r=await $m(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const d=i.N_.get(l);if(!d)return;i.N_.set(l,d.withResumeToken(Ye.EMPTY_BYTE_STRING,d.snapshotVersion)),Wm(i,l);const p=new Un(d.target,l,h,d.sequenceNumber);tu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await Go(t,r)}}async function Go(t,e,n){if(!Oi(e))throw e;t.L_.add(1),await Li(t),t.q_.set("Offline"),n||(n=()=>$m(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ra(t)})}function zm(t,e){return e().catch(n=>Go(t,n,e))}async function Sa(t){const e=ae(t),n=Qn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;d0(e);)try{const s=await QR(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,f0(e,s)}catch(s){await Go(e,s)}Gm(e)&&Qm(e)}function d0(t){return Or(t)&&t.O_.length<10}function f0(t,e){t.O_.push(e);const n=Qn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Gm(t){return Or(t)&&!Qn(t).n_()&&t.O_.length>0}function Qm(t){Qn(t).start()}async function p0(t){Qn(t).p_()}async function g0(t){const e=Qn(t);for(const n of t.O_)e.m_(n.mutations)}async function m0(t,e,n){const r=t.O_.shift(),s=Gl.from(r,e,n);await zm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Sa(t)}async function _0(t,e){e&&Qn(t).V_&&await async function(r,s){if(function(o){return iR(o)&&o!==O.ABORTED}(s.code)){const i=r.O_.shift();Qn(r).s_(),await zm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Sa(r)}}(t,e),Gm(t)&&Qm(t)}async function af(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=Or(n);n.L_.add(3),await Li(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ra(n)}async function y0(t,e){const n=ae(t);e?(n.L_.delete(2),await Ra(n)):e||(n.L_.add(2),await Li(n),n.q_.set("Unknown"))}function _s(t){return t.K_||(t.K_=function(n,r,s){const i=ae(n);return i.w_(),new r0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:c0.bind(null,t),Ro:l0.bind(null,t),mo:u0.bind(null,t),d_:h0.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ru(t)?nu(t):t.q_.set("Unknown")):(await t.K_.stop(),Km(t))})),t.K_}function Qn(t){return t.U_||(t.U_=function(n,r,s){const i=ae(n);return i.w_(),new s0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:p0.bind(null,t),mo:_0.bind(null,t),f_:g0.bind(null,t),g_:m0.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Sa(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new su(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iu(t,e){if(En("AsyncQueue",`${e}: ${t}`),Oi(t))return new Q(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=qs(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.W_=new Ce(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class cs{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new cs(e,n,es.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ta(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class T0{constructor(){this.queries=lf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ae(n),i=s.queries;s.queries=lf(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new Q(O.ABORTED,"Firestore shutting down"))}}function lf(){return new ms(t=>ym(t),Ta)}async function I0(t,e){const n=ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new v0,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=iu(o,`Initialization of query '${qr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&ou(n)}async function E0(t,e){const n=ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function w0(t,e){const n=ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&ou(n)}function A0(t,e,n){const r=ae(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function ou(t){t.Y_.forEach(e=>{e.next()})}var il,uf;(uf=il||(il={})).ea="default",uf.Cache="cache";class b0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==il.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.key=e}}class Jm{constructor(e){this.key=e}}class R0{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=he(),this.mutatedKeys=he(),this.Aa=vm(e),this.Ra=new es(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new cf,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const y=s.get(d),T=Ia(this.query,p)?p:null,P=!!y&&this.mutatedKeys.has(y.key),D=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let k=!1;y&&T?y.data.isEqual(T.data)?P!==D&&(r.track({type:3,doc:T}),k=!0):this.ga(y,T)||(r.track({type:2,doc:T}),k=!0,(l&&this.Aa(T,l)>0||h&&this.Aa(T,h)<0)&&(c=!0)):!y&&T?(r.track({type:0,doc:T}),k=!0):y&&!T&&(r.track({type:1,doc:y}),k=!0,(l||h)&&(c=!0)),k&&(T?(o=o.add(T),i=D?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(T,P){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return D(T)-D(P)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new cs(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new cf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=he(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Jm(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Ym(r))}),n}ba(e){this.Ta=e.Ts,this.da=he();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return cs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class S0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class P0{constructor(e){this.key=e,this.va=!1}}class C0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ms(c=>ym(c),Ta),this.Ma=new Map,this.xa=new Set,this.Oa=new Ce(X.comparator),this.Na=new Map,this.La=new Jl,this.Ba={},this.ka=new Map,this.qa=as.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function k0(t,e,n=!0){const r=r_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Xm(r,e,n,!0),s}async function N0(t,e){const n=r_(t);await Xm(n,e,!0,!1)}async function Xm(t,e,n,r){const s=await YR(t.localStore,tn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await D0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Hm(t.remoteStore,s),c}async function D0(t,e,n,r,s){t.Ka=(p,y,T)=>async function(D,k,$,K){let z=k.view.ma($);z.ns&&(z=await rf(D.localStore,k.query,!1).then(({documents:R})=>k.view.ma(R,z)));const U=K&&K.targetChanges.get(k.targetId),se=K&&K.targetMismatches.get(k.targetId)!=null,ie=k.view.applyChanges(z,D.isPrimaryClient,U,se);return df(D,k.targetId,ie.wa),ie.snapshot}(t,p,y,T);const i=await rf(t.localStore,e,!0),o=new R0(e,i.Ts),c=o.ma(i.documents),l=Mi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);df(t,n,h.wa);const d=new S0(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function O0(t,e,n){const r=ae(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Ta(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await sl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&eu(r.remoteStore,s.targetId),ol(r,s.targetId)}).catch(Di)):(ol(r,s.targetId),await sl(r.localStore,s.targetId,!0))}async function V0(t,e){const n=ae(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),eu(n.remoteStore,r.targetId))}async function M0(t,e,n){const r=j0(t);try{const s=await function(o,c){const l=ae(o),h=$e.now(),d=c.reduce((T,P)=>T.add(P.key),he());let p,y;return l.persistence.runTransaction("Locally write mutations","readwrite",T=>{let P=wn(),D=he();return l.cs.getEntries(T,d).next(k=>{P=k,P.forEach(($,K)=>{K.isValidDocument()||(D=D.add($))})}).next(()=>l.localDocuments.getOverlayedDocuments(T,P)).next(k=>{p=k;const $=[];for(const K of c){const z=eR(K,p.get(K.key).overlayedDocument);z!=null&&$.push(new Dr(K.key,z,um(z.value.mapValue),Ht.exists(!0)))}return l.mutationQueue.addMutationBatch(T,h,$,c)}).next(k=>{y=k;const $=k.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(T,k.batchId,$)})}).then(()=>({batchId:y.batchId,changes:Im(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ce(ye)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await xi(r,s.changes),await Sa(r.remoteStore)}catch(s){const i=iu(s,"Failed to persist write");n.reject(i)}}async function Zm(t,e){const n=ae(t);try{const r=await zR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ie(o.va):s.removedDocuments.size>0&&(Ie(o.va),o.va=!1))}),await xi(n,r,e)}catch(r){await Di(r)}}function hf(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ae(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const y of p.j_)y.Z_(c)&&(h=!0)}),h&&ou(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function L0(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ce(X.comparator);o=o.insert(i,it.newNoDocument(i,oe.min()));const c=he().add(i),l=new Aa(oe.min(),new Map,new Ce(ye),o,c);await Zm(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),au(r)}else await sl(r.localStore,e,!1).then(()=>ol(r,e,n)).catch(Di)}async function x0(t,e){const n=ae(t),r=e.batch.batchId;try{const s=await KR(n.localStore,e);t_(n,r,null),e_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xi(n,s)}catch(s){await Di(s)}}async function F0(t,e,n){const r=ae(t);try{const s=await function(o,c){const l=ae(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Ie(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);t_(r,e,n),e_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xi(r,s)}catch(s){await Di(s)}}function e_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function t_(t,e,n){const r=ae(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function ol(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||n_(t,r)})}function n_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(eu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),au(t))}function df(t,e,n){for(const r of n)r instanceof Ym?(t.La.addReference(r.key,e),U0(t,r)):r instanceof Jm?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||n_(t,r.key)):re()}function U0(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.xa.add(r),au(t))}function au(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Se.fromString(e)),r=t.qa.next();t.Na.set(r,new P0(n)),t.Oa=t.Oa.insert(n,r),Hm(t.remoteStore,new Un(tn(Wl(n.path)),r,"TargetPurposeLimboResolution",Ul.oe))}}async function xi(t,e,n){const r=ae(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Zl.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const d=ae(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,y=>M.forEach(y.$i,T=>d.persistence.referenceDelegate.addReference(p,y.targetId,T)).next(()=>M.forEach(y.Ui,T=>d.persistence.referenceDelegate.removeReference(p,y.targetId,T)))))}catch(p){if(!Oi(p))throw p;Y("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const T=d.os.get(y),P=T.snapshotVersion,D=T.withLastLimboFreeSnapshotVersion(P);d.os=d.os.insert(y,D)}}}(r.localStore,i))}async function B0(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await Bm(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new Q(O.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xi(n,r.hs)}}function $0(t,e){const n=ae(t),r=n.Na.get(e);if(r&&r.va)return he().add(r.key);{let s=he();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function r_(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=L0.bind(null,e),e.Ca.d_=w0.bind(null,e.eventManager),e.Ca.$a=A0.bind(null,e.eventManager),e}function j0(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=x0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=F0.bind(null,e),e}class Qo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ba(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return WR(this.persistence,new qR,e.initialUser,this.serializer)}Ga(e){return new BR(Xl.Zr,this.serializer)}Wa(e){return new XR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qo.provider={build:()=>new Qo};class al{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=B0.bind(null,this.syncEngine),await y0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new T0}()}createDatastore(e){const n=ba(e.databaseInfo.databaseId),r=function(i){return new n0(i)}(e.databaseInfo);return function(i,o,c,l){return new i0(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new a0(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>hf(this.syncEngine,n,0),function(){return of.D()?new of:new ZR}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,d){const p=new C0(s,i,o,c,l,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ae(s);Y("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Li(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}al.provider={build:()=>new al};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=am.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=iu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Tc(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Bm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ff(t,e){t.asyncQueue.verifyOperationInProgress();const n=await W0(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>af(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>af(e.remoteStore,s)),t._onlineComponents=e}async function W0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Tc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await Tc(t,new Qo)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Tc(t,new Qo);return t._offlineComponents}async function s_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await ff(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await ff(t,new al))),t._onlineComponents}function K0(t){return s_(t).then(e=>e.syncEngine)}async function pf(t){const e=await s_(t),n=e.eventManager;return n.onListen=k0.bind(null,e.syncEngine),n.onUnlisten=O0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=N0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=V0.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t,e,n){if(!n)throw new Q(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function z0(t,e,n,r){if(e===!0&&r===!0)throw new Q(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mf(t){if(!X.isDocumentKey(t))throw new Q(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _f(t){if(X.isDocumentKey(t))throw new Q(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function qn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pa(t);throw new Q(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}z0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=i_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ca{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cb;switch(r.type){case"firstParty":return new db(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gf.get(n);r&&(Y("ComponentProvider","Removing Datastore"),gf.delete(n),r.terminate())}(this),Promise.resolve()}}function G0(t,e,n,r={}){var s;const i=(t=qn(t,Ca))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=nt.MOCK_USER;else{c=ug(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Q(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new nt(h)}t._authCredentials=new lb(new om(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Hn extends Vr{constructor(e,n,r){super(e,n,Wl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new X(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function Ic(t,e,...n){if(t=Fe(t),o_("collection","path",e),t instanceof Ca){const r=Se.fromString(e,...n);return _f(r),new Hn(t,null,r)}{if(!(t instanceof vt||t instanceof Hn))throw new Q(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return _f(r),new Hn(t.firestore,null,r)}}function So(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=am.newId()),o_("doc","path",e),t instanceof Ca){const r=Se.fromString(e,...n);return mf(r),new vt(t,null,new X(r))}{if(!(t instanceof vt||t instanceof Hn))throw new Q(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return mf(r),new vt(t.firestore,t instanceof Hn?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new jm(this,"async_queue_retry"),this.Vu=()=>{const r=vc();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=vc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=vc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Tr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Oi(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw En("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=su.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Tf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ls extends Ca{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new vf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vf(e),this._firestoreClient=void 0,await e}}}function Q0(t,e){const n=typeof t=="object"?t:ga(),r=typeof t=="string"?t:"(default)",s=er(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ag("firestore");i&&G0(s,...i)}return s}function a_(t){if(t._terminated)throw new Q(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Y0(t),t._firestoreClient}function Y0(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new bb(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,i_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new H0(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new us(Ye.fromBase64String(e))}catch(n){throw new Q(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new us(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=/^__.*__$/;class X0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vi(e,this.data,n,this.fieldTransforms)}}function c_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class du{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new du(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Yo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(c_(this.Cu)&&J0.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Z0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ba(e)}Qu(e,n,r,s=!1){return new du({Cu:e,methodName:n,qu:r,path:Ge.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fu(t){const e=t._freezeSettings(),n=ba(t._databaseId);return new Z0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function l_(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);d_("Data must be an object, but it was:",o,r);const c=u_(r,o);let l,h;if(i.merge)l=new $t(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=tS(e,p,n);if(!o.contains(y))throw new Q(O.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);rS(d,y)||d.push(y)}l=new $t(d),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new X0(new Nt(c),l,h)}class pu extends lu{_toFieldTransform(e){return new Yb(e.path,new Ei)}isEqual(e){return e instanceof pu}}function eS(t,e,n,r=!1){return gu(n,t.Qu(r?4:3,e))}function gu(t,e){if(h_(t=Fe(t)))return d_("Unsupported field value:",e,t),u_(t,e);if(t instanceof lu)return function(r,s){if(!c_(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=gu(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=$e.fromDate(r);return{timestampValue:zo(s.serializer,i)}}if(r instanceof $e){const i=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zo(s.serializer,i)}}if(r instanceof uu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof us)return{bytesValue:Om(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof hu)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Kl(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Pa(r)}`)}(t,e)}function u_(t,e){const n={};return cm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,(r,s)=>{const i=gu(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function h_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof uu||t instanceof us||t instanceof vt||t instanceof lu||t instanceof hu)}function d_(t,e,n){if(!h_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Pa(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function tS(t,e,n){if((e=Fe(e))instanceof cu)return e._internalPath;if(typeof e=="string")return f_(t,e);throw Yo("Field path arguments must be of type string or ",t,!1,void 0,n)}const nS=new RegExp("[~\\*/\\[\\]]");function f_(t,e,n){if(e.search(nS)>=0)throw Yo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cu(...e.split("."))._internalPath}catch{throw Yo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Q(O.INVALID_ARGUMENT,c+t+l)}function rS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sS extends p_{data(){return super.data()}}function mu(t,e){return typeof e=="string"?f_(t,e):e instanceof cu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _u{}class g_ extends _u{}function oS(t,e,...n){let r=[];e instanceof _u&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof vu).length,c=i.filter(l=>l instanceof yu).length;if(o>1||o>0&&c>0)throw new Q(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class yu extends g_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yu(e,n,r)}_apply(e){const n=this._parse(e);return m_(e._query,n),new Vr(e.firestore,e.converter,Xc(e._query,n))}_parse(e){const n=fu(e.firestore);return function(i,o,c,l,h,d,p){let y;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Q(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Ef(p,d);const T=[];for(const P of p)T.push(If(l,i,P));y={arrayValue:{values:T}}}else y=If(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Ef(p,d),y=eS(c,o,p,d==="in"||d==="not-in");return Le.create(h,d,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class vu extends _u{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new vu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)m_(o,l),o=Xc(o,l)}(e._query,n),new Vr(e.firestore,e.converter,Xc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Tu extends g_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Tu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Q(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Q(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ii(i,o)}(e._query,this._field,this._direction);return new Vr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new gs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function aS(t,e="asc"){const n=e,r=mu("orderBy",t);return Tu._create(r,n)}function If(t,e,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new Q(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_m(e)&&n.indexOf("/")!==-1)throw new Q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!X.isDocumentKey(r))throw new Q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bd(t,new X(r))}if(n instanceof vt)return Bd(t,n._key);throw new Q(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pa(n)}.`)}function Ef(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function m_(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class cS{convertValue(e,n="none"){switch(Rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ps(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ne(o.doubleValue));return new hu(i)}convertGeoPoint(e){return new uu(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$l(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(yi(e));default:return null}}convertTimestamp(e){const n=Gn(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Ie(Um(r));const s=new vi(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||En(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class y_ extends p_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Po extends y_{data(e={}){return super.data(e)}}class lS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ws(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Po(this._firestore,this._userDataWriter,r.key,r,new Ws(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Po(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Po(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:uS(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}class v_ extends cS{constructor(e){super(),this.firestore=e}convertBytes(e){return new us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function hS(t,e,n){t=qn(t,vt);const r=qn(t.firestore,ls),s=__(t.converter,e);return Iu(r,[l_(fu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ht.none())])}function wf(t){return Iu(qn(t.firestore,ls),[new zl(t._key,Ht.none())])}function dS(t,e){const n=qn(t.firestore,ls),r=So(t),s=__(t.converter,e);return Iu(n,[l_(fu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function Af(t,...e){var n,r,s;t=Fe(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Tf(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Tf(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(t instanceof vt)h=qn(t.firestore,ls),d=Wl(t._key.path),l={next:p=>{e[o]&&e[o](fS(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=qn(t,Vr);h=qn(p.firestore,ls),d=p._query;const y=new v_(h);l={next:T=>{e[o]&&e[o](new lS(h,y,p,T))},error:e[o+1],complete:e[o+2]},iS(t._query)}return function(y,T,P,D){const k=new q0(D),$=new b0(T,k,P);return y.asyncQueue.enqueueAndForget(async()=>I0(await pf(y),$)),()=>{k.Za(),y.asyncQueue.enqueueAndForget(async()=>E0(await pf(y),$))}}(a_(h),d,c,l)}function Iu(t,e){return function(r,s){const i=new Tr;return r.asyncQueue.enqueueAndForget(async()=>M0(await K0(r),s,i)),i.promise}(a_(t),e)}function fS(t,e,n){const r=n.docs.get(e._key),s=new v_(t);return new y_(t,s,e._key,r,new Ws(n.hasPendingWrites,n.fromCache),e.converter)}function bf(){return new pu("serverTimestamp")}(function(e,n=!0){(function(s){fs=s})(kr),Kt(new Ot("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new ls(new ub(r.getProvider("auth-internal")),new pb(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Q(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vi(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),_t(Md,"4.7.3",e),_t(Md,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="firebasestorage.googleapis.com",pS="storageBucket",gS=2*60*1e3,mS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Mt{constructor(e,n,r=0){super(Ec(e),`Firebase Storage: ${n} (${Ec(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,on.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ec(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var sn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(sn||(sn={}));function Ec(t){return"storage/"+t}function _S(){const t="An unknown error occurred, please check the error payload for server response.";return new on(sn.UNKNOWN,t)}function yS(){return new on(sn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vS(){return new on(sn.CANCELED,"User canceled the upload/download.")}function TS(t){return new on(sn.INVALID_URL,"Invalid URL '"+t+"'.")}function IS(t){return new on(sn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Rf(t){return new on(sn.INVALID_ARGUMENT,t)}function I_(){return new on(sn.APP_DELETED,"The Firebase app was deleted.")}function ES(t){return new on(sn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(r.path==="")return r;throw IS(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(U){U.path_=decodeURIComponent(U.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${d}/b/${s}/o${y}`,"i"),P={bucket:1,path:3},D=n===T_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",$=new RegExp(`^https?://${D}/${s}/${k}`,"i"),z=[{regex:c,indices:l,postModify:i},{regex:T,indices:P,postModify:h},{regex:$,indices:{bucket:1,path:2},postModify:h}];for(let U=0;U<z.length;U++){const se=z[U],ie=se.regex.exec(e);if(ie){const R=ie[se.indices.bucket];let _=ie[se.indices.path];_||(_=""),r=new jt(R,_),se.postModify(r);break}}if(r==null)throw TS(e);return r}}class wS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function d(...k){h||(h=!0,e.apply(null,k))}function p(k){s=setTimeout(()=>{s=null,t(T,l())},k)}function y(){i&&clearTimeout(i)}function T(k,...$){if(h){y();return}if(k){y(),d.call(null,k,...$);return}if(l()||o){y(),d.call(null,k,...$);return}r<64&&(r*=2);let z;c===1?(c=2,z=0):z=(r+Math.random())*1e3,p(z)}let P=!1;function D(k){P||(P=!0,y(),!h&&(s!==null?(k||(c=2),clearTimeout(s),p(0)):k||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,D(!0)},n),D}function bS(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t){return t!==void 0}function Sf(t,e,n,r){if(r<e)throw Rf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Rf(`Invalid value for '${t}'. Expected ${n} or less.`)}function SS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Jo;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Jo||(Jo={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n,r,s,i,o,c,l,h,d,p,y=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=d,this.connectionFactory_=p,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,P)=>{this.resolve_=T,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new uo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Jo.NO_ERROR,l=i.getStatus();if(!c||PS(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Jo.ABORT;r(!1,new uo(!1,null,d));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new uo(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());RS(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=_S();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?I_():vS();o(l)}else{const l=yS();o(l)}};this.canceled_?n(!1,new uo(!1,null,!0)):this.backoffId_=AS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class uo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function kS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function NS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function OS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function VS(t,e,n,r,s,i,o=!0){const c=SS(t.urlParams),l=t.url+c,h=Object.assign({},t.headers);return DS(h,e),kS(h,n),NS(h,i),OS(h,r),new CS(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function LS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xo(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return LS(this._location.path)}get storage(){return this._service}get parent(){const e=MS(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new Xo(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ES(e)}}function Pf(t,e){const n=e==null?void 0:e[pS];return n==null?null:jt.makeFromBucketSpec(n,t)}function xS(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:ug(s,t.app.options.projectId))}class FS{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=T_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gS,this._maxUploadRetryTime=mS,this._requests=new Set,s!=null?this._bucket=jt.makeFromBucketSpec(s,this._host):this._bucket=Pf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=Pf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xo(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new wS(I_());{const o=VS(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Cf="@firebase/storage",kf="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="storage";function US(t=ga(),e){t=Fe(t);const r=er(t,E_).getImmediate({identifier:e}),s=ag("storage");return s&&BS(r,...s),r}function BS(t,e,n,r={}){xS(t,e,n,r)}function $S(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new FS(n,r,s,e,kr)}function jS(){Kt(new Ot(E_,$S,"PUBLIC").setMultipleInstances(!0)),_t(Cf,kf,""),_t(Cf,kf,"esm2017")}jS();const w_="@firebase/installations",Eu="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=1e4,b_=`w:${Eu}`,R_="FIS_v2",qS="https://firebaseinstallations.googleapis.com/v1",HS=60*60*1e3,WS="installations",KS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Sr=new Cr(WS,KS,zS);function S_(t){return t instanceof Mt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_({projectId:t}){return`${qS}/projects/${t}/installations`}function C_(t){return{token:t.token,requestStatus:2,expiresIn:QS(t.expiresIn),creationTime:Date.now()}}async function k_(t,e){const r=(await e.json()).error;return Sr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function N_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function GS(t,{refreshToken:e}){const n=N_(t);return n.append("Authorization",YS(e)),n}async function D_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function QS(t){return Number(t.replace("s","000"))}function YS(t){return`${R_} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=P_(t),s=N_(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={fid:n,authVersion:R_,appId:t.appId,sdkVersion:b_},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await D_(()=>fetch(r,c));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:C_(h.authToken)}}else throw await k_("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=/^[cdef][\w-]{21}$/,cl="";function eP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=tP(t);return ZS.test(n)?n:cl}catch{return cl}}function tP(t){return XS(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=new Map;function M_(t,e){const n=ka(t);L_(n,e),nP(n,e)}function L_(t,e){const n=V_.get(t);if(n)for(const r of n)r(e)}function nP(t,e){const n=rP();n&&n.postMessage({key:t,fid:e}),sP()}let _r=null;function rP(){return!_r&&"BroadcastChannel"in self&&(_r=new BroadcastChannel("[Firebase] FID Change"),_r.onmessage=t=>{L_(t.data.key,t.data.fid)}),_r}function sP(){V_.size===0&&_r&&(_r.close(),_r=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP="firebase-installations-database",oP=1,Pr="firebase-installations-store";let wc=null;function wu(){return wc||(wc=mg(iP,oP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pr)}}})),wc}async function Zo(t,e){const n=ka(t),s=(await wu()).transaction(Pr,"readwrite"),i=s.objectStore(Pr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&M_(t,e.fid),e}async function x_(t){const e=ka(t),r=(await wu()).transaction(Pr,"readwrite");await r.objectStore(Pr).delete(e),await r.done}async function Na(t,e){const n=ka(t),s=(await wu()).transaction(Pr,"readwrite"),i=s.objectStore(Pr),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&M_(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(t){let e;const n=await Na(t.appConfig,r=>{const s=aP(r),i=cP(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===cl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function aP(t){const e=t||{fid:eP(),registrationStatus:0};return F_(e)}function cP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Sr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=lP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:uP(t)}:{installationEntry:e}}async function lP(t,e){try{const n=await JS(t,e);return Zo(t.appConfig,n)}catch(n){throw S_(n)&&n.customData.serverCode===409?await x_(t.appConfig):await Zo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function uP(t){let e=await Nf(t.appConfig);for(;e.registrationStatus===1;)await O_(100),e=await Nf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Au(t);return r||n}return e}function Nf(t){return Na(t,e=>{if(!e)throw Sr.create("installation-not-found");return F_(e)})}function F_(t){return hP(t)?{fid:t.fid,registrationStatus:0}:t}function hP(t){return t.registrationStatus===1&&t.registrationTime+A_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP({appConfig:t,heartbeatServiceProvider:e},n){const r=fP(t,n),s=GS(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={installation:{sdkVersion:b_,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await D_(()=>fetch(r,c));if(l.ok){const h=await l.json();return C_(h)}else throw await k_("Generate Auth Token",l)}function fP(t,{fid:e}){return`${P_(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bu(t,e=!1){let n;const r=await Na(t.appConfig,i=>{if(!U_(i))throw Sr.create("not-registered");const o=i.authToken;if(!e&&mP(o))return i;if(o.requestStatus===1)return n=pP(t,e),i;{if(!navigator.onLine)throw Sr.create("app-offline");const c=yP(i);return n=gP(t,c),c}});return n?await n:r.authToken}async function pP(t,e){let n=await Df(t.appConfig);for(;n.authToken.requestStatus===1;)await O_(100),n=await Df(t.appConfig);const r=n.authToken;return r.requestStatus===0?bu(t,e):r}function Df(t){return Na(t,e=>{if(!U_(e))throw Sr.create("not-registered");const n=e.authToken;return vP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function gP(t,e){try{const n=await dP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Zo(t.appConfig,r),n}catch(n){if(S_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await x_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zo(t.appConfig,r)}throw n}}function U_(t){return t!==void 0&&t.registrationStatus===2}function mP(t){return t.requestStatus===2&&!_P(t)}function _P(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+HS}function yP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function vP(t){return t.requestStatus===1&&t.requestTime+A_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(t){const e=t,{installationEntry:n,registrationPromise:r}=await Au(e);return r?r.catch(console.error):bu(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IP(t,e=!1){const n=t;return await EP(n),(await bu(n,e)).token}async function EP(t){const{registrationPromise:e}=await Au(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t){if(!t||!t.options)throw Ac("App Configuration");if(!t.name)throw Ac("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ac(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ac(t){return Sr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="installations",AP="installations-internal",bP=t=>{const e=t.getProvider("app").getImmediate(),n=wP(e),r=er(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},RP=t=>{const e=t.getProvider("app").getImmediate(),n=er(e,B_).getImmediate();return{getId:()=>TP(n),getToken:s=>IP(n,s)}};function SP(){Kt(new Ot(B_,bP,"PUBLIC")),Kt(new Ot(AP,RP,"PRIVATE"))}SP();_t(w_,Eu);_t(w_,Eu,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="analytics",PP="firebase_id",CP="origin",kP=60*1e3,NP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ru="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new pa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new Cr("analytics","Analytics",DP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(t){if(!t.startsWith(Ru)){const e=Rt.create("invalid-gtag-resource",{gtagURL:t});return Tt.warn(e.message),""}return t}function $_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function VP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function MP(t,e){const n=VP("firebase-js-sdk-policy",{createScriptURL:OP}),r=document.createElement("script"),s=`${Ru}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function LP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function xP(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await $_(n)).find(h=>h.measurementId===s);l&&await e[l.appId]}}catch(c){Tt.error(c)}t("config",s,i)}async function FP(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await $_(n);for(const l of o){const h=c.find(p=>p.measurementId===l),d=h&&e[h.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Tt.error(i)}}function UP(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await FP(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await xP(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,h]=o;t("get",c,l,h)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){Tt.error(c)}}return s}function BP(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=UP(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function $P(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ru)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=30,qP=1e3;class HP{constructor(e={},n=qP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const j_=new HP;function WP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function KP(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:WP(r)},i=NP.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function zP(t,e=j_,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Rt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Rt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new YP;return setTimeout(async()=>{c.abort()},kP),q_({appId:r,apiKey:s,measurementId:i},o,c,e)}async function q_(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=j_){var i;const{appId:o,measurementId:c}=t;try{await GP(r,e)}catch(l){if(c)return Tt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await KP(t);return s.deleteThrottleMetadata(o),l}catch(l){const h=l;if(!QP(h)){if(s.deleteThrottleMetadata(o),c)return Tt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:c};throw l}const d=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?sd(n,s.intervalMillis,jP):sd(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,p),Tt.debug(`Calling attemptFetch again in ${d} millis`),q_(t,p,r,s)}}function GP(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function QP(t){if(!(t instanceof Mt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class YP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function JP(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XP(){if(dg())try{await fg()}catch(t){return Tt.warn(Rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Tt.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ZP(t,e,n,r,s,i,o){var c;const l=zP(t);l.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&Tt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>Tt.error(T)),e.push(l);const h=XP().then(T=>{if(T)return r.getId()}),[d,p]=await Promise.all([l,h]);$P(i)||MP(i,d.measurementId),s("js",new Date);const y=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return y[CP]="firebase",y.update=!0,p!=null&&(y[PP]=p),s("config",d.measurementId,y),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.app=e}_delete(){return delete ii[this.app.options.appId],Promise.resolve()}}let ii={},Of=[];const Vf={};let bc="dataLayer",tC="gtag",Mf,H_,Lf=!1;function nC(){const t=[];if(hg()&&t.push("This is a browser extension environment."),cI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});Tt.warn(n.message)}}function rC(t,e,n){nC();const r=t.options.appId;if(!r)throw Rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Tt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(ii[r]!=null)throw Rt.create("already-exists",{id:r});if(!Lf){LP(bc);const{wrappedGtag:i,gtagCore:o}=BP(ii,Of,Vf,bc,tC);H_=i,Mf=o,Lf=!0}return ii[r]=ZP(t,Of,Vf,e,Mf,bc,n),new eC(t)}function sC(t=ga()){t=Fe(t);const e=er(t,ea);return e.isInitialized()?e.getImmediate():iC(t)}function iC(t,e={}){const n=er(t,ea);if(n.isInitialized()){const s=n.getImmediate();if(fi(e,n.getOptions()))return s;throw Rt.create("already-initialized")}return n.initialize({options:e})}function oC(t,e,n,r){t=Fe(t),JP(H_,ii[t.app.options.appId],e,n,r).catch(s=>Tt.error(s))}const xf="@firebase/analytics",Ff="0.10.8";function aC(){Kt(new Ot(ea,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return rC(r,s,n)},"PUBLIC")),Kt(new Ot("analytics-internal",t,"PRIVATE")),_t(xf,Ff),_t(xf,Ff,"esm2017");function t(e){try{const n=e.getProvider(ea).getImmediate();return{logEvent:(r,s,i)=>oC(n,r,s,i)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}aC();const cC={apiKey:"AIzaSyBQZ-qs4sMKbfCbHLqFnw8jIREaosVQ79I",authDomain:"tslive.firebaseapp.com",projectId:"tslive",storageBucket:"tslive.firebasestorage.app",messagingSenderId:"982680631838",appId:"1:982680631838:web:003437769e215bdafdcc0f",measurementId:"G-VPNFJWYMB2"},Da=_g(cC),Br=Q0(Da),pr=sb(Da),lC=new gn;US(Da);sC(Da);const Su=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},uC={class:"chat-feed"},hC={class:"message-meta"},dC=["src"],fC={class:"sender"},pC={class:"time"},gC={class:"status"},mC={class:"text"},_C={class:"delivered-time"},yC={key:0,class:"typing-indicator"},vC={key:0},TC={key:1},IC={class:"chat-input"},EC=1500,wC={__name:"ChatFeed",props:{user:Object},setup(t){var T;const e=t,n=(T=e.user)==null?void 0:T.uid,r=Ut([]),s=Ut("");Ut(null);const i=Ut(null),o=Ut(!1),c=Ut([]);let l;Ri(()=>{const P=Ic(Br,"messages"),D=oS(P,aS("createdAt"));Af(D,$=>{r.value=$.docs.map(K=>({id:K.id,...K.data()})),hp(()=>d())});const k=Ic(Br,"typing");Af(k,$=>{c.value=$.docs.map(K=>K.data()).filter(K=>K.uid!==e.user.uid)})});const h=async()=>{if(console.log("User:",e.user),console.log("Text:",s.value),!!s.value.trim()){if(!e.user){alert("User not signed in");return}try{await dS(Ic(Br,"messages"),{text:s.value,user:{uid:e.user.uid,displayName:e.user.displayName},sender:e.user.displayName||"Anonymous",uid:e.user.uid,photoURL:e.user.photoURL||"",timestamp:bf(),createdAt:bf()}),await wf(So(Br,"typing",e.user.uid)),s.value="",o.value=!1}catch(P){console.error("Error sending message:",P),alert("Message failed: "+P.message)}}};go(s,()=>{e.user&&(o.value=!0,hS(So(Br,"typing",e.user.uid),{uid:e.user.uid,name:e.user.displayName,timestamp:Date.now()}),clearTimeout(l),l=setTimeout(()=>{o.value=!1,wf(So(Br,"typing",e.user.uid))},EC))});const d=()=>{i.value&&(i.value.scrollTop=i.value.scrollHeight)};function p(P){const D=["#f44336","#e91e63","#9c27b0","#2196f3","#009688","#4caf50","#ff9800"];let k=0;for(let $=0;$<P.length;$++)k=P.charCodeAt($)+((k<<5)-k);return D[Math.abs(k)%D.length]}function y(P){return P?new Date(P*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""}return(P,D)=>(dt(),pt("div",uC,[D[1]||(D[1]=ue("div",{class:"chat-header"},"TheresaSharon@1",-1)),ue("div",{class:"chat-body",ref_key:"chatBodyRef",ref:i},[xe(OT,{name:"fade-list",tag:"div",class:"messages"},{default:Qs(()=>[(dt(!0),pt(gt,null,_v(r.value,k=>{var $,K;return dt(),pt("div",{key:k.id,class:oi(["message-wrapper",k.uid===Ls(n)?"align-right":"align-left"])},[ue("div",{class:oi(["message-bubble",k.uid===Ls(n)?"mine":"theirs"])},[ue("div",hC,[k.photoURL?(dt(),pt("img",{key:1,class:"avatar-img",src:k.photoURL,alt:"avatar"},null,8,dC)):(dt(),pt("div",{key:0,class:"avatar",style:ia({backgroundColor:p(k.uid)})},Jt(k.sender.charAt(0).toUpperCase()),5)),ue("div",null,[ue("span",fC,Jt(k.uid===Ls(n)?"You":k.sender),1),ue("span",pC,Jt(y(($=k.createdAt)==null?void 0:$.seconds)),1),ue("span",gC,Jt(k.uid===Ls(n)?"✓ Read":""),1)])]),ue("div",mC,Jt(k.text),1),ue("div",_C,Jt(y((K=k.createdAt)==null?void 0:K.seconds)),1)],2)],2)}),128))]),_:1}),c.value.length?(dt(),pt("div",yC,[c.value.length===1?(dt(),pt("span",vC,Jt(c.value[0].name)+" is typing...",1)):(dt(),pt("span",TC,Jt(c.value.map(k=>k.name).join(", "))+" are typing... ",1))])):Jv("",!0)],512),ue("div",IC,[fo(ue("input",{"onUpdate:modelValue":D[0]||(D[0]=k=>s.value=k),onKeydown:jT(h,["enter"]),placeholder:"Type a message..."},null,544),[[yo,s.value]]),ue("button",{onClick:h},"Send")])]))}},AC=Su(wC,[["__scopeId","data-v-4cac2ecd"]]),bC={class:"auth"},RC={class:"card"},SC=["disabled"],PC={class:"card"},CC={__name:"UserAuth",emits:["send","signed-in"],setup(t,{emit:e}){const n=e,r=Ut(""),s=Ut(""),i=Ut(""),o=async()=>{try{const y=await fA(pr,lC);n("signed-in",y.user)}catch(y){console.error("Google login failed:",y),alert(y.message)}},c=Ut(!1),l=async()=>{c.value=!0;try{const y=await Rw(pr,r.value,s.value);n("signed-in",y.user)}catch(y){alert(y.message)}finally{c.value=!1}},h=async()=>{try{const y=await aA(pr,i.value,d),T=prompt("Enter the verification code"),P=await y.confirm(T);n("signed-in",P.user)}catch(y){console.error("Phone login failed:",y),alert(y.message)}};let d,p=!1;return Ri(()=>{typeof window<"u"&&pr&&!p&&(d=new sA(pr,"recaptcha-container",{size:"invisible",callback:()=>{console.log("recaptcha resolved..")}}),d.render().then(y=>{console.log("reCAPTCHA widget ID:",y)}),p=!0)}),(y,T)=>(dt(),pt("div",bC,[T[14]||(T[14]=ue("h1",{class:"title"},"THERESA-SHARON @ 1",-1)),xe(sc,{name:"fade"},{default:Qs(()=>[ue("div",{class:"card"},[ue("button",{onClick:o},T[3]||(T[3]=[ue("span",{class:"icon"},"🔒",-1),Fs(" Login with Google ")]))])]),_:1}),xe(sc,{name:"fade"},{default:Qs(()=>[ue("div",RC,[ue("form",{onSubmit:ed(l,["prevent"])},[T[9]||(T[9]=ue("label",null,"Email",-1)),fo(ue("input",{"onUpdate:modelValue":T[0]||(T[0]=P=>r.value=P),placeholder:"Email"},null,512),[[yo,r.value]]),T[10]||(T[10]=ue("label",null,"Password",-1)),fo(ue("input",{"onUpdate:modelValue":T[1]||(T[1]=P=>s.value=P),type:"password",placeholder:"Password"},null,512),[[yo,s.value]]),ue("button",{type:"submit",disabled:c.value},[T[8]||(T[8]=ue("span",{class:"icon"},"📧",-1)),c.value?(dt(),pt(gt,{key:0},[T[4]||(T[4]=Fs(" Signing in")),T[5]||(T[5]=ue("span",{class:"dot"},".",-1)),T[6]||(T[6]=ue("span",{class:"dot"},".",-1)),T[7]||(T[7]=ue("span",{class:"dot"},".",-1))],64)):(dt(),pt(gt,{key:1},[Fs(" Login with Email ")],64))],8,SC)],32)])]),_:1}),xe(sc,{name:"fade"},{default:Qs(()=>[ue("div",PC,[ue("form",{onSubmit:ed(h,["prevent"])},[T[11]||(T[11]=ue("label",null,"Phone",-1)),fo(ue("input",{"onUpdate:modelValue":T[2]||(T[2]=P=>i.value=P),placeholder:"Phone number"},null,512),[[yo,i.value]]),T[12]||(T[12]=ue("div",{id:"recaptcha-container"},null,-1)),T[13]||(T[13]=ue("button",{type:"submit"},[ue("span",{class:"icon"},"📱"),Fs(" Login with Phone ")],-1))],32)])]),_:1})]))}},kC=Su(CC,[["__scopeId","data-v-c6f84a0f"]]),NC={key:0},DC={key:1},OC={class:"chat-header"},VC={__name:"App",setup(t){const e=Ut(null),n=s=>{e.value=s};Ri(()=>{Cw(pr,s=>{e.value=s})});const r=()=>{kw(pr)};return(s,i)=>(dt(),pt("div",null,[e.value?(dt(),pt("div",DC,[ue("div",OC,[ue("span",null,"Welcome, "+Jt(e.value.displayName||"Guest"),1),ue("button",{onClick:r},"Logout")]),xe(AC,{user:e.value},null,8,["user"])])):(dt(),pt("div",NC,[xe(kC,{onSignedIn:n})]))]))}},MC=Su(VC,[["__scopeId","data-v-5ccd8a0e"]]);WT(MC).mount("#app");
