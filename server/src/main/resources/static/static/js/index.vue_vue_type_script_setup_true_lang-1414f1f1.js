import{L as q}from"./index-567c51a3.js";import{d as U,Z as J,r as x,a as Q,aw as w,ax as G,H as M,j as o,k as l,C as r,w as e,e as t,n as a,f as m,c as V,l as X,F as $,t as R,a7 as L,b as P,z as N,I as ee,W as te,ay as D,V as E,ag as ne,az as oe,aA as se,S as ae,x as le,aB as ce,aC as T}from"./index-9e787fa5.js";import{i as z}from"./icon-caec1666.js";const ue=U({__name:"index",props:{modelShow:Boolean},emits:["update:modelShow"],setup(b,{emit:f}){const k=b,C=f,{HelpOutlineIcon:H,CloseIcon:y}=z.ionicons5,s=J(),p=x(!1),I=Q([{key:w.ASIDE_ALL_COLLAPSED,value:s.getAsideAllCollapsed,type:"switch",name:"菜单折叠",desc:"首页菜单折叠时隐藏至界面外"},{key:w.HIDE_PACKAGE_ONE_CATEGORY,value:s.getHidePackageOneCategory,type:"switch",name:"隐藏分类",desc:"工作空间表单分类只有单项时隐藏"},{key:w.CHANGE_LANG_RELOAD,value:s.getChangeLangReload,type:"switch",name:"切换语言",desc:"切换语言重新加载页面",tip:"若遇到部分区域语言切换失败，则建议开启"},{key:"divider1",type:"divider",name:"",desc:"",value:""},{key:w.CHART_TOOLS_STATUS_HIDE,value:s.getChartToolsStatusHide,type:"switch",name:"隐藏工具栏",desc:"鼠标移入时，会展示切换到展开模式"},{key:w.CHART_TOOLS_STATUS,value:s.getChartToolsStatus,type:"select",name:"工具栏展示",desc:"工作空间工具栏展示方式",options:[{label:"侧边栏",value:G.ASIDE},{label:"底部 Dock",value:G.DOCK}]},{key:"divider0",type:"divider",name:"",desc:"",value:""},{key:w.CHART_MOVE_DISTANCE,value:s.getChartMoveDistance,type:"number",name:"移动距离",min:1,step:1,suffix:"px",desc:"工作空间方向键控制移动距离"},{key:w.CHART_ALIGN_RANGE,value:s.getChartAlignRange,type:"number",name:"吸附距离",min:10,step:2,suffix:"px",desc:"工作空间移动图表时的吸附距离"}]);M(()=>k.modelShow,S=>{p.value=S});const g=()=>{C("update:modelShow",!1)},h=(S,u)=>{s.setItem(u.key,u.value)};return(S,u)=>{const _=o("n-h3"),d=o("n-icon"),c=o("n-space"),A=o("n-divider"),v=o("n-text"),O=o("n-switch"),j=o("n-input-number"),F=o("n-select"),K=o("n-tooltip"),Y=o("n-list-item"),W=o("n-list"),Z=o("n-modal");return l(),r(Z,{show:p.value,"onUpdate:show":u[0]||(u[0]=n=>p.value=n),onAfterLeave:g},{default:e(()=>[t(W,{bordered:"",class:"go-system-setting"},{header:e(()=>[t(c,{justify:"space-between"},{default:e(()=>[t(_,{class:"go-mb-0"},{default:e(()=>[a("系统设置")]),_:1}),t(d,{size:"20",class:"go-cursor-pointer",onClick:g},{default:e(()=>[t(m(y))]),_:1})]),_:1})]),default:e(()=>[(l(!0),V($,null,X(I,n=>(l(),r(Y,{key:n.key},{default:e(()=>[n.type==="divider"?(l(),r(A,{key:0,style:{margin:"0"}})):(l(),r(c,{key:1,size:40},{default:e(()=>[t(c,null,{default:e(()=>[t(v,{class:"item-left"},{default:e(()=>[a(R(n.name),1)]),_:2},1024),n.type==="switch"?(l(),r(O,{key:0,value:n.value,"onUpdate:value":[i=>n.value=i,i=>h(i,n)],size:"small"},null,8,["value","onUpdate:value"])):n.type==="number"?(l(),r(j,{key:1,value:n.value,"onUpdate:value":[i=>n.value=i,i=>h(i,n)],class:"input-num-width",size:"small",step:n.step||null,suffix:n.suffix||null,min:n.min||0},null,8,["value","onUpdate:value","step","suffix","min"])):n.type==="select"?(l(),r(F,{key:2,class:"select-min-width",value:n.value,"onUpdate:value":[i=>n.value=i,i=>h(i,n)],size:"small",options:n.options},null,8,["value","onUpdate:value","options"])):L("",!0)]),_:2},1024),t(c,null,{default:e(()=>[t(v,{class:"item-right"},{default:e(()=>[a(R(n.desc),1)]),_:2},1024),n.tip?(l(),r(K,{key:0,trigger:"hover"},{trigger:e(()=>[t(d,{size:"21"},{default:e(()=>[t(m(H))]),_:1})]),default:e(()=>[P("span",null,R(n.tip),1)]),_:2},1024)):L("",!0)]),_:2},1024)]),_:2},1024))]),_:2},1024))),128))]),_:1})]),_:1},8,["show"])}}});const re=N(ue,[["__scopeId","data-v-584e8b6a"]]),_e=U({__name:"index",props:{modelShow:Boolean},emits:["update:modelShow"],setup(b,{emit:f}){const k=b,C=f,{HelpOutlineIcon:H,CloseIcon:y}=z.ionicons5,s=x(!1);M(()=>k.modelShow,I=>{s.value=I});const p=()=>{C("update:modelShow",!1)};return(I,g)=>{const h=o("n-h3"),S=o("n-icon"),u=o("n-space"),_=o("n-text"),d=o("n-a"),c=o("n-list-item"),A=o("n-list"),v=o("n-modal");return l(),r(v,{show:s.value,"onUpdate:show":g[0]||(g[0]=O=>s.value=O),onAfterLeave:p},{default:e(()=>[t(A,{bordered:"",class:"go-system-info"},{header:e(()=>[t(u,{justify:"space-between"},{default:e(()=>[t(h,{class:"go-mb-0"},{default:e(()=>[a("关于我们")]),_:1}),t(S,{size:"20",class:"go-cursor-pointer",onClick:p},{default:e(()=>[t(m(y))]),_:1})]),_:1})]),default:e(()=>[t(c,null,{default:e(()=>[t(u,{class:"go-my-2",size:20},{default:e(()=>[t(_,{class:"item-left"},{default:e(()=>[a("版权声明：")]),_:1}),t(_,null,{default:e(()=>[a(" GoView 版权属于 "),t(d,{href:"https://gitee.com/MTrun/go-view",target:"_blank"},{default:e(()=>[a("https://gitee.com/MTrun/go-view")]),_:1}),a(" 项目作者 ")]),_:1})]),_:1})]),_:1}),t(c,null,{default:e(()=>[t(u,{class:"go-my-2",size:20},{default:e(()=>[t(_,{class:"item-left"},{default:e(()=>[a("协议备注：")]),_:1}),t(_,null,{default:e(()=>[a(" 请遵守开源 MIT 协议，以上声明 "),t(_,{type:"error"},{default:e(()=>[a("不可删除")]),_:1}),a("，否则视作侵权行为，后果自负！ ")]),_:1})]),_:1})]),_:1}),t(c,null,{default:e(()=>[t(u,{class:"go-mt-2",size:20},{default:e(()=>[t(_,{class:"item-left"},{default:e(()=>[a("商业授权：")]),_:1}),t(_,null,{default:e(()=>[a(" 若不想保留版权声明，请通过仓库/交流群 联系项目作者，进行授权 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])}}});const de=N(_e,[["__scopeId","data-v-1a59e5fc"]]),B=""+new URL("../png/person.png",import.meta.url).href,ie={class:"user-info-box"},pe=U({__name:"index",setup(b){const{ChatboxEllipsesIcon:f,PersonIcon:k,LogOutOutlineIcon:C,SettingsSharpIcon:H}=z.ionicons5,y=x(!1),s=x(!1),p=x(!1),g=x([{label:"我的信息",key:"info",type:"render",render:()=>E("div",{style:"display: flex; align-items: center; padding: 8px 12px;"},[E(D,{round:!0,style:"margin-right: 12px;",src:B}),E("div",null,[E("div",null,[E(ne,{depth:2},{default:()=>{const d=oe(se.GO_SYSTEM_STORE);return d?d[ae.USER_INFO][le.USER_NAME]:"admin"}})])])])},{type:"divider",key:"d1"},{label:ee("global.logout"),key:"logout",icon:te(C)}]),h=d=>{p.value=!0},S=()=>{s.value=!0},u=()=>{y.value=!0},_=d=>{switch(d){case"contact":u();break;case"sysSet":S();break;case"logout":ce();break}};return(d,c)=>{const A=o("n-dropdown");return l(),V($,null,[t(A,{trigger:"hover",onSelect:_,"show-arrow":!0,options:g.value},{default:e(()=>[P("div",ie,[p.value?(l(),r(m(k),{key:0})):L("",!0),p.value?L("",!0):(l(),r(m(D),{key:1,round:"","object-fit":"cover",size:"medium",src:m(B),onError:h},null,8,["src"]))])]),_:1},8,["options"]),t(m(re),{modelShow:s.value,"onUpdate:modelShow":c[0]||(c[0]=v=>s.value=v)},null,8,["modelShow"]),t(m(de),{modelShow:y.value,"onUpdate:modelShow":c[1]||(c[1]=v=>y.value=v)},null,8,["modelShow"])],64)}}});const me=N(pe,[["__scopeId","data-v-f70391cb"]]),ge=U({__name:"index",setup(b){return(f,k)=>(l(),r(m(q),null,{left:e(()=>[T(f.$slots,"left")]),center:e(()=>[T(f.$slots,"center")]),"ri-left":e(()=>[T(f.$slots,"ri-left")]),"ri-right":e(()=>[t(m(me)),T(f.$slots,"ri-right")]),_:3}))}});export{re as G,ge as _};