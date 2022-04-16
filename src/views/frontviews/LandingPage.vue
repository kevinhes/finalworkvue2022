<template>
  <LandingBanner />
  <section class="season py-lg-5 py-4">
    <div class="container">
      <p class="h2 text-center">大家好，我們是建人五四三</p>
      <p class="text-center fs-5 fw-bold mb-lg-5 mb-3">
        在這個影像快速來去的世界 <br>
        讓我們用平易近人的方式來跟你談談建築的五四三 <br>
        如果你關心...
      </p>
      <div class="row mb-4 position-relative">
        <div class="col-md-7 mb-3 mb-md-0">
          <div style="background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/kevinhesapi/1649232887095.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ihuTQ2lrXokLMeIW%2BJyo7uoFkp%2FTnm61cOu36BdoT5Go7BDGIV4PlCGKMxxOCqqTRQXLqlP%2BRFjOkeNu22XBW5JkBWevrhv3zxzt7wkHmK47A2PgHvz9yzc1X2Bd72kJuubqVHtx3AqW3oHo8pDeqCul67xcRXAK9dcNMGcGaedxkRUthg1fzAjcHaMeALVY%2Fbs5f%2FatZ6z1U%2FY%2F0zUFdqr5II3iyLj3Fqer4N2sZI6xisfDoMCGR4e1fdz4jzf1qIUg0grKt3gV4Iua9hgeQszEWiASUOxk5Y1p5ECvUWyEPBXZyLh8NdJSCTPWuE8KPRcTvk3ZNFYKspQmnxz24A%3D%3D);"
          class="season-banner"></div>
        </div>
        <div class="col-md-5 d-flex flex-column justify-content-center">
          <h3>綠建築</h3>
          <p>
            有人說，興建建築是污染環境的行為<br>
            從原料的開採到現地的施工都帶給環境巨大的負擔<br>
            這一季我們將會從建築更新以及都市物理環境，
            來跟各位談談建築如何邁向環境友善的第一步
          </p>
          <RouterLink :to="`/episodes/綠建築`"
          class="btn btn-primary w-lg-25 w-100">前往專輯</RouterLink>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-5 order-2 order-lg-1 d-flex flex-column
        justify-content-center">
          <h3>歷史建築</h3>
          <p>
            建築不只是提供人們安身的地方<br>
            隨著時間推移，建築開始容納了各種記憶以及標籤<br>
            讓這些老建築開始具有了歷史的價值<br>
            如何修復？是否都規劃成文創園區？<br>
            讓我們在這一季告訴你
          </p>
          <RouterLink :to="`/episodes/歷史建築`"
          class="btn btn-primary w-lg-25 w-100">前往專輯</RouterLink>
        </div>
        <div class="col-md-7 order-1 order-lg-2 mb-3 mb-md-0">
          <div style="background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/kevinhesapi/1649233062971.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CdsgAT9MhoqdYN5Kt0CRSOWN%2B0Vg3v6j3LjICNXM7yLxL46qXtPvBJdKS%2FOp1HYoOucaN7YxPLGzc%2BrBxM9s3DHaEmmNmgGhi4DmB99ov5B6WjsvbQescz5MJ2S4sSuISUC0lCsJl1txF72c9zEutr9upsKLSfHQyo1kWaK5q6U8FOOTvZus8CZERZHp%2FLY4%2FK1Q60lsjQYqAFexikv0US7i1y%2FIzqBnSgfw6irAYwRw5DwvzmeP3jrcE%2BZOAY6z%2B7iymFGRrXIvRIEvj9%2BoP10JV4QOFutfrdZbTkHEWkeN2ykrCoaHrANcN8ecs%2F03XepvWsQyIyWmqbisLT1%2FPA%3D%3D);"
          class="season-banner"></div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-7 mb-3 mb-md-0">
          <div style="background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/kevinhesapi/1649233267995.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=js2Xo59J0kHB74RQEZMl4OkWcBngrW8BX4Saq8eV7hRc3xOdqLKbuP2AhwS0Ly9G9TQfQtUeluATBRXBwqLdVo3JMDny3zUrkEAxHjMptpfQuL2eDJO%2B0MKpnUb1VL%2BWo76CdAcMpWYT8lDekMP4A9JkR%2FFBCYrSLmZfUlhJ6dKWJrFcOzA2E4%2BJblAW10oVZxPlG51fBVjjqjLXXlSAIzuvFPgRohH3A4oiziA%2Ba7UxSPq48sizzPfgeP%2Bu6t4kIROoW%2FJoVDY8Rk26zww6awdDovhzWOIgqpsuNqbgNRwYxV9GP9FzwRxvLDrX5RYrkikEykRoMYzIw2zr7hxO6w%3D%3D);"
          class="season-banner"></div>
        </div>
        <div class="col-md-5 d-flex flex-column justify-content-center">
          <h3>電影建築</h3>
          <p>
            電影裡面的建築退去了作為主角的特色<br>
            成了營造氛圍跟呈現故事發生的媒體<br>
            不知道各位是否會好奇，那些出現在電影裡面的建築或是都市景觀來自哪裡？有什麼故事？<br>
            就讓我一起進入建築的電影世界吧！
          </p>
          <RouterLink :to="`/episodes/電影建築`"
          class="btn btn-primary w-lg-25 w-100">前往專輯</RouterLink>
        </div>
      </div>
    </div>
  </section>
  <section class="response bg-gray">
    <div class="container py-4">
      <h2 class="text-center mb-3">
        聽眾回應
      </h2>
      <swiper
        :pagination="Pagination"
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 9000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="bg-gray w-100">
            <h5 class="text-center mb-3">ebdhygdx</h5>
            <p>
              <span class="material-icons">
                star_rate
              </span>
              <span class="material-icons">
                star_rate
              </span>
              <span class="material-icons">
                star_rate
              </span>
              <span class="material-icons">
                star_rate
              </span>
              <span class="material-icons">
                star_rate
              </span>
            </p>
            <p class="fst-italic">
              愛死，曾找好多知識，好多集都會一直重複聽<br>
              希望以後也會有跟實務經驗相關的知識救救大學生
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="bg-gray w-100">
            <h5 class="text-center mb-3">Annie86414</h5>
            <p>
              <span class="material-icons">
                star_rate
              </span>
              <span class="material-icons">
                star_rate
              </span>
              <span class="material-icons">
                star_rate
              </span>
              <span class="material-icons">
                star_rate
              </span>
              <span class="material-icons">
                star_rate
              </span>
            </p>
            <p class="fst-italic">
              幹話與知識兼具，害我邊做設計邊科科笑
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="bg-gray w-100">
            <h5 class="text-center mb-3">noneiam</h5>
            <p>
              <span class="material-icons">
                star_rate
              </span>
              <span class="material-icons">
                star_rate
              </span>
              <span class="material-icons">
                star_rate
              </span>
              <span class="material-icons">
                star_rate
              </span>
              <span class="material-icons">
                star_rate
              </span>
            </p>
            <p class="fst-italic">
              難得有建築類垃圾話 podcast，真好，老人帥啊！
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <section class="subscription py-5 bg-light">
    <LandingSwiper @add-to-carts="addToCarts" />
    <div class="container d-none d-lg-block">
      <h2 class="text-center mb-5">有您的支持<br>
        建人五四三才能提供更佳的內容
      </h2>
      <div class="row">
        <div class="col-md-4 mb-4 mb-md-0">
          <div class="card rounded-4 shadow-sm h-100">
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <p class="h5 text-center pt-5 mb-4 mb-md-2">
                  <span class="bg-gray p-2">友情訂閱</span>
                </p>
                <h5 class="card-title fw-bold text-center mb-5">
                  <span class="align-middle">TWD</span>
                  <span class="display-2 fw-bold price-detail
                  align-middle px-2">0</span>
                  <span class="align-middle">／ 月</span>
                </h5>
                <p class="h5 card-text text-center mb-4
                d-none d-md-block">你將會得到</p>
                <ul class="text-center list-unstyled fs-5 mb-5
                d-none d-md-block">
                  <li class="mb-3 gift-check">
                    <span class="material-icons text-primary fw-bold align-middle">
                      done
                    </span>
                    <span class="align-middle ms-2">電子報</span>
                  </li>
                  <li>
                    <span class="material-icons text-primary fw-bold align-middle">
                      done
                    </span>
                    <span class="align-middle ms-2">
                      下期主題預告
                    </span>
                  </li>
                </ul>
              </div>
              <div class="footer">
                <a href="#" class="btn btn-primary mx-auto d-block w-50
                mb-5 btn-lg" @click.prevent="addToCarts('-MyBvXgqnJbrrHKUiPGZ')">按我訂閱</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4 mb-md-0">
          <div class="card rounded-4 shadow-sm  h-100">
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <p class="h5 text-center pt-5 mb-4 mb-md-2">
                  <span class="bg-gray p-2">贊助 1 個月</span>
                </p>
                <h5 class="card-title fw-bold text-center mb-5">
                  <span class="align-middle">TWD</span>
                  <span class="display-2 fw-bold price-detail
                  align-middle px-2">30</span>
                  <span class="align-middle">／ 月</span>
                </h5>
                <p class="h5 card-text text-center mb-4 d-none d-md-block">你將會得到</p>
                <ul class="text-center list-unstyled fs-5 mb-5
                d-none d-md-block">
                  <li class="mb-3">
                    <span class="material-icons text-primary fw-bold align-middle">
                      done
                    </span>
                    <span class="align-middle ms-2">電子報</span>
                  </li>
                  <li class="mb-3">
                    <span class="material-icons text-primary fw-bold align-middle">
                      done
                    </span>
                    <span class="align-middle ms-2">
                      下期主題預告
                    </span>
                  </li>
                  <li class="mb-3">
                    <span class="material-icons text-primary fw-bold align-middle">
                      done
                    </span>
                    <span class="align-middle ms-2">
                      許願節目主題製作
                    </span>
                  </li>
                  <li>
                    <span class="material-icons text-primary fw-bold align-middle">
                      done
                    </span>
                    <span class="align-middle ms-2">
                      節目片尾感謝
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <a href="#" class="btn btn-primary mx-auto d-block w-50 mb-5 btn-lg"
                @click.prevent="addToCarts('-MyCJMkfZIuIxqL8xrPV')">按我訂閱</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4  mb-4 mb-md-0">
          <div class="card rounded-4 shadow-sm h-100">
            <div class="card-body sponsor-card d-flex flex-column justify-content-between">
              <div>
                <p class="h5 text-center pt-5 mb-4 mb-md-2">
                  <span class="bg-gray p-2">贊助 12 個月</span>
                </p>
                <h5 class="card-title fw-bold text-center mb-5">
                  <span class="align-middle">TWD</span>
                  <span class="display-2 fw-bold price-detail
                  align-middle px-2">360</span>
                  <span class="align-middle">／ 年</span>
                </h5>
                <p class="h5 card-text text-center mb-4 d-none d-md-block">你將會得到</p>
                <ul class="text-center list-unstyled fs-5 mb-5 d-none d-md-block">
                  <li class="mb-3">
                    <span class="material-icons text-primary fw-bold align-middle">
                      done
                    </span>
                    <span class="align-middle ms-2">電子報</span>
                  </li>
                  <li class="mb-3">
                    <span class="material-icons text-primary fw-bold align-middle">
                      done
                    </span>
                    <span class="align-middle ms-2">
                      下期主題預告
                    </span>
                  </li>
                  <li class="mb-3">
                    <span class="material-icons text-primary fw-bold align-middle">
                      done
                    </span>
                    <span class="align-middle ms-2">
                      許願節目主題製作
                    </span>
                  </li>
                  <li class="mb-3">
                    <span class="material-icons text-primary fw-bold align-middle">
                      done
                    </span>
                    <span class="align-middle ms-2">
                      節目片尾感謝
                    </span>
                  </li>
                  <li class="mb-3">
                    <span class="material-icons text-primary fw-bold align-middle">
                      done
                    </span>
                    <span class="align-middle ms-2">
                      老人精美 3D 列印模型一顆
                    </span>
                  </li>
                  <li>
                    <span class="material-icons text-primary fw-bold align-middle">
                      done
                    </span>
                    <span class="align-middle ms-2">
                      美術總監封面明信片一組
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <a href="#" class="btn btn-primary mx-auto d-block w-50 mb-5 btn-lg"
                @click.prevent="addToCarts('-MyCJXtEApZcq1S6ga8f')">按我訂閱</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import LandingBanner from '@/components/LandingBanner.vue';
import Pagination from 'swiper/modules/pagination/pagination';

// Import Swiper styles
import 'swiper/swiper.scss';

// import required modules
import Autoplay from 'swiper/modules/autoplay/autoplay';

import LandingSwiper from '@/components/LandingSwiper.vue';

export default {
  data() {
    return {
      fullPage: true,
    };
  },
  inject: ['emitter'],
  methods: {
    toEpisode() {
      this.$router.push('/episodes');
    },
    showAlert() {
      // Use sweetalert2
      this.$swal({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: '已加入購物車',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    },
    addToCarts(id) {
      const obj = {
        data: {
          product_id: id,
          qty: 1,
        },
      };
      this.$http.post(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart`, obj)
        .then(() => {
          this.showAlert();
          this.emitter.emit('cartsNumChange');
        })
        .catch(() => {});
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    LandingBanner,
    LandingSwiper,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
      Pagination: { clickable: true },
    };
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

:deep(.swiper-pagination) {
  bottom: -5px;
}

:deep(.swiper-pagination-bullet-active) {
  color: #fff;
  background: #be1e2d;
}

</style>
