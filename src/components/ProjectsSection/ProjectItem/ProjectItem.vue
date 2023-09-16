<template>
  <div
    class="border-none border-red-500 bg-slate-800 rounded-md flex flex-col md:flex-row gap-4 mb-7 even:animate-slideFromLeft odd:animate-slideFromRight items-center p-4"
  >
    <div class="lg:self-auto">
      <a :href="info.link" class="block h-full overflow-hidden"
        ><img
          :src="imageURL"
          :alt="`Image of ${info.title}`"
          class="max-w-[300px] h-full rounded-md lg:rounded-s-md hover:scale-[1.03] transition-transform"
      /></a>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex gap-4 text-sm flex-wrap">
        <span
          v-for="t in info.technologies"
          class="p-1 rounded-md text-slate-800 font-semibold hover:scale-105 transition-transform cursor-pointer"
          :class="`${techColors[t]}`"
          >{{ t }}</span
        >
      </div>
      <div class="">
        <h3 class="text-xl mb-2 text-sky-300 font-semibold">
          <a :href="info.link" class="hover:text-sky-700">{{ info.title }}</a>
        </h3>
        <p>{{ info.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { techColors, type TProjectItem } from '../projects'

const props = defineProps<{
  info: TProjectItem
}>()
const imageURL = new URL(props.info.image, import.meta.url).pathname
</script>

<style scoped></style>
