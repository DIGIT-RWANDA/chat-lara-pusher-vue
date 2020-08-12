require('./bootstrap');

window.Vue = require('vue');

Vue.component('chat', require('./components/Chat.vue').default);

import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

const app = new Vue({
    el: '#app',
});
