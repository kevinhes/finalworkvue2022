<template>
  <LandingBanner></LandingBanner>
  <section class="season py-lg-5 py-3">
    <div class="container">
      <p class="h2 text-center">大家好，我們是建人五四三</p>
      <p class="text-center h5 mb-lg-5 mb-3">
        在這個影像快速來去的世界 <br>
        讓我們用平易近人的方式來跟你談談建築的五四三 <br>
        如果你關心...
      </p>
      <div class="row mb-lg-4">
        <div class="col-lg-7">
          <div style="background-image: url(https://images.unsplash.com/photo-1562408954-be39449c4962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80);
          height:420px; background-size:cover;"></div>
        </div>
        <div class="col-lg-4 d-flex flex-column justify-content-center">
          <h3>綠建築</h3>
          <p>
            有人說，興建建築是污染環境的行為<br>
            從原料的開採到現地的施工都帶給環境巨大的負擔<br>
            這一季我們將會從建築更新，都市物理環境以及光環境<br>
            來跟各位談談建築如何邁向環境友善的第一步
          </p>
          <router-link :to="`/episodes/綠建築`"
          class="btn btn-primary w-lg-25 w-50">收聽</router-link>
        </div>
      </div>
      <div class="row mb-lg-4">
        <div class="offset-lg-1 col-lg-4 d-flex flex-column justify-content-center">
          <h3>歷史建築</h3>
          <p>
            建築不只是提供人們安身的地方<br>
            隨著時間的推移，建築開始容納了各種記憶以及標籤<br>
            讓這些老建築開始具有了歷史的價值<br>
            如何修復？如何展現？是不是全部都規劃成文創園區？<br>
            讓我們在這一季告訴你
          </p>
          <router-link :to="`/episodes/oldbuilding`"
          class="btn btn-primary w-lg-25 w-50">收聽</router-link>
        </div>
        <div class="col-lg-7">
          <div style="background-image: url(https://images.unsplash.com/photo-1526034407304-e9573cc7d20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
          height:420px; background-size:cover;"></div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-lg-7">
          <div style="background-image: url(https://images.unsplash.com/photo-1588417363377-3f252ee8a94c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
          height:420px; background-size:cover;"></div>
        </div>
        <div class="col-lg-4 d-flex flex-column justify-content-center">
          <h3>電影建築</h3>
          <p>
            在電影裡面的建築退去了他作為主角的特色<br>
            成了營造畫面氛圍以及呈現故事發生的載體<br>
            不知道各位是否會好奇，那些出現在電影裡面的建築或是都市景觀來自哪裡？有什麼故事？<br>
            就讓我一起進入建築的電影世界吧！
          </p>
          <router-link :to="`/episodes/moviebuilding`"
          class="btn btn-primary w-lg-25 w-50">收聽</router-link>
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
  <section class="subscription py-lg-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5">有您的支持<br>
        建人五四三才能提供更佳的內容
      </h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card rounded-4 shadow-sm h-100">
            <div class="card-body position-relative">
              <p class="h5 text-center pt-5">
                <span class="bg-gray p-2">友情訂閱</span>
              </p>
              <h5 class="card-title fw-bold text-center mb-5">
                <span class="align-middle">TWD</span>
                <span class="display-2 fw-bold price-detail
                align-middle px-2">0</span>
                <span class="align-middle">／ 月</span>
              </h5>
              <p class="h5 card-text text-center mb-4">你將會得到</p>
              <ul class="text-center list-unstyled fs-5 mb-5">
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
              <a href="#" class="btn btn-primary mx-auto d-block w-50
              position-absolute bottom-0 start-0 end-0 mb-5 btn-lg">按我訂閱</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card rounded-4 shadow-sm  h-100">
            <div class="card-body">
              <p class="h5 text-center pt-5">
                <span class="bg-gray p-2">1 個月</span>
              </p>
              <h5 class="card-title fw-bold text-center mb-5">
                <span class="align-middle">TWD</span>
                <span class="display-2 fw-bold price-detail
                align-middle px-2">30</span>
                <span class="align-middle">／ 月</span>
              </h5>
              <p class="h5 card-text text-center mb-4">你將會得到</p>
              <ul class="text-center list-unstyled fs-5 mb-5">
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
              <a href="#" class="btn btn-primary mx-auto d-block w-50
              position-absolute bottom-0 start-0 end-0 mb-5 btn-lg">按我訂閱</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card rounded-4 shadow-sm h-100">
            <div class="card-body sponsor-card">
              <p class="h5 text-center pt-5">
                <span class="bg-gray p-2">12 個月</span>
              </p>
              <h5 class="card-title fw-bold text-center mb-5">
                <span class="align-middle">TWD</span>
                <span class="display-2 fw-bold price-detail
                align-middle px-2">360</span>
                <span class="align-middle">／ 年</span>
              </h5>
              <p class="h5 card-text text-center mb-4">你將會得到</p>
              <ul class="text-center list-unstyled fs-5 mb-5">
                <li class="mb-3 gift-check">
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
              <a href="#" class="btn btn-primary mx-auto d-block w-50
              position-absolute bottom-0 start-0 end-0 mb-5 btn-lg">按我訂閱</a>
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

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';

// import required modules
import Autoplay from 'swiper/modules/autoplay/autoplay';

export default {
  methods: {
    toEpisode() {
      this.$router.push('/episodes');
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    LandingBanner,
  },
  setup() {
    return {
      modules: [Autoplay],
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

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sponsor-card {
  height: 690px;
}

</style>
