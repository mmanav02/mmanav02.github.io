<script setup>
import {ref} from "vue";
import {AdjustmentsHorizontalIcon} from "@heroicons/vue/24/outline"
import { navItems } from "../data/index.ts";

const showMenu = ref(false);
const active = ref(0);
const toggleShowMenu = () => {
    showMenu.value = !showMenu.value;
}

const updateActive = (index) => {
    active.value = index;
}

</script>

<template>
  <div class="w-full flex justify-center">
    <div
      class="sm:cursor-pointer fixed top-4 left-4 sm:top-10 sm:left-10 z-[999] rounded-lg bg-white p-1.5 sm:p-2 shadow-lg"
      @click="toggleShowMenu"
    >
      <AdjustmentsHorizontalIcon class="size-6 sm:size-8 text-black" />
    </div>
    <nav class="fixed z-[999] flex items-center gap-2 sm:gap-5 bg-white px-3 sm:px-6 py-2 sm:py-3 backdrop-blur-md rounded-full text-black duration-300 max-w-[95vw] overflow-x-auto" 
    :class="{'bottom-4 sm:bottom-10': showMenu, 'bottom-[-100%]': !showMenu}"
    >
      <a v-for="(item, index) in navItems" :key="item.name"
        :href="item.href"
        @click="updateActive(index); toggleShowMenu()"
        class="text-base sm:text-xl p-2 sm:p-2.5 rounded-full sm:cursor-pointer relative flex-shrink-0" 
        :class="{'bg-black' : active === index}"
        :title="item.name"
      >
        <component :is="item.icon" class="size-5 sm:size-6 relative z-10" :class="active === index ? 'text-white' : 'text-black'" />
        <div class="absolute inset-0 bg-white rounded-full" :class="{'hidden': active === index}"></div>
      </a>
    </nav>
  </div>
</template>
