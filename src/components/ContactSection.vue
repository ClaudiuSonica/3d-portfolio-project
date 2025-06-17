<template>
  <section id="contact" class="contact-section relative py-16 px-4 sm:px-6 md:px-8 text-white">
    <ParticleEffect/>
    <div class="max-w-4xl mx-auto">
      <!-- Section Title with Animation -->
      <div class="section-title-container text-center mb-8">
        <h2 class="text-3xl sm:text-4xl font-extrabold section-title inline-block">
          <span class="emoji-icon">✉️</span> Contact Me
        </h2>
      </div>

      <!-- Glassmorphic Container -->
      <div class="contact-container rounded-lg p-6 sm:p-8 shadow-lg">
        <!-- Description -->
        <p class="text-lg text-center mb-8 fade-in">
          I'd love to hear from you! Please fill out the form below and I'll get back to you as soon as possible.
        </p>

        <!-- Success Message (shown after form submission) -->
        <transition name="fade">
          <div v-if="formSubmitted" class="success-message p-4 rounded-lg mb-6">
            <div class="flex items-center justify-center">
              <div class="success-icon mr-3">✓</div>
              <p class="text-lg font-medium">Thank you for your message! I'll get back to you soon.</p>
            </div>
          </div>
        </transition>

        <!-- Contact Form -->
        <form v-if="!formSubmitted" class="space-y-6 fade-in" @submit.prevent="handleSubmit">
          <!-- Name Field -->
          <div class="flex flex-col">
            <label class="mb-2 font-semibold" for="name">Name</label>
            <input
                id="name"
                v-model="name"
                class="form-input"
                placeholder="Your Name"
                required
                type="text"
                :disabled="isSubmitting"
            />
          </div>

          <!-- Email Field -->
          <div class="flex flex-col">
            <label class="mb-2 font-semibold" for="email">Email</label>
            <input
                id="email"
                v-model="email"
                class="form-input"
                placeholder="Your Email"
                required
                type="email"
                :disabled="isSubmitting"
            />
          </div>

          <!-- Message Field -->
          <div class="flex flex-col">
            <label class="mb-2 font-semibold" for="message">Message</label>
            <textarea
                id="message"
                v-model="message"
                class="form-input"
                placeholder="Your Message"
                required
                rows="4"
                :disabled="isSubmitting"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="text-center">
            <button
                class="submit-button"
                type="submit"
                :disabled="isSubmitting"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center">
                <span class="button-spinner mr-2"></span>
                Sending...
              </span>
              <span v-else>Send Message</span>
            </button>
          </div>
        </form>

        <!-- Send Another Message Button -->
        <div v-if="formSubmitted" class="text-center mt-6 fade-in">
          <button @click="resetForm" class="cta-button secondary">
            Send Another Message
          </button>
        </div>
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
const isSubmitting = ref(false);
const formSubmitted = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    // Call the Netlify function to send the email
    const response = await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send message');
    }

    console.log('Email sent successfully:', data);

    // Show success message
    formSubmitted.value = true;
  } catch (error) {
    console.error('Error submitting form:', error);
    // Could add error handling here (e.g., show error message to user)
    alert('Failed to send message. Please try again later.');
  } finally {
    isSubmitting.value = false;
  }
};

const resetForm = () => {
  // Reset form fields
  name.value = '';
  email.value = '';
  message.value = '';
  formSubmitted.value = false;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-container:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

/* Form inputs with consistent styling */
.form-input {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #facc15;
  box-shadow: 0 0 0 2px rgba(250, 204, 21, 0.3);
}

.form-input:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Submit button with animations */
.submit-button {
  background: linear-gradient(to right, #facc15, #ff9800);
  color: #222;
  font-weight: bold;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-width: 180px;
  box-shadow: 0 4px 10px rgba(255, 165, 0, 0.3);
  animation: glowPulse 3s infinite alternate;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(255, 165, 0, 0.4);
}

.submit-button:active:not(:disabled) {
  transform: translateY(1px);
}

.submit-button:disabled {
  opacity: 0.8;
  cursor: not-allowed;
}

/* Loading spinner for button */
.button-spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top-color: #000;
  animation: spin 1s ease-in-out infinite;
}

/* Success message styling */
.success-message {
  background: rgba(16, 185, 129, 0.2);
  border: 1px solid rgba(16, 185, 129, 0.4);
  animation: fadeInUp 0.5s ease-out;
}

.success-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: rgba(16, 185, 129, 0.8);
  border-radius: 50%;
  font-weight: bold;
}

/* Section Title Animation */
.section-title-container {
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
}

.section-title {
  position: relative;
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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade in animation for elements */
.fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
