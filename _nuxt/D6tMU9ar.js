import{Q as N,a0 as D,a3 as F,aE as H,aF as M,r as R,F as $,H as h,e as z,c as B,a6 as O,z as c,aG as T,_ as y,t as b,L as E,A as n,x as e,C as Y,D as A}from"./naxdys-t.js";import{u as q,V as j}from"./CbNhqTVc.js";import{V as o}from"./CCm_Llxz.js";function G(t){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;t;){if(l?U(t):Q(t))return t;t=t.parentElement}return document.scrollingElement}function Q(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const l=window.getComputedStyle(t);return l.overflowY==="scroll"||l.overflowY==="auto"&&t.scrollHeight>t.clientHeight}function U(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const l=window.getComputedStyle(t);return["scroll","auto"].includes(l.overflowY)}const Z=""+new URL("parallax.C8F16CCB.webp",import.meta.url).href;function J(t){return Math.floor(Math.abs(t))*Math.sign(t)}const K=N({scale:{type:[Number,String],default:.5},...D()},"VParallax"),W=F()({name:"VParallax",props:K(),setup(t,l){let{slots:S}=l;const{intersectionRef:d,isIntersecting:m}=q(),{resizeRef:C,contentRect:f}=H(),{height:k}=M(),p=R();$(()=>{var r;d.value=C.value=(r=p.value)==null?void 0:r.$el});let s;h(m,r=>{r?(s=G(d.value),s=s===document.scrollingElement?document:s,s.addEventListener("scroll",i,{passive:!0}),i()):s.removeEventListener("scroll",i)}),z(()=>{s==null||s.removeEventListener("scroll",i)}),h(k,i),h(()=>{var r;return(r=f.value)==null?void 0:r.height},i);const _=B(()=>1-T(+t.scale));let g=-1;function i(){m.value&&(cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;const r=((x=p.value)==null?void 0:x.$el).querySelector(".v-img__img");if(!r)return;const v=s instanceof Document?document.documentElement.clientHeight:s.clientHeight,w=s instanceof Document?window.scrollY:s.scrollTop,I=d.value.getBoundingClientRect().top+w,u=f.value.height,P=I+(u-v)/2,V=J((w-P)*_.value),L=Math.max(1,(_.value*(v-u)+u)/u);r.style.setProperty("transform",`translateY(${V}px) scale(${L})`)}))}return O(()=>c(j,{class:["v-parallax",{"v-parallax--active":m.value},t.class],style:t.style,ref:p,cover:!0,onLoadstart:i,onLoad:i},S)),{}}}),X={},ee=e("div",{class:"d-flex flex-column fill-height justify-center align-center text-white ma-3 text-center"},[e("h2",{class:"text-h4 font-weight-thin mb-4"}," ISC: Ingeniería Servicios & Construcción "),e("h4",{class:"subheading"}," Profesionales Expertos en Construcción con +10 años de experiencia ")],-1);function te(t,l){return b(),E(W,{src:Z,height:"500",color:"grey"},{default:n(()=>[ee]),_:1})}const xe=y(X,[["render",te]]),se={},a=t=>(Y("data-v-7b020f3a"),t=t(),A(),t),ae=a(()=>e("h2",null,"¿Tienes un proyecto en mente?",-1)),ne=a(()=>e("p",null,"¡Nosotros lo desarrollamos!",-1)),oe=a(()=>e("p",null,"En ISC, estamos listos para ayudarte a llevar tus ideas a la realidad. Ponte en contacto con nostros para cotizar tu proyecto.",-1)),ce=a(()=>e("p",null,"Gerencia y Administración de proyectos",-1)),le=a(()=>e("p",null,"Ejecución y Supervisión de Obra",-1)),re=a(()=>e("p",null,"Obra Civil",-1)),ie=a(()=>e("p",null,"Diseño Arquitectónico",-1)),ue=a(()=>e("p",null,"Cálculos estructurales",-1)),de=a(()=>e("p",null,"Desarrollo de Ingenierías",-1)),me=a(()=>e("a",{class:"button",href:"https://www.facebook.com/share/mVrZuFkdR591uQzo/?mibextid=YMEMSu",target:"_blank"},[e("div",{class:"social-name"},[e("span",{class:"mdi mdi-facebook"}),e("span",null,"Facebook")]),e("div",null,[e("span",{class:"mdi mdi-arrow-right-thin"})])],-1)),pe=a(()=>e("a",{class:"button",href:"https://www.instagram.com/isc.mexico",target:"_blank"},[e("div",{class:"social-name"},[e("span",{class:"mdi mdi-instagram"}),e("span",null,"Instagram")]),e("div",null,[e("span",{class:"mdi mdi-arrow-right-thin"})])],-1)),he=a(()=>e("a",{class:"button",href:"#",target:"_blank"},[e("div",{class:"social-name"},[e("span",{class:"mdi mdi-linkedin"}),e("span",null,"Linkdln")]),e("div",null,[e("span",{class:"mdi mdi-arrow-right-thin"})])],-1)),fe=a(()=>e("a",{class:"button",href:"mailto:contacto@isc-mexico.com"},[e("div",{class:"social-name"},[e("span",{class:"mdi mdi-email"}),e("span",null,"Email")]),e("div",null,[e("span",{class:"mdi mdi-arrow-right-thin"})])],-1));function _e(t,l){return b(),E(o,{class:"contact",id:"contact"},{default:n(()=>[c(o,{class:"contact-container"},{default:n(()=>[c(o,{class:"contact-description"},{default:n(()=>[c(o,{class:"contact-description-container"},{default:n(()=>[c(o,{class:"container-description-title"},{default:n(()=>[ae,ne]),_:1}),c(o,{class:"container-description-description"},{default:n(()=>[oe]),_:1}),c(o,{class:"tags"},{default:n(()=>[ce,le,re,ie,ue,de]),_:1})]),_:1})]),_:1}),c(o,{class:"contact-links"},{default:n(()=>[c(o,{class:"contact-link-container"},{default:n(()=>[c(o,{class:"follow"},{default:n(()=>[me,pe,he]),_:1}),c(o,{class:"direct-contact"},{default:n(()=>[fe]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const ye=y(se,[["render",_e],["__scopeId","data-v-7b020f3a"]]);export{W as V,ye as a,xe as m};