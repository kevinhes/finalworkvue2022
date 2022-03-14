<template>
  <swiper :pagination="true" :modules="modules"
  class="mySwiper"
   :autoplay="{
      delay: 9000,
      disableOnInteraction: false,
    }">
    <swiper-slide style="backgroundImage: url(https://images.unsplash.com/photo-1567372773800-7a92703a0d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2373&q=80);
    background-position: 50% 75%;"
    class="episode-banner">
      <div class="container h-100">
        <div class="row align-items-center h-100">
          <div class="col-6">
            <h3 class="text-light">綠建築 大雨大雨一直下，淹水的都市建人怎麼解</h3>
            <p class="text-light">1234</p>
            <button class="btn btn-primary btn-lg">收聽</button>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide style="backgroundImage: url(https://i.imgur.com/rB6mG2A.jpg);
    background-position: 50% 50%;"
    class="episode-banner">
      <div class="container h-100">
        <div class="row align-items-center h-100">
          <div class="col-6">
            <h3 class="text-light">歷史建築 首戰即終戰！？擊潰大姊的馬祖新村！？</h3>
            <p class="text-light">1234</p>
            <button class="btn btn-primary btn-lg">收聽</button>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide style="backgroundImage: url(https://images.unsplash.com/photo-1545986744-9ca7f5cd7bc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80);
    background-position: 50% 79%;"
    class="episode-banner">
      <div class="container h-100">
        <div class="row align-items-center h-100">
          <div class="col-6">
            <h3 class="text-light">電影建築 California Dreamin'- 重慶森林的建築眾象</h3>
            <p class="text-light">1234</p>
            <button class="btn btn-primary btn-lg">收聽</button>
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
