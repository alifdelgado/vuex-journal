<template>
  <nav class="navbar navbar-expand-lg bg-primary navbar-dark shadow">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/logo.png"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Daybook
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <button class="btn btn-outline-info mx-2">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style></style>
