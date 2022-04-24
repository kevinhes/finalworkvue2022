<template>
  <div class="container py-5 mt-6">
    <div class="row">
      <div class="offset-md-2 col-md-8">
        <h3 class="mb-5">您想要贊助我們的項目</h3>
        <ShoppingCarts ref="shoppingCarts" :carts-data="cartsData"
        @get-carts-data="getCartsData" />
        <hr>
        <Validate @get-carts-data="getCartsData" />
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCarts from '@/components/ShoppingCarts.vue';
import Validate from '@/components/Validate.vue';

export default {
  data() {
    return {
      cartsData: {},
    };
  },
  components: {
    ShoppingCarts,
    Validate,
  },
  inject: ['emitter'],
  methods: {
    getCartsData() {
      const loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        onCancel: this.onCancel,
      });
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/cart`)
        .then((res) => {
          this.cartsData = res.data.data;
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
  },
  mounted() {
    this.getCartsData();
  },
};
</script>
