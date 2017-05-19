<template lang="html">
  <div id="user-account">
    <h1 class="title is-1 has-text-centered">My account</h1>
    <div class="is-flex" style="justify-content: center">
      <div class="tabs is-toggle is-small">
        <ul>
          <li class="is-active">
            <router-link :to="{ name: 'Profile' }">Profile</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Addresses' }">Addresses</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Orders' }">Orders</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
