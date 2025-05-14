import{N as _}from"./base.DRq99R0c.js";import{T as E,i as I,x as g}from"./lit-element.Befuxl2y.js";import{n as k,t as O}from"./property.SQfKehJm.js";import{e as D}from"./base.CShCMygk.js";import{o as M}from"./unsafe-html.dLlFAOhv.js";import{e as A,i as P,t as R}from"./directive.C_Rw-dL6.js";import{p as S,v,s as b,M as $,m as T}from"./directive-helpers.Do8-cIhX.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(e,n){return(i,a,t)=>{const l=r=>r.renderRoot?.querySelector(e)??null;return D(i,a,{get(){return l(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let H;function q(e){return(n,i)=>D(n,i,{get(){return(this.renderRoot??(H??=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=(e,n,i)=>{const a=new Map;for(let t=n;t<=i;t++)a.set(e[t],t);return a},C=A(class extends P{constructor(e){if(super(e),e.type!==R.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,n,i){let a;i===void 0?i=n:n!==void 0&&(a=n);const t=[],l=[];let r=0;for(const f of e)t[r]=a?a(f,r):r,l[r]=i(f,r),r++;return{values:l,keys:t}}render(e,n,i){return this.dt(e,n,i).values}update(e,[n,i,a]){const t=S(e),{values:l,keys:r}=this.dt(n,i,a);if(!Array.isArray(t))return this.ut=r,l;const f=this.ut??=[],d=[];let y,x,o=0,c=t.length-1,s=0,u=l.length-1;for(;o<=c&&s<=u;)if(t[o]===null)o++;else if(t[c]===null)c--;else if(f[o]===r[s])d[s]=v(t[o],l[s]),o++,s++;else if(f[c]===r[u])d[u]=v(t[c],l[u]),c--,u--;else if(f[o]===r[u])d[u]=v(t[o],l[u]),b(e,d[u+1],t[o]),o++,u--;else if(f[c]===r[s])d[s]=v(t[c],l[s]),b(e,t[o],t[c]),c--,s++;else if(y===void 0&&(y=z(r,s,u),x=z(f,o,c)),y.has(f[o]))if(y.has(f[c])){const p=x.get(r[s]),w=p!==void 0?t[p]:null;if(w===null){const L=b(e,t[o]);v(L,l[s]),d[s]=L}else d[s]=v(w,l[s]),b(e,t[o],w),t[p]=null;s++}else $(t[c]),c--;else $(t[o]),o++;for(;s<=u;){const p=b(e,d[u+1]);v(p,l[s]),d[s++]=p}for(;o<=c;){const p=t[o++];p!==null&&$(p)}return this.ut=r,T(e,d),E}}),N=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">\r
<path d="M9.85742 9.85791L23.9996 24M23.9996 24L38.1417 38.1422M23.9996 24L38.1417 9.85791M23.9996 24L9.85742 38.1422" stroke-linecap="butt"></path>\r
</svg>`;var B=Object.defineProperty,F=Object.getOwnPropertyDescriptor,m=(e,n,i,a)=>{for(var t=a>1?void 0:a?F(n,i):n,l=e.length-1,r;l>=0;l--)(r=e[l])&&(t=(a?r(n,i,t):r(t))||t);return a&&t&&B(n,i,t),t};let h=class extends _{constructor(){super(...arguments),this.active="",this.data=[],this.size="md"}render(){return g`
            <ul class="na-layout-header na-tabs ${this.size}">
                ${C(this.data,e=>e.key,e=>{const n=()=>{if(e.closeable!==!1&&this.renderRoot.dispatchEvent(new CustomEvent("tab-close",{bubbles:!0,composed:!0,detail:e,cancelable:!0}))){const a=this.data.indexOf(e);this.data=this.data.filter(t=>t.key!==e.key),this.active===e.key&&(this.active=this.data.at(a)?.key??this.data.at(-1)?.key??"")}};let i=!1;return g`
                            <li
                                class="na-tab"
                                ?data-active=${this.active===e.key}
                            >
                                <button
                                    class="na-tab-name"
                                    @click=${a=>{this.renderRoot.dispatchEvent(new CustomEvent("tab-change",{bubbles:!0,composed:!0,detail:e,cancelable:!0}))&&(this.active=e.key,a.target?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}))}}
                                    @mousedown=${a=>{a.button===1&&(i=!0,a.preventDefault())}}
                                    @mouseup=${a=>{i&&a.button===1&&(n(),a.preventDefault()),i=!1}}
                                    @mouseleave=${()=>i=!1}
                                >
                                    ${e.title}
                                </button>
                                <button
                                    class="na-tab-operation"
                                    @click=${n}
                                >
                                    ${M(e.closeable??!0?N:"")}
                                </button>
                            </li>
                        `})}
            </ul>
            <main class="na-layout-content">
                ${C(this.data,e=>e.key,e=>e.outerHTML?g`<div
                                  class="na-tab-panel"
                                  ?data-active=${this.active===e.key}
                              >
                                  ${M(e.outerHTML)}
                              </div>`:g`<div
                                  class="na-tab-panel"
                                  ?data-active=${this.active===e.key}
                              >
                                  <iframe
                                      title="${e.title}"
                                      src="${e.src}"
                                  ></iframe>
                              </div>`)}
            </main>
        `}};h.styles=I`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            width: 100%;
            gap: 2px;
        }

        main {
            flex: 1;
            overflow-y: hidden;
        }

        .na-tab-panel {
            display: none;
        }

        .na-tab-panel[data-active] {
            display: contents;
        }

        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        button svg {
            width: var(--font-size-tabs, var(--font-size-body));
            height: var(--font-size-tabs, var(--font-size-body));
        }
    `;m([k({type:String})],h.prototype,"active",2);m([k({type:Array,attribute:!1})],h.prototype,"data",2);m([k({type:String})],h.prototype,"size",2);m([q("iframe")],h.prototype,"iframes",2);m([j("[data-active]>iframe")],h.prototype,"activeIframe",2);h=m([O("na-iframe-tabs")],h);
