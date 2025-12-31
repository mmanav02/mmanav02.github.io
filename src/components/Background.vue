<script setup>
import { educationItems } from "../data/index.ts";
import { experienceItems } from "../data/index.ts";
</script>

<template>
  <section class="bg-gray-800 pb-4" id="background">
    <div class="md:container px-5 pt-14 min-h-screen md:min-h-min flex flex-col justify-between">
      <div>
        <h2 class="subtitle text-white-900" data-aos="fade-down">Background</h2>
        <br>
      </div>

      <!-- Experience Section (Appears First) -->
      <div class="text-white">
        <h3 class="text-xl font-semibold mb-3">Experience</h3>
        <ul class="space-y-3">
          <li v-for="(exp, index) in experienceItems" :key="index" class="bg-gray-700 p-4 rounded-lg shadow-md">
            <h4 class="text-lg text-white font-bold">{{ exp.position }}</h4>
            <p class="text-sm text-gray-200">{{ exp.company }}<span v-if="exp.location">, {{ exp.location }}</span> ({{ exp.duration }})</p>
            <p class="text-sm text-gray-400 mt-2">{{ exp.description }}</p>
          </li>
        </ul>
      </div>

      <br>

      <!-- Education Section (Appears Below Experience) -->
      <div class="text-white">
        <h3 class="text-xl font-semibold mb-3">Education</h3>
        <ul class="space-y-3">
          <li v-for="(edu, index) in educationItems" :key="index" class="bg-gray-700 p-4 rounded-lg shadow-md">
            <h4 class="text-lg text-white font-bold">{{ edu.degree }}</h4>
            <p class="text-lg text-white">Major: {{ edu.major }}</p>
            <p class="text-sm text-gray-200">{{ edu.institution }} ({{ edu.year }})</p>
            <p class="text-sm text-gray-400 mt-2"><strong>Courses:</strong> {{ edu.course }}</p>
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
