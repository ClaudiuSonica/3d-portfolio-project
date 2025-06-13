<template>
  <div class="floating-particles">
    <span
        v-for="particle in particles"
        :key="particle.id"
        :style="{
        top: particle.top,
        left: particle.left,
        width: particle.size,
        height: particle.size,
        animationDuration: particle.duration,
      }"
        class="particle"
    ></span>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';

const particles = ref([]);

// Generate dynamic particles once the component is mounted
onMounted(() => {
  for (let i = 0; i < 50; i++) {
    particles.value.push({
      id: i,
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      size: Math.random() * 6 + 3 + 'px', // Random size between 3px and 9px
      duration: Math.random() * 4 + 3 + 's', // Animation duration between 3s and 7s
    });
  }
});
</script>

<style scoped>
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
</style>
