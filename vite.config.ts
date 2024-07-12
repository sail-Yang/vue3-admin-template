import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import path from "path";
const pathSrc = path.resolve(__dirname, "src");


export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue"],
      dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"),// 指定自动导入函数TS类型声明文件路径
    }),
    Components({
      dts: path.resolve(pathSrc, "types", "components.d.ts"), // 指定自动导入组件TS类型声明文件路径
    }),
  ],
  resolve: {
    alias: {
      "@": pathSrc,
    },
  }
})
