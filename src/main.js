import Vue from 'vue'
import App from './App.vue'
// import './plugins/element.js'
//按需引入element-ui
import {Carousel, Menu, MenuItem, CarouselItem, Form, FormItem, Input, Button, Slider} from 'element-ui';
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'

//用来证明你在生产模式
Vue.config.productionTip = false;

Vue.use(Carousel);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(CarouselItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Slider);

Vue.use(VueLazyload, {
    preLoad: 100,
    loading: require('./assets/loading.gif')
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
