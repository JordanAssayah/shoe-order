<template lang="html">
  <div id="checkout-step-three">

    <div class="only-step-card-number is-flex">
      <div class="circle is-flex">
        1
      </div>
      <div class="step-name">
        <h3 class="title is-3" style="color: #FFFFFF">Delivery</h3>
      </div>
    </div>

    <div class="only-step-card-number is-flex" style="margin-top: 50px">
      <div class="circle is-flex">
        2
      </div>
      <div class="step-name">
        <h3 class="title is-3" style="color: #FFFFFF">Payment</h3>
      </div>
    </div>

    <div class="header is-flex" style="margin-top: 50px">
      <div class="circle is-flex">
        3
      </div>
      <div class="step-name">
        <h3 class="title is-3" style="color: #FFFFFF">Overview of order</h3>
      </div>
    </div>
    <div class="card is-marginless">
      <div class="card-content">
        <div class="columns">
          <div class="column">
            <div class="horizontal-separator" style="margin-top: 10px"></div>
            <p>Basic x 2</p>
            <div class="horizontal-separator"></div>
            <div>
              <p class="is-pulled-left">Total</p>
              <p class="is-pulled-right title is-2">200 CHF</p>
            </div>
          </div>
          <div class="column">
            <p class="title is-3">Delivery</p>
          </div>
        </div>

        <button type="button" class="button is-danger is-not-rounded Next">Confirm your order</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTSCheckoutStepThree'
}
</script>

<style lang="sass">
  #checkout-step-three
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
