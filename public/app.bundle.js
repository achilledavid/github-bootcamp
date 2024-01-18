/*! For license information please see app.bundle.js.LICENSE.txt */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`,Us='-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Helvetica, sans-serif',zs={DEFAULT_MODE:"mod+shift+d",PRESENTER_MODE:"mod+shift+p",OVERVIEW_MODE:"mod+shift+o",PRINT_MODE:"mod+shift+r",EXPORT_MODE:"mod+shift+e",TAB_FORWARD_OVERVIEW_MODE:"tab",TAB_BACKWARD_OVERVIEW_MODE:"shift+tab",SELECT_SLIDE_OVERVIEW_MODE:"enter",NEXT_SLIDE:"right",PREVIOUS_SLIDE:"left"},Hs="DEFAULT_MODE",Gs="PRESENTER_MODE",js="OVERVIEW_MODE",$s="PRINT_MODE",Ws="EXPORT_MODE",Vs=(0,e.createContext)(null);Vs.displayName="DeckContext";var Ks=()=>{},Ys=1,qs=.25,Xs=Fe.div((({fitAspectRatioStyle:e,overviewMode:t,printMode:n})=>[!n&&{overflow:"hidden"},!n&&e,t&&{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",alignItems:"flex-start",alignContent:"flex-start",transform:"scale(1)",overflowY:"scroll",width:"100%",height:"100%"},n&&{display:"block"}])),Zs=(0,e.forwardRef)(((t,n)=>{var r=t,{id:o,className:a="",backdropStyle:i,overviewMode:s=!1,printMode:l=!1,exportMode:c=!1,overviewScale:u=qs,printScale:d=Ys,template:p,theme:f={}}=r,g=f,{Backdrop:m,backdropStyle:h={position:"fixed",top:0,left:0,width:"100vw",height:"100vh"},suppressBackdropFallback:b}=g,E=Ss(g,["Backdrop","backdropStyle","suppressBackdropFallback"]),{onSlideClick:y=Ks,onMobileSlide:S=Ks,disableInteractivity:T=!1,notePortalNode:v,useAnimations:k=!0,children:A,onActiveStateChange:_=Ks,initialState:w={slideIndex:0,stepIndex:0},suppressBackdropFallback:C=!1,autoPlay:N=!1,autoPlayLoop:R=!1,autoPlayInterval:O=1e3,transition:I=Fs,backgroundImage:x}=r;const L=(0,e.useId)(),[M]=(0,e.useState)(o||L),{width:P=Os.size.width,height:D=Os.size.height}=E.size||{},{initialized:F,pendingView:B,activeView:U,navigationDirection:z,initializeTo:H,skipTo:G,stepForward:j,stepBackward:$,advanceSlide:W,regressSlide:V,commitTransition:K,cancelTransition:Y}=function(t){const[{initialized:n,navigationDirection:r,pendingView:o,activeView:a},i]=(0,e.useReducer)(ws,{initialized:false,navigationDirection:0,pendingView:Es(Es({},As),t),activeView:Es(Es({},_s),t)}),s=(0,e.useMemo)((()=>({initializeTo:e=>i({type:"INITIALIZE_TO",payload:e}),skipTo:e=>i({type:"SKIP_TO",payload:e}),stepForward:()=>i({type:"STEP_FORWARD"}),stepBackward:()=>i({type:"STEP_BACKWARD"}),advanceSlide:()=>i({type:"ADVANCE_SLIDE"}),regressSlide:e=>i({type:"REGRESS_SLIDE",payload:e}),commitTransition:e=>i({type:"COMMIT_TRANSITION",payload:e}),cancelTransition:()=>i({type:"CANCEL_TRANSITION"})})),[i]);return Es({initialized:n,navigationDirection:r,pendingView:o,activeView:a},s)}(w),[q,X,Z,Q]=function(){const[t,n]=(0,e.useState)(!1),[r,o]=(0,e.useState)(),[a,i]=(0,e.useState)([]),[s,l]=(0,e.useState)(new Set);return(0,e.useEffect)((()=>{if(!r)return;const e=r.getElementsByClassName(Ts),t=[],o=new Set;for(const n of e){const{slideId:e,slideHasTemplate:r}=n.dataset;void 0!==e&&(t.push(e),"true"===r&&o.add(e))}i(t),l(o),n(!0)}),[r]),[o,a,s,t]}();(0,e.useImperativeHandle)(n,(()=>({initialized:F,activeView:U,initializeTo:H,skipTo:G,stepForward:j,stepBackward:$,advanceSlide:W,regressSlide:V,numberOfSlides:X.length})),[F,U,H,G,j,$,W,V,X]),(0,ot.useRegisterActions)(T?[]:[{id:"NEXT_SLIDE",name:"Next Slide",keywords:"next",perform:()=>j(),section:"Slide"},{id:"PREVIOUS_SLIDE",name:"Previous Slide",keywords:"previous",perform:()=>$(),section:"Slide"},{id:"Restart Presentation",name:"Restart Presentation",keywords:"restart",perform:()=>G({slideIndex:0,stepIndex:0}),section:"Slide"}]),Cs(T?{}:{left:()=>$(),right:()=>j()},[]);const[J,ee]=Rs(Es({disableInteractivity:T,setState:G},Ms));(0,e.useEffect)((()=>{F&&(ee(U),_(U))}),[F,U,ee,_]),(0,e.useEffect)((()=>{const e=J({slideIndex:0,stepIndex:0});H(e)}),[H,J]),(({enabled:t=!1,loop:n=!1,stepForward:r,interval:o=1e3})=>{const a=(0,e.useRef)(r);a.current=r,(0,e.useEffect)((()=>{if(t){const e=setInterval((()=>{a.current()}),o);return()=>clearInterval(e)}}),[t,o,n])})({enabled:N,loop:R,interval:O,stepForward:j});const te=(0,e.useCallback)(((e,t)=>{const n=X.indexOf(t);y(e,n)}),[y,X]),ne=X[U.slideIndex],re=X[B.slideIndex],oe=F&&Q,[ae,ie]=(0,e.useState)(),[se,le]=function({targetWidth:t=1366,targetHeight:n=768}){const r=(0,e.useRef)(null),[o,a]=(0,e.useState)(1),[i,s]=(0,e.useState)({x:0,y:0}),l=(0,e.useCallback)((({width:e,height:r})=>{const o=Number(e)||.01,i=Number(r)||.01,l=o/i>t/n,c=l?i/n:o/t;let u=0;l&&(u=.5*(o-t*c),u/=1-c);let d=0;l||(d=.5*(i-n*c),d/=1-c),a(c),s({x:u,y:d})}),[t,n]);(0,e.useEffect)((()=>{if(!r||!r.current)return;const e=r.current.getClientRects();l(e[0])}),[t,n,l]),function(t){void 0===t&&(t={});var n=t.onResize,r=(0,e.useRef)(void 0);r.current=n;var o=t.round||Math.round,a=(0,e.useRef)(),i=(0,e.useState)({width:void 0,height:void 0}),s=i[0],l=i[1],c=(0,e.useRef)(!1);(0,e.useEffect)((function(){return c.current=!1,function(){c.current=!0}}),[]);var u=(0,e.useRef)({width:void 0,height:void 0}),d=function(t,n){var r=(0,e.useRef)(null),o=(0,e.useRef)(null);o.current=n;var a=(0,e.useRef)(null);(0,e.useEffect)((function(){i()}));var i=(0,e.useCallback)((function(){var e=a.current,n=o.current,i=e||(n?n instanceof Element?n:n.current:null);r.current&&r.current.element===i&&r.current.subscriber===t||(r.current&&r.current.cleanup&&r.current.cleanup(),r.current={element:i,subscriber:t,cleanup:i?t(i):void 0})}),[t]);return(0,e.useEffect)((function(){return function(){r.current&&r.current.cleanup&&(r.current.cleanup(),r.current=null)}}),[]),(0,e.useCallback)((function(e){a.current=e,i()}),[i])}((0,e.useCallback)((function(e){return a.current&&a.current.box===t.box&&a.current.round===o||(a.current={box:t.box,round:o,instance:new ResizeObserver((function(e){var n=e[0],a="border-box"===t.box?"borderBoxSize":"device-pixel-content-box"===t.box?"devicePixelContentBoxSize":"contentBoxSize",i=Ue(n,a,"inlineSize"),s=Ue(n,a,"blockSize"),d=i?o(i):void 0,p=s?o(s):void 0;if(u.current.width!==d||u.current.height!==p){var f={width:d,height:p};u.current.width=d,u.current.height=p,r.current?r.current(f):c.current||l(f)}}))}),a.current.instance.observe(e,{box:t.box}),function(){a.current&&a.current.instance.unobserve(e)}}),[t.box,o]),t.ref);(0,e.useMemo)((function(){return{ref:d,width:s.width,height:s.height}}),[d,s.width,s.height])}({ref:r,onResize:l});const c={position:"relative",width:t,height:n,scaleFactor:o,transform:`scale(${o})`,transformOrigin:`${i.x}px ${i.y}px`};return[r,c]}({targetWidth:P,targetHeight:D}),ce=(0,e.useMemo)((()=>{const e={printScale:d,overviewScale:u,nativeSlideWidth:P,nativeSlideHeight:D};return s?function({overviewScale:e,nativeSlideWidth:t,nativeSlideHeight:n}){return{margin:"1rem",width:e*t+"px",height:e/(t/n)*t+"px",display:"block",transform:"none",position:"relative"}}(e):l?function({nativeSlideWidth:e,nativeSlideHeight:t,printScale:n}){return{margin:"0",width:n*e+"px",height:n/(e/t)*e+"px",display:"block",transform:"none",position:"relative",breakAfter:"page"}}(e):{}}),[D,P,s,u,l,d]),ue=(0,e.useMemo)((()=>s?function({overviewScale:e}){return{width:100/e+"%",height:100/e+"%",transform:`scale(${e})`,transformOrigin:"0px 0px",position:"absolute"}}({overviewScale:u}):l?function({printScale:e}){return{width:100/e+"%",height:100/e+"%",transform:`scale(${e})`,transformOrigin:"0px 0px",position:"absolute"}}({printScale:d}):{}),[s,u,l,d]),de=Es(Es({},h),i),pe=m||"div";de.background||de.backgroundColor||m||C||b||(de.backgroundColor="black");const fe=Z.has(ne),ge="function"==typeof p?p({slideNumber:U.slideIndex+1,numberOfSlides:X.length}):p;return(0,Be.jsx)(Oe,{theme:Ls({theme:E,printMode:l&&!c}),children:(0,Be.jsx)(pe,{ref:se,className:a,style:ys(Es({},de),{overflow:"hidden"}),children:(0,Be.jsxs)(Vs.Provider,{value:{deckId:M,slideCount:X.length,slideIds:X,useAnimations:k,slidePortalNode:ae,onSlideClick:te,onMobileSlide:S,theme:E,autoPlayLoop:R,navigationDirection:z,frameOverrideStyle:ce,wrapperOverrideStyle:ue,backdropNode:se.current,notePortalNode:v,initialized:oe,activeView:ys(Es({},U),{slideId:ne}),pendingView:ys(Es({},B),{slideId:re}),skipTo:G,stepForward:j,stepBackward:$,advanceSlide:W,regressSlide:V,commitTransition:K,cancelTransition:Y,transition:I,template:p,backgroundImage:x,inOverviewMode:s,inPrintMode:l},children:[(0,Be.jsx)(Xs,{ref:ie,overviewMode:s,printMode:l,fitAspectRatioStyle:le,children:!fe&&!s&&!l&&(0,Be.jsx)(Bs,{style:ys(Es({},ue),{zIndex:1}),children:ge})}),(0,Be.jsx)("div",{ref:q,style:{display:"none"},children:A})]})})})}));Zs.displayName="Deck",Zs.displayName="Deck";var Qs=()=>{},Js={};"undefined"!=typeof window&&(Js=window);var el=Js.BroadcastChannel||xt;function tl(t,n=Qs,r=[]){const o=(0,e.useId)(),a=(0,e.useRef)();(0,e.useEffect)((()=>(a.current=new el(t),()=>{var e;null==(e=a.current)||e.close()})),[t]);const i=(0,e.useCallback)(((e,t={})=>{var n;const r={type:e,payload:t,meta:{sender:o}},i=JSON.stringify(r);null==(n=a.current)||n.postMessage(i)}),[o]),s=(0,e.useRef)(n);return(0,e.useEffect)((()=>{s.current=n}),[...r,i]),(0,e.useEffect)((()=>{var e;if(!a.current)return;const t=e=>{const t=e.data,n=JSON.parse(t);s.current(n)};return null==(e=a.current)||e.addEventListener("message",t),()=>{var e;null==(e=a.current)||e.removeEventListener("message",t)}}),[i]),[i,o]}var nl=t=>{const n=t,{overviewMode:r=!1,printMode:o=!1,exportMode:a=!1,toggleMode:i,children:s}=n,l=Ss(n,["overviewMode","printMode","exportMode","toggleMode","children"]),c=(0,e.useRef)(null),[u]=tl("spectacle_presenter_bus",(e=>{if("SYNC"!==e.type)return;const t=e.payload;c.current.initialized?c.current.skipTo(t):c.current.initializeTo(t)}));(0,e.useEffect)((()=>{u("SYNC_REQUEST")}),[u]),Cs(r?{[zs.TAB_FORWARD_OVERVIEW_MODE]:()=>c.current.advanceSlide(),[zs.TAB_BACKWARD_OVERVIEW_MODE]:()=>c.current.regressSlide({stepIndex:0}),[zs.SELECT_SLIDE_OVERVIEW_MODE]:()=>i({newMode:Hs})}:{},[]);const d=(0,e.useCallback)(((e,t)=>{r&&i({e,newMode:Hs,senderSlideIndex:+t})}),[r,i]);return(0,Be.jsx)(Zs,ys(Es({overviewMode:r,onSlideClick:d,onMobileSlide:e=>{if(!(navigator.maxTouchPoints<1)&&c.current)switch(e.dir){case"Left":c.current.stepForward();break;case"Right":c.current.regressSlide()}},printMode:o,exportMode:a,ref:c},l),{children:s}))},rl=Fe.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  background-color: #181818;
  overflow: hidden;
  color: white;
`,ol=Fe.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 50%;
  border-right: 1px solid black;
