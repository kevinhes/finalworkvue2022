<template>
  <div class="container pb-5 mt-6">
    <div class="row">
      <div class="col-lg-12">
        <img src="../../assets/images/sponsorbanner.png" alt="建人五四三贊助頁面" class="img-fluid">
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
                <a href="#" :class="{'link-disalbed': isLoading === true}"
                @click.prevent="updateCartNum(cartItem.id, cartItem.product.id, cartItem.qty-=1)">
                  <i class="bi bi-dash"></i>
                </a>
                <!-- <p class="mb-0 mx-1 p-2">{{cartItem.qty}}</p> -->
                <input type="text" readonly class="w-25 border-0 px-auto text-center"
                v-model="cartItem.qty">
                <a href="#" class="me-3" :class="{'link-disalbed': isLoading === true}"
                @click.prevent="updateCartNum(cartItem.id, cartItem.product.id, cartItem.qty+=1)">
                  <i class="bi bi-plus"></i>
                </a>
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
              {{numberWithCommas(cartsData.final_total)}}
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
  inject: ['emitter'],
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
        .catch((error) => {
          this.$swal({
            icon: 'warning',
            title: 'Oops...',
            text: error.response.data.message,
          });
          loader.hide();
        });
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
        .then(() => {
          this.addCartAlert();
          this.getCartsData();
          this.isLoading = false;
          this.emitter.emit('cartsNumChange');
        })
        .catch(() => {
          this.$swal({
            icon: 'warning',
            title: 'Oops...',
            text: '加入購物車失敗',
          });
        });
    },
    addCartAlert() {
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
    delCartItem(id) {
      this.isLoading = true;
      this.$swal({
        icon: 'warning',
        title: '確定要刪除嗎？',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$http.delete(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${id}`)
            .then(() => {
              this.getCartsData();
              this.emitter.emit('cartsNumChange');
              this.isLoading = false;
              this.$swal({
                title: '已刪除',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000,
              });
            })
            .catch(() => {
              this.$swal({
                icon: 'warning',
                title: 'Oops...',
                text: '購物車刪除失敗，請重新嘗試或與我們聯絡',
              });
            });
        } else {
          this.getCartsData();
          this.isLoading = false;
        }
      });
    },
    getCartsData() {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart`)
        .then((res) => {
          this.cartsData = res.data.data;
        })
        .catch((error) => {
          this.$swal({
            icon: 'warning',
            title: 'Oops...',
            text: error.response.data.message,
          });
        });
    },
    updateCartNum(id, productId, qty) {
      this.isLoading = true;
      if (qty === 0) {
        this.delCartItem(id);
      } else {
        const obj = {
          data: {
            product_id: productId,
            qty,
          },
        };
        this.$http.put(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${id}`, obj)
          .then(() => {
            this.$swal({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: '已調整購物車',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
            });
            this.getCartsData();
            setTimeout(() => {
              this.isLoading = false;
            }, 2000);
          })
          .catch(() => {
            this.$swal({
              icon: 'warning',
              title: 'Oops...',
              text: '購物車數量調整有誤，請您重新再試或與我們聯絡',
            });
          });
      }
    },
    numberWithCommas(num) {
      if (!num) return 0;
      const intPart = Math.trunc(num);
      const intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
      let floatPart = '';
      const valueArray = num.toString().split('.');
      if (valueArray.length === 2) {
        floatPart = valueArray[1].toString();
        return `${intPartFormat}.${floatPart}`;
      }
      return intPartFormat + floatPart;
    },
  },
  created() {
    this.emitter.on('cartsNumRenew', () => {
      this.getCartsData();
    });
  },
  mounted() {
    this.getProductsData();
    this.getCartsData();
  },
};
</script>
