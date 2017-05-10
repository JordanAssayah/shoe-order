<template lang="html">
  <footer class="footer">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="force-white">
            <span class="icon is-small">
              <i class="fa fa-copyright"></i>
            </span>
            2017 Jordan Assayah
          </p>
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <a class="level-item">
          <span class="icon is-small force-white">
            <i class="fa fa-github"></i>
          </span>
        </a>
        <a class="level-item">
          <span class="icon is-small force-white">
            <i class="fa fa-facebook-square"></i>
          </span>
        </a>
        <a class="level-item">
          <span class="icon is-small force-white">
            <i class="fa fa-instagram"></i>
          </span>
        </a>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'CTSFooter'
}
</script>

<style lang="sass">
.footer
  width            : 100%
  padding          : 1rem
  background-color : #363636
.force-white
  color: #fff
</style>
