<template>
  <section id="projects" class="projects-section py-12 px-4 sm:px-6 md:px-8 text-white">
    <ParticleEffect/>

    <!-- Section Title with Animation -->
    <div class="section-title-container">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-8 md:mb-12 section-title">
        <span class="emoji-icon">💡</span> Hobby Projects
      </h2>
    </div>

    <!-- Projects Grid - Responsive Layout -->
    <div v-if="githubProjects.length > 0" 
         class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
      <ProjectCard v-for="project in githubProjects" :key="project.title" :project="project"/>
    </div>

    <!-- Loading State -->
    <div v-else class="loading-container">
      <p class="text-center text-gray-400">Loading GitHub projects...</p>
      <div class="loading-spinner"></div>
    </div>

  </section>
</template>

<script lang="ts" setup>
import {useProjects} from '../composable/useProjects';
import ProjectCard from "./ProjectCard.vue";
import ParticleEffect from "./ParticleEffect.vue";

// 🔥 Fetch projects using the composable
const {githubProjects} = useProjects();
</script>

<style scoped>
.projects-section {
  position: relative;
  background: rgba(0, 0, 0, 1);
  min-height: 50vh; /* Ensure minimum height even when loading */
}

/* Section Title Animation */
.section-title-container {
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
}

.section-title {
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.section-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, #facc15, transparent);
  animation: shimmer 2s infinite;
}

.emoji-icon {
  display: inline-block;
  animation: bounce 2s ease infinite;
  margin-right: 0.5rem;
}

/* Loading Spinner */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
}

.loading-spinner {
  margin-top: 1.5rem;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top-color: #facc15;
  animation: spin 1s ease-in-out infinite;
}

/* Animations */
@keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
  }
}
</style>
