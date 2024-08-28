<script setup>
const props = defineProps({
  classSettings: String,
  title: String,
  description: String,
  image: String,
  date: String,
});
</script>

<template>
    <article class="overflow-hidden rounded-lg border transition hover:shadow-lg hover:scale-105 ease-in-out duration-300" :class="classSettings">
      <img
        :alt="title"
        :src="image"
        class="h-56 w-full object-cover"
      />
    
      <div class="bg-white p-4 sm:p-6 border-t">
        <time datetime="2022-10-10" class="block text-xs text-gray-500"> {{ date }} </time>
    
        <a href="#">
          <h3 class="mt-0.5 text-lg text-gray-900">
            {{ title }}
          </h3>
        </a>
    
        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {{ description }}
        </p>
      </div>
    </article>
  </template>