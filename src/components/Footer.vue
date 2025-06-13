<template>
  <footer class="footer-section relative py-8 px-4 sm:px-6 md:px-8 text-white">
    <div class="max-w-5xl mx-auto">
      <!-- Glassmorphic Container for Footer -->
      <div class="footer-container rounded-lg p-6 sm:p-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Logo & Tagline -->
          <div class="text-center md:text-left">
            <h3 class="text-xl font-bold mb-2">Claudiu Sonica</h3>
            <p class="text-sm text-gray-300">Crafting digital experiences with passion and precision</p>
          </div>

          <!-- Quick Links -->
          <div class="text-center">
            <h3 class="text-lg font-semibold mb-3">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="#home" class="footer-link">Home</a></li>
              <li><a href="#projects" class="footer-link">Projects</a></li>
              <li><a href="#about" class="footer-link">About</a></li>
              <li><a href="#contact" class="footer-link">Contact</a></li>
            </ul>
          </div>

          <!-- Social Media -->
          <div class="text-center md:text-right">
            <h3 class="text-lg font-semibold mb-3">Connect</h3>
            <div class="flex justify-center md:justify-end space-x-4">
              <a href="https://www.linkedin.com/in/claudiu-sonica-395aab218/" target="_blank" class="social-icon" aria-label="LinkedIn">
                <Icon icon="mdi:linkedin" class="text-2xl" />
              </a>
              <a href="https://github.com/ClaudiuSonica" target="_blank" class="social-icon" aria-label="GitHub">
                <Icon icon="mdi:github" class="text-2xl" />
              </a>
              <a href="mailto:contact@example.com" class="social-icon" aria-label="Email">
                <Icon icon="mdi:email" class="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="divider my-6"></div>

        <!-- Copyright -->
        <div class="text-center text-sm text-gray-400">
          <p>&copy; {{ year }} Claudiu Sonica. All rights reserved.</p>
          <p class="mt-2">Made with <span class="heart">❤️</span> using Vue & Three.js</p>
        </div>
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

.footer-container {
  background: rgba(25, 25, 25, 0.2);
  backdrop-filter: blur(12px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 2px;
}

.footer-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #facc15, transparent);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.footer-link:hover {
  color: #facc15;
}

.footer-link:hover::after {
  transform: scaleX(1);
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: rgba(250, 204, 21, 0.2);
  color: #facc15;
  transform: translateY(-3px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
}

.heart {
  display: inline-block;
  animation: heartbeat 1.5s ease infinite;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>
