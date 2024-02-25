<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  defaultColor?: string
  width?: number
  height?: number
}

const props = withDefaults(defineProps<Props>(), {
  defaultColor: '#fff',
  width: 25,
  height: 25
})

const emit = defineEmits<{
  colorPicked: [string]
}>()

const colorPick = ref<string>('')
const colorValue = computed(() => colorPick.value || props.defaultColor || '#fff')

interface ResultDropper {
  sRGBHex: string
}

const pickDrop = () => {
  // @ts-ignore
  const eyedropper = new EyeDropper()

  eyedropper.open().then((result: ResultDropper) => {
    colorPick.value = result?.sRGBHex
    emit('colorPicked', result?.sRGBHex)
  })
}
</script>

<template>
  <button @click="pickDrop"></button>
</template>

<style scoped>
button {
  width: v-bind(width + 'px');
  height: v-bind(height + 'px');
  background-color: v-bind(colorValue);
  border-radius: 25%;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #000;
}
</style>
