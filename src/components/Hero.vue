<script setup>
import HeroSVG from "../assets/svg/hero.svg";
</script>

<template>
  <section id="home" class="mx-auto max-w-7xl overflow-hidden bg-gray-950">
    <div class="relative flex min-h-screen flex-col lg:flex-row">
      <!-- Yellow Background Div -->
      <div
        class="absolute bottom-0 right-0 top-0 lg:top-0 h-full lg:w-4/12 w-full bg-yellow-500"
        data-aos="slide-left"
        data-aos-delay="1200"
      >
        <!-- Name Container with padding on all sides -->
        <div class="flex h-full items-center justify-center px-6 py-10 lg:pt-0 lg:px-4"> <!-- Added padding for all ends -->
          <h1 class="text-center font-bold text-white" style="font-size: clamp(1.5rem, 5vw, 3rem);">
            <span class="text-white">Manav Pragnesh</span>
            <span class="text-gray-900"> Vakharia</span>
          </h1>
        </div>
      </div>
  
      <!-- Content Div -->
      <div class="flex w-full flex-col lg:w-8/12 lg:flex-row items-center justify-center">
        <div class="px-6 pb-16 pt-5 flex flex-col items-center justify-center" data-aos="fade-down">
          <h2 class="text-yellow-500 text-center">Software Developer</h2> <!-- Centered text -->
          <br />
          <div class="flex justify-center mb-8"> <!-- Adjusted margin bottom for spacing -->
            <button class="btn border-yellow-700 bg-yellow-600 text-gray-200 hover:bg-yellow-500">
              Portfolio Website
            </button>
          </div>
          <div class="mt-10 flex flex-col justify-center items-center gap-10">
            <div
              class="flex w-80 items-center gap-5 text-center"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <p class="text-white font-bold text-lg shadow-md">Growing in AI/ML</p>
            </div>
            <div
              class="flex w-80 items-center gap-5 text-center"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <p class="text-white font-bold text-lg shadow-md">CS Major</p>
            </div>
          </div>
        </div>
  
        <div class="mb-4 mt-16 h-96 lg:-mb-16 lg:h-full">
          <img :src="HeroSVG" alt="Hero" class="h-full rounded-xl bg-gray-950 object-cover"/>
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
  .lg\:w-4\/12 {
    width: 100%; /* Adjust width to full for smaller screens */
  }
  .lg\:w-8\/12 {
    width: 100%; /* Adjust width to full for smaller screens */
  }
  .absolute {
    position: relative; /* Make sure the yellow div stays in normal flow on smaller screens */
  }
}
</style>
