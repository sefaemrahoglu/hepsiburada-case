<template>
  <div>
    <el-pagination
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :page-size="5"
      :total="getLinks.length"
      style="display: flex; justify-content: center"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getLinks"]),
  },
  methods: {
    handleCurrentChange(val) {
      this.$emit("pageNumber", val);
    },
  },
};
</script>

<style>
</style>