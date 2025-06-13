<template>
  <div>
    <Navbar/>
    <HeroSection/>
    <ProjectsSection/>
    <AboutSection/>
    <ContactSection/>
    <Footer/>
    <BackToTop/>
  </div>
</template>


<script lang="ts" setup>
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import ProjectsSection from "../components/ProjectsSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ContactSection from "../components/ContactSection.vue";
import Footer from "../components/Footer.vue";
import BackToTop from "../components/BackToTop.vue";
</script>