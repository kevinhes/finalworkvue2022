<template>
    <Form ref="form" v-slot="{ errors }" @submit="onSubmit">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <Field id="email" name="email" type="email" class="form-control"
        :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email"
        rules="email|required" v-model="userInfo.data.user.email"
        ></Field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <Field id="name" name="姓名" type="text"
        class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
        placeholder="請輸入姓名" rules="required"
        v-model="userInfo.data.user.name"></Field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話</label>
        <Field id="tel" name="電話" type="text"
        class="form-control" :class="{ 'is-invalid': errors['電話'] }"
        placeholder="請輸入電話" :rules="isPhone"
        v-model="userInfo.data.user.tel"></Field>
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <Field id="address" name="地址" type="text"
        class="form-control" :class="{ 'is-invalid': errors['地址'] }"
        placeholder="請輸入地址" rules="required"
        v-model="userInfo.data.user.address"></Field>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea id="message" class="form-control" cols="30" rows="5"
        v-model="userInfo.data.message"></textarea>
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-danger">送出訂單</button>
      </div>
    </Form>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        data: {
          user: {
            name: '',
            email: '',
            tel: '',
            address: '',
          },
          message: '',
        },
      },
    };
  },
  emits: ['getCartsData'],
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
    onSubmit() {
      this.$http.post(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/order`, this.userInfo)
        .then((res) => {
          alert(res.data.message);
          this.$refs.form.resetForm();
          this.$emit('getCartsData');
        })
        .catch(() => {});
    },
  },
};
</script>
