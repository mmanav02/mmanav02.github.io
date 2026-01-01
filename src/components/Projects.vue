<script setup>
import { projectsItems } from "../data/index.ts";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
</script>

<template>
<section class="bg-gray-800 pb-4" id="projects">
  <div class="md:container px-5 pt-14 min-h-screen md:min-h-min">
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
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in projectsItems"
        :key="index"
        class="group bg-gray-950 border-2 border-white rounded-lg p-6 hover:bg-white hover:border-black transition-all duration-300 cursor-pointer"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >
        <div class="flex items-start justify-between mb-4">
          <h3 class="text-xl font-bold text-white group-hover:text-black transition-colors duration-300">
            {{ item.title }}
          </h3>
          <a
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white group-hover:text-black transition-colors duration-300"
            @click.stop
          >
            <ArrowTopRightOnSquareIcon class="w-6 h-6" />
          </a>
        </div>
        <p class="text-sm text-gray-400 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
          {{ item.description }}
        </p>
        <div class="mt-4 pt-4 border-t border-gray-700 group-hover:border-gray-300 transition-colors duration-300">
          <a
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-semibold text-white group-hover:text-black transition-colors duration-300 inline-flex items-center gap-2 hover:underline"
          >
            View on GitHub
            <ArrowTopRightOnSquareIcon class="w-4 h-4" />
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
