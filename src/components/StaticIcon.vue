<template>
  <!-- Wrap the icon in a container for positioning the spark overlay -->
  <div class="relative inline-block">
    <!-- The icon gets a floating effect -->
    <img
        :alt="alt"
        :class="['floating-icon', extraClasses]"
        :height="height"
        :src="src"
        :width="width"
    />
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue'

const props = defineProps({
  src: {type: String, required: true},
  alt: {type: String, default: 'Icon'},
  width: {type: Number, default: 32},
  height: {type: Number, default: 32},
  extraClasses: {type: String, default: ''}
})
</script>

<style scoped>
/* Floating animation: the icon gently bobs up and down */
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}

.floating-icon {
  animation: float 3s ease-in-out infinite;
}
</style>
