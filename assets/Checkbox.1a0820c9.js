var D=Object.defineProperty;var i=(e,t)=>D(e,"name",{value:t,configurable:!0});import{r as o}from"./index.8d72d249.js";import{a as R,$ as z}from"./index.module.609325f4.js";import{r as W}from"./index.53e918a8.js";import{c as P}from"./clsx.m.256e9345.js";import{T as q}from"./Text.9cd4214c.js";import{j as p,F as k,a as F}from"./jsx-runtime.76811aeb.js";import{I as K,r as V}from"./IconBase.esm.c203bdc4.js";var g=new Map;g.set("bold",function(e){return p(k,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});g.set("duotone",function(e){return p(k,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});g.set("fill",function(){return p(k,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});g.set("light",function(e){return p(k,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});g.set("thin",function(e){return p(k,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});g.set("regular",function(e){return p(k,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var X=i(function(t,n){return V(t,n,g)},"renderPath"),M=o.exports.forwardRef(function(e,t){return p(K,{...Object.assign({ref:t},e,{renderPath:X})})});M.displayName="Check";const Y=M;function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}i(y,"_extends$1");function H(e,t=[]){let n=[];function r(c,l){const u=o.exports.createContext(l),d=n.length;n=[...n,l];function a(f){const{scope:h,children:m,...x}=f,N=(h==null?void 0:h[e][d])||u,$=o.exports.useMemo(()=>x,Object.values(x));return o.exports.createElement(N.Provider,{value:$},m)}i(a,"Provider");function b(f,h){const m=(h==null?void 0:h[e][d])||u,x=o.exports.useContext(m);if(x)return x;if(l!==void 0)return l;throw new Error(`\`${f}\` must be used within \`${c}\``)}return i(b,"useContext"),a.displayName=c+"Provider",[a,b]}i(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const s=i(()=>{const c=n.map(l=>o.exports.createContext(l));return i(function(u){const d=(u==null?void 0:u[e])||c;return o.exports.useMemo(()=>({[`__scope${e}`]:{...u,[e]:d}}),[u,d])},"useScope")},"createScope");return s.scopeName=e,[r,Z(s,...t)]}i(H,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function Z(...e){const t=e[0];if(e.length===1)return t;const n=i(()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return i(function(c){const l=r.reduce((u,{useScope:d,scopeName:a})=>{const f=d(c)[`__scope${a}`];return{...u,...f}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}i(Z,"$c512c27ab02ef895$var$composeContextScopes");function w(e,t,{checkForDefaultPrevented:n=!0}={}){return i(function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)},"handleEvent")}i(w,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function T(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}i(T,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function G({prop:e,defaultProp:t,onChange:n=i(()=>{},"onChange")}){const[r,s]=J({defaultProp:t,onChange:n}),c=e!==void 0,l=c?e:r,u=T(n),d=o.exports.useCallback(a=>{if(c){const f=typeof a=="function"?a(e):a;f!==e&&u(f)}else s(a)},[c,e,s,u]);return[l,d]}i(G,"$71cd76cc60e0454e$export$6f32135080cb4c3");function J({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,s=o.exports.useRef(r),c=T(t);return o.exports.useEffect(()=>{s.current!==r&&(c(r),s.current=r)},[r,s,c]),n}i(J,"$71cd76cc60e0454e$var$useUncontrolledState");function Q(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}i(Q,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const _=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function ee(e){const[t,n]=o.exports.useState(void 0);return _(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let l,u;if("borderBoxSize"in c){const d=c.borderBoxSize,a=Array.isArray(d)?d[0]:d;l=a.inlineSize,u=a.blockSize}else l=e.offsetWidth,u=e.offsetHeight;n({width:l,height:u})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}i(ee,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function te(e,t){return o.exports.useReducer((n,r)=>{const s=t[n][r];return s!=null?s:n},e)}i(te,"$fe963b355347cc68$export$3e6543de14f8614f");const I=i(e=>{const{present:t,children:n}=e,r=ne(t),s=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),c=R(r.ref,s.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(s,{ref:c}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");I.displayName="Presence";function ne(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),s=o.exports.useRef(e),c=o.exports.useRef("none"),l=e?"mounted":"unmounted",[u,d]=te(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const a=S(r.current);c.current=u==="mounted"?a:"none"},[u]),_(()=>{const a=r.current,b=s.current;if(b!==e){const h=c.current,m=S(a);e?d("MOUNT"):m==="none"||(a==null?void 0:a.display)==="none"?d("UNMOUNT"):d(b&&h!==m?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,d]),_(()=>{if(t){const a=i(f=>{const m=S(r.current).includes(f.animationName);f.target===t&&m&&W.exports.flushSync(()=>d("ANIMATION_END"))},"handleAnimationEnd"),b=i(f=>{f.target===t&&(c.current=S(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",b),t.addEventListener("animationcancel",a),t.addEventListener("animationend",a),()=>{t.removeEventListener("animationstart",b),t.removeEventListener("animationcancel",a),t.removeEventListener("animationend",a)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.exports.useCallback(a=>{a&&(r.current=getComputedStyle(a)),n(a)},[])}}i(ne,"$921a889cee6df7e8$var$usePresence");function S(e){return(e==null?void 0:e.animationName)||"none"}i(S,"$921a889cee6df7e8$var$getAnimationName");function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}i(O,"_extends");const re=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],L=re.reduce((e,t)=>{const n=o.exports.forwardRef((r,s)=>{const{asChild:c,...l}=r,u=c?z:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(u,O({},l,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),j="Checkbox",[oe,Ce]=H(j),[se,ce]=oe(j),ae=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:s,defaultChecked:c,required:l,disabled:u,value:d="on",onCheckedChange:a,...b}=e,[f,h]=o.exports.useState(null),m=R(t,v=>h(v)),x=o.exports.useRef(!1),N=f?Boolean(f.closest("form")):!0,[$=!1,B]=G({prop:s,defaultProp:c,onChange:a});return o.exports.createElement(se,{scope:n,state:$,disabled:u},o.exports.createElement(L.button,y({type:"button",role:"checkbox","aria-checked":C($)?"mixed":$,"aria-required":l,"data-state":U($),"data-disabled":u?"":void 0,disabled:u,value:d},b,{ref:m,onKeyDown:w(e.onKeyDown,v=>{v.key==="Enter"&&v.preventDefault()}),onClick:w(e.onClick,v=>{B(A=>C(A)?!0:!A),N&&(x.current=v.isPropagationStopped(),x.current||v.stopPropagation())})})),N&&o.exports.createElement(de,{control:f,bubbles:!x.current,name:r,value:d,checked:$,required:l,disabled:u,style:{transform:"translateX(-100%)"}}))}),ie="CheckboxIndicator",ue=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...s}=e,c=ce(ie,n);return o.exports.createElement(I,{present:r||C(c.state)||c.state===!0},o.exports.createElement(L.span,y({"data-state":U(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),de=i(e=>{const{control:t,checked:n,bubbles:r=!0,...s}=e,c=o.exports.useRef(null),l=Q(n),u=ee(t);return o.exports.useEffect(()=>{const d=c.current,a=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(a,"checked").set;if(l!==n&&f){const h=new Event("click",{bubbles:r});d.indeterminate=C(n),f.call(d,C(n)?!1:n),d.dispatchEvent(h)}},[l,n,r]),o.exports.createElement("input",y({type:"checkbox","aria-hidden":!0,defaultChecked:C(n)?!1:n},s,{tabIndex:-1,ref:c,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function C(e){return e==="indeterminate"}i(C,"$e698a72e93240346$var$isIndeterminate");function U(e){return C(e)?"indeterminate":e?"checked":"unchecked"}i(U,"$e698a72e93240346$var$getState");const le=ue;function E({id:e,checked:t,...n}){const[r,s]=o.exports.useState(!1);function c(){return t=!r,s(t),t}return i(c,"handleDataState"),F(k,{children:[p(ae,{id:e,className:r?P("flex items-center w-6 h-6 p-[2px] outline-none bg-purple-900 border-2 border-purple-900 rounded-full hover:bg-purple-400 hover:border-purple-400"):P("flex items-center w-6 h-6 p-[2px] outline-none bg-gray-600 border-2 border-blue-400 rounded-full hover:border-blue-900"),...n,onClick:c,checked:t,children:p(le,{asChild:!0,children:p(Y,{weight:"bold",className:"flex w-full rounded-full text-gray-100"})})}),p(q,{className:r?P("line-through text-gray-300"):"",children:n.children})]})}i(E,"Checkbox");try{E.displayName="Checkbox",E.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox.tsx#Checkbox"]={docgenInfo:E.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox.tsx#Checkbox"})}catch{}export{E as C};
//# sourceMappingURL=Checkbox.1a0820c9.js.map
