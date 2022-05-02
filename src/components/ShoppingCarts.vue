<template>
  <ul class="list-unstyled mb-5" v-if="cartsData.carts?.length !== 0">
    <li v-for="cartItem in cartsData.carts" :key="cartItem.id"
    class="d-flex justify-content-between align-items-center mb-4">
      <p class="mb-0 h6 w-75">
        {{cartItem.product.title}}
      </p>
      <div class="d-flex justify-content-end align-items-center">
        <button type="button" class="border-0 bg-white number-btn"
        :class="{'link-disabled': cartIsLoading === true}"
        @click="updateCartNum(cartItem.id, cartItem.product.id, cartItem.qty, -1)">
          <i class="bi bi-dash-lg fw-bold"></i>
        </button>
        <input type="text" readonly v-model="cartItem.qty"
        class="w-25 border-0 mx-3 text-center">
        <button class="border-0 bg-white number-btn me-5"
        :class="{'link-disabled': cartIsLoading === true}"
        @click="updateCartNum(cartItem.id, cartItem.product.id, cartItem.qty, +1)">
          <i class="bi bi-plus-lg fw-bold"></i>
        </button>
        <button class="btn btn-outline-primary btn-sm"
        :class="{'disabled': cartIsLoading === true}"
        @click="delCartItem(cartItem.id)"
        type="button">
          <i class="bi bi-x"></i>
        </button>
      </div>
    </li>
  </ul>
  <div v-else class="d-flex flex-column justify-content-center no-product">
    <p class="fs-3 mb-4 text-center fw-bold">
      您目前沒有贊助方案
    </p>
    <RouterLink to="/sponsorus"
    class="btn btn-primary w-25 d-block mx-auto mb-5 btn-lg">點我去贊助</RouterLink>
  </div>
  <div class="d-flex align-items-center justify-content-between"
  v-if="cartsData.carts?.length !== 0">
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
</template>

<script>
export default {
  data() {
    return {
      cartIsLoading: false,
    };
  },
  props: ['cartsData'],
  emits: ['getCartsData'],
  inject: ['emitter'],
  methods: {
    updateCartNum(id, productId, originQty, pressNum) {
      this.cartIsLoading = true;
      const newQty = originQty + pressNum;
      if (newQty === 0) {
        this.delCartItem(id);
      } else {
        const obj = {
          data: {
            product_id: productId,
            qty: newQty,
          },
        };
        this.$http.put(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${id}`, obj)
          .then((res) => {
            this.cartIsLoading = false;
            if (res.data.success === true) {
              this.$swal({
                icon: 'success',
                title: '已調整購物車',
                showConfirmButton: false,
                timer: 1500,
              });
              this.$emit('getCartsData');
              this.emitter.emit('cartsNumChange');
            } else {
              this.$swal({
                icon: 'warning',
                title: 'Oops...',
                text: '購物車數量調整有誤，請重新再試或與我們聯絡',
              });
            }
          })
          .catch(() => {
            this.cartIsLoading = false;
            this.$swal({
              icon: 'warning',
              title: 'Oops...',
              text: '購物車數量調整有誤，請重新再試或與我們聯絡',
            });
          });
      }
    },
    delCartItem(id) {
      this.cartIsLoading = true;
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
            .then((res) => {
              if (res.data.success === true) {
                this.$emit('getCartsData');
                this.emitter.emit('cartsNumChange');
                this.cartIsLoading = false;
                this.showConfirmButton = false;
                this.$swal({
                  title: '已刪除',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 1500,
                });
              } else {
                this.cartIsLoading = false;
                this.$swal({
                  icon: 'warning',
                  title: 'Oops...',
                  text: '購物車刪除失敗，請重新再試或與我們聯絡',
                });
              }
            })
            .catch(() => {
              this.cartIsLoading = false;
              this.$swal({
                icon: 'warning',
                title: 'Oops...',
                text: '購物車刪除失敗，請重新再試或與我們聯絡',
              });
            });
        } else {
          this.cartIsLoading = false;
        }
      });
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
};
</script>
