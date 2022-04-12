<template>
  <div class="grid grid-cols-3 gap-x-8 mb-10">
    <!-- 회사명, 재직기간, 회사 소개 -->
    <div class="relative h-auto">
      <div class="flex flex-col sticky top-20">
        <h4 class="text-lg font-medium mb-5">{{ item.companyName }}</h4>
        <span class="text-sm mb-2">{{ item.period }}</span>
        <span class="text-sm">{{ item.role }}</span>
        <p
          class="text-gray-dark dark:text-gray-light text-xs mt-7 leading-6 word-keep"
          v-html="item.introduce"
        />
      </div>
    </div>
    <div class="col-span-2">
      <CareerProject
        v-for="(project, i) in item.project"
        :key="i"
        :project="project"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ICareer } from "../types";
import CareerProject from "./CareerProject.vue";
export default defineComponent({
  name: "CareerCompany",
  components: {
    CareerProject,
  },
  props: {
    item: {
      type: Object as PropType<ICareer>,
      required: true,
    },
  },
  // setup() {},
});
</script>
