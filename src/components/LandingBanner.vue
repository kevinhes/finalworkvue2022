<template>
  <section class="banner  position-relative">
    <div class="container h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-lg-2 col-md-4 col-8">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/kevinhesapi/1649242962336.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YZgkdT4qDKb3jSgRxKBirpYx%2FCKQ0psfvAP6d5K1NGrr3e5IQQAZwCJj%2FvvVunGWocB%2FR1uEbA4AHRukpPU2i3HpriT0BeEkn0Hy9XqTqL7U%2FCD2nDYmebZliIvVRUcXbA%2FZ9WuRoQJSfk3euVAXo7wj4nAbTpHfDiPJ2pj%2BvgFkdydgRQsjo05GpvBcfbat65c7IEn%2Fm3mh6i6c8kcu2ZGLPkjheQ3tXq42UUqfsD2qqnVeJODTHIa4irka5CwbteMnUL59joatsnl9LN2YX1s4LLQ22qzg%2BbJMMzMhKkBCaiyGpvL0xGrHiUG77VEzJlhJzZBVRN3K6HZVqKfOGw%3D%3D" alt="建人五四三logo" class="img-fluid mb-4">
          <router-link :to="`/episode/${episodesData[episodesData.length-1]?.id}`"
          class="btn btn-primary btn-lg w-100">最新單集</router-link>
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
