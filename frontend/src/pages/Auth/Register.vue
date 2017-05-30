<template lang="html">
  <div id="register">
    <h1 class="title is-1 has-text-centered">Register</h1>
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="columns is-multiline">
          <div class="column is-6">
            <p class="control">
              <input
                class="input"
                type="text"
                :value="newUser.firstname"
                @input="(evt) => updateFirstname(evt.target.value)"
                placeholder="First name" />
            </p>
          </div>
          <div class="column is-6">
            <p class="control">
              <input
                class="input"
                type="text"
                :value="newUser.lastname"
                @input="(evt) => updateLastname(evt.target.value)"
                placeholder="Last name" />
            </p>
          </div>

          <div class="column is-6">
            <p class="control">
              <input
                class="input"
                type="text"
                :value="newUser.email"
                @input="(evt) => updateEmail(evt.target.value)"
                placeholder="Email" />
            </p>
          </div>
          <div class="column is-6">
            <p class="control">
              <input
                class="input"
                type="password"
                :value="newUser.password"
                @input="(evt) => updatePassword(evt.target.value)"
                placeholder="password" />
            </p>
          </div>

          <div class="column is-6">
            <p class="control">
              <input
                class="input"
                type="password"
                :value="newUser.confirmPassword"
                @input="(evt) => updateConfirmPassword(evt.target.value)"
                placeholder="Confirmation password" />
            </p>
          </div>
          <div class="column is-6">
            <p class="control">
              <input
                class="input"
                type="date"
                :value="newUser.birthdate"
                @input="(evt) => updateBirthday(evt.target.value)"
                placeholder="Text input" />
            </p>
          </div>

          <div class="column is-12">
            <p v-if="!me.administratorMode">User must have at least 16 years old</p>
            <p class="control" v-if="me.administratorMode">
              <label class="checkbox">
                <input
                  type="checkbox"
                  v-model="isAdmin" />
                is an administrator
              </label>
            </p>
          </div>

          <div class="column is-6 is-offset-3">
            <button type="button" class="button is-success is-fullwidth" @click="createUser">Create account</button>
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
  name: 'CTSRegister',
  computed: {
    ...mapGetters([
      'newUser',
      'me'
    ]),
    isAdmin: {
      get () {
        return this.newUser.isAdmin
      },
      set (newBooleanValue) {
        this.updateIsAdmin(newBooleanValue)
      }
    }
  },
  methods: mapActions([
    'updateFirstname',
    'updateLastname',
    'updateEmail',
    'updatePassword',
    'updateConfirmPassword',
    'updateBirthday',
    'updateIsAdmin',
    'createUser'
  ])
}
</script>

<style lang="css">
</style>
