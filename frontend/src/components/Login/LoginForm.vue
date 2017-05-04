<template lang="html">
  <div class="login-form">
    <article class="message">
      <div class="message-body">
        <div class="content">
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field is-grouped">
                <p class="control is-expanded has-icons-left">
                  <input class="input" type="text" placeholder="Username" v-model="username">
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control is-expanded has-icons-left has-icons-right">
                  <input class="input" type="password" placeholder="Password" v-model="password">
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
            <input class="button" type="button" value="Login" @click="checkCredentialsAndLogin">
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    checkCredentialsAndLogin () {
      let isValidUsername = this.checkUsername(this.username)
      if (isValidUsername) {
        let isValidPassword = this.checkPassword(this.password)
        if (isValidPassword) {
          console.log('You\'re logged in !')
        }
      }
    },
    checkUsername (username) {
      if (username === '') {
        console.log('The username cannot be empty, please fill the input')

        return 0
      }
      if (username !== 'jordanassayah') {
        console.log('Are you sure you\'re using the correct username ?')

        return 0
      }

      return 1
    },
    checkPassword (password) {
      if (password === '') {
        console.log('The password cannot be empty, please fill the input')

        return 0
      }
      if (password !== 'jordanassayah') {
        console.log('Are you sure you\'re using the correct password ?')

        return 0
      }

      return 1
    }
  }
}
</script>

<style lang="css">
</style>
