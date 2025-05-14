import{N as g}from"./base.DRq99R0c.js";import{x as c,i as f}from"./lit-element.Befuxl2y.js";import{n as d,t as h}from"./property.SQfKehJm.js";import{n as p}from"./query-assigned-nodes.DReJme1H.js";import{e as m,n as u}from"./ref.CRcBsAhM.js";import"./base.CShCMygk.js";import"./directive-helpers.Do8-cIhX.js";import"./directive.C_Rw-dL6.js";var w=Object.defineProperty,y=Object.getOwnPropertyDescriptor,r=(o,e,s,i)=>{for(var l=i>1?void 0:i?y(e,s):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(l=(i?a(e,s,l):a(l))||l);return i&&l&&w(e,s,l),l};let t=class extends g{constructor(){super(...arguments),this.dialogStyle="",this.closetarget="[slot=dropdown]",this.closesoon=!1,this.dialogRef=m(),this._will_close=!1}get dialog(){return this.dialogRef.value}toggle(){const o=this.dialog;o&&(o.open?o.close():o.show())}handleClose(){this._will_close=!1}async handleBeforeClose(o){if(this._will_close)return;const e=this.dialog,s=o.target;e&&s&&s.closest(this.closetarget)&&(this._will_close=!0,setTimeout(()=>{e.close(),this._will_close=!1},this.closesoon?0:600))}render(){return c`<div class="na-dropdown-wrapper">
            <button @click=${this.toggle}>
                <slot></slot>
            </button>
            <dialog
                class="na-dropdown sm"
                ${u(this.dialogRef)}
                @close="${this.handleClose}"
                style="${this.dialogStyle}"
            >
                <form method="dialog" @click=${this.handleBeforeClose}>
                    <slot name="dropdown"></slot>
                </form>
            </dialog>
        </div>`}};t.styles=f`
        :host {
            display: inline-flex;
            --gap-dialog-form: var(--gap-dropdown, 4px);
        }

        form[method="dialog"] {
            grid-template-columns: var(--grid-template-columns-dropdown, 1fr);
        }

        button {
            padding: 0;
            margin: 0;
            border: 0;
            outline: 0;
            background: none;
            font-family: inherit;
            font-style: inherit;
            color: inherit;
        }
    `;r([d({attribute:"dialog-style",type:String})],t.prototype,"dialogStyle",2);r([d({attribute:"closetarget",type:String})],t.prototype,"closetarget",2);r([d({attribute:"closesoon",type:String})],t.prototype,"closesoon",2);r([p()],t.prototype,"defaultSlotNodes",2);r([p({slot:"dropdown",flatten:!0})],t.prototype,"dropdownSlotNodes",2);t=r([h("na-dropdown")],t);export{t as Dropdown};
