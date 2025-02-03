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
      class="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white p-2"
      @click="toggleShowMenu"
    >
      <AdjustmentsHorizontalIcon class="size-8 text-black" />
    </div>
    <nav class="fixed z-[999] flex items-center gap-5 bg-white px-6 py-3 backdrop-blur-md rounded-full text-black duration-300" 
    :class="{'bottom-10': showMenu, 'bottom-[-100%]': !showMenu}"
    >
      <a v-for="(item, index) in navItems" :key="item.name"
        :href="item.href"
        @click="updateActive(index)"
        class="text-xl p-2.5 rounded-full sm:cursor-pointer relative" 
        :class="{'bg-black' : active === index}"
        :title="item.name"
      >
        <component :is="item.icon" class="size-6 relative z-10" :class="active === index ? 'text-white' : 'text-black'" />
        <div class="absolute inset-0 bg-white rounded-full" :class="{'hidden': active === index}"></div>
      </a>
    </nav>
  </div>
</template>
