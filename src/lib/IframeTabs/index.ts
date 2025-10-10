import { NanarinoLitComponent } from "../base"
import { html, css } from "lit"
import { customElement, property, query, queryAll } from "lit/decorators.js"
import { unsafeHTML } from "lit/directives/unsafe-html.js"
import { repeat } from "lit/directives/repeat.js"
import close from "../../assets/close.svg?raw"

export interface IframeTabsProps {
    active?: string
    /**
     * DOM property only
     *
     * in `vue`:
     *
     * ```vue
     * <na-iframe-tabs active="114514" .data="[
     *     { src: '/home', title: 'home', key: '114514', closeable: false }
     * ]" />
     * ```
     * 
     */
    data?: IframeAttrs[]
}

export type IframeAttrs = {
    src: string
    title: string
    key: string
    closeable?: boolean
}

export interface IframeTabsEmits {
    onTabChange: (
        e: CustomEvent<IframeAttrs>
    ) => void | boolean | Promise<void> | Promise<boolean>
    onTabClose: (
        e: CustomEvent<IframeAttrs>
    ) => void | boolean | Promise<void> | Promise<boolean>
}

@customElement("na-iframe-tabs")
export class IframeTabs
    extends NanarinoLitComponent
    implements IframeTabsProps
{
    @property({ type: String }) active: string = ""
    @property({ type: Array, attribute: false }) data: IframeAttrs[] = []

    @queryAll("iframe")
    iframes!: NodeListOf<HTMLIFrameElement>

    @query("iframe[data-active]")
    activeIframe?: HTMLIFrameElement

    render() {
        return html`
            <ul class="na-layout-header">
                ${repeat(
                    this.data,
                    i => i.key,
                    attrs => html`
                        <li
                            class="na-tab"
                            ?data-active=${this.active === attrs.key}
                        >
                            <button
                                class="na-tab-name"
                                @click=${() => {
                                    if (
                                        this.renderRoot.dispatchEvent(
                                            new CustomEvent("tab-change", {
                                                bubbles: true,
                                                composed: true,
                                                detail: attrs,
                                                cancelable: true,
                                            })
                                        )
                                    )
                                        this.active = attrs.key
                                }}
                            >
                                ${attrs.title}
                            </button>
                            <button
                                class="na-tab-close"
                                @click=${() => {
                                    if (
                                        this.renderRoot.dispatchEvent(
                                            new CustomEvent("tab-close", {
                                                bubbles: true,
                                                composed: true,
                                                detail: attrs,
                                                cancelable: true,
                                            })
                                        )
                                    ) {
                                        const index = this.data.indexOf(attrs)
                                        this.data = this.data.filter(
                                            item => item.key !== attrs.key
                                        )
                                        if (this.active === attrs.key) {
                                            this.active =
                                                this.data.at(index)?.key ??
                                                this.data.at(-1)?.key ??
                                                ""
                                        }
                                    }
                                }}
                            >
                                ${unsafeHTML(
                                    attrs.closeable ?? true ? close : ""
                                )}
                            </button>
                        </li>
                    `
                )}
            </ul>
            <main class="na-layout-content">
                ${repeat(
                    this.data,
                    i => i.key,
                    attrs =>
                        html`<iframe
                            title="${attrs.title}"
                            src="${attrs.src}"
                            ?data-active=${this.active === attrs.key}
                        ></iframe>`
                )}
            </main>
        `
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
            width: 100%;
            gap: 2px;
            --font-size-tabs: var(--font-size-body);
            --line-height-tabs: var(--line-height-body);
        }

        ul {
            display: flex;
            gap: 8px;
            padding: 0 8px;
            list-style: none;
            margin: 0;
            height: calc(var(--line-height-tabs) + 9px);
            overflow-y: hidden;
            white-space: nowrap;
            background-color: rgb(var(--background-color-tabs, var(--white)));
        }

        /* 隱藏過多頁簽時出現的滾動條,但是大螢幕 */
        @media screen and (min-width: 768px) {
            ul ::-webkit-scrollbar {
                width: 0;
                height: 0;
            }
        }
        @media screen and (min-width: 768px) {
            ul {
                scrollbar-width: none;
            }
        }

        .na-tab {
            display: flex;
            align-items: center;
            gap: 2px;
            margin: 0 8px;
        }

        .na-tab-name {
            padding: 3px 0;
            font-size: var(--font-size-tabs);
            line-height: var(--line-height-tabs);
            border-width: 2px 0;
            border-style: solid;
            border-color: transparent;
        }

        .na-tab:where(:not([data-active])) .na-tab-name {
            cursor: pointer;
        }

        .na-tab:where([data-active]) .na-tab-name {
            border-bottom-color: rgb(var(--color-tab, var(--primary-6)));
            color: rgb(var(--color-tab, var(--primary-6)));
        }

        main {
            flex: 1;
            overflow-y: hidden;
        }

        iframe {
            width: 100%;
            height: 100%;
            border: none;
            display: none;
        }
        iframe[data-active] {
            display: grid;
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

        button:hover {
            opacity: 1;
            color: rgb(var(--color-tab, var(--primary-6)));
        }

        .na-tab-close {
            cursor: pointer;
            display: flex;
            align-items: center;
            height: fit-content;
            opacity: 0.3;
        }

        button svg {
            width: var(--font-size-body);
            height: var(--font-size-body);
        }
    `
}
