<template>
  <div class="project-card">
    <img :alt="project.title" :src="project.image" class="project-image"/>

    <div class="p-4">
      <h3 class="text-xl font-semibold">{{ project.title }}</h3>
      <p class="text-gray-300 text-sm mt-2">{{ project.description }}</p>

      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="tech in project.tech" :key="tech"
              class="tech-badge">{{ tech }}</span>
      </div>

      <div class="mt-4 flex gap-4">
        <a v-if="project.live" :href="project.live" class="cta-button" target="_blank">Live Demo</a>
        <a v-if="project.repo" :href="project.repo" class="cta-button secondary" target="_blank">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(["project"]);
</script>

<style scoped>
/* ————————————————————————————————————————————————
   🔥 Project Card Styling
   ———————————————————————————————————————————————— */
.project-card {
  background: rgba(25, 25, 25, 0.6);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 165, 0, 0.3);
}

/* ————————————————————————————————————————————————
   📷 Project Image Styling
   ———————————————————————————————————————————————— */
.project-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

/* ————————————————————————————————————————————————
   🏷️ Tech Badges
   ———————————————————————————————————————————————— */
.tech-badge {
  font-size: 0.75rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  text-transform: uppercase;
}

/* ————————————————————————————————————————————————
   ⚡️ CTA Buttons (Live Demo & GitHub)
   ———————————————————————————————————————————————— */
.cta-button {
  font-size: 0.9rem;
  font-weight: bold;
  padding: 10px 16px;
  border-radius: 8px;
  background: linear-gradient(to right, #facc15, #ff9800);
  color: #222;
  transition: all 0.2s ease-in-out;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(255, 165, 0, 0.3);
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
</style>