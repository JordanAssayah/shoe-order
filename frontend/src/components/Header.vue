<template>
  <div id="header">
    <nav class="nav">
      <div class="nav-left">
        <router-link :to="{ name: 'Home' }" class="nav-item">
          <h1 class="title">Custyshoes</h1>
        </router-link>
        <p class="nav-item">
          <span class="icon force-white is-medium">
            <i class="fa fa-angellist"></i>
          </span>
        </p>
      </div>
      <div class="nav-center" v-if="!me.administratorMode">
        <router-link :to="{ name: 'Home' }" class="nav-item is-active is-tab is-hidden-mobile force-white">Home</router-link>
        <router-link :to="{ name: 'ShoesList' }" class="nav-item is-hidden-mobile force-white">Customize</router-link>
        <a class="nav-item is-hidden-mobile force-white">About</a>
      </div>
      <div class="nav-center" v-if="isLoggedIn && me.administratorMode">
        <router-link :to="{ name: 'ManageUsers' }" class="nav-item is-active is-tab is-hidden-mobile force-white">Users</router-link>
        <router-link :to="{ name: 'ManageShoesList' }" class="nav-item is-hidden-mobile force-white">Shoes</router-link>
        <a class="nav-item is-hidden-mobile force-white">Orders</a>
      </div>
      <div class="nav-right nav-menu" v-if="!me.administratorMode">
        <a class="nav-item force-white" @click="toggleLoginSignupMenu" v-if="!isLoggedIn">Log in / Sign up</a>
        <a class="nav-item is-tab force-white" @click="toggleUserNavOptionsModal" v-if="isLoggedIn && !me.administratorMode">Profile</a>
        <router-link :to="{ name: 'Home' }" class="nav-item is-hidden-desktop is-hidden-tablet ">Home</router-link>
        <router-link :to="{ name: 'ShoesList' }" class="nav-item is-hidden-desktop is-hidden-tablet ">Customize</router-link>
        <a class="nav-item is-hidden-desktop is-hidden-tablet ">About</a>
        <router-link :to="{ name: 'Basket' }" class="nav-item">
          <span class="icon force-white">
            <i class="fa fa-shopping-cart"></i>
          </span>
        </router-link>
      </div>
      <div class="nav-right nav-menu" v-if="isLoggedIn && me.administratorMode">
        <a class="nav-item is-tab force-white">Administrator</a>
        <router-link :to="{ name: 'ManageUsers' }" class="nav-item is-hidden-desktop is-hidden-tablet ">Users</router-link>
        <router-link :to="{ name: 'ManageShoesList' }" class="nav-item is-hidden-desktop is-hidden-tablet ">Shoes</router-link>
        <a class="nav-item is-hidden-desktop is-hidden-tablet ">Orders</a>
        <router-link :to="{ name: 'Basket' }" class="nav-item">
          <span class="icon force-white">
            <i class="fa fa-shopping-cart"></i>
          </span>
        </router-link>
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
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'CTSHeader',
  computed: mapGetters([
    'isLoginSignupMenuOpen',
    'isHamburegerMenuActive',
    'isLoggedIn',
    'me'
  ]),
  methods: {
    toggleMenu () {
      document.querySelector('.nav-toggle').classList.toggle('is-active')
      document.querySelector('.nav-menu').classList.toggle('is-active')
    },
    ...mapActions([
      'toggleLoginSignupMenu',
      'toggleUserNavOptionsModal'
    ])
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
