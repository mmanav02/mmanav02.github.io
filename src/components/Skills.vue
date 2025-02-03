<script setup>
import {ArrowUpRightIcon} from "@heroicons/vue/24/solid";
import { skillsItems} from "../data/index.ts";

</script>
<template>

<section class="min-h-fit bg-gray-800" id="skills">
      <div class="px-5 py-14 md:container">
        <h2 class="subtitle text-white" data-aos="fade-down">
          Skills
        </h2>
        <h4 class="title text-black" data-aos="fade-down">
          Tech-Stack
        </h4>
        <br />
        <div class="flex flex-wrap justify-center gap-4">
            <div v-for="(item, skillIndex) in skillsItems" :key="skillIndex" 
              class="group relative flex w-full max-w-sm items-center gap-5 rounded-md border-2 border-white-700 bg-gray-950 p-5 duration-200 hover:border-yellow-500 sm:cursor-pointer"
              data-aos="fade-up"
              :data-aos-delay="index * 400"
            >
              <div>
                <img
                  :src="item.logo"
                  :alt="item.name"
                  class="w-32 duration-200 group-hover:scale-200"
                />
              </div>
              <div>
                <h6 class="text-gray-100">{{ item.name }}</h6>
                <p class="italic text-gray-300">{{ item.description }}</p>
                <div class="absolute right-3 top-3 text-xl text-yellow-500">
                  <!-- <ArrowUpRightIcon class="size-6 text-yellow-600" /> -->
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>

</template>