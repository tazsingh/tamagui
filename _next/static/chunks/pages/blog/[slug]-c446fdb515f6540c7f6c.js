(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{381:function(e,t,n){"use strict";var a=n(1706),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,r,i,l,c,s,f=!1;t||(t={}),n=t.debug||!1;try{if(i=a(),l=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),"undefined"===typeof a.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))})),document.body.appendChild(s),l.selectNodeContents(s),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");f=!0}catch(_){n&&console.error("unable to copy using execCommand: ",_),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(_){n&&console.error("unable to copy using clipboardData: ",_),n&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),s&&document.body.removeChild(s),i()}return f}},5048:function(e,t,n){"use strict";n.d(t,{E:function(){return _}});var a=n(2784);function o(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var i=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=function(e,t,n){return t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},_=function(e){return a.createElement("svg",function(e,t){for(var n in t||(t={}))c.call(t,n)&&f(e,n,t[n]);if(l){var a,r=o(l(t));try{for(r.s();!(a=r.n()).done;)n=a.value,s.call(t,n)&&f(e,n,t[n])}catch(i){r.e(i)}finally{r.f()}}return e}({width:"30",height:"30",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M7.49936 0.850006C3.82767 0.850006 0.849976 3.8273 0.849976 7.50023C0.849976 10.4379 2.75523 12.9306 5.39775 13.8104C5.73047 13.8712 5.85171 13.6658 5.85171 13.4895C5.85171 13.3315 5.846 12.9135 5.84273 12.3587C3.99301 12.7604 3.60273 11.4671 3.60273 11.4671C3.30022 10.6988 2.86423 10.4942 2.86423 10.4942C2.26044 10.0819 2.90995 10.0901 2.90995 10.0901C3.57742 10.137 3.9285 10.7755 3.9285 10.7755C4.52167 11.7916 5.48512 11.4981 5.86396 11.3279C5.92438 10.8984 6.09625 10.6053 6.28608 10.4391C4.80948 10.2709 3.25695 9.70063 3.25695 7.15241C3.25695 6.42615 3.51618 5.83298 3.94157 5.368C3.87299 5.1998 3.64478 4.52375 4.00689 3.60807C4.00689 3.60807 4.56494 3.42926 5.83538 4.28941C6.36568 4.14204 6.93477 4.06856 7.50018 4.0657C8.06518 4.06856 8.63386 4.14204 9.16498 4.28941C10.4346 3.42926 10.9918 3.60807 10.9918 3.60807C11.3548 4.52375 11.1266 5.1998 11.0584 5.368C11.4846 5.83298 11.7418 6.42615 11.7418 7.15241C11.7418 9.70716 10.1868 10.2693 8.70571 10.4338C8.94412 10.6392 9.15681 11.045 9.15681 11.6655C9.15681 12.5542 9.14865 13.2715 9.14865 13.4895C9.14865 13.6675 9.26867 13.8745 9.60588 13.8095C12.2464 12.9282 14.15 10.4375 14.15 7.50023C14.15 3.8273 11.1723 0.850006 7.49936 0.850006Z",fill:"var(--color)",fillRule:"evenodd",clipRule:"evenodd"}))}},3002:function(e,t,n){"use strict";n.d(t,{h:function(){return d}});var a=n(6841),o=n(9040),r=n(9097),i=n(2784),l=n(4371),c=n(4828),s=n(5048),f=" _boxSizing-deolkf _color-1gcmrwd _display-1471scf _fontFamily-ia93fe _fontSize-fmpm7w _fontWeight-by9z28 _letterSpacing-19vwail _lineHeight-memlb2 _opacity-icoktb _wordWrap-qvutc0 _opacity--hover-6dt33c ",_=" _boxSizing-deolkf _display-1471scf _fontFamily-187pbxx _wordWrap-qvutc0 ",m=" _alignItems-1oszu61 _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _height-109y4c4 _marginBottom-1ut4w64 _marginLeft-lqms97 _marginRight-de1ba6 _marginTop-19i43ro _opacity-zjitw4 _overflowX-11yh6sk _overflowY-buy8e9 _pointerEvents-633pao _position-u8s1d _width-92ng3h _zIndex-qpiwx7 ";function d(){return i.createElement("header",{tag:"header",className:" _alignItems-1awozwy _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-18u37iz _flexShrink-1q142lx _justifyContent-1wtj0ep _paddingBottom-c618ug _paddingLeft-ll5uop _paddingRight-q7v43y _paddingTop-6j2qwp _position-bnwqim _zIndex-184en5c "},i.createElement(r.default,{href:"/",passHref:!0},i.createElement("a",{tag:"a",className:" _alignItems-1oszu61 _boxSizing-deolkf _cursor-1loqt21 _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _marginBottom-70510l _marginTop-kbtpn4 "},i.createElement("div",{className:m},i.createElement("span",{className:_},"Tamagui homepage")),i.createElement(a.Xe,null))),i.createElement("div",{className:" _alignItems-1awozwy _bottom-1p0dtai _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-18u37iz _flexShrink-1q142lx _justifyContent-1777fci _left-1d2f490 _position-u8s1d _right-zchlnj _top-ipm5af  _pointerEvents-633pao _zIndex-1wyyakw  _display-_sm_hvic4v"},i.createElement(a.Pk,null)),i.createElement(l.sL,{tag:"nav",space:"$6",className:" _alignItems-1awozwy _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-18u37iz _flexShrink-1q142lx _pointerEvents-105ug2t "},i.createElement(r.default,{href:"/docs/intro/installation",passHref:!0},i.createElement("a",{tag:"a",className:f},"Docs")),i.createElement(r.default,{href:"/blog",passHref:!0},i.createElement("a",{tag:"a",className:f},"Blog")),i.createElement(c.X,null),i.createElement(r.default,{href:"https://github.com/tamagui/tamagui",passHref:!0},i.createElement(l.FA,{tag:"a",target:"_blank",className:" _alignItems-1oszu61 _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _opacity-nzoivv _opacity--hover-6dt33c "},i.createElement("div",{className:m},i.createElement("span",{className:_},"Github")),i.createElement(s.E,{width:23}))),i.createElement(o.T,null)))}},987:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return E},default:function(){return q}});var a=n(8353),o=n(3002),r=n(1929),i=n(6668),l=n(8840),c=n(2784),s=n(1295),f=Object.defineProperty;const _=((e,t)=>f(e,"name",{value:t,configurable:!0}))((e=>{const{color:t="black",size:n=24,...a}=e;return c.createElement(s.Svg,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a},c.createElement(s.Line,{x1:"19",y1:"12",x2:"5",y2:"12",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.createElement(s.Polyline,{points:"12 19 5 12 12 5",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}),"ArrowLeft");var m=n(3021),d=n(1807),u=n(3098),p=n(9097),g=n(6725),h=n(7118),y=n(1801),b=n(4371),w=n(8303),x=n(6229),v=" _alignItems-1oszu61 _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx ",z=" _boxSizing-deolkf _color-1gcmrwd _display-1471scf _fontFamily-ia93fe _fontSize-fzrsgv _fontWeight-1k2qt2l _letterSpacing-1vhldrj _lineHeight-1en2a72 _wordWrap-qvutc0 ",k=" _alignItems-1oszu61 _backgroundColor-bccq0h _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _height-109y4c4 _marginBottom-1605ih1 _marginLeft-1jj8364 _marginRight-lchren _marginTop-1hinesh _opacity-6dt33c ",S=" _alignItems-1oszu61 _alignSelf-1pz39u2 _backgroundColor-bccq0h _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexGrow-18kxxzh _flexShrink-1wbh5a2 _height-16l9doz _marginLeft-10007ea _marginRight-llmf9j _opacity-6dt33c _width-92ng3h ",E=!0;function q(e){var t=e.frontmatter,n=e.code,s=e.relatedPosts,f=c.useMemo((function(){return(0,u.getMDXComponent)(n)}),[n]),E='\n\t\thttps://twitter.com/intent/tweet?\n\t\ttext="'.concat(t.title,'" by @').concat(l.o[t.by].twitter," on the @tamagui_js blog.&url=https://tamagui.dev/blog/").concat(t.slug,"\n\t\t");return c.createElement(c.Fragment,null,c.createElement(i.H,{title:"".concat(t.title," \u2014 Tamagui"),poster:t.poster}),c.createElement(o.h,null),c.createElement(a.W,null,c.createElement("div",{className:" _alignItems-1habvwh _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx "},c.createElement(p.default,{href:"/blog",passHref:!0},c.createElement(h.z,{hitSlop:{top:5,left:5,right:5,bottom:5},icon:c.createElement(_,{color:"var(--color3)",size:12}),tag:"a",space:"$2",className:" _backgroundColor-1niwhzg _borderBottomColor-oucylx _borderBottomLeftRadius-11w34mo _borderBottomRightRadius-pohjq _borderLeftColor-855088 _borderRightColor-114ovsg _borderTopColor-1c1gj4h _borderTopLeftRadius-1jqwn80 _borderTopRightRadius-1nr7l32 _boxShadow-15i92mo _cursor-1loqt21 _flexWrap-tzz3ar _justifyContent-1777fci _marginLeft-1efvwg4 _paddingBottom-1t60czk _paddingLeft-7ztw5e _paddingRight-g6vdx7 _paddingTop-1m22auq _backgroundColor--active-11h4f7 _backgroundColor--hover-98i0x0  _alignItems-1awozwy _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-18u37iz _flexShrink-1wbh5a2 "},"Blog"))),c.createElement(y.H1,{accessibilityRole:"header",className:" _boxSizing-deolkf _color-1gcmrwd _display-1471scf _fontFamily-144z2zw _fontSize-1kvnedt _fontWeight-b88u0q _letterSpacing-16krg75 _lineHeight-1vtq1c2 _marginTop-13y7me _wordWrap-qvutc0 "},t.title),c.createElement(y.H2,{accessibilityRole:"header",className:" _boxSizing-deolkf _color-17rf3w5 _display-1471scf _fontFamily-ia93fe _fontSize-9h831 _fontWeight-majxgm _letterSpacing-1hy59zm _lineHeight-eq2lzu _marginBottom-nh9hgz _wordWrap-qvutc0 "},t.description),c.createElement("div",{className:" _alignItems-1awozwy _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-18u37iz _flexShrink-1q142lx _marginBottom-1hss9ze "},c.createElement("span",{className:" _boxSizing-deolkf _color-scmqyp _display-1471scf _fontFamily-ia93fe _fontSize-fmpm7w _fontWeight-by9z28 _letterSpacing-19vwail _lineHeight-memlb2 _whiteSpace-3s2u2q _wordWrap-qvutc0 "},c.createElement(x.r,{href:"https://twitter.com/".concat(l.o[t.by].twitter),rel:"noopener noreferrer",variant:"subtle"},l.o[t.by].name)),c.createElement("div",{className:S}),c.createElement("time",{tag:"time",className:" _boxSizing-deolkf _color-scmqyp _display-1471scf _fontFamily-ia93fe _fontSize-fmpm7w _fontWeight-by9z28 _letterSpacing-19vwail _lineHeight-memlb2 _wordWrap-qvutc0  _color-scmqyp _whiteSpace-3s2u2q "},(0,m.Z)((0,d.Z)(t.publishedAt),"MMMM yyyy")),c.createElement("div",{className:S}),c.createElement("div",{className:" _alignItems-1awozwy _boxSizing-deolkf _display-hvic4v _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx  _display-_gtSm_6koalj"},c.createElement("span",{className:" _boxSizing-deolkf _color-scmqyp _display-1471scf _fontFamily-ia93fe _fontSize-fmpm7w _fontWeight-by9z28 _letterSpacing-19vwail _lineHeight-memlb2 _wordWrap-qvutc0 "},t.readingTime.text),"changelog"===t.type&&c.createElement(c.Fragment,null,c.createElement("div",{className:S}),c.createElement(h.z,{hitSlop:{top:5,left:5,right:5,bottom:5},className:" _backgroundColor-1gly1zx _borderBottomLeftRadius-11w34mo _borderBottomRightRadius-pohjq _borderTopLeftRadius-1jqwn80 _borderTopRightRadius-1nr7l32 _cursor-1loqt21 _flexWrap-tzz3ar _justifyContent-1777fci _paddingBottom-1t60czk _paddingLeft-7ztw5e _paddingRight-g6vdx7 _paddingTop-1m22auq _backgroundColor--active-11h4f7 _backgroundColor--hover-98i0x0  _alignItems-1awozwy _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-18u37iz _flexShrink-1wbh5a2 "},"Changelog")))),c.createElement(g.Theme,{name:"pink"},c.createElement(f,{components:r.wx})),c.createElement("div",{className:k}),c.createElement("div",{className:" _alignItems-1awozwy _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _marginBottom-1605ih1 "},c.createElement("span",{className:z},"Share this post on"," ",c.createElement(x.r,{href:E,target:"_blank",rel:"noopener noreferrer",title:"Share this post on Twitter"},"Twitter"),".")),s&&c.createElement("div",{className:v},c.createElement("div",{className:k}),c.createElement(y.H3,{accessibilityRole:"header",className:" _boxSizing-deolkf _color-1gcmrwd _display-1471scf _fontFamily-144z2zw _fontSize-4dmgxt _fontWeight-b88u0q _letterSpacing-z2ezwq _lineHeight-1ypq13d _marginBottom-1hss9ze _textAlign-q4m81j _textTransform-tsynxw _wordWrap-qvutc0 "},"Related"),c.createElement(b.FA,{space:"$4",className:" _alignItems-1oszu61 _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _marginBottom-4z7tmf _marginTop-13y7me "},s.map((function(e){return c.createElement(w.n,{tag:"a",key:e.slug,href:"/blog/".concat(e.slug),className:z},c.createElement(b.FA,{space:"$2",className:v},c.createElement(y.H6,{accessibilityRole:"header",className:" _boxSizing-deolkf _color-scmqyp _display-1471scf _fontFamily-144z2zw _fontSize-1y6yf2n _fontWeight-1kfrs79 _letterSpacing-rn7yd3 _lineHeight-yjdxz6 _wordWrap-qvutc0 "},e.title),c.createElement("span",{className:z},e.description)))}))))))}},8840:function(e,t,n){"use strict";n.d(t,{o:function(){return a}});var a={nate:{name:"Nate Wienert",twitter:"natebirdman",avatar:""}}},7754:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(987)}])},4501:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1706:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<e.rangeCount;a++)n.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},3098:function(e,t,n){e.exports=n(7575)},7575:function(e,t,n){"use strict";t.getMDXComponent=function(e,t){return c(e,t).default};var a=l(n(2784)),o=l(n(2111)),r=l(n(8316));function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}function l(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=o?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}function c(e,t){const n={React:a,ReactDOM:r,_jsx_runtime:o,...t};return new Function(...Object.keys(n),e)(...Object.values(n))}}},function(e){e.O(0,[774,251,609,888,179],(function(){return t=7754,e(e.s=t);var t}));var t=e.O();_N_E=t}]);