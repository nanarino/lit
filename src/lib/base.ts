import {
    LitElement,
    type CSSResultGroup,
    // unsafeCSS,
} from "lit"
// import injectedCSS from "nanarinostyl?raw"


/**
 * 給元素注入全局樣式的方法
 */
export abstract class NanarinoLitComponent extends LitElement {
    // Small hack to include global styles

    private static _styles: CSSResultGroup
    static injectedCSS: CSSStyleSheet = new CSSStyleSheet() // unsafeCSS(injectedCSS)

    static get styles(): CSSResultGroup {
        const derivedCSS = this._styles || []

        return [
            this.injectedCSS,
            ...(Array.isArray(derivedCSS) ? derivedCSS : [derivedCSS]),
        ]
    }

    static set styles(styles: CSSResultGroup) {
        this._styles = styles
    }
}
