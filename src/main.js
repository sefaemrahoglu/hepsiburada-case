import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
Vue.config.productionTip = false
import router from "@/router/router"

import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)
import {
  Icon,
  Row,
  Col,
  Form,
  FormItem,
  Input,
  Button,
  Pagination,
  Dialog,
  Select,
  Option
} from 'element-ui';

Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Select);
Vue.use(Option);

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
