<template>
  <div id="app">
    <CTSHeader />
    <section class="section main-size">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
    <CTSFooter />
  </div>
</template>

<script>
import CTSHeader from '@/components/Header'
import CTSFooter from '@/components/Footer'

export default {
  name: 'Custyshoes',
  components: {
    CTSHeader,
    CTSFooter
  }
}
</script>

<style lang="sass">
  @import "./assets/bulma/imports.sass"

  body
    height : 100vh

  #app
    -webkit-font-smoothing  : antialiased
    -moz-osx-font-smoothing : grayscale
    height: 100%

  .main-size
    min-height: calc(100vh - 108px)

</style>
