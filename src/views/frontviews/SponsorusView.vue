<template>
  <div class="container pb-5 mt-6">
    <div class="row">
      <div class="col-lg-12">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/kevinhesapi/1649244256173.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dzmjeY6xWc%2BmWtMU2N%2FuaBbkbPI9IEaXzAYEx9xA88yx0SS0VlTHM8%2BEjdxc9yIDIjmUqysxHgpUp7RvRIoepOXNfEyr2n%2FwCJXfqbbnEUwKKxAXHPjZMvyCWSDOtv8EQsqixSwWp3ZOix1Ur%2Fw%2BCRctfF0Z12KjA7GjsCDIJ7ux2CvUn9dZoW5WHikzih0gkUYAXIVKEfBe2UJ1p%2B4ZdUS%2BOQfCYv2IiQSoGgw9JsYDXlgwhXra1X1MlmM8AMonMdZveVUmlgCCZ%2FfsAS%2BsmRIJT9bjdOgfw4RT%2FglTqAiYdBrjkKK0w2lNAkAFo%2BRByEuI2rIZpRKYDvTNDLGpug%3D%3D" alt="建人五四三贊助頁面" class="img-fluid">
      </div>
    </div>
    <div class="row">
      <div class="col-lg-9 order-1 order-lg-2">
        <div class="row">
          <h3 class="mb-5">贊助方案</h3>
          <div class="col-lg-4 col-md-6 mb-4"
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
                  :class="{'disabled': isLoading === true}"
                  @click.prevent="addToCart(sponsorDetail.id)">贊助</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <button type="button" class="btn btn-outline-primary btn-sm"
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
        <RouterLink to="/customerorder" class="btn btn-primary w-100"
        :class="{'disabled': cartsData.carts?.length === 0}">結帳</RouterLink >
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
      isLoading: false,
    };
  },
  methods: {
    getProductsData() {
      const loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        onCancel: this.onCancel,
      });
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/products/all`)
        .then((res) => {
          this.sponsorData = res.data.products.filter((i) => i.category === '贊助');
          loader.hide();
        })
        .catch(() => {});
    },
    addToCart(id, qty = 1) {
      this.isLoading = true;
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
          this.isLoading = false;
        })
        .catch(() => {});
    },
    delCartItem(id) {
      this.$http.delete(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${id}`)
        .then((res) => {
          alert(res.data.message);
          this.getCartsData();
        })
        .catch(() => {});
    },
    getCartsData() {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart`)
        .then((res) => {
          this.cartsData = res.data.data;
        })
        .catch(() => {});
    },
    updateCartNum(id, productId, qty) {
      if (qty === 0) {
        this.$http.delete(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${id}`)
          .then((res) => {
            this.getCartsData();
            alert(res.data.message);
          })
          .catch(() => {});
      } else {
        const obj = {
          data: {
            product_id: productId,
            qty,
          },
        };
        this.$http.put(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${id}`, obj)
          .then((res) => {
            alert(res.data.message);
            this.getCartsData();
          })
          .catch(() => {});
      }
    },
  },
  mounted() {
    this.getProductsData();
    this.getCartsData();
  },
};
</script>
