<template lang="html">
  <div id="user-nav">
    <div class="modal user-nav-modal" :class="{ 'is-active': showUserNavOptionsModal }">
      <div class="modal-background" @click="close"></div>
      <div class="modal-card">
        <div class="modal-card-body">
          <div class="tabs is-centered">
            <ul>
              <li class="is-active" @click="goToMyAccount">
                <a>
                  <span class="icon is-small"><i class="fa fa-image"></i></span>
                  <span>My account</span>
                </a>
              </li>
              <li @click="goToMyCustomization">
                <a>
                  <span class="icon is-small"><i class="fa fa-music"></i></span>
                  <span>My customizations</span>
                </a>
              </li>
              <li @click="Logout">
                <a>
                  <span class="icon is-small"><i class="fa fa-film"></i></span>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import router         from '@/router'

export default {
  name: 'CTSUserNavModal',
  computed: mapGetters([
    'showUserNavOptionsModal',
    'me'
  ]),
  methods: {
    goToMyAccount () {
      router.push({ name: 'Profile', params: { customerId: this.me.id } })
      document.querySelector('.user-nav-modal').classList.remove('is-active')
    },
    goToMyCustomization () {
    },
    Logout () {
    },
    close () {

    }
  }
}
</script>

<style lang="css">
</style>
