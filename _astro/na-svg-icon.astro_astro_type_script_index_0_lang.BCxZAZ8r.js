import{c as e,i as t,t as n}from"./lit.DvjAYmxF.js";import{i as r,r as i,t as a}from"./decorate.7JDg8HTF.js";import{t as o}from"./query-assigned-nodes.CPuV7hHs.js";var s=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="oklch(var(--pinkpurple-6, 0.738 0.28 328))" stroke-width="4">\r
<path d="M6 7H10V11H6V7Z" fill="oklch(var(--pinkpurple-6, 0.738 0.28 328))" stroke="none" stroke-width="none" stroke-linecap="butt"></path>\r
<path d="M6 23H10V27H6V23Z" fill="oklch(var(--pinkpurple-6, 0.738 0.28 328))" stroke="none" stroke-width="none" stroke-linecap="butt"></path>\r
<path d="M6 38H10V42H6V38Z" fill="oklch(var(--pinkpurple-6, 0.738 0.28 328))" stroke="none" stroke-width="none" stroke-linecap="butt"></path>\r
<path d="M14 15H18V19H14V15Z" fill="oklch(var(--pinkpurple-6, 0.738 0.28 328))" stroke="none" stroke-width="none" stroke-linecap="butt"></path>\r
<path d="M14 31H18V35H14V31Z" fill="oklch(var(--pinkpurple-6, 0.738 0.28 328))" stroke="none" stroke-width="none" stroke-linecap="butt"></path>\r
<path d="M22 7H26V11H22V7Z" fill="oklch(var(--pinkpurple-6, 0.738 0.28 328))" stroke="none" stroke-width="none" stroke-linecap="butt"></path>\r
<path d="M22 23H26V27H22V23Z" fill="oklch(var(--pinkpurple-6, 0.738 0.28 328))" stroke="none" stroke-width="none" stroke-linecap="butt"></path>\r
<path d="M22 38H26V42H22V38Z" fill="oklch(var(--pinkpurple-6, 0.738 0.28 328))" stroke="none" stroke-width="none" stroke-linecap="butt"></path>\r
<path d="M30 15H34V19H30V15Z" fill="oklch(var(--pinkpurple-6, 0.738 0.28 328))" stroke="none" stroke-width="none" stroke-linecap="butt"></path>\r
<path d="M30 31H34V35H30V31Z" fill="oklch(var(--pinkpurple-6, 0.738 0.28 328))" stroke="none" stroke-width="none" stroke-linecap="butt"></path>\r
<path d="M38 7H42V11H38V7Z" fill="oklch(var(--pinkpurple-6, 0.738 0.28 328))" stroke="none" stroke-width="none" stroke-linecap="butt"></path>\r
<path d="M38 23H42V27H38V23Z" fill="oklch(var(--pinkpurple-6, 0.738 0.28 328))" stroke="none" stroke-width="none" stroke-linecap="butt"></path>\r
<path d="M38 38H42V42H38V38Z" fill="oklch(var(--pinkpurple-6, 0.738 0.28 328))" stroke="none" stroke-width="none" stroke-linecap="butt"></path>\r
<path d="M6 7H10V11H6V7Z" stroke-linecap="butt"></path>\r
<path d="M6 23H10V27H6V23Z" stroke-linecap="butt"></path>\r
<path d="M6 38H10V42H6V38Z" stroke-linecap="butt"></path>\r
<path d="M14 15H18V19H14V15Z" stroke-linecap="butt"></path>\r
<path d="M14 31H18V35H14V31Z" stroke-linecap="butt"></path>\r
<path d="M22 7H26V11H22V7Z" stroke-linecap="butt"></path>\r
<path d="M22 23H26V27H22V23Z" stroke-linecap="butt"></path>\r
<path d="M22 38H26V42H22V38Z" stroke-linecap="butt"></path>\r
<path d="M30 15H34V19H30V15Z" stroke-linecap="butt"></path>\r
<path d="M30 31H34V35H30V31Z" stroke-linecap="butt"></path>\r
<path d="M38 7H42V11H38V7Z" stroke-linecap="butt"></path>\r
<path d="M38 23H42V27H38V23Z" stroke-linecap="butt"></path>\r
<path d="M38 38H42V42H38V38Z" stroke-linecap="butt"></path>\r
</svg>`,c=class extends n{constructor(...e){super(...e),this.src=``}async load(){if(this.src)try{let e=await fetch(this.src);if(!e.ok)throw Error(`${e.status}`);this.shadowRoot.innerHTML=await e.text()}catch(e){this.renderRoot.dispatchEvent(new CustomEvent(`load-error`,{bubbles:!0,composed:!0,detail:e,cancelable:!0}))&&(this.shadowRoot.innerHTML=s)}}updated(e){e.has(`src`)&&this.load(),super.updated(e)}render(){return t`<slot></slot>`}static{this.styles=e`
        :host {
            display: inline-flex;
            width: 1em;
            height: 1em;
        }
        svg {
            width: 100%;
            height: 100%;
        }
    `}};a([o()],c.prototype,`defaultSlotNodes`,void 0),a([i({type:String})],c.prototype,`src`,void 0),c=a([r(`na-svg-icon`)],c);