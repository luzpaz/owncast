(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[462],{48689:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(1413),o=n(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},c=n(42135),i=function(e,t){return o.createElement(c.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};i.displayName="DeleteOutlined";var l=o.forwardRef(i)},98082:function(e,t,n){"use strict";var r=n(97685),o=n(67294),a=n(31808);t.Z=function(){var e=o.useState(!1),t=(0,r.Z)(e,2),n=t[0],c=t[1];return o.useEffect((function(){c((0,a.fk)())}),[]),n}},6226:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(4942),o=n(87462),a=n(71002),c=n(67294),i=n(94184),l=n.n(i),s=n(99134),u=n(59844),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};var f=["xs","sm","md","lg","xl","xxl"],d=c.forwardRef((function(e,t){var n,i=c.useContext(u.E_),d=i.getPrefixCls,v=i.direction,h=c.useContext(s.Z),m=h.gutter,y=h.wrap,x=h.supportFlexGap,b=e.prefixCls,g=e.span,Z=e.order,w=e.offset,j=e.push,O=e.pull,C=e.className,E=e.children,k=e.flex,P=e.style,S=p(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),N=d("col",b),_={};f.forEach((function(t){var n,c={},i=e[t];"number"===typeof i?c.span=i:"object"===(0,a.Z)(i)&&(c=i||{}),delete S[t],_=(0,o.Z)((0,o.Z)({},_),(n={},(0,r.Z)(n,"".concat(N,"-").concat(t,"-").concat(c.span),void 0!==c.span),(0,r.Z)(n,"".concat(N,"-").concat(t,"-order-").concat(c.order),c.order||0===c.order),(0,r.Z)(n,"".concat(N,"-").concat(t,"-offset-").concat(c.offset),c.offset||0===c.offset),(0,r.Z)(n,"".concat(N,"-").concat(t,"-push-").concat(c.push),c.push||0===c.push),(0,r.Z)(n,"".concat(N,"-").concat(t,"-pull-").concat(c.pull),c.pull||0===c.pull),(0,r.Z)(n,"".concat(N,"-rtl"),"rtl"===v),n))}));var T=l()(N,(n={},(0,r.Z)(n,"".concat(N,"-").concat(g),void 0!==g),(0,r.Z)(n,"".concat(N,"-order-").concat(Z),Z),(0,r.Z)(n,"".concat(N,"-offset-").concat(w),w),(0,r.Z)(n,"".concat(N,"-push-").concat(j),j),(0,r.Z)(n,"".concat(N,"-pull-").concat(O),O),n),C,_),z={};if(m&&m[0]>0){var A=m[0]/2;z.paddingLeft=A,z.paddingRight=A}if(m&&m[1]>0&&!x){var I=m[1]/2;z.paddingTop=I,z.paddingBottom=I}return k&&(z.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(k),!1!==y||z.minWidth||(z.minWidth=0)),c.createElement("div",(0,o.Z)({},S,{style:(0,o.Z)((0,o.Z)({},z),P),className:T,ref:t}),E)}));d.displayName="Col";var v=d},99134:function(e,t,n){"use strict";var r=(0,n(67294).createContext)({});t.Z=r},25968:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(87462),o=n(4942),a=n(71002),c=n(97685),i=n(67294),l=n(94184),s=n.n(l),u=n(59844),p=n(99134),f=n(93355),d=n(24308),v=n(98082),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},m=((0,f.b)("top","middle","bottom","stretch"),(0,f.b)("start","end","center","space-around","space-between"),i.forwardRef((function(e,t){var n,l=e.prefixCls,f=e.justify,m=e.align,y=e.className,x=e.style,b=e.children,g=e.gutter,Z=void 0===g?0:g,w=e.wrap,j=h(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),O=i.useContext(u.E_),C=O.getPrefixCls,E=O.direction,k=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),P=(0,c.Z)(k,2),S=P[0],N=P[1],_=(0,v.Z)(),T=i.useRef(Z);i.useEffect((function(){var e=d.ZP.subscribe((function(e){var t=T.current||0;(!Array.isArray(t)&&"object"===(0,a.Z)(t)||Array.isArray(t)&&("object"===(0,a.Z)(t[0])||"object"===(0,a.Z)(t[1])))&&N(e)}));return function(){return d.ZP.unsubscribe(e)}}),[]);var z=C("row",l),A=function(){var e=[0,0];return(Array.isArray(Z)?Z:[Z,0]).forEach((function(t,n){if("object"===(0,a.Z)(t))for(var r=0;r<d.c4.length;r++){var o=d.c4[r];if(S[o]&&void 0!==t[o]){e[n]=t[o];break}}else e[n]=t||0})),e}(),I=s()(z,(n={},(0,o.Z)(n,"".concat(z,"-no-wrap"),!1===w),(0,o.Z)(n,"".concat(z,"-").concat(f),f),(0,o.Z)(n,"".concat(z,"-").concat(m),m),(0,o.Z)(n,"".concat(z,"-rtl"),"rtl"===E),n),y),R={},W=A[0]>0?A[0]/-2:void 0,G=A[1]>0?A[1]/-2:void 0;if(W&&(R.marginLeft=W,R.marginRight=W),_){var M=(0,c.Z)(A,2);R.rowGap=M[1]}else G&&(R.marginTop=G,R.marginBottom=G);var B=i.useMemo((function(){return{gutter:A,wrap:w,supportFlexGap:_}}),[A,w,_]);return i.createElement(p.Z.Provider,{value:B},i.createElement("div",(0,r.Z)({},j,{className:I,style:(0,r.Z)((0,r.Z)({},R),x),ref:t}),b))})));m.displayName="Row";var y=m},26713:function(e,t,n){"use strict";n.d(t,{u:function(){return v},Z:function(){return m}});var r=n(87462),o=n(4942),a=n(97685),c=n(67294),i=n(94184),l=n.n(i),s=n(50344),u=n(59844);function p(e){var t=e.className,n=e.direction,a=e.index,i=e.marginDirection,l=e.children,s=e.split,u=e.wrap,p=c.useContext(v),f=p.horizontalSize,d=p.verticalSize,h=p.latestIndex,m={};return p.supportFlexGap||("vertical"===n?a<h&&(m={marginBottom:f/(s?2:1)}):m=(0,r.Z)((0,r.Z)({},a<h&&(0,o.Z)({},i,f/(s?2:1))),u&&{paddingBottom:d})),null===l||void 0===l?null:c.createElement(c.Fragment,null,c.createElement("div",{className:t,style:m},l),a<h&&s&&c.createElement("span",{className:"".concat(t,"-split"),style:m},s))}var f=n(98082),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},v=c.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),h={small:8,middle:16,large:24};var m=function(e){var t,n=c.useContext(u.E_),i=n.getPrefixCls,m=n.space,y=n.direction,x=e.size,b=void 0===x?(null===m||void 0===m?void 0:m.size)||"small":x,g=e.align,Z=e.className,w=e.children,j=e.direction,O=void 0===j?"horizontal":j,C=e.prefixCls,E=e.split,k=e.style,P=e.wrap,S=void 0!==P&&P,N=d(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),_=(0,f.Z)(),T=c.useMemo((function(){return(Array.isArray(b)?b:[b,b]).map((function(e){return function(e){return"string"===typeof e?h[e]:e||0}(e)}))}),[b]),z=(0,a.Z)(T,2),A=z[0],I=z[1],R=(0,s.Z)(w,{keepEmpty:!0}),W=void 0===g&&"horizontal"===O?"center":g,G=i("space",C),M=l()(G,"".concat(G,"-").concat(O),(t={},(0,o.Z)(t,"".concat(G,"-rtl"),"rtl"===y),(0,o.Z)(t,"".concat(G,"-align-").concat(W),W),t),Z),B="".concat(G,"-item"),F="rtl"===y?"marginLeft":"marginRight",D=0,H=R.map((function(e,t){return null!==e&&void 0!==e&&(D=t),c.createElement(p,{className:B,key:"".concat(B,"-").concat(t),direction:O,index:t,marginDirection:F,split:E,wrap:S},e)})),L=c.useMemo((function(){return{horizontalSize:A,verticalSize:I,latestIndex:D,supportFlexGap:_}}),[A,I,D,_]);if(0===R.length)return null;var U={};return S&&(U.flexWrap="wrap",_||(U.marginBottom=-I)),_&&(U.columnGap=A,U.rowGap=I),c.createElement("div",(0,r.Z)({className:M,style:(0,r.Z)((0,r.Z)({},U),k)},N),c.createElement(v.Provider,{value:L},H))}},20550:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(4942),o=n(87462),a=n(97685),c=n(67294),i=n(94184),l=n.n(i),s=n(98423),u=n(97937),p=n(59844),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},d=function(e){var t,n=e.prefixCls,a=e.className,i=e.checked,s=e.onChange,u=e.onClick,d=f(e,["prefixCls","className","checked","onChange","onClick"]),v=(0,c.useContext(p.E_).getPrefixCls)("tag",n),h=l()(v,(t={},(0,r.Z)(t,"".concat(v,"-checkable"),!0),(0,r.Z)(t,"".concat(v,"-checkable-checked"),i),t),a);return c.createElement("span",(0,o.Z)({},d,{className:h,onClick:function(e){null===s||void 0===s||s(!i),null===u||void 0===u||u(e)}}))},v=n(98787),h=n(97202),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},y=new RegExp("^(".concat(v.Y.join("|"),")(-inverse)?$")),x=new RegExp("^(".concat(v.E.join("|"),")$")),b=function(e,t){var n,i=e.prefixCls,f=e.className,d=e.style,v=e.children,b=e.icon,g=e.color,Z=e.onClose,w=e.closeIcon,j=e.closable,O=void 0!==j&&j,C=m(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),E=c.useContext(p.E_),k=E.getPrefixCls,P=E.direction,S=c.useState(!0),N=(0,a.Z)(S,2),_=N[0],T=N[1];c.useEffect((function(){"visible"in C&&T(C.visible)}),[C.visible]);var z=function(){return!!g&&(y.test(g)||x.test(g))},A=(0,o.Z)({backgroundColor:g&&!z()?g:void 0},d),I=z(),R=k("tag",i),W=l()(R,(n={},(0,r.Z)(n,"".concat(R,"-").concat(g),I),(0,r.Z)(n,"".concat(R,"-has-color"),g&&!I),(0,r.Z)(n,"".concat(R,"-hidden"),!_),(0,r.Z)(n,"".concat(R,"-rtl"),"rtl"===P),n),f),G=function(e){e.stopPropagation(),null===Z||void 0===Z||Z(e),e.defaultPrevented||"visible"in C||T(!1)},M="onClick"in C||v&&"a"===v.type,B=(0,s.Z)(C,["visible"]),F=b||null,D=F?c.createElement(c.Fragment,null,F,c.createElement("span",null,v)):v,H=c.createElement("span",(0,o.Z)({},B,{ref:t,className:W,style:A}),D,O?w?c.createElement("span",{className:"".concat(R,"-close-icon"),onClick:G},w):c.createElement(u.Z,{className:"".concat(R,"-close-icon"),onClick:G}):null);return M?c.createElement(h.Z,null,H):H},g=c.forwardRef(b);g.displayName="Tag",g.CheckableTag=d;var Z=g},75269:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/webhooks",function(){return n(90546)}])},90546:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(28520),o=n.n(r),a=n(85893),c=n(48689),i=n(17256),l=n(56266),s=n(20550),u=n(6226),p=n(32808),f=n(56516),d=n(69677),v=n(25968),h=n(71577),m=n(26713),y=n(25355),x=n(67294),b=n(58827),g=n(19411);function Z(e,t,n,r,o,a,c){try{var i=e[a](c),l=i.value}catch(s){return void n(s)}i.done?t(l):Promise.resolve(l).then(r,o)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){Z(a,r,o,c,i,"next",e)}function i(e){Z(a,r,o,c,i,"throw",e)}c(void 0)}))}}var j=i.Z.Title,O=i.Z.Paragraph,C={CHAT:{name:"Chat messages",description:"When a user sends a chat message",color:"purple"},USER_JOINED:{name:"User joined",description:"When a user joins the chat",color:"green"},NAME_CHANGE:{name:"User name changed",description:"When a user changes their name",color:"blue"},"VISIBILITY-UPDATE":{name:"Message visibility changed",description:"When a message visibility changes, likely due to moderation",color:"red"},STREAM_STARTED:{name:"Stream started",description:"When a stream starts",color:"orange"},STREAM_STOPPED:{name:"Stream stopped",description:"When a stream stops",color:"cyan"}};function E(e){var t=e.onOk,n=e.onCancel,r=e.visible,o=(0,x.useState)([]),c=o[0],i=o[1],l=(0,x.useState)(""),s=l[0],m=l[1],y=Object.keys(C).map((function(e){return{value:e,label:C[e].description}})),b={disabled:0===(null===c||void 0===c?void 0:c.length)||!(0,g.Z)(s)},Z=y.map((function(e){return(0,a.jsx)(u.Z,{span:8,children:(0,a.jsx)(p.Z,{value:e.value,children:e.label})},e.value)}));return(0,a.jsxs)(f.Z,{title:"Create New Webhook",visible:r,onOk:function(){t(s,c),m(""),i(null)},onCancel:n,okButtonProps:b,children:[(0,a.jsx)("div",{children:(0,a.jsx)(d.Z,{value:s,placeholder:"https://myserver.com/webhook",onChange:function(e){return m(e.currentTarget.value.trim())},type:"url",pattern:g.a})}),(0,a.jsx)("p",{children:"Select the events that will be sent to this webhook."}),(0,a.jsx)(p.Z.Group,{style:{width:"100%"},value:c,onChange:function(e){i(e)},children:(0,a.jsx)(v.Z,{children:Z})}),(0,a.jsx)("p",{children:(0,a.jsx)(h.Z,{type:"primary",onClick:function(){i(Object.keys(C))},children:"Select all"})})]})}function k(){var e=function(e){console.error("error",e)},t=(0,x.useState)([]),n=t[0],r=t[1],i=(0,x.useState)(!1),u=i[0],p=i[1];function f(){return d.apply(this,arguments)}function d(){return(d=w(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,b.rQ)(b.XA);case 3:n=t.sent,r(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function v(){return(v=w(o().mark((function t(n){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,b.rQ)(b.M_,{method:"POST",data:{id:n}});case 3:f(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function g(){return(g=w(o().mark((function t(a,c){var i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,b.rQ)(b.iG,{method:"POST",data:{url:a,events:c}});case 3:i=t.sent,r(n.concat(i)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}(0,x.useEffect)((function(){f()}),[]);var Z=[{title:"",key:"delete",render:function(e,t){return(0,a.jsx)(m.Z,{size:"middle",children:(0,a.jsx)(h.Z,{onClick:function(){return function(e){return v.apply(this,arguments)}(t.id)},icon:(0,a.jsx)(c.Z,{})})})}},{title:"URL",dataIndex:"url",key:"url"},{title:"Events",dataIndex:"events",key:"events",render:function(e){return(0,a.jsx)(a.Fragment,{children:e.map((function(e){return function(e){if(!e||!C[e])return null;var t=C[e];return(0,a.jsx)(l.Z,{title:t.description,children:(0,a.jsx)(s.Z,{color:t.color,children:t.name})},e)}(e)}))})}}];return(0,a.jsxs)("div",{children:[(0,a.jsx)(j,{children:"Webhooks"}),(0,a.jsx)(O,{children:"A webhook is a callback made to an external API in response to an event that takes place within Owncast. This can be used to build chat bots or sending automatic notifications that you've started streaming."}),(0,a.jsxs)(O,{children:["Read more about how to use webhooks, with examples, at"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/integrations/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,a.jsx)(y.Z,{rowKey:function(e){return e.id},columns:Z,dataSource:n,pagination:!1}),(0,a.jsx)("br",{}),(0,a.jsx)(h.Z,{type:"primary",onClick:function(){p(!0)},children:"Create Webhook"}),(0,a.jsx)(E,{visible:u,onOk:function(e,t){p(!1),function(e,t){g.apply(this,arguments)}(e,t)},onCancel:function(){p(!1)}})]})}}},function(e){e.O(0,[355,516,774,888,179],(function(){return t=75269,e(e.s=t);var t}));var t=e.O();_N_E=t}]);