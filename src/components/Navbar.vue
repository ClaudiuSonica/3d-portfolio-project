<template>
  <!-- Fixed Top Navigation Bar -->
  <nav
      class="navbar bg-gray-900 text-white px-4 py-3 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md">
    <!-- Desktop Menu: Hidden on small screens -->
    <div class="hidden md:flex space-x-6">
      <a class="hover:text-yellow-500 transition duration-200" href="#home">Home</a>
      <a class="hover:text-yellow-500 transition duration-200" href="#about">About</a>
      <a class="hover:text-yellow-500 transition duration-200" href="#projects">Projects</a>
      <a class="hover:text-yellow-500 transition duration-200" href="#contact">Contact</a>
    </div>
    <!-- Mobile Menu Button: Visible on small screens -->
    <div class="md:hidden">
      <button aria-label="Toggle navigation menu" class="focus:outline-none" @click="toggleMenu">
        <svg v-if="!isOpen" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
        <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile Sidebar Navigation with Overlay -->
  <transition name="slide">
    <div v-if="isOpen" class="fixed inset-0 z-40 flex">
      <!-- Overlay -->
      <div class="fixed inset-0 bg-black opacity-50" @click="toggleMenu"></div>
      <!-- Sidebar -->
      <aside class="relative bg-gray-900 text-white w-64 h-full p-6 overflow-y-auto flex flex-col">
        <nav class="menu-list space-y-4">
          <!-- Navigation items with animated appearance -->
          <div class="flex items-center nav-item">
            <StaticIcon :height="32" :src="iconHome" :width="32" alt="Home Icon" extraClasses="mr-2"/>
            <a class="block text-lg hover:text-yellow-500 transition duration-200" href="#home"
               @click="toggleMenu">Home</a>
          </div>
          <div class="flex items-center nav-item">
            <StaticIcon :height="32" :src="iconProjects" :width="32" alt="Projects Icon" extraClasses="mr-2"/>
            <a class="block text-lg hover:text-yellow-500 transition duration-200" href="#projects"
               @click="toggleMenu">Projects</a>
          </div>
          <div class="flex items-center nav-item">
            <StaticIcon :height="32" :src="iconAbout" :width="32" alt="About Icon" extraClasses="mr-2"/>
            <a class="block text-lg hover:text-yellow-500 transition duration-200" href="#about"
               @click="toggleMenu">About</a>
          </div>
          <div class="flex items-center nav-item">
            <StaticIcon :height="32" :src="iconContact" :width="32" alt="Contact Icon" extraClasses="mr-2"/>
            <a class="block text-lg hover:text-yellow-500 transition duration-200" href="#contact"
               @click="toggleMenu">Contact</a>
          </div>
        </nav>
        <!-- Footer with Light Beam & Bulb Effect -->
        <div class="nav-footer relative mt-auto pt-4">
          <div class="light-container">
            <div class="light-bulb"></div>
            <div class="light-beam"></div>
          </div>
        </div>
      </aside>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import StaticIcon from './StaticIcon.vue'
import iconHome from '../assets/icons/home-icon.png'
import iconAbout from '../assets/icons/about-icon.png'
import iconProjects from '../assets/icons/projects-icon.png'
import iconContact from '../assets/icons/contact-icon.png'

// Reactive state to control mobile menu visibility
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
/* Slide transition for the mobile sidebar */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}

/* Animation for nav items: fade and slide in */
@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

aside {
  background: rgba(25, 25, 25, 0.4); /* Darker glass */
  backdrop-filter: blur(12px) saturate(150%);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.navbar {
  background: rgba(25, 25, 25, 0.4); /* Darker glass */
  backdrop-filter: blur(12px) saturate(150%);
}

.menu-list {
  margin-top: 25%;
}

nav a {
  position: relative;
  padding: 8px 12px;
  display: inline-block;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #facc15, transparent);
  transform: scaleX(0);
  transition: transform 0.3s ease-out;
}

nav a:hover::after,
nav a:focus::after {
  transform: scaleX(1);
}

/* Footer styling in the sidebar */
.nav-footer {
  position: relative;
  height: 50%; /* Occupies the bottom half of the sidebar */
}

/* ————————————————————————————————————————————————
   Light Bulb
   — A smaller, subtler glow, with a gentle flicker
   ———————————————————————————————————————————————— */
.light-bulb {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  /* A smoother gradient for the bulb glow */
  background: radial-gradient(circle at center, #facc15 55%, transparent 75%);
  border-radius: 50%;
  /* A bit of a glow "halo" around the bulb */
  box-shadow: 0 0 20px 8px rgba(250, 204, 21, 0.6);
  animation: bulbFlicker 3s infinite steps(20, end);
  z-index: 2;
}

/* ————————————————————————————————————————————————
   Light Beam
   — A mild upward gradient that tapers out
   ———————————————————————————————————————————————— */
.light-beam {
  position: absolute;
  bottom: 35px; /* Start just above the bulb */
  left: 50%;
  transform: translateX(-50%);
  /* Use a radial gradient as the beam,
     or you could use clip-path to create a true cone shape. */
  width: 200px;
  height: 200px;
  background: radial-gradient(
      circle at 50% 100%,
      rgba(250, 204, 21, 0.35),
      rgba(250, 204, 21, 0.07),
      transparent 80%
  );
  /* Soften edges with blur plus reduced opacity */
  filter: blur(25px);
  opacity: 0.8;
  animation: beamPulse 5s ease-in-out infinite;
  z-index: 1;
}

/* ————————————————————————————————————————————————
   Subtle Flicker (Bulb)
   — Randomized changes in opacity mimic a flicker
   — “steps(20, end)” keeps the flicker from being too smooth
   ———————————————————————————————————————————————— */
@keyframes bulbFlicker {
  0% {
    opacity: 0.90;
  }
  10% {
    opacity: 1;
  }
  20% {
    opacity: 0.95;
  }
  30% {
    opacity: 0.98;
  }
  50% {
    opacity: 0.87;
  }
  65% {
    opacity: 1;
  }
  75% {
    opacity: 0.92;
  }
  100% {
    opacity: 0.95;
  }
}

/* ————————————————————————————————————————————————
   Gentle Breathing Pulse (Beam)
   — Slowly “breathes” in and out over 5s
   ———————————————————————————————————————————————— */
@keyframes beamPulse {
  0%, 100% {
    transform: translateX(-50%) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translateX(-50%) scale(1.1);
    opacity: 1;
  }
}
</style>
