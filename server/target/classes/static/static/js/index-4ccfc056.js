var j=(w,q,c)=>new Promise((p,o)=>{var g=l=>{try{m(c.next(l))}catch(_){o(_)}},x=l=>{try{m(c.throw(l))}catch(_){o(_)}},m=l=>l.done?p(l.value):Promise.resolve(l.value).then(g,x);m((c=c.apply(w,q)).next())});import{d as F,Y as z,r as U,aY as B,H as Y,j as s,k as G,C as J,w as t,e,b as T,n as r,t as b,f as a,z as A,bn as P,O as K,G as W,bh as X,cJ as Z,c as ee,d9 as O,by as te,as as $,bz as ae}from"./index-9e787fa5.js";import{i as oe}from"./icon-caec1666.js";import{S as R}from"./SettingItem-264e825b.js";import{S as k}from"./SettingItemBox-ee4024ad.js";import"./chartEditStore-56d3c83a.js";/* empty css                                                                      */import{u as L}from"./useTargetData.hook-986612b2.js";import{R as ne,a as se}from"./pondIndex.vue_vue_type_style_index_0_scoped_b8b31a18_lang-6e695383.js";import{u as le}from"./useSync.hook-87506693.js";import"./index-ff998c2f.js";import"./EditorWorker-81155e63.js";import"./editorWorker-43a98755.js";import"./index-f6f97c94.js";import"./chartLayoutStore-58ece452.js";import{C as re}from"./index-e0a81839.js";import"./plugin-e1dac962.js";import"./project-c1868b8d.js";import"./index-81fca23c.js";import"./index.vue_vue_type_script_setup_true_lang-1414f1f1.js";import"./index-567c51a3.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-374cf080.js";import"./index.esm.min-33db7d4b.js";import"./fileTypeEnum-21359a08.js";const ce={class:"go-pr-3"},ue=F({__name:"index",props:{modelShow:Boolean,targetData:Object,saveBtnText:String||null},emits:["update:modelShow","sendHandle"],setup(w,{emit:q}){const c=w,p=q,{targetData:o}=L(),{dataSyncUpdate:g}=le(),{chartConfig:x}=z(c.targetData),{requestContentType:m}=z(c.targetData.request),l=U(!1),_={[B.DEFAULT]:"普通请求",[B.SQL]:"SQL 请求"};Y(()=>c.modelShow,C=>{l.value=C},{immediate:!0});const i=()=>{p("update:modelShow",!1)},y=()=>{p("update:modelShow",!1),p("sendHandle"),g()},S=()=>{i()};return(C,h)=>{const H=s("n-space"),D=s("n-scrollbar"),I=s("n-text"),u=s("n-tag"),n=s("n-button"),v=s("n-card"),f=s("n-modal");return G(),J(f,{class:"go-chart-data-request",show:l.value,"onUpdate:show":h[0]||(h[0]=d=>l.value=d),"mask-closable":!1,closeOnEsc:!0,onEsc:S},{default:t(()=>[e(v,{bordered:!1,role:"dialog",size:"small","aria-modal":"true",style:{width:"1000px",height:"800px"}},{header:t(()=>[]),"header-extra":t(()=>[]),action:t(()=>[e(H,{justify:"space-between"},{default:t(()=>[T("div",null,[e(I,null,{default:t(()=>[r("「 "+b(a(x).categoryName)+" 」",1)]),_:1}),e(I,null,{default:t(()=>[r("—— ")]),_:1}),e(u,{type:"primary",bordered:!1,style:{"border-radius":"5px"}},{default:t(()=>[r(b(_[a(m)]),1)]),_:1})]),T("div",null,[e(n,{class:"go-mr-3",onClick:i},{default:t(()=>[r("取消")]),_:1}),e(n,{type:"primary",onClick:y},{default:t(()=>[r(b(w.saveBtnText||"保存 & 发送请求"),1)]),_:1})])]),_:1})]),default:t(()=>[e(D,{style:{"max-height":"718px"}},{default:t(()=>[T("div",ce,[e(H,{vertical:""},{default:t(()=>{var d;return[e(a(ne)),e(a(se),{"target-data-request":(d=a(o))==null?void 0:d.request},null,8,["target-data-request"])]}),_:1})])]),_:1})]),_:1})]),_:1},8,["show"])}}}),de=A(ue,[["__scopeId","data-v-eafbe715"]]),ie={class:"go-chart-configurations-data-ajax"},pe={class:"go-absolute-center"},me=F({__name:"index",setup(w){P(u=>({"272613bc":I.value}));const{HelpOutlineIcon:q,FlashIcon:c,PulseIcon:p}=oe.ionicons5,{targetData:o,chartEditStore:g}=L(),{requestOriginUrl:x,requestInterval:m,requestIntervalUnit:l}=z(g.getRequestGlobalConfig),_=K(),i=U(!1),y=U(!1),S=U(!1);let C=0,h;const H=()=>{y.value=!0},D=()=>j(this,null,function*(){var u;if((u=o.value)!=null&&u.request){i.value=!0;try{const n=yield te($(o.value.request),$(g.getRequestGlobalConfig));if(i.value=!1,n){const{data:v}=n;if(!v&&!o.value.filter){window.$message.warning("您的数据不符合默认格式，请配置过滤器！"),S.value=!0;return}o.value.option.dataset=ae(v,n,o.value.filter),S.value=!0;return}window.$message.warning("没有拿到返回值，请检查接口！")}catch(n){console.error(n),i.value=!1,window.$message.warning("数据异常，请检查参数！")}}}),I=W(()=>_.getAppTheme);return X(()=>{var n;const u=(n=o.value)==null?void 0:n.filter;h!==u&&C&&(h=u,D()),C++}),Z(()=>{h=null}),(u,n)=>{const v=s("n-tag"),f=s("n-input"),d=s("n-icon"),E=s("n-button"),N=s("n-card"),V=s("n-tooltip"),M=s("go-skeleton");return G(),ee("div",ie,[e(N,{class:"n-card-shallow"},{default:t(()=>[e(a(k),{name:"请求配置"},{default:t(()=>[e(a(R),{name:"类型"},{default:t(()=>[e(v,{bordered:!1,type:"primary",style:{"border-radius":"5px"}},{default:t(()=>[r(b(a(o).request.requestContentType===a(B).DEFAULT?"普通请求":"SQL请求"),1)]),_:1})]),_:1}),e(a(R),{name:"方式"},{default:t(()=>[e(f,{size:"small",placeholder:a(o).request.requestHttpType||"暂无",disabled:!0},null,8,["placeholder"])]),_:1}),e(a(R),{name:"组件间隔"},{default:t(()=>[e(f,{size:"small",placeholder:`${a(o).request.requestInterval||"暂无"}`,disabled:!0},{suffix:t(()=>[r(b(a(O)[a(o).request.requestIntervalUnit]),1)]),_:1},8,["placeholder"])]),_:1}),e(a(R),{name:"全局间隔（默认）"},{default:t(()=>[e(f,{size:"small",placeholder:`${a(m)||"暂无"} `,disabled:!0},{suffix:t(()=>[r(b(a(O)[a(l)]),1)]),_:1},8,["placeholder"])]),_:1})]),_:1}),e(a(k),{name:"源地址",alone:!0},{default:t(()=>[e(f,{size:"small",placeholder:a(x)||"暂无",disabled:!0},{prefix:t(()=>[e(d,{component:a(p)},null,8,["component"])]),_:1},8,["placeholder"])]),_:1}),e(a(k),{name:"组件地址",alone:!0},{default:t(()=>[e(f,{size:"small",placeholder:a(o).request.requestUrl||"暂无",disabled:!0},{prefix:t(()=>[e(d,{component:a(c)},null,8,["component"])]),_:1},8,["placeholder"])]),_:1}),T("div",{class:"edit-text",onClick:H},[T("div",pe,[e(E,{type:"primary",secondary:""},{default:t(()=>[r("编辑配置")]),_:1})])])]),_:1}),e(a(k),{alone:!0},{name:t(()=>[r(" 测试 "),e(V,{trigger:"hover"},{trigger:t(()=>[e(d,{size:"21",depth:3},{default:t(()=>[e(a(q))]),_:1})]),default:t(()=>[r(" 默认赋值给 dataset 字段 ")]),_:1})]),default:t(()=>[e(E,{type:"primary",ghost:"",onClick:D},{icon:t(()=>[e(d,null,{default:t(()=>[e(a(c))]),_:1})]),default:t(()=>[r(" 发送请求 ")]),_:1})]),_:1}),e(a(re),{show:S.value&&!i.value,ajax:!0},null,8,["show"]),e(M,{load:i.value,repeat:3},null,8,["load"]),e(a(de),{modelShow:y.value,"onUpdate:modelShow":n[0]||(n[0]=Q=>y.value=Q),targetData:a(o),onSendHandle:D},null,8,["modelShow","targetData"])])}}});const $e=A(me,[["__scopeId","data-v-688badbe"]]);export{$e as default};