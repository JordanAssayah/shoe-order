import Vue          from 'vue'
import Router       from 'vue-router'
import Home         from '@/pages/Home/Home'
import ShoesManager from '@/pages/Admin/ShoesManager'
import Articles     from '@/pages/Articles/Articles'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/shoes-manager', name: 'ShoesManager', component: ShoesManager },
    { path: '/list-of-shoes', name: 'ShoesList', component: Articles }
  ]
})
