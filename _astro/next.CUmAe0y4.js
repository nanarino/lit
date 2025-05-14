import{c as e,i as t}from"./lit.DvjAYmxF.js";import{t as n}from"./base.ZLIJZ3E1.js";import{i as r,r as i,t as a}from"./decorate.7JDg8HTF.js";import{t as o}from"./query-assigned-nodes.CPuV7hHs.js";import{n as s,t as c}from"./ref.CwEsEWku.js";var l=class extends n{constructor(){super(),this.dialogPopover=`auto`,this.dialogStyle=``,this.closetarget=`[slot=dropdown]`,this.closesoon=!1,this.dialogRef=c(),this._will_close=!1,this._id=crypto.getRandomValues(new Uint32Array(1))[0].toString()}get dialog(){return this.dialogRef.value}toggle(){let e=this.dialog;e&&e.togglePopover()}async handleBeforeClose(e){if(this._will_close)return;let t=this.dialog,n=e.target;t&&n&&n.closest(this.closetarget)&&(this._will_close=!0,setTimeout(()=>{t.hidePopover(),this._will_close=!1},this.closesoon?0:600))}render(){return t`<div class="na-popover-wrapper">
            <button popovertarget="${this._id}">
                <slot></slot>
            </button>
            <dialog
                class="na-popover"
                id="${this._id}"
                ${s(this.dialogRef)}
                popover="${this.dialogPopover}"
                style="${this.dialogStyle}"
            >
                <form method="dialog" @click=${this.handleBeforeClose}>
                    <slot name="dropdown"></slot>
                </form>
            </dialog>
        </div>`}static{this.styles=e`
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
    `}};a([i({attribute:`dialog-popover`,type:String})],l.prototype,`dialogPopover`,void 0),a([i({attribute:`dialog-style`,type:String})],l.prototype,`dialogStyle`,void 0),a([i({attribute:`closetarget`,type:String})],l.prototype,`closetarget`,void 0),a([i({attribute:`closesoon`,type:String})],l.prototype,`closesoon`,void 0),a([o()],l.prototype,`defaultSlotNodes`,void 0),a([o({slot:`dropdown`,flatten:!0})],l.prototype,`dropdownSlotNodes`,void 0),l=a([r(`na-dropdown`)],l);export{l as Dropdown};