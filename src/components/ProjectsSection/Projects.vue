<template>
  <section>
    <h2 class="text-2xl 3xl:text-3xl mb-4">
      Recent <span class="text-blue-300">projects</span> (from older to newer)
    </h2>
    <ProjectItem v-for="item in projects" :info="item"> </ProjectItem>
  </section>
  <button
    @click="goTopHandler"
    class="mx-auto block p-1 text-slate-300 font-medium md:hidden animate-pulse mb-4 text-xs"
  >
    <ph-arrow-up :size="32" weight="regular" class="mx-auto" />
    Scroll Up
  </button>
</template>

<script setup lang="ts">
import ProjectItem from '@/components/ProjectsSection/ProjectItem/ProjectItem.vue'
import { projects } from './projects'
import { PhArrowUp } from '@phosphor-icons/vue'

const goTopHandler = () => window.scrollTo({ behavior: 'smooth', top: 0 })
</script>

<style scoped></style>
