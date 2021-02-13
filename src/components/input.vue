<template>
  <v-text-field
    :label="label"
    :value="value"
    @input="v => $emit('input', v)"
    v-bind="config"
    dense
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    value: [String, Number],
    config: Object
  }
};
</script>

<style scoped></style>
