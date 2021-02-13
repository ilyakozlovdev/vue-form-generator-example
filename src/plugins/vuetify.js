import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: "#3F51B5",
        accent: "#FFC107",
        secondary: "#ffe18d",
        success: "#4CAF50",
        info: "#03A9F4",
        warning: "#FB8C00",
        error: "#FF5252"
      },
      light: {
        primary: "#3F51B5",
        accent: "#FFC107",
        secondary: "#ffe18d",
        success: "#4CAF50",
        info: "#03A9F4",
        warning: "#FB8C00",
        error: "#FF5252"
      }
    }
  }
});
