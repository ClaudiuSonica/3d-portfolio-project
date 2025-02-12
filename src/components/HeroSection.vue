<template>
  <section
      id="home"
      class="hero-section min-h-screen flex flex-col justify-center items-center text-white p-6 relative overflow-hidden">

    <!-- Parallax Background with Darkened Overlay -->
    <div :style="{ backgroundImage: `url(${bgImage})` }"
         class="absolute inset-0 bg-cover bg-center brightness-50">
    </div>

    <ParticleEffect/>

    <!-- Name & Title -->
    <div class="text-center">
      <h1 :class="{ 'opacity-100 translate-y-0': isVisible }"
          class="text-lg uppercase font-medium tracking-widest opacity-0 transition-transform duration-700">
        Hi, I'm
      </h1>
      <h2 :class="{ 'opacity-100 translate-y-0': isVisible }"
          class="text-5xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600 opacity-0 transition-transform duration-700 delay-200">
        Claudiu Sonica
      </h2>
    </div>

    <p class="text-lg text-gray-300 mt-4 mb-6 text-morph">
      <span :key="displayedText">{{ displayedText }}</span>
    </p>

    <!-- CTA Buttons -->
    <div :class="{ 'opacity-100': isVisible }"
         class="flex gap-4 opacity-0 transition-opacity duration-700 delay-600">
      <button class="cta-button">View My Work</button>
      <button class="cta-button secondary">Let's Connect</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import bgImage from '../assets/background/parallax-bg.jpg';
import ParticleEffect from "./ParticleEffect.vue";

const isVisible = ref(false);
const categories = [
  ["Innovative Thinker", "Problem Solver", "Detail-Oriented"],
  ["Curious by Nature", "Passionate About Tech", "Constant Learner"],
  ["Driven to Improve", "Creative & Logical", "Adaptable & Resilient"]
];

const currentCategoryIndex = ref(0);
const currentWordIndex = ref(0);
const displayedText = ref(categories[0][0]);

// Function to change words dynamically
const updateText = () => {
  const currentCategory = categories[currentCategoryIndex.value];
  currentWordIndex.value = (currentWordIndex.value + 1) % currentCategory.length;
  displayedText.value = currentCategory[currentWordIndex.value];

  // If we've cycled through all words in a category, switch categories
  if (currentWordIndex.value === 0) {
    currentCategoryIndex.value = (currentCategoryIndex.value + 1) % categories.length;
  }
};

onMounted(() => {
  isVisible.value = true;

  setInterval(updateText, 2500);
});
</script>

<style scoped>
/* ————————————————————————————————————————————————
   🌟 Hero Section with Darkened Background
   ———————————————————————————————————————————————— */
.hero-section {
  background: radial-gradient(circle at top, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 1));
  position: relative;
  text-align: center;
}

/* Darkened Background Overlay */
.bg-cover {
  filter: brightness(30%); /* Darkens image without losing detail */
}

/* ————————————————————————————————————————————————
   🔥 Dynamic Morphing Text Animation
   ———————————————————————————————————————————————— */
.text-morph {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  height: 1.5em; /* Prevents layout shift */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%; /* Prevents line breaks */
  max-width: 320px; /* Ensures proper fitting */
  white-space: nowrap; /* Prevents wrapping */
  overflow: hidden;
  position: relative;
}

/* Ensures words fade in/out smoothly */
.text-morph span {
  display: inline-block;
  opacity: 0;
  transform: translateY(10px) scale(0.95);
  animation: fadeInOut 2.5s ease-in-out infinite;
}

/* Keyframe to fade in, hold, then fade out */
@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
  }
  20% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  80% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
}

/* ————————————————————————————————————————————————
   ✨ Text Appearance Animation
   ———————————————————————————————————————————————— */
h1, h2 {
  transform: translateY(10px);
  transition: opacity 1s ease-in-out, transform 1s ease-out;
}

h1.opacity-100, h2.opacity-100 {
  transform: translateY(0);
}
</style>
