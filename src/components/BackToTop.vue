<template>
  <!-- Only display the button when showButton is true -->
  <button
      v-if="showButton"
      aria-label="Back to Top"
      class="fixed back-btn bottom-4 right-4 bg-gray-900 bg-opacity-20 backdrop-blur-xl border border-white/20 text-white p-4 rounded-full transition duration-300"
      @click="scrollToTop"
  >
    <!-- Using Iconify's arrow icon -->
    <Icon class="text-2xl" icon="mdi:arrow-up"/>
  </button>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted, ref} from 'vue';

// Reactive flag to track whether the button should be visible.
const showButton = ref(false);

// Toggle button visibility based on scroll position.
const handleScroll = () => {
  showButton.value = window.scrollY > 200; // Show if scrolled more than 100px.
};

// Smooth scroll to top function.
const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

// Attach the scroll listener when the component mounts.
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Clean up the listener when the component unmounts.
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.back-btn {
  background: rgba(25, 25, 25, 0.2);
  backdrop-filter: blur(12px) saturate(150%);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
