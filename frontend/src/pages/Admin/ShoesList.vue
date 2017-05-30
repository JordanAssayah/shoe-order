<template lang="html">
  <div id="manage-users">
    <h1 class="title is-1 has-text-centered">Shoes list</h1>
    <h3 class="title is-3 has-text-centered">The list of shoes is loading...</h3>
    <table class="table is-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Parts</th>
          <th>Sizes of shoes</th>
          <th>Colors of shoes</th>
          <th>Price</th>
          <th>Base Picture</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(shoe, index) in shoes">
          <tr :key="index" style="width: 5px!important">
            <td style="width: 2%">{{ shoe.id }}</td>
            <td style="width: 1%">{{ shoe.name }}</td>
            <td style="width: 1%">{{ shoe.parts }}</td>
            <td style="width: 1%">{{ shoe.sizes }}</td>
            <td style="width: 10%">{{ shoe.colors }}</td>
            <td style="width: 10%">{{ shoe.price }}</td>
            <td style="width: 10%">sole#818181_front#464646_prout#626262.png</td>
            <!-- <td>{{ shoe.basePicture }}</td> -->
            <td style="width: 10%">
              <button class="button is-danger is-small is-fullwidth" @click="removeArticle(shoe.id)">
                <span class="icon">
                  <i class="fa fa-times"></i>
                </span>
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <button type="button" class="button is-success" @click="goToCreateModelPage">Add a new pair of shoes</button>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'CTSManageUsers',
  computed: mapGetters({
    shoes: 'shoesModels'
  }),
  methods: mapActions([
    'getAllShoesModels',
    'goToCreateModelPage',
    'removeArticle'
  ]),
  mounted () {
    this.getAllShoesModels()
  },
  beforeDestroy () {

  }
}
</script>

<style lang="sass" scoped>
  .table
</style>
