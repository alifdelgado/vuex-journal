<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Search entry" />
    </div>
    <div class="entry-scrollarea">
      <EntryComponent v-for="item in 100" :key="item">Entry</EntryComponent>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  name: "EntrylistComponent",
  components: {
    EntryComponent: defineAsyncComponent(() =>
      import("../components/EntryComponent.vue")
    ),
  },
};
</script>

<style scoped lang="scss">
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 15px);
}

.entry-scrollarea {
  height: calc(100vh - 120px);
  overflow: scroll;
}
</style>
