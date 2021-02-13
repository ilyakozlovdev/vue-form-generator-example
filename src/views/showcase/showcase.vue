<template>
  <div class="showcase-view">
    <v-app-bar dense elevation="1">
      <v-tabs :value="showcaseTab" v-if="showTabs">
        <v-tab
          :to="tab.tabName"
          v-for="(tab, idx) in tabs"
          :key="tab.tabName"
          @click="changeActiveTab(idx)"
        >
          {{ tab.label }}
        </v-tab>
      </v-tabs>
      <v-btn @click="openForm('ADD')" color="primary">
        Добавить
      </v-btn>
    </v-app-bar>
    <div class="showcase-tab">
      {{ JSON.stringify(tabs[activeTabIdx]) }}
    </div>
    <SidebarForm
      v-model="sidebar"
      :formTemplate="formTemplate"
      @fieldEdit="editFormData"
      :formData="formData"
    />
  </div>
</template>

<script>
import SidebarForm from "@/components/sidebar-form";
export default {
  name: "Showcase",
  components: { SidebarForm },
  data: () => ({
    activeTabIdx: 0,
    sidebar: false,
    formTemplate: {},
    formData: {}
  }),
  computed: {
    body() {
      return require(`../../templates/showcases/${this.$route.params.showcaseName}/BODY.json`);
    },
    showcaseTab() {
      return this.$route.params.tab;
    },
    showTabs() {
      return this.body.showTabs;
    },
    tabs() {
      return this.body.tabs;
    }
  },
  watch: {
    body() {
      console.log(this.tabs[this.activeTabIdx]);
    }
  },
  methods: {
    logger(...data) {
      console.log(data);
    },
    changeActiveTab(tabIdx) {
      this.activeTabIdx = tabIdx;
    },
    openForm(mode) {
      const newFormData = this.getFormData(1);
      if (!newFormData) {
        alert("Нет данных");
        return;
      }
      this.formData = newFormData;
      this.formTemplate = require(`../../templates/showcases/${this.$route.params.showcaseName}/FORM_${mode}.json`);
      this.sidebar = true;
    },
    getFormData(id) {
      if (id === undefined) {
        // create empty form
        return;
      }
      const data = require(`../../data/${this.$route.params.showcaseName}.json`).find(
        el => el.ID === "" + id
      ); // только для примера, в настоящем проекте данные будут запрашиваться с сервера
      console.log(data);
      return data;
    },
    editFormData(key, value) {
      this.formData[key] = value;
    }
  }
};
</script>

<style lang="scss" scoped>
.showcase-view {
  width: 100%;
  height: 100vh;
  overflow: auto;

  .showcase-tab {
    padding: 14px;
    width: 100%;
    height: calc(100% - 48px);
    overflow-y: scroll;
  }
}
</style>
