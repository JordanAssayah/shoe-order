<template lang="html">
  <div id="checkout-step-two">
    <div class="only-step-card-number is-flex">
      <div class="circle is-flex">
        1
      </div>
      <div class="step-name">
        <h3 class="title is-3" style="color: #FFFFFF">Delivery</h3>
      </div>
    </div>

    <div class="header is-flex">
      <div class="circle is-flex">
        2
      </div>
      <div class="step-name">
        <h3 class="title is-3" style="color: #FFFFFF">Payment</h3>
      </div>
    </div>
    <div class="card is-marginless">
      <div class="card-content">
        <div class="columns">
          <div class="column">
            <p>Payment can be made in advence or by invoice.</p>
            <p>For by invoice,</p>
            <p>you have 30 days, from the reception of the parcel, to pay the</p>
            <p>totality of your order.</p>
            <label class="radio" style="margin-top: 50px">
              <input
                type="radio"
                name="payment-method"
                value="invoice"
                @change="(evt) => updatePaymentMethod(evt.target.value)" />
              Payment by invoice
            </label>
            <br>
            <label class="radio">
              <input
                type="radio"
                name="payment-method"
                value="advence"
                @change="(evt) => updatePaymentMethod(evt.target.value)" />
              Payment in advence
            </label>

            <p class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="isAgreed">
                I agree
              </label>
            </p>
          </div>
          <div class="column">
            <h3 class="title is-3">Our bank information</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <button type="button" class="button is-danger is-not-rounded Next" @click="goToNextStep">NEXT</button>
      </div>
    </div>

    <div class="only-step-card-number is-flex" style="margin-top: 50px">
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
  name: 'CTSCheckoutStepTwo',
  computed: {
    ...mapGetters([
      'stepTwo'
    ]),
    isAgreed: {
      get () {
        return this.stepTwo.isAgreed
      },
      set () {
        this.updateCheckoutAgreement()
      }
    }
  },
  methods: {
    ...mapActions([
      'updatePaymentMethod',
      'updateCheckoutAgreement'
    ]),
    goToNextStep () {
      if (this.stepTwo.paymentMethod !== '' && this.stepTwo.isAgreed) {
        router.push({ name: 'CheckoutStepThree' })
      } else {
        console.error('oops')
      }
    }
  }
}
</script>

<style lang="sass">
  #checkout-step-two
    .header
      border-top-right-radius: 20px
      border-top-left-radius : 20px
      background-color       : #363636
      align-items            : center
      padding                : 10px
      margin-top             : 50px

    .only-step-card-number
      border-radius   : 20px
      background-color: #363636
      align-items     : center
      padding         : 10px


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
