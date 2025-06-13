<template>
  <section id="about" class="about-section relative py-16 px-4 sm:px-6 md:px-8 text-white">
    <ParticleEffect/>
    <div class="max-w-4xl mx-auto">
      <!-- Section Title with Animation -->
      <div class="section-title-container text-center mb-8">
        <h2 class="text-3xl sm:text-4xl font-extrabold section-title inline-block">
          <span class="emoji-icon">👨‍💻</span> About Me
        </h2>
      </div>

      <div class="about-container rounded-lg p-6 sm:p-8 shadow-lg fade-in">
        <!-- Header: Profile and Intro -->
        <div class="flex flex-col items-center mb-8 sm:mb-10">
          <div class="profile-image-container mb-6">
            <img
                alt="Profile image of Claudiu Sonica"
                class="profile-image"
                src="../assets/images/profile/my-profile.jpeg"
            />
          </div>
          <h3 class="text-2xl sm:text-3xl font-bold mb-4">Who Am I?</h3>
          <p class="text-lg text-center max-w-2xl">
            <span class="wave-emoji">👋🏻</span> Hey there! I'm <span class="font-bold text-yellow-400">Claudiu Sonica</span>, a dedicated Full Stack Developer passionate
            about crafting robust and captivating web experiences.
          </p>
        </div>

        <!-- My Story Section -->
        <div class="mb-10 text-left">
          <h3 class="section-subtitle">My Story</h3>
          <div class="content-card">
            <p class="text-base sm:text-lg">
              I began my journey in web development with a spark of curiosity that quickly turned into a full-blown
              passion. From mastering coding fundamentals to conquering complex systems, every challenge has enriched my
              expertise. Today, I blend creativity with technical prowess to build solutions that are both functional and
              delightful.
            </p>
          </div>
        </div>

        <!-- Technologies & Expertise -->
        <div class="mb-10 text-left">
          <h3 class="section-subtitle">Technologies & Expertise</h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <li class="tech-item">
              <Icon class="text-yellow-400 text-3xl" icon="logos:javascript"/>
              <span><span class="font-semibold">JavaScript:</span> Dynamic interactivity for seamless user experiences.</span>
            </li>
            <li class="tech-item">
              <Icon class="text-red-500 text-3xl" icon="logos:laravel"/>
              <span><span class="font-semibold">PHP with Laravel:</span> Resilient backend solutions for reliable performance.</span>
            </li>
            <li class="tech-item">
              <Icon class="text-blue-400 text-3xl" icon="logos:mysql"/>
              <span><span class="font-semibold">MySQL:</span> Efficient data structuring and manipulation.</span>
            </li>
            <li class="tech-item">
              <Icon class="text-blue-500 text-3xl" icon="logos:css-3"/>
              <span><span class="font-semibold">CSS/SCSS:</span> Precision styling for flawless visual appeal.</span>
            </li>
            <li class="tech-item">
              <!-- Using the React icon as a representative for React/Vue -->
              <Icon class="text-cyan-500 text-3xl" icon="logos:react"/>
              <span><span class="font-semibold">React/Vue:</span> Building scalable, high-performing web applications.</span>
            </li>
            <li class="tech-item">
              <Icon class="text-indigo-400 text-3xl" icon="logos:typescript-icon"/>
              <span><span class="font-semibold">TypeScript:</span> Enhancing code clarity and maintainability.</span>
            </li>
            <li class="tech-item">
              <Icon class="text-teal-400 text-3xl" icon="logos:tailwindcss-icon"/>
              <span><span class="font-semibold">Tailwind CSS:</span> Crafting beautiful, responsive UIs with ease.</span>
            </li>
          </ul>
        </div>

        <!-- Strengths & Challenges -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          <!-- Strengths -->
          <div class="text-left">
            <h3 class="section-subtitle">Strengths</h3>
            <ul class="space-y-4">
              <li class="strength-item">
                <span class="font-semibold">Backend Development:</span> Expertise in PHP and Laravel for secure and
                efficient applications.
              </li>
              <li class="strength-item">
                <span class="font-semibold">API Development:</span> Seamless integration and data exchange through
                robust APIs.
              </li>
              <li class="strength-item">
                <span class="font-semibold">Database Management:</span> Optimizing complex database systems for peak
                performance.
              </li>
            </ul>
          </div>
          <!-- Challenges Overcome -->
          <div class="text-left">
            <h3 class="section-subtitle">Challenges Overcome</h3>
            <ul class="space-y-4">
              <li class="strength-item">
                <span class="font-semibold">Complex Database Management:</span> Tackled intricate systems to handle
                growing data loads.
              </li>
              <li class="strength-item">
                <span class="font-semibold">Balancing Frontend & Backend:</span> Achieved a harmonious blend of
                aesthetics and functionality.
              </li>
              <li class="strength-item">
                <span class="font-semibold">Cross-Platform Integration:</span> Ensured smooth communication between
                diverse systems.
              </li>
            </ul>
          </div>
        </div>

        <!-- Social Links & CV -->
        <div class="social-cv-container">
          <!-- Social Links -->
          <div class="social-links">
            <a class="social-link linkedin" href="https://www.linkedin.com/in/claudiu-sonica-395aab218/" target="_blank" aria-label="LinkedIn Profile">
              <Icon class="text-3xl" icon="logos:linkedin-icon"/>
            </a>
            <a class="social-link github" href="https://github.com/ClaudiuSonica" target="_blank" aria-label="GitHub Profile">
              <Icon class="text-3xl" icon="logos:github-icon"/>
            </a>
          </div>

          <!-- Download CV Button -->
          <a class="download-cv-button" download href="../../public/files/ClaudiuSonicaCv.pdf" target="_blank">
            <Icon class="mr-2" icon="mdi:download"/>
            Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ParticleEffect from "./ParticleEffect.vue";
</script>

<style scoped>
.about-section {
  position: relative;
  background: rgba(0, 0, 0, 1);
}

.about-container {
  background: rgba(25, 25, 25, 0.2);
  backdrop-filter: blur(12px) saturate(150%);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-container:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

/* Profile Image Styling */
.profile-image-container {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(45deg, #facc15, #ff9800);
  animation: rotate 8s linear infinite;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.8);
  transition: transform 0.5s ease;
}

.profile-image-container:hover .profile-image {
  transform: scale(1.05);
}

@keyframes rotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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

.wave-emoji {
  display: inline-block;
  animation: wave 2.5s ease-in-out infinite;
  transform-origin: 70% 70%;
}

/* Section Subtitles */
.section-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(250, 204, 21, 0.3);
  display: inline-block;
}

/* Tech Items */
.tech-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-5px) scale(1.02);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Strength Items */
.strength-item {
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.strength-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Social Links & CV Container */
.social-cv-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .social-cv-container {
    flex-direction: row;
    justify-content: center;
  }
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-5px);
}

.social-link.linkedin:hover {
  background: rgba(10, 102, 194, 0.2);
  box-shadow: 0 0 15px rgba(10, 102, 194, 0.5);
}

.social-link.github:hover {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

/* Download CV Button */
.download-cv-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #facc15, #ff9800);
  color: #222;
  font-weight: bold;
  border-radius: 9999px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(255, 165, 0, 0.3);
  animation: glowPulse 3s infinite alternate;
}

.download-cv-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(255, 165, 0, 0.4);
}

.download-cv-button:active {
  transform: translateY(1px);
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

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
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

/* Content Card */
.content-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  padding: 1rem;
  transition: all 0.3s ease;
}

.content-card:hover {
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
</style>
