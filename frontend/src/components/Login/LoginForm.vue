<template lang="html">
  <div class="login-form">
    <article class="message">
      <div class="message-body">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-grouped">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="email" placeholder="Email">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input class="input" type="password" placeholder="Password">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="button" type="button" value="Login">
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-link">Forgot my password</button>
              </p>
            </div>
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
      
    }
  }
}
</script>

<style lang="css">
</style>
