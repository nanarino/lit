# @nanarino/lit

[![pnpm v9](https://img.shields.io/badge/maintained%20with-pnpm%209.15-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)
[![nodejs v22](https://img.shields.io/badge/Node.js-v22.12-026e00.svg?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)

一個 [@nanarino/stylus](https://nanarino.github.io/stylus/) 主題的 [lit](https://lit.dev/) 元件合集

## 開發

```bash
pnpm i
pnpm dev
```

### 约束

爲了可以源碼引入，不要使用路徑別名如 `@`

爲了在 html 内能直接引入，lit 模板内不要第三方元件如 `<iconify-icon />`

爲了在不安全的域下運行，不要使用安全性高的 API 如 `CSS.paintWorklet`

~~爲了在 win7 裏能勉强運行，lit css 模板内不要使用 chrome 109 以上的 API 如 nesting style~~

## 構建

```bash
pnpm build
```

## 利用

先決條件是引入 `@nanarino/stylus`，以 `astro` 為例

```shell
pnpm i @nanarino/stylus
```

```astro
---
import stylus from "@nanarino/stylus?url"
import ChienChiaF from "@/assets/fonts/ChienChia-F.styl?url"
---
<html lang="zh-TW">
    <head>
        <!-- 先引入樣式套件 並標記 [data-nanarino-lit-provide] -->
        <link rel="stylesheet" href={stylus} data-nanarino-lit-provide />
        <link
            rel="stylesheet"
            href={ChienChiaF}
            data-nanarino-lit-provide
            onload="document.documentElement.style.setProperty('--font-family-base', 'ChienChia-F')"
        />
        <!-- 初始化客户端 -->
        <script src="@/scripts/client/init"></script>
    </head>
    <body>
        <slot />
    </body>
</html>
```

```shell
pnpm install @nanarino/lit
```

為了減小包體積，樣式是額外注入的

實際上這裏利用的 `LitElement.prototype.styles` 就是原生的 `shadowRoot.adoptedStyleSheets` (不可用時回退)

```ts
// @/scripts/client/init
// import 立即註冊元件 作為副作用
import { NanarinoLitComponent } from "@nanarino/lit/dist/all.js"
// 或按需:
import { NanarinoLitComponent } from "@nanarino/lit/dist/base"

const provides = Array.from(
    document.querySelectorAll("link[data-nanarino-lit-provide]")
) as HTMLLinkElement[]

for (const css of provides
    .reduce(
        (rules: CSSRule[], link) => [...rules, ...(link.sheet?.cssRules ?? [])],
        []
    )
    .reverse()) {
    // 點解要用try 見 https://github.com/nanarino/na-lit/issues/1
    try {
        NanarinoLitComponent.adoptedStyle.insertRule(css.cssText)
    } catch (error) {
        console.warn(error)
    }
}
```

頁面中使用，如

```astro
<section>
    <na-pagination total="36"></na-pagination>
</section>
```

按需須要單獨註冊，如 `import "@nanarino/lit/dist/Pagination/index.js"` 以使用 `<na-pagination />`

### 避免[FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)

不只本套件，這對於所有元件適用

```css
na-svg-icon:not(:defined) {
    opacity: 0;
}
```
