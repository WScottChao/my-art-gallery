var $h=Object.defineProperty,Yh=Object.defineProperties;var Xh=Object.getOwnPropertyDescriptors;var oo=Object.getOwnPropertySymbols;var Jh=Object.prototype.hasOwnProperty,Zh=Object.prototype.propertyIsEnumerable;var so=Math.pow,st=(n,e,t)=>e in n?$h(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,S2=(n,e)=>{for(var t in e||(e={}))Jh.call(e,t)&&st(n,t,e[t]);if(oo)for(var t of oo(e))Zh.call(e,t)&&st(n,t,e[t]);return n},a3=(n,e)=>Yh(n,Xh(e));var p1=(n,e,t)=>(st(n,typeof e!="symbol"?e+"":e,t),t);var W2=(n,e,t)=>new Promise((r,a)=>{var i=l=>{try{s(t.next(l))}catch(u){a(u)}},o=l=>{try{s(t.throw(l))}catch(u){a(u)}},s=l=>l.done?r(l.value):Promise.resolve(l.value).then(i,o);s((t=t.apply(n,e)).next())});import{bw as qh,aD as X8,r as h2,bx as R2,aW as lo,Y as U1,by as Sc,as as M8,bz as vn,H as a2,bi as De,bA as wc,G as d2,d as A1,j as e1,k as H,C as T1,w as x,e as p,c as h1,F as L1,l as u2,n as V1,t as V2,f as c,a7 as M2,at as H1,a$ as Be,a as w0,bB as x4,bm as N7,g as z7,b as i1,bC as Qh,o as Ve,aO as f6,$ as Se,bD as Y2,bE as K2,bF as Kh,bG as ep,bH as S3,bI as U7,bJ as m3,bK as w3,bL as N3,bM as B7,au as Ge,bN as z5,aF as A2,p as oe,q as se,z as w2,bO as D8,bP as v5,b5 as k4,bQ as Fe,bb as ia,bR as tp,bS as np,bT as Ac,bU as oa,bV as lt,av as k1,bW as sa,bX as Tc,bY as rp,bZ as la,b_ as ap,b$ as B0,c0 as co,c1 as ip,c2 as Ec,c3 as Cc,c4 as Mc,c5 as Dc,c6 as op,c7 as kc,c8 as sp,c9 as ct,ca as uo,cb as Rc,cc as r7,cd as fo,ce as _n,cf as lp,cg as cp,ch as ho,ci as up,cj as po,ck as fp,ba as mo,cl as dp,cm as Ic,cn as hp,co as pp,cp as mp,cq as gp,cr as vp,cs as _p,ab as J8,J as q4,ct as d6,bn as V0,cu as xp,Q as yp,U as bp,a6 as Oc,cv as Sp,cw as wp,cx as Ap,cy as Tp,cz as Ep,cA as go,cB as Cp,cC as ut,b2 as Mp,aA as Lc,az as Fc,bs as Pc,cD as xn,cE as Dp}from"./index-9e787fa5.js";import{S as D}from"./SettingItem-264e825b.js";import{S as o1}from"./SettingItemBox-ee4024ad.js";import{_ as R1}from"./CollapseItem.vue_vue_type_script_setup_true_lang-374cf080.js";import{i as V7}from"./icon-caec1666.js";import{d as r2,u as p2,b as j1,e as m2,F as ca}from"./chartEditStore-56d3c83a.js";/* empty css                                                                      */import{s as We,e as c3,m as g3,H as u3}from"./index.esm.min-33db7d4b.js";import{a as kp,b as Rp,l as Ip,g as Op}from"./plugin-e1dac962.js";import{F as ft}from"./fileTypeEnum-21359a08.js";/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */var Nc=1252,Lp=[874,932,936,949,950,1250,1251,1252,1253,1254,1255,1256,1257,1258,1e4],ua={0:1252,1:65001,2:65001,77:1e4,128:932,129:949,130:1361,134:936,136:950,161:1253,162:1254,163:1258,177:1255,178:1256,186:1257,204:1251,222:874,238:1250,255:1252,69:6969},fa=function(n){Lp.indexOf(n)!=-1&&(Nc=ua[0]=n)};function Fp(){fa(1252)}var g4=function(n){fa(n)};function zc(){g4(1200),Fp()}function vo(n){for(var e=[],t=0,r=n.length;t<r;++t)e[t]=n.charCodeAt(t);return e}function Pp(n){for(var e=[],t=0;t<n.length>>1;++t)e[t]=String.fromCharCode(n.charCodeAt(2*t)+(n.charCodeAt(2*t+1)<<8));return e.join("")}function Uc(n){for(var e=[],t=0;t<n.length>>1;++t)e[t]=String.fromCharCode(n.charCodeAt(2*t+1)+(n.charCodeAt(2*t)<<8));return e.join("")}var t8=function(n){var e=n.charCodeAt(0),t=n.charCodeAt(1);return e==255&&t==254?Pp(n.slice(2)):e==254&&t==255?Uc(n.slice(2)):e==65279?n.slice(1):n},h6=function(e){return String.fromCharCode(e)},_o=function(e){return String.fromCharCode(e)},ye,we="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function xo(n){for(var e="",t=0,r=0,a=0,i=0,o=0,s=0,l=0,u=0;u<n.length;)t=n.charCodeAt(u++),i=t>>2,r=n.charCodeAt(u++),o=(t&3)<<4|r>>4,a=n.charCodeAt(u++),s=(r&15)<<2|a>>6,l=a&63,isNaN(r)?s=l=64:isNaN(a)&&(l=64),e+=we.charAt(i)+we.charAt(o)+we.charAt(s)+we.charAt(l);return e}function z0(n){var e="",t=0,r=0,a=0,i=0,o=0,s=0,l=0;n=n.replace(/[^\w\+\/\=]/g,"");for(var u=0;u<n.length;)i=we.indexOf(n.charAt(u++)),o=we.indexOf(n.charAt(u++)),t=i<<2|o>>4,e+=String.fromCharCode(t),s=we.indexOf(n.charAt(u++)),r=(o&15)<<4|s>>2,s!==64&&(e+=String.fromCharCode(r)),l=we.indexOf(n.charAt(u++)),a=(s&3)<<6|l,l!==64&&(e+=String.fromCharCode(a));return e}var C2=function(){return typeof Buffer!="undefined"&&typeof process!="undefined"&&typeof process.versions!="undefined"&&!!process.versions.node}(),T9=function(){if(typeof Buffer!="undefined"){var n=!Buffer.from;if(!n)try{Buffer.from("foo","utf8")}catch(e){n=!0}return n?function(e,t){return t?new Buffer(e,t):new Buffer(e)}:Buffer.from.bind(Buffer)}return function(){}}();function Pe(n){return C2?Buffer.alloc?Buffer.alloc(n):new Buffer(n):typeof Uint8Array!="undefined"?new Uint8Array(n):new Array(n)}function yo(n){return C2?Buffer.allocUnsafe?Buffer.allocUnsafe(n):new Buffer(n):typeof Uint8Array!="undefined"?new Uint8Array(n):new Array(n)}var p4=function(e){return C2?T9(e,"binary"):e.split("").map(function(t){return t.charCodeAt(0)&255})};function E9(n){if(Array.isArray(n))return n.map(function(r){return String.fromCharCode(r)}).join("");for(var e=[],t=0;t<n.length;++t)e[t]=String.fromCharCode(n[t]);return e.join("")}function da(n){if(typeof ArrayBuffer=="undefined")throw new Error("Unsupported");if(n instanceof ArrayBuffer)return da(new Uint8Array(n));for(var e=new Array(n.length),t=0;t<n.length;++t)e[t]=n[t];return e}var be=C2?function(n){return Buffer.concat(n.map(function(e){return Buffer.isBuffer(e)?e:T9(e)}))}:function(n){if(typeof Uint8Array!="undefined"){var e=0,t=0;for(e=0;e<n.length;++e)t+=n[e].length;var r=new Uint8Array(t),a=0;for(e=0,t=0;e<n.length;t+=a,++e)if(a=n[e].length,n[e]instanceof Uint8Array)r.set(n[e],t);else{if(typeof n[e]=="string")throw"wtf";r.set(new Uint8Array(n[e]),t)}return r}return[].concat.apply([],n.map(function(i){return Array.isArray(i)?i:[].slice.call(i)}))};function Np(n){for(var e=[],t=0,r=n.length+250,a=Pe(n.length+255),i=0;i<n.length;++i){var o=n.charCodeAt(i);if(o<128)a[t++]=o;else if(o<2048)a[t++]=192|o>>6&31,a[t++]=128|o&63;else if(o>=55296&&o<57344){o=(o&1023)+64;var s=n.charCodeAt(++i)&1023;a[t++]=240|o>>8&7,a[t++]=128|o>>2&63,a[t++]=128|s>>6&15|(o&3)<<4,a[t++]=128|s&63}else a[t++]=224|o>>12&15,a[t++]=128|o>>6&63,a[t++]=128|o&63;t>r&&(e.push(a.slice(0,t)),t=0,a=Pe(65535),r=65530)}return e.push(a.slice(0,t)),be(e)}var c0=/\u0000/g,n8=/[\u0001-\u0006]/g;function _5(n){for(var e="",t=n.length-1;t>=0;)e+=n.charAt(t--);return e}function v4(n,e){var t=""+n;return t.length>=e?t:o3("0",e-t.length)+t}function ha(n,e){var t=""+n;return t.length>=e?t:o3(" ",e-t.length)+t}function u7(n,e){var t=""+n;return t.length>=e?t:t+o3(" ",e-t.length)}function zp(n,e){var t=""+Math.round(n);return t.length>=e?t:o3("0",e-t.length)+t}function Up(n,e){var t=""+n;return t.length>=e?t:o3("0",e-t.length)+t}var bo=Math.pow(2,32);function F9(n,e){if(n>bo||n<-bo)return zp(n,e);var t=Math.round(n);return Up(t,e)}function f7(n,e){return e=e||0,n.length>=7+e&&(n.charCodeAt(e)|32)===103&&(n.charCodeAt(e+1)|32)===101&&(n.charCodeAt(e+2)|32)===110&&(n.charCodeAt(e+3)|32)===101&&(n.charCodeAt(e+4)|32)===114&&(n.charCodeAt(e+5)|32)===97&&(n.charCodeAt(e+6)|32)===108}var So=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]],dt=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]];function Bp(n){return n||(n={}),n[0]="General",n[1]="0",n[2]="0.00",n[3]="#,##0",n[4]="#,##0.00",n[9]="0%",n[10]="0.00%",n[11]="0.00E+00",n[12]="# ?/?",n[13]="# ??/??",n[14]="m/d/yy",n[15]="d-mmm-yy",n[16]="d-mmm",n[17]="mmm-yy",n[18]="h:mm AM/PM",n[19]="h:mm:ss AM/PM",n[20]="h:mm",n[21]="h:mm:ss",n[22]="m/d/yy h:mm",n[37]="#,##0 ;(#,##0)",n[38]="#,##0 ;[Red](#,##0)",n[39]="#,##0.00;(#,##0.00)",n[40]="#,##0.00;[Red](#,##0.00)",n[45]="mm:ss",n[46]="[h]:mm:ss",n[47]="mmss.0",n[48]="##0.0E+0",n[49]="@",n[56]='"上午/下午 "hh"時"mm"分"ss"秒 "',n}var b2={0:"General",1:"0",2:"0.00",3:"#,##0",4:"#,##0.00",9:"0%",10:"0.00%",11:"0.00E+00",12:"# ?/?",13:"# ??/??",14:"m/d/yy",15:"d-mmm-yy",16:"d-mmm",17:"mmm-yy",18:"h:mm AM/PM",19:"h:mm:ss AM/PM",20:"h:mm",21:"h:mm:ss",22:"m/d/yy h:mm",37:"#,##0 ;(#,##0)",38:"#,##0 ;[Red](#,##0)",39:"#,##0.00;(#,##0.00)",40:"#,##0.00;[Red](#,##0.00)",45:"mm:ss",46:"[h]:mm:ss",47:"mmss.0",48:"##0.0E+0",49:"@",56:'"上午/下午 "hh"時"mm"分"ss"秒 "'},wo={5:37,6:38,7:39,8:40,23:0,24:0,25:0,26:0,27:14,28:14,29:14,30:14,31:14,50:14,51:14,52:14,53:14,54:14,55:14,56:14,57:14,58:14,59:1,60:2,61:3,62:4,67:9,68:10,69:12,70:13,71:14,72:14,73:15,74:16,75:17,76:20,77:21,78:22,79:45,80:46,81:47,82:0},Vp={5:'"$"#,##0_);\\("$"#,##0\\)',63:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',41:'_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'};function d7(n,e,t){for(var r=n<0?-1:1,a=n*r,i=0,o=1,s=0,l=1,u=0,f=0,d=Math.floor(a);u<e&&(d=Math.floor(a),s=d*o+i,f=d*u+l,!(a-d<5e-8));)a=1/(a-d),i=o,o=s,l=u,u=f;if(f>e&&(u>e?(f=l,s=i):(f=u,s=o)),!t)return[0,r*s,f];var h=Math.floor(r*s/f);return[h,r*s-h*f,f]}function n9(n,e,t){if(n>2958465||n<0)return null;var r=n|0,a=Math.floor(86400*(n-r)),i=0,o=[],s={D:r,T:a,u:86400*(n-r)-a,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(s.u)<1e-6&&(s.u=0),e&&e.date1904&&(r+=1462),s.u>.9999&&(s.u=0,++a==86400&&(s.T=a=0,++r,++s.D)),r===60)o=t?[1317,10,29]:[1900,2,29],i=3;else if(r===0)o=t?[1317,8,29]:[1900,1,0],i=6;else{r>60&&--r;var l=new Date(1900,0,1);l.setDate(l.getDate()+r-1),o=[l.getFullYear(),l.getMonth()+1,l.getDate()],i=l.getDay(),r<60&&(i=(i+6)%7),t&&(i=Yp(l,o))}return s.y=o[0],s.m=o[1],s.d=o[2],s.S=a%60,a=Math.floor(a/60),s.M=a%60,a=Math.floor(a/60),s.H=a,s.q=i,s}var Bc=new Date(1899,11,31,0,0,0),Gp=Bc.getTime(),Wp=new Date(1900,2,1,0,0,0);function Vc(n,e){var t=n.getTime();return e?t-=1461*24*60*60*1e3:n>=Wp&&(t+=24*60*60*1e3),(t-(Gp+(n.getTimezoneOffset()-Bc.getTimezoneOffset())*6e4))/(24*60*60*1e3)}function pa(n){return n.indexOf(".")==-1?n:n.replace(/(?:\.0*|(\.\d*[1-9])0+)$/,"$1")}function jp(n){return n.indexOf("E")==-1?n:n.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/,"$1E").replace(/(E[+-])(\d)$/,"$10$2")}function Hp(n){var e=n<0?12:11,t=pa(n.toFixed(12));return t.length<=e||(t=n.toPrecision(10),t.length<=e)?t:n.toExponential(5)}function $p(n){var e=pa(n.toFixed(11));return e.length>(n<0?12:11)||e==="0"||e==="-0"?n.toPrecision(6):e}function k8(n){var e=Math.floor(Math.log(Math.abs(n))*Math.LOG10E),t;return e>=-4&&e<=-1?t=n.toPrecision(10+e):Math.abs(e)<=9?t=Hp(n):e===10?t=n.toFixed(10).substr(0,12):t=$p(n),pa(jp(t.toUpperCase()))}function v9(n,e){switch(typeof n){case"string":return n;case"boolean":return n?"TRUE":"FALSE";case"number":return(n|0)===n?n.toString(10):k8(n);case"undefined":return"";case"object":if(n==null)return"";if(n instanceof Date)return e4(14,Vc(n,e&&e.date1904),e)}throw new Error("unsupported value in General format: "+n)}function Yp(n,e){e[0]-=581;var t=n.getDay();return n<60&&(t=(t+6)%7),t}function Xp(n,e,t,r){var a="",i=0,o=0,s=t.y,l,u=0;switch(n){case 98:s=t.y+543;case 121:switch(e.length){case 1:case 2:l=s%100,u=2;break;default:l=s%1e4,u=4;break}break;case 109:switch(e.length){case 1:case 2:l=t.m,u=e.length;break;case 3:return dt[t.m-1][1];case 5:return dt[t.m-1][0];default:return dt[t.m-1][2]}break;case 100:switch(e.length){case 1:case 2:l=t.d,u=e.length;break;case 3:return So[t.q][0];default:return So[t.q][1]}break;case 104:switch(e.length){case 1:case 2:l=1+(t.H+11)%12,u=e.length;break;default:throw"bad hour format: "+e}break;case 72:switch(e.length){case 1:case 2:l=t.H,u=e.length;break;default:throw"bad hour format: "+e}break;case 77:switch(e.length){case 1:case 2:l=t.M,u=e.length;break;default:throw"bad minute format: "+e}break;case 115:if(e!="s"&&e!="ss"&&e!=".0"&&e!=".00"&&e!=".000")throw"bad second format: "+e;return t.u===0&&(e=="s"||e=="ss")?v4(t.S,e.length):(r>=2?o=r===3?1e3:100:o=r===1?10:1,i=Math.round(o*(t.S+t.u)),i>=60*o&&(i=0),e==="s"?i===0?"0":""+i/o:(a=v4(i,2+r),e==="ss"?a.substr(0,2):"."+a.substr(2,e.length-1)));case 90:switch(e){case"[h]":case"[hh]":l=t.D*24+t.H;break;case"[m]":case"[mm]":l=(t.D*24+t.H)*60+t.M;break;case"[s]":case"[ss]":l=((t.D*24+t.H)*60+t.M)*60+Math.round(t.S+t.u);break;default:throw"bad abstime format: "+e}u=e.length===3?1:2;break;case 101:l=s,u=1;break}var f=u>0?v4(l,u):"";return f}function Ae(n){var e=3;if(n.length<=e)return n;for(var t=n.length%e,r=n.substr(0,t);t!=n.length;t+=e)r+=(r.length>0?",":"")+n.substr(t,e);return r}var Gc=/%/g;function Jp(n,e,t){var r=e.replace(Gc,""),a=e.length-r.length;return Q4(n,r,t*Math.pow(10,2*a))+o3("%",a)}function Zp(n,e,t){for(var r=e.length-1;e.charCodeAt(r-1)===44;)--r;return Q4(n,e.substr(0,r),t/Math.pow(10,3*(e.length-r)))}function Wc(n,e){var t,r=n.indexOf("E")-n.indexOf(".")-1;if(n.match(/^#+0.0E\+0$/)){if(e==0)return"0.0E+0";if(e<0)return"-"+Wc(n,-e);var a=n.indexOf(".");a===-1&&(a=n.indexOf("E"));var i=Math.floor(Math.log(e)*Math.LOG10E)%a;if(i<0&&(i+=a),t=(e/Math.pow(10,i)).toPrecision(r+1+(a+i)%a),t.indexOf("e")===-1){var o=Math.floor(Math.log(e)*Math.LOG10E);for(t.indexOf(".")===-1?t=t.charAt(0)+"."+t.substr(1)+"E+"+(o-t.length+i):t+="E+"+(o-i);t.substr(0,2)==="0.";)t=t.charAt(0)+t.substr(2,a)+"."+t.substr(2+a),t=t.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.");t=t.replace(/\+-/,"-")}t=t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(s,l,u,f){return l+u+f.substr(0,(a+i)%a)+"."+f.substr(i)+"E"})}else t=e.toExponential(r);return n.match(/E\+00$/)&&t.match(/e[+-]\d$/)&&(t=t.substr(0,t.length-1)+"0"+t.charAt(t.length-1)),n.match(/E\-/)&&t.match(/e\+/)&&(t=t.replace(/e\+/,"e")),t.replace("e","E")}var jc=/# (\?+)( ?)\/( ?)(\d+)/;function qp(n,e,t){var r=parseInt(n[4],10),a=Math.round(e*r),i=Math.floor(a/r),o=a-i*r,s=r;return t+(i===0?"":""+i)+" "+(o===0?o3(" ",n[1].length+1+n[4].length):ha(o,n[1].length)+n[2]+"/"+n[3]+v4(s,n[4].length))}function Qp(n,e,t){return t+(e===0?"":""+e)+o3(" ",n[1].length+2+n[4].length)}var Hc=/^#*0*\.([0#]+)/,$c=/\).*[0#]/,Yc=/\(###\) ###\\?-####/;function i0(n){for(var e="",t,r=0;r!=n.length;++r)switch(t=n.charCodeAt(r)){case 35:break;case 63:e+=" ";break;case 48:e+="0";break;default:e+=String.fromCharCode(t)}return e}function Ao(n,e){var t=Math.pow(10,e);return""+Math.round(n*t)/t}function To(n,e){var t=n-Math.floor(n),r=Math.pow(10,e);return e<(""+Math.round(t*r)).length?0:Math.round(t*r)}function Kp(n,e){return e<(""+Math.round((n-Math.floor(n))*Math.pow(10,e))).length?1:0}function em(n){return n<2147483647&&n>-2147483648?""+(n>=0?n|0:n-1|0):""+Math.floor(n)}function j0(n,e,t){if(n.charCodeAt(0)===40&&!e.match($c)){var r=e.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return t>=0?j0("n",r,t):"("+j0("n",r,-t)+")"}if(e.charCodeAt(e.length-1)===44)return Zp(n,e,t);if(e.indexOf("%")!==-1)return Jp(n,e,t);if(e.indexOf("E")!==-1)return Wc(e,t);if(e.charCodeAt(0)===36)return"$"+j0(n,e.substr(e.charAt(1)==" "?2:1),t);var a,i,o,s,l=Math.abs(t),u=t<0?"-":"";if(e.match(/^00+$/))return u+F9(l,e.length);if(e.match(/^[#?]+$/))return a=F9(t,0),a==="0"&&(a=""),a.length>e.length?a:i0(e.substr(0,e.length-a.length))+a;if(i=e.match(jc))return qp(i,l,u);if(e.match(/^#+0+$/))return u+F9(l,e.length-e.indexOf("0"));if(i=e.match(Hc))return a=Ao(t,i[1].length).replace(/^([^\.]+)$/,"$1."+i0(i[1])).replace(/\.$/,"."+i0(i[1])).replace(/\.(\d*)$/,function(_,g){return"."+g+o3("0",i0(i[1]).length-g.length)}),e.indexOf("0.")!==-1?a:a.replace(/^0\./,".");if(e=e.replace(/^#+([0.])/,"$1"),i=e.match(/^(0*)\.(#*)$/))return u+Ao(l,i[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,i[1].length?"0.":".");if(i=e.match(/^#{1,3},##0(\.?)$/))return u+Ae(F9(l,0));if(i=e.match(/^#,##0\.([#0]*0)$/))return t<0?"-"+j0(n,e,-t):Ae(""+(Math.floor(t)+Kp(t,i[1].length)))+"."+v4(To(t,i[1].length),i[1].length);if(i=e.match(/^#,#*,#0/))return j0(n,e.replace(/^#,#*,/,""),t);if(i=e.match(/^([0#]+)(\\?-([0#]+))+$/))return a=_5(j0(n,e.replace(/[\\-]/g,""),t)),o=0,_5(_5(e.replace(/\\/g,"")).replace(/[0#]/g,function(_){return o<a.length?a.charAt(o++):_==="0"?"0":""}));if(e.match(Yc))return a=j0(n,"##########",t),"("+a.substr(0,3)+") "+a.substr(3,3)+"-"+a.substr(6);var f="";if(i=e.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(i[4].length,7),s=d7(l,Math.pow(10,o)-1,!1),a=""+u,f=Q4("n",i[1],s[1]),f.charAt(f.length-1)==" "&&(f=f.substr(0,f.length-1)+"0"),a+=f+i[2]+"/"+i[3],f=u7(s[2],o),f.length<i[4].length&&(f=i0(i[4].substr(i[4].length-f.length))+f),a+=f,a;if(i=e.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(Math.max(i[1].length,i[4].length),7),s=d7(l,Math.pow(10,o)-1,!0),u+(s[0]||(s[1]?"":"0"))+" "+(s[1]?ha(s[1],o)+i[2]+"/"+i[3]+u7(s[2],o):o3(" ",2*o+1+i[2].length+i[3].length));if(i=e.match(/^[#0?]+$/))return a=F9(t,0),e.length<=a.length?a:i0(e.substr(0,e.length-a.length))+a;if(i=e.match(/^([#0?]+)\.([#0]+)$/)){a=""+t.toFixed(Math.min(i[2].length,10)).replace(/([^0])0+$/,"$1"),o=a.indexOf(".");var d=e.indexOf(".")-o,h=e.length-a.length-d;return i0(e.substr(0,d)+a+e.substr(e.length-h))}if(i=e.match(/^00,000\.([#0]*0)$/))return o=To(t,i[1].length),t<0?"-"+j0(n,e,-t):Ae(em(t)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(_){return"00,"+(_.length<3?v4(0,3-_.length):"")+_})+"."+v4(o,i[1].length);switch(e){case"###,##0.00":return j0(n,"#,##0.00",t);case"###,###":case"##,###":case"#,###":var m=Ae(F9(l,0));return m!=="0"?u+m:"";case"###,###.00":return j0(n,"###,##0.00",t).replace(/^0\./,".");case"#,###.00":return j0(n,"#,##0.00",t).replace(/^0\./,".")}throw new Error("unsupported format |"+e+"|")}function tm(n,e,t){for(var r=e.length-1;e.charCodeAt(r-1)===44;)--r;return Q4(n,e.substr(0,r),t/Math.pow(10,3*(e.length-r)))}function nm(n,e,t){var r=e.replace(Gc,""),a=e.length-r.length;return Q4(n,r,t*Math.pow(10,2*a))+o3("%",a)}function Xc(n,e){var t,r=n.indexOf("E")-n.indexOf(".")-1;if(n.match(/^#+0.0E\+0$/)){if(e==0)return"0.0E+0";if(e<0)return"-"+Xc(n,-e);var a=n.indexOf(".");a===-1&&(a=n.indexOf("E"));var i=Math.floor(Math.log(e)*Math.LOG10E)%a;if(i<0&&(i+=a),t=(e/Math.pow(10,i)).toPrecision(r+1+(a+i)%a),!t.match(/[Ee]/)){var o=Math.floor(Math.log(e)*Math.LOG10E);t.indexOf(".")===-1?t=t.charAt(0)+"."+t.substr(1)+"E+"+(o-t.length+i):t+="E+"+(o-i),t=t.replace(/\+-/,"-")}t=t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(s,l,u,f){return l+u+f.substr(0,(a+i)%a)+"."+f.substr(i)+"E"})}else t=e.toExponential(r);return n.match(/E\+00$/)&&t.match(/e[+-]\d$/)&&(t=t.substr(0,t.length-1)+"0"+t.charAt(t.length-1)),n.match(/E\-/)&&t.match(/e\+/)&&(t=t.replace(/e\+/,"e")),t.replace("e","E")}function S4(n,e,t){if(n.charCodeAt(0)===40&&!e.match($c)){var r=e.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return t>=0?S4("n",r,t):"("+S4("n",r,-t)+")"}if(e.charCodeAt(e.length-1)===44)return tm(n,e,t);if(e.indexOf("%")!==-1)return nm(n,e,t);if(e.indexOf("E")!==-1)return Xc(e,t);if(e.charCodeAt(0)===36)return"$"+S4(n,e.substr(e.charAt(1)==" "?2:1),t);var a,i,o,s,l=Math.abs(t),u=t<0?"-":"";if(e.match(/^00+$/))return u+v4(l,e.length);if(e.match(/^[#?]+$/))return a=""+t,t===0&&(a=""),a.length>e.length?a:i0(e.substr(0,e.length-a.length))+a;if(i=e.match(jc))return Qp(i,l,u);if(e.match(/^#+0+$/))return u+v4(l,e.length-e.indexOf("0"));if(i=e.match(Hc))return a=(""+t).replace(/^([^\.]+)$/,"$1."+i0(i[1])).replace(/\.$/,"."+i0(i[1])),a=a.replace(/\.(\d*)$/,function(_,g){return"."+g+o3("0",i0(i[1]).length-g.length)}),e.indexOf("0.")!==-1?a:a.replace(/^0\./,".");if(e=e.replace(/^#+([0.])/,"$1"),i=e.match(/^(0*)\.(#*)$/))return u+(""+l).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,i[1].length?"0.":".");if(i=e.match(/^#{1,3},##0(\.?)$/))return u+Ae(""+l);if(i=e.match(/^#,##0\.([#0]*0)$/))return t<0?"-"+S4(n,e,-t):Ae(""+t)+"."+o3("0",i[1].length);if(i=e.match(/^#,#*,#0/))return S4(n,e.replace(/^#,#*,/,""),t);if(i=e.match(/^([0#]+)(\\?-([0#]+))+$/))return a=_5(S4(n,e.replace(/[\\-]/g,""),t)),o=0,_5(_5(e.replace(/\\/g,"")).replace(/[0#]/g,function(_){return o<a.length?a.charAt(o++):_==="0"?"0":""}));if(e.match(Yc))return a=S4(n,"##########",t),"("+a.substr(0,3)+") "+a.substr(3,3)+"-"+a.substr(6);var f="";if(i=e.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(i[4].length,7),s=d7(l,Math.pow(10,o)-1,!1),a=""+u,f=Q4("n",i[1],s[1]),f.charAt(f.length-1)==" "&&(f=f.substr(0,f.length-1)+"0"),a+=f+i[2]+"/"+i[3],f=u7(s[2],o),f.length<i[4].length&&(f=i0(i[4].substr(i[4].length-f.length))+f),a+=f,a;if(i=e.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(Math.max(i[1].length,i[4].length),7),s=d7(l,Math.pow(10,o)-1,!0),u+(s[0]||(s[1]?"":"0"))+" "+(s[1]?ha(s[1],o)+i[2]+"/"+i[3]+u7(s[2],o):o3(" ",2*o+1+i[2].length+i[3].length));if(i=e.match(/^[#0?]+$/))return a=""+t,e.length<=a.length?a:i0(e.substr(0,e.length-a.length))+a;if(i=e.match(/^([#0]+)\.([#0]+)$/)){a=""+t.toFixed(Math.min(i[2].length,10)).replace(/([^0])0+$/,"$1"),o=a.indexOf(".");var d=e.indexOf(".")-o,h=e.length-a.length-d;return i0(e.substr(0,d)+a+e.substr(e.length-h))}if(i=e.match(/^00,000\.([#0]*0)$/))return t<0?"-"+S4(n,e,-t):Ae(""+t).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(_){return"00,"+(_.length<3?v4(0,3-_.length):"")+_})+"."+v4(0,i[1].length);switch(e){case"###,###":case"##,###":case"#,###":var m=Ae(""+l);return m!=="0"?u+m:"";default:if(e.match(/\.[0#?]*$/))return S4(n,e.slice(0,e.lastIndexOf(".")),t)+i0(e.slice(e.lastIndexOf(".")))}throw new Error("unsupported format |"+e+"|")}function Q4(n,e,t){return(t|0)===t?S4(n,e,t):j0(n,e,t)}function rm(n){for(var e=[],t=!1,r=0,a=0;r<n.length;++r)switch(n.charCodeAt(r)){case 34:t=!t;break;case 95:case 42:case 92:++r;break;case 59:e[e.length]=n.substr(a,r-a),a=r+1}if(e[e.length]=n.substr(a),t===!0)throw new Error("Format |"+n+"| unterminated string ");return e}var Jc=/\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;function U5(n){for(var e=0,t="",r="";e<n.length;)switch(t=n.charAt(e)){case"G":f7(n,e)&&(e+=6),e++;break;case'"':for(;n.charCodeAt(++e)!==34&&e<n.length;);++e;break;case"\\":e+=2;break;case"_":e+=2;break;case"@":++e;break;case"B":case"b":if(n.charAt(e+1)==="1"||n.charAt(e+1)==="2")return!0;case"M":case"D":case"Y":case"H":case"S":case"E":case"m":case"d":case"y":case"h":case"s":case"e":case"g":return!0;case"A":case"a":case"上":if(n.substr(e,3).toUpperCase()==="A/P"||n.substr(e,5).toUpperCase()==="AM/PM"||n.substr(e,5).toUpperCase()==="上午/下午")return!0;++e;break;case"[":for(r=t;n.charAt(e++)!=="]"&&e<n.length;)r+=n.charAt(e);if(r.match(Jc))return!0;break;case".":case"0":case"#":for(;e<n.length&&("0#?.,E+-%".indexOf(t=n.charAt(++e))>-1||t=="\\"&&n.charAt(e+1)=="-"&&"0#".indexOf(n.charAt(e+2))>-1););break;case"?":for(;n.charAt(++e)===t;);break;case"*":++e,(n.charAt(e)==" "||n.charAt(e)=="*")&&++e;break;case"(":case")":++e;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;e<n.length&&"0123456789".indexOf(n.charAt(++e))>-1;);break;case" ":++e;break;default:++e;break}return!1}function am(n,e,t,r){for(var a=[],i="",o=0,s="",l="t",u,f,d,h="H";o<n.length;)switch(s=n.charAt(o)){case"G":if(!f7(n,o))throw new Error("unrecognized character "+s+" in "+n);a[a.length]={t:"G",v:"General"},o+=7;break;case'"':for(i="";(d=n.charCodeAt(++o))!==34&&o<n.length;)i+=String.fromCharCode(d);a[a.length]={t:"t",v:i},++o;break;case"\\":var m=n.charAt(++o),_=m==="("||m===")"?m:"t";a[a.length]={t:_,v:m},++o;break;case"_":a[a.length]={t:"t",v:" "},o+=2;break;case"@":a[a.length]={t:"T",v:e},++o;break;case"B":case"b":if(n.charAt(o+1)==="1"||n.charAt(o+1)==="2"){if(u==null&&(u=n9(e,t,n.charAt(o+1)==="2"),u==null))return"";a[a.length]={t:"X",v:n.substr(o,2)},l=s,o+=2;break}case"M":case"D":case"Y":case"H":case"S":case"E":s=s.toLowerCase();case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(e<0||u==null&&(u=n9(e,t),u==null))return"";for(i=s;++o<n.length&&n.charAt(o).toLowerCase()===s;)i+=s;s==="m"&&l.toLowerCase()==="h"&&(s="M"),s==="h"&&(s=h),a[a.length]={t:s,v:i},l=s;break;case"A":case"a":case"上":var g={t:s,v:s};if(u==null&&(u=n9(e,t)),n.substr(o,3).toUpperCase()==="A/P"?(u!=null&&(g.v=u.H>=12?"P":"A"),g.t="T",h="h",o+=3):n.substr(o,5).toUpperCase()==="AM/PM"?(u!=null&&(g.v=u.H>=12?"PM":"AM"),g.t="T",o+=5,h="h"):n.substr(o,5).toUpperCase()==="上午/下午"?(u!=null&&(g.v=u.H>=12?"下午":"上午"),g.t="T",o+=5,h="h"):(g.t="t",++o),u==null&&g.t==="T")return"";a[a.length]=g,l=s;break;case"[":for(i=s;n.charAt(o++)!=="]"&&o<n.length;)i+=n.charAt(o);if(i.slice(-1)!=="]")throw'unterminated "[" block: |'+i+"|";if(i.match(Jc)){if(u==null&&(u=n9(e,t),u==null))return"";a[a.length]={t:"Z",v:i.toLowerCase()},l=i.charAt(1)}else i.indexOf("$")>-1&&(i=(i.match(/\$([^-\[\]]*)/)||[])[1]||"$",U5(n)||(a[a.length]={t:"t",v:i}));break;case".":if(u!=null){for(i=s;++o<n.length&&(s=n.charAt(o))==="0";)i+=s;a[a.length]={t:"s",v:i};break}case"0":case"#":for(i=s;++o<n.length&&"0#?.,E+-%".indexOf(s=n.charAt(o))>-1;)i+=s;a[a.length]={t:"n",v:i};break;case"?":for(i=s;n.charAt(++o)===s;)i+=s;a[a.length]={t:s,v:i},l=s;break;case"*":++o,(n.charAt(o)==" "||n.charAt(o)=="*")&&++o;break;case"(":case")":a[a.length]={t:r===1?"t":s,v:s},++o;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(i=s;o<n.length&&"0123456789".indexOf(n.charAt(++o))>-1;)i+=n.charAt(o);a[a.length]={t:"D",v:i};break;case" ":a[a.length]={t:s,v:s},++o;break;case"$":a[a.length]={t:"t",v:"$"},++o;break;default:if(",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(s)===-1)throw new Error("unrecognized character "+s+" in "+n);a[a.length]={t:"t",v:s},++o;break}var v=0,y=0,S;for(o=a.length-1,l="t";o>=0;--o)switch(a[o].t){case"h":case"H":a[o].t=h,l="h",v<1&&(v=1);break;case"s":(S=a[o].v.match(/\.0+$/))&&(y=Math.max(y,S[0].length-1)),v<3&&(v=3);case"d":case"y":case"M":case"e":l=a[o].t;break;case"m":l==="s"&&(a[o].t="M",v<2&&(v=2));break;case"X":break;case"Z":v<1&&a[o].v.match(/[Hh]/)&&(v=1),v<2&&a[o].v.match(/[Mm]/)&&(v=2),v<3&&a[o].v.match(/[Ss]/)&&(v=3)}switch(v){case 0:break;case 1:u.u>=.5&&(u.u=0,++u.S),u.S>=60&&(u.S=0,++u.M),u.M>=60&&(u.M=0,++u.H);break;case 2:u.u>=.5&&(u.u=0,++u.S),u.S>=60&&(u.S=0,++u.M);break}var b="",w;for(o=0;o<a.length;++o)switch(a[o].t){case"t":case"T":case" ":case"D":break;case"X":a[o].v="",a[o].t=";";break;case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":a[o].v=Xp(a[o].t.charCodeAt(0),a[o].v,u,y),a[o].t="t";break;case"n":case"?":for(w=o+1;a[w]!=null&&((s=a[w].t)==="?"||s==="D"||(s===" "||s==="t")&&a[w+1]!=null&&(a[w+1].t==="?"||a[w+1].t==="t"&&a[w+1].v==="/")||a[o].t==="("&&(s===" "||s==="n"||s===")")||s==="t"&&(a[w].v==="/"||a[w].v===" "&&a[w+1]!=null&&a[w+1].t=="?"));)a[o].v+=a[w].v,a[w]={v:"",t:";"},++w;b+=a[o].v,o=w-1;break;case"G":a[o].t="t",a[o].v=v9(e,t);break}var T="",A,C;if(b.length>0){b.charCodeAt(0)==40?(A=e<0&&b.charCodeAt(0)===45?-e:e,C=Q4("n",b,A)):(A=e<0&&r>1?-e:e,C=Q4("n",b,A),A<0&&a[0]&&a[0].t=="t"&&(C=C.substr(1),a[0].v="-"+a[0].v)),w=C.length-1;var E=a.length;for(o=0;o<a.length;++o)if(a[o]!=null&&a[o].t!="t"&&a[o].v.indexOf(".")>-1){E=o;break}var M=a.length;if(E===a.length&&C.indexOf("E")===-1){for(o=a.length-1;o>=0;--o)a[o]==null||"n?".indexOf(a[o].t)===-1||(w>=a[o].v.length-1?(w-=a[o].v.length,a[o].v=C.substr(w+1,a[o].v.length)):w<0?a[o].v="":(a[o].v=C.substr(0,w+1),w=-1),a[o].t="t",M=o);w>=0&&M<a.length&&(a[M].v=C.substr(0,w+1)+a[M].v)}else if(E!==a.length&&C.indexOf("E")===-1){for(w=C.indexOf(".")-1,o=E;o>=0;--o)if(!(a[o]==null||"n?".indexOf(a[o].t)===-1)){for(f=a[o].v.indexOf(".")>-1&&o===E?a[o].v.indexOf(".")-1:a[o].v.length-1,T=a[o].v.substr(f+1);f>=0;--f)w>=0&&(a[o].v.charAt(f)==="0"||a[o].v.charAt(f)==="#")&&(T=C.charAt(w--)+T);a[o].v=T,a[o].t="t",M=o}for(w>=0&&M<a.length&&(a[M].v=C.substr(0,w+1)+a[M].v),w=C.indexOf(".")+1,o=E;o<a.length;++o)if(!(a[o]==null||"n?(".indexOf(a[o].t)===-1&&o!==E)){for(f=a[o].v.indexOf(".")>-1&&o===E?a[o].v.indexOf(".")+1:0,T=a[o].v.substr(0,f);f<a[o].v.length;++f)w<C.length&&(T+=C.charAt(w++));a[o].v=T,a[o].t="t",M=o}}}for(o=0;o<a.length;++o)a[o]!=null&&"n?".indexOf(a[o].t)>-1&&(A=r>1&&e<0&&o>0&&a[o-1].v==="-"?-e:e,a[o].v=Q4(a[o].t,a[o].v,A),a[o].t="t");var N="";for(o=0;o!==a.length;++o)a[o]!=null&&(N+=a[o].v);return N}var Eo=/\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;function Co(n,e){if(e==null)return!1;var t=parseFloat(e[2]);switch(e[1]){case"=":if(n==t)return!0;break;case">":if(n>t)return!0;break;case"<":if(n<t)return!0;break;case"<>":if(n!=t)return!0;break;case">=":if(n>=t)return!0;break;case"<=":if(n<=t)return!0;break}return!1}function im(n,e){var t=rm(n),r=t.length,a=t[r-1].indexOf("@");if(r<4&&a>-1&&--r,t.length>4)throw new Error("cannot find right format for |"+t.join("|")+"|");if(typeof e!="number")return[4,t.length===4||a>-1?t[t.length-1]:"@"];switch(t.length){case 1:t=a>-1?["General","General","General",t[0]]:[t[0],t[0],t[0],"@"];break;case 2:t=a>-1?[t[0],t[0],t[0],t[1]]:[t[0],t[1],t[0],"@"];break;case 3:t=a>-1?[t[0],t[1],t[0],t[2]]:[t[0],t[1],t[2],"@"];break}var i=e>0?t[0]:e<0?t[1]:t[2];if(t[0].indexOf("[")===-1&&t[1].indexOf("[")===-1)return[r,i];if(t[0].match(/\[[=<>]/)!=null||t[1].match(/\[[=<>]/)!=null){var o=t[0].match(Eo),s=t[1].match(Eo);return Co(e,o)?[r,t[0]]:Co(e,s)?[r,t[1]]:[r,t[o!=null&&s!=null?2:1]]}return[r,i]}function e4(n,e,t){t==null&&(t={});var r="";switch(typeof n){case"string":n=="m/d/yy"&&t.dateNF?r=t.dateNF:r=n;break;case"number":n==14&&t.dateNF?r=t.dateNF:r=(t.table!=null?t.table:b2)[n],r==null&&(r=t.table&&t.table[wo[n]]||b2[wo[n]]),r==null&&(r=Vp[n]||"General");break}if(f7(r,0))return v9(e,t);e instanceof Date&&(e=Vc(e,t.date1904));var a=im(r,e);if(f7(a[1]))return v9(e,t);if(e===!0)e="TRUE";else if(e===!1)e="FALSE";else if(e===""||e==null)return"";return am(a[1],e,t,a[0])}function s9(n,e){if(typeof e!="number"){e=+e||-1;for(var t=0;t<392;++t){if(b2[t]==null){e<0&&(e=t);continue}if(b2[t]==n){e=t;break}}e<0&&(e=391)}return b2[e]=n,e}function Zc(){b2=Bp()}var om={5:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',23:"General",24:"General",25:"General",26:"General",27:"m/d/yy",28:"m/d/yy",29:"m/d/yy",30:"m/d/yy",31:"m/d/yy",32:"h:mm:ss",33:"h:mm:ss",34:"h:mm:ss",35:"h:mm:ss",36:"m/d/yy",41:'_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',50:"m/d/yy",51:"m/d/yy",52:"m/d/yy",53:"m/d/yy",54:"m/d/yy",55:"m/d/yy",56:"m/d/yy",57:"m/d/yy",58:"m/d/yy",59:"0",60:"0.00",61:"#,##0",62:"#,##0.00",63:'"$"#,##0_);\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',67:"0%",68:"0.00%",69:"# ?/?",70:"# ??/??",71:"m/d/yy",72:"m/d/yy",73:"d-mmm-yy",74:"d-mmm",75:"mmm-yy",76:"h:mm",77:"h:mm:ss",78:"m/d/yy h:mm",79:"mm:ss",80:"[h]:mm:ss",81:"mmss.0"},qc=/[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;function sm(n){var e=typeof n=="number"?b2[n]:n;return e=e.replace(qc,"(\\d+)"),new RegExp("^"+e+"$")}function lm(n,e,t){var r=-1,a=-1,i=-1,o=-1,s=-1,l=-1;(e.match(qc)||[]).forEach(function(d,h){var m=parseInt(t[h+1],10);switch(d.toLowerCase().charAt(0)){case"y":r=m;break;case"d":i=m;break;case"h":o=m;break;case"s":l=m;break;case"m":o>=0?s=m:a=m;break}}),l>=0&&s==-1&&a>=0&&(s=a,a=-1);var u=(""+(r>=0?r:new Date().getFullYear())).slice(-4)+"-"+("00"+(a>=1?a:1)).slice(-2)+"-"+("00"+(i>=1?i:1)).slice(-2);u.length==7&&(u="0"+u),u.length==8&&(u="20"+u);var f=("00"+(o>=0?o:0)).slice(-2)+":"+("00"+(s>=0?s:0)).slice(-2)+":"+("00"+(l>=0?l:0)).slice(-2);return o==-1&&s==-1&&l==-1?u:r==-1&&a==-1&&i==-1?f:u+"T"+f}var cm=function(){var n={};n.version="1.2.0";function e(){for(var C=0,E=new Array(256),M=0;M!=256;++M)C=M,C=C&1?-306674912^C>>>1:C>>>1,C=C&1?-306674912^C>>>1:C>>>1,C=C&1?-306674912^C>>>1:C>>>1,C=C&1?-306674912^C>>>1:C>>>1,C=C&1?-306674912^C>>>1:C>>>1,C=C&1?-306674912^C>>>1:C>>>1,C=C&1?-306674912^C>>>1:C>>>1,C=C&1?-306674912^C>>>1:C>>>1,E[M]=C;return typeof Int32Array!="undefined"?new Int32Array(E):E}var t=e();function r(C){var E=0,M=0,N=0,P=typeof Int32Array!="undefined"?new Int32Array(4096):new Array(4096);for(N=0;N!=256;++N)P[N]=C[N];for(N=0;N!=256;++N)for(M=C[N],E=256+N;E<4096;E+=256)M=P[E]=M>>>8^C[M&255];var U=[];for(N=1;N!=16;++N)U[N-1]=typeof Int32Array!="undefined"?P.subarray(N*256,N*256+256):P.slice(N*256,N*256+256);return U}var a=r(t),i=a[0],o=a[1],s=a[2],l=a[3],u=a[4],f=a[5],d=a[6],h=a[7],m=a[8],_=a[9],g=a[10],v=a[11],y=a[12],S=a[13],b=a[14];function w(C,E){for(var M=E^-1,N=0,P=C.length;N<P;)M=M>>>8^t[(M^C.charCodeAt(N++))&255];return~M}function T(C,E){for(var M=E^-1,N=C.length-15,P=0;P<N;)M=b[C[P++]^M&255]^S[C[P++]^M>>8&255]^y[C[P++]^M>>16&255]^v[C[P++]^M>>>24]^g[C[P++]]^_[C[P++]]^m[C[P++]]^h[C[P++]]^d[C[P++]]^f[C[P++]]^u[C[P++]]^l[C[P++]]^s[C[P++]]^o[C[P++]]^i[C[P++]]^t[C[P++]];for(N+=15;P<N;)M=M>>>8^t[(M^C[P++])&255];return~M}function A(C,E){for(var M=E^-1,N=0,P=C.length,U=0,Z=0;N<P;)U=C.charCodeAt(N++),U<128?M=M>>>8^t[(M^U)&255]:U<2048?(M=M>>>8^t[(M^(192|U>>6&31))&255],M=M>>>8^t[(M^(128|U&63))&255]):U>=55296&&U<57344?(U=(U&1023)+64,Z=C.charCodeAt(N++)&1023,M=M>>>8^t[(M^(240|U>>8&7))&255],M=M>>>8^t[(M^(128|U>>2&63))&255],M=M>>>8^t[(M^(128|Z>>6&15|(U&3)<<4))&255],M=M>>>8^t[(M^(128|Z&63))&255]):(M=M>>>8^t[(M^(224|U>>12&15))&255],M=M>>>8^t[(M^(128|U>>6&63))&255],M=M>>>8^t[(M^(128|U&63))&255]);return~M}return n.table=t,n.bstr=w,n.buf=T,n.str=A,n}(),k2=function(){var e={};e.version="1.2.1";function t(k,F){for(var R=k.split("/"),L=F.split("/"),J=0,K=0,g1=Math.min(R.length,L.length);J<g1;++J){if(K=R[J].length-L[J].length)return K;if(R[J]!=L[J])return R[J]<L[J]?-1:1}return R.length-L.length}function r(k){if(k.charAt(k.length-1)=="/")return k.slice(0,-1).indexOf("/")===-1?k:r(k.slice(0,-1));var F=k.lastIndexOf("/");return F===-1?k:k.slice(0,F+1)}function a(k){if(k.charAt(k.length-1)=="/")return a(k.slice(0,-1));var F=k.lastIndexOf("/");return F===-1?k:k.slice(F+1)}function i(k,F){typeof F=="string"&&(F=new Date(F));var R=F.getHours();R=R<<6|F.getMinutes(),R=R<<5|F.getSeconds()>>>1,k.write_shift(2,R);var L=F.getFullYear()-1980;L=L<<4|F.getMonth()+1,L=L<<5|F.getDate(),k.write_shift(2,L)}function o(k){var F=k.read_shift(2)&65535,R=k.read_shift(2)&65535,L=new Date,J=R&31;R>>>=5;var K=R&15;R>>>=4,L.setMilliseconds(0),L.setFullYear(R+1980),L.setMonth(K-1),L.setDate(J);var g1=F&31;F>>>=5;var S1=F&63;return F>>>=6,L.setHours(F),L.setMinutes(S1),L.setSeconds(g1<<1),L}function s(k){U3(k,0);for(var F={},R=0;k.l<=k.length-4;){var L=k.read_shift(2),J=k.read_shift(2),K=k.l+J,g1={};switch(L){case 21589:R=k.read_shift(1),R&1&&(g1.mtime=k.read_shift(4)),J>5&&(R&2&&(g1.atime=k.read_shift(4)),R&4&&(g1.ctime=k.read_shift(4))),g1.mtime&&(g1.mt=new Date(g1.mtime*1e3));break}k.l=K,F[L]=g1}return F}var l;function u(){return l||(l={})}function f(k,F){if(k[0]==80&&k[1]==75)return D1(k,F);if((k[0]|32)==109&&(k[1]|32)==105)return rt(k,F);if(k.length<512)throw new Error("CFB file size "+k.length+" < 512");var R=3,L=512,J=0,K=0,g1=0,S1=0,_1=0,x1=[],b1=k.slice(0,512);U3(b1,0);var M1=d(b1);switch(R=M1[0],R){case 3:L=512;break;case 4:L=4096;break;case 0:if(M1[1]==0)return D1(k,F);default:throw new Error("Major Version: Expected 3 or 4 saw "+R)}L!==512&&(b1=k.slice(0,L),U3(b1,28));var G1=k.slice(0,L);h(b1,R);var K1=b1.read_shift(4,"i");if(R===3&&K1!==0)throw new Error("# Directory Sectors: Expected 0 saw "+K1);b1.l+=4,g1=b1.read_shift(4,"i"),b1.l+=4,b1.chk("00100000","Mini Stream Cutoff Size: "),S1=b1.read_shift(4,"i"),J=b1.read_shift(4,"i"),_1=b1.read_shift(4,"i"),K=b1.read_shift(4,"i");for(var P1=-1,X1=0;X1<109&&(P1=b1.read_shift(4,"i"),!(P1<0));++X1)x1[X1]=P1;var e2=m(k,L);v(_1,K,e2,L,x1);var U2=S(e2,g1,x1,L);U2[g1].name="!Directory",J>0&&S1!==Z&&(U2[S1].name="!MiniFAT"),U2[x1[0]].name="!FAT",U2.fat_addrs=x1,U2.ssz=L;var x2={},B2=[],p0=[],i4=[];b(g1,U2,e2,B2,J,x2,p0,S1),_(p0,i4,B2),B2.shift();var N4={FileIndex:p0,FullPaths:i4};return F&&F.raw&&(N4.raw={header:G1,sectors:e2}),N4}function d(k){if(k[k.l]==80&&k[k.l+1]==75)return[0,0];k.chk(G,"Header Signature: "),k.l+=16;var F=k.read_shift(2,"u");return[k.read_shift(2,"u"),F]}function h(k,F){var R=9;switch(k.l+=2,R=k.read_shift(2)){case 9:if(F!=3)throw new Error("Sector Shift: Expected 9 saw "+R);break;case 12:if(F!=4)throw new Error("Sector Shift: Expected 12 saw "+R);break;default:throw new Error("Sector Shift: Expected 9 or 12 saw "+R)}k.chk("0600","Mini Sector Shift: "),k.chk("000000000000","Reserved: ")}function m(k,F){for(var R=Math.ceil(k.length/F)-1,L=[],J=1;J<R;++J)L[J-1]=k.slice(J*F,(J+1)*F);return L[R-1]=k.slice(R*F),L}function _(k,F,R){for(var L=0,J=0,K=0,g1=0,S1=0,_1=R.length,x1=[],b1=[];L<_1;++L)x1[L]=b1[L]=L,F[L]=R[L];for(;S1<b1.length;++S1)L=b1[S1],J=k[L].L,K=k[L].R,g1=k[L].C,x1[L]===L&&(J!==-1&&x1[J]!==J&&(x1[L]=x1[J]),K!==-1&&x1[K]!==K&&(x1[L]=x1[K])),g1!==-1&&(x1[g1]=L),J!==-1&&L!=x1[L]&&(x1[J]=x1[L],b1.lastIndexOf(J)<S1&&b1.push(J)),K!==-1&&L!=x1[L]&&(x1[K]=x1[L],b1.lastIndexOf(K)<S1&&b1.push(K));for(L=1;L<_1;++L)x1[L]===L&&(K!==-1&&x1[K]!==K?x1[L]=x1[K]:J!==-1&&x1[J]!==J&&(x1[L]=x1[J]));for(L=1;L<_1;++L)if(k[L].type!==0){if(S1=L,S1!=x1[S1])do S1=x1[S1],F[L]=F[S1]+"/"+F[L];while(S1!==0&&x1[S1]!==-1&&S1!=x1[S1]);x1[L]=-1}for(F[0]+="/",L=1;L<_1;++L)k[L].type!==2&&(F[L]+="/")}function g(k,F,R){for(var L=k.start,J=k.size,K=[],g1=L;R&&J>0&&g1>=0;)K.push(F.slice(g1*U,g1*U+U)),J-=U,g1=e9(R,g1*4);return K.length===0?E3(0):be(K).slice(0,k.size)}function v(k,F,R,L,J){var K=Z;if(k===Z){if(F!==0)throw new Error("DIFAT chain shorter than expected")}else if(k!==-1){var g1=R[k],S1=(L>>>2)-1;if(!g1)return;for(var _1=0;_1<S1&&(K=e9(g1,_1*4))!==Z;++_1)J.push(K);v(e9(g1,L-4),F-1,R,L,J)}}function y(k,F,R,L,J){var K=[],g1=[];J||(J=[]);var S1=L-1,_1=0,x1=0;for(_1=F;_1>=0;){J[_1]=!0,K[K.length]=_1,g1.push(k[_1]);var b1=R[Math.floor(_1*4/L)];if(x1=_1*4&S1,L<4+x1)throw new Error("FAT boundary crossed: "+_1+" 4 "+L);if(!k[b1])break;_1=e9(k[b1],x1)}return{nodes:K,data:No([g1])}}function S(k,F,R,L){var J=k.length,K=[],g1=[],S1=[],_1=[],x1=L-1,b1=0,M1=0,G1=0,K1=0;for(b1=0;b1<J;++b1)if(S1=[],G1=b1+F,G1>=J&&(G1-=J),!g1[G1]){_1=[];var P1=[];for(M1=G1;M1>=0;){P1[M1]=!0,g1[M1]=!0,S1[S1.length]=M1,_1.push(k[M1]);var X1=R[Math.floor(M1*4/L)];if(K1=M1*4&x1,L<4+K1)throw new Error("FAT boundary crossed: "+M1+" 4 "+L);if(!k[X1]||(M1=e9(k[X1],K1),P1[M1]))break}K[G1]={nodes:S1,data:No([_1])}}return K}function b(k,F,R,L,J,K,g1,S1){for(var _1=0,x1=L.length?2:0,b1=F[k].data,M1=0,G1=0,K1;M1<b1.length;M1+=128){var P1=b1.slice(M1,M1+128);U3(P1,64),G1=P1.read_shift(2),K1=xa(P1,0,G1-x1),L.push(K1);var X1={name:K1,type:P1.read_shift(1),color:P1.read_shift(1),L:P1.read_shift(4,"i"),R:P1.read_shift(4,"i"),C:P1.read_shift(4,"i"),clsid:P1.read_shift(16),state:P1.read_shift(4,"i"),start:0,size:0},e2=P1.read_shift(2)+P1.read_shift(2)+P1.read_shift(2)+P1.read_shift(2);e2!==0&&(X1.ct=w(P1,P1.l-8));var U2=P1.read_shift(2)+P1.read_shift(2)+P1.read_shift(2)+P1.read_shift(2);U2!==0&&(X1.mt=w(P1,P1.l-8)),X1.start=P1.read_shift(4,"i"),X1.size=P1.read_shift(4,"i"),X1.size<0&&X1.start<0&&(X1.size=X1.type=0,X1.start=Z,X1.name=""),X1.type===5?(_1=X1.start,J>0&&_1!==Z&&(F[_1].name="!StreamData")):X1.size>=4096?(X1.storage="fat",F[X1.start]===void 0&&(F[X1.start]=y(R,X1.start,F.fat_addrs,F.ssz)),F[X1.start].name=X1.name,X1.content=F[X1.start].data.slice(0,X1.size)):(X1.storage="minifat",X1.size<0?X1.size=0:_1!==Z&&X1.start!==Z&&F[_1]&&(X1.content=g(X1,F[_1].data,(F[S1]||{}).data))),X1.content&&U3(X1.content,0),K[K1]=X1,g1.push(X1)}}function w(k,F){return new Date((I0(k,F+4)/1e7*Math.pow(2,32)+I0(k,F)/1e7-11644473600)*1e3)}function T(k,F){return u(),f(l.readFileSync(k),F)}function A(k,F){var R=F&&F.type;switch(R||C2&&Buffer.isBuffer(k)&&(R="buffer"),R||"base64"){case"file":return T(k,F);case"base64":return f(p4(z0(k)),F);case"binary":return f(p4(k),F)}return f(k,F)}function C(k,F){var R=F||{},L=R.root||"Root Entry";if(k.FullPaths||(k.FullPaths=[]),k.FileIndex||(k.FileIndex=[]),k.FullPaths.length!==k.FileIndex.length)throw new Error("inconsistent CFB structure");k.FullPaths.length===0&&(k.FullPaths[0]=L+"/",k.FileIndex[0]={name:L,type:5}),R.CLSID&&(k.FileIndex[0].clsid=R.CLSID),E(k)}function E(k){var F="Sh33tJ5";if(!k2.find(k,"/"+F)){var R=E3(4);R[0]=55,R[1]=R[3]=50,R[2]=54,k.FileIndex.push({name:F,type:2,content:R,size:4,L:69,R:69,C:69}),k.FullPaths.push(k.FullPaths[0]+F),M(k)}}function M(k,F){C(k);for(var R=!1,L=!1,J=k.FullPaths.length-1;J>=0;--J){var K=k.FileIndex[J];switch(K.type){case 0:L?R=!0:(k.FileIndex.pop(),k.FullPaths.pop());break;case 1:case 2:case 5:L=!0,isNaN(K.R*K.L*K.C)&&(R=!0),K.R>-1&&K.L>-1&&K.R==K.L&&(R=!0);break;default:R=!0;break}}if(!(!R&&!F)){var g1=new Date(1987,1,19),S1=0,_1=Object.create?Object.create(null):{},x1=[];for(J=0;J<k.FullPaths.length;++J)_1[k.FullPaths[J]]=!0,k.FileIndex[J].type!==0&&x1.push([k.FullPaths[J],k.FileIndex[J]]);for(J=0;J<x1.length;++J){var b1=r(x1[J][0]);L=_1[b1],L||(x1.push([b1,{name:a(b1).replace("/",""),type:1,clsid:q,ct:g1,mt:g1,content:null}]),_1[b1]=!0)}for(x1.sort(function(K1,P1){return t(K1[0],P1[0])}),k.FullPaths=[],k.FileIndex=[],J=0;J<x1.length;++J)k.FullPaths[J]=x1[J][0],k.FileIndex[J]=x1[J][1];for(J=0;J<x1.length;++J){var M1=k.FileIndex[J],G1=k.FullPaths[J];if(M1.name=a(G1).replace("/",""),M1.L=M1.R=M1.C=-(M1.color=1),M1.size=M1.content?M1.content.length:0,M1.start=0,M1.clsid=M1.clsid||q,J===0)M1.C=x1.length>1?1:-1,M1.size=0,M1.type=5;else if(G1.slice(-1)=="/"){for(S1=J+1;S1<x1.length&&r(k.FullPaths[S1])!=G1;++S1);for(M1.C=S1>=x1.length?-1:S1,S1=J+1;S1<x1.length&&r(k.FullPaths[S1])!=r(G1);++S1);M1.R=S1>=x1.length?-1:S1,M1.type=1}else r(k.FullPaths[J+1]||"")==r(G1)&&(M1.R=J+1),M1.type=2}}}function N(k,F){var R=F||{};if(R.fileType=="mad")return L9(k,R);switch(M(k),R.fileType){case"zip":return g2(k,R)}var L=function(K1){for(var P1=0,X1=0,e2=0;e2<K1.FileIndex.length;++e2){var U2=K1.FileIndex[e2];if(U2.content){var x2=U2.content.length;x2>0&&(x2<4096?P1+=x2+63>>6:X1+=x2+511>>9)}}for(var B2=K1.FullPaths.length+3>>2,p0=P1+7>>3,i4=P1+127>>7,N4=p0+X1+B2+i4,t3=N4+127>>7,o4=t3<=109?0:Math.ceil((t3-109)/127);N4+t3+o4+127>>7>t3;)o4=++t3<=109?0:Math.ceil((t3-109)/127);var T0=[1,o4,t3,i4,B2,X1,P1,0];return K1.FileIndex[0].size=P1<<6,T0[7]=(K1.FileIndex[0].start=T0[0]+T0[1]+T0[2]+T0[3]+T0[4]+T0[5])+(T0[6]+7>>3),T0}(k),J=E3(L[7]<<9),K=0,g1=0;{for(K=0;K<8;++K)J.write_shift(1,W[K]);for(K=0;K<8;++K)J.write_shift(2,0);for(J.write_shift(2,62),J.write_shift(2,3),J.write_shift(2,65534),J.write_shift(2,9),J.write_shift(2,6),K=0;K<3;++K)J.write_shift(2,0);for(J.write_shift(4,0),J.write_shift(4,L[2]),J.write_shift(4,L[0]+L[1]+L[2]+L[3]-1),J.write_shift(4,0),J.write_shift(4,4096),J.write_shift(4,L[3]?L[0]+L[1]+L[2]-1:Z),J.write_shift(4,L[3]),J.write_shift(-4,L[1]?L[0]-1:Z),J.write_shift(4,L[1]),K=0;K<109;++K)J.write_shift(-4,K<L[2]?L[1]+K:-1)}if(L[1])for(g1=0;g1<L[1];++g1){for(;K<236+g1*127;++K)J.write_shift(-4,K<L[2]?L[1]+K:-1);J.write_shift(-4,g1===L[1]-1?Z:g1+1)}var S1=function(K1){for(g1+=K1;K<g1-1;++K)J.write_shift(-4,K+1);K1&&(++K,J.write_shift(-4,Z))};for(g1=K=0,g1+=L[1];K<g1;++K)J.write_shift(-4,r1.DIFSECT);for(g1+=L[2];K<g1;++K)J.write_shift(-4,r1.FATSECT);S1(L[3]),S1(L[4]);for(var _1=0,x1=0,b1=k.FileIndex[0];_1<k.FileIndex.length;++_1)b1=k.FileIndex[_1],b1.content&&(x1=b1.content.length,!(x1<4096)&&(b1.start=g1,S1(x1+511>>9)));for(S1(L[6]+7>>3);J.l&511;)J.write_shift(-4,r1.ENDOFCHAIN);for(g1=K=0,_1=0;_1<k.FileIndex.length;++_1)b1=k.FileIndex[_1],b1.content&&(x1=b1.content.length,!(!x1||x1>=4096)&&(b1.start=g1,S1(x1+63>>6)));for(;J.l&511;)J.write_shift(-4,r1.ENDOFCHAIN);for(K=0;K<L[4]<<2;++K){var M1=k.FullPaths[K];if(!M1||M1.length===0){for(_1=0;_1<17;++_1)J.write_shift(4,0);for(_1=0;_1<3;++_1)J.write_shift(4,-1);for(_1=0;_1<12;++_1)J.write_shift(4,0);continue}b1=k.FileIndex[K],K===0&&(b1.start=b1.size?b1.start-1:Z);var G1=K===0&&R.root||b1.name;if(x1=2*(G1.length+1),J.write_shift(64,G1,"utf16le"),J.write_shift(2,x1),J.write_shift(1,b1.type),J.write_shift(1,b1.color),J.write_shift(-4,b1.L),J.write_shift(-4,b1.R),J.write_shift(-4,b1.C),b1.clsid)J.write_shift(16,b1.clsid,"hex");else for(_1=0;_1<4;++_1)J.write_shift(4,0);J.write_shift(4,b1.state||0),J.write_shift(4,0),J.write_shift(4,0),J.write_shift(4,0),J.write_shift(4,0),J.write_shift(4,b1.start),J.write_shift(4,b1.size),J.write_shift(4,0)}for(K=1;K<k.FileIndex.length;++K)if(b1=k.FileIndex[K],b1.size>=4096)if(J.l=b1.start+1<<9,C2&&Buffer.isBuffer(b1.content))b1.content.copy(J,J.l,0,b1.size),J.l+=b1.size+511&-512;else{for(_1=0;_1<b1.size;++_1)J.write_shift(1,b1.content[_1]);for(;_1&511;++_1)J.write_shift(1,0)}for(K=1;K<k.FileIndex.length;++K)if(b1=k.FileIndex[K],b1.size>0&&b1.size<4096)if(C2&&Buffer.isBuffer(b1.content))b1.content.copy(J,J.l,0,b1.size),J.l+=b1.size+63&-64;else{for(_1=0;_1<b1.size;++_1)J.write_shift(1,b1.content[_1]);for(;_1&63;++_1)J.write_shift(1,0)}if(C2)J.l=J.length;else for(;J.l<J.length;)J.write_shift(1,0);return J}function P(k,F){var R=k.FullPaths.map(function(_1){return _1.toUpperCase()}),L=R.map(function(_1){var x1=_1.split("/");return x1[x1.length-(_1.slice(-1)=="/"?2:1)]}),J=!1;F.charCodeAt(0)===47?(J=!0,F=R[0].slice(0,-1)+F):J=F.indexOf("/")!==-1;var K=F.toUpperCase(),g1=J===!0?R.indexOf(K):L.indexOf(K);if(g1!==-1)return k.FileIndex[g1];var S1=!K.match(n8);for(K=K.replace(c0,""),S1&&(K=K.replace(n8,"!")),g1=0;g1<R.length;++g1)if((S1?R[g1].replace(n8,"!"):R[g1]).replace(c0,"")==K||(S1?L[g1].replace(n8,"!"):L[g1]).replace(c0,"")==K)return k.FileIndex[g1];return null}var U=64,Z=-2,G="d0cf11e0a1b11ae1",W=[208,207,17,224,161,177,26,225],q="00000000000000000000000000000000",r1={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:Z,FREESECT:-1,HEADER_SIGNATURE:G,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:q,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]};function Y(k,F,R){u();var L=N(k,R);l.writeFileSync(F,L)}function O(k){for(var F=new Array(k.length),R=0;R<k.length;++R)F[R]=String.fromCharCode(k[R]);return F.join("")}function Q(k,F){var R=N(k,F);switch(F&&F.type||"buffer"){case"file":return u(),l.writeFileSync(F.filename,R),R;case"binary":return typeof R=="string"?R:O(R);case"base64":return xo(typeof R=="string"?R:O(R));case"buffer":if(C2)return Buffer.isBuffer(R)?R:T9(R);case"array":return typeof R=="string"?p4(R):R}return R}var l1;function I(k){try{var F=k.InflateRaw,R=new F;if(R._processChunk(new Uint8Array([3,0]),R._finishFlushFlag),R.bytesRead)l1=k;else throw new Error("zlib does not expose bytesRead")}catch(L){console.error("cannot use native zlib: "+(L.message||L))}}function n1(k,F){if(!l1)return n2(k,F);var R=l1.InflateRaw,L=new R,J=L._processChunk(k.slice(k.l),L._finishFlushFlag);return k.l+=L.bytesRead,J}function V(k){return l1?l1.deflateRawSync(k):d1(k)}var z=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],X=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],f1=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];function y1(k){var F=(k<<1|k<<11)&139536|(k<<5|k<<15)&558144;return(F>>16|F>>8|F)&255}for(var m1=typeof Uint8Array!="undefined",c1=m1?new Uint8Array(256):[],I1=0;I1<256;++I1)c1[I1]=y1(I1);function j(k,F){var R=c1[k&255];return F<=8?R>>>8-F:(R=R<<8|c1[k>>8&255],F<=16?R>>>16-F:(R=R<<8|c1[k>>16&255],R>>>24-F))}function C1(k,F){var R=F&7,L=F>>>3;return(k[L]|(R<=6?0:k[L+1]<<8))>>>R&3}function $1(k,F){var R=F&7,L=F>>>3;return(k[L]|(R<=5?0:k[L+1]<<8))>>>R&7}function J1(k,F){var R=F&7,L=F>>>3;return(k[L]|(R<=4?0:k[L+1]<<8))>>>R&15}function z1(k,F){var R=F&7,L=F>>>3;return(k[L]|(R<=3?0:k[L+1]<<8))>>>R&31}function E1(k,F){var R=F&7,L=F>>>3;return(k[L]|(R<=1?0:k[L+1]<<8))>>>R&127}function c2(k,F,R){var L=F&7,J=F>>>3,K=(1<<R)-1,g1=k[J]>>>L;return R<8-L||(g1|=k[J+1]<<8-L,R<16-L)||(g1|=k[J+2]<<16-L,R<24-L)||(g1|=k[J+3]<<24-L),g1&K}function t2(k,F,R){var L=F&7,J=F>>>3;return L<=5?k[J]|=(R&7)<<L:(k[J]|=R<<L&255,k[J+1]=(R&7)>>8-L),F+3}function f2(k,F,R){var L=F&7,J=F>>>3;return R=(R&1)<<L,k[J]|=R,F+1}function o2(k,F,R){var L=F&7,J=F>>>3;return R<<=L,k[J]|=R&255,R>>>=8,k[J+1]=R,F+8}function t1(k,F,R){var L=F&7,J=F>>>3;return R<<=L,k[J]|=R&255,R>>>=8,k[J+1]=R&255,k[J+2]=R>>>8,F+16}function B(k,F){var R=k.length,L=2*R>F?2*R:F+5,J=0;if(R>=F)return k;if(C2){var K=yo(L);if(k.copy)k.copy(K);else for(;J<k.length;++J)K[J]=k[J];return K}else if(m1){var g1=new Uint8Array(L);if(g1.set)g1.set(k);else for(;J<R;++J)g1[J]=k[J];return g1}return k.length=L,k}function w1(k){for(var F=new Array(k),R=0;R<k;++R)F[R]=0;return F}function O1(k,F,R){var L=1,J=0,K=0,g1=0,S1=0,_1=k.length,x1=m1?new Uint16Array(32):w1(32);for(K=0;K<32;++K)x1[K]=0;for(K=_1;K<R;++K)k[K]=0;_1=k.length;var b1=m1?new Uint16Array(_1):w1(_1);for(K=0;K<_1;++K)x1[J=k[K]]++,L<J&&(L=J),b1[K]=0;for(x1[0]=0,K=1;K<=L;++K)x1[K+16]=S1=S1+x1[K-1]<<1;for(K=0;K<_1;++K)S1=k[K],S1!=0&&(b1[K]=x1[S1+16]++);var M1=0;for(K=0;K<_1;++K)if(M1=k[K],M1!=0)for(S1=j(b1[K],L)>>L-M1,g1=(1<<L+4-M1)-1;g1>=0;--g1)F[S1|g1<<M1]=M1&15|K<<4;return L}var N1=m1?new Uint16Array(512):w1(512),Z1=m1?new Uint16Array(32):w1(32);if(!m1){for(var i2=0;i2<512;++i2)N1[i2]=0;for(i2=0;i2<32;++i2)Z1[i2]=0}(function(){for(var k=[],F=0;F<32;F++)k.push(5);O1(k,Z1,32);var R=[];for(F=0;F<=143;F++)R.push(8);for(;F<=255;F++)R.push(9);for(;F<=279;F++)R.push(7);for(;F<=287;F++)R.push(8);O1(R,N1,288)})();var s1=function(){for(var F=m1?new Uint8Array(32768):[],R=0,L=0;R<f1.length-1;++R)for(;L<f1[R+1];++L)F[L]=R;for(;L<32768;++L)F[L]=29;var J=m1?new Uint8Array(259):[];for(R=0,L=0;R<X.length-1;++R)for(;L<X[R+1];++L)J[L]=R;function K(S1,_1){for(var x1=0;x1<S1.length;){var b1=Math.min(65535,S1.length-x1),M1=x1+b1==S1.length;for(_1.write_shift(1,+M1),_1.write_shift(2,b1),_1.write_shift(2,~b1&65535);b1-- >0;)_1[_1.l++]=S1[x1++]}return _1.l}function g1(S1,_1){for(var x1=0,b1=0,M1=m1?new Uint16Array(32768):[];b1<S1.length;){var G1=Math.min(65535,S1.length-b1);if(G1<10){for(x1=t2(_1,x1,+(b1+G1==S1.length)),x1&7&&(x1+=8-(x1&7)),_1.l=x1/8|0,_1.write_shift(2,G1),_1.write_shift(2,~G1&65535);G1-- >0;)_1[_1.l++]=S1[b1++];x1=_1.l*8;continue}x1=t2(_1,x1,+(b1+G1==S1.length)+2);for(var K1=0;G1-- >0;){var P1=S1[b1];K1=(K1<<5^P1)&32767;var X1=-1,e2=0;if((X1=M1[K1])&&(X1|=b1&-32768,X1>b1&&(X1-=32768),X1<b1))for(;S1[X1+e2]==S1[b1+e2]&&e2<250;)++e2;if(e2>2){P1=J[e2],P1<=22?x1=o2(_1,x1,c1[P1+1]>>1)-1:(o2(_1,x1,3),x1+=5,o2(_1,x1,c1[P1-23]>>5),x1+=3);var U2=P1<8?0:P1-4>>2;U2>0&&(t1(_1,x1,e2-X[P1]),x1+=U2),P1=F[b1-X1],x1=o2(_1,x1,c1[P1]>>3),x1-=3;var x2=P1<4?0:P1-2>>1;x2>0&&(t1(_1,x1,b1-X1-f1[P1]),x1+=x2);for(var B2=0;B2<e2;++B2)M1[K1]=b1&32767,K1=(K1<<5^S1[b1])&32767,++b1;G1-=e2-1}else P1<=143?P1=P1+48:x1=f2(_1,x1,1),x1=o2(_1,x1,c1[P1]),M1[K1]=b1&32767,++b1}x1=o2(_1,x1,0)-1}return _1.l=(x1+7)/8|0,_1.l}return function(_1,x1){return _1.length<8?K(_1,x1):g1(_1,x1)}}();function d1(k){var F=E3(50+Math.floor(k.length*1.1)),R=s1(k,F);return F.slice(0,R)}var F1=m1?new Uint16Array(32768):w1(32768),W1=m1?new Uint16Array(32768):w1(32768),B1=m1?new Uint16Array(128):w1(128),s2=1,_2=1;function O2(k,F){var R=z1(k,F)+257;F+=5;var L=z1(k,F)+1;F+=5;var J=J1(k,F)+4;F+=4;for(var K=0,g1=m1?new Uint8Array(19):w1(19),S1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],_1=1,x1=m1?new Uint8Array(8):w1(8),b1=m1?new Uint8Array(8):w1(8),M1=g1.length,G1=0;G1<J;++G1)g1[z[G1]]=K=$1(k,F),_1<K&&(_1=K),x1[K]++,F+=3;var K1=0;for(x1[0]=0,G1=1;G1<=_1;++G1)b1[G1]=K1=K1+x1[G1-1]<<1;for(G1=0;G1<M1;++G1)(K1=g1[G1])!=0&&(S1[G1]=b1[K1]++);var P1=0;for(G1=0;G1<M1;++G1)if(P1=g1[G1],P1!=0){K1=c1[S1[G1]]>>8-P1;for(var X1=(1<<7-P1)-1;X1>=0;--X1)B1[K1|X1<<P1]=P1&7|G1<<3}var e2=[];for(_1=1;e2.length<R+L;)switch(K1=B1[E1(k,F)],F+=K1&7,K1>>>=3){case 16:for(K=3+C1(k,F),F+=2,K1=e2[e2.length-1];K-- >0;)e2.push(K1);break;case 17:for(K=3+$1(k,F),F+=3;K-- >0;)e2.push(0);break;case 18:for(K=11+E1(k,F),F+=7;K-- >0;)e2.push(0);break;default:e2.push(K1),_1<K1&&(_1=K1);break}var U2=e2.slice(0,R),x2=e2.slice(R);for(G1=R;G1<286;++G1)U2[G1]=0;for(G1=L;G1<30;++G1)x2[G1]=0;return s2=O1(U2,F1,286),_2=O1(x2,W1,30),F}function v1(k,F){if(k[0]==3&&!(k[1]&3))return[Pe(F),2];for(var R=0,L=0,J=yo(F||1<<18),K=0,g1=J.length>>>0,S1=0,_1=0;!(L&1);){if(L=$1(k,R),R+=3,L>>>1)L>>1==1?(S1=9,_1=5):(R=O2(k,R),S1=s2,_1=_2);else{R&7&&(R+=8-(R&7));var x1=k[R>>>3]|k[(R>>>3)+1]<<8;if(R+=32,x1>0)for(!F&&g1<K+x1&&(J=B(J,K+x1),g1=J.length);x1-- >0;)J[K++]=k[R>>>3],R+=8;continue}for(;;){!F&&g1<K+32767&&(J=B(J,K+32767),g1=J.length);var b1=c2(k,R,S1),M1=L>>>1==1?N1[b1]:F1[b1];if(R+=M1&15,M1>>>=4,!(M1>>>8&255))J[K++]=M1;else{if(M1==256)break;M1-=257;var G1=M1<8?0:M1-4>>2;G1>5&&(G1=0);var K1=K+X[M1];G1>0&&(K1+=c2(k,R,G1),R+=G1),b1=c2(k,R,_1),M1=L>>>1==1?Z1[b1]:W1[b1],R+=M1&15,M1>>>=4;var P1=M1<4?0:M1-2>>1,X1=f1[M1];for(P1>0&&(X1+=c2(k,R,P1),R+=P1),!F&&g1<K1&&(J=B(J,K1+100),g1=J.length);K<K1;)J[K]=J[K-X1],++K}}}return F?[J,R+7>>>3]:[J.slice(0,K),R+7>>>3]}function n2(k,F){var R=k.slice(k.l||0),L=v1(R,F);return k.l+=L[1],L[0]}function Y1(k,F){if(k)typeof console!="undefined"&&console.error(F);else throw new Error(F)}function D1(k,F){var R=k;U3(R,0);var L=[],J=[],K={FileIndex:L,FullPaths:J};C(K,{root:F.root});for(var g1=R.length-4;(R[g1]!=80||R[g1+1]!=75||R[g1+2]!=5||R[g1+3]!=6)&&g1>=0;)--g1;R.l=g1+4,R.l+=4;var S1=R.read_shift(2);R.l+=6;var _1=R.read_shift(4);for(R.l=_1,g1=0;g1<S1;++g1){R.l+=20;var x1=R.read_shift(4),b1=R.read_shift(4),M1=R.read_shift(2),G1=R.read_shift(2),K1=R.read_shift(2);R.l+=8;var P1=R.read_shift(4),X1=s(R.slice(R.l+M1,R.l+M1+G1));R.l+=M1+G1+K1;var e2=R.l;R.l=P1+4,q1(R,x1,b1,K,X1),R.l=e2}return K}function q1(k,F,R,L,J){k.l+=2;var K=k.read_shift(2),g1=k.read_shift(2),S1=o(k);if(K&8257)throw new Error("Unsupported ZIP encryption");for(var _1=k.read_shift(4),x1=k.read_shift(4),b1=k.read_shift(4),M1=k.read_shift(2),G1=k.read_shift(2),K1="",P1=0;P1<M1;++P1)K1+=String.fromCharCode(k[k.l++]);if(G1){var X1=s(k.slice(k.l,k.l+G1));(X1[21589]||{}).mt&&(S1=X1[21589].mt),((J||{})[21589]||{}).mt&&(S1=J[21589].mt)}k.l+=G1;var e2=k.slice(k.l,k.l+x1);switch(g1){case 8:e2=n1(k,b1);break;case 0:break;default:throw new Error("Unsupported ZIP Compression method "+g1)}var U2=!1;K&8&&(_1=k.read_shift(4),_1==134695760&&(_1=k.read_shift(4),U2=!0),x1=k.read_shift(4),b1=k.read_shift(4)),x1!=F&&Y1(U2,"Bad compressed size: "+F+" != "+x1),b1!=R&&Y1(U2,"Bad uncompressed size: "+R+" != "+b1),j5(L,K1,e2,{unsafe:!0,mt:S1})}function g2(k,F){var R=F||{},L=[],J=[],K=E3(1),g1=R.compression?8:0,S1=0,_1=0,x1=0,b1=0,M1=0,G1=k.FullPaths[0],K1=G1,P1=k.FileIndex[0],X1=[],e2=0;for(_1=1;_1<k.FullPaths.length;++_1)if(K1=k.FullPaths[_1].slice(G1.length),P1=k.FileIndex[_1],!(!P1.size||!P1.content||K1=="Sh33tJ5")){var U2=b1,x2=E3(K1.length);for(x1=0;x1<K1.length;++x1)x2.write_shift(1,K1.charCodeAt(x1)&127);x2=x2.slice(0,x2.l),X1[M1]=cm.buf(P1.content,0);var B2=P1.content;g1==8&&(B2=V(B2)),K=E3(30),K.write_shift(4,67324752),K.write_shift(2,20),K.write_shift(2,S1),K.write_shift(2,g1),P1.mt?i(K,P1.mt):K.write_shift(4,0),K.write_shift(-4,X1[M1]),K.write_shift(4,B2.length),K.write_shift(4,P1.content.length),K.write_shift(2,x2.length),K.write_shift(2,0),b1+=K.length,L.push(K),b1+=x2.length,L.push(x2),b1+=B2.length,L.push(B2),K=E3(46),K.write_shift(4,33639248),K.write_shift(2,0),K.write_shift(2,20),K.write_shift(2,S1),K.write_shift(2,g1),K.write_shift(4,0),K.write_shift(-4,X1[M1]),K.write_shift(4,B2.length),K.write_shift(4,P1.content.length),K.write_shift(2,x2.length),K.write_shift(2,0),K.write_shift(2,0),K.write_shift(2,0),K.write_shift(2,0),K.write_shift(4,0),K.write_shift(4,U2),e2+=K.l,J.push(K),e2+=x2.length,J.push(x2),++M1}return K=E3(22),K.write_shift(4,101010256),K.write_shift(2,0),K.write_shift(2,0),K.write_shift(2,M1),K.write_shift(2,M1),K.write_shift(4,e2),K.write_shift(4,b1),K.write_shift(2,0),be([be(L),be(J),K])}var z2={htm:"text/html",xml:"text/xml",gif:"image/gif",jpg:"image/jpeg",png:"image/png",mso:"application/x-mso",thmx:"application/vnd.ms-officetheme",sh33tj5:"application/octet-stream"};function e3(k,F){if(k.ctype)return k.ctype;var R=k.name||"",L=R.match(/\.([^\.]+)$/);return L&&z2[L[1]]||F&&(L=(R=F).match(/[\.\\]([^\.\\])+$/),L&&z2[L[1]])?z2[L[1]]:"application/octet-stream"}function y4(k){for(var F=xo(k),R=[],L=0;L<F.length;L+=76)R.push(F.slice(L,L+76));return R.join(`\r
`)+`\r
`}function Z2(k){var F=k.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,function(x1){var b1=x1.charCodeAt(0).toString(16).toUpperCase();return"="+(b1.length==1?"0"+b1:b1)});F=F.replace(/ $/mg,"=20").replace(/\t$/mg,"=09"),F.charAt(0)==`
`&&(F="=0D"+F.slice(1)),F=F.replace(/\r(?!\n)/mg,"=0D").replace(/\n\n/mg,`
=0A`).replace(/([^\r\n])\n/mg,"$1=0A");for(var R=[],L=F.split(`\r
`),J=0;J<L.length;++J){var K=L[J];if(K.length==0){R.push("");continue}for(var g1=0;g1<K.length;){var S1=76,_1=K.slice(g1,g1+S1);_1.charAt(S1-1)=="="?S1--:_1.charAt(S1-2)=="="?S1-=2:_1.charAt(S1-3)=="="&&(S1-=3),_1=K.slice(g1,g1+S1),g1+=S1,g1<K.length&&(_1+="="),R.push(_1)}}return R.join(`\r
`)}function a4(k){for(var F=[],R=0;R<k.length;++R){for(var L=k[R];R<=k.length&&L.charAt(L.length-1)=="=";)L=L.slice(0,L.length-1)+k[++R];F.push(L)}for(var J=0;J<F.length;++J)F[J]=F[J].replace(/[=][0-9A-Fa-f]{2}/g,function(K){return String.fromCharCode(parseInt(K.slice(1),16))});return p4(F.join(`\r
`))}function h0(k,F,R){for(var L="",J="",K="",g1,S1=0;S1<10;++S1){var _1=F[S1];if(!_1||_1.match(/^\s*$/))break;var x1=_1.match(/^(.*?):\s*([^\s].*)$/);if(x1)switch(x1[1].toLowerCase()){case"content-location":L=x1[2].trim();break;case"content-type":K=x1[2].trim();break;case"content-transfer-encoding":J=x1[2].trim();break}}switch(++S1,J.toLowerCase()){case"base64":g1=p4(z0(F.slice(S1).join("")));break;case"quoted-printable":g1=a4(F.slice(S1));break;default:throw new Error("Unsupported Content-Transfer-Encoding "+J)}var b1=j5(k,L.slice(R.length),g1,{unsafe:!0});K&&(b1.ctype=K)}function rt(k,F){if(O(k.slice(0,13)).toLowerCase()!="mime-version:")throw new Error("Unsupported MAD header");var R=F&&F.root||"",L=(C2&&Buffer.isBuffer(k)?k.toString("binary"):O(k)).split(`\r
`),J=0,K="";for(J=0;J<L.length;++J)if(K=L[J],!!/^Content-Location:/i.test(K)&&(K=K.slice(K.indexOf("file")),R||(R=K.slice(0,K.lastIndexOf("/")+1)),K.slice(0,R.length)!=R))for(;R.length>0&&(R=R.slice(0,R.length-1),R=R.slice(0,R.lastIndexOf("/")+1),K.slice(0,R.length)!=R););var g1=(L[1]||"").match(/boundary="(.*?)"/);if(!g1)throw new Error("MAD cannot find boundary");var S1="--"+(g1[1]||""),_1=[],x1=[],b1={FileIndex:_1,FullPaths:x1};C(b1);var M1,G1=0;for(J=0;J<L.length;++J){var K1=L[J];K1!==S1&&K1!==S1+"--"||(G1++&&h0(b1,L.slice(M1,J),R),M1=J)}return b1}function L9(k,F){var R=F||{},L=R.boundary||"SheetJS";L="------="+L;for(var J=["MIME-Version: 1.0",'Content-Type: multipart/related; boundary="'+L.slice(2)+'"',"","",""],K=k.FullPaths[0],g1=K,S1=k.FileIndex[0],_1=1;_1<k.FullPaths.length;++_1)if(g1=k.FullPaths[_1].slice(K.length),S1=k.FileIndex[_1],!(!S1.size||!S1.content||g1=="Sh33tJ5")){g1=g1.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,function(e2){return"_x"+e2.charCodeAt(0).toString(16)+"_"}).replace(/[\u0080-\uFFFF]/g,function(e2){return"_u"+e2.charCodeAt(0).toString(16)+"_"});for(var x1=S1.content,b1=C2&&Buffer.isBuffer(x1)?x1.toString("binary"):O(x1),M1=0,G1=Math.min(1024,b1.length),K1=0,P1=0;P1<=G1;++P1)(K1=b1.charCodeAt(P1))>=32&&K1<128&&++M1;var X1=M1>=G1*4/5;J.push(L),J.push("Content-Location: "+(R.root||"file:///C:/SheetJS/")+g1),J.push("Content-Transfer-Encoding: "+(X1?"quoted-printable":"base64")),J.push("Content-Type: "+e3(S1,g1)),J.push(""),J.push(X1?Z2(b1):y4(b1))}return J.push(L+`--\r
`),J.join(`\r
`)}function u6(k){var F={};return C(F,k),F}function j5(k,F,R,L){var J=L&&L.unsafe;J||C(k);var K=!J&&k2.find(k,F);if(!K){var g1=k.FullPaths[0];F.slice(0,g1.length)==g1?g1=F:(g1.slice(-1)!="/"&&(g1+="/"),g1=(g1+F).replace("//","/")),K={name:a(F),type:2},k.FileIndex.push(K),k.FullPaths.push(g1),J||k2.utils.cfb_gc(k)}return K.content=R,K.size=R?R.length:0,L&&(L.CLSID&&(K.clsid=L.CLSID),L.mt&&(K.mt=L.mt),L.ct&&(K.ct=L.ct)),K}function at(k,F){C(k);var R=k2.find(k,F);if(R){for(var L=0;L<k.FileIndex.length;++L)if(k.FileIndex[L]==R)return k.FileIndex.splice(L,1),k.FullPaths.splice(L,1),!0}return!1}function it(k,F,R){C(k);var L=k2.find(k,F);if(L){for(var J=0;J<k.FileIndex.length;++J)if(k.FileIndex[J]==L)return k.FileIndex[J].name=a(R),k.FullPaths[J]=R,!0}return!1}function a1(k){M(k,!0)}return e.find=P,e.read=A,e.parse=f,e.write=Q,e.writeFile=Y,e.utils={cfb_new:u6,cfb_add:j5,cfb_del:at,cfb_mov:it,cfb_gc:a1,ReadShift:d8,CheckField:yu,prep_blob:U3,bconcat:be,use_zlib:I,_deflateRaw:d1,_inflateRaw:n2,consts:r1},e}();function um(n){if(typeof Deno!="undefined")return Deno.readFileSync(n);if(typeof $!="undefined"&&typeof File!="undefined"&&typeof Folder!="undefined")try{var e=File(n);e.open("r"),e.encoding="binary";var t=e.read();return e.close(),t}catch(r){if(!r.message||!r.message.match(/onstruct/))throw r}throw new Error("Cannot access file "+n)}function I4(n){for(var e=Object.keys(n),t=[],r=0;r<e.length;++r)Object.prototype.hasOwnProperty.call(n,e[r])&&t.push(e[r]);return t}function ma(n){for(var e=[],t=I4(n),r=0;r!==t.length;++r)e[n[t[r]]]=t[r];return e}var h7=new Date(1899,11,30,0,0,0);function u0(n,e){var t=n.getTime();e&&(t-=1462*24*60*60*1e3);var r=h7.getTime()+(n.getTimezoneOffset()-h7.getTimezoneOffset())*6e4;return(t-r)/(24*60*60*1e3)}var Qc=new Date,fm=h7.getTime()+(Qc.getTimezoneOffset()-h7.getTimezoneOffset())*6e4,Mo=Qc.getTimezoneOffset();function G7(n){var e=new Date;return e.setTime(n*24*60*60*1e3+fm),e.getTimezoneOffset()!==Mo&&e.setTime(e.getTime()+(e.getTimezoneOffset()-Mo)*6e4),e}function dm(n){var e=0,t=0,r=!1,a=n.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);if(!a)throw new Error("|"+n+"| is not an ISO8601 Duration");for(var i=1;i!=a.length;++i)if(a[i]){switch(t=1,i>3&&(r=!0),a[i].slice(a[i].length-1)){case"Y":throw new Error("Unsupported ISO Duration Field: "+a[i].slice(a[i].length-1));case"D":t*=24;case"H":t*=60;case"M":if(r)t*=60;else throw new Error("Unsupported ISO Duration Field: M")}e+=t*parseInt(a[i],10)}return e}var Do=new Date("2017-02-19T19:06:09.000Z"),Kc=isNaN(Do.getFullYear())?new Date("2/19/17"):Do,hm=Kc.getFullYear()==2017;function F3(n,e){var t=new Date(n);if(hm)return e>0?t.setTime(t.getTime()+t.getTimezoneOffset()*60*1e3):e<0&&t.setTime(t.getTime()-t.getTimezoneOffset()*60*1e3),t;if(n instanceof Date)return n;if(Kc.getFullYear()==1917&&!isNaN(t.getFullYear())){var r=t.getFullYear();return n.indexOf(""+r)>-1||t.setFullYear(t.getFullYear()+100),t}var a=n.match(/\d+/g)||["2017","2","19","0","0","0"],i=new Date(+a[0],+a[1]-1,+a[2],+a[3]||0,+a[4]||0,+a[5]||0);return n.indexOf("Z")>-1&&(i=new Date(i.getTime()-i.getTimezoneOffset()*60*1e3)),i}function _9(n,e){if(C2&&Buffer.isBuffer(n)){if(e){if(n[0]==255&&n[1]==254)return a8(n.slice(2).toString("utf16le"));if(n[1]==254&&n[2]==255)return a8(Uc(n.slice(2).toString("binary")))}return n.toString("binary")}if(typeof TextDecoder!="undefined")try{if(e){if(n[0]==255&&n[1]==254)return a8(new TextDecoder("utf-16le").decode(n.slice(2)));if(n[0]==254&&n[1]==255)return a8(new TextDecoder("utf-16be").decode(n.slice(2)))}var t={"€":"","‚":"",ƒ:"","„":"","…":"","†":"","‡":"","ˆ":"","‰":"",Š:"","‹":"",Œ:"",Ž:"","‘":"","’":"","“":"","”":"","•":"","–":"","—":"","˜":"","™":"",š:"","›":"",œ:"",ž:"",Ÿ:""};return Array.isArray(n)&&(n=new Uint8Array(n)),new TextDecoder("latin1").decode(n).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g,function(i){return t[i]||i})}catch(i){}for(var r=[],a=0;a!=n.length;++a)r.push(String.fromCharCode(n[a]));return r.join("")}function G3(n){if(typeof JSON!="undefined"&&!Array.isArray(n))return JSON.parse(JSON.stringify(n));if(typeof n!="object"||n==null)return n;if(n instanceof Date)return new Date(n.getTime());var e={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=G3(n[t]));return e}function o3(n,e){for(var t="";t.length<e;)t+=n;return t}function _4(n){var e=Number(n);if(!isNaN(e))return isFinite(e)?e:NaN;if(!/\d/.test(n))return e;var t=1,r=n.replace(/([\d]),([\d])/g,"$1$2").replace(/[$]/g,"").replace(/[%]/g,function(){return t*=100,""});return!isNaN(e=Number(r))||(r=r.replace(/[(](.*)[)]/,function(a,i){return t=-t,i}),!isNaN(e=Number(r)))?e/t:e}var pm=["january","february","march","april","may","june","july","august","september","october","november","december"];function T5(n){var e=new Date(n),t=new Date(NaN),r=e.getYear(),a=e.getMonth(),i=e.getDate();if(isNaN(i))return t;var o=n.toLowerCase();if(o.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)){if(o=o.replace(/[^a-z]/g,"").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/,""),o.length>3&&pm.indexOf(o)==-1)return t}else if(o.match(/[a-z]/))return t;return r<0||r>8099?t:(a>0||i>1)&&r!=101?e:n.match(/[^-0-9:,\/\\]/)?t:e}var mm=function(){var n="abacaba".split(/(:?b)/i).length==5;return function(t,r,a){if(n||typeof r=="string")return t.split(r);for(var i=t.split(r),o=[i[0]],s=1;s<i.length;++s)o.push(a),o.push(i[s]);return o}}();function eu(n){return n?n.content&&n.type?_9(n.content,!0):n.data?t8(n.data):n.asNodeBuffer&&C2?t8(n.asNodeBuffer().toString("binary")):n.asBinary?t8(n.asBinary()):n._data&&n._data.getContent?t8(_9(Array.prototype.slice.call(n._data.getContent(),0))):null:null}function tu(n){if(!n)return null;if(n.data)return vo(n.data);if(n.asNodeBuffer&&C2)return n.asNodeBuffer();if(n._data&&n._data.getContent){var e=n._data.getContent();return typeof e=="string"?vo(e):Array.prototype.slice.call(e)}return n.content&&n.type?n.content:null}function gm(n){return n&&n.name.slice(-4)===".bin"?tu(n):eu(n)}function $0(n,e){for(var t=n.FullPaths||I4(n.files),r=e.toLowerCase().replace(/[\/]/g,"\\"),a=r.replace(/\\/g,"/"),i=0;i<t.length;++i){var o=t[i].replace(/^Root Entry[\/]/,"").toLowerCase();if(r==o||a==o)return n.files?n.files[t[i]]:n.FileIndex[i]}return null}function ga(n,e){var t=$0(n,e);if(t==null)throw new Error("Cannot find file "+e+" in zip");return t}function x3(n,e,t){if(!t)return gm(ga(n,e));if(!e)return null;try{return x3(n,e)}catch(r){return null}}function O0(n,e,t){if(!t)return eu(ga(n,e));if(!e)return null;try{return O0(n,e)}catch(r){return null}}function nu(n,e,t){if(!t)return tu(ga(n,e));if(!e)return null;try{return nu(n,e)}catch(r){return null}}function ko(n){for(var e=n.FullPaths||I4(n.files),t=[],r=0;r<e.length;++r)e[r].slice(-1)!="/"&&t.push(e[r].replace(/^Root Entry[\/]/,""));return t.sort()}function vm(n,e,t){if(n.FullPaths){if(typeof t=="string"){var r;return C2?r=T9(t):r=Np(t),k2.utils.cfb_add(n,e,r)}k2.utils.cfb_add(n,e,t)}else n.file(e,t)}function ru(n,e){switch(e.type){case"base64":return k2.read(n,{type:"base64"});case"binary":return k2.read(n,{type:"binary"});case"buffer":case"array":return k2.read(n,{type:"buffer"})}throw new Error("Unrecognized type "+e.type)}function r8(n,e){if(n.charAt(0)=="/")return n.slice(1);var t=e.split("/");e.slice(-1)!="/"&&t.pop();for(var r=n.split("/");r.length!==0;){var a=r.shift();a===".."?t.pop():a!=="."&&t.push(a)}return t.join("/")}var au=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,_m=/([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,Ro=/<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg,xm=/<[^>]*>/g,r0=au.match(Ro)?Ro:xm,ym=/<\w*:/,bm=/<(\/?)\w+:/;function v2(n,e,t){for(var r={},a=0,i=0;a!==n.length&&!((i=n.charCodeAt(a))===32||i===10||i===13);++a);if(e||(r[0]=n.slice(0,a)),a===n.length)return r;var o=n.match(_m),s=0,l="",u=0,f="",d="",h=1;if(o)for(u=0;u!=o.length;++u){for(d=o[u],i=0;i!=d.length&&d.charCodeAt(i)!==61;++i);for(f=d.slice(0,i).trim();d.charCodeAt(i+1)==32;)++i;for(h=(a=d.charCodeAt(i+1))==34||a==39?1:0,l=d.slice(i+1+h,d.length-h),s=0;s!=f.length&&f.charCodeAt(s)!==58;++s);if(s===f.length)f.indexOf("_")>0&&(f=f.slice(0,f.indexOf("_"))),r[f]=l,t||(r[f.toLowerCase()]=l);else{var m=(s===5&&f.slice(0,5)==="xmlns"?"xmlns":"")+f.slice(s+1);if(r[m]&&f.slice(s-3,s)=="ext")continue;r[m]=l,t||(r[m.toLowerCase()]=l)}}return r}function L4(n){return n.replace(bm,"<$1")}var iu={"&quot;":'"',"&apos;":"'","&gt;":">","&lt;":"<","&amp;":"&"},Sm=ma(iu),L2=function(){var n=/&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig,e=/_x([\da-fA-F]{4})_/ig;return function t(r){var a=r+"",i=a.indexOf("<![CDATA[");if(i==-1)return a.replace(n,function(s,l){return iu[s]||String.fromCharCode(parseInt(l,s.indexOf("x")>-1?16:10))||s}).replace(e,function(s,l){return String.fromCharCode(parseInt(l,16))});var o=a.indexOf("]]>");return t(a.slice(0,i))+a.slice(i+9,o)+t(a.slice(o+3))}}(),wm=/[&<>'"]/g,Am=/[\u0000-\u001f]/g;function va(n){var e=n+"";return e.replace(wm,function(t){return Sm[t]}).replace(/\n/g,"<br/>").replace(Am,function(t){return"&#x"+("000"+t.charCodeAt(0).toString(16)).slice(-4)+";"})}var Io=function(){var n=/&#(\d+);/g;function e(t,r){return String.fromCharCode(parseInt(r,10))}return function(r){return r.replace(n,e)}}();function q2(n){switch(n){case 1:case!0:case"1":case"true":case"TRUE":return!0;default:return!1}}function ht(n){for(var e="",t=0,r=0,a=0,i=0,o=0,s=0;t<n.length;){if(r=n.charCodeAt(t++),r<128){e+=String.fromCharCode(r);continue}if(a=n.charCodeAt(t++),r>191&&r<224){o=(r&31)<<6,o|=a&63,e+=String.fromCharCode(o);continue}if(i=n.charCodeAt(t++),r<240){e+=String.fromCharCode((r&15)<<12|(a&63)<<6|i&63);continue}o=n.charCodeAt(t++),s=((r&7)<<18|(a&63)<<12|(i&63)<<6|o&63)-65536,e+=String.fromCharCode(55296+(s>>>10&1023)),e+=String.fromCharCode(56320+(s&1023))}return e}function Oo(n){var e=Pe(2*n.length),t,r,a=1,i=0,o=0,s;for(r=0;r<n.length;r+=a)a=1,(s=n.charCodeAt(r))<128?t=s:s<224?(t=(s&31)*64+(n.charCodeAt(r+1)&63),a=2):s<240?(t=(s&15)*4096+(n.charCodeAt(r+1)&63)*64+(n.charCodeAt(r+2)&63),a=3):(a=4,t=(s&7)*262144+(n.charCodeAt(r+1)&63)*4096+(n.charCodeAt(r+2)&63)*64+(n.charCodeAt(r+3)&63),t-=65536,o=55296+(t>>>10&1023),t=56320+(t&1023)),o!==0&&(e[i++]=o&255,e[i++]=o>>>8,o=0),e[i++]=t%256,e[i++]=t>>>8;return e.slice(0,i).toString("ucs2")}function Lo(n){return T9(n,"binary").toString("utf8")}var p6="foo bar bazâð£",$2=C2&&(Lo(p6)==ht(p6)&&Lo||Oo(p6)==ht(p6)&&Oo)||ht,a8=C2?function(n){return T9(n,"utf8").toString("binary")}:function(n){for(var e=[],t=0,r=0,a=0;t<n.length;)switch(r=n.charCodeAt(t++),!0){case r<128:e.push(String.fromCharCode(r));break;case r<2048:e.push(String.fromCharCode(192+(r>>6))),e.push(String.fromCharCode(128+(r&63)));break;case(r>=55296&&r<57344):r-=55296,a=n.charCodeAt(t++)-56320+(r<<10),e.push(String.fromCharCode(240+(a>>18&7))),e.push(String.fromCharCode(144+(a>>12&63))),e.push(String.fromCharCode(128+(a>>6&63))),e.push(String.fromCharCode(128+(a&63)));break;default:e.push(String.fromCharCode(224+(r>>12))),e.push(String.fromCharCode(128+(r>>6&63))),e.push(String.fromCharCode(128+(r&63)))}return e.join("")},R8=function(){var n={};return function(t,r){var a=t+"|"+(r||"");return n[a]?n[a]:n[a]=new RegExp("<(?:\\w+:)?"+t+'(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?'+t+">",r||"")}}(),ou=function(){var n=[["nbsp"," "],["middot","·"],["quot",'"'],["apos","'"],["gt",">"],["lt","<"],["amp","&"]].map(function(e){return[new RegExp("&"+e[0]+";","ig"),e[1]]});return function(t){for(var r=t.replace(/^[\t\n\r ]+/,"").replace(/[\t\n\r ]+$/,"").replace(/>\s+/g,">").replace(/\s+</g,"<").replace(/[\t\n\r ]+/g," ").replace(/<\s*[bB][rR]\s*\/?>/g,`
`).replace(/<[^>]*>/g,""),a=0;a<n.length;++a)r=r.replace(n[a][0],n[a][1]);return r}}(),Tm=function(){var n={};return function(t){return n[t]!==void 0?n[t]:n[t]=new RegExp("<(?:vt:)?"+t+">([\\s\\S]*?)</(?:vt:)?"+t+">","g")}}(),Em=/<\/?(?:vt:)?variant>/g,Cm=/<(?:vt:)([^>]*)>([\s\S]*)</;function Fo(n,e){var t=v2(n),r=n.match(Tm(t.baseType))||[],a=[];if(r.length!=t.size){if(e.WTF)throw new Error("unexpected vector length "+r.length+" != "+t.size);return a}return r.forEach(function(i){var o=i.replace(Em,"").match(Cm);o&&a.push({v:$2(o[2]),t:o[1]})}),a}var Mm=/(^\s|\s$|\n)/;function Dm(n){return I4(n).map(function(e){return" "+e+'="'+n[e]+'"'}).join("")}function km(n,e,t){return"<"+n+(t!=null?Dm(t):"")+(e!=null?(e.match(Mm)?' xml:space="preserve"':"")+">"+e+"</"+n:"/")+">"}function _a(n){if(C2&&Buffer.isBuffer(n))return n.toString("utf8");if(typeof n=="string")return n;if(typeof Uint8Array!="undefined"&&n instanceof Uint8Array)return $2(E9(da(n)));throw new Error("Bad input format: expected Buffer or string")}var I8=/<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg,Rm={CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/metadata/core-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",CT:"http://schemas.openxmlformats.org/package/2006/content-types",RELS:"http://schemas.openxmlformats.org/package/2006/relationships",TCMNT:"http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",dc:"http://purl.org/dc/elements/1.1/",dcterms:"http://purl.org/dc/terms/",dcmitype:"http://purl.org/dc/dcmitype/",mx:"http://schemas.microsoft.com/office/mac/excel/2008/main",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",sjs:"http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",vt:"http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",xsi:"http://www.w3.org/2001/XMLSchema-instance",xsd:"http://www.w3.org/2001/XMLSchema"},Im=["http://schemas.openxmlformats.org/spreadsheetml/2006/main","http://purl.oclc.org/ooxml/spreadsheetml/main","http://schemas.microsoft.com/office/excel/2006/main","http://schemas.microsoft.com/office/excel/2006/2"];function Om(n,e){for(var t=1-2*(n[e+7]>>>7),r=((n[e+7]&127)<<4)+(n[e+6]>>>4&15),a=n[e+6]&15,i=5;i>=0;--i)a=a*256+n[e+i];return r==2047?a==0?t*(1/0):NaN:(r==0?r=-1022:(r-=1023,a+=Math.pow(2,52)),t*Math.pow(2,r-52)*a)}function Lm(n,e,t){var r=(e<0||1/e==-1/0?1:0)<<7,a=0,i=0,o=r?-e:e;isFinite(o)?o==0?a=i=0:(a=Math.floor(Math.log(o)/Math.LN2),i=o*Math.pow(2,52-a),a<=-1023&&(!isFinite(i)||i<Math.pow(2,52))?a=-1022:(i-=Math.pow(2,52),a+=1023)):(a=2047,i=isNaN(e)?26985:0);for(var s=0;s<=5;++s,i/=256)n[t+s]=i&255;n[t+6]=(a&15)<<4|i&15,n[t+7]=a>>4|r}var Po=function(n){for(var e=[],t=10240,r=0;r<n[0].length;++r)if(n[0][r])for(var a=0,i=n[0][r].length;a<i;a+=t)e.push.apply(e,n[0][r].slice(a,a+t));return e},No=C2?function(n){return n[0].length>0&&Buffer.isBuffer(n[0][0])?Buffer.concat(n[0].map(function(e){return Buffer.isBuffer(e)?e:T9(e)})):Po(n)}:Po,zo=function(n,e,t){for(var r=[],a=e;a<t;a+=2)r.push(String.fromCharCode(J4(n,a)));return r.join("").replace(c0,"")},xa=C2?function(n,e,t){return Buffer.isBuffer(n)?n.toString("utf16le",e,t).replace(c0,""):zo(n,e,t)}:zo,Uo=function(n,e,t){for(var r=[],a=e;a<e+t;++a)r.push(("0"+n[a].toString(16)).slice(-2));return r.join("")},su=C2?function(n,e,t){return Buffer.isBuffer(n)?n.toString("hex",e,e+t):Uo(n,e,t)}:Uo,Bo=function(n,e,t){for(var r=[],a=e;a<t;a++)r.push(String.fromCharCode(a5(n,a)));return r.join("")},Z8=C2?function(e,t,r){return Buffer.isBuffer(e)?e.toString("utf8",t,r):Bo(e,t,r)}:Bo,lu=function(n,e){var t=I0(n,e);return t>0?Z8(n,e+4,e+4+t-1):""},cu=lu,uu=function(n,e){var t=I0(n,e);return t>0?Z8(n,e+4,e+4+t-1):""},fu=uu,du=function(n,e){var t=2*I0(n,e);return t>0?Z8(n,e+4,e+4+t-1):""},hu=du,pu=function(e,t){var r=I0(e,t);return r>0?xa(e,t+4,t+4+r):""},mu=pu,gu=function(n,e){var t=I0(n,e);return t>0?Z8(n,e+4,e+4+t):""},vu=gu,_u=function(n,e){return Om(n,e)},p7=_u,xu=function(e){return Array.isArray(e)||typeof Uint8Array!="undefined"&&e instanceof Uint8Array};C2&&(cu=function(e,t){if(!Buffer.isBuffer(e))return lu(e,t);var r=e.readUInt32LE(t);return r>0?e.toString("utf8",t+4,t+4+r-1):""},fu=function(e,t){if(!Buffer.isBuffer(e))return uu(e,t);var r=e.readUInt32LE(t);return r>0?e.toString("utf8",t+4,t+4+r-1):""},hu=function(e,t){if(!Buffer.isBuffer(e))return du(e,t);var r=2*e.readUInt32LE(t);return e.toString("utf16le",t+4,t+4+r-1)},mu=function(e,t){if(!Buffer.isBuffer(e))return pu(e,t);var r=e.readUInt32LE(t);return e.toString("utf16le",t+4,t+4+r)},vu=function(e,t){if(!Buffer.isBuffer(e))return gu(e,t);var r=e.readUInt32LE(t);return e.toString("utf8",t+4,t+4+r)},p7=function(e,t){return Buffer.isBuffer(e)?e.readDoubleLE(t):_u(e,t)},xu=function(e){return Buffer.isBuffer(e)||Array.isArray(e)||typeof Uint8Array!="undefined"&&e instanceof Uint8Array});var a5=function(n,e){return n[e]},J4=function(n,e){return n[e+1]*256+n[e]},Fm=function(n,e){var t=n[e+1]*256+n[e];return t<32768?t:(65535-t+1)*-1},I0=function(n,e){return n[e+3]*(1<<24)+(n[e+2]<<16)+(n[e+1]<<8)+n[e]},e9=function(n,e){return n[e+3]<<24|n[e+2]<<16|n[e+1]<<8|n[e]},Pm=function(n,e){return n[e]<<24|n[e+1]<<16|n[e+2]<<8|n[e+3]};function d8(n,e){var t="",r,a,i=[],o,s,l,u;switch(e){case"dbcs":if(u=this.l,C2&&Buffer.isBuffer(this))t=this.slice(this.l,this.l+2*n).toString("utf16le");else for(l=0;l<n;++l)t+=String.fromCharCode(J4(this,u)),u+=2;n*=2;break;case"utf8":t=Z8(this,this.l,this.l+n);break;case"utf16le":n*=2,t=xa(this,this.l,this.l+n);break;case"wstr":return d8.call(this,n,"dbcs");case"lpstr-ansi":t=cu(this,this.l),n=4+I0(this,this.l);break;case"lpstr-cp":t=fu(this,this.l),n=4+I0(this,this.l);break;case"lpwstr":t=hu(this,this.l),n=4+2*I0(this,this.l);break;case"lpp4":n=4+I0(this,this.l),t=mu(this,this.l),n&2&&(n+=2);break;case"8lpp4":n=4+I0(this,this.l),t=vu(this,this.l),n&3&&(n+=4-(n&3));break;case"cstr":for(n=0,t="";(o=a5(this,this.l+n++))!==0;)i.push(h6(o));t=i.join("");break;case"_wstr":for(n=0,t="";(o=J4(this,this.l+n))!==0;)i.push(h6(o)),n+=2;n+=2,t=i.join("");break;case"dbcs-cont":for(t="",u=this.l,l=0;l<n;++l){if(this.lens&&this.lens.indexOf(u)!==-1)return o=a5(this,u),this.l=u+1,s=d8.call(this,n-l,o?"dbcs-cont":"sbcs-cont"),i.join("")+s;i.push(h6(J4(this,u))),u+=2}t=i.join(""),n*=2;break;case"cpstr":case"sbcs-cont":for(t="",u=this.l,l=0;l!=n;++l){if(this.lens&&this.lens.indexOf(u)!==-1)return o=a5(this,u),this.l=u+1,s=d8.call(this,n-l,o?"dbcs-cont":"sbcs-cont"),i.join("")+s;i.push(h6(a5(this,u))),u+=1}t=i.join("");break;default:switch(n){case 1:return r=a5(this,this.l),this.l++,r;case 2:return r=(e==="i"?Fm:J4)(this,this.l),this.l+=2,r;case 4:case-4:return e==="i"||!(this[this.l+3]&128)?(r=(n>0?e9:Pm)(this,this.l),this.l+=4,r):(a=I0(this,this.l),this.l+=4,a);case 8:case-8:if(e==="f")return n==8?a=p7(this,this.l):a=p7([this[this.l+7],this[this.l+6],this[this.l+5],this[this.l+4],this[this.l+3],this[this.l+2],this[this.l+1],this[this.l+0]],0),this.l+=8,a;n=8;case 16:t=su(this,this.l,n);break}}return this.l+=n,t}var Nm=function(n,e,t){n[t]=e&255,n[t+1]=e>>>8&255,n[t+2]=e>>>16&255,n[t+3]=e>>>24&255},zm=function(n,e,t){n[t]=e&255,n[t+1]=e>>8&255,n[t+2]=e>>16&255,n[t+3]=e>>24&255},Um=function(n,e,t){n[t]=e&255,n[t+1]=e>>>8&255};function Bm(n,e,t){var r=0,a=0;if(t==="dbcs"){for(a=0;a!=e.length;++a)Um(this,e.charCodeAt(a),this.l+2*a);r=2*e.length}else if(t==="sbcs"){for(e=e.replace(/[^\x00-\x7F]/g,"_"),a=0;a!=e.length;++a)this[this.l+a]=e.charCodeAt(a)&255;r=e.length}else if(t==="hex"){for(;a<n;++a)this[this.l++]=parseInt(e.slice(2*a,2*a+2),16)||0;return this}else if(t==="utf16le"){var i=Math.min(this.l+n,this.length);for(a=0;a<Math.min(e.length,n);++a){var o=e.charCodeAt(a);this[this.l++]=o&255,this[this.l++]=o>>8}for(;this.l<i;)this[this.l++]=0;return this}else switch(n){case 1:r=1,this[this.l]=e&255;break;case 2:r=2,this[this.l]=e&255,e>>>=8,this[this.l+1]=e&255;break;case 3:r=3,this[this.l]=e&255,e>>>=8,this[this.l+1]=e&255,e>>>=8,this[this.l+2]=e&255;break;case 4:r=4,Nm(this,e,this.l);break;case 8:if(r=8,t==="f"){Lm(this,e,this.l);break}case 16:break;case-4:r=4,zm(this,e,this.l);break}return this.l+=r,this}function yu(n,e){var t=su(this,this.l,n.length>>1);if(t!==n)throw new Error(e+"Expected "+n+" saw "+t);this.l+=n.length>>1}function U3(n,e){n.l=e,n.read_shift=d8,n.chk=yu,n.write_shift=Bm}function n0(n,e){n.l+=e}function E3(n){var e=Pe(n);return U3(e,0),e}function le(n,e,t){if(n){var r,a,i;U3(n,n.l||0);for(var o=n.length,s=0,l=0;n.l<o;){s=n.read_shift(1),s&128&&(s=(s&127)+((n.read_shift(1)&127)<<7));var u=y7[s]||y7[65535];for(r=n.read_shift(1),i=r&127,a=1;a<4&&r&128;++a)i+=((r=n.read_shift(1))&127)<<7*a;l=n.l+i;var f=u.f&&u.f(n,i,t);if(n.l=l,e(f,u,s))return}}}function yn(){var n=[],e=C2?256:2048,t=function(u){var f=E3(u);return U3(f,0),f},r=t(e),a=function(){r&&(r.length>r.l&&(r=r.slice(0,r.l),r.l=r.length),r.length>0&&n.push(r),r=null)},i=function(u){return r&&u<r.length-r.l?r:(a(),r=t(Math.max(u+1,e)))},o=function(){return a(),be(n)},s=function(u){a(),r=u,r.l==null&&(r.l=r.length),i(e)};return{next:i,push:s,end:o,_bufs:n}}function h8(n,e,t){var r=G3(n);if(e.s?(r.cRel&&(r.c+=e.s.c),r.rRel&&(r.r+=e.s.r)):(r.cRel&&(r.c+=e.c),r.rRel&&(r.r+=e.r)),!t||t.biff<12){for(;r.c>=256;)r.c-=256;for(;r.r>=65536;)r.r-=65536}return r}function Vo(n,e,t){var r=G3(n);return r.s=h8(r.s,e.s,t),r.e=h8(r.e,e.s,t),r}function p8(n,e){if(n.cRel&&n.c<0)for(n=G3(n);n.c<0;)n.c+=e>8?16384:256;if(n.rRel&&n.r<0)for(n=G3(n);n.r<0;)n.r+=e>8?1048576:e>5?65536:16384;var t=y2(n);return!n.cRel&&n.cRel!=null&&(t=Wm(t)),!n.rRel&&n.rRel!=null&&(t=Vm(t)),t}function pt(n,e){return n.s.r==0&&!n.s.rRel&&n.e.r==(e.biff>=12?1048575:e.biff>=8?65536:16384)&&!n.e.rRel?(n.s.cRel?"":"$")+C3(n.s.c)+":"+(n.e.cRel?"":"$")+C3(n.e.c):n.s.c==0&&!n.s.cRel&&n.e.c==(e.biff>=12?16383:255)&&!n.e.cRel?(n.s.rRel?"":"$")+W3(n.s.r)+":"+(n.e.rRel?"":"$")+W3(n.e.r):p8(n.s,e.biff)+":"+p8(n.e,e.biff)}function ya(n){return parseInt(Gm(n),10)-1}function W3(n){return""+(n+1)}function Vm(n){return n.replace(/([A-Z]|^)(\d+)$/,"$1$$$2")}function Gm(n){return n.replace(/\$(\d+)$/,"$1")}function ba(n){for(var e=jm(n),t=0,r=0;r!==e.length;++r)t=26*t+e.charCodeAt(r)-64;return t-1}function C3(n){if(n<0)throw new Error("invalid column "+n);var e="";for(++n;n;n=Math.floor((n-1)/26))e=String.fromCharCode((n-1)%26+65)+e;return e}function Wm(n){return n.replace(/^([A-Z])/,"$$$1")}function jm(n){return n.replace(/^\$([A-Z])/,"$1")}function Hm(n){return n.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(",")}function l0(n){for(var e=0,t=0,r=0;r<n.length;++r){var a=n.charCodeAt(r);a>=48&&a<=57?e=10*e+(a-48):a>=65&&a<=90&&(t=26*t+(a-64))}return{c:t-1,r:e-1}}function y2(n){for(var e=n.c+1,t="";e;e=(e-1)/26|0)t=String.fromCharCode((e-1)%26+65)+t;return t+(n.r+1)}function B5(n){var e=n.indexOf(":");return e==-1?{s:l0(n),e:l0(n)}:{s:l0(n.slice(0,e)),e:l0(n.slice(e+1))}}function I2(n,e){return typeof e=="undefined"||typeof e=="number"?I2(n.s,n.e):(typeof n!="string"&&(n=y2(n)),typeof e!="string"&&(e=y2(e)),n==e?n:n+":"+e)}function l3(n){var e={s:{c:0,r:0},e:{c:0,r:0}},t=0,r=0,a=0,i=n.length;for(t=0;r<i&&!((a=n.charCodeAt(r)-64)<1||a>26);++r)t=26*t+a;for(e.s.c=--t,t=0;r<i&&!((a=n.charCodeAt(r)-48)<0||a>9);++r)t=10*t+a;if(e.s.r=--t,r===i||a!=10)return e.e.c=e.s.c,e.e.r=e.s.r,e;for(++r,t=0;r!=i&&!((a=n.charCodeAt(r)-64)<1||a>26);++r)t=26*t+a;for(e.e.c=--t,t=0;r!=i&&!((a=n.charCodeAt(r)-48)<0||a>9);++r)t=10*t+a;return e.e.r=--t,e}function Go(n,e){var t=n.t=="d"&&e instanceof Date;if(n.z!=null)try{return n.w=e4(n.z,t?u0(e):e)}catch(r){}try{return n.w=e4((n.XF||{}).numFmtId||(t?14:0),t?u0(e):e)}catch(r){return""+e}}function te(n,e,t){return n==null||n.t==null||n.t=="z"?"":n.w!==void 0?n.w:(n.t=="d"&&!n.z&&t&&t.dateNF&&(n.z=t.dateNF),n.t=="e"?D9[n.v]||n.v:e==null?Go(n,n.v):Go(n,e))}function je(n,e){var t=e&&e.sheet?e.sheet:"Sheet1",r={};return r[t]=n,{SheetNames:[t],Sheets:r}}function bu(n,e,t){var r=t||{},a=n?Array.isArray(n):r.dense,i=n||(a?[]:{}),o=0,s=0;if(i&&r.origin!=null){if(typeof r.origin=="number")o=r.origin;else{var l=typeof r.origin=="string"?l0(r.origin):r.origin;o=l.r,s=l.c}i["!ref"]||(i["!ref"]="A1:A1")}var u={s:{c:1e7,r:1e7},e:{c:0,r:0}};if(i["!ref"]){var f=l3(i["!ref"]);u.s.c=f.s.c,u.s.r=f.s.r,u.e.c=Math.max(u.e.c,f.e.c),u.e.r=Math.max(u.e.r,f.e.r),o==-1&&(u.e.r=o=f.e.r+1)}for(var d=0;d!=e.length;++d)if(e[d]){if(!Array.isArray(e[d]))throw new Error("aoa_to_sheet expects an array of arrays");for(var h=0;h!=e[d].length;++h)if(typeof e[d][h]!="undefined"){var m={v:e[d][h]},_=o+d,g=s+h;if(u.s.r>_&&(u.s.r=_),u.s.c>g&&(u.s.c=g),u.e.r<_&&(u.e.r=_),u.e.c<g&&(u.e.c=g),e[d][h]&&typeof e[d][h]=="object"&&!Array.isArray(e[d][h])&&!(e[d][h]instanceof Date))m=e[d][h];else if(Array.isArray(m.v)&&(m.f=e[d][h][1],m.v=m.v[0]),m.v===null)if(m.f)m.t="n";else if(r.nullError)m.t="e",m.v=0;else if(r.sheetStubs)m.t="z";else continue;else typeof m.v=="number"?m.t="n":typeof m.v=="boolean"?m.t="b":m.v instanceof Date?(m.z=r.dateNF||b2[14],r.cellDates?(m.t="d",m.w=e4(m.z,u0(m.v))):(m.t="n",m.v=u0(m.v),m.w=e4(m.z,m.v))):m.t="s";if(a)i[_]||(i[_]=[]),i[_][g]&&i[_][g].z&&(m.z=i[_][g].z),i[_][g]=m;else{var v=y2({c:g,r:_});i[v]&&i[v].z&&(m.z=i[v].z),i[v]=m}}}return u.s.c<1e7&&(i["!ref"]=I2(u)),i}function V5(n,e){return bu(null,n,e)}function $m(n){return n.read_shift(4,"i")}function Q3(n){var e=n.read_shift(4);return e===0?"":n.read_shift(e,"dbcs")}function Ym(n){return{ich:n.read_shift(2),ifnt:n.read_shift(2)}}function Sa(n,e){var t=n.l,r=n.read_shift(1),a=Q3(n),i=[],o={t:a,h:a};if(r&1){for(var s=n.read_shift(4),l=0;l!=s;++l)i.push(Ym(n));o.r=i}else o.r=[{ich:0,ifnt:0}];return n.l=t+e,o}var Xm=Sa;function r4(n){var e=n.read_shift(4),t=n.read_shift(2);return t+=n.read_shift(1)<<16,n.l++,{c:e,iStyleRef:t}}function C9(n){var e=n.read_shift(2);return e+=n.read_shift(1)<<16,n.l++,{c:-1,iStyleRef:e}}var Jm=Q3;function wa(n){var e=n.read_shift(4);return e===0||e===4294967295?"":n.read_shift(e,"dbcs")}var Zm=Q3,bn=wa;function Aa(n){var e=n.slice(n.l,n.l+4),t=e[0]&1,r=e[0]&2;n.l+=4;var a=r===0?p7([0,0,0,0,e[0]&252,e[1],e[2],e[3]],0):e9(e,0)>>2;return t?a/100:a}function Su(n){var e={s:{},e:{}};return e.s.r=n.read_shift(4),e.e.r=n.read_shift(4),e.s.c=n.read_shift(4),e.e.c=n.read_shift(4),e}var M9=Su;function J3(n){if(n.length-n.l<8)throw"XLS Xnum Buffer underflow";return n.read_shift(8,"f")}function qm(n){var e={},t=n.read_shift(1),r=t>>>1,a=n.read_shift(1),i=n.read_shift(2,"i"),o=n.read_shift(1),s=n.read_shift(1),l=n.read_shift(1);switch(n.l++,r){case 0:e.auto=1;break;case 1:e.index=a;var u=l9[a];u&&(e.rgb=L8(u));break;case 2:e.rgb=L8([o,s,l]);break;case 3:e.theme=a;break}return i!=0&&(e.tint=i>0?i/32767:i/32768),e}function Qm(n){var e=n.read_shift(1);n.l++;var t={fBold:e&1,fItalic:e&2,fUnderline:e&4,fStrikeout:e&8,fOutline:e&16,fShadow:e&32,fCondense:e&64,fExtend:e&128};return t}function wu(n,e){var t={2:"BITMAP",3:"METAFILEPICT",8:"DIB",14:"ENHMETAFILE"},r=n.read_shift(4);switch(r){case 0:return"";case 4294967295:case 4294967294:return t[n.read_shift(4)]||""}if(r>400)throw new Error("Unsupported Clipboard: "+r.toString(16));return n.l-=4,n.read_shift(0,e==1?"lpstr":"lpwstr")}function Km(n){return wu(n,1)}function eg(n){return wu(n,2)}var Ta=2,m0=3,m6=11,Wo=12,m7=19,g6=64,tg=65,ng=71,rg=4108,ag=4126,I3=80,Au=81,ig=[I3,Au],og={1:{n:"CodePage",t:Ta},2:{n:"Category",t:I3},3:{n:"PresentationFormat",t:I3},4:{n:"ByteCount",t:m0},5:{n:"LineCount",t:m0},6:{n:"ParagraphCount",t:m0},7:{n:"SlideCount",t:m0},8:{n:"NoteCount",t:m0},9:{n:"HiddenCount",t:m0},10:{n:"MultimediaClipCount",t:m0},11:{n:"ScaleCrop",t:m6},12:{n:"HeadingPairs",t:rg},13:{n:"TitlesOfParts",t:ag},14:{n:"Manager",t:I3},15:{n:"Company",t:I3},16:{n:"LinksUpToDate",t:m6},17:{n:"CharacterCount",t:m0},19:{n:"SharedDoc",t:m6},22:{n:"HyperlinksChanged",t:m6},23:{n:"AppVersion",t:m0,p:"version"},24:{n:"DigSig",t:tg},26:{n:"ContentType",t:I3},27:{n:"ContentStatus",t:I3},28:{n:"Language",t:I3},29:{n:"Version",t:I3},255:{},2147483648:{n:"Locale",t:m7},2147483651:{n:"Behavior",t:m7},1919054434:{}},sg={1:{n:"CodePage",t:Ta},2:{n:"Title",t:I3},3:{n:"Subject",t:I3},4:{n:"Author",t:I3},5:{n:"Keywords",t:I3},6:{n:"Comments",t:I3},7:{n:"Template",t:I3},8:{n:"LastAuthor",t:I3},9:{n:"RevNumber",t:I3},10:{n:"EditTime",t:g6},11:{n:"LastPrinted",t:g6},12:{n:"CreatedDate",t:g6},13:{n:"ModifiedDate",t:g6},14:{n:"PageCount",t:m0},15:{n:"WordCount",t:m0},16:{n:"CharCount",t:m0},17:{n:"Thumbnail",t:ng},18:{n:"Application",t:I3},19:{n:"DocSecurity",t:m0},255:{},2147483648:{n:"Locale",t:m7},2147483651:{n:"Behavior",t:m7},1919054434:{}},jo={1:"US",2:"CA",3:"",7:"RU",20:"EG",30:"GR",31:"NL",32:"BE",33:"FR",34:"ES",36:"HU",39:"IT",41:"CH",43:"AT",44:"GB",45:"DK",46:"SE",47:"NO",48:"PL",49:"DE",52:"MX",55:"BR",61:"AU",64:"NZ",66:"TH",81:"JP",82:"KR",84:"VN",86:"CN",90:"TR",105:"JS",213:"DZ",216:"MA",218:"LY",351:"PT",354:"IS",358:"FI",420:"CZ",886:"TW",961:"LB",962:"JO",963:"SY",964:"IQ",965:"KW",966:"SA",971:"AE",972:"IL",974:"QA",981:"IR",65535:"US"},lg=[null,"solid","mediumGray","darkGray","lightGray","darkHorizontal","darkVertical","darkDown","darkUp","darkGrid","darkTrellis","lightHorizontal","lightVertical","lightDown","lightUp","lightGrid","lightTrellis","gray125","gray0625"];function cg(n){return n.map(function(e){return[e>>16&255,e>>8&255,e&255]})}var ug=cg([0,16777215,16711680,65280,255,16776960,16711935,65535,0,16777215,16711680,65280,255,16776960,16711935,65535,8388608,32768,128,8421376,8388736,32896,12632256,8421504,10066431,10040166,16777164,13434879,6684774,16744576,26316,13421823,128,16711935,16776960,65535,8388736,8388608,32896,255,52479,13434879,13434828,16777113,10079487,16751052,13408767,16764057,3368703,3394764,10079232,16763904,16750848,16737792,6710937,9868950,13158,3381606,13056,3355392,10040064,10040166,3355545,3355443,16777215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),l9=G3(ug),D9={0:"#NULL!",7:"#DIV/0!",15:"#VALUE!",23:"#REF!",29:"#NAME?",36:"#NUM!",42:"#N/A",43:"#GETTING_DATA",255:"#WTF?"},Tu={"#NULL!":0,"#DIV/0!":7,"#VALUE!":15,"#REF!":23,"#NAME?":29,"#NUM!":36,"#N/A":42,"#GETTING_DATA":43,"#WTF?":255},Ho={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":"workbooks","application/vnd.ms-excel.sheet.macroEnabled.main+xml":"workbooks","application/vnd.ms-excel.sheet.binary.macroEnabled.main":"workbooks","application/vnd.ms-excel.addin.macroEnabled.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":"sheets","application/vnd.ms-excel.worksheet":"sheets","application/vnd.ms-excel.binIndexWs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":"charts","application/vnd.ms-excel.chartsheet":"charts","application/vnd.ms-excel.macrosheet+xml":"macros","application/vnd.ms-excel.macrosheet":"macros","application/vnd.ms-excel.intlmacrosheet":"TODO","application/vnd.ms-excel.binIndexMs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":"dialogs","application/vnd.ms-excel.dialogsheet":"dialogs","application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":"strs","application/vnd.ms-excel.sharedStrings":"strs","application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":"styles","application/vnd.ms-excel.styles":"styles","application/vnd.openxmlformats-package.core-properties+xml":"coreprops","application/vnd.openxmlformats-officedocument.custom-properties+xml":"custprops","application/vnd.openxmlformats-officedocument.extended-properties+xml":"extprops","application/vnd.openxmlformats-officedocument.customXmlProperties+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":"comments","application/vnd.ms-excel.comments":"comments","application/vnd.ms-excel.threadedcomments+xml":"threadedcomments","application/vnd.ms-excel.person+xml":"people","application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":"metadata","application/vnd.ms-excel.sheetMetadata":"metadata","application/vnd.ms-excel.pivotTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.chart+xml":"TODO","application/vnd.ms-office.chartcolorstyle+xml":"TODO","application/vnd.ms-office.chartstyle+xml":"TODO","application/vnd.ms-office.chartex+xml":"TODO","application/vnd.ms-excel.calcChain":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":"TODO","application/vnd.ms-office.activeX":"TODO","application/vnd.ms-office.activeX+xml":"TODO","application/vnd.ms-excel.attachedToolbars":"TODO","application/vnd.ms-excel.connections":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":"TODO","application/vnd.ms-excel.externalLink":"links","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":"links","application/vnd.ms-excel.pivotCacheDefinition":"TODO","application/vnd.ms-excel.pivotCacheRecords":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":"TODO","application/vnd.ms-excel.queryTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":"TODO","application/vnd.ms-excel.userNames":"TODO","application/vnd.ms-excel.revisionHeaders":"TODO","application/vnd.ms-excel.revisionLog":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":"TODO","application/vnd.ms-excel.tableSingleCells":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":"TODO","application/vnd.ms-excel.slicer":"TODO","application/vnd.ms-excel.slicerCache":"TODO","application/vnd.ms-excel.slicer+xml":"TODO","application/vnd.ms-excel.slicerCache+xml":"TODO","application/vnd.ms-excel.wsSortMap":"TODO","application/vnd.ms-excel.table":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":"TODO","application/vnd.openxmlformats-officedocument.theme+xml":"themes","application/vnd.openxmlformats-officedocument.themeOverride+xml":"TODO","application/vnd.ms-excel.Timeline+xml":"TODO","application/vnd.ms-excel.TimelineCache+xml":"TODO","application/vnd.ms-office.vbaProject":"vba","application/vnd.ms-office.vbaProjectSignature":"TODO","application/vnd.ms-office.volatileDependencies":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":"TODO","application/vnd.ms-excel.controlproperties+xml":"TODO","application/vnd.openxmlformats-officedocument.model+data":"TODO","application/vnd.ms-excel.Survey+xml":"TODO","application/vnd.openxmlformats-officedocument.drawing+xml":"drawings","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":"TODO","application/vnd.openxmlformats-officedocument.vmlDrawing":"TODO","application/vnd.openxmlformats-package.relationships+xml":"rels","application/vnd.openxmlformats-officedocument.oleObject":"TODO","image/png":"TODO",sheet:"js"};function fg(){return{workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],threadedcomments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],metadata:[],people:[],TODO:[],xmlns:""}}function dg(n){var e=fg();if(!n||!n.match)return e;var t={};if((n.match(r0)||[]).forEach(function(r){var a=v2(r);switch(a[0].replace(ym,"<")){case"<?xml":break;case"<Types":e.xmlns=a["xmlns"+(a[0].match(/<(\w+):/)||["",""])[1]];break;case"<Default":t[a.Extension]=a.ContentType;break;case"<Override":e[Ho[a.ContentType]]!==void 0&&e[Ho[a.ContentType]].push(a.PartName);break}}),e.xmlns!==Rm.CT)throw new Error("Unknown Namespace: "+e.xmlns);return e.calcchain=e.calcchains.length>0?e.calcchains[0]:"",e.sst=e.strs.length>0?e.strs[0]:"",e.style=e.styles.length>0?e.styles[0]:"",e.defaults=t,delete e.calcchains,e}var s5={WB:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",SHEET:"http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",HLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",VML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",XPATH:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",XMISS:"http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",XLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",CXML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",CXMLP:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",CMNT:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",SST:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",STY:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",THEME:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",CHART:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",CHARTEX:"http://schemas.microsoft.com/office/2014/relationships/chartEx",CS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",WS:["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet","http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],DS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",MS:"http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",IMG:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",DRAW:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",XLMETA:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",TCMNT:"http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",PEOPLE:"http://schemas.microsoft.com/office/2017/10/relationships/person",VBA:"http://schemas.microsoft.com/office/2006/relationships/vbaProject"};function Sn(n){var e=n.lastIndexOf("/");return n.slice(0,e+1)+"_rels/"+n.slice(e+1)+".rels"}function m8(n,e){var t={"!id":{}};if(!n)return t;e.charAt(0)!=="/"&&(e="/"+e);var r={};return(n.match(r0)||[]).forEach(function(a){var i=v2(a);if(i[0]==="<Relationship"){var o={};o.Type=i.Type,o.Target=i.Target,o.Id=i.Id,i.TargetMode&&(o.TargetMode=i.TargetMode);var s=i.TargetMode==="External"?i.Target:r8(i.Target,e);t[s]=o,r[i.Id]=o}}),t["!id"]=r,t}var hg="application/vnd.oasis.opendocument.spreadsheet";function pg(n,e){for(var t=_a(n),r,a;r=I8.exec(t);)switch(r[3]){case"manifest":break;case"file-entry":if(a=v2(r[0],!1),a.path=="/"&&a.type!==hg)throw new Error("This OpenDocument is not a spreadsheet");break;case"encryption-data":case"algorithm":case"start-key-generation":case"key-derivation":throw new Error("Unsupported ODS Encryption");default:if(e&&e.WTF)throw r}}var g8=[["cp:category","Category"],["cp:contentStatus","ContentStatus"],["cp:keywords","Keywords"],["cp:lastModifiedBy","LastAuthor"],["cp:lastPrinted","LastPrinted"],["cp:revision","RevNumber"],["cp:version","Version"],["dc:creator","Author"],["dc:description","Comments"],["dc:identifier","Identifier"],["dc:language","Language"],["dc:subject","Subject"],["dc:title","Title"],["dcterms:created","CreatedDate","date"],["dcterms:modified","ModifiedDate","date"]],mg=function(){for(var n=new Array(g8.length),e=0;e<g8.length;++e){var t=g8[e],r="(?:"+t[0].slice(0,t[0].indexOf(":"))+":)"+t[0].slice(t[0].indexOf(":")+1);n[e]=new RegExp("<"+r+"[^>]*>([\\s\\S]*?)</"+r+">")}return n}();function Eu(n){var e={};n=$2(n);for(var t=0;t<g8.length;++t){var r=g8[t],a=n.match(mg[t]);a!=null&&a.length>0&&(e[r[1]]=L2(a[1])),r[2]==="date"&&e[r[1]]&&(e[r[1]]=F3(e[r[1]]))}return e}var gg=[["Application","Application","string"],["AppVersion","AppVersion","string"],["Company","Company","string"],["DocSecurity","DocSecurity","string"],["Manager","Manager","string"],["HyperlinksChanged","HyperlinksChanged","bool"],["SharedDoc","SharedDoc","bool"],["LinksUpToDate","LinksUpToDate","bool"],["ScaleCrop","ScaleCrop","bool"],["HeadingPairs","HeadingPairs","raw"],["TitlesOfParts","TitlesOfParts","raw"]];function Cu(n,e,t,r){var a=[];if(typeof n=="string")a=Fo(n,r);else for(var i=0;i<n.length;++i)a=a.concat(n[i].map(function(f){return{v:f}}));var o=typeof e=="string"?Fo(e,r).map(function(f){return f.v}):e,s=0,l=0;if(o.length>0)for(var u=0;u!==a.length;u+=2){switch(l=+a[u+1].v,a[u].v){case"Worksheets":case"工作表":case"Листы":case"أوراق العمل":case"ワークシート":case"גליונות עבודה":case"Arbeitsblätter":case"Çalışma Sayfaları":case"Feuilles de calcul":case"Fogli di lavoro":case"Folhas de cálculo":case"Planilhas":case"Regneark":case"Hojas de cálculo":case"Werkbladen":t.Worksheets=l,t.SheetNames=o.slice(s,s+l);break;case"Named Ranges":case"Rangos con nombre":case"名前付き一覧":case"Benannte Bereiche":case"Navngivne områder":t.NamedRanges=l,t.DefinedNames=o.slice(s,s+l);break;case"Charts":case"Diagramme":t.Chartsheets=l,t.ChartNames=o.slice(s,s+l);break}s+=l}}function vg(n,e,t){var r={};return e||(e={}),n=$2(n),gg.forEach(function(a){var i=(n.match(R8(a[0]))||[])[1];switch(a[2]){case"string":i&&(e[a[1]]=L2(i));break;case"bool":e[a[1]]=i==="true";break;case"raw":var o=n.match(new RegExp("<"+a[0]+"[^>]*>([\\s\\S]*?)</"+a[0]+">"));o&&o.length>0&&(r[a[1]]=o[1]);break}}),r.HeadingPairs&&r.TitlesOfParts&&Cu(r.HeadingPairs,r.TitlesOfParts,e,t),e}var _g=/<[^>]+>[^<]*/g;function xg(n,e){var t={},r="",a=n.match(_g);if(a)for(var i=0;i!=a.length;++i){var o=a[i],s=v2(o);switch(s[0]){case"<?xml":break;case"<Properties":break;case"<property":r=L2(s.name);break;case"</property>":r=null;break;default:if(o.indexOf("<vt:")===0){var l=o.split(">"),u=l[0].slice(4),f=l[1];switch(u){case"lpstr":case"bstr":case"lpwstr":t[r]=L2(f);break;case"bool":t[r]=q2(f);break;case"i1":case"i2":case"i4":case"i8":case"int":case"uint":t[r]=parseInt(f,10);break;case"r4":case"r8":case"decimal":t[r]=parseFloat(f);break;case"filetime":case"date":t[r]=F3(f);break;case"cy":case"error":t[r]=L2(f);break;default:if(u.slice(-1)=="/")break;e.WTF&&typeof console!="undefined"&&console.warn("Unexpected",o,u,l)}}else if(o.slice(0,2)!=="</"){if(e.WTF)throw new Error(o)}}}return t}var yg={Title:"Title",Subject:"Subject",Author:"Author",Keywords:"Keywords",Comments:"Description",LastAuthor:"LastAuthor",RevNumber:"Revision",Application:"AppName",LastPrinted:"LastPrinted",CreatedDate:"Created",ModifiedDate:"LastSaved",Category:"Category",Manager:"Manager",Company:"Company",AppVersion:"Version",ContentStatus:"ContentStatus",Identifier:"Identifier",Language:"Language"},mt;function bg(n,e,t){mt||(mt=ma(yg)),e=mt[e]||e,n[e]=t}function Ea(n){var e=n.read_shift(4),t=n.read_shift(4);return new Date((t/1e7*Math.pow(2,32)+e/1e7-11644473600)*1e3).toISOString().replace(/\.000/,"")}function Mu(n,e,t){var r=n.l,a=n.read_shift(0,"lpstr-cp");if(t)for(;n.l-r&3;)++n.l;return a}function Du(n,e,t){var r=n.read_shift(0,"lpwstr");return t&&(n.l+=4-(r.length+1&3)&3),r}function ku(n,e,t){return e===31?Du(n):Mu(n,e,t)}function wn(n,e,t){return ku(n,e,t===!1?0:4)}function Sg(n,e){if(!e)throw new Error("VtUnalignedString must have positive length");return ku(n,e,0)}function wg(n){for(var e=n.read_shift(4),t=[],r=0;r!=e;++r){var a=n.l;t[r]=n.read_shift(0,"lpwstr").replace(c0,""),n.l-a&2&&(n.l+=2)}return t}function Ag(n){for(var e=n.read_shift(4),t=[],r=0;r!=e;++r)t[r]=n.read_shift(0,"lpstr-cp").replace(c0,"");return t}function Tg(n){var e=n.l,t=g7(n,Au);n[n.l]==0&&n[n.l+1]==0&&n.l-e&2&&(n.l+=2);var r=g7(n,m0);return[t,r]}function Eg(n){for(var e=n.read_shift(4),t=[],r=0;r<e/2;++r)t.push(Tg(n));return t}function $o(n,e){for(var t=n.read_shift(4),r={},a=0;a!=t;++a){var i=n.read_shift(4),o=n.read_shift(4);r[i]=n.read_shift(o,e===1200?"utf16le":"utf8").replace(c0,"").replace(n8,"!"),e===1200&&o%2&&(n.l+=2)}return n.l&3&&(n.l=n.l>>2+1<<2),r}function Ru(n){var e=n.read_shift(4),t=n.slice(n.l,n.l+e);return n.l+=e,(e&3)>0&&(n.l+=4-(e&3)&3),t}function Cg(n){var e={};return e.Size=n.read_shift(4),n.l+=e.Size+3-(e.Size-1)%4,e}function g7(n,e,t){var r=n.read_shift(2),a,i=t||{};if(n.l+=2,e!==Wo&&r!==e&&ig.indexOf(e)===-1&&!((e&65534)==4126&&(r&65534)==4126))throw new Error("Expected type "+e+" saw "+r);switch(e===Wo?r:e){case 2:return a=n.read_shift(2,"i"),i.raw||(n.l+=2),a;case 3:return a=n.read_shift(4,"i"),a;case 11:return n.read_shift(4)!==0;case 19:return a=n.read_shift(4),a;case 30:return Mu(n,r,4).replace(c0,"");case 31:return Du(n);case 64:return Ea(n);case 65:return Ru(n);case 71:return Cg(n);case 80:return wn(n,r,!i.raw).replace(c0,"");case 81:return Sg(n,r).replace(c0,"");case 4108:return Eg(n);case 4126:case 4127:return r==4127?wg(n):Ag(n);default:throw new Error("TypedPropertyValue unrecognized type "+e+" "+r)}}function Yo(n,e){var t=n.l,r=n.read_shift(4),a=n.read_shift(4),i=[],o=0,s=0,l=-1,u={};for(o=0;o!=a;++o){var f=n.read_shift(4),d=n.read_shift(4);i[o]=[f,d+t]}i.sort(function(S,b){return S[1]-b[1]});var h={};for(o=0;o!=a;++o){if(n.l!==i[o][1]){var m=!0;if(o>0&&e)switch(e[i[o-1][0]].t){case 2:n.l+2===i[o][1]&&(n.l+=2,m=!1);break;case 80:n.l<=i[o][1]&&(n.l=i[o][1],m=!1);break;case 4108:n.l<=i[o][1]&&(n.l=i[o][1],m=!1);break}if((!e||o==0)&&n.l<=i[o][1]&&(m=!1,n.l=i[o][1]),m)throw new Error("Read Error: Expected address "+i[o][1]+" at "+n.l+" :"+o)}if(e){var _=e[i[o][0]];if(h[_.n]=g7(n,_.t,{raw:!0}),_.p==="version"&&(h[_.n]=String(h[_.n]>>16)+"."+("0000"+String(h[_.n]&65535)).slice(-4)),_.n=="CodePage")switch(h[_.n]){case 0:h[_.n]=1252;case 874:case 932:case 936:case 949:case 950:case 1250:case 1251:case 1253:case 1254:case 1255:case 1256:case 1257:case 1258:case 1e4:case 1200:case 1201:case 1252:case 65e3:case-536:case 65001:case-535:g4(s=h[_.n]>>>0&65535);break;default:throw new Error("Unsupported CodePage: "+h[_.n])}}else if(i[o][0]===1){if(s=h.CodePage=g7(n,Ta),g4(s),l!==-1){var g=n.l;n.l=i[l][1],u=$o(n,s),n.l=g}}else if(i[o][0]===0){if(s===0){l=o,n.l=i[o+1][1];continue}u=$o(n,s)}else{var v=u[i[o][0]],y;switch(n[n.l]){case 65:n.l+=4,y=Ru(n);break;case 30:n.l+=4,y=wn(n,n[n.l-4]).replace(/\u0000+$/,"");break;case 31:n.l+=4,y=wn(n,n[n.l-4]).replace(/\u0000+$/,"");break;case 3:n.l+=4,y=n.read_shift(4,"i");break;case 19:n.l+=4,y=n.read_shift(4);break;case 5:n.l+=4,y=n.read_shift(8,"f");break;case 11:n.l+=4,y=d3(n,4);break;case 64:n.l+=4,y=F3(Ea(n));break;default:throw new Error("unparsed value: "+n[n.l])}h[v]=y}}return n.l=t+r,h}function Xo(n,e,t){var r=n.content;if(!r)return{};U3(r,0);var a,i,o,s,l=0;r.chk("feff","Byte Order: "),r.read_shift(2);var u=r.read_shift(4),f=r.read_shift(16);if(f!==k2.utils.consts.HEADER_CLSID&&f!==t)throw new Error("Bad PropertySet CLSID "+f);if(a=r.read_shift(4),a!==1&&a!==2)throw new Error("Unrecognized #Sets: "+a);if(i=r.read_shift(16),s=r.read_shift(4),a===1&&s!==r.l)throw new Error("Length mismatch: "+s+" !== "+r.l);a===2&&(o=r.read_shift(16),l=r.read_shift(4));var d=Yo(r,e),h={SystemIdentifier:u};for(var m in d)h[m]=d[m];if(h.FMTID=i,a===1)return h;if(l-r.l==2&&(r.l+=2),r.l!==l)throw new Error("Length mismatch 2: "+r.l+" !== "+l);var _;try{_=Yo(r,null)}catch(g){}for(m in _)h[m]=_[m];return h.FMTID=[i,o],h}function ue(n,e){return n.read_shift(e),null}function Mg(n,e,t){for(var r=[],a=n.l+e;n.l<a;)r.push(t(n,a-n.l));if(a!==n.l)throw new Error("Slurp error");return r}function d3(n,e){return n.read_shift(e)===1}function y3(n){return n.read_shift(2,"u")}function Iu(n,e){return Mg(n,e,y3)}function Dg(n){var e=n.read_shift(1),t=n.read_shift(1);return t===1?e:e===1}function q8(n,e,t){var r=n.read_shift(t&&t.biff>=12?2:1),a="sbcs-cont";if(t&&t.biff>=8,!t||t.biff==8){var i=n.read_shift(1);i&&(a="dbcs-cont")}else t.biff==12&&(a="wstr");t.biff>=2&&t.biff<=5&&(a="cpstr");var o=r?n.read_shift(r,a):"";return o}function kg(n){var e=n.read_shift(2),t=n.read_shift(1),r=t&4,a=t&8,i=1+(t&1),o=0,s,l={};a&&(o=n.read_shift(2)),r&&(s=n.read_shift(4));var u=i==2?"dbcs-cont":"sbcs-cont",f=e===0?"":n.read_shift(e,u);return a&&(n.l+=4*o),r&&(n.l+=s),l.t=f,a||(l.raw="<t>"+l.t+"</t>",l.r=l.t),l}function x9(n,e,t){var r;if(t){if(t.biff>=2&&t.biff<=5)return n.read_shift(e,"cpstr");if(t.biff>=12)return n.read_shift(e,"dbcs-cont")}var a=n.read_shift(1);return a===0?r=n.read_shift(e,"sbcs-cont"):r=n.read_shift(e,"dbcs-cont"),r}function Q8(n,e,t){var r=n.read_shift(t&&t.biff==2?1:2);return r===0?(n.l++,""):x9(n,r,t)}function k9(n,e,t){if(t.biff>5)return Q8(n,e,t);var r=n.read_shift(1);return r===0?(n.l++,""):n.read_shift(r,t.biff<=4||!n.lens?"cpstr":"sbcs-cont")}function Rg(n){var e=n.read_shift(1);n.l++;var t=n.read_shift(2);return n.l+=2,[e,t]}function Ig(n){var e=n.read_shift(4),t=n.l,r=!1;e>24&&(n.l+=e-24,n.read_shift(16)==="795881f43b1d7f48af2c825dc4852763"&&(r=!0),n.l=t);var a=n.read_shift((r?e-24:e)>>1,"utf16le").replace(c0,"");return r&&(n.l+=24),a}function Og(n){for(var e=n.read_shift(2),t="";e-- >0;)t+="../";var r=n.read_shift(0,"lpstr-ansi");if(n.l+=2,n.read_shift(2)!=57005)throw new Error("Bad FileMoniker");var a=n.read_shift(4);if(a===0)return t+r.replace(/\\/g,"/");var i=n.read_shift(4);if(n.read_shift(2)!=3)throw new Error("Bad FileMoniker");var o=n.read_shift(i>>1,"utf16le").replace(c0,"");return t+o}function Lg(n,e){var t=n.read_shift(16);switch(t){case"e0c9ea79f9bace118c8200aa004ba90b":return Ig(n);case"0303000000000000c000000000000046":return Og(n);default:throw new Error("Unsupported Moniker "+t)}}function v6(n){var e=n.read_shift(4),t=e>0?n.read_shift(e,"utf16le").replace(c0,""):"";return t}function Fg(n,e){var t=n.l+e,r=n.read_shift(4);if(r!==2)throw new Error("Unrecognized streamVersion: "+r);var a=n.read_shift(2);n.l+=2;var i,o,s,l,u="",f,d;a&16&&(i=v6(n,t-n.l)),a&128&&(o=v6(n,t-n.l)),(a&257)===257&&(s=v6(n,t-n.l)),(a&257)===1&&(l=Lg(n,t-n.l)),a&8&&(u=v6(n,t-n.l)),a&32&&(f=n.read_shift(16)),a&64&&(d=Ea(n)),n.l=t;var h=o||s||l||"";h&&u&&(h+="#"+u),h||(h="#"+u),a&2&&h.charAt(0)=="/"&&h.charAt(1)!="/"&&(h="file://"+h);var m={Target:h};return f&&(m.guid=f),d&&(m.time=d),i&&(m.Tooltip=i),m}function Ou(n){var e=n.read_shift(1),t=n.read_shift(1),r=n.read_shift(1),a=n.read_shift(1);return[e,t,r,a]}function Lu(n,e){var t=Ou(n);return t[3]=0,t}function F4(n){var e=n.read_shift(2),t=n.read_shift(2),r=n.read_shift(2);return{r:e,c:t,ixfe:r}}function Pg(n){var e=n.read_shift(2),t=n.read_shift(2);return n.l+=8,{type:e,flags:t}}function Ng(n,e,t){return e===0?"":k9(n,e,t)}function zg(n,e,t){var r=t.biff>8?4:2,a=n.read_shift(r),i=n.read_shift(r,"i"),o=n.read_shift(r,"i");return[a,i,o]}function Fu(n){var e=n.read_shift(2),t=Aa(n);return[e,t]}function Ug(n,e,t){n.l+=4,e-=4;var r=n.l+e,a=q8(n,e,t),i=n.read_shift(2);if(r-=n.l,i!==r)throw new Error("Malformed AddinUdf: padding = "+r+" != "+i);return n.l+=i,a}function W7(n){var e=n.read_shift(2),t=n.read_shift(2),r=n.read_shift(2),a=n.read_shift(2);return{s:{c:r,r:e},e:{c:a,r:t}}}function Pu(n){var e=n.read_shift(2),t=n.read_shift(2),r=n.read_shift(1),a=n.read_shift(1);return{s:{c:r,r:e},e:{c:a,r:t}}}var Bg=Pu;function Nu(n){n.l+=4;var e=n.read_shift(2),t=n.read_shift(2),r=n.read_shift(2);return n.l+=12,[t,e,r]}function Vg(n){var e={};return n.l+=4,n.l+=16,e.fSharedNote=n.read_shift(2),n.l+=4,e}function Gg(n){var e={};return n.l+=4,n.cf=n.read_shift(2),e}function j3(n){n.l+=2,n.l+=n.read_shift(2)}var Wg={0:j3,4:j3,5:j3,6:j3,7:Gg,8:j3,9:j3,10:j3,11:j3,12:j3,13:Vg,14:j3,15:j3,16:j3,17:j3,18:j3,19:j3,20:j3,21:Nu};function jg(n,e){for(var t=n.l+e,r=[];n.l<t;){var a=n.read_shift(2);n.l-=2;try{r.push(Wg[a](n,t-n.l))}catch(i){return n.l=t,r}}return n.l!=t&&(n.l=t),r}function _6(n,e){var t={BIFFVer:0,dt:0};switch(t.BIFFVer=n.read_shift(2),e-=2,e>=2&&(t.dt=n.read_shift(2),n.l-=2),t.BIFFVer){case 1536:case 1280:case 1024:case 768:case 512:case 2:case 7:break;default:if(e>6)throw new Error("Unexpected BIFF Ver "+t.BIFFVer)}return n.read_shift(e),t}function Hg(n,e){return e===0||n.read_shift(2),1200}function $g(n,e,t){if(t.enc)return n.l+=e,"";var r=n.l,a=k9(n,0,t);return n.read_shift(e+r-n.l),a}function Yg(n,e,t){var r=t&&t.biff==8||e==2?n.read_shift(2):(n.l+=e,0);return{fDialog:r&16,fBelow:r&64,fRight:r&128}}function Xg(n,e,t){var r=n.read_shift(4),a=n.read_shift(1)&3,i=n.read_shift(1);switch(i){case 0:i="Worksheet";break;case 1:i="Macrosheet";break;case 2:i="Chartsheet";break;case 6:i="VBAModule";break}var o=q8(n,0,t);return o.length===0&&(o="Sheet1"),{pos:r,hs:a,dt:i,name:o}}function Jg(n,e){for(var t=n.l+e,r=n.read_shift(4),a=n.read_shift(4),i=[],o=0;o!=a&&n.l<t;++o)i.push(kg(n));return i.Count=r,i.Unique=a,i}function Zg(n,e){var t={};return t.dsst=n.read_shift(2),n.l+=e-2,t}function qg(n){var e={};e.r=n.read_shift(2),e.c=n.read_shift(2),e.cnt=n.read_shift(2)-e.c;var t=n.read_shift(2);n.l+=4;var r=n.read_shift(1);return n.l+=3,r&7&&(e.level=r&7),r&32&&(e.hidden=!0),r&64&&(e.hpt=t/20),e}function Qg(n){var e=Pg(n);if(e.type!=2211)throw new Error("Invalid Future Record "+e.type);var t=n.read_shift(4);return t!==0}function Kg(n){return n.read_shift(2),n.read_shift(4)}function Jo(n,e,t){var r=0;t&&t.biff==2||(r=n.read_shift(2));var a=n.read_shift(2);t&&t.biff==2&&(r=1-(a>>15),a&=32767);var i={Unsynced:r&1,DyZero:(r&2)>>1,ExAsc:(r&4)>>2,ExDsc:(r&8)>>3};return[i,a]}function ev(n){var e=n.read_shift(2),t=n.read_shift(2),r=n.read_shift(2),a=n.read_shift(2),i=n.read_shift(2),o=n.read_shift(2),s=n.read_shift(2),l=n.read_shift(2),u=n.read_shift(2);return{Pos:[e,t],Dim:[r,a],Flags:i,CurTab:o,FirstTab:s,Selected:l,TabRatio:u}}function tv(n,e,t){if(t&&t.biff>=2&&t.biff<5)return{};var r=n.read_shift(2);return{RTL:r&64}}function nv(){}function rv(n,e,t){var r={dyHeight:n.read_shift(2),fl:n.read_shift(2)};switch(t&&t.biff||8){case 2:break;case 3:case 4:n.l+=2;break;default:n.l+=10;break}return r.name=q8(n,0,t),r}function av(n){var e=F4(n);return e.isst=n.read_shift(4),e}function iv(n,e,t){t.biffguess&&t.biff==2&&(t.biff=5);var r=n.l+e,a=F4(n);t.biff==2&&n.l++;var i=Q8(n,r-n.l,t);return a.val=i,a}function ov(n,e,t){var r=n.read_shift(2),a=k9(n,0,t);return[r,a]}var sv=k9;function Zo(n,e,t){var r=n.l+e,a=t.biff==8||!t.biff?4:2,i=n.read_shift(a),o=n.read_shift(a),s=n.read_shift(2),l=n.read_shift(2);return n.l=r,{s:{r:i,c:s},e:{r:o,c:l}}}function lv(n){var e=n.read_shift(2),t=n.read_shift(2),r=Fu(n);return{r:e,c:t,ixfe:r[0],rknum:r[1]}}function cv(n,e){for(var t=n.l+e-2,r=n.read_shift(2),a=n.read_shift(2),i=[];n.l<t;)i.push(Fu(n));if(n.l!==t)throw new Error("MulRK read error");var o=n.read_shift(2);if(i.length!=o-a+1)throw new Error("MulRK length mismatch");return{r,c:a,C:o,rkrec:i}}function uv(n,e){for(var t=n.l+e-2,r=n.read_shift(2),a=n.read_shift(2),i=[];n.l<t;)i.push(n.read_shift(2));if(n.l!==t)throw new Error("MulBlank read error");var o=n.read_shift(2);if(i.length!=o-a+1)throw new Error("MulBlank length mismatch");return{r,c:a,C:o,ixfe:i}}function fv(n,e,t,r){var a={},i=n.read_shift(4),o=n.read_shift(4),s=n.read_shift(4),l=n.read_shift(2);return a.patternType=lg[s>>26],r.cellStyles&&(a.alc=i&7,a.fWrap=i>>3&1,a.alcV=i>>4&7,a.fJustLast=i>>7&1,a.trot=i>>8&255,a.cIndent=i>>16&15,a.fShrinkToFit=i>>20&1,a.iReadOrder=i>>22&2,a.fAtrNum=i>>26&1,a.fAtrFnt=i>>27&1,a.fAtrAlc=i>>28&1,a.fAtrBdr=i>>29&1,a.fAtrPat=i>>30&1,a.fAtrProt=i>>31&1,a.dgLeft=o&15,a.dgRight=o>>4&15,a.dgTop=o>>8&15,a.dgBottom=o>>12&15,a.icvLeft=o>>16&127,a.icvRight=o>>23&127,a.grbitDiag=o>>30&3,a.icvTop=s&127,a.icvBottom=s>>7&127,a.icvDiag=s>>14&127,a.dgDiag=s>>21&15,a.icvFore=l&127,a.icvBack=l>>7&127,a.fsxButton=l>>14&1),a}function dv(n,e,t){var r={};return r.ifnt=n.read_shift(2),r.numFmtId=n.read_shift(2),r.flags=n.read_shift(2),r.fStyle=r.flags>>2&1,e-=6,r.data=fv(n,e,r.fStyle,t),r}function hv(n){n.l+=4;var e=[n.read_shift(2),n.read_shift(2)];if(e[0]!==0&&e[0]--,e[1]!==0&&e[1]--,e[0]>7||e[1]>7)throw new Error("Bad Gutters: "+e.join("|"));return e}function qo(n,e,t){var r=F4(n);(t.biff==2||e==9)&&++n.l;var a=Dg(n);return r.val=a,r.t=a===!0||a===!1?"b":"e",r}function pv(n,e,t){t.biffguess&&t.biff==2&&(t.biff=5);var r=F4(n),a=J3(n);return r.val=a,r}var Qo=Ng;function mv(n,e,t){var r=n.l+e,a=n.read_shift(2),i=n.read_shift(2);if(t.sbcch=i,i==1025||i==14849)return[i,a];if(i<1||i>255)throw new Error("Unexpected SupBook type: "+i);for(var o=x9(n,i),s=[];r>n.l;)s.push(Q8(n));return[i,a,o,s]}function Ko(n,e,t){var r=n.read_shift(2),a,i={fBuiltIn:r&1,fWantAdvise:r>>>1&1,fWantPict:r>>>2&1,fOle:r>>>3&1,fOleLink:r>>>4&1,cf:r>>>5&1023,fIcon:r>>>15&1};return t.sbcch===14849&&(a=Ug(n,e-2,t)),i.body=a||n.read_shift(e-2),typeof a=="string"&&(i.Name=a),i}var gv=["_xlnm.Consolidate_Area","_xlnm.Auto_Open","_xlnm.Auto_Close","_xlnm.Extract","_xlnm.Database","_xlnm.Criteria","_xlnm.Print_Area","_xlnm.Print_Titles","_xlnm.Recorder","_xlnm.Data_Form","_xlnm.Auto_Activate","_xlnm.Auto_Deactivate","_xlnm.Sheet_Title","_xlnm._FilterDatabase"];function es(n,e,t){var r=n.l+e,a=n.read_shift(2),i=n.read_shift(1),o=n.read_shift(1),s=n.read_shift(t&&t.biff==2?1:2),l=0;(!t||t.biff>=5)&&(t.biff!=5&&(n.l+=2),l=n.read_shift(2),t.biff==5&&(n.l+=2),n.l+=4);var u=x9(n,o,t);a&32&&(u=gv[u.charCodeAt(0)]);var f=r-n.l;t&&t.biff==2&&--f;var d=r==n.l||s===0||!(f>0)?[]:qy(n,f,t,s);return{chKey:i,Name:u,itab:l,rgce:d}}function zu(n,e,t){if(t.biff<8)return vv(n,e,t);for(var r=[],a=n.l+e,i=n.read_shift(t.biff>8?4:2);i--!==0;)r.push(zg(n,t.biff>8?12:6,t));if(n.l!=a)throw new Error("Bad ExternSheet: "+n.l+" != "+a);return r}function vv(n,e,t){n[n.l+1]==3&&n[n.l]++;var r=q8(n,e,t);return r.charCodeAt(0)==3?r.slice(1):r}function _v(n,e,t){if(t.biff<8){n.l+=e;return}var r=n.read_shift(2),a=n.read_shift(2),i=x9(n,r,t),o=x9(n,a,t);return[i,o]}function xv(n,e,t){var r=Pu(n);n.l++;var a=n.read_shift(1);return e-=8,[Qy(n,e,t),a,r]}function ts(n,e,t){var r=Bg(n);switch(t.biff){case 2:n.l++,e-=7;break;case 3:case 4:n.l+=2,e-=8;break;default:n.l+=6,e-=12}return[r,Jy(n,e,t)]}function yv(n){var e=n.read_shift(4)!==0,t=n.read_shift(4)!==0,r=n.read_shift(4);return[e,t,r]}function bv(n,e,t){if(!(t.biff<8)){var r=n.read_shift(2),a=n.read_shift(2),i=n.read_shift(2),o=n.read_shift(2),s=k9(n,0,t);return t.biff<8&&n.read_shift(1),[{r,c:a},s,o,i]}}function Sv(n,e,t){return bv(n,e,t)}function wv(n,e){for(var t=[],r=n.read_shift(2);r--;)t.push(W7(n));return t}function Av(n,e,t){if(t&&t.biff<8)return Ev(n,e,t);var r=Nu(n),a=jg(n,e-22,r[1]);return{cmo:r,ft:a}}var Tv={8:function(n,e){var t=n.l+e;n.l+=10;var r=n.read_shift(2);n.l+=4,n.l+=2,n.l+=2,n.l+=2,n.l+=4;var a=n.read_shift(1);return n.l+=a,n.l=t,{fmt:r}}};function Ev(n,e,t){n.l+=4;var r=n.read_shift(2),a=n.read_shift(2),i=n.read_shift(2);n.l+=2,n.l+=2,n.l+=2,n.l+=2,n.l+=2,n.l+=2,n.l+=2,n.l+=2,n.l+=2,n.l+=6,e-=36;var o=[];return o.push((Tv[r]||n0)(n,e,t)),{cmo:[a,r,i],ft:o}}function Cv(n,e,t){var r=n.l,a="";try{n.l+=4;var i=(t.lastobj||{cmo:[0,0]}).cmo[1],o;[0,5,7,11,12,14].indexOf(i)==-1?n.l+=6:o=Rg(n,6,t);var s=n.read_shift(2);n.read_shift(2),y3(n,2);var l=n.read_shift(2);n.l+=l;for(var u=1;u<n.lens.length-1;++u){if(n.l-r!=n.lens[u])throw new Error("TxO: bad continue record");var f=n[n.l],d=x9(n,n.lens[u+1]-n.lens[u]-1);if(a+=d,a.length>=(f?s:2*s))break}if(a.length!==s&&a.length!==s*2)throw new Error("cchText: "+s+" != "+a.length);return n.l=r+e,{t:a}}catch(h){return n.l=r+e,{t:a}}}function Mv(n,e){var t=W7(n);n.l+=16;var r=Fg(n,e-24);return[t,r]}function Dv(n,e){n.read_shift(2);var t=W7(n),r=n.read_shift((e-10)/2,"dbcs-cont");return r=r.replace(c0,""),[t,r]}function kv(n){var e=[0,0],t;return t=n.read_shift(2),e[0]=jo[t]||t,t=n.read_shift(2),e[1]=jo[t]||t,e}function Rv(n){for(var e=n.read_shift(2),t=[];e-- >0;)t.push(Lu(n));return t}function Iv(n){for(var e=n.read_shift(2),t=[];e-- >0;)t.push(Lu(n));return t}function Ov(n){n.l+=2;var e={cxfs:0,crc:0};return e.cxfs=n.read_shift(2),e.crc=n.read_shift(4),e}function Uu(n,e,t){if(!t.cellStyles)return n0(n,e);var r=t&&t.biff>=12?4:2,a=n.read_shift(r),i=n.read_shift(r),o=n.read_shift(r),s=n.read_shift(r),l=n.read_shift(2);r==2&&(n.l+=2);var u={s:a,e:i,w:o,ixfe:s,flags:l};return(t.biff>=5||!t.biff)&&(u.level=l>>8&7),u}function Lv(n,e){var t={};return e<32||(n.l+=16,t.header=J3(n),t.footer=J3(n),n.l+=2),t}function Fv(n,e,t){var r={area:!1};if(t.biff!=5)return n.l+=e,r;var a=n.read_shift(1);return n.l+=3,a&16&&(r.area=!0),r}var Pv=F4,Nv=Iu,zv=Q8;function Uv(n){var e=n.read_shift(2),t=n.read_shift(2),r=n.read_shift(4),a={fmt:e,env:t,len:r,data:n.slice(n.l,n.l+r)};return n.l+=r,a}function Bv(n,e,t){t.biffguess&&t.biff==5&&(t.biff=2);var r=F4(n);++n.l;var a=k9(n,e-7,t);return r.t="str",r.val=a,r}function Vv(n){var e=F4(n);++n.l;var t=J3(n);return e.t="n",e.val=t,e}function Gv(n){var e=F4(n);++n.l;var t=n.read_shift(2);return e.t="n",e.val=t,e}function Wv(n){var e=n.read_shift(1);return e===0?(n.l++,""):n.read_shift(e,"sbcs-cont")}function jv(n,e){n.l+=6,n.l+=2,n.l+=1,n.l+=3,n.l+=1,n.l+=e-13}function Hv(n,e,t){var r=n.l+e,a=F4(n),i=n.read_shift(2),o=x9(n,i,t);return n.l=r,a.t="str",a.val=o,a}var $v=[2,3,48,49,131,139,140,245],ns=function(){var n={1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127,8:865,9:437,10:850,11:437,13:437,14:850,15:437,16:850,17:437,18:850,19:932,20:850,21:437,22:850,23:865,24:437,25:437,26:850,27:437,28:863,29:850,31:852,34:852,35:852,36:860,37:850,38:866,55:850,64:852,77:936,78:949,79:950,80:874,87:1252,88:1252,89:1252,108:863,134:737,135:852,136:857,204:1257,255:16969},e=ma({1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127});function t(s,l){var u=[],f=Pe(1);switch(l.type){case"base64":f=p4(z0(s));break;case"binary":f=p4(s);break;case"buffer":case"array":f=s;break}U3(f,0);var d=f.read_shift(1),h=!!(d&136),m=!1,_=!1;switch(d){case 2:break;case 3:break;case 48:m=!0,h=!0;break;case 49:m=!0,h=!0;break;case 131:break;case 139:break;case 140:_=!0;break;case 245:break;default:throw new Error("DBF Unsupported Version: "+d.toString(16))}var g=0,v=521;d==2&&(g=f.read_shift(2)),f.l+=3,d!=2&&(g=f.read_shift(4)),g>1048576&&(g=1e6),d!=2&&(v=f.read_shift(2));var y=f.read_shift(2),S=l.codepage||1252;d!=2&&(f.l+=16,f.read_shift(1),f[f.l]!==0&&(S=n[f[f.l]]),f.l+=1,f.l+=2),_&&(f.l+=36);for(var b=[],w={},T=Math.min(f.length,d==2?521:v-10-(m?264:0)),A=_?32:11;f.l<T&&f[f.l]!=13;)switch(w={},w.name=ye.utils.decode(S,f.slice(f.l,f.l+A)).replace(/[\u0000\r\n].*$/g,""),f.l+=A,w.type=String.fromCharCode(f.read_shift(1)),d!=2&&!_&&(w.offset=f.read_shift(4)),w.len=f.read_shift(1),d==2&&(w.offset=f.read_shift(2)),w.dec=f.read_shift(1),w.name.length&&b.push(w),d!=2&&(f.l+=_?13:14),w.type){case"B":(!m||w.len!=8)&&l.WTF&&console.log("Skipping "+w.name+":"+w.type);break;case"G":case"P":l.WTF&&console.log("Skipping "+w.name+":"+w.type);break;case"+":case"0":case"@":case"C":case"D":case"F":case"I":case"L":case"M":case"N":case"O":case"T":case"Y":break;default:throw new Error("Unknown Field Type: "+w.type)}if(f[f.l]!==13&&(f.l=v-1),f.read_shift(1)!==13)throw new Error("DBF Terminator not found "+f.l+" "+f[f.l]);f.l=v;var C=0,E=0;for(u[0]=[],E=0;E!=b.length;++E)u[0][E]=b[E].name;for(;g-- >0;){if(f[f.l]===42){f.l+=y;continue}for(++f.l,u[++C]=[],E=0,E=0;E!=b.length;++E){var M=f.slice(f.l,f.l+b[E].len);f.l+=b[E].len,U3(M,0);var N=ye.utils.decode(S,M);switch(b[E].type){case"C":N.trim().length&&(u[C][E]=N.replace(/\s+$/,""));break;case"D":N.length===8?u[C][E]=new Date(+N.slice(0,4),+N.slice(4,6)-1,+N.slice(6,8)):u[C][E]=N;break;case"F":u[C][E]=parseFloat(N.trim());break;case"+":case"I":u[C][E]=_?M.read_shift(-4,"i")^2147483648:M.read_shift(4,"i");break;case"L":switch(N.trim().toUpperCase()){case"Y":case"T":u[C][E]=!0;break;case"N":case"F":u[C][E]=!1;break;case"":case"?":break;default:throw new Error("DBF Unrecognized L:|"+N+"|")}break;case"M":if(!h)throw new Error("DBF Unexpected MEMO for type "+d.toString(16));u[C][E]="##MEMO##"+(_?parseInt(N.trim(),10):M.read_shift(4));break;case"N":N=N.replace(/\u0000/g,"").trim(),N&&N!="."&&(u[C][E]=+N||0);break;case"@":u[C][E]=new Date(M.read_shift(-8,"f")-621356832e5);break;case"T":u[C][E]=new Date((M.read_shift(4)-2440588)*864e5+M.read_shift(4));break;case"Y":u[C][E]=M.read_shift(4,"i")/1e4+M.read_shift(4,"i")/1e4*Math.pow(2,32);break;case"O":u[C][E]=-M.read_shift(-8,"f");break;case"B":if(m&&b[E].len==8){u[C][E]=M.read_shift(8,"f");break}case"G":case"P":M.l+=b[E].len;break;case"0":if(b[E].name==="_NullFlags")break;default:throw new Error("DBF Unsupported data type "+b[E].type)}}}if(d!=2&&f.l<f.length&&f[f.l++]!=26)throw new Error("DBF EOF Marker missing "+(f.l-1)+" of "+f.length+" "+f[f.l-1].toString(16));return l&&l.sheetRows&&(u=u.slice(0,l.sheetRows)),l.DBF=b,u}function r(s,l){var u=l||{};u.dateNF||(u.dateNF="yyyymmdd");var f=V5(t(s,u),u);return f["!cols"]=u.DBF.map(function(d){return{wch:d.len,DBF:d}}),delete u.DBF,f}function a(s,l){try{return je(r(s,l),l)}catch(u){if(l&&l.WTF)throw u}return{SheetNames:[],Sheets:{}}}var i={B:8,C:250,L:1,D:8,"?":0,"":0};function o(s,l){var u=l||{};if(+u.codepage>=0&&g4(+u.codepage),u.type=="string")throw new Error("Cannot write DBF to JS string");var f=yn(),d=kn(s,{header:1,raw:!0,cellDates:!0}),h=d[0],m=d.slice(1),_=s["!cols"]||[],g=0,v=0,y=0,S=1;for(g=0;g<h.length;++g){if(((_[g]||{}).DBF||{}).name){h[g]=_[g].DBF.name,++y;continue}if(h[g]!=null){if(++y,typeof h[g]=="number"&&(h[g]=h[g].toString(10)),typeof h[g]!="string")throw new Error("DBF Invalid column name "+h[g]+" |"+typeof h[g]+"|");if(h.indexOf(h[g])!==g){for(v=0;v<1024;++v)if(h.indexOf(h[g]+"_"+v)==-1){h[g]+="_"+v;break}}}}var b=l3(s["!ref"]),w=[],T=[],A=[];for(g=0;g<=b.e.c-b.s.c;++g){var C="",E="",M=0,N=[];for(v=0;v<m.length;++v)m[v][g]!=null&&N.push(m[v][g]);if(N.length==0||h[g]==null){w[g]="?";continue}for(v=0;v<N.length;++v){switch(typeof N[v]){case"number":E="B";break;case"string":E="C";break;case"boolean":E="L";break;case"object":E=N[v]instanceof Date?"D":"C";break;default:E="C"}M=Math.max(M,String(N[v]).length),C=C&&C!=E?"C":E}M>250&&(M=250),E=((_[g]||{}).DBF||{}).type,E=="C"&&_[g].DBF.len>M&&(M=_[g].DBF.len),C=="B"&&E=="N"&&(C="N",A[g]=_[g].DBF.dec,M=_[g].DBF.len),T[g]=C=="C"||E=="N"?M:i[C]||0,S+=T[g],w[g]=C}var P=f.next(32);for(P.write_shift(4,318902576),P.write_shift(4,m.length),P.write_shift(2,296+32*y),P.write_shift(2,S),g=0;g<4;++g)P.write_shift(4,0);for(P.write_shift(4,0|(+e[Nc]||3)<<8),g=0,v=0;g<h.length;++g)if(h[g]!=null){var U=f.next(32),Z=(h[g].slice(-10)+"\0\0\0\0\0\0\0\0\0\0\0").slice(0,11);U.write_shift(1,Z,"sbcs"),U.write_shift(1,w[g]=="?"?"C":w[g],"sbcs"),U.write_shift(4,v),U.write_shift(1,T[g]||i[w[g]]||0),U.write_shift(1,A[g]||0),U.write_shift(1,2),U.write_shift(4,0),U.write_shift(1,0),U.write_shift(4,0),U.write_shift(4,0),v+=T[g]||i[w[g]]||0}var G=f.next(264);for(G.write_shift(4,13),g=0;g<65;++g)G.write_shift(4,0);for(g=0;g<m.length;++g){var W=f.next(S);for(W.write_shift(1,0),v=0;v<h.length;++v)if(h[v]!=null)switch(w[v]){case"L":W.write_shift(1,m[g][v]==null?63:m[g][v]?84:70);break;case"B":W.write_shift(8,m[g][v]||0,"f");break;case"N":var q="0";for(typeof m[g][v]=="number"&&(q=m[g][v].toFixed(A[v]||0)),y=0;y<T[v]-q.length;++y)W.write_shift(1,32);W.write_shift(1,q,"sbcs");break;case"D":m[g][v]?(W.write_shift(4,("0000"+m[g][v].getFullYear()).slice(-4),"sbcs"),W.write_shift(2,("00"+(m[g][v].getMonth()+1)).slice(-2),"sbcs"),W.write_shift(2,("00"+m[g][v].getDate()).slice(-2),"sbcs")):W.write_shift(8,"00000000","sbcs");break;case"C":var r1=String(m[g][v]!=null?m[g][v]:"").slice(0,T[v]);for(W.write_shift(1,r1,"sbcs"),y=0;y<T[v]-r1.length;++y)W.write_shift(1,32);break}}return f.next(1).write_shift(1,26),f.end()}return{to_workbook:a,to_sheet:r,from_sheet:o}}(),Yv=function(){var n={AA:"À",BA:"Á",CA:"Â",DA:195,HA:"Ä",JA:197,AE:"È",BE:"É",CE:"Ê",HE:"Ë",AI:"Ì",BI:"Í",CI:"Î",HI:"Ï",AO:"Ò",BO:"Ó",CO:"Ô",DO:213,HO:"Ö",AU:"Ù",BU:"Ú",CU:"Û",HU:"Ü",Aa:"à",Ba:"á",Ca:"â",Da:227,Ha:"ä",Ja:229,Ae:"è",Be:"é",Ce:"ê",He:"ë",Ai:"ì",Bi:"í",Ci:"î",Hi:"ï",Ao:"ò",Bo:"ó",Co:"ô",Do:245,Ho:"ö",Au:"ù",Bu:"ú",Cu:"û",Hu:"ü",KC:"Ç",Kc:"ç",q:"æ",z:"œ",a:"Æ",j:"Œ",DN:209,Dn:241,Hy:255,S:169,c:170,R:174,"B ":180,0:176,1:177,2:178,3:179,5:181,6:182,7:183,Q:185,k:186,b:208,i:216,l:222,s:240,y:248,"!":161,'"':162,"#":163,"(":164,"%":165,"'":167,"H ":168,"+":171,";":187,"<":188,"=":189,">":190,"?":191,"{":223},e=new RegExp("\x1BN("+I4(n).join("|").replace(/\|\|\|/,"|\\||").replace(/([?()+])/g,"\\$1")+"|\\|)","gm"),t=function(h,m){var _=n[m];return typeof _=="number"?_o(_):_},r=function(h,m,_){var g=m.charCodeAt(0)-32<<4|_.charCodeAt(0)-48;return g==59?h:_o(g)};n["|"]=254;function a(h,m){switch(m.type){case"base64":return i(z0(h),m);case"binary":return i(h,m);case"buffer":return i(C2&&Buffer.isBuffer(h)?h.toString("binary"):E9(h),m);case"array":return i(_9(h),m)}throw new Error("Unrecognized type "+m.type)}function i(h,m){var _=h.split(/[\n\r]+/),g=-1,v=-1,y=0,S=0,b=[],w=[],T=null,A={},C=[],E=[],M=[],N=0,P;for(+m.codepage>=0&&g4(+m.codepage);y!==_.length;++y){N=0;var U=_[y].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g,r).replace(e,t),Z=U.replace(/;;/g,"\0").split(";").map(function(z){return z.replace(/\u0000/g,";")}),G=Z[0],W;if(U.length>0)switch(G){case"ID":break;case"E":break;case"B":break;case"O":break;case"W":break;case"P":Z[1].charAt(0)=="P"&&w.push(U.slice(3).replace(/;;/g,";"));break;case"C":var q=!1,r1=!1,Y=!1,O=!1,Q=-1,l1=-1;for(S=1;S<Z.length;++S)switch(Z[S].charAt(0)){case"A":break;case"X":v=parseInt(Z[S].slice(1))-1,r1=!0;break;case"Y":for(g=parseInt(Z[S].slice(1))-1,r1||(v=0),P=b.length;P<=g;++P)b[P]=[];break;case"K":W=Z[S].slice(1),W.charAt(0)==='"'?W=W.slice(1,W.length-1):W==="TRUE"?W=!0:W==="FALSE"?W=!1:isNaN(_4(W))?isNaN(T5(W).getDate())||(W=F3(W)):(W=_4(W),T!==null&&U5(T)&&(W=G7(W))),q=!0;break;case"E":O=!0;var I=x5(Z[S].slice(1),{r:g,c:v});b[g][v]=[b[g][v],I];break;case"S":Y=!0,b[g][v]=[b[g][v],"S5S"];break;case"G":break;case"R":Q=parseInt(Z[S].slice(1))-1;break;case"C":l1=parseInt(Z[S].slice(1))-1;break;default:if(m&&m.WTF)throw new Error("SYLK bad record "+U)}if(q&&(b[g][v]&&b[g][v].length==2?b[g][v][0]=W:b[g][v]=W,T=null),Y){if(O)throw new Error("SYLK shared formula cannot have own formula");var n1=Q>-1&&b[Q][l1];if(!n1||!n1[1])throw new Error("SYLK shared formula cannot find base");b[g][v][1]=Ju(n1[1],{r:g-Q,c:v-l1})}break;case"F":var V=0;for(S=1;S<Z.length;++S)switch(Z[S].charAt(0)){case"X":v=parseInt(Z[S].slice(1))-1,++V;break;case"Y":for(g=parseInt(Z[S].slice(1))-1,P=b.length;P<=g;++P)b[P]=[];break;case"M":N=parseInt(Z[S].slice(1))/20;break;case"F":break;case"G":break;case"P":T=w[parseInt(Z[S].slice(1))];break;case"S":break;case"D":break;case"N":break;case"W":for(M=Z[S].slice(1).split(" "),P=parseInt(M[0],10);P<=parseInt(M[1],10);++P)N=parseInt(M[2],10),E[P-1]=N===0?{hidden:!0}:{wch:N},E5(E[P-1]);break;case"C":v=parseInt(Z[S].slice(1))-1,E[v]||(E[v]={});break;case"R":g=parseInt(Z[S].slice(1))-1,C[g]||(C[g]={}),N>0?(C[g].hpt=N,C[g].hpx=F8(N)):N===0&&(C[g].hidden=!0);break;default:if(m&&m.WTF)throw new Error("SYLK bad record "+U)}V<1&&(T=null);break;default:if(m&&m.WTF)throw new Error("SYLK bad record "+U)}}return C.length>0&&(A["!rows"]=C),E.length>0&&(A["!cols"]=E),m&&m.sheetRows&&(b=b.slice(0,m.sheetRows)),[b,A]}function o(h,m){var _=a(h,m),g=_[0],v=_[1],y=V5(g,m);return I4(v).forEach(function(S){y[S]=v[S]}),y}function s(h,m){return je(o(h,m),m)}function l(h,m,_,g){var v="C;Y"+(_+1)+";X"+(g+1)+";K";switch(h.t){case"n":v+=h.v||0,h.f&&!h.F&&(v+=";E"+Ox(h.f,{r:_,c:g}));break;case"b":v+=h.v?"TRUE":"FALSE";break;case"e":v+=h.w||h.v;break;case"d":v+='"'+(h.w||h.v)+'"';break;case"s":v+='"'+h.v.replace(/"/g,"").replace(/;/g,";;")+'"';break}return v}function u(h,m){m.forEach(function(_,g){var v="F;W"+(g+1)+" "+(g+1)+" ";_.hidden?v+="0":(typeof _.width=="number"&&!_.wpx&&(_.wpx=_7(_.width)),typeof _.wpx=="number"&&!_.wch&&(_.wch=x7(_.wpx)),typeof _.wch=="number"&&(v+=Math.round(_.wch))),v.charAt(v.length-1)!=" "&&h.push(v)})}function f(h,m){m.forEach(function(_,g){var v="F;";_.hidden?v+="M0;":_.hpt?v+="M"+20*_.hpt+";":_.hpx&&(v+="M"+20*$u(_.hpx)+";"),v.length>2&&h.push(v+"R"+(g+1))})}function d(h,m){var _=["ID;PWXL;N;E"],g=[],v=l3(h["!ref"]),y,S=Array.isArray(h),b=`\r
`;_.push("P;PGeneral"),_.push("F;P0;DG0G8;M255"),h["!cols"]&&u(_,h["!cols"]),h["!rows"]&&f(_,h["!rows"]),_.push("B;Y"+(v.e.r-v.s.r+1)+";X"+(v.e.c-v.s.c+1)+";D"+[v.s.c,v.s.r,v.e.c,v.e.r].join(" "));for(var w=v.s.r;w<=v.e.r;++w)for(var T=v.s.c;T<=v.e.c;++T){var A=y2({r:w,c:T});y=S?(h[w]||[])[T]:h[A],!(!y||y.v==null&&(!y.f||y.F))&&g.push(l(y,h,w,T))}return _.join(b)+b+g.join(b)+b+"E"+b}return{to_workbook:s,to_sheet:o,from_sheet:d}}(),Xv=function(){function n(i,o){switch(o.type){case"base64":return e(z0(i),o);case"binary":return e(i,o);case"buffer":return e(C2&&Buffer.isBuffer(i)?i.toString("binary"):E9(i),o);case"array":return e(_9(i),o)}throw new Error("Unrecognized type "+o.type)}function e(i,o){for(var s=i.split(`
`),l=-1,u=-1,f=0,d=[];f!==s.length;++f){if(s[f].trim()==="BOT"){d[++l]=[],u=0;continue}if(!(l<0)){var h=s[f].trim().split(","),m=h[0],_=h[1];++f;for(var g=s[f]||"";(g.match(/["]/g)||[]).length&1&&f<s.length-1;)g+=`
`+s[++f];switch(g=g.trim(),+m){case-1:if(g==="BOT"){d[++l]=[],u=0;continue}else if(g!=="EOD")throw new Error("Unrecognized DIF special command "+g);break;case 0:g==="TRUE"?d[l][u]=!0:g==="FALSE"?d[l][u]=!1:isNaN(_4(_))?isNaN(T5(_).getDate())?d[l][u]=_:d[l][u]=F3(_):d[l][u]=_4(_),++u;break;case 1:g=g.slice(1,g.length-1),g=g.replace(/""/g,'"'),g&&g.match(/^=".*"$/)&&(g=g.slice(2,-1)),d[l][u++]=g!==""?g:null;break}if(g==="EOD")break}}return o&&o.sheetRows&&(d=d.slice(0,o.sheetRows)),d}function t(i,o){return V5(n(i,o),o)}function r(i,o){return je(t(i,o),o)}var a=function(){var i=function(l,u,f,d,h){l.push(u),l.push(f+","+d),l.push('"'+h.replace(/"/g,'""')+'"')},o=function(l,u,f,d){l.push(u+","+f),l.push(u==1?'"'+d.replace(/"/g,'""')+'"':d)};return function(l){var u=[],f=l3(l["!ref"]),d,h=Array.isArray(l);i(u,"TABLE",0,1,"sheetjs"),i(u,"VECTORS",0,f.e.r-f.s.r+1,""),i(u,"TUPLES",0,f.e.c-f.s.c+1,""),i(u,"DATA",0,0,"");for(var m=f.s.r;m<=f.e.r;++m){o(u,-1,0,"BOT");for(var _=f.s.c;_<=f.e.c;++_){var g=y2({r:m,c:_});if(d=h?(l[m]||[])[_]:l[g],!d){o(u,1,0,"");continue}switch(d.t){case"n":var v=d.w;!v&&d.v!=null&&(v=d.v),v==null?d.f&&!d.F?o(u,1,0,"="+d.f):o(u,1,0,""):o(u,0,v,"V");break;case"b":o(u,0,d.v?1:0,d.v?"TRUE":"FALSE");break;case"s":o(u,1,0,isNaN(d.v)?d.v:'="'+d.v+'"');break;case"d":d.w||(d.w=e4(d.z||b2[14],u0(F3(d.v)))),o(u,0,d.w,"V");break;default:o(u,1,0,"")}}}o(u,-1,0,"EOD");var y=`\r
`,S=u.join(y);return S}}();return{to_workbook:r,to_sheet:t,from_sheet:a}}(),Jv=function(){function n(d){return d.replace(/\\b/g,"\\").replace(/\\c/g,":").replace(/\\n/g,`
`)}function e(d){return d.replace(/\\/g,"\\b").replace(/:/g,"\\c").replace(/\n/g,"\\n")}function t(d,h){for(var m=d.split(`
`),_=-1,g=-1,v=0,y=[];v!==m.length;++v){var S=m[v].trim().split(":");if(S[0]==="cell"){var b=l0(S[1]);if(y.length<=b.r)for(_=y.length;_<=b.r;++_)y[_]||(y[_]=[]);switch(_=b.r,g=b.c,S[2]){case"t":y[_][g]=n(S[3]);break;case"v":y[_][g]=+S[3];break;case"vtf":var w=S[S.length-1];case"vtc":switch(S[3]){case"nl":y[_][g]=!!+S[4];break;default:y[_][g]=+S[4];break}S[2]=="vtf"&&(y[_][g]=[y[_][g],w])}}}return h&&h.sheetRows&&(y=y.slice(0,h.sheetRows)),y}function r(d,h){return V5(t(d,h),h)}function a(d,h){return je(r(d,h),h)}var i=["socialcalc:version:1.5","MIME-Version: 1.0","Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join(`
`),o=["--SocialCalcSpreadsheetControlSave","Content-type: text/plain; charset=UTF-8"].join(`
`)+`
`,s=["# SocialCalc Spreadsheet Control Save","part:sheet"].join(`
`),l="--SocialCalcSpreadsheetControlSave--";function u(d){if(!d||!d["!ref"])return"";for(var h=[],m=[],_,g="",v=B5(d["!ref"]),y=Array.isArray(d),S=v.s.r;S<=v.e.r;++S)for(var b=v.s.c;b<=v.e.c;++b)if(g=y2({r:S,c:b}),_=y?(d[S]||[])[b]:d[g],!(!_||_.v==null||_.t==="z")){switch(m=["cell",g,"t"],_.t){case"s":case"str":m.push(e(_.v));break;case"n":_.f?(m[2]="vtf",m[3]="n",m[4]=_.v,m[5]=e(_.f)):(m[2]="v",m[3]=_.v);break;case"b":m[2]="vt"+(_.f?"f":"c"),m[3]="nl",m[4]=_.v?"1":"0",m[5]=e(_.f||(_.v?"TRUE":"FALSE"));break;case"d":var w=u0(F3(_.v));m[2]="vtc",m[3]="nd",m[4]=""+w,m[5]=_.w||e4(_.z||b2[14],w);break;case"e":continue}h.push(m.join(":"))}return h.push("sheet:c:"+(v.e.c-v.s.c+1)+":r:"+(v.e.r-v.s.r+1)+":tvf:1"),h.push("valueformat:1:text-wiki"),h.join(`
`)}function f(d){return[i,o,s,o,u(d),l].join(`
`)}return{to_workbook:a,to_sheet:r,from_sheet:f}}(),O8=function(){function n(f,d,h,m,_){_.raw?d[h][m]=f:f===""||(f==="TRUE"?d[h][m]=!0:f==="FALSE"?d[h][m]=!1:isNaN(_4(f))?isNaN(T5(f).getDate())?d[h][m]=f:d[h][m]=F3(f):d[h][m]=_4(f))}function e(f,d){var h=d||{},m=[];if(!f||f.length===0)return m;for(var _=f.split(/[\r\n]/),g=_.length-1;g>=0&&_[g].length===0;)--g;for(var v=10,y=0,S=0;S<=g;++S)y=_[S].indexOf(" "),y==-1?y=_[S].length:y++,v=Math.max(v,y);for(S=0;S<=g;++S){m[S]=[];var b=0;for(n(_[S].slice(0,v).trim(),m,S,b,h),b=1;b<=(_[S].length-v)/10+1;++b)n(_[S].slice(v+(b-1)*10,v+b*10).trim(),m,S,b,h)}return h.sheetRows&&(m=m.slice(0,h.sheetRows)),m}var t={44:",",9:"	",59:";",124:"|"},r={44:3,9:2,59:1,124:0};function a(f){for(var d={},h=!1,m=0,_=0;m<f.length;++m)(_=f.charCodeAt(m))==34?h=!h:!h&&_ in t&&(d[_]=(d[_]||0)+1);_=[];for(m in d)Object.prototype.hasOwnProperty.call(d,m)&&_.push([d[m],m]);if(!_.length){d=r;for(m in d)Object.prototype.hasOwnProperty.call(d,m)&&_.push([d[m],m])}return _.sort(function(g,v){return g[0]-v[0]||r[g[1]]-r[v[1]]}),t[_.pop()[1]]||44}function i(f,d){var h=d||{},m="",_=h.dense?[]:{},g={s:{c:0,r:0},e:{c:0,r:0}};f.slice(0,4)=="sep="?f.charCodeAt(5)==13&&f.charCodeAt(6)==10?(m=f.charAt(4),f=f.slice(7)):f.charCodeAt(5)==13||f.charCodeAt(5)==10?(m=f.charAt(4),f=f.slice(6)):m=a(f.slice(0,1024)):h&&h.FS?m=h.FS:m=a(f.slice(0,1024));var v=0,y=0,S=0,b=0,w=0,T=m.charCodeAt(0),A=!1,C=0,E=f.charCodeAt(0);f=f.replace(/\r\n/mg,`
`);var M=h.dateNF!=null?sm(h.dateNF):null;function N(){var P=f.slice(b,w),U={};if(P.charAt(0)=='"'&&P.charAt(P.length-1)=='"'&&(P=P.slice(1,-1).replace(/""/g,'"')),P.length===0)U.t="z";else if(h.raw)U.t="s",U.v=P;else if(P.trim().length===0)U.t="s",U.v=P;else if(P.charCodeAt(0)==61)P.charCodeAt(1)==34&&P.charCodeAt(P.length-1)==34?(U.t="s",U.v=P.slice(2,-1).replace(/""/g,'"')):Fx(P)?(U.t="n",U.f=P.slice(1)):(U.t="s",U.v=P);else if(P=="TRUE")U.t="b",U.v=!0;else if(P=="FALSE")U.t="b",U.v=!1;else if(!isNaN(S=_4(P)))U.t="n",h.cellText!==!1&&(U.w=P),U.v=S;else if(!isNaN(T5(P).getDate())||M&&P.match(M)){U.z=h.dateNF||b2[14];var Z=0;M&&P.match(M)&&(P=lm(P,h.dateNF,P.match(M)||[]),Z=1),h.cellDates?(U.t="d",U.v=F3(P,Z)):(U.t="n",U.v=u0(F3(P,Z))),h.cellText!==!1&&(U.w=e4(U.z,U.v instanceof Date?u0(U.v):U.v)),h.cellNF||delete U.z}else U.t="s",U.v=P;if(U.t=="z"||(h.dense?(_[v]||(_[v]=[]),_[v][y]=U):_[y2({c:y,r:v})]=U),b=w+1,E=f.charCodeAt(b),g.e.c<y&&(g.e.c=y),g.e.r<v&&(g.e.r=v),C==T)++y;else if(y=0,++v,h.sheetRows&&h.sheetRows<=v)return!0}e:for(;w<f.length;++w)switch(C=f.charCodeAt(w)){case 34:E===34&&(A=!A);break;case T:case 10:case 13:if(!A&&N())break e;break}return w-b>0&&N(),_["!ref"]=I2(g),_}function o(f,d){return!(d&&d.PRN)||d.FS||f.slice(0,4)=="sep="||f.indexOf("	")>=0||f.indexOf(",")>=0||f.indexOf(";")>=0?i(f,d):V5(e(f,d),d)}function s(f,d){var h="",m=d.type=="string"?[0,0,0,0]:La(f,d);switch(d.type){case"base64":h=z0(f);break;case"binary":h=f;break;case"buffer":d.codepage==65001?h=f.toString("utf8"):d.codepage&&typeof ye!="undefined"?h=ye.utils.decode(d.codepage,f):h=C2&&Buffer.isBuffer(f)?f.toString("binary"):E9(f);break;case"array":h=_9(f);break;case"string":h=f;break;default:throw new Error("Unrecognized type "+d.type)}return m[0]==239&&m[1]==187&&m[2]==191?h=$2(h.slice(3)):d.type!="string"&&d.type!="buffer"&&d.codepage==65001?h=$2(h):d.type=="binary"&&typeof ye!="undefined"&&d.codepage&&(h=ye.utils.decode(d.codepage,ye.utils.encode(28591,h))),h.slice(0,19)=="socialcalc:version:"?Jv.to_sheet(d.type=="string"?h:$2(h),d):o(h,d)}function l(f,d){return je(s(f,d),d)}function u(f){for(var d=[],h=l3(f["!ref"]),m,_=Array.isArray(f),g=h.s.r;g<=h.e.r;++g){for(var v=[],y=h.s.c;y<=h.e.c;++y){var S=y2({r:g,c:y});if(m=_?(f[g]||[])[y]:f[S],!m||m.v==null){v.push("          ");continue}for(var b=(m.w||(te(m),m.w)||"").slice(0,10);b.length<10;)b+=" ";v.push(b+(y===0?" ":""))}d.push(v.join(""))}return d.join(`
`)}return{to_workbook:l,to_sheet:s,from_sheet:u}}();function Zv(n,e){var t=e||{},r=!!t.WTF;t.WTF=!0;try{var a=Yv.to_workbook(n,t);return t.WTF=r,a}catch(i){if(t.WTF=r,!i.message.match(/SYLK bad record ID/)&&r)throw i;return O8.to_workbook(n,e)}}var v8=function(){function n(I,n1,V){if(I){U3(I,I.l||0);for(var z=V.Enum||Q;I.l<I.length;){var X=I.read_shift(2),f1=z[X]||z[65535],y1=I.read_shift(2),m1=I.l+y1,c1=f1.f&&f1.f(I,y1,V);if(I.l=m1,n1(c1,f1,X))return}}}function e(I,n1){switch(n1.type){case"base64":return t(p4(z0(I)),n1);case"binary":return t(p4(I),n1);case"buffer":case"array":return t(I,n1)}throw"Unsupported type "+n1.type}function t(I,n1){if(!I)return I;var V=n1||{},z=V.dense?[]:{},X="Sheet1",f1="",y1=0,m1={},c1=[],I1=[],j={s:{r:0,c:0},e:{r:0,c:0}},C1=V.sheetRows||0;if(I[2]==0&&(I[3]==8||I[3]==9)&&I.length>=16&&I[14]==5&&I[15]===108)throw new Error("Unsupported Works 3 for Mac file");if(I[2]==2)V.Enum=Q,n(I,function(E1,c2,t2){switch(t2){case 0:V.vers=E1,E1>=4096&&(V.qpro=!0);break;case 6:j=E1;break;case 204:E1&&(f1=E1);break;case 222:f1=E1;break;case 15:case 51:V.qpro||(E1[1].v=E1[1].v.slice(1));case 13:case 14:case 16:t2==14&&(E1[2]&112)==112&&(E1[2]&15)>1&&(E1[2]&15)<15&&(E1[1].z=V.dateNF||b2[14],V.cellDates&&(E1[1].t="d",E1[1].v=G7(E1[1].v))),V.qpro&&E1[3]>y1&&(z["!ref"]=I2(j),m1[X]=z,c1.push(X),z=V.dense?[]:{},j={s:{r:0,c:0},e:{r:0,c:0}},y1=E1[3],X=f1||"Sheet"+(y1+1),f1="");var f2=V.dense?(z[E1[0].r]||[])[E1[0].c]:z[y2(E1[0])];if(f2){f2.t=E1[1].t,f2.v=E1[1].v,E1[1].z!=null&&(f2.z=E1[1].z),E1[1].f!=null&&(f2.f=E1[1].f);break}V.dense?(z[E1[0].r]||(z[E1[0].r]=[]),z[E1[0].r][E1[0].c]=E1[1]):z[y2(E1[0])]=E1[1];break}},V);else if(I[2]==26||I[2]==14)V.Enum=l1,I[2]==14&&(V.qpro=!0,I.l=0),n(I,function(E1,c2,t2){switch(t2){case 204:X=E1;break;case 22:E1[1].v=E1[1].v.slice(1);case 23:case 24:case 25:case 37:case 39:case 40:if(E1[3]>y1&&(z["!ref"]=I2(j),m1[X]=z,c1.push(X),z=V.dense?[]:{},j={s:{r:0,c:0},e:{r:0,c:0}},y1=E1[3],X="Sheet"+(y1+1)),C1>0&&E1[0].r>=C1)break;V.dense?(z[E1[0].r]||(z[E1[0].r]=[]),z[E1[0].r][E1[0].c]=E1[1]):z[y2(E1[0])]=E1[1],j.e.c<E1[0].c&&(j.e.c=E1[0].c),j.e.r<E1[0].r&&(j.e.r=E1[0].r);break;case 27:E1[14e3]&&(I1[E1[14e3][0]]=E1[14e3][1]);break;case 1537:I1[E1[0]]=E1[1],E1[0]==y1&&(X=E1[1]);break}},V);else throw new Error("Unrecognized LOTUS BOF "+I[2]);if(z["!ref"]=I2(j),m1[f1||X]=z,c1.push(f1||X),!I1.length)return{SheetNames:c1,Sheets:m1};for(var $1={},J1=[],z1=0;z1<I1.length;++z1)m1[c1[z1]]?(J1.push(I1[z1]||c1[z1]),$1[I1[z1]]=m1[I1[z1]]||m1[c1[z1]]):(J1.push(I1[z1]),$1[I1[z1]]={"!ref":"A1"});return{SheetNames:J1,Sheets:$1}}function r(I,n1){var V=n1||{};if(+V.codepage>=0&&g4(+V.codepage),V.type=="string")throw new Error("Cannot write WK1 to JS string");var z=yn(),X=l3(I["!ref"]),f1=Array.isArray(I),y1=[];l4(z,0,i(1030)),l4(z,6,l(X));for(var m1=Math.min(X.e.r,8191),c1=X.s.r;c1<=m1;++c1)for(var I1=W3(c1),j=X.s.c;j<=X.e.c;++j){c1===X.s.r&&(y1[j]=C3(j));var C1=y1[j]+I1,$1=f1?(I[c1]||[])[j]:I[C1];if(!(!$1||$1.t=="z"))if($1.t=="n")($1.v|0)==$1.v&&$1.v>=-32768&&$1.v<=32767?l4(z,13,m(c1,j,$1.v)):l4(z,14,g(c1,j,$1.v));else{var J1=te($1);l4(z,15,d(c1,j,J1.slice(0,239)))}}return l4(z,1),z.end()}function a(I,n1){var V=n1||{};if(+V.codepage>=0&&g4(+V.codepage),V.type=="string")throw new Error("Cannot write WK3 to JS string");var z=yn();l4(z,0,o(I));for(var X=0,f1=0;X<I.SheetNames.length;++X)(I.Sheets[I.SheetNames[X]]||{})["!ref"]&&l4(z,27,O(I.SheetNames[X],f1++));var y1=0;for(X=0;X<I.SheetNames.length;++X){var m1=I.Sheets[I.SheetNames[X]];if(!(!m1||!m1["!ref"])){for(var c1=l3(m1["!ref"]),I1=Array.isArray(m1),j=[],C1=Math.min(c1.e.r,8191),$1=c1.s.r;$1<=C1;++$1)for(var J1=W3($1),z1=c1.s.c;z1<=c1.e.c;++z1){$1===c1.s.r&&(j[z1]=C3(z1));var E1=j[z1]+J1,c2=I1?(m1[$1]||[])[z1]:m1[E1];if(!(!c2||c2.t=="z"))if(c2.t=="n")l4(z,23,N($1,z1,y1,c2.v));else{var t2=te(c2);l4(z,22,C($1,z1,y1,t2.slice(0,239)))}}++y1}}return l4(z,1),z.end()}function i(I){var n1=E3(2);return n1.write_shift(2,I),n1}function o(I){var n1=E3(26);n1.write_shift(2,4096),n1.write_shift(2,4),n1.write_shift(4,0);for(var V=0,z=0,X=0,f1=0;f1<I.SheetNames.length;++f1){var y1=I.SheetNames[f1],m1=I.Sheets[y1];if(!(!m1||!m1["!ref"])){++X;var c1=B5(m1["!ref"]);V<c1.e.r&&(V=c1.e.r),z<c1.e.c&&(z=c1.e.c)}}return V>8191&&(V=8191),n1.write_shift(2,V),n1.write_shift(1,X),n1.write_shift(1,z),n1.write_shift(2,0),n1.write_shift(2,0),n1.write_shift(1,1),n1.write_shift(1,2),n1.write_shift(4,0),n1.write_shift(4,0),n1}function s(I,n1,V){var z={s:{c:0,r:0},e:{c:0,r:0}};return n1==8&&V.qpro?(z.s.c=I.read_shift(1),I.l++,z.s.r=I.read_shift(2),z.e.c=I.read_shift(1),I.l++,z.e.r=I.read_shift(2),z):(z.s.c=I.read_shift(2),z.s.r=I.read_shift(2),n1==12&&V.qpro&&(I.l+=2),z.e.c=I.read_shift(2),z.e.r=I.read_shift(2),n1==12&&V.qpro&&(I.l+=2),z.s.c==65535&&(z.s.c=z.e.c=z.s.r=z.e.r=0),z)}function l(I){var n1=E3(8);return n1.write_shift(2,I.s.c),n1.write_shift(2,I.s.r),n1.write_shift(2,I.e.c),n1.write_shift(2,I.e.r),n1}function u(I,n1,V){var z=[{c:0,r:0},{t:"n",v:0},0,0];return V.qpro&&V.vers!=20768?(z[0].c=I.read_shift(1),z[3]=I.read_shift(1),z[0].r=I.read_shift(2),I.l+=2):(z[2]=I.read_shift(1),z[0].c=I.read_shift(2),z[0].r=I.read_shift(2)),z}function f(I,n1,V){var z=I.l+n1,X=u(I,n1,V);if(X[1].t="s",V.vers==20768){I.l++;var f1=I.read_shift(1);return X[1].v=I.read_shift(f1,"utf8"),X}return V.qpro&&I.l++,X[1].v=I.read_shift(z-I.l,"cstr"),X}function d(I,n1,V){var z=E3(7+V.length);z.write_shift(1,255),z.write_shift(2,n1),z.write_shift(2,I),z.write_shift(1,39);for(var X=0;X<z.length;++X){var f1=V.charCodeAt(X);z.write_shift(1,f1>=128?95:f1)}return z.write_shift(1,0),z}function h(I,n1,V){var z=u(I,n1,V);return z[1].v=I.read_shift(2,"i"),z}function m(I,n1,V){var z=E3(7);return z.write_shift(1,255),z.write_shift(2,n1),z.write_shift(2,I),z.write_shift(2,V,"i"),z}function _(I,n1,V){var z=u(I,n1,V);return z[1].v=I.read_shift(8,"f"),z}function g(I,n1,V){var z=E3(13);return z.write_shift(1,255),z.write_shift(2,n1),z.write_shift(2,I),z.write_shift(8,V,"f"),z}function v(I,n1,V){var z=I.l+n1,X=u(I,n1,V);if(X[1].v=I.read_shift(8,"f"),V.qpro)I.l=z;else{var f1=I.read_shift(2);w(I.slice(I.l,I.l+f1),X),I.l+=f1}return X}function y(I,n1,V){var z=n1&32768;return n1&=-32769,n1=(z?I:0)+(n1>=8192?n1-16384:n1),(z?"":"$")+(V?C3(n1):W3(n1))}var S={51:["FALSE",0],52:["TRUE",0],70:["LEN",1],80:["SUM",69],81:["AVERAGEA",69],82:["COUNTA",69],83:["MINA",69],84:["MAXA",69],111:["T",1]},b=["","","","","","","","","","+","-","*","/","^","=","<>","<=",">=","<",">","","","","","&","","","","","","",""];function w(I,n1){U3(I,0);for(var V=[],z=0,X="",f1="",y1="",m1="";I.l<I.length;){var c1=I[I.l++];switch(c1){case 0:V.push(I.read_shift(8,"f"));break;case 1:f1=y(n1[0].c,I.read_shift(2),!0),X=y(n1[0].r,I.read_shift(2),!1),V.push(f1+X);break;case 2:{var I1=y(n1[0].c,I.read_shift(2),!0),j=y(n1[0].r,I.read_shift(2),!1);f1=y(n1[0].c,I.read_shift(2),!0),X=y(n1[0].r,I.read_shift(2),!1),V.push(I1+j+":"+f1+X)}break;case 3:if(I.l<I.length){console.error("WK1 premature formula end");return}break;case 4:V.push("("+V.pop()+")");break;case 5:V.push(I.read_shift(2));break;case 6:{for(var C1="";c1=I[I.l++];)C1+=String.fromCharCode(c1);V.push('"'+C1.replace(/"/g,'""')+'"')}break;case 8:V.push("-"+V.pop());break;case 23:V.push("+"+V.pop());break;case 22:V.push("NOT("+V.pop()+")");break;case 20:case 21:m1=V.pop(),y1=V.pop(),V.push(["AND","OR"][c1-20]+"("+y1+","+m1+")");break;default:if(c1<32&&b[c1])m1=V.pop(),y1=V.pop(),V.push(y1+b[c1]+m1);else if(S[c1]){if(z=S[c1][1],z==69&&(z=I[I.l++]),z>V.length){console.error("WK1 bad formula parse 0x"+c1.toString(16)+":|"+V.join("|")+"|");return}var $1=V.slice(-z);V.length-=z,V.push(S[c1][0]+"("+$1.join(",")+")")}else return c1<=7?console.error("WK1 invalid opcode "+c1.toString(16)):c1<=24?console.error("WK1 unsupported op "+c1.toString(16)):c1<=30?console.error("WK1 invalid opcode "+c1.toString(16)):c1<=115?console.error("WK1 unsupported function opcode "+c1.toString(16)):console.error("WK1 unrecognized opcode "+c1.toString(16))}}V.length==1?n1[1].f=""+V[0]:console.error("WK1 bad formula parse |"+V.join("|")+"|")}function T(I){var n1=[{c:0,r:0},{t:"n",v:0},0];return n1[0].r=I.read_shift(2),n1[3]=I[I.l++],n1[0].c=I[I.l++],n1}function A(I,n1){var V=T(I);return V[1].t="s",V[1].v=I.read_shift(n1-4,"cstr"),V}function C(I,n1,V,z){var X=E3(6+z.length);X.write_shift(2,I),X.write_shift(1,V),X.write_shift(1,n1),X.write_shift(1,39);for(var f1=0;f1<z.length;++f1){var y1=z.charCodeAt(f1);X.write_shift(1,y1>=128?95:y1)}return X.write_shift(1,0),X}function E(I,n1){var V=T(I);V[1].v=I.read_shift(2);var z=V[1].v>>1;if(V[1].v&1)switch(z&7){case 0:z=(z>>3)*5e3;break;case 1:z=(z>>3)*500;break;case 2:z=(z>>3)/20;break;case 3:z=(z>>3)/200;break;case 4:z=(z>>3)/2e3;break;case 5:z=(z>>3)/2e4;break;case 6:z=(z>>3)/16;break;case 7:z=(z>>3)/64;break}return V[1].v=z,V}function M(I,n1){var V=T(I),z=I.read_shift(4),X=I.read_shift(4),f1=I.read_shift(2);if(f1==65535)return z===0&&X===3221225472?(V[1].t="e",V[1].v=15):z===0&&X===3489660928?(V[1].t="e",V[1].v=42):V[1].v=0,V;var y1=f1&32768;return f1=(f1&32767)-16446,V[1].v=(1-y1*2)*(X*Math.pow(2,f1+32)+z*Math.pow(2,f1)),V}function N(I,n1,V,z){var X=E3(14);if(X.write_shift(2,I),X.write_shift(1,V),X.write_shift(1,n1),z==0)return X.write_shift(4,0),X.write_shift(4,0),X.write_shift(2,65535),X;var f1=0,y1=0,m1=0,c1=0;return z<0&&(f1=1,z=-z),y1=Math.log2(z)|0,z/=Math.pow(2,y1-31),c1=z>>>0,c1&2147483648||(z/=2,++y1,c1=z>>>0),z-=c1,c1|=2147483648,c1>>>=0,z*=Math.pow(2,32),m1=z>>>0,X.write_shift(4,m1),X.write_shift(4,c1),y1+=16383+(f1?32768:0),X.write_shift(2,y1),X}function P(I,n1){var V=M(I);return I.l+=n1-14,V}function U(I,n1){var V=T(I),z=I.read_shift(4);return V[1].v=z>>6,V}function Z(I,n1){var V=T(I),z=I.read_shift(8,"f");return V[1].v=z,V}function G(I,n1){var V=Z(I);return I.l+=n1-10,V}function W(I,n1){return I[I.l+n1-1]==0?I.read_shift(n1,"cstr"):""}function q(I,n1){var V=I[I.l++];V>n1-1&&(V=n1-1);for(var z="";z.length<V;)z+=String.fromCharCode(I[I.l++]);return z}function r1(I,n1,V){if(!(!V.qpro||n1<21)){var z=I.read_shift(1);I.l+=17,I.l+=1,I.l+=2;var X=I.read_shift(n1-21,"cstr");return[z,X]}}function Y(I,n1){for(var V={},z=I.l+n1;I.l<z;){var X=I.read_shift(2);if(X==14e3){for(V[X]=[0,""],V[X][0]=I.read_shift(2);I[I.l];)V[X][1]+=String.fromCharCode(I[I.l]),I.l++;I.l++}}return V}function O(I,n1){var V=E3(5+I.length);V.write_shift(2,14e3),V.write_shift(2,n1);for(var z=0;z<I.length;++z){var X=I.charCodeAt(z);V[V.l++]=X>127?95:X}return V[V.l++]=0,V}var Q={0:{n:"BOF",f:y3},1:{n:"EOF"},2:{n:"CALCMODE"},3:{n:"CALCORDER"},4:{n:"SPLIT"},5:{n:"SYNC"},6:{n:"RANGE",f:s},7:{n:"WINDOW1"},8:{n:"COLW1"},9:{n:"WINTWO"},10:{n:"COLW2"},11:{n:"NAME"},12:{n:"BLANK"},13:{n:"INTEGER",f:h},14:{n:"NUMBER",f:_},15:{n:"LABEL",f},16:{n:"FORMULA",f:v},24:{n:"TABLE"},25:{n:"ORANGE"},26:{n:"PRANGE"},27:{n:"SRANGE"},28:{n:"FRANGE"},29:{n:"KRANGE1"},32:{n:"HRANGE"},35:{n:"KRANGE2"},36:{n:"PROTEC"},37:{n:"FOOTER"},38:{n:"HEADER"},39:{n:"SETUP"},40:{n:"MARGINS"},41:{n:"LABELFMT"},42:{n:"TITLES"},43:{n:"SHEETJS"},45:{n:"GRAPH"},46:{n:"NGRAPH"},47:{n:"CALCCOUNT"},48:{n:"UNFORMATTED"},49:{n:"CURSORW12"},50:{n:"WINDOW"},51:{n:"STRING",f},55:{n:"PASSWORD"},56:{n:"LOCKED"},60:{n:"QUERY"},61:{n:"QUERYNAME"},62:{n:"PRINT"},63:{n:"PRINTNAME"},64:{n:"GRAPH2"},65:{n:"GRAPHNAME"},66:{n:"ZOOM"},67:{n:"SYMSPLIT"},68:{n:"NSROWS"},69:{n:"NSCOLS"},70:{n:"RULER"},71:{n:"NNAME"},72:{n:"ACOMM"},73:{n:"AMACRO"},74:{n:"PARSE"},102:{n:"PRANGES??"},103:{n:"RRANGES??"},104:{n:"FNAME??"},105:{n:"MRANGES??"},204:{n:"SHEETNAMECS",f:W},222:{n:"SHEETNAMELP",f:q},65535:{n:""}},l1={0:{n:"BOF"},1:{n:"EOF"},2:{n:"PASSWORD"},3:{n:"CALCSET"},4:{n:"WINDOWSET"},5:{n:"SHEETCELLPTR"},6:{n:"SHEETLAYOUT"},7:{n:"COLUMNWIDTH"},8:{n:"HIDDENCOLUMN"},9:{n:"USERRANGE"},10:{n:"SYSTEMRANGE"},11:{n:"ZEROFORCE"},12:{n:"SORTKEYDIR"},13:{n:"FILESEAL"},14:{n:"DATAFILLNUMS"},15:{n:"PRINTMAIN"},16:{n:"PRINTSTRING"},17:{n:"GRAPHMAIN"},18:{n:"GRAPHSTRING"},19:{n:"??"},20:{n:"ERRCELL"},21:{n:"NACELL"},22:{n:"LABEL16",f:A},23:{n:"NUMBER17",f:M},24:{n:"NUMBER18",f:E},25:{n:"FORMULA19",f:P},26:{n:"FORMULA1A"},27:{n:"XFORMAT",f:Y},28:{n:"DTLABELMISC"},29:{n:"DTLABELCELL"},30:{n:"GRAPHWINDOW"},31:{n:"CPA"},32:{n:"LPLAUTO"},33:{n:"QUERY"},34:{n:"HIDDENSHEET"},35:{n:"??"},37:{n:"NUMBER25",f:U},38:{n:"??"},39:{n:"NUMBER27",f:Z},40:{n:"FORMULA28",f:G},142:{n:"??"},147:{n:"??"},150:{n:"??"},151:{n:"??"},152:{n:"??"},153:{n:"??"},154:{n:"??"},155:{n:"??"},156:{n:"??"},163:{n:"??"},174:{n:"??"},175:{n:"??"},176:{n:"??"},177:{n:"??"},184:{n:"??"},185:{n:"??"},186:{n:"??"},187:{n:"??"},188:{n:"??"},195:{n:"??"},201:{n:"??"},204:{n:"SHEETNAMECS",f:W},205:{n:"??"},206:{n:"??"},207:{n:"??"},208:{n:"??"},256:{n:"??"},259:{n:"??"},260:{n:"??"},261:{n:"??"},262:{n:"??"},263:{n:"??"},265:{n:"??"},266:{n:"??"},267:{n:"??"},268:{n:"??"},270:{n:"??"},271:{n:"??"},384:{n:"??"},389:{n:"??"},390:{n:"??"},393:{n:"??"},396:{n:"??"},512:{n:"??"},514:{n:"??"},513:{n:"??"},516:{n:"??"},517:{n:"??"},640:{n:"??"},641:{n:"??"},642:{n:"??"},643:{n:"??"},644:{n:"??"},645:{n:"??"},646:{n:"??"},647:{n:"??"},648:{n:"??"},658:{n:"??"},659:{n:"??"},660:{n:"??"},661:{n:"??"},662:{n:"??"},665:{n:"??"},666:{n:"??"},768:{n:"??"},772:{n:"??"},1537:{n:"SHEETINFOQP",f:r1},1600:{n:"??"},1602:{n:"??"},1793:{n:"??"},1794:{n:"??"},1795:{n:"??"},1796:{n:"??"},1920:{n:"??"},2048:{n:"??"},2049:{n:"??"},2052:{n:"??"},2688:{n:"??"},10998:{n:"??"},12849:{n:"??"},28233:{n:"??"},28484:{n:"??"},65535:{n:""}};return{sheet_to_wk1:r,book_to_wk3:a,to_workbook:e}}();function qv(n){var e={},t=n.match(r0),r=0,a=!1;if(t)for(;r!=t.length;++r){var i=v2(t[r]);switch(i[0].replace(/\w*:/g,"")){case"<condense":break;case"<extend":break;case"<shadow":if(!i.val)break;case"<shadow>":case"<shadow/>":e.shadow=1;break;case"</shadow>":break;case"<charset":if(i.val=="1")break;e.cp=ua[parseInt(i.val,10)];break;case"<outline":if(!i.val)break;case"<outline>":case"<outline/>":e.outline=1;break;case"</outline>":break;case"<rFont":e.name=i.val;break;case"<sz":e.sz=i.val;break;case"<strike":if(!i.val)break;case"<strike>":case"<strike/>":e.strike=1;break;case"</strike>":break;case"<u":if(!i.val)break;switch(i.val){case"double":e.uval="double";break;case"singleAccounting":e.uval="single-accounting";break;case"doubleAccounting":e.uval="double-accounting";break}case"<u>":case"<u/>":e.u=1;break;case"</u>":break;case"<b":if(i.val=="0")break;case"<b>":case"<b/>":e.b=1;break;case"</b>":break;case"<i":if(i.val=="0")break;case"<i>":case"<i/>":e.i=1;break;case"</i>":break;case"<color":i.rgb&&(e.color=i.rgb.slice(2,8));break;case"<color>":case"<color/>":case"</color>":break;case"<family":e.family=i.val;break;case"<family>":case"<family/>":case"</family>":break;case"<vertAlign":e.valign=i.val;break;case"<vertAlign>":case"<vertAlign/>":case"</vertAlign>":break;case"<scheme":break;case"<scheme>":case"<scheme/>":case"</scheme>":break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":a=!0;break;case"</ext>":a=!1;break;default:if(i[0].charCodeAt(1)!==47&&!a)throw new Error("Unrecognized rich format "+i[0])}}return e}var Qv=function(){var n=R8("t"),e=R8("rPr");function t(i){var o=i.match(n);if(!o)return{t:"s",v:""};var s={t:"s",v:L2(o[1])},l=i.match(e);return l&&(s.s=qv(l[1])),s}var r=/<(?:\w+:)?r>/g,a=/<\/(?:\w+:)?r>/;return function(o){return o.replace(r,"").split(a).map(t).filter(function(s){return s.v})}}(),Kv=function(){var e=/(\r\n|\n)/g;function t(a,i,o){var s=[];a.u&&s.push("text-decoration: underline;"),a.uval&&s.push("text-underline-style:"+a.uval+";"),a.sz&&s.push("font-size:"+a.sz+"pt;"),a.outline&&s.push("text-effect: outline;"),a.shadow&&s.push("text-shadow: auto;"),i.push('<span style="'+s.join("")+'">'),a.b&&(i.push("<b>"),o.push("</b>")),a.i&&(i.push("<i>"),o.push("</i>")),a.strike&&(i.push("<s>"),o.push("</s>"));var l=a.valign||"";return l=="superscript"||l=="super"?l="sup":l=="subscript"&&(l="sub"),l!=""&&(i.push("<"+l+">"),o.push("</"+l+">")),o.push("</span>"),a}function r(a){var i=[[],a.v,[]];return a.v?(a.s&&t(a.s,i[0],i[2]),i[0].join("")+i[1].replace(e,"<br/>")+i[2].join("")):""}return function(i){return i.map(r).join("")}}(),e_=/<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,t_=/<(?:\w+:)?r>/,n_=/<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;function Ca(n,e){var t=e?e.cellHTML:!0,r={};return n?(n.match(/^\s*<(?:\w+:)?t[^>]*>/)?(r.t=L2($2(n.slice(n.indexOf(">")+1).split(/<\/(?:\w+:)?t>/)[0]||"")),r.r=$2(n),t&&(r.h=va(r.t))):n.match(t_)&&(r.r=$2(n),r.t=L2($2((n.replace(n_,"").match(e_)||[]).join("").replace(r0,""))),t&&(r.h=Kv(Qv(r.r)))),r):{t:""}}var r_=/<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/,a_=/<(?:\w+:)?(?:si|sstItem)>/g,i_=/<\/(?:\w+:)?(?:si|sstItem)>/;function o_(n,e){var t=[],r="";if(!n)return t;var a=n.match(r_);if(a){r=a[2].replace(a_,"").split(i_);for(var i=0;i!=r.length;++i){var o=Ca(r[i].trim(),e);o!=null&&(t[t.length]=o)}a=v2(a[1]),t.Count=a.count,t.Unique=a.uniqueCount}return t}function s_(n){return[n.read_shift(4),n.read_shift(4)]}function l_(n,e){var t=[],r=!1;return le(n,function(i,o,s){switch(s){case 159:t.Count=i[0],t.Unique=i[1];break;case 19:t.push(i);break;case 160:return!0;case 35:r=!0;break;case 36:r=!1;break;default:if(o.T,!r||e.WTF)throw new Error("Unexpected record 0x"+s.toString(16))}}),t}function Bu(n){for(var e=[],t=n.split(""),r=0;r<t.length;++r)e[r]=t[r].charCodeAt(0);return e}function K4(n,e){var t={};return t.Major=n.read_shift(2),t.Minor=n.read_shift(2),e>=4&&(n.l+=e-4),t}function c_(n){var e={};return e.id=n.read_shift(0,"lpp4"),e.R=K4(n,4),e.U=K4(n,4),e.W=K4(n,4),e}function u_(n){for(var e=n.read_shift(4),t=n.l+e-4,r={},a=n.read_shift(4),i=[];a-- >0;)i.push({t:n.read_shift(4),v:n.read_shift(0,"lpp4")});if(r.name=n.read_shift(0,"lpp4"),r.comps=i,n.l!=t)throw new Error("Bad DataSpaceMapEntry: "+n.l+" != "+t);return r}function f_(n){var e=[];n.l+=4;for(var t=n.read_shift(4);t-- >0;)e.push(u_(n));return e}function d_(n){var e=[];n.l+=4;for(var t=n.read_shift(4);t-- >0;)e.push(n.read_shift(0,"lpp4"));return e}function h_(n){var e={};return n.read_shift(4),n.l+=4,e.id=n.read_shift(0,"lpp4"),e.name=n.read_shift(0,"lpp4"),e.R=K4(n,4),e.U=K4(n,4),e.W=K4(n,4),e}function p_(n){var e=h_(n);if(e.ename=n.read_shift(0,"8lpp4"),e.blksz=n.read_shift(4),e.cmode=n.read_shift(4),n.read_shift(4)!=4)throw new Error("Bad !Primary record");return e}function Vu(n,e){var t=n.l+e,r={};r.Flags=n.read_shift(4)&63,n.l+=4,r.AlgID=n.read_shift(4);var a=!1;switch(r.AlgID){case 26126:case 26127:case 26128:a=r.Flags==36;break;case 26625:a=r.Flags==4;break;case 0:a=r.Flags==16||r.Flags==4||r.Flags==36;break;default:throw"Unrecognized encryption algorithm: "+r.AlgID}if(!a)throw new Error("Encryption Flags/AlgID mismatch");return r.AlgIDHash=n.read_shift(4),r.KeySize=n.read_shift(4),r.ProviderType=n.read_shift(4),n.l+=8,r.CSPName=n.read_shift(t-n.l>>1,"utf16le"),n.l=t,r}function Gu(n,e){var t={},r=n.l+e;return n.l+=4,t.Salt=n.slice(n.l,n.l+16),n.l+=16,t.Verifier=n.slice(n.l,n.l+16),n.l+=16,n.read_shift(4),t.VerifierHash=n.slice(n.l,r),n.l=r,t}function m_(n){var e=K4(n);switch(e.Minor){case 2:return[e.Minor,g_(n)];case 3:return[e.Minor,v_()];case 4:return[e.Minor,__(n)]}throw new Error("ECMA-376 Encrypted file unrecognized Version: "+e.Minor)}function g_(n){var e=n.read_shift(4);if((e&63)!=36)throw new Error("EncryptionInfo mismatch");var t=n.read_shift(4),r=Vu(n,t),a=Gu(n,n.length-n.l);return{t:"Std",h:r,v:a}}function v_(){throw new Error("File is password-protected: ECMA-376 Extensible")}function __(n){var e=["saltSize","blockSize","keyBits","hashSize","cipherAlgorithm","cipherChaining","hashAlgorithm","saltValue"];n.l+=4;var t=n.read_shift(n.length-n.l,"utf8"),r={};return t.replace(r0,function(i){var o=v2(i);switch(L4(o[0])){case"<?xml":break;case"<encryption":case"</encryption>":break;case"<keyData":e.forEach(function(s){r[s]=o[s]});break;case"<dataIntegrity":r.encryptedHmacKey=o.encryptedHmacKey,r.encryptedHmacValue=o.encryptedHmacValue;break;case"<keyEncryptors>":case"<keyEncryptors":r.encs=[];break;case"</keyEncryptors>":break;case"<keyEncryptor":r.uri=o.uri;break;case"</keyEncryptor>":break;case"<encryptedKey":r.encs.push(o);break;default:throw o[0]}}),r}function x_(n,e){var t={},r=t.EncryptionVersionInfo=K4(n,4);if(e-=4,r.Minor!=2)throw new Error("unrecognized minor version code: "+r.Minor);if(r.Major>4||r.Major<2)throw new Error("unrecognized major version code: "+r.Major);t.Flags=n.read_shift(4),e-=4;var a=n.read_shift(4);return e-=4,t.EncryptionHeader=Vu(n,a),e-=a,t.EncryptionVerifier=Gu(n,e),t}function y_(n){var e={},t=e.EncryptionVersionInfo=K4(n,4);if(t.Major!=1||t.Minor!=1)throw"unrecognized version code "+t.Major+" : "+t.Minor;return e.Salt=n.read_shift(16),e.EncryptedVerifier=n.read_shift(16),e.EncryptedVerifierHash=n.read_shift(16),e}function b_(n){var e=0,t,r=Bu(n),a=r.length+1,i,o,s,l,u;for(t=Pe(a),t[0]=r.length,i=1;i!=a;++i)t[i]=r[i-1];for(i=a-1;i>=0;--i)o=t[i],s=e&16384?1:0,l=e<<1&32767,u=s|l,e=u^o;return e^52811}var Wu=function(){var n=[187,255,255,186,255,255,185,128,0,190,15,0,191,15,0],e=[57840,7439,52380,33984,4364,3600,61902,12606,6258,57657,54287,34041,10252,43370,20163],t=[44796,19929,39858,10053,20106,40212,10761,31585,63170,64933,60267,50935,40399,11199,17763,35526,1453,2906,5812,11624,23248,885,1770,3540,7080,14160,28320,56640,55369,41139,20807,41614,21821,43642,17621,28485,56970,44341,19019,38038,14605,29210,60195,50791,40175,10751,21502,43004,24537,18387,36774,3949,7898,15796,31592,63184,47201,24803,49606,37805,14203,28406,56812,17824,35648,1697,3394,6788,13576,27152,43601,17539,35078,557,1114,2228,4456,30388,60776,51953,34243,7079,14158,28316,14128,28256,56512,43425,17251,34502,7597,13105,26210,52420,35241,883,1766,3532,4129,8258,16516,33032,4657,9314,18628],r=function(o){return(o/2|o*128)&255},a=function(o,s){return r(o^s)},i=function(o){for(var s=e[o.length-1],l=104,u=o.length-1;u>=0;--u)for(var f=o[u],d=0;d!=7;++d)f&64&&(s^=t[l]),f*=2,--l;return s};return function(o){for(var s=Bu(o),l=i(s),u=s.length,f=Pe(16),d=0;d!=16;++d)f[d]=0;var h,m,_;for((u&1)===1&&(h=l>>8,f[u]=a(n[0],h),--u,h=l&255,m=s[s.length-1],f[u]=a(m,h));u>0;)--u,h=l>>8,f[u]=a(s[u],h),--u,h=l&255,f[u]=a(s[u],h);for(u=15,_=15-s.length;_>0;)h=l>>8,f[u]=a(n[_],h),--u,--_,h=l&255,f[u]=a(s[u],h),--u,--_;return f}}(),S_=function(n,e,t,r,a){a||(a=e),r||(r=Wu(n));var i,o;for(i=0;i!=e.length;++i)o=e[i],o^=r[t],o=(o>>5|o<<3)&255,a[i]=o,++t;return[a,t,r]},w_=function(n){var e=0,t=Wu(n);return function(r){var a=S_("",r,e,t);return e=a[1],a[0]}};function A_(n,e,t,r){var a={key:y3(n),verificationBytes:y3(n)};return t.password&&(a.verifier=b_(t.password)),r.valid=a.verificationBytes===a.verifier,r.valid&&(r.insitu=w_(t.password)),a}function T_(n,e,t){var r=t||{};return r.Info=n.read_shift(2),n.l-=2,r.Info===1?r.Data=y_(n):r.Data=x_(n,e),r}function E_(n,e,t){var r={Type:t.biff>=8?n.read_shift(2):0};return r.Type?T_(n,e-2,r):A_(n,t.biff>=8?e:e-2,t,r),r}var C_=function(){function n(a,i){switch(i.type){case"base64":return e(z0(a),i);case"binary":return e(a,i);case"buffer":return e(C2&&Buffer.isBuffer(a)?a.toString("binary"):E9(a),i);case"array":return e(_9(a),i)}throw new Error("Unrecognized type "+i.type)}function e(a,i){var o=i||{},s=o.dense?[]:{},l=a.match(/\\trowd.*?\\row\b/g);if(!l.length)throw new Error("RTF missing table");var u={s:{c:0,r:0},e:{c:0,r:l.length-1}};return l.forEach(function(f,d){Array.isArray(s)&&(s[d]=[]);for(var h=/\\\w+\b/g,m=0,_,g=-1;_=h.exec(f);){switch(_[0]){case"\\cell":var v=f.slice(m,h.lastIndex-_[0].length);if(v[0]==" "&&(v=v.slice(1)),++g,v.length){var y={v,t:"s"};Array.isArray(s)?s[d][g]=y:s[y2({r:d,c:g})]=y}break}m=h.lastIndex}g>u.e.c&&(u.e.c=g)}),s["!ref"]=I2(u),s}function t(a,i){return je(n(a,i),i)}function r(a){for(var i=["{\\rtf1\\ansi"],o=l3(a["!ref"]),s,l=Array.isArray(a),u=o.s.r;u<=o.e.r;++u){i.push("\\trowd\\trautofit1");for(var f=o.s.c;f<=o.e.c;++f)i.push("\\cellx"+(f+1));for(i.push("\\pard\\intbl"),f=o.s.c;f<=o.e.c;++f){var d=y2({r:u,c:f});s=l?(a[u]||[])[f]:a[d],!(!s||s.v==null&&(!s.f||s.F))&&(i.push(" "+(s.w||(te(s),s.w))),i.push("\\cell"))}i.push("\\pard\\intbl\\row")}return i.join("")+"}"}return{to_workbook:t,to_sheet:n,from_sheet:r}}();function M_(n){var e=n.slice(n[0]==="#"?1:0).slice(0,6);return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function L8(n){for(var e=0,t=1;e!=3;++e)t=t*256+(n[e]>255?255:n[e]<0?0:n[e]);return t.toString(16).toUpperCase().slice(1)}function D_(n){var e=n[0]/255,t=n[1]/255,r=n[2]/255,a=Math.max(e,t,r),i=Math.min(e,t,r),o=a-i;if(o===0)return[0,0,e];var s=0,l=0,u=a+i;switch(l=o/(u>1?2-u:u),a){case e:s=((t-r)/o+6)%6;break;case t:s=(r-e)/o+2;break;case r:s=(e-t)/o+4;break}return[s/6,l,u/2]}function k_(n){var e=n[0],t=n[1],r=n[2],a=t*2*(r<.5?r:1-r),i=r-a/2,o=[i,i,i],s=6*e,l;if(t!==0)switch(s|0){case 0:case 6:l=a*s,o[0]+=a,o[1]+=l;break;case 1:l=a*(2-s),o[0]+=l,o[1]+=a;break;case 2:l=a*(s-2),o[1]+=a,o[2]+=l;break;case 3:l=a*(4-s),o[1]+=l,o[2]+=a;break;case 4:l=a*(s-4),o[2]+=a,o[0]+=l;break;case 5:l=a*(6-s),o[2]+=l,o[0]+=a;break}for(var u=0;u!=3;++u)o[u]=Math.round(o[u]*255);return o}function v7(n,e){if(e===0)return n;var t=D_(M_(n));return e<0?t[2]=t[2]*(1+e):t[2]=1-(1-t[2])*(1-e),L8(k_(t))}var ju=6,R_=15,I_=1,o0=ju;function _7(n){return Math.floor((n+Math.round(128/o0)/256)*o0)}function x7(n){return Math.floor((n-5)/o0*100+.5)/100}function An(n){return Math.round((n*o0+5)/o0*256)/256}function gt(n){return An(x7(_7(n)))}function Ma(n){var e=Math.abs(n-gt(n)),t=o0;if(e>.005)for(o0=I_;o0<R_;++o0)Math.abs(n-gt(n))<=e&&(e=Math.abs(n-gt(n)),t=o0);o0=t}function E5(n){n.width?(n.wpx=_7(n.width),n.wch=x7(n.wpx),n.MDW=o0):n.wpx?(n.wch=x7(n.wpx),n.width=An(n.wch),n.MDW=o0):typeof n.wch=="number"&&(n.width=An(n.wch),n.wpx=_7(n.width),n.MDW=o0),n.customWidth&&delete n.customWidth}var O_=96,Hu=O_;function $u(n){return n*96/Hu}function F8(n){return n*Hu/96}var L_={None:"none",Solid:"solid",Gray50:"mediumGray",Gray75:"darkGray",Gray25:"lightGray",HorzStripe:"darkHorizontal",VertStripe:"darkVertical",ReverseDiagStripe:"darkDown",DiagStripe:"darkUp",DiagCross:"darkGrid",ThickDiagCross:"darkTrellis",ThinHorzStripe:"lightHorizontal",ThinVertStripe:"lightVertical",ThinReverseDiagStripe:"lightDown",ThinHorzCross:"lightGrid"};function F_(n,e,t,r){e.Borders=[];var a={},i=!1;(n[0].match(r0)||[]).forEach(function(o){var s=v2(o);switch(L4(s[0])){case"<borders":case"<borders>":case"</borders>":break;case"<border":case"<border>":case"<border/>":a={},s.diagonalUp&&(a.diagonalUp=q2(s.diagonalUp)),s.diagonalDown&&(a.diagonalDown=q2(s.diagonalDown)),e.Borders.push(a);break;case"</border>":break;case"<left/>":break;case"<left":case"<left>":break;case"</left>":break;case"<right/>":break;case"<right":case"<right>":break;case"</right>":break;case"<top/>":break;case"<top":case"<top>":break;case"</top>":break;case"<bottom/>":break;case"<bottom":case"<bottom>":break;case"</bottom>":break;case"<diagonal":case"<diagonal>":case"<diagonal/>":break;case"</diagonal>":break;case"<horizontal":case"<horizontal>":case"<horizontal/>":break;case"</horizontal>":break;case"<vertical":case"<vertical>":case"<vertical/>":break;case"</vertical>":break;case"<start":case"<start>":case"<start/>":break;case"</start>":break;case"<end":case"<end>":case"<end/>":break;case"</end>":break;case"<color":case"<color>":break;case"<color/>":case"</color>":break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":i=!0;break;case"</ext>":i=!1;break;default:if(r&&r.WTF&&!i)throw new Error("unrecognized "+s[0]+" in borders")}})}function P_(n,e,t,r){e.Fills=[];var a={},i=!1;(n[0].match(r0)||[]).forEach(function(o){var s=v2(o);switch(L4(s[0])){case"<fills":case"<fills>":case"</fills>":break;case"<fill>":case"<fill":case"<fill/>":a={},e.Fills.push(a);break;case"</fill>":break;case"<gradientFill>":break;case"<gradientFill":case"</gradientFill>":e.Fills.push(a),a={};break;case"<patternFill":case"<patternFill>":s.patternType&&(a.patternType=s.patternType);break;case"<patternFill/>":case"</patternFill>":break;case"<bgColor":a.bgColor||(a.bgColor={}),s.indexed&&(a.bgColor.indexed=parseInt(s.indexed,10)),s.theme&&(a.bgColor.theme=parseInt(s.theme,10)),s.tint&&(a.bgColor.tint=parseFloat(s.tint)),s.rgb&&(a.bgColor.rgb=s.rgb.slice(-6));break;case"<bgColor/>":case"</bgColor>":break;case"<fgColor":a.fgColor||(a.fgColor={}),s.theme&&(a.fgColor.theme=parseInt(s.theme,10)),s.tint&&(a.fgColor.tint=parseFloat(s.tint)),s.rgb!=null&&(a.fgColor.rgb=s.rgb.slice(-6));break;case"<fgColor/>":case"</fgColor>":break;case"<stop":case"<stop/>":break;case"</stop>":break;case"<color":case"<color/>":break;case"</color>":break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":i=!0;break;case"</ext>":i=!1;break;default:if(r&&r.WTF&&!i)throw new Error("unrecognized "+s[0]+" in fills")}})}function N_(n,e,t,r){e.Fonts=[];var a={},i=!1;(n[0].match(r0)||[]).forEach(function(o){var s=v2(o);switch(L4(s[0])){case"<fonts":case"<fonts>":case"</fonts>":break;case"<font":case"<font>":break;case"</font>":case"<font/>":e.Fonts.push(a),a={};break;case"<name":s.val&&(a.name=$2(s.val));break;case"<name/>":case"</name>":break;case"<b":a.bold=s.val?q2(s.val):1;break;case"<b/>":a.bold=1;break;case"<i":a.italic=s.val?q2(s.val):1;break;case"<i/>":a.italic=1;break;case"<u":switch(s.val){case"none":a.underline=0;break;case"single":a.underline=1;break;case"double":a.underline=2;break;case"singleAccounting":a.underline=33;break;case"doubleAccounting":a.underline=34;break}break;case"<u/>":a.underline=1;break;case"<strike":a.strike=s.val?q2(s.val):1;break;case"<strike/>":a.strike=1;break;case"<outline":a.outline=s.val?q2(s.val):1;break;case"<outline/>":a.outline=1;break;case"<shadow":a.shadow=s.val?q2(s.val):1;break;case"<shadow/>":a.shadow=1;break;case"<condense":a.condense=s.val?q2(s.val):1;break;case"<condense/>":a.condense=1;break;case"<extend":a.extend=s.val?q2(s.val):1;break;case"<extend/>":a.extend=1;break;case"<sz":s.val&&(a.sz=+s.val);break;case"<sz/>":case"</sz>":break;case"<vertAlign":s.val&&(a.vertAlign=s.val);break;case"<vertAlign/>":case"</vertAlign>":break;case"<family":s.val&&(a.family=parseInt(s.val,10));break;case"<family/>":case"</family>":break;case"<scheme":s.val&&(a.scheme=s.val);break;case"<scheme/>":case"</scheme>":break;case"<charset":if(s.val=="1")break;s.codepage=ua[parseInt(s.val,10)];break;case"<color":if(a.color||(a.color={}),s.auto&&(a.color.auto=q2(s.auto)),s.rgb)a.color.rgb=s.rgb.slice(-6);else if(s.indexed){a.color.index=parseInt(s.indexed,10);var l=l9[a.color.index];a.color.index==81&&(l=l9[1]),l||(l=l9[1]),a.color.rgb=l[0].toString(16)+l[1].toString(16)+l[2].toString(16)}else s.theme&&(a.color.theme=parseInt(s.theme,10),s.tint&&(a.color.tint=parseFloat(s.tint)),s.theme&&t.themeElements&&t.themeElements.clrScheme&&(a.color.rgb=v7(t.themeElements.clrScheme[a.color.theme].rgb,a.color.tint||0)));break;case"<color/>":case"</color>":break;case"<AlternateContent":i=!0;break;case"</AlternateContent>":i=!1;break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":i=!0;break;case"</ext>":i=!1;break;default:if(r&&r.WTF&&!i)throw new Error("unrecognized "+s[0]+" in fonts")}})}function z_(n,e,t){e.NumberFmt=[];for(var r=I4(b2),a=0;a<r.length;++a)e.NumberFmt[r[a]]=b2[r[a]];var i=n[0].match(r0);if(i)for(a=0;a<i.length;++a){var o=v2(i[a]);switch(L4(o[0])){case"<numFmts":case"</numFmts>":case"<numFmts/>":case"<numFmts>":break;case"<numFmt":{var s=L2($2(o.formatCode)),l=parseInt(o.numFmtId,10);if(e.NumberFmt[l]=s,l>0){if(l>392){for(l=392;l>60&&e.NumberFmt[l]!=null;--l);e.NumberFmt[l]=s}s9(s,l)}}break;case"</numFmt>":break;default:if(t.WTF)throw new Error("unrecognized "+o[0]+" in numFmts")}}}var x6=["numFmtId","fillId","fontId","borderId","xfId"],y6=["applyAlignment","applyBorder","applyFill","applyFont","applyNumberFormat","applyProtection","pivotButton","quotePrefix"];function U_(n,e,t){e.CellXf=[];var r,a=!1;(n[0].match(r0)||[]).forEach(function(i){var o=v2(i),s=0;switch(L4(o[0])){case"<cellXfs":case"<cellXfs>":case"<cellXfs/>":case"</cellXfs>":break;case"<xf":case"<xf/>":for(r=o,delete r[0],s=0;s<x6.length;++s)r[x6[s]]&&(r[x6[s]]=parseInt(r[x6[s]],10));for(s=0;s<y6.length;++s)r[y6[s]]&&(r[y6[s]]=q2(r[y6[s]]));if(e.NumberFmt&&r.numFmtId>392){for(s=392;s>60;--s)if(e.NumberFmt[r.numFmtId]==e.NumberFmt[s]){r.numFmtId=s;break}}e.CellXf.push(r);break;case"</xf>":break;case"<alignment":case"<alignment/>":var l={};o.vertical&&(l.vertical=o.vertical),o.horizontal&&(l.horizontal=o.horizontal),o.textRotation!=null&&(l.textRotation=o.textRotation),o.indent&&(l.indent=o.indent),o.wrapText&&(l.wrapText=q2(o.wrapText)),r.alignment=l;break;case"</alignment>":break;case"<protection":break;case"</protection>":case"<protection/>":break;case"<AlternateContent":a=!0;break;case"</AlternateContent>":a=!1;break;case"<extLst":case"<extLst>":case"</extLst>":break;case"<ext":a=!0;break;case"</ext>":a=!1;break;default:if(t&&t.WTF&&!a)throw new Error("unrecognized "+o[0]+" in cellXfs")}})}var B_=function(){var e=/<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/,t=/<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/,r=/<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/,a=/<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/,i=/<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;return function(s,l,u){var f={};if(!s)return f;s=s.replace(/<!--([\s\S]*?)-->/mg,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");var d;return(d=s.match(e))&&z_(d,f,u),(d=s.match(a))&&N_(d,f,l,u),(d=s.match(r))&&P_(d,f,l,u),(d=s.match(i))&&F_(d,f,l,u),(d=s.match(t))&&U_(d,f,u),f}}();function V_(n,e){var t=n.read_shift(2),r=Q3(n);return[t,r]}function G_(n,e,t){var r={};r.sz=n.read_shift(2)/20;var a=Qm(n);a.fItalic&&(r.italic=1),a.fCondense&&(r.condense=1),a.fExtend&&(r.extend=1),a.fShadow&&(r.shadow=1),a.fOutline&&(r.outline=1),a.fStrikeout&&(r.strike=1);var i=n.read_shift(2);switch(i===700&&(r.bold=1),n.read_shift(2)){case 1:r.vertAlign="superscript";break;case 2:r.vertAlign="subscript";break}var o=n.read_shift(1);o!=0&&(r.underline=o);var s=n.read_shift(1);s>0&&(r.family=s);var l=n.read_shift(1);switch(l>0&&(r.charset=l),n.l++,r.color=qm(n),n.read_shift(1)){case 1:r.scheme="major";break;case 2:r.scheme="minor";break}return r.name=Q3(n),r}var W_=n0;function j_(n,e){var t=n.l+e,r=n.read_shift(2),a=n.read_shift(2);return n.l=t,{ixfe:r,numFmtId:a}}var H_=n0;function $_(n,e,t){var r={};r.NumberFmt=[];for(var a in b2)r.NumberFmt[a]=b2[a];r.CellXf=[],r.Fonts=[];var i=[],o=!1;return le(n,function(l,u,f){switch(f){case 44:r.NumberFmt[l[0]]=l[1],s9(l[1],l[0]);break;case 43:r.Fonts.push(l),l.color.theme!=null&&e&&e.themeElements&&e.themeElements.clrScheme&&(l.color.rgb=v7(e.themeElements.clrScheme[l.color.theme].rgb,l.color.tint||0));break;case 1025:break;case 45:break;case 46:break;case 47:i[i.length-1]==617&&r.CellXf.push(l);break;case 48:case 507:case 572:case 475:break;case 1171:case 2102:case 1130:case 512:case 2095:case 3072:break;case 35:o=!0;break;case 36:o=!1;break;case 37:i.push(f),o=!0;break;case 38:i.pop(),o=!1;break;default:if(u.T>0)i.push(f);else if(u.T<0)i.pop();else if(!o||t.WTF&&i[i.length-1]!=37)throw new Error("Unexpected record 0x"+f.toString(16))}}),r}var Y_=["</a:lt1>","</a:dk1>","</a:lt2>","</a:dk2>","</a:accent1>","</a:accent2>","</a:accent3>","</a:accent4>","</a:accent5>","</a:accent6>","</a:hlink>","</a:folHlink>"];function X_(n,e,t){e.themeElements.clrScheme=[];var r={};(n[0].match(r0)||[]).forEach(function(a){var i=v2(a);switch(i[0]){case"<a:clrScheme":case"</a:clrScheme>":break;case"<a:srgbClr":r.rgb=i.val;break;case"<a:sysClr":r.rgb=i.lastClr;break;case"<a:dk1>":case"</a:dk1>":case"<a:lt1>":case"</a:lt1>":case"<a:dk2>":case"</a:dk2>":case"<a:lt2>":case"</a:lt2>":case"<a:accent1>":case"</a:accent1>":case"<a:accent2>":case"</a:accent2>":case"<a:accent3>":case"</a:accent3>":case"<a:accent4>":case"</a:accent4>":case"<a:accent5>":case"</a:accent5>":case"<a:accent6>":case"</a:accent6>":case"<a:hlink>":case"</a:hlink>":case"<a:folHlink>":case"</a:folHlink>":i[0].charAt(1)==="/"?(e.themeElements.clrScheme[Y_.indexOf(i[0])]=r,r={}):r.name=i[0].slice(3,i[0].length-1);break;default:if(t&&t.WTF)throw new Error("Unrecognized "+i[0]+" in clrScheme")}})}function J_(){}function Z_(){}var q_=/<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/,Q_=/<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,K_=/<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;function ex(n,e,t){e.themeElements={};var r;[["clrScheme",q_,X_],["fontScheme",Q_,J_],["fmtScheme",K_,Z_]].forEach(function(a){if(!(r=n.match(a[1])))throw new Error(a[0]+" not found in themeElements");a[2](r,e,t)})}var tx=/<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;function Yu(n,e){(!n||n.length===0)&&(n=nx());var t,r={};if(!(t=n.match(tx)))throw new Error("themeElements not found in theme");return ex(t[0],r,e),r.raw=n,r}function nx(n,e){if(e&&e.themeXLSX)return e.themeXLSX;if(n&&typeof n.raw=="string")return n.raw;var t=[au];return t[t.length]='<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">',t[t.length]="<a:themeElements>",t[t.length]='<a:clrScheme name="Office">',t[t.length]='<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>',t[t.length]='<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>',t[t.length]='<a:dk2><a:srgbClr val="1F497D"/></a:dk2>',t[t.length]='<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>',t[t.length]='<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>',t[t.length]='<a:accent2><a:srgbClr val="C0504D"/></a:accent2>',t[t.length]='<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>',t[t.length]='<a:accent4><a:srgbClr val="8064A2"/></a:accent4>',t[t.length]='<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>',t[t.length]='<a:accent6><a:srgbClr val="F79646"/></a:accent6>',t[t.length]='<a:hlink><a:srgbClr val="0000FF"/></a:hlink>',t[t.length]='<a:folHlink><a:srgbClr val="800080"/></a:folHlink>',t[t.length]="</a:clrScheme>",t[t.length]='<a:fontScheme name="Office">',t[t.length]="<a:majorFont>",t[t.length]='<a:latin typeface="Cambria"/>',t[t.length]='<a:ea typeface=""/>',t[t.length]='<a:cs typeface=""/>',t[t.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',t[t.length]='<a:font script="Hang" typeface="맑은 고딕"/>',t[t.length]='<a:font script="Hans" typeface="宋体"/>',t[t.length]='<a:font script="Hant" typeface="新細明體"/>',t[t.length]='<a:font script="Arab" typeface="Times New Roman"/>',t[t.length]='<a:font script="Hebr" typeface="Times New Roman"/>',t[t.length]='<a:font script="Thai" typeface="Tahoma"/>',t[t.length]='<a:font script="Ethi" typeface="Nyala"/>',t[t.length]='<a:font script="Beng" typeface="Vrinda"/>',t[t.length]='<a:font script="Gujr" typeface="Shruti"/>',t[t.length]='<a:font script="Khmr" typeface="MoolBoran"/>',t[t.length]='<a:font script="Knda" typeface="Tunga"/>',t[t.length]='<a:font script="Guru" typeface="Raavi"/>',t[t.length]='<a:font script="Cans" typeface="Euphemia"/>',t[t.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',t[t.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',t[t.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',t[t.length]='<a:font script="Thaa" typeface="MV Boli"/>',t[t.length]='<a:font script="Deva" typeface="Mangal"/>',t[t.length]='<a:font script="Telu" typeface="Gautami"/>',t[t.length]='<a:font script="Taml" typeface="Latha"/>',t[t.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',t[t.length]='<a:font script="Orya" typeface="Kalinga"/>',t[t.length]='<a:font script="Mlym" typeface="Kartika"/>',t[t.length]='<a:font script="Laoo" typeface="DokChampa"/>',t[t.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',t[t.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',t[t.length]='<a:font script="Viet" typeface="Times New Roman"/>',t[t.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',t[t.length]='<a:font script="Geor" typeface="Sylfaen"/>',t[t.length]="</a:majorFont>",t[t.length]="<a:minorFont>",t[t.length]='<a:latin typeface="Calibri"/>',t[t.length]='<a:ea typeface=""/>',t[t.length]='<a:cs typeface=""/>',t[t.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',t[t.length]='<a:font script="Hang" typeface="맑은 고딕"/>',t[t.length]='<a:font script="Hans" typeface="宋体"/>',t[t.length]='<a:font script="Hant" typeface="新細明體"/>',t[t.length]='<a:font script="Arab" typeface="Arial"/>',t[t.length]='<a:font script="Hebr" typeface="Arial"/>',t[t.length]='<a:font script="Thai" typeface="Tahoma"/>',t[t.length]='<a:font script="Ethi" typeface="Nyala"/>',t[t.length]='<a:font script="Beng" typeface="Vrinda"/>',t[t.length]='<a:font script="Gujr" typeface="Shruti"/>',t[t.length]='<a:font script="Khmr" typeface="DaunPenh"/>',t[t.length]='<a:font script="Knda" typeface="Tunga"/>',t[t.length]='<a:font script="Guru" typeface="Raavi"/>',t[t.length]='<a:font script="Cans" typeface="Euphemia"/>',t[t.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',t[t.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',t[t.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',t[t.length]='<a:font script="Thaa" typeface="MV Boli"/>',t[t.length]='<a:font script="Deva" typeface="Mangal"/>',t[t.length]='<a:font script="Telu" typeface="Gautami"/>',t[t.length]='<a:font script="Taml" typeface="Latha"/>',t[t.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',t[t.length]='<a:font script="Orya" typeface="Kalinga"/>',t[t.length]='<a:font script="Mlym" typeface="Kartika"/>',t[t.length]='<a:font script="Laoo" typeface="DokChampa"/>',t[t.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',t[t.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',t[t.length]='<a:font script="Viet" typeface="Arial"/>',t[t.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',t[t.length]='<a:font script="Geor" typeface="Sylfaen"/>',t[t.length]="</a:minorFont>",t[t.length]="</a:fontScheme>",t[t.length]='<a:fmtScheme name="Office">',t[t.length]="<a:fillStyleLst>",t[t.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:lin ang="16200000" scaled="1"/>',t[t.length]="</a:gradFill>",t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:lin ang="16200000" scaled="0"/>',t[t.length]="</a:gradFill>",t[t.length]="</a:fillStyleLst>",t[t.length]="<a:lnStyleLst>",t[t.length]='<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>',t[t.length]='<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',t[t.length]='<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',t[t.length]="</a:lnStyleLst>",t[t.length]="<a:effectStyleLst>",t[t.length]="<a:effectStyle>",t[t.length]="<a:effectLst>",t[t.length]='<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>',t[t.length]="</a:effectLst>",t[t.length]="</a:effectStyle>",t[t.length]="<a:effectStyle>",t[t.length]="<a:effectLst>",t[t.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',t[t.length]="</a:effectLst>",t[t.length]="</a:effectStyle>",t[t.length]="<a:effectStyle>",t[t.length]="<a:effectLst>",t[t.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',t[t.length]="</a:effectLst>",t[t.length]='<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>',t[t.length]='<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>',t[t.length]="</a:effectStyle>",t[t.length]="</a:effectStyleLst>",t[t.length]="<a:bgFillStyleLst>",t[t.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>',t[t.length]="</a:gradFill>",t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>',t[t.length]="</a:gradFill>",t[t.length]="</a:bgFillStyleLst>",t[t.length]="</a:fmtScheme>",t[t.length]="</a:themeElements>",t[t.length]="<a:objectDefaults>",t[t.length]="<a:spDef>",t[t.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>',t[t.length]="</a:spDef>",t[t.length]="<a:lnDef>",t[t.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>',t[t.length]="</a:lnDef>",t[t.length]="</a:objectDefaults>",t[t.length]="<a:extraClrSchemeLst/>",t[t.length]="</a:theme>",t.join("")}function rx(n,e,t){var r=n.l+e,a=n.read_shift(4);if(a!==124226){if(!t.cellStyles){n.l=r;return}var i=n.slice(n.l);n.l=r;var o;try{o=ru(i,{type:"array"})}catch(l){return}var s=O0(o,"theme/theme/theme1.xml",!0);if(s)return Yu(s,t)}}function ax(n){return n.read_shift(4)}function ix(n){var e={};switch(e.xclrType=n.read_shift(2),e.nTintShade=n.read_shift(2),e.xclrType){case 0:n.l+=4;break;case 1:e.xclrValue=ox(n,4);break;case 2:e.xclrValue=Ou(n);break;case 3:e.xclrValue=ax(n);break;case 4:n.l+=4;break}return n.l+=8,e}function ox(n,e){return n0(n,e)}function sx(n,e){return n0(n,e)}function lx(n){var e=n.read_shift(2),t=n.read_shift(2)-4,r=[e];switch(e){case 4:case 5:case 7:case 8:case 9:case 10:case 11:case 13:r[1]=ix(n);break;case 6:r[1]=sx(n,t);break;case 14:case 15:r[1]=n.read_shift(t===1?1:2);break;default:throw new Error("Unrecognized ExtProp type: "+e+" "+t)}return r}function cx(n,e){var t=n.l+e;n.l+=2;var r=n.read_shift(2);n.l+=2;for(var a=n.read_shift(2),i=[];a-- >0;)i.push(lx(n,t-n.l));return{ixfe:r,ext:i}}function ux(n,e){e.forEach(function(t){switch(t[0]){}})}function fx(n,e){return{flags:n.read_shift(4),version:n.read_shift(4),name:Q3(n)}}function dx(n){for(var e=[],t=n.read_shift(4);t-- >0;)e.push([n.read_shift(4),n.read_shift(4)]);return e}function hx(n){return n.l+=4,n.read_shift(4)!=0}function px(n,e,t){var r={Types:[],Cell:[],Value:[]},a=t||{},i=[],o=!1,s=2;return le(n,function(l,u,f){switch(f){case 335:r.Types.push({name:l.name});break;case 51:l.forEach(function(d){s==1?r.Cell.push({type:r.Types[d[0]-1].name,index:d[1]}):s==0&&r.Value.push({type:r.Types[d[0]-1].name,index:d[1]})});break;case 337:s=l?1:0;break;case 338:s=2;break;case 35:i.push(f),o=!0;break;case 36:i.pop(),o=!1;break;default:if(!u.T){if(!o||a.WTF&&i[i.length-1]!=35)throw new Error("Unexpected record 0x"+f.toString(16))}}}),r}function mx(n,e,t){var r={Types:[],Cell:[],Value:[]};if(!n)return r;var a=!1,i=2,o;return n.replace(r0,function(s){var l=v2(s);switch(L4(l[0])){case"<?xml":break;case"<metadata":case"</metadata>":break;case"<metadataTypes":case"</metadataTypes>":break;case"<metadataType":r.Types.push({name:l.name});break;case"</metadataType>":break;case"<futureMetadata":for(var u=0;u<r.Types.length;++u)r.Types[u].name==l.name&&(o=r.Types[u]);break;case"</futureMetadata>":break;case"<bk>":break;case"</bk>":break;case"<rc":i==1?r.Cell.push({type:r.Types[l.t-1].name,index:+l.v}):i==0&&r.Value.push({type:r.Types[l.t-1].name,index:+l.v});break;case"</rc>":break;case"<cellMetadata":i=1;break;case"</cellMetadata>":i=2;break;case"<valueMetadata":i=0;break;case"</valueMetadata>":i=2;break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":a=!0;break;case"</ext>":a=!1;break;case"<rvb":if(!o)break;o.offsets||(o.offsets=[]),o.offsets.push(+l.i);break;default:if(!a&&t.WTF)throw new Error("unrecognized "+l[0]+" in metadata")}return s}),r}function gx(n){var e=[];if(!n)return e;var t=1;return(n.match(r0)||[]).forEach(function(r){var a=v2(r);switch(a[0]){case"<?xml":break;case"<calcChain":case"<calcChain>":case"</calcChain>":break;case"<c":delete a[0],a.i?t=a.i:a.i=t,e.push(a);break}}),e}function vx(n){var e={};e.i=n.read_shift(4);var t={};t.r=n.read_shift(4),t.c=n.read_shift(4),e.r=y2(t);var r=n.read_shift(1);return r&2&&(e.l="1"),r&8&&(e.a="1"),e}function _x(n,e,t){var r=[];return le(n,function(i,o,s){switch(s){case 63:r.push(i);break;default:if(!o.T)throw new Error("Unexpected record 0x"+s.toString(16))}}),r}function xx(n,e,t,r){if(!n)return n;var a=r||{},i=!1;le(n,function(s,l,u){switch(u){case 359:case 363:case 364:case 366:case 367:case 368:case 369:case 370:case 371:case 472:case 577:case 578:case 579:case 580:case 581:case 582:case 583:case 584:case 585:case 586:case 587:break;case 35:i=!0;break;case 36:i=!1;break;default:if(!l.T){if(!i||a.WTF)throw new Error("Unexpected record 0x"+u.toString(16))}}},a)}function yx(n,e){if(!n)return"??";var t=(n.match(/<c:chart [^>]*r:id="([^"]*)"/)||["",""])[1];return e["!id"][t].Target}function rs(n,e,t,r){var a=Array.isArray(n),i;e.forEach(function(o){var s=l0(o.ref);if(a?(n[s.r]||(n[s.r]=[]),i=n[s.r][s.c]):i=n[o.ref],!i){i={t:"z"},a?n[s.r][s.c]=i:n[o.ref]=i;var l=l3(n["!ref"]||"BDWGO1000001:A1");l.s.r>s.r&&(l.s.r=s.r),l.e.r<s.r&&(l.e.r=s.r),l.s.c>s.c&&(l.s.c=s.c),l.e.c<s.c&&(l.e.c=s.c);var u=I2(l);u!==n["!ref"]&&(n["!ref"]=u)}i.c||(i.c=[]);var f={a:o.author,t:o.t,r:o.r,T:t};o.h&&(f.h=o.h);for(var d=i.c.length-1;d>=0;--d){if(!t&&i.c[d].T)return;t&&!i.c[d].T&&i.c.splice(d,1)}if(t&&r){for(d=0;d<r.length;++d)if(f.a==r[d].id){f.a=r[d].name||f.a;break}}i.c.push(f)})}function bx(n,e){if(n.match(/<(?:\w+:)?comments *\/>/))return[];var t=[],r=[],a=n.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);a&&a[1]&&a[1].split(/<\/\w*:?author>/).forEach(function(o){if(!(o===""||o.trim()==="")){var s=o.match(/<(?:\w+:)?author[^>]*>(.*)/);s&&t.push(s[1])}});var i=n.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);return i&&i[1]&&i[1].split(/<\/\w*:?comment>/).forEach(function(o){if(!(o===""||o.trim()==="")){var s=o.match(/<(?:\w+:)?comment[^>]*>/);if(s){var l=v2(s[0]),u={author:l.authorId&&t[l.authorId]||"sheetjsghost",ref:l.ref,guid:l.guid},f=l0(l.ref);if(!(e.sheetRows&&e.sheetRows<=f.r)){var d=o.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/),h=!!d&&!!d[1]&&Ca(d[1])||{r:"",t:"",h:""};u.r=h.r,h.r=="<t></t>"&&(h.t=h.h=""),u.t=(h.t||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),e.cellHTML&&(u.h=h.h),r.push(u)}}}}),r}function Sx(n,e){var t=[],r=!1,a={},i=0;return n.replace(r0,function(s,l){var u=v2(s);switch(L4(u[0])){case"<?xml":break;case"<ThreadedComments":break;case"</ThreadedComments>":break;case"<threadedComment":a={author:u.personId,guid:u.id,ref:u.ref,T:1};break;case"</threadedComment>":a.t!=null&&t.push(a);break;case"<text>":case"<text":i=l+s.length;break;case"</text>":a.t=n.slice(i,l).replace(/\r\n/g,`
`).replace(/\r/g,`
`);break;case"<mentions":case"<mentions>":r=!0;break;case"</mentions>":r=!1;break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":r=!0;break;case"</ext>":r=!1;break;default:if(!r&&e.WTF)throw new Error("unrecognized "+u[0]+" in threaded comments")}return s}),t}function wx(n,e){var t=[],r=!1;return n.replace(r0,function(i){var o=v2(i);switch(L4(o[0])){case"<?xml":break;case"<personList":break;case"</personList>":break;case"<person":t.push({name:o.displayname,id:o.id});break;case"</person>":break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":r=!0;break;case"</ext>":r=!1;break;default:if(!r&&e.WTF)throw new Error("unrecognized "+o[0]+" in threaded comments")}return i}),t}function Ax(n){var e={};e.iauthor=n.read_shift(4);var t=M9(n);return e.rfx=t.s,e.ref=y2(t.s),n.l+=16,e}var Tx=Q3;function Ex(n,e){var t=[],r=[],a={},i=!1;return le(n,function(s,l,u){switch(u){case 632:r.push(s);break;case 635:a=s;break;case 637:a.t=s.t,a.h=s.h,a.r=s.r;break;case 636:if(a.author=r[a.iauthor],delete a.iauthor,e.sheetRows&&a.rfx&&e.sheetRows<=a.rfx.r)break;a.t||(a.t=""),delete a.rfx,t.push(a);break;case 3072:break;case 35:i=!0;break;case 36:i=!1;break;case 37:break;case 38:break;default:if(!l.T){if(!i||e.WTF)throw new Error("Unexpected record 0x"+u.toString(16))}}}),t}var Cx="application/vnd.ms-office.vbaProject";function Mx(n){var e=k2.utils.cfb_new({root:"R"});return n.FullPaths.forEach(function(t,r){if(!(t.slice(-1)==="/"||!t.match(/_VBA_PROJECT_CUR/))){var a=t.replace(/^[^\/]*/,"R").replace(/\/_VBA_PROJECT_CUR\u0000*/,"");k2.utils.cfb_add(e,a,n.FileIndex[r].content)}}),k2.write(e)}function Dx(){return{"!type":"dialog"}}function kx(){return{"!type":"dialog"}}function Rx(){return{"!type":"macro"}}function Ix(){return{"!type":"macro"}}var x5=function(){var n=/(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,e={r:0,c:0};function t(r,a,i,o){var s=!1,l=!1;i.length==0?l=!0:i.charAt(0)=="["&&(l=!0,i=i.slice(1,-1)),o.length==0?s=!0:o.charAt(0)=="["&&(s=!0,o=o.slice(1,-1));var u=i.length>0?parseInt(i,10)|0:0,f=o.length>0?parseInt(o,10)|0:0;return s?f+=e.c:--f,l?u+=e.r:--u,a+(s?"":"$")+C3(f)+(l?"":"$")+W3(u)}return function(a,i){return e=i,a.replace(n,t)}}(),Xu=/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,Ox=function(){return function(e,t){return e.replace(Xu,function(r,a,i,o,s,l){var u=ba(o)-(i?0:t.c),f=ya(l)-(s?0:t.r),d=f==0?"":s?f+1:"["+f+"]",h=u==0?"":i?u+1:"["+u+"]";return a+"R"+d+"C"+h})}}();function Ju(n,e){return n.replace(Xu,function(t,r,a,i,o,s){return r+(a=="$"?a+i:C3(ba(i)+e.c))+(o=="$"?o+s:W3(ya(s)+e.r))})}function Lx(n,e,t){var r=B5(e),a=r.s,i=l0(t),o={r:i.r-a.r,c:i.c-a.c};return Ju(n,o)}function Fx(n){return n.length!=1}function as(n){return n.replace(/_xlfn\./g,"")}function v3(n){n.l+=1}function Ne(n,e){var t=n.read_shift(e==1?1:2);return[t&16383,t>>14&1,t>>15&1]}function Zu(n,e,t){var r=2;if(t){if(t.biff>=2&&t.biff<=5)return qu(n);t.biff==12&&(r=4)}var a=n.read_shift(r),i=n.read_shift(r),o=Ne(n,2),s=Ne(n,2);return{s:{r:a,c:o[0],cRel:o[1],rRel:o[2]},e:{r:i,c:s[0],cRel:s[1],rRel:s[2]}}}function qu(n){var e=Ne(n,2),t=Ne(n,2),r=n.read_shift(1),a=n.read_shift(1);return{s:{r:e[0],c:r,cRel:e[1],rRel:e[2]},e:{r:t[0],c:a,cRel:t[1],rRel:t[2]}}}function Px(n,e,t){if(t.biff<8)return qu(n);var r=n.read_shift(t.biff==12?4:2),a=n.read_shift(t.biff==12?4:2),i=Ne(n,2),o=Ne(n,2);return{s:{r,c:i[0],cRel:i[1],rRel:i[2]},e:{r:a,c:o[0],cRel:o[1],rRel:o[2]}}}function Qu(n,e,t){if(t&&t.biff>=2&&t.biff<=5)return Nx(n);var r=n.read_shift(t&&t.biff==12?4:2),a=Ne(n,2);return{r,c:a[0],cRel:a[1],rRel:a[2]}}function Nx(n){var e=Ne(n,2),t=n.read_shift(1);return{r:e[0],c:t,cRel:e[1],rRel:e[2]}}function zx(n){var e=n.read_shift(2),t=n.read_shift(2);return{r:e,c:t&255,fQuoted:!!(t&16384),cRel:t>>15,rRel:t>>15}}function Ux(n,e,t){var r=t&&t.biff?t.biff:8;if(r>=2&&r<=5)return Bx(n);var a=n.read_shift(r>=12?4:2),i=n.read_shift(2),o=(i&16384)>>14,s=(i&32768)>>15;if(i&=16383,s==1)for(;a>524287;)a-=1048576;if(o==1)for(;i>8191;)i=i-16384;return{r:a,c:i,cRel:o,rRel:s}}function Bx(n){var e=n.read_shift(2),t=n.read_shift(1),r=(e&32768)>>15,a=(e&16384)>>14;return e&=16383,r==1&&e>=8192&&(e=e-16384),a==1&&t>=128&&(t=t-256),{r:e,c:t,cRel:a,rRel:r}}function Vx(n,e,t){var r=(n[n.l++]&96)>>5,a=Zu(n,t.biff>=2&&t.biff<=5?6:8,t);return[r,a]}function Gx(n,e,t){var r=(n[n.l++]&96)>>5,a=n.read_shift(2,"i"),i=8;if(t)switch(t.biff){case 5:n.l+=12,i=6;break;case 12:i=12;break}var o=Zu(n,i,t);return[r,a,o]}function Wx(n,e,t){var r=(n[n.l++]&96)>>5;return n.l+=t&&t.biff>8?12:t.biff<8?6:8,[r]}function jx(n,e,t){var r=(n[n.l++]&96)>>5,a=n.read_shift(2),i=8;if(t)switch(t.biff){case 5:n.l+=12,i=6;break;case 12:i=12;break}return n.l+=i,[r,a]}function Hx(n,e,t){var r=(n[n.l++]&96)>>5,a=Px(n,e-1,t);return[r,a]}function $x(n,e,t){var r=(n[n.l++]&96)>>5;return n.l+=t.biff==2?6:t.biff==12?14:7,[r]}function is(n){var e=n[n.l+1]&1,t=1;return n.l+=4,[e,t]}function Yx(n,e,t){n.l+=2;for(var r=n.read_shift(t&&t.biff==2?1:2),a=[],i=0;i<=r;++i)a.push(n.read_shift(t&&t.biff==2?1:2));return a}function Xx(n,e,t){var r=n[n.l+1]&255?1:0;return n.l+=2,[r,n.read_shift(t&&t.biff==2?1:2)]}function Jx(n,e,t){var r=n[n.l+1]&255?1:0;return n.l+=2,[r,n.read_shift(t&&t.biff==2?1:2)]}function Zx(n){var e=n[n.l+1]&255?1:0;return n.l+=2,[e,n.read_shift(2)]}function qx(n,e,t){var r=n[n.l+1]&255?1:0;return n.l+=t&&t.biff==2?3:4,[r]}function Ku(n){var e=n.read_shift(1),t=n.read_shift(1);return[e,t]}function Qx(n){return n.read_shift(2),Ku(n)}function Kx(n){return n.read_shift(2),Ku(n)}function ey(n,e,t){var r=(n[n.l]&96)>>5;n.l+=1;var a=Qu(n,0,t);return[r,a]}function ty(n,e,t){var r=(n[n.l]&96)>>5;n.l+=1;var a=Ux(n,0,t);return[r,a]}function ny(n,e,t){var r=(n[n.l]&96)>>5;n.l+=1;var a=n.read_shift(2);t&&t.biff==5&&(n.l+=12);var i=Qu(n,0,t);return[r,a,i]}function ry(n,e,t){var r=(n[n.l]&96)>>5;n.l+=1;var a=n.read_shift(t&&t.biff<=3?1:2);return[ab[a],nf[a],r]}function ay(n,e,t){var r=n[n.l++],a=n.read_shift(1),i=t&&t.biff<=3?[r==88?-1:0,n.read_shift(1)]:iy(n);return[a,(i[0]===0?nf:rb)[i[1]]]}function iy(n){return[n[n.l+1]>>7,n.read_shift(2)&32767]}function oy(n,e,t){n.l+=t&&t.biff==2?3:4}function sy(n,e,t){if(n.l++,t&&t.biff==12)return[n.read_shift(4,"i"),0];var r=n.read_shift(2),a=n.read_shift(t&&t.biff==2?1:2);return[r,a]}function ly(n){return n.l++,D9[n.read_shift(1)]}function cy(n){return n.l++,n.read_shift(2)}function uy(n){return n.l++,n.read_shift(1)!==0}function fy(n){return n.l++,J3(n)}function dy(n,e,t){return n.l++,q8(n,e-1,t)}function hy(n,e){var t=[n.read_shift(1)];if(e==12)switch(t[0]){case 2:t[0]=4;break;case 4:t[0]=16;break;case 0:t[0]=1;break;case 1:t[0]=2;break}switch(t[0]){case 4:t[1]=d3(n,1)?"TRUE":"FALSE",e!=12&&(n.l+=7);break;case 37:case 16:t[1]=D9[n[n.l]],n.l+=e==12?4:8;break;case 0:n.l+=8;break;case 1:t[1]=J3(n);break;case 2:t[1]=k9(n,0,{biff:e>0&&e<8?2:e});break;default:throw new Error("Bad SerAr: "+t[0])}return t}function py(n,e,t){for(var r=n.read_shift(t.biff==12?4:2),a=[],i=0;i!=r;++i)a.push((t.biff==12?M9:W7)(n));return a}function my(n,e,t){var r=0,a=0;t.biff==12?(r=n.read_shift(4),a=n.read_shift(4)):(a=1+n.read_shift(1),r=1+n.read_shift(2)),t.biff>=2&&t.biff<8&&(--r,--a==0&&(a=256));for(var i=0,o=[];i!=r&&(o[i]=[]);++i)for(var s=0;s!=a;++s)o[i][s]=hy(n,t.biff);return o}function gy(n,e,t){var r=n.read_shift(1)>>>5&3,a=!t||t.biff>=8?4:2,i=n.read_shift(a);switch(t.biff){case 2:n.l+=5;break;case 3:case 4:n.l+=8;break;case 5:n.l+=12;break}return[r,0,i]}function vy(n,e,t){if(t.biff==5)return _y(n);var r=n.read_shift(1)>>>5&3,a=n.read_shift(2),i=n.read_shift(4);return[r,a,i]}function _y(n){var e=n.read_shift(1)>>>5&3,t=n.read_shift(2,"i");n.l+=8;var r=n.read_shift(2);return n.l+=12,[e,t,r]}function xy(n,e,t){var r=n.read_shift(1)>>>5&3;n.l+=t&&t.biff==2?3:4;var a=n.read_shift(t&&t.biff==2?1:2);return[r,a]}function yy(n,e,t){var r=n.read_shift(1)>>>5&3,a=n.read_shift(t&&t.biff==2?1:2);return[r,a]}function by(n,e,t){var r=n.read_shift(1)>>>5&3;return n.l+=4,t.biff<8&&n.l--,t.biff==12&&(n.l+=2),[r]}function Sy(n,e,t){var r=(n[n.l++]&96)>>5,a=n.read_shift(2),i=4;if(t)switch(t.biff){case 5:i=15;break;case 12:i=6;break}return n.l+=i,[r,a]}var wy=n0,Ay=n0,Ty=n0;function K8(n,e,t){return n.l+=2,[zx(n)]}function Da(n){return n.l+=6,[]}var Ey=K8,Cy=Da,My=Da,Dy=K8;function ef(n){return n.l+=2,[y3(n),n.read_shift(2)&1]}var ky=K8,Ry=ef,Iy=Da,Oy=K8,Ly=K8,Fy=["Data","All","Headers","??","?Data2","??","?DataHeaders","??","Totals","??","??","??","?DataTotals","??","??","??","?Current"];function Py(n){n.l+=2;var e=n.read_shift(2),t=n.read_shift(2),r=n.read_shift(4),a=n.read_shift(2),i=n.read_shift(2),o=Fy[t>>2&31];return{ixti:e,coltype:t&3,rt:o,idx:r,c:a,C:i}}function Ny(n){return n.l+=2,[n.read_shift(4)]}function zy(n,e,t){return n.l+=5,n.l+=2,n.l+=t.biff==2?1:4,["PTGSHEET"]}function Uy(n,e,t){return n.l+=t.biff==2?4:5,["PTGENDSHEET"]}function By(n){var e=n.read_shift(1)>>>5&3,t=n.read_shift(2);return[e,t]}function Vy(n){var e=n.read_shift(1)>>>5&3,t=n.read_shift(2);return[e,t]}function Gy(n){return n.l+=4,[0,0]}var os={1:{n:"PtgExp",f:sy},2:{n:"PtgTbl",f:Ty},3:{n:"PtgAdd",f:v3},4:{n:"PtgSub",f:v3},5:{n:"PtgMul",f:v3},6:{n:"PtgDiv",f:v3},7:{n:"PtgPower",f:v3},8:{n:"PtgConcat",f:v3},9:{n:"PtgLt",f:v3},10:{n:"PtgLe",f:v3},11:{n:"PtgEq",f:v3},12:{n:"PtgGe",f:v3},13:{n:"PtgGt",f:v3},14:{n:"PtgNe",f:v3},15:{n:"PtgIsect",f:v3},16:{n:"PtgUnion",f:v3},17:{n:"PtgRange",f:v3},18:{n:"PtgUplus",f:v3},19:{n:"PtgUminus",f:v3},20:{n:"PtgPercent",f:v3},21:{n:"PtgParen",f:v3},22:{n:"PtgMissArg",f:v3},23:{n:"PtgStr",f:dy},26:{n:"PtgSheet",f:zy},27:{n:"PtgEndSheet",f:Uy},28:{n:"PtgErr",f:ly},29:{n:"PtgBool",f:uy},30:{n:"PtgInt",f:cy},31:{n:"PtgNum",f:fy},32:{n:"PtgArray",f:$x},33:{n:"PtgFunc",f:ry},34:{n:"PtgFuncVar",f:ay},35:{n:"PtgName",f:gy},36:{n:"PtgRef",f:ey},37:{n:"PtgArea",f:Vx},38:{n:"PtgMemArea",f:xy},39:{n:"PtgMemErr",f:wy},40:{n:"PtgMemNoMem",f:Ay},41:{n:"PtgMemFunc",f:yy},42:{n:"PtgRefErr",f:by},43:{n:"PtgAreaErr",f:Wx},44:{n:"PtgRefN",f:ty},45:{n:"PtgAreaN",f:Hx},46:{n:"PtgMemAreaN",f:By},47:{n:"PtgMemNoMemN",f:Vy},57:{n:"PtgNameX",f:vy},58:{n:"PtgRef3d",f:ny},59:{n:"PtgArea3d",f:Gx},60:{n:"PtgRefErr3d",f:Sy},61:{n:"PtgAreaErr3d",f:jx},255:{}},Wy={64:32,96:32,65:33,97:33,66:34,98:34,67:35,99:35,68:36,100:36,69:37,101:37,70:38,102:38,71:39,103:39,72:40,104:40,73:41,105:41,74:42,106:42,75:43,107:43,76:44,108:44,77:45,109:45,78:46,110:46,79:47,111:47,88:34,120:34,89:57,121:57,90:58,122:58,91:59,123:59,92:60,124:60,93:61,125:61},jy={1:{n:"PtgElfLel",f:ef},2:{n:"PtgElfRw",f:Oy},3:{n:"PtgElfCol",f:Ey},6:{n:"PtgElfRwV",f:Ly},7:{n:"PtgElfColV",f:Dy},10:{n:"PtgElfRadical",f:ky},11:{n:"PtgElfRadicalS",f:Iy},13:{n:"PtgElfColS",f:Cy},15:{n:"PtgElfColSV",f:My},16:{n:"PtgElfRadicalLel",f:Ry},25:{n:"PtgList",f:Py},29:{n:"PtgSxName",f:Ny},255:{}},Hy={0:{n:"PtgAttrNoop",f:Gy},1:{n:"PtgAttrSemi",f:qx},2:{n:"PtgAttrIf",f:Jx},4:{n:"PtgAttrChoose",f:Yx},8:{n:"PtgAttrGoto",f:Xx},16:{n:"PtgAttrSum",f:oy},32:{n:"PtgAttrBaxcel",f:is},33:{n:"PtgAttrBaxcel",f:is},64:{n:"PtgAttrSpace",f:Qx},65:{n:"PtgAttrSpaceSemi",f:Kx},128:{n:"PtgAttrIfError",f:Zx},255:{}};function e6(n,e,t,r){if(r.biff<8)return n0(n,e);for(var a=n.l+e,i=[],o=0;o!==t.length;++o)switch(t[o][0]){case"PtgArray":t[o][1]=my(n,0,r),i.push(t[o][1]);break;case"PtgMemArea":t[o][2]=py(n,t[o][1],r),i.push(t[o][2]);break;case"PtgExp":r&&r.biff==12&&(t[o][1][1]=n.read_shift(4),i.push(t[o][1]));break;case"PtgList":case"PtgElfRadicalS":case"PtgElfColS":case"PtgElfColSV":throw"Unsupported "+t[o][0]}return e=a-n.l,e!==0&&i.push(n0(n,e)),i}function t6(n,e,t){for(var r=n.l+e,a,i,o=[];r!=n.l;)e=r-n.l,i=n[n.l],a=os[i]||os[Wy[i]],(i===24||i===25)&&(a=(i===24?jy:Hy)[n[n.l+1]]),!a||!a.f?n0(n,e):o.push([a.n,a.f(n,e,t)]);return o}function $y(n){for(var e=[],t=0;t<n.length;++t){for(var r=n[t],a=[],i=0;i<r.length;++i){var o=r[i];if(o)switch(o[0]){case 2:a.push('"'+o[1].replace(/"/g,'""')+'"');break;default:a.push(o[1])}else a.push("")}e.push(a.join(","))}return e.join(";")}var Yy={PtgAdd:"+",PtgConcat:"&",PtgDiv:"/",PtgEq:"=",PtgGe:">=",PtgGt:">",PtgLe:"<=",PtgLt:"<",PtgMul:"*",PtgNe:"<>",PtgPower:"^",PtgSub:"-"};function Xy(n,e){if(!n&&!(e&&e.biff<=5&&e.biff>=2))throw new Error("empty sheet name");return/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(n)?"'"+n+"'":n}function tf(n,e,t){if(!n)return"SH33TJSERR0";if(t.biff>8&&(!n.XTI||!n.XTI[e]))return n.SheetNames[e];if(!n.XTI)return"SH33TJSERR6";var r=n.XTI[e];if(t.biff<8)return e>1e4&&(e-=65536),e<0&&(e=-e),e==0?"":n.XTI[e-1];if(!r)return"SH33TJSERR1";var a="";if(t.biff>8)switch(n[r[0]][0]){case 357:return a=r[1]==-1?"#REF":n.SheetNames[r[1]],r[1]==r[2]?a:a+":"+n.SheetNames[r[2]];case 358:return t.SID!=null?n.SheetNames[t.SID]:"SH33TJSSAME"+n[r[0]][0];case 355:default:return"SH33TJSSRC"+n[r[0]][0]}switch(n[r[0]][0][0]){case 1025:return a=r[1]==-1?"#REF":n.SheetNames[r[1]]||"SH33TJSERR3",r[1]==r[2]?a:a+":"+n.SheetNames[r[2]];case 14849:return n[r[0]].slice(1).map(function(i){return i.Name}).join(";;");default:return n[r[0]][0][3]?(a=r[1]==-1?"#REF":n[r[0]][0][3][r[1]]||"SH33TJSERR4",r[1]==r[2]?a:a+":"+n[r[0]][0][3][r[2]]):"SH33TJSERR2"}}function ss(n,e,t){var r=tf(n,e,t);return r=="#REF"?r:Xy(r,t)}function Y3(n,e,t,r,a){var i=a&&a.biff||8,o={s:{c:0,r:0},e:{c:0,r:0}},s=[],l,u,f,d=0,h=0,m,_="";if(!n[0]||!n[0][0])return"";for(var g=-1,v="",y=0,S=n[0].length;y<S;++y){var b=n[0][y];switch(b[0]){case"PtgUminus":s.push("-"+s.pop());break;case"PtgUplus":s.push("+"+s.pop());break;case"PtgPercent":s.push(s.pop()+"%");break;case"PtgAdd":case"PtgConcat":case"PtgDiv":case"PtgEq":case"PtgGe":case"PtgGt":case"PtgLe":case"PtgLt":case"PtgMul":case"PtgNe":case"PtgPower":case"PtgSub":if(l=s.pop(),u=s.pop(),g>=0){switch(n[0][g][1][0]){case 0:v=o3(" ",n[0][g][1][1]);break;case 1:v=o3("\r",n[0][g][1][1]);break;default:if(v="",a.WTF)throw new Error("Unexpected PtgAttrSpaceType "+n[0][g][1][0])}u=u+v,g=-1}s.push(u+Yy[b[0]]+l);break;case"PtgIsect":l=s.pop(),u=s.pop(),s.push(u+" "+l);break;case"PtgUnion":l=s.pop(),u=s.pop(),s.push(u+","+l);break;case"PtgRange":l=s.pop(),u=s.pop(),s.push(u+":"+l);break;case"PtgAttrChoose":break;case"PtgAttrGoto":break;case"PtgAttrIf":break;case"PtgAttrIfError":break;case"PtgRef":f=h8(b[1][1],o,a),s.push(p8(f,i));break;case"PtgRefN":f=t?h8(b[1][1],t,a):b[1][1],s.push(p8(f,i));break;case"PtgRef3d":d=b[1][1],f=h8(b[1][2],o,a),_=ss(r,d,a),s.push(_+"!"+p8(f,i));break;case"PtgFunc":case"PtgFuncVar":var w=b[1][0],T=b[1][1];w||(w=0),w&=127;var A=w==0?[]:s.slice(-w);s.length-=w,T==="User"&&(T=A.shift()),s.push(T+"("+A.join(",")+")");break;case"PtgBool":s.push(b[1]?"TRUE":"FALSE");break;case"PtgInt":s.push(b[1]);break;case"PtgNum":s.push(String(b[1]));break;case"PtgStr":s.push('"'+b[1].replace(/"/g,'""')+'"');break;case"PtgErr":s.push(b[1]);break;case"PtgAreaN":m=Vo(b[1][1],t?{s:t}:o,a),s.push(pt(m,a));break;case"PtgArea":m=Vo(b[1][1],o,a),s.push(pt(m,a));break;case"PtgArea3d":d=b[1][1],m=b[1][2],_=ss(r,d,a),s.push(_+"!"+pt(m,a));break;case"PtgAttrSum":s.push("SUM("+s.pop()+")");break;case"PtgAttrBaxcel":case"PtgAttrSemi":break;case"PtgName":h=b[1][2];var C=(r.names||[])[h-1]||(r[0]||[])[h],E=C?C.Name:"SH33TJSNAME"+String(h);E&&E.slice(0,6)=="_xlfn."&&!a.xlfn&&(E=E.slice(6)),s.push(E);break;case"PtgNameX":var M=b[1][1];h=b[1][2];var N;if(a.biff<=5)M<0&&(M=-M),r[M]&&(N=r[M][h]);else{var P="";if(((r[M]||[])[0]||[])[0]==14849||(((r[M]||[])[0]||[])[0]==1025?r[M][h]&&r[M][h].itab>0&&(P=r.SheetNames[r[M][h].itab-1]+"!"):P=r.SheetNames[h-1]+"!"),r[M]&&r[M][h])P+=r[M][h].Name;else if(r[0]&&r[0][h])P+=r[0][h].Name;else{var U=(tf(r,M,a)||"").split(";;");U[h-1]?P=U[h-1]:P+="SH33TJSERRX"}s.push(P);break}N||(N={Name:"SH33TJSERRY"}),s.push(N.Name);break;case"PtgParen":var Z="(",G=")";if(g>=0){switch(v="",n[0][g][1][0]){case 2:Z=o3(" ",n[0][g][1][1])+Z;break;case 3:Z=o3("\r",n[0][g][1][1])+Z;break;case 4:G=o3(" ",n[0][g][1][1])+G;break;case 5:G=o3("\r",n[0][g][1][1])+G;break;default:if(a.WTF)throw new Error("Unexpected PtgAttrSpaceType "+n[0][g][1][0])}g=-1}s.push(Z+s.pop()+G);break;case"PtgRefErr":s.push("#REF!");break;case"PtgRefErr3d":s.push("#REF!");break;case"PtgExp":f={c:b[1][1],r:b[1][0]};var W={c:t.c,r:t.r};if(r.sharedf[y2(f)]){var q=r.sharedf[y2(f)];s.push(Y3(q,o,W,r,a))}else{var r1=!1;for(l=0;l!=r.arrayf.length;++l)if(u=r.arrayf[l],!(f.c<u[0].s.c||f.c>u[0].e.c)&&!(f.r<u[0].s.r||f.r>u[0].e.r)){s.push(Y3(u[1],o,W,r,a)),r1=!0;break}r1||s.push(b[1])}break;case"PtgArray":s.push("{"+$y(b[1])+"}");break;case"PtgMemArea":break;case"PtgAttrSpace":case"PtgAttrSpaceSemi":g=y;break;case"PtgTbl":break;case"PtgMemErr":break;case"PtgMissArg":s.push("");break;case"PtgAreaErr":s.push("#REF!");break;case"PtgAreaErr3d":s.push("#REF!");break;case"PtgList":s.push("Table"+b[1].idx+"[#"+b[1].rt+"]");break;case"PtgMemAreaN":case"PtgMemNoMemN":case"PtgAttrNoop":case"PtgSheet":case"PtgEndSheet":break;case"PtgMemFunc":break;case"PtgMemNoMem":break;case"PtgElfCol":case"PtgElfColS":case"PtgElfColSV":case"PtgElfColV":case"PtgElfLel":case"PtgElfRadical":case"PtgElfRadicalLel":case"PtgElfRadicalS":case"PtgElfRw":case"PtgElfRwV":throw new Error("Unsupported ELFs");case"PtgSxName":throw new Error("Unrecognized Formula Token: "+String(b));default:throw new Error("Unrecognized Formula Token: "+String(b))}var Y=["PtgAttrSpace","PtgAttrSpaceSemi","PtgAttrGoto"];if(a.biff!=3&&g>=0&&Y.indexOf(n[0][y][0])==-1){b=n[0][g];var O=!0;switch(b[1][0]){case 4:O=!1;case 0:v=o3(" ",b[1][1]);break;case 5:O=!1;case 1:v=o3("\r",b[1][1]);break;default:if(v="",a.WTF)throw new Error("Unexpected PtgAttrSpaceType "+b[1][0])}s.push((O?v:"")+s.pop()+(O?"":v)),g=-1}}if(s.length>1&&a.WTF)throw new Error("bad formula stack");return s[0]}function Jy(n,e,t){var r=n.l+e,a=t.biff==2?1:2,i,o=n.read_shift(a);if(o==65535)return[[],n0(n,e-2)];var s=t6(n,o,t);return e!==o+a&&(i=e6(n,e-o-a,s,t)),n.l=r,[s,i]}function Zy(n,e,t){var r=n.l+e,a=t.biff==2?1:2,i,o=n.read_shift(a);if(o==65535)return[[],n0(n,e-2)];var s=t6(n,o,t);return e!==o+a&&(i=e6(n,e-o-a,s,t)),n.l=r,[s,i]}function qy(n,e,t,r){var a=n.l+e,i=t6(n,r,t),o;return a!==n.l&&(o=e6(n,a-n.l,i,t)),[i,o]}function Qy(n,e,t){var r=n.l+e,a,i=n.read_shift(2),o=t6(n,i,t);return i==65535?[[],n0(n,e-2)]:(e!==i+2&&(a=e6(n,r-i-2,o,t)),[o,a])}function Ky(n){var e;if(J4(n,n.l+6)!==65535)return[J3(n),"n"];switch(n[n.l]){case 0:return n.l+=8,["String","s"];case 1:return e=n[n.l+2]===1,n.l+=8,[e,"b"];case 2:return e=n[n.l+2],n.l+=8,[e,"e"];case 3:return n.l+=8,["","s"]}return[]}function vt(n,e,t){var r=n.l+e,a=F4(n);t.biff==2&&++n.l;var i=Ky(n),o=n.read_shift(1);t.biff!=2&&(n.read_shift(1),t.biff>=5&&n.read_shift(4));var s=Zy(n,r-n.l,t);return{cell:a,val:i[0],formula:s,shared:o>>3&1,tt:i[1]}}function j7(n,e,t){var r=n.read_shift(4),a=t6(n,r,t),i=n.read_shift(4),o=i>0?e6(n,i,a,t):null;return[a,o]}var eb=j7,H7=j7,tb=j7,nb=j7,rb={0:"BEEP",1:"OPEN",2:"OPEN.LINKS",3:"CLOSE.ALL",4:"SAVE",5:"SAVE.AS",6:"FILE.DELETE",7:"PAGE.SETUP",8:"PRINT",9:"PRINTER.SETUP",10:"QUIT",11:"NEW.WINDOW",12:"ARRANGE.ALL",13:"WINDOW.SIZE",14:"WINDOW.MOVE",15:"FULL",16:"CLOSE",17:"RUN",22:"SET.PRINT.AREA",23:"SET.PRINT.TITLES",24:"SET.PAGE.BREAK",25:"REMOVE.PAGE.BREAK",26:"FONT",27:"DISPLAY",28:"PROTECT.DOCUMENT",29:"PRECISION",30:"A1.R1C1",31:"CALCULATE.NOW",32:"CALCULATION",34:"DATA.FIND",35:"EXTRACT",36:"DATA.DELETE",37:"SET.DATABASE",38:"SET.CRITERIA",39:"SORT",40:"DATA.SERIES",41:"TABLE",42:"FORMAT.NUMBER",43:"ALIGNMENT",44:"STYLE",45:"BORDER",46:"CELL.PROTECTION",47:"COLUMN.WIDTH",48:"UNDO",49:"CUT",50:"COPY",51:"PASTE",52:"CLEAR",53:"PASTE.SPECIAL",54:"EDIT.DELETE",55:"INSERT",56:"FILL.RIGHT",57:"FILL.DOWN",61:"DEFINE.NAME",62:"CREATE.NAMES",63:"FORMULA.GOTO",64:"FORMULA.FIND",65:"SELECT.LAST.CELL",66:"SHOW.ACTIVE.CELL",67:"GALLERY.AREA",68:"GALLERY.BAR",69:"GALLERY.COLUMN",70:"GALLERY.LINE",71:"GALLERY.PIE",72:"GALLERY.SCATTER",73:"COMBINATION",74:"PREFERRED",75:"ADD.OVERLAY",76:"GRIDLINES",77:"SET.PREFERRED",78:"AXES",79:"LEGEND",80:"ATTACH.TEXT",81:"ADD.ARROW",82:"SELECT.CHART",83:"SELECT.PLOT.AREA",84:"PATTERNS",85:"MAIN.CHART",86:"OVERLAY",87:"SCALE",88:"FORMAT.LEGEND",89:"FORMAT.TEXT",90:"EDIT.REPEAT",91:"PARSE",92:"JUSTIFY",93:"HIDE",94:"UNHIDE",95:"WORKSPACE",96:"FORMULA",97:"FORMULA.FILL",98:"FORMULA.ARRAY",99:"DATA.FIND.NEXT",100:"DATA.FIND.PREV",101:"FORMULA.FIND.NEXT",102:"FORMULA.FIND.PREV",103:"ACTIVATE",104:"ACTIVATE.NEXT",105:"ACTIVATE.PREV",106:"UNLOCKED.NEXT",107:"UNLOCKED.PREV",108:"COPY.PICTURE",109:"SELECT",110:"DELETE.NAME",111:"DELETE.FORMAT",112:"VLINE",113:"HLINE",114:"VPAGE",115:"HPAGE",116:"VSCROLL",117:"HSCROLL",118:"ALERT",119:"NEW",120:"CANCEL.COPY",121:"SHOW.CLIPBOARD",122:"MESSAGE",124:"PASTE.LINK",125:"APP.ACTIVATE",126:"DELETE.ARROW",127:"ROW.HEIGHT",128:"FORMAT.MOVE",129:"FORMAT.SIZE",130:"FORMULA.REPLACE",131:"SEND.KEYS",132:"SELECT.SPECIAL",133:"APPLY.NAMES",134:"REPLACE.FONT",135:"FREEZE.PANES",136:"SHOW.INFO",137:"SPLIT",138:"ON.WINDOW",139:"ON.DATA",140:"DISABLE.INPUT",142:"OUTLINE",143:"LIST.NAMES",144:"FILE.CLOSE",145:"SAVE.WORKBOOK",146:"DATA.FORM",147:"COPY.CHART",148:"ON.TIME",149:"WAIT",150:"FORMAT.FONT",151:"FILL.UP",152:"FILL.LEFT",153:"DELETE.OVERLAY",155:"SHORT.MENUS",159:"SET.UPDATE.STATUS",161:"COLOR.PALETTE",162:"DELETE.STYLE",163:"WINDOW.RESTORE",164:"WINDOW.MAXIMIZE",166:"CHANGE.LINK",167:"CALCULATE.DOCUMENT",168:"ON.KEY",169:"APP.RESTORE",170:"APP.MOVE",171:"APP.SIZE",172:"APP.MINIMIZE",173:"APP.MAXIMIZE",174:"BRING.TO.FRONT",175:"SEND.TO.BACK",185:"MAIN.CHART.TYPE",186:"OVERLAY.CHART.TYPE",187:"SELECT.END",188:"OPEN.MAIL",189:"SEND.MAIL",190:"STANDARD.FONT",191:"CONSOLIDATE",192:"SORT.SPECIAL",193:"GALLERY.3D.AREA",194:"GALLERY.3D.COLUMN",195:"GALLERY.3D.LINE",196:"GALLERY.3D.PIE",197:"VIEW.3D",198:"GOAL.SEEK",199:"WORKGROUP",200:"FILL.GROUP",201:"UPDATE.LINK",202:"PROMOTE",203:"DEMOTE",204:"SHOW.DETAIL",206:"UNGROUP",207:"OBJECT.PROPERTIES",208:"SAVE.NEW.OBJECT",209:"SHARE",210:"SHARE.NAME",211:"DUPLICATE",212:"APPLY.STYLE",213:"ASSIGN.TO.OBJECT",214:"OBJECT.PROTECTION",215:"HIDE.OBJECT",216:"SET.EXTRACT",217:"CREATE.PUBLISHER",218:"SUBSCRIBE.TO",219:"ATTRIBUTES",220:"SHOW.TOOLBAR",222:"PRINT.PREVIEW",223:"EDIT.COLOR",224:"SHOW.LEVELS",225:"FORMAT.MAIN",226:"FORMAT.OVERLAY",227:"ON.RECALC",228:"EDIT.SERIES",229:"DEFINE.STYLE",240:"LINE.PRINT",243:"ENTER.DATA",249:"GALLERY.RADAR",250:"MERGE.STYLES",251:"EDITION.OPTIONS",252:"PASTE.PICTURE",253:"PASTE.PICTURE.LINK",254:"SPELLING",256:"ZOOM",259:"INSERT.OBJECT",260:"WINDOW.MINIMIZE",265:"SOUND.NOTE",266:"SOUND.PLAY",267:"FORMAT.SHAPE",268:"EXTEND.POLYGON",269:"FORMAT.AUTO",272:"GALLERY.3D.BAR",273:"GALLERY.3D.SURFACE",274:"FILL.AUTO",276:"CUSTOMIZE.TOOLBAR",277:"ADD.TOOL",278:"EDIT.OBJECT",279:"ON.DOUBLECLICK",280:"ON.ENTRY",281:"WORKBOOK.ADD",282:"WORKBOOK.MOVE",283:"WORKBOOK.COPY",284:"WORKBOOK.OPTIONS",285:"SAVE.WORKSPACE",288:"CHART.WIZARD",289:"DELETE.TOOL",290:"MOVE.TOOL",291:"WORKBOOK.SELECT",292:"WORKBOOK.ACTIVATE",293:"ASSIGN.TO.TOOL",295:"COPY.TOOL",296:"RESET.TOOL",297:"CONSTRAIN.NUMERIC",298:"PASTE.TOOL",302:"WORKBOOK.NEW",305:"SCENARIO.CELLS",306:"SCENARIO.DELETE",307:"SCENARIO.ADD",308:"SCENARIO.EDIT",309:"SCENARIO.SHOW",310:"SCENARIO.SHOW.NEXT",311:"SCENARIO.SUMMARY",312:"PIVOT.TABLE.WIZARD",313:"PIVOT.FIELD.PROPERTIES",314:"PIVOT.FIELD",315:"PIVOT.ITEM",316:"PIVOT.ADD.FIELDS",318:"OPTIONS.CALCULATION",319:"OPTIONS.EDIT",320:"OPTIONS.VIEW",321:"ADDIN.MANAGER",322:"MENU.EDITOR",323:"ATTACH.TOOLBARS",324:"VBAActivate",325:"OPTIONS.CHART",328:"VBA.INSERT.FILE",330:"VBA.PROCEDURE.DEFINITION",336:"ROUTING.SLIP",338:"ROUTE.DOCUMENT",339:"MAIL.LOGON",342:"INSERT.PICTURE",343:"EDIT.TOOL",344:"GALLERY.DOUGHNUT",350:"CHART.TREND",352:"PIVOT.ITEM.PROPERTIES",354:"WORKBOOK.INSERT",355:"OPTIONS.TRANSITION",356:"OPTIONS.GENERAL",370:"FILTER.ADVANCED",373:"MAIL.ADD.MAILER",374:"MAIL.DELETE.MAILER",375:"MAIL.REPLY",376:"MAIL.REPLY.ALL",377:"MAIL.FORWARD",378:"MAIL.NEXT.LETTER",379:"DATA.LABEL",380:"INSERT.TITLE",381:"FONT.PROPERTIES",382:"MACRO.OPTIONS",383:"WORKBOOK.HIDE",384:"WORKBOOK.UNHIDE",385:"WORKBOOK.DELETE",386:"WORKBOOK.NAME",388:"GALLERY.CUSTOM",390:"ADD.CHART.AUTOFORMAT",391:"DELETE.CHART.AUTOFORMAT",392:"CHART.ADD.DATA",393:"AUTO.OUTLINE",394:"TAB.ORDER",395:"SHOW.DIALOG",396:"SELECT.ALL",397:"UNGROUP.SHEETS",398:"SUBTOTAL.CREATE",399:"SUBTOTAL.REMOVE",400:"RENAME.OBJECT",412:"WORKBOOK.SCROLL",413:"WORKBOOK.NEXT",414:"WORKBOOK.PREV",415:"WORKBOOK.TAB.SPLIT",416:"FULL.SCREEN",417:"WORKBOOK.PROTECT",420:"SCROLLBAR.PROPERTIES",421:"PIVOT.SHOW.PAGES",422:"TEXT.TO.COLUMNS",423:"FORMAT.CHARTTYPE",424:"LINK.FORMAT",425:"TRACER.DISPLAY",430:"TRACER.NAVIGATE",431:"TRACER.CLEAR",432:"TRACER.ERROR",433:"PIVOT.FIELD.GROUP",434:"PIVOT.FIELD.UNGROUP",435:"CHECKBOX.PROPERTIES",436:"LABEL.PROPERTIES",437:"LISTBOX.PROPERTIES",438:"EDITBOX.PROPERTIES",439:"PIVOT.REFRESH",440:"LINK.COMBO",441:"OPEN.TEXT",442:"HIDE.DIALOG",443:"SET.DIALOG.FOCUS",444:"ENABLE.OBJECT",445:"PUSHBUTTON.PROPERTIES",446:"SET.DIALOG.DEFAULT",447:"FILTER",448:"FILTER.SHOW.ALL",449:"CLEAR.OUTLINE",450:"FUNCTION.WIZARD",451:"ADD.LIST.ITEM",452:"SET.LIST.ITEM",453:"REMOVE.LIST.ITEM",454:"SELECT.LIST.ITEM",455:"SET.CONTROL.VALUE",456:"SAVE.COPY.AS",458:"OPTIONS.LISTS.ADD",459:"OPTIONS.LISTS.DELETE",460:"SERIES.AXES",461:"SERIES.X",462:"SERIES.Y",463:"ERRORBAR.X",464:"ERRORBAR.Y",465:"FORMAT.CHART",466:"SERIES.ORDER",467:"MAIL.LOGOFF",468:"CLEAR.ROUTING.SLIP",469:"APP.ACTIVATE.MICROSOFT",470:"MAIL.EDIT.MAILER",471:"ON.SHEET",472:"STANDARD.WIDTH",473:"SCENARIO.MERGE",474:"SUMMARY.INFO",475:"FIND.FILE",476:"ACTIVE.CELL.FONT",477:"ENABLE.TIPWIZARD",478:"VBA.MAKE.ADDIN",480:"INSERTDATATABLE",481:"WORKGROUP.OPTIONS",482:"MAIL.SEND.MAILER",485:"AUTOCORRECT",489:"POST.DOCUMENT",491:"PICKLIST",493:"VIEW.SHOW",494:"VIEW.DEFINE",495:"VIEW.DELETE",509:"SHEET.BACKGROUND",510:"INSERT.MAP.OBJECT",511:"OPTIONS.MENONO",517:"MSOCHECKS",518:"NORMAL",519:"LAYOUT",520:"RM.PRINT.AREA",521:"CLEAR.PRINT.AREA",522:"ADD.PRINT.AREA",523:"MOVE.BRK",545:"HIDECURR.NOTE",546:"HIDEALL.NOTES",547:"DELETE.NOTE",548:"TRAVERSE.NOTES",549:"ACTIVATE.NOTES",620:"PROTECT.REVISIONS",621:"UNPROTECT.REVISIONS",647:"OPTIONS.ME",653:"WEB.PUBLISH",667:"NEWWEBQUERY",673:"PIVOT.TABLE.CHART",753:"OPTIONS.SAVE",755:"OPTIONS.SPELL",808:"HIDEALL.INKANNOTS"},nf={0:"COUNT",1:"IF",2:"ISNA",3:"ISERROR",4:"SUM",5:"AVERAGE",6:"MIN",7:"MAX",8:"ROW",9:"COLUMN",10:"NA",11:"NPV",12:"STDEV",13:"DOLLAR",14:"FIXED",15:"SIN",16:"COS",17:"TAN",18:"ATAN",19:"PI",20:"SQRT",21:"EXP",22:"LN",23:"LOG10",24:"ABS",25:"INT",26:"SIGN",27:"ROUND",28:"LOOKUP",29:"INDEX",30:"REPT",31:"MID",32:"LEN",33:"VALUE",34:"TRUE",35:"FALSE",36:"AND",37:"OR",38:"NOT",39:"MOD",40:"DCOUNT",41:"DSUM",42:"DAVERAGE",43:"DMIN",44:"DMAX",45:"DSTDEV",46:"VAR",47:"DVAR",48:"TEXT",49:"LINEST",50:"TREND",51:"LOGEST",52:"GROWTH",53:"GOTO",54:"HALT",55:"RETURN",56:"PV",57:"FV",58:"NPER",59:"PMT",60:"RATE",61:"MIRR",62:"IRR",63:"RAND",64:"MATCH",65:"DATE",66:"TIME",67:"DAY",68:"MONTH",69:"YEAR",70:"WEEKDAY",71:"HOUR",72:"MINUTE",73:"SECOND",74:"NOW",75:"AREAS",76:"ROWS",77:"COLUMNS",78:"OFFSET",79:"ABSREF",80:"RELREF",81:"ARGUMENT",82:"SEARCH",83:"TRANSPOSE",84:"ERROR",85:"STEP",86:"TYPE",87:"ECHO",88:"SET.NAME",89:"CALLER",90:"DEREF",91:"WINDOWS",92:"SERIES",93:"DOCUMENTS",94:"ACTIVE.CELL",95:"SELECTION",96:"RESULT",97:"ATAN2",98:"ASIN",99:"ACOS",100:"CHOOSE",101:"HLOOKUP",102:"VLOOKUP",103:"LINKS",104:"INPUT",105:"ISREF",106:"GET.FORMULA",107:"GET.NAME",108:"SET.VALUE",109:"LOG",110:"EXEC",111:"CHAR",112:"LOWER",113:"UPPER",114:"PROPER",115:"LEFT",116:"RIGHT",117:"EXACT",118:"TRIM",119:"REPLACE",120:"SUBSTITUTE",121:"CODE",122:"NAMES",123:"DIRECTORY",124:"FIND",125:"CELL",126:"ISERR",127:"ISTEXT",128:"ISNUMBER",129:"ISBLANK",130:"T",131:"N",132:"FOPEN",133:"FCLOSE",134:"FSIZE",135:"FREADLN",136:"FREAD",137:"FWRITELN",138:"FWRITE",139:"FPOS",140:"DATEVALUE",141:"TIMEVALUE",142:"SLN",143:"SYD",144:"DDB",145:"GET.DEF",146:"REFTEXT",147:"TEXTREF",148:"INDIRECT",149:"REGISTER",150:"CALL",151:"ADD.BAR",152:"ADD.MENU",153:"ADD.COMMAND",154:"ENABLE.COMMAND",155:"CHECK.COMMAND",156:"RENAME.COMMAND",157:"SHOW.BAR",158:"DELETE.MENU",159:"DELETE.COMMAND",160:"GET.CHART.ITEM",161:"DIALOG.BOX",162:"CLEAN",163:"MDETERM",164:"MINVERSE",165:"MMULT",166:"FILES",167:"IPMT",168:"PPMT",169:"COUNTA",170:"CANCEL.KEY",171:"FOR",172:"WHILE",173:"BREAK",174:"NEXT",175:"INITIATE",176:"REQUEST",177:"POKE",178:"EXECUTE",179:"TERMINATE",180:"RESTART",181:"HELP",182:"GET.BAR",183:"PRODUCT",184:"FACT",185:"GET.CELL",186:"GET.WORKSPACE",187:"GET.WINDOW",188:"GET.DOCUMENT",189:"DPRODUCT",190:"ISNONTEXT",191:"GET.NOTE",192:"NOTE",193:"STDEVP",194:"VARP",195:"DSTDEVP",196:"DVARP",197:"TRUNC",198:"ISLOGICAL",199:"DCOUNTA",200:"DELETE.BAR",201:"UNREGISTER",204:"USDOLLAR",205:"FINDB",206:"SEARCHB",207:"REPLACEB",208:"LEFTB",209:"RIGHTB",210:"MIDB",211:"LENB",212:"ROUNDUP",213:"ROUNDDOWN",214:"ASC",215:"DBCS",216:"RANK",219:"ADDRESS",220:"DAYS360",221:"TODAY",222:"VDB",223:"ELSE",224:"ELSE.IF",225:"END.IF",226:"FOR.CELL",227:"MEDIAN",228:"SUMPRODUCT",229:"SINH",230:"COSH",231:"TANH",232:"ASINH",233:"ACOSH",234:"ATANH",235:"DGET",236:"CREATE.OBJECT",237:"VOLATILE",238:"LAST.ERROR",239:"CUSTOM.UNDO",240:"CUSTOM.REPEAT",241:"FORMULA.CONVERT",242:"GET.LINK.INFO",243:"TEXT.BOX",244:"INFO",245:"GROUP",246:"GET.OBJECT",247:"DB",248:"PAUSE",251:"RESUME",252:"FREQUENCY",253:"ADD.TOOLBAR",254:"DELETE.TOOLBAR",255:"User",256:"RESET.TOOLBAR",257:"EVALUATE",258:"GET.TOOLBAR",259:"GET.TOOL",260:"SPELLING.CHECK",261:"ERROR.TYPE",262:"APP.TITLE",263:"WINDOW.TITLE",264:"SAVE.TOOLBAR",265:"ENABLE.TOOL",266:"PRESS.TOOL",267:"REGISTER.ID",268:"GET.WORKBOOK",269:"AVEDEV",270:"BETADIST",271:"GAMMALN",272:"BETAINV",273:"BINOMDIST",274:"CHIDIST",275:"CHIINV",276:"COMBIN",277:"CONFIDENCE",278:"CRITBINOM",279:"EVEN",280:"EXPONDIST",281:"FDIST",282:"FINV",283:"FISHER",284:"FISHERINV",285:"FLOOR",286:"GAMMADIST",287:"GAMMAINV",288:"CEILING",289:"HYPGEOMDIST",290:"LOGNORMDIST",291:"LOGINV",292:"NEGBINOMDIST",293:"NORMDIST",294:"NORMSDIST",295:"NORMINV",296:"NORMSINV",297:"STANDARDIZE",298:"ODD",299:"PERMUT",300:"POISSON",301:"TDIST",302:"WEIBULL",303:"SUMXMY2",304:"SUMX2MY2",305:"SUMX2PY2",306:"CHITEST",307:"CORREL",308:"COVAR",309:"FORECAST",310:"FTEST",311:"INTERCEPT",312:"PEARSON",313:"RSQ",314:"STEYX",315:"SLOPE",316:"TTEST",317:"PROB",318:"DEVSQ",319:"GEOMEAN",320:"HARMEAN",321:"SUMSQ",322:"KURT",323:"SKEW",324:"ZTEST",325:"LARGE",326:"SMALL",327:"QUARTILE",328:"PERCENTILE",329:"PERCENTRANK",330:"MODE",331:"TRIMMEAN",332:"TINV",334:"MOVIE.COMMAND",335:"GET.MOVIE",336:"CONCATENATE",337:"POWER",338:"PIVOT.ADD.DATA",339:"GET.PIVOT.TABLE",340:"GET.PIVOT.FIELD",341:"GET.PIVOT.ITEM",342:"RADIANS",343:"DEGREES",344:"SUBTOTAL",345:"SUMIF",346:"COUNTIF",347:"COUNTBLANK",348:"SCENARIO.GET",349:"OPTIONS.LISTS.GET",350:"ISPMT",351:"DATEDIF",352:"DATESTRING",353:"NUMBERSTRING",354:"ROMAN",355:"OPEN.DIALOG",356:"SAVE.DIALOG",357:"VIEW.GET",358:"GETPIVOTDATA",359:"HYPERLINK",360:"PHONETIC",361:"AVERAGEA",362:"MAXA",363:"MINA",364:"STDEVPA",365:"VARPA",366:"STDEVA",367:"VARA",368:"BAHTTEXT",369:"THAIDAYOFWEEK",370:"THAIDIGIT",371:"THAIMONTHOFYEAR",372:"THAINUMSOUND",373:"THAINUMSTRING",374:"THAISTRINGLENGTH",375:"ISTHAIDIGIT",376:"ROUNDBAHTDOWN",377:"ROUNDBAHTUP",378:"THAIYEAR",379:"RTD",380:"CUBEVALUE",381:"CUBEMEMBER",382:"CUBEMEMBERPROPERTY",383:"CUBERANKEDMEMBER",384:"HEX2BIN",385:"HEX2DEC",386:"HEX2OCT",387:"DEC2BIN",388:"DEC2HEX",389:"DEC2OCT",390:"OCT2BIN",391:"OCT2HEX",392:"OCT2DEC",393:"BIN2DEC",394:"BIN2OCT",395:"BIN2HEX",396:"IMSUB",397:"IMDIV",398:"IMPOWER",399:"IMABS",400:"IMSQRT",401:"IMLN",402:"IMLOG2",403:"IMLOG10",404:"IMSIN",405:"IMCOS",406:"IMEXP",407:"IMARGUMENT",408:"IMCONJUGATE",409:"IMAGINARY",410:"IMREAL",411:"COMPLEX",412:"IMSUM",413:"IMPRODUCT",414:"SERIESSUM",415:"FACTDOUBLE",416:"SQRTPI",417:"QUOTIENT",418:"DELTA",419:"GESTEP",420:"ISEVEN",421:"ISODD",422:"MROUND",423:"ERF",424:"ERFC",425:"BESSELJ",426:"BESSELK",427:"BESSELY",428:"BESSELI",429:"XIRR",430:"XNPV",431:"PRICEMAT",432:"YIELDMAT",433:"INTRATE",434:"RECEIVED",435:"DISC",436:"PRICEDISC",437:"YIELDDISC",438:"TBILLEQ",439:"TBILLPRICE",440:"TBILLYIELD",441:"PRICE",442:"YIELD",443:"DOLLARDE",444:"DOLLARFR",445:"NOMINAL",446:"EFFECT",447:"CUMPRINC",448:"CUMIPMT",449:"EDATE",450:"EOMONTH",451:"YEARFRAC",452:"COUPDAYBS",453:"COUPDAYS",454:"COUPDAYSNC",455:"COUPNCD",456:"COUPNUM",457:"COUPPCD",458:"DURATION",459:"MDURATION",460:"ODDLPRICE",461:"ODDLYIELD",462:"ODDFPRICE",463:"ODDFYIELD",464:"RANDBETWEEN",465:"WEEKNUM",466:"AMORDEGRC",467:"AMORLINC",468:"CONVERT",724:"SHEETJS",469:"ACCRINT",470:"ACCRINTM",471:"WORKDAY",472:"NETWORKDAYS",473:"GCD",474:"MULTINOMIAL",475:"LCM",476:"FVSCHEDULE",477:"CUBEKPIMEMBER",478:"CUBESET",479:"CUBESETCOUNT",480:"IFERROR",481:"COUNTIFS",482:"SUMIFS",483:"AVERAGEIF",484:"AVERAGEIFS"},ab={2:1,3:1,10:0,15:1,16:1,17:1,18:1,19:0,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:2,30:2,31:3,32:1,33:1,34:0,35:0,38:1,39:2,40:3,41:3,42:3,43:3,44:3,45:3,47:3,48:2,53:1,61:3,63:0,65:3,66:3,67:1,68:1,69:1,70:1,71:1,72:1,73:1,74:0,75:1,76:1,77:1,79:2,80:2,83:1,85:0,86:1,89:0,90:1,94:0,95:0,97:2,98:1,99:1,101:3,102:3,105:1,106:1,108:2,111:1,112:1,113:1,114:1,117:2,118:1,119:4,121:1,126:1,127:1,128:1,129:1,130:1,131:1,133:1,134:1,135:1,136:2,137:2,138:2,140:1,141:1,142:3,143:4,144:4,161:1,162:1,163:1,164:1,165:2,172:1,175:2,176:2,177:3,178:2,179:1,184:1,186:1,189:3,190:1,195:3,196:3,197:1,198:1,199:3,201:1,207:4,210:3,211:1,212:2,213:2,214:1,215:1,225:0,229:1,230:1,231:1,232:1,233:1,234:1,235:3,244:1,247:4,252:2,257:1,261:1,271:1,273:4,274:2,275:2,276:2,277:3,278:3,279:1,280:3,281:3,282:3,283:1,284:1,285:2,286:4,287:3,288:2,289:4,290:3,291:3,292:3,293:4,294:1,295:3,296:1,297:3,298:1,299:2,300:3,301:3,302:4,303:2,304:2,305:2,306:2,307:2,308:2,309:3,310:2,311:2,312:2,313:2,314:2,315:2,316:4,325:2,326:2,327:2,328:2,331:2,332:2,337:2,342:1,343:1,346:2,347:1,350:4,351:3,352:1,353:2,360:1,368:1,369:1,370:1,371:1,372:1,373:1,374:1,375:1,376:1,377:1,378:1,382:3,385:1,392:1,393:1,396:2,397:2,398:2,399:1,400:1,401:1,402:1,403:1,404:1,405:1,406:1,407:1,408:1,409:1,410:1,414:4,415:1,416:1,417:2,420:1,421:1,422:2,424:1,425:2,426:2,427:2,428:2,430:3,438:3,439:3,440:3,443:2,444:2,445:2,446:2,447:6,448:6,449:2,450:2,464:2,468:3,476:2,479:1,480:2,65535:0};function ls(n){return n.slice(0,3)=="of:"&&(n=n.slice(3)),n.charCodeAt(0)==61&&(n=n.slice(1),n.charCodeAt(0)==61&&(n=n.slice(1))),n=n.replace(/COM\.MICROSOFT\./g,""),n=n.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g,function(e,t){return t.replace(/\./g,"")}),n=n.replace(/\[.(#[A-Z]*[?!])\]/g,"$1"),n.replace(/[;~]/g,",").replace(/\|/g,";")}function _t(n){var e=n.split(":"),t=e[0].split(".")[0];return[t,e[0].split(".")[1]+(e.length>1?":"+(e[1].split(".")[1]||e[1].split(".")[0]):"")]}var _8={},y5={};function x8(n,e){if(n){var t=[.7,.7,.75,.75,.3,.3];e=="xlml"&&(t=[1,1,1,1,.5,.5]),n.left==null&&(n.left=t[0]),n.right==null&&(n.right=t[1]),n.top==null&&(n.top=t[2]),n.bottom==null&&(n.bottom=t[3]),n.header==null&&(n.header=t[4]),n.footer==null&&(n.footer=t[5])}}function rf(n,e,t,r,a,i){try{r.cellNF&&(n.z=b2[e])}catch(s){if(r.WTF)throw s}if(!(n.t==="z"&&!r.cellStyles)){if(n.t==="d"&&typeof n.v=="string"&&(n.v=F3(n.v)),(!r||r.cellText!==!1)&&n.t!=="z")try{if(b2[e]==null&&s9(om[e]||"General",e),n.t==="e")n.w=n.w||D9[n.v];else if(e===0)if(n.t==="n")(n.v|0)===n.v?n.w=n.v.toString(10):n.w=k8(n.v);else if(n.t==="d"){var o=u0(n.v);(o|0)===o?n.w=o.toString(10):n.w=k8(o)}else{if(n.v===void 0)return"";n.w=v9(n.v,y5)}else n.t==="d"?n.w=e4(e,u0(n.v),y5):n.w=e4(e,n.v,y5)}catch(s){if(r.WTF)throw s}if(r.cellStyles&&t!=null)try{n.s=i.Fills[t],n.s.fgColor&&n.s.fgColor.theme&&!n.s.fgColor.rgb&&(n.s.fgColor.rgb=v7(a.themeElements.clrScheme[n.s.fgColor.theme].rgb,n.s.fgColor.tint||0),r.WTF&&(n.s.fgColor.raw_rgb=a.themeElements.clrScheme[n.s.fgColor.theme].rgb)),n.s.bgColor&&n.s.bgColor.theme&&(n.s.bgColor.rgb=v7(a.themeElements.clrScheme[n.s.bgColor.theme].rgb,n.s.bgColor.tint||0),r.WTF&&(n.s.bgColor.raw_rgb=a.themeElements.clrScheme[n.s.bgColor.theme].rgb))}catch(s){if(r.WTF&&i.Fills)throw s}}}function ib(n,e){var t=l3(e);t.s.r<=t.e.r&&t.s.c<=t.e.c&&t.s.r>=0&&t.s.c>=0&&(n["!ref"]=I2(t))}var ob=/<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,sb=/<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/,lb=/<(?:\w:)?hyperlink [^>]*>/mg,cb=/"(\w*:\w*)"/,ub=/<(?:\w:)?col\b[^>]*[\/]?>/g,fb=/<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g,db=/<(?:\w:)?pageMargins[^>]*\/>/g,af=/<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/,hb=/<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/,pb=/<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;function mb(n,e,t,r,a,i,o){if(!n)return n;r||(r={"!id":{}});var s=e.dense?[]:{},l={s:{r:2e6,c:2e6},e:{r:0,c:0}},u="",f="",d=n.match(sb);d?(u=n.slice(0,d.index),f=n.slice(d.index+d[0].length)):u=f=n;var h=u.match(af);h?ka(h[0],s,a,t):(h=u.match(hb))&&gb(h[0],h[1]||"",s,a,t);var m=(u.match(/<(?:\w*:)?dimension/)||{index:-1}).index;if(m>0){var _=u.slice(m,m+50).match(cb);_&&ib(s,_[1])}var g=u.match(pb);g&&g[1]&&Sb(g[1],a);var v=[];if(e.cellStyles){var y=u.match(ub);y&&xb(v,y)}d&&wb(d[1],s,e,l,i,o);var S=f.match(fb);S&&(s["!autofilter"]=yb(S[0]));var b=[],w=f.match(ob);if(w)for(m=0;m!=w.length;++m)b[m]=l3(w[m].slice(w[m].indexOf('"')+1));var T=f.match(lb);T&&vb(s,T,r);var A=f.match(db);if(A&&(s["!margins"]=_b(v2(A[0]))),!s["!ref"]&&l.e.c>=l.s.c&&l.e.r>=l.s.r&&(s["!ref"]=I2(l)),e.sheetRows>0&&s["!ref"]){var C=l3(s["!ref"]);e.sheetRows<=+C.e.r&&(C.e.r=e.sheetRows-1,C.e.r>l.e.r&&(C.e.r=l.e.r),C.e.r<C.s.r&&(C.s.r=C.e.r),C.e.c>l.e.c&&(C.e.c=l.e.c),C.e.c<C.s.c&&(C.s.c=C.e.c),s["!fullref"]=s["!ref"],s["!ref"]=I2(C))}return v.length>0&&(s["!cols"]=v),b.length>0&&(s["!merges"]=b),s}function ka(n,e,t,r){var a=v2(n);t.Sheets[r]||(t.Sheets[r]={}),a.codeName&&(t.Sheets[r].CodeName=L2($2(a.codeName)))}function gb(n,e,t,r,a){ka(n.slice(0,n.indexOf(">")),t,r,a)}function vb(n,e,t){for(var r=Array.isArray(n),a=0;a!=e.length;++a){var i=v2($2(e[a]),!0);if(!i.ref)return;var o=((t||{})["!id"]||[])[i.id];o?(i.Target=o.Target,i.location&&(i.Target+="#"+L2(i.location))):(i.Target="#"+L2(i.location),o={Target:i.Target,TargetMode:"Internal"}),i.Rel=o,i.tooltip&&(i.Tooltip=i.tooltip,delete i.tooltip);for(var s=l3(i.ref),l=s.s.r;l<=s.e.r;++l)for(var u=s.s.c;u<=s.e.c;++u){var f=y2({c:u,r:l});r?(n[l]||(n[l]=[]),n[l][u]||(n[l][u]={t:"z",v:void 0}),n[l][u].l=i):(n[f]||(n[f]={t:"z",v:void 0}),n[f].l=i)}}}function _b(n){var e={};return["left","right","top","bottom","header","footer"].forEach(function(t){n[t]&&(e[t]=parseFloat(n[t]))}),e}function xb(n,e){for(var t=!1,r=0;r!=e.length;++r){var a=v2(e[r],!0);a.hidden&&(a.hidden=q2(a.hidden));var i=parseInt(a.min,10)-1,o=parseInt(a.max,10)-1;for(a.outlineLevel&&(a.level=+a.outlineLevel||0),delete a.min,delete a.max,a.width=+a.width,!t&&a.width&&(t=!0,Ma(a.width)),E5(a);i<=o;)n[i++]=G3(a)}}function yb(n){var e={ref:(n.match(/ref="([^"]*)"/)||[])[1]};return e}var bb=/<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;function Sb(n,e){e.Views||(e.Views=[{}]),(n.match(bb)||[]).forEach(function(t,r){var a=v2(t);e.Views[r]||(e.Views[r]={}),+a.zoomScale&&(e.Views[r].zoom=+a.zoomScale),q2(a.rightToLeft)&&(e.Views[r].RTL=!0)})}var wb=function(){var n=/<(?:\w+:)?c[ \/>]/,e=/<\/(?:\w+:)?row>/,t=/r=["']([^"']*)["']/,r=/<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/,a=/ref=["']([^"']*)["']/,i=R8("v"),o=R8("f");return function(l,u,f,d,h,m){for(var _=0,g="",v=[],y=[],S=0,b=0,w=0,T="",A,C,E=0,M=0,N,P,U=0,Z=0,G=Array.isArray(m.CellXf),W,q=[],r1=[],Y=Array.isArray(u),O=[],Q={},l1=!1,I=!!f.sheetStubs,n1=l.split(e),V=0,z=n1.length;V!=z;++V){g=n1[V].trim();var X=g.length;if(X!==0){var f1=0;e:for(_=0;_<X;++_)switch(g[_]){case">":if(g[_-1]!="/"){++_;break e}if(f&&f.cellStyles){if(C=v2(g.slice(f1,_),!0),E=C.r!=null?parseInt(C.r,10):E+1,M=-1,f.sheetRows&&f.sheetRows<E)continue;Q={},l1=!1,C.ht&&(l1=!0,Q.hpt=parseFloat(C.ht),Q.hpx=F8(Q.hpt)),C.hidden=="1"&&(l1=!0,Q.hidden=!0),C.outlineLevel!=null&&(l1=!0,Q.level=+C.outlineLevel),l1&&(O[E-1]=Q)}break;case"<":f1=_;break}if(f1>=_)break;if(C=v2(g.slice(f1,_),!0),E=C.r!=null?parseInt(C.r,10):E+1,M=-1,!(f.sheetRows&&f.sheetRows<E)){d.s.r>E-1&&(d.s.r=E-1),d.e.r<E-1&&(d.e.r=E-1),f&&f.cellStyles&&(Q={},l1=!1,C.ht&&(l1=!0,Q.hpt=parseFloat(C.ht),Q.hpx=F8(Q.hpt)),C.hidden=="1"&&(l1=!0,Q.hidden=!0),C.outlineLevel!=null&&(l1=!0,Q.level=+C.outlineLevel),l1&&(O[E-1]=Q)),v=g.slice(_).split(n);for(var y1=0;y1!=v.length&&v[y1].trim().charAt(0)=="<";++y1);for(v=v.slice(y1),_=0;_!=v.length;++_)if(g=v[_].trim(),g.length!==0){if(y=g.match(t),S=_,b=0,w=0,g="<c "+(g.slice(0,1)=="<"?">":"")+g,y!=null&&y.length===2){for(S=0,T=y[1],b=0;b!=T.length&&!((w=T.charCodeAt(b)-64)<1||w>26);++b)S=26*S+w;--S,M=S}else++M;for(b=0;b!=g.length&&g.charCodeAt(b)!==62;++b);if(++b,C=v2(g.slice(0,b),!0),C.r||(C.r=y2({r:E-1,c:M})),T=g.slice(b),A={t:""},(y=T.match(i))!=null&&y[1]!==""&&(A.v=L2(y[1])),f.cellFormula){if((y=T.match(o))!=null&&y[1]!==""){if(A.f=L2($2(y[1])).replace(/\r\n/g,`
`),f.xlfn||(A.f=as(A.f)),y[0].indexOf('t="array"')>-1)A.F=(T.match(a)||[])[1],A.F.indexOf(":")>-1&&q.push([l3(A.F),A.F]);else if(y[0].indexOf('t="shared"')>-1){P=v2(y[0]);var m1=L2($2(y[1]));f.xlfn||(m1=as(m1)),r1[parseInt(P.si,10)]=[P,m1,C.r]}}else(y=T.match(/<f[^>]*\/>/))&&(P=v2(y[0]),r1[P.si]&&(A.f=Lx(r1[P.si][1],r1[P.si][2],C.r)));var c1=l0(C.r);for(b=0;b<q.length;++b)c1.r>=q[b][0].s.r&&c1.r<=q[b][0].e.r&&c1.c>=q[b][0].s.c&&c1.c<=q[b][0].e.c&&(A.F=q[b][1])}if(C.t==null&&A.v===void 0)if(A.f||A.F)A.v=0,A.t="n";else if(I)A.t="z";else continue;else A.t=C.t||"n";switch(d.s.c>M&&(d.s.c=M),d.e.c<M&&(d.e.c=M),A.t){case"n":if(A.v==""||A.v==null){if(!I)continue;A.t="z"}else A.v=parseFloat(A.v);break;case"s":if(typeof A.v=="undefined"){if(!I)continue;A.t="z"}else N=_8[parseInt(A.v,10)],A.v=N.t,A.r=N.r,f.cellHTML&&(A.h=N.h);break;case"str":A.t="s",A.v=A.v!=null?$2(A.v):"",f.cellHTML&&(A.h=va(A.v));break;case"inlineStr":y=T.match(r),A.t="s",y!=null&&(N=Ca(y[1]))?(A.v=N.t,f.cellHTML&&(A.h=N.h)):A.v="";break;case"b":A.v=q2(A.v);break;case"d":f.cellDates?A.v=F3(A.v,1):(A.v=u0(F3(A.v,1)),A.t="n");break;case"e":(!f||f.cellText!==!1)&&(A.w=A.v),A.v=Tu[A.v];break}if(U=Z=0,W=null,G&&C.s!==void 0&&(W=m.CellXf[C.s],W!=null&&(W.numFmtId!=null&&(U=W.numFmtId),f.cellStyles&&W.fillId!=null&&(Z=W.fillId))),rf(A,U,Z,f,h,m),f.cellDates&&G&&A.t=="n"&&U5(b2[U])&&(A.t="d",A.v=G7(A.v)),C.cm&&f.xlmeta){var I1=(f.xlmeta.Cell||[])[+C.cm-1];I1&&I1.type=="XLDAPR"&&(A.D=!0)}if(Y){var j=l0(C.r);u[j.r]||(u[j.r]=[]),u[j.r][j.c]=A}else u[C.r]=A}}}}O.length>0&&(u["!rows"]=O)}}();function Ab(n,e){var t={},r=n.l+e;t.r=n.read_shift(4),n.l+=4;var a=n.read_shift(2);n.l+=1;var i=n.read_shift(1);return n.l=r,i&7&&(t.level=i&7),i&16&&(t.hidden=!0),i&32&&(t.hpt=a/20),t}var Tb=M9;function Eb(){}function Cb(n,e){var t={},r=n[n.l];return++n.l,t.above=!(r&64),t.left=!(r&128),n.l+=18,t.name=Jm(n),t}function Mb(n){var e=r4(n);return[e]}function Db(n){var e=C9(n);return[e]}function kb(n){var e=r4(n),t=n.read_shift(1);return[e,t,"b"]}function Rb(n){var e=C9(n),t=n.read_shift(1);return[e,t,"b"]}function Ib(n){var e=r4(n),t=n.read_shift(1);return[e,t,"e"]}function Ob(n){var e=C9(n),t=n.read_shift(1);return[e,t,"e"]}function Lb(n){var e=r4(n),t=n.read_shift(4);return[e,t,"s"]}function Fb(n){var e=C9(n),t=n.read_shift(4);return[e,t,"s"]}function Pb(n){var e=r4(n),t=J3(n);return[e,t,"n"]}function of(n){var e=C9(n),t=J3(n);return[e,t,"n"]}function Nb(n){var e=r4(n),t=Aa(n);return[e,t,"n"]}function zb(n){var e=C9(n),t=Aa(n);return[e,t,"n"]}function Ub(n){var e=r4(n),t=Sa(n);return[e,t,"is"]}function Bb(n){var e=r4(n),t=Q3(n);return[e,t,"str"]}function Vb(n){var e=C9(n),t=Q3(n);return[e,t,"str"]}function Gb(n,e,t){var r=n.l+e,a=r4(n);a.r=t["!row"];var i=n.read_shift(1),o=[a,i,"b"];if(t.cellFormula){n.l+=2;var s=H7(n,r-n.l,t);o[3]=Y3(s,null,a,t.supbooks,t)}else n.l=r;return o}function Wb(n,e,t){var r=n.l+e,a=r4(n);a.r=t["!row"];var i=n.read_shift(1),o=[a,i,"e"];if(t.cellFormula){n.l+=2;var s=H7(n,r-n.l,t);o[3]=Y3(s,null,a,t.supbooks,t)}else n.l=r;return o}function jb(n,e,t){var r=n.l+e,a=r4(n);a.r=t["!row"];var i=J3(n),o=[a,i,"n"];if(t.cellFormula){n.l+=2;var s=H7(n,r-n.l,t);o[3]=Y3(s,null,a,t.supbooks,t)}else n.l=r;return o}function Hb(n,e,t){var r=n.l+e,a=r4(n);a.r=t["!row"];var i=Q3(n),o=[a,i,"str"];if(t.cellFormula){n.l+=2;var s=H7(n,r-n.l,t);o[3]=Y3(s,null,a,t.supbooks,t)}else n.l=r;return o}var $b=M9;function Yb(n,e){var t=n.l+e,r=M9(n),a=wa(n),i=Q3(n),o=Q3(n),s=Q3(n);n.l=t;var l={rfx:r,relId:a,loc:i,display:s};return o&&(l.Tooltip=o),l}function Xb(){}function Jb(n,e,t){var r=n.l+e,a=Su(n),i=n.read_shift(1),o=[a];if(o[2]=i,t.cellFormula){var s=eb(n,r-n.l,t);o[1]=s}else n.l=r;return o}function Zb(n,e,t){var r=n.l+e,a=M9(n),i=[a];if(t.cellFormula){var o=nb(n,r-n.l,t);i[1]=o,n.l=r}else n.l=r;return i}var qb=["left","right","top","bottom","header","footer"];function Qb(n){var e={};return qb.forEach(function(t){e[t]=J3(n)}),e}function Kb(n){var e=n.read_shift(2);return n.l+=28,{RTL:e&32}}function eS(){}function tS(){}function nS(n,e,t,r,a,i,o){if(!n)return n;var s=e||{};r||(r={"!id":{}});var l=s.dense?[]:{},u,f={s:{r:2e6,c:2e6},e:{r:0,c:0}},d=!1,h=!1,m,_,g,v,y,S,b,w,T,A=[];s.biff=12,s["!row"]=0;var C=0,E=!1,M=[],N={},P=s.supbooks||a.supbooks||[[]];if(P.sharedf=N,P.arrayf=M,P.SheetNames=a.SheetNames||a.Sheets.map(function(Y){return Y.name}),!s.supbooks&&(s.supbooks=P,a.Names))for(var U=0;U<a.Names.length;++U)P[0][U+1]=a.Names[U];var Z=[],G=[],W=!1;y7[16]={n:"BrtShortReal",f:of};var q;if(le(n,function(O,Q,l1){if(!h)switch(l1){case 148:u=O;break;case 0:m=O,s.sheetRows&&s.sheetRows<=m.r&&(h=!0),w=W3(v=m.r),s["!row"]=m.r,(O.hidden||O.hpt||O.level!=null)&&(O.hpt&&(O.hpx=F8(O.hpt)),G[O.r]=O);break;case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 13:case 14:case 15:case 16:case 17:case 18:case 62:switch(_={t:O[2]},O[2]){case"n":_.v=O[1];break;case"s":b=_8[O[1]],_.v=b.t,_.r=b.r;break;case"b":_.v=!!O[1];break;case"e":_.v=O[1],s.cellText!==!1&&(_.w=D9[_.v]);break;case"str":_.t="s",_.v=O[1];break;case"is":_.t="s",_.v=O[1].t;break}if((g=o.CellXf[O[0].iStyleRef])&&rf(_,g.numFmtId,null,s,i,o),y=O[0].c==-1?y+1:O[0].c,s.dense?(l[v]||(l[v]=[]),l[v][y]=_):l[C3(y)+w]=_,s.cellFormula){for(E=!1,C=0;C<M.length;++C){var I=M[C];m.r>=I[0].s.r&&m.r<=I[0].e.r&&y>=I[0].s.c&&y<=I[0].e.c&&(_.F=I2(I[0]),E=!0)}!E&&O.length>3&&(_.f=O[3])}if(f.s.r>m.r&&(f.s.r=m.r),f.s.c>y&&(f.s.c=y),f.e.r<m.r&&(f.e.r=m.r),f.e.c<y&&(f.e.c=y),s.cellDates&&g&&_.t=="n"&&U5(b2[g.numFmtId])){var n1=n9(_.v);n1&&(_.t="d",_.v=new Date(n1.y,n1.m-1,n1.d,n1.H,n1.M,n1.S,n1.u))}q&&(q.type=="XLDAPR"&&(_.D=!0),q=void 0);break;case 1:case 12:if(!s.sheetStubs||d)break;_={t:"z",v:void 0},y=O[0].c==-1?y+1:O[0].c,s.dense?(l[v]||(l[v]=[]),l[v][y]=_):l[C3(y)+w]=_,f.s.r>m.r&&(f.s.r=m.r),f.s.c>y&&(f.s.c=y),f.e.r<m.r&&(f.e.r=m.r),f.e.c<y&&(f.e.c=y),q&&(q.type=="XLDAPR"&&(_.D=!0),q=void 0);break;case 176:A.push(O);break;case 49:q=((s.xlmeta||{}).Cell||[])[O-1];break;case 494:var V=r["!id"][O.relId];for(V?(O.Target=V.Target,O.loc&&(O.Target+="#"+O.loc),O.Rel=V):O.relId==""&&(O.Target="#"+O.loc),v=O.rfx.s.r;v<=O.rfx.e.r;++v)for(y=O.rfx.s.c;y<=O.rfx.e.c;++y)s.dense?(l[v]||(l[v]=[]),l[v][y]||(l[v][y]={t:"z",v:void 0}),l[v][y].l=O):(S=y2({c:y,r:v}),l[S]||(l[S]={t:"z",v:void 0}),l[S].l=O);break;case 426:if(!s.cellFormula)break;M.push(O),T=s.dense?l[v][y]:l[C3(y)+w],T.f=Y3(O[1],f,{r:m.r,c:y},P,s),T.F=I2(O[0]);break;case 427:if(!s.cellFormula)break;N[y2(O[0].s)]=O[1],T=s.dense?l[v][y]:l[C3(y)+w],T.f=Y3(O[1],f,{r:m.r,c:y},P,s);break;case 60:if(!s.cellStyles)break;for(;O.e>=O.s;)Z[O.e--]={width:O.w/256,hidden:!!(O.flags&1),level:O.level},W||(W=!0,Ma(O.w/256)),E5(Z[O.e+1]);break;case 161:l["!autofilter"]={ref:I2(O)};break;case 476:l["!margins"]=O;break;case 147:a.Sheets[t]||(a.Sheets[t]={}),O.name&&(a.Sheets[t].CodeName=O.name),(O.above||O.left)&&(l["!outline"]={above:O.above,left:O.left});break;case 137:a.Views||(a.Views=[{}]),a.Views[0]||(a.Views[0]={}),O.RTL&&(a.Views[0].RTL=!0);break;case 485:break;case 64:case 1053:break;case 151:break;case 152:case 175:case 644:case 625:case 562:case 396:case 1112:case 1146:case 471:case 1050:case 649:case 1105:case 589:case 607:case 564:case 1055:case 168:case 174:case 1180:case 499:case 507:case 550:case 171:case 167:case 1177:case 169:case 1181:case 551:case 552:case 661:case 639:case 478:case 537:case 477:case 536:case 1103:case 680:case 1104:case 1024:case 663:case 535:case 678:case 504:case 1043:case 428:case 170:case 3072:case 50:case 2070:case 1045:break;case 35:d=!0;break;case 36:d=!1;break;case 37:d=!0;break;case 38:d=!1;break;default:if(!Q.T){if(!d||s.WTF)throw new Error("Unexpected record 0x"+l1.toString(16))}}},s),delete s.supbooks,delete s["!row"],!l["!ref"]&&(f.s.r<2e6||u&&(u.e.r>0||u.e.c>0||u.s.r>0||u.s.c>0))&&(l["!ref"]=I2(u||f)),s.sheetRows&&l["!ref"]){var r1=l3(l["!ref"]);s.sheetRows<=+r1.e.r&&(r1.e.r=s.sheetRows-1,r1.e.r>f.e.r&&(r1.e.r=f.e.r),r1.e.r<r1.s.r&&(r1.s.r=r1.e.r),r1.e.c>f.e.c&&(r1.e.c=f.e.c),r1.e.c<r1.s.c&&(r1.s.c=r1.e.c),l["!fullref"]=l["!ref"],l["!ref"]=I2(r1))}return A.length>0&&(l["!merges"]=A),Z.length>0&&(l["!cols"]=Z),G.length>0&&(l["!rows"]=G),l}function rS(n){var e=[],t=n.match(/^<c:numCache>/),r;(n.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg)||[]).forEach(function(i){var o=i.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);o&&(e[+o[1]]=t?+o[2]:o[2])});var a=L2((n.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/)||["","General"])[1]);return(n.match(/<c:f>(.*?)<\/c:f>/mg)||[]).forEach(function(i){r=i.replace(/<.*?>/g,"")}),[e,a,r]}function aS(n,e,t,r,a,i){var o=i||{"!type":"chart"};if(!n)return i;var s=0,l=0,u="A",f={s:{r:2e6,c:2e6},e:{r:0,c:0}};return(n.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm)||[]).forEach(function(d){var h=rS(d);f.s.r=f.s.c=0,f.e.c=s,u=C3(s),h[0].forEach(function(m,_){o[u+W3(_)]={t:"n",v:m,z:h[1]},l=_}),f.e.r<l&&(f.e.r=l),++s}),s>0&&(o["!ref"]=I2(f)),o}function iS(n,e,t,r,a){if(!n)return n;r||(r={"!id":{}});var i={"!type":"chart","!drawel":null,"!rel":""},o,s=n.match(af);return s&&ka(s[0],i,a,t),(o=n.match(/drawing r:id="(.*?)"/))&&(i["!rel"]=o[1]),r["!id"][i["!rel"]]&&(i["!drawel"]=r["!id"][i["!rel"]]),i}function oS(n,e){n.l+=10;var t=Q3(n);return{name:t}}function sS(n,e,t,r,a){if(!n)return n;r||(r={"!id":{}});var i={"!type":"chart","!drawel":null,"!rel":""},o=!1;return le(n,function(l,u,f){switch(f){case 550:i["!rel"]=l;break;case 651:a.Sheets[t]||(a.Sheets[t]={}),l.name&&(a.Sheets[t].CodeName=l.name);break;case 562:case 652:case 669:case 679:case 551:case 552:case 476:case 3072:break;case 35:o=!0;break;case 36:o=!1;break;case 37:break;case 38:break;default:if(!(u.T>0)){if(!(u.T<0)){if(!o||e.WTF)throw new Error("Unexpected record 0x"+f.toString(16))}}}},e),r["!id"][i["!rel"]]&&(i["!drawel"]=r["!id"][i["!rel"]]),i}var sf=[["allowRefreshQuery",!1,"bool"],["autoCompressPictures",!0,"bool"],["backupFile",!1,"bool"],["checkCompatibility",!1,"bool"],["CodeName",""],["date1904",!1,"bool"],["defaultThemeVersion",0,"int"],["filterPrivacy",!1,"bool"],["hidePivotFieldList",!1,"bool"],["promptedSolutions",!1,"bool"],["publishItems",!1,"bool"],["refreshAllConnections",!1,"bool"],["saveExternalLinkValues",!0,"bool"],["showBorderUnselectedTables",!0,"bool"],["showInkAnnotation",!0,"bool"],["showObjects","all"],["showPivotChartFilter",!1,"bool"],["updateLinks","userSet"]],lS=[["activeTab",0,"int"],["autoFilterDateGrouping",!0,"bool"],["firstSheet",0,"int"],["minimized",!1,"bool"],["showHorizontalScroll",!0,"bool"],["showSheetTabs",!0,"bool"],["showVerticalScroll",!0,"bool"],["tabRatio",600,"int"],["visibility","visible"]],cS=[],uS=[["calcCompleted","true"],["calcMode","auto"],["calcOnSave","true"],["concurrentCalc","true"],["fullCalcOnLoad","false"],["fullPrecision","true"],["iterate","false"],["iterateCount","100"],["iterateDelta","0.001"],["refMode","A1"]];function cs(n,e){for(var t=0;t!=n.length;++t)for(var r=n[t],a=0;a!=e.length;++a){var i=e[a];if(r[i[0]]==null)r[i[0]]=i[1];else switch(i[2]){case"bool":typeof r[i[0]]=="string"&&(r[i[0]]=q2(r[i[0]]));break;case"int":typeof r[i[0]]=="string"&&(r[i[0]]=parseInt(r[i[0]],10));break}}}function us(n,e){for(var t=0;t!=e.length;++t){var r=e[t];if(n[r[0]]==null)n[r[0]]=r[1];else switch(r[2]){case"bool":typeof n[r[0]]=="string"&&(n[r[0]]=q2(n[r[0]]));break;case"int":typeof n[r[0]]=="string"&&(n[r[0]]=parseInt(n[r[0]],10));break}}}function lf(n){us(n.WBProps,sf),us(n.CalcPr,uS),cs(n.WBView,lS),cs(n.Sheets,cS),y5.date1904=q2(n.WBProps.date1904)}var fS="][*?/\\".split("");function dS(n,e){if(n.length>31){if(e)return!1;throw new Error("Sheet names cannot exceed 31 chars")}var t=!0;return fS.forEach(function(r){if(n.indexOf(r)!=-1){if(!e)throw new Error("Sheet name cannot contain : \\ / ? * [ ]");t=!1}}),t}var hS=/<\w+:workbook/;function pS(n,e){if(!n)throw new Error("Could not find file");var t={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},Names:[],xmlns:""},r=!1,a="xmlns",i={},o=0;if(n.replace(r0,function(l,u){var f=v2(l);switch(L4(f[0])){case"<?xml":break;case"<workbook":l.match(hS)&&(a="xmlns"+l.match(/<(\w+):/)[1]),t.xmlns=f[a];break;case"</workbook>":break;case"<fileVersion":delete f[0],t.AppVersion=f;break;case"<fileVersion/>":case"</fileVersion>":break;case"<fileSharing":break;case"<fileSharing/>":break;case"<workbookPr":case"<workbookPr/>":sf.forEach(function(d){if(f[d[0]]!=null)switch(d[2]){case"bool":t.WBProps[d[0]]=q2(f[d[0]]);break;case"int":t.WBProps[d[0]]=parseInt(f[d[0]],10);break;default:t.WBProps[d[0]]=f[d[0]]}}),f.codeName&&(t.WBProps.CodeName=$2(f.codeName));break;case"</workbookPr>":break;case"<workbookProtection":break;case"<workbookProtection/>":break;case"<bookViews":case"<bookViews>":case"</bookViews>":break;case"<workbookView":case"<workbookView/>":delete f[0],t.WBView.push(f);break;case"</workbookView>":break;case"<sheets":case"<sheets>":case"</sheets>":break;case"<sheet":switch(f.state){case"hidden":f.Hidden=1;break;case"veryHidden":f.Hidden=2;break;default:f.Hidden=0}delete f.state,f.name=L2($2(f.name)),delete f[0],t.Sheets.push(f);break;case"</sheet>":break;case"<functionGroups":case"<functionGroups/>":break;case"<functionGroup":break;case"<externalReferences":case"</externalReferences>":case"<externalReferences>":break;case"<externalReference":break;case"<definedNames/>":break;case"<definedNames>":case"<definedNames":r=!0;break;case"</definedNames>":r=!1;break;case"<definedName":i={},i.Name=$2(f.name),f.comment&&(i.Comment=f.comment),f.localSheetId&&(i.Sheet=+f.localSheetId),q2(f.hidden||"0")&&(i.Hidden=!0),o=u+l.length;break;case"</definedName>":i.Ref=L2($2(n.slice(o,u))),t.Names.push(i);break;case"<definedName/>":break;case"<calcPr":delete f[0],t.CalcPr=f;break;case"<calcPr/>":delete f[0],t.CalcPr=f;break;case"</calcPr>":break;case"<oleSize":break;case"<customWorkbookViews>":case"</customWorkbookViews>":case"<customWorkbookViews":break;case"<customWorkbookView":case"</customWorkbookView>":break;case"<pivotCaches>":case"</pivotCaches>":case"<pivotCaches":break;case"<pivotCache":break;case"<smartTagPr":case"<smartTagPr/>":break;case"<smartTagTypes":case"<smartTagTypes>":case"</smartTagTypes>":break;case"<smartTagType":break;case"<webPublishing":case"<webPublishing/>":break;case"<fileRecoveryPr":case"<fileRecoveryPr/>":break;case"<webPublishObjects>":case"<webPublishObjects":case"</webPublishObjects>":break;case"<webPublishObject":break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":r=!0;break;case"</ext>":r=!1;break;case"<ArchID":break;case"<AlternateContent":case"<AlternateContent>":r=!0;break;case"</AlternateContent>":r=!1;break;case"<revisionPtr":break;default:if(!r&&e.WTF)throw new Error("unrecognized "+f[0]+" in workbook")}return l}),Im.indexOf(t.xmlns)===-1)throw new Error("Unknown Namespace: "+t.xmlns);return lf(t),t}function mS(n,e){var t={};return t.Hidden=n.read_shift(4),t.iTabID=n.read_shift(4),t.strRelID=bn(n),t.name=Q3(n),t}function gS(n,e){var t={},r=n.read_shift(4);t.defaultThemeVersion=n.read_shift(4);var a=e>8?Q3(n):"";return a.length>0&&(t.CodeName=a),t.autoCompressPictures=!!(r&65536),t.backupFile=!!(r&64),t.checkCompatibility=!!(r&4096),t.date1904=!!(r&1),t.filterPrivacy=!!(r&8),t.hidePivotFieldList=!!(r&1024),t.promptedSolutions=!!(r&16),t.publishItems=!!(r&2048),t.refreshAllConnections=!!(r&262144),t.saveExternalLinkValues=!!(r&128),t.showBorderUnselectedTables=!!(r&4),t.showInkAnnotation=!!(r&32),t.showObjects=["all","placeholders","none"][r>>13&3],t.showPivotChartFilter=!!(r&32768),t.updateLinks=["userSet","never","always"][r>>8&3],t}function vS(n,e){var t={};return n.read_shift(4),t.ArchID=n.read_shift(4),n.l+=e-8,t}function _S(n,e,t){var r=n.l+e;n.l+=4,n.l+=1;var a=n.read_shift(4),i=Zm(n),o=tb(n,0,t),s=wa(n);n.l=r;var l={Name:i,Ptg:o};return a<268435455&&(l.Sheet=a),s&&(l.Comment=s),l}function xS(n,e){var t={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},xmlns:""},r=[],a=!1;e||(e={}),e.biff=12;var i=[],o=[[]];return o.SheetNames=[],o.XTI=[],y7[16]={n:"BrtFRTArchID$",f:vS},le(n,function(l,u,f){switch(f){case 156:o.SheetNames.push(l.name),t.Sheets.push(l);break;case 153:t.WBProps=l;break;case 39:l.Sheet!=null&&(e.SID=l.Sheet),l.Ref=Y3(l.Ptg,null,null,o,e),delete e.SID,delete l.Ptg,i.push(l);break;case 1036:break;case 357:case 358:case 355:case 667:o[0].length?o.push([f,l]):o[0]=[f,l],o[o.length-1].XTI=[];break;case 362:o.length===0&&(o[0]=[],o[0].XTI=[]),o[o.length-1].XTI=o[o.length-1].XTI.concat(l),o.XTI=o.XTI.concat(l);break;case 361:break;case 2071:case 158:case 143:case 664:case 353:break;case 3072:case 3073:case 534:case 677:case 157:case 610:case 2050:case 155:case 548:case 676:case 128:case 665:case 2128:case 2125:case 549:case 2053:case 596:case 2076:case 2075:case 2082:case 397:case 154:case 1117:case 553:case 2091:break;case 35:r.push(f),a=!0;break;case 36:r.pop(),a=!1;break;case 37:r.push(f),a=!0;break;case 38:r.pop(),a=!1;break;case 16:break;default:if(!u.T){if(!a||e.WTF&&r[r.length-1]!=37&&r[r.length-1]!=35)throw new Error("Unexpected record 0x"+f.toString(16))}}},e),lf(t),t.Names=i,t.supbooks=o,t}function yS(n,e,t){return e.slice(-4)===".bin"?xS(n,t):pS(n,t)}function bS(n,e,t,r,a,i,o,s){return e.slice(-4)===".bin"?nS(n,r,t,a,i,o,s):mb(n,r,t,a,i,o,s)}function SS(n,e,t,r,a,i,o,s){return e.slice(-4)===".bin"?sS(n,r,t,a,i):iS(n,r,t,a,i)}function wS(n,e,t,r,a,i,o,s){return e.slice(-4)===".bin"?Rx():Ix()}function AS(n,e,t,r,a,i,o,s){return e.slice(-4)===".bin"?Dx():kx()}function TS(n,e,t,r){return e.slice(-4)===".bin"?$_(n,t,r):B_(n,t,r)}function ES(n,e,t){return Yu(n,t)}function CS(n,e,t){return e.slice(-4)===".bin"?l_(n,t):o_(n,t)}function MS(n,e,t){return e.slice(-4)===".bin"?Ex(n,t):bx(n,t)}function DS(n,e,t){return e.slice(-4)===".bin"?_x(n):gx(n)}function kS(n,e,t,r){return t.slice(-4)===".bin"?xx(n,e,t,r):void 0}function RS(n,e,t){return e.slice(-4)===".bin"?px(n,e,t):mx(n,e,t)}var cf=/([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,uf=/([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;function s4(n,e){var t=n.split(/\s+/),r=[];if(e||(r[0]=t[0]),t.length===1)return r;var a=n.match(cf),i,o,s,l;if(a)for(l=0;l!=a.length;++l)i=a[l].match(uf),(o=i[1].indexOf(":"))===-1?r[i[1]]=i[2].slice(1,i[2].length-1):(i[1].slice(0,6)==="xmlns:"?s="xmlns"+i[1].slice(6):s=i[1].slice(o+1),r[s]=i[2].slice(1,i[2].length-1));return r}function IS(n){var e=n.split(/\s+/),t={};if(e.length===1)return t;var r=n.match(cf),a,i,o,s;if(r)for(s=0;s!=r.length;++s)a=r[s].match(uf),(i=a[1].indexOf(":"))===-1?t[a[1]]=a[2].slice(1,a[2].length-1):(a[1].slice(0,6)==="xmlns:"?o="xmlns"+a[1].slice(6):o=a[1].slice(i+1),t[o]=a[2].slice(1,a[2].length-1));return t}var y8;function OS(n,e){var t=y8[n]||L2(n);return t==="General"?v9(e):e4(t,e)}function LS(n,e,t,r){var a=r;switch((t[0].match(/dt:dt="([\w.]+)"/)||["",""])[1]){case"boolean":a=q2(r);break;case"i2":case"int":a=parseInt(r,10);break;case"r4":case"float":a=parseFloat(r);break;case"date":case"dateTime.tz":a=F3(r);break;case"i8":case"string":case"fixed":case"uuid":case"bin.base64":break;default:throw new Error("bad custprop:"+t[0])}n[L2(e)]=a}function FS(n,e,t){if(n.t!=="z"){if(!t||t.cellText!==!1)try{n.t==="e"?n.w=n.w||D9[n.v]:e==="General"?n.t==="n"?(n.v|0)===n.v?n.w=n.v.toString(10):n.w=k8(n.v):n.w=v9(n.v):n.w=OS(e||"General",n.v)}catch(i){if(t.WTF)throw i}try{var r=y8[e]||e||"General";if(t.cellNF&&(n.z=r),t.cellDates&&n.t=="n"&&U5(r)){var a=n9(n.v);a&&(n.t="d",n.v=new Date(a.y,a.m-1,a.d,a.H,a.M,a.S,a.u))}}catch(i){if(t.WTF)throw i}}}function PS(n,e,t){if(t.cellStyles&&e.Interior){var r=e.Interior;r.Pattern&&(r.patternType=L_[r.Pattern]||r.Pattern)}n[e.ID]=e}function NS(n,e,t,r,a,i,o,s,l,u){var f="General",d=r.StyleID,h={};u=u||{};var m=[],_=0;for(d===void 0&&s&&(d=s.StyleID),d===void 0&&o&&(d=o.StyleID);i[d]!==void 0&&(i[d].nf&&(f=i[d].nf),i[d].Interior&&m.push(i[d].Interior),!!i[d].Parent);)d=i[d].Parent;switch(t.Type){case"Boolean":r.t="b",r.v=q2(n);break;case"String":r.t="s",r.r=Io(L2(n)),r.v=n.indexOf("<")>-1?L2(e||n).replace(/<.*?>/g,""):r.r;break;case"DateTime":n.slice(-1)!="Z"&&(n+="Z"),r.v=(F3(n)-new Date(Date.UTC(1899,11,30)))/(24*60*60*1e3),r.v!==r.v?r.v=L2(n):r.v<60&&(r.v=r.v-1),(!f||f=="General")&&(f="yyyy-mm-dd");case"Number":r.v===void 0&&(r.v=+n),r.t||(r.t="n");break;case"Error":r.t="e",r.v=Tu[n],u.cellText!==!1&&(r.w=n);break;default:n==""&&e==""?r.t="z":(r.t="s",r.v=Io(e||n));break}if(FS(r,f,u),u.cellFormula!==!1)if(r.Formula){var g=L2(r.Formula);g.charCodeAt(0)==61&&(g=g.slice(1)),r.f=x5(g,a),delete r.Formula,r.ArrayRange=="RC"?r.F=x5("RC:RC",a):r.ArrayRange&&(r.F=x5(r.ArrayRange,a),l.push([l3(r.F),r.F]))}else for(_=0;_<l.length;++_)a.r>=l[_][0].s.r&&a.r<=l[_][0].e.r&&a.c>=l[_][0].s.c&&a.c<=l[_][0].e.c&&(r.F=l[_][1]);u.cellStyles&&(m.forEach(function(v){!h.patternType&&v.patternType&&(h.patternType=v.patternType)}),r.s=h),r.StyleID!==void 0&&(r.ixfe=r.StyleID)}function zS(n){n.t=n.v||"",n.t=n.t.replace(/\r\n/g,`
`).replace(/\r/g,`
`),n.v=n.w=n.ixfe=void 0}function xt(n,e){var t=e||{};Zc();var r=t8(_a(n));(t.type=="binary"||t.type=="array"||t.type=="base64")&&(r=$2(r));var a=r.slice(0,1024).toLowerCase(),i=!1;if(a=a.replace(/".*?"/g,""),(a.indexOf(">")&1023)>Math.min(a.indexOf(",")&1023,a.indexOf(";")&1023)){var o=G3(t);return o.type="string",O8.to_workbook(r,o)}if(a.indexOf("<?xml")==-1&&["html","table","head","meta","script","style","div"].forEach(function(c2){a.indexOf("<"+c2)>=0&&(i=!0)}),i)return YS(r,t);y8={"General Number":"General","General Date":b2[22],"Long Date":"dddd, mmmm dd, yyyy","Medium Date":b2[15],"Short Date":b2[14],"Long Time":b2[19],"Medium Time":b2[18],"Short Time":b2[20],Currency:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',Fixed:b2[2],Standard:b2[4],Percent:b2[10],Scientific:b2[11],"Yes/No":'"Yes";"Yes";"No";@',"True/False":'"True";"True";"False";@',"On/Off":'"Yes";"Yes";"No";@'};var s,l=[],u,f={},d=[],h=t.dense?[]:{},m="",_={},g={},v=s4('<Data ss:Type="String">'),y=0,S=0,b=0,w={s:{r:2e6,c:2e6},e:{r:0,c:0}},T={},A={},C="",E=0,M=[],N={},P={},U=0,Z=[],G=[],W={},q=[],r1,Y=!1,O=[],Q=[],l1={},I=0,n1=0,V={Sheets:[],WBProps:{date1904:!1}},z={};I8.lastIndex=0,r=r.replace(/<!--([\s\S]*?)-->/mg,"");for(var X="";s=I8.exec(r);)switch(s[3]=(X=s[3]).toLowerCase()){case"data":if(X=="data"){if(s[1]==="/"){if((u=l.pop())[0]!==s[3])throw new Error("Bad state: "+u.join("|"))}else s[0].charAt(s[0].length-2)!=="/"&&l.push([s[3],!0]);break}if(l[l.length-1][1])break;s[1]==="/"?NS(r.slice(y,s.index),C,v,l[l.length-1][0]=="comment"?W:_,{c:S,r:b},T,q[S],g,O,t):(C="",v=s4(s[0]),y=s.index+s[0].length);break;case"cell":if(s[1]==="/")if(G.length>0&&(_.c=G),(!t.sheetRows||t.sheetRows>b)&&_.v!==void 0&&(t.dense?(h[b]||(h[b]=[]),h[b][S]=_):h[C3(S)+W3(b)]=_),_.HRef&&(_.l={Target:L2(_.HRef)},_.HRefScreenTip&&(_.l.Tooltip=_.HRefScreenTip),delete _.HRef,delete _.HRefScreenTip),(_.MergeAcross||_.MergeDown)&&(I=S+(parseInt(_.MergeAcross,10)|0),n1=b+(parseInt(_.MergeDown,10)|0),M.push({s:{c:S,r:b},e:{c:I,r:n1}})),!t.sheetStubs)_.MergeAcross?S=I+1:++S;else if(_.MergeAcross||_.MergeDown){for(var f1=S;f1<=I;++f1)for(var y1=b;y1<=n1;++y1)(f1>S||y1>b)&&(t.dense?(h[y1]||(h[y1]=[]),h[y1][f1]={t:"z"}):h[C3(f1)+W3(y1)]={t:"z"});S=I+1}else++S;else _=IS(s[0]),_.Index&&(S=+_.Index-1),S<w.s.c&&(w.s.c=S),S>w.e.c&&(w.e.c=S),s[0].slice(-2)==="/>"&&++S,G=[];break;case"row":s[1]==="/"||s[0].slice(-2)==="/>"?(b<w.s.r&&(w.s.r=b),b>w.e.r&&(w.e.r=b),s[0].slice(-2)==="/>"&&(g=s4(s[0]),g.Index&&(b=+g.Index-1)),S=0,++b):(g=s4(s[0]),g.Index&&(b=+g.Index-1),l1={},(g.AutoFitHeight=="0"||g.Height)&&(l1.hpx=parseInt(g.Height,10),l1.hpt=$u(l1.hpx),Q[b]=l1),g.Hidden=="1"&&(l1.hidden=!0,Q[b]=l1));break;case"worksheet":if(s[1]==="/"){if((u=l.pop())[0]!==s[3])throw new Error("Bad state: "+u.join("|"));d.push(m),w.s.r<=w.e.r&&w.s.c<=w.e.c&&(h["!ref"]=I2(w),t.sheetRows&&t.sheetRows<=w.e.r&&(h["!fullref"]=h["!ref"],w.e.r=t.sheetRows-1,h["!ref"]=I2(w))),M.length&&(h["!merges"]=M),q.length>0&&(h["!cols"]=q),Q.length>0&&(h["!rows"]=Q),f[m]=h}else w={s:{r:2e6,c:2e6},e:{r:0,c:0}},b=S=0,l.push([s[3],!1]),u=s4(s[0]),m=L2(u.Name),h=t.dense?[]:{},M=[],O=[],Q=[],z={name:m,Hidden:0},V.Sheets.push(z);break;case"table":if(s[1]==="/"){if((u=l.pop())[0]!==s[3])throw new Error("Bad state: "+u.join("|"))}else{if(s[0].slice(-2)=="/>")break;l.push([s[3],!1]),q=[],Y=!1}break;case"style":s[1]==="/"?PS(T,A,t):A=s4(s[0]);break;case"numberformat":A.nf=L2(s4(s[0]).Format||"General"),y8[A.nf]&&(A.nf=y8[A.nf]);for(var m1=0;m1!=392&&b2[m1]!=A.nf;++m1);if(m1==392){for(m1=57;m1!=392;++m1)if(b2[m1]==null){s9(A.nf,m1);break}}break;case"column":if(l[l.length-1][0]!=="table")break;if(r1=s4(s[0]),r1.Hidden&&(r1.hidden=!0,delete r1.Hidden),r1.Width&&(r1.wpx=parseInt(r1.Width,10)),!Y&&r1.wpx>10){Y=!0,o0=ju;for(var c1=0;c1<q.length;++c1)q[c1]&&E5(q[c1])}Y&&E5(r1),q[r1.Index-1||q.length]=r1;for(var I1=0;I1<+r1.Span;++I1)q[q.length]=G3(r1);break;case"namedrange":if(s[1]==="/")break;V.Names||(V.Names=[]);var j=v2(s[0]),C1={Name:j.Name,Ref:x5(j.RefersTo.slice(1),{r:0,c:0})};V.Sheets.length>0&&(C1.Sheet=V.Sheets.length-1),V.Names.push(C1);break;case"namedcell":break;case"b":break;case"i":break;case"u":break;case"s":break;case"em":break;case"h2":break;case"h3":break;case"sub":break;case"sup":break;case"span":break;case"alignment":break;case"borders":break;case"border":break;case"font":if(s[0].slice(-2)==="/>")break;s[1]==="/"?C+=r.slice(E,s.index):E=s.index+s[0].length;break;case"interior":if(!t.cellStyles)break;A.Interior=s4(s[0]);break;case"protection":break;case"author":case"title":case"description":case"created":case"keywords":case"subject":case"category":case"company":case"lastauthor":case"lastsaved":case"lastprinted":case"version":case"revision":case"totaltime":case"hyperlinkbase":case"manager":case"contentstatus":case"identifier":case"language":case"appname":if(s[0].slice(-2)==="/>")break;s[1]==="/"?bg(N,X,r.slice(U,s.index)):U=s.index+s[0].length;break;case"paragraphs":break;case"styles":case"workbook":if(s[1]==="/"){if((u=l.pop())[0]!==s[3])throw new Error("Bad state: "+u.join("|"))}else l.push([s[3],!1]);break;case"comment":if(s[1]==="/"){if((u=l.pop())[0]!==s[3])throw new Error("Bad state: "+u.join("|"));zS(W),G.push(W)}else l.push([s[3],!1]),u=s4(s[0]),W={a:u.Author};break;case"autofilter":if(s[1]==="/"){if((u=l.pop())[0]!==s[3])throw new Error("Bad state: "+u.join("|"))}else if(s[0].charAt(s[0].length-2)!=="/"){var $1=s4(s[0]);h["!autofilter"]={ref:x5($1.Range).replace(/\$/g,"")},l.push([s[3],!0])}break;case"name":break;case"datavalidation":if(s[1]==="/"){if((u=l.pop())[0]!==s[3])throw new Error("Bad state: "+u.join("|"))}else s[0].charAt(s[0].length-2)!=="/"&&l.push([s[3],!0]);break;case"pixelsperinch":break;case"componentoptions":case"documentproperties":case"customdocumentproperties":case"officedocumentsettings":case"pivottable":case"pivotcache":case"names":case"mapinfo":case"pagebreaks":case"querytable":case"sorting":case"schema":case"conditionalformatting":case"smarttagtype":case"smarttags":case"excelworkbook":case"workbookoptions":case"worksheetoptions":if(s[1]==="/"){if((u=l.pop())[0]!==s[3])throw new Error("Bad state: "+u.join("|"))}else s[0].charAt(s[0].length-2)!=="/"&&l.push([s[3],!0]);break;case"null":break;default:if(l.length==0&&s[3]=="document"||l.length==0&&s[3]=="uof")return gs(r,t);var J1=!0;switch(l[l.length-1][0]){case"officedocumentsettings":switch(s[3]){case"allowpng":break;case"removepersonalinformation":break;case"downloadcomponents":break;case"locationofcomponents":break;case"colors":break;case"color":break;case"index":break;case"rgb":break;case"targetscreensize":break;case"readonlyrecommended":break;default:J1=!1}break;case"componentoptions":switch(s[3]){case"toolbar":break;case"hideofficelogo":break;case"spreadsheetautofit":break;case"label":break;case"caption":break;case"maxheight":break;case"maxwidth":break;case"nextsheetnumber":break;default:J1=!1}break;case"excelworkbook":switch(s[3]){case"date1904":V.WBProps.date1904=!0;break;case"windowheight":break;case"windowwidth":break;case"windowtopx":break;case"windowtopy":break;case"tabratio":break;case"protectstructure":break;case"protectwindow":break;case"protectwindows":break;case"activesheet":break;case"displayinknotes":break;case"firstvisiblesheet":break;case"supbook":break;case"sheetname":break;case"sheetindex":break;case"sheetindexfirst":break;case"sheetindexlast":break;case"dll":break;case"acceptlabelsinformulas":break;case"donotsavelinkvalues":break;case"iteration":break;case"maxiterations":break;case"maxchange":break;case"path":break;case"xct":break;case"count":break;case"selectedsheets":break;case"calculation":break;case"uncalced":break;case"startupprompt":break;case"crn":break;case"externname":break;case"formula":break;case"colfirst":break;case"collast":break;case"wantadvise":break;case"boolean":break;case"error":break;case"text":break;case"ole":break;case"noautorecover":break;case"publishobjects":break;case"donotcalculatebeforesave":break;case"number":break;case"refmoder1c1":break;case"embedsavesmarttags":break;default:J1=!1}break;case"workbookoptions":switch(s[3]){case"owcversion":break;case"height":break;case"width":break;default:J1=!1}break;case"worksheetoptions":switch(s[3]){case"visible":if(s[0].slice(-2)!=="/>")if(s[1]==="/")switch(r.slice(U,s.index)){case"SheetHidden":z.Hidden=1;break;case"SheetVeryHidden":z.Hidden=2;break}else U=s.index+s[0].length;break;case"header":h["!margins"]||x8(h["!margins"]={},"xlml"),isNaN(+v2(s[0]).Margin)||(h["!margins"].header=+v2(s[0]).Margin);break;case"footer":h["!margins"]||x8(h["!margins"]={},"xlml"),isNaN(+v2(s[0]).Margin)||(h["!margins"].footer=+v2(s[0]).Margin);break;case"pagemargins":var z1=v2(s[0]);h["!margins"]||x8(h["!margins"]={},"xlml"),isNaN(+z1.Top)||(h["!margins"].top=+z1.Top),isNaN(+z1.Left)||(h["!margins"].left=+z1.Left),isNaN(+z1.Right)||(h["!margins"].right=+z1.Right),isNaN(+z1.Bottom)||(h["!margins"].bottom=+z1.Bottom);break;case"displayrighttoleft":V.Views||(V.Views=[]),V.Views[0]||(V.Views[0]={}),V.Views[0].RTL=!0;break;case"freezepanes":break;case"frozennosplit":break;case"splithorizontal":case"splitvertical":break;case"donotdisplaygridlines":break;case"activerow":break;case"activecol":break;case"toprowbottompane":break;case"leftcolumnrightpane":break;case"unsynced":break;case"print":break;case"printerrors":break;case"panes":break;case"scale":break;case"pane":break;case"number":break;case"layout":break;case"pagesetup":break;case"selected":break;case"protectobjects":break;case"enableselection":break;case"protectscenarios":break;case"validprinterinfo":break;case"horizontalresolution":break;case"verticalresolution":break;case"numberofcopies":break;case"activepane":break;case"toprowvisible":break;case"leftcolumnvisible":break;case"fittopage":break;case"rangeselection":break;case"papersizeindex":break;case"pagelayoutzoom":break;case"pagebreakzoom":break;case"filteron":break;case"fitwidth":break;case"fitheight":break;case"commentslayout":break;case"zoom":break;case"lefttoright":break;case"gridlines":break;case"allowsort":break;case"allowfilter":break;case"allowinsertrows":break;case"allowdeleterows":break;case"allowinsertcols":break;case"allowdeletecols":break;case"allowinserthyperlinks":break;case"allowformatcells":break;case"allowsizecols":break;case"allowsizerows":break;case"nosummaryrowsbelowdetail":h["!outline"]||(h["!outline"]={}),h["!outline"].above=!0;break;case"tabcolorindex":break;case"donotdisplayheadings":break;case"showpagelayoutzoom":break;case"nosummarycolumnsrightdetail":h["!outline"]||(h["!outline"]={}),h["!outline"].left=!0;break;case"blackandwhite":break;case"donotdisplayzeros":break;case"displaypagebreak":break;case"rowcolheadings":break;case"donotdisplayoutline":break;case"noorientation":break;case"allowusepivottables":break;case"zeroheight":break;case"viewablerange":break;case"selection":break;case"protectcontents":break;default:J1=!1}break;case"pivottable":case"pivotcache":switch(s[3]){case"immediateitemsondrop":break;case"showpagemultipleitemlabel":break;case"compactrowindent":break;case"location":break;case"pivotfield":break;case"orientation":break;case"layoutform":break;case"layoutsubtotallocation":break;case"layoutcompactrow":break;case"position":break;case"pivotitem":break;case"datatype":break;case"datafield":break;case"sourcename":break;case"parentfield":break;case"ptlineitems":break;case"ptlineitem":break;case"countofsameitems":break;case"item":break;case"itemtype":break;case"ptsource":break;case"cacheindex":break;case"consolidationreference":break;case"filename":break;case"reference":break;case"nocolumngrand":break;case"norowgrand":break;case"blanklineafteritems":break;case"hidden":break;case"subtotal":break;case"basefield":break;case"mapchilditems":break;case"function":break;case"refreshonfileopen":break;case"printsettitles":break;case"mergelabels":break;case"defaultversion":break;case"refreshname":break;case"refreshdate":break;case"refreshdatecopy":break;case"versionlastrefresh":break;case"versionlastupdate":break;case"versionupdateablemin":break;case"versionrefreshablemin":break;case"calculation":break;default:J1=!1}break;case"pagebreaks":switch(s[3]){case"colbreaks":break;case"colbreak":break;case"rowbreaks":break;case"rowbreak":break;case"colstart":break;case"colend":break;case"rowend":break;default:J1=!1}break;case"autofilter":switch(s[3]){case"autofiltercolumn":break;case"autofiltercondition":break;case"autofilterand":break;case"autofilteror":break;default:J1=!1}break;case"querytable":switch(s[3]){case"id":break;case"autoformatfont":break;case"autoformatpattern":break;case"querysource":break;case"querytype":break;case"enableredirections":break;case"refreshedinxl9":break;case"urlstring":break;case"htmltables":break;case"connection":break;case"commandtext":break;case"refreshinfo":break;case"notitles":break;case"nextid":break;case"columninfo":break;case"overwritecells":break;case"donotpromptforfile":break;case"textwizardsettings":break;case"source":break;case"number":break;case"decimal":break;case"thousandseparator":break;case"trailingminusnumbers":break;case"formatsettings":break;case"fieldtype":break;case"delimiters":break;case"tab":break;case"comma":break;case"autoformatname":break;case"versionlastedit":break;case"versionlastrefresh":break;default:J1=!1}break;case"datavalidation":switch(s[3]){case"range":break;case"type":break;case"min":break;case"max":break;case"sort":break;case"descending":break;case"order":break;case"casesensitive":break;case"value":break;case"errorstyle":break;case"errormessage":break;case"errortitle":break;case"inputmessage":break;case"inputtitle":break;case"combohide":break;case"inputhide":break;case"condition":break;case"qualifier":break;case"useblank":break;case"value1":break;case"value2":break;case"format":break;case"cellrangelist":break;default:J1=!1}break;case"sorting":case"conditionalformatting":switch(s[3]){case"range":break;case"type":break;case"min":break;case"max":break;case"sort":break;case"descending":break;case"order":break;case"casesensitive":break;case"value":break;case"errorstyle":break;case"errormessage":break;case"errortitle":break;case"cellrangelist":break;case"inputmessage":break;case"inputtitle":break;case"combohide":break;case"inputhide":break;case"condition":break;case"qualifier":break;case"useblank":break;case"value1":break;case"value2":break;case"format":break;default:J1=!1}break;case"mapinfo":case"schema":case"data":switch(s[3]){case"map":break;case"entry":break;case"range":break;case"xpath":break;case"field":break;case"xsdtype":break;case"filteron":break;case"aggregate":break;case"elementtype":break;case"attributetype":break;case"schema":case"element":case"complextype":case"datatype":case"all":case"attribute":case"extends":break;case"row":break;default:J1=!1}break;case"smarttags":break;default:J1=!1;break}if(J1||s[3].match(/!\[CDATA/))break;if(!l[l.length-1][1])throw"Unrecognized tag: "+s[3]+"|"+l.join("|");if(l[l.length-1][0]==="customdocumentproperties"){if(s[0].slice(-2)==="/>")break;s[1]==="/"?LS(P,X,Z,r.slice(U,s.index)):(Z=s,U=s.index+s[0].length);break}if(t.WTF)throw"Unrecognized tag: "+s[3]+"|"+l.join("|")}var E1={};return!t.bookSheets&&!t.bookProps&&(E1.Sheets=f),E1.SheetNames=d,E1.Workbook=V,E1.SSF=G3(b2),E1.Props=N,E1.Custprops=P,E1}function Tn(n,e){switch(Oa(e=e||{}),e.type||"base64"){case"base64":return xt(z0(n),e);case"binary":case"buffer":case"file":return xt(n,e);case"array":return xt(E9(n),e)}}function US(n){var e={},t=n.content;if(t.l=28,e.AnsiUserType=t.read_shift(0,"lpstr-ansi"),e.AnsiClipboardFormat=Km(t),t.length-t.l<=4)return e;var r=t.read_shift(4);if(r==0||r>40||(t.l-=4,e.Reserved1=t.read_shift(0,"lpstr-ansi"),t.length-t.l<=4)||(r=t.read_shift(4),r!==1907505652)||(e.UnicodeClipboardFormat=eg(t),r=t.read_shift(4),r==0||r>40))return e;t.l-=4,e.Reserved2=t.read_shift(0,"lpwstr")}var BS=[60,1084,2066,2165,2175];function VS(n,e,t,r,a){var i=r,o=[],s=t.slice(t.l,t.l+i);if(a&&a.enc&&a.enc.insitu&&s.length>0)switch(n){case 9:case 521:case 1033:case 2057:case 47:case 405:case 225:case 406:case 312:case 404:case 10:break;case 133:break;default:a.enc.insitu(s)}o.push(s),t.l+=i;for(var l=J4(t,t.l),u=En[l],f=0;u!=null&&BS.indexOf(l)>-1;)i=J4(t,t.l+2),f=t.l+4,l==2066?f+=4:(l==2165||l==2175)&&(f+=12),s=t.slice(f,t.l+4+i),o.push(s),t.l+=4+i,u=En[l=J4(t,t.l)];var d=be(o);U3(d,0);var h=0;d.lens=[];for(var m=0;m<o.length;++m)d.lens.push(h),h+=o[m].length;if(d.length<r)throw"XLS Record 0x"+n.toString(16)+" Truncated: "+d.length+" < "+r;return e.f(d,d.length,a)}function b4(n,e,t){if(n.t!=="z"&&n.XF){var r=0;try{r=n.z||n.XF.numFmtId||0,e.cellNF&&(n.z=b2[r])}catch(i){if(e.WTF)throw i}if(!e||e.cellText!==!1)try{n.t==="e"?n.w=n.w||D9[n.v]:r===0||r=="General"?n.t==="n"?(n.v|0)===n.v?n.w=n.v.toString(10):n.w=k8(n.v):n.w=v9(n.v):n.w=e4(r,n.v,{date1904:!!t,dateNF:e&&e.dateNF})}catch(i){if(e.WTF)throw i}if(e.cellDates&&r&&n.t=="n"&&U5(b2[r]||String(r))){var a=n9(n.v);a&&(n.t="d",n.v=new Date(a.y,a.m-1,a.d,a.H,a.M,a.S,a.u))}}}function b6(n,e,t){return{v:n,ixfe:e,t}}function GS(n,e){var t={opts:{}},r={},a=e.dense?[]:{},i={},o={},s=null,l=[],u="",f={},d,h="",m,_,g,v,y={},S=[],b,w,T=[],A=[],C={Sheets:[],WBProps:{date1904:!1},Views:[{}]},E={},M=function(d1){return d1<8?l9[d1]:d1<64&&A[d1-8]||l9[d1]},N=function(d1,F1,W1){var B1=F1.XF.data;if(!(!B1||!B1.patternType||!W1||!W1.cellStyles)){F1.s={},F1.s.patternType=B1.patternType;var s2;(s2=L8(M(B1.icvFore)))&&(F1.s.fgColor={rgb:s2}),(s2=L8(M(B1.icvBack)))&&(F1.s.bgColor={rgb:s2})}},P=function(d1,F1,W1){if(!(l1>1)&&!(W1.sheetRows&&d1.r>=W1.sheetRows)){if(W1.cellStyles&&F1.XF&&F1.XF.data&&N(d1,F1,W1),delete F1.ixfe,delete F1.XF,d=d1,h=y2(d1),(!o||!o.s||!o.e)&&(o={s:{r:0,c:0},e:{r:0,c:0}}),d1.r<o.s.r&&(o.s.r=d1.r),d1.c<o.s.c&&(o.s.c=d1.c),d1.r+1>o.e.r&&(o.e.r=d1.r+1),d1.c+1>o.e.c&&(o.e.c=d1.c+1),W1.cellFormula&&F1.f){for(var B1=0;B1<S.length;++B1)if(!(S[B1][0].s.c>d1.c||S[B1][0].s.r>d1.r)&&!(S[B1][0].e.c<d1.c||S[B1][0].e.r<d1.r)){F1.F=I2(S[B1][0]),(S[B1][0].s.c!=d1.c||S[B1][0].s.r!=d1.r)&&delete F1.f,F1.f&&(F1.f=""+Y3(S[B1][1],o,d1,O,U));break}}W1.dense?(a[d1.r]||(a[d1.r]=[]),a[d1.r][d1.c]=F1):a[h]=F1}},U={enc:!1,sbcch:0,snames:[],sharedf:y,arrayf:S,rrtabid:[],lastuser:"",biff:8,codepage:0,winlocked:0,cellStyles:!!e&&!!e.cellStyles,WTF:!!e&&!!e.wtf};e.password&&(U.password=e.password);var Z,G=[],W=[],q=[],r1=[],Y=!1,O=[];O.SheetNames=U.snames,O.sharedf=U.sharedf,O.arrayf=U.arrayf,O.names=[],O.XTI=[];var Q=0,l1=0,I=0,n1=[],V=[],z;U.codepage=1200,g4(1200);for(var X=!1;n.l<n.length-1;){var f1=n.l,y1=n.read_shift(2);if(y1===0&&Q===10)break;var m1=n.l===n.length?0:n.read_shift(2),c1=En[y1];if(c1&&c1.f){if(e.bookSheets&&Q===133&&y1!==133)break;if(Q=y1,c1.r===2||c1.r==12){var I1=n.read_shift(2);if(m1-=2,!U.enc&&I1!==y1&&((I1&255)<<8|I1>>8)!==y1)throw new Error("rt mismatch: "+I1+"!="+y1);c1.r==12&&(n.l+=10,m1-=10)}var j={};if(y1===10?j=c1.f(n,m1,U):j=VS(y1,c1,n,m1,U),l1==0&&[9,521,1033,2057].indexOf(Q)===-1)continue;switch(y1){case 34:t.opts.Date1904=C.WBProps.date1904=j;break;case 134:t.opts.WriteProtect=!0;break;case 47:if(U.enc||(n.l=0),U.enc=j,!e.password)throw new Error("File is password-protected");if(j.valid==null)throw new Error("Encryption scheme unsupported");if(!j.valid)throw new Error("Password is incorrect");break;case 92:U.lastuser=j;break;case 66:var C1=Number(j);switch(C1){case 21010:C1=1200;break;case 32768:C1=1e4;break;case 32769:C1=1252;break}g4(U.codepage=C1),X=!0;break;case 317:U.rrtabid=j;break;case 25:U.winlocked=j;break;case 439:t.opts.RefreshAll=j;break;case 12:t.opts.CalcCount=j;break;case 16:t.opts.CalcDelta=j;break;case 17:t.opts.CalcIter=j;break;case 13:t.opts.CalcMode=j;break;case 14:t.opts.CalcPrecision=j;break;case 95:t.opts.CalcSaveRecalc=j;break;case 15:U.CalcRefMode=j;break;case 2211:t.opts.FullCalc=j;break;case 129:j.fDialog&&(a["!type"]="dialog"),j.fBelow||((a["!outline"]||(a["!outline"]={})).above=!0),j.fRight||((a["!outline"]||(a["!outline"]={})).left=!0);break;case 224:T.push(j);break;case 430:O.push([j]),O[O.length-1].XTI=[];break;case 35:case 547:O[O.length-1].push(j);break;case 24:case 536:z={Name:j.Name,Ref:Y3(j.rgce,o,null,O,U)},j.itab>0&&(z.Sheet=j.itab-1),O.names.push(z),O[0]||(O[0]=[],O[0].XTI=[]),O[O.length-1].push(j),j.Name=="_xlnm._FilterDatabase"&&j.itab>0&&j.rgce&&j.rgce[0]&&j.rgce[0][0]&&j.rgce[0][0][0]=="PtgArea3d"&&(V[j.itab-1]={ref:I2(j.rgce[0][0][1][2])});break;case 22:U.ExternCount=j;break;case 23:O.length==0&&(O[0]=[],O[0].XTI=[]),O[O.length-1].XTI=O[O.length-1].XTI.concat(j),O.XTI=O.XTI.concat(j);break;case 2196:if(U.biff<8)break;z!=null&&(z.Comment=j[1]);break;case 18:a["!protect"]=j;break;case 19:j!==0&&U.WTF&&console.error("Password verifier: "+j);break;case 133:i[j.pos]=j,U.snames.push(j.name);break;case 10:{if(--l1)break;if(o.e){if(o.e.r>0&&o.e.c>0){if(o.e.r--,o.e.c--,a["!ref"]=I2(o),e.sheetRows&&e.sheetRows<=o.e.r){var $1=o.e.r;o.e.r=e.sheetRows-1,a["!fullref"]=a["!ref"],a["!ref"]=I2(o),o.e.r=$1}o.e.r++,o.e.c++}G.length>0&&(a["!merges"]=G),W.length>0&&(a["!objects"]=W),q.length>0&&(a["!cols"]=q),r1.length>0&&(a["!rows"]=r1),C.Sheets.push(E)}u===""?f=a:r[u]=a,a=e.dense?[]:{}}break;case 9:case 521:case 1033:case 2057:{if(U.biff===8&&(U.biff={9:2,521:3,1033:4}[y1]||{512:2,768:3,1024:4,1280:5,1536:8,2:2,7:2}[j.BIFFVer]||8),U.biffguess=j.BIFFVer==0,j.BIFFVer==0&&j.dt==4096&&(U.biff=5,X=!0,g4(U.codepage=28591)),U.biff==8&&j.BIFFVer==0&&j.dt==16&&(U.biff=2),l1++)break;if(a=e.dense?[]:{},U.biff<8&&!X&&(X=!0,g4(U.codepage=e.codepage||1252)),U.biff<5||j.BIFFVer==0&&j.dt==4096){u===""&&(u="Sheet1"),o={s:{r:0,c:0},e:{r:0,c:0}};var J1={pos:n.l-m1,name:u};i[J1.pos]=J1,U.snames.push(u)}else u=(i[f1]||{name:""}).name;j.dt==32&&(a["!type"]="chart"),j.dt==64&&(a["!type"]="macro"),G=[],W=[],U.arrayf=S=[],q=[],r1=[],Y=!1,E={Hidden:(i[f1]||{hs:0}).hs,name:u}}break;case 515:case 3:case 2:a["!type"]=="chart"&&(e.dense?(a[j.r]||[])[j.c]:a[y2({c:j.c,r:j.r})])&&++j.c,b={ixfe:j.ixfe,XF:T[j.ixfe]||{},v:j.val,t:"n"},I>0&&(b.z=n1[b.ixfe>>8&63]),b4(b,e,t.opts.Date1904),P({c:j.c,r:j.r},b,e);break;case 5:case 517:b={ixfe:j.ixfe,XF:T[j.ixfe],v:j.val,t:j.t},I>0&&(b.z=n1[b.ixfe>>8&63]),b4(b,e,t.opts.Date1904),P({c:j.c,r:j.r},b,e);break;case 638:b={ixfe:j.ixfe,XF:T[j.ixfe],v:j.rknum,t:"n"},I>0&&(b.z=n1[b.ixfe>>8&63]),b4(b,e,t.opts.Date1904),P({c:j.c,r:j.r},b,e);break;case 189:for(var z1=j.c;z1<=j.C;++z1){var E1=j.rkrec[z1-j.c][0];b={ixfe:E1,XF:T[E1],v:j.rkrec[z1-j.c][1],t:"n"},I>0&&(b.z=n1[b.ixfe>>8&63]),b4(b,e,t.opts.Date1904),P({c:z1,r:j.r},b,e)}break;case 6:case 518:case 1030:{if(j.val=="String"){s=j;break}if(b=b6(j.val,j.cell.ixfe,j.tt),b.XF=T[b.ixfe],e.cellFormula){var c2=j.formula;if(c2&&c2[0]&&c2[0][0]&&c2[0][0][0]=="PtgExp"){var t2=c2[0][0][1][0],f2=c2[0][0][1][1],o2=y2({r:t2,c:f2});y[o2]?b.f=""+Y3(j.formula,o,j.cell,O,U):b.F=((e.dense?(a[t2]||[])[f2]:a[o2])||{}).F}else b.f=""+Y3(j.formula,o,j.cell,O,U)}I>0&&(b.z=n1[b.ixfe>>8&63]),b4(b,e,t.opts.Date1904),P(j.cell,b,e),s=j}break;case 7:case 519:if(s)s.val=j,b=b6(j,s.cell.ixfe,"s"),b.XF=T[b.ixfe],e.cellFormula&&(b.f=""+Y3(s.formula,o,s.cell,O,U)),I>0&&(b.z=n1[b.ixfe>>8&63]),b4(b,e,t.opts.Date1904),P(s.cell,b,e),s=null;else throw new Error("String record expects Formula");break;case 33:case 545:{S.push(j);var t1=y2(j[0].s);if(m=e.dense?(a[j[0].s.r]||[])[j[0].s.c]:a[t1],e.cellFormula&&m){if(!s||!t1||!m)break;m.f=""+Y3(j[1],o,j[0],O,U),m.F=I2(j[0])}}break;case 1212:{if(!e.cellFormula)break;if(h){if(!s)break;y[y2(s.cell)]=j[0],m=e.dense?(a[s.cell.r]||[])[s.cell.c]:a[y2(s.cell)],(m||{}).f=""+Y3(j[0],o,d,O,U)}}break;case 253:b=b6(l[j.isst].t,j.ixfe,"s"),l[j.isst].h&&(b.h=l[j.isst].h),b.XF=T[b.ixfe],I>0&&(b.z=n1[b.ixfe>>8&63]),b4(b,e,t.opts.Date1904),P({c:j.c,r:j.r},b,e);break;case 513:e.sheetStubs&&(b={ixfe:j.ixfe,XF:T[j.ixfe],t:"z"},I>0&&(b.z=n1[b.ixfe>>8&63]),b4(b,e,t.opts.Date1904),P({c:j.c,r:j.r},b,e));break;case 190:if(e.sheetStubs)for(var B=j.c;B<=j.C;++B){var w1=j.ixfe[B-j.c];b={ixfe:w1,XF:T[w1],t:"z"},I>0&&(b.z=n1[b.ixfe>>8&63]),b4(b,e,t.opts.Date1904),P({c:B,r:j.r},b,e)}break;case 214:case 516:case 4:b=b6(j.val,j.ixfe,"s"),b.XF=T[b.ixfe],I>0&&(b.z=n1[b.ixfe>>8&63]),b4(b,e,t.opts.Date1904),P({c:j.c,r:j.r},b,e);break;case 0:case 512:l1===1&&(o=j);break;case 252:l=j;break;case 1054:if(U.biff==4){n1[I++]=j[1];for(var O1=0;O1<I+163&&b2[O1]!=j[1];++O1);O1>=163&&s9(j[1],I+163)}else s9(j[1],j[0]);break;case 30:{n1[I++]=j;for(var N1=0;N1<I+163&&b2[N1]!=j;++N1);N1>=163&&s9(j,I+163)}break;case 229:G=G.concat(j);break;case 93:W[j.cmo[0]]=U.lastobj=j;break;case 438:U.lastobj.TxO=j;break;case 127:U.lastobj.ImData=j;break;case 440:for(v=j[0].s.r;v<=j[0].e.r;++v)for(g=j[0].s.c;g<=j[0].e.c;++g)m=e.dense?(a[v]||[])[g]:a[y2({c:g,r:v})],m&&(m.l=j[1]);break;case 2048:for(v=j[0].s.r;v<=j[0].e.r;++v)for(g=j[0].s.c;g<=j[0].e.c;++g)m=e.dense?(a[v]||[])[g]:a[y2({c:g,r:v})],m&&m.l&&(m.l.Tooltip=j[1]);break;case 28:{if(U.biff<=5&&U.biff>=2)break;m=e.dense?(a[j[0].r]||[])[j[0].c]:a[y2(j[0])];var Z1=W[j[2]];m||(e.dense?(a[j[0].r]||(a[j[0].r]=[]),m=a[j[0].r][j[0].c]={t:"z"}):m=a[y2(j[0])]={t:"z"},o.e.r=Math.max(o.e.r,j[0].r),o.s.r=Math.min(o.s.r,j[0].r),o.e.c=Math.max(o.e.c,j[0].c),o.s.c=Math.min(o.s.c,j[0].c)),m.c||(m.c=[]),_={a:j[1],t:Z1.TxO.t},m.c.push(_)}break;case 2173:ux(T[j.ixfe],j.ext);break;case 125:{if(!U.cellStyles)break;for(;j.e>=j.s;)q[j.e--]={width:j.w/256,level:j.level||0,hidden:!!(j.flags&1)},Y||(Y=!0,Ma(j.w/256)),E5(q[j.e+1])}break;case 520:{var i2={};j.level!=null&&(r1[j.r]=i2,i2.level=j.level),j.hidden&&(r1[j.r]=i2,i2.hidden=!0),j.hpt&&(r1[j.r]=i2,i2.hpt=j.hpt,i2.hpx=F8(j.hpt))}break;case 38:case 39:case 40:case 41:a["!margins"]||x8(a["!margins"]={}),a["!margins"][{38:"left",39:"right",40:"top",41:"bottom"}[y1]]=j;break;case 161:a["!margins"]||x8(a["!margins"]={}),a["!margins"].header=j.header,a["!margins"].footer=j.footer;break;case 574:j.RTL&&(C.Views[0].RTL=!0);break;case 146:A=j;break;case 2198:Z=j;break;case 140:w=j;break;case 442:u?E.CodeName=j||E.name:C.WBProps.CodeName=j||"ThisWorkbook";break}}else c1||console.error("Missing Info for XLS Record 0x"+y1.toString(16)),n.l+=m1}return t.SheetNames=I4(i).sort(function(s1,d1){return Number(s1)-Number(d1)}).map(function(s1){return i[s1].name}),e.bookSheets||(t.Sheets=r),!t.SheetNames.length&&f["!ref"]?(t.SheetNames.push("Sheet1"),t.Sheets&&(t.Sheets.Sheet1=f)):t.Preamble=f,t.Sheets&&V.forEach(function(s1,d1){t.Sheets[t.SheetNames[d1]]["!autofilter"]=s1}),t.Strings=l,t.SSF=G3(b2),U.enc&&(t.Encryption=U.enc),Z&&(t.Themes=Z),t.Metadata={},w!==void 0&&(t.Metadata.Country=w),O.names.length>0&&(C.Names=O.names),t.Workbook=C,t}var fs={SI:"e0859ff2f94f6810ab9108002b27b3d9",DSI:"02d5cdd59c2e1b10939708002b2cf9ae",UDI:"05d5cdd59c2e1b10939708002b2cf9ae"};function WS(n,e,t){var r=k2.find(n,"/!DocumentSummaryInformation");if(r&&r.size>0)try{var a=Xo(r,og,fs.DSI);for(var i in a)e[i]=a[i]}catch(u){if(t.WTF)throw u}var o=k2.find(n,"/!SummaryInformation");if(o&&o.size>0)try{var s=Xo(o,sg,fs.SI);for(var l in s)e[l]==null&&(e[l]=s[l])}catch(u){if(t.WTF)throw u}e.HeadingPairs&&e.TitlesOfParts&&(Cu(e.HeadingPairs,e.TitlesOfParts,e,t),delete e.HeadingPairs,delete e.TitlesOfParts)}function ff(n,e){e||(e={}),Oa(e),zc(),e.codepage&&fa(e.codepage);var t,r;if(n.FullPaths){if(k2.find(n,"/encryption"))throw new Error("File is password-protected");t=k2.find(n,"!CompObj"),r=k2.find(n,"/Workbook")||k2.find(n,"/Book")}else{switch(e.type){case"base64":n=p4(z0(n));break;case"binary":n=p4(n);break;case"buffer":break;case"array":Array.isArray(n)||(n=Array.prototype.slice.call(n));break}U3(n,0),r={content:n}}var a,i;if(t&&US(t),e.bookProps&&!e.bookSheets)a={};else{var o=C2?"buffer":"array";if(r&&r.content)a=GS(r.content,e);else if((i=k2.find(n,"PerfectOffice_MAIN"))&&i.content)a=v8.to_workbook(i.content,(e.type=o,e));else if((i=k2.find(n,"NativeContent_MAIN"))&&i.content)a=v8.to_workbook(i.content,(e.type=o,e));else throw(i=k2.find(n,"MN0"))&&i.content?new Error("Unsupported Works 4 for Mac file"):new Error("Cannot find Workbook stream");e.bookVBA&&n.FullPaths&&k2.find(n,"/_VBA_PROJECT_CUR/VBA/dir")&&(a.vbaraw=Mx(n))}var s={};return n.FullPaths&&WS(n,s,e),a.Props=a.Custprops=s,e.bookFiles&&(a.cfb=n),a}var y7={0:{f:Ab},1:{f:Mb},2:{f:Nb},3:{f:Ib},4:{f:kb},5:{f:Pb},6:{f:Bb},7:{f:Lb},8:{f:Hb},9:{f:jb},10:{f:Gb},11:{f:Wb},12:{f:Db},13:{f:zb},14:{f:Ob},15:{f:Rb},16:{f:of},17:{f:Vb},18:{f:Fb},19:{f:Sa},20:{},21:{},22:{},23:{},24:{},25:{},26:{},27:{},28:{},29:{},30:{},31:{},32:{},33:{},34:{},35:{T:1},36:{T:-1},37:{T:1},38:{T:-1},39:{f:_S},40:{},42:{},43:{f:G_},44:{f:V_},45:{f:W_},46:{f:H_},47:{f:j_},48:{},49:{f:$m},50:{},51:{f:dx},52:{T:1},53:{T:-1},54:{T:1},55:{T:-1},56:{T:1},57:{T:-1},58:{},59:{},60:{f:Uu},62:{f:Ub},63:{f:vx},64:{f:eS},65:{},66:{},67:{},68:{},69:{},70:{},128:{},129:{T:1},130:{T:-1},131:{T:1,f:n0,p:0},132:{T:-1},133:{T:1},134:{T:-1},135:{T:1},136:{T:-1},137:{T:1,f:Kb},138:{T:-1},139:{T:1},140:{T:-1},141:{T:1},142:{T:-1},143:{T:1},144:{T:-1},145:{T:1},146:{T:-1},147:{f:Cb},148:{f:Tb,p:16},151:{f:Xb},152:{},153:{f:gS},154:{},155:{},156:{f:mS},157:{},158:{},159:{T:1,f:s_},160:{T:-1},161:{T:1,f:M9},162:{T:-1},163:{T:1},164:{T:-1},165:{T:1},166:{T:-1},167:{},168:{},169:{},170:{},171:{},172:{T:1},173:{T:-1},174:{},175:{},176:{f:$b},177:{T:1},178:{T:-1},179:{T:1},180:{T:-1},181:{T:1},182:{T:-1},183:{T:1},184:{T:-1},185:{T:1},186:{T:-1},187:{T:1},188:{T:-1},189:{T:1},190:{T:-1},191:{T:1},192:{T:-1},193:{T:1},194:{T:-1},195:{T:1},196:{T:-1},197:{T:1},198:{T:-1},199:{T:1},200:{T:-1},201:{T:1},202:{T:-1},203:{T:1},204:{T:-1},205:{T:1},206:{T:-1},207:{T:1},208:{T:-1},209:{T:1},210:{T:-1},211:{T:1},212:{T:-1},213:{T:1},214:{T:-1},215:{T:1},216:{T:-1},217:{T:1},218:{T:-1},219:{T:1},220:{T:-1},221:{T:1},222:{T:-1},223:{T:1},224:{T:-1},225:{T:1},226:{T:-1},227:{T:1},228:{T:-1},229:{T:1},230:{T:-1},231:{T:1},232:{T:-1},233:{T:1},234:{T:-1},235:{T:1},236:{T:-1},237:{T:1},238:{T:-1},239:{T:1},240:{T:-1},241:{T:1},242:{T:-1},243:{T:1},244:{T:-1},245:{T:1},246:{T:-1},247:{T:1},248:{T:-1},249:{T:1},250:{T:-1},251:{T:1},252:{T:-1},253:{T:1},254:{T:-1},255:{T:1},256:{T:-1},257:{T:1},258:{T:-1},259:{T:1},260:{T:-1},261:{T:1},262:{T:-1},263:{T:1},264:{T:-1},265:{T:1},266:{T:-1},267:{T:1},268:{T:-1},269:{T:1},270:{T:-1},271:{T:1},272:{T:-1},273:{T:1},274:{T:-1},275:{T:1},276:{T:-1},277:{},278:{T:1},279:{T:-1},280:{T:1},281:{T:-1},282:{T:1},283:{T:1},284:{T:-1},285:{T:1},286:{T:-1},287:{T:1},288:{T:-1},289:{T:1},290:{T:-1},291:{T:1},292:{T:-1},293:{T:1},294:{T:-1},295:{T:1},296:{T:-1},297:{T:1},298:{T:-1},299:{T:1},300:{T:-1},301:{T:1},302:{T:-1},303:{T:1},304:{T:-1},305:{T:1},306:{T:-1},307:{T:1},308:{T:-1},309:{T:1},310:{T:-1},311:{T:1},312:{T:-1},313:{T:-1},314:{T:1},315:{T:-1},316:{T:1},317:{T:-1},318:{T:1},319:{T:-1},320:{T:1},321:{T:-1},322:{T:1},323:{T:-1},324:{T:1},325:{T:-1},326:{T:1},327:{T:-1},328:{T:1},329:{T:-1},330:{T:1},331:{T:-1},332:{T:1},333:{T:-1},334:{T:1},335:{f:fx},336:{T:-1},337:{f:hx,T:1},338:{T:-1},339:{T:1},340:{T:-1},341:{T:1},342:{T:-1},343:{T:1},344:{T:-1},345:{T:1},346:{T:-1},347:{T:1},348:{T:-1},349:{T:1},350:{T:-1},351:{},352:{},353:{T:1},354:{T:-1},355:{f:bn},357:{},358:{},359:{},360:{T:1},361:{},362:{f:zu},363:{},364:{},366:{},367:{},368:{},369:{},370:{},371:{},372:{T:1},373:{T:-1},374:{T:1},375:{T:-1},376:{T:1},377:{T:-1},378:{T:1},379:{T:-1},380:{T:1},381:{T:-1},382:{T:1},383:{T:-1},384:{T:1},385:{T:-1},386:{T:1},387:{T:-1},388:{T:1},389:{T:-1},390:{T:1},391:{T:-1},392:{T:1},393:{T:-1},394:{T:1},395:{T:-1},396:{},397:{},398:{},399:{},400:{},401:{T:1},403:{},404:{},405:{},406:{},407:{},408:{},409:{},410:{},411:{},412:{},413:{},414:{},415:{},416:{},417:{},418:{},419:{},420:{},421:{},422:{T:1},423:{T:1},424:{T:-1},425:{T:-1},426:{f:Jb},427:{f:Zb},428:{},429:{T:1},430:{T:-1},431:{T:1},432:{T:-1},433:{T:1},434:{T:-1},435:{T:1},436:{T:-1},437:{T:1},438:{T:-1},439:{T:1},440:{T:-1},441:{T:1},442:{T:-1},443:{T:1},444:{T:-1},445:{T:1},446:{T:-1},447:{T:1},448:{T:-1},449:{T:1},450:{T:-1},451:{T:1},452:{T:-1},453:{T:1},454:{T:-1},455:{T:1},456:{T:-1},457:{T:1},458:{T:-1},459:{T:1},460:{T:-1},461:{T:1},462:{T:-1},463:{T:1},464:{T:-1},465:{T:1},466:{T:-1},467:{T:1},468:{T:-1},469:{T:1},470:{T:-1},471:{},472:{},473:{T:1},474:{T:-1},475:{},476:{f:Qb},477:{},478:{},479:{T:1},480:{T:-1},481:{T:1},482:{T:-1},483:{T:1},484:{T:-1},485:{f:Eb},486:{T:1},487:{T:-1},488:{T:1},489:{T:-1},490:{T:1},491:{T:-1},492:{T:1},493:{T:-1},494:{f:Yb},495:{T:1},496:{T:-1},497:{T:1},498:{T:-1},499:{},500:{T:1},501:{T:-1},502:{T:1},503:{T:-1},504:{},505:{T:1},506:{T:-1},507:{},508:{T:1},509:{T:-1},510:{T:1},511:{T:-1},512:{},513:{},514:{T:1},515:{T:-1},516:{T:1},517:{T:-1},518:{T:1},519:{T:-1},520:{T:1},521:{T:-1},522:{},523:{},524:{},525:{},526:{},527:{},528:{T:1},529:{T:-1},530:{T:1},531:{T:-1},532:{T:1},533:{T:-1},534:{},535:{},536:{},537:{},538:{T:1},539:{T:-1},540:{T:1},541:{T:-1},542:{T:1},548:{},549:{},550:{f:bn},551:{},552:{},553:{},554:{T:1},555:{T:-1},556:{T:1},557:{T:-1},558:{T:1},559:{T:-1},560:{T:1},561:{T:-1},562:{},564:{},565:{T:1},566:{T:-1},569:{T:1},570:{T:-1},572:{},573:{T:1},574:{T:-1},577:{},578:{},579:{},580:{},581:{},582:{},583:{},584:{},585:{},586:{},587:{},588:{T:-1},589:{},590:{T:1},591:{T:-1},592:{T:1},593:{T:-1},594:{T:1},595:{T:-1},596:{},597:{T:1},598:{T:-1},599:{T:1},600:{T:-1},601:{T:1},602:{T:-1},603:{T:1},604:{T:-1},605:{T:1},606:{T:-1},607:{},608:{T:1},609:{T:-1},610:{},611:{T:1},612:{T:-1},613:{T:1},614:{T:-1},615:{T:1},616:{T:-1},617:{T:1},618:{T:-1},619:{T:1},620:{T:-1},625:{},626:{T:1},627:{T:-1},628:{T:1},629:{T:-1},630:{T:1},631:{T:-1},632:{f:Tx},633:{T:1},634:{T:-1},635:{T:1,f:Ax},636:{T:-1},637:{f:Xm},638:{T:1},639:{},640:{T:-1},641:{T:1},642:{T:-1},643:{T:1},644:{},645:{T:-1},646:{T:1},648:{T:1},649:{},650:{T:-1},651:{f:oS},652:{},653:{T:1},654:{T:-1},655:{T:1},656:{T:-1},657:{T:1},658:{T:-1},659:{},660:{T:1},661:{},662:{T:-1},663:{},664:{T:1},665:{},666:{T:-1},667:{},668:{},669:{},671:{T:1},672:{T:-1},673:{T:1},674:{T:-1},675:{},676:{},677:{},678:{},679:{},680:{},681:{},1024:{},1025:{},1026:{T:1},1027:{T:-1},1028:{T:1},1029:{T:-1},1030:{},1031:{T:1},1032:{T:-1},1033:{T:1},1034:{T:-1},1035:{},1036:{},1037:{},1038:{T:1},1039:{T:-1},1040:{},1041:{T:1},1042:{T:-1},1043:{},1044:{},1045:{},1046:{T:1},1047:{T:-1},1048:{T:1},1049:{T:-1},1050:{},1051:{T:1},1052:{T:1},1053:{f:tS},1054:{T:1},1055:{},1056:{T:1},1057:{T:-1},1058:{T:1},1059:{T:-1},1061:{},1062:{T:1},1063:{T:-1},1064:{T:1},1065:{T:-1},1066:{T:1},1067:{T:-1},1068:{T:1},1069:{T:-1},1070:{T:1},1071:{T:-1},1072:{T:1},1073:{T:-1},1075:{T:1},1076:{T:-1},1077:{T:1},1078:{T:-1},1079:{T:1},1080:{T:-1},1081:{T:1},1082:{T:-1},1083:{T:1},1084:{T:-1},1085:{},1086:{T:1},1087:{T:-1},1088:{T:1},1089:{T:-1},1090:{T:1},1091:{T:-1},1092:{T:1},1093:{T:-1},1094:{T:1},1095:{T:-1},1096:{},1097:{T:1},1098:{},1099:{T:-1},1100:{T:1},1101:{T:-1},1102:{},1103:{},1104:{},1105:{},1111:{},1112:{},1113:{T:1},1114:{T:-1},1115:{T:1},1116:{T:-1},1117:{},1118:{T:1},1119:{T:-1},1120:{T:1},1121:{T:-1},1122:{T:1},1123:{T:-1},1124:{T:1},1125:{T:-1},1126:{},1128:{T:1},1129:{T:-1},1130:{},1131:{T:1},1132:{T:-1},1133:{T:1},1134:{T:-1},1135:{T:1},1136:{T:-1},1137:{T:1},1138:{T:-1},1139:{T:1},1140:{T:-1},1141:{},1142:{T:1},1143:{T:-1},1144:{T:1},1145:{T:-1},1146:{},1147:{T:1},1148:{T:-1},1149:{T:1},1150:{T:-1},1152:{T:1},1153:{T:-1},1154:{T:-1},1155:{T:-1},1156:{T:-1},1157:{T:1},1158:{T:-1},1159:{T:1},1160:{T:-1},1161:{T:1},1162:{T:-1},1163:{T:1},1164:{T:-1},1165:{T:1},1166:{T:-1},1167:{T:1},1168:{T:-1},1169:{T:1},1170:{T:-1},1171:{},1172:{T:1},1173:{T:-1},1177:{},1178:{T:1},1180:{},1181:{},1182:{},2048:{T:1},2049:{T:-1},2050:{},2051:{T:1},2052:{T:-1},2053:{},2054:{},2055:{T:1},2056:{T:-1},2057:{T:1},2058:{T:-1},2060:{},2067:{},2068:{T:1},2069:{T:-1},2070:{},2071:{},2072:{T:1},2073:{T:-1},2075:{},2076:{},2077:{T:1},2078:{T:-1},2079:{},2080:{T:1},2081:{T:-1},2082:{},2083:{T:1},2084:{T:-1},2085:{T:1},2086:{T:-1},2087:{T:1},2088:{T:-1},2089:{T:1},2090:{T:-1},2091:{},2092:{},2093:{T:1},2094:{T:-1},2095:{},2096:{T:1},2097:{T:-1},2098:{T:1},2099:{T:-1},2100:{T:1},2101:{T:-1},2102:{},2103:{T:1},2104:{T:-1},2105:{},2106:{T:1},2107:{T:-1},2108:{},2109:{T:1},2110:{T:-1},2111:{T:1},2112:{T:-1},2113:{T:1},2114:{T:-1},2115:{},2116:{},2117:{},2118:{T:1},2119:{T:-1},2120:{},2121:{T:1},2122:{T:-1},2123:{T:1},2124:{T:-1},2125:{},2126:{T:1},2127:{T:-1},2128:{},2129:{T:1},2130:{T:-1},2131:{T:1},2132:{T:-1},2133:{T:1},2134:{},2135:{},2136:{},2137:{T:1},2138:{T:-1},2139:{T:1},2140:{T:-1},2141:{},3072:{},3073:{},4096:{T:1},4097:{T:-1},5002:{T:1},5003:{T:-1},5081:{T:1},5082:{T:-1},5083:{},5084:{T:1},5085:{T:-1},5086:{T:1},5087:{T:-1},5088:{},5089:{},5090:{},5092:{T:1},5093:{T:-1},5094:{},5095:{T:1},5096:{T:-1},5097:{},5099:{},65535:{n:""}},En={6:{f:vt},10:{f:ue},12:{f:y3},13:{f:y3},14:{f:d3},15:{f:d3},16:{f:J3},17:{f:d3},18:{f:d3},19:{f:y3},20:{f:Qo},21:{f:Qo},23:{f:zu},24:{f:es},25:{f:d3},26:{},27:{},28:{f:Sv},29:{},34:{f:d3},35:{f:Ko},38:{f:J3},39:{f:J3},40:{f:J3},41:{f:J3},42:{f:d3},43:{f:d3},47:{f:E_},49:{f:rv},51:{f:y3},60:{},61:{f:ev},64:{f:d3},65:{f:nv},66:{f:y3},77:{},80:{},81:{},82:{},85:{f:y3},89:{},90:{},91:{},92:{f:$g},93:{f:Av},94:{},95:{f:d3},96:{},97:{},99:{f:d3},125:{f:Uu},128:{f:hv},129:{f:Yg},130:{f:y3},131:{f:d3},132:{f:d3},133:{f:Xg},134:{},140:{f:kv},141:{f:y3},144:{},146:{f:Iv},151:{},152:{},153:{},154:{},155:{},156:{f:y3},157:{},158:{},160:{f:Nv},161:{f:Lv},174:{},175:{},176:{},177:{},178:{},180:{},181:{},182:{},184:{},185:{},189:{f:cv},190:{f:uv},193:{f:ue},197:{},198:{},199:{},200:{},201:{},202:{f:d3},203:{},204:{},205:{},206:{},207:{},208:{},209:{},210:{},211:{},213:{},215:{},216:{},217:{},218:{f:y3},220:{},221:{f:d3},222:{},224:{f:dv},225:{f:Hg},226:{f:ue},227:{},229:{f:wv},233:{},235:{},236:{},237:{},239:{},240:{},241:{},242:{},244:{},245:{},246:{},247:{},248:{},249:{},251:{},252:{f:Jg},253:{f:av},255:{f:Zg},256:{},259:{},290:{},311:{},312:{},315:{},317:{f:Iu},318:{},319:{},320:{},330:{},331:{},333:{},334:{},335:{},336:{},337:{},338:{},339:{},340:{},351:{},352:{f:d3},353:{f:ue},401:{},402:{},403:{},404:{},405:{},406:{},407:{},408:{},425:{},426:{},427:{},428:{},429:{},430:{f:mv},431:{f:d3},432:{},433:{},434:{},437:{},438:{f:Cv},439:{f:d3},440:{f:Mv},441:{},442:{f:Q8},443:{},444:{f:y3},445:{},446:{},448:{f:ue},449:{f:Kg,r:2},450:{f:ue},512:{f:Zo},513:{f:Pv},515:{f:pv},516:{f:iv},517:{f:qo},519:{f:zv},520:{f:qg},523:{},545:{f:ts},549:{f:Jo},566:{},574:{f:tv},638:{f:lv},659:{},1048:{},1054:{f:ov},1084:{},1212:{f:xv},2048:{f:Dv},2049:{},2050:{},2051:{},2052:{},2053:{},2054:{},2055:{},2056:{},2057:{f:_6},2058:{},2059:{},2060:{},2061:{},2062:{},2063:{},2064:{},2066:{},2067:{},2128:{},2129:{},2130:{},2131:{},2132:{},2133:{},2134:{},2135:{},2136:{},2137:{},2138:{},2146:{},2147:{r:12},2148:{},2149:{},2150:{},2151:{f:ue},2152:{},2154:{},2155:{},2156:{},2161:{},2162:{},2164:{},2165:{},2166:{},2167:{},2168:{},2169:{},2170:{},2171:{},2172:{f:Ov,r:12},2173:{f:cx,r:12},2174:{},2175:{},2180:{},2181:{},2182:{},2183:{},2184:{},2185:{},2186:{},2187:{},2188:{f:d3,r:12},2189:{},2190:{r:12},2191:{},2192:{},2194:{},2195:{},2196:{f:_v,r:12},2197:{},2198:{f:rx,r:12},2199:{},2200:{},2201:{},2202:{f:yv,r:12},2203:{f:ue},2204:{},2205:{},2206:{},2207:{},2211:{f:Qg},2212:{},2213:{},2214:{},2215:{},4097:{},4098:{},4099:{},4102:{},4103:{},4105:{},4106:{},4107:{},4108:{},4109:{},4116:{},4117:{},4118:{},4119:{},4120:{},4121:{},4122:{},4123:{},4124:{},4125:{},4126:{},4127:{},4128:{},4129:{},4130:{},4132:{},4133:{},4134:{f:y3},4135:{},4146:{},4147:{},4148:{},4149:{},4154:{},4156:{},4157:{},4158:{},4159:{},4160:{},4161:{},4163:{},4164:{f:Fv},4165:{},4166:{},4168:{},4170:{},4171:{},4174:{},4175:{},4176:{},4177:{},4187:{},4188:{f:Rv},4189:{},4191:{},4192:{},4193:{},4194:{},4195:{},4196:{},4197:{},4198:{},4199:{},4200:{},0:{f:Zo},1:{},2:{f:Gv},3:{f:Vv},4:{f:Bv},5:{f:qo},7:{f:Wv},8:{},9:{f:_6},11:{},22:{f:y3},30:{f:sv},31:{},32:{},33:{f:ts},36:{},37:{f:Jo},50:{f:jv},62:{},52:{},67:{},68:{f:y3},69:{},86:{},126:{},127:{f:Uv},135:{},136:{},137:{},145:{},148:{},149:{},150:{},169:{},171:{},188:{},191:{},192:{},194:{},195:{},214:{f:Hv},223:{},234:{},354:{},421:{},518:{f:vt},521:{f:_6},536:{f:es},547:{f:Ko},561:{},579:{},1030:{f:vt},1033:{f:_6},1091:{},2157:{},2163:{},2177:{},2240:{},2241:{},2242:{},2243:{},2244:{},2245:{},2246:{},2247:{},2248:{},2249:{},2250:{},2251:{},2262:{r:12},29282:{}};function l4(n,e,t,r){var a=e;if(!isNaN(a)){var i=r||(t||[]).length||0,o=n.next(4);o.write_shift(2,a),o.write_shift(2,i),i>0&&xu(t)&&n.push(t)}}function ds(n,e){var t=e||{},r=t.dense?[]:{};n=n.replace(/<!--.*?-->/g,"");var a=n.match(/<table/i);if(!a)throw new Error("Invalid HTML: could not find <table>");var i=n.match(/<\/table/i),o=a.index,s=i&&i.index||n.length,l=mm(n.slice(o,s),/(:?<tr[^>]*>)/i,"<tr>"),u=-1,f=0,d=0,h=0,m={s:{r:1e7,c:1e7},e:{r:0,c:0}},_=[];for(o=0;o<l.length;++o){var g=l[o].trim(),v=g.slice(0,3).toLowerCase();if(v=="<tr"){if(++u,t.sheetRows&&t.sheetRows<=u){--u;break}f=0;continue}if(!(v!="<td"&&v!="<th")){var y=g.split(/<\/t[dh]>/i);for(s=0;s<y.length;++s){var S=y[s].trim();if(S.match(/<t[dh]/i)){for(var b=S,w=0;b.charAt(0)=="<"&&(w=b.indexOf(">"))>-1;)b=b.slice(w+1);for(var T=0;T<_.length;++T){var A=_[T];A.s.c==f&&A.s.r<u&&u<=A.e.r&&(f=A.e.c+1,T=-1)}var C=v2(S.slice(0,S.indexOf(">")));h=C.colspan?+C.colspan:1,((d=+C.rowspan)>1||h>1)&&_.push({s:{r:u,c:f},e:{r:u+(d||1)-1,c:f+h-1}});var E=C.t||C["data-t"]||"";if(!b.length){f+=h;continue}if(b=ou(b),m.s.r>u&&(m.s.r=u),m.e.r<u&&(m.e.r=u),m.s.c>f&&(m.s.c=f),m.e.c<f&&(m.e.c=f),!b.length){f+=h;continue}var M={t:"s",v:b};t.raw||!b.trim().length||E=="s"||(b==="TRUE"?M={t:"b",v:!0}:b==="FALSE"?M={t:"b",v:!1}:isNaN(_4(b))?isNaN(T5(b).getDate())||(M={t:"d",v:F3(b)},t.cellDates||(M={t:"n",v:u0(M.v)}),M.z=t.dateNF||b2[14]):M={t:"n",v:_4(b)}),t.dense?(r[u]||(r[u]=[]),r[u][f]=M):r[y2({r:u,c:f})]=M,f+=h}}}}return r["!ref"]=I2(m),_.length&&(r["!merges"]=_),r}function jS(n,e,t,r){for(var a=n["!merges"]||[],i=[],o=e.s.c;o<=e.e.c;++o){for(var s=0,l=0,u=0;u<a.length;++u)if(!(a[u].s.r>t||a[u].s.c>o)&&!(a[u].e.r<t||a[u].e.c<o)){if(a[u].s.r<t||a[u].s.c<o){s=-1;break}s=a[u].e.r-a[u].s.r+1,l=a[u].e.c-a[u].s.c+1;break}if(!(s<0)){var f=y2({r:t,c:o}),d=r.dense?(n[t]||[])[o]:n[f],h=d&&d.v!=null&&(d.h||va(d.w||(te(d),d.w)||""))||"",m={};s>1&&(m.rowspan=s),l>1&&(m.colspan=l),r.editable?h='<span contenteditable="true">'+h+"</span>":d&&(m["data-t"]=d&&d.t||"z",d.v!=null&&(m["data-v"]=d.v),d.z!=null&&(m["data-z"]=d.z),d.l&&(d.l.Target||"#").charAt(0)!="#"&&(h='<a href="'+d.l.Target+'">'+h+"</a>")),m.id=(r.id||"sjs")+"-"+f,i.push(km("td",h,m))}}var _="<tr>";return _+i.join("")+"</tr>"}var HS='<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',$S="</body></html>";function YS(n,e){var t=n.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);if(!t||t.length==0)throw new Error("Invalid HTML: could not find <table>");if(t.length==1)return je(ds(t[0],e),e);var r=Fa();return t.forEach(function(a,i){Pa(r,ds(a,e),"Sheet"+(i+1))}),r}function XS(n,e,t){var r=[];return r.join("")+"<table"+(t&&t.id?' id="'+t.id+'"':"")+">"}function JS(n,e){var t=e||{},r=t.header!=null?t.header:HS,a=t.footer!=null?t.footer:$S,i=[r],o=B5(n["!ref"]);t.dense=Array.isArray(n),i.push(XS(n,o,t));for(var s=o.s.r;s<=o.e.r;++s)i.push(jS(n,o,s,t));return i.push("</table>"+a),i.join("")}function df(n,e,t){var r=t||{},a=0,i=0;if(r.origin!=null)if(typeof r.origin=="number")a=r.origin;else{var o=typeof r.origin=="string"?l0(r.origin):r.origin;a=o.r,i=o.c}var s=e.getElementsByTagName("tr"),l=Math.min(r.sheetRows||1e7,s.length),u={s:{r:0,c:0},e:{r:a,c:i}};if(n["!ref"]){var f=B5(n["!ref"]);u.s.r=Math.min(u.s.r,f.s.r),u.s.c=Math.min(u.s.c,f.s.c),u.e.r=Math.max(u.e.r,f.e.r),u.e.c=Math.max(u.e.c,f.e.c),a==-1&&(u.e.r=a=f.e.r+1)}var d=[],h=0,m=n["!rows"]||(n["!rows"]=[]),_=0,g=0,v=0,y=0,S=0,b=0;for(n["!cols"]||(n["!cols"]=[]);_<s.length&&g<l;++_){var w=s[_];if(hs(w)){if(r.display)continue;m[g]={hidden:!0}}var T=w.children;for(v=y=0;v<T.length;++v){var A=T[v];if(!(r.display&&hs(A))){var C=A.hasAttribute("data-v")?A.getAttribute("data-v"):A.hasAttribute("v")?A.getAttribute("v"):ou(A.innerHTML),E=A.getAttribute("data-z")||A.getAttribute("z");for(h=0;h<d.length;++h){var M=d[h];M.s.c==y+i&&M.s.r<g+a&&g+a<=M.e.r&&(y=M.e.c+1-i,h=-1)}b=+A.getAttribute("colspan")||1,((S=+A.getAttribute("rowspan")||1)>1||b>1)&&d.push({s:{r:g+a,c:y+i},e:{r:g+a+(S||1)-1,c:y+i+(b||1)-1}});var N={t:"s",v:C},P=A.getAttribute("data-t")||A.getAttribute("t")||"";C!=null&&(C.length==0?N.t=P||"z":r.raw||C.trim().length==0||P=="s"||(C==="TRUE"?N={t:"b",v:!0}:C==="FALSE"?N={t:"b",v:!1}:isNaN(_4(C))?isNaN(T5(C).getDate())||(N={t:"d",v:F3(C)},r.cellDates||(N={t:"n",v:u0(N.v)}),N.z=r.dateNF||b2[14]):N={t:"n",v:_4(C)})),N.z===void 0&&E!=null&&(N.z=E);var U="",Z=A.getElementsByTagName("A");if(Z&&Z.length)for(var G=0;G<Z.length&&!(Z[G].hasAttribute("href")&&(U=Z[G].getAttribute("href"),U.charAt(0)!="#"));++G);U&&U.charAt(0)!="#"&&(N.l={Target:U}),r.dense?(n[g+a]||(n[g+a]=[]),n[g+a][y+i]=N):n[y2({c:y+i,r:g+a})]=N,u.e.c<y+i&&(u.e.c=y+i),y+=b}}++g}return d.length&&(n["!merges"]=(n["!merges"]||[]).concat(d)),u.e.r=Math.max(u.e.r,g-1+a),n["!ref"]=I2(u),g>=l&&(n["!fullref"]=I2((u.e.r=s.length-_+g-1+a,u))),n}function hf(n,e){var t=e||{},r=t.dense?[]:{};return df(r,n,e)}function ZS(n,e){return je(hf(n,e),e)}function hs(n){var e="",t=qS(n);return t&&(e=t(n).getPropertyValue("display")),e||(e=n.style&&n.style.display),e==="none"}function qS(n){return n.ownerDocument.defaultView&&typeof n.ownerDocument.defaultView.getComputedStyle=="function"?n.ownerDocument.defaultView.getComputedStyle:typeof getComputedStyle=="function"?getComputedStyle:null}function QS(n){var e=n.replace(/[\t\r\n]/g," ").trim().replace(/ +/g," ").replace(/<text:s\/>/g," ").replace(/<text:s text:c="(\d+)"\/>/g,function(r,a){return Array(parseInt(a,10)+1).join(" ")}).replace(/<text:tab[^>]*\/>/g,"	").replace(/<text:line-break\/>/g,`
`),t=L2(e.replace(/<[^>]*>/g,""));return[t]}var ps={day:["d","dd"],month:["m","mm"],year:["y","yy"],hours:["h","hh"],minutes:["m","mm"],seconds:["s","ss"],"am-pm":["A/P","AM/PM"],"day-of-week":["ddd","dddd"],era:["e","ee"],quarter:["\\Qm",'m\\"th quarter"']};function pf(n,e){var t=e||{},r=_a(n),a=[],i,o,s={name:""},l="",u=0,f,d,h={},m=[],_=t.dense?[]:{},g,v,y={value:""},S="",b=0,w=[],T=-1,A=-1,C={s:{r:1e6,c:1e7},e:{r:0,c:0}},E=0,M={},N=[],P={},U=0,Z=0,G=[],W=1,q=1,r1=[],Y={Names:[]},O={},Q=["",""],l1=[],I={},n1="",V=0,z=!1,X=!1,f1=0;for(I8.lastIndex=0,r=r.replace(/<!--([\s\S]*?)-->/mg,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");g=I8.exec(r);)switch(g[3]=g[3].replace(/_.*$/,"")){case"table":case"工作表":g[1]==="/"?(C.e.c>=C.s.c&&C.e.r>=C.s.r?_["!ref"]=I2(C):_["!ref"]="A1:A1",t.sheetRows>0&&t.sheetRows<=C.e.r&&(_["!fullref"]=_["!ref"],C.e.r=t.sheetRows-1,_["!ref"]=I2(C)),N.length&&(_["!merges"]=N),G.length&&(_["!rows"]=G),f.name=f.名称||f.name,typeof JSON!="undefined"&&JSON.stringify(f),m.push(f.name),h[f.name]=_,X=!1):g[0].charAt(g[0].length-2)!=="/"&&(f=v2(g[0],!1),T=A=-1,C.s.r=C.s.c=1e7,C.e.r=C.e.c=0,_=t.dense?[]:{},N=[],G=[],X=!0);break;case"table-row-group":g[1]==="/"?--E:++E;break;case"table-row":case"行":if(g[1]==="/"){T+=W,W=1;break}if(d=v2(g[0],!1),d.行号?T=d.行号-1:T==-1&&(T=0),W=+d["number-rows-repeated"]||1,W<10)for(f1=0;f1<W;++f1)E>0&&(G[T+f1]={level:E});A=-1;break;case"covered-table-cell":g[1]!=="/"&&++A,t.sheetStubs&&(t.dense?(_[T]||(_[T]=[]),_[T][A]={t:"z"}):_[y2({r:T,c:A})]={t:"z"}),S="",w=[];break;case"table-cell":case"数据":if(g[0].charAt(g[0].length-2)==="/")++A,y=v2(g[0],!1),q=parseInt(y["number-columns-repeated"]||"1",10),v={t:"z",v:null},y.formula&&t.cellFormula!=!1&&(v.f=ls(L2(y.formula))),(y.数据类型||y["value-type"])=="string"&&(v.t="s",v.v=L2(y["string-value"]||""),t.dense?(_[T]||(_[T]=[]),_[T][A]=v):_[y2({r:T,c:A})]=v),A+=q-1;else if(g[1]!=="/"){++A,S="",b=0,w=[],q=1;var y1=W?T+W-1:T;if(A>C.e.c&&(C.e.c=A),A<C.s.c&&(C.s.c=A),T<C.s.r&&(C.s.r=T),y1>C.e.r&&(C.e.r=y1),y=v2(g[0],!1),l1=[],I={},v={t:y.数据类型||y["value-type"],v:null},t.cellFormula)if(y.formula&&(y.formula=L2(y.formula)),y["number-matrix-columns-spanned"]&&y["number-matrix-rows-spanned"]&&(U=parseInt(y["number-matrix-rows-spanned"],10)||0,Z=parseInt(y["number-matrix-columns-spanned"],10)||0,P={s:{r:T,c:A},e:{r:T+U-1,c:A+Z-1}},v.F=I2(P),r1.push([P,v.F])),y.formula)v.f=ls(y.formula);else for(f1=0;f1<r1.length;++f1)T>=r1[f1][0].s.r&&T<=r1[f1][0].e.r&&A>=r1[f1][0].s.c&&A<=r1[f1][0].e.c&&(v.F=r1[f1][1]);switch((y["number-columns-spanned"]||y["number-rows-spanned"])&&(U=parseInt(y["number-rows-spanned"],10)||0,Z=parseInt(y["number-columns-spanned"],10)||0,P={s:{r:T,c:A},e:{r:T+U-1,c:A+Z-1}},N.push(P)),y["number-columns-repeated"]&&(q=parseInt(y["number-columns-repeated"],10)),v.t){case"boolean":v.t="b",v.v=q2(y["boolean-value"]);break;case"float":v.t="n",v.v=parseFloat(y.value);break;case"percentage":v.t="n",v.v=parseFloat(y.value);break;case"currency":v.t="n",v.v=parseFloat(y.value);break;case"date":v.t="d",v.v=F3(y["date-value"]),t.cellDates||(v.t="n",v.v=u0(v.v)),v.z="m/d/yy";break;case"time":v.t="n",v.v=dm(y["time-value"])/86400,t.cellDates&&(v.t="d",v.v=G7(v.v)),v.z="HH:MM:SS";break;case"number":v.t="n",v.v=parseFloat(y.数据数值);break;default:if(v.t==="string"||v.t==="text"||!v.t)v.t="s",y["string-value"]!=null&&(S=L2(y["string-value"]),w=[]);else throw new Error("Unsupported value type "+v.t)}}else{if(z=!1,v.t==="s"&&(v.v=S||"",w.length&&(v.R=w),z=b==0),O.Target&&(v.l=O),l1.length>0&&(v.c=l1,l1=[]),S&&t.cellText!==!1&&(v.w=S),z&&(v.t="z",delete v.v),(!z||t.sheetStubs)&&!(t.sheetRows&&t.sheetRows<=T))for(var m1=0;m1<W;++m1){if(q=parseInt(y["number-columns-repeated"]||"1",10),t.dense)for(_[T+m1]||(_[T+m1]=[]),_[T+m1][A]=m1==0?v:G3(v);--q>0;)_[T+m1][A+q]=G3(v);else for(_[y2({r:T+m1,c:A})]=v;--q>0;)_[y2({r:T+m1,c:A+q})]=G3(v);C.e.c<=A&&(C.e.c=A)}q=parseInt(y["number-columns-repeated"]||"1",10),A+=q-1,q=0,v={},S="",w=[]}O={};break;case"document":case"document-content":case"电子表格文档":case"spreadsheet":case"主体":case"scripts":case"styles":case"font-face-decls":case"master-styles":if(g[1]==="/"){if((i=a.pop())[0]!==g[3])throw"Bad state: "+i}else g[0].charAt(g[0].length-2)!=="/"&&a.push([g[3],!0]);break;case"annotation":if(g[1]==="/"){if((i=a.pop())[0]!==g[3])throw"Bad state: "+i;I.t=S,w.length&&(I.R=w),I.a=n1,l1.push(I)}else g[0].charAt(g[0].length-2)!=="/"&&a.push([g[3],!1]);n1="",V=0,S="",b=0,w=[];break;case"creator":g[1]==="/"?n1=r.slice(V,g.index):V=g.index+g[0].length;break;case"meta":case"元数据":case"settings":case"config-item-set":case"config-item-map-indexed":case"config-item-map-entry":case"config-item-map-named":case"shapes":case"frame":case"text-box":case"image":case"data-pilot-tables":case"list-style":case"form":case"dde-links":case"event-listeners":case"chart":if(g[1]==="/"){if((i=a.pop())[0]!==g[3])throw"Bad state: "+i}else g[0].charAt(g[0].length-2)!=="/"&&a.push([g[3],!1]);S="",b=0,w=[];break;case"scientific-number":break;case"currency-symbol":break;case"currency-style":break;case"number-style":case"percentage-style":case"date-style":case"time-style":if(g[1]==="/"){if(M[s.name]=l,(i=a.pop())[0]!==g[3])throw"Bad state: "+i}else g[0].charAt(g[0].length-2)!=="/"&&(l="",s=v2(g[0],!1),a.push([g[3],!0]));break;case"script":break;case"libraries":break;case"automatic-styles":break;case"default-style":case"page-layout":break;case"style":break;case"map":break;case"font-face":break;case"paragraph-properties":break;case"table-properties":break;case"table-column-properties":break;case"table-row-properties":break;case"table-cell-properties":break;case"number":switch(a[a.length-1][0]){case"time-style":case"date-style":o=v2(g[0],!1),l+=ps[g[3]][o.style==="long"?1:0];break}break;case"fraction":break;case"day":case"month":case"year":case"era":case"day-of-week":case"week-of-year":case"quarter":case"hours":case"minutes":case"seconds":case"am-pm":switch(a[a.length-1][0]){case"time-style":case"date-style":o=v2(g[0],!1),l+=ps[g[3]][o.style==="long"?1:0];break}break;case"boolean-style":break;case"boolean":break;case"text-style":break;case"text":if(g[0].slice(-2)==="/>")break;if(g[1]==="/")switch(a[a.length-1][0]){case"number-style":case"date-style":case"time-style":l+=r.slice(u,g.index);break}else u=g.index+g[0].length;break;case"named-range":o=v2(g[0],!1),Q=_t(o["cell-range-address"]);var c1={Name:o.name,Ref:Q[0]+"!"+Q[1]};X&&(c1.Sheet=m.length),Y.Names.push(c1);break;case"text-content":break;case"text-properties":break;case"embedded-text":break;case"body":case"电子表格":break;case"forms":break;case"table-column":break;case"table-header-rows":break;case"table-rows":break;case"table-column-group":break;case"table-header-columns":break;case"table-columns":break;case"null-date":break;case"graphic-properties":break;case"calculation-settings":break;case"named-expressions":break;case"label-range":break;case"label-ranges":break;case"named-expression":break;case"sort":break;case"sort-by":break;case"sort-groups":break;case"tab":break;case"line-break":break;case"span":break;case"p":case"文本串":if(["master-styles"].indexOf(a[a.length-1][0])>-1)break;if(g[1]==="/"&&(!y||!y["string-value"])){var I1=QS(r.slice(b,g.index));S=(S.length>0?S+`
`:"")+I1[0]}else v2(g[0],!1),b=g.index+g[0].length;break;case"s":break;case"database-range":if(g[1]==="/")break;try{Q=_t(v2(g[0])["target-range-address"]),h[Q[0]]["!autofilter"]={ref:Q[1]}}catch(C1){}break;case"date":break;case"object":break;case"title":case"标题":break;case"desc":break;case"binary-data":break;case"table-source":break;case"scenario":break;case"iteration":break;case"content-validations":break;case"content-validation":break;case"help-message":break;case"error-message":break;case"database-ranges":break;case"filter":break;case"filter-and":break;case"filter-or":break;case"filter-condition":break;case"list-level-style-bullet":break;case"list-level-style-number":break;case"list-level-properties":break;case"sender-firstname":case"sender-lastname":case"sender-initials":case"sender-title":case"sender-position":case"sender-email":case"sender-phone-private":case"sender-fax":case"sender-company":case"sender-phone-work":case"sender-street":case"sender-city":case"sender-postal-code":case"sender-country":case"sender-state-or-province":case"author-name":case"author-initials":case"chapter":case"file-name":case"template-name":case"sheet-name":break;case"event-listener":break;case"initial-creator":case"creation-date":case"print-date":case"generator":case"document-statistic":case"user-defined":case"editing-duration":case"editing-cycles":break;case"config-item":break;case"page-number":break;case"page-count":break;case"time":break;case"cell-range-source":break;case"detective":break;case"operation":break;case"highlighted-range":break;case"data-pilot-table":case"source-cell-range":case"source-service":case"data-pilot-field":case"data-pilot-level":case"data-pilot-subtotals":case"data-pilot-subtotal":case"data-pilot-members":case"data-pilot-member":case"data-pilot-display-info":case"data-pilot-sort-info":case"data-pilot-layout-info":case"data-pilot-field-reference":case"data-pilot-groups":case"data-pilot-group":case"data-pilot-group-member":break;case"rect":break;case"dde-connection-decls":case"dde-connection-decl":case"dde-link":case"dde-source":break;case"properties":break;case"property":break;case"a":if(g[1]!=="/"){if(O=v2(g[0],!1),!O.href)break;O.Target=L2(O.href),delete O.href,O.Target.charAt(0)=="#"&&O.Target.indexOf(".")>-1?(Q=_t(O.Target.slice(1)),O.Target="#"+Q[0]+"!"+Q[1]):O.Target.match(/^\.\.[\\\/]/)&&(O.Target=O.Target.slice(3))}break;case"table-protection":break;case"data-pilot-grand-total":break;case"office-document-common-attrs":break;default:switch(g[2]){case"dc:":case"calcext:":case"loext:":case"ooo:":case"chartooo:":case"draw:":case"style:":case"chart:":case"form:":case"uof:":case"表:":case"字:":break;default:if(t.WTF)throw new Error(g)}}var j={Sheets:h,SheetNames:m,Workbook:Y};return t.bookSheets&&delete j.Sheets,j}function ms(n,e){e=e||{},$0(n,"META-INF/manifest.xml")&&pg(x3(n,"META-INF/manifest.xml"),e);var t=O0(n,"content.xml");if(!t)throw new Error("Missing content.xml in ODS / UOF file");var r=pf($2(t),e);return $0(n,"meta.xml")&&(r.Props=Eu(x3(n,"meta.xml"))),r}function gs(n,e){return pf(n,e)}/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */function Ra(n){return new DataView(n.buffer,n.byteOffset,n.byteLength)}function Cn(n){return typeof TextDecoder!="undefined"?new TextDecoder().decode(n):$2(E9(n))}function Mn(n){var e=n.reduce(function(a,i){return a+i.length},0),t=new Uint8Array(e),r=0;return n.forEach(function(a){t.set(a,r),r+=a.length}),t}function vs(n){return n-=n>>1&1431655765,n=(n&858993459)+(n>>2&858993459),(n+(n>>4)&252645135)*16843009>>>24}function KS(n,e){for(var t=(n[e+15]&127)<<7|n[e+14]>>1,r=n[e+14]&1,a=e+13;a>=e;--a)r=r*256+n[a];return(n[e+15]&128?-r:r)*Math.pow(10,t-6176)}function P8(n,e){var t=e?e[0]:0,r=n[t]&127;e:if(n[t++]>=128&&(r|=(n[t]&127)<<7,n[t++]<128||(r|=(n[t]&127)<<14,n[t++]<128)||(r|=(n[t]&127)<<21,n[t++]<128)||(r+=(n[t]&127)*Math.pow(2,28),++t,n[t++]<128)||(r+=(n[t]&127)*Math.pow(2,35),++t,n[t++]<128)||(r+=(n[t]&127)*Math.pow(2,42),++t,n[t++]<128)))break e;return e&&(e[0]=t),r}function M3(n){var e=0,t=n[e]&127;e:if(n[e++]>=128){if(t|=(n[e]&127)<<7,n[e++]<128||(t|=(n[e]&127)<<14,n[e++]<128)||(t|=(n[e]&127)<<21,n[e++]<128))break e;t|=(n[e]&127)<<28}return t}function q3(n){for(var e=[],t=[0];t[0]<n.length;){var r=t[0],a=P8(n,t),i=a&7;a=Math.floor(a/8);var o=0,s;if(a==0)break;switch(i){case 0:{for(var l=t[0];n[t[0]++]>=128;);s=n.slice(l,t[0])}break;case 5:o=4,s=n.slice(t[0],t[0]+o),t[0]+=o;break;case 1:o=8,s=n.slice(t[0],t[0]+o),t[0]+=o;break;case 2:o=P8(n,t),s=n.slice(t[0],t[0]+o),t[0]+=o;break;case 3:case 4:default:throw new Error("PB Type ".concat(i," for Field ").concat(a," at offset ").concat(r))}var u={data:s,type:i};e[a]==null?e[a]=[u]:e[a].push(u)}return e}function Ia(n,e){return(n==null?void 0:n.map(function(t){return e(t.data)}))||[]}function ew(n){for(var e,t=[],r=[0];r[0]<n.length;){var a=P8(n,r),i=q3(n.slice(r[0],r[0]+a));r[0]+=a;var o={id:M3(i[1][0].data),messages:[]};i[2].forEach(function(s){var l=q3(s.data),u=M3(l[3][0].data);o.messages.push({meta:l,data:n.slice(r[0],r[0]+u)}),r[0]+=u}),(e=i[3])!=null&&e[0]&&(o.merge=M3(i[3][0].data)>>>0>0),t.push(o)}return t}function tw(n,e){if(n!=0)throw new Error("Unexpected Snappy chunk type ".concat(n));for(var t=[0],r=P8(e,t),a=[];t[0]<e.length;){var i=e[t[0]]&3;if(i==0){var o=e[t[0]++]>>2;if(o<60)++o;else{var s=o-59;o=e[t[0]],s>1&&(o|=e[t[0]+1]<<8),s>2&&(o|=e[t[0]+2]<<16),s>3&&(o|=e[t[0]+3]<<24),o>>>=0,o++,t[0]+=s}a.push(e.slice(t[0],t[0]+o)),t[0]+=o;continue}else{var l=0,u=0;if(i==1?(u=(e[t[0]]>>2&7)+4,l=(e[t[0]++]&224)<<3,l|=e[t[0]++]):(u=(e[t[0]++]>>2)+1,i==2?(l=e[t[0]]|e[t[0]+1]<<8,t[0]+=2):(l=(e[t[0]]|e[t[0]+1]<<8|e[t[0]+2]<<16|e[t[0]+3]<<24)>>>0,t[0]+=4)),a=[Mn(a)],l==0)throw new Error("Invalid offset 0");if(l>a[0].length)throw new Error("Invalid offset beyond length");if(u>=l)for(a.push(a[0].slice(-l)),u-=l;u>=a[a.length-1].length;)a.push(a[a.length-1]),u-=a[a.length-1].length;a.push(a[0].slice(-l,-l+u))}}var f=Mn(a);if(f.length!=r)throw new Error("Unexpected length: ".concat(f.length," != ").concat(r));return f}function nw(n){for(var e=[],t=0;t<n.length;){var r=n[t++],a=n[t]|n[t+1]<<8|n[t+2]<<16;t+=3,e.push(tw(r,n.slice(t,t+a))),t+=a}if(t!==n.length)throw new Error("data is not a valid framed stream!");return Mn(e)}function rw(n,e,t,r){var a=Ra(n),i=a.getUint32(4,!0),o=(r>1?12:8)+vs(i&(r>1?3470:398))*4,s=-1,l=-1,u=NaN,f=new Date(2001,0,1);i&512&&(s=a.getUint32(o,!0),o+=4),o+=vs(i&(r>1?12288:4096))*4,i&16&&(l=a.getUint32(o,!0),o+=4),i&32&&(u=a.getFloat64(o,!0),o+=8),i&64&&(f.setTime(f.getTime()+a.getFloat64(o,!0)*1e3),o+=8);var d;switch(n[2]){case 0:break;case 2:d={t:"n",v:u};break;case 3:d={t:"s",v:e[l]};break;case 5:d={t:"d",v:f};break;case 6:d={t:"b",v:u>0};break;case 7:d={t:"n",v:u/86400};break;case 8:d={t:"e",v:0};break;case 9:if(s>-1)d={t:"s",v:t[s]};else if(l>-1)d={t:"s",v:e[l]};else if(!isNaN(u))d={t:"n",v:u};else throw new Error("Unsupported cell type ".concat(n.slice(0,4)));break;default:throw new Error("Unsupported cell type ".concat(n.slice(0,4)))}return d}function aw(n,e,t){var r=Ra(n),a=r.getUint32(8,!0),i=12,o=-1,s=-1,l=NaN,u=NaN,f=new Date(2001,0,1);a&1&&(l=KS(n,i),i+=16),a&2&&(u=r.getFloat64(i,!0),i+=8),a&4&&(f.setTime(f.getTime()+r.getFloat64(i,!0)*1e3),i+=8),a&8&&(s=r.getUint32(i,!0),i+=4),a&16&&(o=r.getUint32(i,!0),i+=4);var d;switch(n[1]){case 0:break;case 2:d={t:"n",v:l};break;case 3:d={t:"s",v:e[s]};break;case 5:d={t:"d",v:f};break;case 6:d={t:"b",v:u>0};break;case 7:d={t:"n",v:u/86400};break;case 8:d={t:"e",v:0};break;case 9:if(o>-1)d={t:"s",v:t[o]};else throw new Error("Unsupported cell type ".concat(n[1]," : ").concat(a&31," : ").concat(n.slice(0,4)));break;case 10:d={t:"n",v:l};break;default:throw new Error("Unsupported cell type ".concat(n[1]," : ").concat(a&31," : ").concat(n.slice(0,4)))}return d}function iw(n,e,t){switch(n[0]){case 0:case 1:case 2:case 3:return rw(n,e,t,n[0]);case 5:return aw(n,e,t);default:throw new Error("Unsupported payload version ".concat(n[0]))}}function ke(n){var e=q3(n);return P8(e[1][0].data)}function _s(n,e){var t=q3(e.data),r=M3(t[1][0].data),a=t[3],i=[];return(a||[]).forEach(function(o){var s=q3(o.data),l=M3(s[1][0].data)>>>0;switch(r){case 1:i[l]=Cn(s[3][0].data);break;case 8:{var u=n[ke(s[9][0].data)][0],f=q3(u.data),d=n[ke(f[1][0].data)][0],h=M3(d.meta[1][0].data);if(h!=2001)throw new Error("2000 unexpected reference to ".concat(h));var m=q3(d.data);i[l]=m[3].map(function(_){return Cn(_.data)}).join("")}break}}),i}function ow(n,e){var t,r,a,i,o,s,l,u,f,d,h,m,_,g,v=q3(n),y=M3(v[1][0].data)>>>0,S=M3(v[2][0].data)>>>0,b=((r=(t=v[8])==null?void 0:t[0])==null?void 0:r.data)&&M3(v[8][0].data)>0||!1,w,T;if((i=(a=v[7])==null?void 0:a[0])!=null&&i.data&&e!=0)w=(s=(o=v[7])==null?void 0:o[0])==null?void 0:s.data,T=(u=(l=v[6])==null?void 0:l[0])==null?void 0:u.data;else if((d=(f=v[4])==null?void 0:f[0])!=null&&d.data&&e!=1)w=(m=(h=v[4])==null?void 0:h[0])==null?void 0:m.data,T=(g=(_=v[3])==null?void 0:_[0])==null?void 0:g.data;else throw"NUMBERS Tile missing ".concat(e," cell storage");for(var A=b?4:1,C=Ra(w),E=[],M=0;M<w.length/2;++M){var N=C.getUint16(M*2,!0);N<65535&&E.push([M,N])}if(E.length!=S)throw"Expected ".concat(S," cells, found ").concat(E.length);var P=[];for(M=0;M<E.length-1;++M)P[E[M][0]]=T.subarray(E[M][1]*A,E[M+1][1]*A);return E.length>=1&&(P[E[E.length-1][0]]=T.subarray(E[E.length-1][1]*A)),{R:y,cells:P}}function sw(n,e){var t,r=q3(e.data),a=(t=r==null?void 0:r[7])!=null&&t[0]?M3(r[7][0].data)>>>0>0?1:0:-1,i=Ia(r[5],function(o){return ow(o,a)});return{nrows:M3(r[4][0].data)>>>0,data:i.reduce(function(o,s){return o[s.R]||(o[s.R]=[]),s.cells.forEach(function(l,u){if(o[s.R][u])throw new Error("Duplicate cell r=".concat(s.R," c=").concat(u));o[s.R][u]=l}),o},[])}}function lw(n,e,t){var r,a=q3(e.data),i={s:{r:0,c:0},e:{r:0,c:0}};if(i.e.r=(M3(a[6][0].data)>>>0)-1,i.e.r<0)throw new Error("Invalid row varint ".concat(a[6][0].data));if(i.e.c=(M3(a[7][0].data)>>>0)-1,i.e.c<0)throw new Error("Invalid col varint ".concat(a[7][0].data));t["!ref"]=I2(i);var o=q3(a[4][0].data),s=_s(n,n[ke(o[4][0].data)][0]),l=(r=o[17])!=null&&r[0]?_s(n,n[ke(o[17][0].data)][0]):[],u=q3(o[3][0].data),f=0;u[1].forEach(function(d){var h=q3(d.data),m=n[ke(h[2][0].data)][0],_=M3(m.meta[1][0].data);if(_!=6002)throw new Error("6001 unexpected reference to ".concat(_));var g=sw(n,m);g.data.forEach(function(v,y){v.forEach(function(S,b){var w=y2({r:f+y,c:b}),T=iw(S,s,l);T&&(t[w]=T)})}),f+=g.nrows})}function cw(n,e){var t=q3(e.data),r={"!ref":"A1"},a=n[ke(t[2][0].data)],i=M3(a[0].meta[1][0].data);if(i!=6001)throw new Error("6000 unexpected reference to ".concat(i));return lw(n,a[0],r),r}function uw(n,e){var t,r=q3(e.data),a={name:(t=r[1])!=null&&t[0]?Cn(r[1][0].data):"",sheets:[]},i=Ia(r[2],ke);return i.forEach(function(o){n[o].forEach(function(s){var l=M3(s.meta[1][0].data);l==6e3&&a.sheets.push(cw(n,s))})}),a}function fw(n,e){var t=Fa(),r=q3(e.data),a=Ia(r[1],ke);if(a.forEach(function(i){n[i].forEach(function(o){var s=M3(o.meta[1][0].data);if(s==2){var l=uw(n,o);l.sheets.forEach(function(u,f){Pa(t,u,f==0?l.name:l.name+"_"+f,!0)})}})}),t.SheetNames.length==0)throw new Error("Empty NUMBERS file");return t}function yt(n){var e,t,r,a,i={},o=[];if(n.FullPaths.forEach(function(l){if(l.match(/\.iwpv2/))throw new Error("Unsupported password protection")}),n.FileIndex.forEach(function(l){if(l.name.match(/\.iwa$/)){var u;try{u=nw(l.content)}catch(d){return console.log("?? "+l.content.length+" "+(d.message||d))}var f;try{f=ew(u)}catch(d){return console.log("## "+(d.message||d))}f.forEach(function(d){i[d.id]=d.messages,o.push(d.id)})}}),!o.length)throw new Error("File has no messages");var s=((a=(r=(t=(e=i==null?void 0:i[1])==null?void 0:e[0])==null?void 0:t.meta)==null?void 0:r[1])==null?void 0:a[0].data)&&M3(i[1][0].meta[1][0].data)==1&&i[1][0];if(s||o.forEach(function(l){i[l].forEach(function(u){var f=M3(u.meta[1][0].data)>>>0;if(f==1)if(!s)s=u;else throw new Error("Document has multiple roots")})}),!s)throw new Error("Cannot find Document root");return fw(i,s)}function dw(n){return function(t){for(var r=0;r!=n.length;++r){var a=n[r];t[a[0]]===void 0&&(t[a[0]]=a[1]),a[2]==="n"&&(t[a[0]]=Number(t[a[0]]))}}}function Oa(n){dw([["cellNF",!1],["cellHTML",!0],["cellFormula",!0],["cellStyles",!1],["cellText",!0],["cellDates",!1],["sheetStubs",!1],["sheetRows",0,"n"],["bookDeps",!1],["bookSheets",!1],["bookProps",!1],["bookFiles",!1],["bookVBA",!1],["password",""],["WTF",!1]])(n)}function hw(n){return s5.WS.indexOf(n)>-1?"sheet":n==s5.CS?"chart":n==s5.DS?"dialog":n==s5.MS?"macro":n&&n.length?n:"sheet"}function pw(n,e){if(!n)return 0;try{n=e.map(function(r){return r.id||(r.id=r.strRelID),[r.name,n["!id"][r.id].Target,hw(n["!id"][r.id].Type)]})}catch(t){return null}return!n||n.length===0?null:n}function mw(n,e,t,r,a,i,o,s,l,u,f,d){try{i[r]=m8(O0(n,t,!0),e);var h=x3(n,e),m;switch(s){case"sheet":m=bS(h,e,a,l,i[r],u,f,d);break;case"chart":if(m=SS(h,e,a,l,i[r],u,f,d),!m||!m["!drawel"])break;var _=r8(m["!drawel"].Target,e),g=Sn(_),v=yx(O0(n,_,!0),m8(O0(n,g,!0),_)),y=r8(v,_),S=Sn(y);m=aS(O0(n,y,!0),y,l,m8(O0(n,S,!0),y),u,m);break;case"macro":m=wS(h,e,a,l,i[r],u,f,d);break;case"dialog":m=AS(h,e,a,l,i[r],u,f,d);break;default:throw new Error("Unrecognized sheet type "+s)}o[r]=m;var b=[];i&&i[r]&&I4(i[r]).forEach(function(w){var T="";if(i[r][w].Type==s5.CMNT){T=r8(i[r][w].Target,e);var A=MS(x3(n,T,!0),T,l);if(!A||!A.length)return;rs(m,A,!1)}i[r][w].Type==s5.TCMNT&&(T=r8(i[r][w].Target,e),b=b.concat(Sx(x3(n,T,!0),l)))}),b&&b.length&&rs(m,b,!0,l.people||[])}catch(w){if(l.WTF)throw w}}function G0(n){return n.charAt(0)=="/"?n.slice(1):n}function gw(n,e){if(Zc(),e=e||{},Oa(e),$0(n,"META-INF/manifest.xml")||$0(n,"objectdata.xml"))return ms(n,e);if($0(n,"Index/Document.iwa")){if(typeof Uint8Array=="undefined")throw new Error("NUMBERS file parsing requires Uint8Array support");if(typeof yt!="undefined"){if(n.FileIndex)return yt(n);var t=k2.utils.cfb_new();return ko(n).forEach(function(G){vm(t,G,nu(n,G))}),yt(t)}throw new Error("Unsupported NUMBERS file")}if(!$0(n,"[Content_Types].xml"))throw $0(n,"index.xml.gz")?new Error("Unsupported NUMBERS 08 file"):$0(n,"index.xml")?new Error("Unsupported NUMBERS 09 file"):new Error("Unsupported ZIP file");var r=ko(n),a=dg(O0(n,"[Content_Types].xml")),i=!1,o,s;if(a.workbooks.length===0&&(s="xl/workbook.xml",x3(n,s,!0)&&a.workbooks.push(s)),a.workbooks.length===0){if(s="xl/workbook.bin",!x3(n,s,!0))throw new Error("Could not find workbook");a.workbooks.push(s),i=!0}a.workbooks[0].slice(-3)=="bin"&&(i=!0);var l={},u={};if(!e.bookSheets&&!e.bookProps){if(_8=[],a.sst)try{_8=CS(x3(n,G0(a.sst)),a.sst,e)}catch(G){if(e.WTF)throw G}e.cellStyles&&a.themes.length&&(l=ES(O0(n,a.themes[0].replace(/^\//,""),!0)||"",a.themes[0],e)),a.style&&(u=TS(x3(n,G0(a.style)),a.style,l,e))}a.links.map(function(G){try{var W=m8(O0(n,Sn(G0(G))),G);return kS(x3(n,G0(G)),W,G,e)}catch(q){}});var f=yS(x3(n,G0(a.workbooks[0])),a.workbooks[0],e),d={},h="";a.coreprops.length&&(h=x3(n,G0(a.coreprops[0]),!0),h&&(d=Eu(h)),a.extprops.length!==0&&(h=x3(n,G0(a.extprops[0]),!0),h&&vg(h,d,e)));var m={};(!e.bookSheets||e.bookProps)&&a.custprops.length!==0&&(h=O0(n,G0(a.custprops[0]),!0),h&&(m=xg(h,e)));var _={};if((e.bookSheets||e.bookProps)&&(f.Sheets?o=f.Sheets.map(function(W){return W.name}):d.Worksheets&&d.SheetNames.length>0&&(o=d.SheetNames),e.bookProps&&(_.Props=d,_.Custprops=m),e.bookSheets&&typeof o!="undefined"&&(_.SheetNames=o),e.bookSheets?_.SheetNames:e.bookProps))return _;o={};var g={};e.bookDeps&&a.calcchain&&(g=DS(x3(n,G0(a.calcchain)),a.calcchain));var v=0,y={},S,b;{var w=f.Sheets;d.Worksheets=w.length,d.SheetNames=[];for(var T=0;T!=w.length;++T)d.SheetNames[T]=w[T].name}var A=i?"bin":"xml",C=a.workbooks[0].lastIndexOf("/"),E=(a.workbooks[0].slice(0,C+1)+"_rels/"+a.workbooks[0].slice(C+1)+".rels").replace(/^\//,"");$0(n,E)||(E="xl/_rels/workbook."+A+".rels");var M=m8(O0(n,E,!0),E.replace(/_rels.*/,"s5s"));(a.metadata||[]).length>=1&&(e.xlmeta=RS(x3(n,G0(a.metadata[0])),a.metadata[0],e)),(a.people||[]).length>=1&&(e.people=wx(x3(n,G0(a.people[0])),e)),M&&(M=pw(M,f.Sheets));var N=x3(n,"xl/worksheets/sheet.xml",!0)?1:0;e:for(v=0;v!=d.Worksheets;++v){var P="sheet";if(M&&M[v]?(S="xl/"+M[v][1].replace(/[\/]?xl\//,""),$0(n,S)||(S=M[v][1]),$0(n,S)||(S=E.replace(/_rels\/.*$/,"")+M[v][1]),P=M[v][2]):(S="xl/worksheets/sheet"+(v+1-N)+"."+A,S=S.replace(/sheet0\./,"sheet.")),b=S.replace(/^(.*)(\/)([^\/]*)$/,"$1/_rels/$3.rels"),e&&e.sheets!=null)switch(typeof e.sheets){case"number":if(v!=e.sheets)continue e;break;case"string":if(d.SheetNames[v].toLowerCase()!=e.sheets.toLowerCase())continue e;break;default:if(Array.isArray&&Array.isArray(e.sheets)){for(var U=!1,Z=0;Z!=e.sheets.length;++Z)typeof e.sheets[Z]=="number"&&e.sheets[Z]==v&&(U=1),typeof e.sheets[Z]=="string"&&e.sheets[Z].toLowerCase()==d.SheetNames[v].toLowerCase()&&(U=1);if(!U)continue e}}mw(n,S,b,d.SheetNames[v],v,y,o,P,e,f,l,u)}return _={Directory:a,Workbook:f,Props:d,Custprops:m,Deps:g,Sheets:o,SheetNames:d.SheetNames,Strings:_8,Styles:u,Themes:l,SSF:G3(b2)},e&&e.bookFiles&&(n.files?(_.keys=r,_.files=n.files):(_.keys=[],_.files={},n.FullPaths.forEach(function(G,W){G=G.replace(/^Root Entry[\/]/,""),_.keys.push(G),_.files[G]=n.FileIndex[W]}))),e&&e.bookVBA&&(a.vba.length>0?_.vbaraw=x3(n,G0(a.vba[0]),!0):a.defaults&&a.defaults.bin===Cx&&(_.vbaraw=x3(n,"xl/vbaProject.bin",!0))),_}function vw(n,e){var t=e||{},r="Workbook",a=k2.find(n,r);try{if(r="/!DataSpaces/Version",a=k2.find(n,r),!a||!a.content)throw new Error("ECMA-376 Encrypted file missing "+r);if(c_(a.content),r="/!DataSpaces/DataSpaceMap",a=k2.find(n,r),!a||!a.content)throw new Error("ECMA-376 Encrypted file missing "+r);var i=f_(a.content);if(i.length!==1||i[0].comps.length!==1||i[0].comps[0].t!==0||i[0].name!=="StrongEncryptionDataSpace"||i[0].comps[0].v!=="EncryptedPackage")throw new Error("ECMA-376 Encrypted file bad "+r);if(r="/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace",a=k2.find(n,r),!a||!a.content)throw new Error("ECMA-376 Encrypted file missing "+r);var o=d_(a.content);if(o.length!=1||o[0]!="StrongEncryptionTransform")throw new Error("ECMA-376 Encrypted file bad "+r);if(r="/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary",a=k2.find(n,r),!a||!a.content)throw new Error("ECMA-376 Encrypted file missing "+r);p_(a.content)}catch(l){}if(r="/EncryptionInfo",a=k2.find(n,r),!a||!a.content)throw new Error("ECMA-376 Encrypted file missing "+r);var s=m_(a.content);if(r="/EncryptedPackage",a=k2.find(n,r),!a||!a.content)throw new Error("ECMA-376 Encrypted file missing "+r);if(s[0]==4&&typeof decrypt_agile!="undefined")return decrypt_agile(s[1],a.content,t.password||"",t);if(s[0]==2&&typeof decrypt_std76!="undefined")return decrypt_std76(s[1],a.content,t.password||"",t);throw new Error("File is password-protected")}function La(n,e){var t="";switch((e||{}).type||"base64"){case"buffer":return[n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]];case"base64":t=z0(n.slice(0,12));break;case"binary":t=n;break;case"array":return[n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]];default:throw new Error("Unrecognized type "+(e&&e.type||"undefined"))}return[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3),t.charCodeAt(4),t.charCodeAt(5),t.charCodeAt(6),t.charCodeAt(7)]}function _w(n,e){return k2.find(n,"EncryptedPackage")?vw(n,e):ff(n,e)}function xw(n,e){var t,r=n,a=e||{};return a.type||(a.type=C2&&Buffer.isBuffer(n)?"buffer":"base64"),t=ru(r,a),gw(t,a)}function mf(n,e){var t=0;e:for(;t<n.length;)switch(n.charCodeAt(t)){case 10:case 13:case 32:++t;break;case 60:return Tn(n.slice(t),e);default:break e}return O8.to_workbook(n,e)}function yw(n,e){var t="",r=La(n,e);switch(e.type){case"base64":t=z0(n);break;case"binary":t=n;break;case"buffer":t=n.toString("binary");break;case"array":t=_9(n);break;default:throw new Error("Unrecognized type "+e.type)}return r[0]==239&&r[1]==187&&r[2]==191&&(t=$2(t)),e.type="binary",mf(t,e)}function bw(n,e){var t=n;return e.type=="base64"&&(t=z0(t)),t=ye.utils.decode(1200,t.slice(2),"str"),e.type="binary",mf(t,e)}function Sw(n){return n.match(/[^\x00-\x7F]/)?a8(n):n}function bt(n,e,t,r){return r?(t.type="string",O8.to_workbook(n,t)):O8.to_workbook(e,t)}function Dn(n,e){zc();var t=e||{};if(typeof ArrayBuffer!="undefined"&&n instanceof ArrayBuffer)return Dn(new Uint8Array(n),(t=G3(t),t.type="array",t));typeof Uint8Array!="undefined"&&n instanceof Uint8Array&&!t.type&&(t.type=typeof Deno!="undefined"?"buffer":"array");var r=n,a=[0,0,0,0],i=!1;if(t.cellStyles&&(t.cellNF=!0,t.sheetStubs=!0),y5={},t.dateNF&&(y5.dateNF=t.dateNF),t.type||(t.type=C2&&Buffer.isBuffer(n)?"buffer":"base64"),t.type=="file"&&(t.type=C2?"buffer":"binary",r=um(n),typeof Uint8Array!="undefined"&&!C2&&(t.type="array")),t.type=="string"&&(i=!0,t.type="binary",t.codepage=65001,r=Sw(n)),t.type=="array"&&typeof Uint8Array!="undefined"&&n instanceof Uint8Array&&typeof ArrayBuffer!="undefined"){var o=new ArrayBuffer(3),s=new Uint8Array(o);if(s.foo="bar",!s.foo)return t=G3(t),t.type="array",Dn(da(r),t)}switch((a=La(r,t))[0]){case 208:if(a[1]===207&&a[2]===17&&a[3]===224&&a[4]===161&&a[5]===177&&a[6]===26&&a[7]===225)return _w(k2.read(r,t),t);break;case 9:if(a[1]<=8)return ff(r,t);break;case 60:return Tn(r,t);case 73:if(a[1]===73&&a[2]===42&&a[3]===0)throw new Error("TIFF Image File is not a spreadsheet");if(a[1]===68)return Zv(r,t);break;case 84:if(a[1]===65&&a[2]===66&&a[3]===76)return Xv.to_workbook(r,t);break;case 80:return a[1]===75&&a[2]<9&&a[3]<9?xw(r,t):bt(n,r,t,i);case 239:return a[3]===60?Tn(r,t):bt(n,r,t,i);case 255:if(a[1]===254)return bw(r,t);if(a[1]===0&&a[2]===2&&a[3]===0)return v8.to_workbook(r,t);break;case 0:if(a[1]===0&&(a[2]>=2&&a[3]===0||a[2]===0&&(a[3]===8||a[3]===9)))return v8.to_workbook(r,t);break;case 3:case 131:case 139:case 140:return ns.to_workbook(r,t);case 123:if(a[1]===92&&a[2]===114&&a[3]===116)return C_.to_workbook(r,t);break;case 10:case 13:case 32:return yw(r,t);case 137:if(a[1]===80&&a[2]===78&&a[3]===71)throw new Error("PNG Image File is not a spreadsheet");break}return $v.indexOf(a[0])>-1&&a[2]<=12&&a[3]<=31?ns.to_workbook(r,t):bt(n,r,t,i)}function ww(n,e,t,r,a,i,o,s){var l=W3(t),u=s.defval,f=s.raw||!Object.prototype.hasOwnProperty.call(s,"raw"),d=!0,h=a===1?[]:{};if(a!==1)if(Object.defineProperty)try{Object.defineProperty(h,"__rowNum__",{value:t,enumerable:!1})}catch(v){h.__rowNum__=t}else h.__rowNum__=t;if(!o||n[t])for(var m=e.s.c;m<=e.e.c;++m){var _=o?n[t][m]:n[r[m]+l];if(_===void 0||_.t===void 0){if(u===void 0)continue;i[m]!=null&&(h[i[m]]=u);continue}var g=_.v;switch(_.t){case"z":if(g==null)break;continue;case"e":g=g==0?null:void 0;break;case"s":case"d":case"b":case"n":break;default:throw new Error("unrecognized type "+_.t)}if(i[m]!=null){if(g==null)if(_.t=="e"&&g===null)h[i[m]]=null;else if(u!==void 0)h[i[m]]=u;else if(f&&g===null)h[i[m]]=null;else continue;else h[i[m]]=f&&(_.t!=="n"||_.t==="n"&&s.rawNumbers!==!1)?g:te(_,g,s);g!=null&&(d=!1)}}return{row:h,isempty:d}}function kn(n,e){if(n==null||n["!ref"]==null)return[];var t={t:"n",v:0},r=0,a=1,i=[],o=0,s="",l={s:{r:0,c:0},e:{r:0,c:0}},u=e||{},f=u.range!=null?u.range:n["!ref"];switch(u.header===1?r=1:u.header==="A"?r=2:Array.isArray(u.header)?r=3:u.header==null&&(r=0),typeof f){case"string":l=l3(f);break;case"number":l=l3(n["!ref"]),l.s.r=f;break;default:l=f}r>0&&(a=0);var d=W3(l.s.r),h=[],m=[],_=0,g=0,v=Array.isArray(n),y=l.s.r,S=0,b={};v&&!n[y]&&(n[y]=[]);var w=u.skipHidden&&n["!cols"]||[],T=u.skipHidden&&n["!rows"]||[];for(S=l.s.c;S<=l.e.c;++S)if(!(w[S]||{}).hidden)switch(h[S]=C3(S),t=v?n[y][S]:n[h[S]+d],r){case 1:i[S]=S-l.s.c;break;case 2:i[S]=h[S];break;case 3:i[S]=u.header[S-l.s.c];break;default:if(t==null&&(t={w:"__EMPTY",t:"s"}),s=o=te(t,null,u),g=b[o]||0,!g)b[o]=1;else{do s=o+"_"+g++;while(b[s]);b[o]=g,b[s]=1}i[S]=s}for(y=l.s.r+a;y<=l.e.r;++y)if(!(T[y]||{}).hidden){var A=ww(n,l,y,h,r,i,v,u);(A.isempty===!1||(r===1?u.blankrows!==!1:u.blankrows))&&(m[_++]=A.row)}return m.length=_,m}var xs=/"/g;function Aw(n,e,t,r,a,i,o,s){for(var l=!0,u=[],f="",d=W3(t),h=e.s.c;h<=e.e.c;++h)if(r[h]){var m=s.dense?(n[t]||[])[h]:n[r[h]+d];if(m==null)f="";else if(m.v!=null){l=!1,f=""+(s.rawNumbers&&m.t=="n"?m.v:te(m,null,s));for(var _=0,g=0;_!==f.length;++_)if((g=f.charCodeAt(_))===a||g===i||g===34||s.forceQuotes){f='"'+f.replace(xs,'""')+'"';break}f=="ID"&&(f='"ID"')}else m.f!=null&&!m.F?(l=!1,f="="+m.f,f.indexOf(",")>=0&&(f='"'+f.replace(xs,'""')+'"')):f="";u.push(f)}return s.blankrows===!1&&l?null:u.join(o)}function gf(n,e){var t=[],r=e==null?{}:e;if(n==null||n["!ref"]==null)return"";var a=l3(n["!ref"]),i=r.FS!==void 0?r.FS:",",o=i.charCodeAt(0),s=r.RS!==void 0?r.RS:`
`,l=s.charCodeAt(0),u=new RegExp((i=="|"?"\\|":i)+"+$"),f="",d=[];r.dense=Array.isArray(n);for(var h=r.skipHidden&&n["!cols"]||[],m=r.skipHidden&&n["!rows"]||[],_=a.s.c;_<=a.e.c;++_)(h[_]||{}).hidden||(d[_]=C3(_));for(var g=0,v=a.s.r;v<=a.e.r;++v)(m[v]||{}).hidden||(f=Aw(n,a,v,d,o,l,i,r),f!=null&&(r.strip&&(f=f.replace(u,"")),(f||r.blankrows!==!1)&&t.push((g++?s:"")+f)));return delete r.dense,t.join("")}function Tw(n,e){e||(e={}),e.FS="	",e.RS=`
      38, ${c(a)-11} 41, ${c(a)-8} 73, ${c(a)-8} 75, ${c(a)-10} 81, ${c(a)-10}
      85, ${c(a)-6} ${c(r)-85}, ${c(a)-6} ${c(r)-81}, ${c(a)-10} ${c(r)-75}, ${c(a)-10}
      ${c(r)-73}, ${c(a)-8} ${c(r)-41}, ${c(a)-8} ${c(r)-38}, ${c(a)-11}
      ${c(r)-24}, ${c(a)-11} ${c(r)-13}, ${c(a)-21} ${c(r)-13}, ${c(a)-24}
      ${c(r)-10}, ${c(a)-27} ${c(r)-10}, 27 ${c(r)-13}, 25 ${c(r)-13}, 21
      ${c(r)-24}, 11 ${c(r)-38}, 11 ${c(r)-41}, 8 ${c(r)-73}, 8 ${c(r)-75}, 10
      ${c(r)-81}, 10 ${c(r)-85}, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`},null,8,Uk)],8,zk)),(H(),h1(L1,null,u2(t,f=>i1("svg",{width:c(r),height:c(a),key:f,class:J8(`border-item ${f}`)},[i1("polygon",{fill:c(i)[0],points:"6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"},[i1("animate",{attributeName:"fill",values:`${c(i)[0]};${c(i)[1]};${c(i)[0]}`,dur:`${c(o)}s`,begin:"0s",repeatCount:"indefinite"},null,8,Gk)],8,Vk),i1("polygon",{fill:c(i)[1],points:"27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"},[i1("animate",{attributeName:"fill",values:`${c(i)[1]};${c(i)[0]};${c(i)[1]}`,dur:`${c(o)}s`,begin:"0s",repeatCount:"indefinite"},null,8,jk)],8,Wk),i1("polygon",{fill:c(i)[0],points:"9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"},[i1("animate",{attributeName:"fill",values:`${c(i)[0]};${c(i)[1]};transparent`,dur:`${c(o)+1}s`,begin:"0s",repeatCount:"indefinite"},null,8,$k)],8,Hk)],10,Bk)),64))]))}});const Xk=w2(Yk,[["__scopeId","data-v-3b5570ca"]]),Jk=Object.freeze(Object.defineProperty({__proto__:null,default:Xk},Symbol.toStringTag,{value:"Module"})),Zk={class:"go-border-box"},qk=["width","height"],Qk=["fill","stroke","d"],Kk=["stroke"],eR=["stroke"],tR=["stroke","d"],nR=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{colors:a,backgroundColor:i}=U1(e.chartConfig.option);return(o,s)=>(H(),h1("div",Zk,[(H(),h1("svg",{width:c(t),height:c(r)},[i1("path",{fill:c(i),stroke:c(a)[0],d:`
          M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
          L ${c(t)-20} 10 L ${c(t)-5} 25
          L ${c(t)-5} ${c(r)-5} L 20 ${c(r)-5}
          L 5 ${c(r)-20} L 5 20
        `},null,8,Qk),i1("path",{fill:"transparent","stroke-w":"3","stroke-linecap":"round","stroke-dasharray":"10, 5",stroke:c(a)[0],d:"M 16 9 L 61 9"},null,8,Kk),i1("path",{fill:"transparent",stroke:c(a)[1],d:"M 5 20 L 5 10 L 12 3  L 60 3 L 68 10"},null,8,eR),i1("path",{fill:"transparent",stroke:c(a)[1],d:`M ${c(t)-5} ${c(r)-30} L ${c(t)-5} ${c(r)-5} L ${c(t)-30} ${c(r)-5}`},null,8,tR)],8,qk))]))}});const rR=w2(nR,[["__scopeId","data-v-b0e8cacd"]]),aR=Object.freeze(Object.defineProperty({__proto__:null,default:rR},Symbol.toStringTag,{value:"Module"})),Y7=n=>(oe("data-v-26e5636f"),n=n(),se(),n),iR={class:"go-border-box"},oR=["width","height"],sR=Y7(()=>i1("feMorphology",{operator:"dilate",radius:"1",in:"SourceAlpha",result:"thicken"},null,-1)),lR=Y7(()=>i1("feGaussianBlur",{in:"thicken",stdDeviation:"2",result:"blurred"},null,-1)),cR=["flood-color"],uR=["values"],fR=Y7(()=>i1("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlowColored"},null,-1)),dR=Y7(()=>i1("feMerge",null,[i1("feMergeNode",{in:"softGlowColored"}),i1("feMergeNode",{in:"SourceGraphic"})],-1)),hR=["fill","stroke","d"],pR=["filter","stroke"],mR=["filter","stroke","d"],gR=["filter","stroke","d"],vR=["filter","stroke","d"],_R=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,t=`border-box-03-filterId-${q4()}`,{w:r,h:a}=U1(e.chartConfig.attr),{colors:i,backgroundColor:o}=U1(e.chartConfig.option);return(s,l)=>(H(),h1("div",iR,[(H(),h1("svg",{width:c(r),height:c(a)},[i1("defs",null,[i1("filter",{id:t,height:"150%",width:"150%",x:"-25%",y:"-25%"},[sR,lR,i1("feFlood",{"flood-color":c(d6)(c(i)[1],.7),result:"glowColor"},[i1("animate",{attributeName:"flood-color",values:`
                ${c(d6)(c(i)[1],.7)};
                ${c(d6)(c(i)[1],.3)};
                ${c(d6)(c(i)[1],.7)};
              `,dur:"3s",begin:"0s",repeatCount:"indefinite"},null,8,uR)],8,cR),fR,dR])]),c(r)&&c(a)?(H(),h1("path",{key:0,fill:c(o),"stroke-width":"2",stroke:c(i)[0],d:`
          M15 5 L ${c(r)-15} 5 Q ${c(r)-5} 5, ${c(r)-5} 15
          L ${c(r)-5} ${c(a)-15} Q ${c(r)-5} ${c(a)-5}, ${c(r)-15} ${c(a)-5}
          L 15, ${c(a)-5} Q 5 ${c(a)-5} 5 ${c(a)-15} L 5 15
          Q 5 5 15 5
        `},null,8,hR)):M2("",!0),i1("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${t})`,stroke:c(i)[1],d:"M 20 5 L 15 5 Q 5 5 5 15 L 5 20"},null,8,pR),i1("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${t})`,stroke:c(i)[1],d:`M ${c(r)-20} 5 L ${c(r)-15} 5 Q ${c(r)-5} 5 ${c(r)-5} 15 L ${c(r)-5} 20`},null,8,mR),i1("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${t})`,stroke:c(i)[1],d:`
          M ${c(r)-20} ${c(a)-5} L ${c(r)-15} ${c(a)-5}
          Q ${c(r)-5} ${c(a)-5} ${c(r)-5} ${c(a)-15}
          L ${c(r)-5} ${c(a)-20}
        `},null,8,gR),i1("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${t})`,stroke:c(i)[1],d:`
          M 20 ${c(a)-5} L 15 ${c(a)-5}
          Q 5 ${c(a)-5} 5 ${c(a)-15}
          L 5 ${c(a)-20}
        `},null,8,vR)],8,oR))]))}});const xR=w2(_R,[["__scopeId","data-v-26e5636f"]]),yR=Object.freeze(Object.defineProperty({__proto__:null,default:xR},Symbol.toStringTag,{value:"Module"})),P4=n=>(oe("data-v-793b894f"),n=n(),se(),n),bR={class:"go-border-box"},SR=["width","height"],wR=P4(()=>i1("feMorphology",{operator:"dilate",radius:"2",in:"SourceAlpha",result:"thicken"},null,-1)),AR=P4(()=>i1("feGaussianBlur",{in:"thicken",stdDeviation:"3",result:"blurred"},null,-1)),TR=["flood-color"],ER=P4(()=>i1("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlowColored"},null,-1)),CR=P4(()=>i1("feMerge",null,[i1("feMergeNode",{in:"softGlowColored"}),i1("feMergeNode",{in:"SourceGraphic"})],-1)),MR=["fill","points"],DR=["fill","stroke","filter","points"],kR=["stroke","points"],RR=["stroke","points"],IR=["stroke","fill","filter","points"],OR=["filter","fill","points"],LR=P4(()=>i1("animate",{attributeName:"opacity",values:"1;0.7;1",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),FR=[LR],PR=["filter","fill","points"],NR=P4(()=>i1("animate",{attributeName:"opacity",values:"0.7;0.4;0.7",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),zR=[NR],UR=["filter","fill","points"],BR=P4(()=>i1("animate",{attributeName:"opacity",values:"0.5;0.2;0.5",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),VR=[BR],GR=["filter","fill","points"],WR=P4(()=>i1("animate",{attributeName:"opacity",values:"1;0.7;1",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),jR=[WR],HR=["filter","fill","points"],$R=P4(()=>i1("animate",{attributeName:"opacity",values:"0.7;0.4;0.7",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),YR=[$R],XR=["filter","fill","points"],JR=P4(()=>i1("animate",{attributeName:"opacity",values:"0.5;0.2;0.5",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),ZR=[JR],qR=["x","y","fill","font-size"],QR=["fill","filter","points"],KR=["fill","filter","points"],eI=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,t=`border-box-04-filterId-${q4()}`,{w:r,h:a}=U1(e.chartConfig.attr),{colors:i,borderTitle:o,borderTitleColor:s,borderTitleSize:l,borderTitleHeight:u,borderTitleWidth:f,backgroundColor:d}=U1(e.chartConfig.option);return(h,m)=>(H(),h1("div",bR,[(H(),h1("svg",{width:c(r),height:c(a)},[i1("defs",null,[i1("filter",{id:t,height:"150%",width:"150%",x:"-25%",y:"-25%"},[wR,AR,i1("feFlood",{"flood-color":c(i)[1],result:"glowColor"},null,8,TR),ER,CR])]),i1("polygon",{fill:c(d),points:`
        20, 32 ${c(r)*.5-c(f)/2}, 32 ${c(r)*.5-c(f)/2+20}, 53
        ${c(r)*.5+c(f)/2-20}, 53 ${c(r)*.5+c(f)/2}, 32
        ${c(r)-20}, 32 ${c(r)-8}, 48 ${c(r)-8}, ${c(a)-25} ${c(r)-20}, ${c(a)-8}
        20, ${c(a)-8} 8, ${c(a)-25} 8, 50
      `},null,8,MR),i1("polyline",{fill:c(d),stroke:c(i)[0],filter:`url(#${t})`,points:`
          ${(c(r)-c(f))/2}, 30
          20, 30 7, 50 7, ${50+(c(a)-167)/2}
          13, ${55+(c(a)-167)/2} 13, ${135+(c(a)-167)/2}
          7, ${140+(c(a)-167)/2} 7, ${c(a)-27}
          20, ${c(a)-7} ${c(r)-20}, ${c(a)-7} ${c(r)-7}, ${c(a)-27}
          ${c(r)-7}, ${140+(c(a)-167)/2} ${c(r)-13}, ${135+(c(a)-167)/2}
          ${c(r)-13}, ${55+(c(a)-167)/2} ${c(r)-7}, ${50+(c(a)-167)/2}
          ${c(r)-7}, 50 ${c(r)-20}, 30 ${(c(r)+c(f))/2}, 30
          ${(c(r)+c(f))/2-20}, 7 ${(c(r)-c(f))/2+20}, 7
          ${(c(r)-c(f))/2}, 30 ${(c(r)-c(f))/2+20}, 52
          ${(c(r)+c(f))/2-20}, 52 ${(c(r)+c(f))/2}, 30
        `},null,8,DR),i1("polygon",{stroke:c(i)[0],fill:"transparent",points:`
          ${(c(r)+c(f))/2-5}, 30 ${(c(r)+c(f))/2-21}, 11
          ${(c(r)+c(f))/2-27}, 11 ${(c(r)+c(f))/2-8}, 34
        `},null,8,kR),i1("polygon",{stroke:c(i)[0],fill:"transparent",points:`
          ${(c(r)-c(f))/2+5}, 30 ${(c(r)-c(f))/2+22}, 49
          ${(c(r)-c(f))/2+28}, 49 ${(c(r)-c(f))/2+8}, 26
        `},null,8,RR),i1("polygon",{stroke:c(i)[0],fill:c(i)[1],filter:`url(#${t})`,points:`
          ${(c(r)+c(f))/2-11}, 37 ${(c(r)+c(f))/2-32}, 11
          ${(c(r)-c(f))/2+23}, 11 ${(c(r)-c(f))/2+11}, 23
          ${(c(r)-c(f))/2+33}, 49 ${(c(r)+c(f))/2-22}, 49
        `},null,8,IR),i1("polygon",{filter:`url(#${t})`,fill:c(i)[0],opacity:"1",points:`
          ${(c(r)-c(f))/2-10}, 37 ${(c(r)-c(f))/2-31}, 37
          ${(c(r)-c(f))/2-25}, 46 ${(c(r)-c(f))/2-4}, 46
        `},FR,8,OR),i1("polygon",{filter:`url(#${t})`,fill:c(i)[0],opacity:"0.7",points:`
          ${(c(r)-c(f))/2-40}, 37 ${(c(r)-c(f))/2-61}, 37
          ${(c(r)-c(f))/2-55}, 46 ${(c(r)-c(f))/2-34}, 46
        `},zR,8,PR),i1("polygon",{filter:`url(#${t})`,fill:c(i)[0],opacity:"0.5",points:`
          ${(c(r)-c(f))/2-70}, 37 ${(c(r)-c(f))/2-91}, 37
          ${(c(r)-c(f))/2-85}, 46 ${(c(r)-c(f))/2-64}, 46
        `},VR,8,UR),i1("polygon",{filter:`url(#${t})`,fill:c(i)[0],opacity:"1",points:`
          ${(c(r)+c(f))/2+30}, 37 ${(c(r)+c(f))/2+9}, 37
          ${(c(r)+c(f))/2+3}, 46 ${(c(r)+c(f))/2+24}, 46
        `},jR,8,GR),i1("polygon",{filter:`url(#${t})`,fill:c(i)[0],opacity:"0.7",points:`
          ${(c(r)+c(f))/2+60}, 37 ${(c(r)+c(f))/2+39}, 37
          ${(c(r)+c(f))/2+33}, 46 ${(c(r)+c(f))/2+54}, 46
        `},YR,8,HR),i1("polygon",{filter:`url(#${t})`,fill:c(i)[0],opacity:"0.5",points:`
          ${(c(r)+c(f))/2+90}, 37 ${(c(r)+c(f))/2+69}, 37
          ${(c(r)+c(f))/2+63}, 46 ${(c(r)+c(f))/2+84}, 46
        `},ZR,8,XR),i1("text",{x:`${c(r)/2}`,y:c(u),fill:c(s),"font-size":c(l),"text-anchor":"middle","dominant-baseline":"middle"},V2(c(o)),9,qR),i1("polygon",{fill:c(i)[0],filter:`url(#${t})`,points:`
          7, ${53+(c(a)-167)/2} 11, ${57+(c(a)-167)/2}
          11, ${133+(c(a)-167)/2} 7, ${137+(c(a)-167)/2}
        `},null,8,QR),i1("polygon",{fill:c(i)[0],filter:`url(#${t})`,points:`
          ${c(r)-7}, ${53+(c(a)-167)/2} ${c(r)-11}, ${57+(c(a)-167)/2}
          ${c(r)-11}, ${133+(c(a)-167)/2} ${c(r)-7}, ${137+(c(a)-167)/2}
        `},null,8,KR)],8,SR))]))}});const tI=w2(eI,[["__scopeId","data-v-793b894f"]]),nI=Object.freeze(Object.defineProperty({__proto__:null,default:tI},Symbol.toStringTag,{value:"Module"})),rI=["width","height"],aI=["fill","points"],iI=["width","height"],oI=["fill"],sI=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,t=["left-top","right-top","left-bottom","right-bottom"],{w:r,h:a}=U1(e.chartConfig.attr),{colors:i,backgroundColor:o}=U1(e.chartConfig.option);return(s,l)=>(H(),h1("div",{class:"go-border-box",style:A2(`box-shadow: inset 0 0 25px 3px ${c(i)[0]}`)},[(H(),h1("svg",{width:c(r),height:c(a)},[i1("polygon",{fill:c(o),points:`
        4, 0 ${c(r)-4}, 0 ${c(r)}, 4 ${c(r)}, ${c(a)-4} ${c(r)-4}, ${c(a)}
        4, ${c(a)} 0, ${c(a)-4} 0, 4
      `},null,8,aI)],8,rI)),(H(),h1(L1,null,u2(t,u=>i1("svg",{width:c(r),height:c(a),key:u,class:J8(`border-item ${u}`)},[i1("polygon",{fill:c(i)[1],points:"40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"},null,8,oI)],10,iI)),64))],4))}});const lI=w2(sI,[["__scopeId","data-v-3bcfff71"]]),cI=Object.freeze(Object.defineProperty({__proto__:null,default:lI},Symbol.toStringTag,{value:"Module"})),uI=["width","height"],fI=["stroke"],dI=["stroke","points"],hI=["stroke","points"],pI=["stroke","points"],mI=["stroke"],gI=["stroke","points"],vI=["stroke","points"],_I=["stroke","points"],xI=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{colors:a,backgroundColor:i}=U1(e.chartConfig.option);return(o,s)=>(H(),h1("div",{class:"go-border-box",style:A2(`
      box-shadow: inset 0 0 40px ${c(a)[0]}; 
      border: 1px solid ${c(a)[1]};
      background-color: ${c(i)};
    `)},[(H(),h1("svg",{width:c(t),height:c(r)},[i1("polyline",{class:"go-border-line-w-2",stroke:c(a)[0],points:"0, 25 0, 0 25, 0"},null,8,fI),i1("polyline",{class:"go-border-line-w-2",stroke:c(a)[0],points:`${c(t)-25}, 0 ${c(t)}, 0 ${c(t)}, 25`},null,8,dI),i1("polyline",{class:"go-border-line-w-2",stroke:c(a)[0],points:`${c(t)-25}, ${c(r)} ${c(t)}, ${c(r)} ${c(t)}, ${c(r)-25}`},null,8,hI),i1("polyline",{class:"go-border-line-w-2",stroke:c(a)[0],points:`0, ${c(r)-25} 0, ${c(r)} 25, ${c(r)}`},null,8,pI),i1("polyline",{class:"go-border-line-w-5",stroke:c(a)[1],points:"0, 10 0, 0 10, 0"},null,8,mI),i1("polyline",{class:"go-border-line-w-5",stroke:c(a)[1],points:`${c(t)-10}, 0 ${c(t)}, 0 ${c(t)}, 10`},null,8,gI),i1("polyline",{class:"go-border-line-w-5",stroke:c(a)[1],points:`${c(t)-10}, ${c(r)} ${c(t)}, ${c(r)} ${c(t)}, ${c(r)-10}`},null,8,vI),i1("polyline",{class:"go-border-line-w-5",stroke:c(a)[1],points:`0, ${c(r)-10} 0, ${c(r)} 10, ${c(r)}`},null,8,_I)],8,uI))],4))}});const yI=w2(xI,[["__scopeId","data-v-04cd6141"]]),bI=Object.freeze(Object.defineProperty({__proto__:null,default:yI},Symbol.toStringTag,{value:"Module"})),rd=n=>(oe("data-v-0f224815"),n=n(),se(),n),SI={class:"go-border-box"},wI=["width","height"],AI=rd(()=>i1("animate",{attributeName:"x1",values:"0%;100%;0%",dur:"10s",begin:"0s",repeatCount:"indefinite"},null,-1)),TI=rd(()=>i1("animate",{attributeName:"x2",values:"100%;0%;100%",dur:"10s",begin:"0s",repeatCount:"indefinite"},null,-1)),EI=["stop-color"],CI=["values"],MI=["stop-color"],DI=["values"],kI=["points"],RI=["points"],II=["points"],OI=["points"],LI=["points"],FI=["points"],PI=["points"],NI=["points"],zI=["points"],UI=["fill","points"],BI=["width","height","fill","mask"],VI=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,t=`border-box-07-filter-${q4()}`,r=`border-box-07-mask-${q4()}`,{w:a,h:i}=U1(e.chartConfig.attr),{colors:o,backgroundColor:s}=U1(e.chartConfig.option);return(l,u)=>(H(),h1("div",SI,[(H(),h1("svg",{width:c(a),height:c(i)},[i1("defs",null,[i1("linearGradient",{id:t,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[AI,TI,i1("stop",{offset:"0%","stop-color":c(o)[0]},[i1("animate",{attributeName:"stop-color",values:`${c(o)[0]};${c(o)[1]};${c(o)[0]}`,dur:"10s",begin:"0s",repeatCount:"indefinite"},null,8,CI)],8,EI),i1("stop",{offset:"100%","stop-color":c(o)[1]},[i1("animate",{attributeName:"stop-color",values:`${c(o)[1]};${c(o)[0]};${c(o)[1]}`,dur:"10s",begin:"0s",repeatCount:"indefinite"},null,8,DI)],8,MI)]),i1("mask",{id:r},[i1("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`8, ${c(i)*.4} 8, 3, ${c(a)*.4+7}, 3`},null,8,kI),i1("polyline",{fill:"#fff",points:`8, ${c(i)*.15} 8, 3, ${c(a)*.1+7}, 3
              ${c(a)*.1}, 8 14, 8 14, ${c(i)*.15-7}
            `},null,8,RI),i1("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`${c(a)*.5}, 3 ${c(a)-3}, 3, ${c(a)-3}, ${c(i)*.25}`},null,8,II),i1("polyline",{fill:"#fff",points:`
              ${c(a)*.52}, 3 ${c(a)*.58}, 3
              ${c(a)*.58-7}, 9 ${c(a)*.52+7}, 9
            `},null,8,OI),i1("polyline",{fill:"#fff",points:`
              ${c(a)*.9}, 3 ${c(a)-3}, 3 ${c(a)-3}, ${c(i)*.1}
              ${c(a)-9}, ${c(i)*.1-7} ${c(a)-9}, 9 ${c(a)*.9+7}, 9
            `},null,8,LI),i1("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`8, ${c(i)*.5} 8, ${c(i)-3} ${c(a)*.3+7}, ${c(i)-3}`},null,8,FI),i1("polyline",{fill:"#fff",points:`
              8, ${c(i)*.55} 8, ${c(i)*.7}
              2, ${c(i)*.7-7} 2, ${c(i)*.55+7}
            `},null,8,PI),i1("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`${c(a)*.35}, ${c(i)-3} ${c(a)-3}, ${c(i)-3} ${c(a)-3}, ${c(i)*.35}`},null,8,NI),i1("polyline",{fill:"#fff",points:`
              ${c(a)*.92}, ${c(i)-3} ${c(a)-3}, ${c(i)-3} ${c(a)-3}, ${c(i)*.8}
              ${c(a)-9}, ${c(i)*.8+7} ${c(a)-9}, ${c(i)-9} ${c(a)*.92+7}, ${c(i)-9}
            `},null,8,zI)])]),i1("polygon",{fill:c(s),points:`
        15, 9 ${c(a)*.1+1}, 9 ${c(a)*.1+4}, 6 ${c(a)*.52+2}, 6
        ${c(a)*.52+6}, 10 ${c(a)*.58-7}, 10 ${c(a)*.58-2}, 6
        ${c(a)*.9+2}, 6 ${c(a)*.9+6}, 10 ${c(a)-10}, 10 ${c(a)-10}, ${c(i)*.1-6}
        ${c(a)-6}, ${c(i)*.1-1} ${c(a)-6}, ${c(i)*.8+1} ${c(a)-10}, ${c(i)*.8+6}
        ${c(a)-10}, ${c(i)-10} ${c(a)*.92+7}, ${c(i)-10}  ${c(a)*.92+2}, ${c(i)-6}
        11, ${c(i)-6} 11, ${c(i)*.15-2} 15, ${c(i)*.15-7}
      `},null,8,UI),i1("rect",{x:"0",y:"0",width:c(a),height:c(i),fill:`url(#${t})`,mask:`url(#${r})`},null,8,BI)],8,wI))]))}});const GI=w2(VI,[["__scopeId","data-v-0f224815"]]),WI=Object.freeze(Object.defineProperty({__proto__:null,default:GI},Symbol.toStringTag,{value:"Module"})),ad=n=>(oe("data-v-403f3edb"),n=n(),se(),n),jI={class:"go-border-box"},HI=["width","height"],$I=["d"],YI=ad(()=>i1("stop",{offset:"0%","stop-color":"#fff","stop-opacity":"1"},null,-1)),XI=ad(()=>i1("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"},null,-1)),JI=[YI,XI],ZI=["fill"],qI=["dur","path"],QI=["fill","points"],KI=["stroke","xlink:href"],eO=["stroke","xlink:href","mask"],tO=["from","to","dur"],nO=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,t=`border-box-08-path-${q4()}`,r=`border-box-08-gradient-${q4()}`,a=`border-box-08-mask-${q4()}`,{w:i,h:o}=U1(e.chartConfig.attr),{colors:s,dur:l,backgroundColor:u,reverse:f}=U1(e.chartConfig.option),d=d2(()=>(i.value+o.value-5)*2),h=d2(()=>f.value?`M 2.5, 2.5 L 2.5, ${o.value-2.5} L ${i.value-2.5}, ${o.value-2.5} L ${i.value-2.5}, 2.5 L 2.5, 2.5`:`M2.5, 2.5 L${i.value-2.5}, 2.5 L${i.value-2.5}, ${o.value-2.5} L2.5, ${o.value-2.5} L2.5, 2.5`);return(m,_)=>(H(),h1("div",jI,[(H(),h1("svg",{width:c(i),height:c(o)},[i1("defs",null,[i1("path",{id:t,d:h.value,fill:"transparent"},null,8,$I),i1("radialGradient",{id:r,cx:"50%",cy:"50%",r:"50%"},JI),i1("mask",{id:a},[i1("circle",{cx:"0",cy:"0",r:"150",fill:`url(#${r})`},[i1("animateMotion",{dur:`${c(l)}s`,path:h.value,rotate:"auto",repeatCount:"indefinite"},null,8,qI)],8,ZI)])]),i1("polygon",{fill:c(u),points:`5, 5 ${c(i)-5}, 5 ${c(i)-5} ${c(o)-5} 5, ${c(o)-5}`},null,8,QI),i1("use",{stroke:c(s)[0],"stroke-width":"1","xlink:href":`#${t}`},null,8,KI),i1("use",{stroke:c(s)[1],"stroke-width":"3","xlink:href":`#${t}`,mask:`url(#${a})`},[i1("animate",{attributeName:"stroke-dasharray",from:`0, ${d.value}`,to:`${d.value}, 0`,dur:`${c(l)}s`,repeatCount:"indefinite"},null,8,tO)],8,eO)],8,HI))]))}});const rO=w2(nO,[["__scopeId","data-v-403f3edb"]]),aO=Object.freeze(Object.defineProperty({__proto__:null,default:rO},Symbol.toStringTag,{value:"Module"})),iO={class:"go-border-box"},oO=["width","height"],sO=["fill","points"],lO=["fill"],cO=["fill","cx"],uO=["fill","cx","cy"],fO=["fill","cy"],dO=["stroke","points"],hO=["stroke","points"],pO=["stroke","points"],mO=["stroke","points"],gO=["stroke"],vO=["stroke"],_O=["stroke","points"],xO=["stroke","points"],yO=["stroke","points"],bO=["stroke","points"],SO=["stroke","points"],wO=["stroke","points"],AO=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{colors:a,backgroundColor:i}=U1(e.chartConfig.option);return(o,s)=>(H(),h1("div",iO,[(H(),h1("svg",{width:c(t),height:c(r)},[i1("polygon",{fill:c(i),points:` 9, 7 ${c(t)-9}, 7 ${c(t)-9}, ${c(r)-7} 9, ${c(r)-7}`},null,8,sO),i1("circle",{fill:c(a)[1],cx:"5",cy:"5",r:"2"},null,8,lO),i1("circle",{fill:c(a)[1],cx:c(t)-5,cy:"5",r:"2"},null,8,cO),i1("circle",{fill:c(a)[1],cx:c(t)-5,cy:c(r)-5,r:"2"},null,8,uO),i1("circle",{fill:c(a)[1],cx:"5",cy:c(r)-5,r:"2"},null,8,fO),i1("polyline",{stroke:c(a)[0],points:`10, 4 ${c(t)-10}, 4`},null,8,dO),i1("polyline",{stroke:c(a)[0],points:`10, ${c(r)-4} ${c(t)-10}, ${c(r)-4}`},null,8,hO),i1("polyline",{stroke:c(a)[0],points:`5, 70 5, ${c(r)-70}`},null,8,pO),i1("polyline",{stroke:c(a)[0],points:`${c(t)-5}, 70 ${c(t)-5}, ${c(r)-70}`},null,8,mO),i1("polyline",{stroke:c(a)[0],points:"3, 10, 3, 50"},null,8,gO),i1("polyline",{stroke:c(a)[0],points:"7, 30 7, 80"},null,8,vO),i1("polyline",{stroke:c(a)[0],points:`${c(t)-3}, 10 ${c(t)-3}, 50`},null,8,_O),i1("polyline",{stroke:c(a)[0],points:`${c(t)-7}, 30 ${c(t)-7}, 80`},null,8,xO),i1("polyline",{stroke:c(a)[0],points:`3, ${c(r)-10} 3, ${c(r)-50}`},null,8,yO),i1("polyline",{stroke:c(a)[0],points:`7, ${c(r)-30} 7, ${c(r)-80}`},null,8,bO),i1("polyline",{stroke:c(a)[0],points:`${c(t)-3}, ${c(r)-10} ${c(t)-3}, ${c(r)-50}`},null,8,SO),i1("polyline",{stroke:c(a)[0],points:`${c(t)-7}, ${c(r)-30} ${c(t)-7}, ${c(r)-80}`},null,8,wO)],8,oO))]))}});const TO=w2(AO,[["__scopeId","data-v-f624cc05"]]),EO=Object.freeze(Object.defineProperty({__proto__:null,default:TO},Symbol.toStringTag,{value:"Module"})),CO={class:"go-border-box"},MO=["width","height"],DO=["fill","points"],kO=["stroke","points"],RO=["stroke","points"],IO=["stroke","points"],OO=["stroke"],LO=["stroke"],FO=["stroke"],PO=["stroke"],NO=["stroke"],zO=["stroke","points"],UO=["stroke","points"],BO=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{colors:a,backgroundColor:i}=U1(e.chartConfig.option);return(o,s)=>(H(),h1("div",CO,[(H(),h1("svg",{width:c(t),height:c(r)},[i1("polygon",{fill:c(i),points:`
        ${c(t)-15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
        16, 42 16, ${c(r)-32} 41, ${c(r)-7} ${c(t)-15}, ${c(r)-7}
      `},null,8,DO),i1("polyline",{class:"go-border-line-1",stroke:c(a)[0],points:`145, ${c(r)-5} 40, ${c(r)-5} 10, ${c(r)-35}
          10, 40 40, 5 150, 5 170, 20 ${c(t)-15}, 20`},null,8,kO),i1("polyline",{stroke:c(a)[1],class:"go-border-line-2",points:`245, ${c(r)-1} 36, ${c(r)-1} 14, ${c(r)-23}
          14, ${c(r)-100}`},null,8,RO),i1("polyline",{class:"go-border-line-3",stroke:c(a)[0],points:`7, ${c(r)-40} 7, ${c(r)-75}`},null,8,IO),i1("polyline",{class:"go-border-line-4",stroke:c(a)[0],points:"28, 24 13, 41 13, 64"},null,8,OO),i1("polyline",{class:"go-border-line-5",stroke:c(a)[0],points:"5, 45 5, 140"},null,8,LO),i1("polyline",{class:"go-border-line-6",stroke:c(a)[1],points:"14, 75 14, 180"},null,8,FO),i1("polyline",{class:"go-border-line-7",stroke:c(a)[1],points:"55, 11 147, 11 167, 26 250, 26"},null,8,PO),i1("polyline",{class:"go-border-line-8",stroke:c(a)[1],points:"158, 5 173, 16"},null,8,NO),i1("polyline",{class:"go-border-line-9",stroke:c(a)[0],points:`200, 17 ${c(t)-10}, 17`},null,8,zO),i1("polyline",{class:"go-border-line-10",stroke:c(a)[1],points:`385, 17 ${c(t)-10}, 17`},null,8,UO)],8,MO))]))}});const VO=w2(BO,[["__scopeId","data-v-d292c6e9"]]),GO=Object.freeze(Object.defineProperty({__proto__:null,default:VO},Symbol.toStringTag,{value:"Module"})),WO={class:"go-border-box"},jO=["width","height"],HO=["fill","points"],$O=["stroke","points"],YO=["stroke","points"],XO=["stroke","points"],JO=["stroke","points"],ZO=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{colors:a,backgroundColor:i}=U1(e.chartConfig.option);return(o,s)=>(H(),h1("div",WO,[(H(),h1("svg",{class:"bv-border-svg-container",width:c(t),height:c(r)},[i1("polygon",{fill:c(i),points:`
        23, 23 ${c(t)-24}, 23 ${c(t)-24}, ${c(r)-24} 23, ${c(r)-24}
      `},null,8,HO),i1("polyline",{class:"go-border-line-1",stroke:c(a)[0],points:`4, 4 ${c(t)-22} ,4 ${c(t)-22}, ${c(r)-22} 4, ${c(r)-22} 4, 4`},null,8,$O),i1("polyline",{class:"go-border-line-3",stroke:c(a)[1],points:`10, 10 ${c(t)-16}, 10 ${c(t)-16}, ${c(r)-16} 10, ${c(r)-16} 10, 10`},null,8,YO),i1("polyline",{class:"go-border-line-3",stroke:c(a)[1],points:`16, 16 ${c(t)-10}, 16 ${c(t)-10}, ${c(r)-10} 16, ${c(r)-10} 16, 16`},null,8,XO),i1("polyline",{class:"go-border-line-3",stroke:c(a)[1],points:`22, 22 ${c(t)-4}, 22 ${c(t)-4}, ${c(r)-4} 22, ${c(r)-4} 22, 22`},null,8,JO)],8,jO))]))}});const qO=w2(ZO,[["__scopeId","data-v-49ac5663"]]),QO=Object.freeze(Object.defineProperty({__proto__:null,default:qO},Symbol.toStringTag,{value:"Module"})),KO={class:"go-border-box"},eL=["width","height"],tL=["fill","points"],nL=["stroke","points"],rL=["stroke","points"],aL=["stroke","points"],iL=["stroke","points"],oL=["stroke","points"],sL=["stroke","points"],lL=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{colors:a,backgroundColor:i}=U1(e.chartConfig.option);return(o,s)=>(H(),h1("div",KO,[(H(),h1("svg",{width:c(t),height:c(r)},[i1("polygon",{fill:c(i),points:`
        10, 22 ${c(t)-22}, 22 ${c(t)-22}, ${c(r)-86} ${c(t)-84}, ${c(r)-24} 10, ${c(r)-24}
      `},null,8,tL),i1("polyline",{class:"bv-bb5-line-1",stroke:c(a)[0],points:`8, 5 ${c(t)-5}, 5 ${c(t)-5}, ${c(r)-100}
          ${c(t)-100}, ${c(r)-5} 8, ${c(r)-5} 8, 5`},null,8,nL),i1("polyline",{class:"bv-bb5-line-2",stroke:c(a)[1],points:`3, 5 ${c(t)-20}, 5 ${c(t)-20}, ${c(r)-60}
          ${c(t)-74}, ${c(r)-5} 3, ${c(r)-5} 3, 5`},null,8,rL),i1("polyline",{class:"bv-bb5-line-3",stroke:c(a)[1],points:`50, 13 ${c(t)-35}, 13`},null,8,aL),i1("polyline",{class:"bv-bb5-line-4",stroke:c(a)[1],points:`15, 20 ${c(t)-35}, 20`},null,8,iL),i1("polyline",{class:"bv-bb5-line-5",stroke:c(a)[1],points:`15, ${c(r)-20} ${c(t)-110}, ${c(r)-20}`},null,8,oL),i1("polyline",{class:"bv-bb5-line-6",stroke:c(a)[1],points:`15, ${c(r)-13} ${c(t)-110}, ${c(r)-13}`},null,8,sL)],8,eL))]))}});const cL=w2(lL,[["__scopeId","data-v-dacc16ab"]]),uL=Object.freeze(Object.defineProperty({__proto__:null,default:cL},Symbol.toStringTag,{value:"Module"})),fL={class:"go-border-box"},dL=["width","height"],hL=["fill","points"],pL=["stroke","points"],mL=["stroke","points"],gL=["fill"],vL=["fill","cx"],_L=["fill","cx","cy"],xL=["fill","cy"],yL=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{colors:a,backgroundColor:i}=U1(e.chartConfig.option);return(o,s)=>(H(),h1("div",fL,[(H(),h1("svg",{width:c(t),height:c(r)},[i1("polygon",{fill:c(i),points:`
        7, 7 ${c(t)-7}, 7 ${c(t)-7}, ${c(r)-7} 7, ${c(r)-7}
      `},null,8,hL),i1("polyline",{stroke:c(a)[0],points:`2, 2 ${c(t)-2} ,2 ${c(t)-2}, ${c(r)-2} 2, ${c(r)-2} 2, 2`},null,8,pL),i1("polyline",{stroke:c(a)[1],points:`6, 6 ${c(t)-6}, 6 ${c(t)-6}, ${c(r)-6} 6, ${c(r)-6} 6, 6`},null,8,mL),i1("circle",{fill:c(a)[0],cx:"11",cy:"11",r:"1"},null,8,gL),i1("circle",{fill:c(a)[0],cx:c(t)-11,cy:"11",r:"1"},null,8,vL),i1("circle",{fill:c(a)[0],cx:c(t)-11,cy:c(r)-11,r:"1"},null,8,_L),i1("circle",{fill:c(a)[0],cx:"11",cy:c(r)-11,r:"1"},null,8,xL)],8,dL))]))}});const bL=w2(yL,[["__scopeId","data-v-9c92a0b8"]]),SL=Object.freeze(Object.defineProperty({__proto__:null,default:bL},Symbol.toStringTag,{value:"Module"})),wL=["width","height"],AL=["x","y","width","height","fill"],TL=["to","dur"],EL=["x","y","width","height","fill"],CL=["to","dur"],ML=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{colors:a,dur:i,endWidth:o,lineHeight:s}=U1(e.chartConfig.option),l=d2(()=>0),u=d2(()=>r.value/2);return(f,d)=>(H(),h1("svg",{width:c(t),height:c(r)},[i1("rect",{x:l.value,y:u.value,width:c(t),height:c(s),fill:c(a)[0]},[i1("animate",{attributeName:"width",from:"0",to:c(t),dur:`${c(i)}s`,calcMode:"spline",keyTimes:"0;1",keySplines:".42,0,.58,1",repeatCount:"indefinite"},null,8,TL)],8,AL),i1("rect",{x:l.value,y:u.value,width:c(o),height:c(s),fill:c(a)[1]},[i1("animate",{attributeName:"x",from:"0",to:c(t),dur:`${c(i)}s`,calcMode:"spline",keyTimes:"0;1",keySplines:"0.42,0,0.58,1",repeatCount:"indefinite"},null,8,CL)],8,EL)],8,wL))}}),DL=Object.freeze(Object.defineProperty({__proto__:null,default:ML},Symbol.toStringTag,{value:"Module"})),kL=["width"],RL=["stroke","points"],IL=["stroke","points"],OL=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{colors:a,dur:i,lineHeight:o}=U1(e.chartConfig.option);return(s,l)=>(H(),h1("div",{class:"go-decorates-2",style:A2(`width:${c(t)}px; height: ${c(o)}px animation-duration:${c(i)}s`)},[(H(),h1("svg",{width:c(t),height:3},[i1("polyline",{stroke:c(a)[0],points:`0, 2.5 ${c(t)}, 2.5`},null,8,RL),i1("polyline",{stroke:c(a)[1],"stroke-width":"3","stroke-dasharray":"20, 80","stroke-dashoffset":"-30",points:`0, 2.5 ${c(t)}, 2.5`},null,8,IL)],8,kL))],4))}});const LL=w2(OL,[["__scopeId","data-v-bc35517f"]]),FL=Object.freeze(Object.defineProperty({__proto__:null,default:LL},Symbol.toStringTag,{value:"Module"})),PL={width:20,height:20},NL=["stroke"],zL=["stroke"],UL={width:20,height:20},BL=["stroke"],VL=["stroke"],GL=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{colors:a,dataset:i,textSize:o,textColor:s}=U1(e.chartConfig.option);return(l,u)=>(H(),h1("div",{class:"go-border-03",style:A2(`width: ${c(t)}px; height: ${c(r)}px`)},[(H(),h1("svg",PL,[i1("polyline",{"stroke-width":"4",fill:"transparent",stroke:c(a)[0],points:"10, 0 19, 10 10, 20"},null,8,NL),i1("polyline",{"stroke-width":"2",fill:"transparent",stroke:c(a)[1],points:"2, 0 11, 10 2, 20"},null,8,zL)])),i1("span",{style:A2(`color: ${c(s)};font-size: ${c(o)}px`)},V2(c(i)),5),(H(),h1("svg",UL,[i1("polyline",{"stroke-width":"4",fill:"transparent",stroke:c(a)[0],points:"11, 0 2, 10 11, 20"},null,8,BL),i1("polyline",{"stroke-width":"2",fill:"transparent",stroke:c(a)[1],points:"19, 0 10, 10 19, 20"},null,8,VL)]))],4))}});const WL=w2(GL,[["__scopeId","data-v-2d657cf1"]]),jL=Object.freeze(Object.defineProperty({__proto__:null,default:WL},Symbol.toStringTag,{value:"Module"})),HL={class:"go-border-04"},$L=["width","height"],YL=["stroke","points"],XL=["stroke","points"],JL=["stroke","points"],ZL=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{colors:a,reverse:i}=U1(e.chartConfig.option),o=s=>i.value?t.value-s:s;return(s,l)=>(H(),h1("div",HL,[(H(),h1("svg",{width:c(t),height:c(r)},[i1("polyline",{stroke:c(a)[0],"stroke-width":"2",fill:"transparent",points:`${o(0)}, 0 ${o(30)}, ${c(r)/2}`},null,8,YL),i1("polyline",{stroke:c(a)[0],"stroke-width":"2",fill:"transparent",points:`${o(20)}, 0 ${o(50)}, ${c(r)/2} ${o(c(t))}, ${c(r)/2}`},null,8,XL),i1("polyline",{stroke:c(a)[1],fill:"transparent","stroke-width":"3",points:`${o(0)}, ${c(r)-3}, ${o(200)}, ${c(r)-3}`},null,8,JL)],8,$L))]))}});const qL=w2(ZL,[["__scopeId","data-v-08a272d6"]]),QL=Object.freeze(Object.defineProperty({__proto__:null,default:qL},Symbol.toStringTag,{value:"Module"})),KL={class:"go-border-05"},eF=["width","height"],tF=["stroke","points"],nF=["stroke","points","stroke-dasharray"],rF=["values","dur","begin"],aF=["values","begin"],iF=["stroke","points","stroke-dasharray"],oF=["values","dur","begin"],sF=["values","begin"],lF=["stroke","points","stroke-dasharray"],cF=["values","dur","begin"],uF=["values","begin"],fF=["cy","fill"],dF=["values","begin"],hF=["cx","cy","fill"],pF=["values","begin"],mF=["values","begin"],gF=["cx","cy","fill"],vF=["values","begin"],_F=["values","begin"],xF=["cx","cy","fill"],yF=["values","begin"],bF=["values","begin"],SF=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,t=q4(),{w:r,h:a}=U1(e.chartConfig.attr),{colors:i,dur:o}=U1(e.chartConfig.option),s=`d10ani1${t}`,l=`d10ani2${t}`,u=`d10ani3${t}`,f=`d10ani4${t}`,d=`d10ani5${t}`,h=`d10ani6${t}`,m=`d10ani7${t}`;return(_,g)=>(H(),h1("div",KL,[(H(),h1("svg",{width:c(r),height:c(a)},[i1("polyline",{stroke:c(i)[1],"stroke-width":"2",points:`0, ${c(a)/2} ${c(r)}, ${c(a)/2}`},null,8,tF),i1("polyline",{stroke:c(i)[0],"stroke-width":"2",points:`5, ${c(a)/2} ${c(r)*.2-3}, ${c(a)/2}`,"stroke-dasharray":`0, ${c(r)*.2}`,fill:"freeze"},[i1("animate",{id:l,attributeName:"stroke-dasharray",values:`0, ${c(r)*.2};${c(r)*.2}, 0;`,dur:c(o),begin:`${s}.end`,fill:"freeze"},null,8,rF),i1("animate",{attributeName:"stroke-dasharray",values:`${c(r)*.2}, 0;0, ${c(r)*.2}`,dur:"0.01s",begin:`${m}.end`,fill:"freeze"},null,8,aF)],8,nF),i1("polyline",{stroke:c(i)[0],"stroke-width":"2",points:`${c(r)*.2+3}, ${c(a)/2} ${c(r)*.8-3}, ${c(a)/2}`,"stroke-dasharray":`0, ${c(r)*.6}`},[i1("animate",{id:f,attributeName:"stroke-dasharray",values:`0, ${c(r)*.6};${c(r)*.6}, 0`,dur:c(o),begin:`${u}.end + 1s`,fill:"freeze"},null,8,oF),i1("animate",{attributeName:"stroke-dasharray",values:`${c(r)*.6}, 0;0, ${c(r)*.6}`,dur:"0.01s",begin:`${m}.end`,fill:"freeze"},null,8,sF)],8,iF),i1("polyline",{stroke:c(i)[0],"stroke-width":"2",points:`${c(r)*.8+3}, ${c(a)/2} ${c(r)-5}, ${c(a)/2}`,"stroke-dasharray":`0, ${c(r)*.2}`},[i1("animate",{id:h,attributeName:"stroke-dasharray",values:`0, ${c(r)*.2};${c(r)*.2}, 0`,dur:c(o),begin:`${d}.end + 1s`,fill:"freeze"},null,8,cF),i1("animate",{attributeName:"stroke-dasharray",values:`${c(r)*.2}, 0;0, ${c(r)*.3}`,dur:"0.01s",begin:`${m}.end`,fill:"freeze"},null,8,uF)],8,lF),i1("circle",{cx:"2",cy:c(a)/2,r:"2",fill:c(i)[1]},[i1("animate",{id:s,attributeName:"fill",values:`${c(i)[1]};${c(i)[0]}`,begin:`0s;${m}.end`,dur:"0.3s",fill:"freeze"},null,8,dF)],8,fF),i1("circle",{cx:c(r)*.2,cy:c(a)/2,r:"2",fill:c(i)[1]},[i1("animate",{id:u,attributeName:"fill",values:`${c(i)[1]};${c(i)[0]}`,begin:`${l}.end`,dur:"0.3s",fill:"freeze"},null,8,pF),i1("animate",{attributeName:"fill",values:`${c(i)[1]};${c(i)[1]}`,dur:"0.01s",begin:`${m}.end`,fill:"freeze"},null,8,mF)],8,hF),i1("circle",{cx:c(r)*.8,cy:c(a)/2,r:"2",fill:c(i)[1]},[i1("animate",{id:d,attributeName:"fill",values:`${c(i)[1]};${c(i)[0]}`,begin:`${f}.end`,dur:"0.3s",fill:"freeze"},null,8,vF),i1("animate",{attributeName:"fill",values:`${c(i)[1]};${c(i)[1]}`,dur:"0.01s",begin:`${m}.end`,fill:"freeze"},null,8,_F)],8,gF),i1("circle",{cx:c(r)-2,cy:c(a)/2,r:"2",fill:c(i)[1]},[i1("animate",{id:m,attributeName:"fill",values:`${c(i)[1]};${c(i)[0]}`,begin:`${h}.end`,dur:"0.3s",fill:"freeze"},null,8,yF),i1("animate",{attributeName:"fill",values:`${c(i)[1]};${c(i)[1]}`,dur:"0.01s",begin:`${m}.end`,fill:"freeze"},null,8,bF)],8,xF)],8,eF))]))}});const wF=w2(SF,[["__scopeId","data-v-5bc9012e"]]),AF=Object.freeze(Object.defineProperty({__proto__:null,default:wF},Symbol.toStringTag,{value:"Module"})),TF=n=>(oe("data-v-e09af764"),n=n(),se(),n),EF={class:"go-border-06"},CF=["width","height"],MF=TF(()=>i1("polygon",{class:"stroke fill",points:"15.5 6.5 20.5 0.5 50.5 0.5 55.5 6.5 15.5 6.5"},null,-1)),DF=["points"],kF=["points"],RF=["points"],IF=["points"],OF=["points"],LF=["points"],FF={class:"text"},PF=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){V0(l=>({"40fa92e0":c(a)[0],"40fa92ff":c(a)[1],e9154e84:c(s),"502e16dd":c(o)+"px"}));const e=n;q4();const{w:t,h:r}=U1(e.chartConfig.attr),{colors:a,dataset:i,textSize:o,textColor:s}=U1(e.chartConfig.option);return(l,u)=>(H(),h1("div",EF,[(H(),h1("svg",{xmlns:"http://www.w3.org/2000/svg",width:c(t),height:c(r)},[MF,i1("polygon",{class:"stroke fill",points:`15.5 ${c(r)-6.5} 20.5 ${c(r)-.5} 50.5 ${c(r)-.5} 55.5 ${c(r)-6.5} 15.5 ${c(r)-6.5}`},null,8,DF),i1("polygon",{class:"stroke fill",points:`${c(t)-15.5} 6.5 ${c(t)-20.5} 0.5 ${c(t)-50.5} 0.5 ${c(t)-55.5} 6.5 ${c(t)-15.5} 6.5`},null,8,kF),i1("polygon",{class:"stroke fill",points:`${c(t)-15.5} ${c(r)-6.5} ${c(t)-20.5} ${c(r)-.5} ${c(t)-50.5} ${c(r)-.5} ${c(t)-55.5} ${c(r)-6.5} ${c(t)-15.5} ${c(r)-6.5}`},null,8,RF),i1("polygon",{class:"stroke fill",points:`15.5 6.5 0.5 ${c(r)/2} 15.5 ${c(r)-6.5} ${c(t)-15.5} ${c(r)-6.5} ${c(t)-.5} ${c(r)/2} ${c(t)-15.5} 6.5 15.5 6.5`},null,8,IF),i1("polyline",{class:"stroke fill-none",points:`20.5 14.5 8.5 ${c(r)/2} 20.5 ${c(r)-14.5}`},null,8,OF),i1("polyline",{class:"stroke fill-none",points:`${c(t)-20.5} 14.5 ${c(t)-8.5} ${c(r)/2} ${c(t)-20.5} ${c(r)-14.5}`},null,8,LF)],8,CF)),i1("span",FF,V2(c(i)),1)]))}});const NF=w2(PF,[["__scopeId","data-v-e09af764"]]),zF=Object.freeze(Object.defineProperty({__proto__:null,default:NF},Symbol.toStringTag,{value:"Module"})),UF=["width","height"],BF=["stroke-width","points","stroke"],VF=["stroke-width","points","stroke"],GF=["stroke-width","points","stroke"],WF=["stroke-width","points","stroke"],jF=["stroke-width","points","stroke"],HF=["stroke-width","points","stroke"],$F=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{lineNum:a,lineNumUp:i,lineWidth:o,backgroundCol:s,animateCol:l}=U1(e.chartConfig.option),u=(f,d)=>{const h=t.value/2,m=r.value/(i.value+a.value)-o.value/(i.value+a.value);if(f===-1&&d==="")return`0,${r.value/2} ${h},${r.value/2} ${h*2},${r.value/2}`;if(f!==-1&&d==="down")return`0,${r.value/2} ${h},${r.value/2} ${h},${r.value/2+f*m},${h*2},${r.value/2+f*m}`;if(f!==-1&&d==="up")return`0,${r.value/2} ${h},${r.value/2} ${h},${r.value/2-f*m},${h*2},${r.value/2-f*m}`};return(f,d)=>(H(),h1("svg",{width:c(t),height:c(r)},[i1("polyline",{"stroke-width":c(o),points:u(-1,""),stroke:c(s),fill:"none"},null,8,BF),i1("polyline",{"stroke-width":c(o),class:"g-dashed-line",points:u(-1,""),stroke:c(l),fill:"none"},null,8,VF),(H(!0),h1(L1,null,u2(c(a),(h,m)=>(H(),h1("polyline",{"stroke-width":c(o),key:m,points:u(m+1,"down"),stroke:c(s),fill:"none"},null,8,GF))),128)),(H(!0),h1(L1,null,u2(c(a),(h,m)=>(H(),h1("polyline",{"stroke-width":c(o),class:"g-dashed-line",key:m,points:u(m+1,"down"),stroke:c(l),fill:"none"},null,8,WF))),128)),(H(!0),h1(L1,null,u2(c(i),(h,m)=>(H(),h1("polyline",{"stroke-width":c(o),key:m,points:u(m+1,"up"),stroke:c(s),fill:"none"},null,8,jF))),128)),(H(!0),h1(L1,null,u2(c(i),(h,m)=>(H(),h1("polyline",{"stroke-width":c(o),class:"g-dashed-line",key:m,points:u(m+1,"up"),stroke:c(l),fill:"none"},null,8,HF))),128))],8,UF))}});const YF=w2($F,[["__scopeId","data-v-fd39e299"]]),XF=Object.freeze(Object.defineProperty({__proto__:null,default:YF},Symbol.toStringTag,{value:"Module"})),JF=["width","height"],ZF=i1("defs",null,[i1("filter",{id:"blurFilter",x:"-20%",y:"-20%",width:"140%",height:"140%"},[i1("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"1"})])],-1),qF=["cx","cy","r","fill"],QF=["cx","cy","r","stroke","stroke-width"],KF=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{outCircle:a,inCircle:i,outCircleColor:o,inCircleColor:s,outCircleWidth:l}=U1(e.chartConfig.option);return(u,f)=>(H(),h1("svg",{width:c(t),height:c(r)},[ZF,i1("circle",{cx:c(t)/2,cy:c(r)/2,r:c(i),fill:c(s),filter:"url(#blurFilter)"},null,8,qF),i1("circle",{cx:c(t)/2,cy:c(r)/2,r:c(a),fill:"none",stroke:c(o),"stroke-width":c(l)},null,8,QF)],8,JF))}}),eP=Object.freeze(Object.defineProperty({__proto__:null,default:KF},Symbol.toStringTag,{value:"Module"})),tP=n=>(oe("data-v-765cb1c3"),n=n(),se(),n),nP={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200"},rP=xp('<filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%" data-v-765cb1c3><feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" data-v-765cb1c3></feGaussianBlur><feOffset in="blur" dx="2.5" dy="2.5" data-v-765cb1c3></feOffset></filter><g data-v-765cb1c3><circle id="shadow" style="fill:rgba(0, 0, 0, 0.1);" cx="100" cy="100" r="87" filter="url(#innerShadow)" data-v-765cb1c3></circle><circle id="circle" class="clock-border" cx="100" cy="100" r="80" data-v-765cb1c3></circle></g>',2),aP={x1:"100",y1:"100",x2:"100",y2:"55",style:{"stroke-width":"3px"},class:"clock-line"},iP=["from","to"],oP={x1:"100",y1:"100",x2:"100",y2:"40",style:{"stroke-width":"4px"},class:"clock-line"},sP=["from","to"],lP={x1:"100",y1:"100",x2:"100",y2:"30",style:{"stroke-width":"2px"},class:"clock-line"},cP=["from","to"],uP=tP(()=>i1("circle",{id:"center",style:{fill:"#128a86",stroke:"#c1efed","stroke-width":"2px"},cx:"100",cy:"100",r:"3"},null,-1)),fP=["transform"],dP=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){V0(f=>({"020f4b75":c(i),"009a2695":c(t)+"px","76960c08":c(a),"0dd51a7e":c(r)}));const e=n;let{border:t,color:r,bgColor:a,borderColor:i}=U1(e.chartConfig.option);const o=new Date,s=360*o.getHours()/12+o.getMinutes()/2,l=360*o.getMinutes()/60,u=360*o.getSeconds()/60;return(f,d)=>(H(),h1("svg",nP,[rP,i1("g",null,[i1("line",aP,[i1("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"43200s",repeatCount:"indefinite",from:`${s} 100 100`,to:`${s+360} 100 100`},null,8,iP)]),i1("line",oP,[i1("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"3600s",repeatCount:"indefinite",from:`${l} 100 100`,to:`${l+360} 100 100`},null,8,sP)]),i1("line",lP,[i1("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"60s",repeatCount:"indefinite",from:`${u} 100 100`,to:`${u+360} 100 100`},null,8,cP)])]),uP,(H(),h1(L1,null,u2(12,h=>i1("line",{x1:"100",y1:"30",x2:"100",y2:"40",class:"clock-line",transform:`rotate(${(h+1)*360/12} 100 100)`,key:`line_${h+1}`},null,8,fP)),64))]))}});const hP=w2(dP,[["__scopeId","data-v-765cb1c3"]]),pP=Object.freeze(Object.defineProperty({__proto__:null,default:hP},Symbol.toStringTag,{value:"Module"})),mP=["data-front"],gP=["data-back"],vP=A1({__name:"index",props:{flipType:{type:String,default:()=>"down"},count:{type:[Number,String],default:0},duration:{type:Number,default:600},width:{type:Number,default:60},height:{type:Number,default:100},radius:{type:Number,default:10},frontColor:{type:String,default:"#ffffff"},backColor:{type:String,default:"#000000"},borderWidth:{type:Number,default:2}},setup(n){V0(s=>({"6c489b99":e.frontColor,"20a651fd":e.backColor,a25d42fe:`${e.radius}px`,"54dbe4cd":`${e.width}px`,"07059ed4":`${e.height}px`,"566d4ab2":`${e.height*2}px`,"4c2bf4c6":`${e.borderWidth*2}px`,f0ffacfc:`${e.duration/1e3}s`}));const e=n,t=h2(!1),r=h2(e.count||0),a=h2(e.count||0);let i=0;const o=(s,l)=>W2(this,null,function*(){if(t.value){t.value=!1,clearTimeout(i),yield Ge(),yield o(s,l);return}a.value=l,r.value=s,t.value=!0,i=setTimeout(()=>{t.value=!1,r.value=l},e.duration)});return a2(()=>e.count,(s,l)=>{o(l,s)},{immediate:!0}),(s,l)=>(H(),h1("div",{class:J8(["go-flipper",[n.flipType,{go:t.value}]])},[i1("div",{class:"digital front","data-front":r.value},null,8,mP),i1("div",{class:"digital back","data-back":a.value},null,8,gP)],2))}});const s8=w2(vP,[["__scopeId","data-v-c324e15b"]]),_P={key:0},xP={key:1},yP={key:1},bP={key:2},SP={key:3},wP={key:4},AP={key:5},TP=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){V0(U=>({"00ae8eeb":`${c(t)}px`,"0049a348":`${c(r)}px`,"391e8a10":`${c(d)}px`,"40831fcb":`${c(h)}px`,"744fbcd4":c(f)}));const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{dataset:a,useEndDate:i,endDate:o,style:s,showDay:l,flipperBgColor:u,flipperTextColor:f,flipperWidth:d,flipperHeight:h,flipperRadius:m,flipperGap:_,flipperType:g,flipperSpeed:v}=U1(e.chartConfig.option),y=h2(),S=h2(!1),b=h2(a.value*1e3),w=h2([]),T=h2([]),A=h2([]),C=h2([]),E=U=>{const Z=Math.max(U.toString().length,2);return U.toString().padStart(Z,"0").split("")},M=(U,Z,G)=>{const W=Math.floor(U/24);w.value=E(W),T.value=E(l.value?U%24:U),A.value=E(Z),C.value=E(G)},N=({hours:U,minutes:Z,seconds:G})=>{M(U,Z,G)},P=()=>{var U,Z;try{S.value=!1,b.value=i.value?o.value-new Date().getTime():a.value*1e3,(U=y.value)!=null&&U.reset&&((Z=y.value)==null||Z.reset()),S.value=!0}catch(G){console.log(G)}};return a2(()=>e.chartConfig.option.dataset,()=>{P()},{immediate:!0}),a2(()=>e.chartConfig.option.endDate,()=>{P()},{immediate:!0}),a2(()=>e.chartConfig.option.useEndDate,()=>{P()},{immediate:!0}),Ve(()=>{P()}),(U,Z)=>{const G=e1("n-countdown"),W=e1("n-space");return H(),h1("div",null,[yp(p(G,{ref_key:"countdownRef",ref:y,duration:b.value,render:N,active:S.value},null,8,["duration","active"]),[[bp,!1]]),p(W,{class:"go-decorates-more-countdown",size:c(_),align:"center",justify:"center"},{default:x(()=>[c(l)?(H(),h1(L1,{key:0},[(H(!0),h1(L1,null,u2(w.value,(q,r1)=>(H(),T1(c(s8),{count:q,width:c(d),height:c(h),"front-color":c(f),"back-color":c(u),radius:c(m),"flip-type":c(g),duration:c(v),key:r1,class:"go-d-block"},null,8,["count","width","height","front-color","back-color","radius","flip-type","duration"]))),128)),c(s)==="时分秒"?(H(),h1("div",_P,"天")):(H(),h1("div",xP,":"))],64)):M2("",!0),(H(!0),h1(L1,null,u2(T.value,(q,r1)=>(H(),T1(c(s8),{count:q,width:c(d),height:c(h),"front-color":c(f),"back-color":c(u),radius:c(m),"flip-type":c(g),duration:c(v),key:r1,class:"go-d-block"},null,8,["count","width","height","front-color","back-color","radius","flip-type","duration"]))),128)),c(s)==="时分秒"?(H(),h1("div",yP,"时")):(H(),h1("div",bP,":")),(H(!0),h1(L1,null,u2(A.value,(q,r1)=>(H(),T1(c(s8),{count:q,width:c(d),height:c(h),"front-color":c(f),"back-color":c(u),radius:c(m),"flip-type":c(g),duration:c(v),key:r1,class:"go-d-block"},null,8,["count","width","height","front-color","back-color","radius","flip-type","duration"]))),128)),c(s)==="时分秒"?(H(),h1("div",SP,"分")):(H(),h1("div",wP,":")),(H(!0),h1(L1,null,u2(C.value,(q,r1)=>(H(),T1(c(s8),{count:q,width:c(d),height:c(h),"front-color":c(f),"back-color":c(u),radius:c(m),"flip-type":c(g),duration:c(v),key:r1,class:"go-d-block"},null,8,["count","width","height","front-color","back-color","radius","flip-type","duration"]))),128)),c(s)==="时分秒"?(H(),h1("div",AP,"秒")):M2("",!0)]),_:1},8,["size"])])}}});const EP=w2(TP,[["__scopeId","data-v-bc7ad025"]]),CP=Object.freeze(Object.defineProperty({__proto__:null,default:EP},Symbol.toStringTag,{value:"Module"})),MP=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){V0(y=>({eaef08da:`${c(t)}px`,ec95c9f8:`${c(r)}px`}));const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{flipperLength:a,flipperBgColor:i,flipperTextColor:o,flipperWidth:s,flipperHeight:l,flipperRadius:u,flipperGap:f,flipperType:d,flipperSpeed:h,flipperBorderWidth:m}=U1(e.chartConfig.option),_=h2([]),g=y=>y.toString().padStart(a.value,"0").split("").slice(a.value*-1),v=y=>{_.value=g(y)};return a2(()=>e.chartConfig.option,y=>{try{v(y.dataset)}catch(S){console.log(S)}},{immediate:!0,deep:!0}),T2(e.chartConfig,p2,y=>{v(y)}),(y,S)=>{const b=e1("n-space");return H(),T1(b,{class:"go-decorates-flipper-number",size:c(f),align:"center",justify:"center"},{default:x(()=>[(H(!0),h1(L1,null,u2(_.value,(w,T)=>(H(),T1(c(s8),{count:w,width:c(s),height:c(l),"front-color":c(o),"back-color":c(i),radius:c(u),"flip-type":c(d),duration:c(h),"border-width":c(m),key:T,class:"go-d-block"},null,8,["count","width","height","front-color","back-color","radius","flip-type","duration","border-width"]))),128))]),_:1},8,["size"])}}});const DP=w2(MP,[["__scopeId","data-v-eb31c291"]]),kP=Object.freeze(Object.defineProperty({__proto__:null,default:DP},Symbol.toStringTag,{value:"Module"})),id=n=>(oe("data-v-e5f9cdb3"),n=n(),se(),n),RP=id(()=>i1("path",{d:"M665.6 1017.6c-19.2 0-38.4-19.2-38.4-38.4s19.2-38.4 38.4-38.4h268.8l6.4-268.8c0-19.2 19.2-38.4 38.4-38.4s38.4 19.2 38.4 38.4v294.4c0 32-25.6 51.2-51.2 51.2h-300.8zM51.2 396.8c-19.2 0-38.4-19.2-38.4-38.4V64C12.8 32 38.4 12.8 64 12.8h294.4c19.2 0 38.4 19.2 38.4 38.4s-19.2 38.4-38.4 38.4H89.6v268.8c0 19.2-19.2 38.4-38.4 38.4zM64 1017.6c-32 0-51.2-25.6-51.2-51.2v-294.4c0-19.2 19.2-38.4 38.4-38.4s38.4 19.2 38.4 38.4v217.6l198.4-198.4c6.4-6.4 19.2-12.8 25.6-12.8s19.2 6.4 25.6 12.8c6.4 6.4 12.8 19.2 12.8 25.6 0 12.8-6.4 19.2-12.8 25.6l-198.4 198.4h217.6c19.2 0 38.4 19.2 38.4 38.4s-19.2 38.4-38.4 38.4H64z m915.2-620.8c-19.2 0-38.4-19.2-38.4-38.4V140.8l-198.4 198.4c-6.4 6.4-19.2 12.8-25.6 12.8-12.8 0-19.2-6.4-25.6-12.8-12.8-12.8-12.8-38.4 0-51.2l198.4-198.4h-217.6c-19.2 0-38.4-19.2-38.4-38.4s19.2-38.4 38.4-38.4h294.4c32 0 51.2 25.6 51.2 51.2v294.4c0 19.2-19.2 38.4-38.4 38.4z",class:"fullScreen-border"},null,-1)),IP=[RP],OP=id(()=>i1("path",{d:"M379.336 697.237L153.362 921.55c-14.11 14.007-36.905 13.922-50.912-0.188-14.007-14.11-13.922-36.905 0.188-50.912l227.6-225.927H138.645c-18.99 0-34.385-15.446-34.385-34.5 0-19.053 15.395-34.5 34.385-34.5H413.72c18.99 0 34.384 15.447 34.384 34.5v276c0 9.15-3.622 17.926-10.07 24.396a34.326 34.326 0 0 1-24.314 10.104 34.326 34.326 0 0 1-24.314-10.104 34.559 34.559 0 0 1-10.071-24.396V697.237z m263.395-366.88l227.813-227.813c14.059-14.059 36.853-14.059 50.912 0 14.059 14.059 14.059 36.853 0 50.912l-225.18 225.18h187.147c18.99 0 34.385 15.445 34.385 34.5 0 19.053-15.395 34.5-34.385 34.5H608.346c-18.99 0-34.384-15.447-34.384-34.5v-276c0-9.15 3.622-17.926 10.07-24.396a34.326 34.326 0 0 1 24.314-10.105c9.12 0 17.865 3.635 24.314 10.105a34.559 34.559 0 0 1 10.07 24.395v193.223zM99.385 410a34.326 34.326 0 0 1-24.314-10.105A34.559 34.559 0 0 1 65 375.5v-276C65 80.446 80.395 65 99.385 65h275.077c18.99 0 34.384 15.446 34.384 34.5 0 19.054-15.394 34.5-34.384 34.5H133.769v241.5c0 9.15-3.622 17.925-10.07 24.395A34.326 34.326 0 0 1 99.384 410z m825.23 552H649.538c-18.99 0-34.384-15.446-34.384-34.5 0-19.054 15.394-34.5 34.384-34.5h240.693V651.5c0-19.054 15.394-34.5 34.384-34.5 18.99 0 34.385 15.446 34.385 34.5v276c0 19.054-15.395 34.5-34.385 34.5z",class:"fullScreen-border"},null,-1)),LP=[OP],FP=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){V0(f=>({"0b37a00c":c(a),"09c27b2c":c(t)+"px",17753213:c(r)}));const e=n;let{border:t,bgColor:r,borderColor:a}=U1(e.chartConfig.option);const i=h2(!1),o=()=>{i.value=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)};o();const s=f=>{f.requestFullscreen?f.requestFullscreen():document.mozRequestFullScreen?document.mozRequestFullScreen():document.webkitRequestFullscreen?document.webkitRequestFullscreen():document.msRequestFullscreen&&document.msRequestFullscreen()},l=()=>{document.fullscreenElement&&document.exitFullscreen?document.exitFullscreen():document.mozFullScreenElement&&document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitFullscreenElement&&document.webkitExitFullscreen?document.webkitExitFullscreen():document.msFullscreenElement&&document.msExitFullscreen&&document.msExitFullscreen()},u=()=>{i.value?l():s(document.documentElement),i.value=!i.value,setTimeout(()=>{o()},1e3)};return Ve(()=>{document.addEventListener("fullscreenchange",o),document.addEventListener("webkitfullscreenchange",o),document.addEventListener("mozfullscreenchange",o),document.addEventListener("MSFullscreenChange",o)}),Se(()=>{document.removeEventListener("fullscreenchange",o),document.removeEventListener("webkitfullscreenchange",o),document.removeEventListener("mozfullscreenchange",o),document.removeEventListener("MSFullscreenChange",o)}),(f,d)=>i.value?(H(),h1("svg",{key:1,onClick:u,viewBox:"0 0 1024 1024"},LP)):(H(),h1("svg",{key:0,onClick:u,viewBox:"0 0 1024 1024"},IP))}});const PP=w2(FP,[["__scopeId","data-v-e5f9cdb3"]]),NP=Object.freeze(Object.defineProperty({__proto__:null,default:PP},Symbol.toStringTag,{value:"Module"})),zP=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,t=w0({from:0,dataset:0});U1(e.chartConfig.attr);let{dur:r,showSeparator:a,prefixText:i,prefixColor:o,suffixText:s,suffixColor:l,precision:u,numberSize:f,numberColor:d}=U1(e.chartConfig.option);const h=m=>{t.from=t.dataset,t.dataset=m};return a2(()=>e.chartConfig.option.from,()=>{t.from=e.chartConfig.option.from},{immediate:!0}),a2(()=>e.chartConfig.option.dataset,()=>{t.dataset=e.chartConfig.option.dataset},{immediate:!0,deep:!1}),T2(e.chartConfig,p2,h),(m,_)=>{const g=e1("n-number-animation"),v=e1("n-statistic");return H(),T1(v,{"tabular-nums":"",class:"go-decorates-number"},{prefix:x(()=>[i1("span",{style:A2(`color:${c(o)};font-size:${c(f)}px`)},V2(c(i)),5)]),suffix:x(()=>[i1("span",{style:A2(`color:${c(l)};font-size:${c(f)}px`)},V2(c(s)),5)]),default:x(()=>[i1("span",{style:A2(`color:${c(d)};font-size:${c(f)}px`)},[p(g,{from:t.from,to:t.dataset,duration:c(r)*1e3,"show-separator":c(a),precision:c(u)},null,8,["from","to","duration","show-separator","precision"])],4)]),_:1})}}});const UP=w2(zP,[["__scopeId","data-v-81a0eb05"]]),BP=Object.freeze(Object.defineProperty({__proto__:null,default:UP},Symbol.toStringTag,{value:"Module"})),VP={class:"go-decorates-line"},GP=["width","height"],WP=["y1","x2","y2","stroke","stroke-width"],jP=["y1","x2","y2","stroke","stroke-width"],HP=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{o_color:a,i_color:i,line_class:o}=U1(e.chartConfig.option);return(s,l)=>(H(),h1("div",VP,[(H(),h1("svg",{width:c(t),height:c(r)},[i1("line",{x1:0,y1:c(r)/2,x2:c(t),y2:c(r)/2,stroke:c(a),"stroke-width":c(r)},null,8,WP),i1("line",{x1:0,y1:c(r)/2,x2:c(t),y2:c(r)/2,stroke:c(i),"stroke-width":c(r)/2,class:J8(c(o))},null,10,jP)],8,GP))]))}});const $P=w2(HP,[["__scopeId","data-v-de46e148"]]),YP=Object.freeze(Object.defineProperty({__proto__:null,default:$P},Symbol.toStringTag,{value:"Module"})),XP={class:"go-decorates-line"},JP=["width","height"],ZP=["x1","x2","y2","stroke","stroke-width"],qP=["x1","x2","y2","stroke","stroke-width"],QP=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n,{w:t,h:r}=U1(e.chartConfig.attr),{o_color:a,i_color:i,line_class:o}=U1(e.chartConfig.option);return(s,l)=>(H(),h1("div",XP,[(H(),h1("svg",{width:c(t),height:c(r)},[i1("line",{x1:c(t)/2,y1:0,x2:c(t)/2,y2:c(r),stroke:c(a),"stroke-width":c(t)},null,8,ZP),i1("line",{x1:c(t)/2,y1:0,x2:c(t)/2,y2:c(r),stroke:c(i),"stroke-width":c(t)/2,class:J8(c(o))},null,10,qP)],8,JP))]))}});const KP=w2(QP,[["__scopeId","data-v-e16a5446"]]),eN=Object.freeze(Object.defineProperty({__proto__:null,default:KP},Symbol.toStringTag,{value:"Module"})),tN=A1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(n){const e=n;let t=h2("2021-2-3"),r=h2("08:00:00"),a=h2("2021-2-3 08:00:00"),i=h2("none"),o=null;const{w:s,h:l}=U1(e.chartConfig.attr);let{timeColor:u,timeSize:f,timeLineHeight:d,timeTextIndent:h,fontWeight:m,showShadow:_,hShadow:g,vShadow:v,blurShadow:y,colorShadow:S}=U1(e.chartConfig.option);return a2(e.chartConfig.option,()=>{try{e.chartConfig.option.showShadow?i.value=`${e.chartConfig.option.hShadow}px ${e.chartConfig.option.vShadow}px ${e.chartConfig.option.blurShadow}px ${e.chartConfig.option.colorShadow}`:i.value="none"}catch(b){console.log(b)}},{immediate:!0}),Ve(()=>{o=setInterval(()=>{var b=new Date,w=b.getFullYear(),T=b.getMonth()+1<10?"0"+(b.getMonth()+1):b.getMonth()+1,A=b.getDate()<10?"0"+b.getDate():b.getDate(),C=b.getHours(),E=b.getMinutes(),M=b.getSeconds();let N="";C<10&&(N+="0"),N+=C+":",E<10&&(N+="0"),N+=E+":",M<10&&(N+="0"),N+=M,t.value=`${w}-${T}-${A}`,r.value=N,a.value=t.value+" "+r.value},500)}),Se(()=>{clearInterval(o)}),T2(e.chartConfig,p2),(b,w)=>(H(),h1("div",{class:"go-decorates-number",style:A2(`width:${c(s)}px;height:${c(l)}px;`)},[i1("div",{style:A2(`color:${c(u)};font-size:${c(f)}px;line-height:${c(d)}px;
      letter-spacing:${c(h)}px;font-weight:${c(m)};
      text-shadow: ${c(i)}`)},V2(c(a)),5)],4))}});const nN=w2(tN,[["__scopeId","data-v-edb32742"]]),rN=Object.freeze(Object.defineProperty({__proto__:null,default:nN},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ri="145",P9={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},N9={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},aN=0,Ds=1,iN=2,od=1,oN=2,l8=3,M5=0,K0=1,C4=2,Re=0,u9=1,ks=2,Rs=3,Is=4,sN=5,o5=100,lN=101,cN=102,Os=103,Ls=104,uN=200,fN=201,dN=202,hN=203,sd=204,ld=205,pN=206,mN=207,gN=208,vN=209,_N=210,xN=0,yN=1,bN=2,Mr=3,SN=4,wN=5,AN=6,TN=7,cd=0,EN=1,CN=2,ee=0,MN=1,DN=2,kN=3,RN=4,IN=5,ud=300,D5=301,k5=302,Dr=303,kr=304,X7=306,Rr=1e3,m4=1001,Ir=1002,g0=1003,Fs=1004,Ps=1005,Y0=1006,ON=1007,J7=1008,y9=1009,LN=1010,FN=1011,fd=1012,PN=1013,r9=1014,a9=1015,z8=1016,NN=1017,zN=1018,b5=1020,UN=1021,BN=1022,M4=1023,VN=1024,GN=1025,f9=1026,R5=1027,WN=1028,jN=1029,HN=1030,$N=1031,YN=1033,wt=33776,At=33777,Tt=33778,Et=33779,Ns=35840,zs=35841,Us=35842,Bs=35843,XN=36196,Vs=37492,Gs=37496,Ws=37808,js=37809,Hs=37810,$s=37811,Ys=37812,Xs=37813,Js=37814,Zs=37815,qs=37816,Qs=37817,Ks=37818,el=37819,tl=37820,nl=37821,rl=36492,b9=3e3,i3=3001,JN=3200,ZN=3201,qN=0,QN=1,j4="srgb",i9="srgb-linear",Ct=7680,KN=519,Or=35044,al="300 es",Lr=1035;class R9{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const i=a.indexOf(t);i!==-1&&a.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let i=0,o=a.length;i<o;i++)a[i].call(this,e);e.target=null}}}const H3=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mt=Math.PI/180,il=180/Math.PI;function Ie(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(H3[n&255]+H3[n>>8&255]+H3[n>>16&255]+H3[n>>24&255]+"-"+H3[e&255]+H3[e>>8&255]+"-"+H3[e>>16&15|64]+H3[e>>24&255]+"-"+H3[t&63|128]+H3[t>>8&255]+"-"+H3[t>>16&255]+H3[t>>24&255]+H3[r&255]+H3[r>>8&255]+H3[r>>16&255]+H3[r>>24&255]).toLowerCase()}function X3(n,e,t){return Math.max(e,Math.min(t,n))}function ez(n,e){return(n%e+e)%e}function Dt(n,e,t){return(1-t)*n+t*e}function ol(n){return(n&n-1)===0&&n!==0}function Fr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Te(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function j2(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class l2{constructor(e=0,t=0){l2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),i=this.x-e.x,o=this.y-e.y;return this.x=i*r-o*a+e.x,this.y=i*a+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class J0{constructor(){J0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,r,a,i,o,s,l,u){const f=this.elements;return f[0]=e,f[1]=a,f[2]=s,f[3]=t,f[4]=i,f[5]=l,f[6]=r,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,i=this.elements,o=r[0],s=r[3],l=r[6],u=r[1],f=r[4],d=r[7],h=r[2],m=r[5],_=r[8],g=a[0],v=a[3],y=a[6],S=a[1],b=a[4],w=a[7],T=a[2],A=a[5],C=a[8];return i[0]=o*g+s*S+l*T,i[3]=o*v+s*b+l*A,i[6]=o*y+s*w+l*C,i[1]=u*g+f*S+d*T,i[4]=u*v+f*b+d*A,i[7]=u*y+f*w+d*C,i[2]=h*g+m*S+_*T,i[5]=h*v+m*b+_*A,i[8]=h*y+m*w+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],i=e[3],o=e[4],s=e[5],l=e[6],u=e[7],f=e[8];return t*o*f-t*s*u-r*i*f+r*s*l+a*i*u-a*o*l}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],i=e[3],o=e[4],s=e[5],l=e[6],u=e[7],f=e[8],d=f*o-s*u,h=s*l-f*i,m=u*i-o*l,_=t*d+r*h+a*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(a*u-f*r)*g,e[2]=(s*r-a*o)*g,e[3]=h*g,e[4]=(f*t-a*l)*g,e[5]=(a*i-s*t)*g,e[6]=m*g,e[7]=(r*l-u*t)*g,e[8]=(o*t-r*i)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,i,o,s){const l=Math.cos(i),u=Math.sin(i);return this.set(r*l,r*u,-r*(l*o+u*s)+o+e,-a*u,a*l,-a*(-u*o+l*s)+s+t,0,0,1),this}scale(e,t){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=t,r[4]*=t,r[7]*=t,this}rotate(e){const t=Math.cos(e),r=Math.sin(e),a=this.elements,i=a[0],o=a[3],s=a[6],l=a[1],u=a[4],f=a[7];return a[0]=t*i+r*l,a[3]=t*o+r*u,a[6]=t*s+r*f,a[1]=-r*i+t*l,a[4]=-r*o+t*u,a[7]=-r*s+t*f,this}translate(e,t){const r=this.elements;return r[0]+=e*r[2],r[3]+=e*r[5],r[6]+=e*r[8],r[1]+=t*r[2],r[4]+=t*r[5],r[7]+=t*r[8],this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function dd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function U8(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function d9(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function i7(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const kt={[j4]:{[i9]:d9},[i9]:{[j4]:i7}},u4={legacyMode:!0,get workingColorSpace(){return i9},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(kt[e]&&kt[e][t]!==void 0){const r=kt[e][t];return n.r=r(n.r),n.g=r(n.g),n.b=r(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},A3={r:0,g:0,b:0},f4={h:0,s:0,l:0},M6={h:0,s:0,l:0};function Rt(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function D6(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class F2{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&r===void 0?this.set(e):this.setRGB(e,t,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=j4){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,u4.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=i9){return this.r=e,this.g=t,this.b=r,u4.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=i9){if(e=ez(e,1),t=X3(t,0,1),r=X3(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,o=2*r-i;this.r=Rt(o,i,e+1/3),this.g=Rt(o,i,e),this.b=Rt(o,i,e-1/3)}return u4.toWorkingColorSpace(this,a),this}setStyle(e,t=j4){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const o=a[1],s=a[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,u4.toWorkingColorSpace(this,t),r(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,u4.toWorkingColorSpace(this,t),r(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(i[1])/360,u=parseFloat(i[2])/100,f=parseFloat(i[3])/100;return r(i[4]),this.setHSL(l,u,f,t)}break}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=a[1],o=i.length;if(o===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,u4.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,u4.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=j4){const r=hd[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=d9(e.r),this.g=d9(e.g),this.b=d9(e.b),this}copyLinearToSRGB(e){return this.r=i7(e.r),this.g=i7(e.g),this.b=i7(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=j4){return u4.fromWorkingColorSpace(D6(this,A3),e),X3(A3.r*255,0,255)<<16^X3(A3.g*255,0,255)<<8^X3(A3.b*255,0,255)<<0}getHexString(e=j4){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=i9){u4.fromWorkingColorSpace(D6(this,A3),t);const r=A3.r,a=A3.g,i=A3.b,o=Math.max(r,a,i),s=Math.min(r,a,i);let l,u;const f=(s+o)/2;if(s===o)l=0,u=0;else{const d=o-s;switch(u=f<=.5?d/(o+s):d/(2-o-s),o){case r:l=(a-i)/d+(a<i?6:0);break;case a:l=(i-r)/d+2;break;case i:l=(r-a)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,t=i9){return u4.fromWorkingColorSpace(D6(this,A3),t),e.r=A3.r,e.g=A3.g,e.b=A3.b,e}getStyle(e=j4){return u4.fromWorkingColorSpace(D6(this,A3),e),e!==j4?`color(${e} ${A3.r} ${A3.g} ${A3.b})`:`rgb(${A3.r*255|0},${A3.g*255|0},${A3.b*255|0})`}offsetHSL(e,t,r){return this.getHSL(f4),f4.h+=e,f4.s+=t,f4.l+=r,this.setHSL(f4.h,f4.s,f4.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(f4),e.getHSL(M6);const r=Dt(f4.h,M6.h,t),a=Dt(f4.s,M6.s,t),i=Dt(f4.l,M6.l,t);return this.setHSL(r,a,i),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}F2.NAMES=hd;let z9;class pd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{z9===void 0&&(z9=U8("canvas")),z9.width=e.width,z9.height=e.height;const r=z9.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=z9}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=U8("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),i=a.data;for(let o=0;o<i.length;o++)i[o]=d9(i[o]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(d9(t[r]/255)*255):t[r]=d9(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class md{constructor(e=null){this.isSource=!0,this.uuid=Ie(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let i;if(Array.isArray(a)){i=[];for(let o=0,s=a.length;o<s;o++)a[o].isDataTexture?i.push(It(a[o].image)):i.push(It(a[o]))}else i=It(a);r.url=i}return t||(e.images[this.uuid]=r),r}}function It(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?pd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tz=0;class t4 extends R9{constructor(e=t4.DEFAULT_IMAGE,t=t4.DEFAULT_MAPPING,r=m4,a=m4,i=Y0,o=J7,s=M4,l=y9,u=1,f=b9){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tz++}),this.uuid=Ie(),this.name="",this.source=new md(e),this.mipmaps=[],this.mapping=t,this.wrapS=r,this.wrapT=a,this.magFilter=i,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new l2(0,0),this.repeat=new l2(1,1),this.center=new l2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rr:e.x=e.x-Math.floor(e.x);break;case m4:e.x=e.x<0?0:1;break;case Ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rr:e.y=e.y-Math.floor(e.y);break;case m4:e.y=e.y<0?0:1;break;case Ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}t4.DEFAULT_IMAGE=null;t4.DEFAULT_MAPPING=ud;class V3{constructor(e=0,t=0,r=0,a=1){V3.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,i=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*a+o[12]*i,this.y=o[1]*t+o[5]*r+o[9]*a+o[13]*i,this.z=o[2]*t+o[6]*r+o[10]*a+o[14]*i,this.w=o[3]*t+o[7]*r+o[11]*a+o[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,i;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],m=l[5],_=l[9],g=l[2],v=l[6],y=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-v)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+v)<.1&&Math.abs(u+m+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,w=(m+1)/2,T=(y+1)/2,A=(f+h)/4,C=(d+g)/4,E=(_+v)/4;return b>w&&b>T?b<.01?(r=0,a=.707106781,i=.707106781):(r=Math.sqrt(b),a=A/r,i=C/r):w>T?w<.01?(r=.707106781,a=0,i=.707106781):(a=Math.sqrt(w),r=A/a,i=E/a):T<.01?(r=.707106781,a=.707106781,i=0):(i=Math.sqrt(T),r=C/i,a=E/i),this.set(r,a,i,t),this}let S=Math.sqrt((v-_)*(v-_)+(d-g)*(d-g)+(h-f)*(h-f));return Math.abs(S)<.001&&(S=1),this.x=(v-_)/S,this.y=(d-g)/S,this.z=(h-f)/S,this.w=Math.acos((u+m+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class S9 extends R9{constructor(e,t,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new V3(0,0,e,t),this.scissorTest=!1,this.viewport=new V3(0,0,e,t);const a={width:e,height:t,depth:1};this.texture=new t4(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Y0,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new md(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gd extends t4{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=g0,this.minFilter=g0,this.wrapR=m4,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nz extends t4{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=g0,this.minFilter=g0,this.wrapR=m4,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ne{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,i,o,s){let l=r[a+0],u=r[a+1],f=r[a+2],d=r[a+3];const h=i[o+0],m=i[o+1],_=i[o+2],g=i[o+3];if(s===0){e[t+0]=l,e[t+1]=u,e[t+2]=f,e[t+3]=d;return}if(s===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==h||u!==m||f!==_){let v=1-s;const y=l*h+u*m+f*_+d*g,S=y>=0?1:-1,b=1-y*y;if(b>Number.EPSILON){const T=Math.sqrt(b),A=Math.atan2(T,y*S);v=Math.sin(v*A)/T,s=Math.sin(s*A)/T}const w=s*S;if(l=l*v+h*w,u=u*v+m*w,f=f*v+_*w,d=d*v+g*w,v===1-s){const T=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=T,u*=T,f*=T,d*=T}}e[t]=l,e[t+1]=u,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,a,i,o){const s=r[a],l=r[a+1],u=r[a+2],f=r[a+3],d=i[o],h=i[o+1],m=i[o+2],_=i[o+3];return e[t]=s*_+f*d+l*m-u*h,e[t+1]=l*_+f*h+u*d-s*m,e[t+2]=u*_+f*m+s*h-l*d,e[t+3]=f*_-s*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,a=e._y,i=e._z,o=e._order,s=Math.cos,l=Math.sin,u=s(r/2),f=s(a/2),d=s(i/2),h=l(r/2),m=l(a/2),_=l(i/2);switch(o){case"XYZ":this._x=h*f*d+u*m*_,this._y=u*m*d-h*f*_,this._z=u*f*_+h*m*d,this._w=u*f*d-h*m*_;break;case"YXZ":this._x=h*f*d+u*m*_,this._y=u*m*d-h*f*_,this._z=u*f*_-h*m*d,this._w=u*f*d+h*m*_;break;case"ZXY":this._x=h*f*d-u*m*_,this._y=u*m*d+h*f*_,this._z=u*f*_+h*m*d,this._w=u*f*d-h*m*_;break;case"ZYX":this._x=h*f*d-u*m*_,this._y=u*m*d+h*f*_,this._z=u*f*_-h*m*d,this._w=u*f*d+h*m*_;break;case"YZX":this._x=h*f*d+u*m*_,this._y=u*m*d+h*f*_,this._z=u*f*_-h*m*d,this._w=u*f*d-h*m*_;break;case"XZY":this._x=h*f*d-u*m*_,this._y=u*m*d-h*f*_,this._z=u*f*_+h*m*d,this._w=u*f*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],i=t[8],o=t[1],s=t[5],l=t[9],u=t[2],f=t[6],d=t[10],h=r+s+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(i-u)*m,this._z=(o-a)*m}else if(r>s&&r>d){const m=2*Math.sqrt(1+r-s-d);this._w=(f-l)/m,this._x=.25*m,this._y=(a+o)/m,this._z=(i+u)/m}else if(s>d){const m=2*Math.sqrt(1+s-r-d);this._w=(i-u)/m,this._x=(a+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-r-s);this._w=(o-a)/m,this._x=(i+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(X3(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,i=e._z,o=e._w,s=t._x,l=t._y,u=t._z,f=t._w;return this._x=r*f+o*s+a*u-i*l,this._y=a*f+o*l+i*s-r*u,this._z=i*f+o*u+r*l-a*s,this._w=o*f-r*s-a*l-i*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,i=this._z,o=this._w;let s=o*e._w+r*e._x+a*e._y+i*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=r,this._y=a,this._z=i,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*r+t*this._x,this._y=m*a+t*this._y,this._z=m*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,s),d=Math.sin((1-t)*f)/u,h=Math.sin(t*f)/u;return this._w=o*d+this._w*h,this._x=r*d+this._x*h,this._y=a*d+this._y*h,this._z=i*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),a=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(a),r*Math.sin(i),r*Math.cos(i),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class u1{constructor(e=0,t=0,r=0){u1.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*a,this.y=i[1]*t+i[4]*r+i[7]*a,this.z=i[2]*t+i[5]*r+i[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,i=e.elements,o=1/(i[3]*t+i[7]*r+i[11]*a+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*a+i[12])*o,this.y=(i[1]*t+i[5]*r+i[9]*a+i[13])*o,this.z=(i[2]*t+i[6]*r+i[10]*a+i[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,i=e.x,o=e.y,s=e.z,l=e.w,u=l*t+o*a-s*r,f=l*r+s*t-i*a,d=l*a+i*r-o*t,h=-i*t-o*r-s*a;return this.x=u*l+h*-i+f*-s-d*-o,this.y=f*l+h*-o+d*-i-u*-s,this.z=d*l+h*-s+u*-o-f*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*a,this.y=i[1]*t+i[5]*r+i[9]*a,this.z=i[2]*t+i[6]*r+i[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,i=e.z,o=t.x,s=t.y,l=t.z;return this.x=a*l-i*s,this.y=i*o-r*l,this.z=r*s-a*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ot.copy(this).projectOnVector(e),this.sub(Ot)}reflect(e){return this.sub(Ot.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(X3(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-so(e,2));return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ot=new u1,sl=new ne;class r6{constructor(e=new u1(1/0,1/0,1/0),t=new u1(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,r=1/0,a=1/0,i=-1/0,o=-1/0,s=-1/0;for(let l=0,u=e.length;l<u;l+=3){const f=e[l],d=e[l+1],h=e[l+2];f<t&&(t=f),d<r&&(r=d),h<a&&(a=h),f>i&&(i=f),d>o&&(o=d),h>s&&(s=h)}return this.min.set(t,r,a),this.max.set(i,o,s),this}setFromBufferAttribute(e){let t=1/0,r=1/0,a=1/0,i=-1/0,o=-1/0,s=-1/0;for(let l=0,u=e.count;l<u;l++){const f=e.getX(l),d=e.getY(l),h=e.getZ(l);f<t&&(t=f),d<r&&(r=d),h<a&&(a=h),f>i&&(i=f),d>o&&(o=d),h>s&&(s=h)}return this.min.set(t,r,a),this.max.set(i,o,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=$e.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0)if(t&&r.attributes!=null&&r.attributes.position!==void 0){const i=r.attributes.position;for(let o=0,s=i.count;o<s;o++)$e.fromBufferAttribute(i,o).applyMatrix4(e.matrixWorld),this.expandByPoint($e)}else r.boundingBox===null&&r.computeBoundingBox(),Lt.copy(r.boundingBox),Lt.applyMatrix4(e.matrixWorld),this.union(Lt);const a=e.children;for(let i=0,o=a.length;i<o;i++)this.expandByObject(a[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$e),$e.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(X5),k6.subVectors(this.max,X5),U9.subVectors(e.a,X5),B9.subVectors(e.b,X5),V9.subVectors(e.c,X5),fe.subVectors(B9,U9),de.subVectors(V9,B9),Ye.subVectors(U9,V9);let t=[0,-fe.z,fe.y,0,-de.z,de.y,0,-Ye.z,Ye.y,fe.z,0,-fe.x,de.z,0,-de.x,Ye.z,0,-Ye.x,-fe.y,fe.x,0,-de.y,de.x,0,-Ye.y,Ye.x,0];return!Ft(t,U9,B9,V9,k6)||(t=[1,0,0,0,1,0,0,0,1],!Ft(t,U9,B9,V9,k6))?!1:(R6.crossVectors(fe,de),t=[R6.x,R6.y,R6.z],Ft(t,U9,B9,V9,k6))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return $e.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize($e).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(U4[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),U4[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),U4[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),U4[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),U4[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),U4[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),U4[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),U4[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(U4),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const U4=[new u1,new u1,new u1,new u1,new u1,new u1,new u1,new u1],$e=new u1,Lt=new r6,U9=new u1,B9=new u1,V9=new u1,fe=new u1,de=new u1,Ye=new u1,X5=new u1,k6=new u1,R6=new u1,Xe=new u1;function Ft(n,e,t,r,a){for(let i=0,o=n.length-3;i<=o;i+=3){Xe.fromArray(n,i);const s=a.x*Math.abs(Xe.x)+a.y*Math.abs(Xe.y)+a.z*Math.abs(Xe.z),l=e.dot(Xe),u=t.dot(Xe),f=r.dot(Xe);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>s)return!1}return!0}const rz=new r6,ll=new u1,I6=new u1,Pt=new u1;class a6{constructor(e=new u1,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):rz.setFromPoints(e).getCenter(r);let a=0;for(let i=0,o=e.length;i<o;i++)a=Math.max(a,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pt.subVectors(e,this.center);const t=Pt.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.add(Pt.multiplyScalar(a/r)),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?I6.set(0,0,1).multiplyScalar(e.radius):I6.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ll.copy(e.center).add(I6)),this.expandByPoint(ll.copy(e.center).sub(I6)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const B4=new u1,Nt=new u1,O6=new u1,he=new u1,zt=new u1,L6=new u1,Ut=new u1;class Ii{constructor(e=new u1,t=new u1(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,B4)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=B4.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(B4.copy(this.direction).multiplyScalar(t).add(this.origin),B4.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Nt.copy(e).add(t).multiplyScalar(.5),O6.copy(t).sub(e).normalize(),he.copy(this.origin).sub(Nt);const i=e.distanceTo(t)*.5,o=-this.direction.dot(O6),s=he.dot(this.direction),l=-he.dot(O6),u=he.lengthSq(),f=Math.abs(1-o*o);let d,h,m,_;if(f>0)if(d=o*l-s,h=o*s-l,_=i*f,d>=0)if(h>=-_)if(h<=_){const g=1/f;d*=g,h*=g,m=d*(d+o*h+2*s)+h*(o*d+h+2*l)+u}else h=i,d=Math.max(0,-(o*h+s)),m=-d*d+h*(h+2*l)+u;else h=-i,d=Math.max(0,-(o*h+s)),m=-d*d+h*(h+2*l)+u;else h<=-_?(d=Math.max(0,-(-o*i+s)),h=d>0?-i:Math.min(Math.max(-i,-l),i),m=-d*d+h*(h+2*l)+u):h<=_?(d=0,h=Math.min(Math.max(-i,-l),i),m=h*(h+2*l)+u):(d=Math.max(0,-(o*i+s)),h=d>0?i:Math.min(Math.max(-i,-l),i),m=-d*d+h*(h+2*l)+u);else h=o>0?-i:i,d=Math.max(0,-(o*h+s)),m=-d*d+h*(h+2*l)+u;return r&&r.copy(this.direction).multiplyScalar(d).add(this.origin),a&&a.copy(O6).multiplyScalar(h).add(Nt),m}intersectSphere(e,t){B4.subVectors(e.center,this.origin);const r=B4.dot(this.direction),a=B4.dot(B4)-r*r,i=e.radius*e.radius;if(a>i)return null;const o=Math.sqrt(i-a),s=r-o,l=r+o;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,i,o,s,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(r=(e.min.x-h.x)*u,a=(e.max.x-h.x)*u):(r=(e.max.x-h.x)*u,a=(e.min.x-h.x)*u),f>=0?(i=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(i=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),r>o||i>a||((i>r||r!==r)&&(r=i),(o<a||a!==a)&&(a=o),d>=0?(s=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(s=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),r>l||s>a)||((s>r||r!==r)&&(r=s),(l<a||a!==a)&&(a=l),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,B4)!==null}intersectTriangle(e,t,r,a,i){zt.subVectors(t,e),L6.subVectors(r,e),Ut.crossVectors(zt,L6);let o=this.direction.dot(Ut),s;if(o>0){if(a)return null;s=1}else if(o<0)s=-1,o=-o;else return null;he.subVectors(this.origin,e);const l=s*this.direction.dot(L6.crossVectors(he,L6));if(l<0)return null;const u=s*this.direction.dot(zt.cross(he));if(u<0||l+u>o)return null;const f=-s*he.dot(Ut);return f<0?null:this.at(f/o,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class p3{constructor(){p3.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,r,a,i,o,s,l,u,f,d,h,m,_,g,v){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=a,y[1]=i,y[5]=o,y[9]=s,y[13]=l,y[2]=u,y[6]=f,y[10]=d,y[14]=h,y[3]=m,y[7]=_,y[11]=g,y[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new p3().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/G9.setFromMatrixColumn(e,0).length(),i=1/G9.setFromMatrixColumn(e,1).length(),o=1/G9.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,i=e.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(a),u=Math.sin(a),f=Math.cos(i),d=Math.sin(i);if(e.order==="XYZ"){const h=o*f,m=o*d,_=s*f,g=s*d;t[0]=l*f,t[4]=-l*d,t[8]=u,t[1]=m+_*u,t[5]=h-g*u,t[9]=-s*l,t[2]=g-h*u,t[6]=_+m*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,_=u*f,g=u*d;t[0]=h+g*s,t[4]=_*s-m,t[8]=o*u,t[1]=o*d,t[5]=o*f,t[9]=-s,t[2]=m*s-_,t[6]=g+h*s,t[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,_=u*f,g=u*d;t[0]=h-g*s,t[4]=-o*d,t[8]=_+m*s,t[1]=m+_*s,t[5]=o*f,t[9]=g-h*s,t[2]=-o*u,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*d,_=s*f,g=s*d;t[0]=l*f,t[4]=_*u-m,t[8]=h*u+g,t[1]=l*d,t[5]=g*u+h,t[9]=m*u-_,t[2]=-u,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,_=s*l,g=s*u;t[0]=l*f,t[4]=g-h*d,t[8]=_*d+m,t[1]=d,t[5]=o*f,t[9]=-s*f,t[2]=-u*f,t[6]=m*d+_,t[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,m=o*u,_=s*l,g=s*u;t[0]=l*f,t[4]=-d,t[8]=u*f,t[1]=h*d+g,t[5]=o*f,t[9]=m*d-_,t[2]=_*d-m,t[6]=s*f,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(az,e,iz)}lookAt(e,t,r){const a=this.elements;return C0.subVectors(e,t),C0.lengthSq()===0&&(C0.z=1),C0.normalize(),pe.crossVectors(r,C0),pe.lengthSq()===0&&(Math.abs(r.z)===1?C0.x+=1e-4:C0.z+=1e-4,C0.normalize(),pe.crossVectors(r,C0)),pe.normalize(),F6.crossVectors(C0,pe),a[0]=pe.x,a[4]=F6.x,a[8]=C0.x,a[1]=pe.y,a[5]=F6.y,a[9]=C0.y,a[2]=pe.z,a[6]=F6.z,a[10]=C0.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,i=this.elements,o=r[0],s=r[4],l=r[8],u=r[12],f=r[1],d=r[5],h=r[9],m=r[13],_=r[2],g=r[6],v=r[10],y=r[14],S=r[3],b=r[7],w=r[11],T=r[15],A=a[0],C=a[4],E=a[8],M=a[12],N=a[1],P=a[5],U=a[9],Z=a[13],G=a[2],W=a[6],q=a[10],r1=a[14],Y=a[3],O=a[7],Q=a[11],l1=a[15];return i[0]=o*A+s*N+l*G+u*Y,i[4]=o*C+s*P+l*W+u*O,i[8]=o*E+s*U+l*q+u*Q,i[12]=o*M+s*Z+l*r1+u*l1,i[1]=f*A+d*N+h*G+m*Y,i[5]=f*C+d*P+h*W+m*O,i[9]=f*E+d*U+h*q+m*Q,i[13]=f*M+d*Z+h*r1+m*l1,i[2]=_*A+g*N+v*G+y*Y,i[6]=_*C+g*P+v*W+y*O,i[10]=_*E+g*U+v*q+y*Q,i[14]=_*M+g*Z+v*r1+y*l1,i[3]=S*A+b*N+w*G+T*Y,i[7]=S*C+b*P+w*W+T*O,i[11]=S*E+b*U+w*q+T*Q,i[15]=S*M+b*Z+w*r1+T*l1,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],i=e[12],o=e[1],s=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],m=e[14],_=e[3],g=e[7],v=e[11],y=e[15];return _*(+i*l*d-a*u*d-i*s*h+r*u*h+a*s*m-r*l*m)+g*(+t*l*m-t*u*h+i*o*h-a*o*m+a*u*f-i*l*f)+v*(+t*u*d-t*s*m-i*o*d+r*o*m+i*s*f-r*u*f)+y*(-a*s*f-t*l*d+t*s*h+a*o*d-r*o*h+r*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],i=e[3],o=e[4],s=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],m=e[11],_=e[12],g=e[13],v=e[14],y=e[15],S=d*v*u-g*h*u+g*l*m-s*v*m-d*l*y+s*h*y,b=_*h*u-f*v*u-_*l*m+o*v*m+f*l*y-o*h*y,w=f*g*u-_*d*u+_*s*m-o*g*m-f*s*y+o*d*y,T=_*d*l-f*g*l-_*s*h+o*g*h+f*s*v-o*d*v,A=t*S+r*b+a*w+i*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=S*C,e[1]=(g*h*i-d*v*i-g*a*m+r*v*m+d*a*y-r*h*y)*C,e[2]=(s*v*i-g*l*i+g*a*u-r*v*u-s*a*y+r*l*y)*C,e[3]=(d*l*i-s*h*i-d*a*u+r*h*u+s*a*m-r*l*m)*C,e[4]=b*C,e[5]=(f*v*i-_*h*i+_*a*m-t*v*m-f*a*y+t*h*y)*C,e[6]=(_*l*i-o*v*i-_*a*u+t*v*u+o*a*y-t*l*y)*C,e[7]=(o*h*i-f*l*i+f*a*u-t*h*u-o*a*m+t*l*m)*C,e[8]=w*C,e[9]=(_*d*i-f*g*i-_*r*m+t*g*m+f*r*y-t*d*y)*C,e[10]=(o*g*i-_*s*i+_*r*u-t*g*u-o*r*y+t*s*y)*C,e[11]=(f*s*i-o*d*i-f*r*u+t*d*u+o*r*m-t*s*m)*C,e[12]=T*C,e[13]=(f*g*a-_*d*a+_*r*h-t*g*h-f*r*v+t*d*v)*C,e[14]=(_*s*a-o*g*a-_*r*l+t*g*l+o*r*v-t*s*v)*C,e[15]=(o*d*a-f*s*a+f*r*l-t*d*l-o*r*h+t*s*h)*C,this}scale(e){const t=this.elements,r=e.x,a=e.y,i=e.z;return t[0]*=r,t[4]*=a,t[8]*=i,t[1]*=r,t[5]*=a,t[9]*=i,t[2]*=r,t[6]*=a,t[10]*=i,t[3]*=r,t[7]*=a,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),i=1-r,o=e.x,s=e.y,l=e.z,u=i*o,f=i*s;return this.set(u*o+r,u*s-a*l,u*l+a*s,0,u*s+a*l,f*s+r,f*l-a*o,0,u*l-a*s,f*l+a*o,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,i,o){return this.set(1,r,i,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,i=t._x,o=t._y,s=t._z,l=t._w,u=i+i,f=o+o,d=s+s,h=i*u,m=i*f,_=i*d,g=o*f,v=o*d,y=s*d,S=l*u,b=l*f,w=l*d,T=r.x,A=r.y,C=r.z;return a[0]=(1-(g+y))*T,a[1]=(m+w)*T,a[2]=(_-b)*T,a[3]=0,a[4]=(m-w)*A,a[5]=(1-(h+y))*A,a[6]=(v+S)*A,a[7]=0,a[8]=(_+b)*C,a[9]=(v-S)*C,a[10]=(1-(h+g))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let i=G9.set(a[0],a[1],a[2]).length();const o=G9.set(a[4],a[5],a[6]).length(),s=G9.set(a[8],a[9],a[10]).length();this.determinant()<0&&(i=-i),e.x=a[12],e.y=a[13],e.z=a[14],d4.copy(this);const u=1/i,f=1/o,d=1/s;return d4.elements[0]*=u,d4.elements[1]*=u,d4.elements[2]*=u,d4.elements[4]*=f,d4.elements[5]*=f,d4.elements[6]*=f,d4.elements[8]*=d,d4.elements[9]*=d,d4.elements[10]*=d,t.setFromRotationMatrix(d4),r.x=i,r.y=o,r.z=s,this}makePerspective(e,t,r,a,i,o){const s=this.elements,l=2*i/(t-e),u=2*i/(r-a),f=(t+e)/(t-e),d=(r+a)/(r-a),h=-(o+i)/(o-i),m=-2*o*i/(o-i);return s[0]=l,s[4]=0,s[8]=f,s[12]=0,s[1]=0,s[5]=u,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,r,a,i,o){const s=this.elements,l=1/(t-e),u=1/(r-a),f=1/(o-i),d=(t+e)*l,h=(r+a)*u,m=(o+i)*f;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*u,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*f,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const G9=new u1,d4=new p3,az=new u1(0,0,0),iz=new u1(1,1,1),pe=new u1,F6=new u1,C0=new u1,cl=new p3,ul=new ne;class i6{constructor(e=0,t=0,r=0,a=i6.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,i=a[0],o=a[4],s=a[8],l=a[1],u=a[5],f=a[9],d=a[2],h=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(X3(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-X3(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,i),this._z=0);break;case"ZXY":this._x=Math.asin(X3(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-X3(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(X3(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,i)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-X3(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,i)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cl,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ul.setFromEuler(this),this.setFromQuaternion(ul,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}i6.DefaultOrder="XYZ";i6.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oz=0;const fl=new u1,W9=new ne,V4=new p3,P6=new u1,J5=new u1,sz=new u1,lz=new ne,dl=new u1(1,0,0),hl=new u1(0,1,0),pl=new u1(0,0,1),cz={type:"added"},ml={type:"removed"};class K3 extends R9{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oz++}),this.uuid=Ie(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=K3.DefaultUp.clone();const e=new u1,t=new i6,r=new ne,a=new u1(1,1,1);function i(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new p3},normalMatrix:{value:new J0}}),this.matrix=new p3,this.matrixWorld=new p3,this.matrixAutoUpdate=K3.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=K3.DefaultMatrixWorldAutoUpdate,this.layers=new vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return W9.setFromAxisAngle(e,t),this.quaternion.multiply(W9),this}rotateOnWorldAxis(e,t){return W9.setFromAxisAngle(e,t),this.quaternion.premultiply(W9),this}rotateX(e){return this.rotateOnAxis(dl,e)}rotateY(e){return this.rotateOnAxis(hl,e)}rotateZ(e){return this.rotateOnAxis(pl,e)}translateOnAxis(e,t){return fl.copy(e).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dl,e)}translateY(e){return this.translateOnAxis(hl,e)}translateZ(e){return this.translateOnAxis(pl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(V4.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?P6.copy(e):P6.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),J5.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?V4.lookAt(J5,P6,this.up):V4.lookAt(P6,J5,this.up),this.quaternion.setFromRotationMatrix(V4),a&&(V4.extractRotation(a.matrixWorld),W9.setFromRotationMatrix(V4),this.quaternion.premultiply(W9.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cz)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ml)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ml)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),V4.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),V4.multiply(e.parent.matrixWorld)),e.applyMatrix4(V4),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(J5,e,sz),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(J5,lz,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++){const i=t[r];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let i=0,o=a.length;i<o;i++){const s=a[i];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function i(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=i(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];i(e.shapes,d)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(i(e.materials,this.material[l]));a.material=s}else a.material=i(e.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];a.animations.push(i(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),f.length>0&&(r.images=f),d.length>0&&(r.shapes=d),h.length>0&&(r.skeletons=h),m.length>0&&(r.animations=m),_.length>0&&(r.nodes=_)}return r.object=a,r;function o(s){const l=[];for(const u in s){const f=s[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}K3.DefaultUp=new u1(0,1,0);K3.DefaultMatrixAutoUpdate=!0;K3.DefaultMatrixWorldAutoUpdate=!0;const h4=new u1,G4=new u1,Bt=new u1,W4=new u1,j9=new u1,H9=new u1,gl=new u1,Vt=new u1,Gt=new u1,Wt=new u1;class T4{constructor(e=new u1,t=new u1,r=new u1){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),h4.subVectors(e,t),a.cross(h4);const i=a.lengthSq();return i>0?a.multiplyScalar(1/Math.sqrt(i)):a.set(0,0,0)}static getBarycoord(e,t,r,a,i){h4.subVectors(a,t),G4.subVectors(r,t),Bt.subVectors(e,t);const o=h4.dot(h4),s=h4.dot(G4),l=h4.dot(Bt),u=G4.dot(G4),f=G4.dot(Bt),d=o*u-s*s;if(d===0)return i.set(-2,-1,-1);const h=1/d,m=(u*l-s*f)*h,_=(o*f-s*l)*h;return i.set(1-m-_,_,m)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,W4),W4.x>=0&&W4.y>=0&&W4.x+W4.y<=1}static getUV(e,t,r,a,i,o,s,l){return this.getBarycoord(e,t,r,a,W4),l.set(0,0),l.addScaledVector(i,W4.x),l.addScaledVector(o,W4.y),l.addScaledVector(s,W4.z),l}static isFrontFacing(e,t,r,a){return h4.subVectors(r,t),G4.subVectors(e,t),h4.cross(G4).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return h4.subVectors(this.c,this.b),G4.subVectors(this.a,this.b),h4.cross(G4).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return T4.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return T4.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,a,i){return T4.getUV(e,this.a,this.b,this.c,t,r,a,i)}containsPoint(e){return T4.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return T4.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,i=this.c;let o,s;j9.subVectors(a,r),H9.subVectors(i,r),Vt.subVectors(e,r);const l=j9.dot(Vt),u=H9.dot(Vt);if(l<=0&&u<=0)return t.copy(r);Gt.subVectors(e,a);const f=j9.dot(Gt),d=H9.dot(Gt);if(f>=0&&d<=f)return t.copy(a);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(r).addScaledVector(j9,o);Wt.subVectors(e,i);const m=j9.dot(Wt),_=H9.dot(Wt);if(_>=0&&m<=_)return t.copy(i);const g=m*u-l*_;if(g<=0&&u>=0&&_<=0)return s=u/(u-_),t.copy(r).addScaledVector(H9,s);const v=f*_-m*d;if(v<=0&&d-f>=0&&m-_>=0)return gl.subVectors(i,a),s=(d-f)/(d-f+(m-_)),t.copy(a).addScaledVector(gl,s);const y=1/(v+g+h);return o=g*y,s=h*y,t.copy(r).addScaledVector(j9,o).addScaledVector(H9,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let uz=0;class I9 extends R9{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uz++}),this.uuid=Ie(),this.name="",this.type="Material",this.blending=u9,this.side=M5,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=sd,this.blendDst=ld,this.blendEquation=o5,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=KN,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ct,this.stencilZFail=Ct,this.stencilZPass=Ct,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const a=this[t];if(a===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==u9&&(r.blending=this.blending),this.side!==M5&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData);function a(i){const o=[];for(const s in i){const l=i[s];delete l.metadata,o.push(l)}return o}if(t){const i=a(e.textures),o=a(e.images);i.length>0&&(r.textures=i),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let i=0;i!==a;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class X4 extends I9{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new F2(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _3=new u1,N6=new l2;class P0{constructor(e,t,r){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r===!0,this.usage=Or,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,i=this.itemSize;a<i;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)N6.fromBufferAttribute(this,t),N6.applyMatrix3(e),this.setXY(t,N6.x,N6.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)_3.fromBufferAttribute(this,t),_3.applyMatrix3(e),this.setXYZ(t,_3.x,_3.y,_3.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)_3.fromBufferAttribute(this,t),_3.applyMatrix4(e),this.setXYZ(t,_3.x,_3.y,_3.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)_3.fromBufferAttribute(this,t),_3.applyNormalMatrix(e),this.setXYZ(t,_3.x,_3.y,_3.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)_3.fromBufferAttribute(this,t),_3.transformDirection(e),this.setXYZ(t,_3.x,_3.y,_3.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Te(t,this.array)),t}setX(e,t){return this.normalized&&(t=j2(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Te(t,this.array)),t}setY(e,t){return this.normalized&&(t=j2(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Te(t,this.array)),t}setZ(e,t){return this.normalized&&(t=j2(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Te(t,this.array)),t}setW(e,t){return this.normalized&&(t=j2(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=j2(t,this.array),r=j2(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=j2(t,this.array),r=j2(r,this.array),a=j2(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,i){return e*=this.itemSize,this.normalized&&(t=j2(t,this.array),r=j2(r,this.array),a=j2(a,this.array),i=j2(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Or&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _d extends P0{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class xd extends P0{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class v0 extends P0{constructor(e,t,r){super(new Float32Array(e),t,r)}}let fz=0;const W0=new p3,jt=new K3,$9=new u1,M0=new r6,Z5=new r6,R3=new u1;class A0 extends R9{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fz++}),this.uuid=Ie(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?xd:_d)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new J0().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return W0.makeRotationFromQuaternion(e),this.applyMatrix4(W0),this}rotateX(e){return W0.makeRotationX(e),this.applyMatrix4(W0),this}rotateY(e){return W0.makeRotationY(e),this.applyMatrix4(W0),this}rotateZ(e){return W0.makeRotationZ(e),this.applyMatrix4(W0),this}translate(e,t,r){return W0.makeTranslation(e,t,r),this.applyMatrix4(W0),this}scale(e,t,r){return W0.makeScale(e,t,r),this.applyMatrix4(W0),this}lookAt(e){return jt.lookAt(e),jt.updateMatrix(),this.applyMatrix4(jt.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($9).negate(),this.translate($9.x,$9.y,$9.z),this}setFromPoints(e){const t=[];for(let r=0,a=e.length;r<a;r++){const i=e[r];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new v0(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new r6);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new u1(-1/0,-1/0,-1/0),new u1(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const i=t[r];M0.setFromBufferAttribute(i),this.morphTargetsRelative?(R3.addVectors(this.boundingBox.min,M0.min),this.boundingBox.expandByPoint(R3),R3.addVectors(this.boundingBox.max,M0.max),this.boundingBox.expandByPoint(R3)):(this.boundingBox.expandByPoint(M0.min),this.boundingBox.expandByPoint(M0.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new a6);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new u1,1/0);return}if(e){const r=this.boundingSphere.center;if(M0.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const s=t[i];Z5.setFromBufferAttribute(s),this.morphTargetsRelative?(R3.addVectors(M0.min,Z5.min),M0.expandByPoint(R3),R3.addVectors(M0.max,Z5.max),M0.expandByPoint(R3)):(M0.expandByPoint(Z5.min),M0.expandByPoint(Z5.max))}M0.getCenter(r);let a=0;for(let i=0,o=e.count;i<o;i++)R3.fromBufferAttribute(e,i),a=Math.max(a,r.distanceToSquared(R3));if(t)for(let i=0,o=t.length;i<o;i++){const s=t[i],l=this.morphTargetsRelative;for(let u=0,f=s.count;u<f;u++)R3.fromBufferAttribute(s,u),l&&($9.fromBufferAttribute(e,u),R3.add($9)),a=Math.max(a,r.distanceToSquared(R3))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,a=t.position.array,i=t.normal.array,o=t.uv.array,s=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new P0(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let N=0;N<s;N++)u[N]=new u1,f[N]=new u1;const d=new u1,h=new u1,m=new u1,_=new l2,g=new l2,v=new l2,y=new u1,S=new u1;function b(N,P,U){d.fromArray(a,N*3),h.fromArray(a,P*3),m.fromArray(a,U*3),_.fromArray(o,N*2),g.fromArray(o,P*2),v.fromArray(o,U*2),h.sub(d),m.sub(d),g.sub(_),v.sub(_);const Z=1/(g.x*v.y-v.x*g.y);isFinite(Z)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(m,-g.y).multiplyScalar(Z),S.copy(m).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(Z),u[N].add(y),u[P].add(y),u[U].add(y),f[N].add(S),f[P].add(S),f[U].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:r.length}]);for(let N=0,P=w.length;N<P;++N){const U=w[N],Z=U.start,G=U.count;for(let W=Z,q=Z+G;W<q;W+=3)b(r[W+0],r[W+1],r[W+2])}const T=new u1,A=new u1,C=new u1,E=new u1;function M(N){C.fromArray(i,N*3),E.copy(C);const P=u[N];T.copy(P),T.sub(C.multiplyScalar(C.dot(P))).normalize(),A.crossVectors(E,P);const Z=A.dot(f[N])<0?-1:1;l[N*4]=T.x,l[N*4+1]=T.y,l[N*4+2]=T.z,l[N*4+3]=Z}for(let N=0,P=w.length;N<P;++N){const U=w[N],Z=U.start,G=U.count;for(let W=Z,q=Z+G;W<q;W+=3)M(r[W+0]),M(r[W+1]),M(r[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new P0(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,m=r.count;h<m;h++)r.setXYZ(h,0,0,0);const a=new u1,i=new u1,o=new u1,s=new u1,l=new u1,u=new u1,f=new u1,d=new u1;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),g=e.getX(h+1),v=e.getX(h+2);a.fromBufferAttribute(t,_),i.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),f.subVectors(o,i),d.subVectors(a,i),f.cross(d),s.fromBufferAttribute(r,_),l.fromBufferAttribute(r,g),u.fromBufferAttribute(r,v),s.add(f),l.add(f),u.add(f),r.setXYZ(_,s.x,s.y,s.z),r.setXYZ(g,l.x,l.y,l.z),r.setXYZ(v,u.x,u.y,u.z)}else for(let h=0,m=t.count;h<m;h+=3)a.fromBufferAttribute(t,h+0),i.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,i),d.subVectors(a,i),f.cross(d),r.setXYZ(h+0,f.x,f.y,f.z),r.setXYZ(h+1,f.x,f.y,f.z),r.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)R3.fromBufferAttribute(e,t),R3.normalize(),e.setXYZ(t,R3.x,R3.y,R3.z)}toNonIndexed(){function e(s,l){const u=s.array,f=s.itemSize,d=s.normalized,h=new u.constructor(l.length*f);let m=0,_=0;for(let g=0,v=l.length;g<v;g++){s.isInterleavedBufferAttribute?m=l[g]*s.data.stride+s.offset:m=l[g]*f;for(let y=0;y<f;y++)h[_++]=u[m++]}return new P0(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new A0,r=this.index.array,a=this.attributes;for(const s in a){const l=a[s],u=e(l,r);t.setAttribute(s,u)}const i=this.morphAttributes;for(const s in i){const l=[],u=i[s];for(let f=0,d=u.length;f<d;f++){const h=u[f],m=e(h,r);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const u=o[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const u=r[l];e.data.attributes[l]=u.toJSON(e.data)}const a={};let i=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];f.push(m.toJSON(e.data))}f.length>0&&(a[l]=f,i=!0)}i&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const u in a){const f=a[u];this.setAttribute(u,f.clone(t))}const i=e.morphAttributes;for(const u in i){const f=[],d=i[u];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const vl=new p3,Y9=new Ii,Ht=new a6,me=new u1,ge=new u1,ve=new u1,$t=new u1,Yt=new u1,Xt=new u1,z6=new u1,U6=new u1,B6=new u1,V6=new l2,G6=new l2,W6=new l2,Jt=new u1,j6=new u1;class B3 extends K3{constructor(e=new A0,t=new X4){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=a.length;i<o;i++){const s=a[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}raycast(e,t){const r=this.geometry,a=this.material,i=this.matrixWorld;if(a===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),Ht.copy(r.boundingSphere),Ht.applyMatrix4(i),e.ray.intersectsSphere(Ht)===!1)||(vl.copy(i).invert(),Y9.copy(e.ray).applyMatrix4(vl),r.boundingBox!==null&&Y9.intersectsBox(r.boundingBox)===!1))return;let o;const s=r.index,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative,d=r.attributes.uv,h=r.attributes.uv2,m=r.groups,_=r.drawRange;if(s!==null)if(Array.isArray(a))for(let g=0,v=m.length;g<v;g++){const y=m[g],S=a[y.materialIndex],b=Math.max(y.start,_.start),w=Math.min(s.count,Math.min(y.start+y.count,_.start+_.count));for(let T=b,A=w;T<A;T+=3){const C=s.getX(T),E=s.getX(T+1),M=s.getX(T+2);o=H6(this,S,e,Y9,l,u,f,d,h,C,E,M),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const g=Math.max(0,_.start),v=Math.min(s.count,_.start+_.count);for(let y=g,S=v;y<S;y+=3){const b=s.getX(y),w=s.getX(y+1),T=s.getX(y+2);o=H6(this,a,e,Y9,l,u,f,d,h,b,w,T),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=m.length;g<v;g++){const y=m[g],S=a[y.materialIndex],b=Math.max(y.start,_.start),w=Math.min(l.count,Math.min(y.start+y.count,_.start+_.count));for(let T=b,A=w;T<A;T+=3){const C=T,E=T+1,M=T+2;o=H6(this,S,e,Y9,l,u,f,d,h,C,E,M),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const g=Math.max(0,_.start),v=Math.min(l.count,_.start+_.count);for(let y=g,S=v;y<S;y+=3){const b=y,w=y+1,T=y+2;o=H6(this,a,e,Y9,l,u,f,d,h,b,w,T),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function dz(n,e,t,r,a,i,o,s){let l;if(e.side===K0?l=r.intersectTriangle(o,i,a,!0,s):l=r.intersectTriangle(a,i,o,e.side!==C4,s),l===null)return null;j6.copy(s),j6.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(j6);return u<t.near||u>t.far?null:{distance:u,point:j6.clone(),object:n}}function H6(n,e,t,r,a,i,o,s,l,u,f,d){me.fromBufferAttribute(a,u),ge.fromBufferAttribute(a,f),ve.fromBufferAttribute(a,d);const h=n.morphTargetInfluences;if(i&&h){z6.set(0,0,0),U6.set(0,0,0),B6.set(0,0,0);for(let _=0,g=i.length;_<g;_++){const v=h[_],y=i[_];v!==0&&($t.fromBufferAttribute(y,u),Yt.fromBufferAttribute(y,f),Xt.fromBufferAttribute(y,d),o?(z6.addScaledVector($t,v),U6.addScaledVector(Yt,v),B6.addScaledVector(Xt,v)):(z6.addScaledVector($t.sub(me),v),U6.addScaledVector(Yt.sub(ge),v),B6.addScaledVector(Xt.sub(ve),v)))}me.add(z6),ge.add(U6),ve.add(B6)}n.isSkinnedMesh&&(n.boneTransform(u,me),n.boneTransform(f,ge),n.boneTransform(d,ve));const m=dz(n,e,t,r,me,ge,ve,Jt);if(m){s&&(V6.fromBufferAttribute(s,u),G6.fromBufferAttribute(s,f),W6.fromBufferAttribute(s,d),m.uv=T4.getUV(Jt,me,ge,ve,V6,G6,W6,new l2)),l&&(V6.fromBufferAttribute(l,u),G6.fromBufferAttribute(l,f),W6.fromBufferAttribute(l,d),m.uv2=T4.getUV(Jt,me,ge,ve,V6,G6,W6,new l2));const _={a:u,b:f,c:d,normal:new u1,materialIndex:0};T4.getNormal(me,ge,ve,_.normal),m.face=_}return m}class o6 extends A0{constructor(e=1,t=1,r=1,a=1,i=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:i,depthSegments:o};const s=this;a=Math.floor(a),i=Math.floor(i),o=Math.floor(o);const l=[],u=[],f=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,r,t,e,o,i,0),_("z","y","x",1,-1,r,t,-e,o,i,1),_("x","z","y",1,1,e,r,t,a,o,2),_("x","z","y",1,-1,e,r,-t,a,o,3),_("x","y","z",1,-1,e,t,r,a,i,4),_("x","y","z",-1,-1,e,t,-r,a,i,5),this.setIndex(l),this.setAttribute("position",new v0(u,3)),this.setAttribute("normal",new v0(f,3)),this.setAttribute("uv",new v0(d,2));function _(g,v,y,S,b,w,T,A,C,E,M){const N=w/C,P=T/E,U=w/2,Z=T/2,G=A/2,W=C+1,q=E+1;let r1=0,Y=0;const O=new u1;for(let Q=0;Q<q;Q++){const l1=Q*P-Z;for(let I=0;I<W;I++){const n1=I*N-U;O[g]=n1*S,O[v]=l1*b,O[y]=G,u.push(O.x,O.y,O.z),O[g]=0,O[v]=0,O[y]=A>0?1:-1,f.push(O.x,O.y,O.z),d.push(I/C),d.push(1-Q/E),r1+=1}}for(let Q=0;Q<E;Q++)for(let l1=0;l1<C;l1++){const I=h+l1+W*Q,n1=h+l1+W*(Q+1),V=h+(l1+1)+W*(Q+1),z=h+(l1+1)+W*Q;l.push(I,n1,z),l.push(n1,V,z),Y+=6}s.addGroup(m,Y,M),m+=Y,h+=r1}}static fromJSON(e){return new o6(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function I5(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const a=n[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function $3(n){const e={};for(let t=0;t<n.length;t++){const r=I5(n[t]);for(const a in r)e[a]=r[a]}return e}function hz(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const pz={clone:I5,merge:$3};var mz=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gz=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class re extends I9{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mz,this.fragmentShader=gz,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=I5(e.uniforms),this.uniformsGroups=hz(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?t.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[a]={type:"m4",value:o.toArray()}:t.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class yd extends K3{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new p3,this.projectionMatrix=new p3,this.projectionMatrixInverse=new p3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class X0 extends yd{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=il*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return il*2*Math.atan(Math.tan(Mt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,a,i,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mt*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,i=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;i+=o.offsetX*a/l,t-=o.offsetY*r/u,a*=o.width/l,r*=o.height/u}const s=this.filmOffset;s!==0&&(i+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+a,t,t-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const X9=90,J9=1;class vz extends K3{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r;const a=new X0(X9,J9,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new u1(1,0,0)),this.add(a);const i=new X0(X9,J9,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new u1(-1,0,0)),this.add(i);const o=new X0(X9,J9,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new u1(0,1,0)),this.add(o);const s=new X0(X9,J9,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new u1(0,-1,0)),this.add(s);const l=new X0(X9,J9,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new u1(0,0,1)),this.add(l);const u=new X0(X9,J9,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new u1(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[a,i,o,s,l,u]=this.children,f=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=ee,e.xr.enabled=!1;const m=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,a),e.setRenderTarget(r,1),e.render(t,i),e.setRenderTarget(r,2),e.render(t,o),e.setRenderTarget(r,3),e.render(t,s),e.setRenderTarget(r,4),e.render(t,l),r.texture.generateMipmaps=m,e.setRenderTarget(r,5),e.render(t,u),e.setRenderTarget(f),e.toneMapping=d,e.xr.enabled=h,r.texture.needsPMREMUpdate=!0}}class bd extends t4{constructor(e,t,r,a,i,o,s,l,u,f){e=e!==void 0?e:[],t=t!==void 0?t:D5,super(e,t,r,a,i,o,s,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _z extends S9{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new bd(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Y0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new o6(5,5,5),i=new re({name:"CubemapFromEquirect",uniforms:I5(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:K0,blending:Re});i.uniforms.tEquirect.value=t;const o=new B3(a,i),s=t.minFilter;return t.minFilter===J7&&(t.minFilter=Y0),new vz(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,r,a){const i=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,a);e.setRenderTarget(i)}}const Zt=new u1,xz=new u1,yz=new J0;class qe{constructor(e=new u1(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Zt.subVectors(r,t).cross(xz.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const r=e.delta(Zt),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/a;return i<0||i>1?null:t.copy(r).multiplyScalar(i).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||yz.getNormalMatrix(e),a=this.coplanarPoint(Zt).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Z9=new a6,$6=new u1;class Sd{constructor(e=new qe,t=new qe,r=new qe,a=new qe,i=new qe,o=new qe){this.planes=[e,t,r,a,i,o]}set(e,t,r,a,i,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(a),s[4].copy(i),s[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const t=this.planes,r=e.elements,a=r[0],i=r[1],o=r[2],s=r[3],l=r[4],u=r[5],f=r[6],d=r[7],h=r[8],m=r[9],_=r[10],g=r[11],v=r[12],y=r[13],S=r[14],b=r[15];return t[0].setComponents(s-a,d-l,g-h,b-v).normalize(),t[1].setComponents(s+a,d+l,g+h,b+v).normalize(),t[2].setComponents(s+i,d+u,g+m,b+y).normalize(),t[3].setComponents(s-i,d-u,g-m,b-y).normalize(),t[4].setComponents(s-o,d-f,g-_,b-S).normalize(),t[5].setComponents(s+o,d+f,g+_,b+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Z9.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Z9)}intersectsSprite(e){return Z9.center.set(0,0,0),Z9.radius=.7071067811865476,Z9.applyMatrix4(e.matrixWorld),this.intersectsSphere(Z9)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if($6.x=a.normal.x>0?e.max.x:e.min.x,$6.y=a.normal.y>0?e.max.y:e.min.y,$6.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint($6)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wd(){let n=null,e=!1,t=null,r=null;function a(i,o){t(i,o),r=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){n=i}}}function bz(n,e){const t=e.isWebGL2,r=new WeakMap;function a(u,f){const d=u.array,h=u.usage,m=n.createBuffer();n.bindBuffer(f,m),n.bufferData(f,d,h),u.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function i(u,f,d){const h=f.array,m=f.updateRange;n.bindBuffer(d,u),m.count===-1?n.bufferSubData(d,0,h):(t?n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),r.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=r.get(u);f&&(n.deleteBuffer(f.buffer),r.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=r.get(u);(!h||h.version<u.version)&&r.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=r.get(u);d===void 0?r.set(u,a(u,f)):d.version<u.version&&(i(d.buffer,u,f),d.version=u.version)}return{get:o,remove:s,update:l}}class G5 extends A0{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const i=e/2,o=t/2,s=Math.floor(r),l=Math.floor(a),u=s+1,f=l+1,d=e/s,h=t/l,m=[],_=[],g=[],v=[];for(let y=0;y<f;y++){const S=y*h-o;for(let b=0;b<u;b++){const w=b*d-i;_.push(w,-S,0),g.push(0,0,1),v.push(b/s),v.push(1-y/l)}}for(let y=0;y<l;y++)for(let S=0;S<s;S++){const b=S+u*y,w=S+u*(y+1),T=S+1+u*(y+1),A=S+1+u*y;m.push(b,w,A),m.push(w,T,A)}this.setIndex(m),this.setAttribute("position",new v0(_,3)),this.setAttribute("normal",new v0(g,3)),this.setAttribute("uv",new v0(v,2))}static fromJSON(e){return new G5(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sz=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,wz=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Az=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tz=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ez=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cz=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mz="vec3 transformed = vec3( position );",Dz=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kz=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Rz=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Iz=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Oz=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Lz=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fz=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pz=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nz=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zz=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uz=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bz=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vz=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Gz=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wz=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jz=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hz=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,$z=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yz=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xz="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jz=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zz=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qz=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qz=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kz=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iU=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oU=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cU=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,uU=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fU=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,dU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hU=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,pU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mU=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,gU=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,vU=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_U=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xU=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yU=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,bU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,AU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,TU=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EU=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CU=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,MU=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DU=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kU=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RU=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IU=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,OU=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,LU=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,FU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,PU=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BU=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,VU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,GU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,WU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,jU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$U=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,YU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KU=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,eB=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tB=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,nB=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rB=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aB=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,iB=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oB=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sB=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lB=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cB=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uB=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fB=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,dB=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,hB=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,pB=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,mB=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,gB=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,vB=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,_B=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,xB=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yB=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bB=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,SB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wB=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,AB=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TB=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,EB=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CB=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,MB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DB=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kB=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RB=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IB=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OB=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LB=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FB=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PB=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NB=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zB=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UB=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BB=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VB=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GB=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WB=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jB=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HB=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$B=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,YB=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XB=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JB=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ZB=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qB=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Re,depthTest:!1,depthWrite:!1})}function wl(){return new re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Re,depthTest:!1,depthWrite:!1})}function Al(){return new re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Re,depthTest:!1,depthWrite:!1})}function Oi(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sV(n){let e=new WeakMap,t=null;function r(s){if(s&&s.isTexture){const l=s.mapping,u=l===Dr||l===kr,f=l===D5||l===k5;if(u||f)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new bl(n)),d=u?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(u&&d&&d.height>0||f&&d&&a(d)){t===null&&(t=new bl(n));const h=u?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",i),h.texture}else return null}}}return s}function a(s){let l=0;const u=6;for(let f=0;f<u;f++)s[f]!==void 0&&l++;return l===u}function i(s){const l=s.target;l.removeEventListener("dispose",i);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function lV(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const a=t(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function cV(n,e,t,r){const a={},i=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete a[h.id];const m=i.get(h);m&&(e.remove(m),i.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(d,h){return a[h.id]===!0||(h.addEventListener("dispose",o),a[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],34962);const m=d.morphAttributes;for(const _ in m){const g=m[_];for(let v=0,y=g.length;v<y;v++)e.update(g[v],34962)}}function u(d){const h=[],m=d.index,_=d.attributes.position;let g=0;if(m!==null){const S=m.array;g=m.version;for(let b=0,w=S.length;b<w;b+=3){const T=S[b+0],A=S[b+1],C=S[b+2];h.push(T,A,A,C,C,T)}}else{const S=_.array;g=_.version;for(let b=0,w=S.length/3-1;b<w;b+=3){const T=b+0,A=b+1,C=b+2;h.push(T,A,A,C,C,T)}}const v=new(dd(h)?xd:_d)(h,1);v.version=g;const y=i.get(d);y&&e.remove(y),i.set(d,v)}function f(d){const h=i.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return i.get(d)}return{get:s,update:l,getWireframeAttribute:f}}function uV(n,e,t,r){const a=r.isWebGL2;let i;function o(h){i=h}let s,l;function u(h){s=h.type,l=h.bytesPerElement}function f(h,m){n.drawElements(i,m,s,h*l),t.update(m,i,1)}function d(h,m,_){if(_===0)return;let g,v;if(a)g=n,v="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](i,m,s,h*l,_),t.update(m,i,_)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=d}function fV(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,o,s){switch(t.calls++,o){case 4:t.triangles+=s*(i/3);break;case 1:t.lines+=s*(i/2);break;case 3:t.lines+=s*(i-1);break;case 2:t.lines+=s*i;break;case 0:t.points+=s*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function dV(n,e){return n[0]-e[0]}function hV(n,e){return Math.abs(e[1])-Math.abs(n[1])}function pV(n,e,t){const r={},a=new Float32Array(8),i=new WeakMap,o=new V3,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,f,d,h){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=i.get(f);if(v===void 0||v.count!==g){let W=function(){Z.dispose(),i.delete(f),f.removeEventListener("dispose",W)};v!==void 0&&v.texture.dispose();const b=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,T=f.morphAttributes.color!==void 0,A=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],E=f.morphAttributes.color||[];let M=0;b===!0&&(M=1),w===!0&&(M=2),T===!0&&(M=3);let N=f.attributes.position.count*M,P=1;N>e.maxTextureSize&&(P=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const U=new Float32Array(N*P*4*g),Z=new gd(U,N,P,g);Z.type=a9,Z.needsUpdate=!0;const G=M*4;for(let q=0;q<g;q++){const r1=A[q],Y=C[q],O=E[q],Q=N*P*4*q;for(let l1=0;l1<r1.count;l1++){const I=l1*G;b===!0&&(o.fromBufferAttribute(r1,l1),U[Q+I+0]=o.x,U[Q+I+1]=o.y,U[Q+I+2]=o.z,U[Q+I+3]=0),w===!0&&(o.fromBufferAttribute(Y,l1),U[Q+I+4]=o.x,U[Q+I+5]=o.y,U[Q+I+6]=o.z,U[Q+I+7]=0),T===!0&&(o.fromBufferAttribute(O,l1),U[Q+I+8]=o.x,U[Q+I+9]=o.y,U[Q+I+10]=o.z,U[Q+I+11]=O.itemSize===4?o.w:1)}}v={count:g,texture:Z,size:new l2(N,P)},i.set(f,v),f.addEventListener("dispose",W)}let y=0;for(let b=0;b<m.length;b++)y+=m[b];const S=f.morphTargetsRelative?1:1-y;h.getUniforms().setValue(n,"morphTargetBaseInfluence",S),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const _=m===void 0?0:m.length;let g=r[f.id];if(g===void 0||g.length!==_){g=[];for(let w=0;w<_;w++)g[w]=[w,0];r[f.id]=g}for(let w=0;w<_;w++){const T=g[w];T[0]=w,T[1]=m[w]}g.sort(hV);for(let w=0;w<8;w++)w<_&&g[w][1]?(s[w][0]=g[w][0],s[w][1]=g[w][1]):(s[w][0]=Number.MAX_SAFE_INTEGER,s[w][1]=0);s.sort(dV);const v=f.morphAttributes.position,y=f.morphAttributes.normal;let S=0;for(let w=0;w<8;w++){const T=s[w],A=T[0],C=T[1];A!==Number.MAX_SAFE_INTEGER&&C?(v&&f.getAttribute("morphTarget"+w)!==v[A]&&f.setAttribute("morphTarget"+w,v[A]),y&&f.getAttribute("morphNormal"+w)!==y[A]&&f.setAttribute("morphNormal"+w,y[A]),a[w]=C,S+=C):(v&&f.hasAttribute("morphTarget"+w)===!0&&f.deleteAttribute("morphTarget"+w),y&&f.hasAttribute("morphNormal"+w)===!0&&f.deleteAttribute("morphNormal"+w),a[w]=0)}const b=f.morphTargetsRelative?1:1-S;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:l}}function mV(n,e,t,r){let a=new WeakMap;function i(l){const u=r.render.frame,f=l.geometry,d=e.get(l,f);return a.get(d)!==u&&(e.update(d),a.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){a=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:i,dispose:o}}const Ad=new t4,Td=new gd,Ed=new nz,Cd=new bd,Tl=[],El=[],Cl=new Float32Array(16),Ml=new Float32Array(9),Dl=new Float32Array(4);function W5(n,e,t){const r=n[0];if(r<=0||r>0)return n;const a=e*t;let i=Tl[a];if(i===void 0&&(i=new Float32Array(a),Tl[a]=i),e!==0){r.toArray(i,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(i,s)}return i}function D3(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function k3(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Z7(n,e){let t=El[e];t===void 0&&(t=new Int32Array(e),El[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function gV(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vV(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(D3(t,e))return;n.uniform2fv(this.addr,e),k3(t,e)}}function _V(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(D3(t,e))return;n.uniform3fv(this.addr,e),k3(t,e)}}function xV(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(D3(t,e))return;n.uniform4fv(this.addr,e),k3(t,e)}}function yV(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(D3(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),k3(t,e)}else{if(D3(t,r))return;Dl.set(r),n.uniformMatrix2fv(this.addr,!1,Dl),k3(t,r)}}function bV(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(D3(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),k3(t,e)}else{if(D3(t,r))return;Ml.set(r),n.uniformMatrix3fv(this.addr,!1,Ml),k3(t,r)}}function SV(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(D3(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),k3(t,e)}else{if(D3(t,r))return;Cl.set(r),n.uniformMatrix4fv(this.addr,!1,Cl),k3(t,r)}}function wV(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function AV(n,e){const t=this.cache;D3(t,e)||(n.uniform2iv(this.addr,e),k3(t,e))}function TV(n,e){const t=this.cache;D3(t,e)||(n.uniform3iv(this.addr,e),k3(t,e))}function EV(n,e){const t=this.cache;D3(t,e)||(n.uniform4iv(this.addr,e),k3(t,e))}function CV(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function MV(n,e){const t=this.cache;D3(t,e)||(n.uniform2uiv(this.addr,e),k3(t,e))}function DV(n,e){const t=this.cache;D3(t,e)||(n.uniform3uiv(this.addr,e),k3(t,e))}function kV(n,e){const t=this.cache;D3(t,e)||(n.uniform4uiv(this.addr,e),k3(t,e))}function RV(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTexture2D(e||Ad,a)}function IV(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Ed,a)}function OV(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Cd,a)}function LV(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Td,a)}function FV(n){switch(n){case 5126:return gV;case 35664:return vV;case 35665:return _V;case 35666:return xV;case 35674:return yV;case 35675:return bV;case 35676:return SV;case 5124:case 35670:return wV;case 35667:case 35671:return AV;case 35668:case 35672:return TV;case 35669:case 35673:return EV;case 5125:return CV;case 36294:return MV;case 36295:return DV;case 36296:return kV;case 35678:case 36198:case 36298:case 36306:case 35682:return RV;case 35679:case 36299:case 36307:return IV;case 35680:case 36300:case 36308:case 36293:return OV;case 36289:case 36303:case 36311:case 36292:return LV}}function PV(n,e){n.uniform1fv(this.addr,e)}function NV(n,e){const t=W5(e,this.size,2);n.uniform2fv(this.addr,t)}function zV(n,e){const t=W5(e,this.size,3);n.uniform3fv(this.addr,t)}function UV(n,e){const t=W5(e,this.size,4);n.uniform4fv(this.addr,t)}function BV(n,e){const t=W5(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function VV(n,e){const t=W5(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function GV(n,e){const t=W5(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function WV(n,e){n.uniform1iv(this.addr,e)}function jV(n,e){n.uniform2iv(this.addr,e)}function HV(n,e){n.uniform3iv(this.addr,e)}function $V(n,e){n.uniform4iv(this.addr,e)}function YV(n,e){n.uniform1uiv(this.addr,e)}function XV(n,e){n.uniform2uiv(this.addr,e)}function JV(n,e){n.uniform3uiv(this.addr,e)}function ZV(n,e){n.uniform4uiv(this.addr,e)}function qV(n,e,t){const r=this.cache,a=e.length,i=Z7(t,a);D3(r,i)||(n.uniform1iv(this.addr,i),k3(r,i));for(let o=0;o!==a;++o)t.setTexture2D(e[o]||Ad,i[o])}function QV(n,e,t){const r=this.cache,a=e.length,i=Z7(t,a);D3(r,i)||(n.uniform1iv(this.addr,i),k3(r,i));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||Ed,i[o])}function KV(n,e,t){const r=this.cache,a=e.length,i=Z7(t,a);D3(r,i)||(n.uniform1iv(this.addr,i),k3(r,i));for(let o=0;o!==a;++o)t.setTextureCube(e[o]||Cd,i[o])}function eG(n,e,t){const r=this.cache,a=e.length,i=Z7(t,a);D3(r,i)||(n.uniform1iv(this.addr,i),k3(r,i));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||Td,i[o])}function tG(n){switch(n){case 5126:return PV;case 35664:return NV;case 35665:return zV;case 35666:return UV;case 35674:return BV;case 35675:return VV;case 35676:return GV;case 5124:case 35670:return WV;case 35667:case 35671:return jV;case 35668:case 35672:return HV;case 35669:case 35673:return $V;case 5125:return YV;case 36294:return XV;case 36295:return JV;case 36296:return ZV;case 35678:case 36198:case 36298:case 36306:case 35682:return qV;case 35679:case 36299:case 36307:return QV;case 35680:case 36300:case 36308:case 36293:return KV;case 36289:case 36303:case 36311:case 36292:return eG}}class nG{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=FV(t.type)}}class rG{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=tG(t.type)}}class aG{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let i=0,o=a.length;i!==o;++i){const s=a[i];s.setValue(e,t[s.id],r)}}}const Kt=/(\w+)(\])?(\[|\.)?/g;function kl(n,e){n.seq.push(e),n.map[e.id]=e}function iG(n,e,t){const r=n.name,a=r.length;for(Kt.lastIndex=0;;){const i=Kt.exec(r),o=Kt.lastIndex;let s=i[1];const l=i[2]==="]",u=i[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===a){kl(t,u===void 0?new nG(s,n,e):new rG(s,n,e));break}else{let d=t.map[s];d===void 0&&(d=new aG(s),kl(t,d)),t=d}}}class o7{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,35718);for(let a=0;a<r;++a){const i=e.getActiveUniform(t,a),o=e.getUniformLocation(t,i.name);iG(i,o,this)}}setValue(e,t,r,a){const i=this.map[t];i!==void 0&&i.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let i=0,o=t.length;i!==o;++i){const s=t[i],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,i=e.length;a!==i;++a){const o=e[a];o.id in t&&r.push(o)}return r}}function Rl(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}let oG=0;function sG(n,e){const t=n.split(`
`),r=[],a=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let o=a;o<i;o++){const s=o+1;r.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return r.join(`
`)}function lG(n){switch(n){case b9:return["Linear","( value )"];case i3:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Il(n,e,t){const r=n.getShaderParameter(e,35713),a=n.getShaderInfoLog(e).trim();if(r&&a==="")return"";const i=/ERROR: 0:(\d+)/.exec(a);if(i){const o=parseInt(i[1]);return t.toUpperCase()+`

`+a+`

`+sG(n.getShaderSource(e),o)}else return a}function cG(n,e){const t=lG(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function uG(n,e){let t;switch(e){case MN:t="Linear";break;case DN:t="Reinhard";break;case kN:t="OptimizedCineon";break;case RN:t="ACESFilmic";break;case IN:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fG(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(c8).join(`
`)}function dG(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function hG(n,e){const t={},r=n.getProgramParameter(e,35721);for(let a=0;a<r;a++){const i=n.getActiveAttrib(e,a),o=i.name;let s=1;i.type===35674&&(s=2),i.type===35675&&(s=3),i.type===35676&&(s=4),t[o]={type:i.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function c8(n){return n!==""}function Ol(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ll(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pG=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pr(n){return n.replace(pG,mG)}function mG(n,e){const t=E2[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Pr(t)}const gG=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(n){return n.replace(gG,vG)}function vG(n,e,t,r){let a="";for(let i=parseInt(e);i<parseInt(t);i++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return a}function Pl(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _G(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===od?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===oN?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===l8&&(e="SHADOWMAP_TYPE_VSM"),e}function xG(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case D5:case k5:e="ENVMAP_TYPE_CUBE";break;case X7:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yG(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case k5:e="ENVMAP_MODE_REFRACTION";break}return e}function bG(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cd:e="ENVMAP_BLENDING_MULTIPLY";break;case EN:e="ENVMAP_BLENDING_MIX";break;case CN:e="ENVMAP_BLENDING_ADD";break}return e}function SG(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function wG(n,e,t,r){const a=n.getContext(),i=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=_G(t),u=xG(t),f=yG(t),d=bG(t),h=SG(t),m=t.isWebGL2?"":fG(t),_=dG(i),g=a.createProgram();let v,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[_].filter(c8).join(`
`),v.length>0&&(v+=`
`),y=[m,_].filter(c8).join(`
`),y.length>0&&(y+=`
`].filter(c8).join(`
`].filter(c8).join(`
`)),o=Pr(o),o=Ol(o,t),o=Ll(o,t),s=Pr(s),s=Ol(s,t),s=Ll(s,t),o=Fl(o),s=Fl(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,y=["#define varying in",t.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=S+v+o,w=S+y+s,T=Rl(a,35633,b),A=Rl(a,35632,w);if(a.attachShader(g,T),a.attachShader(g,A),t.index0AttributeName!==void 0?a.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g),n.debug.checkShaderErrors){const M=a.getProgramInfoLog(g).trim(),N=a.getShaderInfoLog(T).trim(),P=a.getShaderInfoLog(A).trim();let U=!0,Z=!0;if(a.getProgramParameter(g,35714)===!1){U=!1;const G=Il(a,T,"vertex"),W=Il(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,35715)+`

Program Info Log: `+M+`
`+G+`
	gl_Position = vec4( position, 1.0 );
}`,BG=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;