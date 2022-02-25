<template>
  <div>
    <router-link to="/" class="back-button">
      <i class="el-icon-arrow-left"></i>
      Return to List</router-link
    >
    <h1>Add New Link</h1>
    <el-form
      :model="newLink"
      :rules="rules"
      ref="newLink"
      class="demo-newLink"
      label-position="top"
    >
      <el-form-item label="Link name" prop="name">
        <el-input v-model="newLink.name"></el-input>
      </el-form-item>
      <el-form-item label="Link link" prop="link">
        <el-input v-model="newLink.link"></el-input>
      </el-form-item>
      <el-form-item class="submit-button">
        <el-button type="primary" @click="submitForm('newLink')">ADD</el-button>
      </el-form-item>
    </el-form>
    <Toast :message="message" v-if="isToastActive" />
  </div>
</template>
<script>
import Toast from "../toast";
import { mapGetters } from "vuex";
export default {
  components: {
    Toast,
  },
  data() {
    return {
      isToastActive: false,
      message: "",
      newLink: {
        name: "",
        link: "",
        point: 0,
        createdAt: null,
        updatedAt: null,
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input link name",
            trigger: "blur",
          },
        ],
        link: [
          {
            required: true,
            message: "Please input link name",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let isLinkExist = false;
          this.getLinks.forEach((element) => {
            element.name === this.newLink.name &&
            element.link === this.newLink.link
              ? (isLinkExist = true)
              : "";
          });
          if (!isLinkExist) {
            this.newLink.createdAt = new Date().toISOString();
            this.newLink.updatedAt = new Date().toISOString();
            this.$store.commit("setAddNewLink", this.newLink);
            this.message = this.newLink.name + " added";
          } else {
            this.message = "Please add a link that does not exist!";
          }
        } else {
          this.message = "Link name and link cannot be left blank!";
        }
        this.isToastActive = true;
        setTimeout(() => {
          this.isToastActive = false;
        }, 2000);
      });
    },
  },
  computed: {
    ...mapGetters(["getLinks"]),
  },
};
</script>
<style>
.back-button {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
}
.submit-button {
  display: flex;
  justify-content: flex-end;
}
</style>
