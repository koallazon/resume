<template>
  <div class="education-wrap tablet:grid tablet:grid-cols-3 tablet:gap-x-8">
    <!-- 교육명, 기간 -->
    <div>
      <h4 class="text-md tablet:text-lg font-medium mb-3">
        {{ item.subject }}
      </h4>
      <p class="flex flex-row item-center text-xs tablet:text-sm gap-x-2">
        <span class="font-medium">{{ item.organ }}</span>
        <span class="text-gray-dark dark:text-gray-light"
          >({{ item.period }})</span
        >
      </p>
    </div>
    <!-- 교육 상세 -->
    <div class="tablet:col-span-2 mt-3 tablet:mt-0">
      <p
        v-if="item.desc"
        class="leading-6 word-keep text-sm"
        v-html="item.desc"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IEdu } from "../types";
export default defineComponent({
  name: "Education",
  props: {
    item: {
      type: Object as PropType<IEdu>,
      required: true,
    },
  },
});
</script>

<style scoped>
.education-wrap:not(:last-child) {
  margin-bottom: 2.5rem;
}
</style>
