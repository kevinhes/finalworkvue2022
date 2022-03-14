<template>
  <div class="offcanvas offcanvas-end" tabindex="-1"
  id="offcanvasRight" aria-labelledby="offcanvasRightLabel"
  ref="shoppingCarts">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Offcanvas right</h5>
      <button type="button" class="btn-close text-reset"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      ...
    </div>
  </div>
</template>

<script>
import Offcanvas from '../../node_modules/bootstrap/js/dist/offcanvas';

export default {
  data() {
    return {
      shoppingCarts: '',
    };
  },
  methods: {
    openShoppingCarts() {
      this.shoppingCarts.show();
    },
  },
  mounted() {
    this.shoppingCarts = new Offcanvas(this.$refs.shoppingCarts);
  },
};
</script>
