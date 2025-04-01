<template>
  <section class="flex sm:gap-6 lg:justify-between items-center mb-12">
    <div>
      <h1 class="text-3xl xl:text-5xl mb-6 xs:mb-8 text-cyan-50 flex justify-between items-center">
        Hello, I'm Petar
        <img
          class="rounded-md max-w-[70px] max-h-[100px] sm:hidden"
          :src="myimg"
          alt="Picture of me"
        />
      </h1>
      <article
        class="lg:w-[500px] xl:w-[700px] 2xl:w-[800px] 3xl:w-[1000px] text-cyan-100 animate-slideUp 3xl:text-lg"
      >
        <p class="mb-6">
          <span class="font-bold text-blue-200 xs:text-lg 3xl:text-xl">Web developer</span> based in
          Serbia interested in building modern and innovative web applications with latest
          technologies. I believe in lifelong learning and continuous improvement. Always trying to
          do better.
        </p>
        <p class="mb-6">
          I have 1 year of
          <span class="font-bold text-blue-200 xs:text-lg 3xl:text-xl">experience</span> working on
          various projects with Next.js, NestJS, AWS Lambda, Puppeteer, jQuery, and Firebase. I've
          built and optimized web applications, worked with serverless functions, automated tasks,
          and handled data efficiently.
        </p>
        <p class="mb-6">
          My primary focus is on front-end development, where I specialize in
          <a href="https://react.dev/" class="text-cyan-400 hover:text-cyan-300 font-bold"
            >ReactJS</a
          >
          and
          <a href="https://vuejs.org/" class="text-green-400 hover:text-green-300 font-bold"
            >VueJS</a
          >. I'm dedicated to crafting seamless user experiences and bringing creative designs to
          life. However, I'm also open to working with other libraries and technologies to adapt to
          project requirements.
        </p>
        <p>
          Additionally, I have a secondary focus on back-end development using
          <a href="https://nodejs.org" class="text-teal-400 hover:text-teal-300 font-bold"
            >NodeJS</a
          >
          with Express/Nest. This expertise comes in handy as many of my projects involve APIs to
          handle specific data.<br />
        </p>
      </article>
    </div>
    <div class="hidden sm:block">
      <img class="rounded-md sm:max-w-[300px] sm:max-h-[350px]" :src="myimg" alt="Picture of me" />
    </div>
  </section>
</template>

<script setup lang="ts">
import myimg from '/img/me.png'
</script>

<style scoped></style>
