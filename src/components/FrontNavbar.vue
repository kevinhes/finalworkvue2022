<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <RouterLink to="/" class="navbar-brand bg-light border-0">
        <h1 class="fs-4 mb-0">
          建人五四三
        </h1>
      </RouterLink>
      <button class="navbar-toggler" type="button" @click="toggleCollapse"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
        class="navbar-nav me-auto me-md-0 ms-md-auto mb-2 mb-lg-0 order-md-1">
          <li class="nav-item position-relative me-2">
            <input type="text" class="form-control py-1 px-3 mt-3 m-lg-1 fs-7 rounded-pill"
            v-model.trim="searchKeyword" @keyup.enter="openModal"
            placeholder="請輸入標題或分類">
            <a href="#" class="nav-link position-absolute top-25 top-lg-0 end-0 p-2 px-lg-0"
            @click.prevent="openModal" @click="closeCollapse">
              <span class="material-icons">
                search
              </span>
            </a>
          </li>
          <li class="nav-item d-none d-lg-block position-relative" @click="closeCollapse">
            <a href="#" class="nav-link" @click.prevent="openShoppingCarts">
              <span class="material-icons">
                payments
              </span>
              <span class="position-absolute top-10 start-100
              translate-middle badge rounded-pill bg-primary"
              v-if="cartsNum">{{cartsNum}}
                <span class="visually-hidden">
                  unread messages
                </span>
              </span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto ms-md-0 me-md-auto mb-2 mb-lg-0 order-md-0"
        @click="closeCollapse">
          <li class="nav-item">
            <RouterLink to="/about"
            class="nav-link navbar-active-show position-relative">關於我們</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/episodes/all"
            class="nav-link navbar-active-show position-relative">節目列表</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/sponsorus"
            class="nav-link navbar-active-show position-relative">贊助我們</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="d-block d-lg-none position-fixed end-5 bottom-5
    bg-secondary rounded-circle d-flex align-items-center justify-content-center"
    style="height:75px;width:75px">
      <a href="#" class="mb-0 text-white d-block" @click.prevent="openShoppingCarts">
        <span class="material-icons fs-1 d-block">
          payments
        </span>
        <span class="position-absolute top-10 start-lg-100 start-90
        translate-middle badge rounded-pill bg-primary fs-5 fs-lg-6"
        v-if="cartsNum">{{cartsNum}}
          <span class="visually-hidden">
            unread messages
          </span>
        </span>
      </a>
    </div>
  </nav>
  <Offcanvas ref="shoppingCarts" @carts-num-change="getCartsData" />
  <SearchModal ref="searchModal" :search-keyword="propsKeyword" />
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
      cartsNum: '',
    };
  },
  components: {
    Offcanvas,
    SearchModal,
  },
  inject: ['emitter'],
  methods: {
    openShoppingCarts() {
      this.$refs.shoppingCarts.openShoppingCarts();
    },
    getCartsData() {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart`)
        .then((res) => {
          this.cartsNum = res.data.data.carts.length;
        })
        .catch(() => {});
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
  created() {
    this.emitter.on('cartsNumChange', () => {
      this.getCartsData();
    });
  },
  mounted() {
    this.navbarCollapse = new Collapse(document.querySelector('#navbarSupportedContent'), { toggle: false });
    this.getCartsData();
  },
};
</script>
