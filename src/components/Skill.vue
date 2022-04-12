<template>
  <div class="skill-wrap">
    <h4 class="text-lg font-medium">{{ item.subject }}</h4>
    <ul class="text-sm mt-3">
      <li
        v-for="(content, i) in item.content"
        :key="i"
        class="leading-6 mb-1.5 word-keep"
      >
        <div class="flex flex-col">
          <span>{{ content.title }}</span>
          <span
            v-if="content.desc"
            class="text-xs leading-6 text-gray-dark dark:text-gray-light pl-2"
            >{{ content.desc }}</span
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ISkill } from "../types";

export default defineComponent({
  name: "Skill",
  props: {
    item: {
      type: Object as PropType<ISkill>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.skill-wrap:not(:last-child) {
  margin-bottom: 2.5rem;
}
ul li {
  list-style: none;
  display: flex;
}
ul li::before {
  content: "\25CF";
  display: inline-block;
  color: #1fb6ff;
  margin-right: 5px;
  font-size: 0.75rem;
}
</style>
