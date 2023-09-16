<template>
  <section>
    <h2 class="text-2xl mb-4">
      Recent <span class="text-blue-300">projects</span> (from older to newer)
    </h2>
    <ProjectItem v-for="item in projects" :info="item"> </ProjectItem>
    <button
      @click="goTopHandler"
      class="mx-auto block p-1 border border-white rounded-md text-slate-800 bg-zinc-200 font-medium mb-8 md:hidden"
    >
      Go top
    </button>
  </section>
</template>

<script setup lang="ts">
import ProjectItem from '@/components/ProjectsSection/ProjectItem/ProjectItem.vue'
import { projects } from './projects'
const goTopHandler = () => window.scrollTo({ behavior: 'smooth', top: 0 })
</script>

<style scoped></style>
