import Vue          from 'vue'
import Router       from 'vue-router'
import Home         from '@/pages/Home/Home'
import ShoesManager from '@/pages/Admin/ShoesManager'
import Articles     from '@/pages/Articles/Articles'
import MyAccount    from '@/pages/User/Account/MyAccount'
import BasicInfo    from '@/pages/User/Account/BasicInfo'
import Addresses    from '@/pages/User/Account/Addresses'
import Orders       from '@/pages/User/Account/Orders'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/shoes-manager', name: 'ShoesManager', component: ShoesManager },
    { path: '/list-of-shoes', name: 'ShoesList', component: Articles },
    { path: '/my-account',
      name: 'MyAccount',
      component: MyAccount,
      children: [
        {
          path: 'profile',
          name: 'Profile',
          component: BasicInfo
        },
        {
          path: 'addresses',
          name: 'Addresses',
          component: Addresses
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders
        }
      ]
    }
  ]
})
