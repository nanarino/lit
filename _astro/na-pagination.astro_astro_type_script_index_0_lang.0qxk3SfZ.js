import{c as e,i as t}from"./lit.DvjAYmxF.js";import{t as n}from"./base.ZLIJZ3E1.js";import{i as r,n as i,r as a,t as o}from"./decorate.7JDg8HTF.js";import{t as s}from"./unsafe-html.D32kpzzc.js";function*c(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var l=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">\r
<path d="M32 8.3999L16.4437 23.9563C16.4437 23.9563 27.3056 34.8182 32 39.5126" stroke-linecap="butt"></path>\r
</svg>`,u=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="4">\r
<path d="M16 39.5127L31.5563 23.9563C31.5563 23.9563 20.6944 13.0944 16 8.4" stroke-linecap="butt"></path>\r
</svg>`,d=class extends n{constructor(...e){super(...e),this.index=NaN,this.current=NaN,this.total=NaN,this.onChange=e=>{},this.pages=[],this._will_reset_pages_once=!1}onClick(e){let t=e.target;if(t?.tagName===`BUTTON`){let e=parseInt(t.dataset.to)||0;this.renderRoot.dispatchEvent(new CustomEvent(`page-to`,{bubbles:!0,composed:!0,detail:e,cancelable:!0}))&&this.onChange?.(this.current=e)}}updated(e){super.updated(e),e.has(`index`)&&(this.current||=this.index+1||1),e.has(`current`)&&(this.index||=this.current-1||0),e.has(`index`)&&e.has(`current`)&&this.current!==this.index+1&&(console.error(`不合法的current或index输入`),[this.index,this.current]=[0,1]),(e.has(`total`)||e.has(`current`))&&(this._will_reset_pages_once||(this._will_reset_pages_once=!0,requestAnimationFrame(()=>{this.reset_pages(),this._will_reset_pages_once=!1})))}reset_pages(){let e=Array.from({length:this.total},(e,t)=>t+1),t=[];for(let n of e)n===this.current?t.push({attribute:{disabled:!0,"data-ellipsis":!1,"data-primary":!0,"data-to":`${n}`},innerText:`${n}`}):this.total<8||Math.abs(n-this.current)<Math.max(e.at(5)-this.current,this.current-e.at(-6),2)||n==e.at(1)&&this.current==e.at(3)||n==e.at(-2)&&this.current==e.at(-4)||n===e.at(0)||n===e.at(-1)?t.push({attribute:{disabled:!1,"data-ellipsis":!1,"data-primary":!1,"data-to":`${n}`},innerText:`${n}`}):(n===e.at(1)||n===e.at(-2))&&t.push({attribute:{disabled:!1,"data-ellipsis":!0,"data-primary":!1},innerText:`...`});this.pages=t}render(){return t`<span
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
                ${s(l)}
            </button>
            ${c(this.pages,e=>t`
                    <button
                        class="na-button"
                        ?disabled=${e.attribute.disabled}
                        ?data-primary=${e.attribute[`data-primary`]}
                        ?data-ellipsis=${e.attribute[`data-ellipsis`]}
                        data-to="${e.attribute[`data-to`]}"
                    >
                        ${e.innerText}
                    </button>
                `)}
            <button
                class="na-button"
                data-primary
                ?disabled=${!this.total||this.current==this.total}
                data-to="${this.current+1}"
            >
                ${s(u)}
            </button>
        </span>`}static{this.styles=e`
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
            color: oklch(var(--gray-5));
        }

        button svg {
            pointer-events: none;
            width: 1em;
            height: 1em;
        }
    `}};o([a({type:Number})],d.prototype,`index`,void 0),o([a({type:Number})],d.prototype,`current`,void 0),o([a({type:Number})],d.prototype,`total`,void 0),o([a({type:Function,attribute:!1})],d.prototype,`onChange`,void 0),o([i()],d.prototype,`pages`,void 0),d=o([r(`na-pagination`)],d);