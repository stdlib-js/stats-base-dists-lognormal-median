// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(t){return t!=t}var n=Math.floor,r=Math.ceil;function e(t){return t<0?r(t):n(t)}var o=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;function a(t){return t===i||t===o}var u="function"==typeof Object.defineProperty?Object.defineProperty:null,f=Object.defineProperty,c=Object.prototype,l=c.toString,y=c.__defineGetter__,p=c.__defineSetter__,b=c.__lookupGetter__,v=c.__lookupSetter__,s=function(){try{return u({},"x",{}),!0}catch(t){return!1}}()?f:function(t,n,r){var e,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===l.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===l.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(b.call(t,n)||v.call(t,n)?(e=t.__proto__,t.__proto__=c,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&y&&y.call(t,n,r.get),a&&p&&p.call(t,n,r.set),t};function d(t,n,r){s(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}var A,_="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,w=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",U=_&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return m.call(t);r=t[h],i=h,n=null!=(o=t)&&w.call(o,i);try{t[h]=void 0}catch(n){return m.call(t)}return e=m.call(t),n?t[h]=r:delete t[h],e}:function(t){return m.call(t)},g="function"==typeof Uint32Array,j="function"==typeof Uint32Array?Uint32Array:null,I="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var t,n,r;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(g&&r instanceof Uint32Array||"[object Uint32Array]"===U(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?I:function(){throw new Error("not implemented")};var O,S=A,N="function"==typeof Float64Array,E="function"==typeof Float64Array?Float64Array:null,F="function"==typeof Float64Array?Float64Array:void 0;O=function(){var t,n,r;if("function"!=typeof E)return!1;try{n=new E([1,3.14,-3.14,NaN]),r=n,t=(N&&r instanceof Float64Array||"[object Float64Array]"===U(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?F:function(){throw new Error("not implemented")};var T,H=O,G="function"==typeof Uint8Array,P="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var t,n,r;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),r=n,t=(G&&r instanceof Uint8Array||"[object Uint8Array]"===U(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?L:function(){throw new Error("not implemented")};var V,W=T,x="function"==typeof Uint16Array,M="function"==typeof Uint16Array?Uint16Array:null,k="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var t,n,r;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,65536,65537]),r=n,t=(x&&r instanceof Uint16Array||"[object Uint16Array]"===U(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?k:function(){throw new Error("not implemented")};var Y,C={uint16:V,uint8:W};(Y=new C.uint16(1))[0]=4660;var q,z,B=52===new C.uint8(Y.buffer)[0];!0===B?(q=1,z=0):(q=0,z=1);var D={HIGH:q,LOW:z},J=new H(1),K=new S(J.buffer),Q=D.HIGH,R=D.LOW;function X(t,n,r,e){return J[0]=t,n[e]=K[Q],n[e+r]=K[R],n}function Z(t){return X(t,[0,0],1,0)}d(Z,"assign",X);var $,tt,nt=!0===B?1:0,rt=new H(1),et=new S(rt.buffer);function ot(t){return rt[0]=t,et[nt]}!0===B?($=1,tt=0):($=0,tt=1);var it={HIGH:$,LOW:tt},at=new H(1),ut=new S(at.buffer),ft=it.HIGH,ct=it.LOW;function lt(t,n){return ut[ft]=t,ut[ct]=n,at[0]}var yt=[0,0];function pt(n,r,e,o){return t(n)||a(n)?(r[o]=n,r[o+e]=0,r):0!==n&&function(t){return Math.abs(t)}(n)<22250738585072014e-324?(r[o]=4503599627370496*n,r[o+e]=-52,r):(r[o]=n,r[o+e]=0,r)}d((function(t){return pt(t,[0,0],1,0)}),"assign",pt);var bt=[0,0],vt=[0,0];function st(n,r){var e,u,f,c,l,y;return 0===r||0===n||t(n)||a(n)?n:(pt(n,bt,1,0),r+=bt[1],r+=function(t){var n=ot(t);return(n=(2146435072&n)>>>20)-1023|0}(n=bt[0]),r<-1074?(f=0,c=n,Z.assign(f,yt,1,0),l=yt[0],l&=2147483647,y=ot(c),lt(l|=y&=2147483648,yt[1])):r>1023?n<0?o:i:(r<=-1023?(r+=52,u=2220446049250313e-31):u=1,Z.assign(n,vt,1,0),e=vt[0],e&=2148532223,u*lt(e|=r+1023<<20,vt[1])))}var dt=1.4426950408889634,At=1/(1<<28);function _t(n){var r;return t(n)||n===i?n:n===o?0:n>709.782712893384?i:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<At?1+n:function(t,n,r){var e,o,i,a;return st(1-(n-(e=t-n)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),r)}(n-.6931471803691238*(r=e(n<0?dt*n-.5:dt*n+.5)),1.9082149292705877e-10*r,r)}return function(n,r){return t(n)||t(r)||r<=0?NaN:_t(n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).median=n();
//# sourceMappingURL=browser.js.map
