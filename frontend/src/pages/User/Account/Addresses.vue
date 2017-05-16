<template lang="html">
  <div id="user-addresses">
    <div class="columns is-multiline">
      <div class="column is-6-desktop is-offset-3-desktop is-8-tablet is-offset-2-tablet">


        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              <span class="title is-4">Home</span>
            </p>
            <a class="card-header-icon">
              <button class="button is-small" @click="editAddress">EDIT</button>
            </a>
            <a class="card-header-icon">
              <button class="delete" @click="deleteAddress"></button>
            </a>
          </header>
          <div class="card-content">
            <div class="columns">
              <div class="column is-2">
                <p>default</p>
              </div>
              <div class="column">
                Billy Bob, Rue central 27 bis 1009 Lausanne, +41 79 775 99 83
              </div>
            </div>
          </div>
        </div>


      </div>
      <div class="column is-2-desktop is-offset-3-desktop is-offset-2-tablet is-2-tablet">
        <button type="button" class="button is-primary" @click="addAddress">Add an address</button>
      </div>
      <div class="column is-4-desktop is-6-tablet">
        <div class="box">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTSUserAddresses',
  methods: {
    addAddress () {
      console.log('addAddress')
    },
    editAddress () {
      console.log('editAddress')
    },
    deleteAddress () {
      console.log('deleteAddress')
    }
  }
}
</script>

<style lang="sass">
  #user-addresses
    margin-top: 30px
</style>
