<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      doloremque perferendis aut quas molestias. Quibusdam amet officia,
      laboriosam, porro hic atque cumque, exercitationem assumenda optio sequi
      ratione minus. Iste, quae.
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryComponent",
};
</script>

<style scoped lang="scss">
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background: lighten($color: grey, $amount: 45);
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
