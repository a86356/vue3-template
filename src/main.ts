import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "@/router";

// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

const app = createApp(App);
import "./assets/style/reset.less";
import "./assets/style/base.less";
import "./assets/style/iconfont.less";
import "./assets/style/antd.less";

const pinia = createPinia();
app.use(pinia);
app.use(Antd);
app.use(router);
app.mount("#app");
