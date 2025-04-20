(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Tc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ie={},br=[],Lt=()=>{},vm=()=>!1,Ro=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ic=n=>n.startsWith("onUpdate:"),lt=Object.assign,wc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Em=Object.prototype.hasOwnProperty,ye=(n,e)=>Em.call(n,e),se=Array.isArray,Pr=n=>bo(n)==="[object Map]",Cd=n=>bo(n)==="[object Set]",ae=n=>typeof n=="function",Ve=n=>typeof n=="string",xn=n=>typeof n=="symbol",be=n=>n!==null&&typeof n=="object",kd=n=>(be(n)||ae(n))&&ae(n.then)&&ae(n.catch),Nd=Object.prototype.toString,bo=n=>Nd.call(n),Tm=n=>bo(n).slice(8,-1),Dd=n=>bo(n)==="[object Object]",Ac=n=>Ve(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ws=Tc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Po=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Im=/-(\w)/g,kn=Po(n=>n.replace(Im,(e,t)=>t?t.toUpperCase():"")),wm=/\B([A-Z])/g,Mn=Po(n=>n.replace(wm,"-$1").toLowerCase()),Od=Po(n=>n.charAt(0).toUpperCase()+n.slice(1)),ga=Po(n=>n?`on${Od(n)}`:""),bn=(n,e)=>!Object.is(n,e),Ui=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Vd=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Ba=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let bu;const So=()=>bu||(bu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rc(n){if(se(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Ve(r)?Pm(r):Rc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ve(n)||be(n))return n}const Am=/;(?![^(]*\))/g,Rm=/:([^]+)/,bm=/\/\*[^]*?\*\//g;function Pm(n){const e={};return n.replace(bm,"").split(Am).forEach(t=>{if(t){const r=t.split(Rm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Co(n){let e="";if(Ve(n))e=n;else if(se(n))for(let t=0;t<n.length;t++){const r=Co(n[t]);r&&(e+=r+" ")}else if(be(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Sm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cm=Tc(Sm);function xd(n){return!!n||n===""}const Md=n=>!!(n&&n.__v_isRef===!0),As=n=>Ve(n)?n:n==null?"":se(n)||be(n)&&(n.toString===Nd||!ae(n.toString))?Md(n)?As(n.value):JSON.stringify(n,Ld,2):String(n),Ld=(n,e)=>Md(e)?Ld(n,e.value):Pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[ma(r,i)+" =>"]=s,t),{})}:Cd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ma(t))}:xn(e)?ma(e):be(e)&&!se(e)&&!Dd(e)?String(e):e,ma=(n,e="")=>{var t;return xn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pt;class km{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=pt,!e&&pt&&(this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=pt;try{return pt=this,e()}finally{pt=t}}}on(){pt=this}off(){pt=this.parent}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Nm(){return pt}let we;const _a=new WeakSet;class Fd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pt&&pt.active&&pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_a.has(this)&&(_a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pu(this),jd(this);const e=we,t=kt;we=this,kt=!0;try{return this.fn()}finally{$d(this),we=e,kt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Sc(e);this.deps=this.depsTail=void 0,Pu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ja(this)&&this.run()}get dirty(){return ja(this)}}let Ud=0,Rs,bs;function Bd(n,e=!1){if(n.flags|=8,e){n.next=bs,bs=n;return}n.next=Rs,Rs=n}function bc(){Ud++}function Pc(){if(--Ud>0)return;if(bs){let e=bs;for(bs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Rs;){let e=Rs;for(Rs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function jd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $d(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Sc(r),Dm(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function ja(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(qd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function qd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ls))return;n.globalVersion=Ls;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!ja(n)){n.flags&=-3;return}const t=we,r=kt;we=n,kt=!0;try{jd(n);const s=n.fn(n._value);(e.version===0||bn(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{we=t,kt=r,$d(n),n.flags&=-3}}function Sc(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Sc(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Dm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let kt=!0;const Hd=[];function Ln(){Hd.push(kt),kt=!1}function Fn(){const n=Hd.pop();kt=n===void 0?!0:n}function Pu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=we;we=void 0;try{e()}finally{we=t}}}let Ls=0;class Om{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!we||!kt||we===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==we)t=this.activeLink=new Om(we,this),we.deps?(t.prevDep=we.depsTail,we.depsTail.nextDep=t,we.depsTail=t):we.deps=we.depsTail=t,Wd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=we.depsTail,t.nextDep=void 0,we.depsTail.nextDep=t,we.depsTail=t,we.deps===t&&(we.deps=r)}return t}trigger(e){this.version++,Ls++,this.notify(e)}notify(e){bc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Pc()}}}function Wd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Wd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const $a=new WeakMap,Zn=Symbol(""),qa=Symbol(""),Fs=Symbol("");function et(n,e,t){if(kt&&we){let r=$a.get(n);r||$a.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Cc),s.map=r,s.key=t),s.track()}}function Xt(n,e,t,r,s,i){const a=$a.get(n);if(!a){Ls++;return}const c=l=>{l&&l.trigger()};if(bc(),e==="clear")a.forEach(c);else{const l=se(n),h=l&&Ac(t);if(l&&t==="length"){const f=Number(r);a.forEach((g,E)=>{(E==="length"||E===Fs||!xn(E)&&E>=f)&&c(g)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(Fs)),e){case"add":l?h&&c(a.get("length")):(c(a.get(Zn)),Pr(n)&&c(a.get(qa)));break;case"delete":l||(c(a.get(Zn)),Pr(n)&&c(a.get(qa)));break;case"set":Pr(n)&&c(a.get(Zn));break}}Pc()}function Er(n){const e=_e(n);return e===n?e:(et(e,"iterate",Fs),It(n)?e:e.map(tt))}function ko(n){return et(n=_e(n),"iterate",Fs),n}const Vm={__proto__:null,[Symbol.iterator](){return ya(this,Symbol.iterator,tt)},concat(...n){return Er(this).concat(...n.map(e=>se(e)?Er(e):e))},entries(){return ya(this,"entries",n=>(n[1]=tt(n[1]),n))},every(n,e){return Yt(this,"every",n,e,void 0,arguments)},filter(n,e){return Yt(this,"filter",n,e,t=>t.map(tt),arguments)},find(n,e){return Yt(this,"find",n,e,tt,arguments)},findIndex(n,e){return Yt(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Yt(this,"findLast",n,e,tt,arguments)},findLastIndex(n,e){return Yt(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Yt(this,"forEach",n,e,void 0,arguments)},includes(...n){return va(this,"includes",n)},indexOf(...n){return va(this,"indexOf",n)},join(n){return Er(this).join(n)},lastIndexOf(...n){return va(this,"lastIndexOf",n)},map(n,e){return Yt(this,"map",n,e,void 0,arguments)},pop(){return ds(this,"pop")},push(...n){return ds(this,"push",n)},reduce(n,...e){return Su(this,"reduce",n,e)},reduceRight(n,...e){return Su(this,"reduceRight",n,e)},shift(){return ds(this,"shift")},some(n,e){return Yt(this,"some",n,e,void 0,arguments)},splice(...n){return ds(this,"splice",n)},toReversed(){return Er(this).toReversed()},toSorted(n){return Er(this).toSorted(n)},toSpliced(...n){return Er(this).toSpliced(...n)},unshift(...n){return ds(this,"unshift",n)},values(){return ya(this,"values",tt)}};function ya(n,e,t){const r=ko(n),s=r[e]();return r!==n&&!It(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const xm=Array.prototype;function Yt(n,e,t,r,s,i){const a=ko(n),c=a!==n&&!It(n),l=a[e];if(l!==xm[e]){const g=l.apply(n,i);return c?tt(g):g}let h=t;a!==n&&(c?h=function(g,E){return t.call(this,tt(g),E,n)}:t.length>2&&(h=function(g,E){return t.call(this,g,E,n)}));const f=l.call(a,h,r);return c&&s?s(f):f}function Su(n,e,t,r){const s=ko(n);let i=t;return s!==n&&(It(n)?t.length>3&&(i=function(a,c,l){return t.call(this,a,c,l,n)}):i=function(a,c,l){return t.call(this,a,tt(c),l,n)}),s[e](i,...r)}function va(n,e,t){const r=_e(n);et(r,"iterate",Fs);const s=r[e](...t);return(s===-1||s===!1)&&Oc(t[0])?(t[0]=_e(t[0]),r[e](...t)):s}function ds(n,e,t=[]){Ln(),bc();const r=_e(n)[e].apply(n,t);return Pc(),Fn(),r}const Mm=Tc("__proto__,__v_isRef,__isVue"),Kd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(xn));function Lm(n){xn(n)||(n=String(n));const e=_e(this);return et(e,"has",n),e.hasOwnProperty(n)}class zd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?zm:Jd:i?Yd:Qd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=se(e);if(!s){let l;if(a&&(l=Vm[t]))return l;if(t==="hasOwnProperty")return Lm}const c=Reflect.get(e,t,rt(e)?e:r);return(xn(t)?Kd.has(t):Mm(t))||(s||et(e,"get",t),i)?c:rt(c)?a&&Ac(t)?c:c.value:be(c)?s?Xd(c):Nc(c):c}}class Gd extends zd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const l=ir(i);if(!It(r)&&!ir(r)&&(i=_e(i),r=_e(r)),!se(e)&&rt(i)&&!rt(r))return l?!1:(i.value=r,!0)}const a=se(e)&&Ac(t)?Number(t)<e.length:ye(e,t),c=Reflect.set(e,t,r,rt(e)?e:s);return e===_e(s)&&(a?bn(r,i)&&Xt(e,"set",t,r):Xt(e,"add",t,r)),c}deleteProperty(e,t){const r=ye(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&Xt(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!xn(t)||!Kd.has(t))&&et(e,"has",t),r}ownKeys(e){return et(e,"iterate",se(e)?"length":Zn),Reflect.ownKeys(e)}}class Fm extends zd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Um=new Gd,Bm=new Fm,jm=new Gd(!0);const Ha=n=>n,ki=n=>Reflect.getPrototypeOf(n);function $m(n,e,t){return function(...r){const s=this.__v_raw,i=_e(s),a=Pr(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),f=t?Ha:e?Wa:tt;return!e&&et(i,"iterate",l?qa:Zn),{next(){const{value:g,done:E}=h.next();return E?{value:g,done:E}:{value:c?[f(g[0]),f(g[1])]:f(g),done:E}},[Symbol.iterator](){return this}}}}function Ni(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function qm(n,e){const t={get(s){const i=this.__v_raw,a=_e(i),c=_e(s);n||(bn(s,c)&&et(a,"get",s),et(a,"get",c));const{has:l}=ki(a),h=e?Ha:n?Wa:tt;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&et(_e(s),"iterate",Zn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=_e(i),c=_e(s);return n||(bn(s,c)&&et(a,"has",s),et(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=_e(c),h=e?Ha:n?Wa:tt;return!n&&et(l,"iterate",Zn),c.forEach((f,g)=>s.call(i,h(f),h(g),a))}};return lt(t,n?{add:Ni("add"),set:Ni("set"),delete:Ni("delete"),clear:Ni("clear")}:{add(s){!e&&!It(s)&&!ir(s)&&(s=_e(s));const i=_e(this);return ki(i).has.call(i,s)||(i.add(s),Xt(i,"add",s,s)),this},set(s,i){!e&&!It(i)&&!ir(i)&&(i=_e(i));const a=_e(this),{has:c,get:l}=ki(a);let h=c.call(a,s);h||(s=_e(s),h=c.call(a,s));const f=l.call(a,s);return a.set(s,i),h?bn(i,f)&&Xt(a,"set",s,i):Xt(a,"add",s,i),this},delete(s){const i=_e(this),{has:a,get:c}=ki(i);let l=a.call(i,s);l||(s=_e(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&Xt(i,"delete",s,void 0),h},clear(){const s=_e(this),i=s.size!==0,a=s.clear();return i&&Xt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=$m(s,n,e)}),t}function kc(n,e){const t=qm(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(ye(t,s)&&s in r?t:r,s,i)}const Hm={get:kc(!1,!1)},Wm={get:kc(!1,!0)},Km={get:kc(!0,!1)};const Qd=new WeakMap,Yd=new WeakMap,Jd=new WeakMap,zm=new WeakMap;function Gm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qm(n){return n.__v_skip||!Object.isExtensible(n)?0:Gm(Tm(n))}function Nc(n){return ir(n)?n:Dc(n,!1,Um,Hm,Qd)}function Ym(n){return Dc(n,!1,jm,Wm,Yd)}function Xd(n){return Dc(n,!0,Bm,Km,Jd)}function Dc(n,e,t,r,s){if(!be(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=s.get(n);if(i)return i;const a=Qm(n);if(a===0)return n;const c=new Proxy(n,a===2?r:t);return s.set(n,c),c}function Sr(n){return ir(n)?Sr(n.__v_raw):!!(n&&n.__v_isReactive)}function ir(n){return!!(n&&n.__v_isReadonly)}function It(n){return!!(n&&n.__v_isShallow)}function Oc(n){return n?!!n.__v_raw:!1}function _e(n){const e=n&&n.__v_raw;return e?_e(e):n}function Jm(n){return!ye(n,"__v_skip")&&Object.isExtensible(n)&&Vd(n,"__v_skip",!0),n}const tt=n=>be(n)?Nc(n):n,Wa=n=>be(n)?Xd(n):n;function rt(n){return n?n.__v_isRef===!0:!1}function er(n){return Xm(n,!1)}function Xm(n,e){return rt(n)?n:new Zm(n,e)}class Zm{constructor(e,t){this.dep=new Cc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:_e(e),this._value=t?e:tt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||It(e)||ir(e);e=r?e:_e(e),bn(e,t)&&(this._rawValue=e,this._value=r?e:tt(e),this.dep.trigger())}}function e_(n){return rt(n)?n.value:n}const t_={get:(n,e,t)=>e==="__v_raw"?n:e_(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return rt(s)&&!rt(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Zd(n){return Sr(n)?n:new Proxy(n,t_)}class n_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Cc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ls-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&we!==this)return Bd(this,!0),!0}get value(){const e=this.dep.track();return qd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function r_(n,e,t=!1){let r,s;return ae(n)?r=n:(r=n.get,s=n.set),new n_(r,s,t)}const Di={},eo=new WeakMap;let Gn;function s_(n,e=!1,t=Gn){if(t){let r=eo.get(t);r||eo.set(t,r=[]),r.push(n)}}function i_(n,e,t=Ie){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=$=>s?$:It($)||s===!1||s===0?Zt($,1):Zt($);let f,g,E,R,k=!1,x=!1;if(rt(n)?(g=()=>n.value,k=It(n)):Sr(n)?(g=()=>h(n),k=!0):se(n)?(x=!0,k=n.some($=>Sr($)||It($)),g=()=>n.map($=>{if(rt($))return $.value;if(Sr($))return h($);if(ae($))return l?l($,2):$()})):ae(n)?e?g=l?()=>l(n,2):n:g=()=>{if(E){Ln();try{E()}finally{Fn()}}const $=Gn;Gn=f;try{return l?l(n,3,[R]):n(R)}finally{Gn=$}}:g=Lt,e&&s){const $=g,ce=s===!0?1/0:s;g=()=>Zt($(),ce)}const D=Nm(),W=()=>{f.stop(),D&&D.active&&wc(D.effects,f)};if(i&&e){const $=e;e=(...ce)=>{$(...ce),W()}}let Y=x?new Array(n.length).fill(Di):Di;const Q=$=>{if(!(!(f.flags&1)||!f.dirty&&!$))if(e){const ce=f.run();if(s||k||(x?ce.some((he,w)=>bn(he,Y[w])):bn(ce,Y))){E&&E();const he=Gn;Gn=f;try{const w=[ce,Y===Di?void 0:x&&Y[0]===Di?[]:Y,R];l?l(e,3,w):e(...w),Y=ce}finally{Gn=he}}}else f.run()};return c&&c(Q),f=new Fd(g),f.scheduler=a?()=>a(Q,!1):Q,R=$=>s_($,!1,f),E=f.onStop=()=>{const $=eo.get(f);if($){if(l)l($,4);else for(const ce of $)ce();eo.delete(f)}},e?r?Q(!0):Y=f.run():a?a(Q.bind(null,!0),!0):f.run(),W.pause=f.pause.bind(f),W.resume=f.resume.bind(f),W.stop=W,W}function Zt(n,e=1/0,t){if(e<=0||!be(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,rt(n))Zt(n.value,e,t);else if(se(n))for(let r=0;r<n.length;r++)Zt(n[r],e,t);else if(Cd(n)||Pr(n))n.forEach(r=>{Zt(r,e,t)});else if(Dd(n)){for(const r in n)Zt(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Zt(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ei(n,e,t,r){try{return r?n(...r):n()}catch(s){No(s,e,t)}}function jt(n,e,t,r){if(ae(n)){const s=ei(n,e,t,r);return s&&kd(s)&&s.catch(i=>{No(i,e,t)}),s}if(se(n)){const s=[];for(let i=0;i<n.length;i++)s.push(jt(n[i],e,t,r));return s}}function No(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ie;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const f=c.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](n,l,h)===!1)return}c=c.parent}if(i){Ln(),ei(i,null,10,[n,l,h]),Fn();return}}o_(n,t,s,r,a)}function o_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const at=[];let Vt=-1;const Cr=[];let En=null,Tr=0;const ef=Promise.resolve();let to=null;function a_(n){const e=to||ef;return n?e.then(this?n.bind(this):n):e}function c_(n){let e=Vt+1,t=at.length;for(;e<t;){const r=e+t>>>1,s=at[r],i=Us(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Vc(n){if(!(n.flags&1)){const e=Us(n),t=at[at.length-1];!t||!(n.flags&2)&&e>=Us(t)?at.push(n):at.splice(c_(e),0,n),n.flags|=1,tf()}}function tf(){to||(to=ef.then(rf))}function l_(n){se(n)?Cr.push(...n):En&&n.id===-1?En.splice(Tr+1,0,n):n.flags&1||(Cr.push(n),n.flags|=1),tf()}function Cu(n,e,t=Vt+1){for(;t<at.length;t++){const r=at[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;at.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function nf(n){if(Cr.length){const e=[...new Set(Cr)].sort((t,r)=>Us(t)-Us(r));if(Cr.length=0,En){En.push(...e);return}for(En=e,Tr=0;Tr<En.length;Tr++){const t=En[Tr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}En=null,Tr=0}}const Us=n=>n.id==null?n.flags&2?-1:1/0:n.id;function rf(n){try{for(Vt=0;Vt<at.length;Vt++){const e=at[Vt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ei(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Vt<at.length;Vt++){const e=at[Vt];e&&(e.flags&=-2)}Vt=-1,at.length=0,nf(),to=null,(at.length||Cr.length)&&rf()}}let Tt=null,sf=null;function no(n){const e=Tt;return Tt=n,sf=n&&n.type.__scopeId||null,e}function u_(n,e=Tt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Fu(-1);const i=no(e);let a;try{a=n(...s)}finally{no(i),r._d&&Fu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Bi(n,e){if(Tt===null)return n;const t=Mo(Tt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Ie]=e[s];i&&(ae(i)&&(i={mounted:i,updated:i}),i.deep&&Zt(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function Kn(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(Ln(),jt(l,t,8,[n.el,c,n,e]),Fn())}}const h_=Symbol("_vte"),d_=n=>n.__isTeleport;function xc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,xc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function of(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ro(n,e,t,r,s=!1){if(se(n)){n.forEach((k,x)=>ro(k,e&&(se(e)?e[x]:e),t,r,s));return}if(Ps(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ro(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Mo(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,f=c.refs===Ie?c.refs={}:c.refs,g=c.setupState,E=_e(g),R=g===Ie?()=>!1:k=>ye(E,k);if(h!=null&&h!==l&&(Ve(h)?(f[h]=null,R(h)&&(g[h]=null)):rt(h)&&(h.value=null)),ae(l))ei(l,c,12,[a,f]);else{const k=Ve(l),x=rt(l);if(k||x){const D=()=>{if(n.f){const W=k?R(l)?g[l]:f[l]:l.value;s?se(W)&&wc(W,i):se(W)?W.includes(i)||W.push(i):k?(f[l]=[i],R(l)&&(g[l]=f[l])):(l.value=[i],n.k&&(f[n.k]=l.value))}else k?(f[l]=a,R(l)&&(g[l]=a)):x&&(l.value=a,n.k&&(f[n.k]=a))};a?(D.id=-1,ft(D,t)):D()}}}So().requestIdleCallback;So().cancelIdleCallback;const Ps=n=>!!n.type.__asyncLoader,af=n=>n.type.__isKeepAlive;function f_(n,e){cf(n,"a",e)}function p_(n,e){cf(n,"da",e)}function cf(n,e,t=ct){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Do(e,r,t),t){let s=t.parent;for(;s&&s.parent;)af(s.parent.vnode)&&g_(r,e,t,s),s=s.parent}}function g_(n,e,t,r){const s=Do(e,n,r,!0);lf(()=>{wc(r[e],s)},t)}function Do(n,e,t=ct,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{Ln();const c=ti(t),l=jt(e,t,n,a);return c(),Fn(),l});return r?s.unshift(i):s.push(i),i}}const dn=n=>(e,t=ct)=>{(!$s||n==="sp")&&Do(n,(...r)=>e(...r),t)},m_=dn("bm"),Oo=dn("m"),__=dn("bu"),y_=dn("u"),v_=dn("bum"),lf=dn("um"),E_=dn("sp"),T_=dn("rtg"),I_=dn("rtc");function w_(n,e=ct){Do("ec",n,e)}const A_=Symbol.for("v-ndc");function R_(n,e,t,r){let s;const i=t,a=se(n);if(a||Ve(n)){const c=a&&Sr(n);let l=!1;c&&(l=!It(n),n=ko(n)),s=new Array(n.length);for(let h=0,f=n.length;h<f;h++)s[h]=e(l?tt(n[h]):n[h],h,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(be(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(n[f],f,l,i)}}else s=[];return s}const Ka=n=>n?kf(n)?Mo(n):Ka(n.parent):null,Ss=lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ka(n.parent),$root:n=>Ka(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>hf(n),$forceUpdate:n=>n.f||(n.f=()=>{Vc(n.update)}),$nextTick:n=>n.n||(n.n=a_.bind(n.proxy)),$watch:n=>z_.bind(n)}),Ea=(n,e)=>n!==Ie&&!n.__isScriptSetup&&ye(n,e),b_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;let h;if(e[0]!=="$"){const R=a[e];if(R!==void 0)switch(R){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Ea(r,e))return a[e]=1,r[e];if(s!==Ie&&ye(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&ye(h,e))return a[e]=3,i[e];if(t!==Ie&&ye(t,e))return a[e]=4,t[e];za&&(a[e]=0)}}const f=Ss[e];let g,E;if(f)return e==="$attrs"&&et(n.attrs,"get",""),f(n);if((g=c.__cssModules)&&(g=g[e]))return g;if(t!==Ie&&ye(t,e))return a[e]=4,t[e];if(E=l.config.globalProperties,ye(E,e))return E[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Ea(s,e)?(s[e]=t,!0):r!==Ie&&ye(r,e)?(r[e]=t,!0):ye(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!t[a]||n!==Ie&&ye(n,a)||Ea(e,a)||(c=i[0])&&ye(c,a)||ye(r,a)||ye(Ss,a)||ye(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ye(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ku(n){return se(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let za=!0;function P_(n){const e=hf(n),t=n.proxy,r=n.ctx;za=!1,e.beforeCreate&&Nu(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:f,beforeMount:g,mounted:E,beforeUpdate:R,updated:k,activated:x,deactivated:D,beforeDestroy:W,beforeUnmount:Y,destroyed:Q,unmounted:$,render:ce,renderTracked:he,renderTriggered:w,errorCaptured:m,serverPrefetch:v,expose:I,inheritAttrs:A,components:P,directives:y,filters:ht}=e;if(h&&S_(h,r,null),a)for(const ve in a){const pe=a[ve];ae(pe)&&(r[ve]=pe.bind(t))}if(s){const ve=s.call(t,t);be(ve)&&(n.data=Nc(ve))}if(za=!0,i)for(const ve in i){const pe=i[ve],Rt=ae(pe)?pe.bind(t,t):ae(pe.get)?pe.get.bind(t,t):Lt,Un=!ae(pe)&&ae(pe.set)?pe.set.bind(t):Lt,Kt=gy({get:Rt,set:Un});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:xe=>Kt.value=xe})}if(c)for(const ve in c)uf(c[ve],r,t,ve);if(l){const ve=ae(l)?l.call(t):l;Reflect.ownKeys(ve).forEach(pe=>{V_(pe,ve[pe])})}f&&Nu(f,n,"c");function Be(ve,pe){se(pe)?pe.forEach(Rt=>ve(Rt.bind(t))):pe&&ve(pe.bind(t))}if(Be(m_,g),Be(Oo,E),Be(__,R),Be(y_,k),Be(f_,x),Be(p_,D),Be(w_,m),Be(I_,he),Be(T_,w),Be(v_,Y),Be(lf,$),Be(E_,v),se(I))if(I.length){const ve=n.exposed||(n.exposed={});I.forEach(pe=>{Object.defineProperty(ve,pe,{get:()=>t[pe],set:Rt=>t[pe]=Rt})})}else n.exposed||(n.exposed={});ce&&n.render===Lt&&(n.render=ce),A!=null&&(n.inheritAttrs=A),P&&(n.components=P),y&&(n.directives=y),v&&of(n)}function S_(n,e,t=Lt){se(n)&&(n=Ga(n));for(const r in n){const s=n[r];let i;be(s)?"default"in s?i=ji(s.from||r,s.default,!0):i=ji(s.from||r):i=ji(s),rt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Nu(n,e,t){jt(se(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function uf(n,e,t,r){let s=r.includes(".")?Rf(t,r):()=>t[r];if(Ve(n)){const i=e[n];ae(i)&&Ia(s,i)}else if(ae(n))Ia(s,n.bind(t));else if(be(n))if(se(n))n.forEach(i=>uf(i,e,t,r));else{const i=ae(n.handler)?n.handler.bind(t):e[n.handler];ae(i)&&Ia(s,i,n)}}function hf(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>so(l,h,a,!0)),so(l,e,a)),be(e)&&i.set(e,l),l}function so(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&so(n,i,t,!0),s&&s.forEach(a=>so(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=C_[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const C_={data:Du,props:Ou,emits:Ou,methods:gs,computed:gs,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:gs,directives:gs,watch:N_,provide:Du,inject:k_};function Du(n,e){return e?n?function(){return lt(ae(n)?n.call(this,this):n,ae(e)?e.call(this,this):e)}:e:n}function k_(n,e){return gs(Ga(n),Ga(e))}function Ga(n){if(se(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ot(n,e){return n?[...new Set([].concat(n,e))]:e}function gs(n,e){return n?lt(Object.create(null),n,e):e}function Ou(n,e){return n?se(n)&&se(e)?[...new Set([...n,...e])]:lt(Object.create(null),ku(n),ku(e??{})):e}function N_(n,e){if(!n)return e;if(!e)return n;const t=lt(Object.create(null),n);for(const r in e)t[r]=ot(n[r],e[r]);return t}function df(){return{app:null,config:{isNativeTag:vm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let D_=0;function O_(n,e){return function(r,s=null){ae(r)||(r=lt({},r)),s!=null&&!be(s)&&(s=null);const i=df(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:D_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:my,get config(){return i.config},set config(f){},use(f,...g){return a.has(f)||(f&&ae(f.install)?(a.add(f),f.install(h,...g)):ae(f)&&(a.add(f),f(h,...g))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,g){return g?(i.components[f]=g,h):i.components[f]},directive(f,g){return g?(i.directives[f]=g,h):i.directives[f]},mount(f,g,E){if(!l){const R=h._ceVNode||sn(r,s);return R.appContext=i,E===!0?E="svg":E===!1&&(E=void 0),n(R,f,E),l=!0,h._container=f,f.__vue_app__=h,Mo(R.component)}},onUnmount(f){c.push(f)},unmount(){l&&(jt(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(f,g){return i.provides[f]=g,h},runWithContext(f){const g=kr;kr=h;try{return f()}finally{kr=g}}};return h}}let kr=null;function V_(n,e){if(ct){let t=ct.provides;const r=ct.parent&&ct.parent.provides;r===t&&(t=ct.provides=Object.create(r)),t[n]=e}}function ji(n,e,t=!1){const r=ct||Tt;if(r||kr){const s=kr?kr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ae(e)?e.call(r&&r.proxy):e}}const ff={},pf=()=>Object.create(ff),gf=n=>Object.getPrototypeOf(n)===ff;function x_(n,e,t,r=!1){const s={},i=pf();n.propsDefaults=Object.create(null),mf(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:Ym(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function M_(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=_e(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let g=0;g<f.length;g++){let E=f[g];if(Vo(n.emitsOptions,E))continue;const R=e[E];if(l)if(ye(i,E))R!==i[E]&&(i[E]=R,h=!0);else{const k=kn(E);s[k]=Qa(l,c,k,R,n,!1)}else R!==i[E]&&(i[E]=R,h=!0)}}}else{mf(n,e,s,i)&&(h=!0);let f;for(const g in c)(!e||!ye(e,g)&&((f=Mn(g))===g||!ye(e,f)))&&(l?t&&(t[g]!==void 0||t[f]!==void 0)&&(s[g]=Qa(l,c,g,void 0,n,!0)):delete s[g]);if(i!==c)for(const g in i)(!e||!ye(e,g))&&(delete i[g],h=!0)}h&&Xt(n.attrs,"set","")}function mf(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if(ws(l))continue;const h=e[l];let f;s&&ye(s,f=kn(l))?!i||!i.includes(f)?t[f]=h:(c||(c={}))[f]=h:Vo(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=_e(t),h=c||Ie;for(let f=0;f<i.length;f++){const g=i[f];t[g]=Qa(s,l,g,h[g],n,!ye(h,g))}}return a}function Qa(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=ye(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ae(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const f=ti(s);r=h[t]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Mn(t))&&(r=!0))}return r}const L_=new WeakMap;function _f(n,e,t=!1){const r=t?L_:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!ae(n)){const f=g=>{l=!0;const[E,R]=_f(g,e,!0);lt(a,E),R&&c.push(...R)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!l)return be(n)&&r.set(n,br),br;if(se(i))for(let f=0;f<i.length;f++){const g=kn(i[f]);Vu(g)&&(a[g]=Ie)}else if(i)for(const f in i){const g=kn(f);if(Vu(g)){const E=i[f],R=a[g]=se(E)||ae(E)?{type:E}:lt({},E),k=R.type;let x=!1,D=!0;if(se(k))for(let W=0;W<k.length;++W){const Y=k[W],Q=ae(Y)&&Y.name;if(Q==="Boolean"){x=!0;break}else Q==="String"&&(D=!1)}else x=ae(k)&&k.name==="Boolean";R[0]=x,R[1]=D,(x||ye(R,"default"))&&c.push(g)}}const h=[a,c];return be(n)&&r.set(n,h),h}function Vu(n){return n[0]!=="$"&&!ws(n)}const yf=n=>n[0]==="_"||n==="$stable",Mc=n=>se(n)?n.map(Mt):[Mt(n)],F_=(n,e,t)=>{if(e._n)return e;const r=u_((...s)=>Mc(e(...s)),t);return r._c=!1,r},vf=(n,e,t)=>{const r=n._ctx;for(const s in n){if(yf(s))continue;const i=n[s];if(ae(i))e[s]=F_(s,i,r);else if(i!=null){const a=Mc(i);e[s]=()=>a}}},Ef=(n,e)=>{const t=Mc(e);n.slots.default=()=>t},Tf=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},U_=(n,e,t)=>{const r=n.slots=pf();if(n.vnode.shapeFlag&32){const s=e._;s?(Tf(r,e,t),t&&Vd(r,"_",s,!0)):vf(e,r)}else e&&Ef(n,e)},B_=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ie;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:Tf(s,e,t):(i=!e.$stable,vf(e,s)),a=e}else e&&(Ef(n,e),a={default:1});if(i)for(const c in s)!yf(c)&&a[c]==null&&delete s[c]},ft=ey;function j_(n){return $_(n)}function $_(n,e){const t=So();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:f,parentNode:g,nextSibling:E,setScopeId:R=Lt,insertStaticContent:k}=n,x=(_,T,C,M=null,O=null,L=null,q=void 0,B=null,U=!!T.dynamicChildren)=>{if(_===T)return;_&&!fs(_,T)&&(M=zt(_),xe(_,O,L,!0),_=null),T.patchFlag===-2&&(U=!1,T.dynamicChildren=null);const{type:F,ref:Z,shapeFlag:H}=T;switch(F){case xo:D(_,T,C,M);break;case Bs:W(_,T,C,M);break;case wa:_==null&&Y(T,C,M,q);break;case xt:P(_,T,C,M,O,L,q,B,U);break;default:H&1?ce(_,T,C,M,O,L,q,B,U):H&6?y(_,T,C,M,O,L,q,B,U):(H&64||H&128)&&F.process(_,T,C,M,O,L,q,B,U,Dt)}Z!=null&&O&&ro(Z,_&&_.ref,L,T||_,!T)},D=(_,T,C,M)=>{if(_==null)r(T.el=c(T.children),C,M);else{const O=T.el=_.el;T.children!==_.children&&h(O,T.children)}},W=(_,T,C,M)=>{_==null?r(T.el=l(T.children||""),C,M):T.el=_.el},Y=(_,T,C,M)=>{[_.el,_.anchor]=k(_.children,T,C,M,_.el,_.anchor)},Q=({el:_,anchor:T},C,M)=>{let O;for(;_&&_!==T;)O=E(_),r(_,C,M),_=O;r(T,C,M)},$=({el:_,anchor:T})=>{let C;for(;_&&_!==T;)C=E(_),s(_),_=C;s(T)},ce=(_,T,C,M,O,L,q,B,U)=>{T.type==="svg"?q="svg":T.type==="math"&&(q="mathml"),_==null?he(T,C,M,O,L,q,B,U):v(_,T,O,L,q,B,U)},he=(_,T,C,M,O,L,q,B)=>{let U,F;const{props:Z,shapeFlag:H,transition:J,dirs:te}=_;if(U=_.el=a(_.type,L,Z&&Z.is,Z),H&8?f(U,_.children):H&16&&m(_.children,U,null,M,O,Ta(_,L),q,B),te&&Kn(_,null,M,"created"),w(U,_,_.scopeId,q,M),Z){for(const oe in Z)oe!=="value"&&!ws(oe)&&i(U,oe,null,Z[oe],L,M);"value"in Z&&i(U,"value",null,Z.value,L),(F=Z.onVnodeBeforeMount)&&Ot(F,M,_)}te&&Kn(_,null,M,"beforeMount");const ee=q_(O,J);ee&&J.beforeEnter(U),r(U,T,C),((F=Z&&Z.onVnodeMounted)||ee||te)&&ft(()=>{F&&Ot(F,M,_),ee&&J.enter(U),te&&Kn(_,null,M,"mounted")},O)},w=(_,T,C,M,O)=>{if(C&&R(_,C),M)for(let L=0;L<M.length;L++)R(_,M[L]);if(O){let L=O.subTree;if(T===L||Pf(L.type)&&(L.ssContent===T||L.ssFallback===T)){const q=O.vnode;w(_,q,q.scopeId,q.slotScopeIds,O.parent)}}},m=(_,T,C,M,O,L,q,B,U=0)=>{for(let F=U;F<_.length;F++){const Z=_[F]=B?Tn(_[F]):Mt(_[F]);x(null,Z,T,C,M,O,L,q,B)}},v=(_,T,C,M,O,L,q)=>{const B=T.el=_.el;let{patchFlag:U,dynamicChildren:F,dirs:Z}=T;U|=_.patchFlag&16;const H=_.props||Ie,J=T.props||Ie;let te;if(C&&zn(C,!1),(te=J.onVnodeBeforeUpdate)&&Ot(te,C,T,_),Z&&Kn(T,_,C,"beforeUpdate"),C&&zn(C,!0),(H.innerHTML&&J.innerHTML==null||H.textContent&&J.textContent==null)&&f(B,""),F?I(_.dynamicChildren,F,B,C,M,Ta(T,O),L):q||pe(_,T,B,null,C,M,Ta(T,O),L,!1),U>0){if(U&16)A(B,H,J,C,O);else if(U&2&&H.class!==J.class&&i(B,"class",null,J.class,O),U&4&&i(B,"style",H.style,J.style,O),U&8){const ee=T.dynamicProps;for(let oe=0;oe<ee.length;oe++){const de=ee[oe],Ge=H[de],je=J[de];(je!==Ge||de==="value")&&i(B,de,Ge,je,O,C)}}U&1&&_.children!==T.children&&f(B,T.children)}else!q&&F==null&&A(B,H,J,C,O);((te=J.onVnodeUpdated)||Z)&&ft(()=>{te&&Ot(te,C,T,_),Z&&Kn(T,_,C,"updated")},M)},I=(_,T,C,M,O,L,q)=>{for(let B=0;B<T.length;B++){const U=_[B],F=T[B],Z=U.el&&(U.type===xt||!fs(U,F)||U.shapeFlag&70)?g(U.el):C;x(U,F,Z,null,M,O,L,q,!0)}},A=(_,T,C,M,O)=>{if(T!==C){if(T!==Ie)for(const L in T)!ws(L)&&!(L in C)&&i(_,L,T[L],null,O,M);for(const L in C){if(ws(L))continue;const q=C[L],B=T[L];q!==B&&L!=="value"&&i(_,L,B,q,O,M)}"value"in C&&i(_,"value",T.value,C.value,O)}},P=(_,T,C,M,O,L,q,B,U)=>{const F=T.el=_?_.el:c(""),Z=T.anchor=_?_.anchor:c("");let{patchFlag:H,dynamicChildren:J,slotScopeIds:te}=T;te&&(B=B?B.concat(te):te),_==null?(r(F,C,M),r(Z,C,M),m(T.children||[],C,Z,O,L,q,B,U)):H>0&&H&64&&J&&_.dynamicChildren?(I(_.dynamicChildren,J,C,O,L,q,B),(T.key!=null||O&&T===O.subTree)&&If(_,T,!0)):pe(_,T,C,Z,O,L,q,B,U)},y=(_,T,C,M,O,L,q,B,U)=>{T.slotScopeIds=B,_==null?T.shapeFlag&512?O.ctx.activate(T,C,M,q,U):ht(T,C,M,O,L,q,U):pn(_,T,U)},ht=(_,T,C,M,O,L,q)=>{const B=_.component=ly(_,M,O);if(af(_)&&(B.ctx.renderer=Dt),uy(B,!1,q),B.asyncDep){if(O&&O.registerDep(B,Be,q),!_.el){const U=B.subTree=sn(Bs);W(null,U,T,C)}}else Be(B,_,T,C,O,L,q)},pn=(_,T,C)=>{const M=T.component=_.component;if(X_(_,T,C))if(M.asyncDep&&!M.asyncResolved){ve(M,T,C);return}else M.next=T,M.update();else T.el=_.el,M.vnode=T},Be=(_,T,C,M,O,L,q)=>{const B=()=>{if(_.isMounted){let{next:H,bu:J,u:te,parent:ee,vnode:oe}=_;{const Qe=wf(_);if(Qe){H&&(H.el=oe.el,ve(_,H,q)),Qe.asyncDep.then(()=>{_.isUnmounted||B()});return}}let de=H,Ge;zn(_,!1),H?(H.el=oe.el,ve(_,H,q)):H=oe,J&&Ui(J),(Ge=H.props&&H.props.onVnodeBeforeUpdate)&&Ot(Ge,ee,H,oe),zn(_,!0);const je=Mu(_),yt=_.subTree;_.subTree=je,x(yt,je,g(yt.el),zt(yt),_,O,L),H.el=je.el,de===null&&Z_(_,je.el),te&&ft(te,O),(Ge=H.props&&H.props.onVnodeUpdated)&&ft(()=>Ot(Ge,ee,H,oe),O)}else{let H;const{el:J,props:te}=T,{bm:ee,m:oe,parent:de,root:Ge,type:je}=_,yt=Ps(T);zn(_,!1),ee&&Ui(ee),!yt&&(H=te&&te.onVnodeBeforeMount)&&Ot(H,de,T),zn(_,!0);{Ge.ce&&Ge.ce._injectChildStyle(je);const Qe=_.subTree=Mu(_);x(null,Qe,C,M,_,O,L),T.el=Qe.el}if(oe&&ft(oe,O),!yt&&(H=te&&te.onVnodeMounted)){const Qe=T;ft(()=>Ot(H,de,Qe),O)}(T.shapeFlag&256||de&&Ps(de.vnode)&&de.vnode.shapeFlag&256)&&_.a&&ft(_.a,O),_.isMounted=!0,T=C=M=null}};_.scope.on();const U=_.effect=new Fd(B);_.scope.off();const F=_.update=U.run.bind(U),Z=_.job=U.runIfDirty.bind(U);Z.i=_,Z.id=_.uid,U.scheduler=()=>Vc(Z),zn(_,!0),F()},ve=(_,T,C)=>{T.component=_;const M=_.vnode.props;_.vnode=T,_.next=null,M_(_,T.props,M,C),B_(_,T.children,C),Ln(),Cu(_),Fn()},pe=(_,T,C,M,O,L,q,B,U=!1)=>{const F=_&&_.children,Z=_?_.shapeFlag:0,H=T.children,{patchFlag:J,shapeFlag:te}=T;if(J>0){if(J&128){Un(F,H,C,M,O,L,q,B,U);return}else if(J&256){Rt(F,H,C,M,O,L,q,B,U);return}}te&8?(Z&16&&jn(F,O,L),H!==F&&f(C,H)):Z&16?te&16?Un(F,H,C,M,O,L,q,B,U):jn(F,O,L,!0):(Z&8&&f(C,""),te&16&&m(H,C,M,O,L,q,B,U))},Rt=(_,T,C,M,O,L,q,B,U)=>{_=_||br,T=T||br;const F=_.length,Z=T.length,H=Math.min(F,Z);let J;for(J=0;J<H;J++){const te=T[J]=U?Tn(T[J]):Mt(T[J]);x(_[J],te,C,null,O,L,q,B,U)}F>Z?jn(_,O,L,!0,!1,H):m(T,C,M,O,L,q,B,U,H)},Un=(_,T,C,M,O,L,q,B,U)=>{let F=0;const Z=T.length;let H=_.length-1,J=Z-1;for(;F<=H&&F<=J;){const te=_[F],ee=T[F]=U?Tn(T[F]):Mt(T[F]);if(fs(te,ee))x(te,ee,C,null,O,L,q,B,U);else break;F++}for(;F<=H&&F<=J;){const te=_[H],ee=T[J]=U?Tn(T[J]):Mt(T[J]);if(fs(te,ee))x(te,ee,C,null,O,L,q,B,U);else break;H--,J--}if(F>H){if(F<=J){const te=J+1,ee=te<Z?T[te].el:M;for(;F<=J;)x(null,T[F]=U?Tn(T[F]):Mt(T[F]),C,ee,O,L,q,B,U),F++}}else if(F>J)for(;F<=H;)xe(_[F],O,L,!0),F++;else{const te=F,ee=F,oe=new Map;for(F=ee;F<=J;F++){const $e=T[F]=U?Tn(T[F]):Mt(T[F]);$e.key!=null&&oe.set($e.key,F)}let de,Ge=0;const je=J-ee+1;let yt=!1,Qe=0;const gn=new Array(je);for(F=0;F<je;F++)gn[F]=0;for(F=te;F<=H;F++){const $e=_[F];if(Ge>=je){xe($e,O,L,!0);continue}let vt;if($e.key!=null)vt=oe.get($e.key);else for(de=ee;de<=J;de++)if(gn[de-ee]===0&&fs($e,T[de])){vt=de;break}vt===void 0?xe($e,O,L,!0):(gn[vt-ee]=F+1,vt>=Qe?Qe=vt:yt=!0,x($e,T[vt],C,null,O,L,q,B,U),Ge++)}const Zr=yt?H_(gn):br;for(de=Zr.length-1,F=je-1;F>=0;F--){const $e=ee+F,vt=T[$e],pi=$e+1<Z?T[$e+1].el:M;gn[F]===0?x(null,vt,C,pi,O,L,q,B,U):yt&&(de<0||F!==Zr[de]?Kt(vt,C,pi,2):de--)}}},Kt=(_,T,C,M,O=null)=>{const{el:L,type:q,transition:B,children:U,shapeFlag:F}=_;if(F&6){Kt(_.component.subTree,T,C,M);return}if(F&128){_.suspense.move(T,C,M);return}if(F&64){q.move(_,T,C,Dt);return}if(q===xt){r(L,T,C);for(let H=0;H<U.length;H++)Kt(U[H],T,C,M);r(_.anchor,T,C);return}if(q===wa){Q(_,T,C);return}if(M!==2&&F&1&&B)if(M===0)B.beforeEnter(L),r(L,T,C),ft(()=>B.enter(L),O);else{const{leave:H,delayLeave:J,afterLeave:te}=B,ee=()=>r(L,T,C),oe=()=>{H(L,()=>{ee(),te&&te()})};J?J(L,ee,oe):oe()}else r(L,T,C)},xe=(_,T,C,M=!1,O=!1)=>{const{type:L,props:q,ref:B,children:U,dynamicChildren:F,shapeFlag:Z,patchFlag:H,dirs:J,cacheIndex:te}=_;if(H===-2&&(O=!1),B!=null&&ro(B,null,C,_,!0),te!=null&&(T.renderCache[te]=void 0),Z&256){T.ctx.deactivate(_);return}const ee=Z&1&&J,oe=!Ps(_);let de;if(oe&&(de=q&&q.onVnodeBeforeUnmount)&&Ot(de,T,_),Z&6)Bn(_.component,C,M);else{if(Z&128){_.suspense.unmount(C,M);return}ee&&Kn(_,null,T,"beforeUnmount"),Z&64?_.type.remove(_,T,C,Dt,M):F&&!F.hasOnce&&(L!==xt||H>0&&H&64)?jn(F,T,C,!1,!0):(L===xt&&H&384||!O&&Z&16)&&jn(U,T,C),M&&Me(_)}(oe&&(de=q&&q.onVnodeUnmounted)||ee)&&ft(()=>{de&&Ot(de,T,_),ee&&Kn(_,null,T,"unmounted")},C)},Me=_=>{const{type:T,el:C,anchor:M,transition:O}=_;if(T===xt){Zo(C,M);return}if(T===wa){$(_);return}const L=()=>{s(C),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(_.shapeFlag&1&&O&&!O.persisted){const{leave:q,delayLeave:B}=O,U=()=>q(C,L);B?B(_.el,L,U):U()}else L()},Zo=(_,T)=>{let C;for(;_!==T;)C=E(_),s(_),_=C;s(T)},Bn=(_,T,C)=>{const{bum:M,scope:O,job:L,subTree:q,um:B,m:U,a:F}=_;xu(U),xu(F),M&&Ui(M),O.stop(),L&&(L.flags|=8,xe(q,_,T,C)),B&&ft(B,T),ft(()=>{_.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},jn=(_,T,C,M=!1,O=!1,L=0)=>{for(let q=L;q<_.length;q++)xe(_[q],T,C,M,O)},zt=_=>{if(_.shapeFlag&6)return zt(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const T=E(_.anchor||_.el),C=T&&T[h_];return C?E(C):T};let Jr=!1;const fi=(_,T,C)=>{_==null?T._vnode&&xe(T._vnode,null,null,!0):x(T._vnode||null,_,T,null,null,null,C),T._vnode=_,Jr||(Jr=!0,Cu(),nf(),Jr=!1)},Dt={p:x,um:xe,m:Kt,r:Me,mt:ht,mc:m,pc:pe,pbc:I,n:zt,o:n};return{render:fi,hydrate:void 0,createApp:O_(fi)}}function Ta({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function zn({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function q_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function If(n,e,t=!1){const r=n.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Tn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&If(a,c)),c.type===xo&&(c.el=a.el)}}function H_(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function wf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:wf(e)}function xu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const W_=Symbol.for("v-scx"),K_=()=>ji(W_);function Ia(n,e,t){return Af(n,e,t)}function Af(n,e,t=Ie){const{immediate:r,deep:s,flush:i,once:a}=t,c=lt({},t),l=e&&r||!e&&i!=="post";let h;if($s){if(i==="sync"){const R=K_();h=R.__watcherHandles||(R.__watcherHandles=[])}else if(!l){const R=()=>{};return R.stop=Lt,R.resume=Lt,R.pause=Lt,R}}const f=ct;c.call=(R,k,x)=>jt(R,f,k,x);let g=!1;i==="post"?c.scheduler=R=>{ft(R,f&&f.suspense)}:i!=="sync"&&(g=!0,c.scheduler=(R,k)=>{k?R():Vc(R)}),c.augmentJob=R=>{e&&(R.flags|=4),g&&(R.flags|=2,f&&(R.id=f.uid,R.i=f))};const E=i_(n,e,c);return $s&&(h?h.push(E):l&&E()),E}function z_(n,e,t){const r=this.proxy,s=Ve(n)?n.includes(".")?Rf(r,n):()=>r[n]:n.bind(r,r);let i;ae(e)?i=e:(i=e.handler,t=e);const a=ti(this),c=Af(s,i.bind(r),t);return a(),c}function Rf(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const G_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${kn(e)}Modifiers`]||n[`${Mn(e)}Modifiers`];function Q_(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ie;let s=t;const i=e.startsWith("update:"),a=i&&G_(r,e.slice(7));a&&(a.trim&&(s=t.map(f=>Ve(f)?f.trim():f)),a.number&&(s=t.map(Ba)));let c,l=r[c=ga(e)]||r[c=ga(kn(e))];!l&&i&&(l=r[c=ga(Mn(e))]),l&&jt(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,jt(h,n,6,s)}}function bf(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!ae(n)){const l=h=>{const f=bf(h,e,!0);f&&(c=!0,lt(a,f))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(be(n)&&r.set(n,null),null):(se(i)?i.forEach(l=>a[l]=null):lt(a,i),be(n)&&r.set(n,a),a)}function Vo(n,e){return!n||!Ro(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(n,e[0].toLowerCase()+e.slice(1))||ye(n,Mn(e))||ye(n,e))}function Mu(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:f,props:g,data:E,setupState:R,ctx:k,inheritAttrs:x}=n,D=no(n);let W,Y;try{if(t.shapeFlag&4){const $=s||r,ce=$;W=Mt(h.call(ce,$,f,g,R,E,k)),Y=c}else{const $=e;W=Mt($.length>1?$(g,{attrs:c,slots:a,emit:l}):$(g,null)),Y=e.props?c:Y_(c)}}catch($){Cs.length=0,No($,n,1),W=sn(Bs)}let Q=W;if(Y&&x!==!1){const $=Object.keys(Y),{shapeFlag:ce}=Q;$.length&&ce&7&&(i&&$.some(Ic)&&(Y=J_(Y,i)),Q=xr(Q,Y,!1,!0))}return t.dirs&&(Q=xr(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(t.dirs):t.dirs),t.transition&&xc(Q,t.transition),W=Q,no(D),W}const Y_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ro(t))&&((e||(e={}))[t]=n[t]);return e},J_=(n,e)=>{const t={};for(const r in n)(!Ic(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function X_(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Lu(r,a,h):!!a;if(l&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const E=f[g];if(a[E]!==r[E]&&!Vo(h,E))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Lu(r,a,h):!0:!!a;return!1}function Lu(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Vo(t,i))return!0}return!1}function Z_({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Pf=n=>n.__isSuspense;function ey(n,e){e&&e.pendingBranch?se(n)?e.effects.push(...n):e.effects.push(n):l_(n)}const xt=Symbol.for("v-fgt"),xo=Symbol.for("v-txt"),Bs=Symbol.for("v-cmt"),wa=Symbol.for("v-stc"),Cs=[];let gt=null;function tr(n=!1){Cs.push(gt=n?null:[])}function ty(){Cs.pop(),gt=Cs[Cs.length-1]||null}let js=1;function Fu(n,e=!1){js+=n,n<0&&gt&&e&&(gt.hasOnce=!0)}function ny(n){return n.dynamicChildren=js>0?gt||br:null,ty(),js>0&&gt&&gt.push(n),n}function nr(n,e,t,r,s,i){return ny(Ce(n,e,t,r,s,i,!0))}function Sf(n){return n?n.__v_isVNode===!0:!1}function fs(n,e){return n.type===e.type&&n.key===e.key}const Cf=({key:n})=>n??null,$i=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ve(n)||rt(n)||ae(n)?{i:Tt,r:n,k:e,f:!!t}:n:null);function Ce(n,e=null,t=null,r=0,s=null,i=n===xt?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Cf(e),ref:e&&$i(e),scopeId:sf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tt};return c?(Lc(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=Ve(t)?8:16),js>0&&!a&&gt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&gt.push(l),l}const sn=ry;function ry(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===A_)&&(n=Bs),Sf(n)){const c=xr(n,e,!0);return t&&Lc(c,t),js>0&&!i&&gt&&(c.shapeFlag&6?gt[gt.indexOf(n)]=c:gt.push(c)),c.patchFlag=-2,c}if(py(n)&&(n=n.__vccOpts),e){e=sy(e);let{class:c,style:l}=e;c&&!Ve(c)&&(e.class=Co(c)),be(l)&&(Oc(l)&&!se(l)&&(l=lt({},l)),e.style=Rc(l))}const a=Ve(n)?1:Pf(n)?128:d_(n)?64:be(n)?4:ae(n)?2:0;return Ce(n,e,t,r,s,a,i,!0)}function sy(n){return n?Oc(n)||gf(n)?lt({},n):n:null}function xr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?oy(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Cf(h),ref:e&&e.ref?t&&i?se(i)?i.concat($i(e)):[i,$i(e)]:$i(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==xt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&xr(n.ssContent),ssFallback:n.ssFallback&&xr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&xc(f,l.clone(f)),f}function iy(n=" ",e=0){return sn(xo,null,n,e)}function Mt(n){return n==null||typeof n=="boolean"?sn(Bs):se(n)?sn(xt,null,n.slice()):Sf(n)?Tn(n):sn(xo,null,String(n))}function Tn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:xr(n)}function Lc(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(se(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Lc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!gf(e)?e._ctx=Tt:s===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:Tt},t=32):(e=String(e),r&64?(t=16,e=[iy(e)]):t=8);n.children=e,n.shapeFlag|=t}function oy(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Co([e.class,r.class]));else if(s==="style")e.style=Rc([e.style,r.style]);else if(Ro(s)){const i=e[s],a=r[s];a&&i!==a&&!(se(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ot(n,e,t,r=null){jt(n,e,7,[t,r])}const ay=df();let cy=0;function ly(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||ay,i={uid:cy++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new km(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_f(r,s),emitsOptions:bf(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Q_.bind(null,i),n.ce&&n.ce(i),i}let ct=null,io,Ya;{const n=So(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};io=e("__VUE_INSTANCE_SETTERS__",t=>ct=t),Ya=e("__VUE_SSR_SETTERS__",t=>$s=t)}const ti=n=>{const e=ct;return io(n),n.scope.on(),()=>{n.scope.off(),io(e)}},Uu=()=>{ct&&ct.scope.off(),io(null)};function kf(n){return n.vnode.shapeFlag&4}let $s=!1;function uy(n,e=!1,t=!1){e&&Ya(e);const{props:r,children:s}=n.vnode,i=kf(n);x_(n,r,i,e),U_(n,s,t);const a=i?hy(n,e):void 0;return e&&Ya(!1),a}function hy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,b_);const{setup:r}=t;if(r){Ln();const s=n.setupContext=r.length>1?fy(n):null,i=ti(n),a=ei(r,n,0,[n.props,s]),c=kd(a);if(Fn(),i(),(c||n.sp)&&!Ps(n)&&of(n),c){if(a.then(Uu,Uu),e)return a.then(l=>{Bu(n,l)}).catch(l=>{No(l,n,0)});n.asyncDep=a}else Bu(n,a)}else Nf(n)}function Bu(n,e,t){ae(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:be(e)&&(n.setupState=Zd(e)),Nf(n)}function Nf(n,e,t){const r=n.type;n.render||(n.render=r.render||Lt);{const s=ti(n);Ln();try{P_(n)}finally{Fn(),s()}}}const dy={get(n,e){return et(n,"get",""),n[e]}};function fy(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,dy),slots:n.slots,emit:n.emit,expose:e}}function Mo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Zd(Jm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ss)return Ss[t](n)},has(e,t){return t in e||t in Ss}})):n.proxy}function py(n){return ae(n)&&"__vccOpts"in n}const gy=(n,e)=>r_(n,e,$s),my="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ja;const ju=typeof window<"u"&&window.trustedTypes;if(ju)try{Ja=ju.createPolicy("vue",{createHTML:n=>n})}catch{}const Df=Ja?n=>Ja.createHTML(n):n=>n,_y="http://www.w3.org/2000/svg",yy="http://www.w3.org/1998/Math/MathML",Jt=typeof document<"u"?document:null,$u=Jt&&Jt.createElement("template"),vy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?Jt.createElementNS(_y,n):e==="mathml"?Jt.createElementNS(yy,n):t?Jt.createElement(n,{is:t}):Jt.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Jt.createTextNode(n),createComment:n=>Jt.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Jt.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{$u.innerHTML=Df(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=$u.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ey=Symbol("_vtc");function Ty(n,e,t){const r=n[Ey];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const qu=Symbol("_vod"),Iy=Symbol("_vsh"),wy=Symbol(""),Ay=/(^|;)\s*display\s*:/;function Ry(n,e,t){const r=n.style,s=Ve(t);let i=!1;if(t&&!s){if(e)if(Ve(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&qi(r,c,"")}else for(const a in e)t[a]==null&&qi(r,a,"");for(const a in t)a==="display"&&(i=!0),qi(r,a,t[a])}else if(s){if(e!==t){const a=r[wy];a&&(t+=";"+a),r.cssText=t,i=Ay.test(t)}}else e&&n.removeAttribute("style");qu in n&&(n[qu]=i?r.display:"",n[Iy]&&(r.display="none"))}const Hu=/\s*!important$/;function qi(n,e,t){if(se(t))t.forEach(r=>qi(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=by(n,e);Hu.test(t)?n.setProperty(Mn(r),t.replace(Hu,""),"important"):n[r]=t}}const Wu=["Webkit","Moz","ms"],Aa={};function by(n,e){const t=Aa[e];if(t)return t;let r=kn(e);if(r!=="filter"&&r in n)return Aa[e]=r;r=Od(r);for(let s=0;s<Wu.length;s++){const i=Wu[s]+r;if(i in n)return Aa[e]=i}return e}const Ku="http://www.w3.org/1999/xlink";function zu(n,e,t,r,s,i=Cm(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ku,e.slice(6,e.length)):n.setAttributeNS(Ku,e,t):t==null||i&&!xd(t)?n.removeAttribute(e):n.setAttribute(e,i?"":xn(t)?String(t):t)}function Gu(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Df(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=xd(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Ir(n,e,t,r){n.addEventListener(e,t,r)}function Py(n,e,t,r){n.removeEventListener(e,t,r)}const Qu=Symbol("_vei");function Sy(n,e,t,r,s=null){const i=n[Qu]||(n[Qu]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Cy(e);if(r){const h=i[e]=Dy(r,s);Ir(n,c,h,l)}else a&&(Py(n,c,a,l),i[e]=void 0)}}const Yu=/(?:Once|Passive|Capture)$/;function Cy(n){let e;if(Yu.test(n)){e={};let r;for(;r=n.match(Yu);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Mn(n.slice(2)),e]}let Ra=0;const ky=Promise.resolve(),Ny=()=>Ra||(ky.then(()=>Ra=0),Ra=Date.now());function Dy(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;jt(Oy(r,t.value),e,5,[r])};return t.value=n,t.attached=Ny(),t}function Oy(n,e){if(se(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ju=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Vy=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Ty(n,r,a):e==="style"?Ry(n,t,r):Ro(e)?Ic(e)||Sy(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xy(n,e,r,a))?(Gu(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zu(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ve(r))?Gu(n,kn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),zu(n,e,r,a))};function xy(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ju(e)&&ae(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ju(e)&&Ve(t)?!1:e in n}const Xu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return se(e)?t=>Ui(e,t):e};function My(n){n.target.composing=!0}function Zu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ba=Symbol("_assign"),Hi={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[ba]=Xu(s);const i=r||s.props&&s.props.type==="number";Ir(n,e?"change":"input",a=>{if(a.target.composing)return;let c=n.value;t&&(c=c.trim()),i&&(c=Ba(c)),n[ba](c)}),t&&Ir(n,"change",()=>{n.value=n.value.trim()}),e||(Ir(n,"compositionstart",My),Ir(n,"compositionend",Zu),Ir(n,"change",Zu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[ba]=Xu(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?Ba(n.value):n.value,l=e??"";c!==l&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l))}},Ly=["ctrl","shift","alt","meta"],Fy={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Ly.some(t=>n[`${t}Key`]&&!e.includes(t))},eh=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const c=Fy[e[a]];if(c&&c(s,e))return}return n(s,...i)})},Uy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},By=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=Mn(s.key);if(e.some(a=>a===i||Uy[a]===i))return n(s)})},jy=lt({patchProp:Vy},vy);let th;function $y(){return th||(th=j_(jy))}const qy=(...n)=>{const e=$y().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Wy(r);if(!s)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Hy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Hy(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Wy(n){return Ve(n)?document.querySelector(n):n}var nh={};/**
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
 */const Of=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ky=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Vf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let E=(c&15)<<2|h>>6,R=h&63;l||(R=64,a||(E=64)),r.push(t[f],t[g],t[E],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Of(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ky(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new zy;const E=i<<2|c>>4;if(r.push(E),h!==64){const R=c<<4&240|h>>2;if(r.push(R),g!==64){const k=h<<6&192|g;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gy=function(n){const e=Of(n);return Vf.encodeByteArray(e,!0)},oo=function(n){return Gy(n).replace(/\./g,"")},xf=function(n){try{return Vf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yy=()=>Qy().__FIREBASE_DEFAULTS__,Jy=()=>{if(typeof process>"u"||typeof nh>"u")return;const n=nh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xf(n[1]);return e&&JSON.parse(e)},Lo=()=>{try{return Yy()||Jy()||Xy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mf=n=>{var e,t;return(t=(e=Lo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Lf=n=>{const e=Mf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ff=()=>{var n;return(n=Lo())===null||n===void 0?void 0:n.config},Uf=n=>{var e;return(e=Lo())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Zy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Bf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[oo(JSON.stringify(t)),oo(JSON.stringify(a)),""].join(".")}/**
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
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ev(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function tv(){var n;const e=(n=Lo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iv(){const n=st();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ov(){return!tv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function av(){try{return typeof indexedDB=="object"}catch{return!1}}function cv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const lv="FirebaseError";class Ht extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=lv,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?uv(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ht(s,c,r)}}function uv(n,e){return n.replace(hv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const hv=/\{\$([^}]+)}/g;function dv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ao(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(rh(i)&&rh(a)){if(!ao(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function rh(n){return n!==null&&typeof n=="object"}/**
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
 */function Hr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ms(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function _s(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function fv(n,e){const t=new pv(n,e);return t.subscribe.bind(t)}class pv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");gv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Pa),s.error===void 0&&(s.error=Pa),s.complete===void 0&&(s.complete=Pa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Pa(){}/**
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
 */function Ue(n){return n&&n._delegate?n._delegate:n}class Nn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qn="[DEFAULT]";/**
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
 */class mv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Zy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yv(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_v(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _v(n){return n===Qn?void 0:n}function yv(n){return n.instantiationMode==="EAGER"}/**
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
 */class vv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));const Ev={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Tv=ue.INFO,Iv={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},wv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Iv[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fc{constructor(e){this.name=e,this._logLevel=Tv,this._logHandler=wv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ev[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Av=(n,e)=>e.some(t=>n instanceof t);let sh,ih;function Rv(){return sh||(sh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bv(){return ih||(ih=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jf=new WeakMap,Xa=new WeakMap,$f=new WeakMap,Sa=new WeakMap,Uc=new WeakMap;function Pv(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Pn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&jf.set(t,n)}).catch(()=>{}),Uc.set(e,n),e}function Sv(n){if(Xa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Xa.set(n,e)}let Za={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||$f.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Cv(n){Za=n(Za)}function kv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ca(this),e,...t);return $f.set(r,e.sort?e.sort():[e]),Pn(r)}:bv().includes(n)?function(...e){return n.apply(Ca(this),e),Pn(jf.get(this))}:function(...e){return Pn(n.apply(Ca(this),e))}}function Nv(n){return typeof n=="function"?kv(n):(n instanceof IDBTransaction&&Sv(n),Av(n,Rv())?new Proxy(n,Za):n)}function Pn(n){if(n instanceof IDBRequest)return Pv(n);if(Sa.has(n))return Sa.get(n);const e=Nv(n);return e!==n&&(Sa.set(n,e),Uc.set(e,n)),e}const Ca=n=>Uc.get(n);function Dv(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Pn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Pn(a.result),l.oldVersion,l.newVersion,Pn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Ov=["get","getKey","getAll","getAllKeys","count"],Vv=["put","add","delete","clear"],ka=new Map;function oh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ka.get(e))return ka.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Vv.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ov.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return ka.set(e,i),i}Cv(n=>({...n,get:(e,t,r)=>oh(e,t)||n.get(e,t,r),has:(e,t)=>!!oh(e,t)||n.has(e,t)}));/**
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
 */class xv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Mv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Mv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ec="@firebase/app",ah="0.10.13";/**
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
 */const cn=new Fc("@firebase/app"),Lv="@firebase/app-compat",Fv="@firebase/analytics-compat",Uv="@firebase/analytics",Bv="@firebase/app-check-compat",jv="@firebase/app-check",$v="@firebase/auth",qv="@firebase/auth-compat",Hv="@firebase/database",Wv="@firebase/data-connect",Kv="@firebase/database-compat",zv="@firebase/functions",Gv="@firebase/functions-compat",Qv="@firebase/installations",Yv="@firebase/installations-compat",Jv="@firebase/messaging",Xv="@firebase/messaging-compat",Zv="@firebase/performance",eE="@firebase/performance-compat",tE="@firebase/remote-config",nE="@firebase/remote-config-compat",rE="@firebase/storage",sE="@firebase/storage-compat",iE="@firebase/firestore",oE="@firebase/vertexai-preview",aE="@firebase/firestore-compat",cE="firebase",lE="10.14.1";/**
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
 */const tc="[DEFAULT]",uE={[ec]:"fire-core",[Lv]:"fire-core-compat",[Uv]:"fire-analytics",[Fv]:"fire-analytics-compat",[jv]:"fire-app-check",[Bv]:"fire-app-check-compat",[$v]:"fire-auth",[qv]:"fire-auth-compat",[Hv]:"fire-rtdb",[Wv]:"fire-data-connect",[Kv]:"fire-rtdb-compat",[zv]:"fire-fn",[Gv]:"fire-fn-compat",[Qv]:"fire-iid",[Yv]:"fire-iid-compat",[Jv]:"fire-fcm",[Xv]:"fire-fcm-compat",[Zv]:"fire-perf",[eE]:"fire-perf-compat",[tE]:"fire-rc",[nE]:"fire-rc-compat",[rE]:"fire-gcs",[sE]:"fire-gcs-compat",[iE]:"fire-fst",[aE]:"fire-fst-compat",[oE]:"fire-vertex","fire-js":"fire-js",[cE]:"fire-js-all"};/**
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
 */const co=new Map,hE=new Map,nc=new Map;function ch(n,e){try{n.container.addComponent(e)}catch(t){cn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function or(n){const e=n.name;if(nc.has(e))return cn.debug(`There were multiple attempts to register component ${e}.`),!1;nc.set(e,n);for(const t of co.values())ch(t,n);for(const t of hE.values())ch(t,n);return!0}function Fo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Pt(n){return n.settings!==void 0}/**
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
 */const dE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sn=new ni("app","Firebase",dE);/**
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
 */class fE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
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
 */const hr=lE;function qf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Sn.create("bad-app-name",{appName:String(s)});if(t||(t=Ff()),!t)throw Sn.create("no-options");const i=co.get(s);if(i){if(ao(t,i.options)&&ao(r,i.config))return i;throw Sn.create("duplicate-app",{appName:s})}const a=new vv(s);for(const l of nc.values())a.addComponent(l);const c=new fE(t,r,a);return co.set(s,c),c}function Bc(n=tc){const e=co.get(n);if(!e&&n===tc&&Ff())return qf();if(!e)throw Sn.create("no-app",{appName:n});return e}function Ft(n,e,t){var r;let s=(r=uE[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cn.warn(c.join(" "));return}or(new Nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const pE="firebase-heartbeat-database",gE=1,qs="firebase-heartbeat-store";let Na=null;function Hf(){return Na||(Na=Dv(pE,gE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(qs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Sn.create("idb-open",{originalErrorMessage:n.message})})),Na}async function mE(n){try{const t=(await Hf()).transaction(qs),r=await t.objectStore(qs).get(Wf(n));return await t.done,r}catch(e){if(e instanceof Ht)cn.warn(e.message);else{const t=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cn.warn(t.message)}}}async function lh(n,e){try{const r=(await Hf()).transaction(qs,"readwrite");await r.objectStore(qs).put(e,Wf(n)),await r.done}catch(t){if(t instanceof Ht)cn.warn(t.message);else{const r=Sn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});cn.warn(r.message)}}}function Wf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const _E=1024,yE=30*24*60*60*1e3;class vE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new TE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=uh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=yE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=uh(),{heartbeatsToSend:r,unsentEntries:s}=EE(this._heartbeatsCache.heartbeats),i=oo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return cn.warn(t),""}}}function uh(){return new Date().toISOString().substring(0,10)}function EE(n,e=_E){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),hh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),hh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class TE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return av()?cv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await mE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return lh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return lh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hh(n){return oo(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function IE(n){or(new Nn("platform-logger",e=>new xv(e),"PRIVATE")),or(new Nn("heartbeat",e=>new vE(e),"PRIVATE")),Ft(ec,ah,n),Ft(ec,ah,"esm2017"),Ft("fire-js","")}IE("");function jc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Kf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wE=Kf,zf=new ni("auth","Firebase",Kf());/**
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
 */const lo=new Fc("@firebase/auth");function AE(n,...e){lo.logLevel<=ue.WARN&&lo.warn(`Auth (${hr}): ${n}`,...e)}function Wi(n,...e){lo.logLevel<=ue.ERROR&&lo.error(`Auth (${hr}): ${n}`,...e)}/**
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
 */function wt(n,...e){throw qc(n,...e)}function ut(n,...e){return qc(n,...e)}function $c(n,e,t){const r=Object.assign(Object.assign({},wE()),{[e]:t});return new ni("auth","Firebase",r).create(e,{appName:n.name})}function on(n){return $c(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function RE(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&wt(n,"argument-error"),$c(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return zf.create(n,...e)}function K(n,e,...t){if(!n)throw qc(e,...t)}function tn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Wi(e),new Error(e)}function ln(n,e){n||tn(e)}/**
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
 */function rc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Gf(){return dh()==="http:"||dh()==="https:"}function dh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function bE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gf()||rv()||"connection"in navigator)?navigator.onLine:!0}function PE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ri{constructor(e,t){this.shortDelay=e,this.longDelay=t,ln(t>e,"Short delay should be less than long delay!"),this.isMobile=ev()||sv()}get(){return bE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hc(n,e){ln(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Qf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const CE=new ri(3e4,6e4);function _t(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function At(n,e,t,r,s={}){return Yf(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Hr(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return nv()||(h.referrerPolicy="no-referrer"),Qf.fetch()(Jf(n,n.config.apiHost,t,c),h)})}async function Yf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},SE),e);try{const s=new NE(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ys(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ys(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ys(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ys(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw $c(n,f,h);wt(n,f)}}catch(s){if(s instanceof Ht)throw s;wt(n,"network-request-failed",{message:String(s)})}}async function dr(n,e,t,r,s={}){const i=await At(n,e,t,r,s);return"mfaPendingCredential"in i&&wt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Jf(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Hc(n.config,s):`${n.config.apiScheme}://${s}`}function kE(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class NE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ut(this.auth,"network-request-failed")),CE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ys(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ut(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */function fh(n){return n!==void 0&&n.getResponse!==void 0}function ph(n){return n!==void 0&&n.enterprise!==void 0}class DE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return kE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function OE(n){return(await At(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function VE(n,e){return At(n,"GET","/v2/recaptchaConfig",_t(n,e))}/**
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
 */async function xE(n,e){return At(n,"POST","/v1/accounts:delete",e)}async function Xf(n,e){return At(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ks(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ME(n,e=!1){const t=Ue(n),r=await t.getIdToken(e),s=Wc(r);K(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ks(Da(s.auth_time)),issuedAtTime:ks(Da(s.iat)),expirationTime:ks(Da(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Da(n){return Number(n)*1e3}function Wc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Wi("JWT malformed, contained fewer than 3 sections"),null;try{const s=xf(t);return s?JSON.parse(s):(Wi("Failed to decode base64 JWT payload"),null)}catch(s){return Wi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function gh(n){const e=Wc(n);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ht&&LE(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function LE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class FE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ks(this.lastLoginAt),this.creationTime=ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Hs(n,Xf(t,{idToken:r}));K(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Zf(i.providerUserInfo):[],c=BE(n.providerData,a),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new sc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function UE(n){const e=Ue(n);await uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zf(n){return n.map(e=>{var{providerId:t}=e,r=jc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jE(n,e){const t=await Yf(n,{},async()=>{const r=Hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Jf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Qf.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $E(n,e){return At(n,"POST","/v2/accounts:revokeToken",_t(n,e))}/**
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
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){K(e.length!==0,"internal-error");const t=gh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await jE(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Nr;return r&&(K(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
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
 */function vn(n,e){K(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class nn{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=jc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ME(this,e)}reload(){return UE(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(on(this.auth));const e=await this.getIdToken();return await Hs(this,xE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,h,f;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(s=t.email)!==null&&s!==void 0?s:void 0,R=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,W=(h=t.createdAt)!==null&&h!==void 0?h:void 0,Y=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:Q,emailVerified:$,isAnonymous:ce,providerData:he,stsTokenManager:w}=t;K(Q&&w,e,"internal-error");const m=Nr.fromJSON(this.name,w);K(typeof Q=="string",e,"internal-error"),vn(g,e.name),vn(E,e.name),K(typeof $=="boolean",e,"internal-error"),K(typeof ce=="boolean",e,"internal-error"),vn(R,e.name),vn(k,e.name),vn(x,e.name),vn(D,e.name),vn(W,e.name),vn(Y,e.name);const v=new nn({uid:Q,auth:e,email:E,emailVerified:$,displayName:g,isAnonymous:ce,photoURL:k,phoneNumber:R,tenantId:x,stsTokenManager:m,createdAt:W,lastLoginAt:Y});return he&&Array.isArray(he)&&(v.providerData=he.map(I=>Object.assign({},I))),D&&(v._redirectEventId=D),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Nr;s.updateFromServerResponse(t);const i=new nn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await uo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Zf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Nr;c.updateFromIdToken(r);const l=new nn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new sc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const mh=new Map;function rn(n){ln(n instanceof Function,"Expected a class definition");let e=mh.get(n);return e?(ln(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,mh.set(n,e),e)}/**
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
 */class ep{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ep.type="NONE";const _h=ep;/**
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
 */function Ki(n,e,t){return`firebase:${n}:${e}:${t}`}class Dr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ki(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ki("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Dr(rn(_h),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||rn(_h);const a=Ki(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){const g=nn._fromJSON(e,f);h!==i&&(c=g),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Dr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Dr(i,e,r))}}/**
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
 */function yh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(op(e))return"Blackberry";if(ap(e))return"Webos";if(np(e))return"Safari";if((e.includes("chrome/")||rp(e))&&!e.includes("edge/"))return"Chrome";if(ip(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tp(n=st()){return/firefox\//i.test(n)}function np(n=st()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rp(n=st()){return/crios\//i.test(n)}function sp(n=st()){return/iemobile/i.test(n)}function ip(n=st()){return/android/i.test(n)}function op(n=st()){return/blackberry/i.test(n)}function ap(n=st()){return/webos/i.test(n)}function Kc(n=st()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qE(n=st()){var e;return Kc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HE(){return iv()&&document.documentMode===10}function cp(n=st()){return Kc(n)||ip(n)||ap(n)||op(n)||/windows phone/i.test(n)||sp(n)}/**
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
 */function lp(n,e=[]){let t;switch(n){case"Browser":t=yh(st());break;case"Worker":t=`${yh(st())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${hr}/${r}`}/**
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
 */class WE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function KE(n,e={}){return At(n,"GET","/v2/passwordPolicy",_t(n,e))}/**
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
 */const zE=6;class GE{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:zE,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class QE{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vh(this),this.idTokenSubscription=new vh(this),this.beforeStateQueue=new WE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rn(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xf(this,{idToken:e}),r=await nn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Pt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pt(this.app))return Promise.reject(on(this));const t=e?Ue(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(on(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pt(this.app)?Promise.reject(on(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KE(this),t=new GE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await $E(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rn(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[rn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&AE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function fn(n){return Ue(n)}class vh{constructor(e){this.auth=e,this.observer=null,this.addObserver=fv(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let si={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YE(n){si=n}function zc(n){return si.loadJS(n)}function JE(){return si.recaptchaV2Script}function XE(){return si.recaptchaEnterpriseScript}function ZE(){return si.gapiScript}function up(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const eT="recaptcha-enterprise",tT="NO_RECAPTCHA";class nT{constructor(e){this.type=eT,this.auth=fn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{VE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new DE(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;ph(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(tT)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&ph(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=XE();l.length!==0&&(l+=c),zc(l).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function Eh(n,e,t,r=!1){const s=new nT(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Th(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Eh(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Eh(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
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
 */function rT(n,e){const t=Fo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ao(i,e??{}))return s;wt(s,"already-initialized")}return t.initialize({options:e})}function sT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(rn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iT(n,e,t){const r=fn(n);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=hp(e),{host:a,port:c}=oT(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),aT()}function hp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function oT(n){const e=hp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ih(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Ih(a)}}}function Ih(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function aT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Uo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,t){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}async function cT(n,e){return At(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lT(n,e){return dr(n,"POST","/v1/accounts:signInWithPassword",_t(n,e))}/**
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
 */async function uT(n,e){return dr(n,"POST","/v1/accounts:signInWithEmailLink",_t(n,e))}async function hT(n,e){return dr(n,"POST","/v1/accounts:signInWithEmailLink",_t(n,e))}/**
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
 */class Ws extends Uo{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ws(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ws(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Th(e,t,"signInWithPassword",lT);case"emailLink":return uT(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Th(e,r,"signUpPassword",cT);case"emailLink":return hT(e,{idToken:t,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Or(n,e){return dr(n,"POST","/v1/accounts:signInWithIdp",_t(n,e))}/**
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
 */const dT="http://localhost";class ar extends Uo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=jc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new ar(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Or(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Or(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Or(e,t)}buildRequest(){const e={requestUri:dT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Hr(t)}return e}}/**
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
 */async function fT(n,e){return At(n,"POST","/v1/accounts:sendVerificationCode",_t(n,e))}async function pT(n,e){return dr(n,"POST","/v1/accounts:signInWithPhoneNumber",_t(n,e))}async function gT(n,e){const t=await dr(n,"POST","/v1/accounts:signInWithPhoneNumber",_t(n,e));if(t.temporaryProof)throw ys(n,"account-exists-with-different-credential",t);return t}const mT={USER_NOT_FOUND:"user-not-found"};async function _T(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return dr(n,"POST","/v1/accounts:signInWithPhoneNumber",_t(n,t),mT)}/**
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
 */class Ns extends Uo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ns({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ns({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return pT(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return gT(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return _T(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!t&&!s&&!i?null:new Ns({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
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
 */function yT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vT(n){const e=ms(_s(n)).link,t=e?ms(_s(e)).deep_link_id:null,r=ms(_s(n)).deep_link_id;return(r?ms(_s(r)).link:null)||r||t||e||n}class Gc{constructor(e){var t,r,s,i,a,c;const l=ms(_s(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,g=yT((s=l.mode)!==null&&s!==void 0?s:null);K(h&&f&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=vT(e);try{return new Gc(t)}catch{return null}}}/**
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
 */class Wr{constructor(){this.providerId=Wr.PROVIDER_ID}static credential(e,t){return Ws._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Gc.parseLink(t);return K(r,"argument-error"),Ws._fromEmailAndCode(e,r.code,r.tenantId)}}Wr.PROVIDER_ID="password";Wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ii extends Qc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class In extends ii{constructor(){super("facebook.com")}static credential(e){return ar._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
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
 */class en extends ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ar._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return en.credential(t,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
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
 */class wn extends ii{constructor(){super("github.com")}static credential(e){return ar._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
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
 */class An extends ii{constructor(){super("twitter.com")}static credential(e,t){return ar._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return An.credential(t,r)}catch{return null}}}An.TWITTER_SIGN_IN_METHOD="twitter.com";An.PROVIDER_ID="twitter.com";/**
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
 */class Mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await nn._fromIdTokenResponse(e,r,s),a=wh(r);return new Mr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=wh(r);return new Mr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function wh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ho extends Ht{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ho.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ho(e,t,r,s)}}function dp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ho._fromErrorAndOperation(n,i,e,r):i})}async function ET(n,e,t=!1){const r=await Hs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Mr._forOperation(n,"link",r)}/**
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
 */async function TT(n,e,t=!1){const{auth:r}=n;if(Pt(r.app))return Promise.reject(on(r));const s="reauthenticate";try{const i=await Hs(n,dp(r,s,e,n),t);K(i.idToken,r,"internal-error");const a=Wc(i.idToken);K(a,r,"internal-error");const{sub:c}=a;return K(n.uid===c,r,"user-mismatch"),Mr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),i}}/**
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
 */async function fp(n,e,t=!1){if(Pt(n.app))return Promise.reject(on(n));const r="signIn",s=await dp(n,r,e),i=await Mr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function pp(n,e){return fp(fn(n),e)}/**
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
 */async function IT(n){const e=fn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function wT(n,e,t){return Pt(n.app)?Promise.reject(on(n)):pp(Ue(n),Wr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&IT(n),r})}function AT(n,e,t,r){return Ue(n).onIdTokenChanged(e,t,r)}function RT(n,e,t){return Ue(n).beforeAuthStateChanged(e,t)}function bT(n,e,t,r){return Ue(n).onAuthStateChanged(e,t,r)}function PT(n){return Ue(n).signOut()}/**
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
 */function ST(n,e){return At(n,"POST","/v2/accounts/mfaEnrollment:start",_t(n,e))}const fo="__sak";/**
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
 */class gp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fo,"1"),this.storage.removeItem(fo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const CT=1e3,kT=10;class mp extends gp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);HE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kT):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},CT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mp.type="LOCAL";const NT=mp;/**
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
 */class _p extends gp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_p.type="SESSION";const yp=_p;/**
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
 */function DT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Bo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Bo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await DT(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bo.receivers=[];/**
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
 */function Yc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class OT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Yc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function De(){return window}function VT(n){De().location.href=n}/**
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
 */function Jc(){return typeof De().WorkerGlobalScope<"u"&&typeof De().importScripts=="function"}async function xT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function LT(){return Jc()?self:null}/**
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
 */const vp="firebaseLocalStorageDb",FT=1,po="firebaseLocalStorage",Ep="fbase_key";class oi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jo(n,e){return n.transaction([po],e?"readwrite":"readonly").objectStore(po)}function UT(){const n=indexedDB.deleteDatabase(vp);return new oi(n).toPromise()}function ic(){const n=indexedDB.open(vp,FT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(po,{keyPath:Ep})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(po)?e(r):(r.close(),await UT(),e(await ic()))})})}async function Ah(n,e,t){const r=jo(n,!0).put({[Ep]:e,value:t});return new oi(r).toPromise()}async function BT(n,e){const t=jo(n,!1).get(e),r=await new oi(t).toPromise();return r===void 0?null:r.value}function Rh(n,e){const t=jo(n,!0).delete(e);return new oi(t).toPromise()}const jT=800,$T=3;class Tp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ic(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>$T)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bo._getInstance(LT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xT(),!this.activeServiceWorker)return;this.sender=new OT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ic();return await Ah(e,fo,"1"),await Rh(e,fo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ah(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>BT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Rh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=jo(s,!1).getAll();return new oi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tp.type="LOCAL";const qT=Tp;/**
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
 */function HT(n,e){return At(n,"POST","/v2/accounts/mfaSignIn:start",_t(n,e))}/**
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
 */const WT=500,KT=6e4,Oi=1e12;class zT{constructor(e){this.auth=e,this.counter=Oi,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new GT(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Oi;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Oi;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Oi;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class GT{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;K(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=QT(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},KT)},WT))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function QT(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const Oa=up("rcb"),YT=new ri(3e4,6e4);class JT{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=De().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return K(XT(t),e,"argument-error"),this.shouldResolveImmediately(t)&&fh(De().grecaptcha)?Promise.resolve(De().grecaptcha):new Promise((r,s)=>{const i=De().setTimeout(()=>{s(ut(e,"network-request-failed"))},YT.get());De()[Oa]=()=>{De().clearTimeout(i),delete De()[Oa];const c=De().grecaptcha;if(!c||!fh(c)){s(ut(e,"internal-error"));return}const l=c.render;c.render=(h,f)=>{const g=l(h,f);return this.counter++,g},this.hostLanguage=t,r(c)};const a=`${JE()}?${Hr({onload:Oa,render:"explicit",hl:t})}`;zc(a).catch(()=>{clearTimeout(i),s(ut(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=De().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function XT(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class ZT{async load(e){return new zT(e)}clearedOneInstance(){}}/**
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
 */const Ip="recaptcha",eI={theme:"light",type:"image"};class tI{constructor(e,t,r=Object.assign({},eI)){this.parameters=r,this.type=Ip,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=fn(e),this.isInvisible=this.parameters.size==="invisible",K(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;K(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ZT:new JT,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(s=>{const i=a=>{a&&(this.tokenChangeListeners.delete(i),s(a))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){K(!this.parameters.sitekey,this.auth,"argument-error"),K(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),K(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=De()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){K(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){K(Gf()&&!Jc(),this.auth,"internal-error"),await nI(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await OE(this.auth);K(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return K(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function nI(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class rI{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Ns._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function sI(n,e,t){if(Pt(n.app))return Promise.reject(on(n));const r=fn(n),s=await iI(r,e,Ue(t));return new rI(s,i=>pp(r,i))}async function iI(n,e,t){var r;const s=await t.verify();try{K(typeof s=="string",n,"argument-error"),K(t.type===Ip,n,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const a=i.session;if("phoneNumber"in i)return K(a.type==="enroll",n,"internal-error"),(await ST(n,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{K(a.type==="signin",n,"internal-error");const c=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;return K(c,n,"missing-multi-factor-info"),(await HT(n,{mfaPendingCredential:a.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:a}=await fT(n,{phoneNumber:i.phoneNumber,recaptchaToken:s});return a}}finally{t._reset()}}/**
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
 */function wp(n,e){return e?rn(e):(K(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Xc extends Uo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Or(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oI(n){return fp(n.auth,new Xc(n),n.bypassAuthState)}function aI(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),TT(t,new Xc(n),n.bypassAuthState)}async function cI(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),ET(t,new Xc(n),n.bypassAuthState)}/**
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
 */class Ap{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oI;case"linkViaPopup":case"linkViaRedirect":return cI;case"reauthViaPopup":case"reauthViaRedirect":return aI;default:wt(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lI=new ri(2e3,1e4);async function uI(n,e,t){if(Pt(n.app))return Promise.reject(ut(n,"operation-not-supported-in-this-environment"));const r=fn(n);RE(n,e,Qc);const s=wp(r,t);return new Jn(r,"signInViaPopup",e,s).executeNotNull()}class Jn extends Ap{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const e=Yc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lI.get())};e()}}Jn.currentPopupAction=null;/**
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
 */const hI="pendingRedirect",zi=new Map;class dI extends Ap{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{const r=await fI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fI(n,e){const t=mI(e),r=gI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function pI(n,e){zi.set(n._key(),e)}function gI(n){return rn(n._redirectPersistence)}function mI(n){return Ki(hI,n.config.apiKey,n.name)}async function _I(n,e,t=!1){if(Pt(n.app))return Promise.reject(on(n));const r=fn(n),s=wp(r,e),a=await new dI(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const yI=10*60*1e3;class vI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Rp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ut(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yI&&this.cachedEventUids.clear(),this.cachedEventUids.has(bh(e))}saveEventToCache(e){this.cachedEventUids.add(bh(e)),this.lastProcessedEventTime=Date.now()}}function bh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Rp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rp(n);default:return!1}}/**
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
 */async function TI(n,e={}){return At(n,"GET","/v1/projects",e)}/**
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
 */const II=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wI=/^https?/;async function AI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await TI(n);for(const t of e)try{if(RI(t))return}catch{}wt(n,"unauthorized-domain")}function RI(n){const e=rc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!wI.test(t))return!1;if(II.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const bI=new ri(3e4,6e4);function Ph(){const n=De().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function PI(n){return new Promise((e,t)=>{var r,s,i;function a(){Ph(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ph(),t(ut(n,"network-request-failed"))},timeout:bI.get()})}if(!((s=(r=De().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=De().gapi)===null||i===void 0)&&i.load)a();else{const c=up("iframefcb");return De()[c]=()=>{gapi.load?a():t(ut(n,"network-request-failed"))},zc(`${ZE()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Gi=null,e})}let Gi=null;function SI(n){return Gi=Gi||PI(n),Gi}/**
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
 */const CI=new ri(5e3,15e3),kI="__/auth/iframe",NI="emulator/auth/iframe",DI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VI(n){const e=n.config;K(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Hc(e,NI):`https://${n.config.authDomain}/${kI}`,r={apiKey:e.apiKey,appName:n.name,v:hr},s=OI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Hr(r).slice(1)}`}async function xI(n){const e=await SI(n),t=De().gapi;return K(t,n,"internal-error"),e.open({where:document.body,url:VI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ut(n,"network-request-failed"),c=De().setTimeout(()=>{i(a)},CI.get());function l(){De().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const MI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LI=500,FI=600,UI="_blank",BI="http://localhost";class Sh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jI(n,e,t,r=LI,s=FI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},MI),{width:r.toString(),height:s.toString(),top:i,left:a}),h=st().toLowerCase();t&&(c=rp(h)?UI:t),tp(h)&&(e=e||BI,l.scrollbars="yes");const f=Object.entries(l).reduce((E,[R,k])=>`${E}${R}=${k},`,"");if(qE(h)&&c!=="_self")return $I(e||"",c),new Sh(null);const g=window.open(e||"",c,f);K(g,n,"popup-blocked");try{g.focus()}catch{}return new Sh(g)}function $I(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const qI="__/auth/handler",HI="emulator/auth/handler",WI=encodeURIComponent("fac");async function Ch(n,e,t,r,s,i){K(n.config.authDomain,n,"auth-domain-config-required"),K(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:hr,eventId:s};if(e instanceof Qc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",dv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof ii){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${WI}=${encodeURIComponent(l)}`:"";return`${KI(n)}?${Hr(c).slice(1)}${h}`}function KI({config:n}){return n.emulator?Hc(n,HI):`https://${n.authDomain}/${qI}`}/**
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
 */const Va="webStorageSupport";class zI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yp,this._completeRedirectFn=_I,this._overrideRedirectResult=pI}async _openPopup(e,t,r,s){var i;ln((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Ch(e,t,r,rc(),s);return jI(e,a,Yc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ch(e,t,r,rc(),s);return VT(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ln(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await xI(e),r=new vI(e);return t.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Va,{type:Va},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Va];a!==void 0&&t(!!a),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=AI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cp()||np()||Kc()}}const GI=zI;var kh="@firebase/auth",Nh="1.7.9";/**
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
 */class QI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JI(n){or(new Nn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;K(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lp(n)},h=new QE(r,s,i,l);return sT(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),or(new Nn("auth-internal",e=>{const t=fn(e.getProvider("auth").getImmediate());return(r=>new QI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(kh,Nh,YI(n)),Ft(kh,Nh,"esm2017")}/**
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
 */const XI=5*60,ZI=Uf("authIdTokenMaxAge")||XI;let Dh=null;const ew=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>ZI)return;const s=t==null?void 0:t.token;Dh!==s&&(Dh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tw(n=Bc()){const e=Fo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=rT(n,{popupRedirectResolver:GI,persistence:[qT,NT,yp]}),r=Uf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=ew(i.toString());RT(t,a,()=>a(t.currentUser)),AT(t,c=>a(c))}}const s=Mf("auth");return s&&iT(t,`http://${s}`),t}function nw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}YE({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ut("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",nw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JI("Browser");var rw="firebase",sw="10.14.1";/**
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
 */Ft(rw,sw,"app");var Oh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rr,bp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function v(){}v.prototype=m.prototype,w.D=m.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(I,A,P){for(var y=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)y[ht-2]=arguments[ht];return m.prototype[A].apply(I,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,v){v||(v=0);var I=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)I[A]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(A=0;16>A;++A)I[A]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=w.g[0],v=w.g[1],A=w.g[2];var P=w.g[3],y=m+(P^v&(A^P))+I[0]+3614090360&4294967295;m=v+(y<<7&4294967295|y>>>25),y=P+(A^m&(v^A))+I[1]+3905402710&4294967295,P=m+(y<<12&4294967295|y>>>20),y=A+(v^P&(m^v))+I[2]+606105819&4294967295,A=P+(y<<17&4294967295|y>>>15),y=v+(m^A&(P^m))+I[3]+3250441966&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(P^v&(A^P))+I[4]+4118548399&4294967295,m=v+(y<<7&4294967295|y>>>25),y=P+(A^m&(v^A))+I[5]+1200080426&4294967295,P=m+(y<<12&4294967295|y>>>20),y=A+(v^P&(m^v))+I[6]+2821735955&4294967295,A=P+(y<<17&4294967295|y>>>15),y=v+(m^A&(P^m))+I[7]+4249261313&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(P^v&(A^P))+I[8]+1770035416&4294967295,m=v+(y<<7&4294967295|y>>>25),y=P+(A^m&(v^A))+I[9]+2336552879&4294967295,P=m+(y<<12&4294967295|y>>>20),y=A+(v^P&(m^v))+I[10]+4294925233&4294967295,A=P+(y<<17&4294967295|y>>>15),y=v+(m^A&(P^m))+I[11]+2304563134&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(P^v&(A^P))+I[12]+1804603682&4294967295,m=v+(y<<7&4294967295|y>>>25),y=P+(A^m&(v^A))+I[13]+4254626195&4294967295,P=m+(y<<12&4294967295|y>>>20),y=A+(v^P&(m^v))+I[14]+2792965006&4294967295,A=P+(y<<17&4294967295|y>>>15),y=v+(m^A&(P^m))+I[15]+1236535329&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(A^P&(v^A))+I[1]+4129170786&4294967295,m=v+(y<<5&4294967295|y>>>27),y=P+(v^A&(m^v))+I[6]+3225465664&4294967295,P=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(P^m))+I[11]+643717713&4294967295,A=P+(y<<14&4294967295|y>>>18),y=v+(P^m&(A^P))+I[0]+3921069994&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^P&(v^A))+I[5]+3593408605&4294967295,m=v+(y<<5&4294967295|y>>>27),y=P+(v^A&(m^v))+I[10]+38016083&4294967295,P=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(P^m))+I[15]+3634488961&4294967295,A=P+(y<<14&4294967295|y>>>18),y=v+(P^m&(A^P))+I[4]+3889429448&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^P&(v^A))+I[9]+568446438&4294967295,m=v+(y<<5&4294967295|y>>>27),y=P+(v^A&(m^v))+I[14]+3275163606&4294967295,P=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(P^m))+I[3]+4107603335&4294967295,A=P+(y<<14&4294967295|y>>>18),y=v+(P^m&(A^P))+I[8]+1163531501&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^P&(v^A))+I[13]+2850285829&4294967295,m=v+(y<<5&4294967295|y>>>27),y=P+(v^A&(m^v))+I[2]+4243563512&4294967295,P=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(P^m))+I[7]+1735328473&4294967295,A=P+(y<<14&4294967295|y>>>18),y=v+(P^m&(A^P))+I[12]+2368359562&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(v^A^P)+I[5]+4294588738&4294967295,m=v+(y<<4&4294967295|y>>>28),y=P+(m^v^A)+I[8]+2272392833&4294967295,P=m+(y<<11&4294967295|y>>>21),y=A+(P^m^v)+I[11]+1839030562&4294967295,A=P+(y<<16&4294967295|y>>>16),y=v+(A^P^m)+I[14]+4259657740&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^P)+I[1]+2763975236&4294967295,m=v+(y<<4&4294967295|y>>>28),y=P+(m^v^A)+I[4]+1272893353&4294967295,P=m+(y<<11&4294967295|y>>>21),y=A+(P^m^v)+I[7]+4139469664&4294967295,A=P+(y<<16&4294967295|y>>>16),y=v+(A^P^m)+I[10]+3200236656&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^P)+I[13]+681279174&4294967295,m=v+(y<<4&4294967295|y>>>28),y=P+(m^v^A)+I[0]+3936430074&4294967295,P=m+(y<<11&4294967295|y>>>21),y=A+(P^m^v)+I[3]+3572445317&4294967295,A=P+(y<<16&4294967295|y>>>16),y=v+(A^P^m)+I[6]+76029189&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^P)+I[9]+3654602809&4294967295,m=v+(y<<4&4294967295|y>>>28),y=P+(m^v^A)+I[12]+3873151461&4294967295,P=m+(y<<11&4294967295|y>>>21),y=A+(P^m^v)+I[15]+530742520&4294967295,A=P+(y<<16&4294967295|y>>>16),y=v+(A^P^m)+I[2]+3299628645&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(A^(v|~P))+I[0]+4096336452&4294967295,m=v+(y<<6&4294967295|y>>>26),y=P+(v^(m|~A))+I[7]+1126891415&4294967295,P=m+(y<<10&4294967295|y>>>22),y=A+(m^(P|~v))+I[14]+2878612391&4294967295,A=P+(y<<15&4294967295|y>>>17),y=v+(P^(A|~m))+I[5]+4237533241&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~P))+I[12]+1700485571&4294967295,m=v+(y<<6&4294967295|y>>>26),y=P+(v^(m|~A))+I[3]+2399980690&4294967295,P=m+(y<<10&4294967295|y>>>22),y=A+(m^(P|~v))+I[10]+4293915773&4294967295,A=P+(y<<15&4294967295|y>>>17),y=v+(P^(A|~m))+I[1]+2240044497&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~P))+I[8]+1873313359&4294967295,m=v+(y<<6&4294967295|y>>>26),y=P+(v^(m|~A))+I[15]+4264355552&4294967295,P=m+(y<<10&4294967295|y>>>22),y=A+(m^(P|~v))+I[6]+2734768916&4294967295,A=P+(y<<15&4294967295|y>>>17),y=v+(P^(A|~m))+I[13]+1309151649&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~P))+I[4]+4149444226&4294967295,m=v+(y<<6&4294967295|y>>>26),y=P+(v^(m|~A))+I[11]+3174756917&4294967295,P=m+(y<<10&4294967295|y>>>22),y=A+(m^(P|~v))+I[2]+718787259&4294967295,A=P+(y<<15&4294967295|y>>>17),y=v+(P^(A|~m))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var v=m-this.blockSize,I=this.B,A=this.h,P=0;P<m;){if(A==0)for(;P<=v;)s(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<m;)if(I[A++]=w.charCodeAt(P++),A==this.blockSize){s(this,I),A=0;break}}else for(;P<m;)if(I[A++]=w[P++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var v=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=v&255,v/=256;for(this.u(w),w=Array(16),m=v=0;4>m;++m)for(var I=0;32>I;I+=8)w[v++]=this.g[m]>>>I&255;return w};function i(w,m){var v=c;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=m(w)}function a(w,m){this.h=m;for(var v=[],I=!0,A=w.length-1;0<=A;A--){var P=w[A]|0;I&&P==m||(v[A]=P,I=!1)}this.g=v}var c={};function l(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return D(h(-w));for(var m=[],v=1,I=0;w>=v;I++)m[I]=w/v|0,v*=4294967296;return new a(m,0)}function f(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return D(f(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(m,8)),I=g,A=0;A<w.length;A+=8){var P=Math.min(8,w.length-A),y=parseInt(w.substring(A,A+P),m);8>P?(P=h(Math.pow(m,P)),I=I.j(P).add(h(y))):(I=I.j(v),I=I.add(h(y)))}return I}var g=l(0),E=l(1),R=l(16777216);n=a.prototype,n.m=function(){if(x(this))return-D(this).m();for(var w=0,m=1,v=0;v<this.g.length;v++){var I=this.i(v);w+=(0<=I?I:4294967296+I)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(x(this))return"-"+D(this).toString(w);for(var m=h(Math.pow(w,6)),v=this,I="";;){var A=$(v,m).g;v=W(v,A.j(m));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=A,k(v))return P+I;for(;6>P.length;)P="0"+P;I=P+I}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function x(w){return w.h==-1}n.l=function(w){return w=W(this,w),x(w)?-1:k(w)?0:1};function D(w){for(var m=w.g.length,v=[],I=0;I<m;I++)v[I]=~w.g[I];return new a(v,~w.h).add(E)}n.abs=function(){return x(this)?D(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0,A=0;A<=m;A++){var P=I+(this.i(A)&65535)+(w.i(A)&65535),y=(P>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);I=y>>>16,P&=65535,y&=65535,v[A]=y<<16|P}return new a(v,v[v.length-1]&-2147483648?-1:0)};function W(w,m){return w.add(D(m))}n.j=function(w){if(k(this)||k(w))return g;if(x(this))return x(w)?D(this).j(D(w)):D(D(this).j(w));if(x(w))return D(this.j(D(w)));if(0>this.l(R)&&0>w.l(R))return h(this.m()*w.m());for(var m=this.g.length+w.g.length,v=[],I=0;I<2*m;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<w.g.length;A++){var P=this.i(I)>>>16,y=this.i(I)&65535,ht=w.i(A)>>>16,pn=w.i(A)&65535;v[2*I+2*A]+=y*pn,Y(v,2*I+2*A),v[2*I+2*A+1]+=P*pn,Y(v,2*I+2*A+1),v[2*I+2*A+1]+=y*ht,Y(v,2*I+2*A+1),v[2*I+2*A+2]+=P*ht,Y(v,2*I+2*A+2)}for(I=0;I<m;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=m;I<2*m;I++)v[I]=0;return new a(v,0)};function Y(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function Q(w,m){this.g=w,this.h=m}function $(w,m){if(k(m))throw Error("division by zero");if(k(w))return new Q(g,g);if(x(w))return m=$(D(w),m),new Q(D(m.g),D(m.h));if(x(m))return m=$(w,D(m)),new Q(D(m.g),m.h);if(30<w.g.length){if(x(w)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var v=E,I=m;0>=I.l(w);)v=ce(v),I=ce(I);var A=he(v,1),P=he(I,1);for(I=he(I,2),v=he(v,2);!k(I);){var y=P.add(I);0>=y.l(w)&&(A=A.add(v),P=y),I=he(I,1),v=he(v,1)}return m=W(w,A.j(m)),new Q(A,m)}for(A=g;0<=w.l(m);){for(v=Math.max(1,Math.floor(w.m()/m.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),P=h(v),y=P.j(m);x(y)||0<y.l(w);)v-=I,P=h(v),y=P.j(m);k(P)&&(P=E),A=A.add(P),w=W(w,y)}return new Q(A,w)}n.A=function(w){return $(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)&w.i(I);return new a(v,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)|w.i(I);return new a(v,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)^w.i(I);return new a(v,this.h^w.h)};function ce(w){for(var m=w.g.length+1,v=[],I=0;I<m;I++)v[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(v,w.h)}function he(w,m){var v=m>>5;m%=32;for(var I=w.g.length-v,A=[],P=0;P<I;P++)A[P]=0<m?w.i(P+v)>>>m|w.i(P+v+1)<<32-m:w.i(P+v);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,rr=a}).apply(typeof Oh<"u"?Oh:typeof self<"u"?self:typeof window<"u"?window:{});var Vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pp,vs,Sp,Qi,oc,Cp,kp,Np;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vi=="object"&&Vi];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in d))break e;d=d[b]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,p=!1,b={next:function(){if(!p&&d<o.length){var S=d++;return{value:u(S,o[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function g(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(u,b)}}return function(){return o.apply(u,arguments)}}function E(o,u,d){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,E.apply(null,arguments)}function R(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function k(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,b,S){for(var j=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)j[Te-2]=arguments[Te];return u.prototype[b].apply(p,j)}}function x(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function D(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(l(p)){const b=o.length||0,S=p.length||0;o.length=b+S;for(let j=0;j<S;j++)o[b+j]=p[j]}else o.push(p)}}class W{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function Y(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function $(o){return $[" "](o),o}$[" "]=function(){};var ce=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function he(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function w(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function m(o){const u={};for(const d in o)u[d]=o[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let d,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(d in p)o[d]=p[d];for(let S=0;S<v.length;S++)d=v[S],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function A(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function P(o){c.setTimeout(()=>{throw o},0)}function y(){var o=Rt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ht{constructor(){this.h=this.g=null}add(u,d){const p=pn.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var pn=new W(()=>new Be,o=>o.reset());class Be{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,pe=!1,Rt=new ht,Un=()=>{const o=c.Promise.resolve(void 0);ve=()=>{o.then(Kt)}};var Kt=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){P(d)}var u=pn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}pe=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var Zo=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o}();function Bn(o,u){if(Me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ce){e:{try{$(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:jn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Bn.aa.h.call(this)}}k(Bn,Me);var jn={2:"touch",3:"pen",4:"mouse"};Bn.prototype.h=function(){Bn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var zt="closure_listenable_"+(1e6*Math.random()|0),Jr=0;function fi(o,u,d,p,b){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=b,this.key=++Jr,this.da=this.fa=!1}function Dt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Xr(o){this.src=o,this.g={},this.h=0}Xr.prototype.add=function(o,u,d,p,b){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var j=T(o,u,p,b);return-1<j?(u=o[j],d||(u.fa=!1)):(u=new fi(u,this.src,S,!!p,b),u.fa=d,o.push(u)),u};function _(o,u){var d=u.type;if(d in o.g){var p=o.g[d],b=Array.prototype.indexOf.call(p,u,void 0),S;(S=0<=b)&&Array.prototype.splice.call(p,b,1),S&&(Dt(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function T(o,u,d,p){for(var b=0;b<o.length;++b){var S=o[b];if(!S.da&&S.listener==u&&S.capture==!!d&&S.ha==p)return b}return-1}var C="closure_lm_"+(1e6*Math.random()|0),M={};function O(o,u,d,p,b){if(Array.isArray(u)){for(var S=0;S<u.length;S++)O(o,u[S],d,p,b);return null}return d=te(d),o&&o[zt]?o.K(u,d,h(p)?!!p.capture:!1,b):L(o,u,d,!1,p,b)}function L(o,u,d,p,b,S){if(!u)throw Error("Invalid event type");var j=h(b)?!!b.capture:!!b,Te=H(o);if(Te||(o[C]=Te=new Xr(o)),d=Te.add(u,d,p,j,S),d.proxy)return d;if(p=q(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Zo||(b=j),b===void 0&&(b=!1),o.addEventListener(u.toString(),p,b);else if(o.attachEvent)o.attachEvent(F(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function q(){function o(d){return u.call(o.src,o.listener,d)}const u=Z;return o}function B(o,u,d,p,b){if(Array.isArray(u))for(var S=0;S<u.length;S++)B(o,u[S],d,p,b);else p=h(p)?!!p.capture:!!p,d=te(d),o&&o[zt]?(o=o.i,u=String(u).toString(),u in o.g&&(S=o.g[u],d=T(S,d,p,b),-1<d&&(Dt(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete o.g[u],o.h--)))):o&&(o=H(o))&&(u=o.g[u.toString()],o=-1,u&&(o=T(u,d,p,b)),(d=-1<o?u[o]:null)&&U(d))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[zt])_(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(F(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=H(u))?(_(d,o),d.h==0&&(d.src=null,u[C]=null)):Dt(o)}}}function F(o){return o in M?M[o]:M[o]="on"+o}function Z(o,u){if(o.da)o=!0;else{u=new Bn(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&U(o),o=d.call(p,u)}return o}function H(o){return o=o[C],o instanceof Xr?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function ee(){xe.call(this),this.i=new Xr(this),this.M=this,this.F=null}k(ee,xe),ee.prototype[zt]=!0,ee.prototype.removeEventListener=function(o,u,d,p){B(this,o,u,d,p)};function oe(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Me(u,o);else if(u instanceof Me)u.target=u.target||o;else{var b=u;u=new Me(p,o),I(u,b)}if(b=!0,d)for(var S=d.length-1;0<=S;S--){var j=u.g=d[S];b=de(j,p,!0,u)&&b}if(j=u.g=o,b=de(j,p,!0,u)&&b,b=de(j,p,!1,u)&&b,d)for(S=0;S<d.length;S++)j=u.g=d[S],b=de(j,p,!1,u)&&b}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)Dt(d[p]);delete o.g[u],o.h--}}this.F=null},ee.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},ee.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function de(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,S=0;S<u.length;++S){var j=u[S];if(j&&!j.da&&j.capture==d){var Te=j.listener,qe=j.ha||j.src;j.fa&&_(o.i,j),b=Te.call(qe,p)!==!1&&b}}return b&&!p.defaultPrevented}function Ge(o,u,d){if(typeof o=="function")d&&(o=E(o,d));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function je(o){o.g=Ge(()=>{o.g=null,o.i&&(o.i=!1,je(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class yt extends xe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:je(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(o){xe.call(this),this.h=o,this.g={}}k(Qe,xe);var gn=[];function Zr(o){he(o.g,function(u,d){this.g.hasOwnProperty(d)&&U(u)},o),o.g={}}Qe.prototype.N=function(){Qe.aa.N.call(this),Zr(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $e=c.JSON.stringify,vt=c.JSON.parse,pi=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ea(){}ea.prototype.h=null;function xl(o){return o.h||(o.h=o.i())}function Ml(){}var es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ta(){Me.call(this,"d")}k(ta,Me);function na(){Me.call(this,"c")}k(na,Me);var $n={},Ll=null;function gi(){return Ll=Ll||new ee}$n.La="serverreachability";function Fl(o){Me.call(this,$n.La,o)}k(Fl,Me);function ts(o){const u=gi();oe(u,new Fl(u))}$n.STAT_EVENT="statevent";function Ul(o,u){Me.call(this,$n.STAT_EVENT,o),this.stat=u}k(Ul,Me);function it(o){const u=gi();oe(u,new Ul(u,o))}$n.Ma="timingevent";function Bl(o,u){Me.call(this,$n.Ma,o),this.size=u}k(Bl,Me);function ns(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function rs(){this.g=!0}rs.prototype.xa=function(){this.g=!1};function Yg(o,u,d,p,b,S){o.info(function(){if(o.g)if(S)for(var j="",Te=S.split("&"),qe=0;qe<Te.length;qe++){var ge=Te[qe].split("=");if(1<ge.length){var Ye=ge[0];ge=ge[1];var Je=Ye.split("_");j=2<=Je.length&&Je[1]=="type"?j+(Ye+"="+ge+"&"):j+(Ye+"=redacted&")}}else j=null;else j=S;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+u+`
`+d+`
`+j})}function Jg(o,u,d,p,b,S,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+u+`
`+d+`
`+S+" "+j})}function mr(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Zg(o,d)+(p?" "+p:"")})}function Xg(o,u){o.info(function(){return"TIMEOUT: "+u})}rs.prototype.info=function(){};function Zg(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var S=b[0];if(S!="noop"&&S!="stop"&&S!="close")for(var j=1;j<b.length;j++)b[j]=""}}}}return $e(d)}catch{return u}}var mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ra;function _i(){}k(_i,ea),_i.prototype.g=function(){return new XMLHttpRequest},_i.prototype.i=function(){return{}},ra=new _i;function mn(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new Qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $l}function $l(){this.i=null,this.g="",this.h=!1}var ql={},sa={};function ia(o,u,d){o.L=1,o.v=Ti(Gt(u)),o.m=d,o.P=!0,Hl(o,null)}function Hl(o,u){o.F=Date.now(),yi(o),o.A=Gt(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),su(d.i,"t",p),o.C=0,d=o.j.J,o.h=new $l,o.g=Iu(o.j,d?u:null,!o.m),0<o.O&&(o.M=new yt(E(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(gn[0]=b.toString()),b=gn);for(var S=0;S<b.length;S++){var j=O(d,b[S],p||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ts(),Yg(o.i,o.u,o.A,o.l,o.R,o.m)}mn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Qt(o)==3?u.j():this.Y(o)},mn.prototype.Y=function(o){try{if(o==this.g)e:{const Je=Qt(this.g);var u=this.g.Ba();const vr=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||hu(this.g)))){this.J||Je!=4||u==7||(u==8||0>=vr?ts(3):ts(2)),oa(this);var d=this.g.Z();this.X=d;t:if(Wl(this)){var p=hu(this.g);o="";var b=p.length,S=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qn(this),ss(this);var j="";break t}this.h.i=new c.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(S&&u==b-1)});p.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,Jg(this.i,this.u,this.A,this.l,this.R,Je,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,qe=this.g;if((Te=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(Te)){var ge=Te;break t}}ge=null}if(d=ge)mr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,aa(this,d);else{this.o=!1,this.s=3,it(12),qn(this),ss(this);break e}}if(this.P){d=!0;let bt;for(;!this.J&&this.C<j.length;)if(bt=em(this,j),bt==sa){Je==4&&(this.s=4,it(14),d=!1),mr(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==ql){this.s=4,it(15),mr(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else mr(this.i,this.l,bt,null),aa(this,bt);if(Wl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||j.length!=0||this.h.h||(this.s=1,it(16),d=!1),this.o=this.o&&d,!d)mr(this.i,this.l,j,"[Invalid Chunked Response]"),qn(this),ss(this);else if(0<j.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),fa(Ye),Ye.M=!0,it(11))}}else mr(this.i,this.l,j,null),aa(this,j);Je==4&&qn(this),this.o&&!this.J&&(Je==4?yu(this.j,this):(this.o=!1,yi(this)))}else _m(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),qn(this),ss(this)}}}catch{}finally{}};function Wl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function em(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?sa:(d=Number(u.substring(d,p)),isNaN(d)?ql:(p+=1,p+d>u.length?sa:(u=u.slice(p,p+d),o.C=p+d,u)))}mn.prototype.cancel=function(){this.J=!0,qn(this)};function yi(o){o.S=Date.now()+o.I,Kl(o,o.I)}function Kl(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ns(E(o.ba,o),u)}function oa(o){o.B&&(c.clearTimeout(o.B),o.B=null)}mn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Xg(this.i,this.A),this.L!=2&&(ts(),it(17)),qn(this),this.s=2,ss(this)):Kl(this,this.S-o)};function ss(o){o.j.G==0||o.J||yu(o.j,o)}function qn(o){oa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Zr(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function aa(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||ca(d.h,o))){if(!o.K&&ca(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Pi(d),Ri(d);else break e;da(d),it(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=ns(E(d.Za,d),6e3));if(1>=Ql(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Wn(d,11)}else if((o.K||d.g==o)&&Pi(d),!Y(u))for(b=d.Da.g.parse(u),u=0;u<b.length;u++){let ge=b[u];if(d.T=ge[0],ge=ge[1],d.G==2)if(ge[0]=="c"){d.K=ge[1],d.ia=ge[2];const Ye=ge[3];Ye!=null&&(d.la=Ye,d.j.info("VER="+d.la));const Je=ge[4];Je!=null&&(d.Aa=Je,d.j.info("SVER="+d.Aa));const vr=ge[5];vr!=null&&typeof vr=="number"&&0<vr&&(p=1.5*vr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const bt=o.g;if(bt){const Ci=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ci){var S=p.h;S.g||Ci.indexOf("spdy")==-1&&Ci.indexOf("quic")==-1&&Ci.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(la(S,S.h),S.h=null))}if(p.D){const pa=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;pa&&(p.ya=pa,Ae(p.I,p.D,pa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var j=o;if(p.qa=Tu(p,p.J?p.ia:null,p.W),j.K){Yl(p.h,j);var Te=j,qe=p.L;qe&&(Te.I=qe),Te.B&&(oa(Te),yi(Te)),p.g=j}else mu(p);0<d.i.length&&bi(d)}else ge[0]!="stop"&&ge[0]!="close"||Wn(d,7);else d.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?Wn(d,7):ha(d):ge[0]!="noop"&&d.l&&d.l.ta(ge),d.v=0)}}ts(4)}catch{}}var tm=class{constructor(o,u){this.g=o,this.map=u}};function zl(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ql(o){return o.h?1:o.g?o.g.size:0}function ca(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function la(o,u){o.g?o.g.add(u):o.h=u}function Yl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}zl.prototype.cancel=function(){if(this.i=Jl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Jl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return x(o.i)}function nm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function rm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function Xl(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=rm(o),p=nm(o),b=p.length,S=0;S<b;S++)u.call(void 0,p[S],d&&d[S],o)}var Zl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sm(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),b=null;if(0<=p){var S=o[d].substring(0,p);b=o[d].substring(p+1)}else S=o[d];u(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Hn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Hn){this.h=o.h,vi(this,o.j),this.o=o.o,this.g=o.g,Ei(this,o.s),this.l=o.l;var u=o.i,d=new as;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),eu(this,d),this.m=o.m}else o&&(u=String(o).match(Zl))?(this.h=!1,vi(this,u[1]||"",!0),this.o=is(u[2]||""),this.g=is(u[3]||"",!0),Ei(this,u[4]),this.l=is(u[5]||"",!0),eu(this,u[6]||"",!0),this.m=is(u[7]||"")):(this.h=!1,this.i=new as(null,this.h))}Hn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(os(u,tu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(os(u,tu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(os(d,d.charAt(0)=="/"?am:om,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",os(d,lm)),o.join("")};function Gt(o){return new Hn(o)}function vi(o,u,d){o.j=d?is(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ei(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function eu(o,u,d){u instanceof as?(o.i=u,um(o.i,o.h)):(d||(u=os(u,cm)),o.i=new as(u,o.h))}function Ae(o,u,d){o.i.set(u,d)}function Ti(o){return Ae(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function is(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function os(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,im),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function im(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var tu=/[#\/\?@]/g,om=/[#\?:]/g,am=/[#\?]/g,cm=/[#\?@]/g,lm=/#/g;function as(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function _n(o){o.g||(o.g=new Map,o.h=0,o.i&&sm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=as.prototype,n.add=function(o,u){_n(this),this.i=null,o=_r(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function nu(o,u){_n(o),u=_r(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function ru(o,u){return _n(o),u=_r(o,u),o.g.has(u)}n.forEach=function(o,u){_n(this),this.g.forEach(function(d,p){d.forEach(function(b){o.call(u,b,p,this)},this)},this)},n.na=function(){_n(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const b=o[p];for(let S=0;S<b.length;S++)d.push(u[p])}return d},n.V=function(o){_n(this);let u=[];if(typeof o=="string")ru(this,o)&&(u=u.concat(this.g.get(_r(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return _n(this),this.i=null,o=_r(this,o),ru(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function su(o,u,d){nu(o,u),0<d.length&&(o.i=null,o.g.set(_r(o,u),x(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const S=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var b=S;j[p]!==""&&(b+="="+encodeURIComponent(String(j[p]))),o.push(b)}}return this.i=o.join("&")};function _r(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function um(o,u){u&&!o.j&&(_n(o),o.i=null,o.g.forEach(function(d,p){var b=p.toLowerCase();p!=b&&(nu(this,p),su(this,b,d))},o)),o.j=u}function hm(o,u){const d=new rs;if(c.Image){const p=new Image;p.onload=R(yn,d,"TestLoadImage: loaded",!0,u,p),p.onerror=R(yn,d,"TestLoadImage: error",!1,u,p),p.onabort=R(yn,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=R(yn,d,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function dm(o,u){const d=new rs,p=new AbortController,b=setTimeout(()=>{p.abort(),yn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(b),S.ok?yn(d,"TestPingServer: ok",!0,u):yn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),yn(d,"TestPingServer: error",!1,u)})}function yn(o,u,d,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(d)}catch{}}function fm(){this.g=new pi}function pm(o,u,d){const p=d||"";try{Xl(o,function(b,S){let j=b;h(b)&&(j=$e(b)),u.push(p+S+"="+encodeURIComponent(j))})}catch(b){throw u.push(p+"type="+encodeURIComponent("_badmap")),b}}function Ii(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Ii,ea),Ii.prototype.g=function(){return new wi(this.l,this.j)},Ii.prototype.i=function(o){return function(){return o}}({});function wi(o,u){ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(wi,ee),n=wi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ls(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cs(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ls(this)),this.g&&(this.readyState=3,ls(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;iu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function iu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?cs(this):ls(this),this.readyState==3&&iu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,cs(this))},n.Qa=function(o){this.g&&(this.response=o,cs(this))},n.ga=function(){this.g&&cs(this)};function cs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ls(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function ls(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ou(o){let u="";return he(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function ua(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=ou(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Ae(o,u,d))}function Se(o){ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Se,ee);var gm=/^https?$/i,mm=["POST","PUT"];n=Se.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ra.g(),this.v=this.o?xl(this.o):xl(ra),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(S){au(this,S);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)d.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())d.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),b=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(mm,u,void 0))||p||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,j]of d)this.g.setRequestHeader(S,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{uu(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){au(this,S)}};function au(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,cu(o),Ai(o)}function cu(o){o.A||(o.A=!0,oe(o,"complete"),oe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,oe(this,"complete"),oe(this,"abort"),Ai(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ai(this,!0)),Se.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?lu(this):this.bb())},n.bb=function(){lu(this)};function lu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Qt(o)!=4||o.Z()!=2)){if(o.u&&Qt(o)==4)Ge(o.Ea,0,o);else if(oe(o,"readystatechange"),Qt(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=j===0){var b=String(o.D).match(Zl)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),p=!gm.test(b?b.toLowerCase():"")}d=p}if(d)oe(o,"complete"),oe(o,"success");else{o.m=6;try{var S=2<Qt(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",cu(o)}}finally{Ai(o)}}}}function Ai(o,u){if(o.g){uu(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||oe(o,"ready");try{d.onreadystatechange=p}catch{}}}function uu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Qt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),vt(u)}};function hu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function _m(o){const u={};o=(o.g&&2<=Qt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(Y(o[p]))continue;var d=A(o[p]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=u[b]||[];u[b]=S,S.push(d)}w(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function us(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function du(o){this.Aa=0,this.i=[],this.j=new rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=us("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=us("baseRetryDelayMs",5e3,o),this.cb=us("retryDelaySeedMs",1e4,o),this.Wa=us("forwardChannelMaxRetries",2,o),this.wa=us("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new zl(o&&o.concurrentRequestLimit),this.Da=new fm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=du.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,p){it(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Tu(this,null,this.W),bi(this)};function ha(o){if(fu(o),o.G==3){var u=o.U++,d=Gt(o.I);if(Ae(d,"SID",o.K),Ae(d,"RID",u),Ae(d,"TYPE","terminate"),hs(o,d),u=new mn(o,o.j,u),u.L=2,u.v=Ti(Gt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Iu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),yi(u)}Eu(o)}function Ri(o){o.g&&(fa(o),o.g.cancel(),o.g=null)}function fu(o){Ri(o),o.u&&(c.clearTimeout(o.u),o.u=null),Pi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function bi(o){if(!Gl(o.h)&&!o.s){o.s=!0;var u=o.Ga;ve||Un(),pe||(ve(),pe=!0),Rt.add(u,o),o.B=0}}function ym(o,u){return Ql(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ns(E(o.Ga,o,u),vu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new mn(this,this.j,o);let S=this.o;if(this.S&&(S?(S=m(S),I(S,this.S)):S=this.S),this.m!==null||this.O||(b.H=S,S=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=gu(this,b,u),d=Gt(this.I),Ae(d,"RID",o),Ae(d,"CVER",22),this.D&&Ae(d,"X-HTTP-Session-Id",this.D),hs(this,d),S&&(this.O?u="headers="+encodeURIComponent(String(ou(S)))+"&"+u:this.m&&ua(d,this.m,S)),la(this.h,b),this.Ua&&Ae(d,"TYPE","init"),this.P?(Ae(d,"$req",u),Ae(d,"SID","null"),b.T=!0,ia(b,d,null)):ia(b,d,u),this.G=2}}else this.G==3&&(o?pu(this,o):this.i.length==0||Gl(this.h)||pu(this))};function pu(o,u){var d;u?d=u.l:d=o.U++;const p=Gt(o.I);Ae(p,"SID",o.K),Ae(p,"RID",d),Ae(p,"AID",o.T),hs(o,p),o.m&&o.o&&ua(p,o.m,o.o),d=new mn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=gu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),la(o.h,d),ia(d,p,u)}function hs(o,u){o.H&&he(o.H,function(d,p){Ae(u,p,d)}),o.l&&Xl({},function(d,p){Ae(u,p,d)})}function gu(o,u,d){d=Math.min(o.i.length,d);var p=o.l?E(o.l.Na,o.l,o):null;e:{var b=o.i;let S=-1;for(;;){const j=["count="+d];S==-1?0<d?(S=b[0].g,j.push("ofs="+S)):S=0:j.push("ofs="+S);let Te=!0;for(let qe=0;qe<d;qe++){let ge=b[qe].g;const Ye=b[qe].map;if(ge-=S,0>ge)S=Math.max(0,b[qe].g-100),Te=!1;else try{pm(Ye,j,"req"+ge+"_")}catch{p&&p(Ye)}}if(Te){p=j.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function mu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ve||Un(),pe||(ve(),pe=!0),Rt.add(u,o),o.v=0}}function da(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ns(E(o.Fa,o),vu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,_u(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ns(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Ri(this),_u(this))};function fa(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function _u(o){o.g=new mn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Gt(o.qa);Ae(u,"RID","rpc"),Ae(u,"SID",o.K),Ae(u,"AID",o.T),Ae(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ae(u,"TO",o.ja),Ae(u,"TYPE","xmlhttp"),hs(o,u),o.m&&o.o&&ua(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ti(Gt(u)),d.m=null,d.P=!0,Hl(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Ri(this),da(this),it(19))};function Pi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function yu(o,u){var d=null;if(o.g==u){Pi(o),fa(o),o.g=null;var p=2}else if(ca(o.h,u))d=u.D,Yl(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var b=o.B;p=gi(),oe(p,new Bl(p,d)),bi(o)}else mu(o);else if(b=u.s,b==3||b==0&&0<u.X||!(p==1&&ym(o,u)||p==2&&da(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),b){case 1:Wn(o,5);break;case 4:Wn(o,10);break;case 3:Wn(o,6);break;default:Wn(o,2)}}}function vu(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function Wn(o,u){if(o.j.info("Error code "+u),u==2){var d=E(o.fb,o),p=o.Xa;const b=!p;p=new Hn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||vi(p,"https"),Ti(p),b?hm(p.toString(),d):dm(p.toString(),d)}else it(2);o.G=0,o.l&&o.l.sa(u),Eu(o),fu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Eu(o){if(o.G=0,o.ka=[],o.l){const u=Jl(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ka,u),D(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Tu(o,u,d){var p=d instanceof Hn?Gt(d):new Hn(d);if(p.g!="")u&&(p.g=u+"."+p.g),Ei(p,p.s);else{var b=c.location;p=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var S=new Hn(null);p&&vi(S,p),u&&(S.g=u),b&&Ei(S,b),d&&(S.l=d),p=S}return d=o.D,u=o.ya,d&&u&&Ae(p,d,u),Ae(p,"VER",o.la),hs(o,p),p}function Iu(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Se(new Ii({eb:d})):new Se(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wu(){}n=wu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Si(){}Si.prototype.g=function(o,u){return new dt(o,u)};function dt(o,u){ee.call(this),this.g=new du(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!Y(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!Y(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new yr(this)}k(dt,ee),dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},dt.prototype.close=function(){ha(this.g)},dt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=$e(o),o=d);u.i.push(new tm(u.Ya++,o)),u.G==3&&bi(u)},dt.prototype.N=function(){this.g.l=null,delete this.j,ha(this.g),delete this.g,dt.aa.N.call(this)};function Au(o){ta.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Au,ta);function Ru(){na.call(this),this.status=1}k(Ru,na);function yr(o){this.g=o}k(yr,wu),yr.prototype.ua=function(){oe(this.g,"a")},yr.prototype.ta=function(o){oe(this.g,new Au(o))},yr.prototype.sa=function(o){oe(this.g,new Ru)},yr.prototype.ra=function(){oe(this.g,"b")},Si.prototype.createWebChannel=Si.prototype.g,dt.prototype.send=dt.prototype.o,dt.prototype.open=dt.prototype.m,dt.prototype.close=dt.prototype.close,Np=function(){return new Si},kp=function(){return gi()},Cp=$n,oc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mi.NO_ERROR=0,mi.TIMEOUT=8,mi.HTTP_ERROR=6,Qi=mi,jl.COMPLETE="complete",Sp=jl,Ml.EventType=es,es.OPEN="a",es.CLOSE="b",es.ERROR="c",es.MESSAGE="d",ee.prototype.listen=ee.prototype.K,vs=Ml,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,Pp=Se}).apply(typeof Vi<"u"?Vi:typeof self<"u"?self:typeof window<"u"?window:{});const Vh="@firebase/firestore";/**
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
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let Kr="10.14.0";/**
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
 */const cr=new Fc("@firebase/firestore");function ps(){return cr.logLevel}function G(n,...e){if(cr.logLevel<=ue.DEBUG){const t=e.map(Zc);cr.debug(`Firestore (${Kr}): ${n}`,...t)}}function un(n,...e){if(cr.logLevel<=ue.ERROR){const t=e.map(Zc);cr.error(`Firestore (${Kr}): ${n}`,...t)}}function Lr(n,...e){if(cr.logLevel<=ue.WARN){const t=e.map(Zc);cr.warn(`Firestore (${Kr}): ${n}`,...t)}}function Zc(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function ne(n="Unexpected state"){const e=`FIRESTORE (${Kr}) INTERNAL ASSERTION FAILED: `+n;throw un(e),new Error(e)}function Ee(n,e){n||ne()}function ie(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Ht{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class sr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Dp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ze.UNAUTHENTICATED))}shutdown(){}}class ow{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class aw{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ee(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sr)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new Dp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new Ze(e)}}class cw{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lw{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new cw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ee(this.o===void 0);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ee(typeof t.token=="string"),this.R=t.token,new uw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function dw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Op{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=dw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function me(n,e){return n<e?-1:n>e?1:0}function Fr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class Le{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new z(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Le(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Le(0,0))}static max(){return new re(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ks{constructor(e,t,r){t===void 0?t=0:t>e.length&&ne(),r===void 0?r=e.length-t:r>e.length-t&&ne(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ks.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ks?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Re extends Ks{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Re(t)}static emptyPath(){return new Re([])}}const fw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Ks{construct(e,t,r){return new We(e,t,r)}static isValidIdentifier(e){return fw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new z(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(t)}static emptyPath(){return new We([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Re.fromString(e))}static fromName(e){return new X(Re.fromString(e).popFirst(5))}static empty(){return new X(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Re(e.slice()))}}function pw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Le(t+1,0):new Le(t,r));return new Dn(s,X.empty(),e)}function gw(n){return new Dn(n.readTime,n.key,-1)}class Dn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Dn(re.min(),X.empty(),-1)}static max(){return new Dn(re.max(),X.empty(),-1)}}function mw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:me(n.largestBatchId,e.largestBatchId))}/**
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
 */const _w="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ai(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==_w)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function vw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ci(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class el{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}el.oe=-1;function $o(n){return n==null}function go(n){return n===0&&1/n==-1/0}function Ew(n){return typeof n=="number"&&Number.isInteger(n)&&!go(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function xh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Vp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Pe{constructor(e,t){this.comparator=e,this.root=t||He.EMPTY}insert(e,t){return new Pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xi(this.root,e,this.comparator,!1)}getReverseIterator(){return new xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xi(this.root,e,this.comparator,!0)}}class xi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new He(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,t,r,s,i){return this}insert(e,t,r){return new He(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Mh(this.data.getIterator())}getIteratorFrom(e){return new Mh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ke(this.comparator);return t.data=e,t}}class Mh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class St{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new St([])}unionWith(e){let t=new Ke(We.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new St(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class xp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ze{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xp("Invalid base64 string: "+i):i}}(e);return new ze(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new ze(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ze.EMPTY_BYTE_STRING=new ze("");const Tw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(n){if(Ee(!!n),typeof n=="string"){let e=0;const t=Tw.exec(n);if(Ee(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(n.seconds),nanos:ke(n.nanos)}}function ke(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function lr(n){return typeof n=="string"?ze.fromBase64String(n):ze.fromUint8Array(n)}/**
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
 */function tl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function nl(n){const e=n.mapValue.fields.__previous_value__;return tl(e)?nl(e):e}function zs(n){const e=On(n.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class Iw{constructor(e,t,r,s,i,a,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class Gs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Gs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Mi={mapValue:{}};function ur(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?tl(n)?4:Aw(n)?9007199254740991:ww(n)?10:11:ne()}function $t(n,e){if(n===e)return!0;const t=ur(n);if(t!==ur(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zs(n).isEqual(zs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=On(s.timestampValue),c=On(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return lr(s.bytesValue).isEqual(lr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ke(s.doubleValue),c=ke(i.doubleValue);return a===c?go(a)===go(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Fr(n.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(xh(a)!==xh(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!$t(a[l],c[l])))return!1;return!0}(n,e);default:return ne()}}function Qs(n,e){return(n.values||[]).find(t=>$t(t,e))!==void 0}function Ur(n,e){if(n===e)return 0;const t=ur(n),r=ur(e);if(t!==r)return me(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return me(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ke(i.integerValue||i.doubleValue),l=ke(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Lh(n.timestampValue,e.timestampValue);case 4:return Lh(zs(n),zs(e));case 5:return me(n.stringValue,e.stringValue);case 6:return function(i,a){const c=lr(i),l=lr(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=me(c[h],l[h]);if(f!==0)return f}return me(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=me(ke(i.latitude),ke(a.latitude));return c!==0?c:me(ke(i.longitude),ke(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Fh(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,h,f;const g=i.fields||{},E=a.fields||{},R=(c=g.value)===null||c===void 0?void 0:c.arrayValue,k=(l=E.value)===null||l===void 0?void 0:l.arrayValue,x=me(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:Fh(R,k)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Mi.mapValue&&a===Mi.mapValue)return 0;if(i===Mi.mapValue)return 1;if(a===Mi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const E=me(l[g],f[g]);if(E!==0)return E;const R=Ur(c[l[g]],h[f[g]]);if(R!==0)return R}return me(l.length,f.length)}(n.mapValue,e.mapValue);default:throw ne()}}function Lh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return me(n,e);const t=On(n),r=On(e),s=me(t.seconds,r.seconds);return s!==0?s:me(t.nanos,r.nanos)}function Fh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Ur(t[s],r[s]);if(i)return i}return me(t.length,r.length)}function Br(n){return ac(n)}function ac(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=On(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return lr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return X.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ac(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ac(t.fields[a])}`;return s+"}"}(n.mapValue):ne()}function Uh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function cc(n){return!!n&&"integerValue"in n}function rl(n){return!!n&&"arrayValue"in n}function Bh(n){return!!n&&"nullValue"in n}function jh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Yi(n){return!!n&&"mapValue"in n}function ww(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ds(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return zr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ds(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ds(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Aw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Yi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(t)}setAll(e){let t=We.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Ds(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Yi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Yi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){zr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(Ds(this.value))}}function Mp(n){const e=[];return zr(n.fields,(t,r)=>{const s=new We([t]);if(Yi(r)){const i=Mp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new St(e)}/**
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
 */class nt{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new nt(e,0,re.min(),re.min(),re.min(),Et.empty(),0)}static newFoundDocument(e,t,r,s){return new nt(e,1,t,re.min(),r,s,0)}static newNoDocument(e,t){return new nt(e,2,t,re.min(),re.min(),Et.empty(),0)}static newUnknownDocument(e,t){return new nt(e,3,t,re.min(),re.min(),Et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mo{constructor(e,t){this.position=e,this.inclusive=t}}function $h(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=Ur(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function qh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!$t(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ys{constructor(e,t="asc"){this.field=e,this.dir=t}}function Rw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Lp{}class Oe extends Lp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Pw(e,t,r):t==="array-contains"?new kw(e,r):t==="in"?new Nw(e,r):t==="not-in"?new Dw(e,r):t==="array-contains-any"?new Ow(e,r):new Oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Sw(e,r):new Cw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ur(t,this.value)):t!==null&&ur(this.value)===ur(t)&&this.matchesComparison(Ur(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends Lp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Nt(e,t)}matches(e){return Fp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Fp(n){return n.op==="and"}function Up(n){return bw(n)&&Fp(n)}function bw(n){for(const e of n.filters)if(e instanceof Nt)return!1;return!0}function lc(n){if(n instanceof Oe)return n.field.canonicalString()+n.op.toString()+Br(n.value);if(Up(n))return n.filters.map(e=>lc(e)).join(",");{const e=n.filters.map(t=>lc(t)).join(",");return`${n.op}(${e})`}}function Bp(n,e){return n instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&$t(r.value,s.value)}(n,e):n instanceof Nt?function(r,s){return s instanceof Nt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Bp(a,s.filters[c]),!0):!1}(n,e):void ne()}function jp(n){return n instanceof Oe?function(t){return`${t.field.canonicalString()} ${t.op} ${Br(t.value)}`}(n):n instanceof Nt?function(t){return t.op.toString()+" {"+t.getFilters().map(jp).join(" ,")+"}"}(n):"Filter"}class Pw extends Oe{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class Sw extends Oe{constructor(e,t){super(e,"in",t),this.keys=$p("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Cw extends Oe{constructor(e,t){super(e,"not-in",t),this.keys=$p("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function $p(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>X.fromName(r.referenceValue))}class kw extends Oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return rl(t)&&Qs(t.arrayValue,this.value)}}class Nw extends Oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qs(this.value.arrayValue,t)}}class Dw extends Oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Qs(this.value.arrayValue,t)}}class Ow extends Oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!rl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Qs(this.value.arrayValue,r))}}/**
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
 */class Vw{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function Hh(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Vw(n,e,t,r,s,i,a)}function sl(n){const e=ie(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>lc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),$o(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Br(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Br(r)).join(",")),e.ue=t}return e.ue}function il(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Rw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Bp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!qh(n.startAt,e.startAt)&&qh(n.endAt,e.endAt)}function uc(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Gr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function xw(n,e,t,r,s,i,a,c){return new Gr(n,e,t,r,s,i,a,c)}function ol(n){return new Gr(n)}function Wh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function qp(n){return n.collectionGroup!==null}function Os(n){const e=ie(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ke(We.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ys(i,r))}),t.has(We.keyField().canonicalString())||e.ce.push(new Ys(We.keyField(),r))}return e.ce}function Ut(n){const e=ie(n);return e.le||(e.le=Mw(e,Os(n))),e.le}function Mw(n,e){if(n.limitType==="F")return Hh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ys(s.field,i)});const t=n.endAt?new mo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new mo(n.startAt.position,n.startAt.inclusive):null;return Hh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function hc(n,e){const t=n.filters.concat([e]);return new Gr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function dc(n,e,t){return new Gr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qo(n,e){return il(Ut(n),Ut(e))&&n.limitType===e.limitType}function Hp(n){return`${sl(Ut(n))}|lt:${n.limitType}`}function wr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>jp(s)).join(", ")}]`),$o(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Br(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Br(s)).join(",")),`Target(${r})`}(Ut(n))}; limitType=${n.limitType})`}function Ho(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Os(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=$h(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,Os(r),s)||r.endAt&&!function(a,c,l){const h=$h(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,Os(r),s))}(n,e)}function Lw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Wp(n){return(e,t)=>{let r=!1;for(const s of Os(n)){const i=Fw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Fw(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Ur(l,h):ne()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
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
 */class Qr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Vp(this.inner)}size(){return this.innerSize}}/**
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
 */const Uw=new Pe(X.comparator);function hn(){return Uw}const Kp=new Pe(X.comparator);function Es(...n){let e=Kp;for(const t of n)e=e.insert(t.key,t);return e}function zp(n){let e=Kp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Xn(){return Vs()}function Gp(){return Vs()}function Vs(){return new Qr(n=>n.toString(),(n,e)=>n.isEqual(e))}const Bw=new Pe(X.comparator),jw=new Ke(X.comparator);function le(...n){let e=jw;for(const t of n)e=e.add(t);return e}const $w=new Ke(me);function qw(){return $w}/**
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
 */function al(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:go(e)?"-0":e}}function Qp(n){return{integerValue:""+n}}function Hw(n,e){return Ew(e)?Qp(e):al(n,e)}/**
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
 */class Wo{constructor(){this._=void 0}}function Ww(n,e,t){return n instanceof Js?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&tl(i)&&(i=nl(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Xs?Jp(n,e):n instanceof Zs?Xp(n,e):function(s,i){const a=Yp(s,i),c=Kh(a)+Kh(s.Pe);return cc(a)&&cc(s.Pe)?Qp(c):al(s.serializer,c)}(n,e)}function Kw(n,e,t){return n instanceof Xs?Jp(n,e):n instanceof Zs?Xp(n,e):t}function Yp(n,e){return n instanceof _o?function(r){return cc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Js extends Wo{}class Xs extends Wo{constructor(e){super(),this.elements=e}}function Jp(n,e){const t=Zp(e);for(const r of n.elements)t.some(s=>$t(s,r))||t.push(r);return{arrayValue:{values:t}}}class Zs extends Wo{constructor(e){super(),this.elements=e}}function Xp(n,e){let t=Zp(e);for(const r of n.elements)t=t.filter(s=>!$t(s,r));return{arrayValue:{values:t}}}class _o extends Wo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Kh(n){return ke(n.integerValue||n.doubleValue)}function Zp(n){return rl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class zw{constructor(e,t){this.field=e,this.transform=t}}function Gw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Xs&&s instanceof Xs||r instanceof Zs&&s instanceof Zs?Fr(r.elements,s.elements,$t):r instanceof _o&&s instanceof _o?$t(r.Pe,s.Pe):r instanceof Js&&s instanceof Js}(n.transform,e.transform)}class Qw{constructor(e,t){this.version=e,this.transformResults=t}}class an{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ji(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ko{}function eg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ng(n.key,an.none()):new li(n.key,n.data,an.none());{const t=n.data,r=Et.empty();let s=new Ke(We.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new fr(n.key,r,new St(s.toArray()),an.none())}}function Yw(n,e,t){n instanceof li?function(s,i,a){const c=s.value.clone(),l=Gh(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof fr?function(s,i,a){if(!Ji(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Gh(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(tg(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function xs(n,e,t,r){return n instanceof li?function(i,a,c,l){if(!Ji(i.precondition,a))return c;const h=i.value.clone(),f=Qh(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof fr?function(i,a,c,l){if(!Ji(i.precondition,a))return c;const h=Qh(i.fieldTransforms,l,a),f=a.data;return f.setAll(tg(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,c){return Ji(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Jw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Yp(r.transform,s||null);i!=null&&(t===null&&(t=Et.empty()),t.set(r.field,i))}return t||null}function zh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fr(r,s,(i,a)=>Gw(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class li extends Ko{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fr extends Ko{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Gh(n,e,t){const r=new Map;Ee(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Kw(a,c,t[s]))}return r}function Qh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Ww(i,a,e))}return r}class ng extends Ko{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xw extends Ko{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Zw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Yw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=xs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=xs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Gp();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=eg(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),le())}isEqual(e){return this.batchId===e.batchId&&Fr(this.mutations,e.mutations,(t,r)=>zh(t,r))&&Fr(this.baseMutations,e.baseMutations,(t,r)=>zh(t,r))}}class cl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ee(e.mutations.length===r.length);let s=function(){return Bw}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new cl(e,t,r,s)}}/**
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
 */class eA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ne,fe;function nA(n){switch(n){default:return ne();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function rg(n){if(n===void 0)return un("GRPC error has no .code"),N.UNKNOWN;switch(n){case Ne.OK:return N.OK;case Ne.CANCELLED:return N.CANCELLED;case Ne.UNKNOWN:return N.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return N.INTERNAL;case Ne.UNAVAILABLE:return N.UNAVAILABLE;case Ne.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ne.NOT_FOUND:return N.NOT_FOUND;case Ne.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ne.ABORTED:return N.ABORTED;case Ne.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ne.DATA_LOSS:return N.DATA_LOSS;default:return ne()}}(fe=Ne||(Ne={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rA(){return new TextEncoder}/**
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
 */const sA=new rr([4294967295,4294967295],0);function Yh(n){const e=rA().encode(n),t=new bp;return t.update(e),new Uint8Array(t.digest())}function Jh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new rr([t,r],0),new rr([s,i],0)]}class ll{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ts(`Invalid padding: ${t}`);if(r<0)throw new Ts(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ts(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ts(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=rr.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(rr.fromNumber(r)));return s.compare(sA)===1&&(s=new rr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Yh(e),[r,s]=Jh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ll(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=Yh(e),[r,s]=Jh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class zo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ui.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new zo(re.min(),s,new Pe(me),hn(),le())}}class ui{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ui(r,t,le(),le(),le())}}/**
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
 */class Xi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class sg{constructor(e,t){this.targetId=e,this.me=t}}class ig{constructor(e,t,r=ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Xh{constructor(){this.fe=0,this.ge=ed(),this.pe=ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=le(),t=le(),r=le();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ne()}}),new ui(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=ed()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class iA{constructor(e){this.Le=e,this.Be=new Map,this.ke=hn(),this.qe=Zh(),this.Qe=new Pe(me)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(uc(i))if(r===0){const a=new X(i.path);this.Ue(t,a,nt.newNoDocument(a,re.min()))}else Ee(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=lr(r).toUint8Array()}catch(l){if(l instanceof xp)return Lr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new ll(a,s,i)}catch(l){return Lr(l instanceof Ts?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&uc(c.target)){const l=new X(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,nt.newNoDocument(l,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=le();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new zo(e,t,this.Qe,this.ke,r);return this.ke=hn(),this.qe=Zh(),this.Qe=new Pe(me),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Xh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ke(me),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Xh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Zh(){return new Pe(X.comparator)}function ed(){return new Pe(X.comparator)}const oA={asc:"ASCENDING",desc:"DESCENDING"},aA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cA={and:"AND",or:"OR"};class lA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fc(n,e){return n.useProto3Json||$o(e)?e:{value:e}}function yo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function og(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function uA(n,e){return yo(n,e.toTimestamp())}function Bt(n){return Ee(!!n),re.fromTimestamp(function(t){const r=On(t);return new Le(r.seconds,r.nanos)}(n))}function ul(n,e){return pc(n,e).canonicalString()}function pc(n,e){const t=function(s){return new Re(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ag(n){const e=Re.fromString(n);return Ee(dg(e)),e}function gc(n,e){return ul(n.databaseId,e.path)}function xa(n,e){const t=ag(e);if(t.get(1)!==n.databaseId.projectId)throw new z(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(lg(t))}function cg(n,e){return ul(n.databaseId,e)}function hA(n){const e=ag(n);return e.length===4?Re.emptyPath():lg(e)}function mc(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function lg(n){return Ee(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function td(n,e,t){return{name:gc(n,e),fields:t.value.mapValue.fields}}function dA(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ee(f===void 0||typeof f=="string"),ze.fromBase64String(f||"")):(Ee(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ze.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?N.UNKNOWN:rg(h.code);return new z(f,h.message||"")}(a);t=new ig(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xa(n,r.document.name),i=Bt(r.document.updateTime),a=r.document.createTime?Bt(r.document.createTime):re.min(),c=new Et({mapValue:{fields:r.document.fields}}),l=nt.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Xi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xa(n,r.document),i=r.readTime?Bt(r.readTime):re.min(),a=nt.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Xi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xa(n,r.document),i=r.removedTargetIds||[];t=new Xi([],i,s,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new tA(s,i),c=r.targetId;t=new sg(c,a)}}return t}function fA(n,e){let t;if(e instanceof li)t={update:td(n,e.key,e.value)};else if(e instanceof ng)t={delete:gc(n,e.key)};else if(e instanceof fr)t={update:td(n,e.key,e.data),updateMask:IA(e.fieldMask)};else{if(!(e instanceof Xw))return ne();t={verify:gc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Js)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Xs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Zs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof _o)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw ne()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:uA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(n,e.precondition)),t}function pA(n,e){return n&&n.length>0?(Ee(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Bt(s.updateTime):Bt(i);return a.isEqual(re.min())&&(a=Bt(i)),new Qw(a,s.transformResults||[])}(t,e))):[]}function gA(n,e){return{documents:[cg(n,e.path)]}}function mA(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=cg(n,s);const i=function(h){if(h.length!==0)return hg(Nt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(E){return{field:Ar(E.field),direction:vA(E.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=fc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function _A(n){let e=hA(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ee(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const E=ug(g);return E instanceof Nt&&Up(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(E=>function(k){return new Ys(Rr(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(g){let E;return E=typeof g=="object"?g.value:g,$o(E)?null:E}(t.limit));let l=null;t.startAt&&(l=function(g){const E=!!g.before,R=g.values||[];return new mo(R,E)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const E=!g.before,R=g.values||[];return new mo(R,E)}(t.endAt)),xw(e,s,a,i,c,"F",l,h)}function yA(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ug(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Rr(t.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Rr(t.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rr(t.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Rr(t.unaryFilter.field);return Oe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(n):n.fieldFilter!==void 0?function(t){return Oe.create(Rr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Nt.create(t.compositeFilter.filters.map(r=>ug(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne()}}(t.compositeFilter.op))}(n):ne()}function vA(n){return oA[n]}function EA(n){return aA[n]}function TA(n){return cA[n]}function Ar(n){return{fieldPath:n.canonicalString()}}function Rr(n){return We.fromServerFormat(n.fieldPath)}function hg(n){return n instanceof Oe?function(t){if(t.op==="=="){if(jh(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NAN"}};if(Bh(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(jh(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NOT_NAN"}};if(Bh(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ar(t.field),op:EA(t.op),value:t.value}}}(n):n instanceof Nt?function(t){const r=t.getFilters().map(s=>hg(s));return r.length===1?r[0]:{compositeFilter:{op:TA(t.op),filters:r}}}(n):ne()}function IA(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function dg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Rn{constructor(e,t,r,s,i=re.min(),a=re.min(),c=ze.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class wA{constructor(e){this.ct=e}}function AA(n){const e=_A({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?dc(e,e.limit,"L"):e}/**
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
 */class RA{constructor(){this.un=new bA}addToCollectionParentIndex(e,t){return this.un.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Dn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Dn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class bA{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ke(Re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Re.comparator)).toArray()}}/**
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
 */class jr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new jr(0)}static kn(){return new jr(-1)}}/**
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
 */class PA{constructor(){this.changes=new Qr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class SA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class CA{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&xs(r.mutation,s,St.empty(),Le.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,t,r=le()){const s=Xn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Es();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Xn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,le()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=hn();const a=Vs(),c=function(){return Vs()}();return t.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof fr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),xs(f.mutation,h,f.mutation.getFieldMask(),Le.now())):a.set(h.key,St.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var g;return c.set(h,new SA(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Vs();let s=new Pe((a,c)=>a-c),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||St.empty();f=c.applyToLocalView(h,f),r.set(l,f);const g=(s.get(c.batchId)||le()).add(l);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,g=Gp();f.forEach(E=>{if(!i.has(E)){const R=eg(t.get(E),r.get(E));R!==null&&g.set(E,R),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(Xn());let c=-1,l=i;return a.next(h=>V.forEach(h,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{l=l.insert(f,E)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,le())).next(f=>({batchId:c,changes:zp(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(r=>{let s=Es();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Es();return this.indexManager.getCollectionParents(e,i).next(c=>V.forEach(c,l=>{const h=function(g,E){return new Gr(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,E)=>{a=a.insert(g,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,nt.newInvalidDocument(f)))});let c=Es();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&xs(f.mutation,h,St.empty(),Le.now()),Ho(t,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class kA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return V.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Bt(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:AA(s.bundledQuery),readTime:Bt(s.readTime)}}(t)),V.resolve()}}/**
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
 */class NA{constructor(){this.overlays=new Pe(X.comparator),this.Ir=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Xn();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=Xn(),i=t.length+1,a=new X(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Pe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Xn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Xn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return V.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new eA(t,r));let i=this.Ir.get(t);i===void 0&&(i=le(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class DA{constructor(){this.sessionToken=ze.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class hl{constructor(){this.Tr=new Ke(Fe.Er),this.dr=new Ke(Fe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Fe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Fe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new X(new Re([])),r=new Fe(t,e),s=new Fe(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new X(new Re([])),r=new Fe(t,e),s=new Fe(t,e+1);let i=le();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Fe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return X.comparator(e.key,t.key)||me(e.wr,t.wr)}static Ar(e,t){return me(e.wr,t.wr)||X.comparator(e.key,t.key)}}/**
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
 */class OA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ke(Fe.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Zw(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new Fe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Fe(t,0),s=new Fe(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ke(me);return t.forEach(s=>{const i=new Fe(s,0),a=new Fe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new Fe(new X(i),0);let c=new Ke(me);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},a),V.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ee(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(t.mutations,s=>{const i=new Fe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Fe(t,0),s=this.br.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class VA{constructor(e){this.Mr=e,this.docs=function(){return new Pe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(t))}getEntries(e,t){let r=hn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=hn();const a=t.path,c=new X(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||mw(gw(f),r)<=0||(s.has(f.key)||Ho(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ne()}Or(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new xA(this)}getSize(e){return V.resolve(this.size)}}class xA extends PA{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class MA{constructor(e){this.persistence=e,this.Nr=new Qr(t=>sl(t),il),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hl,this.targetCount=0,this.kr=jr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),V.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new jr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Kn(t),V.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.Br.containsKey(t))}}/**
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
 */class LA{constructor(e,t){this.qr={},this.overlays={},this.Qr=new el(0),this.Kr=!1,this.Kr=!0,this.$r=new DA,this.referenceDelegate=e(this),this.Ur=new MA(this),this.indexManager=new RA,this.remoteDocumentCache=function(s){return new VA(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new wA(t),this.Gr=new kA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new NA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new OA(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const s=new FA(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class FA extends yw{constructor(e){super(),this.currentSequenceNumber=e}}class dl{constructor(e){this.persistence=e,this.Jr=new hl,this.Yr=null}static Zr(e){return new dl(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),V.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=X.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,re.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return V.or([()=>V.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class fl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=le(),s=le();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new fl(e,t.fromCache,r,s)}}/**
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
 */class UA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class BA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ov()?8:vw(st())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new UA;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(ps()<=ue.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",wr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(ps()<=ue.DEBUG&&G("QueryEngine","Query:",wr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ps()<=ue.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",wr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ut(t))):V.resolve())}Yi(e,t){if(Wh(t))return V.resolve(null);let r=Ut(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=dc(t,null,"F"),r=Ut(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=le(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(t,c);return this.ns(t,h,a,l.readTime)?this.Yi(e,dc(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,r,s){return Wh(t)||s.isEqual(re.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?V.resolve(null):(ps()<=ue.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wr(t)),this.rs(e,a,t,pw(s,-1)).next(c=>c))})}ts(e,t){let r=new Ke(Wp(e));return t.forEach((s,i)=>{Ho(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return ps()<=ue.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",wr(t)),this.Ji.getDocumentsMatchingQuery(e,t,Dn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class jA{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new Pe(me),this._s=new Qr(i=>sl(i),il),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new CA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function $A(n,e,t,r){return new jA(n,e,t,r)}async function fg(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=le();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:c}))})})}function qA(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const g=h.batch,E=g.keys();let R=V.resolve();return E.forEach(k=>{R=R.next(()=>f.getEntry(l,k)).next(x=>{const D=h.docVersions.get(k);Ee(D!==null),x.version.compareTo(D)<0&&(g.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=le();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function pg(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function HA(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,g)=>{const E=s.get(g);if(!E)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,g)));let R=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(ze.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),s=s.insert(g,R),function(x,D,W){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(E,R,f)&&c.push(t.Ur.updateTargetData(i,R))});let l=hn(),h=le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(WA(i,a,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(re.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(g=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return V.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function WA(n,e,t){let r=le(),s=le();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=hn();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):G("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:a,Is:s}})}function KA(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zA(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new Rn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function _c(n,e,t){const r=ie(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ci(a))throw a;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function nd(n,e,t){const r=ie(n);let s=re.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const g=ie(l),E=g._s.get(f);return E!==void 0?V.resolve(g.os.get(E)):g.Ur.getTargetData(h,f)}(r,a,Ut(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:re.min(),t?i:le())).next(c=>(GA(r,Lw(e),c),{documents:c,Ts:i})))}function GA(n,e,t){let r=n.us.get(e)||re.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class rd{constructor(){this.activeTargetIds=qw()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QA{constructor(){this.so=new rd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new rd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class YA{_o(e){}shutdown(){}}/**
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
 */class sd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Li=null;function Ma(){return Li===null?Li=function(){return 268435456+Math.round(2147483648*Math.random())}():Li++,"0x"+Li.toString(16)}/**
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
 */const JA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class XA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Xe="WebChannelConnection";class ZA extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=Ma(),l=this.xo(t,r.toUriEncodedString());G("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,l,h,s).then(f=>(G("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Lr("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Kr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=JA[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Ma();return new Promise((a,c)=>{const l=new Pp;l.setWithCredentials(!0),l.listenOnce(Sp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Qi.NO_ERROR:const f=l.getResponseJson();G(Xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Qi.TIMEOUT:G(Xe,`RPC '${e}' ${i} timed out`),c(new z(N.DEADLINE_EXCEEDED,"Request time out"));break;case Qi.HTTP_ERROR:const g=l.getStatus();if(G(Xe,`RPC '${e}' ${i} failed with status:`,g,"response text:",l.getResponseText()),g>0){let E=l.getResponseJson();Array.isArray(E)&&(E=E[0]);const R=E==null?void 0:E.error;if(R&&R.status&&R.message){const k=function(D){const W=D.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(W)>=0?W:N.UNKNOWN}(R.status);c(new z(k,R.message))}else c(new z(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new z(N.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{G(Xe,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);G(Xe,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=Ma(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Np(),c=kp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");G(Xe,`Creating RPC '${e}' stream ${s}: ${f}`,l);const g=a.createWebChannel(f,l);let E=!1,R=!1;const k=new XA({Io:D=>{R?G(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(E||(G(Xe,`Opening RPC '${e}' stream ${s} transport.`),g.open(),E=!0),G(Xe,`RPC '${e}' stream ${s} sending:`,D),g.send(D))},To:()=>g.close()}),x=(D,W,Y)=>{D.listen(W,Q=>{try{Y(Q)}catch($){setTimeout(()=>{throw $},0)}})};return x(g,vs.EventType.OPEN,()=>{R||(G(Xe,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),x(g,vs.EventType.CLOSE,()=>{R||(R=!0,G(Xe,`RPC '${e}' stream ${s} transport closed`),k.So())}),x(g,vs.EventType.ERROR,D=>{R||(R=!0,Lr(Xe,`RPC '${e}' stream ${s} transport errored:`,D),k.So(new z(N.UNAVAILABLE,"The operation could not be completed")))}),x(g,vs.EventType.MESSAGE,D=>{var W;if(!R){const Y=D.data[0];Ee(!!Y);const Q=Y,$=Q.error||((W=Q[0])===null||W===void 0?void 0:W.error);if($){G(Xe,`RPC '${e}' stream ${s} received error:`,$);const ce=$.status;let he=function(v){const I=Ne[v];if(I!==void 0)return rg(I)}(ce),w=$.message;he===void 0&&(he=N.INTERNAL,w="Unknown error status: "+ce+" with message "+$.message),R=!0,k.So(new z(he,w)),g.close()}else G(Xe,`RPC '${e}' stream ${s} received:`,Y),k.bo(Y)}}),x(c,Cp.STAT_EVENT,D=>{D.stat===oc.PROXY?G(Xe,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===oc.NOPROXY&&G(Xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function La(){return typeof document<"u"?document:null}/**
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
 */function Go(n){return new lA(n,!0)}/**
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
 */class gg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class mg{constructor(e,t,r,s,i,a,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new gg(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(un(t.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new z(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eR extends mg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=dA(this.serializer,e),r=function(i){if(!("targetChange"in i))return re.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?re.min():a.readTime?Bt(a.readTime):re.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=mc(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=uc(l)?{documents:gA(i,l)}:{query:mA(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=og(i,a.resumeToken);const h=fc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(re.min())>0){c.readTime=yo(i,a.snapshotVersion.toTimestamp());const h=fc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=yA(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=mc(this.serializer),t.removeTarget=e,this.a_(t)}}class tR extends mg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=pA(e.writeResults,e.commitTime),r=Bt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=mc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>fA(this.serializer,r))};this.a_(t)}}/**
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
 */class nR extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new z(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,pc(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(N.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,pc(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(N.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class rR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(un(t),this.D_=!1):G("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class sR{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{pr(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=ie(l);h.L_.add(4),await hi(h),h.q_.set("Unknown"),h.L_.delete(4),await Qo(h)}(this))})}),this.q_=new rR(r,s)}}async function Qo(n){if(pr(n))for(const e of n.B_)await e(!0)}async function hi(n){for(const e of n.B_)await e(!1)}function _g(n,e){const t=ie(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),_l(t)?ml(t):Yr(t).r_()&&gl(t,e))}function pl(n,e){const t=ie(n),r=Yr(t);t.N_.delete(e),r.r_()&&yg(t,e),t.N_.size===0&&(r.r_()?r.o_():pr(t)&&t.q_.set("Unknown"))}function gl(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yr(n).A_(e)}function yg(n,e){n.Q_.xe(e),Yr(n).R_(e)}function ml(n){n.Q_=new iA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Yr(n).start(),n.q_.v_()}function _l(n){return pr(n)&&!Yr(n).n_()&&n.N_.size>0}function pr(n){return ie(n).L_.size===0}function vg(n){n.Q_=void 0}async function iR(n){n.q_.set("Online")}async function oR(n){n.N_.forEach((e,t)=>{gl(n,e)})}async function aR(n,e){vg(n),_l(n)?(n.q_.M_(e),ml(n)):n.q_.set("Unknown")}async function cR(n,e,t){if(n.q_.set("Online"),e instanceof ig&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vo(n,r)}else if(e instanceof Xi?n.Q_.Ke(e):e instanceof sg?n.Q_.He(e):n.Q_.We(e),!t.isEqual(re.min()))try{const r=await pg(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(ze.EMPTY_BYTE_STRING,f.snapshotVersion)),yg(i,l);const g=new Rn(f.target,l,h,f.sequenceNumber);gl(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await vo(n,r)}}async function vo(n,e,t){if(!ci(e))throw e;n.L_.add(1),await hi(n),n.q_.set("Offline"),t||(t=()=>pg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Qo(n)})}function Eg(n,e){return e().catch(t=>vo(n,t,e))}async function Yo(n){const e=ie(n),t=Vn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;lR(e);)try{const s=await KA(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,uR(e,s)}catch(s){await vo(e,s)}Tg(e)&&Ig(e)}function lR(n){return pr(n)&&n.O_.length<10}function uR(n,e){n.O_.push(e);const t=Vn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Tg(n){return pr(n)&&!Vn(n).n_()&&n.O_.length>0}function Ig(n){Vn(n).start()}async function hR(n){Vn(n).p_()}async function dR(n){const e=Vn(n);for(const t of n.O_)e.m_(t.mutations)}async function fR(n,e,t){const r=n.O_.shift(),s=cl.from(r,e,t);await Eg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Yo(n)}async function pR(n,e){e&&Vn(n).V_&&await async function(r,s){if(function(a){return nA(a)&&a!==N.ABORTED}(s.code)){const i=r.O_.shift();Vn(r).s_(),await Eg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Yo(r)}}(n,e),Tg(n)&&Ig(n)}async function id(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=pr(t);t.L_.add(3),await hi(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Qo(t)}async function gR(n,e){const t=ie(n);e?(t.L_.delete(2),await Qo(t)):e||(t.L_.add(2),await hi(t),t.q_.set("Unknown"))}function Yr(n){return n.K_||(n.K_=function(t,r,s){const i=ie(t);return i.w_(),new eR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:iR.bind(null,n),Ro:oR.bind(null,n),mo:aR.bind(null,n),d_:cR.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),_l(n)?ml(n):n.q_.set("Unknown")):(await n.K_.stop(),vg(n))})),n.K_}function Vn(n){return n.U_||(n.U_=function(t,r,s){const i=ie(t);return i.w_(),new tR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:hR.bind(null,n),mo:pR.bind(null,n),f_:dR.bind(null,n),g_:fR.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Yo(n)):(await n.U_.stop(),n.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class yl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new yl(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vl(n,e){if(un("AsyncQueue",`${e}: ${n}`),ci(n))return new z(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Vr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=Es(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Vr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Vr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class od{constructor(){this.W_=new Pe(X.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class $r{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new $r(e,t,Vr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class mR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class _R{constructor(){this.queries=ad(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=ad(),i.forEach((a,c)=>{for(const l of c.j_)l.onError(r)})})(this,new z(N.ABORTED,"Firestore shutting down"))}}function ad(){return new Qr(n=>Hp(n),qo)}async function yR(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new mR,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=vl(a,`Initialization of query '${wr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&El(t)}async function vR(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function ER(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&El(t)}function TR(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function El(n){n.Y_.forEach(e=>{e.next()})}var yc,cd;(cd=yc||(yc={})).ea="default",cd.Cache="cache";class IR{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new $r(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=$r.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==yc.Cache}}/**
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
 */class wg{constructor(e){this.key=e}}class Ag{constructor(e){this.key=e}}class wR{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=le(),this.mutatedKeys=le(),this.Aa=Wp(e),this.Ra=new Vr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new od,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const E=s.get(f),R=Ho(this.query,g)?g:null,k=!!E&&this.mutatedKeys.has(E.key),x=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let D=!1;E&&R?E.data.isEqual(R.data)?k!==x&&(r.track({type:3,doc:R}),D=!0):this.ga(E,R)||(r.track({type:2,doc:R}),D=!0,(l&&this.Aa(R,l)>0||h&&this.Aa(R,h)<0)&&(c=!0)):!E&&R?(r.track({type:0,doc:R}),D=!0):E&&!R&&(r.track({type:1,doc:E}),D=!0,(l||h)&&(c=!0)),D&&(R?(a=a.add(R),i=x?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(R,k){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return x(R)-x(k)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,a.length!==0||h?{snapshot:new $r(this.query,e.Ra,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new od,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=le(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Ag(r))}),this.da.forEach(r=>{e.has(r)||t.push(new wg(r))}),t}ba(e){this.Ta=e.Ts,this.da=le();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return $r.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class AR{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class RR{constructor(e){this.key=e,this.va=!1}}class bR{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Qr(c=>Hp(c),qo),this.Ma=new Map,this.xa=new Set,this.Oa=new Pe(X.comparator),this.Na=new Map,this.La=new hl,this.Ba={},this.ka=new Map,this.qa=jr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function PR(n,e,t=!0){const r=kg(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Rg(r,e,t,!0),s}async function SR(n,e){const t=kg(n);await Rg(t,e,!0,!1)}async function Rg(n,e,t,r){const s=await zA(n.localStore,Ut(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await CR(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&_g(n.remoteStore,s),c}async function CR(n,e,t,r,s){n.Ka=(g,E,R)=>async function(x,D,W,Y){let Q=D.view.ma(W);Q.ns&&(Q=await nd(x.localStore,D.query,!1).then(({documents:w})=>D.view.ma(w,Q)));const $=Y&&Y.targetChanges.get(D.targetId),ce=Y&&Y.targetMismatches.get(D.targetId)!=null,he=D.view.applyChanges(Q,x.isPrimaryClient,$,ce);return ud(x,D.targetId,he.wa),he.snapshot}(n,g,E,R);const i=await nd(n.localStore,e,!0),a=new wR(e,i.Ts),c=a.ma(i.documents),l=ui.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);ud(n,t,h.wa);const f=new AR(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function kR(n,e,t){const r=ie(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!qo(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await _c(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&pl(r.remoteStore,s.targetId),vc(r,s.targetId)}).catch(ai)):(vc(r,s.targetId),await _c(r.localStore,s.targetId,!0))}async function NR(n,e){const t=ie(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),pl(t.remoteStore,r.targetId))}async function DR(n,e,t){const r=UR(n);try{const s=await function(a,c){const l=ie(a),h=Le.now(),f=c.reduce((R,k)=>R.add(k.key),le());let g,E;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=hn(),x=le();return l.cs.getEntries(R,f).next(D=>{k=D,k.forEach((W,Y)=>{Y.isValidDocument()||(x=x.add(W))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,k)).next(D=>{g=D;const W=[];for(const Y of c){const Q=Jw(Y,g.get(Y.key).overlayedDocument);Q!=null&&W.push(new fr(Y.key,Q,Mp(Q.value.mapValue),an.exists(!0)))}return l.mutationQueue.addMutationBatch(R,h,W,c)}).next(D=>{E=D;const W=D.applyToLocalDocumentSet(g,x);return l.documentOverlayCache.saveOverlays(R,D.batchId,W)})}).then(()=>({batchId:E.batchId,changes:zp(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.Ba[a.currentUser.toKey()];h||(h=new Pe(me)),h=h.insert(c,l),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await di(r,s.changes),await Yo(r.remoteStore)}catch(s){const i=vl(s,"Failed to persist write");t.reject(i)}}async function bg(n,e){const t=ie(n);try{const r=await HA(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(Ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Ee(a.va):s.removedDocuments.size>0&&(Ee(a.va),a.va=!1))}),await di(t,r,e)}catch(r){await ai(r)}}function ld(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach((f,g)=>{for(const E of g.j_)E.Z_(c)&&(h=!0)}),h&&El(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OR(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Pe(X.comparator);a=a.insert(i,nt.newNoDocument(i,re.min()));const c=le().add(i),l=new zo(re.min(),new Map,new Pe(me),a,c);await bg(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Tl(r)}else await _c(r.localStore,e,!1).then(()=>vc(r,e,t)).catch(ai)}async function VR(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await qA(t.localStore,e);Sg(t,r,null),Pg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await di(t,s)}catch(s){await ai(s)}}async function xR(n,e,t){const r=ie(n);try{const s=await function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(g=>(Ee(g!==null),f=g.keys(),l.mutationQueue.removeMutationBatch(h,g))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Sg(r,e,t),Pg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await di(r,s)}catch(s){await ai(s)}}function Pg(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Sg(n,e,t){const r=ie(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function vc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Cg(n,r)})}function Cg(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(pl(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Tl(n))}function ud(n,e,t){for(const r of t)r instanceof wg?(n.La.addReference(r.key,e),MR(n,r)):r instanceof Ag?(G("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Cg(n,r.key)):ne()}function MR(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(G("SyncEngine","New document in limbo: "+t),n.xa.add(r),Tl(n))}function Tl(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new X(Re.fromString(e)),r=n.qa.next();n.Na.set(r,new RR(t)),n.Oa=n.Oa.insert(t,r),_g(n.remoteStore,new Rn(Ut(ol(t.path)),r,"TargetPurposeLimboResolution",el.oe))}}async function di(n,e,t){const r=ie(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{a.push(r.Ka(l,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=fl.Wi(l.targetId,h);i.push(g)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(l,h){const f=ie(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(h,E=>V.forEach(E.$i,R=>f.persistence.referenceDelegate.addReference(g,E.targetId,R)).next(()=>V.forEach(E.Ui,R=>f.persistence.referenceDelegate.removeReference(g,E.targetId,R)))))}catch(g){if(!ci(g))throw g;G("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const E=g.targetId;if(!g.fromCache){const R=f.os.get(E),k=R.snapshotVersion,x=R.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(E,x)}}}(r.localStore,i))}async function LR(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await fg(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new z(N.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await di(t,r.hs)}}function FR(n,e){const t=ie(n),r=t.Na.get(e);if(r&&r.va)return le().add(r.key);{let s=le();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function kg(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=bg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OR.bind(null,e),e.Ca.d_=ER.bind(null,e.eventManager),e.Ca.$a=TR.bind(null,e.eventManager),e}function UR(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xR.bind(null,e),e}class Eo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Go(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return $A(this.persistence,new BA,e.initialUser,this.serializer)}Ga(e){return new LA(dl.Zr,this.serializer)}Wa(e){return new QA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Eo.provider={build:()=>new Eo};class Ec{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ld(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=LR.bind(null,this.syncEngine),await gR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _R}()}createDatastore(e){const t=Go(e.databaseInfo.databaseId),r=function(i){return new ZA(i)}(e.databaseInfo);return function(i,a,c,l){return new nR(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new sR(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ld(this.syncEngine,t,0),function(){return sd.D()?new sd:new YA}())}createSyncEngine(e,t){return function(s,i,a,c,l,h,f){const g=new bR(s,i,a,c,l,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ie(s);G("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await hi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ec.provider={build:()=>new Ec};/**
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
 */class BR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class jR{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=Op.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{G("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(G("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=vl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fa(n,e){n.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function hd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $R(n);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>id(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>id(e.remoteStore,s)),n._onlineComponents=e}async function $R(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Lr("Error using user provided cache. Falling back to memory cache: "+t),await Fa(n,new Eo)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Fa(n,new Eo);return n._offlineComponents}async function Ng(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await hd(n,n._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await hd(n,new Ec))),n._onlineComponents}function qR(n){return Ng(n).then(e=>e.syncEngine)}async function dd(n){const e=await Ng(n),t=e.eventManager;return t.onListen=PR.bind(null,e.syncEngine),t.onUnlisten=kR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=SR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=NR.bind(null,e.syncEngine),t}/**
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
 */function Dg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const fd=new Map;/**
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
 */function Og(n,e,t){if(!t)throw new z(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function HR(n,e,t,r){if(e===!0&&r===!0)throw new z(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pd(n){if(!X.isDocumentKey(n))throw new z(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gd(n){if(X.isDocumentKey(n))throw new z(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Jo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ne()}function Ms(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Jo(n);throw new z(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class md{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new md({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new md(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iw;switch(r.type){case"firstParty":return new lw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=fd.get(t);r&&(G("ComponentProvider","Removing Datastore"),fd.delete(t),r.terminate())}(this),Promise.resolve()}}function WR(n,e,t,r={}){var s;const i=(n=Ms(n,Xo))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=Ze.MOCK_USER;else{c=Bf(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new z(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ze(h)}n._authCredentials=new ow(new Dp(c,l))}}/**
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
 */class gr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gr(this.firestore,e,this._query)}}class mt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}}class Cn extends gr{constructor(e,t,r){super(e,t,ol(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new X(e))}withConverter(e){return new Cn(this.firestore,e,this._path)}}function _d(n,e,...t){if(n=Ue(n),Og("collection","path",e),n instanceof Xo){const r=Re.fromString(e,...t);return gd(r),new Cn(n,null,r)}{if(!(n instanceof mt||n instanceof Cn))throw new z(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return gd(r),new Cn(n.firestore,null,r)}}function KR(n,e,...t){if(n=Ue(n),arguments.length===1&&(e=Op.newId()),Og("doc","path",e),n instanceof Xo){const r=Re.fromString(e,...t);return pd(r),new mt(n,null,new X(r))}{if(!(n instanceof mt||n instanceof Cn))throw new z(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return pd(r),new mt(n.firestore,n instanceof Cn?n.converter:null,new X(r))}}/**
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
 */class yd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new gg(this,"async_queue_retry"),this.Vu=()=>{const r=La();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=La();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=La();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new sr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ci(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw un("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=yl.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function vd(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class To extends Xo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new yd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yd(e),this._firestoreClient=void 0,await e}}}function zR(n,e){const t=typeof n=="object"?n:Bc(),r=typeof n=="string"?n:"(default)",s=Fo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Lf("firestore");i&&WR(s,...i)}return s}function Vg(n){if(n._terminated)throw new z(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||GR(n),n._firestoreClient}function GR(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,h,f){return new Iw(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Dg(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new jR(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class qr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qr(ze.fromBase64String(e))}catch(t){throw new z(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qr(ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Il{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wl{constructor(e){this._methodName=e}}/**
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
 */class Al{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */class Rl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const QR=/^__.*__$/;class YR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new fr(e,this.data,this.fieldMask,t,this.fieldTransforms):new li(e,this.data,t,this.fieldTransforms)}}function xg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class bl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new bl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Io(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(xg(this.Cu)&&QR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class JR{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Go(e)}Qu(e,t,r,s=!1){return new bl({Cu:e,methodName:t,qu:r,path:We.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mg(n){const e=n._freezeSettings(),t=Go(n._databaseId);return new JR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function XR(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Ug("Data must be an object, but it was:",a,r);const c=Lg(r,a);let l,h;if(i.merge)l=new St(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const E=eb(e,g,t);if(!a.contains(E))throw new z(N.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);nb(f,E)||f.push(E)}l=new St(f),h=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,h=a.fieldTransforms;return new YR(new Et(c),l,h)}class Pl extends wl{_toFieldTransform(e){return new zw(e.path,new Js)}isEqual(e){return e instanceof Pl}}function ZR(n,e,t,r=!1){return Sl(t,n.Qu(r?4:3,e))}function Sl(n,e){if(Fg(n=Ue(n)))return Ug("Unsupported field value:",e,n),Lg(n,e);if(n instanceof wl)return function(r,s){if(!xg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Sl(c,s.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Hw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:yo(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yo(s.serializer,i)}}if(r instanceof Al)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qr)return{bytesValue:og(s.serializer,r._byteString)};if(r instanceof mt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ul(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Rl)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return al(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Jo(r)}`)}(n,e)}function Lg(n,e){const t={};return Vp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(n,(r,s)=>{const i=Sl(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Fg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Le||n instanceof Al||n instanceof qr||n instanceof mt||n instanceof wl||n instanceof Rl)}function Ug(n,e,t){if(!Fg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Jo(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function eb(n,e,t){if((e=Ue(e))instanceof Il)return e._internalPath;if(typeof e=="string")return Bg(n,e);throw Io("Field path arguments must be of type string or ",n,!1,void 0,t)}const tb=new RegExp("[~\\*/\\[\\]]");function Bg(n,e,t){if(e.search(tb)>=0)throw Io(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Il(...e.split("."))._internalPath}catch{throw Io(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Io(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new z(N.INVALID_ARGUMENT,c+n+l)}function nb(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class jg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rb extends jg{data(){return super.data()}}function Cl(n,e){return typeof e=="string"?Bg(n,e):e instanceof Il?e._internalPath:e._delegate._internalPath}/**
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
 */function sb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kl{}class $g extends kl{}function ib(n,e,...t){let r=[];e instanceof kl&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof Dl).length,c=i.filter(l=>l instanceof Nl).length;if(a>1||a>0&&c>0)throw new z(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Nl extends $g{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Nl(e,t,r)}_apply(e){const t=this._parse(e);return qg(e._query,t),new gr(e.firestore,e.converter,hc(e._query,t))}_parse(e){const t=Mg(e.firestore);return function(i,a,c,l,h,f,g){let E;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Td(g,f);const R=[];for(const k of g)R.push(Ed(l,i,k));E={arrayValue:{values:R}}}else E=Ed(l,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Td(g,f),E=ZR(c,a,g,f==="in"||f==="not-in");return Oe.create(h,f,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Dl extends kl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Dl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Nt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)qg(a,l),a=hc(a,l)}(e._query,t),new gr(e.firestore,e.converter,hc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ol extends $g{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ol(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new z(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ys(i,a)}(e._query,this._field,this._direction);return new gr(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Gr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function ob(n,e="asc"){const t=e,r=Cl("orderBy",n);return Ol._create(r,t)}function Ed(n,e,t){if(typeof(t=Ue(t))=="string"){if(t==="")throw new z(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qp(e)&&t.indexOf("/")!==-1)throw new z(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Re.fromString(t));if(!X.isDocumentKey(r))throw new z(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Uh(n,new X(r))}if(t instanceof mt)return Uh(n,t._key);throw new z(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jo(t)}.`)}function Td(n,e){if(!Array.isArray(n)||n.length===0)throw new z(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qg(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new z(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ab{convertValue(e,t="none"){switch(ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return zr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ke(a.doubleValue));return new Rl(i)}convertGeoPoint(e){return new Al(ke(e.latitude),ke(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=nl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(zs(e));default:return null}}convertTimestamp(e){const t=On(e);return new Le(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);Ee(dg(r));const s=new Gs(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function cb(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class Is{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hg extends jg{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Cl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Zi extends Hg{data(e={}){return super.data(e)}}class lb{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Is(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Zi(this._firestore,this._userDataWriter,r.key,r,new Is(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Zi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Is(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Zi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Is(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:ub(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ub(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}class Wg extends ab{constructor(e){super(),this.firestore=e}convertBytes(e){return new qr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,t)}}function hb(n,e){const t=Ms(n.firestore,To),r=KR(n),s=cb(n.converter,e);return fb(t,[XR(Mg(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,an.exists(!1))]).then(()=>r)}function db(n,...e){var t,r,s;n=Ue(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||vd(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(vd(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let l,h,f;if(n instanceof mt)h=Ms(n.firestore,To),f=ol(n._key.path),l={next:g=>{e[a]&&e[a](pb(h,n,g))},error:e[a+1],complete:e[a+2]};else{const g=Ms(n,gr);h=Ms(g.firestore,To),f=g._query;const E=new Wg(h);l={next:R=>{e[a]&&e[a](new lb(h,E,g,R))},error:e[a+1],complete:e[a+2]},sb(n._query)}return function(E,R,k,x){const D=new BR(x),W=new IR(R,D,k);return E.asyncQueue.enqueueAndForget(async()=>yR(await dd(E),W)),()=>{D.Za(),E.asyncQueue.enqueueAndForget(async()=>vR(await dd(E),W))}}(Vg(h),f,c,l)}function fb(n,e){return function(r,s){const i=new sr;return r.asyncQueue.enqueueAndForget(async()=>DR(await qR(r),s,i)),i.promise}(Vg(n),e)}function pb(n,e,t){const r=t.docs.get(e._key),s=new Wg(n);return new Hg(n,s,e._key,r,new Is(t.hasPendingWrites,t.fromCache),e.converter)}function Id(){return new Pl("serverTimestamp")}(function(e,t=!0){(function(s){Kr=s})(hr),or(new Nn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new To(new aw(r.getProvider("auth-internal")),new hw(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new z(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gs(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ft(Vh,"4.7.3",e),Ft(Vh,"4.7.3","esm2017")})();/**
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
 */const Kg="firebasestorage.googleapis.com",gb="storageBucket",mb=2*60*1e3,_b=10*60*1e3;/**
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
 */class Wt extends Ht{constructor(e,t,r=0){super(Ua(e),`Firebase Storage: ${t} (${Ua(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Wt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ua(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qt||(qt={}));function Ua(n){return"storage/"+n}function yb(){const n="An unknown error occurred, please check the error payload for server response.";return new Wt(qt.UNKNOWN,n)}function vb(){return new Wt(qt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Eb(){return new Wt(qt.CANCELED,"User canceled the upload/download.")}function Tb(n){return new Wt(qt.INVALID_URL,"Invalid URL '"+n+"'.")}function Ib(n){return new Wt(qt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function wd(n){return new Wt(qt.INVALID_ARGUMENT,n)}function zg(){return new Wt(qt.APP_DELETED,"The Firebase app was deleted.")}function wb(n){return new Wt(qt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Ct{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ct.makeFromUrl(e,t)}catch{return new Ct(e,"")}if(r.path==="")return r;throw Ib(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),l={bucket:1,path:3};function h($){$.path_=decodeURIComponent($.path)}const f="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",R=new RegExp(`^https?://${g}/${f}/b/${s}/o${E}`,"i"),k={bucket:1,path:3},x=t===Kg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",W=new RegExp(`^https?://${x}/${s}/${D}`,"i"),Q=[{regex:c,indices:l,postModify:i},{regex:R,indices:k,postModify:h},{regex:W,indices:{bucket:1,path:2},postModify:h}];for(let $=0;$<Q.length;$++){const ce=Q[$],he=ce.regex.exec(e);if(he){const w=he[ce.indices.bucket];let m=he[ce.indices.path];m||(m=""),r=new Ct(w,m),ce.postModify(r);break}}if(r==null)throw Tb(e);return r}}class Ab{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Rb(n,e,t){let r=1,s=null,i=null,a=!1,c=0;function l(){return c===2}let h=!1;function f(...D){h||(h=!0,e.apply(null,D))}function g(D){s=setTimeout(()=>{s=null,n(R,l())},D)}function E(){i&&clearTimeout(i)}function R(D,...W){if(h){E();return}if(D){E(),f.call(null,D,...W);return}if(l()||a){E(),f.call(null,D,...W);return}r<64&&(r*=2);let Q;c===1?(c=2,Q=0):Q=(r+Math.random())*1e3,g(Q)}let k=!1;function x(D){k||(k=!0,E(),!h&&(s!==null?(D||(c=2),clearTimeout(s),g(0)):D||(c=1)))}return g(0),i=setTimeout(()=>{a=!0,x(!0)},t),x}function bb(n){n(!1)}/**
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
 */function Pb(n){return n!==void 0}function Ad(n,e,t,r){if(r<e)throw wd(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw wd(`Invalid value for '${n}'. Expected ${t} or less.`)}function Sb(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var wo;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(wo||(wo={}));/**
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
 */function Cb(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class kb{constructor(e,t,r,s,i,a,c,l,h,f,g,E=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=g,this.retry=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,k)=>{this.resolve_=R,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Fi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===wo.NO_ERROR,l=i.getStatus();if(!c||Cb(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===wo.ABORT;r(!1,new Fi(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new Fi(h,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());Pb(l)?i(l):i()}catch(l){a(l)}else if(c!==null){const l=yb();l.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,l)):a(l)}else if(s.canceled){const l=this.appDelete_?zg():Eb();a(l)}else{const l=vb();a(l)}};this.canceled_?t(!1,new Fi(!1,null,!0)):this.backoffId_=Rb(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Nb(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Db(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ob(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Vb(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function xb(n,e,t,r,s,i,a=!0){const c=Sb(n.urlParams),l=n.url+c,h=Object.assign({},n.headers);return Ob(h,e),Nb(h,t),Db(h,i),Vb(h,r),new kb(l,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
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
 */function Mb(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Lb(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Ao{constructor(e,t){this._service=e,t instanceof Ct?this._location=t:this._location=Ct.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ao(e,t)}get root(){const e=new Ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Lb(this._location.path)}get storage(){return this._service}get parent(){const e=Mb(this._location.path);if(e===null)return null;const t=new Ct(this._location.bucket,e);return new Ao(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw wb(e)}}function Rd(n,e){const t=e==null?void 0:e[gb];return t==null?null:Ct.makeFromBucketSpec(t,n)}function Fb(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Bf(s,n.app.options.projectId))}class Ub{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Kg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mb,this._maxUploadRetryTime=_b,this._requests=new Set,s!=null?this._bucket=Ct.makeFromBucketSpec(s,this._host):this._bucket=Rd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ct.makeFromBucketSpec(this._url,e):this._bucket=Rd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ad("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ad("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ao(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new Ab(zg());{const a=xb(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const bd="@firebase/storage",Pd="0.13.2";/**
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
 */const Gg="storage";function Bb(n=Bc(),e){n=Ue(n);const r=Fo(n,Gg).getImmediate({identifier:e}),s=Lf("storage");return s&&jb(r,...s),r}function jb(n,e,t,r={}){Fb(n,e,t,r)}function $b(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Ub(t,r,s,e,hr)}function qb(){or(new Nn(Gg,$b,"PUBLIC").setMultipleInstances(!0)),Ft(bd,Pd,""),Ft(bd,Pd,"esm2017")}qb();const Hb={apiKey:"AIzaSyBQZ-qs4sMKbfCbHLqFnw8jIREaosVQ79I",authDomain:"tslive.firebaseapp.com",projectId:"tslive",storageBucket:"tslive.firebasestorage.app",messagingSenderId:"982680631838",appId:"1:982680631838:web:003437769e215bdafdcc0f"},Vl=qf(Hb),Sd=zR(Vl),Yn=tw(Vl),Wb=new en;Bb(Vl);const Qg=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},Kb={class:"chat-feed"},zb={class:"messages"},Gb={class:"message-meta"},Qb={class:"sender"},Yb={class:"time"},Jb={class:"text"},Xb={class:"input-area"};function Zb(n){return n?new Date(n*1e3).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""}const e0={__name:"ChatFeed",props:{user:Object},setup(n){const e=n,t=er([]),r=er("");er(null),Oo(()=>{const i=_d(Sd,"messages"),a=ib(i,ob("createdAt"));db(a,c=>{t.value=c.docs.map(l=>({id:l.id,...l.data()})),console.log("Messages:",t.value)})});const s=async()=>{if(console.log("User:",e.user),console.log("Text:",r.value),!!r.value.trim()){if(!e.user){alert("User not signed in");return}try{await hb(_d(Sd,"messages"),{text:r.value,user:{uid:e.user.uid,displayName:e.user.displayName},sender:e.user.displayName||"Anonymous",uid:e.user.uid,photoURL:e.user.photoURL||"",timestamp:Id(),createdAt:Id()}),r.value=""}catch(i){console.error("Error sending message:",i),alert("Message failed: "+i.message)}}};return(i,a)=>(tr(),nr("div",Kb,[Ce("div",zb,[(tr(!0),nr(xt,null,R_(t.value,c=>{var l;return tr(),nr("div",{key:c.id,class:Co(["message-bubble",c.uid===n.user.uid?"mine":"theirs"])},[Ce("div",Gb,[Ce("span",Qb,As(c.uid===n.user.uid?"You":c.sender),1),Ce("span",Yb,As(Zb((l=c.createdAt)==null?void 0:l.seconds)),1)]),Ce("div",Jb,As(c.text),1)],2)}),128))]),Ce("div",Xb,[Bi(Ce("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>r.value=c),onKeydown:By(s,["enter"]),placeholder:"Type a message..."},null,544),[[Hi,r.value]]),Ce("button",{onClick:s},"Send")])]))}},t0=Qg(e0,[["__scopeId","data-v-6b878c0d"]]),n0={class:"auth"},r0={__name:"UserAuth",emits:["send","signed-in"],setup(n,{emit:e}){const t=e,r=er(""),s=er(""),i=er(""),a=async()=>{const f=await uI(Yn,Wb);t("signed-in",f.user)},c=async()=>{const f=await wT(Yn,r.value,s.value);t("signed-in",f.user)};let l;Oo(()=>{typeof window<"u"&&Yn?(l=new tI(Yn,"recaptcha-container",{size:"invisible",callback:()=>{console.log("recaptcha resolved..")}}),l.render().then(f=>{console.log("reCAPTCHA widget ID:",f)})):console.error("Firebase Auth not ready or recaptcha setup failed.")});const h=async()=>{const f=await sI(Yn,i.value,l),g=prompt("Enter the verification code"),E=await f.confirm(g);t("signed-in",E.user)};return(f,g)=>(tr(),nr("div",n0,[Ce("button",{onClick:a},"Login with Google"),Ce("form",{onSubmit:eh(c,["prevent"])},[Bi(Ce("input",{"onUpdate:modelValue":g[0]||(g[0]=E=>r.value=E),placeholder:"Email"},null,512),[[Hi,r.value]]),Bi(Ce("input",{"onUpdate:modelValue":g[1]||(g[1]=E=>s.value=E),type:"password",placeholder:"Password"},null,512),[[Hi,s.value]]),g[3]||(g[3]=Ce("button",{type:"submit"},"Login with Email",-1))],32),Ce("form",{onSubmit:eh(h,["prevent"])},[Bi(Ce("input",{"onUpdate:modelValue":g[2]||(g[2]=E=>i.value=E),placeholder:"Phone number"},null,512),[[Hi,i.value]]),g[4]||(g[4]=Ce("div",{id:"recaptcha-container"},null,-1)),g[5]||(g[5]=Ce("button",{type:"submit"},"Login with Phone",-1))],32)]))}},s0={key:0},i0={key:1},o0={class:"chat-header"},a0={__name:"App",setup(n){const e=er(null),t=s=>{e.value=s};Oo(()=>{bT(Yn,s=>{e.value=s})});const r=()=>{PT(Yn)};return(s,i)=>(tr(),nr("div",null,[e.value?(tr(),nr("div",i0,[Ce("div",o0,[Ce("span",null,"Welcome, "+As(e.value.displayName||"Guest"),1),Ce("button",{onClick:r},"Logout")]),sn(t0,{user:e.value},null,8,["user"])])):(tr(),nr("div",s0,[sn(r0,{onSignedIn:t})]))]))}},c0=Qg(a0,[["__scopeId","data-v-5ccd8a0e"]]);qy(c0).mount("#app");
