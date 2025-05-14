import{N as E}from"./base.DRq99R0c.js";import{T as O,i as A,x as g}from"./lit-element.Befuxl2y.js";import{n as $,t as D}from"./property.SQfKehJm.js";import{e as _}from"./base.CShCMygk.js";import{o as M}from"./unsafe-html.dLlFAOhv.js";import{e as P,i as R,t as S}from"./directive.C_Rw-dL6.js";import{p as T,v,s as y,M as x,m as j}from"./directive-helpers.Do8-cIhX.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(e,i){return(r,l,t)=>{const s=a=>a.renderRoot?.querySelector(e)??null;return _(r,l,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let I;function q(e){return(i,r)=>_(i,r,{get(){return(this.renderRoot??(I??=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=(e,i,r)=>{const l=new Map;for(let t=i;t<=r;t++)l.set(e[t],t);return l},C=P(class extends R{constructor(e){if(super(e),e.type!==S.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,i,r){let l;r===void 0?r=i:i!==void 0&&(l=i);const t=[],s=[];let a=0;for(const d of e)t[a]=l?l(d,a):a,s[a]=r(d,a),a++;return{values:s,keys:t}}render(e,i,r){return this.dt(e,i,r).values}update(e,[i,r,l]){const t=T(e),{values:s,keys:a}=this.dt(i,r,l);if(!Array.isArray(t))return this.ut=a,s;const d=this.ut??=[],f=[];let b,k,n=0,c=t.length-1,o=0,u=s.length-1;for(;n<=c&&o<=u;)if(t[n]===null)n++;else if(t[c]===null)c--;else if(d[n]===a[o])f[o]=v(t[n],s[o]),n++,o++;else if(d[c]===a[u])f[u]=v(t[c],s[u]),c--,u--;else if(d[n]===a[u])f[u]=v(t[n],s[u]),y(e,f[u+1],t[n]),n++,u--;else if(d[c]===a[o])f[o]=v(t[c],s[o]),y(e,t[n],t[c]),c--,o++;else if(b===void 0&&(b=z(a,o,u),k=z(d,n,c)),b.has(d[n]))if(b.has(d[c])){const h=k.get(a[o]),w=h!==void 0?t[h]:null;if(w===null){const L=y(e,t[n]);v(L,s[o]),f[o]=L}else f[o]=v(w,s[o]),y(e,t[n],w),t[h]=null;o++}else x(t[c]),c--;else x(t[n]),n++;for(;o<=u;){const h=y(e,f[u+1]);v(h,s[o]),f[o++]=h}for(;n<=c;){const h=t[n++];h!==null&&x(h)}return this.ut=a,j(e,f),O}}),N=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">\r
<path d="M9.85742 9.85791L23.9996 24M23.9996 24L38.1417 38.1422M23.9996 24L38.1417 9.85791M23.9996 24L9.85742 38.1422" stroke-linecap="butt"></path>\r
</svg>`;var B=Object.defineProperty,F=Object.getOwnPropertyDescriptor,m=(e,i,r,l)=>{for(var t=l>1?void 0:l?F(i,r):i,s=e.length-1,a;s>=0;s--)(a=e[s])&&(t=(l?a(i,r,t):a(t))||t);return l&&t&&B(i,r,t),t};let p=class extends E{constructor(){super(...arguments),this.active="",this.data=[],this.size="md"}render(){return g`
            <ul class="na-layout-header na-tabs ${this.size}">
                ${C(this.data,e=>e.key,e=>g`
                        <li
                            class="na-tab"
                            ?data-active=${this.active===e.key}
                        >
                            <button
                                class="na-tab-name"
                                @click=${()=>{this.renderRoot.dispatchEvent(new CustomEvent("tab-change",{bubbles:!0,composed:!0,detail:e,cancelable:!0}))&&(this.active=e.key)}}
                            >
                                ${e.title}
                            </button>
                            <button
                                class="na-tab-operation"
                                @click=${()=>{if(this.renderRoot.dispatchEvent(new CustomEvent("tab-close",{bubbles:!0,composed:!0,detail:e,cancelable:!0}))){const i=this.data.indexOf(e);this.data=this.data.filter(r=>r.key!==e.key),this.active===e.key&&(this.active=this.data.at(i)?.key??this.data.at(-1)?.key??"")}}}
                            >
                                ${M(e.closeable??!0?N:"")}
                            </button>
                        </li>
                    `)}
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
        `}};p.styles=A`
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
    `;m([$({type:String})],p.prototype,"active",2);m([$({type:Array,attribute:!1})],p.prototype,"data",2);m([$({type:String})],p.prototype,"size",2);m([q("iframe")],p.prototype,"iframes",2);m([H("[data-active]>iframe")],p.prototype,"activeIframe",2);p=m([D("na-iframe-tabs")],p);
