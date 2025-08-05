import { resolve } from "node:path"
import { defineConfig } from "vite"
import alias from "@holy-two/vite-plugin-alias"
import dts from "vite-plugin-dts"

export default defineConfig({
    plugins: [
        alias(),
        dts({
            include: ["src/lib"],
            rollupTypes: true,
            compilerOptions: {
                types: ["./.astro/types.d.ts"],
            },
        }),
    ],
    build: {
        lib: {
            entry: resolve("./src/lib/index.ts"),
            formats: ["es"],
        },
    },
    publicDir: false,
})
