import Vue               from 'vue'
import Router            from 'vue-router'
import Home              from '@/pages/Home/Home'
import ShoesManager      from '@/pages/Admin/ShoesManager'
import Articles          from '@/pages/Articles/Articles'
import MyAccount         from '@/pages/User/Account/MyAccount'
import BasicInfo         from '@/pages/User/Account/BasicInfo'
import Addresses         from '@/pages/User/Account/Addresses'
import Orders            from '@/pages/User/Account/Orders'
import Register          from '@/pages/Auth/Register'
import Customize         from '@/pages/Customize/Customize'
import ManageShoesList   from '@/pages/Admin/ShoesList.vue'
import ManageUsers       from '@/pages/Admin/ManageUsers'
import Basket            from '@/pages/Checkout/Basket'
import Checkout          from '@/pages/Checkout/Checkout'
import CheckoutStepOne   from '@/pages/Checkout/StepOne'
import CheckoutStepTwo   from '@/pages/Checkout/StepTwo'
import CheckoutStepThree from '@/pages/Checkout/StepThree'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/shoes-manager', name: 'ShoesManager', component: ShoesManager },
    { path: '/list-of-shoes', name: 'ShoesList', component: Articles },
    { path: '/register', name: 'Register', component: Register },
    { path: '/customize/:articleId', name: 'Customize', component: Customize },
    { path: '/manage-shoes-list', name: 'ManageShoesList', component: ManageShoesList },
    { path: '/manage-users', name: 'ManageUsers', component: ManageUsers },
    { path: '/basket', name: 'Basket', component: Basket },
    { path: '/checkout',
      name: 'Checkout',
      component: Checkout,
      children: [
        {
          path: 'step-one',
          name: 'CheckoutStepOne',
          component: CheckoutStepOne
        },
        {
          path: 'step-two',
          name: 'CheckoutStepTwo',
          component: CheckoutStepTwo
        },
        {
          path: 'step-three',
          name: 'CheckoutStepThree',
          component: CheckoutStepThree
        }
      ]
    },
    { path: '/my-account/:customerId',
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

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

export default router
