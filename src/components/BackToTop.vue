<template>
  <!-- Only display the button when showButton is true -->
  <transition name="fade">
    <button
        v-if="showButton"
        aria-label="Back to Top"
        class="fixed back-btn bottom-4 right-4 text-white p-3 sm:p-4 transition-all duration-300 hover:scale-110"
        @click="scrollToTop"
    >
      <!-- Using Iconify's arrow icon with responsive size -->
      <Icon class="text-xl sm:text-2xl" icon="mdi:arrow-up"/>
    </button>
  </transition>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted, ref} from 'vue';

// Reactive flag to track whether the button should be visible.
const showButton = ref(false);

// Toggle button visibility based on scroll position.
const handleScroll = () => {
  showButton.value = window.scrollY > 200; // Show if scrolled more than 200px.
};

// Smooth scroll to top function.
const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

// Attach the scroll listener when the component mounts.
onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // Initial check in case page is already scrolled
  handleScroll();
});

// Clean up the listener when the component unmounts.
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.back-btn {
  background: rgba(25, 25, 25, 0.4); /* Darker glass like navbar */
  backdrop-filter: blur(12px) saturate(150%);
  border-radius: 50%; /* Make it perfectly round */
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  /* Add a subtle glow effect similar to CTA buttons */
  animation: glowPulse 3s infinite alternate;
}

/* Hover effect with scale and glow */
.back-btn:hover {
  border-color: rgba(250, 204, 21, 0.6); /* Yellow glow on hover like other elements */
  box-shadow: 0 0 15px rgba(250, 204, 21, 0.4);
}

/* Active state */
.back-btn:active {
  transform: scale(0.95);
}

/* Fade transition for smooth appearance/disappearance */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Subtle glow animation matching CTA buttons */
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  50% {
    box-shadow: 0 6px 15px rgba(250, 204, 21, 0.3);
  }
}

/* Media query for smaller devices */
@media (max-width: 640px) {
  .back-btn {
    bottom: 1rem;
    right: 1rem;
  }
}
</style>
