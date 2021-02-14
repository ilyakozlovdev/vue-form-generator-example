<template>
  <v-app>
    <div class="app">
      <v-card class="app__navbar">
        <v-navigation-drawer permanent width="300px">
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img
                  src="https://randomuser.me/api/portraits/women/85.jpg"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title">
                  Sandra Adams
                </v-list-item-title>
                <v-list-item-subtitle
                  >sandra_a88@gmail.com</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list nav dense style="text-decoration: none">
            <router-link
              v-for="route in routes"
              :key="route.label"
              :to="route.path"
            >
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>{{ route.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ route.label }}</v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list>
        </v-navigation-drawer>
      </v-card>

      <v-main class="app__main" app>
        <router-view></router-view>
      </v-main>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    items: [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "About", icon: "mdi-forum" }
    ],
    links: ["Home", "Contacts", "Settings"],
    mini: true
  }),
  computed: {
    routes() {
      return require("./router/routes.json");
    }
  }
};
</script>

<style lang="scss">
html {
  overflow: hidden;
}
.app {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px auto;
  overflow: hidden;

  .app__navbar {
    z-index: 1 !important;
    height: 100%;
    width: 100%;
    border-radius: 0;

    a {
      text-decoration: none;
    }
  }

  .app__main {
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>
