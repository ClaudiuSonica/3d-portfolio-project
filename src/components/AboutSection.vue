<template>
  <section id="about" class="about-section relative py-16 px-4 text-white">
    <ParticleEffect/>
    <div class="max-w-4xl mx-auto">
      <div class="about-container rounded-lg p-8 shadow-lg">
        <!-- Header: Profile and Intro -->
        <div class="flex flex-col items-center mb-8">
          <img
              alt="Profile image of Claudiu Sonica"
              class="w-48 h-48 rounded-full border-4 mb-4 object-cover object-center"
              src="../assets/images/profile/my-profile.jpeg"
          />
          <h2 class="text-4xl font-extrabold mb-4">Who Am I?</h2>
          <p class="text-lg text-center">
            👋🏻 Hey there! I’m <span class="font-bold">Claudiu Sonica</span>, a dedicated Full Stack Developer passionate
            about crafting robust and captivating web experiences.
          </p>
        </div>

        <!-- My Story Section -->
        <div class="mb-8 text-left">
          <h3 class="text-2xl font-semibold mb-2">My Story</h3>
          <p class="text-base">
            I began my journey in web development with a spark of curiosity that quickly turned into a full-blown
            passion. From mastering coding fundamentals to conquering complex systems, every challenge has enriched my
            expertise. Today, I blend creativity with technical prowess to build solutions that are both functional and
            delightful.
          </p>
        </div>

        <!-- Technologies & Expertise -->
        <div class="mb-8 text-left">
          <h3 class="text-2xl font-semibold mb-4">Technologies & Expertise</h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li class="flex items-center space-x-3 transition transform duration-300 hover:scale-105">
              <Icon class="text-yellow-400 text-3xl" icon="logos:javascript"/>
              <span><span class="font-semibold">JavaScript:</span> Dynamic interactivity for seamless user experiences.</span>
            </li>
            <li class="flex items-center space-x-3 transition transform duration-300 hover:scale-105">
              <Icon class="text-red-500 text-3xl" icon="logos:laravel"/>
              <span><span class="font-semibold">PHP with Laravel:</span> Resilient backend solutions for reliable performance.</span>
            </li>
            <li class="flex items-center space-x-3 transition transform duration-300 hover:scale-105">
              <Icon class="text-blue-400 text-3xl" icon="logos:mysql"/>
              <span><span class="font-semibold">MySQL:</span> Efficient data structuring and manipulation.</span>
            </li>
            <li class="flex items-center space-x-3 transition transform duration-300 hover:scale-105">
              <Icon class="text-blue-500 text-3xl" icon="logos:css-3"/>
              <span><span class="font-semibold">CSS/SCSS:</span> Precision styling for flawless visual appeal.</span>
            </li>
            <li class="flex items-center space-x-3 transition transform duration-300 hover:scale-105">
              <!-- Using the React icon as a representative for React/Vue -->
              <Icon class="text-cyan-500 text-3xl" icon="logos:react"/>
              <span><span
                  class="font-semibold">React/Vue:</span> Building scalable, high-performing web applications.</span>
            </li>
            <li class="flex items-center space-x-3 transition transform duration-300 hover:scale-105">
              <Icon class="text-indigo-400 text-3xl" icon="logos:typescript-icon"/>
              <span><span class="font-semibold">TypeScript:</span> Enhancing code clarity and maintainability.</span>
            </li>
            <li class="flex items-center space-x-3 transition transform duration-300 hover:scale-105">
              <Icon class="text-teal-400 text-3xl" icon="logos:tailwindcss-icon"/>
              <span><span
                  class="font-semibold">Tailwind CSS:</span> Crafting beautiful, responsive UIs with ease.</span>
            </li>
          </ul>
        </div>

        <!-- Strengths & Challenges -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <!-- Strengths -->
          <div class="text-left">
            <h3 class="text-2xl font-semibold mb-2">Strengths</h3>
            <ul class="space-y-3">
              <li class="transition transform duration-300 hover:scale-105">
                <span class="font-semibold">Backend Development:</span> Expertise in PHP and Laravel for secure and
                efficient applications.
              </li>
              <li class="transition transform duration-300 hover:scale-105">
                <span class="font-semibold">API Development:</span> Seamless integration and data exchange through
                robust APIs.
              </li>
              <li class="transition transform duration-300 hover:scale-105">
                <span class="font-semibold">Database Management:</span> Optimizing complex database systems for peak
                performance.
              </li>
            </ul>
          </div>
          <!-- Challenges Overcome -->
          <div class="text-left">
            <h3 class="text-2xl font-semibold mb-2">Challenges Overcome</h3>
            <ul class="space-y-3">
              <li class="transition transform duration-300 hover:scale-105">
                <span class="font-semibold">Complex Database Management:</span> Tackled intricate systems to handle
                growing data loads.
              </li>
              <li class="transition transform duration-300 hover:scale-105">
                <span class="font-semibold">Balancing Frontend & Backend:</span> Achieved a harmonious blend of
                aesthetics and functionality.
              </li>
              <li class="transition transform duration-300 hover:scale-105">
                <span class="font-semibold">Cross-Platform Integration:</span> Ensured smooth communication between
                diverse systems.
              </li>
            </ul>
          </div>
        </div>

        <!-- Social Links & CV -->
        <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
          <div class="flex justify-center items-center space-x-4 md:space-x-0 md:space-x-6 mb-8">
            <a class="transition transform duration-300 hover:scale-110"
               href="https://www.linkedin.com/in/claudiu-sonica-395aab218/"
               target="_blank">
              <Icon class="text-blue-500 text-3xl" icon="logos:linkedin-icon"/>
            </a>
            <a class="transition transform duration-300 hover:scale-110" href="https://github.com/ClaudiuSonica"
               target="_blank">
              <Icon class="text-white text-3xl" icon="logos:github-icon"/>
            </a>
          </div>
          <a class="cta-button bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full transition duration-300 flex items-center"
             download
             href="../../public/files/ClaudiuSonicaCv.pdf" target="_blank">
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
}
</style>
