function Sk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ck(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pu={},Tk={get exports(){return Pu},set exports(t){Pu=t}},Vc={},P={},Ik={get exports(){return P},set exports(t){P=t}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=Symbol.for("react.element"),kk=Symbol.for("react.portal"),Rk=Symbol.for("react.fragment"),Nk=Symbol.for("react.strict_mode"),Ak=Symbol.for("react.profiler"),Dk=Symbol.for("react.provider"),Pk=Symbol.for("react.context"),xk=Symbol.for("react.forward_ref"),Ok=Symbol.for("react.suspense"),Mk=Symbol.for("react.memo"),Lk=Symbol.for("react.lazy"),Fy=Symbol.iterator;function bk(t){return t===null||typeof t!="object"?null:(t=Fy&&t[Fy]||t["@@iterator"],typeof t=="function"?t:null)}var mw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gw=Object.assign,yw={};function eo(t,e,n){this.props=t,this.context=e,this.refs=yw,this.updater=n||mw}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vw(){}vw.prototype=eo.prototype;function Xp(t,e,n){this.props=t,this.context=e,this.refs=yw,this.updater=n||mw}var Jp=Xp.prototype=new vw;Jp.constructor=Xp;gw(Jp,eo.prototype);Jp.isPureReactComponent=!0;var $y=Array.isArray,_w=Object.prototype.hasOwnProperty,Zp={current:null},ww={key:!0,ref:!0,__self:!0,__source:!0};function Ew(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_w.call(e,r)&&!ww.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:nl,type:t,key:s,ref:o,props:i,_owner:Zp.current}}function Fk(t,e){return{$$typeof:nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function em(t){return typeof t=="object"&&t!==null&&t.$$typeof===nl}function $k(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uy=/\/+/g;function Jh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$k(""+t.key):e.toString(36)}function hu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case nl:case kk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Jh(o,0):r,$y(i)?(n="",t!=null&&(n=t.replace(Uy,"$&/")+"/"),hu(i,e,n,"",function(u){return u})):i!=null&&(em(i)&&(i=Fk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Uy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$y(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Jh(s,a);o+=hu(s,e,n,l,i)}else if(l=bk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Jh(s,a++),o+=hu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ll(t,e,n){if(t==null)return t;var r=[],i=0;return hu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Uk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xt={current:null},du={transition:null},Vk={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:du,ReactCurrentOwner:Zp};te.Children={map:Ll,forEach:function(t,e,n){Ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ll(t,function(){e++}),e},toArray:function(t){return Ll(t,function(e){return e})||[]},only:function(t){if(!em(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=eo;te.Fragment=Rk;te.Profiler=Ak;te.PureComponent=Xp;te.StrictMode=Nk;te.Suspense=Ok;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vk;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_w.call(e,l)&&!ww.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:nl,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:Pk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Dk,_context:t},t.Consumer=t};te.createElement=Ew;te.createFactory=function(t){var e=Ew.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:xk,render:t}};te.isValidElement=em;te.lazy=function(t){return{$$typeof:Lk,_payload:{_status:-1,_result:t},_init:Uk}};te.memo=function(t,e){return{$$typeof:Mk,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=du.transition;du.transition={};try{t()}finally{du.transition=e}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(t,e){return xt.current.useCallback(t,e)};te.useContext=function(t){return xt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return xt.current.useDeferredValue(t)};te.useEffect=function(t,e){return xt.current.useEffect(t,e)};te.useId=function(){return xt.current.useId()};te.useImperativeHandle=function(t,e,n){return xt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return xt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return xt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return xt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return xt.current.useReducer(t,e,n)};te.useRef=function(t){return xt.current.useRef(t)};te.useState=function(t){return xt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return xt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return xt.current.useTransition()};te.version="18.2.0";(function(t){t.exports=te})(Ik);const Sw=Ck(P),rf=Sk({__proto__:null,default:Sw},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zk=P,Bk=Symbol.for("react.element"),jk=Symbol.for("react.fragment"),Wk=Object.prototype.hasOwnProperty,Hk=zk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kk={key:!0,ref:!0,__self:!0,__source:!0};function Cw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Wk.call(e,r)&&!Kk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Bk,type:t,key:s,ref:o,props:i,_owner:Hk.current}}Vc.Fragment=jk;Vc.jsx=Cw;Vc.jsxs=Cw;(function(t){t.exports=Vc})(Tk);const ye=Pu.jsx,Zi=Pu.jsxs;var sf={},of={},qk={get exports(){return of},set exports(t){of=t}},Kt={},af={},Gk={get exports(){return af},set exports(t){af=t}},Tw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,Y){var V=M.length;M.push(Y);e:for(;0<V;){var ge=V-1>>>1,Le=M[ge];if(0<i(Le,Y))M[ge]=Y,M[V]=Le,V=ge;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var Y=M[0],V=M.pop();if(V!==Y){M[0]=V;e:for(var ge=0,Le=M.length,Ki=Le>>>1;ge<Ki;){var ht=2*(ge+1)-1,So=M[ht],Bn=ht+1,ni=M[Bn];if(0>i(So,V))Bn<Le&&0>i(ni,So)?(M[ge]=ni,M[Bn]=V,ge=Bn):(M[ge]=So,M[ht]=V,ge=ht);else if(Bn<Le&&0>i(ni,V))M[ge]=ni,M[Bn]=V,ge=Bn;else break e}}return Y}function i(M,Y){var V=M.sortIndex-Y.sortIndex;return V!==0?V:M.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,v=!1,_=!1,y=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(M){for(var Y=n(u);Y!==null;){if(Y.callback===null)r(u);else if(Y.startTime<=M)r(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function w(M){if(_=!1,m(M),!v)if(n(l)!==null)v=!0,ti(C);else{var Y=n(u);Y!==null&&Eo(w,Y.startTime-M)}}function C(M,Y){v=!1,_&&(_=!1,p(A),A=-1),g=!0;var V=d;try{for(m(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||M&&!tt());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,d=h.priorityLevel;var Le=ge(h.expirationTime<=Y);Y=t.unstable_now(),typeof Le=="function"?h.callback=Le:h===n(l)&&r(l),m(Y)}else r(l);h=n(l)}if(h!==null)var Ki=!0;else{var ht=n(u);ht!==null&&Eo(w,ht.startTime-Y),Ki=!1}return Ki}finally{h=null,d=V,g=!1}}var N=!1,D=null,A=-1,ue=5,Q=-1;function tt(){return!(t.unstable_now()-Q<ue)}function Tn(){if(D!==null){var M=t.unstable_now();Q=M;var Y=!0;try{Y=D(!0,M)}finally{Y?Gt():(N=!1,D=null)}}else N=!1}var Gt;if(typeof f=="function")Gt=function(){f(Tn)};else if(typeof MessageChannel<"u"){var In=new MessageChannel,kn=In.port2;In.port1.onmessage=Tn,Gt=function(){kn.postMessage(null)}}else Gt=function(){y(Tn,0)};function ti(M){D=M,N||(N=!0,Gt())}function Eo(M,Y){A=y(function(){M(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,ti(C))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var V=d;d=Y;try{return M()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,Y){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var V=d;d=M;try{return Y()}finally{d=V}},t.unstable_scheduleCallback=function(M,Y,V){var ge=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ge+V:ge):V=ge,M){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=V+Le,M={id:c++,callback:Y,priorityLevel:M,startTime:V,expirationTime:Le,sortIndex:-1},V>ge?(M.sortIndex=V,e(u,M),n(l)===null&&M===n(u)&&(_?(p(A),A=-1):_=!0,Eo(w,V-ge))):(M.sortIndex=Le,e(l,M),v||g||(v=!0,ti(C))),M},t.unstable_shouldYield=tt,t.unstable_wrapCallback=function(M){var Y=d;return function(){var V=d;d=Y;try{return M.apply(this,arguments)}finally{d=V}}}})(Tw);(function(t){t.exports=Tw})(Gk);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iw=P,Wt=af;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kw=new Set,_a={};function $i(t,e){Ls(t,e),Ls(t+"Capture",e)}function Ls(t,e){for(_a[t]=e,t=0;t<e.length;t++)kw.add(e[t])}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=Object.prototype.hasOwnProperty,Qk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vy={},zy={};function Yk(t){return lf.call(zy,t)?!0:lf.call(Vy,t)?!1:Qk.test(t)?zy[t]=!0:(Vy[t]=!0,!1)}function Xk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jk(t,e,n,r){if(e===null||typeof e>"u"||Xk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var tm=/[\-:]([a-z])/g;function nm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tm,nm);ut[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tm,nm);ut[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tm,nm);ut[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function rm(t,e,n,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jk(e,n,i,r)&&(n=null),r||i===null?Yk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var dr=Iw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bl=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),uf=Symbol.for("react.profiler"),Rw=Symbol.for("react.provider"),Nw=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),cf=Symbol.for("react.suspense"),hf=Symbol.for("react.suspense_list"),om=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),Aw=Symbol.for("react.offscreen"),By=Symbol.iterator;function No(t){return t===null||typeof t!="object"?null:(t=By&&t[By]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,Zh;function Wo(t){if(Zh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zh=e&&e[1]||""}return`
`+Zh+t}var ed=!1;function td(t,e){if(!t||ed)return"";ed=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ed=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wo(t):""}function Zk(t){switch(t.tag){case 5:return Wo(t.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return t=td(t.type,!1),t;case 11:return t=td(t.type.render,!1),t;case 1:return t=td(t.type,!0),t;default:return""}}function df(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case uf:return"Profiler";case im:return"StrictMode";case cf:return"Suspense";case hf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Nw:return(t.displayName||"Context")+".Consumer";case Rw:return(t._context.displayName||"Context")+".Provider";case sm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case om:return e=t.displayName||null,e!==null?e:df(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return df(t(e))}catch{}}return null}function eR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return df(e);case 8:return e===im?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tR(t){var e=Dw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fl(t){t._valueTracker||(t._valueTracker=tR(t))}function Pw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Dw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ff(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xw(t,e){e=e.checked,e!=null&&rm(t,"checked",e,!1)}function pf(t,e){xw(t,e);var n=jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mf(t,e.type,n):e.hasOwnProperty("defaultValue")&&mf(t,e.type,jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mf(t,e,n){(e!=="number"||xu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ho=Array.isArray;function _s(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Ho(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jr(n)}}function Ow(t,e){var n=jr(e.value),r=jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ky(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $l,Lw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($l=$l||document.createElement("div"),$l.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$l.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nR=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(t){nR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ea[e]=ea[t]})});function bw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ea.hasOwnProperty(t)&&ea[t]?(""+e).trim():e+"px"}function Fw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rR=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vf(t,e){if(e){if(rR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function _f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wf=null;function am(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ef=null,ws=null,Es=null;function qy(t){if(t=sl(t)){if(typeof Ef!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Hc(e),Ef(t.stateNode,t.type,e))}}function $w(t){ws?Es?Es.push(t):Es=[t]:ws=t}function Uw(){if(ws){var t=ws,e=Es;if(Es=ws=null,qy(t),e)for(t=0;t<e.length;t++)qy(e[t])}}function Vw(t,e){return t(e)}function zw(){}var nd=!1;function Bw(t,e,n){if(nd)return t(e,n);nd=!0;try{return Vw(t,e,n)}finally{nd=!1,(ws!==null||Es!==null)&&(zw(),Uw())}}function Ea(t,e){var n=t.stateNode;if(n===null)return null;var r=Hc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Sf=!1;if(nr)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{Sf=!1}function iR(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ta=!1,Ou=null,Mu=!1,Cf=null,sR={onError:function(t){ta=!0,Ou=t}};function oR(t,e,n,r,i,s,o,a,l){ta=!1,Ou=null,iR.apply(sR,arguments)}function aR(t,e,n,r,i,s,o,a,l){if(oR.apply(this,arguments),ta){if(ta){var u=Ou;ta=!1,Ou=null}else throw Error(k(198));Mu||(Mu=!0,Cf=u)}}function Ui(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gy(t){if(Ui(t)!==t)throw Error(k(188))}function lR(t){var e=t.alternate;if(!e){if(e=Ui(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gy(i),t;if(s===r)return Gy(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Ww(t){return t=lR(t),t!==null?Hw(t):null}function Hw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hw(t);if(e!==null)return e;t=t.sibling}return null}var Kw=Wt.unstable_scheduleCallback,Qy=Wt.unstable_cancelCallback,uR=Wt.unstable_shouldYield,cR=Wt.unstable_requestPaint,be=Wt.unstable_now,hR=Wt.unstable_getCurrentPriorityLevel,lm=Wt.unstable_ImmediatePriority,qw=Wt.unstable_UserBlockingPriority,Lu=Wt.unstable_NormalPriority,dR=Wt.unstable_LowPriority,Gw=Wt.unstable_IdlePriority,zc=null,Mn=null;function fR(t){if(Mn&&typeof Mn.onCommitFiberRoot=="function")try{Mn.onCommitFiberRoot(zc,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:gR,pR=Math.log,mR=Math.LN2;function gR(t){return t>>>=0,t===0?32:31-(pR(t)/mR|0)|0}var Ul=64,Vl=4194304;function Ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ko(a):(s&=o,s!==0&&(r=Ko(s)))}else o=n&~i,o!==0?r=Ko(o):s!==0&&(r=Ko(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function yR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=yR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qw(){var t=Ul;return Ul<<=1,!(Ul&4194240)&&(Ul=64),t}function rd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function rl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function _R(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function um(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function Yw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Xw,cm,Jw,Zw,eE,If=!1,zl=[],Ar=null,Dr=null,Pr=null,Sa=new Map,Ca=new Map,wr=[],wR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yy(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function Do(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=sl(e),e!==null&&cm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ER(t,e,n,r,i){switch(e){case"focusin":return Ar=Do(Ar,t,e,n,r,i),!0;case"dragenter":return Dr=Do(Dr,t,e,n,r,i),!0;case"mouseover":return Pr=Do(Pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Sa.set(s,Do(Sa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ca.set(s,Do(Ca.get(s)||null,t,e,n,r,i)),!0}return!1}function tE(t){var e=ui(t.target);if(e!==null){var n=Ui(e);if(n!==null){if(e=n.tag,e===13){if(e=jw(n),e!==null){t.blockedOn=e,eE(t.priority,function(){Jw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wf=r,n.target.dispatchEvent(r),wf=null}else return e=sl(n),e!==null&&cm(e),t.blockedOn=n,!1;e.shift()}return!0}function Xy(t,e,n){fu(t)&&n.delete(e)}function SR(){If=!1,Ar!==null&&fu(Ar)&&(Ar=null),Dr!==null&&fu(Dr)&&(Dr=null),Pr!==null&&fu(Pr)&&(Pr=null),Sa.forEach(Xy),Ca.forEach(Xy)}function Po(t,e){t.blockedOn===e&&(t.blockedOn=null,If||(If=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,SR)))}function Ta(t){function e(i){return Po(i,t)}if(0<zl.length){Po(zl[0],t);for(var n=1;n<zl.length;n++){var r=zl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ar!==null&&Po(Ar,t),Dr!==null&&Po(Dr,t),Pr!==null&&Po(Pr,t),Sa.forEach(e),Ca.forEach(e),n=0;n<wr.length;n++)r=wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)tE(n),n.blockedOn===null&&wr.shift()}var Ss=dr.ReactCurrentBatchConfig,Fu=!0;function CR(t,e,n,r){var i=fe,s=Ss.transition;Ss.transition=null;try{fe=1,hm(t,e,n,r)}finally{fe=i,Ss.transition=s}}function TR(t,e,n,r){var i=fe,s=Ss.transition;Ss.transition=null;try{fe=4,hm(t,e,n,r)}finally{fe=i,Ss.transition=s}}function hm(t,e,n,r){if(Fu){var i=kf(t,e,n,r);if(i===null)fd(t,e,r,$u,n),Yy(t,r);else if(ER(i,t,e,n,r))r.stopPropagation();else if(Yy(t,r),e&4&&-1<wR.indexOf(t)){for(;i!==null;){var s=sl(i);if(s!==null&&Xw(s),s=kf(t,e,n,r),s===null&&fd(t,e,r,$u,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fd(t,e,r,null,n)}}var $u=null;function kf(t,e,n,r){if($u=null,t=am(r),t=ui(t),t!==null)if(e=Ui(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $u=t,null}function nE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hR()){case lm:return 1;case qw:return 4;case Lu:case dR:return 16;case Gw:return 536870912;default:return 16}default:return 16}}var kr=null,dm=null,pu=null;function rE(){if(pu)return pu;var t,e=dm,n=e.length,r,i="value"in kr?kr.value:kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return pu=i.slice(t,1<r?1-r:void 0)}function mu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bl(){return!0}function Jy(){return!1}function qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bl:Jy,this.isPropagationStopped=Jy,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fm=qt(to),il=Pe({},to,{view:0,detail:0}),IR=qt(il),id,sd,xo,Bc=Pe({},il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(id=t.screenX-xo.screenX,sd=t.screenY-xo.screenY):sd=id=0,xo=t),id)},movementY:function(t){return"movementY"in t?t.movementY:sd}}),Zy=qt(Bc),kR=Pe({},Bc,{dataTransfer:0}),RR=qt(kR),NR=Pe({},il,{relatedTarget:0}),od=qt(NR),AR=Pe({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),DR=qt(AR),PR=Pe({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xR=qt(PR),OR=Pe({},to,{data:0}),ev=qt(OR),MR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bR[t])?!!e[t]:!1}function pm(){return FR}var $R=Pe({},il,{key:function(t){if(t.key){var e=MR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pm,charCode:function(t){return t.type==="keypress"?mu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),UR=qt($R),VR=Pe({},Bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tv=qt(VR),zR=Pe({},il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pm}),BR=qt(zR),jR=Pe({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),WR=qt(jR),HR=Pe({},Bc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KR=qt(HR),qR=[9,13,27,32],mm=nr&&"CompositionEvent"in window,na=null;nr&&"documentMode"in document&&(na=document.documentMode);var GR=nr&&"TextEvent"in window&&!na,iE=nr&&(!mm||na&&8<na&&11>=na),nv=String.fromCharCode(32),rv=!1;function sE(t,e){switch(t){case"keyup":return qR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function QR(t,e){switch(t){case"compositionend":return oE(e);case"keypress":return e.which!==32?null:(rv=!0,nv);case"textInput":return t=e.data,t===nv&&rv?null:t;default:return null}}function YR(t,e){if(ns)return t==="compositionend"||!mm&&sE(t,e)?(t=rE(),pu=dm=kr=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iE&&e.locale!=="ko"?null:e.data;default:return null}}var XR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XR[t.type]:e==="textarea"}function aE(t,e,n,r){$w(r),e=Uu(e,"onChange"),0<e.length&&(n=new fm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ra=null,Ia=null;function JR(t){vE(t,0)}function jc(t){var e=ss(t);if(Pw(e))return t}function ZR(t,e){if(t==="change")return e}var lE=!1;if(nr){var ad;if(nr){var ld="oninput"in document;if(!ld){var sv=document.createElement("div");sv.setAttribute("oninput","return;"),ld=typeof sv.oninput=="function"}ad=ld}else ad=!1;lE=ad&&(!document.documentMode||9<document.documentMode)}function ov(){ra&&(ra.detachEvent("onpropertychange",uE),Ia=ra=null)}function uE(t){if(t.propertyName==="value"&&jc(Ia)){var e=[];aE(e,Ia,t,am(t)),Bw(JR,e)}}function eN(t,e,n){t==="focusin"?(ov(),ra=e,Ia=n,ra.attachEvent("onpropertychange",uE)):t==="focusout"&&ov()}function tN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jc(Ia)}function nN(t,e){if(t==="click")return jc(e)}function rN(t,e){if(t==="input"||t==="change")return jc(e)}function iN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:iN;function ka(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lf.call(e,i)||!wn(t[i],e[i]))return!1}return!0}function av(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lv(t,e){var n=av(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=av(n)}}function cE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hE(){for(var t=window,e=xu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xu(t.document)}return e}function gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sN(t){var e=hE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cE(n.ownerDocument.documentElement,n)){if(r!==null&&gm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lv(n,s);var o=lv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oN=nr&&"documentMode"in document&&11>=document.documentMode,rs=null,Rf=null,ia=null,Nf=!1;function uv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nf||rs==null||rs!==xu(r)||(r=rs,"selectionStart"in r&&gm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ia&&ka(ia,r)||(ia=r,r=Uu(Rf,"onSelect"),0<r.length&&(e=new fm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=rs)))}function jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},ud={},dE={};nr&&(dE=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Wc(t){if(ud[t])return ud[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dE)return ud[t]=e[n];return t}var fE=Wc("animationend"),pE=Wc("animationiteration"),mE=Wc("animationstart"),gE=Wc("transitionend"),yE=new Map,cv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(t,e){yE.set(t,e),$i(e,[t])}for(var cd=0;cd<cv.length;cd++){var hd=cv[cd],aN=hd.toLowerCase(),lN=hd[0].toUpperCase()+hd.slice(1);Yr(aN,"on"+lN)}Yr(fE,"onAnimationEnd");Yr(pE,"onAnimationIteration");Yr(mE,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(gE,"onTransitionEnd");Ls("onMouseEnter",["mouseout","mouseover"]);Ls("onMouseLeave",["mouseout","mouseover"]);Ls("onPointerEnter",["pointerout","pointerover"]);Ls("onPointerLeave",["pointerout","pointerover"]);$i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$i("onBeforeInput",["compositionend","keypress","textInput","paste"]);$i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uN=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function hv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aR(r,e,void 0,t),t.currentTarget=null}function vE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;hv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;hv(i,a,u),s=l}}}if(Mu)throw t=Cf,Mu=!1,Cf=null,t}function we(t,e){var n=e[Of];n===void 0&&(n=e[Of]=new Set);var r=t+"__bubble";n.has(r)||(_E(e,t,2,!1),n.add(r))}function dd(t,e,n){var r=0;e&&(r|=4),_E(n,t,r,e)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function Ra(t){if(!t[Wl]){t[Wl]=!0,kw.forEach(function(n){n!=="selectionchange"&&(uN.has(n)||dd(n,!1,t),dd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wl]||(e[Wl]=!0,dd("selectionchange",!1,e))}}function _E(t,e,n,r){switch(nE(e)){case 1:var i=CR;break;case 4:i=TR;break;default:i=hm}n=i.bind(null,e,n,t),i=void 0,!Sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ui(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Bw(function(){var u=s,c=am(n),h=[];e:{var d=yE.get(t);if(d!==void 0){var g=fm,v=t;switch(t){case"keypress":if(mu(n)===0)break e;case"keydown":case"keyup":g=UR;break;case"focusin":v="focus",g=od;break;case"focusout":v="blur",g=od;break;case"beforeblur":case"afterblur":g=od;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Zy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=RR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=BR;break;case fE:case pE:case mE:g=DR;break;case gE:g=WR;break;case"scroll":g=IR;break;case"wheel":g=KR;break;case"copy":case"cut":case"paste":g=xR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=tv}var _=(e&4)!==0,y=!_&&t==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Ea(f,p),w!=null&&_.push(Na(f,w,m)))),y)break;f=f.return}0<_.length&&(d=new g(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==wf&&(v=n.relatedTarget||n.fromElement)&&(ui(v)||v[rr]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?ui(v):null,v!==null&&(y=Ui(v),v!==y||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(_=Zy,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=tv,w="onPointerLeave",p="onPointerEnter",f="pointer"),y=g==null?d:ss(g),m=v==null?d:ss(v),d=new _(w,f+"leave",g,n,c),d.target=y,d.relatedTarget=m,w=null,ui(c)===u&&(_=new _(p,f+"enter",v,n,c),_.target=m,_.relatedTarget=y,w=_),y=w,g&&v)t:{for(_=g,p=v,f=0,m=_;m;m=Gi(m))f++;for(m=0,w=p;w;w=Gi(w))m++;for(;0<f-m;)_=Gi(_),f--;for(;0<m-f;)p=Gi(p),m--;for(;f--;){if(_===p||p!==null&&_===p.alternate)break t;_=Gi(_),p=Gi(p)}_=null}else _=null;g!==null&&dv(h,d,g,_,!1),v!==null&&y!==null&&dv(h,y,v,_,!0)}}e:{if(d=u?ss(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var C=ZR;else if(iv(d))if(lE)C=rN;else{C=tN;var N=eN}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=nN);if(C&&(C=C(t,u))){aE(h,C,n,c);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&mf(d,"number",d.value)}switch(N=u?ss(u):window,t){case"focusin":(iv(N)||N.contentEditable==="true")&&(rs=N,Rf=u,ia=null);break;case"focusout":ia=Rf=rs=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,uv(h,n,c);break;case"selectionchange":if(oN)break;case"keydown":case"keyup":uv(h,n,c)}var D;if(mm)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else ns?sE(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(iE&&n.locale!=="ko"&&(ns||A!=="onCompositionStart"?A==="onCompositionEnd"&&ns&&(D=rE()):(kr=c,dm="value"in kr?kr.value:kr.textContent,ns=!0)),N=Uu(u,A),0<N.length&&(A=new ev(A,t,null,n,c),h.push({event:A,listeners:N}),D?A.data=D:(D=oE(n),D!==null&&(A.data=D)))),(D=GR?QR(t,n):YR(t,n))&&(u=Uu(u,"onBeforeInput"),0<u.length&&(c=new ev("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=D))}vE(h,e)})}function Na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ea(t,n),s!=null&&r.unshift(Na(t,s,i)),s=Ea(t,e),s!=null&&r.push(Na(t,s,i))),t=t.return}return r}function Gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ea(n,s),l!=null&&o.unshift(Na(n,l,a))):i||(l=Ea(n,s),l!=null&&o.push(Na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cN=/\r\n?/g,hN=/\u0000|\uFFFD/g;function fv(t){return(typeof t=="string"?t:""+t).replace(cN,`
`).replace(hN,"")}function Hl(t,e,n){if(e=fv(e),fv(t)!==e&&n)throw Error(k(425))}function Vu(){}var Af=null,Df=null;function Pf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xf=typeof setTimeout=="function"?setTimeout:void 0,dN=typeof clearTimeout=="function"?clearTimeout:void 0,pv=typeof Promise=="function"?Promise:void 0,fN=typeof queueMicrotask=="function"?queueMicrotask:typeof pv<"u"?function(t){return pv.resolve(null).then(t).catch(pN)}:xf;function pN(t){setTimeout(function(){throw t})}function pd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ta(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ta(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),Dn="__reactFiber$"+no,Aa="__reactProps$"+no,rr="__reactContainer$"+no,Of="__reactEvents$"+no,mN="__reactListeners$"+no,gN="__reactHandles$"+no;function ui(t){var e=t[Dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[rr]||n[Dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mv(t);t!==null;){if(n=t[Dn])return n;t=mv(t)}return e}t=n,n=t.parentNode}return null}function sl(t){return t=t[Dn]||t[rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Hc(t){return t[Aa]||null}var Mf=[],os=-1;function Xr(t){return{current:t}}function Te(t){0>os||(t.current=Mf[os],Mf[os]=null,os--)}function _e(t,e){os++,Mf[os]=t.current,t.current=e}var Wr={},kt=Xr(Wr),Ft=Xr(!1),Si=Wr;function bs(t,e){var n=t.type.contextTypes;if(!n)return Wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function zu(){Te(Ft),Te(kt)}function gv(t,e,n){if(kt.current!==Wr)throw Error(k(168));_e(kt,e),_e(Ft,n)}function wE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,eR(t)||"Unknown",i));return Pe({},n,r)}function Bu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wr,Si=kt.current,_e(kt,t),_e(Ft,Ft.current),!0}function yv(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=wE(t,e,Si),r.__reactInternalMemoizedMergedChildContext=t,Te(Ft),Te(kt),_e(kt,t)):Te(Ft),_e(Ft,n)}var Kn=null,Kc=!1,md=!1;function EE(t){Kn===null?Kn=[t]:Kn.push(t)}function yN(t){Kc=!0,EE(t)}function Jr(){if(!md&&Kn!==null){md=!0;var t=0,e=fe;try{var n=Kn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kn=null,Kc=!1}catch(i){throw Kn!==null&&(Kn=Kn.slice(t+1)),Kw(lm,Jr),i}finally{fe=e,md=!1}}return null}var as=[],ls=0,ju=null,Wu=0,Qt=[],Yt=0,Ci=null,qn=1,Gn="";function ii(t,e){as[ls++]=Wu,as[ls++]=ju,ju=t,Wu=e}function SE(t,e,n){Qt[Yt++]=qn,Qt[Yt++]=Gn,Qt[Yt++]=Ci,Ci=t;var r=qn;t=Gn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qn=1<<32-yn(e)+i|n<<i|r,Gn=s+t}else qn=1<<s|n<<i|r,Gn=t}function ym(t){t.return!==null&&(ii(t,1),SE(t,1,0))}function vm(t){for(;t===ju;)ju=as[--ls],as[ls]=null,Wu=as[--ls],as[ls]=null;for(;t===Ci;)Ci=Qt[--Yt],Qt[Yt]=null,Gn=Qt[--Yt],Qt[Yt]=null,qn=Qt[--Yt],Qt[Yt]=null}var Bt=null,zt=null,Re=!1,fn=null;function CE(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,zt=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ci!==null?{id:qn,overflow:Gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,zt=null,!0):!1;default:return!1}}function Lf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bf(t){if(Re){var e=zt;if(e){var n=e;if(!vv(t,e)){if(Lf(t))throw Error(k(418));e=xr(n.nextSibling);var r=Bt;e&&vv(t,e)?CE(r,n):(t.flags=t.flags&-4097|2,Re=!1,Bt=t)}}else{if(Lf(t))throw Error(k(418));t.flags=t.flags&-4097|2,Re=!1,Bt=t}}}function _v(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function Kl(t){if(t!==Bt)return!1;if(!Re)return _v(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pf(t.type,t.memoizedProps)),e&&(e=zt)){if(Lf(t))throw TE(),Error(k(418));for(;e;)CE(t,e),e=xr(e.nextSibling)}if(_v(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Bt?xr(t.stateNode.nextSibling):null;return!0}function TE(){for(var t=zt;t;)t=xr(t.nextSibling)}function Fs(){zt=Bt=null,Re=!1}function _m(t){fn===null?fn=[t]:fn.push(t)}var vN=dr.ReactCurrentBatchConfig;function hn(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Hu=Xr(null),Ku=null,us=null,wm=null;function Em(){wm=us=Ku=null}function Sm(t){var e=Hu.current;Te(Hu),t._currentValue=e}function Ff(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Cs(t,e){Ku=t,wm=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Lt=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(wm!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(Ku===null)throw Error(k(308));us=t,Ku.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var ci=null;function Cm(t){ci===null?ci=[t]:ci.push(t)}function IE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cm(e)):(n.next=i.next,i.next=n),e.interleaved=n,ir(t,r)}function ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function Tm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ir(t,n)}return i=r.interleaved,i===null?(e.next=e,Cm(r)):(e.next=i.next,i.next=e),r.interleaved=e,ir(t,n)}function gu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,um(t,n)}}function wv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qu(t,e,n,r){var i=t.updateQueue;_r=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,g=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(g,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(g,h,d):v,d==null)break e;h=Pe({},h,d);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ii|=o,t.lanes=o,t.memoizedState=h}}function Ev(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var RE=new Iw.Component().refs;function $f(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qc={isMounted:function(t){return(t=t._reactInternals)?Ui(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Lr(t),s=er(r,i);s.payload=e,n!=null&&(s.callback=n),e=Or(t,s,i),e!==null&&(vn(e,t,i,r),gu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Lr(t),s=er(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Or(t,s,i),e!==null&&(vn(e,t,i,r),gu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=Lr(t),i=er(n,r);i.tag=2,e!=null&&(i.callback=e),e=Or(t,i,r),e!==null&&(vn(e,t,r,n),gu(e,t,r))}};function Sv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ka(n,r)||!ka(i,s):!0}function NE(t,e,n){var r=!1,i=Wr,s=e.contextType;return typeof s=="object"&&s!==null?s=rn(s):(i=$t(e)?Si:kt.current,r=e.contextTypes,s=(r=r!=null)?bs(t,i):Wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Cv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qc.enqueueReplaceState(e,e.state,null)}function Uf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=RE,Tm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rn(s):(s=$t(e)?Si:kt.current,i.context=bs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($f(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&qc.enqueueReplaceState(i,i.state,null),qu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===RE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function ql(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tv(t){var e=t._init;return e(t._payload)}function AE(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=br(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=Sd(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var C=m.type;return C===ts?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===vr&&Tv(C)===f.type)?(w=i(f,m.props),w.ref=Oo(p,f,m),w.return=p,w):(w=Su(m.type,m.key,m.props,null,p.mode,w),w.ref=Oo(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Cd(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,C){return f===null||f.tag!==7?(f=vi(m,p.mode,w,C),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Sd(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case bl:return m=Su(f.type,f.key,f.props,null,p.mode,m),m.ref=Oo(p,null,f),m.return=p,m;case es:return f=Cd(f,p.mode,m),f.return=p,f;case vr:var w=f._init;return h(p,w(f._payload),m)}if(Ho(f)||No(f))return f=vi(f,p.mode,m,null),f.return=p,f;ql(p,f)}return null}function d(p,f,m,w){var C=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case bl:return m.key===C?l(p,f,m,w):null;case es:return m.key===C?u(p,f,m,w):null;case vr:return C=m._init,d(p,f,C(m._payload),w)}if(Ho(m)||No(m))return C!==null?null:c(p,f,m,w,null);ql(p,m)}return null}function g(p,f,m,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case bl:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,C);case es:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,C);case vr:var N=w._init;return g(p,f,m,N(w._payload),C)}if(Ho(w)||No(w))return p=p.get(m)||null,c(f,p,w,C,null);ql(f,w)}return null}function v(p,f,m,w){for(var C=null,N=null,D=f,A=f=0,ue=null;D!==null&&A<m.length;A++){D.index>A?(ue=D,D=null):ue=D.sibling;var Q=d(p,D,m[A],w);if(Q===null){D===null&&(D=ue);break}t&&D&&Q.alternate===null&&e(p,D),f=s(Q,f,A),N===null?C=Q:N.sibling=Q,N=Q,D=ue}if(A===m.length)return n(p,D),Re&&ii(p,A),C;if(D===null){for(;A<m.length;A++)D=h(p,m[A],w),D!==null&&(f=s(D,f,A),N===null?C=D:N.sibling=D,N=D);return Re&&ii(p,A),C}for(D=r(p,D);A<m.length;A++)ue=g(D,p,A,m[A],w),ue!==null&&(t&&ue.alternate!==null&&D.delete(ue.key===null?A:ue.key),f=s(ue,f,A),N===null?C=ue:N.sibling=ue,N=ue);return t&&D.forEach(function(tt){return e(p,tt)}),Re&&ii(p,A),C}function _(p,f,m,w){var C=No(m);if(typeof C!="function")throw Error(k(150));if(m=C.call(m),m==null)throw Error(k(151));for(var N=C=null,D=f,A=f=0,ue=null,Q=m.next();D!==null&&!Q.done;A++,Q=m.next()){D.index>A?(ue=D,D=null):ue=D.sibling;var tt=d(p,D,Q.value,w);if(tt===null){D===null&&(D=ue);break}t&&D&&tt.alternate===null&&e(p,D),f=s(tt,f,A),N===null?C=tt:N.sibling=tt,N=tt,D=ue}if(Q.done)return n(p,D),Re&&ii(p,A),C;if(D===null){for(;!Q.done;A++,Q=m.next())Q=h(p,Q.value,w),Q!==null&&(f=s(Q,f,A),N===null?C=Q:N.sibling=Q,N=Q);return Re&&ii(p,A),C}for(D=r(p,D);!Q.done;A++,Q=m.next())Q=g(D,p,A,Q.value,w),Q!==null&&(t&&Q.alternate!==null&&D.delete(Q.key===null?A:Q.key),f=s(Q,f,A),N===null?C=Q:N.sibling=Q,N=Q);return t&&D.forEach(function(Tn){return e(p,Tn)}),Re&&ii(p,A),C}function y(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===ts&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case bl:e:{for(var C=m.key,N=f;N!==null;){if(N.key===C){if(C=m.type,C===ts){if(N.tag===7){n(p,N.sibling),f=i(N,m.props.children),f.return=p,p=f;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===vr&&Tv(C)===N.type){n(p,N.sibling),f=i(N,m.props),f.ref=Oo(p,N,m),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===ts?(f=vi(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Su(m.type,m.key,m.props,null,p.mode,w),w.ref=Oo(p,f,m),w.return=p,p=w)}return o(p);case es:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Cd(m,p.mode,w),f.return=p,p=f}return o(p);case vr:return N=m._init,y(p,f,N(m._payload),w)}if(Ho(m))return v(p,f,m,w);if(No(m))return _(p,f,m,w);ql(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Sd(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return y}var $s=AE(!0),DE=AE(!1),ol={},Ln=Xr(ol),Da=Xr(ol),Pa=Xr(ol);function hi(t){if(t===ol)throw Error(k(174));return t}function Im(t,e){switch(_e(Pa,e),_e(Da,t),_e(Ln,ol),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yf(e,t)}Te(Ln),_e(Ln,e)}function Us(){Te(Ln),Te(Da),Te(Pa)}function PE(t){hi(Pa.current);var e=hi(Ln.current),n=yf(e,t.type);e!==n&&(_e(Da,t),_e(Ln,n))}function km(t){Da.current===t&&(Te(Ln),Te(Da))}var Ae=Xr(0);function Gu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gd=[];function Rm(){for(var t=0;t<gd.length;t++)gd[t]._workInProgressVersionPrimary=null;gd.length=0}var yu=dr.ReactCurrentDispatcher,yd=dr.ReactCurrentBatchConfig,Ti=0,De=null,je=null,Qe=null,Qu=!1,sa=!1,xa=0,_N=0;function ft(){throw Error(k(321))}function Nm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function Am(t,e,n,r,i,s){if(Ti=s,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yu.current=t===null||t.memoizedState===null?CN:TN,t=n(r,i),sa){s=0;do{if(sa=!1,xa=0,25<=s)throw Error(k(301));s+=1,Qe=je=null,e.updateQueue=null,yu.current=IN,t=n(r,i)}while(sa)}if(yu.current=Yu,e=je!==null&&je.next!==null,Ti=0,Qe=je=De=null,Qu=!1,e)throw Error(k(300));return t}function Dm(){var t=xa!==0;return xa=0,t}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?De.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function sn(){if(je===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=Qe===null?De.memoizedState:Qe.next;if(e!==null)Qe=e,je=t;else{if(t===null)throw Error(k(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Qe===null?De.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function Oa(t,e){return typeof e=="function"?e(t):e}function vd(t){var e=sn(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ti&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,De.lanes|=c,Ii|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,wn(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,De.lanes|=s,Ii|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _d(t){var e=sn(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);wn(s,e.memoizedState)||(Lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function xE(){}function OE(t,e){var n=De,r=sn(),i=e(),s=!wn(r.memoizedState,i);if(s&&(r.memoizedState=i,Lt=!0),r=r.queue,Pm(bE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,Ma(9,LE.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(k(349));Ti&30||ME(n,e,i)}return i}function ME(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function LE(t,e,n,r){e.value=n,e.getSnapshot=r,FE(e)&&$E(t)}function bE(t,e,n){return n(function(){FE(e)&&$E(t)})}function FE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function $E(t){var e=ir(t,1);e!==null&&vn(e,t,1,-1)}function Iv(t){var e=Nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},e.queue=t,t=t.dispatch=SN.bind(null,De,t),[e.memoizedState,t]}function Ma(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function UE(){return sn().memoizedState}function vu(t,e,n,r){var i=Nn();De.flags|=t,i.memoizedState=Ma(1|e,n,void 0,r===void 0?null:r)}function Gc(t,e,n,r){var i=sn();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&Nm(r,o.deps)){i.memoizedState=Ma(e,n,s,r);return}}De.flags|=t,i.memoizedState=Ma(1|e,n,s,r)}function kv(t,e){return vu(8390656,8,t,e)}function Pm(t,e){return Gc(2048,8,t,e)}function VE(t,e){return Gc(4,2,t,e)}function zE(t,e){return Gc(4,4,t,e)}function BE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jE(t,e,n){return n=n!=null?n.concat([t]):null,Gc(4,4,BE.bind(null,e,t),n)}function xm(){}function WE(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function HE(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function KE(t,e,n){return Ti&21?(wn(n,e)||(n=Qw(),De.lanes|=n,Ii|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=n)}function wN(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=yd.transition;yd.transition={};try{t(!1),e()}finally{fe=n,yd.transition=r}}function qE(){return sn().memoizedState}function EN(t,e,n){var r=Lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},GE(t))QE(e,n);else if(n=IE(t,e,n,r),n!==null){var i=Pt();vn(n,t,r,i),YE(n,e,r)}}function SN(t,e,n){var r=Lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(GE(t))QE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wn(a,o)){var l=e.interleaved;l===null?(i.next=i,Cm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=IE(t,e,i,r),n!==null&&(i=Pt(),vn(n,t,r,i),YE(n,e,r))}}function GE(t){var e=t.alternate;return t===De||e!==null&&e===De}function QE(t,e){sa=Qu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function YE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,um(t,n)}}var Yu={readContext:rn,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},CN={readContext:rn,useCallback:function(t,e){return Nn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:kv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vu(4194308,4,BE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vu(4194308,4,t,e)},useInsertionEffect:function(t,e){return vu(4,2,t,e)},useMemo:function(t,e){var n=Nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=EN.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=Nn();return t={current:t},e.memoizedState=t},useState:Iv,useDebugValue:xm,useDeferredValue:function(t){return Nn().memoizedState=t},useTransition:function(){var t=Iv(!1),e=t[0];return t=wN.bind(null,t[1]),Nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=Nn();if(Re){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Je===null)throw Error(k(349));Ti&30||ME(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,kv(bE.bind(null,r,s,t),[t]),r.flags|=2048,Ma(9,LE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Nn(),e=Je.identifierPrefix;if(Re){var n=Gn,r=qn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_N++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TN={readContext:rn,useCallback:WE,useContext:rn,useEffect:Pm,useImperativeHandle:jE,useInsertionEffect:VE,useLayoutEffect:zE,useMemo:HE,useReducer:vd,useRef:UE,useState:function(){return vd(Oa)},useDebugValue:xm,useDeferredValue:function(t){var e=sn();return KE(e,je.memoizedState,t)},useTransition:function(){var t=vd(Oa)[0],e=sn().memoizedState;return[t,e]},useMutableSource:xE,useSyncExternalStore:OE,useId:qE,unstable_isNewReconciler:!1},IN={readContext:rn,useCallback:WE,useContext:rn,useEffect:Pm,useImperativeHandle:jE,useInsertionEffect:VE,useLayoutEffect:zE,useMemo:HE,useReducer:_d,useRef:UE,useState:function(){return _d(Oa)},useDebugValue:xm,useDeferredValue:function(t){var e=sn();return je===null?e.memoizedState=t:KE(e,je.memoizedState,t)},useTransition:function(){var t=_d(Oa)[0],e=sn().memoizedState;return[t,e]},useMutableSource:xE,useSyncExternalStore:OE,useId:qE,unstable_isNewReconciler:!1};function Vs(t,e){try{var n="",r=e;do n+=Zk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function wd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kN=typeof WeakMap=="function"?WeakMap:Map;function XE(t,e,n){n=er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ju||(Ju=!0,Yf=r),Vf(t,e)},n}function JE(t,e,n){n=er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Vf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vf(t,e),typeof r!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=VN.bind(null,t,e,n),e.then(t,t))}function Nv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Av(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=er(-1,1),e.tag=2,Or(n,e,1))),n.lanes|=1),t)}var RN=dr.ReactCurrentOwner,Lt=!1;function At(t,e,n,r){e.child=t===null?DE(e,null,n,r):$s(e,t.child,n,r)}function Dv(t,e,n,r,i){n=n.render;var s=e.ref;return Cs(e,i),r=Am(t,e,n,r,s,i),n=Dm(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sr(t,e,i)):(Re&&n&&ym(e),e.flags|=1,At(t,e,r,i),e.child)}function Pv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ZE(t,e,s,r,i)):(t=Su(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ka,n(o,r)&&t.ref===e.ref)return sr(t,e,i)}return e.flags|=1,t=br(s,r),t.ref=e.ref,t.return=e,e.child=t}function ZE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ka(s,r)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Lt=!0);else return e.lanes=t.lanes,sr(t,e,i)}return zf(t,e,n,r,i)}function e1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(hs,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(hs,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(hs,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(hs,Vt),Vt|=r;return At(t,e,i,n),e.child}function t1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zf(t,e,n,r,i){var s=$t(n)?Si:kt.current;return s=bs(e,s),Cs(e,i),n=Am(t,e,n,r,s,i),r=Dm(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sr(t,e,i)):(Re&&r&&ym(e),e.flags|=1,At(t,e,n,i),e.child)}function xv(t,e,n,r,i){if($t(n)){var s=!0;Bu(e)}else s=!1;if(Cs(e,i),e.stateNode===null)_u(t,e),NE(e,n,r),Uf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=rn(u):(u=$t(n)?Si:kt.current,u=bs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Cv(e,o,r,u),_r=!1;var d=e.memoizedState;o.state=d,qu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ft.current||_r?(typeof c=="function"&&($f(e,n,c,r),l=e.memoizedState),(a=_r||Sv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,kE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:hn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=rn(l):(l=$t(n)?Si:kt.current,l=bs(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Cv(e,o,r,l),_r=!1,d=e.memoizedState,o.state=d,qu(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Ft.current||_r?(typeof g=="function"&&($f(e,n,g,r),v=e.memoizedState),(u=_r||Sv(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Bf(t,e,n,r,s,i)}function Bf(t,e,n,r,i,s){t1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&yv(e,n,!1),sr(t,e,s);r=e.stateNode,RN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):At(t,e,a,s),e.memoizedState=r.state,i&&yv(e,n,!0),e.child}function n1(t){var e=t.stateNode;e.pendingContext?gv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gv(t,e.context,!1),Im(t,e.containerInfo)}function Ov(t,e,n,r,i){return Fs(),_m(i),e.flags|=256,At(t,e,n,r),e.child}var jf={dehydrated:null,treeContext:null,retryLane:0};function Wf(t){return{baseLanes:t,cachePool:null,transitions:null}}function r1(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Ae,i&1),t===null)return bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xc(o,r,0,null),t=vi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wf(n),e.memoizedState=jf,t):Om(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return NN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=br(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=br(a,s):(s=vi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Wf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jf,r}return s=t.child,t=s.sibling,r=br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Om(t,e){return e=Xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gl(t,e,n,r){return r!==null&&_m(r),$s(e,t.child,null,n),t=Om(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=wd(Error(k(422))),Gl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xc({mode:"visible",children:r.children},i,0,null),s=vi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&$s(e,t.child,null,o),e.child.memoizedState=Wf(o),e.memoizedState=jf,s);if(!(e.mode&1))return Gl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=wd(s,r,void 0),Gl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Lt||a){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ir(t,i),vn(r,t,i,-1))}return Um(),r=wd(Error(k(421))),Gl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,zt=xr(i.nextSibling),Bt=e,Re=!0,fn=null,t!==null&&(Qt[Yt++]=qn,Qt[Yt++]=Gn,Qt[Yt++]=Ci,qn=t.id,Gn=t.overflow,Ci=e),e=Om(e,r.children),e.flags|=4096,e)}function Mv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ff(t.return,e,n)}function Ed(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function i1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(At(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mv(t,n,e);else if(t.tag===19)Mv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Gu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ed(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Gu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ed(e,!0,n,null,s);break;case"together":Ed(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _u(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ii|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AN(t,e,n){switch(e.tag){case 3:n1(e),Fs();break;case 5:PE(e);break;case 1:$t(e.type)&&Bu(e);break;case 4:Im(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(Hu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?r1(t,e,n):(_e(Ae,Ae.current&1),t=sr(t,e,n),t!==null?t.sibling:null);_e(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return i1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,e1(t,e,n)}return sr(t,e,n)}var s1,Hf,o1,a1;s1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hf=function(){};o1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,hi(Ln.current);var s=null;switch(n){case"input":i=ff(t,i),r=ff(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=gf(t,i),r=gf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vu)}vf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_a.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_a.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&we("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};a1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Mo(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function DN(t,e,n){var r=e.pendingProps;switch(vm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return $t(e.type)&&zu(),pt(e),null;case 3:return r=e.stateNode,Us(),Te(Ft),Te(kt),Rm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(Zf(fn),fn=null))),Hf(t,e),pt(e),null;case 5:km(e);var i=hi(Pa.current);if(n=e.type,t!==null&&e.stateNode!=null)o1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return pt(e),null}if(t=hi(Ln.current),Kl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Dn]=e,r[Aa]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<qo.length;i++)we(qo[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":jy(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Hy(r,s),we("invalid",r)}vf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Hl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Hl(r.textContent,a,t),i=["children",""+a]):_a.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Fl(r),Wy(r,s,!0);break;case"textarea":Fl(r),Ky(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dn]=e,t[Aa]=r,s1(t,e,!1,!1),e.stateNode=t;e:{switch(o=_f(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)we(qo[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":jy(t,r),i=ff(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),we("invalid",t);break;case"textarea":Hy(t,r),i=gf(t,r),we("invalid",t);break;default:i=r}vf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Fw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wa(t,l):typeof l=="number"&&wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_a.hasOwnProperty(s)?l!=null&&s==="onScroll"&&we("scroll",t):l!=null&&rm(t,s,l,o))}switch(n){case"input":Fl(t),Wy(t,r,!1);break;case"textarea":Fl(t),Ky(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_s(t,!!r.multiple,s,!1):r.defaultValue!=null&&_s(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)a1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=hi(Pa.current),hi(Ln.current),Kl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dn]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:Hl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dn]=e,e.stateNode=r}return pt(e),null;case 13:if(Te(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&zt!==null&&e.mode&1&&!(e.flags&128))TE(),Fs(),e.flags|=98560,s=!1;else if(s=Kl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Dn]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),s=!1}else fn!==null&&(Zf(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?We===0&&(We=3):Um())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return Us(),Hf(t,e),t===null&&Ra(e.stateNode.containerInfo),pt(e),null;case 10:return Sm(e.type._context),pt(e),null;case 17:return $t(e.type)&&zu(),pt(e),null;case 19:if(Te(Ae),s=e.memoizedState,s===null)return pt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Mo(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gu(t),o!==null){for(e.flags|=128,Mo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>zs&&(e.flags|=128,r=!0,Mo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Gu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return pt(e),null}else 2*be()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,r=!0,Mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=Ae.current,_e(Ae,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return $m(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function PN(t,e){switch(vm(e),e.tag){case 1:return $t(e.type)&&zu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Us(),Te(Ft),Te(kt),Rm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return km(e),null;case 13:if(Te(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ae),null;case 4:return Us(),null;case 10:return Sm(e.type._context),null;case 22:case 23:return $m(),null;case 24:return null;default:return null}}var Ql=!1,yt=!1,xN=typeof WeakSet=="function"?WeakSet:Set,L=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Kf(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var Lv=!1;function ON(t,e){if(Af=Fu,t=hE(),gm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Df={focusedElem:t,selectionRange:n},Fu=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,y=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:hn(e.type,_),y);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){Oe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return v=Lv,Lv=!1,v}function oa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kf(e,n,s)}i=i.next}while(i!==r)}}function Qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function l1(t){var e=t.alternate;e!==null&&(t.alternate=null,l1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dn],delete e[Aa],delete e[Of],delete e[mN],delete e[gN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function u1(t){return t.tag===5||t.tag===3||t.tag===4}function bv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vu));else if(r!==4&&(t=t.child,t!==null))for(Gf(t,e,n),t=t.sibling;t!==null;)Gf(t,e,n),t=t.sibling}function Qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qf(t,e,n),t=t.sibling;t!==null;)Qf(t,e,n),t=t.sibling}var rt=null,dn=!1;function gr(t,e,n){for(n=n.child;n!==null;)c1(t,e,n),n=n.sibling}function c1(t,e,n){if(Mn&&typeof Mn.onCommitFiberUnmount=="function")try{Mn.onCommitFiberUnmount(zc,n)}catch{}switch(n.tag){case 5:yt||cs(n,e);case 6:var r=rt,i=dn;rt=null,gr(t,e,n),rt=r,dn=i,rt!==null&&(dn?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(dn?(t=rt,n=n.stateNode,t.nodeType===8?pd(t.parentNode,n):t.nodeType===1&&pd(t,n),Ta(t)):pd(rt,n.stateNode));break;case 4:r=rt,i=dn,rt=n.stateNode.containerInfo,dn=!0,gr(t,e,n),rt=r,dn=i;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kf(n,e,o),i=i.next}while(i!==r)}gr(t,e,n);break;case 1:if(!yt&&(cs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}gr(t,e,n);break;case 21:gr(t,e,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,gr(t,e,n),yt=r):gr(t,e,n);break;default:gr(t,e,n)}}function Fv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xN),e.forEach(function(r){var i=BN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,dn=!1;break e;case 3:rt=a.stateNode.containerInfo,dn=!0;break e;case 4:rt=a.stateNode.containerInfo,dn=!0;break e}a=a.return}if(rt===null)throw Error(k(160));c1(s,o,i),rt=null,dn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)h1(e,t),e=e.sibling}function h1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),Rn(t),r&4){try{oa(3,t,t.return),Qc(3,t)}catch(_){Oe(t,t.return,_)}try{oa(5,t,t.return)}catch(_){Oe(t,t.return,_)}}break;case 1:cn(e,t),Rn(t),r&512&&n!==null&&cs(n,n.return);break;case 5:if(cn(e,t),Rn(t),r&512&&n!==null&&cs(n,n.return),t.flags&32){var i=t.stateNode;try{wa(i,"")}catch(_){Oe(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&xw(i,s),_f(a,o);var u=_f(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Fw(i,h):c==="dangerouslySetInnerHTML"?Lw(i,h):c==="children"?wa(i,h):rm(i,c,h,u)}switch(a){case"input":pf(i,s);break;case"textarea":Ow(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?_s(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?_s(i,!!s.multiple,s.defaultValue,!0):_s(i,!!s.multiple,s.multiple?[]:"",!1))}i[Aa]=s}catch(_){Oe(t,t.return,_)}}break;case 6:if(cn(e,t),Rn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Oe(t,t.return,_)}}break;case 3:if(cn(e,t),Rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(_){Oe(t,t.return,_)}break;case 4:cn(e,t),Rn(t);break;case 13:cn(e,t),Rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bm=be())),r&4&&Fv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(yt=(u=yt)||c,cn(e,t),yt=u):cn(e,t),Rn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(h=L=c;L!==null;){switch(d=L,g=d.child,d.tag){case 0:case 11:case 14:case 15:oa(4,d,d.return);break;case 1:cs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Oe(r,n,_)}}break;case 5:cs(d,d.return);break;case 22:if(d.memoizedState!==null){Uv(h);continue}}g!==null?(g.return=d,L=g):Uv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bw("display",o))}catch(_){Oe(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Oe(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:cn(e,t),Rn(t),r&4&&Fv(t);break;case 21:break;default:cn(e,t),Rn(t)}}function Rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(u1(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wa(i,""),r.flags&=-33);var s=bv(t);Qf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=bv(t);Gf(t,a,o);break;default:throw Error(k(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function MN(t,e,n){L=t,d1(t)}function d1(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ql;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||yt;a=Ql;var u=yt;if(Ql=o,(yt=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?Vv(i):l!==null?(l.return=o,L=l):Vv(i);for(;s!==null;)L=s,d1(s),s=s.sibling;L=i,Ql=a,yt=u}$v(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):$v(t)}}function $v(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:yt||Qc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!yt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:hn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ev(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ev(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ta(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}yt||e.flags&512&&qf(e)}catch(d){Oe(e,e.return,d)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function Uv(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Vv(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qc(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Oe(e,i,l)}}var s=e.return;try{qf(e)}catch(l){Oe(e,s,l)}break;case 5:var o=e.return;try{qf(e)}catch(l){Oe(e,o,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var LN=Math.ceil,Xu=dr.ReactCurrentDispatcher,Mm=dr.ReactCurrentOwner,tn=dr.ReactCurrentBatchConfig,le=0,Je=null,Ve=null,at=0,Vt=0,hs=Xr(0),We=0,La=null,Ii=0,Yc=0,Lm=0,aa=null,Mt=null,bm=0,zs=1/0,Wn=null,Ju=!1,Yf=null,Mr=null,Yl=!1,Rr=null,Zu=0,la=0,Xf=null,wu=-1,Eu=0;function Pt(){return le&6?be():wu!==-1?wu:wu=be()}function Lr(t){return t.mode&1?le&2&&at!==0?at&-at:vN.transition!==null?(Eu===0&&(Eu=Qw()),Eu):(t=fe,t!==0||(t=window.event,t=t===void 0?16:nE(t.type)),t):1}function vn(t,e,n,r){if(50<la)throw la=0,Xf=null,Error(k(185));rl(t,n,r),(!(le&2)||t!==Je)&&(t===Je&&(!(le&2)&&(Yc|=n),We===4&&Er(t,at)),Ut(t,r),n===1&&le===0&&!(e.mode&1)&&(zs=be()+500,Kc&&Jr()))}function Ut(t,e){var n=t.callbackNode;vR(t,e);var r=bu(t,t===Je?at:0);if(r===0)n!==null&&Qy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qy(n),e===1)t.tag===0?yN(zv.bind(null,t)):EE(zv.bind(null,t)),fN(function(){!(le&6)&&Jr()}),n=null;else{switch(Yw(r)){case 1:n=lm;break;case 4:n=qw;break;case 16:n=Lu;break;case 536870912:n=Gw;break;default:n=Lu}n=w1(n,f1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function f1(t,e){if(wu=-1,Eu=0,le&6)throw Error(k(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var r=bu(t,t===Je?at:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ec(t,r);else{e=r;var i=le;le|=2;var s=m1();(Je!==t||at!==e)&&(Wn=null,zs=be()+500,yi(t,e));do try{$N();break}catch(a){p1(t,a)}while(1);Em(),Xu.current=s,le=i,Ve!==null?e=0:(Je=null,at=0,e=We)}if(e!==0){if(e===2&&(i=Tf(t),i!==0&&(r=i,e=Jf(t,i))),e===1)throw n=La,yi(t,0),Er(t,r),Ut(t,be()),n;if(e===6)Er(t,r);else{if(i=t.current.alternate,!(r&30)&&!bN(i)&&(e=ec(t,r),e===2&&(s=Tf(t),s!==0&&(r=s,e=Jf(t,s))),e===1))throw n=La,yi(t,0),Er(t,r),Ut(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:si(t,Mt,Wn);break;case 3:if(Er(t,r),(r&130023424)===r&&(e=bm+500-be(),10<e)){if(bu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xf(si.bind(null,t,Mt,Wn),e);break}si(t,Mt,Wn);break;case 4:if(Er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*LN(r/1960))-r,10<r){t.timeoutHandle=xf(si.bind(null,t,Mt,Wn),r);break}si(t,Mt,Wn);break;case 5:si(t,Mt,Wn);break;default:throw Error(k(329))}}}return Ut(t,be()),t.callbackNode===n?f1.bind(null,t):null}function Jf(t,e){var n=aa;return t.current.memoizedState.isDehydrated&&(yi(t,e).flags|=256),t=ec(t,e),t!==2&&(e=Mt,Mt=n,e!==null&&Zf(e)),t}function Zf(t){Mt===null?Mt=t:Mt.push.apply(Mt,t)}function bN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~Lm,e&=~Yc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function zv(t){if(le&6)throw Error(k(327));Ts();var e=bu(t,0);if(!(e&1))return Ut(t,be()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var r=Tf(t);r!==0&&(e=r,n=Jf(t,r))}if(n===1)throw n=La,yi(t,0),Er(t,e),Ut(t,be()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,si(t,Mt,Wn),Ut(t,be()),null}function Fm(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(zs=be()+500,Kc&&Jr())}}function ki(t){Rr!==null&&Rr.tag===0&&!(le&6)&&Ts();var e=le;le|=1;var n=tn.transition,r=fe;try{if(tn.transition=null,fe=1,t)return t()}finally{fe=r,tn.transition=n,le=e,!(le&6)&&Jr()}}function $m(){Vt=hs.current,Te(hs)}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dN(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(vm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zu();break;case 3:Us(),Te(Ft),Te(kt),Rm();break;case 5:km(r);break;case 4:Us();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:Sm(r.type._context);break;case 22:case 23:$m()}n=n.return}if(Je=t,Ve=t=br(t.current,null),at=Vt=e,We=0,La=null,Lm=Yc=Ii=0,Mt=aa=null,ci!==null){for(e=0;e<ci.length;e++)if(n=ci[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ci=null}return t}function p1(t,e){do{var n=Ve;try{if(Em(),yu.current=Yu,Qu){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qu=!1}if(Ti=0,Qe=je=De=null,sa=!1,xa=0,Mm.current=null,n===null||n.return===null){We=1,La=e,Ve=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=at,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Nv(o);if(g!==null){g.flags&=-257,Av(g,o,a,s,e),g.mode&1&&Rv(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Rv(s,u,e),Um();break e}l=Error(k(426))}}else if(Re&&a.mode&1){var y=Nv(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Av(y,o,a,s,e),_m(Vs(l,a));break e}}s=l=Vs(l,a),We!==4&&(We=2),aa===null?aa=[s]:aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=XE(s,l,e);wv(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Mr===null||!Mr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=JE(s,a,e);wv(s,w);break e}}s=s.return}while(s!==null)}y1(n)}catch(C){e=C,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(1)}function m1(){var t=Xu.current;return Xu.current=Yu,t===null?Yu:t}function Um(){(We===0||We===3||We===2)&&(We=4),Je===null||!(Ii&268435455)&&!(Yc&268435455)||Er(Je,at)}function ec(t,e){var n=le;le|=2;var r=m1();(Je!==t||at!==e)&&(Wn=null,yi(t,e));do try{FN();break}catch(i){p1(t,i)}while(1);if(Em(),le=n,Xu.current=r,Ve!==null)throw Error(k(261));return Je=null,at=0,We}function FN(){for(;Ve!==null;)g1(Ve)}function $N(){for(;Ve!==null&&!uR();)g1(Ve)}function g1(t){var e=_1(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?y1(t):Ve=e,Mm.current=null}function y1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PN(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,Ve=null;return}}else if(n=DN(n,e,Vt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);We===0&&(We=5)}function si(t,e,n){var r=fe,i=tn.transition;try{tn.transition=null,fe=1,UN(t,e,n,r)}finally{tn.transition=i,fe=r}return null}function UN(t,e,n,r){do Ts();while(Rr!==null);if(le&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_R(t,s),t===Je&&(Ve=Je=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yl||(Yl=!0,w1(Lu,function(){return Ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var o=fe;fe=1;var a=le;le|=4,Mm.current=null,ON(t,n),h1(n,t),sN(Df),Fu=!!Af,Df=Af=null,t.current=n,MN(n),cR(),le=a,fe=o,tn.transition=s}else t.current=n;if(Yl&&(Yl=!1,Rr=t,Zu=i),s=t.pendingLanes,s===0&&(Mr=null),fR(n.stateNode),Ut(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ju)throw Ju=!1,t=Yf,Yf=null,t;return Zu&1&&t.tag!==0&&Ts(),s=t.pendingLanes,s&1?t===Xf?la++:(la=0,Xf=t):la=0,Jr(),null}function Ts(){if(Rr!==null){var t=Yw(Zu),e=tn.transition,n=fe;try{if(tn.transition=null,fe=16>t?16:t,Rr===null)var r=!1;else{if(t=Rr,Rr=null,Zu=0,le&6)throw Error(k(331));var i=le;for(le|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:oa(8,c,s)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var d=c.sibling,g=c.return;if(l1(c),c===u){L=null;break}if(d!==null){d.return=g,L=d;break}L=g}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var y=_.sibling;_.sibling=null,_=y}while(_!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,L=p;break e}L=s.return}}var f=t.current;for(L=f;L!==null;){o=L;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,L=m;else e:for(o=f;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qc(9,a)}}catch(C){Oe(a,a.return,C)}if(a===o){L=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,L=w;break e}L=a.return}}if(le=i,Jr(),Mn&&typeof Mn.onPostCommitFiberRoot=="function")try{Mn.onPostCommitFiberRoot(zc,t)}catch{}r=!0}return r}finally{fe=n,tn.transition=e}}return!1}function Bv(t,e,n){e=Vs(n,e),e=XE(t,e,1),t=Or(t,e,1),e=Pt(),t!==null&&(rl(t,1,e),Ut(t,e))}function Oe(t,e,n){if(t.tag===3)Bv(t,t,n);else for(;e!==null;){if(e.tag===3){Bv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mr===null||!Mr.has(r))){t=Vs(n,t),t=JE(e,t,1),e=Or(e,t,1),t=Pt(),e!==null&&(rl(e,1,t),Ut(e,t));break}}e=e.return}}function VN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(at&n)===n&&(We===4||We===3&&(at&130023424)===at&&500>be()-bm?yi(t,0):Lm|=n),Ut(t,e)}function v1(t,e){e===0&&(t.mode&1?(e=Vl,Vl<<=1,!(Vl&130023424)&&(Vl=4194304)):e=1);var n=Pt();t=ir(t,e),t!==null&&(rl(t,e,n),Ut(t,n))}function zN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),v1(t,n)}function BN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),v1(t,n)}var _1;_1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)Lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Lt=!1,AN(t,e,n);Lt=!!(t.flags&131072)}else Lt=!1,Re&&e.flags&1048576&&SE(e,Wu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_u(t,e),t=e.pendingProps;var i=bs(e,kt.current);Cs(e,n),i=Am(null,e,r,t,i,n);var s=Dm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(s=!0,Bu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tm(e),i.updater=qc,e.stateNode=i,i._reactInternals=e,Uf(e,r,t,n),e=Bf(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&ym(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(_u(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=WN(r),t=hn(r,t),i){case 0:e=zf(null,e,r,t,n);break e;case 1:e=xv(null,e,r,t,n);break e;case 11:e=Dv(null,e,r,t,n);break e;case 14:e=Pv(null,e,r,hn(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),zf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),xv(t,e,r,i,n);case 3:e:{if(n1(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,kE(t,e),qu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vs(Error(k(423)),e),e=Ov(t,e,r,n,i);break e}else if(r!==i){i=Vs(Error(k(424)),e),e=Ov(t,e,r,n,i);break e}else for(zt=xr(e.stateNode.containerInfo.firstChild),Bt=e,Re=!0,fn=null,n=DE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),r===i){e=sr(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return PE(e),t===null&&bf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Pf(r,i)?o=null:s!==null&&Pf(r,s)&&(e.flags|=32),t1(t,e),At(t,e,o,n),e.child;case 6:return t===null&&bf(e),null;case 13:return r1(t,e,n);case 4:return Im(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$s(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),Dv(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(Hu,r._currentValue),r._currentValue=o,s!==null)if(wn(s.value,o)){if(s.children===i.children&&!Ft.current){e=sr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=er(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ff(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ff(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Cs(e,n),i=rn(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=hn(r,e.pendingProps),i=hn(r.type,i),Pv(t,e,r,i,n);case 15:return ZE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),_u(t,e),e.tag=1,$t(r)?(t=!0,Bu(e)):t=!1,Cs(e,n),NE(e,r,i),Uf(e,r,i,n),Bf(null,e,r,!0,t,n);case 19:return i1(t,e,n);case 22:return e1(t,e,n)}throw Error(k(156,e.tag))};function w1(t,e){return Kw(t,e)}function jN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new jN(t,e,n,r)}function Vm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WN(t){if(typeof t=="function")return Vm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sm)return 11;if(t===om)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Su(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return vi(n.children,i,s,e);case im:o=8,i|=8;break;case uf:return t=Zt(12,n,e,i|2),t.elementType=uf,t.lanes=s,t;case cf:return t=Zt(13,n,e,i),t.elementType=cf,t.lanes=s,t;case hf:return t=Zt(19,n,e,i),t.elementType=hf,t.lanes=s,t;case Aw:return Xc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rw:o=10;break e;case Nw:o=9;break e;case sm:o=11;break e;case om:o=14;break e;case vr:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function vi(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function Xc(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=Aw,t.lanes=n,t.stateNode={isHidden:!1},t}function Sd(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function Cd(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rd(0),this.expirationTimes=rd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zm(t,e,n,r,i,s,o,a,l){return t=new HN(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tm(s),t}function KN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function E1(t){if(!t)return Wr;t=t._reactInternals;e:{if(Ui(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if($t(n))return wE(t,n,e)}return e}function S1(t,e,n,r,i,s,o,a,l){return t=zm(n,r,!0,t,i,s,o,a,l),t.context=E1(null),n=t.current,r=Pt(),i=Lr(n),s=er(r,i),s.callback=e??null,Or(n,s,i),t.current.lanes=i,rl(t,i,r),Ut(t,r),t}function Jc(t,e,n,r){var i=e.current,s=Pt(),o=Lr(i);return n=E1(n),e.context===null?e.context=n:e.pendingContext=n,e=er(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Or(i,e,o),t!==null&&(vn(t,i,o,s),gu(t,i,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bm(t,e){jv(t,e),(t=t.alternate)&&jv(t,e)}function qN(){return null}var C1=typeof reportError=="function"?reportError:function(t){console.error(t)};function jm(t){this._internalRoot=t}Zc.prototype.render=jm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Jc(t,e,null,null)};Zc.prototype.unmount=jm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ki(function(){Jc(null,t,null,null)}),e[rr]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wr.length&&e!==0&&e<wr[n].priority;n++);wr.splice(n,0,t),n===0&&tE(t)}};function Wm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wv(){}function GN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=tc(o);s.call(u)}}var o=S1(e,r,t,0,null,!1,!1,"",Wv);return t._reactRootContainer=o,t[rr]=o.current,Ra(t.nodeType===8?t.parentNode:t),ki(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=tc(l);a.call(u)}}var l=zm(t,0,!1,null,null,!1,!1,"",Wv);return t._reactRootContainer=l,t[rr]=l.current,Ra(t.nodeType===8?t.parentNode:t),ki(function(){Jc(e,l,n,r)}),l}function th(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=tc(o);a.call(l)}}Jc(e,o,t,i)}else o=GN(n,e,t,i,r);return tc(o)}Xw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ko(e.pendingLanes);n!==0&&(um(e,n|1),Ut(e,be()),!(le&6)&&(zs=be()+500,Jr()))}break;case 13:ki(function(){var r=ir(t,1);if(r!==null){var i=Pt();vn(r,t,1,i)}}),Bm(t,1)}};cm=function(t){if(t.tag===13){var e=ir(t,134217728);if(e!==null){var n=Pt();vn(e,t,134217728,n)}Bm(t,134217728)}};Jw=function(t){if(t.tag===13){var e=Lr(t),n=ir(t,e);if(n!==null){var r=Pt();vn(n,t,e,r)}Bm(t,e)}};Zw=function(){return fe};eE=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Ef=function(t,e,n){switch(e){case"input":if(pf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Hc(r);if(!i)throw Error(k(90));Pw(r),pf(r,i)}}}break;case"textarea":Ow(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};Vw=Fm;zw=ki;var QN={usingClientEntryPoint:!1,Events:[sl,ss,Hc,$w,Uw,Fm]},Lo={findFiberByHostInstance:ui,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},YN={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ww(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||qN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{zc=Xl.inject(YN),Mn=Xl}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QN;Kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wm(e))throw Error(k(200));return KN(t,e,null,n)};Kt.createRoot=function(t,e){if(!Wm(t))throw Error(k(299));var n=!1,r="",i=C1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=zm(t,1,!1,null,null,n,!1,r,i),t[rr]=e.current,Ra(t.nodeType===8?t.parentNode:t),new jm(e)};Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Ww(e),t=t===null?null:t.stateNode,t};Kt.flushSync=function(t){return ki(t)};Kt.hydrate=function(t,e,n){if(!eh(e))throw Error(k(200));return th(null,t,e,!0,n)};Kt.hydrateRoot=function(t,e,n){if(!Wm(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=C1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=S1(e,null,t,1,n??null,i,!1,s,o),t[rr]=e.current,Ra(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Zc(e)};Kt.render=function(t,e,n){if(!eh(e))throw Error(k(200));return th(null,t,e,!1,n)};Kt.unmountComponentAtNode=function(t){if(!eh(t))throw Error(k(40));return t._reactRootContainer?(ki(function(){th(null,null,t,!1,function(){t._reactRootContainer=null,t[rr]=null})}),!0):!1};Kt.unstable_batchedUpdates=Fm;Kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!eh(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return th(t,e,n,!1,r)};Kt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Kt})(qk);var Hv=of;sf.createRoot=Hv.createRoot,sf.hydrateRoot=Hv.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ie(){return ie=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ie.apply(this,arguments)}var $e;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($e||($e={}));const Kv="popstate";function XN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ba("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ri(i)}return ZN(e,n,null,t)}function Z(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Bs(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JN(){return Math.random().toString(36).substr(2,8)}function qv(t,e){return{usr:t.state,key:t.key,idx:e}}function ba(t,e,n,r){return n===void 0&&(n=null),ie({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?fr(e):e,{state:n,key:e&&e.key||r||JN()})}function Ri(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function fr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ZN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=$e.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ie({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=$e.Pop;let y=c(),p=y==null?null:y-u;u=y,l&&l({action:a,location:_.location,delta:p})}function d(y,p){a=$e.Push;let f=ba(_.location,y,p);n&&n(f,y),u=c()+1;let m=qv(f,u),w=_.createHref(f);try{o.pushState(m,"",w)}catch{i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function g(y,p){a=$e.Replace;let f=ba(_.location,y,p);n&&n(f,y),u=c();let m=qv(f,u),w=_.createHref(f);o.replaceState(m,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function v(y){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof y=="string"?y:Ri(y);return Z(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let _={get action(){return a},get location(){return t(i,o)},listen(y){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Kv,h),l=y,()=>{i.removeEventListener(Kv,h),l=null}},createHref(y){return e(i,y)},createURL:v,encodeLocation(y){let p=v(y);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(y){return o.go(y)}};return _}var Be;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Be||(Be={}));const eA=new Set(["lazy","caseSensitive","path","id","index","children"]);function tA(t){return t.index===!0}function T1(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(Z(i.index!==!0||!i.children,"Cannot specify children on an index route"),Z(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),tA(i)){let l=ie({},i,{hasErrorBoundary:e(i),id:a});return r[a]=l,l}else{let l=ie({},i,{id:a,hasErrorBoundary:e(i),children:void 0});return r[a]=l,i.children&&(l.children=T1(i.children,e,o,r)),l}})}function ds(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?fr(e):e,i=nh(r.pathname||"/",n);if(i==null)return null;let s=I1(t);nA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=hA(s[a],pA(i));return o}function I1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Z(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Fr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Z(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),I1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:uA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of k1(s.path))i(s,o,l)}),e}function k1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=k1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function nA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rA=/^:\w+$/,iA=3,sA=2,oA=1,aA=10,lA=-2,Gv=t=>t==="*";function uA(t,e){let n=t.split("/"),r=n.length;return n.some(Gv)&&(r+=lA),e&&(r+=sA),n.filter(i=>!Gv(i)).reduce((i,s)=>i+(rA.test(s)?iA:s===""?oA:aA),r)}function cA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function hA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=dA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Fr([i,c.pathname]),pathnameBase:vA(Fr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Fr([i,c.pathnameBase]))}return s}function dA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=fA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=mA(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function fA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Bs(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function pA(t){try{return decodeURI(t)}catch(e){return Bs(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function mA(t,e){try{return decodeURIComponent(t)}catch(n){return Bs(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function nh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function gA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?fr(t):t;return{pathname:n?n.startsWith("/")?n:yA(n,e):e,search:_A(r),hash:wA(i)}}function yA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Td(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hm(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function R1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=fr(t):(i=ie({},t),Z(!i.pathname||!i.pathname.includes("?"),Td("?","pathname","search",i)),Z(!i.pathname||!i.pathname.includes("#"),Td("#","pathname","hash",i)),Z(!i.search||!i.search.includes("#"),Td("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=gA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Fr=t=>t.join("/").replace(/\/\/+/g,"/"),vA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_A=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,wA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Km{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function N1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const A1=["post","put","patch","delete"],EA=new Set(A1),SA=["get",...A1],CA=new Set(SA),TA=new Set([301,302,303,307,308]),IA=new Set([307,308]),Id={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},kA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Qv={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},D1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,P1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",RA=!P1,NA=t=>!!t.hasErrorBoundary;function AA(t){Z(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=t.detectErrorBoundary||NA,n={},r=T1(t.routes,e,void 0,n),i,s=ie({v7_normalizeFormMethod:!1},t.future),o=null,a=new Set,l=null,u=null,c=null,h=t.hydrationData!=null,d=ds(r,t.history.location,t.basename),g=null;if(d==null){let E=An(404,{pathname:t.history.location.pathname}),{matches:S,route:I}=n_(r);d=S,g={[I.id]:E}}let v=!d.some(E=>E.route.lazy)&&(!d.some(E=>E.route.loader)||t.hydrationData!=null),_,y={historyAction:t.history.action,location:t.history.location,matches:d,initialized:v,navigation:Id,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||g,fetchers:new Map,blockers:new Map},p=$e.Pop,f=!1,m,w=!1,C=!1,N=[],D=[],A=new Map,ue=0,Q=-1,tt=new Map,Tn=new Set,Gt=new Map,In=new Map,kn=new Map,ti=!1;function Eo(){return o=t.history.listen(E=>{let{action:S,location:I,delta:F}=E;if(ti){ti=!1;return}Bs(kn.size===0||F!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let U=My({currentLocation:y.location,nextLocation:I,historyAction:S});if(U&&F!=null){ti=!0,t.history.go(F*-1),Ml(U,{state:"blocked",location:I,proceed(){Ml(U,{state:"proceeding",proceed:void 0,reset:void 0,location:I}),t.history.go(F)},reset(){To(U),V({blockers:new Map(_.state.blockers)})}});return}return ht(S,I)}),y.initialized||ht($e.Pop,y.location),_}function M(){o&&o(),a.clear(),m&&m.abort(),y.fetchers.forEach((E,S)=>Kh(S)),y.blockers.forEach((E,S)=>To(S))}function Y(E){return a.add(E),()=>a.delete(E)}function V(E){y=ie({},y,E),a.forEach(S=>S(y))}function ge(E,S){var I,F;let U=y.actionData!=null&&y.navigation.formMethod!=null&&Hn(y.navigation.formMethod)&&y.navigation.state==="loading"&&((I=E.state)==null?void 0:I._isRedirect)!==!0,W;S.actionData?Object.keys(S.actionData).length>0?W=S.actionData:W=null:U?W=y.actionData:W=null;let H=S.loaderData?t_(y.loaderData,S.loaderData,S.matches||[],S.errors):y.loaderData;for(let[B]of kn)To(B);let X=f===!0||y.navigation.formMethod!=null&&Hn(y.navigation.formMethod)&&((F=E.state)==null?void 0:F._isRedirect)!==!0;i&&(r=i,i=void 0),V(ie({},S,{actionData:W,loaderData:H,historyAction:p,location:E,initialized:!0,navigation:Id,revalidation:"idle",restoreScrollPosition:Ly(E,S.matches||y.matches),preventScrollReset:X,blockers:new Map(y.blockers)})),w||p===$e.Pop||(p===$e.Push?t.history.push(E,E.state):p===$e.Replace&&t.history.replace(E,E.state)),p=$e.Pop,f=!1,w=!1,C=!1,N=[],D=[]}async function Le(E,S){if(typeof E=="number"){t.history.go(E);return}let{path:I,submission:F,error:U}=Yv(E,s,S),W=y.location,H=ba(y.location,I,S&&S.state);H=ie({},H,t.history.encodeLocation(H));let X=S&&S.replace!=null?S.replace:void 0,B=$e.Push;X===!0?B=$e.Replace:X===!1||F!=null&&Hn(F.formMethod)&&F.formAction===y.location.pathname+y.location.search&&(B=$e.Replace);let ve=S&&"preventScrollReset"in S?S.preventScrollReset===!0:void 0,ce=My({currentLocation:W,nextLocation:H,historyAction:B});if(ce){Ml(ce,{state:"blocked",location:H,proceed(){Ml(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),Le(E,S)},reset(){To(ce),V({blockers:new Map(y.blockers)})}});return}return await ht(B,H,{submission:F,pendingError:U,preventScrollReset:ve,replace:S&&S.replace})}function Ki(){if(Wh(),V({revalidation:"loading"}),y.navigation.state!=="submitting"){if(y.navigation.state==="idle"){ht(y.historyAction,y.location,{startUninterruptedRevalidation:!0});return}ht(p||y.historyAction,y.navigation.location,{overrideNavigation:y.navigation})}}async function ht(E,S,I){m&&m.abort(),m=null,p=E,w=(I&&I.startUninterruptedRevalidation)===!0,yk(y.location,y.matches),f=(I&&I.preventScrollReset)===!0;let F=i||r,U=I&&I.overrideNavigation,W=ds(F,S,t.basename);if(!W){let Ke=An(404,{pathname:S.pathname}),{matches:nt,route:ln}=n_(F);qh(),ge(S,{matches:nt,loaderData:{},errors:{[ln.id]:Ke}});return}if(MA(y.location,S)&&!(I&&I.submission&&Hn(I.submission.formMethod))){ge(S,{matches:W});return}m=new AbortController;let H=Fo(t.history,S,m.signal,I&&I.submission),X,B;if(I&&I.pendingError)B={[fs(W).route.id]:I.pendingError};else if(I&&I.submission&&Hn(I.submission.formMethod)){let Ke=await So(H,S,I.submission,W,{replace:I.replace});if(Ke.shortCircuited)return;X=Ke.pendingActionData,B=Ke.pendingActionError,U=ie({state:"loading",location:S},I.submission),H=new Request(H.url,{signal:H.signal})}let{shortCircuited:ve,loaderData:ce,errors:an}=await Bn(H,S,W,U,I&&I.submission,I&&I.fetcherSubmission,I&&I.replace,X,B);ve||(m=null,ge(S,ie({matches:W},X?{actionData:X}:{},{loaderData:ce,errors:an})))}async function So(E,S,I,F,U){Wh();let W=ie({state:"submitting",location:S},I);V({navigation:W});let H,X=ep(F,S);if(!X.route.action&&!X.route.lazy)H={type:Be.error,error:An(405,{method:E.method,pathname:S.pathname,routeId:X.route.id})};else if(H=await bo("action",E,X,F,n,e,_.basename),E.signal.aborted)return{shortCircuited:!0};if(Is(H)){let B;return U&&U.replace!=null?B=U.replace:B=H.location===y.location.pathname+y.location.search,await Co(y,H,{submission:I,replace:B}),{shortCircuited:!0}}if(ua(H)){let B=fs(F,X.route.id);return(U&&U.replace)!==!0&&(p=$e.Push),{pendingActionData:{},pendingActionError:{[B.route.id]:H.error}}}if(di(H))throw An(400,{type:"defer-action"});return{pendingActionData:{[X.route.id]:H.data}}}async function Bn(E,S,I,F,U,W,H,X,B){let ve=F;ve||(ve=ie({state:"loading",location:S,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},U));let ce=U||W?U||W:ve.formMethod&&ve.formAction&&ve.formData&&ve.formEncType?{formMethod:ve.formMethod,formAction:ve.formAction,formData:ve.formData,formEncType:ve.formEncType}:void 0,an=i||r,[Ke,nt]=Xv(t.history,y,I,ce,S,C,N,D,Gt,an,t.basename,X,B);if(qh(dt=>!(I&&I.some(un=>un.route.id===dt))||Ke&&Ke.some(un=>un.route.id===dt)),Ke.length===0&&nt.length===0)return ge(S,ie({matches:I,loaderData:{},errors:B||null},X?{actionData:X}:{})),{shortCircuited:!0};if(!w){nt.forEach(un=>{let ri=y.fetchers.get(un.key),Ro={state:"loading",data:ri&&ri.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};y.fetchers.set(un.key,Ro)});let dt=X||y.actionData;V(ie({navigation:ve},dt?Object.keys(dt).length===0?{actionData:null}:{actionData:dt}:{},nt.length>0?{fetchers:new Map(y.fetchers)}:{}))}Q=++ue,nt.forEach(dt=>A.set(dt.key,m));let{results:ln,loaderResults:Io,fetcherResults:Gh}=await Py(y.matches,I,Ke,nt,E);if(E.signal.aborted)return{shortCircuited:!0};nt.forEach(dt=>A.delete(dt.key));let ko=r_(ln);if(ko)return await Co(y,ko,{replace:H}),{shortCircuited:!0};let{loaderData:qi,errors:Qh}=e_(y,I,Ke,Io,B,nt,Gh,In);In.forEach((dt,un)=>{dt.subscribe(ri=>{(ri||dt.done)&&In.delete(un)})}),pk();let Yh=Oy(Q);return ie({loaderData:qi,errors:Qh},Yh||nt.length>0?{fetchers:new Map(y.fetchers)}:{})}function ni(E){return y.fetchers.get(E)||kA}function hk(E,S,I,F){if(RA)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");A.has(E)&&Ol(E);let W=ds(i||r,I,t.basename);if(!W){Hh(E,S,An(404,{pathname:I}));return}let{path:H,submission:X}=Yv(I,s,F,!0),B=ep(W,H);if(f=(F&&F.preventScrollReset)===!0,X&&Hn(X.formMethod)){dk(E,S,H,B,W,X);return}Gt.set(E,{routeId:S,path:H}),fk(E,S,H,B,W,X)}async function dk(E,S,I,F,U,W){if(Wh(),Gt.delete(E),!F.route.action&&!F.route.lazy){let jn=An(405,{method:W.formMethod,pathname:I,routeId:S});Hh(E,S,jn);return}let H=y.fetchers.get(E),X=ie({state:"submitting"},W,{data:H&&H.data," _hasFetcherDoneAnything ":!0});y.fetchers.set(E,X),V({fetchers:new Map(y.fetchers)});let B=new AbortController,ve=Fo(t.history,I,B.signal,W);A.set(E,B);let ce=await bo("action",ve,F,U,n,e,_.basename);if(ve.signal.aborted){A.get(E)===B&&A.delete(E);return}if(Is(ce)){A.delete(E),Tn.add(E);let jn=ie({state:"loading"},W,{data:void 0," _hasFetcherDoneAnything ":!0});return y.fetchers.set(E,jn),V({fetchers:new Map(y.fetchers)}),Co(y,ce,{submission:W,isFetchActionRedirect:!0})}if(ua(ce)){Hh(E,S,ce.error);return}if(di(ce))throw An(400,{type:"defer-action"});let an=y.navigation.location||y.location,Ke=Fo(t.history,an,B.signal),nt=i||r,ln=y.navigation.state!=="idle"?ds(nt,y.navigation.location,t.basename):y.matches;Z(ln,"Didn't find any matches after fetcher action");let Io=++ue;tt.set(E,Io);let Gh=ie({state:"loading",data:ce.data},W,{" _hasFetcherDoneAnything ":!0});y.fetchers.set(E,Gh);let[ko,qi]=Xv(t.history,y,ln,W,an,C,N,D,Gt,nt,t.basename,{[F.route.id]:ce.data},void 0);qi.filter(jn=>jn.key!==E).forEach(jn=>{let Xh=jn.key,by=y.fetchers.get(Xh),Ek={state:"loading",data:by&&by.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};y.fetchers.set(Xh,Ek),A.set(Xh,B)}),V({fetchers:new Map(y.fetchers)});let{results:Qh,loaderResults:Yh,fetcherResults:dt}=await Py(y.matches,ln,ko,qi,Ke);if(B.signal.aborted)return;tt.delete(E),A.delete(E),qi.forEach(jn=>A.delete(jn.key));let un=r_(Qh);if(un)return Co(y,un);let{loaderData:ri,errors:Ro}=e_(y,y.matches,ko,Yh,void 0,qi,dt,In),_k={state:"idle",data:ce.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};y.fetchers.set(E,_k);let wk=Oy(Io);y.navigation.state==="loading"&&Io>Q?(Z(p,"Expected pending action"),m&&m.abort(),ge(y.navigation.location,{matches:ln,loaderData:ri,errors:Ro,fetchers:new Map(y.fetchers)})):(V(ie({errors:Ro,loaderData:t_(y.loaderData,ri,ln,Ro)},wk?{fetchers:new Map(y.fetchers)}:{})),C=!1)}async function fk(E,S,I,F,U,W){let H=y.fetchers.get(E),X=ie({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},W,{data:H&&H.data," _hasFetcherDoneAnything ":!0});y.fetchers.set(E,X),V({fetchers:new Map(y.fetchers)});let B=new AbortController,ve=Fo(t.history,I,B.signal);A.set(E,B);let ce=await bo("loader",ve,F,U,n,e,_.basename);if(di(ce)&&(ce=await L1(ce,ve.signal,!0)||ce),A.get(E)===B&&A.delete(E),ve.signal.aborted)return;if(Is(ce)){await Co(y,ce);return}if(ua(ce)){let Ke=fs(y.matches,S);y.fetchers.delete(E),V({fetchers:new Map(y.fetchers),errors:{[Ke.route.id]:ce.error}});return}Z(!di(ce),"Unhandled fetcher deferred data");let an={state:"idle",data:ce.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};y.fetchers.set(E,an),V({fetchers:new Map(y.fetchers)})}async function Co(E,S,I){var F;let{submission:U,replace:W,isFetchActionRedirect:H}=I===void 0?{}:I;S.revalidate&&(C=!0);let X=ba(E.location,S.location,ie({_isRedirect:!0},H?{_isFetchActionRedirect:!0}:{}));if(Z(X,"Expected a location on the redirect navigation"),D1.test(S.location)&&P1&&typeof((F=window)==null?void 0:F.location)<"u"){let nt=t.history.createURL(S.location),ln=nh(nt.pathname,t.basename||"/")==null;if(window.location.origin!==nt.origin||ln){W?window.location.replace(S.location):window.location.assign(S.location);return}}m=null;let B=W===!0?$e.Replace:$e.Push,{formMethod:ve,formAction:ce,formEncType:an,formData:Ke}=E.navigation;!U&&ve&&ce&&Ke&&an&&(U={formMethod:ve,formAction:ce,formEncType:an,formData:Ke}),IA.has(S.status)&&U&&Hn(U.formMethod)?await ht(B,X,{submission:ie({},U,{formAction:S.location}),preventScrollReset:f}):H?await ht(B,X,{overrideNavigation:{state:"loading",location:X,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:U,preventScrollReset:f}):await ht(B,X,{overrideNavigation:{state:"loading",location:X,formMethod:U?U.formMethod:void 0,formAction:U?U.formAction:void 0,formEncType:U?U.formEncType:void 0,formData:U?U.formData:void 0},preventScrollReset:f})}async function Py(E,S,I,F,U){let W=await Promise.all([...I.map(B=>bo("loader",U,B,S,n,e,_.basename)),...F.map(B=>B.matches&&B.match?bo("loader",Fo(t.history,B.path,U.signal),B.match,B.matches,n,e,_.basename):{type:Be.error,error:An(404,{pathname:B.path})})]),H=W.slice(0,I.length),X=W.slice(I.length);return await Promise.all([i_(E,I,H,U.signal,!1,y.loaderData),i_(E,F.map(B=>B.match),X,U.signal,!0)]),{results:W,loaderResults:H,fetcherResults:X}}function Wh(){C=!0,N.push(...qh()),Gt.forEach((E,S)=>{A.has(S)&&(D.push(S),Ol(S))})}function Hh(E,S,I){let F=fs(y.matches,S);Kh(E),V({errors:{[F.route.id]:I},fetchers:new Map(y.fetchers)})}function Kh(E){A.has(E)&&Ol(E),Gt.delete(E),tt.delete(E),Tn.delete(E),y.fetchers.delete(E)}function Ol(E){let S=A.get(E);Z(S,"Expected fetch controller: "+E),S.abort(),A.delete(E)}function xy(E){for(let S of E){let F={state:"idle",data:ni(S).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};y.fetchers.set(S,F)}}function pk(){let E=[];for(let S of Tn){let I=y.fetchers.get(S);Z(I,"Expected fetcher: "+S),I.state==="loading"&&(Tn.delete(S),E.push(S))}xy(E)}function Oy(E){let S=[];for(let[I,F]of tt)if(F<E){let U=y.fetchers.get(I);Z(U,"Expected fetcher: "+I),U.state==="loading"&&(Ol(I),tt.delete(I),S.push(I))}return xy(S),S.length>0}function mk(E,S){let I=y.blockers.get(E)||Qv;return kn.get(E)!==S&&kn.set(E,S),I}function To(E){y.blockers.delete(E),kn.delete(E)}function Ml(E,S){let I=y.blockers.get(E)||Qv;Z(I.state==="unblocked"&&S.state==="blocked"||I.state==="blocked"&&S.state==="blocked"||I.state==="blocked"&&S.state==="proceeding"||I.state==="blocked"&&S.state==="unblocked"||I.state==="proceeding"&&S.state==="unblocked","Invalid blocker state transition: "+I.state+" -> "+S.state),y.blockers.set(E,S),V({blockers:new Map(y.blockers)})}function My(E){let{currentLocation:S,nextLocation:I,historyAction:F}=E;if(kn.size===0)return;kn.size>1&&Bs(!1,"A router only supports one blocker at a time");let U=Array.from(kn.entries()),[W,H]=U[U.length-1],X=y.blockers.get(W);if(!(X&&X.state==="proceeding")&&H({currentLocation:S,nextLocation:I,historyAction:F}))return W}function qh(E){let S=[];return In.forEach((I,F)=>{(!E||E(F))&&(I.cancel(),S.push(F),In.delete(F))}),S}function gk(E,S,I){if(l=E,c=S,u=I||(F=>F.key),!h&&y.navigation===Id){h=!0;let F=Ly(y.location,y.matches);F!=null&&V({restoreScrollPosition:F})}return()=>{l=null,c=null,u=null}}function yk(E,S){if(l&&u&&c){let I=S.map(U=>s_(U,y.loaderData)),F=u(E,I)||E.key;l[F]=c()}}function Ly(E,S){if(l&&u&&c){let I=S.map(W=>s_(W,y.loaderData)),F=u(E,I)||E.key,U=l[F];if(typeof U=="number")return U}return null}function vk(E){i=E}return _={get basename(){return t.basename},get state(){return y},get routes(){return r},initialize:Eo,subscribe:Y,enableScrollRestoration:gk,navigate:Le,fetch:hk,revalidate:Ki,createHref:E=>t.history.createHref(E),encodeLocation:E=>t.history.encodeLocation(E),getFetcher:ni,deleteFetcher:Kh,dispose:M,getBlocker:mk,deleteBlocker:To,_internalFetchControllers:A,_internalActiveDeferreds:In,_internalSetRoutes:vk},_}function DA(t){return t!=null&&"formData"in t}function Yv(t,e,n,r){r===void 0&&(r=!1);let i=typeof t=="string"?t:Ri(t);if(!n||!DA(n))return{path:i};if(n.formMethod&&!FA(n.formMethod))return{path:i,error:An(405,{method:n.formMethod})};let s;if(n.formData){let l=n.formMethod||"get";if(s={formMethod:e.v7_normalizeFormMethod?l.toUpperCase():l.toLowerCase(),formAction:M1(i),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},Hn(s.formMethod))return{path:i,submission:s}}let o=fr(i),a=O1(n.formData);return r&&o.search&&b1(o.search)&&a.append("index",""),o.search="?"+a,{path:Ri(o),submission:s}}function PA(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Xv(t,e,n,r,i,s,o,a,l,u,c,h,d){let g=d?Object.values(d)[0]:h?Object.values(h)[0]:void 0,v=t.createURL(e.location),_=t.createURL(i),y=s||v.toString()===_.toString()||v.search!==_.search,p=d?Object.keys(d)[0]:void 0,m=PA(n,p).filter((C,N)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(xA(e.loaderData,e.matches[N],C)||o.some(ue=>ue===C.route.id))return!0;let D=e.matches[N],A=C;return Jv(C,ie({currentUrl:v,currentParams:D.params,nextUrl:_,nextParams:A.params},r,{actionResult:g,defaultShouldRevalidate:y||x1(D,A)}))}),w=[];return l.forEach((C,N)=>{if(!n.some(Q=>Q.route.id===C.routeId))return;let D=ds(u,C.path,c);if(!D){w.push(ie({key:N},C,{matches:null,match:null}));return}let A=ep(D,C.path);if(a.includes(N)){w.push(ie({key:N,matches:D,match:A},C));return}Jv(A,ie({currentUrl:v,currentParams:e.matches[e.matches.length-1].params,nextUrl:_,nextParams:n[n.length-1].params},r,{actionResult:g,defaultShouldRevalidate:y}))&&w.push(ie({key:N,matches:D,match:A},C))}),[m,w]}function xA(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function x1(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Jv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Zv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];Z(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Bs(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!eA.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,{hasErrorBoundary:e(ie({},i)),lazy:void 0})}async function bo(t,e,n,r,i,s,o,a,l,u){o===void 0&&(o="/"),a===void 0&&(a=!1),l===void 0&&(l=!1);let c,h,d,g=y=>{let p,f=new Promise((m,w)=>p=w);return d=()=>p(),e.signal.addEventListener("abort",d),Promise.race([y({request:e,params:n.params,context:u}),f])};try{let y=n.route[t];if(n.route.lazy)if(y)h=(await Promise.all([g(y),Zv(n.route,s,i)]))[0];else if(await Zv(n.route,s,i),y=n.route[t],y)h=await g(y);else{if(t==="action")throw An(405,{method:e.method,pathname:new URL(e.url).pathname,routeId:n.route.id});return{type:Be.data,data:void 0}}else Z(y,"Could not find the "+t+' to run on the "'+n.route.id+'" route'),h=await g(y);Z(h!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(y){c=Be.error,h=y}finally{d&&e.signal.removeEventListener("abort",d)}if(bA(h)){let y=h.status;if(TA.has(y)){let m=h.headers.get("Location");if(Z(m,"Redirects returned/thrown from loaders/actions must have a Location header"),D1.test(m)){if(!a){let w=new URL(e.url),C=m.startsWith("//")?new URL(w.protocol+m):new URL(m),N=nh(C.pathname,o)!=null;C.origin===w.origin&&N&&(m=C.pathname+C.search+C.hash)}}else{let w=r.slice(0,r.indexOf(n)+1),C=Hm(w).map(D=>D.pathnameBase),N=R1(m,C,new URL(e.url).pathname);if(Z(Ri(N),"Unable to resolve redirect location: "+m),o){let D=N.pathname;N.pathname=D==="/"?o:Fr([o,D])}m=Ri(N)}if(a)throw h.headers.set("Location",m),h;return{type:Be.redirect,status:y,location:m,revalidate:h.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:c||Be.data,response:h};let p,f=h.headers.get("Content-Type");return f&&/\bapplication\/json\b/.test(f)?p=await h.json():p=await h.text(),c===Be.error?{type:c,error:new Km(y,h.statusText,p),headers:h.headers}:{type:Be.data,data:p,statusCode:h.status,headers:h.headers}}if(c===Be.error)return{type:c,error:h};if(LA(h)){var v,_;return{type:Be.deferred,deferredData:h,statusCode:(v=h.init)==null?void 0:v.status,headers:((_=h.init)==null?void 0:_.headers)&&new Headers(h.init.headers)}}return{type:Be.data,data:h}}function Fo(t,e,n,r){let i=t.createURL(M1(e)).toString(),s={signal:n};if(r&&Hn(r.formMethod)){let{formMethod:o,formEncType:a,formData:l}=r;s.method=o.toUpperCase(),s.body=a==="application/x-www-form-urlencoded"?O1(l):l}return new Request(i,s)}function O1(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,r instanceof File?r.name:r);return e}function OA(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(Z(!Is(c),"Cannot handle redirect results in processLoaderData"),ua(c)){let g=fs(t,d),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[g.route.id]==null&&(o[g.route.id]=v),s[d]=void 0,l||(l=!0,a=N1(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else di(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function e_(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=OA(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d}=s[c];Z(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let g=o[c];if(ua(g)){let v=fs(t.matches,d==null?void 0:d.route.id);u&&u[v.route.id]||(u=ie({},u,{[v.route.id]:g.error})),t.fetchers.delete(h)}else if(Is(g))Z(!1,"Unhandled fetcher revalidation redirect");else if(di(g))Z(!1,"Unhandled fetcher deferred data");else{let v={state:"idle",data:g.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(h,v)}}return{loaderData:l,errors:u}}function t_(t,e,n,r){let i=ie({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function fs(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function n_(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function An(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"&&(a="defer() is not supported in actions")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Km(t||500,o,new Error(a),!0)}function r_(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Is(n))return n}}function M1(t){let e=typeof t=="string"?fr(t):t;return Ri(ie({},e,{hash:""}))}function MA(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function di(t){return t.type===Be.deferred}function ua(t){return t.type===Be.error}function Is(t){return(t&&t.type)===Be.redirect}function LA(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function bA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function FA(t){return CA.has(t.toLowerCase())}function Hn(t){return EA.has(t.toLowerCase())}async function i_(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!x1(u,l)&&(s&&s[l.route.id])!==void 0;di(a)&&(i||c)&&await L1(a,r,i).then(h=>{h&&(n[o]=h||n[o])})}}async function L1(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Be.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Be.error,error:i}}return{type:Be.data,data:t.deferredData.data}}}function b1(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function s_(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function ep(t,e){let n=typeof e=="string"?fr(e).search:e.search;if(t[t.length-1].route.index&&b1(n||""))return t[t.length-1];let r=Hm(t);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $A(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const UA=typeof Object.is=="function"?Object.is:$A,{useState:VA,useEffect:zA,useLayoutEffect:BA,useDebugValue:jA}=rf;function WA(t,e,n){const r=e(),[{inst:i},s]=VA({inst:{value:r,getSnapshot:e}});return BA(()=>{i.value=r,i.getSnapshot=e,kd(i)&&s({inst:i})},[t,r,e]),zA(()=>(kd(i)&&s({inst:i}),t(()=>{kd(i)&&s({inst:i})})),[t]),jA(r),r}function kd(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!UA(n,r)}catch{return!0}}function HA(t,e,n){return e()}const KA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qA=!KA,GA=qA?HA:WA,QA="useSyncExternalStore"in rf?(t=>t.useSyncExternalStore)(rf):GA,qm=P.createContext(null),Gm=P.createContext(null),Qm=P.createContext(null),rh=P.createContext(null),ro=P.createContext({outlet:null,matches:[]}),F1=P.createContext(null);function tp(){return tp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tp.apply(this,arguments)}function ih(){return P.useContext(rh)!=null}function $1(){return ih()||Z(!1),P.useContext(rh).location}function YA(){ih()||Z(!1);let{basename:t,navigator:e}=P.useContext(Qm),{matches:n}=P.useContext(ro),{pathname:r}=$1(),i=JSON.stringify(Hm(n).map(a=>a.pathnameBase)),s=P.useRef(!1);return P.useEffect(()=>{s.current=!0}),P.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=R1(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Fr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}const XA=P.createContext(null);function JA(t){let e=P.useContext(ro).outlet;return e&&P.createElement(XA.Provider,{value:t},e)}function ZA(t,e){ih()||Z(!1);let{navigator:n}=P.useContext(Qm),r=P.useContext(Gm),{matches:i}=P.useContext(ro),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=$1(),u;if(e){var c;let _=typeof e=="string"?fr(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||Z(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",g=ds(t,{pathname:d}),v=rD(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Fr([a,n.encodeLocation?n.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Fr([a,n.encodeLocation?n.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,r||void 0);return e&&v?P.createElement(rh.Provider,{value:{location:tp({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:$e.Pop}},v):v}function eD(){let t=aD(),e=N1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,s)}class tD extends P.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?P.createElement(ro.Provider,{value:this.props.routeContext},P.createElement(F1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nD(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(qm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(ro.Provider,{value:e},r)}function rD(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Z(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=P.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=P.createElement(eD,null));let c=e.concat(r.slice(0,a+1)),h=()=>{let d=s;return l?d=u:o.route.Component?d=P.createElement(o.route.Component,null):o.route.element&&(d=o.route.element),P.createElement(nD,{match:o,routeContext:{outlet:s,matches:c},children:d})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?P.createElement(tD,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var o_;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(o_||(o_={}));var nc;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(nc||(nc={}));function iD(t){let e=P.useContext(Gm);return e||Z(!1),e}function sD(t){let e=P.useContext(ro);return e||Z(!1),e}function oD(t){let e=sD(),n=e.matches[e.matches.length-1];return n.route.id||Z(!1),n.route.id}function aD(){var t;let e=P.useContext(F1),n=iD(nc.UseRouteError),r=oD(nc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function lD(t){let{fallbackElement:e,router:n}=t,r=P.useCallback(()=>n.state,[n]),i=QA(n.subscribe,r,r),s=P.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,u,c)=>n.navigate(l,{state:u,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(l,u,c)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[n]),o=n.basename||"/",a=P.useMemo(()=>({router:n,navigator:s,static:!1,basename:o}),[n,s,o]);return P.createElement(P.Fragment,null,P.createElement(qm.Provider,{value:a},P.createElement(Gm.Provider,{value:i},P.createElement(hD,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:s},n.state.initialized?P.createElement(dD,null):e))),null)}function uD(t){return JA(t.context)}function cD(t){Z(!1)}function hD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=$e.Pop,navigator:s,static:o=!1}=t;ih()&&Z(!1);let a=e.replace(/^\/*/,"/"),l=P.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=fr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,v=P.useMemo(()=>{let _=nh(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:g},navigationType:i}},[a,u,c,h,d,g,i]);return v==null?null:P.createElement(Qm.Provider,{value:l},P.createElement(rh.Provider,{children:n,value:v}))}function dD(t){let{children:e,location:n}=t,r=P.useContext(qm),i=r&&!e?r.router.routes:np(e);return ZA(i,n)}var a_;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(a_||(a_={}));new Promise(()=>{});function np(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,i)=>{if(!P.isValidElement(r))return;let s=[...e,i];if(r.type===P.Fragment){n.push.apply(n,np(r.props.children,s));return}r.type!==cD&&Z(!1),!r.props.index||!r.props.children||Z(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=np(r.props.children,s)),n.push(o)}),n}function fD(t){return!!t.ErrorBoundary||!!t.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rp(){return rp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rp.apply(this,arguments)}function pD(t,e){return AA({basename:e==null?void 0:e.basename,future:e==null?void 0:e.future,history:XN({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||mD(),routes:t,detectErrorBoundary:fD}).initialize()}function mD(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=rp({},e,{errors:gD(e.errors)})),e}function gD(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Km(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}var l_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(l_||(l_={}));var u_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(u_||(u_={}));const U1=P.createContext(null);/**
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
 */const V1={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw io(e)},io=function(t){return new Error("Firebase Database ("+V1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const z1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ym={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(z1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new vD;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B1=function(t){const e=z1(t);return Ym.encodeByteArray(e,!0)},rc=function(t){return B1(t).replace(/\./g,"")},ic=function(t){try{return Ym.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _D(t){return j1(void 0,t)}function j1(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!wD(n)||(t[n]=j1(t[n],e[n]));return t}function wD(t){return t!=="__proto__"}/**
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
 */function ED(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SD=()=>ED().__FIREBASE_DEFAULTS__,CD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ic(t[1]);return e&&JSON.parse(e)},Xm=()=>{try{return SD()||CD()||TD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},W1=t=>{var e,n;return(n=(e=Xm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},H1=t=>{const e=W1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ID=()=>{var t;return(t=Xm())===null||t===void 0?void 0:t.config},K1=t=>{var e;return(e=Xm())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Jm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function q1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[rc(JSON.stringify(n)),rc(JSON.stringify(o)),a].join(".")}/**
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
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function kD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function G1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RD(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Q1(){return V1.NODE_ADMIN===!0}function ND(){try{return typeof indexedDB=="object"}catch{return!1}}function AD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const DD="FirebaseError";class pr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DD,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,al.prototype.create)}}class al{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?PD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pr(i,a,r)}}function PD(t,e){return t.replace(xD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xD=/\{\$([^}]+)}/g;/**
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
 */function Fa(t){return JSON.parse(t)}function ot(t){return JSON.stringify(t)}/**
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
 */const Y1=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Fa(ic(s[0])||""),n=Fa(ic(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},OD=function(t){const e=Y1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},MD=function(t){const e=Y1(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function mr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function js(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ip(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function oc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(c_(s)&&c_(o)){if(!oc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function c_(t){return t!==null&&typeof t=="object"}/**
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
 */function so(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Go(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Qo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class LD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function bD(t,e){const n=new FD(t,e);return n.subscribe.bind(n)}class FD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$D(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Rd),i.error===void 0&&(i.error=Rd),i.complete===void 0&&(i.complete=Rd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $D(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rd(){}function UD(t,e){return`${t} failed: ${e} argument `}/**
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
 */const VD=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ct(t){return t&&t._delegate?t._delegate:t}class Hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const oi="[DEFAULT]";/**
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
 */class zD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jD(e))try{this.getOrInitializeService({instanceIdentifier:oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oi){return this.instances.has(e)}getOptions(e=oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=oi){return this.component?this.component.multipleInstances?e:oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BD(t){return t===oi?void 0:t}function jD(t){return t.instantiationMode==="EAGER"}/**
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
 */class WD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const HD={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},KD=ae.INFO,qD={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},GD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oh{constructor(e){this.name=e,this._logLevel=KD,this._logHandler=GD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const QD=(t,e)=>e.some(n=>t instanceof n);let h_,d_;function YD(){return h_||(h_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XD(){return d_||(d_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const X1=new WeakMap,sp=new WeakMap,J1=new WeakMap,Nd=new WeakMap,eg=new WeakMap;function JD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n($r(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&X1.set(n,t)}).catch(()=>{}),eg.set(e,t),e}function ZD(t){if(sp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sp.set(t,e)}let op={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||J1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eP(t){op=t(op)}function tP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ad(this),e,...n);return J1.set(r,e.sort?e.sort():[e]),$r(r)}:XD().includes(t)?function(...e){return t.apply(Ad(this),e),$r(X1.get(this))}:function(...e){return $r(t.apply(Ad(this),e))}}function nP(t){return typeof t=="function"?tP(t):(t instanceof IDBTransaction&&ZD(t),QD(t,YD())?new Proxy(t,op):t)}function $r(t){if(t instanceof IDBRequest)return JD(t);if(Nd.has(t))return Nd.get(t);const e=nP(t);return e!==t&&(Nd.set(t,e),eg.set(e,t)),e}const Ad=t=>eg.get(t);function rP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=$r(o);return r&&o.addEventListener("upgradeneeded",l=>{r($r(o.result),l.oldVersion,l.newVersion,$r(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const iP=["get","getKey","getAll","getAllKeys","count"],sP=["put","add","delete","clear"],Dd=new Map;function f_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dd.get(e))return Dd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||iP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Dd.set(e,s),s}eP(t=>({...t,get:(e,n,r)=>f_(e,n)||t.get(e,n,r),has:(e,n)=>!!f_(e,n)||t.has(e,n)}));/**
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
 */class oP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ap="@firebase/app",p_="0.9.9";/**
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
 */const Ni=new oh("@firebase/app"),lP="@firebase/app-compat",uP="@firebase/analytics-compat",cP="@firebase/analytics",hP="@firebase/app-check-compat",dP="@firebase/app-check",fP="@firebase/auth",pP="@firebase/auth-compat",mP="@firebase/database",gP="@firebase/database-compat",yP="@firebase/functions",vP="@firebase/functions-compat",_P="@firebase/installations",wP="@firebase/installations-compat",EP="@firebase/messaging",SP="@firebase/messaging-compat",CP="@firebase/performance",TP="@firebase/performance-compat",IP="@firebase/remote-config",kP="@firebase/remote-config-compat",RP="@firebase/storage",NP="@firebase/storage-compat",AP="@firebase/firestore",DP="@firebase/firestore-compat",PP="firebase",xP="9.21.0";/**
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
 */const lp="[DEFAULT]",OP={[ap]:"fire-core",[lP]:"fire-core-compat",[cP]:"fire-analytics",[uP]:"fire-analytics-compat",[dP]:"fire-app-check",[hP]:"fire-app-check-compat",[fP]:"fire-auth",[pP]:"fire-auth-compat",[mP]:"fire-rtdb",[gP]:"fire-rtdb-compat",[yP]:"fire-fn",[vP]:"fire-fn-compat",[_P]:"fire-iid",[wP]:"fire-iid-compat",[EP]:"fire-fcm",[SP]:"fire-fcm-compat",[CP]:"fire-perf",[TP]:"fire-perf-compat",[IP]:"fire-rc",[kP]:"fire-rc-compat",[RP]:"fire-gcs",[NP]:"fire-gcs-compat",[AP]:"fire-fst",[DP]:"fire-fst-compat","fire-js":"fire-js",[PP]:"fire-js-all"};/**
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
 */const ac=new Map,up=new Map;function MP(t,e){try{t.container.addComponent(e)}catch(n){Ni.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ai(t){const e=t.name;if(up.has(e))return Ni.debug(`There were multiple attempts to register component ${e}.`),!1;up.set(e,t);for(const n of ac.values())MP(n,t);return!0}function ah(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const LP={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ur=new al("app","Firebase",LP);/**
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
 */class bP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Vi=xP;function Z1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ur.create("bad-app-name",{appName:String(i)});if(n||(n=ID()),!n)throw Ur.create("no-options");const s=ac.get(i);if(s){if(oc(n,s.options)&&oc(r,s.config))return s;throw Ur.create("duplicate-app",{appName:i})}const o=new WD(i);for(const l of up.values())o.addComponent(l);const a=new bP(n,r,o);return ac.set(i,a),a}function tg(t=lp){const e=ac.get(t);if(!e&&t===lp)return Z1();if(!e)throw Ur.create("no-app",{appName:t});return e}function bn(t,e,n){var r;let i=(r=OP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ni.warn(a.join(" "));return}Ai(new Hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const FP="firebase-heartbeat-database",$P=1,$a="firebase-heartbeat-store";let Pd=null;function eS(){return Pd||(Pd=rP(FP,$P,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($a)}}}).catch(t=>{throw Ur.create("idb-open",{originalErrorMessage:t.message})})),Pd}async function UP(t){try{return(await eS()).transaction($a).objectStore($a).get(tS(t))}catch(e){if(e instanceof pr)Ni.warn(e.message);else{const n=Ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ni.warn(n.message)}}}async function m_(t,e){try{const r=(await eS()).transaction($a,"readwrite");return await r.objectStore($a).put(e,tS(t)),r.done}catch(n){if(n instanceof pr)Ni.warn(n.message);else{const r=Ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ni.warn(r.message)}}}function tS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const VP=1024,zP=30*24*60*60*1e3;class BP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=g_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=zP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=g_(),{heartbeatsToSend:n,unsentEntries:r}=jP(this._heartbeatsCache.heartbeats),i=rc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function g_(){return new Date().toISOString().substring(0,10)}function jP(t,e=VP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),y_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),y_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ND()?AD().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await UP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return m_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return m_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function y_(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function HP(t){Ai(new Hr("platform-logger",e=>new oP(e),"PRIVATE")),Ai(new Hr("heartbeat",e=>new BP(e),"PRIVATE")),bn(ap,p_,t),bn(ap,p_,"esm2017"),bn("fire-js","")}HP("");var KP="firebase",qP="9.21.0";/**
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
 */bn(KP,qP,"app");function ng(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GP=nS,rS=new al("auth","Firebase",nS());/**
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
 */const lc=new oh("@firebase/auth");function QP(t,...e){lc.logLevel<=ae.WARN&&lc.warn(`Auth (${Vi}): ${t}`,...e)}function Cu(t,...e){lc.logLevel<=ae.ERROR&&lc.error(`Auth (${Vi}): ${t}`,...e)}/**
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
 */function En(t,...e){throw rg(t,...e)}function Fn(t,...e){return rg(t,...e)}function YP(t,e,n){const r=Object.assign(Object.assign({},GP()),{[e]:n});return new al("auth","Firebase",r).create(e,{appName:t.name})}function rg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rS.create(t,...e)}function j(t,e,...n){if(!t)throw rg(e,...n)}function Qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cu(e),new Error(e)}function or(t,e){t||Qn(e)}/**
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
 */function cp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function XP(){return v_()==="http:"||v_()==="https:"}function v_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function JP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XP()||kD()||"connection"in navigator)?navigator.onLine:!0}function ZP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ll{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=Zm()||G1()}get(){return JP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ig(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class iS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ex={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tx=new ll(3e4,6e4);function oo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ao(t,e,n,r,i={}){return sS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=so(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),iS.fetch()(oS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ex),e);try{const i=new nx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Jl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Jl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Jl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw YP(t,c,u);En(t,c)}}catch(i){if(i instanceof pr)throw i;En(t,"network-request-failed",{message:String(i)})}}async function ul(t,e,n,r,i={}){const s=await ao(t,e,n,r,i);return"mfaPendingCredential"in s&&En(t,"multi-factor-auth-required",{_serverResponse:s}),s}function oS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ig(t.config,i):`${t.config.apiScheme}://${i}`}class nx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fn(this.auth,"network-request-failed")),tx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Fn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function rx(t,e){return ao(t,"POST","/v1/accounts:delete",e)}async function ix(t,e){return ao(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ca(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sx(t,e=!1){const n=ct(t),r=await n.getIdToken(e),i=sg(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ca(xd(i.auth_time)),issuedAtTime:ca(xd(i.iat)),expirationTime:ca(xd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xd(t){return Number(t)*1e3}function sg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cu("JWT malformed, contained fewer than 3 sections"),null;try{const i=ic(n);return i?JSON.parse(i):(Cu("Failed to decode base64 JWT payload"),null)}catch(i){return Cu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ox(t){const e=sg(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ua(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pr&&ax(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ax({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class aS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ca(this.lastLoginAt),this.creationTime=ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ua(t,ix(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?hx(s.providerUserInfo):[],a=cx(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new aS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function ux(t){const e=ct(t);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function hx(t){return t.map(e=>{var{providerId:n}=e,r=ng(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function dx(t,e){const n=await sS(t,{},async()=>{const r=so({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=oS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Va{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ox(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await dx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Va;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Va,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
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
 */function yr(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _i{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ng(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new aS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ua(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sx(this,e)}reload(){return ux(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _i(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ua(this,rx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:C,providerData:N,stsTokenManager:D}=n;j(m&&D,e,"internal-error");const A=Va.fromJSON(this.name,D);j(typeof m=="string",e,"internal-error"),yr(h,e.name),yr(d,e.name),j(typeof w=="boolean",e,"internal-error"),j(typeof C=="boolean",e,"internal-error"),yr(g,e.name),yr(v,e.name),yr(_,e.name),yr(y,e.name),yr(p,e.name),yr(f,e.name);const ue=new _i({uid:m,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:C,photoURL:v,phoneNumber:g,tenantId:_,stsTokenManager:A,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(ue.providerData=N.map(Q=>Object.assign({},Q))),y&&(ue._redirectEventId=y),ue}static async _fromIdTokenResponse(e,n,r=!1){const i=new Va;i.updateFromServerResponse(n);const s=new _i({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uc(s),s}}/**
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
 */const __=new Map;function Yn(t){or(t instanceof Function,"Expected a class definition");let e=__.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,__.set(t,e),e)}/**
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
 */class lS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lS.type="NONE";const w_=lS;/**
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
 */function Tu(t,e,n){return`firebase:${t}:${e}:${n}`}class ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Tu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Tu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_i._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ks(Yn(w_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Yn(w_);const o=Tu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=_i._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ks(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ks(s,e,r))}}/**
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
 */function E_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fS(e))return"Blackberry";if(pS(e))return"Webos";if(og(e))return"Safari";if((e.includes("chrome/")||cS(e))&&!e.includes("edge/"))return"Chrome";if(dS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uS(t=Rt()){return/firefox\//i.test(t)}function og(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cS(t=Rt()){return/crios\//i.test(t)}function hS(t=Rt()){return/iemobile/i.test(t)}function dS(t=Rt()){return/android/i.test(t)}function fS(t=Rt()){return/blackberry/i.test(t)}function pS(t=Rt()){return/webos/i.test(t)}function lh(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fx(t=Rt()){var e;return lh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function px(){return RD()&&document.documentMode===10}function mS(t=Rt()){return lh(t)||dS(t)||pS(t)||fS(t)||/windows phone/i.test(t)||hS(t)}function mx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function gS(t,e=[]){let n;switch(t){case"Browser":n=E_(Rt());break;case"Worker":n=`${E_(Rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vi}/${r}`}async function yS(t,e){return ao(t,"GET","/v2/recaptchaConfig",oo(t,e))}function S_(t){return t!==void 0&&t.enterprise!==void 0}class vS{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function gx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _S(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Fn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",gx().appendChild(r)})}function yx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const vx="https://www.google.com/recaptcha/enterprise.js?render=",_x="recaptcha-enterprise",wx="NO_RECAPTCHA";class wS{constructor(e){this.type=_x,this.auth=lo(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{yS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new vS(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;S_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(wx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&S_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_S(vx+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function cc(t,e,n,r=!1){const i=new wS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Ex{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Sx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new C_(this),this.idTokenSubscription=new C_(this),this.beforeStateQueue=new Ex(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ct(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yn(e))})}async initializeRecaptchaConfig(){const e=await yS(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new vS(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new wS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new al("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yn(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[Yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&QP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function lo(t){return ct(t)}class C_{constructor(e){this.auth=e,this.observer=null,this.addObserver=bD(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Cx(t,e){const n=ah(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(oc(s,e??{}))return i;En(i,"already-initialized")}return n.initialize({options:e})}function Tx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ix(t,e,n){const r=lo(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ES(e),{host:o,port:a}=kx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Rx()}function ES(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kx(t){const e=ES(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:T_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:T_(o)}}}function T_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Rx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ag{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(e){return Qn("not implemented")}_linkToIdToken(e,n){return Qn("not implemented")}_getReauthenticationResolver(e){return Qn("not implemented")}}async function Nx(t,e){return ao(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Od(t,e){return ul(t,"POST","/v1/accounts:signInWithPassword",oo(t,e))}/**
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
 */async function Ax(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",oo(t,e))}async function Dx(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",oo(t,e))}/**
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
 */class za extends ag{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new za(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new za(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await cc(e,r,"signInWithPassword");return Od(e,i)}else return Od(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await cc(e,r,"signInWithPassword");return Od(e,s)}else return Promise.reject(i)});case"emailLink":return Ax(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Nx(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Dx(e,{idToken:n,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rs(t,e){return ul(t,"POST","/v1/accounts:signInWithIdp",oo(t,e))}/**
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
 */const Px="http://localhost";class Di extends ag{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Di(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ng(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Di(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rs(e,n)}buildRequest(){const e={requestUri:Px,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=so(n)}return e}}/**
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
 */function xx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ox(t){const e=Go(Qo(t)).link,n=e?Go(Qo(e)).deep_link_id:null,r=Go(Qo(t)).deep_link_id;return(r?Go(Qo(r)).link:null)||r||n||e||t}class lg{constructor(e){var n,r,i,s,o,a;const l=Go(Qo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=xx((i=l.mode)!==null&&i!==void 0?i:null);j(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ox(e);try{return new lg(n)}catch{return null}}}/**
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
 */class uo{constructor(){this.providerId=uo.PROVIDER_ID}static credential(e,n){return za._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=lg.parseLink(n);return j(r,"argument-error"),za._fromEmailAndCode(e,r.code,r.tenantId)}}uo.PROVIDER_ID="password";uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class SS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cl extends SS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Sr extends cl{constructor(){super("facebook.com")}static credential(e){return Di._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
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
 */class Cr extends cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Di._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.GOOGLE_SIGN_IN_METHOD="google.com";Cr.PROVIDER_ID="google.com";/**
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
 */class Tr extends cl{constructor(){super("github.com")}static credential(e){return Di._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.GITHUB_SIGN_IN_METHOD="github.com";Tr.PROVIDER_ID="github.com";/**
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
 */class Ir extends cl{constructor(){super("twitter.com")}static credential(e,n){return Di._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
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
 */async function Md(t,e){return ul(t,"POST","/v1/accounts:signUp",oo(t,e))}/**
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
 */class Pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _i._fromIdTokenResponse(e,r,i),o=I_(r);return new Pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=I_(r);return new Pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function I_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class hc extends pr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hc(e,n,r,i)}}function CS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(t,s,e,r):s})}async function Mx(t,e,n=!1){const r=await Ua(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pi._forOperation(t,"link",r)}/**
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
 */async function Lx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ua(t,CS(r,i,e,t),n);j(s.idToken,r,"internal-error");const o=sg(s.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),Pi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&En(r,"user-mismatch"),s}}/**
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
 */async function TS(t,e,n=!1){const r="signIn",i=await CS(t,r,e),s=await Pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function bx(t,e){return TS(lo(t),e)}async function Fx(t,e,n){var r;const i=lo(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await cc(i,s,"signUpPassword");o=Md(i,u)}else o=Md(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await cc(i,s,"signUpPassword");return Md(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Pi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function $x(t,e,n){return bx(ct(t),uo.credential(e,n))}function Ux(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function Vx(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function zx(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function Bx(t){return ct(t).signOut()}const dc="__sak";/**
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
 */class IS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function jx(){const t=Rt();return og(t)||lh(t)}const Wx=1e3,Hx=10;class kS extends IS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jx()&&mx(),this.fallbackToPolling=mS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);px()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Hx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Wx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kS.type="LOCAL";const Kx=kS;/**
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
 */class RS extends IS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}RS.type="SESSION";const NS=RS;/**
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
 */function qx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class uh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new uh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await qx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uh.receivers=[];/**
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
 */function ug(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Gx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ug("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $n(){return window}function Qx(t){$n().location.href=t}/**
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
 */function AS(){return typeof $n().WorkerGlobalScope<"u"&&typeof $n().importScripts=="function"}async function Yx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Jx(){return AS()?self:null}/**
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
 */const DS="firebaseLocalStorageDb",Zx=1,fc="firebaseLocalStorage",PS="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ch(t,e){return t.transaction([fc],e?"readwrite":"readonly").objectStore(fc)}function eO(){const t=indexedDB.deleteDatabase(DS);return new hl(t).toPromise()}function hp(){const t=indexedDB.open(DS,Zx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fc,{keyPath:PS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fc)?e(r):(r.close(),await eO(),e(await hp()))})})}async function k_(t,e,n){const r=ch(t,!0).put({[PS]:e,value:n});return new hl(r).toPromise()}async function tO(t,e){const n=ch(t,!1).get(e),r=await new hl(n).toPromise();return r===void 0?null:r.value}function R_(t,e){const n=ch(t,!0).delete(e);return new hl(n).toPromise()}const nO=800,rO=3;class xS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return AS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uh._getInstance(Jx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Yx(),!this.activeServiceWorker)return;this.sender=new Gx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hp();return await k_(e,dc,"1"),await R_(e,dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>k_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>R_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ch(i,!1).getAll();return new hl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xS.type="LOCAL";const iO=xS;new ll(3e4,6e4);/**
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
 */function sO(t,e){return e?Yn(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class cg extends ag{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oO(t){return TS(t.auth,new cg(t),t.bypassAuthState)}function aO(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Lx(n,new cg(t),t.bypassAuthState)}async function lO(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Mx(n,new cg(t),t.bypassAuthState)}/**
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
 */class OS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oO;case"linkViaPopup":case"linkViaRedirect":return lO;case"reauthViaPopup":case"reauthViaRedirect":return aO;default:En(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uO=new ll(2e3,1e4);class ps extends OS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=ug();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uO.get())};e()}}ps.currentPopupAction=null;/**
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
 */const cO="pendingRedirect",Iu=new Map;class hO extends OS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Iu.get(this.auth._key());if(!e){try{const r=await dO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Iu.set(this.auth._key(),e)}return this.bypassAuthState||Iu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dO(t,e){const n=mO(e),r=pO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fO(t,e){Iu.set(t._key(),e)}function pO(t){return Yn(t._redirectPersistence)}function mO(t){return Tu(cO,t.config.apiKey,t.name)}async function gO(t,e,n=!1){const r=lo(t),i=sO(r,e),o=await new hO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const yO=10*60*1e3;class vO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_O(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!MS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yO&&this.cachedEventUids.clear(),this.cachedEventUids.has(N_(e))}saveEventToCache(e){this.cachedEventUids.add(N_(e)),this.lastProcessedEventTime=Date.now()}}function N_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function MS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _O(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return MS(t);default:return!1}}/**
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
 */async function wO(t,e={}){return ao(t,"GET","/v1/projects",e)}/**
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
 */const EO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SO=/^https?/;async function CO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wO(t);for(const n of e)try{if(TO(n))return}catch{}En(t,"unauthorized-domain")}function TO(t){const e=cp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!SO.test(n))return!1;if(EO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const IO=new ll(3e4,6e4);function A_(){const t=$n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kO(t){return new Promise((e,n)=>{var r,i,s;function o(){A_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{A_(),n(Fn(t,"network-request-failed"))},timeout:IO.get()})}if(!((i=(r=$n().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$n().gapi)===null||s===void 0)&&s.load)o();else{const a=yx("iframefcb");return $n()[a]=()=>{gapi.load?o():n(Fn(t,"network-request-failed"))},_S(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ku=null,e})}let ku=null;function RO(t){return ku=ku||kO(t),ku}/**
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
 */const NO=new ll(5e3,15e3),AO="__/auth/iframe",DO="emulator/auth/iframe",PO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OO(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ig(e,DO):`https://${t.config.authDomain}/${AO}`,r={apiKey:e.apiKey,appName:t.name,v:Vi},i=xO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${so(r).slice(1)}`}async function MO(t){const e=await RO(t),n=$n().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:OO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Fn(t,"network-request-failed"),a=$n().setTimeout(()=>{s(o)},NO.get());function l(){$n().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const LO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bO=500,FO=600,$O="_blank",UO="http://localhost";class D_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VO(t,e,n,r=bO,i=FO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},LO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Rt().toLowerCase();n&&(a=cS(u)?$O:n),uS(u)&&(e=e||UO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(fx(u)&&a!=="_self")return zO(e||"",a),new D_(null);const h=window.open(e||"",a,c);j(h,t,"popup-blocked");try{h.focus()}catch{}return new D_(h)}function zO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const BO="__/auth/handler",jO="emulator/auth/handler",WO=encodeURIComponent("fac");async function P_(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vi,eventId:i};if(e instanceof SS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ip(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof cl){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${WO}=${encodeURIComponent(l)}`:"";return`${HO(t)}?${so(a).slice(1)}${u}`}function HO({config:t}){return t.emulator?ig(t,jO):`https://${t.authDomain}/${BO}`}/**
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
 */const Ld="webStorageSupport";class KO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NS,this._completeRedirectFn=gO,this._overrideRedirectResult=fO}async _openPopup(e,n,r,i){var s;or((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await P_(e,n,r,cp(),i);return VO(e,o,ug())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await P_(e,n,r,cp(),i);return Qx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(or(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MO(e),r=new vO(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ld,{type:Ld},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ld];o!==void 0&&n(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mS()||og()||lh()}}const qO=KO;var x_="@firebase/auth",O_="0.23.1";/**
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
 */class GO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function QO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YO(t){Ai(new Hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),j(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gS(t)},u=new Sx(r,i,s,l);return Tx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ai(new Hr("auth-internal",e=>{const n=lo(e.getProvider("auth").getImmediate());return(r=>new GO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(x_,O_,QO(t)),bn(x_,O_,"esm2017")}/**
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
 */const XO=5*60,JO=K1("authIdTokenMaxAge")||XO;let M_=null;const ZO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JO)return;const i=n==null?void 0:n.token;M_!==i&&(M_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eM(t=tg()){const e=ah(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Cx(t,{popupRedirectResolver:qO,persistence:[iO,Kx,NS]}),r=K1("authTokenSyncURL");if(r){const s=ZO(r);Vx(n,s,()=>s(n.currentUser)),Ux(n,o=>s(o))}const i=W1("auth");return i&&Ix(n,`http://${i}`),n}YO("Browser");var tM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,hg=hg||{},q=tM||self;function pc(){}function hh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function dl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nM(t){return Object.prototype.hasOwnProperty.call(t,bd)&&t[bd]||(t[bd]=++rM)}var bd="closure_uid_"+(1e9*Math.random()>>>0),rM=0;function iM(t,e,n){return t.call.apply(t.bind,arguments)}function sM(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ct=iM:Ct=sM,Ct.apply(null,arguments)}function Zl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function et(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Zr(){this.s=this.s,this.o=this.o}var oM=0;Zr.prototype.s=!1;Zr.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),oM!=0)&&nM(this)};Zr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const LS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function L_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(hh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var aM=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",pc,e),q.removeEventListener("test",pc,e)}catch{}return t}();function mc(t){return/^[\s\xa0]*$/.test(t)}var b_=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Fd(t,e){return t<e?-1:t>e?1:0}function dh(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function Pn(t){return dh().indexOf(t)!=-1}function fg(t){return fg[" "](t),t}fg[" "]=pc;function bS(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var lM=Pn("Opera"),Ws=Pn("Trident")||Pn("MSIE"),FS=Pn("Edge"),dp=FS||Ws,$S=Pn("Gecko")&&!(dh().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge"))&&!(Pn("Trident")||Pn("MSIE"))&&!Pn("Edge"),uM=dh().toLowerCase().indexOf("webkit")!=-1&&!Pn("Edge");function US(){var t=q.document;return t?t.documentMode:void 0}var gc;e:{var $d="",Ud=function(){var t=dh();if($S)return/rv:([^\);]+)(\)|;)/.exec(t);if(FS)return/Edge\/([\d\.]+)/.exec(t);if(Ws)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(uM)return/WebKit\/(\S+)/.exec(t);if(lM)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ud&&($d=Ud?Ud[1]:""),Ws){var Vd=US();if(Vd!=null&&Vd>parseFloat($d)){gc=String(Vd);break e}}gc=$d}var cM={};function hM(){return bS(cM,9,function(){let t=0;const e=b_(String(gc)).split("."),n=b_("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Fd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Fd(i[2].length==0,s[2].length==0)||Fd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var fp;if(q.document&&Ws){var F_=US();fp=F_||parseInt(gc,10)||void 0}else fp=void 0;var dM=fp;function Ba(t,e){if(Tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($S){e:{try{fg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:fM[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ba.$.h.call(this)}}et(Ba,Tt);var fM={2:"touch",3:"pen",4:"mouse"};Ba.prototype.h=function(){Ba.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var fl="closure_listenable_"+(1e6*Math.random()|0),pM=0;function mM(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++pM,this.fa=this.ia=!1}function fh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function pg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function VS(t){const e={};for(const n in t)e[n]=t[n];return e}const $_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<$_.length;s++)n=$_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ph(t){this.src=t,this.g={},this.h=0}ph.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=mp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new mM(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function pp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=LS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(fh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function mp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var mg="closure_lm_"+(1e6*Math.random()|0),zd={};function BS(t,e,n,r,i){if(r&&r.once)return WS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)BS(t,e[s],n,r,i);return null}return n=vg(n),t&&t[fl]?t.O(e,n,dl(r)?!!r.capture:!!r,i):jS(t,e,n,!1,r,i)}function jS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=dl(i)?!!i.capture:!!i,a=yg(t);if(a||(t[mg]=a=new ph(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=gM(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)aM||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(KS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function gM(){function t(n){return e.call(t.src,t.listener,n)}const e=yM;return t}function WS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)WS(t,e[s],n,r,i);return null}return n=vg(n),t&&t[fl]?t.P(e,n,dl(r)?!!r.capture:!!r,i):jS(t,e,n,!0,r,i)}function HS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)HS(t,e[s],n,r,i);else r=dl(r)?!!r.capture:!!r,n=vg(n),t&&t[fl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=mp(s,n,r,i),-1<n&&(fh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=yg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mp(e,n,r,i)),(n=-1<t?e[t]:null)&&gg(n))}function gg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[fl])pp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(KS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yg(e))?(pp(n,t),n.h==0&&(n.src=null,e[mg]=null)):fh(t)}}}function KS(t){return t in zd?zd[t]:zd[t]="on"+t}function yM(t,e){if(t.fa)t=!0;else{e=new Ba(e,this);var n=t.listener,r=t.la||t.src;t.ia&&gg(t),t=n.call(r,e)}return t}function yg(t){return t=t[mg],t instanceof ph?t:null}var Bd="__closure_events_fn_"+(1e9*Math.random()>>>0);function vg(t){return typeof t=="function"?t:(t[Bd]||(t[Bd]=function(e){return t.handleEvent(e)}),t[Bd])}function Ze(){Zr.call(this),this.i=new ph(this),this.S=this,this.J=null}et(Ze,Zr);Ze.prototype[fl]=!0;Ze.prototype.removeEventListener=function(t,e,n,r){HS(this,t,e,n,r)};function lt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Tt(e,t);else if(e instanceof Tt)e.target=e.target||t;else{var i=e;e=new Tt(r,t),zS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=eu(o,r,!0,e)&&i}if(o=e.g=t,i=eu(o,r,!0,e)&&i,i=eu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=eu(o,r,!1,e)&&i}Ze.prototype.N=function(){if(Ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)fh(n[r]);delete t.g[e],t.h--}}this.J=null};Ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ze.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function eu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&pp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var _g=q.JSON.stringify;function vM(){var t=QS;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _M{constructor(){this.h=this.g=null}add(e,n){const r=qS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var qS=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new wM,t=>t.reset());class wM{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function EM(t){q.setTimeout(()=>{throw t},0)}function GS(t,e){gp||SM(),yp||(gp(),yp=!0),QS.add(t,e)}var gp;function SM(){var t=q.Promise.resolve(void 0);gp=function(){t.then(CM)}}var yp=!1,QS=new _M;function CM(){for(var t;t=vM();){try{t.h.call(t.g)}catch(n){EM(n)}var e=qS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yp=!1}function mh(t,e){Ze.call(this),this.h=t||1,this.g=e||q,this.j=Ct(this.qb,this),this.l=Date.now()}et(mh,Ze);O=mh.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),lt(this,"tick"),this.ga&&(wg(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){mh.$.N.call(this),wg(this),delete this.g};function Eg(t,e,n){if(typeof t=="function")n&&(t=Ct(t,n));else if(t&&typeof t.handleEvent=="function")t=Ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function YS(t){t.g=Eg(()=>{t.g=null,t.i&&(t.i=!1,YS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class TM extends Zr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:YS(this)}N(){super.N(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ja(t){Zr.call(this),this.h=t,this.g={}}et(ja,Zr);var U_=[];function XS(t,e,n,r){Array.isArray(n)||(n&&(U_[0]=n.toString()),n=U_);for(var i=0;i<n.length;i++){var s=BS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function JS(t){pg(t.g,function(e,n){this.g.hasOwnProperty(n)&&gg(e)},t),t.g={}}ja.prototype.N=function(){ja.$.N.call(this),JS(this)};ja.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gh(){this.g=!0}gh.prototype.Ea=function(){this.g=!1};function IM(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function kM(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ms(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+NM(t,n)+(r?" "+r:"")})}function RM(t,e){t.info(function(){return"TIMEOUT: "+e})}gh.prototype.info=function(){};function NM(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return _g(n)}catch{return e}}var zi={},V_=null;function yh(){return V_=V_||new Ze}zi.Ta="serverreachability";function ZS(t){Tt.call(this,zi.Ta,t)}et(ZS,Tt);function Wa(t){const e=yh();lt(e,new ZS(e))}zi.STAT_EVENT="statevent";function eC(t,e){Tt.call(this,zi.STAT_EVENT,t),this.stat=e}et(eC,Tt);function Dt(t){const e=yh();lt(e,new eC(e,t))}zi.Ua="timingevent";function tC(t,e){Tt.call(this,zi.Ua,t),this.size=e}et(tC,Tt);function pl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var vh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},nC={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Sg(){}Sg.prototype.h=null;function z_(t){return t.h||(t.h=t.i())}function rC(){}var ml={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Cg(){Tt.call(this,"d")}et(Cg,Tt);function Tg(){Tt.call(this,"c")}et(Tg,Tt);var vp;function _h(){}et(_h,Sg);_h.prototype.g=function(){return new XMLHttpRequest};_h.prototype.i=function(){return{}};vp=new _h;function gl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ja(this),this.P=AM,t=dp?125:void 0,this.V=new mh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new iC}function iC(){this.i=null,this.g="",this.h=!1}var AM=45e3,_p={},yc={};O=gl.prototype;O.setTimeout=function(t){this.P=t};function wp(t,e,n){t.L=1,t.v=Eh(ar(e)),t.s=n,t.S=!0,sC(t,null)}function sC(t,e){t.G=Date.now(),yl(t),t.A=ar(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),fC(n.i,"t",r),t.C=0,n=t.l.I,t.h=new iC,t.g=MC(t.l,n?e:null,!t.s),0<t.O&&(t.M=new TM(Ct(t.Pa,t,t.g),t.O)),XS(t.U,t.g,"readystatechange",t.nb),e=t.I?VS(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Wa(),IM(t.j,t.u,t.A,t.m,t.W,t.s)}O.nb=function(t){t=t.target;const e=this.M;e&&Xn(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const c=Xn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||dp||this.g&&(this.h.h||this.g.ja()||H_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Wa(3):Wa(2)),wh(this);var n=this.g.da();this.aa=n;t:if(oC(this)){var r=H_(this.g);t="";var i=r.length,s=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fi(this),ha(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,kM(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mc(a)){var u=a;break t}}u=null}if(n=u)ms(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ep(this,n);else{this.i=!1,this.o=3,Dt(12),fi(this),ha(this);break e}}this.S?(aC(this,c,o),dp&&this.i&&c==3&&(XS(this.U,this.V,"tick",this.mb),this.V.start())):(ms(this.j,this.m,o,null),Ep(this,o)),c==4&&fi(this),this.i&&!this.J&&(c==4?DC(this.l,this):(this.i=!1,yl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Dt(12)):(this.o=0,Dt(13)),fi(this),ha(this)}}}catch{}finally{}};function oC(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function aC(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=DM(t,n),i==yc){e==4&&(t.o=4,Dt(14),r=!1),ms(t.j,t.m,null,"[Incomplete Response]");break}else if(i==_p){t.o=4,Dt(15),ms(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ms(t.j,t.m,i,null),Ep(t,i);oC(t)&&i!=yc&&i!=_p&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Dt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pg(e),e.L=!0,Dt(11))):(ms(t.j,t.m,n,"[Invalid Chunked Response]"),fi(t),ha(t))}O.mb=function(){if(this.g){var t=Xn(this.g),e=this.g.ja();this.C<e.length&&(wh(this),aC(this,t,e),this.i&&t!=4&&yl(this))}};function DM(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?yc:(n=Number(e.substring(n,r)),isNaN(n)?_p:(r+=1,r+n>e.length?yc:(e=e.substr(r,n),t.C=r+n,e)))}O.cancel=function(){this.J=!0,fi(this)};function yl(t){t.Y=Date.now()+t.P,lC(t,t.P)}function lC(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=pl(Ct(t.lb,t),e)}function wh(t){t.B&&(q.clearTimeout(t.B),t.B=null)}O.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(RM(this.j,this.A),this.L!=2&&(Wa(),Dt(17)),fi(this),this.o=2,ha(this)):lC(this,this.Y-t)};function ha(t){t.l.H==0||t.J||DC(t.l,t)}function fi(t){wh(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,wg(t.V),JS(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Ep(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Sp(n.h,t))){if(!t.K&&Sp(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)wc(n),Th(n);else break e;Dg(n),Dt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=pl(Ct(n.ib,n),6e3));if(1>=gC(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else pi(n,11)}else if((t.K||n.g==t)&&wc(n),!mc(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ig(s,s.h),s.h=null))}if(r.F){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Ne(r.G,r.F,_))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=OC(r,r.I?r.oa:null,r.Y),o.K){yC(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(wh(a),yl(a)),r.g=o}else NC(r);0<n.i.length&&Ih(n)}else u[0]!="stop"&&u[0]!="close"||pi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?pi(n,7):Ag(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}Wa(4)}catch{}}function PM(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(hh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function xM(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(hh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function uC(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(hh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=xM(t),r=PM(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var cC=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OM(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function wi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof wi){this.h=e!==void 0?e:t.h,vc(this,t.j),this.s=t.s,this.g=t.g,_c(this,t.m),this.l=t.l,e=t.i;var n=new Ha;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),B_(this,n),this.o=t.o}else t&&(n=String(t).match(cC))?(this.h=!!e,vc(this,n[1]||"",!0),this.s=Yo(n[2]||""),this.g=Yo(n[3]||"",!0),_c(this,n[4]),this.l=Yo(n[5]||"",!0),B_(this,n[6]||"",!0),this.o=Yo(n[7]||"")):(this.h=!!e,this.i=new Ha(null,this.h))}wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xo(e,j_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xo(e,j_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Xo(n,n.charAt(0)=="/"?bM:LM,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xo(n,$M)),t.join("")};function ar(t){return new wi(t)}function vc(t,e,n){t.j=n?Yo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _c(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function B_(t,e,n){e instanceof Ha?(t.i=e,UM(t.i,t.h)):(n||(e=Xo(e,FM)),t.i=new Ha(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function Eh(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,MM),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function MM(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var j_=/[#\/\?@]/g,LM=/[#\?:]/g,bM=/[#\?]/g,FM=/[#\?@]/g,$M=/#/g;function Ha(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ei(t){t.g||(t.g=new Map,t.h=0,t.i&&OM(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Ha.prototype;O.add=function(t,e){ei(this),this.i=null,t=co(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hC(t,e){ei(t),e=co(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function dC(t,e){return ei(t),e=co(t,e),t.g.has(e)}O.forEach=function(t,e){ei(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};O.sa=function(){ei(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};O.Z=function(t){ei(this);let e=[];if(typeof t=="string")dC(this,t)&&(e=e.concat(this.g.get(co(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return ei(this),this.i=null,t=co(this,t),dC(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function fC(t,e,n){hC(t,e),0<n.length&&(t.i=null,t.g.set(co(t,e),dg(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function co(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function UM(t,e){e&&!t.j&&(ei(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(hC(this,r),fC(this,i,n))},t)),t.j=e}var VM=class{constructor(t,e){this.h=t,this.g=e}};function pC(t){this.l=t||zM,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ka&&q.g.Ka()&&q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zM=10;function mC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gC(t){return t.h?1:t.g?t.g.size:0}function Sp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ig(t,e){t.g?t.g.add(e):t.h=e}function yC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pC.prototype.cancel=function(){if(this.i=vC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function vC(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return dg(t.i)}function kg(){}kg.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};kg.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function BM(){this.g=new kg}function jM(t,e,n){const r=n||"";try{uC(t,function(i,s){let o=i;dl(i)&&(o=_g(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function WM(t,e){const n=new gh;if(q.Image){const r=new Image;r.onload=Zl(tu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Zl(tu,n,r,"TestLoadImage: error",!1,e),r.onabort=Zl(tu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Zl(tu,n,r,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function tu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function vl(t){this.l=t.fc||null,this.j=t.ob||!1}et(vl,Sg);vl.prototype.g=function(){return new Sh(this.l,this.j)};vl.prototype.i=function(t){return function(){return t}}({});function Sh(t,e){Ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Rg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(Sh,Ze);var Rg=0;O=Sh.prototype;O.open=function(t,e){if(this.readyState!=Rg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ka(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_l(this)),this.readyState=Rg};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ka(this)),this.g&&(this.readyState=3,Ka(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_C(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function _C(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_l(this):Ka(this),this.readyState==3&&_C(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,_l(this))};O.Ya=function(t){this.g&&(this.response=t,_l(this))};O.ka=function(){this.g&&_l(this)};function _l(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ka(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ka(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var HM=q.JSON.parse;function Me(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=wC,this.L=this.M=!1}et(Me,Ze);var wC="",KM=/^https?$/i,qM=["POST","PUT"];O=Me.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():vp.g(),this.C=this.u?z_(this.u):z_(vp),this.g.onreadystatechange=Ct(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){W_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=q.FormData&&t instanceof q.FormData,!(0<=LS(qM,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{CC(this),0<this.B&&((this.L=GM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ct(this.ua,this)):this.A=Eg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){W_(this,s)}};function GM(t){return Ws&&hM()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof hg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lt(this,"timeout"),this.abort(8))};function W_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,EC(t),Ch(t)}function EC(t){t.F||(t.F=!0,lt(t,"complete"),lt(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,lt(this,"complete"),lt(this,"abort"),Ch(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ch(this,!0)),Me.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?SC(this):this.kb())};O.kb=function(){SC(this)};function SC(t){if(t.h&&typeof hg<"u"&&(!t.C[1]||Xn(t)!=4||t.da()!=2)){if(t.v&&Xn(t)==4)Eg(t.La,0,t);else if(lt(t,"readystatechange"),Xn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(cC)[1]||null;if(!i&&q.self&&q.self.location){var s=q.self.location.protocol;i=s.substr(0,s.length-1)}r=!KM.test(i?i.toLowerCase():"")}n=r}if(n)lt(t,"complete"),lt(t,"success");else{t.m=6;try{var o=2<Xn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",EC(t)}}finally{Ch(t)}}}}function Ch(t,e){if(t.g){CC(t);const n=t.g,r=t.C[0]?pc:null;t.g=null,t.C=null,e||lt(t,"ready");try{n.onreadystatechange=r}catch{}}}function CC(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function Xn(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),HM(e)}};function H_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case wC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function TC(t){let e="";return pg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ng(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=TC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function $o(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function IC(t){this.Ga=0,this.i=[],this.j=new gh,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$o("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$o("baseRetryDelayMs",5e3,t),this.hb=$o("retryDelaySeedMs",1e4,t),this.eb=$o("forwardChannelMaxRetries",2,t),this.xa=$o("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new pC(t&&t.concurrentRequestLimit),this.Ja=new BM,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}O=IC.prototype;O.qa=8;O.H=1;function Ag(t){if(kC(t),t.H==3){var e=t.W++,n=ar(t.G);Ne(n,"SID",t.J),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),wl(t,n),e=new gl(t,t.j,e,void 0),e.L=2,e.v=Eh(ar(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=MC(e.l,null),e.g.ha(e.v)),e.G=Date.now(),yl(e)}xC(t)}function Th(t){t.g&&(Pg(t),t.g.cancel(),t.g=null)}function kC(t){Th(t),t.u&&(q.clearTimeout(t.u),t.u=null),wc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function Ih(t){mC(t.h)||t.m||(t.m=!0,GS(t.Na,t),t.C=0)}function QM(t,e){return gC(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=pl(Ct(t.Na,t,e),PC(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new gl(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=VS(s),zS(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=RC(this,i,e),n=ar(this.G),Ne(n,"RID",t),Ne(n,"CVER",22),this.F&&Ne(n,"X-HTTP-Session-Id",this.F),wl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(TC(s)))+"&"+e:this.o&&Ng(n,this.o,s)),Ig(this.h,i),this.bb&&Ne(n,"TYPE","init"),this.P?(Ne(n,"$req",e),Ne(n,"SID","null"),i.ba=!0,wp(i,n,null)):wp(i,n,e),this.H=2}}else this.H==3&&(t?K_(this,t):this.i.length==0||mC(this.h)||K_(this))};function K_(t,e){var n;e?n=e.m:n=t.W++;const r=ar(t.G);Ne(r,"SID",t.J),Ne(r,"RID",n),Ne(r,"AID",t.V),wl(t,r),t.o&&t.s&&Ng(r,t.o,t.s),n=new gl(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=RC(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ig(t.h,n),wp(n,r,e)}function wl(t,e){t.ma&&pg(t.ma,function(n,r){Ne(e,r,n)}),t.l&&uC({},function(n,r){Ne(e,r,n)})}function RC(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ct(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{jM(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function NC(t){t.g||t.u||(t.ba=1,GS(t.Ma,t),t.A=0)}function Dg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=pl(Ct(t.Ma,t),PC(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,AC(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=pl(Ct(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Dt(10),Th(this),AC(this))};function Pg(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function AC(t){t.g=new gl(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ar(t.wa);Ne(e,"RID","rpc"),Ne(e,"SID",t.J),Ne(e,"CI",t.M?"0":"1"),Ne(e,"AID",t.V),Ne(e,"TYPE","xmlhttp"),wl(t,e),t.o&&t.s&&Ng(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Eh(ar(e)),n.s=null,n.S=!0,sC(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Th(this),Dg(this),Dt(19))};function wc(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function DC(t,e){var n=null;if(t.g==e){wc(t),Pg(t),t.g=null;var r=2}else if(Sp(t.h,e))n=e.F,yC(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=yh(),lt(r,new tC(r,n)),Ih(t)}else NC(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&QM(t,e)||r==2&&Dg(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:pi(t,5);break;case 4:pi(t,10);break;case 3:pi(t,6);break;default:pi(t,2)}}}function PC(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function pi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ct(t.pb,t);n||(n=new wi("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||vc(n,"https"),Eh(n)),WM(n.toString(),r)}else Dt(2);t.H=0,t.l&&t.l.za(e),xC(t),kC(t)}O.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function xC(t){if(t.H=0,t.pa=[],t.l){const e=vC(t.h);(e.length!=0||t.i.length!=0)&&(L_(t.pa,e),L_(t.pa,t.i),t.h.i.length=0,dg(t.i),t.i.length=0),t.l.ya()}}function OC(t,e,n){var r=n instanceof wi?ar(n):new wi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),_c(r,r.m);else{var i=q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new wi(null,void 0);r&&vc(s,r),e&&(s.g=e),i&&_c(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ne(r,n,e),Ne(r,"VER",t.qa),wl(t,r),r}function MC(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Me(new vl({ob:!0})):new Me(t.va),e.Oa(t.I),e}function LC(){}O=LC.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.Va=function(){};function Ec(){if(Ws&&!(10<=Number(dM)))throw Error("Environmental error: no available transport.")}Ec.prototype.g=function(t,e){return new Ht(t,e)};function Ht(t,e){Ze.call(this),this.g=new IC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!mc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!mc(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ho(this)}et(Ht,Ze);Ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Dt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=OC(t,null,t.Y),Ih(t)};Ht.prototype.close=function(){Ag(this.g)};Ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_g(t),t=n);e.i.push(new VM(e.fb++,t)),e.H==3&&Ih(e)};Ht.prototype.N=function(){this.g.l=null,delete this.j,Ag(this.g),delete this.g,Ht.$.N.call(this)};function bC(t){Cg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}et(bC,Cg);function FC(){Tg.call(this),this.status=1}et(FC,Tg);function ho(t){this.g=t}et(ho,LC);ho.prototype.Ba=function(){lt(this.g,"a")};ho.prototype.Aa=function(t){lt(this.g,new bC(t))};ho.prototype.za=function(t){lt(this.g,new FC)};ho.prototype.ya=function(){lt(this.g,"b")};function YM(){this.blockSize=-1}function Sn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}et(Sn,YM);Sn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function jd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Sn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)jd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){jd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){jd(this,r),i=0;break}}this.h=i,this.i+=e};Sn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function pe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var XM={};function xg(t){return-128<=t&&128>t?bS(XM,t,function(e){return new pe([e|0],0>e?-1:0)}):new pe([t|0],0>t?-1:0)}function xn(t){if(isNaN(t)||!isFinite(t))return Ns;if(0>t)return st(xn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cp;return new pe(e,0)}function $C(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st($C(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xn(Math.pow(e,8)),r=Ns,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=xn(Math.pow(e,s)),r=r.R(s).add(xn(o))):(r=r.R(n),r=r.add(xn(o)))}return r}var Cp=4294967296,Ns=xg(0),Tp=xg(1),q_=xg(16777216);O=pe.prototype;O.ea=function(){if(Xt(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cp+r)*e,e*=Cp}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Jn(this))return"0";if(Xt(this))return"-"+st(this).toString(t);for(var e=xn(Math.pow(t,6)),n=this,r="";;){var i=Cc(n,e).g;n=Sc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Jn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Jn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Xt(t){return t.h==-1}O.X=function(t){return t=Sc(this,t),Xt(t)?-1:Jn(t)?0:1};function st(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new pe(n,~t.h).add(Tp)}O.abs=function(){return Xt(this)?st(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new pe(n,n[n.length-1]&-2147483648?-1:0)};function Sc(t,e){return t.add(st(e))}O.R=function(t){if(Jn(this)||Jn(t))return Ns;if(Xt(this))return Xt(t)?st(this).R(st(t)):st(st(this).R(t));if(Xt(t))return st(this.R(st(t)));if(0>this.X(q_)&&0>t.X(q_))return xn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,nu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,nu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,nu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,nu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new pe(n,0)};function nu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Uo(t,e){this.g=t,this.h=e}function Cc(t,e){if(Jn(e))throw Error("division by zero");if(Jn(t))return new Uo(Ns,Ns);if(Xt(t))return e=Cc(st(t),e),new Uo(st(e.g),st(e.h));if(Xt(e))return e=Cc(t,st(e)),new Uo(st(e.g),e.h);if(30<t.g.length){if(Xt(t)||Xt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Tp,r=e;0>=r.X(t);)n=G_(n),r=G_(r);var i=Qi(n,1),s=Qi(r,1);for(r=Qi(r,2),n=Qi(n,2);!Jn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Qi(r,1),n=Qi(n,1)}return e=Sc(t,i.R(e)),new Uo(i,e)}for(i=Ns;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=xn(n),o=s.R(e);Xt(o)||0<o.X(t);)n-=r,s=xn(n),o=s.R(e);Jn(s)&&(s=Tp),i=i.add(s),t=Sc(t,o)}return new Uo(i,t)}O.gb=function(t){return Cc(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new pe(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new pe(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new pe(n,this.h^t.h)};function G_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new pe(n,t.h)}function Qi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new pe(i,t.h)}Ec.prototype.createWebChannel=Ec.prototype.g;Ht.prototype.send=Ht.prototype.u;Ht.prototype.open=Ht.prototype.m;Ht.prototype.close=Ht.prototype.close;vh.NO_ERROR=0;vh.TIMEOUT=8;vh.HTTP_ERROR=6;nC.COMPLETE="complete";rC.EventType=ml;ml.OPEN="a";ml.CLOSE="b";ml.ERROR="c";ml.MESSAGE="d";Ze.prototype.listen=Ze.prototype.O;Me.prototype.listenOnce=Me.prototype.P;Me.prototype.getLastError=Me.prototype.Sa;Me.prototype.getLastErrorCode=Me.prototype.Ia;Me.prototype.getStatus=Me.prototype.da;Me.prototype.getResponseJson=Me.prototype.Wa;Me.prototype.getResponseText=Me.prototype.ja;Me.prototype.send=Me.prototype.ha;Me.prototype.setWithCredentials=Me.prototype.Oa;Sn.prototype.digest=Sn.prototype.l;Sn.prototype.reset=Sn.prototype.reset;Sn.prototype.update=Sn.prototype.j;pe.prototype.add=pe.prototype.add;pe.prototype.multiply=pe.prototype.R;pe.prototype.modulo=pe.prototype.gb;pe.prototype.compare=pe.prototype.X;pe.prototype.toNumber=pe.prototype.ea;pe.prototype.toString=pe.prototype.toString;pe.prototype.getBits=pe.prototype.D;pe.fromNumber=xn;pe.fromString=$C;var JM=function(){return new Ec},ZM=function(){return yh()},Wd=vh,e2=nC,t2=zi,Q_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},n2=vl,ru=rC,r2=Me,i2=Sn,As=pe;const Y_="@firebase/firestore";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let fo="9.21.0";/**
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
 */const xi=new oh("@firebase/firestore");function X_(){return xi.logLevel}function $(t,...e){if(xi.logLevel<=ae.DEBUG){const n=e.map(Og);xi.debug(`Firestore (${fo}): ${t}`,...n)}}function lr(t,...e){if(xi.logLevel<=ae.ERROR){const n=e.map(Og);xi.error(`Firestore (${fo}): ${t}`,...n)}}function Hs(t,...e){if(xi.logLevel<=ae.WARN){const n=e.map(Og);xi.warn(`Firestore (${fo}): ${t}`,...n)}}function Og(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${fo}) INTERNAL ASSERTION FAILED: `+t;throw lr(e),new Error(e)}function Ie(t,e){t||K()}function J(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends pr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class UC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class o2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class a2{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new UC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new gt(e)}}class l2{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class u2{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new l2(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class c2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class h2{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.T=n.token,new c2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function d2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class VC{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=d2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Ks(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new b(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new b(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new b(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new He(0,0))}static max(){return new G(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class qa{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends qa{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new b(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const f2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends qa{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return f2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new b(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new b(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new b(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new b(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Ce.fromString(e))}static fromName(e){return new z(Ce.fromString(e).popFirst(5))}static empty(){return new z(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Ce(e.slice()))}}function p2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Kr(i,z.empty(),e)}function m2(t){return new Kr(t.readTime,t.key,-1)}class Kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kr(G.min(),z.empty(),-1)}static max(){return new Kr(G.max(),z.empty(),-1)}}function g2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const y2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class v2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function El(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==y2)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Sl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Mg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Mg.ct=-1;function kh(t){return t==null}function Tc(t){return t===0&&1/t==-1/0}function _2(t){return typeof t=="number"&&Number.isInteger(t)&&!Tc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function J_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function po(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new iu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new iu(this.root,e,this.comparator,!1)}getReverseIterator(){return new iu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new iu(this.root,e,this.comparator,!0)}}class iu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,r,i){return this}insert(t,e,n){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Z_(this.data.getIterator())}getIteratorFrom(e){return new Z_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class Z_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mn{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new mn([])}unionWith(e){let n=new It(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class BC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new BC("Invalid base64 string: "+i):i}}(e);return new Nt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const w2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=w2.exec(t);if(Ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Oi(t){return typeof t=="string"?Nt.fromBase64String(t):Nt.fromUint8Array(t)}/**
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
 */function Lg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bg(t){const e=t.mapValue.fields.__previous_value__;return Lg(e)?bg(e):e}function Ga(t){const e=qr(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class E2{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Qa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const su={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lg(t)?4:S2(t)?9007199254740991:10:K()}function zn(t,e){if(t===e)return!0;const n=Mi(t);if(n!==Mi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ga(t).isEqual(Ga(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=qr(r.timestampValue),o=qr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Oi(r.bytesValue).isEqual(Oi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ue(r.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(r.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ue(r.integerValue)===Ue(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ue(r.doubleValue),o=Ue(i.doubleValue);return s===o?Tc(s)===Tc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ks(t.arrayValue.values||[],e.arrayValue.values||[],zn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(J_(s)!==J_(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!zn(s[a],o[a])))return!1;return!0}(t,e);default:return K()}}function Ya(t,e){return(t.values||[]).find(n=>zn(n,e))!==void 0}function qs(t,e){if(t===e)return 0;const n=Mi(t),r=Mi(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ue(i.integerValue||i.doubleValue),a=Ue(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return e0(t.timestampValue,e.timestampValue);case 4:return e0(Ga(t),Ga(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Oi(i),a=Oi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=he(o[l],a[l]);if(u!==0)return u}return he(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=he(Ue(i.latitude),Ue(s.latitude));return o!==0?o:he(Ue(i.longitude),Ue(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=qs(o[l],a[l]);if(u)return u}return he(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===su.mapValue&&s===su.mapValue)return 0;if(i===su.mapValue)return 1;if(s===su.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=he(a[c],u[c]);if(h!==0)return h;const d=qs(o[a[c]],l[u[c]]);if(d!==0)return d}return he(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function e0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=qr(t),r=qr(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function Gs(t){return Ip(t)}function Ip(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=qr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Oi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ip(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ip(r.fields[a])}`;return s+"}"}(t.mapValue):K();var e,n}function t0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kp(t){return!!t&&"integerValue"in t}function Fg(t){return!!t&&"arrayValue"in t}function n0(t){return!!t&&"nullValue"in t}function r0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ru(t){return!!t&&"mapValue"in t}function da(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return po(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=da(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=da(t.arrayValue.values[n]);return e}return Object.assign({},t)}function S2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ru(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=da(n)}setAll(e){let n=Et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=da(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ru(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ru(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){po(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Jt(da(this.value))}}function jC(t){const e=[];return po(t.fields,(n,r)=>{const i=new Et([n]);if(Ru(r)){const s=jC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new mn(e)}/**
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
 */class vt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new vt(e,0,G.min(),G.min(),G.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,i){return new vt(e,1,n,G.min(),r,i,0)}static newNoDocument(e,n){return new vt(e,2,n,G.min(),G.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,G.min(),G.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ic{constructor(e,n){this.position=e,this.inclusive=n}}function i0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=qs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function s0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class fa{constructor(e,n="asc"){this.field=e,this.dir=n}}function C2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class WC{}class ze extends WC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new I2(e,n,r):n==="array-contains"?new N2(e,r):n==="in"?new A2(e,r):n==="not-in"?new D2(e,r):n==="array-contains-any"?new P2(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new k2(e,r):new R2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qs(n,this.value)):n!==null&&Mi(this.value)===Mi(n)&&this.matchesComparison(qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Cn extends WC{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Cn(e,n)}matches(e){return HC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function HC(t){return t.op==="and"}function KC(t){return T2(t)&&HC(t)}function T2(t){for(const e of t.filters)if(e instanceof Cn)return!1;return!0}function Rp(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+Gs(t.value);if(KC(t))return t.filters.map(e=>Rp(e)).join(",");{const e=t.filters.map(n=>Rp(n)).join(",");return`${t.op}(${e})`}}function qC(t,e){return t instanceof ze?function(n,r){return r instanceof ze&&n.op===r.op&&n.field.isEqual(r.field)&&zn(n.value,r.value)}(t,e):t instanceof Cn?function(n,r){return r instanceof Cn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&qC(s,r.filters[o]),!0):!1}(t,e):void K()}function GC(t){return t instanceof ze?function(e){return`${e.field.canonicalString()} ${e.op} ${Gs(e.value)}`}(t):t instanceof Cn?function(e){return e.op.toString()+" {"+e.getFilters().map(GC).join(" ,")+"}"}(t):"Filter"}class I2 extends ze{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class k2 extends ze{constructor(e,n){super(e,"in",n),this.keys=QC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class R2 extends ze{constructor(e,n){super(e,"not-in",n),this.keys=QC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function QC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class N2 extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fg(n)&&Ya(n.arrayValue,this.value)}}class A2 extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ya(this.value.arrayValue,n)}}class D2 extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ya(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ya(this.value.arrayValue,n)}}class P2 extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ya(this.value.arrayValue,r))}}/**
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
 */class x2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function o0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new x2(t,e,n,r,i,s,o)}function $g(t){const e=J(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),kh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Gs(r)).join(",")),e.ft=n}return e.ft}function Ug(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!C2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!s0(t.startAt,e.startAt)&&s0(t.endAt,e.endAt)}function Np(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Cl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function O2(t,e,n,r,i,s,o,a){return new Cl(t,e,n,r,i,s,o,a)}function YC(t){return new Cl(t)}function a0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function XC(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vg(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function JC(t){return t.collectionGroup!==null}function Ds(t){const e=J(t);if(e.dt===null){e.dt=[];const n=Vg(e),r=XC(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new fa(n)),e.dt.push(new fa(Et.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new fa(Et.keyField(),s))}}}return e.dt}function ur(t){const e=J(t);if(!e._t)if(e.limitType==="F")e._t=o0(e.path,e.collectionGroup,Ds(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ds(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new fa(s.field,o))}const r=e.endAt?new Ic(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ic(e.startAt.position,e.startAt.inclusive):null;e._t=o0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Ap(t,e){e.getFirstInequalityField(),Vg(t);const n=t.filters.concat([e]);return new Cl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Dp(t,e,n){return new Cl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rh(t,e){return Ug(ur(t),ur(e))&&t.limitType===e.limitType}function ZC(t){return`${$g(ur(t))}|lt:${t.limitType}`}function Pp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>GC(r)).join(", ")}]`),kh(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Gs(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Gs(r)).join(",")),`Target(${n})`}(ur(t))}; limitType=${t.limitType})`}function Nh(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ds(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=i0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ds(n),r)||n.endAt&&!function(i,s,o){const a=i0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ds(n),r))}(t,e)}function M2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function eT(t){return(e,n)=>{let r=!1;for(const i of Ds(t)){const s=L2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function L2(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?qs(a,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class mo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){po(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return zC(this.inner)}size(){return this.innerSize}}/**
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
 */const b2=new xe(z.comparator);function cr(){return b2}const tT=new xe(z.comparator);function Jo(...t){let e=tT;for(const n of t)e=e.insert(n.key,n);return e}function nT(t){let e=tT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function mi(){return pa()}function rT(){return pa()}function pa(){return new mo(t=>t.toString(),(t,e)=>t.isEqual(e))}const F2=new xe(z.comparator),$2=new It(z.comparator);function ee(...t){let e=$2;for(const n of t)e=e.add(n);return e}const U2=new It(he);function V2(){return U2}/**
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
 */function iT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tc(e)?"-0":e}}function sT(t){return{integerValue:""+t}}function z2(t,e){return _2(e)?sT(e):iT(t,e)}/**
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
 */class Ah{constructor(){this._=void 0}}function B2(t,e,n){return t instanceof kc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Lg(i)&&(i=bg(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Xa?aT(t,e):t instanceof Ja?lT(t,e):function(r,i){const s=oT(r,i),o=l0(s)+l0(r.wt);return kp(s)&&kp(r.wt)?sT(o):iT(r.serializer,o)}(t,e)}function j2(t,e,n){return t instanceof Xa?aT(t,e):t instanceof Ja?lT(t,e):n}function oT(t,e){return t instanceof Rc?kp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class kc extends Ah{}class Xa extends Ah{constructor(e){super(),this.elements=e}}function aT(t,e){const n=uT(e);for(const r of t.elements)n.some(i=>zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ja extends Ah{constructor(e){super(),this.elements=e}}function lT(t,e){let n=uT(e);for(const r of t.elements)n=n.filter(i=>!zn(i,r));return{arrayValue:{values:n}}}class Rc extends Ah{constructor(e,n){super(),this.serializer=e,this.wt=n}}function l0(t){return Ue(t.integerValue||t.doubleValue)}function uT(t){return Fg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function W2(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Xa&&r instanceof Xa||n instanceof Ja&&r instanceof Ja?Ks(n.elements,r.elements,zn):n instanceof Rc&&r instanceof Rc?zn(n.wt,r.wt):n instanceof kc&&r instanceof kc}(t.transform,e.transform)}class H2{constructor(e,n){this.version=e,this.transformResults=n}}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Dh{}function cT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zg(t.key,Un.none()):new Tl(t.key,t.data,Un.none());{const n=t.data,r=Jt.empty();let i=new It(Et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Bi(t.key,r,new mn(i.toArray()),Un.none())}}function K2(t,e,n){t instanceof Tl?function(r,i,s){const o=r.value.clone(),a=c0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Bi?function(r,i,s){if(!Nu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=c0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(hT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ma(t,e,n,r){return t instanceof Tl?function(i,s,o,a){if(!Nu(i.precondition,s))return o;const l=i.value.clone(),u=h0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Bi?function(i,s,o,a){if(!Nu(i.precondition,s))return o;const l=h0(i.fieldTransforms,a,s),u=s.data;return u.setAll(hT(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Nu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function q2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=oT(r.transform,i||null);s!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,s))}return n||null}function u0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ks(n,r,(i,s)=>W2(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tl extends Dh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bi extends Dh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function hT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function c0(t,e,n){const r=new Map;Ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,j2(o,a,n[i]))}return r}function h0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,B2(s,o,e))}return r}class zg extends Dh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class G2 extends Dh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Q2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&K2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ma(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ma(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=rT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=cT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Ks(this.mutations,e.mutations,(n,r)=>u0(n,r))&&Ks(this.baseMutations,e.baseMutations,(n,r)=>u0(n,r))}}class Bg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ie(e.mutations.length===r.length);let i=F2;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Bg(e,n,r,i)}}/**
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
 */class Y2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class X2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Fe,re;function J2(t){switch(t){default:return K();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function dT(t){if(t===void 0)return lr("GRPC error has no .code"),T.UNKNOWN;switch(t){case Fe.OK:return T.OK;case Fe.CANCELLED:return T.CANCELLED;case Fe.UNKNOWN:return T.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return T.INTERNAL;case Fe.UNAVAILABLE:return T.UNAVAILABLE;case Fe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Fe.NOT_FOUND:return T.NOT_FOUND;case Fe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Fe.ABORTED:return T.ABORTED;case Fe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Fe.DATA_LOSS:return T.DATA_LOSS;default:return K()}}(re=Fe||(Fe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class jg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ou}static getOrCreateInstance(){return ou===null&&(ou=new jg),ou}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ou=null;/**
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
 */function Z2(){return new TextEncoder}/**
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
 */const eL=new As([4294967295,4294967295],0);function d0(t){const e=Z2().encode(t),n=new i2;return n.update(e),new Uint8Array(n.digest())}function f0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new As([n,r],0),new As([i,s],0)]}class Wg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zo(`Invalid padding: ${n}`);if(r<0)throw new Zo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zo(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=As.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(As.fromNumber(r)));return i.compare(eL)===1&&(i=new As([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=d0(e),[r,i]=f0(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Wg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=d0(e),[r,i]=f0(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ph{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Il.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ph(G.min(),i,new xe(he),cr(),ee())}}class Il{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Il(r,n,ee(),ee(),ee())}}/**
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
 */class Au{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class fT{constructor(e,n){this.targetId=e,this.bt=n}}class pT{constructor(e,n,r=Nt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class p0{constructor(){this.Vt=0,this.St=g0(),this.Dt=Nt.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=ee(),n=ee(),r=ee();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Il(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=g0()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class tL{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=cr(),this.jt=m0(),this.zt=new xe(he)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(Np(o))if(i===0){const a=new z(o.path);this.Jt(r,a,vt.newNoDocument(a,G.min()))}else Ie(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,u)}(n=jg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,g,v,_,y,p;const f={localCacheCount:c,existenceFilterCount:h.count},m=h.unchangedNames;return m&&(f.bloomFilter={applied:u===0,hashCount:(d=m==null?void 0:m.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(_=(v=(g=m==null?void 0:m.bits)===null||g===void 0?void 0:g.bitmap)===null||v===void 0?void 0:v.length)!==null&&_!==void 0?_:0,padding:(p=(y=m==null?void 0:m.bits)===null||y===void 0?void 0:y.padding)!==null&&p!==void 0?p:0}),f}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Oi(s).toUint8Array()}catch(c){if(c instanceof BC)return Hs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Wg(l,o,a)}catch(c){return Hs(c instanceof Zo?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.yt===0?1:i!==n-this.re(e.targetId,u)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&Np(a.target)){const l=new z(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,vt.newNoDocument(l,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=ee();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ne(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new Ph(e,n,this.zt,this.Qt,r);return this.Qt=cr(),this.jt=m0(),this.zt=new xe(he),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new p0,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new It(he),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new p0),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function m0(){return new xe(z.comparator)}function g0(){return new xe(z.comparator)}const nL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),rL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),iL=(()=>({and:"AND",or:"OR"}))();class sL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xp(t,e){return t.useProto3Json||kh(e)?e:{value:e}}function Nc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function oL(t,e){return Nc(t,e.toTimestamp())}function Vn(t){return Ie(!!t),G.fromTimestamp(function(e){const n=qr(e);return new He(n.seconds,n.nanos)}(t))}function Hg(t,e){return function(n){return new Ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function gT(t){const e=Ce.fromString(t);return Ie(wT(e)),e}function Op(t,e){return Hg(t.databaseId,e.path)}function Hd(t,e){const n=gT(e);if(n.get(1)!==t.databaseId.projectId)throw new b(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(yT(n))}function Mp(t,e){return Hg(t.databaseId,e)}function aL(t){const e=gT(t);return e.length===4?Ce.emptyPath():yT(e)}function Lp(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yT(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function y0(t,e,n){return{name:Op(t,e),fields:n.value.mapValue.fields}}function lL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Ie(u===void 0||typeof u=="string"),Nt.fromBase64String(u||"")):(Ie(u===void 0||u instanceof Uint8Array),Nt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:dT(l.code);return new b(u,l.message||"")}(o);n=new pT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Hd(t,r.document.name),s=Vn(r.document.updateTime),o=r.document.createTime?Vn(r.document.createTime):G.min(),a=new Jt({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Au(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Hd(t,r.document),s=r.readTime?Vn(r.readTime):G.min(),o=vt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Au([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Hd(t,r.document),s=r.removedTargetIds||[];n=new Au([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new X2(i,s),a=r.targetId;n=new fT(a,o)}}return n}function uL(t,e){let n;if(e instanceof Tl)n={update:y0(t,e.key,e.value)};else if(e instanceof zg)n={delete:Op(t,e.key)};else if(e instanceof Bi)n={update:y0(t,e.key,e.data),updateMask:vL(e.fieldMask)};else{if(!(e instanceof G2))return K();n={verify:Op(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof kc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xa)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ja)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Rc)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:oL(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function cL(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Vn(r.updateTime):Vn(i);return s.isEqual(G.min())&&(s=Vn(i)),new H2(s,r.transformResults||[])}(n,e))):[]}function hL(t,e){return{documents:[Mp(t,e.path)]}}function dL(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Mp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Mp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return _T(Cn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Xi(c.field),direction:mL(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=xp(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function fL(t){let e=aL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ie(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=vT(c);return h instanceof Cn&&KC(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new fa(Ji(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,kh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Ic(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Ic(d,h)}(n.endAt)),O2(e,i,o,s,a,"F",l,u)}function pL(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vT(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ji(e.unaryFilter.field);return ze.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ji(e.unaryFilter.field);return ze.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ji(e.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ji(e.unaryFilter.field);return ze.create(s,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return ze.create(Ji(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Cn.create(e.compositeFilter.filters.map(n=>vT(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function mL(t){return nL[t]}function gL(t){return rL[t]}function yL(t){return iL[t]}function Xi(t){return{fieldPath:t.canonicalString()}}function Ji(t){return Et.fromServerFormat(t.fieldPath)}function _T(t){return t instanceof ze?function(e){if(e.op==="=="){if(r0(e.value))return{unaryFilter:{field:Xi(e.field),op:"IS_NAN"}};if(n0(e.value))return{unaryFilter:{field:Xi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(r0(e.value))return{unaryFilter:{field:Xi(e.field),op:"IS_NOT_NAN"}};if(n0(e.value))return{unaryFilter:{field:Xi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xi(e.field),op:gL(e.op),value:e.value}}}(t):t instanceof Cn?function(e){const n=e.getFilters().map(r=>_T(r));return n.length===1?n[0]:{compositeFilter:{op:yL(e.op),filters:n}}}(t):K()}function vL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Nr{constructor(e,n,r,i,s=G.min(),o=G.min(),a=Nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class _L{constructor(e){this.le=e}}function wL(t){const e=fL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dp(e,e.limit,"L"):e}/**
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
 */class EL{constructor(){this.sn=new SL}addToCollectionParentIndex(e,n){return this.sn.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Kr.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Kr.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class SL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new It(Ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new It(Ce.comparator)).toArray()}}/**
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
 */class Qs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Qs(0)}static kn(){return new Qs(-1)}}/**
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
 */class CL{constructor(){this.changes=new mo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class TL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class IL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ma(r.mutation,i,mn.empty(),He.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=mi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Jo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=mi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=cr();const o=pa(),a=pa();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Bi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ma(c.mutation,u,c.mutation.getFieldMask(),He.now())):o.set(u.key,mn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new TL(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=pa();let i=new xe((o,a)=>o-a),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||mn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ee()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=rT();c.forEach(d=>{if(!s.has(d)){const g=cT(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):JC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(mi());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?R.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ee())).next(c=>({batchId:a,changes:nT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let i=Jo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Jo();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(u,c){return new Cl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,vt.newInvalidDocument(u)))});let o=Jo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ma(u.mutation,l,mn.empty(),He.now()),Nh(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class kL{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return R.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:Vn(r.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:wL(r.bundledQuery),readTime:Vn(r.readTime)}}(n)),R.resolve()}}/**
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
 */class RL{constructor(){this.overlays=new xe(z.comparator),this.hs=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=mi();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=mi(),s=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=mi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=mi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Y2(n,r));let s=this.hs.get(n);s===void 0&&(s=ee(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
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
 */class Kg{constructor(){this.ls=new It(Ge.fs),this.ds=new It(Ge._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new Ge(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new z(new Ce([])),r=new Ge(n,e),i=new Ge(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new z(new Ce([])),r=new Ge(n,e),i=new Ge(n,e+1);let s=ee();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ge(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return z.comparator(e.key,n.key)||he(e.Es,n.Es)}static _s(e,n){return he(e.Es,n.Es)||z.comparator(e.key,n.key)}}/**
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
 */class NL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new It(Ge.fs)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Q2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ge(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),i=new Ge(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new It(he);return n.forEach(i=>{const s=new Ge(i,0),o=new Ge(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),R.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const o=new Ge(new z(s),0);let a=new It(he);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Es)),!0)},o),R.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ie(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return R.forEach(n.mutations,i=>{const s=new Ge(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new Ge(n,0),i=this.Rs.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class AL{constructor(e){this.Ss=e,this.docs=new xe(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():vt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=cr();const o=n.path,a=new z(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||g2(m2(c),r)<=0||(i.has(c.key)||Nh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Ds(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DL(this)}getSize(e){return R.resolve(this.size)}}class DL extends CL{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class PL{constructor(e){this.persistence=e,this.Cs=new mo(n=>$g(n),Ug),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Kg,this.targetCount=0,this.ks=Qs.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),R.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.$n(n),R.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Ns.containsKey(n))}}/**
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
 */class xL{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Mg(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new PL(this),this.indexManager=new EL,this.remoteDocumentCache=function(r){return new AL(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new _L(n),this.Ls=new kL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new NL(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new OL(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return R.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class OL extends v2{constructor(e){super(),this.currentSequenceNumber=e}}class qg{constructor(e){this.persistence=e,this.Gs=new Kg,this.Qs=null}static js(e){return new qg(e)}get zs(){if(this.Qs)return this.Qs;throw K()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),R.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.zs,r=>{const i=z.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,G.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return R.or([()=>R.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class Gg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Gg(e,n.fromCache,r,i)}}/**
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
 */class ML{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(a0(n))return R.resolve(null);let r=ur(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Dp(n,null,"F"),r=ur(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Qi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,Dp(n,null,"F")):this.zi(e,u,n,l)}))})))}Ki(e,n,r,i){return a0(n)||i.isEqual(G.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(X_()<=ae.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pp(n)),this.zi(e,o,n,p2(i,-1)))})}Qi(e,n){let r=new It(eT(e));return n.forEach((i,s)=>{Nh(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return X_()<=ae.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Pp(n)),this.qi.getDocumentsMatchingQuery(e,n,Kr.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class LL{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new xe(he),this.Ji=new mo(s=>$g(s),Ug),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IL(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function bL(t,e,n,r){return new LL(t,e,n,r)}async function ET(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ee();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function FL(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=R.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(v=>{const _=l.docVersions.get(g);Ie(_!==null),v.version.compareTo(_)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ee();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ST(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function $L(t,e){const n=J(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Nt.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(v,_,y){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,g,c)&&a.push(n.Fs.updateTargetData(s,g))});let l=cr(),u=ee();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(UL(s,o,e.documentUpdates).next(c=>{l=c.er,u=c.nr})),!r.isEqual(G.min())){const c=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Hi=i,s))}function UL(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=cr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(G.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{er:o,nr:i}})}function VL(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zL(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new Nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function bp(t,e,n){const r=J(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sl(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function v0(t,e,n){const r=J(t);let i=G.min(),s=ee();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=J(a),h=c.Ji.get(u);return h!==void 0?R.resolve(c.Hi.get(h)):c.Fs.getTargetData(l,u)}(r,o,ur(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:G.min(),n?s:ee())).next(a=>(BL(r,M2(e),a),{documents:a,sr:s})))}function BL(t,e,n){let r=t.Yi.get(e)||G.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}class _0{constructor(){this.activeTargetIds=V2()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jL{constructor(){this.Wr=new _0,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new _0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class WL{Jr(e){}shutdown(){}}/**
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
 */class w0{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let au=null;function Kd(){return au===null?au=268435456+Math.round(2147483648*Math.random()):au++,"0x"+au.toString(16)}/**
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
 */const HL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class KL{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const mt="WebChannelConnection";class qL extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=Kd(),a=this.Io(e,n);$("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(e,a,l,r).then(u=>($("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Hs("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+fo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=HL[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=Kd();return new Promise((o,a)=>{const l=new r2;l.setWithCredentials(!0),l.listenOnce(e2.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Wd.NO_ERROR:const c=l.getResponseJson();$(mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Wd.TIMEOUT:$(mt,`RPC '${e}' ${s} timed out`),a(new b(T.DEADLINE_EXCEEDED,"Request time out"));break;case Wd.HTTP_ERROR:const h=l.getStatus();if($(mt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const v=function(_){const y=_.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(y)>=0?y:T.UNKNOWN}(g.status);a(new b(v,g.message))}else a(new b(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new b(T.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{$(mt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);$(mt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Kd(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=JM(),a=ZM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new n2({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");$(mt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const g=new KL({io:_=>{d?$(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(h||($(mt,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),$(mt,`RPC '${e}' stream ${i} sending:`,_),c.send(_))},ro:()=>c.close()}),v=(_,y,p)=>{_.listen(y,f=>{try{p(f)}catch(m){setTimeout(()=>{throw m},0)}})};return v(c,ru.EventType.OPEN,()=>{d||$(mt,`RPC '${e}' stream ${i} transport opened.`)}),v(c,ru.EventType.CLOSE,()=>{d||(d=!0,$(mt,`RPC '${e}' stream ${i} transport closed`),g.fo())}),v(c,ru.EventType.ERROR,_=>{d||(d=!0,Hs(mt,`RPC '${e}' stream ${i} transport errored:`,_),g.fo(new b(T.UNAVAILABLE,"The operation could not be completed")))}),v(c,ru.EventType.MESSAGE,_=>{var y;if(!d){const p=_.data[0];Ie(!!p);const f=p,m=f.error||((y=f[0])===null||y===void 0?void 0:y.error);if(m){$(mt,`RPC '${e}' stream ${i} received error:`,m);const w=m.status;let C=function(D){const A=Fe[D];if(A!==void 0)return dT(A)}(w),N=m.message;C===void 0&&(C=T.INTERNAL,N="Unknown error status: "+w+" with message "+m.message),d=!0,g.fo(new b(C,N)),c.close()}else $(mt,`RPC '${e}' stream ${i} received:`,p),g._o(p)}}),v(a,t2.STAT_EVENT,_=>{_.stat===Q_.PROXY?$(mt,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===Q_.NOPROXY&&$(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.lo()},0),g}}function qd(){return typeof document<"u"?document:null}/**
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
 */function xh(t){return new sL(t,!0)}/**
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
 */class CT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class TT{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new CT(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(lr(n.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new b(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GL extends TT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=lL(this.serializer,e),r=function(i){if(!("targetChange"in i))return G.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?G.min():s.readTime?Vn(s.readTime):G.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=Lp(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Np(a)?{documents:hL(i,a)}:{query:dL(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=mT(i,s.resumeToken);const l=xp(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(G.min())>0){o.readTime=Nc(i,s.snapshotVersion.toTimestamp());const l=xp(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=pL(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=Lp(this.serializer),n.removeTarget=e,this.zo(n)}}class QL extends TT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=cL(e.writeResults,e.commitTime),r=Vn(e.commitTime);return this.listener.uu(r,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Lp(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uL(this.serializer,r))};this.zo(n)}}/**
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
 */class YL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new b(T.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new b(T.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new b(T.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class XL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(lr(n),this.wu=!1):$("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class JL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{ji(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=J(a);l.Au.add(4),await kl(l),l.Pu.set("Unknown"),l.Au.delete(4),await Oh(l)}(this))})}),this.Pu=new XL(r,i)}}async function Oh(t){if(ji(t))for(const e of t.Ru)await e(!0)}async function kl(t){for(const e of t.Ru)await e(!1)}function IT(t,e){const n=J(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Xg(n)?Yg(n):go(n).Uo()&&Qg(n,e))}function kT(t,e){const n=J(t),r=go(n);n.Eu.delete(e),r.Uo()&&RT(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():ji(n)&&n.Pu.set("Unknown"))}function Qg(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}go(t).nu(e)}function RT(t,e){t.bu.Lt(e),go(t).su(e)}function Yg(t){t.bu=new tL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),go(t).start(),t.Pu.mu()}function Xg(t){return ji(t)&&!go(t).qo()&&t.Eu.size>0}function ji(t){return J(t).Au.size===0}function NT(t){t.bu=void 0}async function ZL(t){t.Eu.forEach((e,n)=>{Qg(t,e)})}async function eb(t,e){NT(t),Xg(t)?(t.Pu.pu(e),Yg(t)):t.Pu.set("Unknown")}async function tb(t,e,n){if(t.Pu.set("Online"),e instanceof pT&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ac(t,r)}else if(e instanceof Au?t.bu.Wt(e):e instanceof fT?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(G.min()))try{const r=await ST(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(l);u&&i.Eu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken(Nt.EMPTY_BYTE_STRING,u.snapshotVersion)),RT(i,a);const c=new Nr(u.target,a,l,u.sequenceNumber);Qg(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Ac(t,r)}}async function Ac(t,e,n){if(!Sl(e))throw e;t.Au.add(1),await kl(t),t.Pu.set("Offline"),n||(n=()=>ST(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Oh(t)})}function AT(t,e){return e().catch(n=>Ac(t,n,e))}async function Mh(t){const e=J(t),n=Gr(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;nb(e);)try{const i=await VL(e.localStore,r);if(i===null){e.Tu.length===0&&n.Qo();break}r=i.batchId,rb(e,i)}catch(i){await Ac(e,i)}DT(e)&&PT(e)}function nb(t){return ji(t)&&t.Tu.length<10}function rb(t,e){t.Tu.push(e);const n=Gr(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function DT(t){return ji(t)&&!Gr(t).qo()&&t.Tu.length>0}function PT(t){Gr(t).start()}async function ib(t){Gr(t).au()}async function sb(t){const e=Gr(t);for(const n of t.Tu)e.ou(n.mutations)}async function ob(t,e,n){const r=t.Tu.shift(),i=Bg.from(r,e,n);await AT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mh(t)}async function ab(t,e){e&&Gr(t).ru&&await async function(n,r){if(i=r.code,J2(i)&&i!==T.ABORTED){const s=n.Tu.shift();Gr(n).Go(),await AT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Mh(n)}var i}(t,e),DT(t)&&PT(t)}async function E0(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=ji(n);n.Au.add(3),await kl(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Oh(n)}async function lb(t,e){const n=J(t);e?(n.Au.delete(2),await Oh(n)):e||(n.Au.add(2),await kl(n),n.Pu.set("Unknown"))}function go(t){return t.Vu||(t.Vu=function(e,n,r){const i=J(e);return i.lu(),new GL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:ZL.bind(null,t),co:eb.bind(null,t),eu:tb.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Xg(t)?Yg(t):t.Pu.set("Unknown")):(await t.Vu.stop(),NT(t))})),t.Vu}function Gr(t){return t.Su||(t.Su=function(e,n,r){const i=J(e);return i.lu(),new QL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:ib.bind(null,t),co:ab.bind(null,t),cu:sb.bind(null,t),uu:ob.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Mh(t)):(await t.Su.stop(),t.Tu.length>0&&($("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class Jg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Jg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zg(t,e){if(lr("AsyncQueue",`${e}: ${t}`),Sl(t))return new b(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ps{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=Jo(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new Ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class S0{constructor(){this.Du=new xe(z.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):K():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ys{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ys(e,n,Ps.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class ub{constructor(){this.xu=void 0,this.listeners=[]}}class cb{constructor(){this.queries=new mo(e=>ZC(e),Rh),this.onlineState="Unknown",this.Nu=new Set}}async function hb(t,e){const n=J(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new ub),i)try{s.xu=await n.onListen(r)}catch(o){const a=Zg(o,`Initialization of query '${Pp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&ey(n)}async function db(t,e){const n=J(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function fb(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&ey(n)}function pb(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ey(t){t.Nu.forEach(e=>{e.next()})}class mb{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class xT{constructor(e){this.key=e}}class OT{constructor(e){this.key=e}}class gb{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=ee(),this.mutatedKeys=ee(),this.Zu=eT(e),this.tc=new Ps(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new S0,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Nh(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let y=!1;d&&g?d.data.isEqual(g.data)?v!==_&&(r.track({type:3,doc:g}),y=!0):this.ic(d,g)||(r.track({type:2,doc:g}),y=!0,(l&&this.Zu(g,l)>0||u&&this.Zu(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),y=!0):d&&!g&&(r.track({type:1,doc:d}),y=!0,(l||u)&&(a=!0)),y&&(g?(o=o.add(g),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,c)=>function(h,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(h)-g(d)}(u.type,c.type)||this.Zu(u.doc,c.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new Ys(this.query,e.tc,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new S0,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=ee(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new OT(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new xT(r))}),n}ac(e){this.Ju=e.sr,this.Xu=ee();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return Ys.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class yb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vb{constructor(e){this.key=e,this.lc=!1}}class _b{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new mo(a=>ZC(a),Rh),this._c=new Map,this.wc=new Set,this.mc=new xe(z.comparator),this.gc=new Map,this.yc=new Kg,this.Ic={},this.Tc=new Map,this.Ec=Qs.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function wb(t,e){const n=Db(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await zL(n.localStore,ur(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Eb(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&IT(n.remoteStore,o)}return i}async function Eb(t,e,n,r,i){t.Rc=(h,d,g)=>async function(v,_,y,p){let f=_.view.nc(y);f.ji&&(f=await v0(v.localStore,_.query,!1).then(({documents:C})=>_.view.nc(C,f)));const m=p&&p.targetChanges.get(_.targetId),w=_.view.applyChanges(f,v.isPrimaryClient,m);return T0(v,_.targetId,w.uc),w.snapshot}(t,h,d,g);const s=await v0(t.localStore,e,!0),o=new gb(e,s.sr),a=o.nc(s.documents),l=Il.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);T0(t,n,u.uc);const c=new yb(e,n,o);return t.dc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function Sb(t,e){const n=J(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Rh(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await bp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),kT(n.remoteStore,r.targetId),Fp(n,r.targetId)}).catch(El)):(Fp(n,r.targetId),await bp(n.localStore,r.targetId,!0))}async function Cb(t,e,n){const r=Pb(t);try{const i=await function(s,o){const a=J(s),l=He.now(),u=o.reduce((d,g)=>d.add(g.key),ee());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=cr(),v=ee();return a.Xi.getEntries(d,u).next(_=>{g=_,g.forEach((y,p)=>{p.isValidDocument()||(v=v.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(_=>{c=_;const y=[];for(const p of o){const f=q2(p,c.get(p.key).overlayedDocument);f!=null&&y.push(new Bi(p.key,f,jC(f.value.mapValue),Un.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,y,o)}).next(_=>{h=_;const y=_.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,_.batchId,y)})}).then(()=>({batchId:h.batchId,changes:nT(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ic[s.currentUser.toKey()];l||(l=new xe(he)),l=l.insert(o,a),s.Ic[s.currentUser.toKey()]=l}(r,i.batchId,n),await Rl(r,i.changes),await Mh(r.remoteStore)}catch(i){const s=Zg(i,"Failed to persist write");n.reject(s)}}async function MT(t,e){const n=J(t);try{const r=await $L(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(Ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?Ie(o.lc):i.removedDocuments.size>0&&(Ie(o.lc),o.lc=!1))}),await Rl(n,r,e)}catch(r){await El(r)}}function C0(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=J(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.ku(o)&&(l=!0)}),l&&ey(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Tb(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new xe(z.comparator);o=o.insert(s,vt.newNoDocument(s,G.min()));const a=ee().add(s),l=new Ph(G.min(),new Map,new xe(he),o,a);await MT(r,l),r.mc=r.mc.remove(s),r.gc.delete(e),ty(r)}else await bp(r.localStore,e,!1).then(()=>Fp(r,e,n)).catch(El)}async function Ib(t,e){const n=J(t),r=e.batch.batchId;try{const i=await FL(n.localStore,e);bT(n,r,null),LT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Rl(n,i)}catch(i){await El(i)}}async function kb(t,e,n){const r=J(t);try{const i=await function(s,o){const a=J(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Ie(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);bT(r,e,n),LT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Rl(r,i)}catch(i){await El(i)}}function LT(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function bT(t,e,n){const r=J(t);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function Fp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||FT(t,r)})}function FT(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(kT(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),ty(t))}function T0(t,e,n){for(const r of n)r instanceof xT?(t.yc.addReference(r.key,e),Rb(t,r)):r instanceof OT?($("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||FT(t,r.key)):K()}function Rb(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||($("SyncEngine","New document in limbo: "+n),t.wc.add(r),ty(t))}function ty(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new z(Ce.fromString(e)),r=t.Ec.next();t.gc.set(r,new vb(n)),t.mc=t.mc.insert(n,r),IT(t.remoteStore,new Nr(ur(YC(n.path)),r,"TargetPurposeLimboResolution",Mg.ct))}}async function Rl(t,e,n){const r=J(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Gg.Bi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const u=J(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>R.forEach(l,h=>R.forEach(h.$i,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>R.forEach(h.Fi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Sl(c))throw c;$("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Hi.get(h),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);u.Hi=u.Hi.insert(h,v)}}}(r.localStore,s))}async function Nb(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await ET(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new b(T.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Rl(n,r.tr)}}function Ab(t,e){const n=J(t),r=n.gc.get(e);if(r&&r.lc)return ee().add(r.key);{let i=ee();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}function Db(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=MT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ab.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Tb.bind(null,e),e.fc.eu=fb.bind(null,e.eventManager),e.fc.vc=pb.bind(null,e.eventManager),e}function Pb(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ib.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kb.bind(null,e),e}class I0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=xh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return bL(this.persistence,new ML,e.initialUser,this.serializer)}createPersistence(e){return new xL(qg.js,this.serializer)}createSharedClientState(e){return new jL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>C0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nb.bind(null,this.syncEngine),await lb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cb}createDatastore(e){const n=xh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new qL(i));var i;return function(s,o,a,l){return new YL(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>C0(this.syncEngine,a,0),o=w0.D()?new w0:new WL,new JL(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new _b(r,i,s,o,a,l);return u&&(c.Ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);$("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await kl(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Ob{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):lr("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Mb{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=VC.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gd(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ET(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function k0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bb(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>E0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>E0(e.remoteStore,s)),t._onlineComponents=e}function Lb(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function bb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Lb(n))throw n;Hs("Error using user provided cache. Falling back to memory cache: "+n),await Gd(t,new I0)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Gd(t,new I0);return t._offlineComponents}async function $T(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await k0(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await k0(t,new xb))),t._onlineComponents}function Fb(t){return $T(t).then(e=>e.syncEngine)}async function $b(t){const e=await $T(t),n=e.eventManager;return n.onListen=wb.bind(null,e.syncEngine),n.onUnlisten=Sb.bind(null,e.syncEngine),n}function Ub(t,e,n={}){const r=new Vr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Ob({next:h=>{s.enqueueAndForget(()=>db(i,c)),h.fromCache&&a.source==="server"?l.reject(new b(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new mb(o,u,{includeMetadataChanges:!0,Uu:!0});return hb(i,c)}(await $b(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const R0=new Map;/**
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
 */function UT(t,e,n){if(!n)throw new b(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Vb(t,e,n,r){if(e===!0&&r===!0)throw new b(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function N0(t){if(!z.isDocumentKey(t))throw new b(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function A0(t){if(z.isDocumentKey(t))throw new b(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Lh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Za(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lh(t);throw new b(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class D0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new b(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new b(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Vb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class bh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new D0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new b(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new D0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new s2;switch(n.type){case"firstParty":return new u2(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new b(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=R0.get(e);n&&($("ComponentProvider","Removing Datastore"),R0.delete(e),n.terminate())}(this),Promise.resolve()}}function zb(t,e,n,r={}){var i;const s=(t=Za(t,bh))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Hs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=gt.MOCK_USER;else{o=q1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new b(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new gt(l)}t._authCredentials=new o2(new UC(o,a))}}/**
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
 */class nn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nn(this.firestore,e,this._key)}}class yo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yo(this.firestore,e,this._query)}}class zr extends yo{constructor(e,n,r){super(e,n,YC(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nn(this.firestore,null,new z(e))}withConverter(e){return new zr(this.firestore,e,this._path)}}function P0(t,e,...n){if(t=ct(t),UT("collection","path",e),t instanceof bh){const r=Ce.fromString(e,...n);return A0(r),new zr(t,null,r)}{if(!(t instanceof nn||t instanceof zr))throw new b(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return A0(r),new zr(t.firestore,null,r)}}function VT(t,e,...n){if(t=ct(t),arguments.length===1&&(e=VC.A()),UT("doc","path",e),t instanceof bh){const r=Ce.fromString(e,...n);return N0(r),new nn(t,null,new z(r))}{if(!(t instanceof nn||t instanceof zr))throw new b(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return N0(r),new nn(t.firestore,t instanceof zr?t.converter:null,new z(r))}}/**
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
 */class Bb{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new CT(this,"async_queue_retry"),this.Yc=()=>{const n=qd();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=qd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=qd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Vr;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Sl(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw lr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=Jg.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&K()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class Fh extends bh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Bb,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||BT(this),this._firestoreClient.terminate()}}function jb(t,e){const n=typeof t=="object"?t:tg(),r=typeof t=="string"?t:e||"(default)",i=ah(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=H1("firestore");s&&zb(i,...s)}return i}function zT(t){return t._firestoreClient||BT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function BT(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new E2(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Mb(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xs(Nt.fromBase64String(e))}catch(n){throw new b(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xs(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ny{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new b(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jT{constructor(e){this._methodName=e}}/**
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
 */class ry{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new b(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new b(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */const Wb=/^__.*__$/;class Hb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Bi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tl(e,this.data,n,this.fieldTransforms)}}function WT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class iy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new iy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Dc(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(WT(this.ua)&&Wb.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Kb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xh(e)}ga(e,n,r,i=!1){return new iy({ua:e,methodName:n,ma:r,path:Et.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function HT(t){const e=t._freezeSettings(),n=xh(t._databaseId);return new Kb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qb(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);GT("Data must be an object, but it was:",o,r);const a=KT(r,o);let l,u;if(s.merge)l=new mn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Qb(e,h,n);if(!o.contains(d))throw new b(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Xb(c,d)||c.push(d)}l=new mn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Hb(new Jt(a),l,u)}function Gb(t,e,n,r=!1){return sy(n,t.ga(r?4:3,e))}function sy(t,e){if(qT(t=ct(t)))return GT("Unsupported field value:",e,t),KT(t,e);if(t instanceof jT)return function(n,r){if(!WT(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=sy(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return z2(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=He.fromDate(n);return{timestampValue:Nc(r.serializer,i)}}if(n instanceof He){const i=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Nc(r.serializer,i)}}if(n instanceof ry)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xs)return{bytesValue:mT(r.serializer,n._byteString)};if(n instanceof nn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hg(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Lh(n)}`)}(t,e)}function KT(t,e){const n={};return zC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):po(t,(r,i)=>{const s=sy(i,e.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function qT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof ry||t instanceof Xs||t instanceof nn||t instanceof jT)}function GT(t,e,n){if(!qT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Lh(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Qb(t,e,n){if((e=ct(e))instanceof ny)return e._internalPath;if(typeof e=="string")return QT(t,e);throw Dc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Yb=new RegExp("[~\\*/\\[\\]]");function QT(t,e,n){if(e.search(Yb)>=0)throw Dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ny(...e.split("."))._internalPath}catch{throw Dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new b(T.INVALID_ARGUMENT,a+t+l)}function Xb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class YT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Jb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(oy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Jb extends YT{data(){return super.data()}}function oy(t,e){return typeof e=="string"?QT(t,e):e instanceof ny?e._internalPath:e._delegate._internalPath}/**
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
 */function Zb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new b(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ay{}class eF extends ay{}function tF(t,e,...n){let r=[];e instanceof ay&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof ly).length,o=i.filter(a=>a instanceof $h).length;if(s>1||s>0&&o>0)throw new b(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class $h extends eF{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new $h(e,n,r)}_apply(e){const n=this._parse(e);return XT(e._query,n),new yo(e.firestore,e.converter,Ap(e._query,n))}_parse(e){const n=HT(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new b(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){O0(c,u);const d=[];for(const g of c)d.push(x0(a,i,g));h={arrayValue:{values:d}}}else h=x0(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||O0(c,u),h=Gb(o,s,c,u==="in"||u==="not-in");return ze.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function nF(t,e,n){const r=e,i=oy("where",t);return $h._create(i,r,n)}class ly extends ay{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ly(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)XT(s,a),s=Ap(s,a)}(e._query,n),new yo(e.firestore,e.converter,Ap(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function x0(t,e,n){if(typeof(n=ct(n))=="string"){if(n==="")throw new b(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!JC(e)&&n.indexOf("/")!==-1)throw new b(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!z.isDocumentKey(r))throw new b(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return t0(t,new z(r))}if(n instanceof nn)return t0(t,n._key);throw new b(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lh(n)}.`)}function O0(t,e){if(!Array.isArray(t)||t.length===0)throw new b(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function XT(t,e){if(e.isInequality()){const r=Vg(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new b(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=XC(t);s!==null&&rF(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new b(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new b(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function rF(t,e,n){if(!n.isEqual(e))throw new b(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class iF{convertValue(e,n="none"){switch(Mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return po(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ry(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=bg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const n=qr(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);Ie(wT(r));const i=new Qa(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(n)||lr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function sF(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class lu{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oF extends YT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(oy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Du extends oF{data(e={}){return super.data(e)}}class aF{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new lu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Du(this._firestore,this._userDataWriter,r.key,r,new lu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new b(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Du(r._firestore,r._userDataWriter,o.doc.key,o.doc,new lu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Du(r._firestore,r._userDataWriter,o.doc.key,o.doc,new lu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:lF(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class uF extends iF{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nn(this.firestore,null,n)}}function cF(t){t=Za(t,yo);const e=Za(t.firestore,Fh),n=zT(e),r=new uF(e);return Zb(t._query),Ub(n,t._query).then(i=>new aF(e,r,t,i))}function hF(t){return JT(Za(t.firestore,Fh),[new zg(t._key,Un.none())])}function dF(t,e){const n=Za(t.firestore,Fh),r=VT(t),i=sF(t.converter,e);return JT(n,[qb(HT(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Un.exists(!1))]).then(()=>r)}function JT(t,e){return function(n,r){const i=new Vr;return n.asyncQueue.enqueueAndForget(async()=>Cb(await Fb(n),r,i)),i.promise}(zT(t),e)}(function(t,e=!0){(function(n){fo=n})(Vi),Ai(new Hr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Fh(new a2(n.getProvider("auth-internal")),new h2(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new b(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qa(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),bn(Y_,"3.11.0",t),bn(Y_,"3.11.0","esm2017")})();const M0="@firebase/database",L0="0.14.4";/**
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
 */let ZT="";function fF(t){ZT=t}/**
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
 */class pF{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ot(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class mF{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const eI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pF(e)}}catch{}return new mF},gi=eI("localStorage"),$p=eI("sessionStorage");/**
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
 */const xs=new oh("@firebase/database"),gF=function(){let t=1;return function(){return t++}}(),tI=function(t){const e=VD(t),n=new LD;n.update(e);const r=n.digest();return Ym.encodeByteArray(r)},Nl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Nl.apply(null,r):typeof r=="object"?e+=ot(r):e+=r,e+=" "}return e};let Ei=null,b0=!0;const yF=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(xs.logLevel=ae.VERBOSE,Ei=xs.log.bind(xs),e&&$p.set("logging_enabled",!0)):typeof t=="function"?Ei=t:(Ei=null,$p.remove("logging_enabled"))},_t=function(...t){if(b0===!0&&(b0=!1,Ei===null&&$p.get("logging_enabled")===!0&&yF(!0)),Ei){const e=Nl.apply(null,t);Ei(e)}},Al=function(t){return function(...e){_t(t,...e)}},Up=function(...t){const e="FIREBASE INTERNAL ERROR: "+Nl(...t);xs.error(e)},hr=function(...t){const e=`FIREBASE FATAL ERROR: ${Nl(...t)}`;throw xs.error(e),new Error(e)},jt=function(...t){const e="FIREBASE WARNING: "+Nl(...t);xs.warn(e)},vF=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_F=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Js="[MIN_NAME]",Li="[MAX_NAME]",vo=function(t,e){if(t===e)return 0;if(t===Js||e===Li)return-1;if(e===Js||t===Li)return 1;{const n=F0(t),r=F0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},wF=function(t,e){return t===e?0:t<e?-1:1},Vo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ot(e))},uy=function(t){if(typeof t!="object"||t===null)return ot(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ot(e[r]),n+=":",n+=uy(t[e[r]]);return n+="}",n},rI=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function on(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const iI=function(t){x(!nI(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},EF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SF=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},CF=new RegExp("^-?(0*)\\d{1,10}$"),TF=-2147483648,IF=2147483647,F0=function(t){if(CF.test(t)){const e=Number(t);if(e>=TF&&e<=IF)return e}return null},Dl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw jt("Exception was thrown by user callback.",n),e},Math.floor(0))}},kF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ga=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class RF{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){jt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class NF{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',jt(e)}}class Os{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Os.OWNER="owner";/**
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
 */const cy="5",sI="v",oI="s",aI="r",lI="f",uI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cI="ls",hI="p",Vp="ac",dI="websocket",fI="long_polling";/**
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
 */class pI{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&gi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function AF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function mI(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===dI)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fI)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);AF(t)&&(n.ns=t.namespace);const i=[];return on(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class DF{constructor(){this.counters_={}}incrementCounter(e,n=1){mr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _D(this.counters_)}}/**
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
 */const Qd={},Yd={};function hy(t){const e=t.toString();return Qd[e]||(Qd[e]=new DF),Qd[e]}function PF(t,e){const n=t.toString();return Yd[n]||(Yd[n]=e()),Yd[n]}/**
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
 */class xF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Dl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const $0="start",OF="close",MF="pLPCommand",LF="pRTLPCB",gI="id",yI="pw",vI="ser",bF="cb",FF="seg",$F="ts",UF="d",VF="dframe",_I=1870,wI=30,zF=_I-wI,BF=25e3,jF=3e4;class gs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Al(e),this.stats_=hy(n),this.urlFn=l=>(this.appCheckToken&&(l[Vp]=this.appCheckToken),mI(n,fI,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new xF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jF)),_F(()=>{if(this.isClosed_)return;this.scriptTagHolder=new dy((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$0)this.id=a,this.password=l;else if(o===OF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[$0]="t",r[vI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[bF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[sI]=cy,this.transportSessionId&&(r[oI]=this.transportSessionId),this.lastSessionId&&(r[cI]=this.lastSessionId),this.applicationId&&(r[hI]=this.applicationId),this.appCheckToken&&(r[Vp]=this.appCheckToken),typeof location<"u"&&location.hostname&&uI.test(location.hostname)&&(r[aI]=lI);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gs.forceAllow_=!0}static forceDisallow(){gs.forceDisallow_=!0}static isAvailable(){return gs.forceAllow_?!0:!gs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!EF()&&!SF()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=B1(n),i=rI(r,zF);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[VF]="t",r[gI]=e,r[yI]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ot(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class dy{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gF(),window[MF+this.uniqueCallbackIdentifier]=e,window[LF+this.uniqueCallbackIdentifier]=n,this.myIFrame=dy.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){_t("frame writing exception"),a.stack&&_t(a.stack),_t(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gI]=this.myID,e[yI]=this.myPW,e[vI]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wI+r.length<=_I;){const o=this.pendingSegs.shift();r=r+"&"+FF+i+"="+o.seg+"&"+$F+i+"="+o.ts+"&"+UF+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(BF)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const WF=16384,HF=45e3;let Pc=null;typeof MozWebSocket<"u"?Pc=MozWebSocket:typeof WebSocket<"u"&&(Pc=WebSocket);class pn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Al(this.connId),this.stats_=hy(n),this.connURL=pn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[sI]=cy,typeof location<"u"&&location.hostname&&uI.test(location.hostname)&&(o[aI]=lI),n&&(o[oI]=n),r&&(o[cI]=r),i&&(o[Vp]=i),s&&(o[hI]=s),mI(e,dI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gi.set("previous_websocket_failure",!0);try{let r;Q1(),this.mySock=new Pc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Pc!==null&&!pn.forceDisallow_}static previouslyFailed(){return gi.isInMemoryStorage||gi.get("previous_websocket_failure")===!0}markConnectionHealthy(){gi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Fa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=rI(n,WF);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pn.responsesRequiredToBeHealthy=2;pn.healthyTimeout=3e4;/**
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
 */class el{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gs,pn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=pn&&pn.isAvailable();let r=n&&!pn.previouslyFailed();if(e.webSocketOnly&&(n||jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[pn];else{const i=this.transports_=[];for(const s of el.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);el.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}el.globalTransportInitialized_=!1;/**
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
 */const KF=6e4,qF=5e3,GF=10*1024,QF=100*1024,Xd="t",U0="d",YF="s",V0="r",XF="e",z0="o",B0="a",j0="n",W0="p",JF="h";class ZF{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Al("c:"+this.id+":"),this.transportManager_=new el(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ga(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xd in e){const n=e[Xd];n===B0?this.upgradeIfSecondaryHealthy_():n===V0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===z0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Vo("t",e),r=Vo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:W0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:B0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:j0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Vo("t",e),r=Vo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Vo(Xd,e);if(U0 in e){const r=e[U0];if(n===JF){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===j0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===YF?this.onConnectionShutdown_(r):n===V0?this.onReset_(r):n===XF?Up("Server Error: "+r):n===z0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Up("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cy!==r&&jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ga(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(KF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ga(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:W0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class EI{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class SI{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class xc extends SI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new xc}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const H0=32,K0=768;class ke{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new ke("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Qr(t){return t.pieces_.length-t.pieceNum_}function Se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ke(t.pieces_,e)}function CI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function e$(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function TI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function II(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ke(e,0)}function Xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ke)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ke(n,0)}function ne(t){return t.pieceNum_>=t.pieces_.length}function en(t,e){const n=se(t),r=se(e);if(n===null)return e;if(n===r)return en(Se(t),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function kI(t,e){if(Qr(t)!==Qr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function gn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Qr(t)>Qr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class t${constructor(e,n){this.errorPrefix_=n,this.parts_=TI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=sh(this.parts_[r]);RI(this)}}function n$(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=sh(e),RI(t)}function r$(t){const e=t.parts_.pop();t.byteLength_-=sh(e),t.parts_.length>0&&(t.byteLength_-=1)}function RI(t){if(t.byteLength_>K0)throw new Error(t.errorPrefix_+"has a key path longer than "+K0+" bytes ("+t.byteLength_+").");if(t.parts_.length>H0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+H0+") or object contains a cycle "+ai(t))}function ai(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class fy extends SI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new fy}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const zo=1e3,i$=60*5*1e3,q0=30*1e3,s$=1.3,o$=3e4,a$="server_kill",G0=3;class tr extends EI{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=tr.nextPersistentConnectionId_++,this.log_=Al("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zo,this.maxReconnectDelay_=i$,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Q1())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ot(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Jm,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;tr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mr(e,"w")){const r=js(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||MD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=q0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=OD(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ot(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Up("Unrecognized action received from server: "+ot(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>o$&&(this.reconnectDelay_=zo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*s$)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+tr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new ZF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{jt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(a$)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&jt(h),l())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ip(this.interruptReasons_)&&(this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>uy(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ke(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){_t("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=G0&&(this.reconnectDelay_=q0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_t("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=G0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ZT.replace(/\./g,"-")]=1,Zm()?e["framework.cordova"]=1:G1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xc.getInstance().currentlyOnline();return ip(this.interruptReasons_)&&e}}tr.nextPersistentConnectionId_=0;tr.nextConnectionId_=0;/**
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
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
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
 */class Uh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(Js,e),i=new oe(Js,n);return this.compare(r,i)!==0}minPost(){return oe.MIN}}/**
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
 */let uu;class NI extends Uh{static get __EMPTY_NODE(){return uu}static set __EMPTY_NODE(e){uu=e}compare(e,n){return vo(e.name,n.name)}isDefinedOn(e){throw io("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(Li,uu)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,uu)}toString(){return".key"}}const Ms=new NI;/**
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
 */class cu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??bt.EMPTY_NODE,this.right=s??bt.EMPTY_NODE}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return bt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class l${copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bt{constructor(e,n=bt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new bt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new cu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new cu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new cu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new cu(this.root_,null,this.comparator_,!0,e)}}bt.EMPTY_NODE=new l$;/**
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
 */function u$(t,e){return vo(t.name,e.name)}function py(t,e){return vo(t,e)}/**
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
 */let zp;function c$(t){zp=t}const AI=function(t){return typeof t=="number"?"number:"+iI(t):"string:"+t},DI=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mr(e,".sv"),"Priority must be a string or number.")}else x(t===zp||t.isEmpty(),"priority of unexpected type.");x(t===zp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Q0;class qe{constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),DI(this.priorityNode_)}static set __childrenNodeConstructor(e){Q0=e}static get __childrenNodeConstructor(){return Q0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:se(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=se(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||Qr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+AI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=iI(this.value_):e+=this.value_,this.lazyHash_=tI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=qe.VALUE_TYPE_ORDER.indexOf(n),s=qe.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let PI,xI;function h$(t){PI=t}function d$(t){xI=t}class f$ extends Uh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?vo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(Li,new qe("[PRIORITY-POST]",xI))}makePost(e,n){const r=PI(e);return new oe(n,new qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const St=new f$;/**
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
 */const p$=Math.log(2);class m${constructor(e){const n=s=>parseInt(Math.log(s)/p$,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Oc=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new Ye(d,h.node,Ye.BLACK,null,null);{const g=parseInt(c/2,10)+l,v=i(l,g),_=i(g+1,u);return h=t[g],d=n?n(h):h,new Ye(d,h.node,Ye.BLACK,v,_)}},s=function(l){let u=null,c=null,h=t.length;const d=function(v,_){const y=h-v,p=h;h-=v;const f=i(y+1,p),m=t[y],w=n?n(m):m;g(new Ye(w,m.node,_,null,f))},g=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),y=Math.pow(2,l.count-(v+1));_?d(y,Ye.BLACK):(d(y,Ye.BLACK),d(y,Ye.RED))}return c},o=new m$(t.length),a=s(o);return new bt(r||e,a)};/**
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
 */let Jd;const Yi={};class Zn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(Yi&&St,"ChildrenNode.ts has not been loaded"),Jd=Jd||new Zn({".priority":Yi},{".priority":St}),Jd}get(e){const n=js(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof bt?n:null}hasIndex(e){return mr(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Ms,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(oe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Oc(r,e.getCompare()):a=Yi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Zn(c,u)}addToIndexes(e,n){const r=sc(this.indexes_,(i,s)=>{const o=js(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===Yi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Oc(a,o.getCompare())}else return Yi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new Zn(r,this.indexSet_)}removeFromIndexes(e,n){const r=sc(this.indexes_,i=>{if(i===Yi)return i;{const s=n.get(e.name);return s?i.remove(new oe(e.name,s)):i}});return new Zn(r,this.indexSet_)}}/**
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
 */let Bo;class de{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&DI(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bo||(Bo=new de(new bt(py),null,Zn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bo}updatePriority(e){return this.children_.isEmpty()?this:new de(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bo:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Bo:this.priorityNode_;return new de(i,o,s)}}updateChild(e,n){const r=se(e);if(r===null)return n;{x(se(e)!==".priority"||Qr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Se(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(St,(o,a)=>{n[o]=a.val(e),r++,s&&de.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+AI(this.getPriority().val())+":"),this.forEachChild(St,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":tI(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Pl?-1:0}withIndex(e){if(e===Ms||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new de(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ms||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(St),i=n.getIterator(St);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ms?null:this.indexMap_.get(e.toString())}}de.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class g$ extends de{constructor(){super(new bt(py),de.EMPTY_NODE,Zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return de.EMPTY_NODE}isEmpty(){return!1}}const Pl=new g$;Object.defineProperties(oe,{MIN:{value:new oe(Js,de.EMPTY_NODE)},MAX:{value:new oe(Li,Pl)}});NI.__EMPTY_NODE=de.EMPTY_NODE;qe.__childrenNodeConstructor=de;c$(Pl);d$(Pl);/**
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
 */const y$=!0;function wt(t,e=null){if(t===null)return de.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new qe(n,wt(e))}if(!(t instanceof Array)&&y$){const n=[];let r=!1;if(on(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=wt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return de.EMPTY_NODE;const s=Oc(n,u$,o=>o.name,py);if(r){const o=Oc(n,St.getCompare());return new de(s,wt(e),new Zn({".priority":o},{".priority":St}))}else return new de(s,wt(e),Zn.Default)}else{let n=de.EMPTY_NODE;return on(t,(r,i)=>{if(mr(t,r)&&r.substring(0,1)!=="."){const s=wt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(wt(e))}}h$(wt);/**
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
 */class v$ extends Uh{constructor(e){super(),this.indexPath_=e,x(!ne(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?vo(e.name,n.name):s}makePost(e,n){const r=wt(e),i=de.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,i)}maxPost(){const e=de.EMPTY_NODE.updateChild(this.indexPath_,Pl);return new oe(Li,e)}toString(){return TI(this.indexPath_,0).join("/")}}/**
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
 */class _$ extends Uh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?vo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=wt(e);return new oe(n,r)}toString(){return".value"}}const w$=new _$;/**
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
 */function E$(t){return{type:"value",snapshotNode:t}}function S$(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function C$(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Y0(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function T$(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class my{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=St}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Js}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Li}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===St}copy(){const e=new my;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function X0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===St?n="$priority":t.index_===w$?n="$value":t.index_===Ms?n="$key":(x(t.index_ instanceof v$,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ot(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ot(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ot(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ot(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ot(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function J0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==St&&(e.i=t.index_.toString()),e}/**
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
 */class Mc extends EI{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Al("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Mc.getListenId_(e,r),a={};this.listens_[o]=a;const l=X0(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),js(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Mc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=X0(e._queryParams),r=e._path.toString(),i=new Jm;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+so(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Fa(a.responseText)}catch{jt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&jt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class I${constructor(){this.rootNode_=de.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Lc(){return{value:null,children:new Map}}function OI(t,e,n){if(ne(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=se(e);t.children.has(r)||t.children.set(r,Lc());const i=t.children.get(r);e=Se(e),OI(i,e,n)}}function Bp(t,e,n){t.value!==null?n(e,t.value):k$(t,(r,i)=>{const s=new ke(e.toString()+"/"+r);Bp(i,s,n)})}function k$(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class R${constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&on(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Z0=10*1e3,N$=30*1e3,A$=5*60*1e3;class D${constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new R$(e);const r=Z0+(N$-Z0)*Math.random();ga(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;on(e,(i,s)=>{s>0&&mr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ga(this.reportStats_.bind(this),Math.floor(Math.random()*2*A$))}}/**
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
 */var On;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(On||(On={}));function MI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function LI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class bc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=On.ACK_USER_WRITE,this.source=MI()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ke(e));return new bc(me(),n,this.revert)}}else return x(se(this.path)===e,"operationForChild called for unrelated child."),new bc(Se(this.path),this.affectedTree,this.revert)}}/**
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
 */class bi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=On.OVERWRITE}operationForChild(e){return ne(this.path)?new bi(this.source,me(),this.snap.getImmediateChild(e)):new bi(this.source,Se(this.path),this.snap)}}/**
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
 */class tl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=On.MERGE}operationForChild(e){if(ne(this.path)){const n=this.children.subtree(new ke(e));return n.isEmpty()?null:n.value?new bi(this.source,me(),n.value):new tl(this.source,me(),n)}else return x(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tl(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class gy{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function P$(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(T$(o.childName,o.snapshotNode))}),jo(t,i,"child_removed",e,r,n),jo(t,i,"child_added",e,r,n),jo(t,i,"child_moved",s,r,n),jo(t,i,"child_changed",e,r,n),jo(t,i,"value",e,r,n),i}function jo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>O$(t,a,l)),o.forEach(a=>{const l=x$(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function x$(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function O$(t,e,n){if(e.childName==null||n.childName==null)throw io("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function FI(t,e){return{eventCache:t,serverCache:e}}function ya(t,e,n,r){return FI(new gy(e,n,r),t.serverCache)}function $I(t,e,n,r){return FI(t.eventCache,new gy(e,n,r))}function jp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Fi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Zd;const M$=()=>(Zd||(Zd=new bt(wF)),Zd);class Ee{constructor(e,n=M$()){this.value=e,this.children=n}static fromObject(e){let n=new Ee(null);return on(e,(r,i)=>{n=n.set(new ke(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(ne(e))return null;{const r=se(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Se(e),n);return s!=null?{path:Xe(new ke(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const n=se(e),r=this.children.get(n);return r!==null?r.subtree(Se(e)):new Ee(null)}}set(e,n){if(ne(e))return new Ee(n,this.children);{const r=se(e),s=(this.children.get(r)||new Ee(null)).set(Se(e),n),o=this.children.insert(r,s);return new Ee(this.value,o)}}remove(e){if(ne(e))return this.children.isEmpty()?new Ee(null):new Ee(null,this.children);{const n=se(e),r=this.children.get(n);if(r){const i=r.remove(Se(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ee(null):new Ee(this.value,s)}else return this}}get(e){if(ne(e))return this.value;{const n=se(e),r=this.children.get(n);return r?r.get(Se(e)):null}}setTree(e,n){if(ne(e))return n;{const r=se(e),s=(this.children.get(r)||new Ee(null)).setTree(Se(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ee(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Xe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ne(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(Se(e),Xe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,r){if(ne(e))return this;{this.value&&r(n,this.value);const i=se(e),s=this.children.get(i);return s?s.foreachOnPath_(Se(e),Xe(n,i),r):new Ee(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class _n{constructor(e){this.writeTree_=e}static empty(){return new _n(new Ee(null))}}function va(t,e,n){if(ne(e))return new _n(new Ee(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=en(i,e);return s=s.updateChild(o,n),new _n(t.writeTree_.set(i,s))}else{const i=new Ee(n),s=t.writeTree_.setTree(e,i);return new _n(s)}}}function ew(t,e,n){let r=t;return on(n,(i,s)=>{r=va(r,Xe(e,i),s)}),r}function tw(t,e){if(ne(e))return _n.empty();{const n=t.writeTree_.setTree(e,new Ee(null));return new _n(n)}}function Wp(t,e){return Wi(t,e)!=null}function Wi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(en(n.path,e)):null}function nw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(St,(r,i)=>{e.push(new oe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new oe(r,i.value))}),e}function Br(t,e){if(ne(e))return t;{const n=Wi(t,e);return n!=null?new _n(new Ee(n)):new _n(t.writeTree_.subtree(e))}}function Hp(t){return t.writeTree_.isEmpty()}function Zs(t,e){return UI(me(),t.writeTree_,e)}function UI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=UI(Xe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Xe(t,".priority"),r)),n}}/**
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
 */function VI(t,e){return HI(e,t)}function L$(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=va(t.visibleWrites,e,n)),t.lastWriteId=r}function b$(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function F$(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&$$(a,r.path)?i=!1:gn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return U$(t),!0;if(r.snap)t.visibleWrites=tw(t.visibleWrites,r.path);else{const a=r.children;on(a,l=>{t.visibleWrites=tw(t.visibleWrites,Xe(r.path,l))})}return!0}else return!1}function $$(t,e){if(t.snap)return gn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gn(Xe(t.path,n),e))return!0;return!1}function U$(t){t.visibleWrites=zI(t.allWrites,V$,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function V$(t){return t.visible}function zI(t,e,n){let r=_n.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)gn(n,o)?(a=en(n,o),r=va(r,a,s.snap)):gn(o,n)&&(a=en(o,n),r=va(r,me(),s.snap.getChild(a)));else if(s.children){if(gn(n,o))a=en(n,o),r=ew(r,a,s.children);else if(gn(o,n))if(a=en(o,n),ne(a))r=ew(r,me(),s.children);else{const l=js(s.children,se(a));if(l){const u=l.getChild(Se(a));r=va(r,me(),u)}}}else throw io("WriteRecord should have .snap or .children")}}return r}function BI(t,e,n,r,i){if(!r&&!i){const s=Wi(t.visibleWrites,e);if(s!=null)return s;{const o=Br(t.visibleWrites,e);if(Hp(o))return n;if(n==null&&!Wp(o,me()))return null;{const a=n||de.EMPTY_NODE;return Zs(o,a)}}}else{const s=Br(t.visibleWrites,e);if(!i&&Hp(s))return n;if(!i&&n==null&&!Wp(s,me()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(gn(u.path,e)||gn(e,u.path))},a=zI(t.allWrites,o,e),l=n||de.EMPTY_NODE;return Zs(a,l)}}}function z$(t,e,n){let r=de.EMPTY_NODE;const i=Wi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(St,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Br(t.visibleWrites,e);return n.forEachChild(St,(o,a)=>{const l=Zs(Br(s,new ke(o)),a);r=r.updateImmediateChild(o,l)}),nw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Br(t.visibleWrites,e);return nw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function B$(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Xe(e,n);if(Wp(t.visibleWrites,s))return null;{const o=Br(t.visibleWrites,s);return Hp(o)?i.getChild(n):Zs(o,i.getChild(n))}}function j$(t,e,n,r){const i=Xe(e,n),s=Wi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Br(t.visibleWrites,i);return Zs(o,r.getNode().getImmediateChild(n))}else return null}function W$(t,e){return Wi(t.visibleWrites,e)}function H$(t,e,n,r,i,s,o){let a;const l=Br(t.visibleWrites,e),u=Wi(l,me());if(u!=null)a=u;else if(n!=null)a=Zs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=d.getNext();for(;g&&c.length<i;)h(g,r)!==0&&c.push(g),g=d.getNext();return c}else return[]}function K$(){return{visibleWrites:_n.empty(),allWrites:[],lastWriteId:-1}}function Kp(t,e,n,r){return BI(t.writeTree,t.treePath,e,n,r)}function jI(t,e){return z$(t.writeTree,t.treePath,e)}function rw(t,e,n,r){return B$(t.writeTree,t.treePath,e,n,r)}function Fc(t,e){return W$(t.writeTree,Xe(t.treePath,e))}function q$(t,e,n,r,i,s){return H$(t.writeTree,t.treePath,e,n,r,i,s)}function yy(t,e,n){return j$(t.writeTree,t.treePath,e,n)}function WI(t,e){return HI(Xe(t.treePath,e),t.writeTree)}function HI(t,e){return{treePath:t,writeTree:e}}/**
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
 */class G${constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Y0(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,C$(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,S$(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Y0(r,e.snapshotNode,i.oldSnap));else throw io("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Q${getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const KI=new Q$;class vy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new gy(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return yy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fi(this.viewCache_),s=q$(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function Y$(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function X$(t,e,n,r,i){const s=new G$;let o,a;if(n.type===On.OVERWRITE){const u=n;u.source.fromUser?o=qp(t,e,u.path,u.snap,r,i,s):(x(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ne(u.path),o=$c(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===On.MERGE){const u=n;u.source.fromUser?o=Z$(t,e,u.path,u.children,r,i,s):(x(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Gp(t,e,u.path,u.children,r,i,a,s))}else if(n.type===On.ACK_USER_WRITE){const u=n;u.revert?o=n4(t,e,u.path,r,i,s):o=e4(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===On.LISTEN_COMPLETE)o=t4(t,e,n.path,r,s);else throw io("Unknown operation type: "+n.type);const l=s.getChanges();return J$(e,o,l),{viewCache:o,changes:l}}function J$(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=jp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(E$(jp(e)))}}function qI(t,e,n,r,i,s){const o=e.eventCache;if(Fc(r,n)!=null)return e;{let a,l;if(ne(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Fi(e),c=u instanceof de?u:de.EMPTY_NODE,h=jI(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Kp(r,Fi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=se(n);if(u===".priority"){x(Qr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=rw(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=Se(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=rw(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=yy(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return ya(e,a,o.isFullyInitialized()||ne(n),t.filter.filtersNodes())}}function $c(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(ne(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=se(n);if(!l.isCompleteForPath(n)&&Qr(n)>1)return e;const v=Se(n),y=l.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=c.updatePriority(l.getNode(),y):u=c.updateChild(l.getNode(),g,y,v,KI,null)}const h=$I(e,u,l.isFullyInitialized()||ne(n),c.filtersNodes()),d=new vy(i,h,s);return qI(t,h,n,i,d,a)}function qp(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new vy(i,e,s);if(ne(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ya(e,u,!0,t.filter.filtersNodes());else{const h=se(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=ya(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=Se(n),g=a.getNode().getImmediateChild(h);let v;if(ne(d))v=r;else{const _=c.getCompleteChild(h);_!=null?CI(d)===".priority"&&_.getChild(II(d)).isEmpty()?v=_:v=_.updateChild(d,r):v=de.EMPTY_NODE}if(g.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),h,v,d,c,o);l=ya(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function iw(t,e){return t.eventCache.isCompleteForChild(e)}function Z$(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Xe(n,l);iw(e,se(c))&&(a=qp(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Xe(n,l);iw(e,se(c))||(a=qp(t,a,c,u,i,s,o))}),a}function sw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Gp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ne(n)?u=r:u=new Ee(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),v=sw(t,g,d);l=$c(t,l,new ke(h),v,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!g){const v=e.serverCache.getNode().getImmediateChild(h),_=sw(t,v,d);l=$c(t,l,new ke(h),_,i,s,o,a)}}),l}function e4(t,e,n,r,i,s,o){if(Fc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ne(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return $c(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ne(n)){let u=new Ee(null);return l.getNode().forEachChild(Ms,(c,h)=>{u=u.set(new ke(c),h)}),Gp(t,e,n,u,i,s,a,o)}else return e}else{let u=new Ee(null);return r.foreach((c,h)=>{const d=Xe(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),Gp(t,e,n,u,i,s,a,o)}}function t4(t,e,n,r,i){const s=e.serverCache,o=$I(e,s.getNode(),s.isFullyInitialized()||ne(n),s.isFiltered());return qI(t,o,n,r,KI,i)}function n4(t,e,n,r,i,s){let o;if(Fc(r,n)!=null)return e;{const a=new vy(r,e,i),l=e.eventCache.getNode();let u;if(ne(n)||se(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Kp(r,Fi(e));else{const h=e.serverCache.getNode();x(h instanceof de,"serverChildren would be complete if leaf node"),c=jI(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=se(n);let h=yy(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,Se(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,de.EMPTY_NODE,Se(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Kp(r,Fi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Fc(r,me())!=null,ya(e,u,o,t.filter.filtersNodes())}}function r4(t,e){const n=Fi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ne(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function ow(t,e,n,r){e.type===On.MERGE&&e.source.queryId!==null&&(x(Fi(t.viewCache_),"We should always have a full cache before handling merges"),x(jp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=X$(t.processor_,i,e,n,r);return Y$(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,i4(t,s.changes,s.viewCache.eventCache.getNode(),null)}function i4(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return P$(t.eventGenerator_,e,n,i)}/**
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
 */let aw;function s4(t){x(!aw,"__referenceConstructor has already been defined"),aw=t}function _y(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),ow(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(ow(o,e,n,r));return s}}function wy(t,e){let n=null;for(const r of t.views.values())n=n||r4(r,e);return n}/**
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
 */let lw;function o4(t){x(!lw,"__referenceConstructor has already been defined"),lw=t}class uw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ee(null),this.pendingWriteTree_=K$(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function a4(t,e,n,r,i){return L$(t.pendingWriteTree_,e,n,r,i),i?zh(t,new bi(MI(),e,n)):[]}function ys(t,e,n=!1){const r=b$(t.pendingWriteTree_,e);if(F$(t.pendingWriteTree_,e)){let s=new Ee(null);return r.snap!=null?s=s.set(me(),!0):on(r.children,o=>{s=s.set(new ke(o),!0)}),zh(t,new bc(r.path,s,n))}else return[]}function Vh(t,e,n){return zh(t,new bi(LI(),e,n))}function l4(t,e,n){const r=Ee.fromObject(n);return zh(t,new tl(LI(),e,r))}function u4(t,e,n,r){const i=XI(t,r);if(i!=null){const s=JI(i),o=s.path,a=s.queryId,l=en(o,e),u=new bi(bI(a),l,n);return ZI(t,o,u)}else return[]}function c4(t,e,n,r){const i=XI(t,r);if(i){const s=JI(i),o=s.path,a=s.queryId,l=en(o,e),u=Ee.fromObject(n),c=new tl(bI(a),l,u);return ZI(t,o,c)}else return[]}function GI(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=en(o,e),u=wy(a,l);if(u)return u});return BI(i,e,s,n,!0)}function zh(t,e){return QI(e,t.syncPointTree_,null,VI(t.pendingWriteTree_,me()))}function QI(t,e,n,r){if(ne(t.path))return YI(t,e,n,r);{const i=e.get(me());n==null&&i!=null&&(n=wy(i,me()));let s=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=WI(r,o);s=s.concat(QI(a,l,u,c))}return i&&(s=s.concat(_y(i,t,r,n))),s}}function YI(t,e,n,r){const i=e.get(me());n==null&&i!=null&&(n=wy(i,me()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=WI(r,o),c=t.operationForChild(o);c&&(s=s.concat(YI(c,a,l,u)))}),i&&(s=s.concat(_y(i,t,r,n))),s}function XI(t,e){return t.tagToQueryMap.get(e)}function JI(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ke(t.substr(0,e))}}function ZI(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=VI(t.pendingWriteTree_,e);return _y(r,n,i,null)}/**
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
 */class Ey{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ey(n)}node(){return this.node_}}class Sy{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xe(this.path_,e);return new Sy(this.syncTree_,n)}node(){return GI(this.syncTree_,this.path_)}}const h4=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},cw=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return d4(t[".sv"],e,n);if(typeof t[".sv"]=="object")return f4(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},d4=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},f4=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},p4=function(t,e,n,r){return Cy(e,new Sy(n,t),r)},m4=function(t,e,n){return Cy(t,new Ey(e),n)};function Cy(t,e,n){const r=t.getPriority().val(),i=cw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=cw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new qe(a,wt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new qe(i))),o.forEachChild(St,(a,l)=>{const u=Cy(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Ty{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Iy(t,e){let n=e instanceof ke?e:new ke(e),r=t,i=se(n);for(;i!==null;){const s=js(r.node.children,i)||{children:{},childCount:0};r=new Ty(i,r,s),n=Se(n),i=se(n)}return r}function _o(t){return t.node.value}function ek(t,e){t.node.value=e,Qp(t)}function tk(t){return t.node.childCount>0}function g4(t){return _o(t)===void 0&&!tk(t)}function Bh(t,e){on(t.node.children,(n,r)=>{e(new Ty(n,t,r))})}function nk(t,e,n,r){n&&!r&&e(t),Bh(t,i=>{nk(i,e,!0,r)}),n&&r&&e(t)}function y4(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function xl(t){return new ke(t.parent===null?t.name:xl(t.parent)+"/"+t.name)}function Qp(t){t.parent!==null&&v4(t.parent,t.name,t)}function v4(t,e,n){const r=g4(n),i=mr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Qp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Qp(t))}/**
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
 */const _4=/[\[\].#$\/\u0000-\u001F\u007F]/,w4=/[\[\].#$\u0000-\u001F\u007F]/,ef=10*1024*1024,rk=function(t){return typeof t=="string"&&t.length!==0&&!_4.test(t)},E4=function(t){return typeof t=="string"&&t.length!==0&&!w4.test(t)},S4=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),E4(t)},ik=function(t,e,n){const r=n instanceof ke?new t$(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ai(r));if(typeof e=="function")throw new Error(t+"contains a function "+ai(r)+" with contents = "+e.toString());if(nI(e))throw new Error(t+"contains "+e.toString()+" "+ai(r));if(typeof e=="string"&&e.length>ef/3&&sh(e)>ef)throw new Error(t+"contains a string greater than "+ef+" utf8 bytes "+ai(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(on(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!rk(o)))throw new Error(t+" contains an invalid key ("+o+") "+ai(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);n$(r,o),ik(t,a,r),r$(r)}),i&&s)throw new Error(t+' contains ".value" child '+ai(r)+" in addition to actual children.")}},C4=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!rk(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!S4(n))throw new Error(UD(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class T4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function I4(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!kI(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Hi(t,e,n){I4(t,n),k4(t,r=>gn(r,e)||gn(e,r))}function k4(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(R4(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function R4(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ei&&_t("event: "+n.toString()),Dl(r)}}}/**
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
 */const N4="repo_interrupt",A4=25;class D4{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new T4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lc(),this.transactionQueueTree_=new Ty,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function P4(t,e,n){if(t.stats_=hy(t.repoInfo_),t.forceRestClient_||kF())t.server_=new Mc(t.repoInfo_,(r,i,s,o)=>{hw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>dw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ot(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new tr(t.repoInfo_,e,(r,i,s,o)=>{hw(t,r,i,s,o)},r=>{dw(t,r)},r=>{O4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=PF(t.repoInfo_,()=>new D$(t.stats_,t.server_)),t.infoData_=new I$,t.infoSyncTree_=new uw({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Vh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ky(t,"connected",!1),t.serverSyncTree_=new uw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Hi(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function x4(t){const n=t.infoData_.getNode(new ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function sk(t){return h4({timestamp:x4(t)})}function hw(t,e,n,r,i){t.dataUpdateCount++;const s=new ke(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=sc(n,u=>wt(u));o=c4(t.serverSyncTree_,s,l,i)}else{const l=wt(n);o=u4(t.serverSyncTree_,s,l,i)}else if(r){const l=sc(n,u=>wt(u));o=l4(t.serverSyncTree_,s,l)}else{const l=wt(n);o=Vh(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ny(t,s)),Hi(t.eventQueue_,a,o)}function dw(t,e){ky(t,"connected",e),e===!1&&L4(t)}function O4(t,e){on(e,(n,r)=>{ky(t,n,r)})}function ky(t,e,n){const r=new ke("/.info/"+e),i=wt(n);t.infoData_.updateSnapshot(r,i);const s=Vh(t.infoSyncTree_,r,i);Hi(t.eventQueue_,r,s)}function M4(t){return t.nextWriteId_++}function L4(t){ok(t,"onDisconnectEvents");const e=sk(t),n=Lc();Bp(t.onDisconnect_,me(),(i,s)=>{const o=p4(i,s,t.serverSyncTree_,e);OI(n,i,o)});let r=[];Bp(n,me(),(i,s)=>{r=r.concat(Vh(t.serverSyncTree_,i,s));const o=U4(t,i);Ny(t,o)}),t.onDisconnect_=Lc(),Hi(t.eventQueue_,me(),r)}function b4(t){t.persistentConnection_&&t.persistentConnection_.interrupt(N4)}function ok(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),_t(n,...e)}function ak(t,e,n){return GI(t.serverSyncTree_,e,n)||de.EMPTY_NODE}function Ry(t,e=t.transactionQueueTree_){if(e||jh(t,e),_o(e)){const n=uk(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&F4(t,xl(e),n)}else tk(e)&&Bh(e,n=>{Ry(t,n)})}function F4(t,e,n){const r=n.map(u=>u.currentWriteId),i=ak(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];x(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=en(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{ok(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(ys(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();jh(t,Iy(t.transactionQueueTree_,e)),Ry(t,t.transactionQueueTree_),Hi(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)Dl(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{jt("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Ny(t,e)}},o)}function Ny(t,e){const n=lk(t,e),r=xl(n),i=uk(t,n);return $4(t,i,r),r}function $4(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=en(n,l.path);let c=!1,h;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(ys(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=A4)c=!0,h="maxretry",i=i.concat(ys(t.serverSyncTree_,l.currentWriteId,!0));else{const d=ak(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){ik("transaction failed: Data returned ",g,l.path);let v=wt(g);typeof g=="object"&&g!=null&&mr(g,".priority")||(v=v.updatePriority(d.getPriority()));const y=l.currentWriteId,p=sk(t),f=m4(v,d,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=f,l.currentWriteId=M4(t),o.splice(o.indexOf(y),1),i=i.concat(a4(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(ys(t.serverSyncTree_,y,!0))}else c=!0,h="nodata",i=i.concat(ys(t.serverSyncTree_,l.currentWriteId,!0))}Hi(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}jh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Dl(r[a]);Ry(t,t.transactionQueueTree_)}function lk(t,e){let n,r=t.transactionQueueTree_;for(n=se(e);n!==null&&_o(r)===void 0;)r=Iy(r,n),e=Se(e),n=se(e);return r}function uk(t,e){const n=[];return ck(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ck(t,e,n){const r=_o(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Bh(e,i=>{ck(t,i,n)})}function jh(t,e){const n=_o(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ek(e,n.length>0?n:void 0)}Bh(e,r=>{jh(t,r)})}function U4(t,e){const n=xl(lk(t,e)),r=Iy(t.transactionQueueTree_,e);return y4(r,i=>{tf(t,i)}),tf(t,r),nk(r,i=>{tf(t,i)}),n}function tf(t,e){const n=_o(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ys(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ek(e,void 0):n.length=s+1,Hi(t.eventQueue_,xl(e),i);for(let o=0;o<r.length;o++)Dl(r[o])}}/**
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
 */function V4(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function z4(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):jt(`Invalid query segment '${n}' in query '${t}'`)}return e}const fw=function(t,e){const n=B4(t),r=n.namespace;n.domain==="firebase.com"&&hr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vF();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new pI(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ke(n.pathString)}},B4=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=V4(t.substring(c,h)));const d=z4(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class Ay{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ne(this._path)?null:CI(this._path)}get ref(){return new wo(this._repo,this._path)}get _queryIdentifier(){const e=J0(this._queryParams),n=uy(e);return n==="{}"?"default":n}get _queryObject(){return J0(this._queryParams)}isEqual(e){if(e=ct(e),!(e instanceof Ay))return!1;const n=this._repo===e._repo,r=kI(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+e$(this._path)}}class wo extends Ay{constructor(e,n){super(e,n,new my,!1)}get parent(){const e=II(this._path);return e===null?null:new wo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}s4(wo);o4(wo);/**
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
 */const j4="FIREBASE_DATABASE_EMULATOR_HOST",Yp={};let W4=!1;function H4(t,e,n,r){t.repoInfo_=new pI(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function K4(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||hr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fw(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[j4]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=fw(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Os(Os.OWNER):new NF(t.name,t.options,e);C4("Invalid Firebase Database URL",o),ne(o.path)||hr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=G4(a,t,c,new RF(t.name,n));return new Q4(h,t)}function q4(t,e){const n=Yp[e];(!n||n[t.key]!==t)&&hr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),b4(t),delete n[t.key]}function G4(t,e,n,r){let i=Yp[e.name];i||(i={},Yp[e.name]=i);let s=i[t.toURLString()];return s&&hr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new D4(t,W4,n,r),i[t.toURLString()]=s,s}class Q4{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(P4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wo(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(q4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hr("Cannot call "+e+" on a deleted database.")}}function Y4(t=tg(),e){const n=ah(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=H1("database");r&&X4(n,...r)}return n}function X4(t,e,n,r={}){t=ct(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&hr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&hr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Os(Os.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:q1(r.mockUserToken,t.app.options.projectId);s=new Os(o)}H4(i,e,n,s)}/**
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
 */function J4(t){fF(Vi),Ai(new Hr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return K4(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),bn(M0,L0,t),bn(M0,L0,"esm2017")}tr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};tr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};J4();const Z4={apiKey:"AIzaSyCwi4nTNRBdFvcNcmCelHKZ-jj30AyeRPo",authDomain:"cs4610-final-project-mapsaver.firebaseapp.com",projectId:"cs4610-final-project-mapsaver",storageBucket:"cs4610-final-project-mapsaver.appspot.com",messagingSenderId:"614435212314",appId:"1:614435212314:web:be852dc3c19bafebd355a3",measurementId:"G-VX24TK3Q2E"},Dy=Z1(Z4),Uc=eM(Dy),nf=jb(Dy);Y4(Dy);const eU=()=>{const[t,e]=P.useState(!1),[n,r]=P.useState(null),[i,s]=P.useState(!0),o=YA();return P.useEffect(()=>{const a=zx(Uc,l=>{s(!1),l!==null?(r(l),e(!!l)):(r(null),e(!1))});return i||o(t?"/map":"/login"),a},[t,i]),ye(U1.Provider,{value:n,children:i?ye("div",{children:"Loading..."}):ye(uD,{})})},tU=()=>{const[t,e]=P.useState(""),[n,r]=P.useState("");function i(){Fx(Uc,t,n).then(({user:o})=>{console.log(o)})}function s(){$x(Uc,t,n).then(({user:o})=>{console.log(o)})}return ye("div",{className:"container",children:Zi("div",{className:"login",children:[ye("div",{children:"Login / Create Account"}),ye("input",{type:"email",value:t,onChange:o=>e(o.target.value),placeholder:"Enter Email"}),ye("input",{type:"password",value:n,onChange:o=>r(o.target.value),placeholder:"Enter Your Password"}),Zi("div",{className:"login-controls",children:[ye("button",{onClick:i,children:"Create Account"}),ye("button",{onClick:s,children:"Sign In"})]})]})})};var nU=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,i,s;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!t(e[i],n[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(s=Object.keys(e),r=s.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,s[i]))return!1;for(i=r;i--!==0;){var o=s[i];if(!t(e[o],n[o]))return!1}return!0}return e!==e&&n!==n};const pw="__googleMapsScriptId";var vs;(function(t){t[t.INITIALIZED=0]="INITIALIZED",t[t.LOADING=1]="LOADING",t[t.SUCCESS=2]="SUCCESS",t[t.FAILURE=3]="FAILURE"})(vs||(vs={}));class li{constructor({apiKey:e,authReferrerPolicy:n,channel:r,client:i,id:s=pw,language:o,libraries:a=[],mapIds:l,nonce:u,region:c,retries:h=3,url:d="https://maps.googleapis.com/maps/api/js",version:g}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=n,this.channel=r,this.client=i,this.id=s||pw,this.language=o,this.libraries=a,this.mapIds=l,this.nonce=u,this.region=c,this.retries=h,this.url=d,this.version=g,li.instance){if(!nU(this.options,li.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(li.instance.options)}`);return li.instance}li.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?vs.FAILURE:this.done?vs.SUCCESS:this.loading?vs.LOADING:vs.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,n)=>{this.loadCallback(r=>{r?n(r.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id)){this.callback();return}const e=this.createUrl(),n=document.createElement("script");n.id=this.id,n.type="text/javascript",n.src=e,n.onerror=this.loadErrorCallback.bind(this),n.defer=!0,n.async=!0,this.nonce&&(n.nonce=this.nonce),document.head.appendChild(n)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const n=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${n} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},n)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}const rU=()=>{const t=P.useContext(U1),[e,n]=P.useState(!0),[r,i]=P.useState("Cedar City, UT"),[s,o]=P.useState([]),[a,l]=P.useState(""),[u,c]=P.useState(!1);var h,d={lat:41.7369803,lng:-111.8338359};function g(f){if(e)return;const m=new window.google.maps.Geocoder;var w=r;f!=""&&(w=f),console.log(w),m.geocode({address:w},(C,N)=>{if(N==="OK"&&C!=null){let D=C[0].geometry.location.lat(),A=C[0].geometry.location.lng();d={lat:D,lng:A},v()}else console.error("Geocode was not successful for the following reason: "+N),l(N),c(!0)}),_()}P.useEffect(()=>{if(u){const f=setTimeout(()=>{c(!1)},3e3);return()=>{clearTimeout(f)}}return()=>{}},[u]);function v(){new li({apiKey:"AIzaSyCnk9jGoixRBF1-KaOB44czP9l8T-re1CY",version:"weekly",libraries:["places"]}).load().then(()=>{h=new window.google.maps.Map(document.getElementById("map"),{center:d,zoom:12}),new window.google.maps.Marker({position:d,map:h,title:"DEFAULT"})}),n(!1)}async function _(){const f=t.uid,m=await cF(tF(P0(nf,"savedlocations"),nF("createrId","==",f))),w=[];m.forEach(C=>{w.push({...C.data()})}),o(w)}async function y(){await dF(P0(nf,"savedlocations"),{location:r,createrId:t.uid}),_()}async function p(f){const m=await VT(nf,"savedlocations",f);hF(m),console.log(m),console.log(f),_()}return P.useEffect(()=>{const f=w=>{console.log(w),d={lat:w.coords.latitude,lng:w.coords.longitude},v()},m=w=>{console.log(w)};navigator.geolocation.getCurrentPosition(f,m),v(),_()},[e]),Zi("div",{className:"LR",children:[ye("div",{children:ye("div",{id:"map",style:{height:"100vh",width:"50vw"}})}),Zi("div",{className:"middle",children:[ye("div",{className:"scroll",children:s.map(f=>Zi("div",{className:"sidetoside",children:[ye("button",{onClick:()=>p(f.location),className:"trashcanbutton",children:ye("svg",{width:"20",height:"16",viewBox:"0 0 1024 1024",children:ye("path",{d:"M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z"})})}),ye("div",{className:"location",onClick:()=>g(f.location),children:f.location})]}))}),ye("input",{type:"text",onChange:f=>i(f.target.value),placeholder:"New Address"}),Zi("div",{children:[ye("button",{onClick:()=>g(""),children:"Search"}),ye("button",{onClick:()=>y(),children:"Save"}),ye("button",{onClick:()=>Bx(Uc),children:"Logout"}),ye("div",{className:`warning ${u?"":"hidden"}`,children:a})]})]})]})},iU=pD([{path:"/",element:ye(eU,{}),children:[{path:"/login",element:ye(tU,{})},{path:"/map",element:ye(rU,{})}]}]);function sU(){return ye(lD,{router:iU})}sf.createRoot(document.getElementById("root")).render(ye(Sw.StrictMode,{children:ye(sU,{})}));
