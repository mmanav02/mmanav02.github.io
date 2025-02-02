<script setup>
import {servicesItems} from "../data/index.ts";

</script>

<template>
<section id="services">
      <div class="md:container px-5 py-14">
        <h2 class="title text-yellow-500" data-aos="fade-down">
          Services
        </h2>
        <h4 class="subtitle text-gray-50" data-aos="fade-down">
          WHAT I OFFER
        </h4>
        <br />
        <div class="flex gap-5 justify-between flex-wrap group">
          
            <div v-for="(item, index) in servicesItems" :key="index"
              class="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-yellow-600 p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
              data-aos="fade-up"
              :data-aos-delay="index * 500"
            >
              <img :src="item.logo" :alt="item.title" class="mx-auto" />
              <h6 class="my-3 text-gray-50">{{item.title}}</h6>
              <p class="leading-7 text-gray-200">{{item.description}}</p>
            </div>
        </div>
      </div>
    </section>
</template>