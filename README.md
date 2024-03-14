## vue-eye-dropper

Vue wrapper for EyeDropper instance

## Install

```shell
npm i vue-eye-dropper
```

Import and register component

**Global**

```js
import { createApp } from 'vue'
import App from './App.vue'

import { EyeDropper } from 'vue-eye-dropper'

const app = createApp(App)
app.component('EyeDropper', EyeDropper)
```

**Local**

```vue
<script setup lang="ts">
import { EyeDropper } from 'vue-eye-dropper'

const handleColorPicked = (color: string) => {
  console.log('Color picked:', color)
}
</script>

<template>
  <EyeDropper default-color="#fff" :height="25" :width="25" @colorPicked="handleColorPicked" />
</template>
```

**Browser Support**

[caniuse](https://caniuse.com/?search=eyedropper)

| Browser | Version |
| ------- | ------- |
| Chrome  | 95-125  |
| Edge    | 121     |
| Opera   | 81-106  |

## Props

| Name         | Value          | Default |
| ------------ | -------------- | ------- |
| defaultColor | srgbHex String | #fff    |
| width        | number         | 25      |
| height       | number         | 25      |

## Events

| Name        | Value          |
| ----------- | -------------- |
| colorPicked | srgbHex String |
