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
        <div class="is-flex preview is-full-height" @mouseover="showControls" @mouseleave="hideControls">
          <div class="prev is-full-height hidden" @click="goToPreviousImage">
            <span class="icon is-large">
              <i class="fa fa-angle-left"></i>
            </span>
          </div>
          <div class="next is-full-height hidden" @click="goToNextImage">
            <span class="icon is-large">
              <i class="fa fa-angle-right"></i>
            </span>
          </div>
          <img :src="shoeImage" style="width: 600px; height: auto" alt="Image" v-if="shoeImage !== ' '">
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
              <div class="card" v-for="(part, index) in articleConfiguration.parts" v-if="partSelected === undefined">
                <a @click="selectPart(part)">
                  <div class="card-image">
                    <figure class="image is-16by9">
                      <img :src="'http://localhost:10010/shoes/'+ articleConfiguration.name + '/part_' + part + '.png'" alt="Image">
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <div class="card-footer-item">
                      {{ part }}
                    </div>
                  </footer>
                </a>
              </div>
              <div class="colors-container" v-if="partSelected !== undefined">
                <template v-for="(color, index) in articleConfiguration.colors">
                  <div
                    class="color"
                    :id="'color-' + index"
                    style="margin: 35px"
                    v-on:mouseover="changeColorBackground('color-' + String(index), color)"
                    v-on:mouseleave="clearColorBackground('color-' + String(index))">

                    <a @click="selectColor(color)">
                      <div class="color-block">
                        <div class="square" :style="{ 'background-color': color }"></div>
                        <div style="margin-left: 20px;">{{ color }}</div>
                      </div>
                    </a>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- OPTIONS (BUY, ADD TO CUSTOMIZATIONS, SHOES SIZES) -->
      <div class="column is-full">
        <div class="level">
          <div class="level-left">
            <p class="control level-item">
              <button type="button" class="button" @click="toggleCustomizeConfirmationModal">
                <span>Buy</span>
                <span class="icon is-small">
                  <i class="fa fa-shopping-bag"></i>
                </span>
              </button>
            </p>
            <p class="control level-item">
              <button type="button" class="button is-white">
                <span>Add to my customizations</span>
                <span class="icon is-small">
                  <i class="fa fa-plus-circle"></i>
                </span>
              </button>
            </p>
            <label class="level-item">Shoe sizes</label>
            <div class="control level-item">
              <div class="select is-small">
                <select :value="customization.size" @input="(evt) => updateCustomizationSize(evt.target.value)">
                  <template v-for="(size, index) in articleConfiguration.sizes">
                    <option>{{ size }}</option>
                  </template>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <CTSCustomizeConfirmModal
      :onExitModal="toggleCustomizeConfirmationModal"
      :isActive="showConfirmation"
      :actualCustomizationImgUrl="shoeImage" />

  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
import CTSCustomizeConfirmModal from './CustomizeConfirmModal'

export default {
  name: 'CTSCustomize',
  components: {
    CTSCustomizeConfirmModal
  },
  computed: {
    ...mapGetters([
      'articleConfiguration',
      'partSelected',
      'shoeImage',
      'customization',
      'showConfirmation'
    ])
  },
  methods: {
    ...mapActions([
      'toggleCustomizeConfirmationModal',
      'selectPart',
      'selectColor',
      'getArticleConfiguration',
      'updateCustomizationSize'
    ]),
    showControls () {
      document.querySelector('.next').classList.remove('hidden')
      document.querySelector('.prev').classList.remove('hidden')
    },
    hideControls () {
      document.querySelector('.next').classList.add('hidden')
      document.querySelector('.prev').classList.add('hidden')
    },
    goToNextImage () {
      console.log('next')
    },
    goToPreviousImage () {
      console.log('prev')
    },
    changeColorBackground (tagId, HEXcolor) {
      document.querySelector('#' + tagId).style['background-color'] = this.hexToRgbA(HEXcolor)
    },
    clearColorBackground (tagId) {
      document.querySelector('#' + tagId).style['background-color'] = 'transparent'
    },
    // See https://stackoverflow.com/a/21648508
    hexToRgbA (hex) {
      let c
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('')
        if (c.length === 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]]
        }
        c = '0x' + c.join('')

        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.4)'
      }
      throw new Error('Bad Hex')
    }
  },
  created () {
    this.getArticleConfiguration()
  }
}
</script>

<style lang="sass">

  .hidden
    visibility: hidden

  .block
    overflow-y: scroll
    min-height: 360px
    max-height: 360px
    .card-image
      padding: 30px

  .prev
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    cursor: pointer
    width: 60px
    left: 0
    z-index: 467
    color: black

  .next
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    cursor: pointer
    width: 60px
    right: 0
    z-index: 467
    color: black

  .preview
    justify-content: center
    align-items: center
    position: relative

  .is-full-height
    height: 100%

  .color
    &:hover
      background-color: #e9e9e9
      border-radius   : 40px

  .square
    border        : 3px solid rgba(0,0,0,0.3)
    border-radius : 100%
    width         : 70px
    height        : 70px
    display       : inline-block

  .color-block
    display: flex
    align-items: center

  .not-rounded
    border-radius: 0

  .card .selectable
    &:hover
      background-color: #e9e9e9
</style>
