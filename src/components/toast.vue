<template>
  <div class="toast">
    <h2 class="toast-message">
      {{ message }}
    </h2>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style>
.toast {
  background: rgb(226, 249, 214);
  border: 2px solid rgb(112, 172, 100);
  border-radius: 5px;
  position: fixed;
  top: 5%;
  z-index: 99999;
  padding: 10px;
  width: 250px;
  left: calc(50% - 125px);
}
.toast-message {
  color: rgb(112, 172, 100);
  text-align: center;
}
</style>