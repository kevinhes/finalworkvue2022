<template>
  <div id="productModal" ref="productModal"
  class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
        aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button type="button" class="btn-close"
          data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入主要圖片網址</label>
                  <input type="text" class="form-control" v-model="productData.imageUrl"
                  placeholder="請輸入圖片連結">
                </div>
                <img class="img-fluid" :src="productData.imageUrl" alt="">
              </div>
              <div class="mb-2" v-if="Array.isArray(productData.imagesUrl)">
                <div class="mb-3" v-for="(img, index) in productData?.imagesUrl" :key="img">
                  <div class="mb-3">
                    <label for="imageUrl" class="form-label">輸入主要圖片網址</label>
                    <input type="text" class="form-control" v-model="productData.imagesUrl[index]"
                    placeholder="請輸入圖片連結">
                  </div>
                  <img class="img-fluid" :src="img" alt="">
                </div>
                <div v-if="!productData.imagesUrl.length ||
                productData.imagesUrl[productData.imagesUrl.length-1]">
                  <button class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="productData.imagesUrl.push('')">
                    新增圖片
                  </button>
                </div>
                <div v-else>
                  <button class="btn btn-outline-danger btn-sm d-block w-100"
                  @click="productData.imagesUrl.pop()">
                    刪除圖片
                  </button>
                </div>
              </div>
              <div v-else>
                <button class="btn btn-outline-primary btn-sm d-block w-100"
                @click="createImg">
                  新增圖片
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input id="title" type="text" class="form-control"
                placeholder="請輸入標題" v-model="productData.title">
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input id="category" type="text" class="form-control"
                  placeholder="請輸入分類" v-model="productData.category">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input id="unit" type="text" class="form-control"
                  placeholder="請輸入單位" v-model="productData.unit">
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input id="origin_price" type="number"
                  min="0" class="form-control" placeholder="請輸入原價"
                  v-model="productData.origin_price">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input id="price" type="number" min="0" class="form-control"
                  placeholder="請輸入售價" v-model="productData.price">
                </div>
              </div>
              <hr>

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea id="description" type="text" class="form-control"
                placeholder="請輸入產品描述" v-model="productData.description">
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea id="description" type="text" class="form-control"
                placeholder="請輸入說明內容" v-model="productData.content">
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input id="is_enabled" class="form-check-input" type="checkbox"
                  :true-value="1" :false-value="0" v-model="productData.is_enabled">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary"
          @click="updataProduct(productData.id)">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../../node_modules/bootstrap/js/dist/modal';

export default {
  data() {
    return {
      productModal: '',
      productData: {},
    };
  },
  props: ['product', 'isNew'],
  methods: {
    updataProduct(id) {
      const obj = {
        data: {
          ...this.productData,
        },
      };
      if (this.isNew === true) {
        this.$http.post(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/admin/product`, obj)
          .then((res) => {
            alert(res.data.message);
            this.productModal.hide();
            this.$emit('get-data');
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (this.isNew === false) {
        this.$http.put(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/admin/product/${id}`, obj)
          .then((res) => {
            alert(res.data.message);
            this.productModal.hide();
            this.$emit('get-data');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    openModal() {
      this.productModal.show();
    },
    createImg() {
      this.productData.imagesUrl = [];
      this.productData.imagesUrl.push('');
    },
  },
  mounted() {
    this.productModal = new Modal(this.$refs.productModal);
  },
  watch: {
    product() {
      this.productData = this.product;
    },
  },
};
</script>
