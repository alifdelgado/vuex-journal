<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        class="form-control"
        placeholder="Search entry"
        v-model="term"
      />
    </div>
    <div class="mt-2 d-flex flex-column">
      <button
        class="btn btn-primary mx-3"
        @click="$router.push({ name: 'entry', params: { id: 'new' } })"
      >
        <i class="fa fa-plus-circle"></i>
        New entry
      </button>
    </div>
    <div class="entry-scrollarea">
      <EntryComponent v-for="item in entriesByTerm" :key="item" :entry="item"
        >Entry</EntryComponent
      >
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapGetters } from "vuex";

export default {
  name: "EntrylistComponent",
  components: {
    EntryComponent: defineAsyncComponent(() =>
      import("../components/EntryComponent.vue")
    ),
  },
  data() {
    return {
      term: "",
    };
  },
  computed: {
    ...mapGetters("journal", ["getEntriesByTerm"]),
    entriesByTerm() {
      return this.getEntriesByTerm(this.term);
    },
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
