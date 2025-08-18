# nanarinostyl/lit

[![pnpm v9](https://img.shields.io/badge/maintained%20with-pnpm%209.15-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)
[![nodejs v22](https://img.shields.io/badge/Node.js-v22.12-026e00.svg?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)

一个 [nanarinostyl](https://nanarino.github.io/stylus/) 主題的 [lit](https://lit.dev/) 元件合集

## 開發

```bash
pnpm i
pnpm dev
```

本地開發環境下在 `127.0.0.1` 中會自訂樣式和額外引入字體作爲測試

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

先決條件是引入 `nanarinostyl`，以 `astro` 為例

```shell
pnpm i nanarinostyl
```

```astro
---
import nanarinostyl from "nanarinostyl?url"
---
<html lang="zh-TW">
    <head>
        <!-- 先引入樣式套件 記住它是第幾個 第一個 或指定ID -->
        <link rel="stylesheet" href={nanarinostyl} />
        <!-- 或者使用 引入自訂後的 nanarinostyl, 同樣作為第一個 或指定ID -->
        <!-- 見 https://github.com/nanarino/na-lit/blob/main/src/styles/custom.styl -->

        <!-- 初始化客戶端 -->
        <script src="@/scripts/client/init"></script>
    </head>
    <body>
        <slot />
    </body>
</html>
```

元件暫時未計劃發佈到 [npm](https://www.npmjs.com/), 可以從源程式碼自订構建出 na-lit ( `na-lit/dist/all.js` 或者按需 ) 放置在自己專案的 `assets` 或 `public` 目錄中，或者直接拷貝到自己的專案

```diff
// package.json
{
  "dependencies": {
+    "@nanarinostyl/lit": "github:nanarino/na-lit",
  }
}
```

```shell
pnpm update @nanarinostyl/lit
```

為了減小包體積，樣式是額外注入的

```ts
// @/scripts/client/init

import { NanarinoLitComponent } from "na-lit/dist/all.js"
// import 立即註冊元件 作為副作用
// 或按需: import { NanarinoLitComponent } from "na-lit/dist/base.js"

// 影子DOM内部樣式復用外部的全局樣式 需要保證是[0], 或透過ID獲取
const nanarinostyl = document.styleSheets[0]
for (const css of Array.from(nanarinostyl?.cssRules ?? []).reverse()) {
    // 點解要用try 見 https://github.com/nanarino/na-lit/issues/1
    try {
        NanarinoLitComponent.injectedCSS.insertRule(css.cssText)
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

按需須要單獨註冊，如 `import "na-lit/dist/Pagination/index.js"` 以使用 `<na-pagination />`

### 避免[FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)

不只本套件，這對於所有元件適用

```css
na-svg-icon:not(:defined) {
    opacity: 0;
}
```
