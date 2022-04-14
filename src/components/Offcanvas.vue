<template>
  <div class="offcanvas offcanvas-end" tabindex="-1"
  id="offcanvasRight" aria-labelledby="offcanvasRightLabel"
  ref="shoppingCarts">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">贊助列表</h5>
      <button type="button" class="btn-close text-reset"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="list-unstyled" v-if="cartsData.carts?.length">
        <li v-for="cartItem in cartsData.carts" :key="cartItem.id"
        class="mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h5 class="card-title mb-0">{{cartItem.product.title}}</h5>
                <button type="button" href="#" class="btn btn-outline-primary btn-sm"
                @click="delCartItem(cartItem.id)">
                  <i class="bi bi-x"></i>
                </button>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <button class="border-0 bg-white" type="button"
                  @click="updateCartNum(cartItem.id, cartItem.product.id, cartItem.qty-=1)">
                    <i class="bi bi-dash-lg fw-bold"></i>
                  </button>
                  <input type="number" v-model="cartItem.qty" class="border-0 w-10 text-center"
                  @change="updateCartNum(cartItem.id, cartItem.product.id, cartItem.qty)">
                  <button class="border-0 bg-white" type="button"
                  @click="updateCartNum(cartItem.id, cartItem.product.id, cartItem.qty+=1)">
                    <i class="bi bi-plus-lg fw-bold"></i>
                  </button>
                </div>
                <div class="d-flex align-items-center">
                  <p class="mb-0">
                    <span class="me-2">TWD</span>
                  </p>
                  <p class="mb-0">
                    <span class="fs-5">{{cartItem.final_total}}</span>
                  </p>
                  <p class="mb-0">
                    <span class="ms-2">元</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div v-else>
        <p>目前沒有贊助方案</p>
      </div>
    </div>
    <div class="offcanvas-footer p-3">
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
      :class="{'disabled' : cartsData.carts?.length === 0}"
      @click="closeOffcanvas">結帳</RouterLink>
    </div>
  </div>
</template>

<script>
import Offcanvas from '../../node_modules/bootstrap/js/dist/offcanvas';

export default {
  data() {
    return {
      shoppingCarts: '',
      cartsData: {},
    };
  },
  methods: {
    openShoppingCarts() {
      this.shoppingCarts.show();
      this.getCartsData();
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
        this.delCartItem();
      } else {
        const obj = {
          data: {
            product_id: productId,
            qty,
          },
        };
        this.$http.put(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${id}`, obj)
          .then(() => {
            this.getCartsData();
            this.$emit('cartsNumChange');
            this.$swal({
              icon: 'success',
              title: '已調整購物車',
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch(() => {});
      }
    },
    delCartItem(id) {
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
              this.$emit('cartsNumChange');
              this.$swal({
                title: '已刪除',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000,
              });
            })
            .catch(() => {});
        }
      });
    },
    closeOffcanvas() {
      this.shoppingCarts.hide();
    },
  },
  mounted() {
    this.shoppingCarts = new Offcanvas(this.$refs.shoppingCarts);
  },
};
</script>

<style lang="scss" scoped>
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>
