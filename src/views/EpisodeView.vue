<template>
  <div class="container">
    <div class="row pt-5">
      <div class="offset-2 col-3">
        <img :src="product.imageUrl" alt="" class="img-fluid">
      </div>
      <div class="col-5 d-flex flex-column justify-content-center">
        <h5>{{product.category}}</h5>
        <h2>{{product.title}}</h2>
        <p class="mb-4 text-muted">建人五四三</p>
        <div>
          <a href="#" target="blank" class="btn btn-primary btn-lg w-25 me-3">收聽</a>
          <button class="btn btn-primary btn-lg w-25">贊助本季</button>
        </div>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="offset-5 col-5">
        <p>
          {{product.description}}
        </p>
        <p v-html="text">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      text: '',
    };
  },
  methods: {
    getProductData() {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/product/${this.$route.params.id}`)
        .then((res) => {
          console.log(res.data);
          this.product = res.data.product;
          this.textCut();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    textCut() {
      const newText = this.product.content.split('\n');
      let str = '';
      newText.forEach((i) => {
        str += `
        ${i}<br/>
        `;
      });
      this.text = str;
      // return str;
    },
  },
  mounted() {
    this.getProductData();
  },
};
</script>
