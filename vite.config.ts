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
   server: {
      port: 14724,
      host: true
   },
   build: {
      rollupOptions: {
         output: {
            hashCharacters: 'hex',
            assetFileNames: '_wu/assets/[name].[hash].[ext]',
            chunkFileNames: '_wu/[name].[hash].js',
            entryFileNames: '_wu/[name].[hash].js',
            minifyInternalExports: true,
            manualChunks(id) {
               if(id.includes('@vue/runtime-core')) {
                  return 'vendors/vue-runtime'
               }
               if(id.includes('@vue/reactivity')) {
                  return 'vendors/vue-reactivity'
               }
               if(id.includes('vue-router')) {
                  return 'vendors/router'
               }
               if(id.includes('@microsoft/fast-colors') ||
                  id.includes('@microsoft/fast-element')) {
                     return 'vendors/ms1'
                  }
               if(id.includes('@microsoft/fast-foundation')) {
                  return 'vendors/ms2'
               }
               if(id.includes('@fluentui/web-components')){
                  return 'vendors/fluentui'
               }
            }
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
