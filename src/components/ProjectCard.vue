<template>
  <transition name="fade">
    <div class="project-card">
      <img :alt="project.title" :src="project.image" class="project-image"/>

      <div class="p-4">
        <h3 class="text-xl font-semibold">{{ project.title }}</h3>
        <p class="text-gray-300 text-sm mt-2">{{ project.description }}</p>

        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="tech in filteredTech" :key="tech" class="tech-badge">
            {{ tech }}
          </span>
        </div>

        <div class="mt-4 flex gap-4">
          <a
              v-if="project.live"
              :href="project.live"
              class="cta-button"
              target="_blank"
          >
            Live Demo
          </a>
          <a
              v-if="project.repo"
              :href="project.repo"
              class="cta-button secondary"
              target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const filteredTech = computed(() => {
  return (props.project?.tech || []).filter(
      (tech: string) => tech.toLowerCase() !== "portfolio"
  );
});
</script>

<style scoped>
/* ---------- Fade Transition ---------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ---------- Base Project Card Styling ---------- */
.project-card {
  position: relative;
  background: rgba(25, 25, 25, 0.8);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
  /* Intense yellow box shadow */
  box-shadow: 0 4px 8px rgba(255, 215, 0, 0.8);
  /* Slow pulse animation on the card itself */
  animation: cardPulse 3s ease-in-out infinite;
}

/* Pause pulse animation on tap/active state and provide feedback */
.project-card:active {
  transform: scale(0.98);
  animation-play-state: paused;
}

/* ---------- Keyframes for Card Pulse Animation ---------- */
@keyframes cardPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

/* ---------- Project Image Styling ---------- */
.project-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

/* ---------- Tech Badges ---------- */
.tech-badge {
  font-size: 0.75rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  text-transform: uppercase;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

/* ---------- CTA Buttons ---------- */
.cta-button {
  font-size: 0.9rem;
  font-weight: bold;
  padding: 10px 16px;
  border-radius: 8px;
  background: linear-gradient(to right, #facc15, #ff9800);
  color: #222;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(255, 215, 0, 0.8);
}

.cta-button.secondary {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.6);
  color: white;
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: white;
}

/* ---------- Mobile-Specific Adjustments ---------- */
@media (max-width: 768px) {
  /* Disable hover effects on touch devices */
  .tech-badge:hover,
  .cta-button:hover,
  .cta-button.secondary:hover {
    transform: none;
    box-shadow: none;
  }
}
</style>
