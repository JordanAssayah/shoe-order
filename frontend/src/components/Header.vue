<template>
  <div class="">
    <nav class="nav">
      <div class="nav-left">
        <a href="#" class="nav-item">
          <h1 class="title">Custyshoes</h1>
        </a>
        <p class="nav-item">
          <span class="icon force-white is-medium">
            <i class="fa fa-angellist"></i>
          </span>
        </p>
      </div>
      <div class="nav-center">
        <a href="/" class="nav-item is-active is-tab is-hidden-mobile force-white">Home</a>
        <a href="/models" class="nav-item is-hidden-mobile force-white">Customize</a>
        <a href="/about" class="nav-item is-hidden-mobile force-white">About</a>
      </div>
      <div class="nav-right nav-menu">
        <a href="#" class="nav-item force-white" @click="toggleLoginSignupMenu">Log in / Sign up</a>
        <a href="#" class="nav-item is-hidden-desktop is-hidden-tablet ">Home</a>
        <a href="#" class="nav-item is-hidden-desktop is-hidden-tablet ">Customize</a>
        <a href="#" class="nav-item is-hidden-desktop is-hidden-tablet ">About</a>
        <a href="/basket" class="nav-item">
          <span class="icon force-white">
            <i class="fa fa-shopping-cart"></i>
          </span>
        </a>
      </div>
      <div class="nav-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'CTSHeader',
  data () {
    return {
      isOpen: false,
      isLoginSignupMenuOpen: false
    }
  },
  methods: {
    toggleMenu () {
      document.querySelector('.nav-toggle').classList.toggle('is-active')
      document.querySelector('.nav-menu').classList.toggle('is-active')
    },
    toggleLoginSignupMenu () {
      this.isLoginSignupMenuOpen = this.isLoginSignupMenuOpen === true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.nav
  background-color: #363636
  .force-white
    color: #fff
  .nav-menu &is-active
    .nav-item
      color: #fff
      background-color: #363636
  .nav-item
    .title
      color: #fff
</style>
