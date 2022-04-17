<template>
  <div class="container py-lg-5 py-3 mt-6">
    <div class="row">
      <div class="offset-lg-2 col-lg-3 mb-3 mb-lg-0">
        <img :src="product.imageUrl" :alt="product.title" class="img-fluid">
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
          <div class="col-md-6 g-md-2 col position-relative">
            <div class="position-absolute start-15 top-50
            translate-middle" v-if="isPlayed">
              <i class="bi bi-volume-up text-primary fs-3"></i>
            </div>
            <button @click="audition" type="button"
            class="btn btn-outline-primary w-100 py-2">試聽十分鐘</button>
            <audio id="audio" :src="product.audition"></audio>
          </div>
          <div class="col-md-6 g-md-2 col">
            <a :href="product.episodeLink" target="blank"
            class="btn btn-primary w-100 py-2 d-none d-md-block">Apple podcast 上收聽</a>
            <a :href="product.episodeLink" target="blank"
            class="btn btn-primary w-100 py-2 d-md-none">Apple podcast</a>
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
    <div class="row mb-7">
      <div class="offset-lg-2 col-lg-8">
        <h5 class="mb-3">{{product.category}}其他單集</h5>
        <swiper
          :slidesPerView="4"
          :spaceBetween="30"
          :modules="modules"
          :pagination="true"
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
          }"
        >
          <swiper-slide v-for="img in productsData" :key="img.id">
            <a href="#" @click.prevent="changeEpisode(img.id)">
              <img :src="img.imageUrl" :alt="img.title">
              <p class="text-dark text-start fs-7 mb-0">{{episodeTitleCutNum(img.title)}}</p>
              <p class="text-dark text-start mb-0 multiline-ellipsis">
                {{episodeTitleCut(img.title)}}
              </p>
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
// import Navigation from 'swiper/modules/navigation/navigation';

export default {
  data() {
    return {
      productsData: [],
      product: {},
      contentText: '',
      descriptionText: '',
      references: '',
      searchProductId: '',
      isPlayed: false,
      episodeAudio: '',
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
          this.episodeAudio = new Audio(res.data.product.audition);
          this.episodeAudio.load();
          this.getProductsData(1, this.product.category);
          this.textCut();
        })
        .catch(() => {
        });
    },
    getProductsData(page = 1, category = '') {
      const loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        onCancel: this.onCancel,
      });
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/products?page=${page}&category=${category}`)
        .then((res) => {
          this.productsData = res.data.products;
          loader.hide();
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
      if (this.episodeAudio.currentTime === 0 || this.episodeAudio.paused === true) {
        this.isPlayed = true;
        this.episodeAudio.play();
        setTimeout(() => {
          this.episodeAudio.pause();
          this.episodeAudio.currentTime = 0;
          this.isPlayed = false;
        }, 600000);
      } else if (this.episodeAudio.currentTime !== 0) {
        this.episodeAudio.pause();
        this.isPlayed = false;
      }
    },
    episodeTitleCutNum(title) {
      let episodeTitleNum = title.split(' ', 2);
      episodeTitleNum = episodeTitleNum.join(' ');
      return episodeTitleNum;
    },
    episodeTitleCut(title) {
      let episodeTitle = title.split(' ');
      episodeTitle.splice(0, 3);
      episodeTitle = episodeTitle.join();
      return episodeTitle;
    },
  },
  setup() {
    return {
      modules: [Pagination],
      Pagination: { clickable: true },
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
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
}

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

.multiline-ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

:deep(.swiper-pagination) {
  bottom: -5px;
}

:deep(.swiper-pagination-bullet-active) {
  color: #fff;
  background: #be1e2d;
}
</style>
