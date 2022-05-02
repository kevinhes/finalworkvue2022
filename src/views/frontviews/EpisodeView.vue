<template>
  <div class="container py-lg-5 py-3 mt-6">
    <div class="row">
      <div class="offset-lg-2 col-lg-3 mb-2 mb-lg-0">
        <img :src="product.imageUrl" :alt="product.title" class="img-fluid">
      </div>
      <div class="col-lg-5 d-flex flex-column justify-content-center">
        <h5>
          {{product.category}}
        </h5>
        <h2>{{product.title}}</h2>
        <p class="mb-3 text-muted">建人五四三
          <span class="fs-6 text-muted">{{product.episodeTime}}</span>
        </p>
        <div class="d-flex mb-2">
          <div class="w-50 me-1 col position-relative">
            <div class="position-absolute start-15 top-50
            translate-middle" v-if="isPlayed">
              <i class="bi bi-volume-up text-primary fs-3"></i>
            </div>
            <button @click="audioPlayer" type="button"
            class="btn btn-outline-primary w-100 py-2">試聽十分鐘</button>
            <audio ref="audio" :src="product.audition" @timeupdate="timeProgress"></audio>
          </div>
          <div class="w-50 ms-1 col">
            <a :href="product.episodeLink" target="blank"
            class="btn btn-primary w-100 py-2 d-none d-md-block">Apple podcast 上收聽</a>
            <a :href="product.episodeLink" target="blank"
            class="btn btn-primary w-100 py-2 d-md-none">Apple podcast</a>
          </div>
        </div>
        <transition>
          <div class="d-flex" v-if="audioPlayerShow === true">
            <!-- 停止 -->
            <div class="border border-primary rounded-3 me-2 p-2 number-btn" @click="audioStop">
              <i class="bi bi-stop-fill fs-2 lh-1 text-primary"></i>
            </div>
            <!-- 播放 -->
            <div class="border border-primary rounded-3 me-2 p-2 number-btn" @click="audioPlay"
            v-if="isPlayed === false">
              <i class="bi bi-play-fill fs-2 lh-1 text-primary"></i>
            </div>
            <!-- 暫停 -->
            <div class="border border-primary rounded-3 me-2 p-2 number-btn" @click="audioPause"
            v-if="isPlayed === true">
              <i class="bi bi-pause-fill fs-2 lh-1 text-primary"></i>
            </div>
            <!-- 時間軸 -->
            <div class="time-line border border-primary rounded-3
            flex-grow-1 me-md-2 position-relative"
            ref="audioBar"
            @mousedown.stop="adjustAudioTime" @mouseup="endAdjustAudioTime">
              <div class="time-filled rounded-3" ref="timeLinePosition">
                <div class=" position-absolute top-50
                start-50 mb-0 translate-middle"
                v-if="audioLoadingState === 0">
                  <div class="spinner-grow text-primary"
                  role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
                <p class="text-dark position-absolute top-50 start-50 mb-0 translate-middle"
                v-else>
                  {{playedTime}}
                </p>
              </div>
            </div>
            <!-- 聲音大小 -->
            <div class="border border-primary rounded-3 me-2 p-2 d-none d-md-block number-btn"
            @click="volumeDown">
              <i class="bi bi-volume-down-fill fs-2 lh-1 text-primary"></i>
            </div>
            <div class="border border-primary rounded-3 p-2 d-none d-md-block number-btn"
            @click="volumeUp">
              <i class="bi bi-volume-up-fill fs-2 lh-1 text-primary"></i>
            </div>
          </div>
        </transition>
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
      timeLinePosition: '',
      playedTime: null,
      audioPlayerShow: false,
      audioLoadingState: 0,
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
        .catch((error) => {
          this.$swal({
            icon: 'warning',
            title: 'Oops...',
            text: error.response.data.message,
          });
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
        .catch((error) => {
          this.$swal({
            icon: 'warning',
            title: 'Oops...',
            text: error.response.data.message,
          });
          loader.hide();
        });
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
      this.audioStop();
    },
    audioPlayer() {
      if (this.episodeAudio.paused === true) {
        this.isPlayed = this.episodeAudio.paused;
        this.audioPlayerShow = true;
        this.$nextTick(() => {
          this.timeLinePosition = this.$refs.timeLinePosition;
        });
        this.episodeAudio.play();
      }
    },
    audioPlay() {
      this.isPlayed = this.episodeAudio.paused;
      this.episodeAudio.play();
    },
    audioStop() {
      this.isPlayed = false;
      this.audioPlayerShow = false;
      this.episodeAudio.pause();
      this.episodeAudio.currentTime = 0;
    },
    audioPause() {
      this.isPlayed = this.episodeAudio.paused;
      this.episodeAudio.pause();
    },
    volumeUp() {
      if (this.episodeAudio.volume < 1) {
        this.episodeAudio.volume += 0.1;
      }
    },
    volumeDown() {
      if (this.episodeAudio.volume >= 0.1) {
        this.episodeAudio.volume -= 0.1;
      }
    },
    timeProgress() {
      this.audioLoadingState = this.episodeAudio.readyState;
      const episodeDuration = this.episodeAudio.duration;
      const currentPosition = this.episodeAudio.currentTime;
      const currentProgress = (currentPosition / episodeDuration) * 100;
      this.timeLinePosition.style.flexBasis = `${currentProgress}%`;
    },
    playedTimeInfo() {
      const currentTimeInfo = this.episodeAudio.currentTime;
      let audioSec = currentTimeInfo % 60;
      let audioMin = currentTimeInfo / 60;
      audioSec = Math.floor(audioSec);
      audioMin = Math.floor(audioMin);
      const audioTimeJoin = `${audioMin} : ${audioSec}`;
      this.playedTime = audioTimeJoin;
    },
    audioEventListener() {
      this.$refs.audio.addEventListener('timeupdate', this.timeProgress);
      this.$refs.audio.addEventListener('timeupdate', this.playedTimeInfo);
    },
    adjustAudioTime() {
      this.$refs.audioBar.addEventListener('mousedown', this.dragTimeBar);
      this.$refs.audioBar.addEventListener('mousemove', this.dragTimeBar);
    },
    endAdjustAudioTime() {
      this.$refs.audioBar.removeEventListener('mousemove', this.dragTimeBar);
    },
    dragTimeBar(e) {
      const videoDuration = this.episodeAudio.duration;
      const mouseX = e.offsetX;
      const progressBarWidth = this.$refs.audioBar.offsetWidth;
      const videoProgress = mouseX / progressBarWidth;
      const newPosition = videoDuration * videoProgress;
      this.episodeAudio.currentTime = newPosition;
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
    this.episodeAudio = this.$refs.audio;
    this.audioEventListener();
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

.time-line {
  flex:10;
  position: relative;
  display:flex;
  flex-basis:100%;
  transition:height 0.3s;
  cursor:ew-resize;
}
.time-filled {
  background: linear-gradient(-90deg, #be1e2d, white);
  flex:0;
  flex-basis:0%;
}
.v-enter-active,.v-leave-active {
  transition: all .5s;
}
.v-enter-from,.v-leave-to {
  opacity: 0;
}
.v-enter-to,.v-leave-from {
  opacity: 1;
}
</style>
