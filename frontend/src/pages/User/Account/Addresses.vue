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
              <button class="button is-small">EDIT</button>
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
              <div class="column">
                {{ address.firstname }}
                {{ address.lastname }},
                {{ address.street }},
                {{ address.zip_code }}
                {{ address.city }},
                {{ address.phone }}
              </div>
            </div>
          </div>
        </div>


      </div>
      <div class="column is-6 is-offset-3">
        <button type="button" class="button is-primary" @click="addAddress">Add an address</button>
      </div>
      <div class="column is-6 is-offset-3" v-if="isAddAddressShown">
        <div class="card">
          <div class="card-content">
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field is-narrow">
                  <p class="control">
                    <input
                      class="input form-firstname"
                      type="text"
                      placeholder="Description"
                      :value="newAddress.description"
                      @input="(evt) => updateNewCustomerAddressDescription(evt.target.value)"
                    />
                  </p>
                </div>
                <div class="field">
                  <button type="button" class="button is-danger is-pulled-right">Cancel</button>
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
                      placeholder="First name"
                      :value="newAddress.firstname"
                      @input="(evt) => updateNewCustomerAddressFirstname(evt.target.value)"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      class="input form-firstname"
                      type="text"
                      placeholder="Last name"
                      :value="newAddress.lastname"
                      @input="(evt) => updateNewCustomerAddressLastname(evt.target.value)"
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
                      placeholder="Country"
                      :value="newAddress.country"
                      @input="(evt) => updateNewCustomerAddressCountry(evt.target.value)"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      class="input form-firstname"
                      type="text"
                      placeholder="State"
                      :value="newAddress.state"
                      @input="(evt) => updateNewCustomerAddressState(evt.target.value)"
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
                      placeholder="Street with number"
                      :value="newAddress.street"
                      @input="(evt) => updateNewCustomerAddressStreet(evt.target.value)"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      class="input form-firstname"
                      type="text"
                      placeholder="City"
                      :value="newAddress.city"
                      @input="(evt) => updateNewCustomerAddressCity(evt.target.value)"
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
                      placeholder="ZIP"
                      :value="newAddress.zip"
                      @input="(evt) => updateNewCustomerAddressZip(evt.target.value)"
                    />
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <input
                      class="input form-firstname"
                      type="text"
                      placeholder="Phone"
                      :value="newAddress.phone"
                      @input="(evt) => updateNewCustomerAddressPhone(evt.target.value)"
                    />
                  </p>
                </div>
              </div>
            </div>

            <button type="button" class="button is-success" @click="saveNewCustomerAddress(3)">Save the address</button>
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
    'newAddress'
  ]),
  methods: {
    ...mapActions([
      'getCustomerAddresses',
      'deleteCustomerAddress',
      'updateNewCustomerAddressDescription',
      'updateNewCustomerAddressFirstname',
      'updateNewCustomerAddressLastname',
      'updateNewCustomerAddressCountry',
      'updateNewCustomerAddressState',
      'updateNewCustomerAddressStreet',
      'updateNewCustomerAddressCity',
      'updateNewCustomerAddressZip',
      'updateNewCustomerAddressPhone',
      'updateNewCustomerAddressIsDefault',
      'saveNewCustomerAddress'
    ]),
    addAddress () {
      this.isAddAddressShown = this.isAddAddressShown === false
    }
  },
  mounted () {
    this.getCustomerAddresses(3)
  }
}
</script>

<style lang="sass">
  #user-addresses
    margin-top: 30px

  .card:not(first-child)
    margin-top: 30px
</style>
