<template>
  <section
      class="hero-section min-h-screen flex flex-col justify-center items-center text-white p-6 relative overflow-hidden">

    <!-- Parallax Background with Darkened Overlay -->
    <div :style="{ backgroundImage: `url(${bgImage})` }"
         class="absolute inset-0 bg-cover bg-center brightness-50">
    </div>

    <!-- Floating Particles -->
    <div class="floating-particles">
      <span v-for="particle in particles" :key="particle.id"
            :style="{
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
              animationDuration: particle.duration,
            }"
            class="particle">
      </span>
    </div>

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

const isVisible = ref(false);
const particles = ref([]);
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

  // Generate dynamic particles
  for (let i = 0; i < 50; i++) {
    particles.value.push({
      id: i,
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      size: Math.random() * 6 + 3 + 'px', // Random size between 3px - 9px
      duration: Math.random() * 4 + 3 + 's', // Different animation speeds
    });
  }

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
   ✨ Floating Particles (Dynamic & Interactive)
   ———————————————————————————————————————————————— */
.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  animation: float infinite ease-in-out alternate;
}

/* Floating Effect */
@keyframes float {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.6;
  }
  100% {
    transform: translateY(-15px) scale(1.1);
    opacity: 1;
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
