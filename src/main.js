import { createApp } from 'vue';

//  bootstrap 相關套件
import 'bootstrap';

// vee-validate 相關套件
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// axios 相關套件
import axios from 'axios';
import VueAxios from 'vue-axios';

// icon 相關套件
import 'material-icons/iconfont/material-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// vueloading 相關套件
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

// sweetalert 相關套件
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App.vue';
import router from './router';

// vee-validate 規則引入
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
setLocale('zh_TW');

const app = createApp(App);

app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.use(VueSweetalert2);

app.use(VueLoading);

app.use(VueAxios, axios);

app.use(router);
app.mount('#app');

// router 頁面title
router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  window.scrollTo(0, 0);
});
