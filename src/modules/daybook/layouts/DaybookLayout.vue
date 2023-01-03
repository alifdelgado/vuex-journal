<template>
  <NavbarComponent />
  <div class="row justify-content-md-center" v-if="isLoading">
    <div class="col-3 alert alert-info text-center mt-5">
      Please wait...
      <h3 class="mt-2">
        <i class="fa fa-spin fa-sync"></i>
      </h3>
    </div>
  </div>
  <div class="d-flex" v-else>
    <div class="col-4"><EntrylistComponent /></div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    NavbarComponent: defineAsyncComponent(() =>
      import("../components/NavbarComponent.vue")
    ),
    EntrylistComponent: defineAsyncComponent(() =>
      import("../components/EntrylistComponent.vue")
    ),
  },
  created() {
    this.loadEntries();
  },
  methods: {
    ...mapActions("journal", ["loadEntries"]),
  },
  computed: {
    ...mapState("journal", ["isLoading"]),
  },
};
</script>
