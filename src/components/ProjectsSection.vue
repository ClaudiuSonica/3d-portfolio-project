<template>
  <section class="projects-section py-12 px-6 text-white">

    <!--    &lt;!&ndash; Work Projects &ndash;&gt;-->
    <!--    <h2 class="text-3xl font-bold text-center mb-8">💼 Work Projects</h2>-->
    <!--    <div v-if="workProjects.length > 0" class="grid grid-cols-1 gap-6">-->
    <!--      <ProjectCard v-for="project in workProjects" :key="project.title" :project="project"/>-->
    <!--    </div>-->
    <!--    <p v-else class="text-center text-gray-400">No work projects available yet.</p>-->

    <!-- Hobby Projects (Fetched from GitHub) -->
    <h2 class="text-3xl font-bold text-center mt-12 mb-8">💡 Hobby Projects</h2>
    <div v-if="githubProjects.length > 0" class="grid grid-cols-1 gap-6">
      <ProjectCard v-for="project in githubProjects" :key="project.title" :project="project"/>
    </div>
    <p v-else class="text-center text-gray-400">Loading GitHub projects...</p>

  </section>
</template>

<script lang="ts" setup>
import {useProjects} from '../composable/useProjects';
import ProjectCard from "./ProjectCard.vue";

// 🔥 Fetch projects using the composable
const {githubProjects} = useProjects();
</script>

<style scoped>
.projects-section {
  background: rgba(0, 0, 0, 0.8);
}
</style>
