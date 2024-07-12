import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import path from "path";
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
const pathSrc = path.resolve(__dirname, "src");


export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue"],
      dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"),// 指定自动导入函数TS类型声明文件路径
      resolvers: [
        // 自动导入 Element Plus 相关函数
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({}),
      ],
      vueTemplate: true,
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"] // element-plus图标库，其他图标库 https://icon-sets.iconify.design/
        }),
      ],
      dts: path.resolve(pathSrc, "types", "components.d.ts"), // 指定自动导入组件TS类型声明文件路径
    }),
    Icons({
      // 自动安装图标库
      autoInstall: true,
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    })
  ],
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  css: {
    // CSS 预处理器
    preprocessorOptions: {
      // 定义全局 SCSS 变量
      scss: {
        javascriptEnabled: true,
        additionalData: `
          @use "@/styles/variables.scss" as *;
        `,
      },
    },
  },
})
