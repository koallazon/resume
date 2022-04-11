<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    // 다크모드 셋팅
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark:bg-background-dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.body.classList.add("bg-background-light");
  },
});
</script>

<style lang="scss"></style>
