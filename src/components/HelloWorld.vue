<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold text-red-500 mb-6">Hello, Tailwind!</h1>
    <button
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      Click Me
    </button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
