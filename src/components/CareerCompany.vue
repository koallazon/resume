<template>
  <div class="career-company grid grid-cols-3 gap-x-4 tablet:gap-x-8">
    <!-- 회사명, 재직기간, 회사 소개 -->
    <div class="relative h-auto">
      <div class="flex flex-col sticky top-12">
        <h4 class="text-md tablet:text-lg font-medium mb-5">
          <a
            :href="item.companyUrl"
            target="_blank"
            :title="item.companyName + ' link'"
            class="hover:text-primary dark:hover:text-primary-dark underline"
            >{{ item.companyName }}</a
          >
        </h4>
        <span class="text-sm mb-2">{{ item.period }}</span>
        <span class="text-sm">{{ item.role }}</span>
        <p
          class="text-gray-dark dark:text-gray-light text-xs mt-7 leading-6 word-keep"
          v-html="item.introduce"
        />
      </div>
    </div>
    <!-- 프로젝트 -->
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
});
</script>

<style scoped>
.career-company:not(:last-child) {
  margin-bottom: 6rem;
}
</style>
