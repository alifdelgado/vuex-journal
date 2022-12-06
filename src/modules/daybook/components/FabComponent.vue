<template>
  <button class="btn btn-primary">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "fa-plus",
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
