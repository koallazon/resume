<template>
  <div class="default-view">
    <Header />
    <View />
    <Footer />
  </div>
</template>

<script>
import View from "@/router/layout/View";
import Header from "@/router/layout/Header";
import Footer from "@/router/layout/Footer";
export default {
  name: "DefaultLayout",
  components: {
    Header,
    View,
    Footer,
  },
};
</script>
