<template>
  <div class="connection-card">
    <div class="point-card">
      <b class="point">
        {{ link.point }}
      </b>
      <span>POINTS</span>
    </div>
    <div class="card-actions">
      <div style="width: 100%">
        <h4 class="link-name">{{ link.name }}</h4>
        <p class="link-text">
          <a :href="link.link" target="_blank" rel="noopener noreferrer"
            >({{ link.link }})</a
          >
        </p>
      </div>
      <div class="vote-buttons">
        <el-button
          type="text"
          size="mini"
          @click="$store.commit('setVote', { link: link, vote: 1 })"
        >
          <i class="el-icon-arrow-up"></i>
          <span>Up Vote</span>
        </el-button>
        <el-button
          type="text"
          size="mini"
          @click="$store.commit('setVote', { link: link, vote: -1 })"
        >
          <i class="el-icon-arrow-down"></i>
          <span>Down Vote</span>
        </el-button>
      </div>
    </div>
    <el-button
      type="text"
      class="delete-button"
      size="mini"
      @click="$emit('deleteLink', link)"
    >
      <i class="el-icon-delete-solid"></i>
    </el-button>
  </div>
</template>

<script>
export default {
  props: ["link"],
};
</script>

<style>
.connection-card {
  display: flex;
  padding: 10px;
  position: relative;
  margin: 20px 0;
}
.connection-card:hover {
  background-color: rgba(248, 247, 247);
  border: 2px solid rgba(234, 234, 234);
  border-radius: 5px;
}
.point-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  background-color: rgba(236, 236, 236);
  border: 2px solid rgba(160, 160, 160);
  border-radius: 5px;
}
.point {
  font-size: 2.5rem;
}
.card-actions {
  width: 100%;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.link-name {
  font-size: 2rem;
  margin: 0;
  padding: 0;
}
.link-text {
  overflow: hidden;
  max-width: 50ch;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.link-text a{
  text-decoration: none !important;
}
.vote-buttons {
  display: flex;
  justify-content: space-between;
}
.delete-button {
  display: none;
  color: red !important;
}
.delete-button i {
  font-size: 24px;
}
.connection-card:hover .delete-button {
  display: block;
  position: absolute;
  right: -10px;
  top: -20px;
}
</style>