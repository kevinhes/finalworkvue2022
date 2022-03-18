<template>
  <ul class="list-unstyled mb-5" v-if="cartsData.carts?.length !== 0">
    <li v-for="cartItem in cartsData.carts" :key="cartItem.id"
    class="d-flex justify-content-between align-items-center mb-4">
      <p class="mb-0 h6 w-75">
        {{cartItem.product.title}}
      </p>
      <div class="d-flex justify-content-end align-items-center">
        <input type="number" v-model="cartItem.qty"
        @change="updateCartNum(cartItem.id, cartItem.product.id, cartItem.qty)"
        :disabled="cartIsLoaging === true"
        class="w-25 border-0 me-2">
        <button class="btn btn-outline-primary btn-sm"
        :class="{'disabled': cartIsLoaging === true}"
        @click="delCartItem(cartItem.id)">
          <i class="bi bi-x"></i>
        </button>
      </div>
    </li>
  </ul>
  <p class="fs-5 mb-4" v-else>
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
</template>

<script>
export default {
  data() {
    return {
      cartIsLoaging: false,
    };
  },
  props: ['cartsData'],
  emits: ['getCartsData'],
  methods: {
    updateCartNum(id, productId, qty) {
      this.cartIsLoaging = true;
      const obj = {
        data: {
          product_id: productId,
          qty,
        },
      };
      this.$http.put(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${id}`, obj)
        .then((res) => {
          alert(res.data.message);
          this.cartIsLoaging = false;
          this.$emit('getCartsData');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    delCartItem(id) {
      this.$http.delete(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart/${id}`)
        .then((res) => {
          alert(res.data.message);
          this.$emit('getCartsData');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
