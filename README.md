
## vue-eye-dropper
Vue wrapper for EyeDropper instance

[Demo](https://stackblitz.com/edit/vuepic-vue-datepicker?file=src%2Fcomponents%2FPlayground.vue)

## Install

```shell
npm i vue-eye-dropper
```

Import and register component

**Global**

```js
import { createApp } from 'vue';
import App from './App.vue';

import  { EyeDropper }  from  'vue-eye-dropper'
import  'vue-eye-dropper/dist/style.css'

const app = createApp(App);
app.component('EyeDropper', EyeDropper);
```

**Local**

```vue
<script>
import  { EyeDropper }  from  'vue-eye-dropper'
import  'vue-eye-dropper/dist/style.css'
</script>

<template>
    <EyeDropper />
</template>
```

**Browser Support**

[caniuse](https://caniuse.com/?search=eyedropper)


| Browser | Version |
|--|--|
| Chrome | 95-125 |
| Edge | 121 |
| Opera | 81-106 |
