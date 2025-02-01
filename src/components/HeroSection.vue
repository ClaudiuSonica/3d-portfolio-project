<!-- src/components/HeroSection.vue -->
<script lang="ts" setup>
// No complex logic yet—this is a static introductory section.
// You can later enhance this component with interactive or 3D elements.
</script>

<template>
  <section
      class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-4">
    <h1 class="text-3xl md:text-5xl font-bold mb-2">Hi, I'm [Your Name]</h1>
    <p class="text-lg md:text-2xl mb-4">
      Full Stack Developer | Crafting modern, scalable web solutions.
    </p>
    <button
        class="bg-white text-gray-900 font-semibold py-2 px-4 rounded shadow hover:bg-gray-300 transition duration-200">
      View My Work
    </button>
  </section>
</template>

<style scoped>
/* Add any custom styles here if needed */
</style>
