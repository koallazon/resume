<template>
  <section class="tablet:pt-12 text-font dark:text-font-dark">
    <h2 class="text-2xl tablet:text-5xl font-bold mb-3">이태규</h2>
    <h3 class="text-xl tablet:text-3xl mb-6">Front-end Engineer</h3>
    <p class="text-sm leading-7 tablet:text-base tablet:leading-9 word-keep">
      안녕하세요. 6년차 프론트엔드 개발자입니다.<br />
      단순히 코딩만하는 것보다는 서비스 관련 지식에 대해 충분히 이해하고<br />
      비지니스에 동참해서 주도적으로 일할 수 있는 환경을 선호합니다.
    </p>
    <ul class="mt-5">
      <li class="flex item-center">
        <MailIcon class="h-5 w-5 mr-2" />
        <a
          href="mailto:koallazon@gmail.com"
          class="underline dark:hover:text-primary-dark underline"
          >koallazon@gmail.com</a
        >
      </li>
      <li class="flex item-center mt-1">
        <a
          href="https://github.com/koallazon"
          target="_blank"
          class="flex item-center underline dark:hover:text-primary-dark underline"
          ><span class="github-icon"></span>Github</a
        >
      </li>
      <li class="flex item-center mt-1">
        <DocumentTextIcon class="h-5 w-5 mr-2" />
        <a
          href="https://blog.yookidz.site"
          target="_blank"
          class="flex item-center underline dark:hover:text-primary-dark underline"
          >기술 블로그</a
        >
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { MailIcon, DocumentTextIcon } from '@heroicons/vue/solid'
</script>

<style scoped>
.github-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-image: url('../assets/icons8-github.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.dark .github-icon {
  background-image: url('../assets/icons8-github_dark.svg');
}
</style>
