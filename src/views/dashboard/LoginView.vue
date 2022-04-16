<template>
  <div class="container">
    <div class="row justify-content-center align-items-center signup">
      <div class="col-8">
        <h1 class="h3 mb-3 font-weight-normal text-center">
          請先登入
        </h1>
        <Form id="form" class="form-signin" v-slot="{ errors }" @submit="onSubmit">
          <div class="form-floating mb-3">
            <Field type="email" class="form-control" id="username" name="email"
            placeholder="name@example.com" rules="email|required" v-model="user.username"
            :class="{ 'is-invalid': errors['email'] }" />
            <label for="username">Email address</label>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>
          <div class="form-floating">
            <Field type="password" class="form-control" id="password"
            name="password" :class="{ 'is-invalid': errors['password'] }" v-model="user.password"
            placeholder="Password" rules="required" />
            <label for="password">Password</label>
            <error-message name="password" class="invalid-feedback"></error-message>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
          <button class="btn btn-lg btn-outline-primary w-100 mt-3"
          @click="backToHome" type="button">
            回到客戶產品頁
          </button>
        </Form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">
      &copy; 2021~∞ - 六角學院
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    backToHome() {
      this.$router.push('/');
    },
    onSubmit() {
      this.$http.post(`${process.env.VUE_APP_API}/v2/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/`;
          this.$router.push('/dashboard');
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.signup{
  height: calc(100vh*0.85);
};
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
