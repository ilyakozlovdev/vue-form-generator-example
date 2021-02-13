<template>
  <div class="welcome-view">
    <v-app-bar color="secondary" dark dense elevation="1">
      <h2>Vue dynamic forms</h2>
    </v-app-bar>
    <div class="welcome-view__body">
      <h1 class="welcome-view__welcome-text">Hello, there!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome"
};
</script>

<style lang="scss" scoped>
.welcome-view {
  width: 100%;
  height: 100%;

  .welcome-view__body {
    width: 100%;
    height: calc(100% - 48px);
  }
}
</style>
