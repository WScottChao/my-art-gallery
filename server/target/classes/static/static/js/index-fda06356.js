var F=(m,I,f)=>new Promise((L,h)=>{var T=a=>{try{b(f.next(a))}catch(g){h(g)}},i=a=>{try{b(f.throw(a))}catch(g){h(g)}},b=a=>a.done?L(a.value):Promise.resolve(a.value).then(T,i);b((f=f.apply(m,I)).next())});import{d as _e,u as pe,r as O,aO as k,H as me,j as s,k as d,c as S,e,w as t,f as n,b as y,a7 as V,Q as fe,n as u,t as D,cD as P,U as ge,C as E,d8 as ve,F as H,l as M,D as $,au as Ce,aU as be,R as we,p as ye,q as he,av as ke,z as Se}from"./index-9e787fa5.js";import{F as N}from"./fileTypeEnum-21359a08.js";import{u as Ee,E as _}from"./chartEditStore-56d3c83a.js";/* empty css                                                                      */import{l as Ie}from"./index-81fca23c.js";import{i as Y}from"./icon-caec1666.js";import{S as Le}from"./StylesSetting-502eee75.js";import{b as Te}from"./project-c1868b8d.js";import"./plugin-e1dac962.js";import"./index.vue_vue_type_script_setup_true_lang-1414f1f1.js";import"./index-567c51a3.js";import"./SettingItem-264e825b.js";import"./SettingItemBox-ee4024ad.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-374cf080.js";import"./logo-9c330988.js";const ze=""+new URL("../png/noImage.png",import.meta.url).href,xe=m=>(ye("data-v-ea772c01"),m=m(),he(),m),Re={class:"go-canvas-setting"},Ue={class:"upload-box"},Fe=["src"],Oe={class:"upload-img"},De=xe(()=>y("img",{src:ze},null,-1)),Pe={class:"picker-height"},$e=_e({__name:"index",setup(m){const{ColorPaletteIcon:I}=Y.ionicons5,{ScaleIcon:f,FitToScreenIcon:L,FitToHeightIcon:h,FitToWidthIcon:T}=Y.carbon,i=Ee(),b=pe(),a=i.getEditCanvasConfig,g=i.getEditCanvas,z=O(),x=O(!1),R=O(0),K=Ie(()=>ke(()=>import("./index-d13a4e2b.js"),["./index-d13a4e2b.js","./index-9e787fa5.js","..\\css\\index-28fc6980.css","./chartEditStore-56d3c83a.js","./plugin-e1dac962.js","./icon-caec1666.js","./index-81fca23c.js","./index.vue_vue_type_script_setup_true_lang-1414f1f1.js","./index-567c51a3.js","..\\css\\index-4c301dae.css","..\\css\\index-7cd8e5c8.css","..\\css\\index-0c58fa27.css","..\\css\\index-9ce8ee51.css"],import.meta.url)),X=[{label:"应用颜色",value:0},{label:"应用背景",value:1}],j=[{key:"ChartTheme",title:"主题颜色",icon:I,render:K}],q=[{key:k.FIT,title:"自适应",icon:f,desc:"自适应比例展示，页面会有留白"},{key:k.SCROLL_Y,title:"Y轴滚动",icon:T,desc:"X轴铺满，Y轴自适应滚动"},{key:k.SCROLL_X,title:"X轴滚动",icon:h,desc:"Y轴铺满，X轴自适应滚动"},{key:k.FULL,title:"铺满",icon:L,desc:"强行拉伸画面，填充所有视图"}];me(()=>a.selectColor,c=>{R.value=c?0:1},{immediate:!0});const A=c=>c>50,G=()=>{i.computedScale()},W=l=>F(this,[l],function*({file:c}){z.value=[];const r=c.file.type;return c.file.size>1024*1024*P?(window.$message.warning(`图片超出 ${P}M 限制，请重新上传！`),!1):r!==N.PNG&&r!==N.JPEG&&r!==N.GIF?(window.$message.warning("文件格式不符合，请重新上传！"),!1):!0}),J=c=>{a.selectColor=c==0},Q=()=>{i.setEditCanvasConfig(_.BACKGROUND_IMAGE,void 0),i.setEditCanvasConfig(_.SELECT_COLOR,!0)},Z=()=>{x.value=!0,setTimeout(()=>{x.value=!1})},ee=()=>{i.setEditCanvasConfig(_.BACKGROUND,void 0),a.backgroundImage&&i.setEditCanvasConfig(_.SELECT_COLOR,!1),Z()},te=c=>{const{file:l}=c;Ce(()=>F(this,null,function*(){if(l.file){const r=new File([l.file],`${be()}_index_background.png`,{type:l.file.type});let v=new FormData;v.append("file",r);const p=yield Te(v);if(p&&p.code===we.SUCCESS){p.data.fileurl?i.setEditCanvasConfig(_.BACKGROUND_IMAGE,`${p.data.fileurl}?time=${new Date().getTime()}`):i.setEditCanvasConfig(_.BACKGROUND_IMAGE,`${b.getFetchInfo.OSSUrl||""}${p.data.fileName}?time=${new Date().getTime()}`),i.setEditCanvasConfig(_.SELECT_COLOR,!1);return}window.$message.error("添加图片失败，请稍后重试！")}else window.$message.error("添加图片失败，请稍后重试！")}))},ae=c=>{i.setEditCanvasConfig(_.PREVIEW_SCALE_TYPE,c)};return(c,l)=>{const r=s("n-input-number"),v=s("n-form-item"),p=s("n-form"),w=s("n-text"),oe=s("n-upload-dragger"),ne=s("n-upload"),se=s("n-color-picker"),C=s("n-space"),le=s("n-select"),U=s("n-button"),B=s("n-icon"),ie=s("n-tooltip"),ce=s("n-button-group"),re=s("n-divider"),de=s("n-tab-pane"),ue=s("n-tabs");return d(),S("div",Re,[e(p,{inline:"","label-width":45,size:"small","label-placement":"left"},{default:t(()=>[e(v,{label:"宽度"},{default:t(()=>[e(r,{size:"small",value:n(a).width,"onUpdate:value":[l[0]||(l[0]=o=>n(a).width=o),G],disabled:n(g).lockScale,validator:A},null,8,["value","disabled"])]),_:1}),e(v,{label:"高度"},{default:t(()=>[e(r,{size:"small",value:n(a).height,"onUpdate:value":[l[1]||(l[1]=o=>n(a).height=o),G],disabled:n(g).lockScale,validator:A},null,8,["value","disabled"])]),_:1})]),_:1}),y("div",Ue,[e(ne,{"file-list":z.value,"onUpdate:fileList":l[2]||(l[2]=o=>z.value=o),"show-file-list":!1,customRequest:te,onBeforeUpload:W},{default:t(()=>[e(oe,null,{default:t(()=>[n(a).backgroundImage?(d(),S("img",{key:0,class:"upload-show",src:n(a).backgroundImage,alt:"背景"},null,8,Fe)):V("",!0),fe(y("div",Oe,[De,e(w,{class:"upload-desc",depth:"3"},{default:t(()=>[u(" 背景图需小于 "+D(n(P))+"M ，格式为 png/jpg/gif 的文件 ",1)]),_:1})],512),[[ge,!n(a).backgroundImage]])]),_:1})]),_:1},8,["file-list"])]),e(C,{vertical:"",size:12},{default:t(()=>[e(C,null,{default:t(()=>[e(w,null,{default:t(()=>[u("背景颜色")]),_:1}),y("div",Pe,[x.value?V("",!0):(d(),E(se,{key:0,size:"small",style:{width:"250px"},value:n(a).background,"onUpdate:value":l[3]||(l[3]=o=>n(a).background=o),showPreview:!0,swatches:n(ve)},null,8,["value","swatches"]))])]),_:1}),e(C,null,{default:t(()=>[e(w,null,{default:t(()=>[u("应用类型")]),_:1}),e(le,{size:"small",style:{width:"250px"},value:R.value,"onUpdate:value":[l[4]||(l[4]=o=>R.value=o),J],disabled:!n(a).backgroundImage,options:X},null,8,["value","disabled"])]),_:1}),e(C,null,{default:t(()=>[e(w,null,{default:t(()=>[u("背景控制")]),_:1}),e(U,{class:"clear-btn",size:"small",disabled:!n(a).backgroundImage,onClick:Q},{default:t(()=>[u(" 清除背景 ")]),_:1},8,["disabled"]),e(U,{class:"clear-btn",size:"small",disabled:!n(a).background,onClick:ee},{default:t(()=>[u(" 清除颜色 ")]),_:1},8,["disabled"])]),_:1}),e(C,null,{default:t(()=>[e(w,null,{default:t(()=>[u("适配方式")]),_:1}),e(ce,null,{default:t(()=>[(d(),S(H,null,M(q,o=>e(U,{key:o.key,type:n(a).previewScaleType===o.key?"primary":"tertiary",ghost:"",size:"small",onClick:Ne=>ae(o.key)},{default:t(()=>[e(ie,{"show-arrow":!1,trigger:"hover"},{trigger:t(()=>[e(B,{class:"select-preview-icon",size:"18"},{default:t(()=>[(d(),E($(o.icon)))]),_:2},1024)]),default:t(()=>[u(" "+D(o.desc),1)]),_:2},1024)]),_:2},1032,["type","onClick"])),64))]),_:1})]),_:1})]),_:1}),e(n(Le),{isCanvas:!0,chartStyles:n(a)},null,8,["chartStyles"]),e(re,{style:{margin:"10px 0"}}),e(ue,{class:"tabs-box",size:"small",type:"segment"},{default:t(()=>[(d(),S(H,null,M(j,o=>e(de,{key:o.key,name:o.key,size:"small","display-directive":"show:lazy"},{tab:t(()=>[e(C,null,{default:t(()=>[y("span",null,D(o.title),1),e(B,{size:"16",class:"icon-position"},{default:t(()=>[(d(),E($(o.icon)))]),_:2},1024)]),_:2},1024)]),default:t(()=>[(d(),E($(o.render)))]),_:2},1032,["name"])),64))]),_:1})])}}});const tt=Se($e,[["__scopeId","data-v-ea772c01"]]);export{tt as default};