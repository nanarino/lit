import{N as d}from"./base.DRq99R0c.js";import{i as c,x as u}from"./lit-element.Befuxl2y.js";import{n as o,t as b}from"./property.SQfKehJm.js";import{o as h}from"./unsafe-html.dLlFAOhv.js";import"./directive.C_Rw-dL6.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function f(t){return o({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*g(t,r){if(t!==void 0){let e=0;for(const a of t)yield r(a,e++)}}const m=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">\r
<path d="M32 8.3999L16.4437 23.9563C16.4437 23.9563 27.3056 34.8182 32 39.5126" stroke-linecap="butt"></path>\r
</svg>`,v=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">\r
<path d="M16 39.5127L31.5563 23.9563C31.5563 23.9563 20.6944 13.0944 16 8.4" stroke-linecap="butt"></path>\r
</svg>`;var x=Object.defineProperty,_=Object.getOwnPropertyDescriptor,n=(t,r,e,a)=>{for(var s=a>1?void 0:a?_(r,e):r,l=t.length-1,p;l>=0;l--)(p=t[l])&&(s=(a?p(r,e,s):p(s))||s);return a&&s&&x(r,e,s),s};let i=class extends d{constructor(){super(...arguments),this.index=NaN,this.current=NaN,this.total=NaN,this.onChange=t=>{},this.pages=[],this._will_reset_pages_once=!1}onClick(t){const r=t.target;if(r?.tagName==="BUTTON"){const e=parseInt(r.dataset.to)||0;this.renderRoot.dispatchEvent(new CustomEvent("page-to",{bubbles:!0,composed:!0,detail:e,cancelable:!0}))&&this.onChange?.(this.current=e)}}updated(t){super.updated(t),t.has("index")&&(this.current||=this.index+1||1),t.has("current")&&(this.index||=this.current-1||0),t.has("index")&&t.has("current")&&this.current!==this.index+1&&(console.error("不合法的current或index输入"),[this.index,this.current]=[0,1]),(t.has("total")||t.has("current"))&&(this._will_reset_pages_once||(this._will_reset_pages_once=!0,requestAnimationFrame(()=>{this.reset_pages(),this._will_reset_pages_once=!1})))}reset_pages(){const t=Array.from({length:this.total},(e,a)=>a+1),r=[];for(const e of t)e===this.current?r.push({attribute:{disabled:!0,"data-ellipsis":!1,"data-primary":!0,"data-to":`${e}`},innerText:`${e}`}):this.total<8||Math.abs(e-this.current)<Math.max(t.at(5)-this.current,this.current-t.at(-6),2)||e==t.at(1)&&this.current==t.at(3)||e==t.at(-2)&&this.current==t.at(-4)||e===t.at(0)||e===t.at(-1)?r.push({attribute:{disabled:!1,"data-ellipsis":!1,"data-primary":!1,"data-to":`${e}`},innerText:`${e}`}):(e===t.at(1)||e===t.at(-2))&&r.push({attribute:{disabled:!1,"data-ellipsis":!0,"data-primary":!1},innerText:"..."});this.pages=r}render(){return u`<span
            style=" display: inline-flex;
            gap: 4px;"
            @click=${this.onClick}
        >
            <button
                class="na-button"
                data-primary
                ?disabled=${!this.total||this.current==1}
                data-to="${this.current-1}"
            >
                ${h(m)}
            </button>
            ${g(this.pages,t=>u`
                    <button
                        class="na-button"
                        ?disabled=${t.attribute.disabled}
                        ?data-primary=${t.attribute["data-primary"]}
                        ?data-ellipsis=${t.attribute["data-ellipsis"]}
                        data-to="${t.attribute["data-to"]}"
                    >
                        ${t.innerText}
                    </button>
                `)}
            <button
                class="na-button"
                data-primary
                ?disabled=${!this.total||this.current==this.total}
                data-to="${this.current+1}"
            >
                ${h(v)}
            </button>
        </span>`}};i.styles=c`
        button {
            --padding-horizontal-button: 0;
            min-width: calc(
                var(--line-height-body, 22px) +
                    var(--padding-vertical-button, 5px) * 2
            );
            min-height: calc(
                var(--line-height-body, 22px) +
                    var(--padding-vertical-button, 5px) * 2
            );
            overflow: hidden;
        }

        button[data-ellipsis] {
            background-color: transparent;
            pointer-events: none;
            color: rgb(var(--gray-5));
        }

        button svg {
            pointer-events: none;
            width: 1em;
            height: 1em;
        }
    `;n([o({type:Number})],i.prototype,"index",2);n([o({type:Number})],i.prototype,"current",2);n([o({type:Number})],i.prototype,"total",2);n([o({type:Function,attribute:!1})],i.prototype,"onChange",2);n([f()],i.prototype,"pages",2);i=n([b("na-pagination")],i);
