<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No element selected</h1>
  </div>
  <FabComponent />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    FabComponent: defineAsyncComponent(() =>
      import("../components/FabComponent.vue")
    ),
  },
};
</script>

<style scoped lang="scss">
div {
  height: 100vh;
}
</style>
