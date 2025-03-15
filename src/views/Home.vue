<template>
  <div class="home-page">
    <Header />
    <Hero />
    <About />
    <Projects />
    <Education />
    // <Video />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Education from "@/components/Education.vue";
// import Video from "@/components/IntroVideo.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped lang="scss">
/* General Page Styling */
.home-page {
  font-family: "Poppins", sans-serif;
  background: #000;
  color: #fff;
  text-align: center;
  scroll-behavior: smooth;
  width: 100vw;
}
</style>
