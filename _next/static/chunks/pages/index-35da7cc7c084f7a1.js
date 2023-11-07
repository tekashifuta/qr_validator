(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(505)}])},1221:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let r=n(8754),a=(n(7294),r._(n(177)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let n=a.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e}),r={...r,...t};let l=r.loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n({...r,loader:()=>null!=l?l().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete r.webpack,delete r.modules,noSSR(n,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7747:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return l}});let r=n(8754),a=r._(n(7294)),l=a.default.createContext(null)},177:function(e,t,n){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=n(8754),a=r._(n(7294)),l=n(7747),o=[],i=[],s=!1;function load(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function init(){if(!r){let t=new LoadableSubscription(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!s){let e=n.webpack?n.webpack():n.modules;e&&i.push(t=>{for(let n of e)if(t.includes(n))return init()})}function LoadableComponent(e,t){!function(){init();let e=a.default.useContext(l.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let o=a.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),a.default.useMemo(()=>{var t;return o.loading||o.error?a.default.createElement(n.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:r.retry}):o.loaded?a.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",a.default.forwardRef(LoadableComponent)}(load,e)}function flushInitializers(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(o).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(s=!0,t());flushInitializers(i,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let u=Loadable},505:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Component}});var r=n(5893),a=n(7294),l=n(1163),o=n(8917),i=n(9324);n(5202);var s=n(2752),u=n(1963),d=n(3204),c=n(1397),m=n(3793),p=n(9564),f=n(2504),StackItem=e=>(0,r.jsx)(f.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});StackItem.displayName="StackItem";var h=n(5432);function mapResponsive(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,h.Kn)(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"]);var x="& > *:not(style) ~ *:not(style)",_=n(5059),b=(0,_.G)((e,t)=>{let{isInline:n,direction:l,align:o,justify:i,spacing:s="0.5rem",wrap:u,children:d,divider:c,className:m,shouldWrapChildren:p,..._}=e,b=n?"row":null!=l?l:"column",y=(0,a.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[x]:mapResponsive(n,e=>r[e])}})({direction:b,spacing:s}),[b,s]),g=(0,a.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":mapResponsive(n,e=>r[e])}})({spacing:s,direction:b}),[s,b]),j=!!c,v=!p&&!j,S=(0,a.useMemo)(()=>{let e=a.Children.toArray(d).filter(e=>(0,a.isValidElement)(e));return v?e:e.map((t,n)=>{let l=void 0!==t.key?t.key:n,o=n+1===e.length,i=(0,r.jsx)(StackItem,{children:t},l),s=p?i:t;if(!j)return s;let u=(0,a.cloneElement)(c,{__css:g});return(0,r.jsxs)(a.Fragment,{children:[s,o?null:u]},l)})},[c,g,j,v,p,d]),C=(0,h.cx)("chakra-stack",m);return(0,r.jsx)(f.m.div,{ref:t,display:"flex",alignItems:o,justifyContent:i,flexDirection:y.flexDirection,flexWrap:u,className:C,__css:j?{}:{[x]:y[x]},..._,children:S})});b.displayName="Stack";var y=(0,_.G)((e,t)=>(0,r.jsx)(b,{align:"center",...e,direction:"row",ref:t}));y.displayName="HStack";var g=n(1628),j=n(3179),v=(0,_.G)(function(e,t){let n=(0,g.mq)("Heading",e),{className:a,...l}=(0,j.Lr)(e);return(0,r.jsx)(f.m.h2,{ref:t,className:(0,h.cx)("chakra-heading",e.className),...l,__css:n})});v.displayName="Heading";var S=(0,f.m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});S.displayName="Spacer";var[C,k]=(0,n(5227).k)({strict:!1,name:"ButtonGroupContext"});function ButtonIcon(e){let{children:t,className:n,...l}=e,o=(0,a.isValidElement)(t)?(0,a.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,i=(0,h.cx)("chakra-button__icon",n);return(0,r.jsx)(f.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...l,className:i,children:o})}ButtonIcon.displayName="ButtonIcon";var w=n(295);function ButtonSpinner(e){let{label:t,placement:n,spacing:l="0.5rem",children:o=(0,r.jsx)(w.$,{color:"currentColor",width:"1em",height:"1em"}),className:i,__css:s,...u}=e,d=(0,h.cx)("chakra-button__spinner",i),c="start"===n?"marginEnd":"marginStart",m=(0,a.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[c]:t?l:0,fontSize:"1em",lineHeight:"normal",...s}),[s,t,c,l]);return(0,r.jsx)(f.m.div,{className:d,...u,__css:m,children:o})}ButtonSpinner.displayName="ButtonSpinner";var N=n(1103),E=(0,_.G)((e,t)=>{let n=k(),l=(0,g.mq)("Button",{...n,...e}),{isDisabled:o=null==n?void 0:n.isDisabled,isLoading:i,isActive:s,children:u,leftIcon:d,rightIcon:c,loadingText:m,iconSpacing:p="0.5rem",type:x,spinner:_,spinnerPlacement:b="start",className:y,as:v,...S}=(0,j.Lr)(e),C=(0,a.useMemo)(()=>{let e={...null==l?void 0:l._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...l,...!!n&&{_focus:e}}},[l,n]),{ref:w,type:E}=function(e){let[t,n]=(0,a.useState)(!e),r=(0,a.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:r,type:t?"button":void 0}}(v),B={rightIcon:c,leftIcon:d,iconSpacing:p,children:u};return(0,r.jsxs)(f.m.button,{ref:(0,N.qq)(t,w),as:v,type:null!=x?x:E,"data-active":(0,h.PB)(s),"data-loading":(0,h.PB)(i),__css:C,className:(0,h.cx)("chakra-button",y),...S,disabled:o||i,children:[i&&"start"===b&&(0,r.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:m,placement:"start",spacing:p,children:_}),i?m||(0,r.jsx)(f.m.span,{opacity:0,children:(0,r.jsx)(ButtonContent,{...B})}):(0,r.jsx)(ButtonContent,{...B}),i&&"end"===b&&(0,r.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:m,placement:"end",spacing:p,children:_})]})});function ButtonContent(e){let{leftIcon:t,rightIcon:n,children:a,iconSpacing:l}=e;return(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsx)(ButtonIcon,{marginEnd:l,children:t}),a,n&&(0,r.jsx)(ButtonIcon,{marginStart:l,children:n})]})}E.displayName="Button";var B=(0,_.G)((e,t)=>(0,r.jsx)(b,{align:"center",...e,direction:"column",ref:t}));B.displayName="VStack";var L=(0,f.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});L.displayName="Center";var O={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,_.G)(function(e,t){let{axis:n="both",...a}=e;return(0,r.jsx)(f.m.div,{ref:t,__css:O[n],...a,position:"absolute"})});var I=(0,f.m)("div");I.displayName="Box";var R=(0,_.G)(function(e,t){let{size:n,centerContent:a=!0,...l}=e;return(0,r.jsx)(I,{ref:t,boxSize:n,__css:{...a?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...l})});R.displayName="Square",(0,_.G)(function(e,t){let{size:n,...a}=e;return(0,r.jsx)(R,{size:n,ref:t,borderRadius:"9999px",...a})}).displayName="Circle";var T=n(5152),P=n.n(T),D=n(9008),G=n.n(D);let M=P()(()=>n.e(413).then(n.bind(n,1418)).then(e=>e.QrScanner),{loadableGenerated:{webpack:()=>[1418]},ssr:!1});function Component(){let e=(0,a.useContext)(i.sA),t=(0,l.useRouter)(),[n,f]=(0,a.useContext)(i.kc),h=(0,a.useRef)(),[x,_]=(0,a.useContext)(i.DR);return(0,a.useEffect)(()=>{h.current&&h.current.focus()}),(0,a.useEffect)(()=>{let change_complete=()=>x((0,i.Xs)());return t.events.on("routeChangeComplete",change_complete),()=>{t.events.off("routeChangeComplete",change_complete)}},[t]),(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(a.Fragment,{children:(0,o.oA)(null!==_)?(0,r.jsx)(a.Fragment,{children:(0,r.jsx)(s.u_,{isOpen:null!==_,children:(0,r.jsx)(u.Z,{children:(0,r.jsxs)(d.h,{children:[(0,r.jsx)(c.x,{children:"Connection Error"}),(0,r.jsx)(m.f,{children:(0,r.jsxs)(p.x,{children:["Cannot connect to server: ",null!==_?_.message:"",". Check if server is reachable at ",(0,o.e9)().href]})})]})})})}):(0,r.jsx)(a.Fragment,{})}),(0,r.jsxs)(a.Fragment,{children:[(0,r.jsxs)(y,{sx:{padding:"1em"},children:[(0,r.jsx)(v,{children:"QR Validator"}),(0,r.jsx)(S,{}),(0,r.jsx)(E,{children:"Exit"})]}),(0,r.jsxs)(B,{children:[(0,r.jsx)(L,{children:(0,r.jsx)(v,{children:"TEST CODE"})}),(0,r.jsx)(L,{children:(0,r.jsx)(I,{children:(0,r.jsx)(M,{containerStyle:{width:"32vh",height:"24vh",paddingTop:"0"},onDecode:e=>x([(0,o.ju)("state.on_decode",{decoded:e})],e,{}),onError:e=>x([(0,o.ju)("state.on_error",{error:e})],e,{}),onResult:e=>x([(0,o.ju)("state.on_result",{result:e})],e,{})})})}),(0,r.jsx)(L,{children:(0,r.jsx)(v,{children:e.last_scan})}),(0,r.jsx)(L,{children:(0,r.jsx)(E,{children:"Check"})})]})]}),(0,r.jsxs)(G(),{children:[(0,r.jsx)("title",{children:"Reflex App"}),(0,r.jsx)("meta",{content:"A Reflex app.",name:"description"}),(0,r.jsx)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},5152:function(e,t,n){e.exports=n(1221)}},function(e){e.O(0,[442,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);