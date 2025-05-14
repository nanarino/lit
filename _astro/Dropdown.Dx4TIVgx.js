import{c as e,i as t}from"./lit.DvjAYmxF.js";import{t as n}from"./base.ZLIJZ3E1.js";import{i as r,r as i,t as a}from"./decorate.7JDg8HTF.js";import{t as o}from"./query-assigned-nodes.CPuV7hHs.js";import{n as s,t as c}from"./ref.CwEsEWku.js";var l=class extends n{constructor(...e){super(...e),this.dialogStyle=``,this.closetarget=`[slot=dropdown]`,this.closesoon=!1,this.dialogRef=c(),this._will_close=!1}get dialog(){return this.dialogRef.value}toggle(){let e=this.dialog;e&&(e.open?e.close():e.show())}handleClose(){this._will_close=!1}async handleBeforeClose(e){if(this._will_close)return;let t=this.dialog,n=e.target;t&&n&&n.closest(this.closetarget)&&(this._will_close=!0,setTimeout(()=>{t.close(),this._will_close=!1},this.closesoon?0:600))}render(){return t`<div class="na-dropdown-wrapper">
            <button @click=${this.toggle}>
                <slot></slot>
            </button>
            <dialog
                class="na-dropdown sm"
                ${s(this.dialogRef)}
                @close="${this.handleClose}"
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
    `}};a([i({attribute:`dialog-style`,type:String})],l.prototype,`dialogStyle`,void 0),a([i({attribute:`closetarget`,type:String})],l.prototype,`closetarget`,void 0),a([i({attribute:`closesoon`,type:String})],l.prototype,`closesoon`,void 0),a([o()],l.prototype,`defaultSlotNodes`,void 0),a([o({slot:`dropdown`,flatten:!0})],l.prototype,`dropdownSlotNodes`,void 0),l=a([r(`na-dropdown`)],l);export{l as Dropdown};