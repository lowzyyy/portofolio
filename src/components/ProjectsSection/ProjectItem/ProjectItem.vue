<template>
  <div
    class="border-none border-red-500 bg-slate-800 rounded-md flex flex-col md:flex-row gap-4 mb-7 even:animate-slideFromLeft odd:animate-slideFromRight items-center p-4 last:mb-2"
  >
    <div>
      <a :href="info.link" class="block h-full overflow-hidden"
        ><img
          :src="info.image"
          :alt="`Image of ${info.title}`"
          class="max-w-[300px] max-h-[150px] rounded-md lg:rounded-s-md hover:scale-[1.03] transition-transform"
      /></a>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex gap-4 text-sm flex-wrap my-3 md:my-0">
        <span
          v-for="t in info.technologies"
          class="p-1 rounded-md text-slate-800 font-semibold hover:scale-105 transition-transform cursor-pointer 3xl:text-lg"
          :class="`${techColors[t]}`"
          >{{ t }}</span
        >
      </div>
      <div class="">
        <h3 class="text-xl 3xl:text-2xl mb-2 text-sky-300 font-semibold">
          <a :href="info.link" class="hover:text-sky-700">{{ info.title }}</a>
        </h3>
        <p class="3xl:text-lg">{{ info.text }}</p>
        <a
          v-if="info.githubLink !== ''"
          :href="info.githubLink"
          class="text-[0.7rem] font-light underline text-blue-200 block mt-4"
          >VIEW ON GITHUB</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { techColors, type TProjectItem } from '../projects'

defineProps<{
  info: TProjectItem
}>()
</script>

<style scoped></style>
