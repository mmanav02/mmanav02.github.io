<script setup>
import {ArrowUpRightIcon} from "@heroicons/vue/24/solid";
import { skillsItems} from "../data/index.ts";

</script>
<template>

<section class="min-h-fit bg-gray-800" id="skills">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-5 py-14">
      <h2 class="subtitle text-white" data-aos="fade-down">
        Skills
      </h2>
      <h4 class="title text-gray-400" data-aos="fade-down">
        Tech-Stack
      </h4>
      <br />
      <div class="flex flex-wrap justify-center gap-4">
        <div v-for="(item, skillIndex) in skillsItems" :key="skillIndex"
          class="group relative flex w-full max-w-sm items-center gap-3 sm:gap-5 rounded-md border-2 border-white bg-gray-950 p-3 sm:p-5 duration-200 hover:bg-white hover:border-black hover:text-black sm:cursor-pointer"
          data-aos="fade-up"
          :data-aos-delay="skillIndex * 400"
        >
          <div class="flex-shrink-0">
            <img
              :src="item.logo"
              :alt="item.name"
              :class="item.name === 'Agentic Workflow' ? 'w-24 sm:w-40 duration-200 group-hover:scale-200 icon-filter' : 'w-20 sm:w-32 duration-200 group-hover:scale-200 icon-filter'"
            />
          </div>
          <div class="flex-1 min-w-0">
            <h6 class="text-sm sm:text-base text-gray-100 group-hover:text-black break-words">{{ item.name }}</h6>
            <p class="text-xs sm:text-sm italic text-gray-300 group-hover:text-black break-words whitespace-pre-line">{{ item.description }}</p>
            <div class="absolute right-3 top-3 text-xl text-yellow-500">
              <!-- <ArrowUpRightIcon class="size-6 text-yellow-600" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.icon-filter {
  filter: grayscale(100%) brightness(0) invert(1);
  transition: filter 0.2s;
}

.group:hover .icon-filter {
  filter: grayscale(100%) brightness(0) invert(0);
}
</style>