`,al=Fe.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  > :first-child {
    margin-bottom: 0.5em;
  }
`,il=(Fe.div`
  display: flex;
  flex-direction: column;
  height: calc(50% - 1em);
  width: 100%;
  overflow: hidden;
`,Fe.div`
  flex: 1;
  width: 100%;
  position: relative;
  .spectacle-fullscreen-button {
    display: none;
  }
  ${({small:e})=>e&&"flex: 0.8;"}
`,Fe.span`
  background: hsla(0, 0%, 100%, 0.1);
  border-radius: 4px;
  font-size: 0.7em;
  padding: 1px 4px;
`,Fe.div`
  border-top: 1px solid black;
  overflow-y: scroll;
  flex: 1;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: #111;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 10px;
  }
`),sl={currentSlide:{width:"50vw",height:"50vh",left:"50vw",top:"7vh"},nextSlide:{width:"50vw",height:"33vh",top:"60vh",left:"50vw"}},ll="\n  @media print {\n    height: inherit;\n  }\n",cl=Fe.div(qt(Xt,Tn,mn,Jt,cn),ll),ul=Fe.div(qt(Xt,Tn,mn,Jt,cn,rn),ll);ul.defaultProps={alignItems:"center",justifyContent:"center",display:"flex"},Fe.div(qt(Xt,sn,mn),ll).defaultProps={display:"grid"};var dl=Yt({textDecoration:!0}),pl=Fe.div(qt(Jt,tn,Tn));pl.defaultProps={color:"primary",fontFamily:"text",fontSize:"text",textAlign:"left",padding:0,margin:0},Fe.code(qt(Jt,tn,Tn)).defaultProps={fontFamily:"monospace",fontSize:"text"};var fl=Fe.a(qt(Jt,tn,Tn,dl));fl.defaultProps={fontFamily:"text",fontSize:"text",textDecoration:"underline",color:"quaternary"};var gl=Fe(pl)({});gl.defaultProps={color:"secondary",fontFamily:"header",fontSize:"h1",fontWeight:"bold",textAlign:"center",margin:1};var ml=Fe(pl)`
  border-left: 1px solid
    ${({theme:e,borderColor:t})=>t||e.colors.secondary};

  div {
    margin: 0;
  }
`;ml.defaultProps={color:"primary",fontFamily:"text",fontSize:"text",textAlign:"left",fontStyle:"italic",padding:"16px 0 16px 8px",margin:0};var hl=Yt({listStyleType:!0}),bl=Fe.ol(qt(Jt,tn,Tn,hl));bl.defaultProps={color:"primary",fontFamily:"text",fontSize:"text",textAlign:"left",margin:0};var El=Fe.ul(qt(Jt,tn,Tn,hl));El.defaultProps={color:"primary",fontFamily:"text",fontSize:"text",textAlign:"left",margin:0};var yl=Fe.li(qt(Jt,tn,Tn));yl.defaultProps={margin:0};var Sl=Fe("button")`
  background: #333;
  border: 1px solid hsla(0, 0%, 0%, 0.4);
  border-radius: 2px;
  color: #fff;
  box-shadow: inset 1px 1px 0 hsla(0, 0%, 100%, 0.1),
    1px 1px 0 hsla(0, 0%, 0%, 0.1);
  padding: 3px 20px;
  font-size: 14px;
  font-weight: bold;
  font-family: ${Us};

  &:active {
    box-shadow: inset 1px 1px 0 hsla(0, 0%, 0%, 0.25),
      1px 1px 0 hsla(0, 0%, 0%, 0.1);
  }
`,Tl=()=>{const[t,n]=(0,e.useState)(0),[r,o]=(0,e.useState)(!1),a=(0,e.useCallback)((e=>n((t=>t+e))),[]),i=(0,e.useCallback)((()=>o((e=>!e))),[]),s=(0,e.useCallback)((()=>n(0)),[]);((t,n,r)=>{const[o,a]=(0,e.useState)(1),i=(0,e.useRef)(),s=(0,e.useRef)();(0,e.useEffect)((()=>{s.current=t}),[t]),(0,e.useEffect)((()=>{if(r){i.current=(new Date).getTime();const e=setInterval((()=>{const e=(new Date).getTime(),t=e-i.current;i.current=e,a(t/1e3),s.current(o)}),1e3);return()=>{clearInterval(e)}}}),[1e3,r,o])})(a,0,r);const l=Math.floor(Math.round(t)/60);return(0,ot.useRegisterActions)([{id:"Start/Pause Timer",name:"Start/Pause Timer",keywords:"start pause",perform:i,section:"Timer"},{id:"Restart Timer",name:"Restart Timer",keywords:"restart",perform:s,section:"Timer"}]),(0,Be.jsxs)(ul,{children:[(0,Be.jsx)(ul,{justifyContent:"flex-start",flex:1,children:(0,Be.jsx)(pl,{fontFamily:Us,fontWeight:"bold",fontSize:"2vw",textAlign:"left",children:`${String(l).padStart(2,"0")}:${String(Math.round(t)-60*l).padStart(2,"0")}`})}),(0,Be.jsx)(Sl,{onClick:i,children:r?"Stop Timer":"Start Timer"}),(0,Be.jsx)(cl,{width:8}),(0,Be.jsx)(Sl,{onClick:s,children:"Reset"})]})},vl=({slideIndex:e})=>({slideIndex:e+1,stepIndex:ks}),kl=Fe.div((({visible:e})=>({visibility:e?"visible":"hidden"}))),Al=t=>{const{children:n,theme:r,backgroundImage:o,template:a}=t,i=(0,e.useRef)(null),s=(0,e.useRef)(null),[l,c]=(0,e.useState)(),[u,d]=(0,e.useState)(!0),[p]=tl("spectacle_presenter_bus",(e=>{"SYNC_REQUEST"===e.type&&p("SYNC",i.current.activeView)})),[f,g]=Rs(Es({setState:e=>i.current.skipTo(e)},Ms)),m=(0,e.useCallback)((e=>{var t,n;g(e),p("SYNC",e),d(((null==(t=i.current)?void 0:t.numberOfSlides)||0)-1!==(null==(n=null==i?void 0:i.current)?void 0:n.activeView.slideIndex)),s.current.skipTo(vl(e))}),[p,g]);return(0,e.useEffect)((()=>{const e=f({slideIndex:0,stepIndex:0});i.current.initializeTo(e),p("SYNC",e),s.current.initializeTo(vl(e))}),[p,f]),(0,Be.jsxs)(rl,{children:[(0,Be.jsxs)(ol,{children:[(0,Be.jsxs)(ul,{justifyContent:"space-between",paddingTop:15,paddingX:15,children:[(0,Be.jsx)(Qc,{size:60}),(0,Be.jsx)(ul,{width:.75,flexDirection:"column",alignItems:"flex-end",children:(0,Be.jsxs)(pl,{"data-testid":"use-browser-tab-text",fontSize:15,fontFamily:Us,textAlign:"right",padding:"0px",margin:"0px 0px 10px",children:["Open a second browser tab at ",window.location.host," to use as the audience deck."]})})]}),(0,Be.jsx)(cl,{paddingX:15,paddingY:10,children:(0,Be.jsx)(Tl,{})}),(0,Be.jsx)(il,{children:(0,Be.jsx)(pl,{ref:c,fontFamily:Us,lineHeight:"1.5em",fontSize:"1.5vw",padding:15})})]}),(0,Be.jsxs)(al,{children:[(0,Be.jsx)(Zs,{notePortalNode:l,backdropStyle:sl.currentSlide,onActiveStateChange:m,ref:i,theme:r,backgroundImage:o,template:a,children:n}),(0,Be.jsx)(kl,{visible:u,children:(0,Be.jsx)(Zs,{disableInteractivity:!0,useAnimations:!1,backdropStyle:sl.nextSlide,ref:s,theme:r,backgroundImage:o,template:a,children:n})})]})]})},_l="step-placeholder";function wl(t=1,{id:n,priority:r,stepIndex:o}={}){const a=(0,e.useId)(),[i]=(0,e.useState)(n||a),s=(0,e.useContext)(Nl);if(null===s)throw new Error("`useSteps` must be called within a SlideContext.Provider. Did you call `useSteps` in a component that was not placed inside a <Slide>?");const{activeStepIndex:l,activationThresholds:c}=s;let u;null===c?u=0:(u=l-c[i],u=vs(u,-1,t-1));const d=u>=0,p=(0,e.useRef)(null);(0,e.useEffect)((()=>{p.current||console.warn(`A placeholder ref does not appear to be present in the DOM for stepper element with id '${i}'. (Did you forget to render it?)`)}));const f={ref:p,className:_l,style:{display:"none"},"data-step-id":i,"data-step-count":t};return void 0!==r?f["data-priority"]=r:void 0!==o&&(console.warn("`options.stepIndex` option to `useSteps` is deprecated- please use `priority` option instead."),f["data-priority"]=o),{stepId:i,isActive:d,step:u,placeholder:(0,Be.jsx)("div",Es({},f))}}var Cl=()=>{},Nl=(0,e.createContext)(null);Nl.displayName="SlideContext";var Rl=Fe.div`
  ${Jt};
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  z-index: 0;

  &:before {
    ${pn};
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    opacity: ${({backgroundOpacity:e})=>e};
  }
`,Ol=Fe.div(Jt,Tn,Ee`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `),Il=Fe(fi.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background: transparent;

  ${({tabIndex:e})=>0===e&&Ee`
      outline: 2px solid white;
    `}
`,xl=t=>{const{id:n,children:r,backgroundColor:o="tertiary",backgroundImage:a,backgroundOpacity:i=1,backgroundPosition:s="center",backgroundRepeat:l="no-repeat",backgroundSize:c="cover",padding:u=2,textColor:d="primary",template:p,transition:f={},className:g=""}=t;if((0,e.useContext)(Nl))throw new Error("Slide components may not be nested within each other.");const m=void 0!==p,{slideId:h,placeholder:b}=function(t,n){const r=(0,e.useId)(),[o]=(0,e.useState)(n||r);return{slideId:o,placeholder:(0,Be.jsx)("div",{className:Ts,"data-slide-id":o,"data-slide-has-template":t})}}(m,n),{setStepContainer:E,activationThresholds:y,finalStepIndex:S}=function(){const[t,n]=(0,e.useState)(),[r,o]=(0,e.useState)({}),[a,i]=(0,e.useState)(0);return(0,e.useEffect)((()=>{if(!t)return;const e=t.getElementsByClassName(_l),[n,r]=[...e].map(((e,t)=>{const n=e.dataset,r=n.stepId;let o=Number(n.stepCount);isNaN(o)&&(o=1);let a=Number(n.priority);return isNaN(a)&&(a=t),{id:r,count:o,priority:a}})).concat().sort((a="priority",(e,t)=>e[a]<t[a]?-1:e[a]>t[a]?1:0)).reduce(((e,t)=>{const[n,r]=e,{id:o,count:a}=t;return n[o]=r,[n,r+a]}),[{},1]);var a;o(n),i(r-1)}),[t]),{setStepContainer:n,activationThresholds:r,finalStepIndex:a}}(),{onSlideClick:T=Cl,onMobileSlide:v,useAnimations:k,autoPlayLoop:A,navigationDirection:_,slidePortalNode:w,frameOverrideStyle:C={},wrapperOverrideStyle:N={},slideIds:R,activeView:O,pendingView:I,advanceSlide:x,regressSlide:L,skipTo:M,commitTransition:P,cancelTransition:D,transition:F,template:B,slideCount:U,backgroundImage:z,inOverviewMode:H,inPrintMode:G}=(0,e.useContext)(Vs),j=(0,e.useCallback)((e=>{T(e,h)}),[T,h]),$=(0,e.useMemo)((()=>{const e=Es({},F);return"from"in f&&(e.from=f.from),"enter"in f&&(e.enter=f.enter),"leave"in f&&(e.leave=f.leave),e}),[f,F]),W=O.slideId===h,V=I.slideId===h,K=R.findIndex((e=>e===h)),[Y,q]=(()=>{if(1===U)return[!1,!1];if(2===U)return K===O.slideIndex?[!1,!1]:0===K?[!0,!1]:[!1,!0];const e=K===U-1&&0===O.slideIndex,t=0===K&&O.slideIndex===U-1,n=e||t;return[!n&&K<O.slideIndex||e,!n&&K>O.slideIndex||t]})(),X=!W&&V,Z=W&&!V,Q=O.slideIndex!==I.slideIndex,J=O.stepIndex!==I.stepIndex,[ee,te]=(0,e.useState)(!1),ne=K<O.slideIndex?1/0:-1/0,re=W?O.stepIndex:ne,[oe,ae]=(0,e.useState)(!1),ie=(0,e.useCallback)((()=>{ae(!oe)}),[oe]);(0,e.useEffect)((()=>{W&&J&&!Q&&(I.stepIndex<0?(te(!1),A&&0===O.slideIndex?M({slideIndex:U-1,stepIndex:ks}):L()):I.stepIndex>S?(te(!0),A&&O.slideIndex===U-1?M({slideIndex:0,stepIndex:0}):x()):I.stepIndex===ks?(te(!1),P({stepIndex:S})):(te(_>0),P()))}),[O,x,A,P,S,_,W,I,L,M,U,Q,J]),(0,e.useEffect)((()=>{Z&&(void 0!==I.slideId||A?te(_>0):(te(!1),D()))}),[O.slideIndex,A,D,I,_,Z]),(0,e.useEffect)((()=>{X&&void 0!==S&&(I.stepIndex<0?(te(!1),P({stepIndex:0})):I.stepIndex===ks||I.stepIndex>S?(te(!1),P({stepIndex:S})):(te(_>0),P()))}),[O,P,S,_,I,X]);const se=!ee||!k,le=qa({to:(0,e.useMemo)((()=>Y?[$.leave,{display:"none"}]:W?ys(Es({},$.enter),{display:"unset"}):q?ys(Es({},$.from),{display:"none"}):{display:"none"}),[Y,W,q,$.leave,$.enter,$.from]),immediate:se}),ce=(0,e.useContext)(Re),ue=(0,e.useMemo)((()=>{var e;if(!N||0===Object.entries(N).length)return{};const t=(null==(e=null==ce?void 0:ce.space)?void 0:e[u])||0;return ys(Es({},N),{width:`calc(${N.width} - ${2*t}px)`,height:`calc(${N.height} - ${2*t}px)`})}),[N,ce,u]),de=m?p:B,pe="function"==typeof de?de({slideNumber:O.slideIndex+1,numberOfSlides:U}):de,fe=wi({onSwiped:e=>v(e)});return(0,Be.jsxs)(Be.Fragment,{children:[b,(0,Be.jsx)(Nl.Provider,{value:{immediate:se,slideId:h,isSlideActive:W,activationThresholds:y,activeStepIndex:re},children:w&&Ln.createPortal((0,Be.jsx)(Il,{ref:E,onClick:j,tabIndex:H&&W?0:void 0,style:Es(Es(Es(Es({},H||G?{}:le),W&&{display:"unset"}),C),H&&oe&&{outline:"2px solid white"}),onMouseEnter:ie,onMouseLeave:ie,children:(0,Be.jsxs)(Rl,ys(Es({className:g,backgroundColor:o,backgroundImage:a||z,backgroundOpacity:i,backgroundPosition:s,backgroundRepeat:l,backgroundSize:c,color:d},fe),{children:[(m&&W||H||G)&&(0,Be.jsx)(Bs,{style:N,children:pe}),(0,Be.jsx)(Ol,{style:ue,padding:u,children:r})]}))}),w)})]})},Ll=Fe.div`
  background-color: white;
`,Ml=(function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var a=Ee.apply(void 0,[t].concat(r)),i="sc-global-"+ke(JSON.stringify(a)),s=new Pe(a,i);function l(t){var n=ie(),r=se(),o=(0,e.useContext)(Re),a=(0,e.useRef)(n.allocateGSInstance(i)).current;return n.server&&c(a,t,n,o,r),(0,e.useLayoutEffect)((function(){if(!n.server)return c(a,t,n,o,r),function(){return s.removeStyles(a,n)}}),[a,t,n,o,r]),null}function c(e,t,n,r,o){if(s.isStatic)s.renderStyles(e,A,n,o);else{var a=f({},t,{theme:ye(t,r,l.defaultProps)});s.renderStyles(e,a,n,o)}}return e.memo(l)})`
  @media print {
    body, html {
      margin: 0;
    }
    @page {
      size: ${({pageSize:e})=>e};
    }
    ${Il} {
      @page {
        margin: 0;
      }
    }
  }
`;function Pl({children:e,theme:t,exportMode:n,pageSize:r,backgroundImage:o,template:a}){var i,s;const l=(null==(i=null==t?void 0:t.size)?void 0:i.width)||Os.size.width,c=(null==(s=null==t?void 0:t.size)?void 0:s.height)||Os.size.height,u=r||`${l}px ${c}px`;return(0,Be.jsxs)(Be.Fragment,{children:[(0,Be.jsx)(Ml,{pageSize:u}),(0,Be.jsx)(Zs,{printMode:!0,exportMode:n,disableInteractivity:!0,theme:ys(Es({},t),{Backdrop:Ll,backdropStyle:{}}),backgroundImage:o,template:a,children:e})]})}var Dl=()=>{var t,n;const r=(null==(n=null==(t="undefined"!=typeof window?window:{})?void 0:t.location)?void 0:n.search)||"",o=(0,e.useRef)(function({presenterMode:e,overviewMode:t,printMode:n,exportMode:r}){return e?Gs:t?js:n?$s:r?Ws:Hs}((0,nt.parse)(r,{parseBooleans:!0})));return{toggleMode:(0,e.useCallback)((e=>{const{newMode:t,senderSlideIndex:n,e:r}=e;null==r||r.preventDefault();let a=0,i=n||"";const s=(0,nt.parse)(window.location.search,{parseBooleans:!0});var l;i||(i=s.slideIndex,a=s.stepIndex),o.current!==t?(o.current=t,window.location.search=(0,nt.stringify)(Es({slideIndex:i,stepIndex:a},(l=t)===Gs?{presenterMode:!0}:l===js?{overviewMode:!0}:l===$s?{printMode:!0}:l===Ws?{exportMode:!0}:{}))):window.location.search=(0,nt.stringify)({slideIndex:i,stepIndex:a})}),[o]),getCurrentMode:(0,e.useCallback)((()=>o.current),[])}},Fl={[Hs]:"Default Mode",[Gs]:"Presenter Mode",[js]:"Overview Mode",[$s]:"Print Mode",[Ws]:"Export Mode"},Bl=(e,t)=>e===t?`← Back to ${Fl[Hs]}`:Fl[t];function Ul(e){const t=/Mac|iPad/.test(navigator.userAgent);return{alt:t?"⌥":"Alt",ctrl:t?"^":"Ctrl",mod:t?"⌘":"Ctrl",shift:t?"⇧":"Shift"}[e]}function zl(e){return("string"==typeof e?e:e.join("+")).toLowerCase().replace("alt",Ul("alt")).replace("ctrl",Ul("ctrl")).replace("mod",Ul("mod")).replace("shift",Ul("shift")).replace("left","←").replace("right","→").split("+").map((e=>e.charAt(0).toUpperCase()+e.slice(1)))}function Hl({id:e,shortcut:t=[]}){return e in zs&&!(null==t?void 0:t.length)?zl(zs[e]):zl(t)}var Gl=Fe.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>e.active?"lightsteelblue":"transparent"};
  padding: 0.5rem 1rem;
  cursor: pointer;
  height: 30px;
`,jl=Fe(pl)`
  background-color: white;
  color: gray;
  margin: 0 2rem;
  padding: 0.5rem 0;
  font-size: small;
  font-weight: bold;
  font-family: ${Us};
`,$l=Fe.span`
  display: flex;
  gap: 5px;
`,Wl=Fe.kbd`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-radius: 5px;
  border: 1px solid #b4b4b4;
  padding: 5px 10px;
  min-width: 20px;
  height: 25px;
  white-space: nowrap;
  font-family: ${Us};
`;function Vl({item:e,active:t}){return"string"==typeof e?(0,Be.jsx)(jl,{children:e}):(0,Be.jsxs)(Gl,{active:t,children:[(0,Be.jsx)(pl,{fontFamily:Us,children:e.name}),(0,Be.jsx)($l,{children:Hl(e).map((t=>t&&(0,Be.jsx)(Wl,{children:t},`${e.id}-${t}`)))})]})}var Kl=()=>{const{results:e}=(0,ot.useMatches)();return(0,Be.jsx)(ot.KBarResults,{items:e,onRender:Vl})},Yl=Fe(ot.KBarSearch)`
  padding: 12px 16px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
`,ql=Fe(ot.KBarAnimator)`
  max-width: 600px;
  width: 100%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 50%) 0px 16px 70px;
`,Xl=()=>(0,Be.jsx)(ot.KBarPortal,{children:(0,Be.jsx)(ot.KBarPositioner,{children:(0,Be.jsxs)(ql,{children:[(0,Be.jsx)(Yl,{}),(0,Be.jsx)(Kl,{})]})})}),Zl=({children:e})=>{const t=(()=>{const{toggleMode:e,getCurrentMode:t}=Dl(),n=t();return[{id:"PRESENTER_MODE",name:Bl(n,Gs),keywords:"presenter",perform:()=>e({newMode:Gs}),section:"Mode"},{id:"OVERVIEW_MODE",name:Bl(n,js),keywords:"overview",perform:()=>e({newMode:js}),section:"Mode"},{id:"PRINT_MODE",name:Bl(n,$s),keywords:"export",perform:()=>e({newMode:$s}),section:"Mode"},{id:"EXPORT_MODE",name:Bl(n,Ws),keywords:"export",perform:()=>e({newMode:Ws}),section:"Mode"}]})();return(0,Be.jsxs)(ot.KBarProvider,{actions:t,children:[(0,Be.jsx)(Xl,{}),e]})},Ql=t=>{var n=t,{getCurrentMode:r,toggleMode:o}=n,a=Ss(n,["getCurrentMode","toggleMode"]);switch(r()){case Hs:return(0,Be.jsx)(nl,ys(Es({},a),{toggleMode:o}));case Gs:return(0,Be.jsx)(Al,Es({},a));case $s:return(0,Be.jsx)(Pl,Es({},a));case Ws:return(0,Be.jsx)(Pl,ys(Es({},a),{exportMode:!0}));case js:return(0,Be.jsx)(nl,Es({overviewMode:!0,toggleMode:o},a));default:return(0,Be.jsx)(e.Fragment,{})}},Jl=e=>{const{toggleMode:t,getCurrentMode:n}=Dl();return Cs({[zs.PRESENTER_MODE]:e=>e&&t({e,newMode:Gs}),[zs.PRINT_MODE]:e=>e&&t({e,newMode:$s}),[zs.EXPORT_MODE]:e=>e&&t({e,newMode:Ws}),[zs.OVERVIEW_MODE]:e=>e&&t({e,newMode:js})},[]),(0,Be.jsx)(Zl,{children:(0,Be.jsx)(Ql,Es({getCurrentMode:n,toggleMode:t},e))})},ec=t=>{const{id:n,className:r,children:o,tagName:a="div",priority:i,stepIndex:s,numSteps:l=1,alwaysAppearActive:c=!1,activeStyle:u={opacity:"1"},inactiveStyle:d={opacity:"0"}}=t,p=(0,e.useContext)(Nl),{inPrintMode:f,inOverviewMode:g}=(0,e.useContext)(Vs);if(null===p)throw new Error("This component must be used within a SlideContext.Provider. Did you put an <Appear> or <Stepper> component outside of a <Slide>?");const{immediate:m}=p,{isActive:h,step:b,placeholder:E}=wl(l,{id:n,priority:i,stepIndex:s}),y=fi[a];let S;S="function"==typeof o?o(b,h):o;const T=qa({to:h?u:d,immediate:m});return(0,Be.jsxs)(Be.Fragment,{children:[E,(0,Be.jsx)(y,{style:c||f||g?u:T,className:r,"data-testid":"AppearElement",children:S})]})},tc=e=>{const t=e,{children:n}=t,r=Ss(t,["children"]);return(0,Be.jsx)(ec,ys(Es({},r),{numSteps:1,children:n}))},nc=e=>{let t=null;return(e||"").split("\n").filter((e=>{const[n,r]=(e.match(/^([ ]*)([^ ]+)/)||[]).slice(1);return r?(t=null===t||n.length<t.length?n:t,!0):null!==t})).map((e=>t?e.replace(t,""):e)).join("\n").trimRight()},rc=Ji.default||Ji,oc=Es({vsDark:rc},ts),ac=(e,t,n)=>1===e?t:null===t[n]||void 0===t[n]?[]:"number"==typeof t[n]?[t[n]]:t[n],ic=(e,t)=>{if(1===t.length){const[n]=t;return n===e?{opacity:1}:{opacity:.5}}const[n,r]=t;return{opacity:n<=e&&e<=r?1:.5}},sc=Fe("div")(qt(mn,Xt)),lc=(0,e.forwardRef)(((t,n)=>{var r=t,{highlightRanges:o=[],language:a,showLineNumbers:i=!0,children:s,stepIndex:l,theme:c=oc.vsDark}=r,u=Ss(r,["highlightRanges","language","showLineNumbers","children","stepIndex","theme"]);const d=(0,e.useMemo)((()=>{if(0===o.length||o.every((e=>null==e)))return 0;return o.length<=2&&o.every((e=>"number"==typeof e))?1:o.length}),[o]),p=(0,e.useContext)(Re),{isActive:f,step:g,placeholder:m}=wl(d,{stepIndex:l}),h=(0,e.useMemo)((()=>nc(s)),[s]),b=(0,e.useRef)(null),E=(0,e.useCallback)((e=>{if(!f)return{};const t=ac(d,o,g);return ic(e,t)}),[f,o,d,g]),y=(0,e.useCallback)((e=>{if(!f)return{};const t=ac(d,o,g);return{ref:e===t[0]?b:null,style:ic(e,t)}}),[f,o,d,g]);(0,e.useEffect)((()=>{window.requestAnimationFrame((()=>{b.current&&b.current.scrollIntoView({block:"center",behavior:"smooth"})}))}),[f,g]);const S=(0,e.useMemo)((()=>{const{space:e=[0,0,0],fontSizes:{monospace:t="20px"}}=p;return{padding:e[0],margin:0,fontSize:t}}),[p]);return(0,Be.jsxs)(Be.Fragment,{children:[m,(0,Be.jsx)(sc,ys(Es({ref:n},u),{children:(0,Be.jsx)(Qi,{customStyle:S,language:a,wrapLines:!0,showLineNumbers:i,lineProps:y,lineNumberStyle:E,style:c,children:h})}))]})}));lc.displayName="CodePane";var cc=lc,uc=Fe.table(qt(Jt,tn,Tn,cn,Xt));uc.defaultProps={color:"primary",fontFamily:"text",fontSize:"text",textAlign:"left",margin:"listMargin",width:1},Fe.thead(qt(Jt,tn,Tn,cn,Xt)).defaultProps={color:"primary",fontFamily:"text",fontSize:"text",fontWeight:"bold",textAlign:"left",margin:"listMargin"},Fe.tbody(qt(Jt,tn,Tn,cn,Xt)).defaultProps={color:"primary",fontFamily:"text",fontSize:"text",textAlign:"left",margin:"listMargin",width:1};var dc=Fe.tr(qt(Jt,tn,Tn,cn,Xt));dc.defaultProps={color:"primary",fontFamily:"text",fontSize:"text",textAlign:"left",margin:"listMargin"};var pc=Fe.td(qt(Jt,tn,Tn,cn,Xt));pc.defaultProps={color:"primary",fontFamily:"text",fontSize:"text",textAlign:"left",margin:"listMargin"};var fc=Fe.img(qt(Xt,mn));Fe(fc).defaultProps={maxWidth:"100%",maxHeight:"100%"};var gc=({children:t})=>{const{notePortalNode:n}=(0,e.useContext)(Vs),{isSlideActive:r}=(0,e.useContext)(Nl);return r&&n?Ln.createPortal((0,Be.jsx)("div",{children:t}),n):null},mc=10,hc=mc/3,bc=mc+2*(1+hc),Ec=Fe.div`
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  border: ${1}px solid ${({color:e})=>e};
  background: ${({color:e,active:t})=>t?e:"transparent"};
  margin: ${({margin:e})=>e}px;
  border-radius: 50%;
  pointer-events: all;
  cursor: pointer;
`,yc=Fe.div`
  ${mn}
  display: flex;
  flex-wrap: wrap;
  @media print {
    display: none;
  }
`;(0,e.forwardRef)(((t,n)=>{var r=t,{color:o="#fff",size:a=mc}=r,i=Ss(r,["color","size"]);const{slideCount:s,skipTo:l,activeView:c}=(0,e.useContext)(Vs);return(0,Be.jsx)(yc,ys(Es({ref:n,className:"spectacle-progress-indicator"},i),{children:Array(s).fill(0).map(((e,t)=>(0,Be.jsx)(Ec,{color:o,active:c.slideIndex===t,size:a,margin:hc,onClick:()=>l({slideIndex:t,stepIndex:0}),"data-testid":"Progress Circle"},`progress-circle-${t}`)))}))})).displayName="Progress";var Sc=Fe.div`
  position: absolute;
  top: ${({top:e})=>e}px;
  left: ${({left:e})=>e}px;
  height: ${({pacmanSize:e})=>e}px;
  width: ${({pacmanSize:e})=>e}px;
  transition: left 0.3s ease-in-out 0.2s;
  transform: translate(-50%, -50%);
`,Tc=De`
  0% { transform: rotateZ(0deg) }
  100% { transform: rotateZ(-30deg) }
`,vc=De`
  0% { transform: rotateZ(0deg) }
  100% { transform: rotateZ(30deg) }
`,kc=De`
  0% { transform: rotateZ(0.1deg) }
  100% { transform: rotateZ(-30deg) }
`,Ac=De`
  0% { transform: rotateZ(0.1deg) }
  100% { transform: rotateZ(30deg) }
`,_c=Fe.div`
  position: absolute;
  top: 0;
  height: ${({pacmanSize:e})=>e/2}px;
  width: ${({pacmanSize:e})=>e}px;
  background: ${({color:e})=>e};
  border-top-left-radius: ${({pacmanSize:e})=>e/2}px;
  border-top-right-radius: ${({pacmanSize:e})=>e/2}px;
  // NOTE: So the top and bottom always overlap when sizes are in decimals.
  box-shadow: 0 0 0 0.5px ${({color:e})=>e};
  animation-name: ${({alternate:e})=>e?Tc:kc};
  animation-duration: 0.12s;
  animation-timing-function: linear;
  animation-iteration-count: 10;
  animation-direction: alternate;
  animation-fill-mode: both;
`,wc=Fe(_c)`
  top: 50%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: ${({pacmanSize:e})=>e/2}px;
  border-bottom-right-radius: ${({pacmanSize:e})=>e/2}px;
  animation-name: ${({alternate:e})=>e?vc:Ac};
`,Cc=7.5,Nc=(0,e.forwardRef)(((t,n)=>{var r=t,{color:o="#fff",size:a=Cc}=r,i=Ss(r,["color","size"]);const{slideCount:s,skipTo:l,activeView:{slideIndex:c}}=(0,e.useContext)(Vs),[u,d]=(0,e.useState)(null),[p,f]=(0,e.useState)(null),[g,m]=(0,e.useState)(!1),[h,b]=(0,e.useState)(null),E=(0,e.useCallback)((e=>{b(e)}),[]);(0,e.useEffect)((()=>{if(null==h?void 0:h.offsetParent){const{offsetLeft:e,offsetTop:t}=h,n=a/2+1;d(e+n),f(t+n),m((e=>!e))}else d(null),f(null)}),[a,h]);const y=(bc-Cc-2)/2,S=i.pacmanColor||o,T=a+1+2*y;return(0,Be.jsxs)(yc,ys(Es({ref:n,position:"relative"},i),{children:["number"==typeof p&&"number"==typeof u&&(0,Be.jsxs)(Sc,{pacmanSize:T,top:p,left:u,children:[(0,Be.jsx)(_c,{color:S,pacmanSize:T,alternate:g}),(0,Be.jsx)(wc,{color:S,pacmanSize:T,alternate:g})]}),Array(s).fill(0).map(((e,t)=>(0,Be.jsx)(Ec,{ref:c===t?E:null,color:o,active:!1,size:a,margin:y,onClick:()=>l({slideIndex:t,stepIndex:0}),"data-testid":"animated-progress-circle"},t)))]}))}));Nc.displayName="AnimatedProgress";var Rc=Nc,Oc=Fe("div")`
  ${mn}
  @media print {
    display: none;
  }
`,Ic=(0,e.forwardRef)(((t,n)=>{var r=t,{size:o,color:a}=r,i=Ss(r,["size","color"]);const s=(0,e.useCallback)((()=>{"undefined"!=typeof document&&("requestFullscreen"in document.documentElement?document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen():"webkitRequestFullScreen"in document.documentElement&&(document.webkitIsFullScreen?document.webkitCancelFullScreen():document.documentElement.webkitRequestFullScreen()))}),[]),[l,c]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{c(!0)}),[]),l?(0,Be.jsx)(Oc,ys(Es({ref:n,className:"spectacle-fullscreen-button",onClick:s,style:{pointerEvents:"all"}},i),{children:(0,Be.jsx)("svg",{width:o,height:o,viewBox:"0 0 512 512",children:(0,Be.jsx)("path",{fill:a,d:document.fullscreenElement||document.webkitIsFullScreen?"M64 371.2h76.795V448H192V320H64v51.2zm76.795-230.4H64V192h128V64h-51.205v76.8zM320 448h51.2v-76.8H448V320H320v128zm51.2-307.2V64H320v128h128v-51.2h-76.8z":"M396.795 396.8H320V448h128V320h-51.205zM396.8 115.205V192H448V64H320v51.205zM115.205 115.2H192V64H64v128h51.205zM115.2 396.795V320H64v128h128v-51.205z"})})})):null}));Ic.displayName="Fullscreen",Ic.defaultProps={color:"#fff",size:24};var xc=Ic,Lc=(Fe.img`
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  object-fit: ${e=>e.objectFit||"contain"};
`,Fe(ul)`
  overflow: hidden;
`,({color:e="#fff"})=>(0,Be.jsxs)(ul,{justifyContent:"space-between",position:"absolute",bottom:0,width:1,children:[(0,Be.jsx)(cl,{padding:"0 1em",children:(0,Be.jsx)(xc,{color:e})}),(0,Be.jsx)(cl,{padding:"1em",children:(0,Be.jsx)(Rc,{color:e})})]}));function Mc(e){const t=(t,n)=>(e(...n),[]),n=(t,n,r)=>{if(0===t.children.length)return;if("text"!==t.children[0].type)return;const o=t.children[0],a=/^Notes: (.*)$/.exec(o.value);a&&(e(os.paragraph(os.text(a[1]))),r.children.splice(n,1))};return e=>{ns(e,"notes",t),rs(e,"paragraph",n)}}var Pc={p:pl,h1:e=>(0,Be.jsx)(gl,ys(Es({},e),{fontSize:"h1"})),h2:e=>(0,Be.jsx)(gl,ys(Es({},e),{fontSize:"h2"})),h3:e=>(0,Be.jsx)(gl,ys(Es({},e),{fontSize:"h3"})),h4:e=>(0,Be.jsx)(gl,ys(Es({},e),{fontSize:"h4"})),blockquote:ml,ul:El,ol:bl,li:yl,img:fc,a:fl,table:uc,tr:dc,td:pc},Dc=({children:e})=>(0,Be.jsx)(ul,{flexDirection:"row",alignItems:"start",flex:1,children:e}),Fc=({children:e})=>(0,Be.jsx)(ul,{justifyContent:"center",alignItems:"center",height:"100%",children:e}),Bc=e=>t=>t&&"layout"in t&&t.layout===e,Uc=e=>{var t=e,{children:n,componentMap:r,animateListItems:o=!1,componentProps:a={},slideConfig:i,template:s}=t,l=Ss(t,["children","componentMap","animateListItems","componentProps","slideConfig","template"]);let c=s;return Bc("columns")(i)&&(c={default:Dc}),Bc("center")(i)&&(c={default:Fc}),(0,Be.jsx)(xl,ys(Es({},l),{children:(0,Be.jsx)(Kc,Es({},{componentMap:r,template:c,animateListItems:o,componentProps:a,children:n,slideConfig:i}))}))},zc=["sectionDirective"],Hc=/^::(.*)$/,Gc="undefined"!=typeof structuredClone?structuredClone:us,jc=()=>{const e=(e,t,n)=>{if(0===e.children.length)return;if("text"!==e.children[0].type)return;const r=e.children[0],o=Hc.exec(r.value);if(!o)return;const a=`${os.paragraph(os.text(o[1])).children[0].value}Directive`;if(zc.includes(a)){const r={type:a,children:[],position:e.position};null==n||n.children.splice(t,1,r)}else null==n||n.children.splice(t,1)};return t=>{rs(t,"paragraph",e)}},$c=()=>e=>{const t=[];let n=!1;rs(e,(r=>{if(Wc(r)){n=!0;const o=e,a=Gc(r);if("sectionDirective"===r.type){const e=o.children.indexOf(r),n=(()=>{const t=o.children.slice(e+1).findIndex((e=>"sectionDirective"===e.type))+e;return t>e?t:o.children.length-1})(),i=o.children.slice(e+1,n+1);a.children=[...i],t.push(a)}}})),n&&(e.children=t)},Wc=e=>zc.includes(e.type),Vc=Fe("div")(qt(mn,Xt),{height:"100%"}),Kc=(0,e.forwardRef)(((t,n)=>{var r=t,{componentMap:o=Pc,template:{default:a,getPropsForAST:i}={default:"div"},children:s,animateListItems:l=!1,componentProps:c,slideConfig:u}=r,d=Ss(r,["componentMap","template","children","animateListItems","componentProps","slideConfig"]);const{theme:{markdownComponentMap:p=null}={}}=(0,e.useContext)(Vs),[f,g]=(0,e.useMemo)((()=>{const t=nc(s),n=as().use(is).parse(t),r=(0,os.root)(),a=as().use(Mc,((...e)=>{r.children.push(...e)})).use(jc).use($c).runSync(n);let u;"function"==typeof i&&(u=i(a)),u||(u={children:a});const d=Es(Es({__codeBlock:Zc},p||{}),o);l&&(d.li=Yc);const f=d.pre,g=d.__codeBlock,m=d.code;d.pre=Xc(f,m,g);const h=Object.entries(d).reduce(((t,[n,r])=>(t[n]=t=>{var o;const a="p"===n?null==(o=t.children)?void 0:o.map((t=>{if("string"==typeof t){const n=t.split(/\r\n|\n/g);return n.map(((t,r)=>(0,Be.jsxs)(e.Fragment,{children:[t,r!==n.length-1&&(0,Be.jsx)("br",{})]},r)))}return t})):t.children;return(0,Be.jsx)(r,ys(Es(Es({},t),c||{}),{children:a}))},t)),{}),b=as().use(ss,{allowDangerousHtml:!0}).use(ls).use(cs,{createElement:e.createElement,components:h}),E=Object.entries(u).reduce(((e,[t,n])=>{const r=b.runSync(n);return e[t]=b.stringify(r),e}),{}),y=as().use(ss,{allowDangerousHtml:!0}).use(ls).use(cs,{createElement:e.createElement,Fragment:gc});if(Array.isArray(r.children)&&r.children.length>=1){const e=y.runSync(r);return[E,y.stringify(e)]}return[E,null]}),[s,i,p,o,l,c]),m=f,{children:h}=m,b=Ss(m,["children"]);return(0,Be.jsx)(Vc,ys(Es({ref:n},d),{children:(0,Be.jsxs)(a,ys(Es({},b),{children:["columns"===(null==u?void 0:u.layout)?h.props.children:h,g]}))}))})),Yc=e=>(0,Be.jsx)(tc,{children:(0,Be.jsx)(yl,Es({},e))}),qc=e=>{var t=e,{children:n,slideProps:r=[]}=t,o=Ss(t,["children","slideProps"]);const a=(e=>{if(!e||0===e.trim().length)return[];const t=[],n=e.split("\n");let r={content:""};for(const e of n){const n=e.trim();if(n.startsWith("---")){""!==r.content&&t.push(r);const e=n.substring(3).trim();r={content:"",jsonObject:e?JSON.parse(e):void 0}}else r.content+=e+"\n"}return t.push(r),t})(nc(n));return(0,Be.jsx)(Be.Fragment,{children:a.map(((e,t)=>{const n={};Object.assign(n,o),r[t]&&Object.assign(n,r[t]);const{jsonObject:a={},content:i}=e;return(0,Be.jsx)(Uc,ys(Es({slideConfig:a},n),{children:i}),t)}))})},Xc=(t="pre",r="code",o)=>a=>{var i=a,{children:s}=i,l=Ss(i,["children"]);const c=(0,Be.jsx)(t,ys(Es({},l),{children:s}));if(1!==e.Children.count(s))return c;const u=s[0];if(u.type!==r)return c;if(!(0,n.isValidElementType)(o))return c;const d=u.props,{children:[p]}=d,f=Ss(d,["children"]);return(0,Be.jsx)(o,ys(Es(Es({},l),f),{children:p}))},Zc=t=>{var n=t,{className:r,children:o}=n,a=Ss(n,["className","children"]);const i=(0,e.useMemo)((()=>{const e=/^language-(.*)$/.exec(r||"");return e?e[1]:void 0}),[r]);return(0,Be.jsx)(cc,ys(Es({},a),{language:i,children:o}))};function Qc({size:e=100}){return(0,Be.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:Math.floor(1.012*e),height:e,fillRule:"evenodd",clipRule:"evenodd",viewBox:"0 0 510 500",children:(0,Be.jsx)("g",{transform:"translate(.56 -8.403)",children:(0,Be.jsx)("g",{children:(0,Be.jsx)("g",{children:(0,Be.jsxs)("g",{children:[(0,Be.jsx)("path",{fill:"#202020",fillRule:"nonzero",d:"M288.107 16.303l164.681 73.248c31.558 14.036 51.893 45.336 51.893 79.874v178.119c0 34.538-20.335 65.839-51.893 79.875l-164.681 73.247a87.415 87.415 0 01-71.054 0L52.371 427.419C20.814 413.383.479 382.082.479 347.544V169.425c0-34.538 20.335-65.838 51.892-79.874l164.682-73.248a87.423 87.423 0 0171.054 0z"}),(0,Be.jsx)("path",{fill:"none",fillRule:"nonzero",stroke:"#FC6986",strokeOpacity:"0.5",strokeWidth:"24",d:"M279.696 44.792a67.128 67.128 0 00-54.404 0L64.664 115.996a57.732 57.732 0 00-34.335 52.778v179.582a57.732 57.732 0 0034.335 52.777l160.628 71.205a67.128 67.128 0 0054.404 0l160.629-71.205a57.732 57.732 0 0034.335-52.777V168.774a57.732 57.732 0 00-34.335-52.778L279.696 44.792z"}),(0,Be.jsx)("path",{fill:"none",fillRule:"nonzero",stroke:"#FC6986",strokeWidth:"24",d:"M284.007 25.519a77.337 77.337 0 00-62.855 0L56.471 98.767c-27.917 12.417-45.905 40.105-45.905 70.658v178.119c0 30.553 17.988 58.242 45.905 70.658l164.681 73.248a77.33 77.33 0 0062.855 0l164.682-73.248c27.916-12.416 45.905-40.105 45.905-70.658V169.425c0-30.553-17.989-58.241-45.905-70.658L284.007 25.519z"}),(0,Be.jsx)("g",{transform:"translate(109.244 121.849)",children:(0,Be.jsxs)("g",{fillRule:"nonzero",children:[(0,Be.jsx)("path",{fill:"#F14E74",d:"M133.25 181.944L42.592 93.853c-11.098-10.782-9.804-29.022 2.703-38.114 12.508-9.092 30.154-4.622 36.876 9.342l54.914 114.075c1.17 2.43-1.904 4.664-3.835 2.788"}),(0,Be.jsx)("path",{fill:"#FC6986",d:"M137.08 179.135L82.067 65.108c-6.734-13.958.719-30.64 15.574-34.86 14.855-4.221 29.898 6.07 31.435 21.504l12.56 126.089c.268 2.686-3.384 3.723-4.556 1.294"}),(0,Be.jsx)("path",{fill:"#E13E65",d:"M130.542 185.845L15.243 134.5C1.13 128.215-3.905 110.643 4.722 97.78c8.627-12.863 26.726-14.77 37.822-3.986l90.644 88.106c1.931 1.876-.19 5.038-2.646 3.945"}),(0,Be.jsx)("path",{fill:"#FC6986",d:"M3.845 99.275c.618-1.267 5.452-10.3 18.702-12.521 6.012-1.007 14.627.963 21.824 8.901l83.456 80.96.601 3.485-82.297-64.701s-13.082-10.252-28.044-.644l-.035-.039a10.58 10.58 0 01-5.6 1.607c-5.895 0-10.674-4.802-10.674-10.724 0-2.368.773-4.55 2.067-6.324"}),(0,Be.jsx)("path",{fill:"#FF92AC",d:"M43.711 56.892c1.011-.979 8.623-7.812 21.832-5.356 5.993 1.113 13.421 5.921 17.491 15.85l50.913 105.166-.618 3.482-55.347-89.486s-8.814-14.123-26.141-10.222l-.021-.048a10.57 10.57 0 01-5.809-.409c-5.541-2.022-8.402-8.174-6.391-13.741a10.656 10.656 0 014.091-5.236"}),(0,Be.jsx)("path",{fill:"#FF92AC",d:"M95.897 30.914c1.284-.57 10.773-4.353 22.333 2.523 5.245 3.118 10.572 10.2 10.991 20.93l11.774 116.349-1.774 3.055-21.307-103.16s-3.438-16.308-21.042-18.639l-.003-.052a10.585 10.585 0 01-5.314-2.394c-4.509-3.814-5.088-10.579-1.292-15.111a10.602 10.602 0 015.634-3.501"}),(0,Be.jsx)("path",{fill:"#FF92AC",d:"M127.602 45.338l-.858 111.944s3.407 25.113 7.651 30.279l-19.887-8.833c-7.512-6.39-5.54-20.646-5.54-20.646l18.634-112.744z"}),(0,Be.jsx)("path",{fill:"#E13E65",d:"M142.425 188.83c-14.822 0-26.839-12.074-26.839-26.967l15.609-151.132C131.793 4.95 136.64.558 142.425.558c5.784 0 10.633 4.392 11.23 10.173l15.609 151.132c0 14.893-12.017 26.967-26.839 26.967"}),(0,Be.jsx)("path",{fill:"#FF92AC",d:"M134.618 26.354l7.82 13.852 7.86-13.675"}),(0,Be.jsx)("path",{fill:"#FC6986",d:"M153.642 11.828c0 6.225-2.366 20.199-11.217 20.199-8.48 0-11.217-13.974-11.217-20.199 0-6.224 5.022-11.27 11.217-11.27s11.217 5.046 11.217 11.27"}),(0,Be.jsx)("path",{fill:"#FC6986",d:"M187.696 30.247c-12.972-3.685-26.086 3.696-30.226 15.904l13.929 85.017 31.87-66.06c6.735-13.958-.718-30.64-15.573-34.861"}),(0,Be.jsx)("path",{fill:"#FC6986",d:"M142.935 169.288c-.921-.115-15.057-2.168-14.712-18.819l3.016-74.905a96.49 96.49 0 00-3.628-30.379l-12.033 116.693a6.241 6.241 0 00.063 1.71c.31 4.212 2.129 15.211 12.538 21.257 3.52 2.044 8.117 3.929 13.779 3.977l.001-.022c.09.003.177.013.267.013 5.376 0 9.734-4.378 9.734-9.78 0-5.162-3.981-9.379-9.025-9.745"}),(0,Be.jsx)("path",{fill:"#FF92AC",d:"M118.843 75.078s1.897 11.598-.237 24.627l2.134-6.673 2.056-15.888-3.953-2.066z"}),(0,Be.jsx)("path",{fill:"#FF92AC",d:"M195.075 34.415a10.608 10.608 0 00-5.635-3.501c-1.284-.569-10.773-4.352-22.333 2.522-3.792 2.256-7.618 6.594-9.61 12.876l6.61 40.352 3.316-16.053s3.438-16.308 21.042-18.638l.003-.053a10.585 10.585 0 005.314-2.394c4.51-3.814 5.089-10.58 1.293-15.111"}),(0,Be.jsx)("path",{fill:"#F14E74",d:"M240.042 55.739c-12.507-9.092-30.154-4.622-36.875 9.342l-31.78 66.016 4.477 27.326s.02.132.049.371l66.833-64.94c11.097-10.783 9.803-29.023-2.704-38.115"}),(0,Be.jsx)("path",{fill:"#FF92AC",d:"M245.717 62.127a10.66 10.66 0 00-4.09-5.235c-1.012-.979-8.624-7.813-21.833-5.356-5.993 1.114-13.421 5.921-17.49 15.85l-30.899 63.823 1.744 10.644 34.206-55.305s8.814-14.123 26.141-10.222l.021-.049c1.875.394 3.876.297 5.809-.409 5.542-2.021 8.403-8.173 6.391-13.741"}),(0,Be.jsx)("path",{fill:"#E13E65",d:"M280.615 97.78v-.001c-8.627-12.862-26.726-14.769-37.822-3.985l-66.879 65.007c.272 2.27 1.352 14.257-5.394 20.041l99.574-44.342c14.114-6.285 19.148-23.857 10.521-36.72"}),(0,Be.jsx)("path",{fill:"#FC6986",d:"M281.493 99.275c-.619-1.267-5.453-10.3-18.703-12.521-6.012-1.008-14.627.963-21.823 8.902l-65.055 63.132c.107.889.342 3.316.168 6.283l63.126-49.672s13.082-10.253 28.044-.644l.035-.039a10.571 10.571 0 005.601 1.607c5.894 0 10.673-4.802 10.673-10.724a10.7 10.7 0 00-2.066-6.324"})]})}),(0,Be.jsx)("g",{transform:"translate(111.013 374.877)",children:(0,Be.jsxs)("g",{children:[(0,Be.jsx)("path",{fill:"#FC6986",fillRule:"nonzero",d:"M.048-.166c-.007.004-.011.009-.011.015 0 .005.001.007.004.013A.293.293 0 00.308.01c.138 0 .237-.091.237-.209 0-.121-.067-.179-.208-.222-.089-.027-.13-.055-.13-.1 0-.045.045-.067.088-.067.059 0 .094.027.123.069a.02.02 0 00.017.009c.005 0 .009-.002.014-.006l.07-.058c.006-.005.008-.009.008-.013S.525-.595.521-.6a.26.26 0 00-.223-.11c-.132 0-.226.076-.226.195 0 .113.094.177.188.205.104.031.147.063.147.117 0 .051-.042.081-.096.081-.06 0-.113-.027-.152-.099C.154-.22.151-.222.144-.222a.024.024 0 00-.014.005l-.082.051z",transform:"scale(52)"}),(0,Be.jsx)("path",{fill:"#FC6986",fillRule:"nonzero",d:"M.082-.02c0 .014.006.02.02.02h.09c.014 0 .02-.006.02-.02v-.246h.17c.146 0 .22-.096.22-.214C.602-.603.528-.7.371-.7H.102c-.014 0-.02.006-.02.02v.66zm.13-.368v-.19h.145c.078 0 .115.032.115.095s-.037.095-.115.095H.212z",transform:"matrix(52 0 0 52 29.224 0)"}),(0,Be.jsx)("path",{fill:"#FC6986",fillRule:"nonzero",d:"M.082-.02c0 .014.006.02.02.02h.457c.014 0 .02-.006.02-.02v-.082c0-.014-.006-.02-.02-.02H.212v-.185h.267c.014 0 .02-.006.02-.02v-.082c0-.014-.006-.02-.02-.02H.212v-.149h.335c.013 0 .018-.005.018-.018V-.68c0-.014-.006-.02-.02-.02H.102c-.014 0-.02.006-.02.02v.66z",transform:"matrix(52 0 0 52 61.62 0)"}),(0,Be.jsx)("path",{fill:"#FC6986",fillRule:"nonzero",d:"M.602-.186C.597-.193.593-.196.587-.196a.024.024 0 00-.017.008c-.042.037-.086.076-.173.076-.102 0-.215-.069-.215-.238 0-.169.116-.238.22-.238a.24.24 0 01.164.068c.005.004.009.006.013.006.006 0 .009-.003.015-.01l.054-.07C.652-.6.654-.603.654-.608c0-.006-.004-.011-.01-.016A.36.36 0 00.4-.71a.342.342 0 00-.356.36c0 .237.161.36.348.36a.35.35 0 00.259-.098C.657-.093.66-.098.66-.104.66-.109.658-.113.653-.12L.602-.186z",transform:"matrix(52 0 0 52 91.936 0)"}),(0,Be.jsx)("path",{fill:"#FC6986",fillRule:"nonzero",d:"M.238-.02c0 .014.006.02.02.02h.09c.014 0 .02-.006.02-.02v-.558h.19c.014 0 .02-.006.02-.02V-.68c0-.014-.006-.02-.02-.02h-.51c-.014 0-.02.006-.02.02v.082c0 .014.006.02.02.02h.19v.558z",transform:"matrix(52 0 0 52 128.076 0)"}),(0,Be.jsx)("path",{fill:"#FC6986",fillRule:"nonzero",d:"M.505-.02C.51-.007.517 0 .531 0H.63c.014 0 .02-.006.02-.02L.394-.68C.389-.693.383-.7.369-.7h-.08c-.014 0-.02.007-.025.02l-.256.66c0 .014.006.02.02.02h.099c.014 0 .021-.007.026-.02L.21-.178h.237l.058.158zM.329-.504L.403-.3H.255l.074-.204z",transform:"matrix(52 0 0 52 154.076 0)"}),(0,Be.jsx)("path",{fill:"#FC6986",fillRule:"nonzero",d:"M.602-.186C.597-.193.593-.196.587-.196a.024.024 0 00-.017.008c-.042.037-.086.076-.173.076-.102 0-.215-.069-.215-.238 0-.169.116-.238.22-.238a.24.24 0 01.164.068c.005.004.009.006.013.006.006 0 .009-.003.015-.01l.054-.07C.652-.6.654-.603.654-.608c0-.006-.004-.011-.01-.016A.36.36 0 00.4-.71a.342.342 0 00-.356.36c0 .237.161.36.348.36a.35.35 0 00.259-.098C.657-.093.66-.098.66-.104.66-.109.658-.113.653-.12L.602-.186z",transform:"matrix(52 0 0 52 186.212 0)"}),(0,Be.jsx)("path",{fill:"#FC6986",fillRule:"nonzero",d:"M.082-.02c0 .014.006.02.02.02h.445c.014 0 .02-.006.02-.02v-.082c0-.014-.006-.02-.02-.02H.212V-.68c0-.014-.006-.02-.02-.02h-.09c-.014 0-.02.006-.02.02v.66z",transform:"matrix(52 0 0 52 220.74 0)"}),(0,Be.jsx)("path",{fill:"#FC6986",fillRule:"nonzero",d:"M.082-.02c0 .014.006.02.02.02h.457c.014 0 .02-.006.02-.02v-.082c0-.014-.006-.02-.02-.02H.212v-.185h.267c.014 0 .02-.006.02-.02v-.082c0-.014-.006-.02-.02-.02H.212v-.149h.335c.013 0 .018-.005.018-.018V-.68c0-.014-.006-.02-.02-.02H.102c-.014 0-.02.006-.02.02v.66z",transform:"matrix(52 0 0 52 250.9 0)"})]})})]})})})})})}new RegExp("^Notes: ","m");var Jc=function(){return(0,Be.jsx)(Jl,{template:function(){return(0,Be.jsx)(Lc,{})},children:(0,Be.jsx)(qc,{children:"\x3c!-- slides.md --\x3e\n\n# GitHub Bootcamp\n## Achille DAVID\n\n---\n\n# How to initialise a new repository\nouvrir un terminal\nexécuter la commande 'git init'\n\n---\n\n# How to review changes\nexécuter la commande 'git status'\n\n---\n\n# How to commit changes\najouter les fichiers du commit en exécutant la commande git add 'nom du fichier'\nune fois tous les fichiers ajoutés, exécuter la commande git commit -m 'nom du commit'\n\n---\n\n# Create a new branch\nexécuter la commande git branch 'nom de la branche'\n\n---\n\n# Work on a branch\n\n---\n\n# Merge branch on main\nexécuter la commande git checkout main\nexécuter la commande git merge 'nom de la branche'\n\n---\n\n# Delete a branch\nexécuter la commande git branch -d 'nom de la branche'\n\n---\n\n# Create a pull request\n\n---\n\n# Pushing changes to remote\n\n---\n\n# Pulling changes from remote"})})};(0,t.s)(document.getElementById("app")).render((0,Be.jsx)(Jc,{}))})()})();