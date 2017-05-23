<template lang="html">
  <div id="user-addresses">
    <div class="columns is-multiline">
      <div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet">


        <div class="card" v-for="(address, index) in addresses">
          <header class="card-header" :key="index">
            <p class="card-header-title">
              <span class="title is-4">{{ address.description }}</span>
            </p>
            <a class="card-header-icon">
              <!-- @click="editAddress" -->
              <button class="button is-small" @click="showAddressFormAndEditAddress(index)">EDIT</button>
            </a>
            <a class="card-header-icon">
              <button class="delete" @click="deleteCustomerAddress(address.id)"></button>
            </a>
          </header>
          <div class="card-content">
            <div class="columns">
              <div class="column is-2">
                <p>default</p>
              </div>
              <div class="column is-8 has-text-centered">
                <p>{{ address.firstname }} {{ address.lastname }},</p>
                <p>{{ address.country }} <template v-if="address.state">{{ address.state }}</template>,</p>
                <p>{{ address.street }},</p>
                <p>{{ address.zip_code }} {{ address.city }},</p>
                <p>{{ address.phone }}</p>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div class="column is-6 is-offset-3">
        <button type="button" class="button is-primary" @click="showAddressForm">Add an address</button>
      </div>
      <div class="column is-6 is-offset-3" v-if="isAddAddressShown">
        <div class="card">
          <div class="card-content">
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field is-narrow">
                  <p class="control">
                    <input
                      class="input form-description"
                      type="text"
                      required
                      name="description"
                      placeholder="Description"
                      :value="newAddress.description"
                      @input="(evt) => updateCustomerAddressDescription(evt.target.value)"
                    />
                  </p>
                </div>
                <div class="field">
                  <button
                    type="button"
                    class="button is-danger is-pulled-right"
                    @click="hideAddAddress"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            <br>
            <br>

            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input
                      class="input form-firstname"
                      type="text"
                      required
                      name="firstname"
                      placeholder="First name"
                      :value="newAddress.firstname"
                      @input="(evt) => updateCustomerAddressFirstname(evt.target.value)"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      class="input form-firstname"
                      type="text"
                      required
                      name="lastname"
                      placeholder="Last name"
                      :value="newAddress.lastname"
                      @input="(evt) => updateCustomerAddressLastname(evt.target.value)"
                    />
                  </p>
                </div>
              </div>
            </div>




            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input
                      class="input form-firstname"
                      type="text"
                      required
                      name="country"
                      placeholder="Country"
                      :value="newAddress.country"
                      @input="(evt) => updateCustomerAddressCountry(evt.target.value)"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      class="input form-firstname"
                      type="text"
                      name="state"
                      placeholder="State"
                      :value="newAddress.state"
                      @input="(evt) => updateCustomerAddressState(evt.target.value)"
                    />
                  </p>
                </div>
              </div>
            </div>



            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input
                      class="input form-firstname"
                      type="text"
                      required
                      name="street"
                      placeholder="Street with number"
                      :value="newAddress.street"
                      @input="(evt) => updateCustomerAddressStreet(evt.target.value)"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      class="input form-firstname"
                      type="text"
                      required
                      name="city"
                      placeholder="City"
                      :value="newAddress.city"
                      @input="(evt) => updateCustomerAddressCity(evt.target.value)"
                    />
                  </p>
                </div>
              </div>
            </div>





            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input
                      class="input form-firstname"
                      type="text"
                      required
                      name="zip_code"
                      placeholder="ZIP"
                      :value="newAddress.zip_code"
                      @input="(evt) => updateCustomerAddressZip(evt.target.value)"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      class="input form-firstname"
                      type="text"
                      required
                      name="phone"
                      placeholder="Phone"
                      :value="newAddress.phone"
                      @input="(evt) => updateCustomerAddressPhone(evt.target.value)"
                    />
                  </p>
                </div>
              </div>
            </div>

            <button type="button" class="button is-success" @click="saveNewCustomerAddress" v-if="!isAddressEdit">Save the address</button>
            <button type="button" class="button is-success" @click="saveAddressChanges(makeChangesToAddressId)" v-if="isAddressEdit">Save changes</button>
            <label class="checkbox">
              <input type="checkbox">
              Define as default
            </label>

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
  name: 'CTSUserAddresses',
  data () {
    return {
      isAddAddressShown: false
    }
  },
  computed: mapGetters([
    'addresses',
    'newAddress',
    'isAddressEdit',
    'makeChangesToAddressId'
  ]),
  methods: {
    ...mapActions([
      'getCustomerAddresses',
      'editCustomerAddress',
      'deleteCustomerAddress',
      'updateCustomerAddressDescription',
      'updateCustomerAddressFirstname',
      'updateCustomerAddressLastname',
      'updateCustomerAddressCountry',
      'updateCustomerAddressState',
      'updateCustomerAddressStreet',
      'updateCustomerAddressCity',
      'updateCustomerAddressZip',
      'updateCustomerAddressPhone',
      'updateCustomerAddressIsDefault',
      'saveNewCustomerAddress',
      'saveAddressChanges',
      'clearAddress'
    ]),
    showAddressForm () {
      this.isAddAddressShown = true
      this.$nextTick(() => {
        document.querySelector('.form-description').focus()
      })
    },
    showAddressFormAndEditAddress (index) {
      this.editCustomerAddress(index)
      this.showAddressForm()
    },
    hideAddAddress () {
      this.clearAddress()
      this.isAddAddressShown = false
    }
  },
  mounted () {
    this.getCustomerAddresses()
  }
}
</script>

<style lang="sass">
  #user-addresses
    margin-top: 30px

  .card:not(first-child)
    margin-top: 30px
</style>
