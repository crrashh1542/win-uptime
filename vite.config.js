import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

// 导入预启动项目脚本
import prebuild from './scripts/prebuild.mjs'
prebuild()

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [vue({
      template: {
         compilerOptions: {
            // 不解析 fluent- 开头的 Web Component 元素
            isCustomElement: tag => tag.startsWith('fluent-')
         }
      }
   })],
   resolve: {},
   server: {
      port: 14724,
      host: true
   },
   build: {
      rollupOptions: {
         output: {
            hashCharacters: 'hex',
            assetFileNames: '_wu/[name].[hash].[ext]',
            chunkFileNames: '_wu/[name].[hash].js',
            entryFileNames: '_wu/[name].[hash].js',
         }
      }
   },
   css: {
      preprocessorOptions: {
         less: {
            javascriptEnabled: true
         }
      }
   },
   // 引入@作为./src的alias
   resolve: {
      alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url)),
         '@a': fileURLToPath(new URL('./src/assets', import.meta.url)),
         '@s': fileURLToPath(new URL('./src/styles', import.meta.url))
      },
   },
})
