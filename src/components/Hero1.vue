<script setup>

import HeroSVG from "../assets/svg/hero.svg";

</script>

<template>
<section
      id="home"
      class="mx-auto max-w-7xl overflow-hidden bg-gray-950"
    >
      <div class="relative flex min-h-screen flex-row">
        <div
          class="absolute bottom-0 right-0 top-0 h-full w-2/12 bg-yellow-500 lg:w-4/12"
          data-aos="slide-left"
          data-aos-delay="1200"
        >
          <div class="flex h-full flex-col justify-center">
            <h1 class="absolute right-[-40%] top-[50%] rotate-90 space-x-4 md:right-0">
              <span class="text-white">Manav Pragnesh</span>
              <span class="text-gray-900">Vakharia</span>
            </h1>
          </div>
        </div>
        <div class="flex w-10/12 flex-col-reverse items-center justify-center md:flex-row md:items-end">
          <div class="px-6 pb-16 pt-5" data-aos="fade-down">
            <h2 class="text-yellow-500">Software Developer</h2>
            <br />
            <div class="flex justify-end">
              <button class="btn border-yellow-700 bg-yellow-600 text-gray-200 hover:bg-yellow-500">
                Portfolio Website
              </button>
            </div>
            <div class="mt-10 flex flex-col gap-10">
              <div
                class="flex w-80 items-center gap-5"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <!-- <h3 class="text-gray-100"></h3> -->
                <p class="text-gray-200">Growing in AI/ML</p>
              </div>
              <div
                class="flex w-80 items-center gap-5"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <h3 class="text-gray-100"></h3>
                <p class="text-gray-200">CS Major</p>
              </div>
            </div>
          </div>
          <div class="mb-4 mt-16 h-96 md:-mb-16 md:h-full">
            <img :src="HeroSVG" alt="Hero" class="h-full rounded-xl bg-gray-950 object-cover"/>
          </div>
        </div>
      </div>
    </section>
</template>