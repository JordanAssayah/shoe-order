<template>
  <div id="Home">
    <!-- <LoginForm /> -->
    <div class="columns is-multiline">
      <div class="column is-offset-2 is-8">
        <h1 class="title is-1 is-spaced has-text-centered margin-title">Want to customize your shoes ?</h1>
        <p class="subtitle is-3 has-text-centered">Just follow these steps</p>
      </div>
      <div class="column is-offset-2 is-8">
        <div class="create-button-container">
          <img src="../../assets/shoes.jpg" class="shoe-image">
        </div>
      </div>
      <div class="column is-offset-2 is-8">
        <div class="columns">
          <div class="column is-4">
            <p class="has-text-centered">
              <div class="circle">
                1
              </div>
            </p>
            <p class="has-text-centered subtitle is-3">Choose your colors</p>
          </div>
          <div class="column is-4">
            <p class="has-text-centered">
              <div class="circle">
                2
              </div>
            </p>
            <p class="has-text-centered subtitle is-3">We buil it</p>
          </div>
          <div class="column is-4">
            <p class="has-text-centered">
              <div class="circle">
                3
              </div>
            </p>
            <p class="has-text-centered subtitle is-3">Receive your creation</p>
          </div>
        </div>
      </div>

      <div class="column is-offset-2 is-8">
        <div class="create-button-container">
          <a class="button is-medium is-primary">Create my own custom shoes</a>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/Login/LoginForm'

export default {
  name: 'Home',
  components: {
    LoginForm
  },
  data () {
    return { }
  }
}
</script>

<style media="screen">
#home {
  height: calc(100% - 56px)
}
</style>

<style lang="sass" scoped>
.margin-title
  margin-top       : 30px

.create-button-container
  display          : flex
  justify-content  : center

.circle
  background-color : #363636
  color            : white
  border-radius    : 100%
  border           : 1px solid black
  display          : flex
  justify-content  : center
  width            : 26px
  height           : 26px
  margin           : 0 auto
  margin-bottom    : 20px

.shoe-image
  height           : 400px
  border           : 1px solid #363636
  border-radius    : 4px
  margin           : 10px
  padding          : 20px
</style>
