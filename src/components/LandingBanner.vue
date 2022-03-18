<template>
  <section class="banner  position-relative">
    <div class="container h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-2 col-8">
          <img src="https://i.imgur.com/UEe500P.png" alt="建人五四三logo" class="img-fluid mb-4">
          <router-link :to="`/episode/${episodesData[episodesData.length-1]?.id}`"
          class="btn btn-primary btn-lg w-100">收聽最新單集</router-link>
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
    };
  },
  methods: {
    getAllEpisodesData() {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/products/all`)
        .then((res) => {
          this.episodesData = res.data.products.filter((i) => i.category !== '贊助');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAllEpisodesData();
  },
};
</script>
