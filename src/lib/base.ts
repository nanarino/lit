import {
    LitElement,
    type CSSResultGroup,
    // unsafeCSS,
} from "lit"
// import adoptedStyle from "@nanarino/stylus?raw"


/**
 * 給元素注入全局樣式的方法
 */
export abstract class NanarinoLitComponent extends LitElement {
    // Small hack to include global styles

    private static _styles: CSSResultGroup
    static adoptedStyle: CSSStyleSheet = new CSSStyleSheet() // unsafeCSS(adoptedStyle)

    // 實際上 `styles` 就是原生的 `shadowRoot.adoptedStyleSheets` (不可用時回退)
    static get styles(): CSSResultGroup {
        const derivedCSS = this._styles || []

        return [
            this.adoptedStyle,
            ...(Array.isArray(derivedCSS) ? derivedCSS : [derivedCSS]),
        ]
    }

    static set styles(styles: CSSResultGroup) {
        this._styles = styles
    }
}
