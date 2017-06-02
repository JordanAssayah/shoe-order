<template lang="html">
  <div id="checkout-step-one">
    <div class="header is-flex">
      <div class="circle is-flex">
        1
      </div>
      <div class="step-name">
        <h3 class="title is-3" style="color: #FFFFFF">Delivery</h3>
      </div>
    </div>
    <div class="card is-marginless">
      <div class="card-content">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <p class="control">
                <span class="select">
                  <select @change="(evt) => updateCheckoutAddress(evt.target.value)">
                    <option selected disabled>Select an address</option>
                    <template v-for="(address, index) in stepOne.addresses">
                      <option :value="address.id">{{ address.description }}</option>
                    </template>
                  </select>
                </span>
              </p>
            </div>
            <div class="field">

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
                  name="firstname"
                  placeholder="First name"
                  :value="stepOne.usedAddress.firstname"
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
                  :value="stepOne.usedAddress.lastname"
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
                  :value="stepOne.usedAddress.country"
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
                  :value="stepOne.usedAddress.state"
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
                  :value="stepOne.usedAddress.street"
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
                  :value="stepOne.usedAddress.city"
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
                  :value="stepOne.usedAddress.zip_code"
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
                  :value="stepOne.usedAddress.phone"
                  @input="(evt) => updateCustomerAddressPhone(evt.target.value)"
                />
              </p>
            </div>
          </div>
        </div>

        <button type="button" class="button is-danger is-not-rounded Next" @click="goToNextStep">NEXT</button>
      </div>
    </div>

    <div class="only-step-card-number is-flex">
      <div class="circle is-flex">
        2
      </div>
      <div class="step-name">
        <h3 class="title is-3" style="color: #FFFFFF">Payment</h3>
      </div>
    </div>

    <div class="only-step-card-number is-flex">
      <div class="circle is-flex">
        3
      </div>
      <div class="step-name">
        <h3 class="title is-3" style="color: #FFFFFF">Overview of order</h3>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
import router from '@/router'

export default {
  name: 'CTSCheckoutStepOne',
  computed: {
    ...mapGetters([
      'stepOne'
    ])
  },
  methods: {
    ...mapActions([
      'getCustomerAddresses',
      'updateCheckoutAddress'
    ]),
    goToNextStep () {
      router.push({ name: 'CheckoutStepTwo' })
    }
  },
  created () {
    this.getCustomerAddresses()
  }
}
</script>

<style lang="sass" scoped>
  #checkout-step-one
    .header
      border-top-right-radius: 20px
      border-top-left-radius : 20px
      background-color       : #363636
      align-items            : center
      padding                : 10px

    .only-step-card-number
      border-radius   : 20px
      background-color: #363636
      align-items     : center
      padding         : 10px
      margin-top      : 50px


    .circle
      justify-content : center
      align-items     : center
      border-radius   : 100%
      background-color: #FFFFFF
      border          : 2px solid black
      width : 30px
      height : 30px

    .step-name
      margin-left: 10px

    .is-not-rounded
      border-radius: 0

    .Next
      margin-top: 30px
</style>
