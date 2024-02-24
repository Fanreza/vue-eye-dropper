import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    }),
    cssInjectedByJsPlugin(),
    typescript({
      checkJs: false,
      include: ['src/components/**/*.vue'],
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      sourceMap: true,
      exclude: ['vite.config.ts']
    })
  ],
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'VueEyeDropper',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `vue-eye-dropper.${format}.js`
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/components/main.ts')
      },
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
