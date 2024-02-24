import type { App } from 'vue'
import { EyeDropper } from '@/components'

export default {
  install: (app: App) => {
    app.component('EyeDropper', EyeDropper)
  }
}

export { EyeDropper }
