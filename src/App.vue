<template>
  <div>
    <CaseHeader />
    <el-row type="flex" justify="center" class="layout">
      <el-col :xs="22" :sm="12" :md="10" :lg="9" :xl="7">
        <router-view ></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CaseHeader from "@/components/caseHeader";
export default {
  components: {
    CaseHeader,
  },
  created() {
    let links = JSON.parse(localStorage.getItem("links"));
    this.$store.commit("setLinks", [...links]);
  },
};
</script>

<style>
.layout {
  margin-top: 50px;
}
.text-center {
  text-align: center;
}
</style>