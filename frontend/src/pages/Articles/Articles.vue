<template lang="html">
  <div id="list-of-artciles">
    <h1 class="title is-1 has-text-centered">Models of shoes</h1>
    <h3 v-if="isLoadingModels" class="title is-3 has-text-centered">Models are loading...</h3>
    <div class="columns is-multiline">
      <template v-for="(shoesModel, index) in shoesModels" v-if="!isLoadingModels">
        <div class="column is-3-desktop is-6-tablet" :key="index">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                {{ shoesModel.name }}
              </p>
            </header>
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                {{ shoesModel.description }}
              </div>
              <small>Price {{ shoesModel.price }} CHF</small>
              <button
                type="button"
                class="button is-small is-pulled-right"
                @click="customizeShoes(shoesModel.id)"
              >
                Customize
              </button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'CTSArtciles',
  computed: mapGetters([ 'shoesModels', 'isLoadingModels' ]),
  methods: mapActions([ 'getAllShoesModels', 'customizeShoes' ]),
  mounted () {
    this.getAllShoesModels()
  }
}
</script>

<style lang="sass">
</style>
