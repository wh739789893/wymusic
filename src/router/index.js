import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入对应的路由
const discovery = () => import(/* webpackChunkName: "discovery" */ 'views/discovery.vue')
const playlists = () => import(/* webpackChunkName: "playlists" */ 'views/playlists.vue')
const songs = () => import(/* webpackChunkName: "songs" */ 'views/songs.vue')
const mvs = () => import(/* webpackChunkName: "mvs" */ 'views/mvs.vue')
const result = () => import(/* webpackChunkName: "result" */ 'views/result.vue')
const playlist = () => import(/* webpackChunkName: "playlist" */ 'views/playlist.vue')
const mv = () => import(/* webpackChunkName: "mv" */ 'views/mv.vue')

Vue.use(VueRouter)
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [
    { path: '/', redirect: '/discovery' },
    { path: '/discovery', component: discovery },
    { path: '/playlists', component: playlists },
    { path: '/playlist', component: playlist },
    { path: '/songs', component: songs },
    { path: '/mvs', component: mvs },
    { path: '/mv', component: mv },
    { path: '/result', component: result }
  ]

const router = new VueRouter({
    routes
})

export default router