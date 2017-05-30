<template lang="html">
  <div id="user-profile">
    <div class="columns">
      <div class="column is-4-desktop is-offset-4-desktop">
        <div class="columns is-multiline">
          <div class="column is-4">
            <div class="field-label is-normal is-pulled-left">
              <label class="label">First name</label>
            </div>
          </div>
          <div class="column is-8">
            <p class="control">
              <input
                class="input form-firstname"
                type="text"
                :placeholder="basicCustomerData.firstname"
                @input="(evt) => updateCustomerFirstname(evt.target.value)"
              />
            </p>
          </div>

          <div class="column is-4">
            <div class="field-label is-normal is-pulled-left">
              <label class="label">last name</label>
            </div>
          </div>
          <div class="column is-8">
            <p class="control">
              <input
                class="input form-lastname"
                type="text"
                :placeholder="basicCustomerData.lastname"
                @input="(evt) => updateCustomerLastname(evt.target.value)"
              />
            </p>
          </div>

          <div class="column is-4">
            <div class="field-label is-normal is-pulled-left">
              <label class="label">Email</label>
            </div>
          </div>
          <div class="column is-8">
            <p>{{ basicCustomerData.email }}</p>
          </div>

          <div class="column is-4">
            <div class="field-label is-normal is-pulled-left">
              <label class="label">Birthday</label>
            </div>
          </div>
          <div class="column is-8">
            <p>{{ basicCustomerData.birthday }}</p>
          </div>

          <div class="column is-10 is-offset-1">
            <button type="button" class="button is-fullwidth" @click="saveModifications()">
              Save modifications
            </button>
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
  name: 'CTSProfile',
  computed: mapGetters([ 'basicCustomerData' ]),
  methods: mapActions([
    'getBasicCustomerData',
    'clearCustomerData',
    'updateCustomerFirstname',
    'updateCustomerLastname',
    'saveModifications'
  ]),
  created () {
    this.getBasicCustomerData()
  },
  beforeDestroy () {
    this.clearCustomerData()
  }
}
</script>

<style lang="sass">
#user-profile
  margin-top: 30px
</style>
