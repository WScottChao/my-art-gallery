var f=Object.defineProperty,c=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var a=(i,t,o)=>t in i?f(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o,p=(i,t)=>{for(var o in t||(t={}))g.call(t,o)&&a(i,o,t[o]);if(m)for(var o of m(t))l.call(t,o)&&a(i,o,t[o]);return i},e=(i,t)=>c(i,d(t));var r=(i,t,o)=>(a(i,typeof t!="symbol"?t+"":t,o),o);import{a$ as C,at as n}from"./index-9e787fa5.js";import{e as u}from"./chartEditStore-56d3c83a.js";import{G as s}from"./index-f6f97c94.js";import"./plugin-e1dac962.js";import"./icon-caec1666.js";import"./SettingItem-264e825b.js";/* empty css                                                                      */import"./SettingItemBox-ee4024ad.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-374cf080.js";import"./index.esm.min-33db7d4b.js";import"./fileTypeEnum-21359a08.js";const h={dataset:"https://www.mtruning.club/",borderRadius:10};class j extends u{constructor(){super(...arguments);r(this,"key",s.key);r(this,"attr",e(p({},C),{w:1200,h:800,zIndex:-1}));r(this,"chartConfig",n(s));r(this,"option",n(h))}}export{j as default,h as option};