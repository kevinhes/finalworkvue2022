<template>
  <EpisodesBanner></EpisodesBanner>
  <div class="container py-5">
    <div class="row">
      <!-- 所有季數 -->
      <div class="col-lg-3 episode-nav">
        <div class="bg-light border-start border-5 border-primary p-2 mb-3">
          <h5 class="mb-0">所有季數</h5>
        </div>
        <ul class="list-unstyled">
          <li class="mb-3">
            <a class="h5 text-dark" href="#" @click.prevent="getProductsData()">
              全部
            </a>
          </li>
          <li class="mb-3" v-for="category in categories" :key="category">
            <a class="h5 text-dark" href="#" @click.prevent="getProductsData(1, category)">
              {{category}}
            </a>
          </li>
        </ul>
      </div>
      <!-- 單集列表 -->
      <div class="col-lg-9">
        <div class="bg-light border-start border-5 border-primary p-2 mb-3">
          <h5 class="mb-0">單集列表</h5>
        </div>
        <div class="card border-0 mb-3 border-bottom"
        v-for="episode in productsData" :key="episode.id">
          <div class="row g-0">
            <div class="col-md-3">
              <img :src="episode.darkImageUrl" class="img-fluid p-3" :alt="episode.title">
            </div>
            <div class="col-md-9">
              <div class="card-body d-flex flex-column justify-content-between h-100">
                <div class="mb-5 mb-lg-0">
                  <h5 class="card-title fs-lg-4 bw-bold
                  text-nowrap overflow-hidden">{{episode.title}}</h5>
                  <p class="card-text multiline-ellipsis">{{episode.description}}</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="card-text mb-0">
                    <small class="text-muted">{{episode.episodeTime}}</small>
                  </p>
                  <RouterLink class="btn btn-primary stretched-link"
                  :to="`/episode/${episode.id}`">查看細節</RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination :pagination="pagination" @page-change="getProductsData"></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import EpisodesBanner from '@/components/EpisodesBanner.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      productsData: [],
      allProductsData: [],
      pagination: {},
      categories: [],
      category: this.$route.params.categroy,
    };
  },
  components: {
    EpisodesBanner,
    Pagination,
  },
  methods: {
    checkCategory() {
      if (this.$route.params.category === 'all') {
        this.getProductsData();
      } else {
        this.getProductsData(1, this.$route.params.category);
      }
    },
    getProductsData(page = 1, categroy = '') {
      const loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        onCancel: this.onCancel,
      });
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/products?page=${page}&category=${categroy}`)
        .then((res) => {
          this.productsData = res.data.products.filter((i) => i.category !== '贊助');
          this.pagination = res.data.pagination;
          loader.hide();
        })
        .catch(() => {});
    },
    getAllProductsData() {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/products/all`)
        .then((res) => {
          this.allProductsData = res.data.products.filter((i) => i.category !== '贊助');
          this.getCategories();
        })
        .catch(() => {});
    },
    getCategories() {
      const categories = new Set();
      this.allProductsData.forEach((i) => {
        categories.add(i.category);
      });
      this.categories = [...categories];
    },
  },
  mounted() {
    this.getAllProductsData();
    this.checkCategory();
  },
};
</script>

<style lang="scss" scoped>
  .episode-nav {
    li {
      padding-left: 13px;
    }
  }
  .multiline-ellipsis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>
