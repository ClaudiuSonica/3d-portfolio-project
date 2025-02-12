<template>
  <section id="contact" class="contact-section relative py-16 px-4 text-white">
    <ParticleEffect/>
    <div class="max-w-4xl mx-auto">
      <!-- Glassmorphic Container -->
      <div class="contact-container rounded-lg p-8 shadow-lg">
        <!-- Header: Title and Description -->
        <div class="flex flex-col items-center mb-8">
          <h2 class="text-4xl font-extrabold mb-4">Contact Me</h2>
          <p class="text-lg text-center">
            I’d love to hear from you! Please fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>
        <!-- Contact Form -->
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <!-- Name Field -->
          <div class="flex flex-col">
            <label class="mb-2 font-semibold" for="name">Name</label>
            <input
                id="name"
                v-model="name"
                class="w-full p-3 rounded-lg bg-black bg-opacity-30 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Name"
                required
                type="text"
            />
          </div>
          <!-- Email Field -->
          <div class="flex flex-col">
            <label class="mb-2 font-semibold" for="email">Email</label>
            <input
                id="email"
                v-model="email"
                class="w-full p-3 rounded-lg bg-black bg-opacity-30 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Email"
                required
                type="email"
            />
          </div>
          <!-- Message Field -->
          <div class="flex flex-col">
            <label class="mb-2 font-semibold" for="message">Message</label>
            <textarea
                id="message"
                v-model="message"
                class="w-full p-3 rounded-lg bg-black bg-opacity-30 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Message"
                required
                rows="4"
            ></textarea>
          </div>
          <!-- Submit Button -->
          <div class="text-center">
            <button
                class="cta-button text-white font-semibold py-3 px-8 rounded-full transition duration-300"
                type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import ParticleEffect from "./ParticleEffect.vue";

const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log('Form submitted:', {
    name: name.value,
    email: email.value,
    message: message.value,
  });
  // Reset form fields
  name.value = '';
  email.value = '';
  message.value = '';
};
</script>

<style scoped>
.contact-section {
  position: relative;
  background: rgba(0, 0, 0, 1);
}

.contact-container {
  background: rgba(25, 25, 25, 0.2);
  backdrop-filter: blur(12px) saturate(150%);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
