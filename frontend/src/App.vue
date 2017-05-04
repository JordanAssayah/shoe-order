<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Custyshoes'
}
</script>

  <style lang="sass">
    @import "./assets/bulma/imports.sass"

    body
      width  : 100vw
      height : 100vh

    #app
      -webkit-font-smoothing  : antialiased
      -moz-osx-font-smoothing : grayscale
      margin                  : 45px

  </style>
