import { createApp } from "vue";
import App from "app/App.vue";
import router from "router/index";
import "virtual:svg-icons-register";
import IconSvg from "components/icon-svg/index.vue";
import pinia from "store/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import ScreenContainer from "components/data-v/screen-container/index";

createApp(App).use(router).use(pinia).component("icon-svg", IconSvg).use(ScreenContainer).use(ElementPlus).mount("#app");
