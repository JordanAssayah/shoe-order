<template lang="html">
  <div class="login-form">
    <article class="message">
      <div class="message-body">
        <div class="content">
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field is-grouped">
                <p class="control is-expanded has-icons-left">
                  <input class="input" type="text" placeholder="Username" v-model="credentials.username">
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control is-expanded has-icons-left has-icons-right">
                  <input class="input" type="password" placeholder="Password" v-model="credentials.password">
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <p><a href="#">Forgot my password</a></p>
          </div>
          <div class="">
            <input v-bind:class="{ 'is-loading': isLoading }" class="button is-primary" type="button" value="Login" @click="checkCredentials">
          </div>
        </div>
      </div>
    </article>
    <div class="notification is-primary" v-if="isLoggedIn">
      <button class="delete"></button>
      {{ loginMessage }}
    </div>
  </div>
</template>

<script>
import fetch from 'unfetch'

export default {
  name: 'LoginForm',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      isLoading: false,
      isLoggedIn: false,
      loginMessage: ''
    }
  },
  methods: {
    checkCredentials () {
      this.isLoading = true
      fetch('http://localhost:10010/api/v1/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `username=${this.credentials.username}&password=${this.credentials.password}`
      })
      .then(success       => success.json())
      .then(loginResponse => {
        this.isLoading = false
        if (loginResponse.loggedIn) {
          this.isLoggedIn   = true
          this.loginMessage = loginResponse.message
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
