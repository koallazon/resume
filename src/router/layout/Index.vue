<template>
  <div class="default-view">
    <Header />
    <View />
  </div>
</template>

<script>
import View from "@/router/layout/View";
import Header from "@/router/layout/Header";
export default {
  name: "DefaultLayout",
  components: {
    Header,
    View,
  },
};
</script>
