<script setup lang="ts">
import { RouterView } from 'vue-router'
import '@fontsource-variable/plus-jakarta-sans'
import { PhLinkedinLogo, PhGithubLogo } from '@phosphor-icons/vue'
</script>

<template>
  <div class="max-w-[94%] lg:max-w-[70%] 3xl:max-w-[65%] border-none border-white mx-auto">
    <header
      class="flex border-b border-white text-lg xs:text-xl font-medium mb-4 p-2 py-3 sm:py-4 justify-between items-center"
    >
      <span class="text-sm sm:text-base font-light">petar.dev@tutanota.com</span>
      <ul class="flex gap-2 [&>*:hover]:text-red-300 [&>*]:text-emerald-300">
        <li>
          <a href="https://github.com/lowzyyy"><ph-github-logo :size="32" weight="duotone" /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/petar-damnjanovic-448303125/"
            ><ph-linkedin-logo :size="32" weight="duotone"
          /></a>
        </li>
      </ul>
    </header>
    <RouterView />
  </div>
</template>

<style></style>
