import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{A as t,B as n,F as r,H as i,I as a,L as o,M as s,N as c,S as l,_ as u,c as d,g as f,h as p,l as m,o as h,s as g,v as _,w as v}from"./react.CrX4o7ec.mjs";import{T as y,a as b,r as x,t as S}from"./motion.BN6qRRLn.mjs";import{A as C,D as w,K as T,L as E,M as D,N as O,Nt as k,O as A,Pt as j,Tt as M,_ as N,et as P,i as F,mt as I,o as L,q as R}from"./framer.i8q5T_xk.mjs";import{d as z,f as B,l as V,u as H}from"./shared-lib.Dx7DQZzL.mjs";function U(e,t){if(!e)return t;let n=e.split(`,`).map(e=>Number.parseFloat(e.trim())).filter(e=>Number.isFinite(e));return n.length?n:t}function W(e){let{content:n,children:a,widthMode:s=`Default`,fitMode:l=`Natural`,alignment:f=`Middle`,padding:p=`0px`,playMode:h=`Hover`,hideOverflow:_=!1,timing:v=1,timeSpan:y=.25,shake:b=`5, 10, 10`,slice:x=`4, 25, 20, 35`,pulse:S=`Object`,preview:C=!0,style:w}=e,T=t(null),E=t(null),D=t(null),[O,k]=o(!1),A=c(()=>U(b,[5,10,10]),[b]),j=c(()=>U(x,[4,25,20,35]),[x]),M=Math.max(.08,v),N=Math.max(.05,y),P=C||h===`Always`||h===`Click`&&O;G(()=>{let e=T.current;if(!e||(e.style.setProperty(`--glitch-scale`,`1`),l!==`Scale`||typeof ResizeObserver>`u`))return;let t=E.current;if(!t)return;let n=0,r=1,a=()=>{n&&i.cancelAnimationFrame(n),n=i.requestAnimationFrame(()=>{let n=e.getBoundingClientRect(),a=e.querySelector(`.framer-glitch-base`),o=a?i.getComputedStyle(a):null,s=o?Number.parseFloat(o.paddingLeft||`0`)+Number.parseFloat(o.paddingRight||`0`):0,c=o?Number.parseFloat(o.paddingTop||`0`)+Number.parseFloat(o.paddingBottom||`0`):0,l=t.offsetWidth,u=t.offsetHeight;if(!n.width||!l)return;let d=Math.max(0,n.width-s),f=Math.max(0,n.height-c),p=d/l,m=f&&u?f/u:p,h=Math.min(p,m),g=Number.isFinite(h)?Math.max(.05,h):1;Math.abs(r-g)<=.005||(r=g,e.style.setProperty(`--glitch-scale`,String(g)))})},o=new ResizeObserver(a);return o.observe(e),o.observe(t),a(),()=>{o.disconnect(),n&&i.cancelAnimationFrame(n)}},[l,p,n,a]),r(()=>()=>{D.current!==null&&i!==void 0&&i.clearTimeout(D.current)},[]);function F(){h!==`Click`||i===void 0||(D.current!==null&&i.clearTimeout(D.current),u(()=>k(!0)),D.current=i.setTimeout(()=>{u(()=>k(!1))},N*1e3))}let I={"--glitch-cycle":`${M}s`,"--glitch-span":`${N}s`,"--shake-x":`${A[0]??5}px`,"--shake-y":`${A[1]??10}px`,"--shake-rotate":`${A[2]??10}`,"--slice-a":`${Math.max(0,Math.min(100,j[0]??4))}%`,"--slice-b":`${Math.max(0,Math.min(100,j[1]??25))}%`,"--slice-c":`${Math.max(0,Math.min(100,j[2]??20))}%`,"--slice-d":`${Math.max(0,Math.min(100,j[3]??35))}%`,"--glitch-rgb-opacity":.72},L=f===`Left`?`start`:f===`Right`?`end`:`center`,R=f===`Left`?`flex-start`:f===`Right`?`flex-end`:`center`,z=f===`Left`?`left center`:f===`Right`?`right center`:`center center`,B=c(()=>({position:`relative`,zIndex:1,display:`grid`,gridTemplateColumns:`minmax(0, 1fr)`,gridTemplateRows:`minmax(0, 1fr)`,justifyItems:L,minWidth:0,minHeight:0,boxSizing:`border-box`,padding:p,width:s===`Fill`?`100%`:`max-content`,height:s===`Fill`?`100%`:`max-content`}),[L,p,s]),V=c(()=>({position:`absolute`,inset:0,zIndex:2,display:`grid`,gridTemplateColumns:`minmax(0, 1fr)`,gridTemplateRows:`minmax(0, 1fr)`,justifyItems:L,boxSizing:`border-box`,padding:p,pointerEvents:`none`,transform:`translate3d(0, 0, 0)`}),[L,p]),H=c(()=>l===`Scale`?{width:`max-content`,height:`max-content`,alignSelf:`center`,justifySelf:L,transform:`scale(var(--glitch-scale))`,transformOrigin:z}:l===`Fill`?{width:`100%`,height:`100%`,display:`flex`,alignSelf:`stretch`,justifySelf:`stretch`,alignItems:`center`,justifyContent:R,transformOrigin:z}:{width:`max-content`,height:`max-content`,alignSelf:`start`,justifySelf:L,transformOrigin:z},[l,R,L,z]),W=c(()=>n??a??d(`div`,{className:`framer-glitch-placeholder`,children:`Drop content here`}),[n,a]);return m(g,{children:[d(`style`,{children:q}),m(`div`,{ref:T,className:`framer-glitch-effect`,"data-active":P?`true`:`false`,"data-play":h,"data-alignment":f,"data-width":s,"data-fit":l,"data-pulse":S,onClick:F,style:{...w,...I,position:w?.position??`relative`,display:`block`,isolation:`isolate`,minWidth:0,minHeight:0,width:s===`Fill`?`100%`:`max-content`,height:s===`Fill`?`100%`:`max-content`,overflow:_?`hidden`:`visible`,cursor:h===`Click`?`pointer`:w?.cursor},children:[d(K,{className:`framer-glitch-base`,layerStyle:B,fitStyle:H,fitRef:E,children:W}),d(K,{className:`framer-glitch-rgb framer-glitch-rgb-red`,hidden:!0,layerStyle:V,fitStyle:H,children:W}),d(K,{className:`framer-glitch-rgb framer-glitch-rgb-cyan`,hidden:!0,layerStyle:V,fitStyle:H,children:W}),d(K,{className:`framer-glitch-slice`,hidden:!0,layerStyle:V,fitStyle:H,children:W})]})]})}var G,K,q,J=e((()=>{n(),h(),v(),P(),G=i===void 0?r:l,K=p(function({children:e,className:t,hidden:n,layerStyle:r,fitStyle:i,fitRef:a}){return d(`div`,{className:t,"aria-hidden":n,style:r,children:d(`div`,{ref:a,className:`framer-glitch-fit`,style:i,children:e})})}),q=`
.framer-glitch-effect {
    position: relative;
    display: block;
    --glitch-scale: 1;
    --glitch-content-align: center;
    --glitch-transform-origin: center center;
    isolation: isolate;
    contain: layout paint;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    min-width: 0;
    min-height: 0;
}

.framer-glitch-effect *,
.framer-glitch-effect *::before,
.framer-glitch-effect *::after {
    box-sizing: border-box;
}

.framer-glitch-effect[data-alignment="Left"] {
    --glitch-content-align: start;
    --glitch-transform-origin: left center;
}

.framer-glitch-effect[data-alignment="Middle"] {
    --glitch-content-align: center;
    --glitch-transform-origin: center center;
}

.framer-glitch-effect[data-alignment="Right"] {
    --glitch-content-align: end;
    --glitch-transform-origin: right center;
}

.framer-glitch-effect[data-width="Default"] {
    width: max-content;
    height: max-content;
}

.framer-glitch-effect[data-width="Fill"] {
    width: 100%;
    height: 100%;
}

.framer-glitch-base {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    justify-items: var(--glitch-content-align);
    min-width: 0;
    min-height: 0;
}

.framer-glitch-rgb,
.framer-glitch-slice {
    position: absolute;
    inset: 0;
    z-index: 2;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    justify-items: var(--glitch-content-align);
    pointer-events: none;
    opacity: 0;
    will-change: transform, opacity, clip-path, filter;
    transform: translate3d(0, 0, 0);
}

.framer-glitch-fit {
    grid-area: 1 / 1;
    display: block;
    transform-origin: var(--glitch-transform-origin);
    min-width: 0;
    min-height: 0;
}

.framer-glitch-effect[data-fit="Natural"] .framer-glitch-fit {
    width: max-content;
    height: max-content;
}

.framer-glitch-effect[data-fit="Natural"] .framer-glitch-fit {
    align-self: start;
    justify-self: var(--glitch-content-align);
}

/*
 * Every visual copy must measure against the same box. Previously the base
 * layer collapsed to max-content in Natural mode while the RGB/slice layers
 * filled the root. That made non-left alignments jump as soon as the effect
 * became active.
 */
.framer-glitch-effect[data-width="Fill"] .framer-glitch-base {
    width: 100%;
    height: 100%;
}

.framer-glitch-effect[data-width="Default"] .framer-glitch-base {
    width: max-content;
    height: max-content;
}

.framer-glitch-effect[data-fit="Fill"] .framer-glitch-base,
.framer-glitch-effect[data-fit="Fill"] .framer-glitch-fit,
.framer-glitch-effect[data-fit="Scale"] .framer-glitch-base {
    width: 100%;
    height: 100%;
}

.framer-glitch-effect[data-fit="Fill"] .framer-glitch-fit {
    display: flex;
    align-self: stretch;
    justify-self: stretch;
    align-items: center;
    justify-content: var(--glitch-content-align);
}

.framer-glitch-effect[data-fit="Fill"] .framer-glitch-fit > * {
    flex: 0 0 auto;
    max-width: 100%;
    max-height: 100%;
}

.framer-glitch-effect[data-fit="Scale"] .framer-glitch-fit {
    width: max-content;
    height: max-content;
    align-self: center;
    justify-self: var(--glitch-content-align);
}

.framer-glitch-placeholder {
    min-width: 180px;
    min-height: 72px;
    border: 1px dashed rgba(255, 255, 255, 0.35);
    border-radius: 14px;
    color: rgba(255, 255, 255, 0.72);
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    font: 600 13px/1.2 Inter, system-ui, sans-serif;
    letter-spacing: -0.01em;
}

.framer-glitch-effect:is([data-active="true"], [data-play="Hover"]:hover) .framer-glitch-rgb-red {
    opacity: var(--glitch-rgb-opacity);
    mix-blend-mode: screen;
    filter: saturate(180%) hue-rotate(-35deg) drop-shadow(2px 0 rgba(255, 0, 64, 0.95));
    animation: framerGlitchRed var(--glitch-cycle) steps(2, end) infinite;
}

.framer-glitch-effect:is([data-active="true"], [data-play="Hover"]:hover) .framer-glitch-rgb-cyan {
    opacity: var(--glitch-rgb-opacity);
    mix-blend-mode: screen;
    filter: saturate(180%) hue-rotate(145deg) drop-shadow(-2px 0 rgba(0, 255, 255, 0.95));
    animation: framerGlitchCyan var(--glitch-cycle) steps(2, end) infinite;
}

.framer-glitch-effect:is([data-active="true"], [data-play="Hover"]:hover) .framer-glitch-slice {
    opacity: 0.9;
    mix-blend-mode: lighten;
    clip-path: inset(var(--slice-a) 0 calc(100% - var(--slice-b)) 0);
    animation: framerGlitchSlice var(--glitch-cycle) steps(2, end) infinite;
}

.framer-glitch-effect:is([data-active="true"], [data-play="Hover"]:hover)[data-pulse="Object"] .framer-glitch-base,
.framer-glitch-effect:is([data-active="true"], [data-play="Hover"]:hover)[data-pulse="Both"] .framer-glitch-base {
    animation: framerGlitchObjectPulse var(--glitch-cycle) steps(2, end) infinite;
}

.framer-glitch-effect:is([data-active="true"], [data-play="Hover"]:hover)[data-pulse="RGB"] .framer-glitch-rgb,
.framer-glitch-effect:is([data-active="true"], [data-play="Hover"]:hover)[data-pulse="Both"] .framer-glitch-rgb {
    animation-duration: var(--glitch-span);
}

@keyframes framerGlitchRed {
    0% { transform: translate3d(calc(var(--shake-x) * -0.4), calc(var(--shake-y) * 0.18), 0); clip-path: inset(0 0 0 0); }
    8% { transform: translate3d(var(--shake-x), calc(var(--shake-y) * -0.5), 0); clip-path: inset(var(--slice-c) 0 calc(100% - var(--slice-d)) 0); }
    14% { transform: translate3d(calc(var(--shake-x) * -0.75), calc(var(--shake-y) * 0.4), 0); clip-path: inset(var(--slice-a) 0 calc(100% - var(--slice-b)) 0); }
    22%, 100% { transform: translate3d(0, 0, 0); clip-path: inset(0 0 0 0); }
}

@keyframes framerGlitchCyan {
    0% { transform: translate3d(calc(var(--shake-x) * 0.45), calc(var(--shake-y) * -0.22), 0); clip-path: inset(0 0 0 0); }
    10% { transform: translate3d(calc(var(--shake-x) * -1), calc(var(--shake-y) * 0.35), 0); clip-path: inset(var(--slice-a) 0 calc(100% - var(--slice-d)) 0); }
    18% { transform: translate3d(calc(var(--shake-x) * 0.8), calc(var(--shake-y) * -0.45), 0); clip-path: inset(var(--slice-c) 0 calc(100% - var(--slice-b)) 0); }
    25%, 100% { transform: translate3d(0, 0, 0); clip-path: inset(0 0 0 0); }
}

@keyframes framerGlitchSlice {
    0% { transform: translate3d(0, 0, 0); clip-path: inset(var(--slice-a) 0 calc(100% - var(--slice-b)) 0); }
    9% { transform: translate3d(calc(var(--shake-x) * 0.6), 0, 0); clip-path: inset(var(--slice-c) 0 calc(100% - var(--slice-d)) 0); }
    17% { transform: translate3d(calc(var(--shake-x) * -0.55), 0, 0); clip-path: inset(var(--slice-a) 0 calc(100% - var(--slice-d)) 0); }
    26%, 100% { transform: translate3d(0, 0, 0); clip-path: inset(0 0 0 0); opacity: 0; }
}

@keyframes framerGlitchObjectPulse {
    0% { transform: translate3d(0, 0, 0) skewX(0deg); filter: none; }
    8% { transform: translate3d(calc(var(--shake-x) * 0.14), 0, 0) skewX(calc(var(--shake-rotate) * 0.08deg)); filter: contrast(1.12) saturate(1.08); }
    15% { transform: translate3d(calc(var(--shake-x) * -0.1), 0, 0) skewX(calc(var(--shake-rotate) * -0.06deg)); filter: contrast(1.2) saturate(1.14); }
    24%, 100% { transform: translate3d(0, 0, 0) skewX(0deg); filter: none; }
}

@media (prefers-reduced-motion: reduce) {
    .framer-glitch-effect:is([data-active="true"], [data-play="Hover"]:hover) .framer-glitch-rgb,
    .framer-glitch-effect:is([data-active="true"], [data-play="Hover"]:hover) .framer-glitch-slice,
    .framer-glitch-effect:is([data-active="true"], [data-play="Hover"]:hover) .framer-glitch-base {
        animation: none !important;
    }

    .framer-glitch-effect:is([data-active="true"], [data-play="Hover"]:hover) .framer-glitch-rgb-red {
        opacity: 0.35;
        transform: translate3d(1px, 0, 0);
    }

    .framer-glitch-effect:is([data-active="true"], [data-play="Hover"]:hover) .framer-glitch-rgb-cyan {
        opacity: 0.35;
        transform: translate3d(-1px, 0, 0);
    }
}
`,W.displayName=`Glitch Effect`,O(W,{content:{type:L.Slot,title:`Content`,maxCount:1},widthMode:{type:L.Enum,title:`Width`,options:[`Default`,`Fill`],optionTitles:[`Default`,`Fill`],defaultValue:`Default`,displaySegmentedControl:!0},fitMode:{type:L.Enum,title:`Fit`,options:[`Natural`,`Fill`,`Scale`],optionTitles:[`Natural`,`Fill`,`Scale`],defaultValue:`Natural`,displaySegmentedControl:!0},alignment:{type:L.Enum,title:`Alignment`,options:[`Left`,`Middle`,`Right`],optionTitles:[`Left`,`Middle`,`Right`],defaultValue:`Middle`,displaySegmentedControl:!0},padding:{type:L.Padding,title:`Padding`,defaultValue:`0px`},playMode:{type:L.Enum,title:`Play Mode`,options:[`Always`,`Hover`,`Click`],optionTitles:[`Always`,`Hover`,`Click`],defaultValue:`Hover`,displaySegmentedControl:!1},hideOverflow:{type:L.Boolean,title:`Hide Overflow`,defaultValue:!1,enabledTitle:`Yes`,disabledTitle:`No`},timing:{type:L.Number,title:`Timing`,defaultValue:1,min:.08,max:6,step:.05},timeSpan:{type:L.Number,title:`Time Span`,defaultValue:.25,min:.05,max:3,step:.05},shake:{type:L.String,title:`Shake`,defaultValue:`5, 10, 10`,placeholder:`x, y, skew`},slice:{type:L.String,title:`Slice`,defaultValue:`4, 25, 20, 35`,placeholder:`top, bottom, top, bottom`},pulse:{type:L.Enum,title:`Pulse`,options:[`Object`,`RGB`,`Both`,`None`],optionTitles:[`Object`,`RGB`,`Both`,`None`],defaultValue:`Object`},preview:{type:L.Boolean,title:`Preview`,defaultValue:!0,enabledTitle:`Yes`,disabledTitle:`No`}})}));function ee(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var Y,X,Z,Q,te,ne,re,ie,ae,$,oe=e((()=>{h(),P(),S(),v(),J(),B(),Y=T(W),X={dwiEOgQlV:{hover:!0}},Z=`framer-nLQ7h`,Q={dwiEOgQlV:`framer-v-j4x2rv`},te={damping:60,delay:0,mass:1,stiffness:900,type:`spring`},ne=({value:e,children:t})=>{let n=s(b),r=e??n.transition,i=c(()=>({...n,transition:r}),[JSON.stringify(r)]);return d(b.Provider,{value:i,children:t})},re=y.create(a),ie=({height:e,id:t,label:n,link:r,visible:i,width:a,...o})=>({...o,ecEz8Djri:n??o.ecEz8Djri??`BUTTON`,VeLROXOxc:r??o.VeLROXOxc,WztuG6Qfi:i??o.WztuG6Qfi??!0}),ae=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),$=j(f(function(e,n){let r=t(null),i=n??r,o=_(),{activeLocale:s,setLocale:c}=M();I();let{style:l,className:u,layoutId:f,variant:p,ecEz8Djri:h,WztuG6Qfi:g,VeLROXOxc:v,...b}=ie(e),{baseVariant:S,classNames:T,clearLoadingGesture:D,gestureHandlers:O,gestureVariant:j,isLoading:P,setGestureState:L,setVariant:R,variants:z}=k({defaultVariant:`dwiEOgQlV`,enabledGestures:X,ref:i,variant:p,variantClassNames:Q}),B=ae(e,z),H=E(Z,V);return d(x,{id:f??o,children:d(re,{animate:z,initial:!1,children:d(ne,{value:te,children:d(N,{href:v,motionChild:!0,nodeId:`dwiEOgQlV`,openInNewTab:!1,scopeId:`BCVZtHbbZ`,children:m(y.a,{...b,...O,className:`${E(H,`framer-j4x2rv`,u,T)} framer-1fgxmrp`,"data-framer-name":`Default`,layoutDependency:B,layoutId:`dwiEOgQlV`,ref:i,style:{backgroundColor:`var(--token-d2d7463b-8c5b-45c7-9861-c859a5ade7e4, rgb(232, 0, 0))`,...l},...ee({"dwiEOgQlV-hover":{"data-framer-name":void 0}},S,j),children:[d(y.div,{className:`framer-1ef7nf5`,"data-framer-name":`Shade`,layoutDependency:B,layoutId:`NFutrs4bK`,style:{backgroundColor:`var(--token-15008cea-92bf-4a30-a647-97b1d4022607, rgba(0, 0, 0, 0.4))`,opacity:0},variants:{"dwiEOgQlV-hover":{opacity:1}}}),d(y.div,{className:`framer-9mkd9r`,"data-border":!0,"data-framer-name":`Top Right`,layoutDependency:B,layoutId:`B994xjhbt`,style:{"--border-bottom-width":`0px`,"--border-color":`rgba(32, 96, 223, 0)`,"--border-left-width":`0px`,"--border-right-width":`1px`,"--border-style":`solid`,"--border-top-width":`1px`,backgroundColor:`var(--token-15008cea-92bf-4a30-a647-97b1d4022607, rgba(0, 0, 0, 0.4))`}}),d(y.div,{className:`framer-9488v0`,"data-border":!0,"data-framer-name":`Top Left`,layoutDependency:B,layoutId:`bDuaRz0CB`,style:{"--border-bottom-width":`0px`,"--border-color":`rgba(32, 96, 223, 0)`,"--border-left-width":`1px`,"--border-right-width":`0px`,"--border-style":`solid`,"--border-top-width":`1px`,backgroundColor:`var(--token-15008cea-92bf-4a30-a647-97b1d4022607, rgba(0, 0, 0, 0.4))`}}),d(y.div,{className:`framer-1wt56x1`,"data-border":!0,"data-framer-name":`Bottom Left`,layoutDependency:B,layoutId:`CxCp4zBhY`,style:{"--border-bottom-width":`1px`,"--border-color":`rgba(32, 96, 223, 0)`,"--border-left-width":`1px`,"--border-right-width":`0px`,"--border-style":`solid`,"--border-top-width":`0px`,backgroundColor:`var(--token-15008cea-92bf-4a30-a647-97b1d4022607, rgba(0, 0, 0, 0.4))`}}),d(y.div,{className:`framer-19ajvfy`,"data-border":!0,"data-framer-name":`Bottom Right`,layoutDependency:B,layoutId:`uiU7EFoZY`,style:{"--border-bottom-width":`1px`,"--border-color":`rgba(32, 96, 223, 0)`,"--border-left-width":`0px`,"--border-right-width":`1px`,"--border-style":`solid`,"--border-top-width":`0px`,backgroundColor:`var(--token-15008cea-92bf-4a30-a647-97b1d4022607, rgba(0, 0, 0, 0.4))`}}),d(F,{children:d(C,{className:`framer-1sko69j-container`,"data-code-component-plugin-id":`api`,isAuthoredByUser:!0,layoutDependency:B,layoutId:`DPRx47OmH-container`,nodeId:`DPRx47OmH`,rendersWithMotion:!0,scopeId:`BCVZtHbbZ`,children:d(W,{alignment:`Middle`,content:[m(y.div,{className:`framer-1ojp0oz`,"data-framer-name":`Text`,layoutDependency:B,layoutId:`Tswhce5ba`,children:[g!==!1&&d(y.div,{className:`framer-1j2eiqn`,layoutDependency:B,layoutId:`TfF0_zvRo`,children:m(A,{className:`framer-1qfzkeu`,layoutDependency:B,layoutId:`qOxGgqKOE`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19 19" overflow="visible"><path d="M 1.368 9.233 L 3.223 9.233 L 3.223 7.043 L 2.394 7.043 C 2.358 7.402 2.194 7.725 1.947 7.967 C 1.785 8.126 1.588 8.251 1.367 8.328 L 1.367 9.232 Z M 7.902 11.743 L 12.467 14.463 L 7.902 17.182 Z M 2.303 6.345 L 3.102 6.134 L 2.526 4.018 L 0.732 4.491 L 0.97 5.363 C 1.351 5.392 1.694 5.556 1.948 5.807 C 2.103 5.96 2.224 6.143 2.302 6.345 Z M 1.451 6.296 C 1.297 6.145 1.085 6.051 0.85 6.051 C 0.622 6.051 0.415 6.139 0.256 6.288 C 0.095 6.448 0 6.657 0 6.887 C 0 7.119 0.094 7.329 0.248 7.478 C 0.402 7.63 0.614 7.723 0.85 7.723 C 1.084 7.723 1.297 7.63 1.451 7.478 C 1.605 7.328 1.699 7.119 1.699 6.887 C 1.699 6.657 1.604 6.448 1.451 6.296 Z M 15.972 0.473 L 16.549 2.589 L 18.341 2.116 L 17.765 0 Z M 15.87 2.768 L 15.293 0.652 L 13.418 1.146 L 13.994 3.263 L 15.869 2.768 Z M 13.316 3.441 L 12.74 1.325 L 10.865 1.82 L 11.441 3.936 L 13.316 3.441 Z M 10.763 4.115 L 10.187 1.999 L 8.312 2.493 L 8.888 4.609 L 10.762 4.115 Z M 8.21 4.788 L 7.634 2.672 L 5.758 3.167 L 6.335 5.283 Z M 5.656 5.462 L 5.08 3.345 L 3.204 3.84 L 3.781 5.956 L 5.655 5.462 Z M 17.145 7.043 L 17.145 9.233 L 19 9.233 L 19 7.043 Z M 16.442 9.233 L 16.442 7.043 L 14.502 7.043 L 14.502 9.233 Z M 13.798 9.233 L 13.798 7.043 L 11.857 7.043 L 11.857 9.233 Z M 11.154 9.233 L 11.154 7.043 L 9.213 7.043 L 9.213 9.233 Z M 8.51 9.233 L 8.51 7.043 L 6.57 7.043 L 6.57 9.233 Z M 5.866 9.233 L 5.866 7.043 L 3.925 7.043 L 3.925 9.233 Z M 18.999 9.925 L 1.366 9.925 L 1.366 19 L 18.999 19 Z" fill="var(--token-6160eddf-8159-43cb-9209-89d8036adedc, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;Color Light 1&quot;} */"></path></svg>`,withExternalLayout:!0,children:[d(A,{className:`framer-4uln4i`,layoutDependency:B,layoutId:`hpfnhMtkB`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.856 2.19" overflow="visible"><path d="M 0.001 2.19 L 1.856 2.19 L 1.856 0 L 1.027 0 C 0.991 0.359 0.827 0.682 0.58 0.924 C 0.418 1.084 0.221 1.209 0 1.285 L 0 2.189 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-1cf4atb`,layoutDependency:B,layoutId:`TQwqiZh4S`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.565 5.439" overflow="visible"><path d="M 0 0 L 4.565 2.72 L 0 5.439 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-1e04596`,layoutDependency:B,layoutId:`c3_hL_Hkg`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.37 2.327" overflow="visible"><path d="M 1.57 2.327 L 2.37 2.116 L 1.794 0 L 0 0.473 L 0.238 1.345 C 0.618 1.374 0.961 1.538 1.216 1.789 C 1.371 1.942 1.492 2.125 1.57 2.327 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-1hiq8oo`,layoutDependency:B,layoutId:`wGK9JVwTP`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.699 1.672" overflow="visible"><path d="M 1.451 0.245 C 1.297 0.094 1.085 0 0.85 0 C 0.622 0 0.415 0.088 0.256 0.237 C 0.095 0.396 0 0.605 0 0.836 C 0 1.067 0.094 1.277 0.248 1.427 C 0.402 1.578 0.614 1.672 0.85 1.672 C 1.084 1.672 1.297 1.578 1.451 1.427 C 1.605 1.277 1.699 1.067 1.699 0.836 C 1.699 0.605 1.604 0.396 1.451 0.245 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-6esn1d`,layoutDependency:B,layoutId:`SdN8J57i2`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.369 2.589" overflow="visible"><path d="M 0 0.473 L 0.576 2.589 L 2.369 2.116 L 1.793 0 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-12ki5av`,layoutDependency:B,layoutId:`w0bx7cqif`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.452 2.611" overflow="visible"><path d="M 2.452 2.116 L 1.875 0 L 0 0.495 L 0.576 2.611 L 2.451 2.116 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-11la4rd`,layoutDependency:B,layoutId:`e2vv1E3N1`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.452 2.611" overflow="visible"><path d="M 2.452 2.116 L 1.875 0 L 0 0.495 L 0.576 2.611 L 2.451 2.116 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-1juc20i`,layoutDependency:B,layoutId:`YLaaWiTmB`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.452 2.611" overflow="visible"><path d="M 2.452 2.116 L 1.875 0 L 0 0.495 L 0.576 2.611 L 2.451 2.116 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-j6hv8`,layoutDependency:B,layoutId:`StcGxe0x7`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.452 2.611" overflow="visible"><path d="M 2.452 2.116 L 1.875 0 L 0 0.495 L 0.576 2.611 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-r6j63z`,layoutDependency:B,layoutId:`pAdhyx0tm`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.452 2.611" overflow="visible"><path d="M 2.452 2.116 L 1.875 0 L 0 0.495 L 0.576 2.611 L 2.451 2.116 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-3jo4d`,layoutDependency:B,layoutId:`c3igWRyew`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.855 2.19" overflow="visible"><path d="M 0 0 L 0 2.19 L 1.855 2.19 L 1.855 0 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-1t3z515`,layoutDependency:B,layoutId:`EsWp9FZ29`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.94 2.19" overflow="visible"><path d="M 1.94 2.19 L 1.94 0 L 0 0 L 0 2.19 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-2j0g2h`,layoutDependency:B,layoutId:`z_KM7Sg85`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.94 2.19" overflow="visible"><path d="M 1.94 2.19 L 1.94 0 L 0 0 L 0 2.19 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-17ynski`,layoutDependency:B,layoutId:`y4vCVEsDa`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.94 2.19" overflow="visible"><path d="M 1.94 2.19 L 1.94 0 L 0 0 L 0 2.19 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-1afhc6x`,layoutDependency:B,layoutId:`Pf7tlBgwd`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.94 2.19" overflow="visible"><path d="M 1.94 2.19 L 1.94 0 L 0 0 L 0 2.19 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-zsh3vw`,layoutDependency:B,layoutId:`fXlslcjMj`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.94 2.19" overflow="visible"><path d="M 1.94 2.19 L 1.94 0 L 0 0 L 0 2.19 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-14ou4x1`,layoutDependency:B,layoutId:`j9Ih7tXmr`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.632 9.075" overflow="visible"><path d="M 17.632 0 L 0 0 L 0 9.075 L 17.632 9.075 Z" fill="transparent"></path></svg>`,withExternalLayout:!0})]})}),d(w,{__fromCanvasComponent:!0,children:d(a,{children:d(y.p,{className:`framer-styles-preset-rpbi2m`,"data-styles-preset":`Cr2JExDYP`,dir:`auto`,children:`BUTTON`})}),className:`framer-12corxj`,fonts:[`Inter`],layoutDependency:B,layoutId:`vAjGl4K9L`,style:{"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`},text:h,verticalAlignment:`top`,withExternalLayout:!0})]})],fitMode:`Fill`,height:`100%`,hideOverflow:!1,id:`DPRx47OmH`,layoutId:`DPRx47OmH`,padding:`0px`,playMode:`Hover`,preview:!1,pulse:`Object`,shake:`10, 20, 10`,slice:`140, 200, 600, 100`,style:{height:`100%`,width:`100%`},timeSpan:.35,timing:.88,width:`100%`,widthMode:`Fill`,children:m(y.div,{className:`framer-1ojp0oz`,"data-framer-name":`Text`,layoutDependency:B,layoutId:`Tswhce5ba`,children:[g!==!1&&d(y.div,{className:`framer-1j2eiqn`,layoutDependency:B,layoutId:`TfF0_zvRo`,children:m(A,{className:`framer-1qfzkeu`,layoutDependency:B,layoutId:`qOxGgqKOE`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19 19" overflow="visible"><path d="M 1.368 9.233 L 3.223 9.233 L 3.223 7.043 L 2.394 7.043 C 2.358 7.402 2.194 7.725 1.947 7.967 C 1.785 8.126 1.588 8.251 1.367 8.328 L 1.367 9.232 Z M 7.902 11.743 L 12.467 14.463 L 7.902 17.182 Z M 2.303 6.345 L 3.102 6.134 L 2.526 4.018 L 0.732 4.491 L 0.97 5.363 C 1.351 5.392 1.694 5.556 1.948 5.807 C 2.103 5.96 2.224 6.143 2.302 6.345 Z M 1.451 6.296 C 1.297 6.145 1.085 6.051 0.85 6.051 C 0.622 6.051 0.415 6.139 0.256 6.288 C 0.095 6.448 0 6.657 0 6.887 C 0 7.119 0.094 7.329 0.248 7.478 C 0.402 7.63 0.614 7.723 0.85 7.723 C 1.084 7.723 1.297 7.63 1.451 7.478 C 1.605 7.328 1.699 7.119 1.699 6.887 C 1.699 6.657 1.604 6.448 1.451 6.296 Z M 15.972 0.473 L 16.549 2.589 L 18.341 2.116 L 17.765 0 Z M 15.87 2.768 L 15.293 0.652 L 13.418 1.146 L 13.994 3.263 L 15.869 2.768 Z M 13.316 3.441 L 12.74 1.325 L 10.865 1.82 L 11.441 3.936 L 13.316 3.441 Z M 10.763 4.115 L 10.187 1.999 L 8.312 2.493 L 8.888 4.609 L 10.762 4.115 Z M 8.21 4.788 L 7.634 2.672 L 5.758 3.167 L 6.335 5.283 Z M 5.656 5.462 L 5.08 3.345 L 3.204 3.84 L 3.781 5.956 L 5.655 5.462 Z M 17.145 7.043 L 17.145 9.233 L 19 9.233 L 19 7.043 Z M 16.442 9.233 L 16.442 7.043 L 14.502 7.043 L 14.502 9.233 Z M 13.798 9.233 L 13.798 7.043 L 11.857 7.043 L 11.857 9.233 Z M 11.154 9.233 L 11.154 7.043 L 9.213 7.043 L 9.213 9.233 Z M 8.51 9.233 L 8.51 7.043 L 6.57 7.043 L 6.57 9.233 Z M 5.866 9.233 L 5.866 7.043 L 3.925 7.043 L 3.925 9.233 Z M 18.999 9.925 L 1.366 9.925 L 1.366 19 L 18.999 19 Z" fill="var(--token-6160eddf-8159-43cb-9209-89d8036adedc, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;Color Light 1&quot;} */"></path></svg>`,withExternalLayout:!0,children:[d(A,{className:`framer-4uln4i`,layoutDependency:B,layoutId:`hpfnhMtkB`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.856 2.19" overflow="visible"><path d="M 0.001 2.19 L 1.856 2.19 L 1.856 0 L 1.027 0 C 0.991 0.359 0.827 0.682 0.58 0.924 C 0.418 1.084 0.221 1.209 0 1.285 L 0 2.189 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-1cf4atb`,layoutDependency:B,layoutId:`TQwqiZh4S`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.565 5.439" overflow="visible"><path d="M 0 0 L 4.565 2.72 L 0 5.439 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-1e04596`,layoutDependency:B,layoutId:`c3_hL_Hkg`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.37 2.327" overflow="visible"><path d="M 1.57 2.327 L 2.37 2.116 L 1.794 0 L 0 0.473 L 0.238 1.345 C 0.618 1.374 0.961 1.538 1.216 1.789 C 1.371 1.942 1.492 2.125 1.57 2.327 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-1hiq8oo`,layoutDependency:B,layoutId:`wGK9JVwTP`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.699 1.672" overflow="visible"><path d="M 1.451 0.245 C 1.297 0.094 1.085 0 0.85 0 C 0.622 0 0.415 0.088 0.256 0.237 C 0.095 0.396 0 0.605 0 0.836 C 0 1.067 0.094 1.277 0.248 1.427 C 0.402 1.578 0.614 1.672 0.85 1.672 C 1.084 1.672 1.297 1.578 1.451 1.427 C 1.605 1.277 1.699 1.067 1.699 0.836 C 1.699 0.605 1.604 0.396 1.451 0.245 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-6esn1d`,layoutDependency:B,layoutId:`SdN8J57i2`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.369 2.589" overflow="visible"><path d="M 0 0.473 L 0.576 2.589 L 2.369 2.116 L 1.793 0 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-12ki5av`,layoutDependency:B,layoutId:`w0bx7cqif`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.452 2.611" overflow="visible"><path d="M 2.452 2.116 L 1.875 0 L 0 0.495 L 0.576 2.611 L 2.451 2.116 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-11la4rd`,layoutDependency:B,layoutId:`e2vv1E3N1`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.452 2.611" overflow="visible"><path d="M 2.452 2.116 L 1.875 0 L 0 0.495 L 0.576 2.611 L 2.451 2.116 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-1juc20i`,layoutDependency:B,layoutId:`YLaaWiTmB`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.452 2.611" overflow="visible"><path d="M 2.452 2.116 L 1.875 0 L 0 0.495 L 0.576 2.611 L 2.451 2.116 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-j6hv8`,layoutDependency:B,layoutId:`StcGxe0x7`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.452 2.611" overflow="visible"><path d="M 2.452 2.116 L 1.875 0 L 0 0.495 L 0.576 2.611 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-r6j63z`,layoutDependency:B,layoutId:`pAdhyx0tm`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.452 2.611" overflow="visible"><path d="M 2.452 2.116 L 1.875 0 L 0 0.495 L 0.576 2.611 L 2.451 2.116 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-3jo4d`,layoutDependency:B,layoutId:`c3igWRyew`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.855 2.19" overflow="visible"><path d="M 0 0 L 0 2.19 L 1.855 2.19 L 1.855 0 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-1t3z515`,layoutDependency:B,layoutId:`EsWp9FZ29`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.94 2.19" overflow="visible"><path d="M 1.94 2.19 L 1.94 0 L 0 0 L 0 2.19 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-2j0g2h`,layoutDependency:B,layoutId:`z_KM7Sg85`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.94 2.19" overflow="visible"><path d="M 1.94 2.19 L 1.94 0 L 0 0 L 0 2.19 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-17ynski`,layoutDependency:B,layoutId:`y4vCVEsDa`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.94 2.19" overflow="visible"><path d="M 1.94 2.19 L 1.94 0 L 0 0 L 0 2.19 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-1afhc6x`,layoutDependency:B,layoutId:`Pf7tlBgwd`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.94 2.19" overflow="visible"><path d="M 1.94 2.19 L 1.94 0 L 0 0 L 0 2.19 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-zsh3vw`,layoutDependency:B,layoutId:`fXlslcjMj`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.94 2.19" overflow="visible"><path d="M 1.94 2.19 L 1.94 0 L 0 0 L 0 2.19 Z" fill="transparent"></path></svg>`,withExternalLayout:!0}),d(A,{className:`framer-14ou4x1`,layoutDependency:B,layoutId:`j9Ih7tXmr`,requiresOverflowVisible:!1,svg:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.632 9.075" overflow="visible"><path d="M 17.632 0 L 0 0 L 0 9.075 L 17.632 9.075 Z" fill="transparent"></path></svg>`,withExternalLayout:!0})]})}),d(w,{__fromCanvasComponent:!0,children:d(a,{children:d(y.p,{className:`framer-styles-preset-rpbi2m`,"data-styles-preset":`Cr2JExDYP`,dir:`auto`,children:`BUTTON`})}),className:`framer-12corxj`,fonts:[`Inter`],layoutDependency:B,layoutId:`vAjGl4K9L`,style:{"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`},text:h,verticalAlignment:`top`,withExternalLayout:!0})]})})})})]})})})})})}),[`.framer-nLQ7h.framer-1fgxmrp, .framer-nLQ7h .framer-1fgxmrp { display: block; }`,`.framer-nLQ7h.framer-j4x2rv { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 44px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px 24px 15px 24px; position: relative; text-decoration: none; width: 406px; }`,`.framer-nLQ7h .framer-1ef7nf5 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,`.framer-nLQ7h .framer-9mkd9r { aspect-ratio: 1 / 1; flex: none; height: 14%; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 0px; width: auto; z-index: 1; }`,`.framer-nLQ7h .framer-9488v0 { aspect-ratio: 1 / 1; flex: none; height: 14%; left: 0px; overflow: hidden; pointer-events: none; position: absolute; top: 0px; width: auto; z-index: 1; }`,`.framer-nLQ7h .framer-1wt56x1 { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: 14%; left: 0px; overflow: hidden; pointer-events: none; position: absolute; width: auto; z-index: 1; }`,`.framer-nLQ7h .framer-19ajvfy { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: 14%; overflow: hidden; pointer-events: none; position: absolute; right: 0px; width: auto; z-index: 1; }`,`.framer-nLQ7h .framer-1sko69j-container { bottom: 0px; flex: none; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 3; }`,`.framer-nLQ7h .framer-1ojp0oz { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 44px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; z-index: 3; }`,`.framer-nLQ7h .framer-1j2eiqn { flex: none; height: 19px; overflow: visible; position: relative; width: 19px; }`,`.framer-nLQ7h .framer-1qfzkeu { height: 19px; left: 0px; position: absolute; top: -3px; width: 19px; }`,`.framer-nLQ7h .framer-4uln4i { height: 2px; left: 2px; position: absolute; top: 7px; width: 2px; }`,`.framer-nLQ7h .framer-1cf4atb { height: 6px; left: 8px; position: absolute; top: 12px; width: 5px; }`,`.framer-nLQ7h .framer-1e04596 { height: 3px; left: 1px; position: absolute; top: 4px; width: 3px; }`,`.framer-nLQ7h .framer-1hiq8oo { height: 2px; left: 0px; position: absolute; top: 6px; width: 2px; }`,`.framer-nLQ7h .framer-6esn1d { height: 3px; left: 16px; position: absolute; top: 0px; width: 3px; }`,`.framer-nLQ7h .framer-12ki5av { height: 3px; left: 14px; position: absolute; top: 1px; width: 3px; }`,`.framer-nLQ7h .framer-11la4rd { height: 3px; left: 11px; position: absolute; top: 2px; width: 3px; }`,`.framer-nLQ7h .framer-1juc20i { height: 3px; left: 9px; position: absolute; top: 2px; width: 3px; }`,`.framer-nLQ7h .framer-j6hv8 { height: 3px; left: 6px; position: absolute; top: 3px; width: 3px; }`,`.framer-nLQ7h .framer-r6j63z { height: 3px; left: 3px; position: absolute; top: 4px; width: 3px; }`,`.framer-nLQ7h .framer-3jo4d { height: 2px; left: 17px; position: absolute; top: 7px; width: 2px; }`,`.framer-nLQ7h .framer-1t3z515 { height: 2px; left: 15px; position: absolute; top: 7px; width: 2px; }`,`.framer-nLQ7h .framer-2j0g2h { height: 2px; left: 12px; position: absolute; top: 7px; width: 2px; }`,`.framer-nLQ7h .framer-17ynski { height: 2px; left: 9px; position: absolute; top: 7px; width: 2px; }`,`.framer-nLQ7h .framer-1afhc6x { height: 2px; left: 7px; position: absolute; top: 7px; width: 2px; }`,`.framer-nLQ7h .framer-zsh3vw { height: 2px; left: 4px; position: absolute; top: 7px; width: 2px; }`,`.framer-nLQ7h .framer-14ou4x1 { height: 9px; left: 2px; position: absolute; top: 10px; width: 18px; }`,`.framer-nLQ7h .framer-12corxj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-nLQ7h.framer-v-j4x2rv.hover .framer-1ef7nf5 { bottom: -11px; }`,...H,`.framer-nLQ7h[data-border="true"]::after, .framer-nLQ7h [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`],`framer-nLQ7h`),$.displayName=`Button`,$.defaultProps={height:44,width:406},O($,{ecEz8Djri:{defaultValue:`BUTTON`,displayTextArea:!1,title:`Label`,type:L.String},onecEz8DjriChange:{changes:`ecEz8Djri`,type:L.ChangeHandler},WztuG6Qfi:{defaultValue:!0,title:`Visible`,type:L.Boolean},onWztuG6QfiChange:{changes:`WztuG6Qfi`,type:L.ChangeHandler},VeLROXOxc:{title:`Link`,type:L.Link}}),D($,[{explicitInter:!0,fonts:[{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,weight:`400`}]},...Y,...R(z)],{supportsExplicitInterCodegen:!0})}));export{J as i,oe as n,W as r,$ as t};
//# sourceMappingURL=BCVZtHbbZ.D-JHwYtD.mjs.map