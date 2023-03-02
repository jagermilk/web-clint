import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import axios from "axios";
import VueAxios from 'vue-axios'
import store from "./store/index";
import VueLazyloadNext from 'vue-lazyload-next'
import VueTouch  from 'vue-touch'


const app = createApp(App);

//touch
app.component('VueTouch', VueTouch);

//axios
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
axios.interceptors.response.use(
  function(response) {
    let res = response.data
    let path = location.hash
    if (res.status == 0) return res.data
    else if (res.status == 10) {
      if(path!='#/index'){
        window.location.href = '/#/login'
      }
       return Promise.reject(res)
    }
    else return ElMessage.warning(res.msg)
  },
  function(error) {
    return Promise.reject(error)
  }
)
app.config.globalProperties.$axios = axios

//引入element-ui
import {  ElMessage,ElPagination,ElButton,
  ElInput,ElCard,ElTable,ElTableColumn,
  ElOption,ElSelect,ElMenu,ElSubmenu,ElMenuItem,ElMenuItemGroup } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
//将message组件挂载到全局
app.use(ElMessage)
app.use(ElPagination)
app.use(ElButton);
app.use(ElOption);
app.use(ElSelect);
app.use(ElMenu);
app.use(ElSubmenu);
app.use(ElMenuItem);
app.use(ElMenuItemGroup);
app.use(ElInput);
app.use(ElCard);
app.use(ElTable);
app.use(ElTableColumn);

//lazy
app.use(VueLazyloadNext, {
  loading: require('../public/imgs/loading-svg/loading-bars.svg'),
  attempt: 1
})


// import TUICallKit
import { TUIComponents, TUICore, genTestUserSig } from "./TUIKit";
import { TUICallKit } from './TUIKit/TUIPlugin/TUICallKit';
// TUIKit add TUICallKit
const TUIKit = TUICore.init({
  SDKAppID: 1400794502
});
// TUIKit add TUIComponents
TUIKit.use(TUICallKit).use(TUIComponents);
app.config.globalProperties.$routerG = router
app.use(VueAxios, axios)
app.use(router).use(store);

app.use(TUIKit).mount("#app");
