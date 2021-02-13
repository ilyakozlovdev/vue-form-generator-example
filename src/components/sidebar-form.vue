<template>
  <v-navigation-drawer
    :value="value"
    @input="v => $emit('input', v)"
    fixed
    right
    temporary
    :width="formTemplate.width"
  >
    <h2>{{ formTemplate.label }}</h2>
    <v-form v-for="section in formTemplate.sections" :key="section.label">
      <h3 :key="section.label">{{ section.label }}</h3>
      <v-col>
        <v-row
          v-for="(row, rowIdx) in section.grid"
          :key="section.label + rowIdx"
          dense
        >
          <v-col
            v-for="component in row"
            :key="component.key"
            :cols="component.width"
          >
            <component
              :is="component.name"
              :label="component.label"
              :value="formData[component.key]"
              @input="v => fieldEdit(component.key, v)"
              :config="component.config"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-form>
    <v-btn>Сохранить</v-btn>
  </v-navigation-drawer>
</template>

<script>
import Input from "@/components/input";
export default {
  name: "sidebar-form",
  components: { Input },
  props: {
    value: Boolean,
    formTemplate: Object,
    formData: Object
  },
  updated() {
    console.log(this.formTemplate);
  },
  methods: {
    fieldEdit(key, value) {
      this.$emit("fieldEdit", key, value);
    }
  }
};
</script>

<style scoped></style>
