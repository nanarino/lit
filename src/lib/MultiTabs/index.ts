import { NanarinoLitComponent } from "@/lib/base"
import { html, css } from "lit"
import { customElement, property } from "lit/decorators.js"

export interface MultiTabsProps
    extends Omit<Partial<HTMLElement>, "children"> {}

@customElement("na-multi-tabs")
export class MultiTabs extends NanarinoLitComponent implements MultiTabsProps {
    constructor() {
        super()
    }

    render() {
        return html`<section></section>`
    }

    static styles = css`
        :host {
            display: flex;
        }
    `
}
