<template lang="html">
  <div id="customize">
    <h1 class="title is-1 has-text-centered">Customs</h1>
    <!-- <h3 v-if="isLoadingModels" class="title is-3 has-text-centered">Models are loading...</h3> -->
    <div class="columns is-multiline">
      <div class="column is-full">
        <h3 class="title is-3">Front</h3>
      </div>

      <!-- PREVIEW OF CUSTOMIZATION -->
      <div class="column is-8">
        <div class="card is-marginless preview">
          <div class="card-image">
            <figure class="image is-2by1">
               <img src="http://bulma.io/images/placeholders/640x320.png" alt="Image">
             </figure>
          </div>
        </div>
      </div>

      <!-- SELECTION BLOCKS -->
      <div class="column is-4">
        <div class="card is-marginless">
          <div class="card-content is-paddingless">
            <nav class="nav is-marginless has-shadow">
              <div class="nav-center">
                <div class="nav-item">
                  <h3 class="title is-3">
                    <span v-if="partSelected === undefined">Parts</span>
                    <span class="icon" v-if="partSelected === undefined">
                      <i class="fa fa-puzzle-piece"></i>
                    </span>
                    <span v-if="partSelected !== undefined">Colors</span>
                    <span class="icon" v-if="partSelected !== undefined">
                      <i class="fa fa-paint-brush"></i>
                    </span>
                  </h3>

                </div>
              </div>

            </nav>
            <div class="block">
              <div class="card" v-for="n in 10" v-if="partSelected === undefined">
                <a @click="selectPart(n)">
                  <div class="card-image">
                    <figure class="image is-16by9">
                      <img src="http://bulma.io/images/placeholders/640x360.png" alt="Image">
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <div class="card-footer-item">
                      Part {{ n }}
                    </div>
                  </footer>
                </a>
              </div>
              <div class="colors-container" v-if="partSelected !== undefined">
                <template v-for="n in 9">
                  <div class="color" style="margin: 40px">
                    <a>
                      <div class="color-block">
                        <div class="square" style="width: 70px; height: 70px; display: inline-block" :style="{ 'background-color': '#' + String(n + 2) + String(n + 1) + String(n + 1)}"></div>
                        <div style="margin-left: 20px;">#{{ n }}{{ n }}{{ n }}</div>
                      </div>
                    </a>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <footer class="card-footer" v-if="partSelected !== undefined">
            <button type="button" class="button is-danger card-footer-item not-rounded">
              Holla
            </button>
            <button type="button" class="button is-success card-footer-item not-rounded">
              Holla
            </button>
          </footer>
        </div>
      </div>

      <!-- OPTIONS (BUY, ADD TO CUSTOMIZATIONS, SHOES SIZES) -->
      <div class="column is-full">
        <div class="level">
          <div class="level-left">
            <p class="control level-item">
              <button type="button" class="button">
                Buy
              </button>
            </p>
            <p class="control level-item">
              <button type="button" class="button">
                Add to my custoomizations
              </button>
            </p>
            <label class="level-item">Shoe sizes</label>
            <div class="control level-item">
              <div class="select is-small">
                <select>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                </select>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'CTSCustomize',
  computed: {
    ...mapGetters([
      'articleConfiguration',
      'partSelected'
    ]),
    vpWidth () {
      return window.innerWidth
    },
    vpHeight () {
      return window.innerHeight
    }
  },
  methods: {
    ...mapActions([
      'selectPart'
    ])
  },
  watch: {

  }
}
</script>

<style lang="sass">
  .block
    overflow-y: scroll
    min-height: 360px
    max-height: 360px


  .color
    &:hover
      background-color: #e9e9e9

  .color-block
    display: flex
    align-items: center

  .not-rounded
    border-radius: 0

  .card .selectable
    &:hover
      background-color: #e9e9e9
</style>
