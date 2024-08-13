(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ba(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const ee={},Dt=[],Ne=()=>{},ml=()=>!1,pl=/^on[^a-z]/,cr=e=>pl.test(e),ya=e=>e.startsWith("onUpdate:"),ce=Object.assign,xa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hl=Object.prototype.hasOwnProperty,W=(e,t)=>hl.call(e,t),z=Array.isArray,$t=e=>ur(e)==="[object Map]",Po=e=>ur(e)==="[object Set]",U=e=>typeof e=="function",se=e=>typeof e=="string",wa=e=>typeof e=="symbol",re=e=>e!==null&&typeof e=="object",Co=e=>re(e)&&U(e.then)&&U(e.catch),So=Object.prototype.toString,ur=e=>So.call(e),gl=e=>ur(e).slice(8,-1),Ro=e=>ur(e)==="[object Object]",_a=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Yn=ba(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},vl=/-(\w)/g,Ke=dr(e=>e.replace(vl,(t,n)=>n?n.toUpperCase():"")),bl=/\B([A-Z])/g,Xt=dr(e=>e.replace(bl,"-$1").toLowerCase()),mr=dr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Sr=dr(e=>e?`on${mr(e)}`:""),pn=(e,t)=>!Object.is(e,t),qn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},er=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Hr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ai;const Kr=()=>ai||(ai=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ea(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=se(r)?_l(r):Ea(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(se(e))return e;if(re(e))return e}}const yl=/;(?![^(]*\))/g,xl=/:([^]+)/,wl=/\/\*[^]*?\*\//g;function _l(e){const t={};return e.replace(wl,"").split(yl).forEach(n=>{if(n){const r=n.split(xl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ka(e){let t="";if(se(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=ka(e[n]);r&&(t+=r+" ")}else if(re(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const El="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kl=ba(El);function Io(e){return!!e||e===""}const Jm=e=>se(e)?e:e==null?"":z(e)||re(e)&&(e.toString===So||!U(e.toString))?JSON.stringify(e,To,2):String(e),To=(e,t)=>t&&t.__v_isRef?To(e,t.value):$t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Po(t)?{[`Set(${t.size})`]:[...t.values()]}:re(t)&&!z(t)&&!Ro(t)?String(t):t;let Se;class Al{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ol(e,t=Se){t&&t.active&&t.effects.push(e)}function Pl(){return Se}const Aa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},No=e=>(e.w&ut)>0,Mo=e=>(e.n&ut)>0,Cl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ut},Sl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];No(a)&&!Mo(a)?a.delete(e):t[n++]=a,a.w&=~ut,a.n&=~ut}t.length=n}},Wr=new WeakMap;let rn=0,ut=1;const Yr=30;let Re;const Et=Symbol(""),qr=Symbol("");class Oa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ol(this,r)}run(){if(!this.active)return this.fn();let t=Re,n=ft;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Re,Re=this,ft=!0,ut=1<<++rn,rn<=Yr?Cl(this):ii(this),this.fn()}finally{rn<=Yr&&Sl(this),ut=1<<--rn,Re=this.parent,ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Re===this?this.deferStop=!0:this.active&&(ii(this),this.onStop&&this.onStop(),this.active=!1)}}function ii(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ft=!0;const Lo=[];function Gt(){Lo.push(ft),ft=!1}function Qt(){const e=Lo.pop();ft=e===void 0?!0:e}function _e(e,t,n){if(ft&&Re){let r=Wr.get(e);r||Wr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Aa()),Fo(a)}}function Fo(e,t){let n=!1;rn<=Yr?Mo(e)||(e.n|=ut,n=!No(e)):n=!e.has(Re),n&&(e.add(Re),Re.deps.push(e))}function Ge(e,t,n,r,a,i){const o=Wr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&z(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":z(e)?_a(n)&&s.push(o.get("length")):(s.push(o.get(Et)),$t(e)&&s.push(o.get(qr)));break;case"delete":z(e)||(s.push(o.get(Et)),$t(e)&&s.push(o.get(qr)));break;case"set":$t(e)&&s.push(o.get(Et));break}if(s.length===1)s[0]&&Vr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Vr(Aa(l))}}function Vr(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&oi(r);for(const r of n)r.computed||oi(r)}function oi(e,t){(e!==Re||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Rl=ba("__proto__,__v_isRef,__isVue"),jo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wa)),Il=Pa(),Tl=Pa(!1,!0),Nl=Pa(!0),si=Ml();function Ml(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)_e(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Gt();const r=Y(this)[t].apply(this,n);return Qt(),r}}),e}function Ll(e){const t=Y(this);return _e(t,"has",e),t.hasOwnProperty(e)}function Pa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ql:Uo:t?Bo:zo).get(r))return r;const o=z(r);if(!e){if(o&&W(si,a))return Reflect.get(si,a,i);if(a==="hasOwnProperty")return Ll}const s=Reflect.get(r,a,i);return(wa(a)?jo.has(a):Rl(a))||(e||_e(r,"get",a),t)?s:he(s)?o&&_a(a)?s:s.value:re(s)?e?Ko(s):hr(s):s}}const Fl=Do(),jl=Do(!0);function Do(e=!1){return function(n,r,a,i){let o=n[r];if(Ht(o)&&he(o)&&!he(a))return!1;if(!e&&(!tr(a)&&!Ht(a)&&(o=Y(o),a=Y(a)),!z(n)&&he(o)&&!he(a)))return o.value=a,!0;const s=z(n)&&_a(r)?Number(r)<n.length:W(n,r),l=Reflect.set(n,r,a,i);return n===Y(i)&&(s?pn(a,o)&&Ge(n,"set",r,a):Ge(n,"add",r,a)),l}}function Dl(e,t){const n=W(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ge(e,"delete",t,void 0),r}function $l(e,t){const n=Reflect.has(e,t);return(!wa(t)||!jo.has(t))&&_e(e,"has",t),n}function zl(e){return _e(e,"iterate",z(e)?"length":Et),Reflect.ownKeys(e)}const $o={get:Il,set:Fl,deleteProperty:Dl,has:$l,ownKeys:zl},Bl={get:Nl,set(e,t){return!0},deleteProperty(e,t){return!0}},Ul=ce({},$o,{get:Tl,set:jl}),Ca=e=>e,pr=e=>Reflect.getPrototypeOf(e);function In(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(t!==i&&_e(a,"get",t),_e(a,"get",i));const{has:o}=pr(a),s=r?Ca:n?Ia:hn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Tn(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(e!==a&&_e(r,"has",e),_e(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Nn(e,t=!1){return e=e.__v_raw,!t&&_e(Y(e),"iterate",Et),Reflect.get(e,"size",e)}function li(e){e=Y(e);const t=Y(this);return pr(t).has.call(t,e)||(t.add(e),Ge(t,"add",e,e)),this}function fi(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=pr(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?pn(t,o)&&Ge(n,"set",e,t):Ge(n,"add",e,t),this}function ci(e){const t=Y(this),{has:n,get:r}=pr(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ge(t,"delete",e,void 0),i}function ui(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&Ge(e,"clear",void 0,void 0),n}function Mn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?Ca:e?Ia:hn;return!e&&_e(s,"iterate",Et),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Ln(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=$t(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Ca:t?Ia:hn;return!t&&_e(i,"iterate",l?qr:Et),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:s?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function at(e){return function(...t){return e==="delete"?!1:this}}function Hl(){const e={get(i){return In(this,i)},get size(){return Nn(this)},has:Tn,add:li,set:fi,delete:ci,clear:ui,forEach:Mn(!1,!1)},t={get(i){return In(this,i,!1,!0)},get size(){return Nn(this)},has:Tn,add:li,set:fi,delete:ci,clear:ui,forEach:Mn(!1,!0)},n={get(i){return In(this,i,!0)},get size(){return Nn(this,!0)},has(i){return Tn.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:Mn(!0,!1)},r={get(i){return In(this,i,!0,!0)},get size(){return Nn(this,!0)},has(i){return Tn.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:Mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ln(i,!1,!1),n[i]=Ln(i,!0,!1),t[i]=Ln(i,!1,!0),r[i]=Ln(i,!0,!0)}),[e,n,t,r]}const[Kl,Wl,Yl,ql]=Hl();function Sa(e,t){const n=t?e?ql:Yl:e?Wl:Kl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(W(n,a)&&a in r?n:r,a,i)}const Vl={get:Sa(!1,!1)},Xl={get:Sa(!1,!0)},Gl={get:Sa(!0,!1)},zo=new WeakMap,Bo=new WeakMap,Uo=new WeakMap,Ql=new WeakMap;function Jl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zl(e){return e.__v_skip||!Object.isExtensible(e)?0:Jl(gl(e))}function hr(e){return Ht(e)?e:Ra(e,!1,$o,Vl,zo)}function Ho(e){return Ra(e,!1,Ul,Xl,Bo)}function Ko(e){return Ra(e,!0,Bl,Gl,Uo)}function Ra(e,t,n,r,a){if(!re(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Zl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function zt(e){return Ht(e)?zt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ht(e){return!!(e&&e.__v_isReadonly)}function tr(e){return!!(e&&e.__v_isShallow)}function Wo(e){return zt(e)||Ht(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Yo(e){return er(e,"__v_skip",!0),e}const hn=e=>re(e)?hr(e):e,Ia=e=>re(e)?Ko(e):e;function qo(e){ft&&Re&&(e=Y(e),Fo(e.dep||(e.dep=Aa())))}function Vo(e,t){e=Y(e);const n=e.dep;n&&Vr(n)}function he(e){return!!(e&&e.__v_isRef===!0)}function ef(e){return Xo(e,!1)}function tf(e){return Xo(e,!0)}function Xo(e,t){return he(e)?e:new nf(e,t)}class nf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:hn(t)}get value(){return qo(this),this._value}set value(t){const n=this.__v_isShallow||tr(t)||Ht(t);t=n?t:Y(t),pn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:hn(t),Vo(this))}}function kt(e){return he(e)?e.value:e}const rf={get:(e,t,n)=>kt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return he(a)&&!he(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Go(e){return zt(e)?e:new Proxy(e,rf)}class af{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Oa(t,()=>{this._dirty||(this._dirty=!0,Vo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return qo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function of(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=Ne):(r=e.get,a=e.set),new af(r,a,i||!a,n)}function ct(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){gr(i,t,n)}return a}function Me(e,t,n,r){if(U(e)){const i=ct(e,t,n,r);return i&&Co(i)&&i.catch(o=>{gr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Me(e[i],t,n,r));return a}function gr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ct(l,null,10,[e,o,s]);return}}sf(e,n,a,r)}function sf(e,t,n,r=!0){console.error(e)}let gn=!1,Xr=!1;const pe=[];let Ue=0;const Bt=[];let qe=null,bt=0;const Qo=Promise.resolve();let Ta=null;function Jo(e){const t=Ta||Qo;return e?t.then(this?e.bind(this):e):t}function lf(e){let t=Ue+1,n=pe.length;for(;t<n;){const r=t+n>>>1;vn(pe[r])<e?t=r+1:n=r}return t}function Na(e){(!pe.length||!pe.includes(e,gn&&e.allowRecurse?Ue+1:Ue))&&(e.id==null?pe.push(e):pe.splice(lf(e.id),0,e),Zo())}function Zo(){!gn&&!Xr&&(Xr=!0,Ta=Qo.then(ts))}function ff(e){const t=pe.indexOf(e);t>Ue&&pe.splice(t,1)}function cf(e){z(e)?Bt.push(...e):(!qe||!qe.includes(e,e.allowRecurse?bt+1:bt))&&Bt.push(e),Zo()}function di(e,t=gn?Ue+1:0){for(;t<pe.length;t++){const n=pe[t];n&&n.pre&&(pe.splice(t,1),t--,n())}}function es(e){if(Bt.length){const t=[...new Set(Bt)];if(Bt.length=0,qe){qe.push(...t);return}for(qe=t,qe.sort((n,r)=>vn(n)-vn(r)),bt=0;bt<qe.length;bt++)qe[bt]();qe=null,bt=0}}const vn=e=>e.id==null?1/0:e.id,uf=(e,t)=>{const n=vn(e)-vn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ts(e){Xr=!1,gn=!0,pe.sort(uf);const t=Ne;try{for(Ue=0;Ue<pe.length;Ue++){const n=pe[Ue];n&&n.active!==!1&&ct(n,null,14)}}finally{Ue=0,pe.length=0,es(),gn=!1,Ta=null,(pe.length||Bt.length)&&ts()}}function df(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ee;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[c]||ee;p&&(a=n.map(g=>se(g)?g.trim():g)),d&&(a=n.map(Hr))}let s,l=r[s=Sr(t)]||r[s=Sr(Ke(t))];!l&&i&&(l=r[s=Sr(Xt(t))]),l&&Me(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Me(f,e,6,a)}}function ns(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=f=>{const c=ns(f,t,!0);c&&(s=!0,ce(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(re(e)&&r.set(e,null),null):(z(i)?i.forEach(l=>o[l]=null):ce(o,i),re(e)&&r.set(e,o),o)}function vr(e,t){return!e||!cr(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,Xt(t))||W(e,t))}let Pe=null,br=null;function nr(e){const t=Pe;return Pe=e,br=e&&e.type.__scopeId||null,t}function mf(e){br=e}function pf(){br=null}function rs(e,t=Pe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ei(-1);const i=nr(t);let o;try{o=e(...a)}finally{nr(i),r._d&&Ei(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Rr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:p,setupState:g,ctx:P,inheritAttrs:C}=e;let F,x;const w=nr(e);try{if(n.shapeFlag&4){const S=a||r;F=Be(c.call(S,S,d,i,g,p,P)),x=l}else{const S=t;F=Be(S.length>1?S(i,{attrs:l,slots:s,emit:f}):S(i,null)),x=t.props?l:hf(l)}}catch(S){fn.length=0,gr(S,e,1),F=we(bn)}let L=F;if(x&&C!==!1){const S=Object.keys(x),{shapeFlag:H}=L;S.length&&H&7&&(o&&S.some(ya)&&(x=gf(x,o)),L=Kt(L,x))}return n.dirs&&(L=Kt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),F=L,nr(w),F}const hf=e=>{let t;for(const n in e)(n==="class"||n==="style"||cr(n))&&((t||(t={}))[n]=e[n]);return t},gf=(e,t)=>{const n={};for(const r in e)(!ya(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function vf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?mi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(o[p]!==r[p]&&!vr(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?mi(r,o,f):!0:!!o;return!1}function mi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!vr(n,i))return!0}return!1}function bf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const yf=e=>e.__isSuspense;function xf(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):cf(e)}const Fn={};function sn(e,t,n){return as(e,t,n)}function as(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ee){var s;const l=Pl()===((s=de)==null?void 0:s.scope)?de:null;let f,c=!1,d=!1;if(he(e)?(f=()=>e.value,c=tr(e)):zt(e)?(f=()=>e,r=!0):z(e)?(d=!0,c=e.some(S=>zt(S)||tr(S)),f=()=>e.map(S=>{if(he(S))return S.value;if(zt(S))return xt(S);if(U(S))return ct(S,l,2)})):U(e)?t?f=()=>ct(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return p&&p(),Me(e,l,3,[g])}:f=Ne,t&&r){const S=f;f=()=>xt(S())}let p,g=S=>{p=w.onStop=()=>{ct(S,l,4)}},P;if(xn)if(g=Ne,t?n&&Me(t,l,3,[f(),d?[]:void 0,g]):f(),a==="sync"){const S=bc();P=S.__watcherHandles||(S.__watcherHandles=[])}else return Ne;let C=d?new Array(e.length).fill(Fn):Fn;const F=()=>{if(w.active)if(t){const S=w.run();(r||c||(d?S.some((H,J)=>pn(H,C[J])):pn(S,C)))&&(p&&p(),Me(t,l,3,[S,C===Fn?void 0:d&&C[0]===Fn?[]:C,g]),C=S)}else w.run()};F.allowRecurse=!!t;let x;a==="sync"?x=F:a==="post"?x=()=>xe(F,l&&l.suspense):(F.pre=!0,l&&(F.id=l.uid),x=()=>Na(F));const w=new Oa(f,x);t?n?F():C=w.run():a==="post"?xe(w.run.bind(w),l&&l.suspense):w.run();const L=()=>{w.stop(),l&&l.scope&&xa(l.scope.effects,w)};return P&&P.push(L),L}function wf(e,t,n){const r=this.proxy,a=se(e)?e.includes(".")?is(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=de;Wt(this);const s=as(a,i.bind(r),n);return o?Wt(o):At(),s}function is(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function xt(e,t){if(!re(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),he(e))xt(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)xt(e[n],t);else if(Po(e)||$t(e))e.forEach(n=>{xt(n,t)});else if(Ro(e))for(const n in e)xt(e[n],t);return e}function Zm(e,t){const n=Pe;if(n===null)return e;const r=_r(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=ee]=t[i];o&&(U(o)&&(o={mounted:o,updated:o}),o.deep&&xt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function gt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Gt(),Me(l,n,8,[e.el,s,e,t]),Qt())}}function Ma(e,t){return U(e)?(()=>ce({name:e.name},t,{setup:e}))():e}const Vn=e=>!!e.type.__asyncLoader,os=e=>e.type.__isKeepAlive;function _f(e,t){ss(e,"a",t)}function Ef(e,t){ss(e,"da",t)}function ss(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(yr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)os(a.parent.vnode)&&kf(r,t,n,a),a=a.parent}}function kf(e,t,n,r){const a=yr(t,e,r,!0);ls(()=>{xa(r[t],a)},n)}function yr(e,t,n=de,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Gt(),Wt(n);const s=Me(t,n,e,o);return At(),Qt(),s});return r?a.unshift(i):a.push(i),i}}const et=e=>(t,n=de)=>(!xn||e==="sp")&&yr(e,(...r)=>t(...r),n),Af=et("bm"),Of=et("m"),Pf=et("bu"),Cf=et("u"),Sf=et("bum"),ls=et("um"),Rf=et("sp"),If=et("rtg"),Tf=et("rtc");function Nf(e,t=de){yr("ec",e,t)}const fs="components";function Mf(e,t){return Ff(fs,e,!0,t)||e}const Lf=Symbol.for("v-ndc");function Ff(e,t,n=!0,r=!1){const a=Pe||de;if(a){const i=a.type;if(e===fs){const s=hc(i,!1);if(s&&(s===t||s===Ke(t)||s===mr(Ke(t))))return i}const o=pi(a[e]||i[e],t)||pi(a.appContext[e],t);return!o&&r?i:o}}function pi(e,t){return e&&(e[t]||e[Ke(t)]||e[mr(Ke(t))])}function ep(e,t,n,r){let a;const i=n&&n[r];if(z(e)||se(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(re(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Gr=e=>e?ws(e)?_r(e)||e.proxy:Gr(e.parent):null,ln=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Gr(e.parent),$root:e=>Gr(e.root),$emit:e=>e.emit,$options:e=>La(e),$forceUpdate:e=>e.f||(e.f=()=>Na(e.update)),$nextTick:e=>e.n||(e.n=Jo.bind(e.proxy)),$watch:e=>wf.bind(e)}),Ir=(e,t)=>e!==ee&&!e.__isScriptSetup&&W(e,t),jf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Ir(r,t))return o[t]=1,r[t];if(a!==ee&&W(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&W(f,t))return o[t]=3,i[t];if(n!==ee&&W(n,t))return o[t]=4,n[t];Qr&&(o[t]=0)}}const c=ln[t];let d,p;if(c)return t==="$attrs"&&_e(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ee&&W(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,W(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Ir(a,t)?(a[t]=n,!0):r!==ee&&W(r,t)?(r[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ee&&W(e,o)||Ir(t,o)||(s=i[0])&&W(s,o)||W(r,o)||W(ln,o)||W(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:W(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function hi(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Qr=!0;function Df(e){const t=La(e),n=e.proxy,r=e.ctx;Qr=!1,t.beforeCreate&&gi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:p,beforeUpdate:g,updated:P,activated:C,deactivated:F,beforeDestroy:x,beforeUnmount:w,destroyed:L,unmounted:S,render:H,renderTracked:J,renderTriggered:ae,errorCaptured:Ee,serverPrefetch:ge,expose:Oe,inheritAttrs:nt,components:ht,directives:Fe,filters:Zt}=t;if(f&&$f(f,r,null),o)for(const Q in o){const q=o[Q];U(q)&&(r[Q]=q.bind(n))}if(a){const Q=a.call(n,n);re(Q)&&(e.data=hr(Q))}if(Qr=!0,i)for(const Q in i){const q=i[Q],We=U(q)?q.bind(n,n):U(q.get)?q.get.bind(n,n):Ne,rt=!U(q)&&U(q.set)?q.set.bind(n):Ne,je=ue({get:We,set:rt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>je.value,set:be=>je.value=be})}if(s)for(const Q in s)cs(s[Q],r,n,Q);if(l){const Q=U(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(q=>{Xn(q,Q[q])})}c&&gi(c,e,"c");function fe(Q,q){z(q)?q.forEach(We=>Q(We.bind(n))):q&&Q(q.bind(n))}if(fe(Af,d),fe(Of,p),fe(Pf,g),fe(Cf,P),fe(_f,C),fe(Ef,F),fe(Nf,Ee),fe(Tf,J),fe(If,ae),fe(Sf,w),fe(ls,S),fe(Rf,ge),z(Oe))if(Oe.length){const Q=e.exposed||(e.exposed={});Oe.forEach(q=>{Object.defineProperty(Q,q,{get:()=>n[q],set:We=>n[q]=We})})}else e.exposed||(e.exposed={});H&&e.render===Ne&&(e.render=H),nt!=null&&(e.inheritAttrs=nt),ht&&(e.components=ht),Fe&&(e.directives=Fe)}function $f(e,t,n=Ne){z(e)&&(e=Jr(e));for(const r in e){const a=e[r];let i;re(a)?"default"in a?i=Xe(a.from||r,a.default,!0):i=Xe(a.from||r):i=Xe(a),he(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function gi(e,t,n){Me(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function cs(e,t,n,r){const a=r.includes(".")?is(n,r):()=>n[r];if(se(e)){const i=t[e];U(i)&&sn(a,i)}else if(U(e))sn(a,e.bind(n));else if(re(e))if(z(e))e.forEach(i=>cs(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&sn(a,i,e)}}function La(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>rr(l,f,o,!0)),rr(l,t,o)),re(t)&&i.set(t,l),l}function rr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&rr(e,i,n,!0),a&&a.forEach(o=>rr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=zf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const zf={data:vi,props:bi,emits:bi,methods:an,computed:an,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:an,directives:an,watch:Uf,provide:vi,inject:Bf};function vi(e,t){return t?e?function(){return ce(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function Bf(e,t){return an(Jr(e),Jr(t))}function Jr(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function an(e,t){return e?ce(Object.create(null),e,t):t}function bi(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:ce(Object.create(null),hi(e),hi(t??{})):t}function Uf(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function us(){return{app:null,config:{isNativeTag:ml,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hf=0;function Kf(e,t){return function(r,a=null){U(r)||(r=ce({},r)),a!=null&&!re(a)&&(a=null);const i=us(),o=new Set;let s=!1;const l=i.app={_uid:Hf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:yc,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&U(f.install)?(o.add(f),f.install(l,...c)):U(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const p=we(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,d),s=!0,l._container=f,f.__vue_app__=l,_r(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l},runWithContext(f){ar=l;try{return f()}finally{ar=null}}};return l}}let ar=null;function Xn(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function Xe(e,t,n=!1){const r=de||Pe;if(r||ar){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ar._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r&&r.proxy):t}}function Wf(e,t,n,r=!1){const a={},i={};er(i,wr,1),e.propsDefaults=Object.create(null),ds(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ho(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Yf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(vr(e.emitsOptions,p))continue;const g=t[p];if(l)if(W(i,p))g!==i[p]&&(i[p]=g,f=!0);else{const P=Ke(p);a[P]=Zr(l,s,P,g,e,!1)}else g!==i[p]&&(i[p]=g,f=!0)}}}else{ds(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!W(t,d)&&((c=Xt(d))===d||!W(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=Zr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!W(t,d))&&(delete i[d],f=!0)}f&&Ge(e,"set","$attrs")}function ds(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Yn(l))continue;const f=t[l];let c;a&&W(a,c=Ke(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:vr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=Y(n),f=s||ee;for(let c=0;c<i.length;c++){const d=i[c];n[d]=Zr(a,l,d,f[d],e,!W(f,d))}}return o}function Zr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=W(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&U(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Wt(a),r=f[n]=l.call(null,t),At())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Xt(n))&&(r=!0))}return r}function ms(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const c=d=>{l=!0;const[p,g]=ms(d,t,!0);ce(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return re(e)&&r.set(e,Dt),Dt;if(z(i))for(let c=0;c<i.length;c++){const d=Ke(i[c]);yi(d)&&(o[d]=ee)}else if(i)for(const c in i){const d=Ke(c);if(yi(d)){const p=i[c],g=o[d]=z(p)||U(p)?{type:p}:ce({},p);if(g){const P=_i(Boolean,g.type),C=_i(String,g.type);g[0]=P>-1,g[1]=C<0||P<C,(P>-1||W(g,"default"))&&s.push(d)}}}const f=[o,s];return re(e)&&r.set(e,f),f}function yi(e){return e[0]!=="$"}function xi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function wi(e,t){return xi(e)===xi(t)}function _i(e,t){return z(t)?t.findIndex(n=>wi(n,e)):U(t)&&wi(t,e)?0:-1}const ps=e=>e[0]==="_"||e==="$stable",Fa=e=>z(e)?e.map(Be):[Be(e)],qf=(e,t,n)=>{if(t._n)return t;const r=rs((...a)=>Fa(t(...a)),n);return r._c=!1,r},hs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ps(a))continue;const i=e[a];if(U(i))t[a]=qf(a,i,r);else if(i!=null){const o=Fa(i);t[a]=()=>o}}},gs=(e,t)=>{const n=Fa(t);e.slots.default=()=>n},Vf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),er(t,"_",n)):hs(t,e.slots={})}else e.slots={},t&&gs(e,t);er(e.slots,wr,1)},Xf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ee;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ce(a,t),!n&&s===1&&delete a._):(i=!t.$stable,hs(t,a)),o=t}else t&&(gs(e,t),o={default:1});if(i)for(const s in a)!ps(s)&&!(s in o)&&delete a[s]};function ea(e,t,n,r,a=!1){if(z(e)){e.forEach((p,g)=>ea(p,t&&(z(t)?t[g]:t),n,r,a));return}if(Vn(r)&&!a)return;const i=r.shapeFlag&4?_r(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===ee?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(se(f)?(c[f]=null,W(d,f)&&(d[f]=null)):he(f)&&(f.value=null)),U(l))ct(l,s,12,[o,c]);else{const p=se(l),g=he(l);if(p||g){const P=()=>{if(e.f){const C=p?W(d,l)?d[l]:c[l]:l.value;a?z(C)&&xa(C,i):z(C)?C.includes(i)||C.push(i):p?(c[l]=[i],W(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=o,W(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(P.id=-1,xe(P,n)):P()}}}const xe=xf;function Gf(e){return Qf(e)}function Qf(e,t){const n=Kr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:p,setScopeId:g=Ne,insertStaticContent:P}=e,C=(u,m,h,v=null,y=null,_=null,R=!1,k=null,A=!!m.dynamicChildren)=>{if(u===m)return;u&&!tn(u,m)&&(v=b(u),be(u,y,_,!0),u=null),m.patchFlag===-2&&(A=!1,m.dynamicChildren=null);const{type:E,ref:D,shapeFlag:N}=m;switch(E){case xr:F(u,m,h,v);break;case bn:x(u,m,h,v);break;case Gn:u==null&&w(m,h,v,R);break;case ze:ht(u,m,h,v,y,_,R,k,A);break;default:N&1?H(u,m,h,v,y,_,R,k,A):N&6?Fe(u,m,h,v,y,_,R,k,A):(N&64||N&128)&&E.process(u,m,h,v,y,_,R,k,A,O)}D!=null&&y&&ea(D,u&&u.ref,_,m||u,!m)},F=(u,m,h,v)=>{if(u==null)r(m.el=s(m.children),h,v);else{const y=m.el=u.el;m.children!==u.children&&f(y,m.children)}},x=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},w=(u,m,h,v)=>{[u.el,u.anchor]=P(u.children,m,h,v,u.el,u.anchor)},L=({el:u,anchor:m},h,v)=>{let y;for(;u&&u!==m;)y=p(u),r(u,h,v),u=y;r(m,h,v)},S=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},H=(u,m,h,v,y,_,R,k,A)=>{R=R||m.type==="svg",u==null?J(m,h,v,y,_,R,k,A):ge(u,m,y,_,R,k,A)},J=(u,m,h,v,y,_,R,k)=>{let A,E;const{type:D,props:N,shapeFlag:$,transition:B,dirs:K}=u;if(A=u.el=o(u.type,_,N&&N.is,N),$&8?c(A,u.children):$&16&&Ee(u.children,A,null,v,y,_&&D!=="foreignObject",R,k),K&&gt(u,null,v,"created"),ae(A,u,u.scopeId,R,v),N){for(const G in N)G!=="value"&&!Yn(G)&&i(A,G,null,N[G],_,u.children,v,y,me);"value"in N&&i(A,"value",null,N.value),(E=N.onVnodeBeforeMount)&&$e(E,v,u)}K&&gt(u,null,v,"beforeMount");const Z=(!y||y&&!y.pendingBranch)&&B&&!B.persisted;Z&&B.beforeEnter(A),r(A,m,h),((E=N&&N.onVnodeMounted)||Z||K)&&xe(()=>{E&&$e(E,v,u),Z&&B.enter(A),K&&gt(u,null,v,"mounted")},y)},ae=(u,m,h,v,y)=>{if(h&&g(u,h),v)for(let _=0;_<v.length;_++)g(u,v[_]);if(y){let _=y.subTree;if(m===_){const R=y.vnode;ae(u,R,R.scopeId,R.slotScopeIds,y.parent)}}},Ee=(u,m,h,v,y,_,R,k,A=0)=>{for(let E=A;E<u.length;E++){const D=u[E]=k?st(u[E]):Be(u[E]);C(null,D,m,h,v,y,_,R,k)}},ge=(u,m,h,v,y,_,R)=>{const k=m.el=u.el;let{patchFlag:A,dynamicChildren:E,dirs:D}=m;A|=u.patchFlag&16;const N=u.props||ee,$=m.props||ee;let B;h&&vt(h,!1),(B=$.onVnodeBeforeUpdate)&&$e(B,h,m,u),D&&gt(m,u,h,"beforeUpdate"),h&&vt(h,!0);const K=y&&m.type!=="foreignObject";if(E?Oe(u.dynamicChildren,E,k,h,v,K,_):R||q(u,m,k,null,h,v,K,_,!1),A>0){if(A&16)nt(k,m,N,$,h,v,y);else if(A&2&&N.class!==$.class&&i(k,"class",null,$.class,y),A&4&&i(k,"style",N.style,$.style,y),A&8){const Z=m.dynamicProps;for(let G=0;G<Z.length;G++){const oe=Z[G],Ce=N[oe],Tt=$[oe];(Tt!==Ce||oe==="value")&&i(k,oe,Ce,Tt,y,u.children,h,v,me)}}A&1&&u.children!==m.children&&c(k,m.children)}else!R&&E==null&&nt(k,m,N,$,h,v,y);((B=$.onVnodeUpdated)||D)&&xe(()=>{B&&$e(B,h,m,u),D&&gt(m,u,h,"updated")},v)},Oe=(u,m,h,v,y,_,R)=>{for(let k=0;k<m.length;k++){const A=u[k],E=m[k],D=A.el&&(A.type===ze||!tn(A,E)||A.shapeFlag&70)?d(A.el):h;C(A,E,D,null,v,y,_,R,!0)}},nt=(u,m,h,v,y,_,R)=>{if(h!==v){if(h!==ee)for(const k in h)!Yn(k)&&!(k in v)&&i(u,k,h[k],null,R,m.children,y,_,me);for(const k in v){if(Yn(k))continue;const A=v[k],E=h[k];A!==E&&k!=="value"&&i(u,k,E,A,R,m.children,y,_,me)}"value"in v&&i(u,"value",h.value,v.value)}},ht=(u,m,h,v,y,_,R,k,A)=>{const E=m.el=u?u.el:s(""),D=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:B}=m;B&&(k=k?k.concat(B):B),u==null?(r(E,h,v),r(D,h,v),Ee(m.children,h,D,y,_,R,k,A)):N>0&&N&64&&$&&u.dynamicChildren?(Oe(u.dynamicChildren,$,h,y,_,R,k),(m.key!=null||y&&m===y.subTree)&&vs(u,m,!0)):q(u,m,h,D,y,_,R,k,A)},Fe=(u,m,h,v,y,_,R,k,A)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?y.ctx.activate(m,h,v,R,A):Zt(m,h,v,y,_,R,A):St(u,m,A)},Zt=(u,m,h,v,y,_,R)=>{const k=u.component=cc(u,v,y);if(os(u)&&(k.ctx.renderer=O),uc(k),k.asyncDep){if(y&&y.registerDep(k,fe),!u.el){const A=k.subTree=we(bn);x(null,A,m,h)}return}fe(k,u,m,h,y,_,R)},St=(u,m,h)=>{const v=m.component=u.component;if(vf(u,m,h))if(v.asyncDep&&!v.asyncResolved){Q(v,m,h);return}else v.next=m,ff(v.update),v.update();else m.el=u.el,v.vnode=m},fe=(u,m,h,v,y,_,R)=>{const k=()=>{if(u.isMounted){let{next:D,bu:N,u:$,parent:B,vnode:K}=u,Z=D,G;vt(u,!1),D?(D.el=K.el,Q(u,D,R)):D=K,N&&qn(N),(G=D.props&&D.props.onVnodeBeforeUpdate)&&$e(G,B,D,K),vt(u,!0);const oe=Rr(u),Ce=u.subTree;u.subTree=oe,C(Ce,oe,d(Ce.el),b(Ce),u,y,_),D.el=oe.el,Z===null&&bf(u,oe.el),$&&xe($,y),(G=D.props&&D.props.onVnodeUpdated)&&xe(()=>$e(G,B,D,K),y)}else{let D;const{el:N,props:$}=m,{bm:B,m:K,parent:Z}=u,G=Vn(m);if(vt(u,!1),B&&qn(B),!G&&(D=$&&$.onVnodeBeforeMount)&&$e(D,Z,m),vt(u,!0),N&&V){const oe=()=>{u.subTree=Rr(u),V(N,u.subTree,u,y,null)};G?m.type.__asyncLoader().then(()=>!u.isUnmounted&&oe()):oe()}else{const oe=u.subTree=Rr(u);C(null,oe,h,v,u,y,_),m.el=oe.el}if(K&&xe(K,y),!G&&(D=$&&$.onVnodeMounted)){const oe=m;xe(()=>$e(D,Z,oe),y)}(m.shapeFlag&256||Z&&Vn(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&xe(u.a,y),u.isMounted=!0,m=h=v=null}},A=u.effect=new Oa(k,()=>Na(E),u.scope),E=u.update=()=>A.run();E.id=u.uid,vt(u,!0),E()},Q=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Yf(u,m.props,v,h),Xf(u,m.children,h),Gt(),di(),Qt()},q=(u,m,h,v,y,_,R,k,A=!1)=>{const E=u&&u.children,D=u?u.shapeFlag:0,N=m.children,{patchFlag:$,shapeFlag:B}=m;if($>0){if($&128){rt(E,N,h,v,y,_,R,k,A);return}else if($&256){We(E,N,h,v,y,_,R,k,A);return}}B&8?(D&16&&me(E,y,_),N!==E&&c(h,N)):D&16?B&16?rt(E,N,h,v,y,_,R,k,A):me(E,y,_,!0):(D&8&&c(h,""),B&16&&Ee(N,h,v,y,_,R,k,A))},We=(u,m,h,v,y,_,R,k,A)=>{u=u||Dt,m=m||Dt;const E=u.length,D=m.length,N=Math.min(E,D);let $;for($=0;$<N;$++){const B=m[$]=A?st(m[$]):Be(m[$]);C(u[$],B,h,null,y,_,R,k,A)}E>D?me(u,y,_,!0,!1,N):Ee(m,h,v,y,_,R,k,A,N)},rt=(u,m,h,v,y,_,R,k,A)=>{let E=0;const D=m.length;let N=u.length-1,$=D-1;for(;E<=N&&E<=$;){const B=u[E],K=m[E]=A?st(m[E]):Be(m[E]);if(tn(B,K))C(B,K,h,null,y,_,R,k,A);else break;E++}for(;E<=N&&E<=$;){const B=u[N],K=m[$]=A?st(m[$]):Be(m[$]);if(tn(B,K))C(B,K,h,null,y,_,R,k,A);else break;N--,$--}if(E>N){if(E<=$){const B=$+1,K=B<D?m[B].el:v;for(;E<=$;)C(null,m[E]=A?st(m[E]):Be(m[E]),h,K,y,_,R,k,A),E++}}else if(E>$)for(;E<=N;)be(u[E],y,_,!0),E++;else{const B=E,K=E,Z=new Map;for(E=K;E<=$;E++){const ke=m[E]=A?st(m[E]):Be(m[E]);ke.key!=null&&Z.set(ke.key,E)}let G,oe=0;const Ce=$-K+1;let Tt=!1,ti=0;const en=new Array(Ce);for(E=0;E<Ce;E++)en[E]=0;for(E=B;E<=N;E++){const ke=u[E];if(oe>=Ce){be(ke,y,_,!0);continue}let De;if(ke.key!=null)De=Z.get(ke.key);else for(G=K;G<=$;G++)if(en[G-K]===0&&tn(ke,m[G])){De=G;break}De===void 0?be(ke,y,_,!0):(en[De-K]=E+1,De>=ti?ti=De:Tt=!0,C(ke,m[De],h,null,y,_,R,k,A),oe++)}const ni=Tt?Jf(en):Dt;for(G=ni.length-1,E=Ce-1;E>=0;E--){const ke=K+E,De=m[ke],ri=ke+1<D?m[ke+1].el:v;en[E]===0?C(null,De,h,ri,y,_,R,k,A):Tt&&(G<0||E!==ni[G]?je(De,h,ri,2):G--)}}},je=(u,m,h,v,y=null)=>{const{el:_,type:R,transition:k,children:A,shapeFlag:E}=u;if(E&6){je(u.component.subTree,m,h,v);return}if(E&128){u.suspense.move(m,h,v);return}if(E&64){R.move(u,m,h,O);return}if(R===ze){r(_,m,h);for(let N=0;N<A.length;N++)je(A[N],m,h,v);r(u.anchor,m,h);return}if(R===Gn){L(u,m,h);return}if(v!==2&&E&1&&k)if(v===0)k.beforeEnter(_),r(_,m,h),xe(()=>k.enter(_),y);else{const{leave:N,delayLeave:$,afterLeave:B}=k,K=()=>r(_,m,h),Z=()=>{N(_,()=>{K(),B&&B()})};$?$(_,K,Z):Z()}else r(_,m,h)},be=(u,m,h,v=!1,y=!1)=>{const{type:_,props:R,ref:k,children:A,dynamicChildren:E,shapeFlag:D,patchFlag:N,dirs:$}=u;if(k!=null&&ea(k,null,h,u,!0),D&256){m.ctx.deactivate(u);return}const B=D&1&&$,K=!Vn(u);let Z;if(K&&(Z=R&&R.onVnodeBeforeUnmount)&&$e(Z,m,u),D&6)Rn(u.component,h,v);else{if(D&128){u.suspense.unmount(h,v);return}B&&gt(u,null,m,"beforeUnmount"),D&64?u.type.remove(u,m,h,y,O,v):E&&(_!==ze||N>0&&N&64)?me(E,m,h,!1,!0):(_===ze&&N&384||!y&&D&16)&&me(A,m,h),v&&Rt(u)}(K&&(Z=R&&R.onVnodeUnmounted)||B)&&xe(()=>{Z&&$e(Z,m,u),B&&gt(u,null,m,"unmounted")},h)},Rt=u=>{const{type:m,el:h,anchor:v,transition:y}=u;if(m===ze){It(h,v);return}if(m===Gn){S(u);return}const _=()=>{a(h),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:k}=y,A=()=>R(h,_);k?k(u.el,_,A):A()}else _()},It=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},Rn=(u,m,h)=>{const{bum:v,scope:y,update:_,subTree:R,um:k}=u;v&&qn(v),y.stop(),_&&(_.active=!1,be(R,u,m,h)),k&&xe(k,m),xe(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},me=(u,m,h,v=!1,y=!1,_=0)=>{for(let R=_;R<u.length;R++)be(u[R],m,h,v,y)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),T=(u,m,h)=>{u==null?m._vnode&&be(m._vnode,null,null,!0):C(m._vnode||null,u,m,null,null,null,h),di(),es(),m._vnode=u},O={p:C,um:be,m:je,r:Rt,mt:Zt,mc:Ee,pc:q,pbc:Oe,n:b,o:e};let j,V;return t&&([j,V]=t(O)),{render:T,hydrate:j,createApp:Kf(T,j)}}function vt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function vs(e,t,n=!1){const r=e.children,a=t.children;if(z(r)&&z(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=st(a[i]),s.el=o.el),n||vs(o,s)),s.type===xr&&(s.el=o.el)}}function Jf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Zf=e=>e.__isTeleport,ze=Symbol.for("v-fgt"),xr=Symbol.for("v-txt"),bn=Symbol.for("v-cmt"),Gn=Symbol.for("v-stc"),fn=[];let Ie=null;function bs(e=!1){fn.push(Ie=e?null:[])}function ec(){fn.pop(),Ie=fn[fn.length-1]||null}let yn=1;function Ei(e){yn+=e}function ys(e){return e.dynamicChildren=yn>0?Ie||Dt:null,ec(),yn>0&&Ie&&Ie.push(e),e}function tc(e,t,n,r,a,i){return ys(Ct(e,t,n,r,a,i,!0))}function nc(e,t,n,r,a){return ys(we(e,t,n,r,a,!0))}function ta(e){return e?e.__v_isVNode===!0:!1}function tn(e,t){return e.type===t.type&&e.key===t.key}const wr="__vInternal",xs=({key:e})=>e??null,Qn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||he(e)||U(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function Ct(e,t=null,n=null,r=0,a=null,i=e===ze?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&xs(t),ref:t&&Qn(t),scopeId:br,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Pe};return s?(ja(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=se(n)?8:16),yn>0&&!o&&Ie&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ie.push(l),l}const we=rc;function rc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Lf)&&(e=bn),ta(e)){const s=Kt(e,t,!0);return n&&ja(s,n),yn>0&&!i&&Ie&&(s.shapeFlag&6?Ie[Ie.indexOf(e)]=s:Ie.push(s)),s.patchFlag|=-2,s}if(gc(e)&&(e=e.__vccOpts),t){t=ac(t);let{class:s,style:l}=t;s&&!se(s)&&(t.class=ka(s)),re(l)&&(Wo(l)&&!z(l)&&(l=ce({},l)),t.style=Ea(l))}const o=se(e)?1:yf(e)?128:Zf(e)?64:re(e)?4:U(e)?2:0;return Ct(e,t,n,r,a,o,i,!0)}function ac(e){return e?Wo(e)||wr in e?ce({},e):e:null}function Kt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?sc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&xs(s),ref:t&&t.ref?n&&a?z(a)?a.concat(Qn(t)):[a,Qn(t)]:Qn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ze?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ic(e=" ",t=0){return we(xr,null,e,t)}function oc(e,t){const n=we(Gn,null,e);return n.staticCount=t,n}function Be(e){return e==null||typeof e=="boolean"?we(bn):z(e)?we(ze,null,e.slice()):typeof e=="object"?st(e):we(xr,null,String(e))}function st(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function ja(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ja(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(wr in t)?t._ctx=Pe:a===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[ic(t)]):n=8);e.children=t,e.shapeFlag|=n}function sc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ka([t.class,r.class]));else if(a==="style")t.style=Ea([t.style,r.style]);else if(cr(a)){const i=t[a],o=r[a];o&&i!==o&&!(z(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function $e(e,t,n,r=null){Me(e,t,7,[n,r])}const lc=us();let fc=0;function cc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||lc,i={uid:fc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Al(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ms(r,a),emitsOptions:ns(r,a),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=df.bind(null,i),e.ce&&e.ce(i),i}let de=null,Da,Nt,ki="__VUE_INSTANCE_SETTERS__";(Nt=Kr()[ki])||(Nt=Kr()[ki]=[]),Nt.push(e=>de=e),Da=e=>{Nt.length>1?Nt.forEach(t=>t(e)):Nt[0](e)};const Wt=e=>{Da(e),e.scope.on()},At=()=>{de&&de.scope.off(),Da(null)};function ws(e){return e.vnode.shapeFlag&4}let xn=!1;function uc(e,t=!1){xn=t;const{props:n,children:r}=e.vnode,a=ws(e);Wf(e,n,a,t),Vf(e,r);const i=a?dc(e,t):void 0;return xn=!1,i}function dc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Yo(new Proxy(e.ctx,jf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?pc(e):null;Wt(e),Gt();const i=ct(r,e,0,[e.props,a]);if(Qt(),At(),Co(i)){if(i.then(At,At),t)return i.then(o=>{Ai(e,o,t)}).catch(o=>{gr(o,e,0)});e.asyncDep=i}else Ai(e,i,t)}else _s(e,t)}function Ai(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:re(t)&&(e.setupState=Go(t)),_s(e,n)}let Oi;function _s(e,t,n){const r=e.type;if(!e.render){if(!t&&Oi&&!r.render){const a=r.template||La(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=ce(ce({isCustomElement:i,delimiters:s},o),l);r.render=Oi(a,f)}}e.render=r.render||Ne}Wt(e),Gt(),Df(e),Qt(),At()}function mc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return _e(e,"get","$attrs"),t[n]}}))}function pc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return mc(e)},slots:e.slots,emit:e.emit,expose:t}}function _r(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Go(Yo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ln)return ln[n](e)},has(t,n){return n in t||n in ln}}))}function hc(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function gc(e){return U(e)&&"__vccOpts"in e}const ue=(e,t)=>of(e,t,xn);function $a(e,t,n){const r=arguments.length;return r===2?re(t)&&!z(t)?ta(t)?we(e,null,[t]):we(e,t):we(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ta(n)&&(n=[n]),we(e,t,n))}const vc=Symbol.for("v-scx"),bc=()=>Xe(vc),yc="3.3.4",xc="http://www.w3.org/2000/svg",yt=typeof document<"u"?document:null,Pi=yt&&yt.createElement("template"),wc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?yt.createElementNS(xc,e):yt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Pi.innerHTML=r?`<svg>${e}</svg>`:e;const s=Pi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function _c(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ec(e,t,n){const r=e.style,a=se(n);if(n&&!a){if(t&&!se(t))for(const i in t)n[i]==null&&na(r,i,"");for(const i in n)na(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ci=/\s*!important$/;function na(e,t,n){if(z(n))n.forEach(r=>na(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=kc(e,t);Ci.test(n)?e.setProperty(Xt(r),n.replace(Ci,""),"important"):e[r]=n}}const Si=["Webkit","Moz","ms"],Tr={};function kc(e,t){const n=Tr[t];if(n)return n;let r=Ke(t);if(r!=="filter"&&r in e)return Tr[t]=r;r=mr(r);for(let a=0;a<Si.length;a++){const i=Si[a]+r;if(i in e)return Tr[t]=i}return t}const Ri="http://www.w3.org/1999/xlink";function Ac(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ri,t.slice(6,t.length)):e.setAttributeNS(Ri,t,n);else{const i=kl(t);n==null||i&&!Io(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Oc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const f=s==="OPTION"?e.getAttribute("value"):e.value,c=n??"";f!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Io(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Mt(e,t,n,r){e.addEventListener(t,n,r)}function Pc(e,t,n,r){e.removeEventListener(t,n,r)}function Cc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Sc(t);if(r){const f=i[t]=Tc(r,a);Mt(e,s,f,l)}else o&&(Pc(e,s,o,l),i[t]=void 0)}}const Ii=/(?:Once|Passive|Capture)$/;function Sc(e){let t;if(Ii.test(e)){t={};let r;for(;r=e.match(Ii);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xt(e.slice(2)),t]}let Nr=0;const Rc=Promise.resolve(),Ic=()=>Nr||(Rc.then(()=>Nr=0),Nr=Date.now());function Tc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Me(Nc(r,n.value),t,5,[r])};return n.value=e,n.attached=Ic(),n}function Nc(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ti=/^on[a-z]/,Mc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?_c(e,r,a):t==="style"?Ec(e,n,r):cr(t)?ya(t)||Cc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lc(e,t,r,a))?Oc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ac(e,t,r,a))};function Lc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ti.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ti.test(t)&&se(n)?!1:t in e}const Ni=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>qn(t,n):t};function Fc(e){e.target.composing=!0}function Mi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const tp={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Ni(a);const i=r||a.props&&a.props.type==="number";Mt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Hr(s)),e._assign(s)}),n&&Mt(e,"change",()=>{e.value=e.value.trim()}),t||(Mt(e,"compositionstart",Fc),Mt(e,"compositionend",Mi),Mt(e,"change",Mi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Ni(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Hr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},jc=["ctrl","shift","alt","meta"],Dc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>jc.some(n=>e[`${n}Key`]&&!t.includes(n))},np=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=Dc[t[a]];if(i&&i(n,t))return}return e(n,...r)},$c=ce({patchProp:Mc},wc);let Li;function zc(){return Li||(Li=Gf($c))}const Bc=(...e)=>{const t=zc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Uc(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Uc(e){return se(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Lt=typeof window<"u";function Hc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function Mr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Le(a)?a.map(e):e(a)}return n}const cn=()=>{},Le=Array.isArray,Kc=/\/$/,Wc=e=>e.replace(Kc,"");function Lr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Xc(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Yc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Fi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function qc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Yt(t.matched[r],n.matched[a])&&Es(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Yt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Es(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Vc(e[n],t[n]))return!1;return!0}function Vc(e,t){return Le(e)?ji(e,t):Le(t)?ji(t,e):e===t}function ji(e,t){return Le(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Xc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var wn;(function(e){e.pop="pop",e.push="push"})(wn||(wn={}));var un;(function(e){e.back="back",e.forward="forward",e.unknown=""})(un||(un={}));function Gc(e){if(!e)if(Lt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Wc(e)}const Qc=/^[^#]+#/;function Jc(e,t){return e.replace(Qc,"#")+t}function Zc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Er=()=>({left:window.pageXOffset,top:window.pageYOffset});function eu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Zc(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Di(e,t){return(history.state?history.state.position-t:-1)+e}const ra=new Map;function tu(e,t){ra.set(e,t)}function nu(e){const t=ra.get(e);return ra.delete(e),t}let ru=()=>location.protocol+"//"+location.host;function ks(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Fi(l,"")}return Fi(n,e)+r+a}function au(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=ks(e,location),P=n.value,C=t.value;let F=0;if(p){if(n.value=g,t.value=p,o&&o===P){o=null;return}F=C?p.position-C.position:0}else r(g);a.forEach(x=>{x(n.value,P,{delta:F,type:wn.pop,direction:F?F>0?un.forward:un.back:un.unknown})})};function l(){o=n.value}function f(p){a.push(p);const g=()=>{const P=a.indexOf(p);P>-1&&a.splice(P,1)};return i.push(g),g}function c(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:Er()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:f,destroy:d}}function $i(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Er():null}}function iu(e){const{history:t,location:n}=window,r={value:ks(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:ru()+e+l;try{t[c?"replaceState":"pushState"](f,"",p),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](p)}}function o(l,f){const c=X({},t.state,$i(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=X({},a.value,t.state,{forward:l,scroll:Er()});i(c.current,c,!0);const d=X({},$i(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function ou(e){e=Gc(e);const t=iu(e),n=au(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=X({location:"",base:e,go:r,createHref:Jc.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function su(e){return typeof e=="string"||e&&typeof e=="object"}function As(e){return typeof e=="string"||typeof e=="symbol"}const it={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Os=Symbol("");var zi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(zi||(zi={}));function qt(e,t){return X(new Error,{type:e,[Os]:!0},t)}function Ye(e,t){return e instanceof Error&&Os in e&&(t==null||!!(e.type&t))}const Bi="[^/]+?",lu={sensitive:!1,strict:!1,start:!0,end:!0},fu=/[.+*?^${}()[\]/\\]/g;function cu(e,t){const n=X({},lu,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const p=f[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(fu,"\\$&"),g+=40;else if(p.type===1){const{value:P,repeatable:C,optional:F,regexp:x}=p;i.push({name:P,repeatable:C,optional:F});const w=x||Bi;if(w!==Bi){g+=10;try{new RegExp(`(${w})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${P}" (${w}): `+S.message)}}let L=C?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(L=F&&f.length<2?`(?:/${L})`:"/"+L),F&&(L+="?"),a+=L,g+=20,F&&(g+=-8),C&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let p=1;p<c.length;p++){const g=c[p]||"",P=i[p-1];d[P.name]=g&&P.repeatable?g.split("/"):g}return d}function l(f){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of p)if(g.type===0)c+=g.value;else if(g.type===1){const{value:P,repeatable:C,optional:F}=g,x=P in f?f[P]:"";if(Le(x)&&!C)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const w=Le(x)?x.join("/"):x;if(!w)if(F)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);c+=w}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function uu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function du(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=uu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Ui(r))return 1;if(Ui(a))return-1}return a.length-r.length}function Ui(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const mu={type:0,value:""},pu=/[a-zA-Z0-9_]/;function hu(e){if(!e)return[[]];if(e==="/")return[[mu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:pu.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function gu(e,t,n){const r=cu(hu(e.path),n),a=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function vu(e,t){const n=[],r=new Map;t=Wi({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,p){const g=!p,P=bu(c);P.aliasOf=p&&p.record;const C=Wi(t,c),F=[P];if("alias"in c){const L=typeof c.alias=="string"?[c.alias]:c.alias;for(const S of L)F.push(X({},P,{components:p?p.record.components:P.components,path:S,aliasOf:p?p.record:P}))}let x,w;for(const L of F){const{path:S}=L;if(d&&S[0]!=="/"){const H=d.record.path,J=H[H.length-1]==="/"?"":"/";L.path=d.record.path+(S&&J+S)}if(x=gu(L,d,C),p?p.alias.push(x):(w=w||x,w!==x&&w.alias.push(x),g&&c.name&&!Ki(x)&&o(c.name)),P.children){const H=P.children;for(let J=0;J<H.length;J++)i(H[J],x,p&&p.children[J])}p=p||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return w?()=>{o(w)}:cn}function o(c){if(As(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&du(c,n[d])>=0&&(c.record.path!==n[d].record.path||!Ps(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!Ki(c)&&r.set(c.record.name,c)}function f(c,d){let p,g={},P,C;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw qt(1,{location:c});C=p.record.name,g=X(Hi(d.params,p.keys.filter(w=>!w.optional).map(w=>w.name)),c.params&&Hi(c.params,p.keys.map(w=>w.name))),P=p.stringify(g)}else if("path"in c)P=c.path,p=n.find(w=>w.re.test(P)),p&&(g=p.parse(P),C=p.record.name);else{if(p=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!p)throw qt(1,{location:c,currentLocation:d});C=p.record.name,g=X({},d.params,c.params),P=p.stringify(g)}const F=[];let x=p;for(;x;)F.unshift(x.record),x=x.parent;return{name:C,path:P,params:g,matched:F,meta:xu(F)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Hi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function bu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:yu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function yu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ki(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function xu(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Wi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ps(e,t){return t.children.some(n=>n===e||Ps(e,n))}const Cs=/#/g,wu=/&/g,_u=/\//g,Eu=/=/g,ku=/\?/g,Ss=/\+/g,Au=/%5B/g,Ou=/%5D/g,Rs=/%5E/g,Pu=/%60/g,Is=/%7B/g,Cu=/%7C/g,Ts=/%7D/g,Su=/%20/g;function za(e){return encodeURI(""+e).replace(Cu,"|").replace(Au,"[").replace(Ou,"]")}function Ru(e){return za(e).replace(Is,"{").replace(Ts,"}").replace(Rs,"^")}function aa(e){return za(e).replace(Ss,"%2B").replace(Su,"+").replace(Cs,"%23").replace(wu,"%26").replace(Pu,"`").replace(Is,"{").replace(Ts,"}").replace(Rs,"^")}function Iu(e){return aa(e).replace(Eu,"%3D")}function Tu(e){return za(e).replace(Cs,"%23").replace(ku,"%3F")}function Nu(e){return e==null?"":Tu(e).replace(_u,"%2F")}function ir(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Mu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ss," "),o=i.indexOf("="),s=ir(o<0?i:i.slice(0,o)),l=o<0?null:ir(i.slice(o+1));if(s in t){let f=t[s];Le(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Yi(e){let t="";for(let n in e){const r=e[n];if(n=Iu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Le(r)?r.map(i=>i&&aa(i)):[r&&aa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Lu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Le(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Fu=Symbol(""),qi=Symbol(""),Ba=Symbol(""),Ns=Symbol(""),ia=Symbol("");function nn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function lt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(qt(4,{from:n,to:t})):d instanceof Error?s(d):su(d)?s(qt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Fr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(ju(s)){const f=(s.__vccOpts||s)[t];f&&a.push(lt(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Hc(f)?f.default:f;i.components[o]=c;const p=(c.__vccOpts||c)[t];return p&&lt(p,n,r,i,o)()}))}}return a}function ju(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Vi(e){const t=Xe(Ba),n=Xe(Ns),r=ue(()=>t.resolve(kt(e.to))),a=ue(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(Yt.bind(null,c));if(p>-1)return p;const g=Xi(l[f-2]);return f>1&&Xi(c)===g&&d[d.length-1].path!==g?d.findIndex(Yt.bind(null,l[f-2])):p}),i=ue(()=>a.value>-1&&Bu(n.params,r.value.params)),o=ue(()=>a.value>-1&&a.value===n.matched.length-1&&Es(n.params,r.value.params));function s(l={}){return zu(l)?t[kt(e.replace)?"replace":"push"](kt(e.to)).catch(cn):Promise.resolve()}return{route:r,href:ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Du=Ma({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vi,setup(e,{slots:t}){const n=hr(Vi(e)),{options:r}=Xe(Ba),a=ue(()=>({[Gi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:$a("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),$u=Du;function zu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Bu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Le(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Xi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Gi=(e,t,n)=>e??t??n,Uu=Ma({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Xe(ia),a=ue(()=>e.route||r.value),i=Xe(qi,0),o=ue(()=>{let f=kt(i);const{matched:c}=a.value;let d;for(;(d=c[f])&&!d.components;)f++;return f}),s=ue(()=>a.value.matched[o.value]);Xn(qi,ue(()=>o.value+1)),Xn(Fu,s),Xn(ia,a);const l=ef();return sn(()=>[l.value,s.value,e.name],([f,c,d],[p,g,P])=>{c&&(c.instances[d]=f,g&&g!==c&&f&&f===p&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Yt(c,g)||!p)&&(c.enterCallbacks[d]||[]).forEach(C=>C(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,d=s.value,p=d&&d.components[c];if(!p)return Qi(n.default,{Component:p,route:f});const g=d.props[c],P=g?g===!0?f.params:typeof g=="function"?g(f):g:null,F=$a(p,X({},P,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Qi(n.default,{Component:F,route:f})||F}}});function Qi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ms=Uu;function Hu(e){const t=vu(e.routes,e),n=e.parseQuery||Mu,r=e.stringifyQuery||Yi,a=e.history,i=nn(),o=nn(),s=nn(),l=tf(it);let f=it;Lt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Mr.bind(null,b=>""+b),d=Mr.bind(null,Nu),p=Mr.bind(null,ir);function g(b,T){let O,j;return As(b)?(O=t.getRecordMatcher(b),j=T):j=b,t.addRoute(j,O)}function P(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function C(){return t.getRoutes().map(b=>b.record)}function F(b){return!!t.getRecordMatcher(b)}function x(b,T){if(T=X({},T||l.value),typeof b=="string"){const h=Lr(n,b,T.path),v=t.resolve({path:h.path},T),y=a.createHref(h.fullPath);return X(h,v,{params:p(v.params),hash:ir(h.hash),redirectedFrom:void 0,href:y})}let O;if("path"in b)O=X({},b,{path:Lr(n,b.path,T.path).path});else{const h=X({},b.params);for(const v in h)h[v]==null&&delete h[v];O=X({},b,{params:d(h)}),T.params=d(T.params)}const j=t.resolve(O,T),V=b.hash||"";j.params=c(p(j.params));const u=Yc(r,X({},b,{hash:Ru(V),path:j.path})),m=a.createHref(u);return X({fullPath:u,hash:V,query:r===Yi?Lu(b.query):b.query||{}},j,{redirectedFrom:void 0,href:m})}function w(b){return typeof b=="string"?Lr(n,b,l.value.path):X({},b)}function L(b,T){if(f!==b)return qt(8,{from:T,to:b})}function S(b){return ae(b)}function H(b){return S(X(w(b),{replace:!0}))}function J(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let j=typeof O=="function"?O(b):O;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=w(j):{path:j},j.params={}),X({query:b.query,hash:b.hash,params:"path"in j?{}:b.params},j)}}function ae(b,T){const O=f=x(b),j=l.value,V=b.state,u=b.force,m=b.replace===!0,h=J(O);if(h)return ae(X(w(h),{state:typeof h=="object"?X({},V,h.state):V,force:u,replace:m}),T||O);const v=O;v.redirectedFrom=T;let y;return!u&&qc(r,j,O)&&(y=qt(16,{to:v,from:j}),je(j,j,!0,!1)),(y?Promise.resolve(y):Oe(v,j)).catch(_=>Ye(_)?Ye(_,2)?_:rt(_):q(_,v,j)).then(_=>{if(_){if(Ye(_,2))return ae(X({replace:m},w(_.to),{state:typeof _.to=="object"?X({},V,_.to.state):V,force:u}),T||v)}else _=ht(v,j,!0,m,V);return nt(v,j,_),_})}function Ee(b,T){const O=L(b,T);return O?Promise.reject(O):Promise.resolve()}function ge(b){const T=It.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Oe(b,T){let O;const[j,V,u]=Ku(b,T);O=Fr(j.reverse(),"beforeRouteLeave",b,T);for(const h of j)h.leaveGuards.forEach(v=>{O.push(lt(v,b,T))});const m=Ee.bind(null,b,T);return O.push(m),me(O).then(()=>{O=[];for(const h of i.list())O.push(lt(h,b,T));return O.push(m),me(O)}).then(()=>{O=Fr(V,"beforeRouteUpdate",b,T);for(const h of V)h.updateGuards.forEach(v=>{O.push(lt(v,b,T))});return O.push(m),me(O)}).then(()=>{O=[];for(const h of u)if(h.beforeEnter)if(Le(h.beforeEnter))for(const v of h.beforeEnter)O.push(lt(v,b,T));else O.push(lt(h.beforeEnter,b,T));return O.push(m),me(O)}).then(()=>(b.matched.forEach(h=>h.enterCallbacks={}),O=Fr(u,"beforeRouteEnter",b,T),O.push(m),me(O))).then(()=>{O=[];for(const h of o.list())O.push(lt(h,b,T));return O.push(m),me(O)}).catch(h=>Ye(h,8)?h:Promise.reject(h))}function nt(b,T,O){s.list().forEach(j=>ge(()=>j(b,T,O)))}function ht(b,T,O,j,V){const u=L(b,T);if(u)return u;const m=T===it,h=Lt?history.state:{};O&&(j||m?a.replace(b.fullPath,X({scroll:m&&h&&h.scroll},V)):a.push(b.fullPath,V)),l.value=b,je(b,T,O,m),rt()}let Fe;function Zt(){Fe||(Fe=a.listen((b,T,O)=>{if(!Rn.listening)return;const j=x(b),V=J(j);if(V){ae(X(V,{replace:!0}),j).catch(cn);return}f=j;const u=l.value;Lt&&tu(Di(u.fullPath,O.delta),Er()),Oe(j,u).catch(m=>Ye(m,12)?m:Ye(m,2)?(ae(m.to,j).then(h=>{Ye(h,20)&&!O.delta&&O.type===wn.pop&&a.go(-1,!1)}).catch(cn),Promise.reject()):(O.delta&&a.go(-O.delta,!1),q(m,j,u))).then(m=>{m=m||ht(j,u,!1),m&&(O.delta&&!Ye(m,8)?a.go(-O.delta,!1):O.type===wn.pop&&Ye(m,20)&&a.go(-1,!1)),nt(j,u,m)}).catch(cn)}))}let St=nn(),fe=nn(),Q;function q(b,T,O){rt(b);const j=fe.list();return j.length?j.forEach(V=>V(b,T,O)):console.error(b),Promise.reject(b)}function We(){return Q&&l.value!==it?Promise.resolve():new Promise((b,T)=>{St.add([b,T])})}function rt(b){return Q||(Q=!b,Zt(),St.list().forEach(([T,O])=>b?O(b):T()),St.reset()),b}function je(b,T,O,j){const{scrollBehavior:V}=e;if(!Lt||!V)return Promise.resolve();const u=!O&&nu(Di(b.fullPath,0))||(j||!O)&&history.state&&history.state.scroll||null;return Jo().then(()=>V(b,T,u)).then(m=>m&&eu(m)).catch(m=>q(m,b,T))}const be=b=>a.go(b);let Rt;const It=new Set,Rn={currentRoute:l,listening:!0,addRoute:g,removeRoute:P,hasRoute:F,getRoutes:C,resolve:x,options:e,push:S,replace:H,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:fe.add,isReady:We,install(b){const T=this;b.component("RouterLink",$u),b.component("RouterView",Ms),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>kt(l)}),Lt&&!Rt&&l.value===it&&(Rt=!0,S(a.location).catch(V=>{}));const O={};for(const V in it)Object.defineProperty(O,V,{get:()=>l.value[V],enumerable:!0});b.provide(Ba,T),b.provide(Ns,Ho(O)),b.provide(ia,l);const j=b.unmount;It.add(b),b.unmount=function(){It.delete(b),It.size<1&&(f=it,Fe&&Fe(),Fe=null,l.value=it,Rt=!1,Q=!1),j()}}};function me(b){return b.reduce((T,O)=>T.then(()=>ge(O)),Promise.resolve())}return Rn}function Ku(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Yt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Yt(f,l))||a.push(l))}return[n,r,a]}const Wu={__name:"App",setup(e){return(t,n)=>(bs(),nc(kt(Ms)))}},Yu="modulepreload",qu=function(e){return"/pictionIA/"+e},Ji={},jr=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=qu(i),i in Ji)return;Ji[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let c=a.length-1;c>=0;c--){const d=a[c];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":Yu,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((c,d)=>{f.addEventListener("load",c),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Vu="/pictionIA/assets/logo-91654010.svg",Xu="/pictionIA/assets/exemple-269f5dc8.png";const Gu=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Qu={},kr=e=>(mf("data-v-7365e28e"),e=e(),pf(),e),Ju={id:"topZone"},Zu=kr(()=>Ct("img",{src:Vu,id:"logo"},null,-1)),ed=kr(()=>Ct("br",null,null,-1)),td=kr(()=>Ct("button",{type:"button",class:"btn btn-info btn-lg mx-auto",id:"jouer"},"JOUER",-1)),nd=oc('<br data-v-7365e28e><div id="explication" data-v-7365e28e><div class="row" data-v-7365e28e><div class="col-lg-5 col-sm-12" id="explicationTexte" data-v-7365e28e><div id="explicationTexteContent" data-v-7365e28e><h1 data-v-7365e28e>Piction IA</h1><p data-v-7365e28e>Tente de découvrir les mots derrière l&#39;image que l&#39;IA a générée.</p></div></div><div class="col-lg-6 col-sm-12" data-v-7365e28e><img src="'+Xu+'" id="illustrationHome" data-v-7365e28e> <span class="response" data-v-7365e28e>*</span></div></div></div>',2),rd=kr(()=>Ct("p",{class:"response"},"* Exemple : rire comme une baleine",-1));function ad(e,t){const n=Mf("RouterLink");return bs(),tc(ze,null,[Ct("div",Ju,[Zu,ed,we(n,{to:"/question"},{default:rs(()=>[td]),_:1}),nd]),rd],64)}const id=Gu(Qu,[["render",ad],["__scopeId","data-v-7365e28e"]]),od=Hu({history:ou("/pictionIA"),routes:[{path:"/",name:"home",component:id},{path:"/question",name:"question",component:()=>jr(()=>import("./QuestionView-8a61935f.js"),["assets/QuestionView-8a61935f.js","assets/state-662e3508.js","assets/QuestionView-63c11188.css"])},{path:"/answer",name:"answer",component:()=>jr(()=>import("./AnswerView-9ffbb784.js"),["assets/AnswerView-9ffbb784.js","assets/state-662e3508.js","assets/AnswerView-9d2ae677.css"])},{path:"/result",name:"result",component:()=>jr(()=>import("./ResultView-e31e269a.js"),["assets/ResultView-e31e269a.js","assets/state-662e3508.js","assets/ResultView-b8061d6c.css"])},{path:"/:pathMatch(.*)*",redirect:"/"}]});function Zi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zi(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function or(e){"@babel/helpers - typeof";return or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},or(e)}function sd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function eo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ld(e,t,n){return t&&eo(e.prototype,t),n&&eo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ua(e,t){return cd(e)||dd(e,t)||Ls(e,t)||pd()}function Pn(e){return fd(e)||ud(e)||Ls(e)||md()}function fd(e){if(Array.isArray(e))return oa(e)}function cd(e){if(Array.isArray(e))return e}function ud(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function dd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ls(e,t){if(e){if(typeof e=="string")return oa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oa(e,t)}}function oa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function md(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var to=function(){},Ha={},Fs={},js=null,Ds={mark:to,measure:to};try{typeof window<"u"&&(Ha=window),typeof document<"u"&&(Fs=document),typeof MutationObserver<"u"&&(js=MutationObserver),typeof performance<"u"&&(Ds=performance)}catch{}var hd=Ha.navigator||{},no=hd.userAgent,ro=no===void 0?"":no,dt=Ha,ne=Fs,ao=js,jn=Ds;dt.document;var tt=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",$s=~ro.indexOf("MSIE")||~ro.indexOf("Trident/"),Dn,$n,zn,Bn,Un,Qe="___FONT_AWESOME___",sa=16,zs="fa",Bs="svg-inline--fa",Ot="data-fa-i2svg",la="data-fa-pseudo-element",gd="data-fa-pseudo-element-pending",Ka="data-prefix",Wa="data-icon",io="fontawesome-i2svg",vd="async",bd=["HTML","HEAD","STYLE","SCRIPT"],Us=function(){try{return!0}catch{return!1}}(),te="classic",ie="sharp",Ya=[te,ie];function Cn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[te]}})}var _n=Cn((Dn={},le(Dn,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),le(Dn,ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Dn)),En=Cn(($n={},le($n,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le($n,ie,{solid:"fass",regular:"fasr",light:"fasl"}),$n)),kn=Cn((zn={},le(zn,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(zn,ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),zn)),yd=Cn((Bn={},le(Bn,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(Bn,ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Bn)),xd=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Hs="fa-layers-text",wd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_d=Cn((Un={},le(Un,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(Un,ie,{900:"fass",400:"fasr",300:"fasl"}),Un)),Ks=[1,2,3,4,5,6,7,8,9,10],Ed=Ks.concat([11,12,13,14,15,16,17,18,19,20]),kd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},An=new Set;Object.keys(En[te]).map(An.add.bind(An));Object.keys(En[ie]).map(An.add.bind(An));var Ad=[].concat(Ya,Pn(An),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wt.GROUP,wt.SWAP_OPACITY,wt.PRIMARY,wt.SECONDARY]).concat(Ks.map(function(e){return"".concat(e,"x")})).concat(Ed.map(function(e){return"w-".concat(e)})),dn=dt.FontAwesomeConfig||{};function Od(e){var t=ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Pd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ne&&typeof ne.querySelector=="function"){var Cd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Cd.forEach(function(e){var t=Ua(e,2),n=t[0],r=t[1],a=Pd(Od(n));a!=null&&(dn[r]=a)})}var Ws={styleDefault:"solid",familyDefault:"classic",cssPrefix:zs,replacementClass:Bs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};dn.familyPrefix&&(dn.cssPrefix=dn.familyPrefix);var Vt=I(I({},Ws),dn);Vt.autoReplaceSvg||(Vt.observeMutations=!1);var M={};Object.keys(Ws).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Vt[e]=n,mn.forEach(function(r){return r(M)})},get:function(){return Vt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Vt.cssPrefix=t,mn.forEach(function(n){return n(M)})},get:function(){return Vt.cssPrefix}});dt.FontAwesomeConfig=M;var mn=[];function Sd(e){return mn.push(e),function(){mn.splice(mn.indexOf(e),1)}}var ot=sa,He={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Rd(e){if(!(!e||!tt)){var t=ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ne.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ne.head.insertBefore(t,r),e}}var Id="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function On(){for(var e=12,t="";e-- >0;)t+=Id[Math.random()*62|0];return t}function Jt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function qa(e){return e.classList?Jt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ys(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Td(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ys(e[n]),'" ')},"").trim()}function Ar(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Va(e){return e.size!==He.size||e.x!==He.x||e.y!==He.y||e.rotate!==He.rotate||e.flipX||e.flipY}function Nd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Md(e){var t=e.transform,n=e.width,r=n===void 0?sa:n,a=e.height,i=a===void 0?sa:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&$s?l+="translate(".concat(t.x/ot-r/2,"em, ").concat(t.y/ot-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ot,"em), calc(-50% + ").concat(t.y/ot,"em)) "):l+="translate(".concat(t.x/ot,"em, ").concat(t.y/ot,"em) "),l+="scale(".concat(t.size/ot*(t.flipX?-1:1),", ").concat(t.size/ot*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ld=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function qs(){var e=zs,t=Bs,n=M.cssPrefix,r=M.replacementClass,a=Ld;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var oo=!1;function Dr(){M.autoAddCss&&!oo&&(Rd(qs()),oo=!0)}var Fd={mixout:function(){return{dom:{css:qs,insertCss:Dr}}},hooks:function(){return{beforeDOMElementCreation:function(){Dr()},beforeI2svg:function(){Dr()}}}},Je=dt||{};Je[Qe]||(Je[Qe]={});Je[Qe].styles||(Je[Qe].styles={});Je[Qe].hooks||(Je[Qe].hooks={});Je[Qe].shims||(Je[Qe].shims=[]);var Te=Je[Qe],Vs=[],jd=function e(){ne.removeEventListener("DOMContentLoaded",e),sr=1,Vs.map(function(t){return t()})},sr=!1;tt&&(sr=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),sr||ne.addEventListener("DOMContentLoaded",jd));function Dd(e){tt&&(sr?setTimeout(e,0):Vs.push(e))}function Sn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ys(e):"<".concat(t," ").concat(Td(r),">").concat(i.map(Sn).join(""),"</").concat(t,">")}function so(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var $d=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},$r=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?$d(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function zd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function fa(e){var t=zd(e);return t.length===1?t[0].toString(16):null}function Bd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function lo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ca(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=lo(t);typeof Te.hooks.addPack=="function"&&!a?Te.hooks.addPack(e,lo(t)):Te.styles[e]=I(I({},Te.styles[e]||{}),i),e==="fas"&&ca("fa",t)}var Hn,Kn,Wn,Ft=Te.styles,Ud=Te.shims,Hd=(Hn={},le(Hn,te,Object.values(kn[te])),le(Hn,ie,Object.values(kn[ie])),Hn),Xa=null,Xs={},Gs={},Qs={},Js={},Zs={},Kd=(Kn={},le(Kn,te,Object.keys(_n[te])),le(Kn,ie,Object.keys(_n[ie])),Kn);function Wd(e){return~Ad.indexOf(e)}function Yd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Wd(a)?a:null}var el=function(){var t=function(i){return $r(Ft,function(o,s,l){return o[l]=$r(s,i,{}),o},{})};Xs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Gs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Zs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ft||M.autoFetchSvg,r=$r(Ud,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Qs=r.names,Js=r.unicodes,Xa=Or(M.styleDefault,{family:M.familyDefault})};Sd(function(e){Xa=Or(e.styleDefault,{family:M.familyDefault})});el();function Ga(e,t){return(Xs[e]||{})[t]}function qd(e,t){return(Gs[e]||{})[t]}function _t(e,t){return(Zs[e]||{})[t]}function tl(e){return Qs[e]||{prefix:null,iconName:null}}function Vd(e){var t=Js[e],n=Ga("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function mt(){return Xa}var Qa=function(){return{prefix:null,iconName:null,rest:[]}};function Or(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?te:n,a=_n[r][e],i=En[r][e]||En[r][a],o=e in Te.styles?e:null;return i||o||null}var fo=(Wn={},le(Wn,te,Object.keys(kn[te])),le(Wn,ie,Object.keys(kn[ie])),Wn);function Pr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},le(t,te,"".concat(M.cssPrefix,"-").concat(te)),le(t,ie,"".concat(M.cssPrefix,"-").concat(ie)),t),o=null,s=te;(e.includes(i[te])||e.some(function(f){return fo[te].includes(f)}))&&(s=te),(e.includes(i[ie])||e.some(function(f){return fo[ie].includes(f)}))&&(s=ie);var l=e.reduce(function(f,c){var d=Yd(M.cssPrefix,c);if(Ft[c]?(c=Hd[s].includes(c)?yd[s][c]:c,o=c,f.prefix=c):Kd[s].indexOf(c)>-1?(o=c,f.prefix=Or(c,{family:s})):d?f.iconName=d:c!==M.replacementClass&&c!==i[te]&&c!==i[ie]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=o==="fa"?tl(f.iconName):{},g=_t(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Ft.far&&Ft.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},Qa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ie&&(Ft.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=_t(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=mt()||"fas"),l}var Xd=function(){function e(){sd(this,e),this.definitions={}}return ld(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),ca(s,o[s]);var l=kn[te][s];l&&ca(l,o[s]),el()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),co=[],jt={},Ut={},Gd=Object.keys(Ut);function Qd(e,t){var n=t.mixoutsTo;return co=e,jt={},Object.keys(Ut).forEach(function(r){Gd.indexOf(r)===-1&&delete Ut[r]}),co.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),or(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){jt[o]||(jt[o]=[]),jt[o].push(i[o])})}r.provides&&r.provides(Ut)}),n}function ua(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=jt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=jt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ut[e]?Ut[e].apply(null,t):void 0}function da(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||mt();if(t)return t=_t(n,t)||t,so(nl.definitions,n,t)||so(Te.styles,n,t)}var nl=new Xd,Jd=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Pt("noAuto")},Zd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tt?(Pt("beforeI2svg",t),Ze("pseudoElements2svg",t),Ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Dd(function(){tm({autoReplaceSvgRoot:n}),Pt("watch",t)})}},em={icon:function(t){if(t===null)return null;if(or(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:_t(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Or(t[0]);return{prefix:r,iconName:_t(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(xd))){var a=Pr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||mt(),iconName:_t(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=mt();return{prefix:i,iconName:_t(i,t)||t}}}},Ae={noAuto:Jd,config:M,dom:Zd,parse:em,library:nl,findIconDefinition:da,toHtml:Sn},tm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(Te.styles).length>0||M.autoFetchSvg)&&tt&&M.autoReplaceSvg&&Ae.dom.i2svg({node:r})};function Cr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Sn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(tt){var r=ne.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function nm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Va(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Ar(I(I({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function rm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function Ja(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,P=r.found?r:n,C=P.width,F=P.height,x=a==="fak",w=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(ge){return d.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(d.classes).join(" "),L={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(F)})},S=x&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/F*16*.0625,"em")}:{};g&&(L.attributes[Ot]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(c||On())},children:[l]}),delete L.attributes.title);var H=I(I({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},S),d.styles)}),J=r.found&&n.found?Ze("generateAbstractMask",H)||{children:[],attributes:{}}:Ze("generateAbstractIcon",H)||{children:[],attributes:{}},ae=J.children,Ee=J.attributes;return H.children=ae,H.attributes=Ee,s?rm(H):nm(H)}function uo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Ot]="");var c=I({},o.styles);Va(a)&&(c.transform=Md({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Ar(c);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function am(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ar(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var zr=Te.styles;function ma(e){var t=e[0],n=e[1],r=e.slice(4),a=Ua(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(wt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(wt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(wt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var im={found:!1,width:512,height:512};function om(e,t){!Us&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function pa(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=mt()),new Promise(function(r,a){if(Ze("missingIconAbstract"),n==="fa"){var i=tl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&zr[t]&&zr[t][e]){var o=zr[t][e];return r(ma(o))}om(e,t),r(I(I({},im),{},{icon:M.showMissingIcons&&e?Ze("missingIconAbstract")||{}:{}}))})}var mo=function(){},ha=M.measurePerformance&&jn&&jn.mark&&jn.measure?jn:{mark:mo,measure:mo},on='FA "6.4.0"',sm=function(t){return ha.mark("".concat(on," ").concat(t," begins")),function(){return rl(t)}},rl=function(t){ha.mark("".concat(on," ").concat(t," ends")),ha.measure("".concat(on," ").concat(t),"".concat(on," ").concat(t," begins"),"".concat(on," ").concat(t," ends"))},Za={begin:sm,end:rl},Jn=function(){};function po(e){var t=e.getAttribute?e.getAttribute(Ot):null;return typeof t=="string"}function lm(e){var t=e.getAttribute?e.getAttribute(Ka):null,n=e.getAttribute?e.getAttribute(Wa):null;return t&&n}function fm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function cm(){if(M.autoReplaceSvg===!0)return Zn.replace;var e=Zn[M.autoReplaceSvg];return e||Zn.replace}function um(e){return ne.createElementNS("http://www.w3.org/2000/svg",e)}function dm(e){return ne.createElement(e)}function al(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?um:dm:n;if(typeof e=="string")return ne.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(al(o,{ceFn:r}))}),a}function mm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Zn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(al(a),n)}),n.getAttribute(Ot)===null&&M.keepOriginalSource){var r=ne.createComment(mm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~qa(n).indexOf(M.replacementClass))return Zn.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Sn(s)}).join(`
`);n.setAttribute(Ot,""),n.innerHTML=o}};function ho(e){e()}function il(e,t){var n=typeof t=="function"?t:Jn;if(e.length===0)n();else{var r=ho;M.mutateApproach===vd&&(r=dt.requestAnimationFrame||ho),r(function(){var a=cm(),i=Za.begin("mutate");e.map(a),i(),n()})}}var ei=!1;function ol(){ei=!0}function ga(){ei=!1}var lr=null;function go(e){if(ao&&M.observeMutations){var t=e.treeCallback,n=t===void 0?Jn:t,r=e.nodeCallback,a=r===void 0?Jn:r,i=e.pseudoElementsCallback,o=i===void 0?Jn:i,s=e.observeMutationsRoot,l=s===void 0?ne:s;lr=new ao(function(f){if(!ei){var c=mt();Jt(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!po(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&po(d.target)&&~kd.indexOf(d.attributeName))if(d.attributeName==="class"&&lm(d.target)){var p=Pr(qa(d.target)),g=p.prefix,P=p.iconName;d.target.setAttribute(Ka,g||c),P&&d.target.setAttribute(Wa,P)}else fm(d.target)&&a(d.target)})}}),tt&&lr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function pm(){lr&&lr.disconnect()}function hm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function gm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Pr(qa(e));return a.prefix||(a.prefix=mt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=qd(a.prefix,e.innerText)||Ga(a.prefix,fa(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function vm(e){var t=Jt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||On()):(t["aria-hidden"]="true",t.focusable="false")),t}function bm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:He,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=gm(e),r=n.iconName,a=n.prefix,i=n.rest,o=vm(e),s=ua("parseNodeAttributes",{},e),l=t.styleParser?hm(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:He,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ym=Te.styles;function sl(e){var t=M.autoReplaceSvg==="nest"?vo(e,{styleParser:!1}):vo(e);return~t.extra.classes.indexOf(Hs)?Ze("generateLayersText",e,t):Ze("generateSvgReplacementMutation",e,t)}var pt=new Set;Ya.map(function(e){pt.add("fa-".concat(e))});Object.keys(_n[te]).map(pt.add.bind(pt));Object.keys(_n[ie]).map(pt.add.bind(pt));pt=Pn(pt);function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tt)return Promise.resolve();var n=ne.documentElement.classList,r=function(d){return n.add("".concat(io,"-").concat(d))},a=function(d){return n.remove("".concat(io,"-").concat(d))},i=M.autoFetchSvg?pt:Ya.map(function(c){return"fa-".concat(c)}).concat(Object.keys(ym));i.includes("fa")||i.push("fa");var o=[".".concat(Hs,":not([").concat(Ot,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Ot,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Jt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Za.begin("onTree"),f=s.reduce(function(c,d){try{var p=sl(d);p&&c.push(p)}catch(g){Us||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(p){il(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function xm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sl(e).then(function(n){n&&il([n],t)})}function wm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:da(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:da(a||{})),e(r,I(I({},n),{},{mask:a}))}}var _m=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?He:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,p=d===void 0?null:d,g=n.titleId,P=g===void 0?null:g,C=n.classes,F=C===void 0?[]:C,x=n.attributes,w=x===void 0?{}:x,L=n.styles,S=L===void 0?{}:L;if(t){var H=t.prefix,J=t.iconName,ae=t.icon;return Cr(I({type:"icon"},t),function(){return Pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(P||On()):(w["aria-hidden"]="true",w.focusable="false")),Ja({icons:{main:ma(ae),mask:l?ma(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:J,transform:I(I({},He),a),symbol:o,title:p,maskId:c,titleId:P,extra:{attributes:w,styles:S,classes:F}})})}},Em={mixout:function(){return{icon:wm(_m)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=bo,n.nodeCallback=xm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ne:r,i=n.callback,o=i===void 0?function(){}:i;return bo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,P){Promise.all([pa(a,s),c.iconName?pa(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var F=Ua(C,2),x=F[0],w=F[1];g([n,Ja({icons:{main:x,mask:w},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ar(s);l.length>0&&(a.style=l);var f;return Va(o)&&(f=Ze("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},km={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Cr({type:"layer"},function(){Pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Pn(i)).join(" ")},children:o}]})}}}},Am={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Cr({type:"counter",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),am({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Pn(s))}})})}}}},Om={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?He:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Cr({type:"text",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),uo({content:n,transform:I(I({},He),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Pn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if($s){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,uo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Pm=new RegExp('"',"ug"),yo=[1105920,1112319];function Cm(e){var t=e.replace(Pm,""),n=Bd(t,0),r=n>=yo[0]&&n<=yo[1],a=t.length===2?t[0]===t[1]:!1;return{value:fa(a?t[0]:t),isSecondary:r||a}}function xo(e,t){var n="".concat(gd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Jt(e.children),o=i.filter(function(ae){return ae.getAttribute(la)===t})[0],s=dt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(wd),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ie:te,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?En[p][l[2].toLowerCase()]:_d[p][f],P=Cm(d),C=P.value,F=P.isSecondary,x=l[0].startsWith("FontAwesome"),w=Ga(g,C),L=w;if(x){var S=Vd(C);S.iconName&&S.prefix&&(w=S.iconName,g=S.prefix)}if(w&&!F&&(!o||o.getAttribute(Ka)!==g||o.getAttribute(Wa)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var H=bm(),J=H.extra;J.attributes[la]=t,pa(w,g).then(function(ae){var Ee=Ja(I(I({},H),{},{icons:{main:ae,mask:Qa()},prefix:g,iconName:L,extra:J,watchable:!0})),ge=ne.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=Ee.map(function(Oe){return Sn(Oe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Sm(e){return Promise.all([xo(e,"::before"),xo(e,"::after")])}function Rm(e){return e.parentNode!==document.head&&!~bd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(la)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function wo(e){if(tt)return new Promise(function(t,n){var r=Jt(e.querySelectorAll("*")).filter(Rm).map(Sm),a=Za.begin("searchPseudoElements");ol(),Promise.all(r).then(function(){a(),ga(),t()}).catch(function(){a(),ga(),n()})})}var Im={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=wo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ne:r;M.searchPseudoElements&&wo(a)}}},_o=!1,Tm={mixout:function(){return{dom:{unwatch:function(){ol(),_o=!0}}}},hooks:function(){return{bootstrap:function(){go(ua("mutationObserverCallbacks",{}))},noAuto:function(){pm()},watch:function(n){var r=n.observeMutationsRoot;_o?ga():go(ua("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Eo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Nm={mixout:function(){return{parse:{transform:function(n){return Eo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Eo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Br={x:0,y:0,width:"100%",height:"100%"};function ko(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Mm(e){return e.tag==="g"?e.children:[e]}var Lm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Pr(a.split(" ").map(function(o){return o.trim()})):Qa();return i.prefix||(i.prefix=mt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,p=o.icon,g=Nd({transform:l,containerWidth:d,iconWidth:f}),P={tag:"rect",attributes:I(I({},Br),{},{fill:"white"})},C=c.children?{children:c.children.map(ko)}:{},F={tag:"g",attributes:I({},g.inner),children:[ko(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},C))]},x={tag:"g",attributes:I({},g.outer),children:[F]},w="mask-".concat(s||On()),L="clip-".concat(s||On()),S={tag:"mask",attributes:I(I({},Br),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,x]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Mm(p)},S]};return r.push(H,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(w,")")},Br)}),{children:r,attributes:a}}}},Fm={provides:function(t){var n=!1;dt.matchMedia&&(n=dt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},jm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Dm=[Fd,Em,km,Am,Om,Im,Tm,Nm,Lm,Fm,jm];Qd(Dm,{mixoutsTo:Ae});Ae.noAuto;Ae.config;var ll=Ae.library;Ae.dom;var va=Ae.parse;Ae.findIconDefinition;Ae.toHtml;var $m=Ae.icon;Ae.layer;Ae.text;Ae.counter;function Ao(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ao(Object(n),!0).forEach(function(r){ye(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ao(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fr(e){"@babel/helpers - typeof";return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Bm(e,t){if(e==null)return{};var n=zm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Um=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fl={exports:{}};(function(e){(function(t){var n=function(x,w,L){if(!f(w)||d(w)||p(w)||g(w)||l(w))return w;var S,H=0,J=0;if(c(w))for(S=[],J=w.length;H<J;H++)S.push(n(x,w[H],L));else{S={};for(var ae in w)Object.prototype.hasOwnProperty.call(w,ae)&&(S[x(ae,L)]=n(x,w[ae],L))}return S},r=function(x,w){w=w||{};var L=w.separator||"_",S=w.split||/(?=[A-Z])/;return x.split(S).join(L)},a=function(x){return P(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(w,L){return L?L.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var w=a(x);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(x,w){return r(x,w).toLowerCase()},s=Object.prototype.toString,l=function(x){return typeof x=="function"},f=function(x){return x===Object(x)},c=function(x){return s.call(x)=="[object Array]"},d=function(x){return s.call(x)=="[object Date]"},p=function(x){return s.call(x)=="[object RegExp]"},g=function(x){return s.call(x)=="[object Boolean]"},P=function(x){return x=x-0,x===x},C=function(x,w){var L=w&&"process"in w?w.process:w;return typeof L!="function"?x:function(S,H){return L(S,x,H)}},F={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,w){return n(C(a,w),x)},decamelizeKeys:function(x,w){return n(C(o,w),x,w)},pascalizeKeys:function(x,w){return n(C(i,w),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(Um)})(fl);var Hm=fl.exports,Km=["class","style"];function Wm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Hm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Ym(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function cl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return cl(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Ym(c);break;case"style":l.style=Wm(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Bm(n,Km);return $a(e.tag,Ve(Ve(Ve({},t),{},{class:a.class,style:Ve(Ve({},a.style),o)},a.attrs),s),r)}var ul=!1;try{ul=!0}catch{}function qm(){if(!ul&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ur(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ye({},e,t):{}}function Vm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ye(t,"fa-".concat(e.size),e.size!==null),ye(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ye(t,"fa-pull-".concat(e.pull),e.pull!==null),ye(t,"fa-swap-opacity",e.swapOpacity),ye(t,"fa-bounce",e.bounce),ye(t,"fa-shake",e.shake),ye(t,"fa-beat",e.beat),ye(t,"fa-fade",e.fade),ye(t,"fa-beat-fade",e.beatFade),ye(t,"fa-flash",e.flash),ye(t,"fa-spin-pulse",e.spinPulse),ye(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Oo(e){if(e&&fr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(va.icon)return va.icon(e);if(e===null)return null;if(fr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Xm=Ma({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ue(function(){return Oo(t.icon)}),i=ue(function(){return Ur("classes",Vm(t))}),o=ue(function(){return Ur("transform",typeof t.transform=="string"?va.transform(t.transform):t.transform)}),s=ue(function(){return Ur("mask",Oo(t.mask))}),l=ue(function(){return $m(a.value,Ve(Ve(Ve(Ve({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});sn(l,function(c){if(!c)return qm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ue(function(){return l.value?cl(l.value.abstract[0],{},r):null});return function(){return f.value}}}),Gm={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Qm={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};ll.add(Gm);ll.add(Qm);const dl=Bc(Wu);dl.use(od).component("font-awesome-icon",Xm);dl.mount("#app");export{ze as F,Gu as _,Ct as a,Zm as b,tc as c,pf as d,Vu as e,ep as f,we as g,rs as h,ic as i,hr as j,ka as n,bs as o,mf as p,Mf as r,Jm as t,tp as v,np as w};
