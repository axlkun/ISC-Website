import{_ as L,t as y,L as S,A as d,C as z,D as A,x as f,z as i,O as T,B as V,Q as E,R as J,S as ge,T as H,U as M,V as P,c as _,e as Q,H as X,W as ye,X as xe,o as Y,Y as he,Z as _e,$ as be,a0 as R,a1 as Z,a2 as Se,a3 as k,a4 as Ie,a5 as K,a6 as D,a7 as Ce,a8 as ee,g as ae,a9 as Ve,aa as we,ab as te,ac as Pe,ad as O,ae as ne,af as Ee,ag as se,ah as $e,ai as ke,aj as Te,ak as Be,v as B,M as q,N as j,al as oe,y as $,r as U}from"./naxdys-t.js";import{V as qe,m as je,a as Ne}from"./D6tMU9ar.js";import{i as Le}from"./pLDPzUn-.js";import{V as p}from"./CCm_Llxz.js";import{R as ze,V as ie,a as Ae,b as Ge}from"./pXmEwomP.js";import{a as W,V as Re,b as De,c as He}from"./B-H2p8Cs.js";import{V as Me}from"./CbNhqTVc.js";const Fe=""+new URL("hero.TjR7Eg2T.webp",import.meta.url).href,Oe={},Ue=e=>(z("data-v-4177fa08"),e=e(),A(),e),We=Ue(()=>f("div",{class:"d-flex flex-column fill-height justify-center align-center text-white ma-3 text-center"},[f("div",{class:"home-encabezado"},[f("h1",{class:"text-h4 font-weight-bold mb-4"}," ISC: Ingeniería Servicios & Construcción "),f("h2",{class:"subheading"}," Desarrollamos los proyectos de mayor complejidad técnica, mejorando la calidad de vida de las personas y potenciando el desarrollo económico. "),f("div",{class:"button-container"},[f("a",{class:"button",href:"mailto:contacto@isc-mexico.com"},"Contacto")])])],-1));function Je(e,r){return y(),S(qe,{src:Fe,class:"h-screen",color:"grey"},{default:d(()=>[We]),_:1})}const Qe=L(Oe,[["render",Je],["__scopeId","data-v-4177fa08"]]),G=e=>(z("data-v-1d0a02b3"),e=e(),A(),e),Xe=G(()=>f("h2",null,"Sobre nosotros",-1)),Ye=G(()=>f("p",null,[V(" ISC: Ingeniería Servicios & Construcción fue fundada en la ciudad de "),f("strong",null,"Monterrey, Nuevo León"),V(" por un grupo de profesionales con más de "),f("strong",null,"10 años de experiencia"),V(" en el sector. ")],-1)),Ze=G(()=>f("p",null," Nuestra empresa surgió con la visión de ofrecer un valor agregado a la sociedad a través del desarrollo de infraestructura de calidad. ",-1)),Ke=G(()=>f("p",null," Hemos evolucionado para convertirnos en líderes en nuestro campo, comprometidos con la excelencia y la innovación en cada proyecto que emprendemos. ",-1)),ea=G(()=>f("a",{class:"button",href:"/sobre-nosotros"},"Leer más...",-1)),aa=["src"],ta={__name:"SobreNosotros",setup(e){return(r,t)=>(y(),S(p,{class:"aboutme",id:"aboutme"},{default:d(()=>[i(p,{class:"description"},{default:d(()=>[i(p,{class:"description-container"},{default:d(()=>[i(p,{class:"container-aboutme-title"},{default:d(()=>[Xe]),_:1}),i(p,{class:"container-aboutme-description"},{default:d(()=>[Ye,Ze,Ke]),_:1}),i(p,{class:"button-container"},{default:d(()=>[ea]),_:1})]),_:1})]),_:1}),i(p,{class:"image"},{default:d(()=>[i(p,{class:"img-container"},{default:d(()=>[f("img",{class:"myImg",src:T(Le),alt:"Imagen Sobre Nosotros",loading:"lazy"},null,8,aa)]),_:1})]),_:1})]),_:1}))}},na=L(ta,[["__scopeId","data-v-1d0a02b3"]]),sa=E({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),oa=E({value:null,disabled:Boolean,selectedClass:String},"group-item");function ia(e,r){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const a=J("useGroupItem");if(!a)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=ge();H(Symbol.for(`${r.description}:id`),s);const l=M(r,null);if(!l){if(!t)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${r.description}`)}const n=P(e,"value"),o=_(()=>!!(l.disabled.value||e.disabled));l.register({id:s,value:n,disabled:o},a),Q(()=>{l.unregister(s)});const g=_(()=>l.isSelected(s)),b=_(()=>g.value&&[l.selectedClass.value,e.selectedClass]);return X(g,h=>{a.emit("group:selected",{value:h})},{flush:"sync"}),{id:s,isSelected:g,toggle:()=>l.select(s,!g.value),select:h=>l.select(s,h),selectedClass:b,value:n,disabled:o,group:l}}function la(e,r){let t=!1;const a=ye([]),s=xe(e,"modelValue",[],c=>c==null?[]:le(a,be(c)),c=>{const u=ca(a,c);return e.multiple?u:u[0]}),l=J("useGroup");function n(c,u){const m=c,v=Symbol.for(`${r.description}:id`),C=_e(v,l==null?void 0:l.vnode).indexOf(u);T(m.value)==null&&(m.value=C),C>-1?a.splice(C,0,m):a.push(m)}function o(c){if(t)return;g();const u=a.findIndex(m=>m.id===c);a.splice(u,1)}function g(){const c=a.find(u=>!u.disabled);c&&e.mandatory==="force"&&!s.value.length&&(s.value=[c.id])}Y(()=>{g()}),Q(()=>{t=!0});function b(c,u){const m=a.find(v=>v.id===c);if(!(u&&(m!=null&&m.disabled)))if(e.multiple){const v=s.value.slice(),I=v.findIndex(ve=>ve===c),C=~I;if(u=u??!C,C&&e.mandatory&&v.length<=1||!C&&e.max!=null&&v.length+1>e.max)return;I<0&&u?v.push(c):I>=0&&!u&&v.splice(I,1),s.value=v}else{const v=s.value.includes(c);if(e.mandatory&&v)return;s.value=u??!v?[c]:[]}}function h(c){if(e.multiple,s.value.length){const u=s.value[0],m=a.findIndex(C=>C.id===u);let v=(m+c)%a.length,I=a[v];for(;I.disabled&&v!==m;)v=(v+c)%a.length,I=a[v];if(I.disabled)return;s.value=[a[v].id]}else{const u=a.find(m=>!m.disabled);u&&(s.value=[u.id])}}const w={register:n,unregister:o,selected:s,select:b,disabled:P(e,"disabled"),prev:()=>h(a.length-1),next:()=>h(1),isSelected:c=>s.value.includes(c),selectedClass:_(()=>e.selectedClass),items:_(()=>a),getItemIndex:c=>ra(a,c)};return H(r,w),w}function ra(e,r){const t=le(e,[r]);return t.length?e.findIndex(a=>a.id===t[0]):-1}function le(e,r){const t=[];return r.forEach(a=>{const s=e.find(n=>he(a,n.value)),l=e[a];(s==null?void 0:s.value)!=null?t.push(s.id):l!=null&&t.push(l.id)}),t}function ca(e,r){const t=[];return r.forEach(a=>{const s=e.findIndex(l=>l.id===a);if(~s){const l=e[s];t.push(l.value!=null?l.value:s)}}),t}const N=Symbol.for("vuetify:v-expansion-panel"),da=["default","accordion","inset","popout"],ua=E({color:String,flat:Boolean,focusable:Boolean,static:Boolean,tile:Boolean,variant:{type:String,default:"default",validator:e=>da.includes(e)},readonly:Boolean,...R(),...sa(),...Z(),...Se()},"VExpansionPanels"),fa=k()({name:"VExpansionPanels",props:ua(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:t}=r;la(e,N);const{themeClasses:a}=Ie(e),s=_(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return K({VExpansionPanel:{color:P(e,"color"),readonly:P(e,"readonly")},VExpansionPanelTitle:{focusable:P(e,"focusable"),static:P(e,"static")}}),D(()=>i(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},a.value,s.value,e.class],style:e.style},t)),{}}}),pa=E({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function x(e,r,t){return k()({name:e,props:pa({mode:t,origin:r}),setup(a,s){let{slots:l}=s;const n={onBeforeEnter(o){a.origin&&(o.style.transformOrigin=a.origin)},onLeave(o){if(a.leaveAbsolute){const{offsetTop:g,offsetLeft:b,offsetWidth:h,offsetHeight:w}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${g}px`,o.style.left=`${b}px`,o.style.width=`${h}px`,o.style.height=`${w}px`}a.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(a.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:g,top:b,left:h,width:w,height:c}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=g||"",o.style.top=b||"",o.style.left=h||"",o.style.width=w||"",o.style.height=c||""}}};return()=>{const o=a.group?Ce:ee;return ae(o,{name:a.disabled?"":e,css:!a.disabled,...a.group?void 0:{mode:a.mode},...a.disabled?{}:n},l.default)}}})}function re(e,r){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return k()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(a,s){let{slots:l}=s;return()=>ae(ee,{name:a.disabled?"":e,css:!a.disabled,...a.disabled?{}:r},l.default)}})}function ce(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",a=Ve(`offset-${t}`);return{onBeforeEnter(n){n._parent=n.parentNode,n._initialStyle={transition:n.style.transition,overflow:n.style.overflow,[t]:n.style[t]}},onEnter(n){const o=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";const g=`${n[a]}px`;n.style[t]="0",n.offsetHeight,n.style.transition=o.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame(()=>{n.style[t]=g})},onAfterEnter:l,onEnterCancelled:l,onLeave(n){n._initialStyle={transition:"",overflow:n.style.overflow,[t]:n.style[t]},n.style.overflow="hidden",n.style[t]=`${n[a]}px`,n.offsetHeight,requestAnimationFrame(()=>n.style[t]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(n){e&&n._parent&&n._parent.classList.remove(e),l(n)}function l(n){const o=n._initialStyle[t];n.style.overflow=n._initialStyle.overflow,o!=null&&(n.style[t]=o),delete n._initialStyle}}x("fab-transition","center center","out-in");x("dialog-bottom-transition");x("dialog-top-transition");x("fade-transition");x("scale-transition");x("scroll-x-transition");x("scroll-x-reverse-transition");x("scroll-y-transition");x("scroll-y-reverse-transition");x("slide-x-transition");x("slide-x-reverse-transition");x("slide-y-transition");x("slide-y-reverse-transition");const ma=re("expand-transition",ce());re("expand-x-transition",ce("",!0));const de=E({eager:Boolean},"lazy");function va(e,r){const t=we(!1),a=_(()=>t.value||e.eager||r.value);X(r,()=>t.value=!0);function s(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:s}}const ga=E({...R(),...de()},"VExpansionPanelText"),ue=k()({name:"VExpansionPanelText",props:ga(),setup(e,r){let{slots:t}=r;const a=M(N);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:s,onAfterLeave:l}=va(e,a.isSelected);return D(()=>i(ma,{onAfterLeave:l},{default:()=>{var n;return[te(i("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&s.value&&i("div",{class:"v-expansion-panel-text__wrapper"},[(n=t.default)==null?void 0:n.call(t)])]),[[Pe,a.isSelected.value]])]}})),{}}}),fe=E({color:String,expandIcon:{type:O,default:"$expand"},collapseIcon:{type:O,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...R()},"VExpansionPanelTitle"),pe=k()({name:"VExpansionPanelTitle",directives:{Ripple:ze},props:fe(),setup(e,r){let{slots:t}=r;const a=M(N);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:s,backgroundColorStyles:l}=ne(e,"color"),n=_(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return D(()=>{var o;return te(i("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},s.value,e.class],style:[l.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[i("span",{class:"v-expansion-panel-title__overlay"},null),(o=t.default)==null?void 0:o.call(t,n.value),!e.hideActions&&i("span",{class:"v-expansion-panel-title__icon"},[t.actions?t.actions(n.value):i(se,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[Ee("ripple"),e.ripple]])}),{}}}),ya=E({title:String,text:String,bgColor:String,...R(),...$e(),...oa(),...de(),...ke(),...Z(),...fe()},"VExpansionPanel"),xa=k()({name:"VExpansionPanel",props:ya(),emits:{"group:selected":e=>!0},setup(e,r){let{slots:t}=r;const a=ia(e,N),{backgroundColorClasses:s,backgroundColorStyles:l}=ne(e,"bgColor"),{elevationClasses:n}=Te(e),{roundedClasses:o}=Be(e),g=_(()=>(a==null?void 0:a.disabled.value)||e.disabled),b=_(()=>a.group.items.value.reduce((c,u,m)=>(a.group.selected.value.includes(u.id)&&c.push(m),c),[])),h=_(()=>{const c=a.group.items.value.findIndex(u=>u.id===a.id);return!a.isSelected.value&&b.value.some(u=>u-c===1)}),w=_(()=>{const c=a.group.items.value.findIndex(u=>u.id===a.id);return!a.isSelected.value&&b.value.some(u=>u-c===-1)});return H(N,a),K({VExpansionPanelText:{eager:P(e,"eager")},VExpansionPanelTitle:{readonly:P(e,"readonly")}}),D(()=>{const c=!!(t.text||e.text),u=!!(t.title||e.title);return i(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":h.value,"v-expansion-panel--after-active":w.value,"v-expansion-panel--disabled":g.value},o.value,s.value,e.class],style:[l.value,e.style]},{default:()=>{var m;return[i("div",{class:["v-expansion-panel__shadow",...n.value]},null),u&&i(pe,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[t.title?t.title():e.title]}),c&&i(ue,{key:"text"},{default:()=>[t.text?t.text():e.text]}),(m=t.default)==null?void 0:m.call(t)]}})}),{}}}),ha=e=>(z("data-v-2710deb4"),e=e(),A(),e),_a=ha(()=>f("div",{class:"text-container pt-6"},[f("p",null,"Nuestra fórmula"),f("h2",null,"Transformando desafíos en soluciones"),f("p",null,[V("En ISC vemos cada proyecto como un desafío único e integral y tenemos el mejor equipo para llevarlo adelante. Contamos con profesionales con amplia experiencia en el ramo y fuerza de trabajo altamente capacitada con conocimientos y experiencia diferencial en las áreas en que operamos. "),f("br"),f("br"),V("Nuestro espíritu innovador y la capacidad de crear soluciones integrales apostando a la calidad y la transparencia lo que nos convierten en socios estratégicos de nuestros clientes. ")])],-1)),ba={__name:"NuestraFormula",setup(e){const r=[{title:"Gestión Eficiente de proyectos",icon:"mdi-bag-checked",description:"No somos solo una Empresa constructora, sino una compañía con capacidades de desarrollar proyectos integrales y agregar valor a través de la ingeniería y una cadena de suministros en los proyectos en los que participamos. "},{title:"Garantía de Entrega",icon:"mdi-package-check",description:"Nunca, en nuestros años de historia, hemos dejamos un proyecto sin terminar. ISC es garantía de que una obra llegará a su fin, y será entregada bajo los más altos estándares de calidad, seguridad y transparencia a través de la gestión eficiente de los recursos."},{title:"Visión a futuro",icon:"mdi-bridge",description:"Nuestro modelo de negocio se caracteriza por una visión a largo plazo que promueve el desarrollo de las personas con equidad y diversidad, el crecimiento económico y el cuidado del medioambiente."},{title:"Pasión por el trabajo",icon:"mdi-heart-box-outline",description:"Somos un equipo multicultural de profesionales y colaboradores con vasta experiencia, apasionados por los grandes desafíos, siempre en búsqueda de nuevos retos"},{title:"Transformación ",icon:"mdi-cog",description:"Trabajamos aplicando las mejores prácticas y en la implementación de herramientas y tecnologías que nos permitan liderar los cambios en la industria y mantenernos a la vanguardia."},{title:"Solidez Financiera",icon:"mdi-cash-multiple",description:"Contamos con una capacidad financiera que nos permite cumplir con todos nuestros compromisos contractuales y nos da la flexibilidad necesaria para poder afrontar las crisis"}];return(t,a)=>(y(),S(p,{class:"nuestraformula-container"},{default:d(()=>[i(p,{class:"background-container"},{default:d(()=>[_a,i(fa,{class:"expansion-container"},{default:d(()=>[(y(),B(q,null,j(r,s=>i(xa,{class:"ma-5","bg-color":"#0b1930"},{default:d(()=>[i(pe,{"expand-icon":"mdi-plus","collapse-icon":"mdi-minus",class:"text-h7 text-md-h6"},{default:d(()=>[f("span",{class:oe(["mdi ma-2",s.icon])},null,2),V(" "+$(s.title),1)]),_:2},1024),i(ue,null,{default:d(()=>[V($(s.description),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}))}},Sa=L(ba,[["__scopeId","data-v-2710deb4"]]),Ia={name:"servicesSection",data:()=>({services:[{title:"Gerencia y Administración de proyectos",icon:"mdi-bag-checked",description:"Nos encargamos de todo el proceso de Pre-construccion, planeación, Ejecucion, Control y conclusion de proyectos."},{title:"Ejecución y Supervisión de obra",icon:"mdi-office-building-cog",description:"Coordinamos los equipos y supervisamos cada etapa para garantizar la calidad y el cumplimiento de los plazos establecidos."},{title:"Obra civil",icon:"mdi-bridge",description:"Desarrollamos proyectos urbanos y de infraestructura a gran escala, priorizando en todo momento los más altos estándares de seguridad y durabilidad"},{title:"Diseño arquitectónico",icon:"mdi-home-city",description:"Nuestro equipo especializado se dedica a crear espacios innovadores y funcionales que reflejen la visión y las necesidades de nuestros clientes."},{title:"Desarrollo de Ingenierías",icon:"mdi-cog",description:"Bajo voltaje, Electrico, Hidrosanitario, Mecanico, Gases Medicinales, Sistema HVAC."},{title:"Cálculos Estructurales",icon:"mdi-calculator",description:"Nuestro equipo de ingenieros realiza análisis detallados para asegurar que cada estructura cumpla con los estándares de seguridad y resistencia necesarios."},{title:"Gestion de proyectos con metodologia PMI",icon:"mdi-calendar-clock",description:"Nuestra gestión de proyectos se basa en un enfoque reconocido internacionalmente que garantiza  una gestión eficiente del tiempo, los recursos y el alcance."}]})},me=e=>(z("data-v-5a9f34ec"),e=e(),A(),e),Ca=me(()=>f("h2",null,"Servicios",-1)),Va=me(()=>f("p",null,"Ingeniería, Construcción y Diseño.",-1));function wa(e,r,t,a,s,l){return y(),S(p,{class:"services",id:"services"},{default:d(()=>[i(p,{class:"container-service"},{default:d(()=>[i(p,{class:"title-container"},{default:d(()=>[Ca,Va]),_:1}),i(p,{class:"d-flex justify-center flex-wrap pb-3",color:"transparent"},{default:d(()=>[(y(!0),B(q,null,j(e.services,n=>(y(),S(ie,{color:"#dad9d6",class:"service",key:n.title,"max-width":"300",variant:"elevated",elevation:"1"},{default:d(()=>[i(se,{color:"#bc8c34",icon:n.icon,size:"large"},null,8,["icon"]),f("h3",null,$(n.title),1),f("p",null,$(n.description),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}const Pa=L(Ia,[["render",wa],["__scopeId","data-v-5a9f34ec"]]),F=e=>(z("data-v-a687b750"),e=e(),A(),e),Ea=F(()=>f("h2",null,"Proyectos",-1)),$a=F(()=>f("p",null,"Nuestros proyectos más recientes",-1)),ka=F(()=>f("a",{class:"button",href:"/proyectos"},"Todos los proyectos",-1)),Ta={__name:"Proyectos",setup(e){const r=W.defaults.baseURL,t=U([]),a=U(!0),s=async()=>{try{const l=await W.get("/api/projects?limit=6");l.status===200?t.value=l.data.data:(console.error("Respuesta no exitosa:",l),$router.push("/"))}catch(l){console.error("Error al hacer la solicitud GET:",l),$router.push("/")}finally{a.value=!1}};return Y(()=>{s()}),(l,n)=>(y(),S(p,{class:"projects",id:"projects"},{default:d(()=>[i(p,{class:"container-projects pb-lg-16"},{default:d(()=>[i(p,{class:"title-container"},{default:d(()=>[i(p,{class:"title-subcontainer"},{default:d(()=>[Ea,$a]),_:1}),i(p,{class:"title-subcontainer"},{default:d(()=>[ka]),_:1})]),_:1}),T(a)?(y(),S(p,{key:0,class:"skeleton d-flex flex-column-reverse flex-md-column",color:"#f5f1f1"},{default:d(()=>[(y(),B(q,null,j(2,o=>i(Re,{class:oe([o===1?"pt-md-6":"","pb-md-6"])},{default:d(()=>[(y(),B(q,null,j(2,g=>i(De,{cols:"12",md:"6"},{default:d(()=>[i(He,{height:o==1?510:350,type:"image, article, chip",color:"#f5f1f1"},null,8,["height"])]),_:2},1024)),64))]),_:2},1032,["class"])),64))]),_:1})):(y(),S(p,{key:1,class:"d-flex flex-wrap justify-center justify-lg-space-between ga-8 pb-5",color:"transparent"},{default:d(()=>[(y(!0),B(q,null,j(T(t),o=>(y(),S(ie,{href:"/proyecto/"+o.slug},{default:d(()=>[i(Me,{src:`${T(r)}${o.imageUrl}`,class:"align-end",gradient:"to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)",width:"400px",height:"400px",cover:""},{default:d(()=>[i(Ae,{class:"text-white"},{default:d(()=>[V($(o.title),1)]),_:2},1024),i(Ge,{class:"text-white mb-4"},{default:d(()=>[V($(o.service),1)]),_:2},1024)]),_:2},1032,["src"])]),_:2},1032,["href"]))),256))]),_:1}))]),_:1})]),_:1}))}},Ba=L(Ta,[["__scopeId","data-v-a687b750"]]),Ra={__name:"index",setup(e){return(r,t)=>(y(),S(p,null,{default:d(()=>[i(Qe),i(na),i(Pa),i(Sa),i(Ba),i(je),i(Ne)]),_:1}))}};export{Ra as default};
