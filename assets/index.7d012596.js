var jt=Object.defineProperty;var Ht=(C,g,h)=>g in C?jt(C,g,{enumerable:!0,configurable:!0,writable:!0,value:h}):C[g]=h;var _=(C,g,h)=>(Ht(C,typeof g!="symbol"?g+"":g,h),h);import{A as Tt,a as st,C as dt,c as u,g as Ft,p as rt,S as Kt,d as Mt,u as ut}from"./index.d57021e8.js";import{i as Ut}from"./datatable.4b22066f.js";import{B as It}from"./button.d257158a.js";/* empty css                 */import"./jquery.4c77f39d.js";const Vt=(C,g)=>({url:Tt+"/portal/academic-activities",table:[{title:'<div class="form-check"><input class="form-check-input" type="checkbox" id="dt-checkbox" /></div>',data:null,name:"id",searchable:!1,orderable:!1,width:"5%",sClass:"text-center",mRender:(h,k,N,O)=>`
                    <div class="form-check">
                        <input class="form-check-input dt-checkbox" type="checkbox" value="${N.hashid}">
                    </div>`},{title:"No",data:null,name:null,searchable:!1,orderable:!1,width:"5%",mRender:(h,k,N,O)=>O.row+O.settings._iDisplayStart+1},{title:"Nama Kegiatan Akademik",data:"name",name:"name"},{title:"Warna",data:"color",name:"color",mRender(h){return`<div class="d-flex">
                            <span style="height: 22px; width: 22px; border-radius: 20px; background-color: ${h}; margin-right: 5px;" class="d-inline-block"></span>
                            <span class="d-inline-block">${h}</span>
                          </div>`}},{title:"",data:"hashid",name:"id",searchable:!1,orderable:!1,sClass:"text-center nowrap",mRender:(h,k,N,O)=>{var v="";return st().includes("update-academic-activities")&&(v+=`<button type="button" class="btn btn-outline-primary btn-sm mx-1" data-toggle="edit" data-id="${h}"><i class="bx bx-edit-alt"></i></button>`),st().includes("delete-academic-activities")&&(v+=`<button type="button" class="btn btn-outline-danger btn-sm mx-1" data-toggle="delete" data-id="${h}"><i class="bx bx-trash"></i></button>`),v}}],callback:()=>{$('button[data-toggle="edit"]').unbind().on("click",function(h){h.preventDefault(),C($(this).data("id"))}),$('button[data-toggle="delete"]').unbind().on("click",function(h){h.preventDefault(),g($(this).data("id"))})}});var zt={exports:{}};/*! Pickr 1.9.0 MIT | https://github.com/Simonwep/pickr */(function(C,g){(function(h,k){C.exports=k()})(self,()=>(()=>{var h={d:(l,t)=>{for(var e in t)h.o(t,e)&&!h.o(l,e)&&Object.defineProperty(l,e,{enumerable:!0,get:t[e]})},o:(l,t)=>Object.prototype.hasOwnProperty.call(l,t),r:l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})}},k={};h.d(k,{default:()=>S});var N={};function O(l,t,e,a,s={}){t instanceof HTMLCollection||t instanceof NodeList?t=Array.from(t):Array.isArray(t)||(t=[t]),Array.isArray(e)||(e=[e]);for(const i of t)for(const o of e)i[l](o,a,{capture:!1,...s});return Array.prototype.slice.call(arguments,1)}h.r(N),h.d(N,{adjustableInputNumbers:()=>J,createElementFromString:()=>U,createFromTemplate:()=>Y,eventPath:()=>q,off:()=>x,on:()=>v,resolveElement:()=>Z});const v=O.bind(null,"addEventListener"),x=O.bind(null,"removeEventListener");function U(l){const t=document.createElement("div");return t.innerHTML=l.trim(),t.firstElementChild}function Y(l){const t=(a,s)=>{const i=a.getAttribute(s);return a.removeAttribute(s),i},e=(a,s={})=>{const i=t(a,":obj"),o=t(a,":ref"),r=i?s[i]={}:s;o&&(s[o]=a);for(const n of Array.from(a.children)){const c=t(n,":arr"),p=e(n,c?{}:r);c&&(r[c]||(r[c]=[])).push(Object.keys(p).length?p:n)}return s};return e(U(l))}function q(l){let t=l.path||l.composedPath&&l.composedPath();if(t)return t;let e=l.target.parentElement;for(t=[l.target,e];e=e.parentElement;)t.push(e);return t.push(document,window),t}function Z(l){return l instanceof Element?l:typeof l=="string"?l.split(/>>/g).reduce((t,e,a,s)=>(t=t.querySelector(e),a<s.length-1?t.shadowRoot:t),document):null}function J(l,t=e=>e){function e(a){const s=[.001,.01,.1][Number(a.shiftKey||2*a.ctrlKey)]*(a.deltaY<0?1:-1);let i=0,o=l.selectionStart;l.value=l.value.replace(/[\d.]+/g,(r,n)=>n<=o&&n+r.length>=o?(o=n,t(Number(r),s,i)):(i++,r)),l.focus(),l.setSelectionRange(o,o),a.preventDefault(),l.dispatchEvent(new Event("input"))}v(l,"focus",()=>v(window,"wheel",e,{passive:!1})),v(l,"blur",()=>x(window,"wheel",e))}const{min:E,max:mt,floor:bt,round:ft}=Math;function I(l,t,e){t/=100,e/=100;const a=bt(l=l/360*6),s=l-a,i=e*(1-t),o=e*(1-s*t),r=e*(1-(1-s)*t),n=a%6;return[255*[e,o,i,i,r,e][n],255*[r,e,e,o,i,i][n],255*[i,i,r,e,e,o][n]]}function vt(l,t,e){const a=(2-(t/=100))*(e/=100)/2;return a!==0&&(t=a===1?0:a<.5?t*e/(2*a):t*e/(2-2*a)),[l,100*t,100*a]}function V(l,t,e){const a=E(l/=255,t/=255,e/=255),s=mt(l,t,e),i=s-a;let o,r;if(i===0)o=r=0;else{r=i/s;const n=((s-l)/6+i/2)/i,c=((s-t)/6+i/2)/i,p=((s-e)/6+i/2)/i;l===s?o=p-c:t===s?o=1/3+n-p:e===s&&(o=2/3+c-n),o<0?o+=1:o>1&&(o-=1)}return[360*o,100*r,100*s]}function gt(l,t,e,a){return t/=100,e/=100,[...V(255*(1-E(1,(l/=100)*(1-(a/=100))+a)),255*(1-E(1,t*(1-a)+a)),255*(1-E(1,e*(1-a)+a)))]}function yt(l,t,e){t/=100;const a=2*(t*=(e/=100)<.5?e:1-e)/(e+t)*100,s=100*(e+t);return[l,isNaN(a)?0:a,s]}function _t(l){return V(...l.match(/.{2}/g).map(t=>parseInt(t,16)))}function wt(l){l=l.match(/^[a-zA-Z]+$/)?function(s){if(s.toLowerCase()==="black")return"#000";const i=document.createElement("canvas").getContext("2d");return i.fillStyle=s,i.fillStyle==="#000"?null:i.fillStyle}(l):l;const t={cmyk:/^cmyk\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)/i,rgba:/^rgba?\D+([\d.]+)(%?)\D+([\d.]+)(%?)\D+([\d.]+)(%?)\D*?(([\d.]+)(%?)|$)/i,hsla:/^hsla?\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)\D*?(([\d.]+)(%?)|$)/i,hsva:/^hsva?\D+([\d.]+)\D+([\d.]+)\D+([\d.]+)\D*?(([\d.]+)(%?)|$)/i,hexa:/^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i},e=s=>s.map(i=>/^(|\d+)\.\d+|\d+$/.test(i)?Number(i):void 0);let a;t:for(const s in t)if(a=t[s].exec(l))switch(s){case"cmyk":{const[,i,o,r,n]=e(a);if(i>100||o>100||r>100||n>100)break t;return{values:gt(i,o,r,n),type:s}}case"rgba":{let[,i,,o,,r,,,n]=e(a);if(i=a[2]==="%"?i/100*255:i,o=a[4]==="%"?o/100*255:o,r=a[6]==="%"?r/100*255:r,n=a[9]==="%"?n/100:n,i>255||o>255||r>255||n<0||n>1)break t;return{values:[...V(i,o,r),n],a:n,type:s}}case"hexa":{let[,i]=a;i.length!==4&&i.length!==3||(i=i.split("").map(n=>n+n).join(""));const o=i.substring(0,6);let r=i.substring(6);return r=r?parseInt(r,16)/255:void 0,{values:[..._t(o),r],a:r,type:s}}case"hsla":{let[,i,o,r,,n]=e(a);if(n=a[6]==="%"?n/100:n,i>360||o>100||r>100||n<0||n>1)break t;return{values:[...yt(i,o,r),n],a:n,type:s}}case"hsva":{let[,i,o,r,,n]=e(a);if(n=a[6]==="%"?n/100:n,i>360||o>100||r>100||n<0||n>1)break t;return{values:[i,o,r,n],a:n,type:s}}}return{values:null,type:null}}function P(l=0,t=0,e=0,a=1){const s=(o,r)=>(n=-1)=>r(~n?o.map(c=>Number(c.toFixed(n))):o),i={h:l,s:t,v:e,a,toHSVA(){const o=[i.h,i.s,i.v,i.a];return o.toString=s(o,r=>`hsva(${r[0]}, ${r[1]}%, ${r[2]}%, ${i.a})`),o},toHSLA(){const o=[...vt(i.h,i.s,i.v),i.a];return o.toString=s(o,r=>`hsla(${r[0]}, ${r[1]}%, ${r[2]}%, ${i.a})`),o},toRGBA(){const o=[...I(i.h,i.s,i.v),i.a];return o.toString=s(o,r=>`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${i.a})`),o},toCMYK(){const o=function(r,n,c){const p=I(r,n,c),d=p[0]/255,b=p[1]/255,m=p[2]/255,f=E(1-d,1-b,1-m);return[100*(f===1?0:(1-d-f)/(1-f)),100*(f===1?0:(1-b-f)/(1-f)),100*(f===1?0:(1-m-f)/(1-f)),100*f]}(i.h,i.s,i.v);return o.toString=s(o,r=>`cmyk(${r[0]}%, ${r[1]}%, ${r[2]}%, ${r[3]}%)`),o},toHEXA(){const o=function(n,c,p){return I(n,c,p).map(d=>ft(d).toString(16).padStart(2,"0"))}(i.h,i.s,i.v),r=i.a>=1?"":Number((255*i.a).toFixed(0)).toString(16).toUpperCase().padStart(2,"0");return r&&o.push(r),o.toString=()=>`#${o.join("").toUpperCase()}`,o},clone:()=>P(i.h,i.s,i.v,i.a)};return i}const H=l=>Math.max(Math.min(l,1),0);function z(l){const t={options:Object.assign({lock:null,onchange:()=>0,onstop:()=>0},l),_keyboard(i){const{options:o}=t,{type:r,key:n}=i;if(document.activeElement===o.wrapper){const{lock:c}=t.options,p=n==="ArrowUp",d=n==="ArrowRight",b=n==="ArrowDown",m=n==="ArrowLeft";if(r==="keydown"&&(p||d||b||m)){let f=0,w=0;c==="v"?f=p||d?1:-1:c==="h"?f=p||d?-1:1:(w=p?-1:b?1:0,f=m?-1:d?1:0),t.update(H(t.cache.x+.01*f),H(t.cache.y+.01*w)),i.preventDefault()}else n.startsWith("Arrow")&&(t.options.onstop(),i.preventDefault())}},_tapstart(i){v(document,["mouseup","touchend","touchcancel"],t._tapstop),v(document,["mousemove","touchmove"],t._tapmove),i.cancelable&&i.preventDefault(),t._tapmove(i)},_tapmove(i){const{options:o,cache:r}=t,{lock:n,element:c,wrapper:p}=o,d=p.getBoundingClientRect();let b=0,m=0;if(i){const B=i&&i.touches&&i.touches[0];b=i?(B||i).clientX:0,m=i?(B||i).clientY:0,b<d.left?b=d.left:b>d.left+d.width&&(b=d.left+d.width),m<d.top?m=d.top:m>d.top+d.height&&(m=d.top+d.height),b-=d.left,m-=d.top}else r&&(b=r.x*d.width,m=r.y*d.height);n!=="h"&&(c.style.left=`calc(${b/d.width*100}% - ${c.offsetWidth/2}px)`),n!=="v"&&(c.style.top=`calc(${m/d.height*100}% - ${c.offsetHeight/2}px)`),t.cache={x:b/d.width,y:m/d.height};const f=H(b/d.width),w=H(m/d.height);switch(n){case"v":return o.onchange(f);case"h":return o.onchange(w);default:return o.onchange(f,w)}},_tapstop(){t.options.onstop(),x(document,["mouseup","touchend","touchcancel"],t._tapstop),x(document,["mousemove","touchmove"],t._tapmove)},trigger(){t._tapmove()},update(i=0,o=0){const{left:r,top:n,width:c,height:p}=t.options.wrapper.getBoundingClientRect();t.options.lock==="h"&&(o=i),t._tapmove({clientX:r+c*i,clientY:n+p*o})},destroy(){const{options:i,_tapstart:o,_keyboard:r}=t;x(document,["keydown","keyup"],r),x([i.wrapper,i.element],"mousedown",o),x([i.wrapper,i.element],"touchstart",o,{passive:!1})}},{options:e,_tapstart:a,_keyboard:s}=t;return v([e.wrapper,e.element],"mousedown",a),v([e.wrapper,e.element],"touchstart",a,{passive:!1}),v(document,["keydown","keyup"],s),t}function kt(l={}){l=Object.assign({onchange:()=>0,className:"",elements:[]},l);const t=v(l.elements,"click",e=>{l.elements.forEach(a=>a.classList[e.target===a?"add":"remove"](l.className)),l.onchange(e),e.stopPropagation()});return{destroy:()=>x(...t)}}const $t={variantFlipOrder:{start:"sme",middle:"mse",end:"ems"},positionFlipOrder:{top:"tbrl",right:"rltb",bottom:"btrl",left:"lrbt"},position:"bottom",margin:8,padding:0},At=(l,t,e)=>{const a=typeof l!="object"||l instanceof HTMLElement?{reference:l,popper:t,...e}:l;return{update(s=a){const{reference:i,popper:o}=Object.assign(a,s);if(!o||!i)throw new Error("Popper- or reference-element missing.");return((r,n,c)=>{const{container:p,arrow:d,margin:b,padding:m,position:f,variantFlipOrder:w,positionFlipOrder:B}={container:document.documentElement.getBoundingClientRect(),...$t,...c},{left:W,top:X}=n.style;n.style.left="0",n.style.top="0";const y=r.getBoundingClientRect(),A=n.getBoundingClientRect(),Ct={t:y.top-A.height-b,b:y.bottom+b,r:y.right+b,l:y.left-A.width-b},xt={vs:y.left,vm:y.left+y.width/2-A.width/2,ve:y.left+y.width-A.width,hs:y.top,hm:y.bottom-y.height/2-A.height/2,he:y.bottom-A.height},[St,Nt="middle"]=f.split("-"),Ot=B[St],Lt=w[Nt],{top:Q,left:tt,bottom:et,right:it}=p;for(const T of Ot){const D=T==="t"||T==="b";let L=Ct[T];const[F,K]=D?["top","left"]:["left","top"],[at,G]=D?[A.height,A.width]:[A.width,A.height],[Bt,Dt]=D?[et,it]:[it,et],[Et,Pt]=D?[Q,tt]:[tt,Q];if(!(L<Et||L+at+m>Bt))for(const ot of Lt){let j=xt[(D?"v":"h")+ot];if(!(j<Pt||j+G+m>Dt)){if(j-=A[K],L-=A[F],n.style[K]=`${j}px`,n.style[F]=`${L}px`,d){const nt=D?y.width/2:y.height/2,Rt=2*nt<G?y[K]+nt:j+G/2;L<y[F]&&(L+=at),d.style[K]=`${Rt}px`,d.style[F]=`${L}px`}return T+ot}}}return n.style.left=W,n.style.top=X,null})(i,o,a)}}},R=class{constructor(t){_(this,"_initializingActive",!0);_(this,"_recalc",!0);_(this,"_nanopop",null);_(this,"_root",null);_(this,"_color",P());_(this,"_lastColor",P());_(this,"_swatchColors",[]);_(this,"_setupAnimationFrame",null);_(this,"_eventListener",{init:[],save:[],hide:[],show:[],clear:[],change:[],changestop:[],cancel:[],swatchselect:[]});this.options=t=Object.assign({...R.DEFAULT_OPTIONS},t);const{swatches:e,components:a,theme:s,sliders:i,lockOpacity:o,padding:r}=t;["nano","monolith"].includes(s)&&!i&&(t.sliders="h"),a.interaction||(a.interaction={});const{preview:n,opacity:c,hue:p,palette:d}=a;a.opacity=!o&&c,a.palette=d||n||c||p,this._preBuild(),this._buildComponents(),this._bindEvents(),this._finalBuild(),e&&e.length&&e.forEach(w=>this.addSwatch(w));const{button:b,app:m}=this._root;this._nanopop=At(b,m,{margin:r}),b.setAttribute("role","button"),b.setAttribute("aria-label",this._t("btn:toggle"));const f=this;this._setupAnimationFrame=requestAnimationFrame(function w(){if(!m.offsetWidth)return requestAnimationFrame(w);f.setColor(t.default),f._rePositioningPicker(),t.defaultRepresentation&&(f._representation=t.defaultRepresentation,f.setColorRepresentation(f._representation)),t.showAlways&&f.show(),f._initializingActive=!1,f._emit("init")})}_preBuild(){const{options:t}=this;for(const e of["el","container"])t[e]=Z(t[e]);this._root=(e=>{const{components:a,useAsButton:s,inline:i,appClass:o,theme:r,lockOpacity:n}=e.options,c=m=>m?"":'style="display:none" hidden',p=m=>e._t(m),d=Y(`
      <div :ref="root" class="pickr">

        ${s?"":'<button type="button" :ref="button" class="pcr-button"></button>'}

        <div :ref="app" class="pcr-app ${o||""}" data-theme="${r}" ${i?'style="position: unset"':""} aria-label="${p("ui:dialog")}" role="window">
          <div class="pcr-selection" ${c(a.palette)}>
            <div :obj="preview" class="pcr-color-preview" ${c(a.preview)}>
              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="${p("btn:last-color")}"></button>
              <div :ref="currentColor" class="pcr-current-color"></div>
            </div>

            <div :obj="palette" class="pcr-color-palette">
              <div :ref="picker" class="pcr-picker"></div>
              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="${p("aria:palette")}" role="listbox"></div>
            </div>

            <div :obj="hue" class="pcr-color-chooser" ${c(a.hue)}>
              <div :ref="picker" class="pcr-picker"></div>
              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="${p("aria:hue")}" role="slider"></div>
            </div>

            <div :obj="opacity" class="pcr-color-opacity" ${c(a.opacity)}>
              <div :ref="picker" class="pcr-picker"></div>
              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="${p("aria:opacity")}" role="slider"></div>
            </div>
          </div>

          <div class="pcr-swatches ${a.palette?"":"pcr-last"}" :ref="swatches"></div>

          <div :obj="interaction" class="pcr-interaction" ${c(Object.keys(a.interaction).length)}>
            <input :ref="result" class="pcr-result" type="text" spellcheck="false" ${c(a.interaction.input)} aria-label="${p("aria:input")}">

            <input :arr="options" class="pcr-type" data-type="HEXA" value="${n?"HEX":"HEXA"}" type="button" ${c(a.interaction.hex)}>
            <input :arr="options" class="pcr-type" data-type="RGBA" value="${n?"RGB":"RGBA"}" type="button" ${c(a.interaction.rgba)}>
            <input :arr="options" class="pcr-type" data-type="HSLA" value="${n?"HSL":"HSLA"}" type="button" ${c(a.interaction.hsla)}>
            <input :arr="options" class="pcr-type" data-type="HSVA" value="${n?"HSV":"HSVA"}" type="button" ${c(a.interaction.hsva)}>
            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ${c(a.interaction.cmyk)}>

            <input :ref="save" class="pcr-save" value="${p("btn:save")}" type="button" ${c(a.interaction.save)} aria-label="${p("aria:btn:save")}">
            <input :ref="cancel" class="pcr-cancel" value="${p("btn:cancel")}" type="button" ${c(a.interaction.cancel)} aria-label="${p("aria:btn:cancel")}">
            <input :ref="clear" class="pcr-clear" value="${p("btn:clear")}" type="button" ${c(a.interaction.clear)} aria-label="${p("aria:btn:clear")}">
          </div>
        </div>
      </div>
    `),b=d.interaction;return b.options.find(m=>!m.hidden&&!m.classList.add("active")),b.type=()=>b.options.find(m=>m.classList.contains("active")),d})(this),t.useAsButton&&(this._root.button=t.el),t.container.appendChild(this._root.root)}_finalBuild(){const t=this.options,e=this._root;if(t.container.removeChild(e.root),t.inline){const a=t.el.parentElement;t.el.nextSibling?a.insertBefore(e.app,t.el.nextSibling):a.appendChild(e.app)}else t.container.appendChild(e.app);t.useAsButton?t.inline&&t.el.remove():t.el.parentNode.replaceChild(e.root,t.el),t.disabled&&this.disable(),t.comparison||(e.button.style.transition="none",t.useAsButton||(e.preview.lastColor.style.transition="none")),this.hide()}_buildComponents(){const t=this,e=this.options.components,a=(t.options.sliders||"v").repeat(2),[s,i]=a.match(/^[vh]+$/g)?a:[],o=()=>this._color||(this._color=this._lastColor.clone()),r={palette:z({element:t._root.palette.picker,wrapper:t._root.palette.palette,onstop:()=>t._emit("changestop","slider",t),onchange(n,c){if(!e.palette)return;const p=o(),{_root:d,options:b}=t,{lastColor:m,currentColor:f}=d.preview;t._recalc&&(p.s=100*n,p.v=100-100*c,p.v<0&&(p.v=0),t._updateOutput("slider"));const w=p.toRGBA().toString(0);this.element.style.background=w,this.wrapper.style.background=`
                        linear-gradient(to top, rgba(0, 0, 0, ${p.a}), transparent),
                        linear-gradient(to left, hsla(${p.h}, 100%, 50%, ${p.a}), rgba(255, 255, 255, ${p.a}))
                    `,b.comparison?b.useAsButton||t._lastColor||m.style.setProperty("--pcr-color",w):(d.button.style.setProperty("--pcr-color",w),d.button.classList.remove("clear"));const B=p.toHEXA().toString();for(const{el:W,color:X}of t._swatchColors)W.classList[B===X.toHEXA().toString()?"add":"remove"]("pcr-active");f.style.setProperty("--pcr-color",w)}}),hue:z({lock:i==="v"?"h":"v",element:t._root.hue.picker,wrapper:t._root.hue.slider,onstop:()=>t._emit("changestop","slider",t),onchange(n){if(!e.hue||!e.palette)return;const c=o();t._recalc&&(c.h=360*n),this.element.style.backgroundColor=`hsl(${c.h}, 100%, 50%)`,r.palette.trigger()}}),opacity:z({lock:s==="v"?"h":"v",element:t._root.opacity.picker,wrapper:t._root.opacity.slider,onstop:()=>t._emit("changestop","slider",t),onchange(n){if(!e.opacity||!e.palette)return;const c=o();t._recalc&&(c.a=Math.round(100*n)/100),this.element.style.background=`rgba(0, 0, 0, ${c.a})`,r.palette.trigger()}}),selectable:kt({elements:t._root.interaction.options,className:"active",onchange(n){t._representation=n.target.getAttribute("data-type").toUpperCase(),t._recalc&&t._updateOutput("swatch")}})};this._components=r}_bindEvents(){const{_root:t,options:e}=this,a=[v(t.interaction.clear,"click",()=>this._clearColor()),v([t.interaction.cancel,t.preview.lastColor],"click",()=>{this.setHSVA(...(this._lastColor||this._color).toHSVA(),!0),this._emit("cancel")}),v(t.interaction.save,"click",()=>{!this.applyColor()&&!e.showAlways&&this.hide()}),v(t.interaction.result,["keyup","input"],s=>{this.setColor(s.target.value,!0)&&!this._initializingActive&&(this._emit("change",this._color,"input",this),this._emit("changestop","input",this)),s.stopImmediatePropagation()}),v(t.interaction.result,["focus","blur"],s=>{this._recalc=s.type==="blur",this._recalc&&this._updateOutput(null)}),v([t.palette.palette,t.palette.picker,t.hue.slider,t.hue.picker,t.opacity.slider,t.opacity.picker],["mousedown","touchstart"],()=>this._recalc=!0,{passive:!0})];if(!e.showAlways){const s=e.closeWithKey;a.push(v(t.button,"click",()=>this.isOpen()?this.hide():this.show()),v(document,"keyup",i=>this.isOpen()&&(i.key===s||i.code===s)&&this.hide()),v(document,["touchstart","mousedown"],i=>{this.isOpen()&&!q(i).some(o=>o===t.app||o===t.button)&&this.hide()},{capture:!0}))}if(e.adjustableNumbers){const s={rgba:[255,255,255,1],hsva:[360,100,100,1],hsla:[360,100,100,1],cmyk:[100,100,100,100]};J(t.interaction.result,(i,o,r)=>{const n=s[this.getColorRepresentation().toLowerCase()];if(n){const c=n[r],p=i+(c>=100?1e3*o:o);return p<=0?0:Number((p<c?p:c).toPrecision(3))}return i})}if(e.autoReposition&&!e.inline){let s=null;const i=this;a.push(v(window,["scroll","resize"],()=>{i.isOpen()&&(e.closeOnScroll&&i.hide(),s===null?(s=setTimeout(()=>s=null,100),requestAnimationFrame(function o(){i._rePositioningPicker(),s!==null&&requestAnimationFrame(o)})):(clearTimeout(s),s=setTimeout(()=>s=null,100)))},{capture:!0}))}this._eventBindings=a}_rePositioningPicker(){const{options:t}=this;if(!t.inline&&!this._nanopop.update({container:document.body.getBoundingClientRect(),position:t.position})){const e=this._root.app,a=e.getBoundingClientRect();e.style.top=(window.innerHeight-a.height)/2+"px",e.style.left=(window.innerWidth-a.width)/2+"px"}}_updateOutput(t){const{_root:e,_color:a,options:s}=this;if(e.interaction.type()){const i=`to${e.interaction.type().getAttribute("data-type")}`;e.interaction.result.value=typeof a[i]=="function"?a[i]().toString(s.outputPrecision):""}!this._initializingActive&&this._recalc&&this._emit("change",a,t,this)}_clearColor(t=!1){const{_root:e,options:a}=this;a.useAsButton||e.button.style.setProperty("--pcr-color","rgba(0, 0, 0, 0.15)"),e.button.classList.add("clear"),a.showAlways||this.hide(),this._lastColor=null,this._initializingActive||t||(this._emit("save",null),this._emit("clear"))}_parseLocalColor(t){const{values:e,type:a,a:s}=wt(t),{lockOpacity:i}=this.options,o=s!==void 0&&s!==1;return e&&e.length===3&&(e[3]=void 0),{values:!e||i&&o?null:e,type:a}}_t(t){return this.options.i18n[t]||R.I18N_DEFAULTS[t]}_emit(t,...e){this._eventListener[t].forEach(a=>a(...e,this))}on(t,e){return this._eventListener[t].push(e),this}off(t,e){const a=this._eventListener[t]||[],s=a.indexOf(e);return~s&&a.splice(s,1),this}addSwatch(t){const{values:e}=this._parseLocalColor(t);if(e){const{_swatchColors:a,_root:s}=this,i=P(...e),o=U(`<button type="button" style="--pcr-color: ${i.toRGBA().toString(0)}" aria-label="${this._t("btn:swatch")}"/>`);return s.swatches.appendChild(o),a.push({el:o,color:i}),this._eventBindings.push(v(o,"click",()=>{this.setHSVA(...i.toHSVA(),!0),this._emit("swatchselect",i),this._emit("change",i,"swatch",this)})),!0}return!1}removeSwatch(t){const e=this._swatchColors[t];if(e){const{el:a}=e;return this._root.swatches.removeChild(a),this._swatchColors.splice(t,1),!0}return!1}applyColor(t=!1){const{preview:e,button:a}=this._root,s=this._color.toRGBA().toString(0);return e.lastColor.style.setProperty("--pcr-color",s),this.options.useAsButton||a.style.setProperty("--pcr-color",s),a.classList.remove("clear"),this._lastColor=this._color.clone(),this._initializingActive||t||this._emit("save",this._color),this}destroy(){cancelAnimationFrame(this._setupAnimationFrame),this._eventBindings.forEach(t=>x(...t)),Object.keys(this._components).forEach(t=>this._components[t].destroy())}destroyAndRemove(){this.destroy();const{root:t,app:e}=this._root;t.parentElement&&t.parentElement.removeChild(t),e.parentElement.removeChild(e),Object.keys(this).forEach(a=>this[a]=null)}hide(){return!!this.isOpen()&&(this._root.app.classList.remove("visible"),this._emit("hide"),!0)}show(){return!this.options.disabled&&!this.isOpen()&&(this._root.app.classList.add("visible"),this._rePositioningPicker(),this._emit("show",this._color),this)}isOpen(){return this._root.app.classList.contains("visible")}setHSVA(t=360,e=0,a=0,s=1,i=!1){const o=this._recalc;if(this._recalc=!1,t<0||t>360||e<0||e>100||a<0||a>100||s<0||s>1)return!1;this._color=P(t,e,a,s);const{hue:r,opacity:n,palette:c}=this._components;return r.update(t/360),n.update(s),c.update(e/100,1-a/100),i||this.applyColor(),o&&this._updateOutput(),this._recalc=o,!0}setColor(t,e=!1){if(t===null)return this._clearColor(e),!0;const{values:a,type:s}=this._parseLocalColor(t);if(a){const i=s.toUpperCase(),{options:o}=this._root.interaction,r=o.find(n=>n.getAttribute("data-type")===i);if(r&&!r.hidden)for(const n of o)n.classList[n===r?"add":"remove"]("active");return!!this.setHSVA(...a,e)&&this.setColorRepresentation(i)}return!1}setColorRepresentation(t){return t=t.toUpperCase(),!!this._root.interaction.options.find(e=>e.getAttribute("data-type").startsWith(t)&&!e.click())}getColorRepresentation(){return this._representation}getColor(){return this._color}getSelectedColor(){return this._lastColor}getRoot(){return this._root}disable(){return this.hide(),this.options.disabled=!0,this._root.button.classList.add("disabled"),this}enable(){return this.options.disabled=!1,this._root.button.classList.remove("disabled"),this}};let S=R;return _(S,"utils",N),_(S,"version","1.9.0"),_(S,"I18N_DEFAULTS",{"ui:dialog":"color picker dialog","btn:toggle":"toggle color picker dialog","btn:swatch":"color swatch","btn:last-color":"use previous color","btn:save":"Save","btn:cancel":"Cancel","btn:clear":"Clear","aria:btn:save":"save and close","aria:btn:cancel":"cancel and close","aria:btn:clear":"clear and close","aria:input":"color input field","aria:palette":"color selection area","aria:hue":"hue selection slider","aria:opacity":"selection slider"}),_(S,"DEFAULT_OPTIONS",{appClass:null,theme:"classic",useAsButton:!1,padding:8,disabled:!1,comparison:!0,closeOnScroll:!1,outputPrecision:0,lockOpacity:!1,autoReposition:!0,container:"body",components:{interaction:{}},i18n:{},swatches:null,inline:!1,sliders:null,default:"#42445a",defaultRepresentation:null,position:"bottom-middle",adjustableNumbers:!0,showAlways:!1,closeWithKey:"Escape"}),_(S,"create",t=>new R(t)),k=k.default})())})(zt);class ht extends dt{render(){return u("div",{className:"modal fade",id:"academic-activity-modal",role:"dialog"},u("div",{className:"modal-dialog",role:"document"},u("div",{className:"modal-content"},u("form",{onsubmit:this.props.onsubmit},u("div",{className:"modal-header bg-light pb-2"},u("h5",{className:"modal-title"},this.props.title)),u("div",{className:"modal-body"},u("div",{className:"mb-3"},u("label",{for:"name"},"Nama Kegiatan Akademik ",u("span",{className:"text-danger"},"*")),u("input",{type:"text",name:"name",className:"form-control",placeholder:"Nama Kegiatan Akademik",autocomplete:"off",id:"name"})),u("div",{className:"mb-3"},u("label",{for:"color"},"Warna ",u("span",{className:"text-danger"},"*")),u("input",{type:"color",name:"color",id:"color",className:"form-control"}))),u("div",{className:"modal-footer"},u("button",{type:"button",className:"btn btn-light","data-bs-dismiss":"modal"},"Batal"),u("button",{type:"submit",className:"btn btn-primary","data-form-loading":!0},u("i",{className:"bx bx-save"})," Simpan"))))))}}_(ht,"defaultProps",{onsubmit:null,title:"Untitled Modal",data:null});const[Wt,lt]=ut("Tambah Kegiatan Akademik"),[ct,pt]=ut(""),M="portal/academic-activities";class Xt extends dt{render(){var g,h;return u("div",{className:"intro-y"},u("div",{className:"row"},u("div",{className:"col-12"},u("div",{className:"page-title-box d-sm-flex align-items-center justify-content-between"},u("h4",{className:"mb-sm-0"},(g=this.meta.title)!=null?g:"Untitled Page"),u("div",{className:"page-title-right"},u("ol",{className:"breadcrumb"},u("li",{className:"breadcrumb-item"},u("router-name",{name:"apps.dashboard"},"Dashboard")),u("li",{className:"breadcrumb-item"},"Portal"),u("li",{className:"breadcrumb-item"},"Kegiatan"),u("li",{className:"breadcrumb-item active"},(h=this.meta.title)!=null?h:"Untitled Page")))))),u("div",{className:"card"},u("div",{className:"card-header border-0"},u("div",{className:"text-sm-end text-center"},u("div",{className:"dt-actions d-inline"}),u(It,{data:{redirect:!1,onclick:this.createData,refresh:!0,permission:"create-academic-activities",filter:!1,title:"Tambah Kegiatan Akademik"}}))),u("div",{className:"card-body"},u("div",{className:"table-responsive table-card mb-1"},u("table",{className:"table zero-configuration",width:"100%",id:"dataTable"})))),u(ht,{onsubmit:this.submit,title:Wt}))}componentDidMount(){this.table=Ut("#dataTable",Vt(this.editData,this.deleteData))}createData(){pt(""),lt("Tambah Kegiatan Akademik"),$("#academic-activity-modal").modal("show")}async editData(g){lt("Edit Kegiatan Akademik"),this.showLoading();const h=await Ft(`${M}/${g}`,{hideSuccessNotification:!0}),{academicActivity:k}=h.data;this.hideLoading(),h.status==200&&(pt(k.hashid),$('*[name="name"]').val(k.name),$('*[name="color"]').val(k.color)),$("#academic-activity-modal").modal("show")}async submit(g){g.preventDefault();let h;ct==""?h=await rt(`${M}`,g.target):h=await rt(`${M}/${ct}`,g.target),h.status==200&&(this.$router.reload(),this.table.ajax.reload)}async deleteData(g){Kt.fire({title:"Hapus?",icon:"question",text:"Data yang dihapus tidak dikembalikan!",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"Ya, lanjutkan",cancelButtonText:"Batal",confirmButtonColor:"#d1403b"}).then(async h=>{h.isConfirmed&&(await Mt(`${M}/${g}`)).status==200&&this.table.ajax.reload()})}}_(Xt,"defaultProps",{table:null});export{Xt as default};
