"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[444],{86029:function(e,n,t){t.d(n,{W:function(){return o}});var r=t(2784);function o(e){const n=r.useRef(e);return r.useEffect((()=>{n.current=e})),r.useMemo((()=>(...e)=>{var t;return null===(t=n.current)||void 0===t?void 0:t.call(n,...e)}),[])}},8444:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(52322),o=t(77753),i=t(90399),u=t(75200),a=t(56695),l=t(56271),c=t(183);function f(){return(0,r.jsxs)(a.sL,{space:!0,children:[(0,r.jsx)(l.u,{contents:"Normal tooltip with arrow",showArrow:!0,children:(0,r.jsx)(c.z,{tag:"button",icon:o.f,circular:!0,borderBottomLeftRadius:"_bblr-wy88pt",borderBottomRightRadius:"_bbrr-3djova",borderTopLeftRadius:"_btlr-1de1axg",borderTopRightRadius:"_btrr-dtk0zj",height:"_h-1a8msfu",maxHeight:"_mah-1blvnr8",maxWidth:"_maw-k8mfr1",minHeight:"_mih-1nrc83j",minWidth:"_miw-1524zjh",overflowX:"_ovx-11yh6sk",overflowY:"_ovy-buy8e9",paddingBottom:"_pb-1mdbw0j",paddingLeft:"_pl-gy4na3",paddingRight:"_pr-9aemit",paddingTop:"_pt-wk8lta",width:"_w-131xog0"})}),(0,r.jsx)(l.u,{size:"$6",contents:"Larger tooltip",children:(0,r.jsx)(c.z,{tag:"button",size:"$6",icon:i.b,circular:!0,borderBottomLeftRadius:"_bblr-wy88pt",borderBottomRightRadius:"_bbrr-3djova",borderTopLeftRadius:"_btlr-1de1axg",borderTopRightRadius:"_btrr-dtk0zj",height:"_h-1k9zyfm",maxHeight:"_mah-14pd2e8",maxWidth:"_maw-1kufxrw",minHeight:"_mih-2t2l5v",minWidth:"_miw-1m5eot9",overflowX:"_ovx-11yh6sk",overflowY:"_ovy-buy8e9",paddingBottom:"_pb-1mdbw0j",paddingLeft:"_pl-gy4na3",paddingRight:"_pr-9aemit",paddingTop:"_pt-wk8lta",width:"_w-1ey2ra3"})}),(0,r.jsx)(l.u,{alwaysDark:!0,size:"$7",contents:"Large, always dark tooltip",children:(0,r.jsx)(c.z,{tag:"button",size:"$7",icon:u.J,circular:!0,borderBottomLeftRadius:"_bblr-wy88pt",borderBottomRightRadius:"_bbrr-3djova",borderTopLeftRadius:"_btlr-1de1axg",borderTopRightRadius:"_btrr-dtk0zj",height:"_h-1njcn02",maxHeight:"_mah-edogf8",maxWidth:"_maw-1r2vb7i",minHeight:"_mih-nfz12p",minWidth:"_miw-4ukpa0",overflowX:"_ovx-11yh6sk",overflowY:"_ovy-buy8e9",paddingBottom:"_pb-1mdbw0j",paddingLeft:"_pl-gy4na3",paddingRight:"_pr-9aemit",paddingTop:"_pt-wk8lta",width:"_w-7bouqp"})})]})}},60505:function(e,n,t){t.d(n,{U:function(){return P}});var r=t(52322),o=t(2330),i=t(82735),u=t(39905),a=t(23917),l=t(46886),c=t(2784),f=t(54503),s=Object.defineProperty,d=function(e,n){return s(e,"name",{value:n,configurable:!0})};c.createElement;var p=(0,c.forwardRef)((function(e,n){var t=e.onPressIn,o=e.onPressOut,i=e.onHoverIn,u=e.onHoverOut,a=e.onHoverMove,s=e.disableUntilSettled,p=e.hoverDelay,b=void 0===p?0:p,y=e.children;if(!f.$L)return y;var h=(0,c.useState)(!1),v=h[0],m=h[1],g=(0,l.Nr)((function(){return m(!1)}),b/2),j=(0,l.Nr)((function(){return m(!0)}),b),w=d((function(){j.cancel(),g.cancel()}),"cancelAll");(0,c.useImperativeHandle)(n,(function(){return{close:function(){m(!1)}}})),(0,c.useEffect)((function(){v?null==i||i():null==u||u()}),[v]);var O=d((function(){w(),g()}),"setOff"),k=d((function(){w(),j()}),"setOn"),x=d((function(){a&&a(),s&&k()}),"hoverMove");return(0,r.jsx)("span",{ref:n,style:{display:"contents"},onMouseEnter:k,onMouseLeave:O,onMouseMove:x,onMouseDown:t,onClick:o,children:y})})),b=t(56695);function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var v=(0,c.forwardRef)((function(e,n){var t=e.children,o=e.fallbackToPress,i=h(e,["children","fallbackToPress"]);if((0,u.Y)()){var a=(0,c.useState)(!1),l=(a[0],a[1]);return o?(0,r.jsx)(b.FA,{ref:n,onPress:function(){l((function(e){var n,t,r=!e;return r?null==(n=i.onHoverIn)||n.call(i):null==(t=i.onHoverOut)||t.call(i),r}))},children:t}):t}return(0,r.jsx)(p,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){y(e,n,t[n])}))}return e}({},i,{children:t}))})),m=t(94895),g=t(2209);function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function k(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],u=!0,a=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(l){a=!0,o=l}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=Object.defineProperty,_=function(e,n){return x(e,"name",{value:n,configurable:!0})};c.createElement;var P=(0,i.$)((0,c.forwardRef)((function(e,n){var t=e.trigger,i=e.delay,f=void 0===i?0:i,s=e.children,d=e.allowHoverOnContent,b=e.fallbackToPress,y=e.disableUntilSettled,h=e.open,g=e.defaultOpen,j=e.onChangeOpen,x=O(e,["trigger","delay","children","allowHoverOnContent","fallbackToPress","disableUntilSettled","open","defaultOpen","onChangeOpen"]),P=(0,c.useRef)(null),S=k((0,a.T)({prop:h,defaultProp:g||!1,onChange:j}),2),R=S[0],E=S[1],L=(0,u.Y)(),A=(0,l.Nr)((function(){return E(!1)}),d?20:0),T=(0,l.Nr)((function(){return E(!0)}),d?40:0),z=_((function(){T.cancel(),A.cancel()}),"cancelAll"),C=_((function(){z(),A()}),"setOff"),H=_((function(){z(),T()}),"setOn");return(0,c.useImperativeHandle)(n,(function(){return{close:function(){var e;z(),E(!1),null==(e=P.current)||e.close()}}})),L&&!b?t(null,{open:!1}):(0,r.jsx)(m.J,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){w(e,n,t[n])}))}return e}({open:R},x,{trigger:function(e,n){return(0,r.jsx)(v,{ref:P,disableUntilSettled:y,onHoverIn:H,onHoverOut:C,hoverDelay:f,children:t(e,n)})},children:function(e){var n=(0,r.jsx)(o.M_,{children:"function"===typeof s?s(e):e.open?s:null});return(0,r.jsx)(m.J.Content,{children:L&&b?s:d?(0,r.jsx)(p,{onHoverIn:H,onHoverOut:C,children:n}):n})}}))})),{Arrow:g.c})},56271:function(e,n,t){t.d(n,{u:function(){return O}});var r=t(52322),o=t(2784),i=Object.defineProperty;const u=((e,n)=>i(e,"name",{value:n,configurable:!0}))((e=>{var n;return(0,o.isValidElement)(e)&&!!(null==(n=e.type.staticConfig)?void 0:n.parsed)}),"isTamaguiElement");var a=t(45482),l=t(36475),c=t(9861),f=t(54503),s=t(56695),d=t(60505),p=t(92927),b=t(43173);function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){y(e,n,t[n])}))}return e}function v(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=Object.defineProperty,g=function(e,n){return m(e,"name",{value:n,configurable:!0})};o.createElement;var j=(0,a.z)(b.Z,{name:"Tooltip",borderWidth:0,justifyContent:"center",alignItems:"center",borderRadius:"$2",pointerEvents:"none",backgroundColor:"$background",maxWidth:400,paddingVertical:"$2",paddingHorizontal:"$3",flexWrap:"nowrap"}),w={opacity:0,y:-10},O=g((function(e){var n=e.size,t=void 0===n?"$4":n,i=e.contents,a=e.tooltipFrameProps,b=e.tooltipContainerProps,y=void 0===b?{opacity:1,y:0}:b,m=e.alwaysDark,g=e.showArrow,O=e.enterStyle,k=void 0===O?w:O,x=e.exitStyle,_=void 0===x?w:x,P=v(e,["size","contents","tooltipFrameProps","tooltipContainerProps","alwaysDark","showArrow","enterStyle","exitStyle"]),S=(0,o.useCallback)((function(e){if(!e.open)return null;var n=(0,r.jsx)(j,h({elevation:t,size:t},a,{children:(0,r.jsx)(p.n,{tag:"p",color:"_col-1gcmrwd",textAlign:"_ta-q4m81j",size:t,children:i})}));return(0,r.jsxs)(s.FA,h({animation:"tooltip",enterStyle:k,exitStyle:_},y,{children:[!!g&&(0,r.jsx)(d.U.Arrow,{backgroundColor:"$background"}),m?(0,r.jsx)(l.Q,{name:m?"dark":null,children:n}):n]}),"tooltip-child")}),[g,m,i,a,t]);return(0,r.jsx)(d.U,h({placement:"bottom",delay:200,disableUntilSettled:!0},P,{trigger:function(e){return u(P.children)?o.cloneElement(P.children,e):(0,r.jsx)(c.x,h({},f.$L&&{fontFamily:"inherit",fontSize:"inherit"},e,{children:P.children}))},children:S}))}),"Tooltip")},23917:function(e,n,t){t.d(n,{T:function(){return a}});var r=t(86029),o=t(2784),i=Object.defineProperty,u=function(e,n){return i(e,"name",{value:n,configurable:!0})};function a(e){var n=e.prop,t=e.defaultProp,i=e.onChange,u=e.strategy,a=void 0===u?"prop-wins":u,c=(0,o.useRef)(n),f=(0,r.W)(i),s=(0,o.useState)(null!=n?n:t),d=s[0],p=s[1],b="prop-wins"===a;return(0,o.useEffect)((function(){c.current=n,p((function(e){return l(e,n,f)}))}),[n]),[d,(0,o.useCallback)((function(e){b&&void 0!==c.current||p((function(n){return l(n,"function"===typeof e?e(n):e,f)}))}),[p,b])]}u(a,"useControllableState");var l=u((function(e,n,t){return e===n||void 0===n?e:(t(n),n)}),"getNextStateWithCallback")},46886:function(e,n,t){t.d(n,{Ds:function(){return l},Nr:function(){return f},nj:function(){return s}});var r=t(2784);function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=Object.defineProperty,a=function(e,n){return u(e,"name",{value:n,configurable:!0})};function l(e,n,t){var r,o=function(){i=!1;var o=this,u=arguments;t&&!r&&e.apply(o,u),clearTimeout(r),r=setTimeout((function(){r=null,t||i||e.apply(o,u),i=!1}),n)},i=!1;return a(o,"debounced"),o.cancel=function(){i=!0},o}a(l,"debounce");var c={leading:!1};function f(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=(0,r.useRef)(null);return(0,r.useEffect)((function(){return function(){var e;null==(e=u.current)||e.cancel()}}),[]),(0,r.useMemo)((function(){return u.current=l(e,n,t.leading),u.current}),[t.leading].concat(i(o)))}function s(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(0,r.useState)(e),o=t[0],i=t[1];return(0,r.useEffect)((function(){var t=setTimeout((function(){i((function(n){return n===e?n:e}))}),n);return function(){clearTimeout(t)}}),[e]),o}a(f,"useDebounce"),a(s,"useDebounceValue")},90399:function(e,n,t){t.d(n,{b:function(){return l}});var r=t(2784),o=t(71295),i=t(74479),u=Object.defineProperty;const a=((e,n)=>u(e,"name",{value:n,configurable:!0}))((e=>{const{color:n="black",size:t=24,...i}=e;return r.createElement(o.Svg,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...i},r.createElement(o.Rect,{x:"1",y:"6",width:"18",height:"12",rx:"2",ry:"2",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement(o.Line,{x1:"23",y1:"13",x2:"23",y2:"11",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}),"Icon");a.displayName="Battery";const l=(0,r.memo)((0,i.H)(a))},77753:function(e,n,t){t.d(n,{f:function(){return l}});var r=t(2784),o=t(71295),i=t(74479),u=Object.defineProperty;const a=((e,n)=>u(e,"name",{value:n,configurable:!0}))((e=>{const{color:n="black",size:t=24,...i}=e;return r.createElement(o.Svg,{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...i},r.createElement(o.Path,{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement(o.Polyline,{points:"8 10 12 14 16 10",fill:"none",stroke:`${n}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}),"Icon");a.displayName="Pocket";const l=(0,r.memo)((0,i.H)(a))}}]);