<template>
  <div>
    <SubmitLink />
    <VoteSelect @selectedOrder="sortBy" class="vote-select" />
    <ConnectionCard
      v-for="(item, index) in linkList.slice(
        5 * pageNumber - 5,
        5 * pageNumber
      )"
      :key="index"
      :link="item"
      @deleteLink="deleteLink"
    />
    <Pagination v-if="getLinks.length > 5" @pageNumber="pageNumber = $event" />
    <DeleteDialog
      v-if="isDialogOpen"
      :deletingLink="deletingLink"
      :isDialogOpen="isDialogOpen"
      @isDialogOpen="isDialogOpen = $event"
      @deletedLink="deletedLink = $event"
    />
    <Toast :message="deletingLink.name + ' removed'" v-if="isToastActive" />
  </div>
</template>

<script>
import SubmitLink from "../components/listPage/submitLink";
import VoteSelect from "../components/listPage/voteSelect";
import ConnectionCard from "../components/listPage/connectionCard";
import Pagination from "../components/listPage/pagination";
import DeleteDialog from "../components/listPage/deleteDialog";
import Toast from "../components/toast";
import { mapGetters } from "vuex";
export default {
  components: {
    SubmitLink,
    VoteSelect,
    ConnectionCard,
    Pagination,
    DeleteDialog,
    Toast,
  },
  data() {
    return {
      isToastActive: false,
      isDialogOpen: false,
      linkList: [],
      deletingLink: {},
      deletedLink: {},
      pageNumber: 1,
      sortType: "date",
    };
  },
  created() {
    this.linkList = [...this.getLinks];
    this.sortBy("date");
  },
  methods: {
    deleteLink(value) {
      this.isDialogOpen = true;
      this.deletingLink = { ...value };
    },
    sortBy(type) {
      this.sortType = type;
      this.linkList.sort(function (a, b) {
        switch (type) {
          case "date":
            return a.createdAt > b.createdAt
              ? -1
              : a.createdAt < b.createdAt
              ? 1
              : 0;

          case "mostVoted":
            return a.point > b.point
              ? -1
              : a.point < b.point
              ? 1
              : a.updatedAt > b.updatedAt
              ? -1
              : a.updatedAt < b.updatedAt
              ? 1
              : 0;

          case "lessVoted":
            return a.point < b.point
              ? -1
              : a.point > b.point
              ? 1
              : a.updatedAt > b.updatedAt
              ? -1
              : a.updatedAt < b.updatedAt
              ? 1
              : 0;
          default:
            break;
        }
      });
    },
  },
  computed: {
    ...mapGetters(["getLinks"]),
  },
  watch: {
    deletedLink() {
      this.isToastActive = true;
      setTimeout(() => {
        this.isToastActive = false;
      }, 2000);
    },
    getLinks: {
      deep: true,
      handler() {
        this.linkList = [...this.getLinks];
        this.sortBy(this.sortType);
      },
    },
  },
};
</script>

<style>
.vote-select {
  margin-bottom: 20px;
}
</style>