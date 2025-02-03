<script setup>
import { projectsItems } from "../data/index.ts";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import ProjectsSVG from "../assets/svg/projects.svg";
import "swiper/css";
import "swiper/css/pagination";
</script>

<template>
<section class="bg-gray-800 pb-4" id="projects">
  <div class="md:container px-5 pt-14 min-h-screen md:min-h-min flex flex-col justify-between">
    <div>
      <h2 class="subtitle text-white" data-aos="fade-down">
        Projects
      </h2>
      <h4 class="subtitle text-white" data-aos="fade-down">
        MY CREATION
      </h4>
      <br />
    </div>
    <div class="flex items-center lg:flex-row flex-col-reverse gap-5">
      <!-- Projects SVG Image -->
      <div class="w-[30%] h-[80vh] bg-white rounded-2xl bg-gray-850 flex items-center justify-center">
        <img
          :src="ProjectsSVG"
          alt="Projects SVG"
          data-aos="fade-right"
          class="max-w-[45vw] min-w-[22rem] object-contain text-white bg-white"
        />
      </div>
      
      <!-- Swiper Slider -->
      <Swiper
        :pagination="{ clickable: true }"
        :space-between="20"
        :modules="[Pagination,Navigation]"
        class="rounded-3xl pb-4 shadow-lg shadow-gray-500 flex-1 h-[80vh] max-w-full"
      >
        <SwiperSlide v-for="(item, index) in projectsItems" :key="index"
          class="bg-gray-950 rounded-3xl p-5 border-b-8 border-white h-full flex flex-col"
        >
          <!-- Set fixed size for images inside SwiperSlide -->
          <img 
            :src="item.image" 
            :alt="item.title" 
            class="w-full h-[65vh] object-cover rounded-2xl" 
          />
          <div class="flex flex-col gap-1 mt-2">
            <h5 class="suptitle font-bold font-Poppins text-gray-100">
              {{ item.title }}
            </h5>
            <button class="font-bold text-gray-100 self-end">
              <a :href="item.link" target="_blank">READ MORE</a>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</section>
</template>

<style scoped>
:deep(.swiper-pagination-bullet) {
  background-color: rgb(60, 206, 255) !important; /* Change color */
  width: 12px; /* Adjust size */
  height: 12px;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: white !important; /* Active bullet color */
}
</style>