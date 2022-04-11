<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand bg-light border-0">
        <h1 class="fs-4 mb-0">
          建人五四三
        </h1>
      </router-link>
      <button class="navbar-toggler" type="button" @click="toggleCollapse"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul @click="closeCollapse"
        class="navbar-nav me-auto me-md-0 ms-md-auto mb-2 mb-lg-0 order-md-1">
          <li class="nav-item position-relative me-2">
            <input type="text" class="form-control py-1 px-3 mt-3 m-md-1 fs-7 rounded-pill"
            v-model.trim="searchKeyword" @keyup.enter="openModal"
            placeholder="請輸入標題或分類">
            <a href="#" class="nav-link position-absolute top-25 top-md-0 end-0 p-2 px-md-0"
            @click.prevent="openModal">
              <span class="material-icons">
                search
              </span>
            </a>
          </li>
          <li class="nav-item d-none d-md-block">
            <a href="#" class="nav-link" @click.prevent="openShoppingCarts">
              <span class="material-icons">
                payments
              </span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto ms-md-0 me-md-auto mb-2 mb-lg-0 order-md-0"
        @click="closeCollapse">
          <li class="nav-item">
            <router-link to="/about"
            class="nav-link navbar-active-show position-relative">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/episodes/all"
            class="nav-link navbar-active-show position-relative">節目列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sponsorus"
            class="nav-link navbar-active-show position-relative">贊助我們</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Offcanvas ref="shoppingCarts"></Offcanvas>
  <SearchModal ref="searchModal" :search-keyword="propsKeyword"></SearchModal>
</template>

<script>
import Offcanvas from '@/components/Offcanvas.vue';
import SearchModal from '@/components/SearchModal.vue';
import Collapse from '../../node_modules/bootstrap/js/dist/collapse';

export default {
  data() {
    return {
      searchKeyword: '',
      propsKeyword: '',
      navbarCollapse: '',
    };
  },
  components: {
    Offcanvas,
    SearchModal,
  },
  methods: {
    openShoppingCarts() {
      this.$refs.shoppingCarts.openShoppingCarts();
    },
    openModal() {
      if (this.searchKeyword !== '') {
        this.$refs.searchModal.openModal();
        this.propsKeyword = this.searchKeyword;
        this.searchKeyword = '';
      }
    },
    closeCollapse() {
      this.navbarCollapse.hide();
    },
    toggleCollapse() {
      this.navbarCollapse.toggle();
    },
    backIndex() {
      this.$router.push('/');
    },
  },
  mounted() {
    this.navbarCollapse = new Collapse(document.querySelector('#navbarSupportedContent'), { toggle: false });
  },
};
</script>
