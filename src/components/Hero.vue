<script setup>
import HeroSVG from "../assets/svg/hero.svg";
</script>

<template>
  <section id="home" class="mx-auto max-w-7xl overflow-hidden bg-black">
    <div class="relative flex min-h-screen flex-col lg:flex-row">
      <!-- White Background Div -->
      <div
        class="absolute bottom-0 right-0 top-0 lg:top-0 h-full lg:w-4/12 w-full bg-white p-4"
        data-aos="slide-left"
        data-aos-delay="1200"
      >
      <div class="flex h-35%] justify-center mt-6">
        <img class="rounded-full w-[60%] h-auto shadow-lg" src="../assets/img/profile.jpg">
      </div>
        <!-- Name Container with padding on all sides -->
        <div class="flex h-[60%] items-center justify-center px-6 py-10 lg:pt-0 lg:px-4"> 
          <h1 class="text-center font-bold text-white" style="font-size: clamp(1.5rem, 5vw, 3rem);">
            <span class="text-black">MANAV</span><br>
            <span class="text-black">PRAGNESH</span><br>
            <span class="text-black">VAKHARIA</span>
          </h1>
        </div>
      </div>
  
      <!-- Content Div -->
      <div class="flex w-full flex-col lg:w-8/12 lg:flex-row items-center justify-center">
        <div class="px-6 pb-16 pt-5 flex flex-col items-center justify-center" data-aos="fade-down">
          <h2 class="text-white text-center">Software Developer</h2>
          <br />
          <div class="flex justify-center mb-8">
            <button class="btn border-black-700 bg-white text-black hover:bg-black hover:text-white">
              Portfolio Website
            </button>
          </div>
          <div class="mt-10 flex flex-col justify-center items-center gap-10">
            <div class="flex w-80 items-center gap-5 text-center" data-aos="fade-down" data-aos-delay="300">
              <p class="text-white font-bold text-lg shadow-md">Hi There! I am Manav Vakharia, a full stack software developer growing in AI/ML.<br> Using my intuitive constructs I provide solutions to various problems and develop applications on it.<br></p>
            </div>
          </div>
        </div>
  
        <div class="mb-4 mt-16 h-96 lg:-mb-16 lg:h-full">
          <img :src="HeroSVG" alt="Hero" class="h-full rounded-xl bg-black object-cover text-white"/>
        </div>
      </div>
    </div>
  </section>
</template>
  
<style scoped>
/* Adjustments for smaller screens */
@media (max-width: 1023px) {
  .lg\:flex-row {
    flex-direction: column;
  }
  .lg\:w-4\/12, .lg\:w-8\/12 {
    width: 100%;
  }
  .absolute {
    position: relative;
  }
}
</style>
