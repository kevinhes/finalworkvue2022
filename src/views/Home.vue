<template>
  <FrontNavbar />
  <RouterView v-if="isRouterAlive"/>
  <FrontFooter />
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';
import FrontFooter from '@/components/FrontFooter.vue';
import emitter from '@/methods/Emitter';

export default {
  data() {
    return {
      isRouterAlive: true,
    };
  },
  provide() {
    return {
      reload: this.reload,
      emitter,
    };
  },
  components: {
    FrontNavbar,
    FrontFooter,
  },
  methods: {
    openShoppingCarts() {
      this.$refs.shoppingCarts.openShoppingCarts();
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => { this.isRouterAlive = true; });
    },
  },
};
</script>
