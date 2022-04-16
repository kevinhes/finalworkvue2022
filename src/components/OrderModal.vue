<template>
  <div class="modal fade" id="orderModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">產品詳情</h5>
          <button type="button" class="btn-close"
          data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row border-bottom mb-3">
            <div class="col-6">
              <h5 class="mb-3">訂購人資訊</h5>
              <div class="mb-3">
                <p class="mb-1">訂購人</p>
                <p class="mb-1">{{tempOrderData.user?.name}}</p>
              </div>
              <div class="mb-3">
                <p class="mb-1">訂購信箱</p>
                <p class="mb-1">{{tempOrderData.user?.email}}</p>
              </div>
              <div class="mb-3">
                <p class="mb-1">訂購電話</p>
                <p class="mb-1">{{tempOrderData.user?.tel}}</p>
              </div>
              <div class="">
                <p class="mb-1">訂購地址</p>
                <p class="mb-1">{{tempOrderData.user?.address}}</p>
              </div>
            </div>
            <div class="col-6">
              <h5 class="mb-3">訂單資訊</h5>
              <div class="mb-3">
                <p class="mb-1">訂單編號</p>
                <p class="mb-1">{{tempOrderData.id}}</p>
              </div>
              <div class="mb-3">
                <p class="mb-1">訂單時間</p>
                <p class="mb-1">{{timeStapChange(tempOrderData.create_at*1000)}}</p>
              </div>
              <div class="mb-3">
                <p class="mb-1">訂單金額</p>
                <p class="mb-1">{{tempOrderData.total}}</p>
              </div>
              <div class="mb-3">
                <p class="mb-1">訂單付款狀態</p>
                <div class="form-check">
                  <input class="form-check-input"
                  type="checkbox" value="" id="flexCheckDefault"
                  v-model="tempOrderData.is_paid">
                  <label class="form-check-label text-success" for="flexCheckDefault"
                  v-if="tempOrderData.is_paid">
                    已付款
                  </label>
                  <label class="form-check-label" for="flexCheckDefault" v-else>
                    未付款
                  </label>
                </div>
              </div>
            </div>
          </div>
          <h5>訂單內容</h5>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">編號</th>
                <th scope="col">產品名稱</th>
                <th scope="col">數量</th>
                <th scope="col">金額</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(orderData, index) in tempOrderData.products" :key="orderData.id">
                <td>{{index}}</td>
                <td>{{orderData.product.title}}</td>
                <td>{{orderData.qty}}</td>
                <td>{{orderData.total}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
          <button type="button" class="btn btn-outline-danger"
          @click="delOrder(tempOrderData.id)">刪除</button>
          <button type="button" class="btn btn-primary"
          @click="changePaid(tempOrderData.id)">修改</button>
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
      orderModal: '',
      tempOrderData: {},
    };
  },
  props: ['tempOrder'],
  methods: {
    openModal() {
      this.orderModal.show();
    },
    timeStapChange(time) {
      const orderTimeStamp = new Date(time);
      const orderTime = `${orderTimeStamp.getFullYear()}/${orderTimeStamp.getMonth() + 1}/${orderTimeStamp.getDate()} ${orderTimeStamp.getHours()}:${orderTimeStamp.getMinutes()}:${orderTimeStamp.getSeconds()}`;
      return orderTime;
    },
    delOrder(id) {
      this.$emit('del-order', id);
      this.orderModal.hide();
    },
    changePaid(id) {
      const obj = {
        data: {
          ...this.tempOrderData,
        },
      };
      this.$http.put(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/admin/order/${id}`, obj)
        .then(() => {
          this.$emit('change-paid', id);
          this.orderModal.hide();
        })
        .catch(() => {});
    },
  },
  mounted() {
    this.orderModal = new Modal(document.getElementById('orderModal'));
  },
  watch: {
    tempOrder() {
      this.tempOrderData = { ...this.tempOrder };
    },
  },
};
</script>
