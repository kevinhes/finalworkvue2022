<template>
  <div class="container py-lg-5 py-3 mt-6">
    <div class="row">
      <div class="offset-lg-2 col-lg-3 mb-3 mb-lg-0">
        <img :src="product.imageUrl" :alt="'單集封面'" class="img-fluid">
      </div>
      <div class="col-lg-5 d-flex flex-column justify-content-center">
        <h5>
          {{product.category}}
        </h5>
        <h2>{{product.title}}</h2>
        <p class="mb-4 text-muted">建人五四三
          <span class="fs-6 text-muted">{{product.episodeTime}}</span>
        </p>
        <div class="row">
          <div class="col-md-5 g-md-2 col">
            <button @click="audition" type="button"
            class="btn btn-outline-primary w-100 py-2">試聽十分鐘</button>
            <audio id="audio" :src="product.audition"></audio>
          </div>
          <div class="col-md-5 g-md-2 col">
            <a :href="product.episodeLink" target="blank"
            class="btn btn-primary w-100 py-2">Apple podcast上收聽</a>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="row mb-6">
      <div class="col-lg-3 offset-lg-2 order-3 order-md-2">
        <h5 class="mb-3">參考資料</h5>
        <p v-html="references"></p>
      </div>
      <div class="col-lg-5 order-2 order-md-3">
        <h5 class="mb-3">節目資料</h5>
        <p v-html="descriptionText">
        </p>
        <p v-html="contentText">
        </p>
      </div>
    </div>
    <div class="row">
      <div class="offset-lg-2 col-lg-8">
        <h5 class="mb-3">{{product.category}}其他單集</h5>
        <swiper
          :slidesPerView="6"
          :spaceBetween="30"
          :modules="modules"
          class="mySwiper"
          :breakpoints="{
            '390': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            '1024': {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }"
        >
          <swiper-slide v-for="img in productsData" :key="img.id">
            <a href="#" @click.prevent="changeEpisode(img.id)">
              <img :src="img.imageUrl" :alt="img.title">
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

// import required modules
import Pagination from 'swiper/modules/pagination/pagination';

export default {
  data() {
    return {
      productsData: [],
      product: {},
      contentText: '',
      descriptionText: '',
      references: '',
      searchProductId: '',
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  inject: ['emitter'],
  methods: {
    getProductData(productId) {
      let singleId = null;
      if (productId === undefined) {
        singleId = this.$route.params.id;
      } else {
        singleId = productId;
      }
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/product/${singleId}`)
        .then((res) => {
          this.product = res.data.product;
          this.getProductsData(1, this.product.category);
          this.textCut();
        })
        .catch(() => {
        });
    },
    getProductsData(page = 1, category = '') {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/products?page=${page}&category=${category}`)
        .then((res) => {
          this.productsData = res.data.products;
        })
        .catch(() => {});
    },
    textCut() {
      const newContent = this.product.content.split('\n');
      const newDescription = this.product.description.split('\n');
      const newReferences = this.product.references.split('\n');
      let contentStr = '';
      let descriptionStr = '';
      let referencesStr = '';
      newContent.forEach((i) => {
        contentStr += `
        ${i}<br/>
        `;
      });
      newDescription.forEach((i) => {
        descriptionStr += `
        ${i}<br/>
        `;
      });
      newReferences.forEach((i) => {
        referencesStr += `
        ${i}<br/>
        `;
      });
      this.contentText = contentStr;
      this.descriptionText = descriptionStr;
      this.references = referencesStr;
      // return str;
    },
    changeEpisode(id) {
      this.$router.push(`/episode/${id}`);
      this.getProductData(id);
    },
    audition() {
      const audio = document.querySelector('#audio');
      if (audio.currentTime === 0 || audio.paused === true) {
        audio.play();
        setTimeout(() => {
          audio.pause();
          audio.currentTime = 0;
        }, 100000);
      } else if (audio.currentTime !== 0) {
        audio.pause();
      }
    },
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  created() {
    this.emitter.on('pagereload', (id) => {
      this.searchProductId = id.searchId;
      this.getProductData(this.searchProductId);
    });
  },
  mounted() {
    this.getProductData();
  },
  // watch: {
  //   searchId() {
  //     this.getProductData();
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>