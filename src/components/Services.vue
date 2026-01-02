<script setup>
import { servicesItems } from "../data/index.ts";
</script>

<template>
  <section id="services">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-5 py-14">
      <h2 class="suptitle text-white" data-aos="fade-down">Services</h2>
      <h4 class="title text-gray-450" data-aos="fade-down">WHAT I OFFER</h4>
      <br />
      <div class="flex gap-4 sm:gap-5 justify-between flex-wrap group">
        <div
          v-for="(item, index) in servicesItems"
          :key="index"
          class="w-full sm:min-w-[14rem] sm:flex-1 duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-white p-4 sm:p-6 group-hover:blur-sm hover:!blur-none service-item"
          data-aos="fade-up"
          :data-aos-delay="index * 500"
        >
          <img 
            :src="item.logo" 
            :alt="item.title" 
            class="mx-auto service-logo" 
          />
          <h6 class="my-3 service-title">{{ item.title }}</h6>
          <p class="leading-7 service-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-item {
  transition: all 0.3s ease;
}

.service-logo {
  transition: filter 0.3s ease;
}

.service-title,
.service-description {
  transition: color 0.3s ease;
  color: inherit;
}

.service-item:hover {
  background-color: black;
}

.service-item:hover .service-logo {
  filter: brightness(0) invert(1);
}

.service-item:hover .service-title,
.service-item:hover .service-description {
  color: white;
}
</style>
