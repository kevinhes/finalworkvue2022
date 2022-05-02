<template>
  <section class="banner  position-relative">
    <div class="container h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-lg-2 col-md-4 col-8">
          <img src="../assets/images/logo.png" alt="logo" class="img-fluid mb-4">
          <RouterLink :to="`/episode/${episodesData[episodesData.length-1]?.id}`"
          class="btn btn-primary btn-lg w-100" v-if="episodeLoading === false">最新單集</RouterLink>
          <div class="btn btn-primary btn-lg w-100" v-else>
            <div class="spinner-grow text-white spinner-grow-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      episodesData: [],
      episodeLoading: false,
    };
  },
  methods: {
    getAllEpisodesData() {
      this.episodeLoading = true;
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/products/all`)
        .then((res) => {
          this.episodesData = res.data.products.filter((i) => i.category !== '贊助');
          this.episodeLoading = false;
        })
        .catch((error) => {
          this.$swal({
            icon: 'warning',
            title: 'Oops...',
            text: error.response.data.message,
          });
        });
    },
  },
  mounted() {
    this.getAllEpisodesData();
  },
};
</script>

<style lang="scss" scoped>
  .banner {
    background-image: url(../assets/images/indexbanner.jpeg);
  }
</style>
