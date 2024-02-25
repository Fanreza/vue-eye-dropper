<script setup lang="ts">
import EyeDropper from './components/EyeDropper.vue'

const handleColorPicked = (color: string) => {
  console.log('Color picked:', color)
}
</script>

<template>
  <EyeDropper default-color="#fff" :height="25" :width="25" @colorPicked="handleColorPicked" />
</template>
