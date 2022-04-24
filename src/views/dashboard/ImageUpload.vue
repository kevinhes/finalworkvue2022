<template>
  <div class="container mt-3 w-50">
    <h2 class="mb-3">圖片上傳</h2>
    <div class="mb-3">
      <label for="imgTitle" class="form-label">圖片標題</label>
      <input type="text" class="form-control" v-model="imgUploadTitle"
      placeholder="請輸入圖片文字" id="imgTitle">
    </div>
    <div class="mb-3">
      <label for="imageFile" class="form-label">圖片上傳</label>
      <input type="file" class="form-control"
      placeholder="請上傳圖片" id="imageFile" ref="imageFile">
    </div>
    <button type="button" class="btn btn-primary w-100 mb-5"
    @click="imgUpload">上傳圖片</button>
    <div class="mb-3">
      <label for="imageUrl" class="form-label">回傳圖片網址</label>
      <input type="text" class="form-control mb-2" v-model="imgUploadUrl"
      placeholder="請上傳圖片">
      <button class="btn btn-warning w-100" type="button"
      @click="imgUploadUrl = ''">清除網址</button>
    </div>
    <div>
      <h2>圖片預覽</h2>
      <img :src="imgUploadUrl" alt="圖片預覽" v-if="imgUploadUrl !== ''">
      <p v-else>請上傳圖片</p>
    </div>
  </div>
  <div class="container">
    <table class="table table-striped">
    <thead>
      <tr>
        <th></th>
        <th width="120">圖片標題</th>
        <th>圖片網址</th>
        <th width="120">刪除</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(imgData,index) in imgUploadUrlList" :key="`${imgurl}${index}`"
      class="table-break-line">
        <th scope="row"> {{index+1}} </th>
        <td>{{imgData.imgTitle}}</td>
        <td>{{imgData.imgUrl}}</td>
        <td>
          <button type="button" class="btn btn-outline-danger"
          @click="delImgUrl(index)">刪除</button>
        </td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUploadTitle: '',
      imgUploadUrl: '',
      imgUploadUrlList: JSON.parse(localStorage.getItem('imgUrlList')) || [],
    };
  },
  methods: {
    imgUpload() {
      const imgFile = this.$refs.imageFile.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', imgFile);
      if (this.imgUploadTitle !== '') {
        this.$http.post(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_API_PATH}/admin/upload`, formData)
          .then((res) => {
            this.imgUploadUrl = res.data.imageUrl;
            const obj = {
              imgTitle: this.imgUploadTitle,
              imgUrl: this.imgUploadUrl,
            };
            this.imgUploadUrlList.push(obj);
            localStorage.setItem('imgUrlList', JSON.stringify(this.imgUploadUrlList));
            this.$refs.imageFile.value = '';
          })
          .catch((error) => {
            alert(error.response.data.message);
          });
      } else {
        alert('請輸入圖片標題');
      }
    },
    delImgUrl(num) {
      this.imgUploadUrlList.splice(num, 1);
      localStorage.setItem('imgUrlList', JSON.stringify(this.imgUploadUrlList));
    },
  },
};
</script>

<style lang="scss" scoped>
  .table-break-line {
    word-break: break-all;
    min-width: 50px;
    max-width: 200px;
  }
</style>
