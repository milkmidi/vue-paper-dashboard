import 'es6-promise/auto';

import Vue from 'vue';
import Chartist from 'chartist';
import VueRouter from 'vue-router';
import vClickOutside from 'v-click-outside';
import BootstrapVue from 'bootstrap-vue';

// Plugins
import GlobalComponents from './gloablComponents';
import Notifications from './components/UIComponents/NotificationPlugin';
import SideBar from './components/UIComponents/SidebarPlugin';
import App from './App.vue';

// router setup
import routes from './routes';


// library imports
// import 'bootstrap/dist/css/bootstrap.css'
import '../sass/paper-dashboard.scss';

Vue.use(BootstrapVue);
// plugin setup
Vue.use(VueRouter);
Vue.use(GlobalComponents);
Vue.use(vClickOutside);
Vue.use(Notifications);
Vue.use(SideBar);

// configure router
const router = new VueRouter({
  // mode: 'history',
  routes, // short for routes: routes
  linkActiveClass: 'active',
});

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get() {
    return this.$root.Chartist;
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  data: {
    Chartist,
  },
});
