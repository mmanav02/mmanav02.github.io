<script setup>
import { projectsItems } from "../data/index.ts";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
</script>

<template>
<section class="bg-gray-800 pb-4" id="projects">
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-5 pt-14 min-h-screen md:min-h-min">
    <div>
      <h2 class="subtitle text-white" data-aos="fade-down">
        Projects
      </h2>
      <h4 class="subtitle text-gray-400" data-aos="fade-down">
        MY CREATION
      </h4>
      <br />
    </div>
    
    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <div
        v-for="(item, index) in projectsItems"
        :key="index"
        class="group bg-gray-950 border-2 border-white rounded-lg p-4 sm:p-6 hover:bg-white hover:border-black transition-all duration-300 cursor-pointer w-full overflow-hidden"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >
        <div class="flex items-start justify-between mb-3 sm:mb-4 gap-2">
          <h3 class="text-base sm:text-xl font-bold text-white group-hover:text-black transition-colors duration-300 break-words flex-1">
            {{ item.title }}
          </h3>
          <a
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white group-hover:text-black transition-colors duration-300 flex-shrink-0"
            @click.stop
          >
            <ArrowTopRightOnSquareIcon class="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
        <p class="text-xs sm:text-sm text-gray-400 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed break-words">
          {{ item.description }}
        </p>
        <div class="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700 group-hover:border-gray-300 transition-colors duration-300">
          <a
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs sm:text-sm font-semibold text-white group-hover:text-black transition-colors duration-300 inline-flex items-center gap-2 hover:underline"
          >
            View on GitHub
            <ArrowTopRightOnSquareIcon class="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
/* Additional styling if needed */
</style>
