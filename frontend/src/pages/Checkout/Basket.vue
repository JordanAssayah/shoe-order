<template lang="html">
  <div id="basket">
    <div class="columns">
      <div class="column is-9-desktop is-8-tablet">
        <h1 class="title is-1 has-text-centered">
          <span>Basket</span>
          <span class="icon is-large">
            <i class="fa fa-shopping-cart"></i>
          </span>
        </h1>

        <!--  v-for="(basketArtcile, index) in basketArticles" -->
        <div class="card">
          <div class="card-content">
            <a class="delete is-pulled-right is-large"></a>
            <div class="columns">
              <div class="column is-8">
                <h3 class="title is-3"><u>Basic with custom "My custom 5"</u></h3>
                <table>
                  <tr>
                    <td>Shoe model: basic</td>
                  </tr>
                  <tr>
                    <td>Size: 40</td>
                  </tr>
                  <tr>
                    <td>Address: Chemin des rue 27</td>
                  </tr>
                </table>
                <img src="http://localhost:10010/shoes/model.png" alt="">
              </div>
              <div class="column">
                <h3 class="title is-3">100 CHF</h3>
                <span class="select is-small">
                  <select>
                    <option value="" disabled selected>Quantity</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div class="column is-3-desktop is-4-tablet summary">
        <h2 class="title is-2">Summary</h2>
        <div class="horizontal-separator"></div>
        <p>Basic x 2</p>
        <div class="horizontal-separator"></div>
        <div>
          <p class="is-pulled-left">Total</p>
          <p class="is-pulled-right title is-2">200 CHF</p>
        </div>
        <div class="is-flex checkout-button-container">
          <button type="button" class="button is-danger is-large is-not-rounded">Check out</button>
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
  name: 'CTSBasket',
  computed: mapGetters([

  ]),
  methods: mapActions([

  ]),
  created () {

  }
}
</script>

<style lang="sass">
  .checkout-button-container
    justify-content: center
    margin-top: 120px
    .is-not-rounded
      border-radius: 0
  .summary
    background-color: lightgrey
  .horizontal-separator
    width: 100%
    height: 2px
    border-radius: 100%
    background-color: black
    margin-bottom: 20px
    margin-top: 20px
</style>
