<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: "NanumBarunGothic", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 폰트 적용 */
@font-face {
  font-family: "NanumBarunGothic";
  src: url("assets/fonts/NanumBarunGothic.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "NanumBarunGothic";
  src: url("assets/fonts/NanumBarunGothicLight.ttf") format("truetype");
  font-weight: 300;
}
@font-face {
  font-family: "NanumBarunGothic";
  src: url("assets/fonts/NanumBarunGothicBold.ttf") format("truetype");
  font-weight: 700;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
