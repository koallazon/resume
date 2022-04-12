<template>
  <div class="career-project">
    <h5 class="text-md tablet:text-lg font-medium mb-6">{{ project.title }}</h5>
    <span class="text-sm">{{ project.date }}</span>
    <p class="text-sm">
      {{ project.desc }}
      <a
        v-if="project.url"
        :href="project.url"
        :title="project.title + 'link'"
        class="underline"
        target="_blank"
        >({{ project.url }})</a
      >
    </p>
    <div class="flex flex-wrap w-full mt-3">
      <span
        v-for="(name, i) in project.skill"
        :key="i"
        class="inline-block text-xs py-0.5 px-3 bg-gray-light dark:bg-gray-dark rounded-xl font-light mr-2"
        >{{ name }}</span
      >
    </div>
    <ul class="text-sm mt-8">
      <li
        v-for="(perform, i) in project.performance"
        :key="i"
        class="text-sm tablet:text-base leading-6 mb-1.5 word-keep"
      >
        {{ perform }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IProject } from "../types";
export default defineComponent({
  name: "CareerProject",
  props: {
    project: {
      type: Object as PropType<IProject>,
      required: true,
    },
  },
});
</script>

<style scoped>
ul li {
  list-style: none;
  display: flex;
}
ul li::before {
  content: "\25CF";
  display: inline-block;
  color: #1fb6ff;
  margin-right: 5px;
}
.career-project:not(:last-child) {
  margin-bottom: 4rem;
}
</style>
