<template>
  <swiper :pagination="true" :modules="modules"
  class="mySwiper mt-6"
   :autoplay="{
      delay: 9000,
      disableOnInteraction: false,
    }">
    <swiper-slide style="backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/kevinhesapi/1649243972645.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XmZZyUNwraPAkS%2BEqU0ItAyKHRiKcc6UVV8p%2FO629jHWuAcJ6Fl%2BHki7OAJ1walqcs7MIsAEY0lImp3BPRpsK5TPfrZb5uE1tIHii9oKRAbubOcLmBMzfF%2Bd0ib9jN89fiKcLd5IDPgvQAs6jBKNu4h%2BcuXZaFspYAI15yY%2FLEnIbpuWNbOmWYQvS2PFdzVmrmc9MegST1BUMdKxsrs2DLrs1UiKEpgI8YfglY3WmTE6Ar9l1vvoC2BCInrO1giu3BRuu1ml5cljZfL8vbr9dMwY1iGtZIM0FjPeWfz70MzE%2F1VN4TyMnp6tyu8c9Nm0GoU5oMu4IXNhRwIi9lJEXA%3D%3D);
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
            <RouterLink to="/episode/-MyaOlqziq_h0qDdBPNL"
            class="btn btn-primary mb-5">收聽</RouterLink>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide style="backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/kevinhesapi/1649244057900.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gIEbjGSfj3YV4Q9rv3bWTfmerFXNEOBcnlJrpvRFdoaOp4xk6D3F%2FVWcsJo6VUkjq89tNYh%2FE8W%2FTI3zESD%2F1wkmQPyqL%2BfQBX57twKljVbdpIQo4XOEVacJxTfzKsUYMqL75k%2Bsl5eIh8vL5AOWWmK%2FEpJHOeFwtWR0oVi6xcDvIqwJ0mZx8r6XtMX131ZzRRhO%2BaMoRVaFEm4mcNu%2FLy%2FQBPdst%2FXa0PYVgqCRY1W%2FZ4D%2B5kvUp9ObsNfuXCM3Sks5gh%2Bo7nnneDSeUtCvRoUgCLqU261xXRimEJXwpVCGPW7UdNyTQzXaXsJzpxsUuxh2VzYDAY2KZH7evF5%2Bag%3D%3D);
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
            <RouterLink class="btn btn-primary mb-5"
            to="/episode/-Myamo7onTyd9BfZHvUT">收聽</RouterLink>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide style="backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/kevinhesapi/1649244144564.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JqWH%2FPgj7OATNacnDjDsgacnzzSv8a4CRhe9%2BkEzWVCKjerQ2Yo2Xis76S0BS%2BDgZchlObp2XNg9h09YXBDlNMvX2%2FaEpPhBEmukmsG21VeTSc2pYXxDktNtT4S%2BOG8uhaWGY4u4NvqMJwbsWTX4HPVZ4yU0VZmQ%2FnvsEtNoJ2aSWaOHucG29VaJxMDwS2BReikyVzGf%2BK8z554fcoB6AXGCXPX0YFBQ8RNZ6X4xDY49VDrLGsjy8cQTNZGRTtAM5iO67wZv0SPRvpdB%2BqmYK735YcWDQgBCpfrGAnBWM3%2FIr6LPg4SMckwZst2mjClfdgHWTbbZeBgpBcnKI09N9g%3D%3D);
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
            <RouterLink class="btn btn-primary mb-5"
            to="/episode/-MyfiiJi_Pp2If18UIg2">收聽</RouterLink>
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

:deep .swiper-pagination-bullet-active {
  color: #fff;
  background: #be1e2d;
}
</style>
