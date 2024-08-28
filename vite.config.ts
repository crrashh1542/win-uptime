import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// 导入预启动项目脚本
import prebuild from './scripts/prebuild.mjs'
prebuild()

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // 不解析 fluent- 开头的 Web Component 元素
                    isCustomElement: (tag) => tag.startsWith('fluent-'),
                },
            },
        }),
        VitePWA({
            includeAssets: [
                'favicon.ico',
                'apple-touch-icon.png',
                'mask-icon.svg',
            ],
            injectRegister: 'script-defer',
            manifest: {
                name: 'Windows Up-to-Date',
                short_name: 'Winutd',
                description:
                    "一个 Windows 系统版本实时统计站点 / A site showing latest status of Windows' development",
                theme_color: '#f6f8fe',
                icons: [
                    {
                        src: 'pwa-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
    server: {
        port: 14724,
        host: true,
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
                    if (id.includes('@vue')) {
                        return 'vendors/vue-rt'
                    }
                    if (id.includes('vue-router')) {
                        return 'vendors/router'
                    }
                    if (
                        id.includes('@microsoft/fast-colors') ||
                        id.includes('@microsoft/fast-element')
                    ) {
                        return 'vendors/ms'
                    }
                    if (
                        id.includes('@microsoft/fast-foundation') ||
                        id.includes('@fluentui/web-components')
                    ) {
                        return 'vendors/ui'
                    }
                },
            },
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    // 引入@作为./src的alias
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@a': fileURLToPath(new URL('./src/assets', import.meta.url)),
            '@s': fileURLToPath(new URL('./src/styles', import.meta.url)),
        },
    },
})
