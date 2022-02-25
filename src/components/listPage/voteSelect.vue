<template>
  <div>
    <el-select
      v-model="value"
      placeholder="Order By"
      @change="$emit('selectedOrder', value)"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "mostVoted",
          label: "Most Voted (Z => A)",
        },
        {
          value: "lessVoted",
          label: "Less Voted (A => Z)",
        },
      ],
      value: "",
    };
  },
};
</script>

<style>
</style>