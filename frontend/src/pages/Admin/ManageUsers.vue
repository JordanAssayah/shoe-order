<template lang="html">
  <div id="manage-users">
    <h1 class="title is-1 has-text-centered">Customers list</h1>
    <h3 v-if="isLoadingCustomers" class="title is-3 has-text-centered">The list of customers is loading...</h3>
    <table class="table is-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Birthdate</th>
          <th>isActive</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(customer, index) in customers">
          <tr :key="index">
            <td><a>{{ customer.id }}</a></td>
            <td>{{ customer.firstname }}</td>
            <td>{{ customer.lastname }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.birthdate }}</td>
            <td>
              <span class="icon" @click="toggleActivation(customer.id, customer.is_active)">
                <i
                  class="fa fa-check"
                  :class="{ 'fa-check': customer.is_active, 'fa-times': !customer.is_active }"
                  :style="{ color: customer.is_active ? '#23d160' : '#ff3860' }">
                </i>
              </span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <button type="button" class="button is-success" @click="addNewUser">Add a new user</button>
    <div class="columns">
      <div class="column is-6">
        <div class="notification" style="margin-top: 30px">
          <div class="columns">
            <div class="column">
              <h3 class="title is-3"><u>Orders of Lambda User</u></h3>
              <table class="table is-narrow is-bordered is-striped">
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>customizationID</td>
                    <td>Order date</td>
                    <td>isOrderActive</td>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(customer, index) in customers">
                    <tr :key="index">
                      <td>{{ customer.id }}</td>
                      <td>1</td>
                      <td>16.05.2017</td>
                      <td>
                        <span class="icon">
                          <i
                            class="fa fa-check"
                            :class="{ 'fa-check': customer.is_active, 'fa-times': !customer.is_active }"
                            :style="{ color: customer.is_active ? '#23d160' : '#ff3860' }">
                          </i>
                        </span>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
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
  name: 'CTSManageUsers',
  computed: mapGetters([
    'customers',
    'isLoadingCustomers'
  ]),
  methods: {
    ...mapActions([
      'getAllCustomers',
      'toggleCustomerActivation',
      'addNewUser'
    ]),
    toggleActivation (customerId, isActive) {
      this.toggleCustomerActivation({ customerId, isActive })
    }
  },
  mounted () {
    this.getAllCustomers()
  },
  beforeDestroy () {

  }
}
</script>

<style lang="sass" scoped>
  .icon
    cursor: pointer
</style>
