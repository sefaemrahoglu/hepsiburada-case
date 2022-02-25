<template>
  <div class="submit-link">
    <router-link to="/add-connection">
      <el-button>
        <i class="el-icon-plus" style="font-size: 48px"></i>
      </el-button>
    </router-link>
    <strong style="font-size: 28px">SUBMIT A LINK</strong>
  </div>
</template>

<script>
export default {};
</script>

<style>
.submit-link {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin: 10px 0px;
  background-color: rgba(248, 247, 247);
  border: 2px solid rgba(234, 234, 234);
  border-radius: 5px;
}
</style>