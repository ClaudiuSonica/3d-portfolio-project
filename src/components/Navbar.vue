<!-- src/components/Navbar.vue -->
<script lang="ts" setup>
import {ref} from 'vue'
import StaticIcon from './StaticIcon.vue'
import iconHome from '../assets/icons/home-icon.png'
import iconAbout from '../assets/icons/about-icon.png'
import iconProjects from '../assets/icons/projects-icon.png'
import iconContact from '../assets/icons/contact-icon.png'

// Reactive state to control mobile menu visibility
const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <!-- Fixed Top Navigation Bar -->
  <nav
      class="bg-gray-900 text-white px-4 py-3 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md">
    <!-- Branding -->
    <div class="text-xl font-bold">[Your Name]</div>
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
        <div class="flex items-center justify-between mb-8">
          <span class="text-xl font-bold">Navigation</span>
          <button aria-label="Close menu"
                  class="focus:outline-none text-gray-400 hover:text-yellow-500 transition duration-200"
                  @click="toggleMenu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
          </button>
        </div>
        <nav class="space-y-4">
          <!-- Navigation items with animated appearance -->
          <div class="flex items-center nav-item">
            <StaticIcon :height="32" :src="iconHome" :width="32" alt="Home Icon" extraClasses="mr-2"/>
            <a class="block text-lg hover:text-yellow-500 transition duration-200" href="#home"
               @click="toggleMenu">Home</a>
          </div>
          <div class="flex items-center nav-item">
            <StaticIcon :height="32" :src="iconAbout" :width="32" alt="About Icon" extraClasses="mr-2"/>
            <a class="block text-lg hover:text-yellow-500 transition duration-200" href="#about" @click="toggleMenu">About</a>
          </div>
          <div class="flex items-center nav-item">
            <StaticIcon :height="32" :src="iconProjects" :width="32" alt="Projects Icon" extraClasses="mr-2"/>
            <a class="block text-lg hover:text-yellow-500 transition duration-200" href="#projects" @click="toggleMenu">Projects</a>
          </div>
          <div class="flex items-center nav-item">
            <StaticIcon :height="32" :src="iconContact" :width="32" alt="Contact Icon" extraClasses="mr-2"/>
            <a class="block text-lg hover:text-yellow-500 transition duration-200" href="#contact" @click="toggleMenu">Contact</a>
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

.nav-item {
  opacity: 0;
  animation: fadeSlide 0.5s ease forwards;
}

.nav-item:nth-child(1) {
  animation-delay: 0.1s;
}

.nav-item:nth-child(2) {
  animation-delay: 0.2s;
}

.nav-item:nth-child(3) {
  animation-delay: 0.3s;
}

.nav-item:nth-child(4) {
  animation-delay: 0.4s;
}

/* Footer styling in the sidebar */
.nav-footer {
  position: relative;
  height: 50%; /* Occupies the bottom half of the sidebar */
}

/* Light Container to hold both the bulb and beam */
.light-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Light Bulb (the source of light) */
.light-bulb {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background: radial-gradient(circle, #facc15 60%, transparent 70%);
  border-radius: 50%;
  box-shadow: 0 0 30px 10px rgba(250, 204, 21, 0.8);
  animation: bulbPulse 3s ease-in-out infinite;
  z-index: 2;
}

/* Light Beam (the spreading light) */
.light-beam {
  position: absolute;
  bottom: 25px; /* Start just above the bulb */
  left: 50%;
  transform: translateX(-50%);
  width: 200px; /* Wider beam */
  height: 100%; /* Extend upward through the footer */
  background: linear-gradient(to top, rgba(250, 204, 21, 0.7), transparent);
  filter: blur(50px);
  opacity: 0.8;
  animation: beamPulse 3s ease-in-out infinite;
  z-index: 1;
}

/* Bulb pulse animation */
@keyframes bulbPulse {
  0%, 100% {
    transform: translateX(-50%) scale(1);
    opacity: 0.9;
  }
  50% {
    transform: translateX(-50%) scale(1.1);
    opacity: 1;
  }
}

/* Beam pulse animation */
@keyframes beamPulse {
  0%, 100% {
    opacity: 0.8;
    transform: translateX(-50%) scaleY(0.95);
  }
  50% {
    opacity: 1;
    transform: translateX(-50%) scaleY(1.05);
  }
}
</style>
