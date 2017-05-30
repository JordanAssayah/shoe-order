<template lang="html">
  <div id="user-orders">
    <div class="columns is-multiline">
      <div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet">


        <div class="card" v-for="(order, index) in orders">
          <header class="card-header" :key="index">
            <p class="card-header-title">
              <span class="title is-4">Order {{ order.id }}</span>
            </p>
            <a class="card-header-icon">
              <button class="delete" @click="cancelOrder(order.id, order.is_active)"></button>
            </a>
          </header>
          <div class="card-content">
            <table class="table is-bordered">
              <thead>
                <tr>
                  <th>Shoe model</th>
                  <th>Address</th>
                  <th>Order state</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic</td>
                  <td>Chemin des rues 27</td>
                  <td class="has-text-centered">
                    <span v-if="order.is_active">Active</span>
                    <span v-if="order.is_active" class="icon is-small">
                      <i class="fa fa-check" style="color: #23d160"></i>
                    </span>
                    <span v-if="!order.is_active">Canceled</span>
                    <span v-if="!order.is_active" class="icon is-small">
                      <i class="fa fa-times" style="color: #FF3860"></i>
                    </span>
                  </td>
                  <td>1</td>
                  <td>100 CHF</td>
                </tr>
              </tbody>
            </table>
            <div class="content" style="padding-left: 20px; padding-bottom: 10px">
              <a href="#">more</a>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'CTSUserOrders',
  computed: mapGetters([
    'orders'
  ]),
  methods: {
    ...mapActions([
      'getOrdersOfCustomer',
      'cancelCustomerOrderById'
    ]),
    cancelOrder (orderId, orderStatus) {
      const data = { orderId, orderStatus }
      this.cancelCustomerOrderById(data)
    }
  },
  mounted () {
    this.getOrdersOfCustomer()
  }
}
</script>

<style lang="sass">
  #user-orders
    margin-top: 30px
</style>
