<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import '@fontsource-variable/plus-jakarta-sans'
</script>

<template>
  <div class="max-w-[94%] lg:max-w-[70%] border-none border-white mx-auto">
    <header class="flex border-b border-white justify-end text-lg xs:text-xl font-medium mb-4 p-2">
      <ul class="flex gap-2 [&>*:hover]:text-red-300">
        <li>
          <a href="https://www.linkedin.com/in/petar-damnjanovic-448303125/" class="">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/lowzyyy" class="">Github</a>
        </li>
      </ul>
    </header>
    <RouterView />
  </div>
</template>

<style></style>
