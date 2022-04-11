<template>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            訂單編號
          </th>
          <th width="90">購買人</th>
          <th width="90">
            email
          </th>
          <th width="90">
            購買日期
          </th>
          <th width="90">
            訂單金額
          </th>
          <th width="90">
            訂單狀態
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in ordersData" :key="order.id">
          <td>{{order.id}}</td>
          <td>{{order.user.name}}</td>
          <td>{{order.user.email}}</td>
          <td>{{timeStapChange(order.create_at*1000)}}</td>
          <td>{{order.total}}</td>
          <td>
            <span class="text-success" v-if="order.is_paid">已付款</span>
            <span v-else>未付款</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm"
              @click="openModal(order)">
                詳情
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm"
              @click="delOrder(order.id)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pagination="pagination" @page-change="getOrdersData"></Pagination>
    <OrderModal ref="orderModal" :temp-order="tempOrder" @del-order="delOrder"
    @change-paid="getOrdersData"></OrderModal>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import OrderModal from '@/components/OrderModal.vue';

export default {
  data() {
    return {
      ordersData: [],
      pagination: {},
      tempOrder: {},
    };
  },
  components: {
    Pagination,
    OrderModal,
  },
  methods: {
    getOrdersData(page = 1) {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          this.ordersData = res.data.orders;
          this.pagination = res.data.pagination;
        })
        .catch(() => {
        });
    },
    delOrder(id) {
      this.$http.delete(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/order/${id}`)
        .then((res) => {
          alert(res.data.message);
          this.getOrdersData();
        })
        .catch(() => {});
    },
    timeStapChange(time) {
      const orderTimeStamp = new Date(time);
      const orderTime = `${orderTimeStamp.getFullYear()}/${orderTimeStamp.getMonth() + 1}/${orderTimeStamp.getDate()}`;
      return orderTime;
    },
    openModal(order) {
      this.tempOrder = { ...order };
      this.$refs.orderModal.openModal(order);
    },
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    this.getOrdersData();
  },
};
</script>
