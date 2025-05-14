import{t as e}from"./base.ZLIJZ3E1.js";import{c as t,i as n,r}from"./lit.DvjAYmxF.js";import{i,r as a,t as o}from"./decorate.7JDg8HTF.js";import{t as s}from"./unsafe-html.D32kpzzc.js";import{n as c,r as l,t as u}from"./directive.BSZPiF1A.js";import{a as d,n as f,o as p,r as m,t as h}from"./directive-helpers.z6eWTrCF.js";import{t as g}from"./base.BIpe3L86.js";function _(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return g(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return g(n,r,{get(){return a(this)}})}}var v;function y(e){return(t,n)=>g(t,n,{get(){return(this.renderRoot??(v??=document.createDocumentFragment())).querySelectorAll(e)}})}var b=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},x=u(class extends c{constructor(e){if(super(e),e.type!==l.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){let a=h(e),{values:o,keys:s}=this.dt(t,n,i);if(!Array.isArray(a))return this.ut=s,o;let c=this.ut??=[],l=[],u,g,_=0,v=a.length-1,y=0,x=o.length-1;for(;_<=v&&y<=x;)if(a[_]===null)_++;else if(a[v]===null)v--;else if(c[_]===s[y])l[y]=d(a[_],o[y]),_++,y++;else if(c[v]===s[x])l[x]=d(a[v],o[x]),v--,x--;else if(c[_]===s[x])l[x]=d(a[_],o[x]),p(e,l[x+1],a[_]),_++,x--;else if(c[v]===s[y])l[y]=d(a[v],o[y]),p(e,a[_],a[v]),v--,y++;else if(u===void 0&&(u=b(s,y,x),g=b(c,_,v)),u.has(c[_])){if(u.has(c[v])){let t=g.get(s[y]),n=t===void 0?null:a[t];if(n===null){let t=p(e,a[_]);d(t,o[y]),l[y]=t}else l[y]=d(n,o[y]),p(e,a[_],n),a[t]=null;y++}else f(a[v]),v--}else f(a[_]),_++;for(;y<=x;){let t=p(e,l[x+1]);d(t,o[y]),l[y++]=t}for(;_<=v;){let e=a[_++];e!==null&&f(e)}return this.ut=s,m(e,l),r}}),S=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">\r
<path d="M9.85742 9.85791L23.9996 24M23.9996 24L38.1417 38.1422M23.9996 24L38.1417 9.85791M23.9996 24L9.85742 38.1422" stroke-linecap="butt"></path>\r
</svg>`,C=class extends e{constructor(...e){super(...e),this.active=``,this.data=[],this.size=`md`}render(){return n`
            <ul class="na-layout-header na-tabs ${this.size}">
                ${x(this.data,e=>e.key,e=>{let t=()=>{if(e.closeable!==!1&&this.renderRoot.dispatchEvent(new CustomEvent(`tab-close`,{bubbles:!0,composed:!0,detail:e,cancelable:!0}))){let t=this.data.indexOf(e);this.data=this.data.filter(t=>t.key!==e.key),this.active===e.key&&(this.active=this.data.at(t)?.key??this.data.at(-1)?.key??``)}},r=!1;return n`
                            <li
                                class="na-tab"
                                ?data-active=${this.active===e.key}
                            >
                                <button
                                    class="na-tab-name"
                                    @click=${t=>{this.renderRoot.dispatchEvent(new CustomEvent(`tab-change`,{bubbles:!0,composed:!0,detail:e,cancelable:!0}))&&(this.active=e.key,t.target?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`center`}))}}
                                    @mousedown=${e=>{e.button===1&&(r=!0,e.preventDefault())}}
                                    @mouseup=${e=>{r&&e.button===1&&(t(),e.preventDefault()),r=!1}}
                                    @mouseleave=${()=>r=!1}
                                >
                                    ${e.title}
                                </button>
                                <button
                                    class="na-tab-operation"
                                    @click=${t}
                                >
                                    ${s(e.closeable??!0?S:``)}
                                </button>
                            </li>
                        `})}
            </ul>
            <main class="na-layout-content">
                ${x(this.data,e=>e.key,e=>e.outerHTML?n`<div
                                  class="na-tab-panel"
                                  ?data-active=${this.active===e.key}
                              >
                                  ${s(e.outerHTML)}
                              </div>`:n`<div
                                  class="na-tab-panel"
                                  ?data-active=${this.active===e.key}
                              >
                                  <iframe
                                      title="${e.title}"
                                      src="${e.src}"
                                  ></iframe>
                              </div>`)}
            </main>
        `}static{this.styles=t`
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
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            border: none;
        }

        button svg {
            width: var(--font-size-tabs, var(--font-size-body));
            height: var(--font-size-tabs, var(--font-size-body));
        }
    `}};o([a({type:String})],C.prototype,`active`,void 0),o([a({type:Array,attribute:!1})],C.prototype,`data`,void 0),o([a({type:String})],C.prototype,`size`,void 0),o([y(`iframe`)],C.prototype,`iframes`,void 0),o([_(`[data-active]>iframe`)],C.prototype,`activeIframe`,void 0),C=o([i(`na-iframe-tabs`)],C);