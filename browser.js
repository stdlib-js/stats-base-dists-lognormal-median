// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t=function(n){return n!=n},r=Math.floor,e=Math.ceil,o=r,i=e,u=function(n){return n<0?i(n):o(n)},f=Number.NEGATIVE_INFINITY,c=Number.POSITIVE_INFINITY,a=c,y=f,l=function(n){return n===a||n===y},p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),A=Object.prototype.toString,b=A,d=function(n){return b.call(n)},m=Object.prototype.hasOwnProperty,w=function(n,t){return null!=n&&m.call(n,t)},U="function"==typeof Symbol?Symbol.toStringTag:"",v=w,h=U,s=A,I=d,N=function(n){var t,r,e;if(null==n)return s.call(n);r=n[h],t=v(n,h);try{n[h]=void 0}catch(t){return s.call(n)}return e=s.call(n),t?n[h]=r:delete n[h],e},g=p&&"symbol"==typeof Symbol.toStringTag?N:I,F=g,S="function"==typeof Uint32Array,H="function"==typeof Uint32Array?Uint32Array:null,O=function(n){return S&&n instanceof Uint32Array||"[object Uint32Array]"===F(n)},T=H,j=function(){var n,t;if("function"!=typeof T)return!1;try{t=new T(t=[1,3.14,-3.14,4294967296,4294967297]),n=O(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},E="function"==typeof Uint32Array?Uint32Array:void 0,G=function(){throw new Error("not implemented")},L=j()?E:G,W=g,M="function"==typeof Float64Array,x="function"==typeof Float64Array?Float64Array:null,P=function(n){return M&&n instanceof Float64Array||"[object Float64Array]"===W(n)},V=x,Y=function(){var n,t;if("function"!=typeof V)return!1;try{t=new V([1,3.14,-3.14,NaN]),n=P(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n},_="function"==typeof Float64Array?Float64Array:void 0,k=function(){throw new Error("not implemented")},q=Y()?_:k,z=g,B="function"==typeof Uint8Array,C="function"==typeof Uint8Array?Uint8Array:null,D=function(n){return B&&n instanceof Uint8Array||"[object Uint8Array]"===z(n)},J=C,K=function(){var n,t;if("function"!=typeof J)return!1;try{t=new J(t=[1,3.14,-3.14,256,257]),n=D(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},Q="function"==typeof Uint8Array?Uint8Array:void 0,R=function(){throw new Error("not implemented")},X=K()?Q:R,Z=g,$="function"==typeof Uint16Array,nn="function"==typeof Uint16Array?Uint16Array:null,tn=function(n){return $&&n instanceof Uint16Array||"[object Uint16Array]"===Z(n)},rn=nn,en=function(){var n,t;if("function"!=typeof rn)return!1;try{t=new rn(t=[1,3.14,-3.14,65536,65537]),n=tn(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},on="function"==typeof Uint16Array?Uint16Array:void 0,un=function(){throw new Error("not implemented")},fn={uint16:en()?on:un,uint8:X};(n=new fn.uint16(1))[0]=4660;var cn,an,yn=52===new fn.uint8(n.buffer)[0];!0===yn?(cn=1,an=0):(cn=0,an=1);var ln,pn,An=L,bn={HIGH:cn,LOW:an},dn=new q(1),mn=new An(dn.buffer),wn=bn.HIGH,Un=bn.LOW,vn=function(n,t){return dn[0]=t,n[0]=mn[wn],n[1]=mn[Un],n},hn=function(n,t){return 1===arguments.length?vn([0,0],n):vn(n,t)},sn=hn,In=L,Nn=!0===yn?1:0,gn=new q(1),Fn=new In(gn.buffer),Sn=function(n){return gn[0]=n,Fn[Nn]};!0===yn?(ln=1,pn=0):(ln=0,pn=1);var Hn=L,On={HIGH:ln,LOW:pn},Tn=new q(1),jn=new Hn(Tn.buffer),En=On.HIGH,Gn=On.LOW,Ln=function(n,t){return jn[En]=n,jn[Gn]=t,Tn[0]},Wn=sn,Mn=Sn,xn=Ln,Pn=[0,0],Vn=l,Yn=t,_n=function(n){return Math.abs(n)},kn=function(n,t){return Yn(t)||Vn(t)?(n[0]=t,n[1]=0,n):0!==t&&_n(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)},qn=function(n,t){return 1===arguments.length?kn([0,0],n):kn(n,t)},zn=Sn,Bn=function(n){var t=zn(n);return(t=(2146435072&t)>>>20)-1023|0},Cn=c,Dn=f,Jn=t,Kn=l,Qn=function(n,t){var r,e;return Wn(Pn,n),r=Pn[0],r&=2147483647,e=Mn(t),xn(r|=e&=2147483648,Pn[1])},Rn=qn,Xn=Bn,Zn=sn,$n=Ln,nt=[0,0],tt=[0,0],rt=function(n,t){var r,e;return 0===t||0===n||Jn(n)||Kn(n)?n:(Rn(nt,n),t+=nt[1],(t+=Xn(n=nt[0]))<-1074?Qn(0,n):t>1023?n<0?Dn:Cn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Zn(tt,n),r=tt[0],r&=2148532223,e*$n(r|=t+1023<<20,tt[1])))},et=rt,ot=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},it=t,ut=u,ft=f,ct=c,at=function(n,t,r){var e,o,i;return i=(e=n-t)-(o=e*e)*ot(o),et(1-(t-e*i/(2-i)-n),r)},yt=1.4426950408889634,lt=1/(1<<28),pt=function(n){var t;return it(n)||n===ct?n:n===ft?0:n>709.782712893384?ct:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<lt?1+n:(t=ut(n<0?yt*n-.5:yt*n+.5),at(n-.6931471803691238*t,1.9082149292705877e-10*t,t))};return function(n,r){return t(n)||t(r)||r<=0?NaN:pt(n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).median=t();
//# sourceMappingURL=browser.js.map
