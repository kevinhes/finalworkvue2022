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
      <ul class="list-unstyled">
        <li v-for="cartItem in cartsData.carts" :key="cartItem.id"
        class="mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-3">
                <h5 class="card-title">{{cartItem.product.title}}</h5>
                <a href="#" class="card-link">Another link</a>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <button class="border-0 bg-white"
                  @click="updateCartNum(cartItem.id, cartItem.product.id, cartItem.qty-=1)">
                    <i class="bi bi-dash-lg fw-bold"></i>
                  </button>
                  <input type="number" v-model="cartItem.qty" class="border-0 w-25 text-center"
                  @change="updateCartNum(cartItem.id, cartItem.product.id, cartItem.qty)">
                  <button class="border-0 bg-white"
                  @click="updateCartNum(cartItem.id, cartItem.product.id, cartItem.qty+=1)">
                    <i class="bi bi-plus-lg fw-bold"></i>
                  </button>
                </div>
                <div>
                  <p class="mb-0 flex-fill">
                    <span class="align-middle me-2">TWD</span>
                    <span class="fs-5 align-middle">{{cartItem.final_total}}</span>
                    <span class="align-middle ms-2">元</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    <p>{{cartsData.final_total}}</p>
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
          this.getCartsData();
          alert(res.data.message);
        })
        .catch((error) => {
          console.dir(error);
        });
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
