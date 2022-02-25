<template>
  <div>
    <el-dialog
      title="Tips"
      :visible.sync="isDialogOpen"
      width="40%"
      :before-close="handleClose"
      v-if="!isToastActive"
    >
      <span slot="title" class="dialog-header">
        <b>REMOVE LINK</b>
      </span>
      <span>
        <p class="text-center">Do you want to remove:</p>
        <p class="text-center">
          <b>{{ deletingLink.name.toUpperCase() }}</b>
        </p>
        <el-row type="flex" justify="center">
          <el-button
            type="primary"
            @click="
              $store.commit('setRemoveLink', deletingLink);
              $emit('deletedLink', deletingLink);
              handleClose();
            "
            size="mini"
            >OK</el-button
          >
          <el-button @click="handleClose" size="mini">Cancel</el-button>
        </el-row>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["isDialogOpen", "deletingLink"],
  data() {
    return {
      isToastActive: false,
    };
  },
  methods: {
    handleClose() {
      this.$emit("isDialogOpen", false);
    },
  },
};
</script>

<style>
.dialog-header {
  font-size: 18px;
}
.el-dialog__body {
  padding: 15px !important;
  font-size: 16px;
}
</style>