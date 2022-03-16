<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-3">
        <h3>贊助建人五四三</h3>
        <p>啊我就真的很想要錢啊拜託給我一點拉拜託拜託</p>
      </div>
      <div class="col-lg-9">
        <img src="https://i.imgur.com/rjvxM57.png" alt="" class="img-fluid">
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="order-2 older-lg-1 col-lg-3">
        <h3 class="mb-5">您想要贊助我們</h3>
        <ul class="list-unstyled mb-4" style="height:360px;" v-if="cartsData.carts?.length !== 0">
            <li v-for="cartItem in cartsData.carts" :key="cartItem.id"
            class="d-flex justify-content-between align-items-center mb-4">
              <p class="mb-0 h6 w-75">
                {{cartItem.product.title}}
              </p>
              <div class="d-flex justify-content-end align-items-center">
                <input type="number" v-model="cartItem.qty"
                @change="updateCartNum(cartItem.id, cartItem.product.id, cartItem.qty)"
                class="w-25 border-0 me-2">
                <button class="btn btn-outline-primary btn-sm"
                @click="delCartItem(cartItem.id)">
                  <i class="bi bi-x"></i>
                </button>
              </div>
            </li>
        </ul>
        <p class="fs-5 mb-4" style="height:360px;" v-else>
          目前沒有贊助方案
        </p>
        <div class="d-flex align-items-center justify-content-between">
          <p>
            <span class="me-2">共</span>
            <span class="fw-bold">
              {{cartsData.carts?.length}}
            </span>
            <span class="ms-2">項商品</span>
          </p>
          <p>
            <span class="align-middle me-3">總計</span>
            <span class="h2 align-middle">
              {{cartsData.final_total}}
            </span>
            <span class="align-middle ms-3">元</span>
          </p>
        </div>
        <button class="btn btn-primary w-100">結帳</button>
      </div>
      <div class="col-lg-9 order-1 order-lg-2">
        <div class="row">
          <h3 class="mb-5">贊助方案</h3>
          <div class="col-lg-4 mb-4"
          v-for="sponsorDetail in sponsorData" :key="sponsorDetail.id">
            <div class="card h-100">
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 class="card-title">{{sponsorDetail.title}}</h5>
                  <h5 class="card-title fw-bold text-center">
                    <span class="align-middle">TWD</span>
                    <span class="display-5 fw-bold price-detail
                    align-middle px-2">{{sponsorDetail.price}}</span>
                    <span class="align-middle">／ 月</span>
                  </h5>
                  <p class="fw-bold">方案說明</p>
                  <p class="card-text text-muted">{{sponsorDetail.description}}</p>
                  <p class="fw-bold">您可以獲得</p>
                  <p class="card-text text-muted mb-3" v-html="sponsorDetail.content"></p>
                </div>
                <div>
                  <a href="#" class="btn btn-outline-primary w-100"
                  @click.prevent="addToCart(sponsorDetail.id)">贊助</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sponsorData: [],
      cartsData: {},
    };
  },
  methods: {
    getProductsData() {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/products/all`)
        .then((res) => {
          this.sponsorData = res.data.products.filter((i) => i.category === '贊助');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart(id, qty = 1) {
      const obj = {
        data: {
          product_id: id,
          qty,
        },
      };
      this.$http.post(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart`, obj)
        .then((res) => {
          alert(res.data.message);
          this.getCartsData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    delCartItem(id) {
      this.$http.delete(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${id}`)
        .then((res) => {
          alert(res.data.message);
          this.getCartsData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCartsData() {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart`)
        .then((res) => {
          this.cartsData = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateCartNum(id, productId, qty) {
      const obj = {
        data: {
          product_id: productId,
          qty,
        },
      };
      this.$http.put(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${id}`, obj)
        .then((res) => {
          alert(res.data.message);
          this.$emit('get-carts');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // textCut(text) {
    //   const newContent = text?.split('\n');
    //   console.log(newContent);
    //   let contentStr = '';
    //   newContent.forEach((i) => {
    //     contentStr += `
    //     ${i}<br>
    //     `;
    //   });
    //   return contentStr;
    // },
  },
  mounted() {
    this.getProductsData();
    this.getCartsData();
  },
};
</script>
