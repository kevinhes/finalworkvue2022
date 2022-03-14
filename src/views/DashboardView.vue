<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/dashboard">後台</router-link>
      <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="dashboard">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="order">訂單管理</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">返回前台</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  methods: {
    checkLogin() {
      this.$http.post(`${process.env.VUE_APP_API}/v2/api/user/check`)
        .then(() => {})
        .catch((error) => {
          console.dir(error);
          alert('您尚未登入');
          this.$router.push('/loginpage');
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    this.checkLogin();
  },
};
</script>
