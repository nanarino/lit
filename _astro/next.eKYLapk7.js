import{N as g}from"./base.DRq99R0c.js";import{x as c,i as f}from"./lit-element.Befuxl2y.js";import{n as s,t as h}from"./property.SQfKehJm.js";import{n as d}from"./query-assigned-nodes.DReJme1H.js";import{e as m,n as v}from"./ref.CRcBsAhM.js";import"./base.CShCMygk.js";import"./directive-helpers.Do8-cIhX.js";import"./directive.C_Rw-dL6.js";var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,i=(t,e,l,a)=>{for(var r=a>1?void 0:a?y(e,l):e,p=t.length-1,n;p>=0;p--)(n=t[p])&&(r=(a?n(e,l,r):n(r))||r);return a&&r&&u(e,l,r),r};let o=class extends g{constructor(){super(),this.dialogPopover="auto",this.dialogStyle="",this.closetarget="[slot=dropdown]",this.closesoon=!1,this.dialogRef=m(),this._will_close=!1,this._id=crypto.getRandomValues(new Uint32Array(1))[0].toString()}get dialog(){return this.dialogRef.value}toggle(){const t=this.dialog;t&&t.togglePopover()}async handleBeforeClose(t){if(this._will_close)return;const e=this.dialog,l=t.target;e&&l&&l.closest(this.closetarget)&&(this._will_close=!0,setTimeout(()=>{e.hidePopover(),this._will_close=!1},this.closesoon?0:600))}render(){return c`<div class="na-popover-wrapper">
            <button popovertarget="${this._id}">
                <slot></slot>
            </button>
            <dialog
                class="na-popover"
                id="${this._id}"
                ${v(this.dialogRef)}
                popover="${this.dialogPopover}"
                style="${this.dialogStyle}"
            >
                <form method="dialog" @click=${this.handleBeforeClose}>
                    <slot name="dropdown"></slot>
                </form>
            </dialog>
        </div>`}};o.styles=f`
        :host {
            display: inline-flex;
            --gap-dialog-form: var(--gap-dropdown, 4px);
        }

        .na-popover-wrapper {
            anchor-name: --popover-wrapper;
        }

        .na-popover {
            position-anchor: --popover-wrapper;
            left: anchor(center);
            top: calc(
                anchor(bottom) +
                    var(--margin-top-dropdown, var(--gap-dialog-form))
            );
            transform: translateX(-50%);
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
    `;i([s({attribute:"dialog-popover",type:String})],o.prototype,"dialogPopover",2);i([s({attribute:"dialog-style",type:String})],o.prototype,"dialogStyle",2);i([s({attribute:"closetarget",type:String})],o.prototype,"closetarget",2);i([s({attribute:"closesoon",type:String})],o.prototype,"closesoon",2);i([d()],o.prototype,"defaultSlotNodes",2);i([d({slot:"dropdown",flatten:!0})],o.prototype,"dropdownSlotNodes",2);o=i([h("na-dropdown")],o);export{o as Dropdown};
