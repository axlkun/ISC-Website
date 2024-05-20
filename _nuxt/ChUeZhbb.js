import{a3 as _,ao as Ve,a9 as Le,a0 as V,g as Te,a5 as ue,a6 as B,z as s,aq as Ee,Q as b,ar as W,c as u,M as q,as as xe,O as te,ad as P,ai as K,at as Pe,a1 as Q,a2 as U,a4 as G,ak as J,au as Ie,ag as F,X as Ae,av as Be,aw as Re,ae,ax as h,a8 as $e,ay as Ne,V as ne,R as De,az as ie,Y as ze,aA as Oe,aB as se,aC as He,ah as Me,aD as Xe,aj as qe,ab as Fe,af as Ye}from"./tyERN7c-.js";import{V as de,u as je}from"./M6R3e8Nf.js";import{a as ce,b as ve,m as We,c as Ke,u as Qe,d as Ue}from"./B9oFmR4t.js";function Z(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return _()({name:t??Ve(Le(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...V()},setup(n,l){let{slots:i}=l;return()=>{var o;return Te(n.tag,{class:[e,n.class],style:n.style},(o=i.default)==null?void 0:o.call(i))}}})}const Ge=_()({name:"VCardActions",props:V(),setup(e,a){let{slots:t}=a;return ue({VBtn:{slim:!0,variant:"text"}}),B(()=>{var n;return s("div",{class:["v-card-actions",e.class],style:e.style},[(n=t.default)==null?void 0:n.call(t)])}),{}}}),Je=Z("v-card-subtitle"),Ze=Z("v-card-title"),et=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),N=_(!1)({name:"VDefaultsProvider",props:et(),setup(e,a){let{slots:t}=a;const{defaults:n,disabled:l,reset:i,root:o,scoped:r}=Ee(e);return ue(n,{reset:i,root:o,scoped:r,disabled:l}),()=>{var d;return(d=t.default)==null?void 0:d.call(t)}}}),tt=[null,"default","comfortable","compact"],ee=b({density:{type:String,default:"default",validator:e=>tt.includes(e)}},"density");function me(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{densityClasses:u(()=>`${a}--density-${e.density}`)}}const at=["elevated","flat","tonal","outlined","text","plain"];function fe(e,a){return s(q,null,[e&&s("span",{key:"overlay",class:`${a}__overlay`},null),s("span",{key:"underlay",class:`${a}__underlay`},null)])}const ge=b({color:String,variant:{type:String,default:"elevated",validator:e=>at.includes(e)}},"variant");function pe(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();const t=u(()=>{const{variant:i}=te(e);return`${a}--variant-${i}`}),{colorClasses:n,colorStyles:l}=xe(u(()=>{const{variant:i,color:o}=te(e);return{[["elevated","flat"].includes(i)?"background":"text"]:o}}));return{colorClasses:n,colorStyles:l,variantClasses:t}}const nt=b({start:Boolean,end:Boolean,icon:P,image:String,text:String,...V(),...ee(),...K(),...Pe(),...Q(),...U(),...ge({variant:"flat"})},"VAvatar"),le=_()({name:"VAvatar",props:nt(),setup(e,a){let{slots:t}=a;const{themeClasses:n}=G(e),{colorClasses:l,colorStyles:i,variantClasses:o}=pe(e),{densityClasses:r}=me(e),{roundedClasses:d}=J(e),{sizeClasses:v,sizeStyles:c}=Ie(e);return B(()=>s(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,l.value,r.value,d.value,v.value,o.value,e.class],style:[i.value,c.value,e.style]},{default:()=>[t.default?s(N,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?s(de,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?s(F,{key:"icon",icon:e.icon},null):e.text,fe(!1,"v-avatar")]})),{}}}),it=b({appendAvatar:String,appendIcon:P,prependAvatar:String,prependIcon:P,subtitle:[String,Number],title:[String,Number],...V(),...ee()},"VCardItem"),st=_()({name:"VCardItem",props:it(),setup(e,a){let{slots:t}=a;return B(()=>{var v;const n=!!(e.prependAvatar||e.prependIcon),l=!!(n||t.prepend),i=!!(e.appendAvatar||e.appendIcon),o=!!(i||t.append),r=!!(e.title!=null||t.title),d=!!(e.subtitle!=null||t.subtitle);return s("div",{class:["v-card-item",e.class],style:e.style},[l&&s("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?s(N,{key:"prepend-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):s(q,null,[e.prependAvatar&&s(le,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&s(F,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),s("div",{class:"v-card-item__content"},[r&&s(Ze,{key:"title"},{default:()=>{var c;return[((c=t.title)==null?void 0:c.call(t))??e.title]}}),d&&s(Je,{key:"subtitle"},{default:()=>{var c;return[((c=t.subtitle)==null?void 0:c.call(t))??e.subtitle]}}),(v=t.default)==null?void 0:v.call(t)]),o&&s("div",{key:"append",class:"v-card-item__append"},[t.append?s(N,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):s(q,null,[e.appendIcon&&s(F,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&s(le,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),lt=Z("v-card-text"),rt=b({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...V(),...ce({location:"top"}),...K(),...Q(),...U()},"VProgressLinear"),ot=_()({name:"VProgressLinear",props:rt(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const n=Ae(e,"modelValue"),{isRtl:l,rtlClasses:i}=Be(),{themeClasses:o}=G(e),{locationStyles:r}=ve(e),{textColorClasses:d,textColorStyles:v}=Re(e,"color"),{backgroundColorClasses:c,backgroundColorStyles:m}=ae(u(()=>e.bgColor||e.color)),{backgroundColorClasses:f,backgroundColorStyles:g}=ae(e,"color"),{roundedClasses:z}=J(e),{intersectionRef:L,isIntersecting:k}=je(),T=u(()=>parseInt(e.max,10)),y=u(()=>parseInt(e.height,10)),E=u(()=>parseFloat(e.bufferValue)/T.value*100),x=u(()=>parseFloat(n.value)/T.value*100),S=u(()=>l.value!==e.reverse),O=u(()=>e.indeterminate?"fade-transition":"slide-x-transition"),R=u(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function H(C){if(!L.value)return;const{left:M,right:X,width:w}=L.value.getBoundingClientRect(),$=S.value?w-C.clientX+(X-w):C.clientX-M;n.value=Math.round($/w*T.value)}return B(()=>s(e.tag,{ref:L,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&k.value,"v-progress-linear--reverse":S.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},z.value,o.value,i.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?h(y.value):0,"--v-progress-linear-height":h(y.value),...r.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:x.value,onClick:e.clickable&&H},{default:()=>[e.stream&&s("div",{key:"stream",class:["v-progress-linear__stream",d.value],style:{...v.value,[S.value?"left":"right"]:h(-y.value),borderTop:`${h(y.value/2)} dotted`,opacity:R.value,top:`calc(50% - ${h(y.value/4)})`,width:h(100-E.value,"%"),"--v-progress-linear-stream-to":h(y.value*(S.value?1:-1))}},null),s("div",{class:["v-progress-linear__background",c.value],style:[m.value,{opacity:R.value,width:h(e.stream?E.value:100,"%")}]},null),s($e,{name:O.value},{default:()=>[e.indeterminate?s("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(C=>s("div",{key:C,class:["v-progress-linear__indeterminate",C,f.value],style:g.value},null))]):s("div",{class:["v-progress-linear__determinate",f.value],style:[g.value,{width:h(x.value,"%")}]},null)]}),t.default&&s("div",{class:"v-progress-linear__content"},[t.default({value:x.value,buffer:E.value})])]})),{}}}),ut=b({loading:[Boolean,String]},"loader");function dt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{loaderClasses:u(()=>({[`${a}--loading`]:e.loading}))}}function ct(e,a){var n;let{slots:t}=a;return s("div",{class:`${e.name}__loader`},[((n=t.default)==null?void 0:n.call(t,{color:e.color,isActive:e.active}))||s(ot,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}function vt(){const e=De("useRoute");return u(()=>{var a;return(a=e==null?void 0:e.proxy)==null?void 0:a.$route})}function mt(e,a){var v,c;const t=Ne("RouterLink"),n=u(()=>!!(e.href||e.to)),l=u(()=>(n==null?void 0:n.value)||ie(a,"click")||ie(e,"click"));if(typeof t=="string"||!("useLink"in t))return{isLink:n,isClickable:l,href:ne(e,"href")};const i=u(()=>({...e,to:ne(()=>e.to||{})})),o=t.useLink(i.value),r=u(()=>e.to?o:void 0),d=vt();return{isLink:n,isClickable:l,route:(v=r.value)==null?void 0:v.route,navigate:(c=r.value)==null?void 0:c.navigate,isActive:u(()=>{var m,f,g;return r.value?e.exact?d.value?((g=r.value.isExactActive)==null?void 0:g.value)&&ze(r.value.route.value.query,d.value.query):((f=r.value.isExactActive)==null?void 0:f.value)??!1:((m=r.value.isActive)==null?void 0:m.value)??!1:!1}),href:u(()=>{var m;return e.to?(m=r.value)==null?void 0:m.route.value.href:e.href})}}const ft=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router"),Y=Symbol("rippleStop"),gt=80;function re(e,a){e.style.transform=a,e.style.webkitTransform=a}function j(e){return e.constructor.name==="TouchEvent"}function ye(e){return e.constructor.name==="KeyboardEvent"}const pt=function(e,a){var m;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,l=0;if(!ye(e)){const f=a.getBoundingClientRect(),g=j(e)?e.touches[e.touches.length-1]:e;n=g.clientX-f.left,l=g.clientY-f.top}let i=0,o=.3;(m=a._ripple)!=null&&m.circle?(o=.15,i=a.clientWidth/2,i=t.center?i:i+Math.sqrt((n-i)**2+(l-i)**2)/4):i=Math.sqrt(a.clientWidth**2+a.clientHeight**2)/2;const r=`${(a.clientWidth-i*2)/2}px`,d=`${(a.clientHeight-i*2)/2}px`,v=t.center?r:`${n-i}px`,c=t.center?d:`${l-i}px`;return{radius:i,scale:o,x:v,y:c,centerX:r,centerY:d}},D={show(e,a){var g;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((g=a==null?void 0:a._ripple)!=null&&g.enabled))return;const n=document.createElement("span"),l=document.createElement("span");n.appendChild(l),n.className="v-ripple__container",t.class&&(n.className+=` ${t.class}`);const{radius:i,scale:o,x:r,y:d,centerX:v,centerY:c}=pt(e,a,t),m=`${i*2}px`;l.className="v-ripple__animation",l.style.width=m,l.style.height=m,a.appendChild(n);const f=window.getComputedStyle(a);f&&f.position==="static"&&(a.style.position="relative",a.dataset.previousPosition="static"),l.classList.add("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--visible"),re(l,`translate(${r}, ${d}) scale3d(${o},${o},${o})`),l.dataset.activated=String(performance.now()),setTimeout(()=>{l.classList.remove("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--in"),re(l,`translate(${v}, ${c}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const t=a[a.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const n=performance.now()-Number(t.dataset.activated),l=Math.max(250-n,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=t.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(t.parentNode)},300)},l)}};function he(e){return typeof e>"u"||!!e}function I(e){const a={},t=e.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||e[Y])){if(e[Y]=!0,j(e))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(a.center=t._ripple.centered||ye(e),t._ripple.class&&(a.class=t._ripple.class),j(e)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{D.show(e,t,a)},t._ripple.showTimer=window.setTimeout(()=>{var n;(n=t==null?void 0:t._ripple)!=null&&n.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},gt)}else D.show(e,t,a)}}function oe(e){e[Y]=!0}function p(e){const a=e.currentTarget;if(a!=null&&a._ripple){if(window.clearTimeout(a._ripple.showTimer),e.type==="touchend"&&a._ripple.showTimerCommit){a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null,a._ripple.showTimer=window.setTimeout(()=>{p(e)});return}window.setTimeout(()=>{a._ripple&&(a._ripple.touched=!1)}),D.hide(a)}}function be(e){const a=e.currentTarget;a!=null&&a._ripple&&(a._ripple.showTimerCommit&&(a._ripple.showTimerCommit=null),window.clearTimeout(a._ripple.showTimer))}let A=!1;function Ce(e){!A&&(e.keyCode===se.enter||e.keyCode===se.space)&&(A=!0,I(e))}function _e(e){A=!1,p(e)}function ke(e){A&&(A=!1,p(e))}function Se(e,a,t){const{value:n,modifiers:l}=a,i=he(n);if(i||D.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=l.center,e._ripple.circle=l.circle,Oe(n)&&n.class&&(e._ripple.class=n.class),i&&!t){if(l.stop){e.addEventListener("touchstart",oe,{passive:!0}),e.addEventListener("mousedown",oe);return}e.addEventListener("touchstart",I,{passive:!0}),e.addEventListener("touchend",p,{passive:!0}),e.addEventListener("touchmove",be,{passive:!0}),e.addEventListener("touchcancel",p),e.addEventListener("mousedown",I),e.addEventListener("mouseup",p),e.addEventListener("mouseleave",p),e.addEventListener("keydown",Ce),e.addEventListener("keyup",_e),e.addEventListener("blur",ke),e.addEventListener("dragstart",p,{passive:!0})}else!i&&t&&we(e)}function we(e){e.removeEventListener("mousedown",I),e.removeEventListener("touchstart",I),e.removeEventListener("touchend",p),e.removeEventListener("touchmove",be),e.removeEventListener("touchcancel",p),e.removeEventListener("mouseup",p),e.removeEventListener("mouseleave",p),e.removeEventListener("keydown",Ce),e.removeEventListener("keyup",_e),e.removeEventListener("dragstart",p),e.removeEventListener("blur",ke)}function yt(e,a){Se(e,a,!1)}function ht(e){delete e._ripple,we(e)}function bt(e,a){if(a.value===a.oldValue)return;const t=he(a.oldValue);Se(e,a,t)}const Ct={mounted:yt,unmounted:ht,updated:bt},_t=b({appendAvatar:String,appendIcon:P,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:P,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...He(),...V(),...ee(),...We(),...Me(),...ut(),...ce(),...Ke(),...K(),...ft(),...Q(),...U(),...ge({variant:"elevated"})},"VCard"),Vt=_()({name:"VCard",directives:{Ripple:Ct},props:_t(),setup(e,a){let{attrs:t,slots:n}=a;const{themeClasses:l}=G(e),{borderClasses:i}=Xe(e),{colorClasses:o,colorStyles:r,variantClasses:d}=pe(e),{densityClasses:v}=me(e),{dimensionStyles:c}=Qe(e),{elevationClasses:m}=qe(e),{loaderClasses:f}=dt(e),{locationStyles:g}=ve(e),{positionClasses:z}=Ue(e),{roundedClasses:L}=J(e),k=mt(e,t),T=u(()=>e.link!==!1&&k.isLink.value),y=u(()=>!e.disabled&&e.link!==!1&&(e.link||k.isClickable.value));return B(()=>{const E=T.value?"a":e.tag,x=!!(n.title||e.title!=null),S=!!(n.subtitle||e.subtitle!=null),O=x||S,R=!!(n.append||e.appendAvatar||e.appendIcon),H=!!(n.prepend||e.prependAvatar||e.prependIcon),C=!!(n.image||e.image),M=O||H||R,X=!!(n.text||e.text!=null);return Fe(s(E,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":y.value},l.value,i.value,o.value,v.value,m.value,f.value,z.value,L.value,d.value,e.class],style:[r.value,c.value,g.value,e.style],href:k.href.value,onClick:y.value&&k.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var w;return[C&&s("div",{key:"image",class:"v-card__image"},[n.image?s(N,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):s(de,{key:"image-img",cover:!0,src:e.image},null)]),s(ct,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:n.loader}),M&&s(st,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:n.item,prepend:n.prepend,title:n.title,subtitle:n.subtitle,append:n.append}),X&&s(lt,{key:"text"},{default:()=>{var $;return[(($=n.text)==null?void 0:$.call(n))??e.text]}}),(w=n.default)==null?void 0:w.call(n),n.actions&&s(Ge,null,{default:n.actions}),fe(y.value,"v-card")]}}),[[Ye("ripple"),y.value&&e.ripple]])}),{}}});export{Ct as R,Vt as V,Ze as a,Je as b};
