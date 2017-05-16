<template lang="html">
  <div id="register">
    <h1 class="title is-1 has-text-centered">Register</h1>
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="columns is-multiline">
          <div class="column is-6">
            <p class="control">
              <input class="input" type="text" placeholder="First name">
            </p>
          </div>
          <div class="column is-6">
            <p class="control">
              <input class="input" type="text" placeholder="Last name">
            </p>
          </div>



          <div class="column is-6">
            <p class="control">
              <input class="input" type="text" placeholder="Username">
            </p>
          </div>
          <div class="column is-6">
            <p class="control">
              <input class="input" type="password" placeholder="password">
            </p>
          </div>



          <div class="column is-6">
            <p class="control">
              <input class="input" type="text" placeholder="Email">
            </p>
          </div>
          <div class="column is-6">
            <p class="control">
              <input class="input" type="password" placeholder="Password">
            </p>
          </div>



          <div class="column is-6">
            <datepicker placeholder="Birthday" :config="{ dateFormat: 'Y-m-d', static: true }"></datepicker>
          </div>
          <div class="column is-6">
            <p>User must have at least 16 years old</p>
          </div>

          <div class="column is-8 is-offset-2">
            <button type="button" class="button is-success is-fullwidth">Create account</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vue-bulma-datepicker'

export default {
  data () {
    return {
      date: ''
    }
  },
  components: {
    Datepicker
  }
}
</script>

<style lang="css">
</style>
