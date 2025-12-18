import { NanarinoLitComponent } from "../base"
import { html, css } from "lit"
import { customElement, queryAssignedNodes, property } from "lit/decorators.js"
import { ref, type Ref, createRef } from "lit/directives/ref.js"
import type { DropdownProps } from "./interface"
export type { DropdownProps } from "./interface"

@customElement("na-dropdown")
export class Dropdown extends NanarinoLitComponent implements DropdownProps {
    @property({ attribute: "dialog-popover", type: String }) dialogPopover:
        | "auto"
        | "manual"
        | "hint" = "auto"

    @property({ attribute: "dialog-style", type: String }) dialogStyle: string =
        ""

    get closetarget() {
        return void 0
    }

    get closesoon() {
        return true
    }

    @queryAssignedNodes()
    defaultSlotNodes!: Array<Node>

    @queryAssignedNodes({ slot: "dropdown", flatten: true })
    dropdownSlotNodes!: Array<Node>

    private _id: string

    constructor() {
        super()
        this._id = crypto.getRandomValues(new Uint32Array(1))[0].toString()
    }

    dialogRef: Ref<HTMLDialogElement> = createRef()
    get dialog() {
        return this.dialogRef.value
    }

    toggle() {
        const dialog = this.dialog
        if (dialog) {
            dialog.togglePopover()
        }
    }

    protected render() {
        return html`<div class="na-dropdown-wrapper">
            <button popovertarget="${this._id}">
                <slot></slot>
            </button>
            <dialog
                id="${this._id}"
                ${ref(this.dialogRef)}
                popover="${this.dialogPopover}"
            ></dialog>
            <div class="na-dropdown" style="${this.dialogStyle}">
                <slot name="dropdown"></slot>
            </div>
        </div>`
    }

    static styles = css`
        :host {
            display: inline-flex;
            --gap-dialog-form: var(--gap-dropdown, 4px);
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
    `
}
