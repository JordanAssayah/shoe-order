<template lang="html">
  <div id="user-orders">
    <div class="columns is-multiline">
      <div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet">


        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              <span class="title is-4"><u>Order 1</u></span>
            </p>
            <a class="card-header-icon">
              <button class="delete" @click="cancelOrder"></button>
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
                    <span>Active</span>
                    <span class="icon is-small">
                      <i class="fa fa-check" style="color: #23d160"></i>
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
export default {
  name: 'CTSUserOrders',
  methods: {
    cancelOrder () {
      console.log('cancelOrder')
    }
  }
}
</script>

<style lang="sass">
  #user-orders
    margin-top: 30px
</style>
