<template>
  <div class="w-full mx-auto max-w-4xl">
    <!-- 소개 -->
    <section class="pt-12 text-font dark:text-font-dark">
      <h2 class="text-5xl font-bold mb-3">이태규</h2>
      <h3 class="text-3xl font-medium mb-6">Front-end Engineer</h3>
      <p class="leading-8">
        3년간의 웹 퍼블리셔 경험을 갖고 있는 3년차 프론트엔드 개발자입니다.<br />
        단순히 개발만하는 것보다는 서비스 관련 지식에 대해 충분히 이해하고<br />
        비지니스에 동참해서 주도적으로 일할 수 있는 환경을 선호합니다.<br />
        비지니스와 함께 서로 같이 성장할 수 있는 팀을 찾고 있습니다.
      </p>
      <ul class="mt-5">
        <li class="flex item-center">
          <MailIcon class="h-5 w-5 mr-2" />
          <a href="mailto:koallazon@gmail.com" class="underline"
            >koallazon@gmail.com</a
          >
        </li>
        <li class="flex item-center mt-1">
          <a
            href="https://github.com/koallazon"
            target="blank"
            class="flex item-center underline"
            ><span class="github-icon"></span>Github</a
          >
        </li>
      </ul>
    </section>
    <!-- 경력 -->
    <section></section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MailIcon } from "@heroicons/vue/solid";
export default defineComponent({
  components: {
    MailIcon,
  },
  // setup() {},
});
</script>

<style scoped>
.github-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-image: url("../../assets/icons8-github.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.dark .github-icon {
  background-image: url("../../assets/icons8-github_dark.svg");
}
</style>
