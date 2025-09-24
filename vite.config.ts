import { resolve, join, sep, posix } from "node:path"
import { readdir, stat } from "node:fs/promises"
import { defineConfig } from "vite"
import dts from 'unplugin-dts/vite'

async function ls(dirpath: string, rootpath = dirpath) {
    rootpath = rootpath.replace(/\/$/, "").replace(/^.\//, "")
    let result_path: Record<string, string> = {}
    if ((await stat(resolve(dirpath))).isFile()) {
        return /\.ts$/.test(dirpath) &&
            !/\.d\.ts$/.test(dirpath) &&
            !/interface\.ts$/.test(dirpath)
            ? {
                  [dirpath
                      .replace(new RegExp(`^${rootpath}\/`), "")
                      .replace(/\.ts$/, "")]: dirpath,
              }
            : {}
    }
    for (const filepath of (await readdir(dirpath)).map(filename =>
        join(dirpath, filename).split(sep).join(posix.sep)
    )) {
        result_path = {
            ...result_path,
            ...(await ls(filepath, rootpath)),
        }
    }
    return result_path
}

const entry = await ls("./src/lib")

export default defineConfig({
    plugins: [
        dts({
            include: ["./src/lib"],
            // 全部要用: --> dist/all.js
            // bundleTypes: true,
            compilerOptions: {
                types: ["astro/client"],
            },
        }),
    ],
    build: {
        lib: {
            // 按需可搖: --> dist/[components]/index.js
            entry,
            // 全部要用: --> dist/all.js
            // entry: resolve("./src/lib/all.ts"),
            formats: ["es"],
        },
    },
    publicDir: false,
})
