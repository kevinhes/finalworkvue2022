<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <h1 class="fs-4 mb-0">
          建人五四三
        </h1>
      </router-link>
      <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/episodes/all" class="nav-link">節目列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sponsorus" class="nav-link">贊助我們</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <span class="material-icons">
                search
              </span>
            </a>
          </li>
          <li class="nav-item">
            <router-link to="/loginpage" class="nav-link">
              <span class="material-icons">
                settings
              </span>
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="openShoppingCarts">
              <span class="material-icons">
                payments
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Offcanvas ref="shoppingCarts"></Offcanvas>
</template>

<script>
import Offcanvas from '@/components/Offcanvas.vue';

export default {
  components: {
    Offcanvas,
  },
  methods: {
    openShoppingCarts() {
      this.$refs.shoppingCarts.openShoppingCarts();
    },
  },
};
</script>
