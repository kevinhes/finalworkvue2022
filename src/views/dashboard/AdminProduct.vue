<template>
  <div class="container">
    <div class="text-end mt-4">
      <button type="button" class="btn btn-primary" @click="openModal('new')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productsData" :key="product.id">
          <td>{{product.category}}</td>
          <td>{{product.title}}</td>
          <td class="text-end">{{product.origin_price}}</td>
          <td class="text-end">{{product.price}}</td>
          <td>
            <span class="text-success" v-if="product.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm"
              @click="openModal('edit', product)">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm"
              @click="openModal('delete', product)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pagination="pagination" @page-change="getProductsData"></Pagination>
    <ProductModal :product=product :is-new="isNew"
    ref="productModal" @get-data="getProductsData"></ProductModal>
    <DelModal ref="delModal" :product="product" @get-data="getProductsData"></DelModal>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import ProductModal from '@/components/ProductModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  data() {
    return {
      productsData: [],
      pagination: {},
      product: {},
      isNew: false,
    };
  },
  methods: {
    getProductsData(page = 1) {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/admin/products?page=${page}`)
        .then((res) => {
          this.productsData = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch(() => {});
    },
    openModal(status, product) {
      if (status === 'new') {
        this.isNew = true;
        this.product = {
          imagesUrl: [],
        };
        this.$refs.productModal.openModal();
      } else if (status === 'edit') {
        this.isNew = false;
        this.product = { ...product };
        this.$refs.productModal.openModal();
      } else if (status === 'delete') {
        this.product = { ...product };
        this.$refs.delModal.openModal();
      }
    },
  },
  components: {
    Pagination,
    ProductModal,
    DelModal,
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    this.getProductsData();
  },
};
</script>
