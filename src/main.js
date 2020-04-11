import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import discovery from './views/discovery.vue'
import playlist from './views/playlist.vue'
import mvs from './views/mvs.vue'
import songs from './views/songs.vue'
import result from './views/result.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/index.css'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)
// 创建路由
let router = new VueRouter({
    routes:[
      {
        path:"/",
        component:discovery
      },
      {
        path:"/discovery",
        component:discovery
      },
      {
        path:"/playlist",
        component:playlist
      },
      {
        path:"/songs",
        component:songs
      },
      {
        path:"/mvs",
        component:mvs
      },
      {
        path:"/result",
        component:result
      }
    ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
