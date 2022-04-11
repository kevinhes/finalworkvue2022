<template>
  <div id="searchModal" ref="searchModal"
  class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
        aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content border-0">
        <div class="modal-header bg-gray text-dark">
          <h5 id="productModalLabel" class="modal-title">
            <span>搜尋結果</span>
          </h5>
          <button type="button" class="btn-close"
          data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul class="row list-unstyled">
            <li v-for="(episode) in searchEpisode" :key="episode.id" class="col-md-4 col-12 mb-3">
              <div class="card flex-row flex-md-column h-100">
                <img :src="episode.imageUrl"
                class="card-img-top d-none d-md-block" :alt="episode.title" v-if="episode.imageUrl">
                <div class="card-body">
                  <h5 class="card-title d-none d-md-block">{{episode.title}}</h5>
                  <h5 class="card-title d-block d-md-none">
                    <a href="#" @click.prevent="changeEpisode(episode.id)" class="text-dark">
                      {{episode.title}}
                    </a>
                  </h5>
                </div>
                <div class="card-footer p-0 d-none d-md-block">
                  <a
                  href="#" class="btn btn-primary w-100 h-100 stretched-link"
                  @click.prevent="changeEpisode(episode.id)">查看細節</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../../node_modules/bootstrap/js/dist/modal';

export default {
  data() {
    return {
      searchModal: '',
      productsData: {},
      keyword: '',
      allProductsData: [],
    };
  },
  props: ['searchKeyword'],
  inject: ['emitter'],
  methods: {
    openModal() {
      this.searchModal.show();
    },
    closeModal() {
      this.searchModal.hide();
    },
    getAllProductsData() {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/products/all`)
        .then((res) => {
          this.allProductsData = res.data.products.filter((i) => i.category !== '贊助');
        })
        .catch(() => {});
    },
    changeEpisode(id) {
      this.$router.push(`/episode/${id}`);
      this.closeModal();
      this.emitter.emit('pagereload', { searchId: id });
    },
  },
  mounted() {
    this.searchModal = new Modal(this.$refs.searchModal);
    this.getAllProductsData();
  },
  watch: {
    searchKeyword() {
      this.keyword = this.searchKeyword;
    },
  },
  computed: {
    searchEpisode() {
      const searchStr = this.keyword.split('');
      const arr = [];
      searchStr.forEach((str) => {
        this.allProductsData.forEach((i) => {
          if (i.title.includes(str) || i.category.includes(str)) {
            arr.push(i);
          }
        });
      });
      const filterArr = arr.filter((i, index) => {
        const num = arr.findIndex((episode) => episode.title === i.title);
        return index === num;
      });
      return filterArr;
    },
  },
};
</script>
