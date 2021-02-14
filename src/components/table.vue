<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <th v-for="column in columns" :key="column.key + 'th'">
          {{ column.label }}
        </th>
      </thead>
      <tbody>
        <tr v-for="record in data" :key="record.ID">
          <td v-for="column in columns" :key="column.key + 'td'">
            {{ record[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "table",
  props: ["data", "columns"]
};
</script>

<style lang="scss" scoped>
.table-wrapper {
  height: 100%;
  width: 100%;

  table {
    width: 100%;
  }

  thead {
    background: #6b6b6b;
    color: white;
  }

  tr {
    height: 2rem !important;
  }

  tr:nth-child(2n) {
    background: #dfdfdf;
  }
}
</style>
