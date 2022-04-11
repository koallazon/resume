<template>
  <div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: "View",
};
</script>

<style lang="scss" scoped></style>
