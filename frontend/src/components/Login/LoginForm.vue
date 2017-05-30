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
              <router-link :to="{ name: 'Register' }">
                <button class="button is-info" @click="closeModal">
                  <span>Create an account !</span>
                  <span class="icon">
                    <i class="fa fa-plus-square"></i>
                  </span>
                </button>
              </router-link>
            </div>
          </div>

        </section>
        <footer class="modal-card-foot">
          <div class="is-flex" style="justify-content: flex-end">
            <a class="button" @click="toggleLoginSignupMenu">Cancel</a>
          </div>
        </footer>
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
  name: 'CTSLoginForm',
  computed: mapGetters([
    'isLoginSignupMenuOpen',
    'isLoginButtonLoading',
    'isLoggedIn'
  ]),
  methods: {
    ...mapActions([
      'updateEmail',
      'updatePassword',
      'checkCredentials',
      'toggleLoginSignupMenu'
    ]),
    closeModal () {
      this.toggleLoginSignupMenu()
    }
  },
  watch: {
    isLoggedIn () {
      if (this.isLoggedIn === true) {
        this.toggleLoginSignupMenu()
      }
    }
  }
}
</script>

<style lang="sass">
.modal-card-body
  border-top-left-radius: 5px
  border-top-right-radius: 5px
</style>
