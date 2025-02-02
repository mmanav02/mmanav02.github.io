<script setup>
import Navbar from "./components/Navbar.vue"
import Hero from "./components/Hero.vue"
import Skills from "./components/Skills.vue"
import Services from "./components/Services.vue"
import Projects from "./components/Projects.vue"
import Testimonials from "./components/testimonials.vue"
import Contact from "./components/Contact.vue"
import Footer from "./components/Footer.vue"
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";


onMounted(() => {
  AOS.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
  });
})
</script>

<template>
  <div className="bg-gray-950">
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
 
      <Contact />
      <Footer></Footer>
    </div>
</template>

<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
