// 需要引入一下 window上有宣告theme
import type { Theme as _Theme } from "@holy-two/data-theme"
import message from "./message"
import { NanarinoLitComponent } from "@/lib/base"

document.addEventListener("astro:after-swap", () => {
    // 重設明暗主題
    document.documentElement.dataset["theme"] = window.theme
    // 重設消息容器
    message.reset()
})

// 影子DOM内部樣式復用外部的全局樣式
const provides = Array.from(
    document.querySelectorAll("link[data-nanarino-lit-provide]")
) as HTMLLinkElement[]

for (const css of provides
    .reduce(
        (rules: CSSRule[], link) => [...rules, ...(link.sheet?.cssRules ?? [])],
        []
    )
    .reverse()) {
    // 點解要用try 見 https://github.com/nanarino/lit/issues/1
    try {
        NanarinoLitComponent.adoptedStyle.insertRule(css.cssText)
    } catch (error) {
        console.warn(error)
    }
}
