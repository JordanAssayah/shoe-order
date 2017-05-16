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
              <input class="input" type="text" placeholder="Text input">
            </p>
          </div>

          <div class="column is-4">
            <div class="field-label is-normal is-pulled-left">
              <label class="label">last name</label>
            </div>
          </div>
          <div class="column is-8">
            <p class="control">
              <input class="input" type="text" placeholder="Text input">
            </p>
          </div>

          <div class="column is-4">
            <div class="field-label is-normal is-pulled-left">
              <label class="label">Email</label>
            </div>
          </div>
          <div class="column is-8">
            <p>xsdfgdsfg@test.com</p>
          </div>

          <div class="column is-4">
            <div class="field-label is-normal is-pulled-left">
              <label class="label">Phone</label>
            </div>
          </div>
          <div class="column is-8">
            <p class="control">
              <input class="input" type="text">
            </p>
          </div>

          <div class="column is-4">
            <div class="field-label is-normal is-pulled-left">
              <label class="label">Birthdate</label>
            </div>
          </div>
          <div class="column is-8">
            <p>29 Août 1997</p>
          </div>

          <div class="column is-10 is-offset-1">
            <button type="button" class="button is-fullwidth" @click="saveModifications">
              Save modifications
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTSProfile',
  methods: {
    saveModifications () {
      console.log('saveModifications')
    }
  }
}
</script>

<style lang="sass">
#user-profile
  margin-top: 30px
</style>
