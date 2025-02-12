<template>
  <footer class="footer-section relative py-4 px-4 text-white">
    <div class="max-w-4xl mx-auto">
      <!-- Glassmorphic Container for Footer -->
      <div
          class="footer-container">
        <p class="text-center mb-4 md:mb-0">&copy; {{ year }} Claudiu Sonica. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.footer-section {
  background: rgba(0, 0, 0, 1);
}
</style>
