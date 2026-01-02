<script setup>
import { ref, computed } from "vue";
import { educationItems } from "../data/index.ts";
import { experienceItems } from "../data/index.ts";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/outline";

const expandedItems = ref({});

const toggleExpand = (index) => {
  expandedItems.value[index] = !expandedItems.value[index];
};

const isExpanded = (index) => {
  return expandedItems.value[index] || false;
};

const getTruncatedDescription = (description, maxLength = 200) => {
  if (!description) return "";
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength) + "...";
};
</script>

<template>
  <section class="bg-gray-800 pb-4" id="background">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-5 pt-14 min-h-screen md:min-h-min flex flex-col justify-between">
      <div>
        <h2 class="subtitle text-white-900" data-aos="fade-down">Background</h2>
        <br>
      </div>

      <!-- Experience Section (Appears First) -->
      <div class="text-white">
        <h3 class="text-xl font-semibold mb-3">Experience</h3>
        <ul class="space-y-3">
          <li v-for="(exp, index) in experienceItems" :key="index" class="bg-gray-700 p-4 rounded-lg shadow-md w-full overflow-hidden">
            <h4 class="text-base sm:text-lg text-white font-bold break-words">{{ exp.position }} | {{ exp.company }}</h4>
            <p class="text-xs sm:text-sm text-gray-200 mt-1 break-words">
              <span v-if="exp.location" class="text-gray-200">{{ exp.location }}</span> ({{ exp.duration }})
            </p>
            <p v-if="exp.technologies" class="text-xs sm:text-sm text-gray-300 mt-1 italic break-words">{{ exp.technologies }}</p>
            <div class="mt-2">
              <div 
                class="text-xs sm:text-sm text-gray-400 whitespace-pre-line break-words"
                :class="isExpanded(index) ? '' : 'truncate-description'"
                :style="isExpanded(index) ? '' : { display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }"
              >
                {{ isExpanded(index) ? exp.description : getTruncatedDescription(exp.description, 250) }}
              </div>
              <button
                v-if="exp.description && exp.description.length > 250"
                @click="toggleExpand(index)"
                class="mt-2 flex items-center gap-1 text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>{{ isExpanded(index) ? 'Show less' : 'Show more' }}</span>
                <component 
                  :is="isExpanded(index) ? ChevronUpIcon : ChevronDownIcon" 
                  class="w-4 h-4"
                />
              </button>
            </div>
          </li>
        </ul>
      </div>

      <br>

      <!-- Education Section (Appears Below Experience) -->
      <div class="text-white">
        <h3 class="text-xl font-semibold mb-3">Education</h3>
        <ul class="space-y-3">
          <li v-for="(edu, index) in educationItems" :key="index" class="bg-gray-700 p-4 rounded-lg shadow-md w-full overflow-hidden">
            <h4 class="text-base sm:text-lg text-white font-bold break-words">{{ edu.degree }}</h4>
            <p class="text-base sm:text-lg text-white break-words">Major: {{ edu.major }}</p>
            <p class="text-xs sm:text-sm text-gray-200 break-words">{{ edu.institution }} ({{ edu.year }})</p>
            <p class="text-xs sm:text-sm text-gray-400 mt-2 break-words"><strong>Courses:</strong> {{ edu.course }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
h3 {
  color: #ffffff; /* White for section titles */
}
</style>
