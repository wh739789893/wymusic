import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import discovery from './components/discovery.vue'
import playlist from './components/playlist.vue'
import mvs from './components/mvs.vue'
import songs from './components/songs.vue'
import result from './components/result.vue'
Vue.config.productionTip = false

Vue.use(VueRouter)

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
