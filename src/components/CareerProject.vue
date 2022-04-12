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
  margin-bottom: 6rem;
}
</style>
