(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{78012:function(e,t,r){const o=r(2784),{Platform:n,processColor:a}=r(30976),s=r(9654);function l(e){if(e){if(!Array.isArray(e)||2===e.length)return Array.isArray(e)?e:[e.x,e.y];console.warn("start and end props for LinearGradient must be of the format [x,y] or {x, y}")}}t.o=class extends o.Component{render(){const{colors:e,locations:t,start:r,end:i,..._}=this.props;let c=t;return t&&e.length!==t.length&&(console.warn("LinearGradient colors and locations props should be arrays of the same length"),c=t.slice(0,e.length)),o.createElement(s,{..._,colors:n.select({web:e,default:e.map(a)}),locations:c,startPoint:l(r),endPoint:l(i)})}}},9654:function(e,t,r){const o=r(2784),{View:n}=r(30976),{normalizeColor:a}=r(96934);e.exports=function({colors:e,locations:t,startPoint:r,endPoint:s,...l}){const[i,_]=o.useState(null),{width:c=1,height:d=1}=i??{},f=`linear-gradient(${o.useMemo((()=>{const[e,t]=(()=>{let e=[0,0];Array.isArray(r)&&(e=[null!=r[0]?r[0]:0,null!=r[1]?r[1]:0]);let t=[0,1];return Array.isArray(s)&&(t=[null!=s[0]?s[0]:0,null!=s[1]?s[1]:1]),[e,t]})();e[0]*=c,t[0]*=c,e[1]*=d,t[1]*=d;const o=t[1]-e[1],n=t[0]-e[0];return 90+180*Math.atan2(o,n)/Math.PI}),[c,d,r,s])}deg, ${o.useMemo((()=>e.map(((e,r)=>{let o=a(e);if(t&&t[r]){o+=` ${100*Math.max(0,Math.min(1,t[r]))}%`}return o}))),[e,t]).join(",")})`;return o.createElement(n,{...l,style:[l.style,{backgroundImage:f}],onLayout:e=>{const{x:t,y:r,width:o,height:n}=e.nativeEvent.layout,a=i??{x:0,y:0,width:1,height:1};t===a.x&&r===a.y&&o===a.width&&n===a.height||_({x:t,y:r,width:o,height:n}),l.onLayout&&l.onLayout(e)}})}},96934:function(e,t,r){const{processColor:o}=r(30976);t.normalizeColor=function(e,t=1){if(null==e)return;if("string"===typeof e&&(e=>"currentcolor"===e||"currentColor"===e||"inherit"===e||0===e.indexOf("var("))(e))return e;const r=o(e);if(null!=r){return`rgba(${r>>16&255},${r>>8&255},${255&r},${((r>>24&255)/255*t).toFixed(2)})`}}},46139:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/responsive-demo",function(){return r(18442)}])},70730:function(e,t,r){"use strict";r.d(t,{H:function(){return l}});var o=r(52322),n=r(97729),a=r(5632);r(2784);function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function l(e){var t,r=e.url,l=void 0===r?"https://tamagui.dev":r,i=e.pathname,_=e.title,c=void 0===_?"Tamagui":_,d=e.description,f=void 0===d?"":d,u=e.poster,m=s(e,["url","pathname","title","description","poster"]),p=(0,a.useRouter)(),h=null!==(t=m.image)&&void 0!==t?t:u?"".concat(l,"/").concat(u):"".concat(l,"/social.png"),b=i||p.pathname;return(0,o.jsxs)(n.default,{children:[(0,o.jsx)("title",{children:c}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}),(0,o.jsx)("meta",{property:"og:url",content:"".concat(l).concat(b)}),(0,o.jsx)("meta",{property:"og:title",content:c}),(0,o.jsx)("meta",{property:"og:description",content:f}),(0,o.jsx)("meta",{property:"og:image",content:h}),(0,o.jsx)("meta",{name:"twitter:site",content:"@tamagui_js"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},18442:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var o=r(52322),n=r(70730),a=r(85192),s=r(38462),l=r(56695),i=r(36475),_=r(74501),c=r(37995),d="/_next/static/media/photo1.8e29e480.webp",f="/_next/static/media/photo2.ddfa4400.webp",u="/_next/static/media/photo3.1b5816f7.webp",m=r(92051);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=" _boxs-deolkf _col-1gcmrwd _cur-1dqbpge _disp-1471scf _fofam-1f1w1o8 _fos-a023e6 _fow-1od2jal _letsp-oxtfae _lh-1kt6imw _ussel-1xnzce8 _ww-qvutc0 ";function b(){var e=(0,o.jsxs)("div",{className:" _ai-1oszu61 _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-18u37iz _fg-16y2uox _fs-1wbh5a2 ",children:[(0,o.jsxs)("div",{className:" _ai-1oszu61 _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-eqz5dr _fg-16y2uox _fs-1wbh5a2 ",children:[(0,o.jsx)("div",{className:" _ai-1oszu61 _boxs-deolkf _disp-6koalj _fb-1mlwlqe _h-7fo01u _mih-1fow7x9 _miw-f7z4hp _w-3ykz2q _fg-16y2uox _fs-1q142lx _disp-_gtSmall_hvic4v "}),(0,o.jsx)("h3",{accessibilityRole:"header",className:" _boxs-deolkf _col-1gcmrwd _cur-1dqbpge _disp-1471scf _fofam-1f1w1o8 _fos-1blvdjr _fow-b88u0q _letsp-16krg75 _lh-1j8sj39 _mb-p1pxzi _ml-11wrixw _mr-61z16t _mt-1mnahxq _textTransform-3twk1y _ussel-1xnzce8 _ww-qvutc0 ",children:"Enchanting Garden"}),(0,o.jsxs)(l.sL,{alignItems:"_ai-1awozwy",space:!0,children:[(0,o.jsx)(a.$,{size:12,color:"var(--color)"}),(0,o.jsx)("h5",{accessibilityRole:"header",className:" _boxs-deolkf _col-s5oglw _cur-1dqbpge _disp-1471scf _fofam-1f1w1o8 _fos-a023e6 _fow-16dba41 _letsp-ud0q2t _lh-waer2z _mb-p1pxzi _ml-11wrixw _mr-61z16t _mt-1mnahxq _textTransform-tsynxw _ussel-1xnzce8 _ww-qvutc0 ",children:"Kailua, HI"})]})]}),(0,o.jsxs)("div",{className:" _ai-obd0qt _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-eqz5dr _fs-1q142lx ",children:[(0,o.jsx)("div",{className:" _ai-1oszu61 _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fg-16y2uox _fs-1q142lx _h-7fo01u _mih-1fow7x9 _miw-f7z4hp _w-3ykz2q _disp-_gtSmall_hvic4v "}),(0,o.jsx)("h4",{accessibilityRole:"header",className:" _boxs-deolkf _col-1gcmrwd _cur-1dqbpge _disp-1471scf _fofam-1f1w1o8 _fos-adyw6z _fow-b88u0q _letsp-oxtfae _lh-17rnw9f _mb-p1pxzi _ml-11wrixw _mr-61z16t _mt-1mnahxq _textTransform-3twk1y _ussel-1xnzce8 _ww-qvutc0 ",children:"$45"}),(0,o.jsx)("p",{className:h,children:"/night"})]})]}),t=(0,o.jsx)(i.Q,{name:"dark",children:(0,o.jsxs)("div",{className:" _ai-1awozwy _bblr-1yw69u8 _bbrr-kxugps _btlr-xea0h3 _btrr-ro0zxj _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-18u37iz _fs-1q142lx _jc-1777fci _ovx-11yh6sk _ovy-buy8e9 _pos-bnwqim ",children:[(0,o.jsxs)("div",{className:" _ai-1oszu61 _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-eqz5dr _fs-1q142lx ",children:[(0,o.jsx)(_.E,{source:{uri:""},width:800,height:200,src:d}),(0,o.jsx)(x,{$gtSmall:{display:"none"}})]}),(0,o.jsx)("div",{className:" _ai-1oszu61 _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-eqz5dr _fs-1q142lx _b-_small_1p0dtai _l-_small_1d2f490 _pb-_small_12bic3x _pl-_small_ll5uop _pr-_small_q7v43y _pt-_small_1vq430g _pos-_small_u8s1d _r-_small_zchlnj _t-_small_ipm5af _disp-_gtSmall_hvic4v ",children:e})]})});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.H,{title:"Tamagui \u2014 Responsive Demo"}),(0,o.jsxs)("div",{className:" _ai-1oszu61 _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-eqz5dr _fs-1q142lx _mah-1tsuqlv _ovx-11yh6sk _ovy-buy8e9 _pb-c618ug _pl-ll5uop _pr-q7v43y _pt-6j2qwp _als-_gtLarge_1kihuf0 _fd-_gtLarge_1euycsn _maw-_gtLarge_1sp8lnq _pb-_gtLarge_1fyasi3 _pl-_gtLarge_1hxi05q _pr-_gtLarge_poy3ov _pt-_gtLarge_eguqd1 ",children:[(0,o.jsx)("div",{className:" _ai-1oszu61 _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-eqz5dr _fs-1q142lx _pos-bnwqim _disp-_gtSmall_hvic4v ",children:t}),(0,o.jsxs)(l.sL,{flexGrow:"_fg-16y2uox",flexShrink:"_fs-1wbh5a2",space:!0,className:" _disp-_small_hvic4v _fd-_gtLarge_eqz5dr _maw-_gtLarge_18mhl7o ",children:[(0,o.jsx)("div",{className:" _ai-1oszu61 _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-eqz5dr _fg-16xksha _fs-1wbh5a2 _maw-hvns9x _ovx-11yh6sk _ovy-buy8e9 _fg-_gtMedium_18kxxzh _fs-_gtMedium_1wbh5a2 _maw-_gtMedium_dnmrzs ",children:t}),(0,o.jsxs)("div",{className:" _ai-1oszu61 _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-18u37iz _fg-16y2uox _fs-1wbh5a2 _maw-r2y082 _ovx-11yh6sk _ovy-buy8e9 _maw-_gtLarge_dnmrzs ",children:[(0,o.jsx)("div",{className:" _ai-1awozwy _bblr-1yw69u8 _bbrr-kxugps _btlr-xea0h3 _btrr-ro0zxj _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-eqz5dr _fg-16y2uox _fs-1wbh5a2 _h-4d76ec _maw-dnmrzs _ovx-11yh6sk _ovy-buy8e9 _transform-1wpzndr ",children:(0,o.jsx)(_.E,{source:{uri:""},width:450,height:200,src:f})}),(0,o.jsx)("div",{className:" _ai-1awozwy _bblr-1yw69u8 _bbrr-kxugps _btlr-xea0h3 _btrr-ro0zxj _boxs-deolkf _disp-hvic4v _fb-1mlwlqe _fd-eqz5dr _fg-16y2uox _fs-1wbh5a2 _h-4d76ec _maw-dnmrzs _ovx-11yh6sk _ovy-buy8e9 _transform-1wpzndr _disp-_gtMedium_6koalj _ml-_gtMedium_1ktvkvn ",children:(0,o.jsx)(_.E,{source:{uri:""},width:450,height:200,src:u})})]})]}),(0,o.jsxs)("div",{className:" _ai-1oszu61 _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-eqz5dr _fg-16y2uox _fs-1wbh5a2 _pb-c618ug _pl-ll5uop _pr-q7v43y _pt-6j2qwp _pb-_gtLarge_1mdbw0j _pl-_gtLarge_gy4na3 _pr-_gtLarge_poy3ov _pt-_gtLarge_wk8lta ",children:[(0,o.jsx)("div",{className:" _ai-1oszu61 _boxs-deolkf _disp-hvic4v _fb-1mlwlqe _fd-eqz5dr _fs-1q142lx _disp-_gtSmall_6koalj ",children:e}),(0,o.jsxs)(l.FA,{flexGrow:"_fg-16y2uox",flexShrink:"_fs-1wbh5a2",space:"$4",children:[(0,o.jsxs)("div",{className:" _ai-1oszu61 _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-18u37iz _fs-1q142lx ",children:[(0,o.jsxs)(l.sL,{alignItems:"_ai-1awozwy",space:!0,children:[(0,o.jsx)(i.Q,{name:"alt2",children:(0,o.jsx)("p",{className:h,children:"4 guests"})}),(0,o.jsx)(i.Q,{name:"alt2",children:(0,o.jsx)("p",{className:h,children:"\xb7"})}),(0,o.jsx)(i.Q,{name:"alt2",children:(0,o.jsx)("p",{className:h,children:"Entire house"})})]}),(0,o.jsx)("div",{className:" _ai-1oszu61 _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fg-16y2uox _fs-1wbh5a2 _h-7fo01u _mih-1fow7x9 _miw-f7z4hp _w-3ykz2q "}),(0,o.jsxs)(l.sL,{alignItems:"_ai-1awozwy",space:!0,children:[(0,o.jsx)(s.U,{size:20,color:"var(--purple10)"}),(0,o.jsx)(i.Q,{name:"purple_alt2",children:(0,o.jsx)("p",{className:h,children:"4.55"})})]})]}),(0,o.jsx)(i.Q,{name:"alt1",children:(0,o.jsx)("p",{className:h,children:"A lovely, private and very clean cottage with all amenities for a comfortable and peaceful stay. We are a 20 minute walk from the Hawaii Tropical Botanical Garden and well situated for touring to Akaka Falls, Volcano National Park, and many other destinations."})}),(0,o.jsx)(i.Q,{name:"alt1",children:(0,o.jsx)("p",{className:" _boxs-deolkf _cur-1dqbpge _disp-1471scf _ussel-1xnzce8 _ww-qvutc0 _col-1gcmrwd _fofam-1f1w1o8 _fos-a023e6 _fow-1od2jal _letsp-oxtfae _lh-1kt6imw _disp-_medium_hvic4v ",children:"A lovely, private and very clean cottage with all amenities for a comfortable and peaceful stay. We are a 20 minute walk from the Hawaii Tropical Botanical Garden and well situated for touring to Akaka Falls, Volcano National Park, and many other destinations."})})]})]})]})]})}var x=function(e){return(0,o.jsx)(c.o,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){p(e,t,r[t])}))}return e}({height:"_h-erd55g",width:"_w-l0gqae",fullscreen:!0,bottom:"_b-1p0dtai",left:"_l-1d2f490",position:"_pos-u8s1d",right:"_r-zchlnj",top:"_t-ipm5af",colors:["rgba(0,0,0,0)","rgba(0,0,0,1)"]},e,{className:(0,m.concatClassName)(e&&e.className||"",e)}))}},74501:function(e,t,r){"use strict";r.d(t,{E:function(){return f}});var o=r(52322),n=r(68970);function a(e){const t=(0,n.iE)().shorthands;if(!t)return e;let r={};for(const o in e)r[t[o]||o]=e[o];return r}(0,Object.defineProperty)(a,"name",{value:"getExpandedShorthands",configurable:!0});var s=r(45482),l=r(2784),i=r(30976);function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}l.createElement;var d=(0,s.z)(i.Image,{name:"Image",position:"relative",source:{uri:""}},{inlineProps:new Set(["src","width","height"])}),f=d.extractable((function(e){var t=a(e),r=t.src,n=t.width,s=void 0===n?100:n,l=t.height,i=void 0===l?100:l,f=c(t,["src","width","height"]),u="string"===typeof r?{uri:r,width:s,height:i}:r,m=Array.isArray(u)?u[0]:u;return m?(0,o.jsx)(d,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){_(e,t,r[t])}))}return e}({defaultSource:m,source:u},f)):null}))},37995:function(e,t,r){"use strict";r.d(t,{o:function(){return m}});var o=r(52322),n=r(63035),a=r(61958),s=r(78012),l=r(56695),i=r(2784),_=r(30976);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var f=Object.defineProperty,u=function(e,t){return f(e,"name",{value:t,configurable:!0})};i.createElement;var m=l.FA.extractable((0,n.Y)(i.forwardRef((function(e,t){var r=e.start,n=e.end,a=e.colors,i=e.locations,f=(d(e,["start","end","colors","locations"]),p(a));return(0,o.jsx)(l.FA,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){c(e,t,r[t])}))}return e}({ref:t,position:"relative",overflow:"hidden"},e,{children:(0,o.jsx)(s.o,{start:r,end:n,colors:f,locations:i,style:[_.StyleSheet.absoluteFill]})}))})))),p=u((function(e){var t=(0,a.Fg)();return e.map((function(e){var r;return"$"===e[0]&&(null==(r=t[e])?void 0:r.toString())||e}))}),"useLinearGradientColors")},85192:function(e,t,r){"use strict";r.d(t,{$:function(){return i}});var o=r(2784),n=r(71295),a=r(74479),s=Object.defineProperty;const l=((e,t)=>s(e,"name",{value:t,configurable:!0}))((e=>{const{color:t="black",size:r=24,...a}=e;return o.createElement(n.Svg,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a},o.createElement(n.Path,{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(n.Circle,{cx:"12",cy:"10",r:"3",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}),"Icon");l.displayName="MapPin";const i=(0,o.memo)((0,a.H)(l))},38462:function(e,t,r){"use strict";r.d(t,{U:function(){return i}});var o=r(2784),n=r(71295),a=r(74479),s=Object.defineProperty;const l=((e,t)=>s(e,"name",{value:t,configurable:!0}))((e=>{const{color:t="black",size:r=24,...a}=e;return o.createElement(n.Svg,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...a},o.createElement(n.Polygon,{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}),"Icon");l.displayName="Star";const i=(0,o.memo)((0,a.H)(l))}},function(e){e.O(0,[774,888,179],(function(){return t=46139,e(e.s=t);var t}));var t=e.O();_N_E=t}]);