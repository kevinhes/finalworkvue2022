<template>
  <FrontNavbar></FrontNavbar>
  <router-view></router-view>
  <FrontFooter></FrontFooter>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';
import FrontFooter from '@/components/FrontFooter.vue';

export default {
  components: {
    FrontNavbar,
    FrontFooter,
  },
  methods: {
    openShoppingCarts() {
      this.$refs.shoppingCarts.openShoppingCarts();
    },
  },
};
</script>
