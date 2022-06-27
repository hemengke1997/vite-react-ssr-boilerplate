var f=Object.defineProperty;var p=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var u=(o,t,e)=>t in o?f(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,d=(o,t)=>{for(var e in t||(t={}))m.call(t,e)&&u(o,e,t[e]);if(p)for(var e of p(t))y.call(t,e)&&u(o,e,t[e]);return o};var b=(o,t,e)=>new Promise((r,i)=>{var n=a=>{try{s(e.next(a))}catch(w){i(w)}},c=a=>{try{s(e.throw(a))}catch(w){i(w)}},s=a=>a.done?r(a.value):Promise.resolve(a.value).then(n,c);s((e=e.apply(o,t)).next())});import{ssrRenderAttrs as k,ssrRenderSlot as x,renderToNodeStream as v}from"vue/server-renderer";import{escapeInject as z}from"vite-plugin-ssr";import{mergeProps as _,useSSRContext as S,inject as T,defineComponent as C,h,createSSRApp as R}from"vue";import{_ as $}from"./plugin-vue_export-helper-1db49828.chunk.js";const l={};function j(o,t,e,r){t(`<div${k(_({class:"layout"},r))} data-v-7fe99d5c> this is layout <div class="main" data-v-7fe99d5c>`),x(o.$slots,"default",{},null,t,e),t("</div></div>")}const g=l.setup;l.setup=(o,t)=>{const e=S();return(e.modules||(e.modules=new Set)).add("renderer/Layout.vue"),g?g(o,t):void 0};var A=$(l,[["ssrRender",j],["__scopeId","data-v-7fe99d5c"]]);const E=Symbol();function M(o,t){o.provide(E,t)}function N(o){const{Page:t,pageProps:e,documentProps:r}=o,i=C({render(){return h(A,{},{default(){return h(t,d(d({},e),r))}})}}),n=R(i);return M(n,o),n}var F="/favicon.ico";const q=["pageProps","urlPathname","documentProps"];function B(o){return b(this,null,function*(){const t=N(o),e=v(t),{documentProps:r}=o,i=(r==null?void 0:r.title)||"\u5947\u6E38",n=(r==null?void 0:r.description)||"\u5947\u6E38\u52A0\u901F\u5668",c=(r==null?void 0:r.keywords)||"\u52A0\u901F\u5668",s=r==null?void 0:r.isMobile;return{documentHtml:z`<!DOCTYPE html>
  <html lang="zh-CN">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" href="${F}" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0${s?", maximum-scale=1.0, user-scalable=no":""}" />
      <meta name="description" content="${n}" />
      <meta name="keywords" content="${c}" />
      <title>${i}</title>
    </head>
    <body>
      <div id="app">${e}</div>
    </body>
  </html>`,pageContext:{documentProps:r}}})}export{q as passToClient,B as render};
