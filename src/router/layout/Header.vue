<template>
  <header class="flex items-center justify-end">
    <p class="text-xs text-gray-dark dark:text-gray-light mr-5">
      Last updated: {{ lastUpdateDate }}
    </p>
    <button class="bg-white text-font dark:text-font-dark pr-2 py-2">
      <SunIcon class="h-5 w-5" />
    </button>
    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
      class="bg-gray-light dark:bg-gray-darkest relative inline-flex items-center h-6 rounded-full w-11"
    >
      <span class="sr-only">Enable notifications</span>
      <span
        :class="enabled ? 'translate-x-6' : 'translate-x-1'"
        class="inline-block w-4 h-4 transform bg-primary rounded-full transition duration-200 ease-in-out"
      />
    </Switch>
    <button class="bg-white text-font dark:text-font-dark pl-2 pr-4 py-2">
      <MoonIcon class="h-5 w-5" />
    </button>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs, watch } from "vue";
import { Switch } from "@headlessui/vue";
import { SunIcon, MoonIcon } from "@heroicons/vue/solid";
import { event } from "vue-gtag";
export default defineComponent({
  components: {
    SunIcon,
    MoonIcon,
    Switch,
  },
  setup() {
    const lastUpdateDate = ref("2022-04-12");
    const state = reactive({
      theme:
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
          ? "dark"
          : "light",
    });
    const enabled = ref(state.theme !== "light");

    const isDark = computed(() => {
      return state.theme ? state.theme === "dark" : false;
    });

    watch(enabled, () => {
      changeTheme();
    });

    const changeTheme = (): void => {
      try {
        const theme: string = !isDark.value ? "dark" : "light";
        state.theme = theme;
        localStorage.setItem("theme", state.theme);
        if (isDark.value) {
          document.documentElement.classList.add("dark");
          document.body.classList.add("dark:bg-background-dark");
        } else {
          document.documentElement.classList.remove("dark");
          document.body.classList.remove("dark:bg-background-dark");
        }
        event("changeTheme", { method: state.theme });
      } catch (err) {
        console.log(err);
      }
    };

    return {
      ...toRefs(state),
      enabled,
      isDark,
      lastUpdateDate,
      changeTheme,
    };
  },
});
</script>
