(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9262],{70918:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/upgrade",function(){return n(31358)}])},31358:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(67294),l=n(15258),s=n(2307),d=n(53740),u=n(81453),i=n(34261);let{Title:c}=d.default,o=e=>{let t=Object.values(e);return(0,a.jsx)(s.Z,{dataSource:t,columns:[{title:"Name",dataIndex:"name",key:"name",render:(e,t)=>(0,a.jsx)("a",{href:t.browser_download_url,children:e})},{title:"Size",dataIndex:"size",key:"size",render:e=>"".concat((e/1024/1024).toFixed(2)," MB")}],rowKey:e=>e.id,size:"large",pagination:!1})},_=()=>{let[e,t]=(0,r.useState)({html_url:"",name:"",created_at:null,body:"",assets:[]}),n=async()=>{try{let e=await (0,u.Kt)();t(e)}catch(e){console.log("==== error",e)}};return((0,r.useEffect)(()=>{n()},[]),e)?(0,a.jsxs)("div",{className:"upgrade-page",children:[(0,a.jsx)(c,{level:2,children:(0,a.jsx)("a",{href:e.html_url,children:e.name})}),(0,a.jsx)(c,{level:5,children:new Date(e.created_at).toDateString()}),(0,a.jsx)(l.D,{children:e.body}),(0,a.jsx)("h3",{children:"Downloads"}),(0,a.jsx)(o,{...e.assets})]}):null};_.getLayout=function(e){return(0,a.jsx)(i.l,{page:e})},t.default=_}},function(e){e.O(0,[5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,7752,5891,2891,4749,6627,8966,7046,4261,9774,2888,179],function(){return e(e.s=70918)}),_N_E=e.O()}]);