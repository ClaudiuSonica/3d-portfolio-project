<script lang="ts" setup>
import {onMounted, ref} from 'vue';

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});
</script>

<template>
  <section
      class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-4">

    <!-- Name & Title -->
    <h1 :class="{ 'opacity-100': isVisible }"
        class="text-4xl font-extrabold tracking-wide mb-2 opacity-0 transition-opacity duration-700">
      Hi, I'm <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">[Your Name]</span>
    </h1>

    <p :class="{ 'opacity-100': isVisible }"
       class="text-lg text-gray-300 mb-6 opacity-0 transition-opacity duration-700 delay-200">
      Full-Stack Developer | Crafting modern, scalable web solutions.
    </p>

    <!-- CTA Buttons -->
    <div :class="{ 'opacity-100': isVisible }"
         class="flex gap-4 opacity-0 transition-opacity duration-700 delay-400">
      <button class="cta-button">View My Work</button>
      <button class="cta-button secondary">Let's Connect</button>
    </div>
  </section>
</template>

<style scoped>
/* ————————————————————————————————————————————————
   ⚡️ CTA Buttons (Enhanced for Mobile)
   ———————————————————————————————————————————————— */
.cta-button {
  font-size: 1rem;
  font-weight: bold;
  padding: 14px 24px;
  border-radius: 8px;
  background: linear-gradient(to right, #facc15, #ff9800);
  color: #222;
  box-shadow: 0 4px 10px rgba(255, 165, 0, 0.3);
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
}

/* Button Tap Interaction */
.cta-button:active {
  transform: scale(0.97);
  box-shadow: 0 2px 5px rgba(255, 165, 0, 0.3);
}

/* Subtle Glow Effect on Idle */
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 4px 10px rgba(255, 165, 0, 0.3);
  }
  50% {
    box-shadow: 0 6px 15px rgba(255, 165, 0, 0.4);
  }
}

.cta-button {
  animation: glowPulse 3s infinite alternate;
}

/* Secondary Button */
.cta-button.secondary {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.6);
  color: white;
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: white;
}

/* Ripple Effect */
.cta-button::after {
  content: "";
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  border-radius: 50%;
  opacity: 0;
  transition: transform 0.4s, opacity 0.4s;
}

.cta-button:active::after {
  transform: translate(-50%, -50%) scale(2);
  opacity: 0.2;
}
</style>
