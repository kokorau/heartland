// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import window from './store/window'

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

// ===== model =====
import './model/model'

// ===== Vue =====
Vue.config.productionTip = false;

Vue.component('icon', Icon);

Vue.use(ElementUI, {locale});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
    Icon
  },
  store: window
});
