<template>
<div class="container d-lg-none">
  <h2 class="text-center mb-5">有您的支持<br>
    建人五四三才能提供更佳的內容
  </h2>
       <swiper
    :slidesPerView="6"
    :spaceBetween="30"
    :modules="modules"
    class="mySwiper"
    :breakpoints="{
      '390': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      '992': {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    }"
  >
    <swiper-slide>
      <div class="card rounded-4 shadow-sm sponsor-card">
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
          </div>
          <div class="footer">
            <a href="#" class="btn btn-primary mx-auto d-block w-50
            mb-5 btn-lg" @click.prevent="addToCarts('-MyBvXgqnJbrrHKUiPGZ')">按我訂閱</a>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card rounded-4 shadow-sm  sponsor-card">
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
          </div>
          <div>
            <a href="#" class="btn btn-primary mx-auto d-block w-50 mb-5 btn-lg"
            @click.prevent="addToCarts('-MyCJMkfZIuIxqL8xrPV')">按我訂閱</a>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card rounded-4 shadow-sm sponsor-card">
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
    </swiper-slide>
  </swiper>
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
  methods: {
    addToCarts(id) {
      this.$emit('addToCarts', id);
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
  .sponsor-card {
    height: 695px;
  }
</style>
