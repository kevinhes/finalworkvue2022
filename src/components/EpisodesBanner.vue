<template>
  <swiper :pagination="true" :modules="modules"
  class="mySwiper mt-6"
   :autoplay="{
      delay: 9000,
      disableOnInteraction: false,
    }">
    <swiper-slide style="backgroundImage: url(https://images.unsplash.com/photo-1567372773800-7a92703a0d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2373&q=80);
    background-position: 50% 75%;"
    class="episode-banner position-relative">
      <div class="position-absolute bg-dark bg-opacity-75 bottom-0 start-0 end-0
      top-md-30 top-lg-35 top-50"
      style="z-index: 1;"></div>
      <div class="container h-100 position-relative" style="z-index: 2;">
        <div class="row align-items-end h-100">
          <div class="col-12 pt-4">
            <h3 class="text-light mb-3">綠建築 大雨大雨一直下，淹水的都市建人怎麼解</h3>
            <p class="text-light  d-none d-md-block">
              台灣是颱風的重災區，為了預防颱風造成的災害，台灣政府長年來花了很多力氣治水<br>
              但是在極端氣候下這幾年所下的雨總是造成台灣大雨成災，防災的計劃趕不上變化造成莫大的損失<br>
              本集我們將介紹城市為什麼淹水，我們用了什麼防止淹水的手段，當這些手段都失效了，我們下一步該怎麼走？</p>
            <router-link to="/episode/-MyaOlqziq_h0qDdBPNL"
            class="btn btn-primary mb-5">收聽</router-link>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide style="backgroundImage: url(https://i.imgur.com/rB6mG2A.jpg);
    background-position: 50% 50%;"
    class="episode-banner  position-relative">
    <div class="position-absolute bg-dark bg-opacity-75 bottom-0 start-0 end-0
    top-md-30 top-lg-35 top-50"
      style="z-index: 1;"></div>
      <div class="container h-100 position-relative" style="z-index: 2;">
        <div class="row align-items-end h-100">
          <div class="col-12 pt-4">
            <h3 class="text-light mb-3">歷史建築 首戰即終戰！？擊潰大姊的馬祖新村！？</h3>
            <p class="text-light  d-none d-md-block">您是否有遊蕩在廢墟中的經驗呢？
              還是您有去叢林探險過？<br>
              建人五四三跟大家說，在修復歷史建築的這份工作可以讓你兩個願望一次滿足<br>
              長年無人居住的磚造建築在重見天日之後究竟需要多少的心力去修復？過程中又有發生什麼趣事，快點下收聽讓我們告訴你
              </p>
            <router-link class="btn btn-primary mb-5"
            to="/episode/-Myamo7onTyd9BfZHvUT">收聽</router-link>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide style="backgroundImage: url(https://images.unsplash.com/photo-1545986744-9ca7f5cd7bc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80);
    background-position: 50% 79%;"
    class="episode-banner position-relative">
    <div class="position-absolute bg-dark bg-opacity-75 bottom-0 start-0 end-0
    top-md-30 top-lg-35 top-50"
      style="z-index: 1;"></div>
      <div class="container h-100 position-relative" style="z-index: 2">
        <div class="row align-items-end h-100">
          <div class="col-12 pt-4">
            <h3 class="text-light mb-4 mb-md-3">電影建築 California Dreamin'- 重慶森林的建築眾象</h3>
            <p class="text-light d-none d-md-block">『我們跟她最近的時候，我們之間的距離只有一顆鏡頭』，
              香港距離台灣這麼近卻那麼遠，是六百多公里遠也是有線電視國片台的無限輪播的一小時半。從小看著香港電影長大，
              94年從喜劇『國產零零漆』、『九品芝麻官』與賭片『賭神』、『賭聖』裡我們看見了九零年代初好經濟的社會氣氛。
              這輯我們藉由文藝片『重慶森林』浪漫的角度來介紹這個城市27年前的停格</p>
            <button class="btn btn-primary mb-5">收聽</button>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/navigation/navigation.scss';

// import required modules
import Pagination from 'swiper/modules/pagination/pagination';
import Autoplay from 'swiper/modules/autoplay/autoplay';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
};
</script>

<style lang="scss" scoped>
  .swiper {
  width: 100%;
  height: 100%;
}

.episode-banner{
  background-size: cover;
  height: 390px;
}
</style>
