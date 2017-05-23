<template lang="html">
  <div class="login-form">
    <div class="modal" :class="{ 'is-active': isLoginSignupMenuOpen }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <section class="modal-card-body">
          <div class="columns is-multiline">



            <div class="column is-half">
              <h3 class="title is-4">Already have an account ?</h3>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    class="input"
                    type="email"
                    placeholder="Email"
                    @input="(evt) => updateEmail(evt.target.value)" />
                  <span class="icon is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    placeholder="Password"
                    @input="(evt) => updatePassword(evt.target.value)" />
                  <span class="icon is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control">
                    <button
                      class="button is-success"
                      v-bind:class="{ 'is-loading': isLoginButtonLoading }"
                      @click="checkCredentials">
                      <span>Sign in</span>
                      <span class="icon">
                        <i class="fa fa-sign-in"></i>
                      </span>
                    </button>
                </p>
              </div>
            </div>






            <div class="column is-half">
              <h3 class="title is-4">Want to customize many ?</h3>
              <button
                class="button is-info"
                @click="checkCredentials">
                <span>Create an account !</span>
                <span class="icon">
                  <i class="fa fa-plus-square"></i>
                </span>
              </button>
            </div>
          </div>

        </section>
      </div>
      <button class="modal-close" @click="toggleLoginSignupMenu"></button>
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'CTSLoginForm',
  computed: mapGetters([
    'isLoginSignupMenuOpen',
    'isLoginButtonLoading',
    'isLoggedIn'
  ]),
  methods: mapActions([
    'updateEmail',
    'updatePassword',
    'checkCredentials',
    'toggleLoginSignupMenu'
  ]),
  watch: {
    isLoggedIn () {
      if (this.isLoggedIn === true) {
        this.toggleLoginSignupMenu()
      }
    }
  }
}
</script>

<style lang="css">
</style>
