<template>
  <div id="ShoesManager">
    <h1 class="title is-1 has-text-centered">Add a new model</h1>
    <div class="columns is-multiline">
      <!-- column for explainations -->
      <div class="column is-12-tablet is-2-desktop">
        <div class="" style="height: 100%;">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul</p>
        </div>
      </div>


      <div class="column is-1 is-hidden-touch">
        <div class="make-it-flex-centered">
          <div class="vertical-separator"></div>
        </div>
      </div>

      <!-- column for controls -->
      <div class="column is-12-tablet is-9-desktop">
        <div class="columns is-multiline">
          <div class="column is-full-tablet is-6-desktop">

            <!-- COLORS OF THE SHOES -->
            <fieldset>
              <legend>Colors</legend>
              <div class="field is-horizontal">
                <div class="field-body">
                  <ul>
                    <!-- Will render as many as the administrator will click on "add a new part" -->
                    <template v-for="(color, index) in newModelSpec.colors">
                      <li>
                        <div class="field has-addons">
                          <p class="control has-icons-left">
                            <input
                              class="input"
                              type="text"
                              placeholder="Color"
                              :value="color"
                              @input="(e) => updateColors(index, e.target.value)"
                            />
                            <span class="icon is-small is-left">
                              <i class="fa fa-paint-brush"></i>
                            </span>
                          </p>
                          <p class="control">
                            <button type="submit" class="button" @click="removeColor(index)">
                              <span class="icons">
                                <i class="fa fa-times fa-2x" style="color:#ff3860"></i>
                              </span>
                            </button>
                          </p>
                        </div>
                      </li>
                    </template>
                  </ul>
                </div>
              </div>
              <div class="content">
                <a @click="addNewColorInput"><u>add a new color</u></a>
              </div>
            </fieldset>


            <!-- PARTS OF THE SHOES -->
            <fieldset style="margin-top: 15px">
              <legend>Parts</legend>
              <div class="field is-horizontal">
                <div class="field-body">
                  <ul>
                    <!-- Will render as many as the administrator will click on "add a new part" -->
                    <template v-for="(part, index) in newModelSpec.parts">
                      <li>
                      <div class="field has-addons" :key="index">
                        <p class="control has-icons-left">
                            <input
                              class="input"
                              type="text"
                              placeholder="Part"
                              :value="part"
                              @input="(e) => updateParts(index, e.target.value)"
                            />
                          <span class="icon is-small is-left">
                            <i class="fa fa-cube"></i>
                          </span>
                        </p>
                        <p class="control">
                          <button type="submit" class="button" @click="removePart(index)">
                            <span class="icons">
                              <i class="fa fa-times fa-2x" style="color:#ff3860"></i>
                            </span>
                          </button>
                        </p>
                      </div>
                      </li>
                    </template>
                  </ul>
                </div>
              </div>
              <div class="content">
                <a @click="addNewPartInput"><u>add a new part</u></a>
              </div>
            </fieldset>

          </div>
          <div class="column is-full-tablet is-5-desktop">
            <fieldset>
              <legend>Sizes</legend>
              <div class="field is-horizontal">
                <div class="field-body">
                  <ul>
                    <!-- Will render as many as the administrator will click on "add a new size" -->
                    <template v-for="(size, index) in newModelSpec.sizes">
                      <li>
                      <div class="field has-addons" :key="index">
                        <p class="control has-icons-left">
                            <input
                              class="input"
                              type="number"
                              step="0.5"
                              placeholder="Size"
                              :value="size"
                              @input="(e) => updateSizes(index, e.target.value)"
                            />
                          <span class="icon is-small is-left">
                            <i class="fa fa-arrows-h"></i>
                          </span>
                        </p>
                        <p class="control">
                          <button type="submit" class="button" @click="removeSize(index)">
                            <span class="icons">
                              <i class="fa fa-times fa-2x" style="color:#ff3860"></i>
                            </span>
                          </button>
                        </p>
                      </div>
                      </li>
                    </template>
                  </ul>
                </div>
              </div>
              <div class="content">
                <a @click="addNewSizeInput"><u>add a new size</u></a>
              </div>
            </fieldset>


            <!-- NAME OF THE SHOES -->
            <div class="field" style="margin-top: 15px">
              <label class="label">Model Name</label>
              <p class="control">
                <input
                  class="input"
                  type="text"
                  :value="newModelSpec.name"
                  @input="(e) => updateNewModelName(e.target.value)"
                />
              </p>
            </div>



            <!-- PRICE OF THE SHOES -->
            <div class="field" style="margin-top: 15px">
              <label class="label">Price of the model</label>
              <p class="control">
                <input
                  class="input"
                  type="number"
                  min="0"
                  :value="newModelSpec.price"
                  @input="(e) => updateNewModelPrice(e.target.value)"
                />
              </p>
            </div>


            <!-- description OF THE SHOES -->
            <div class="field" style="margin-top: 15px">
              <label class="label">Description</label>
              <p class="control">
                <textarea
                  class="textarea"
                  placeholder="Description"
                  @input="(e) => updateNewModelDescription(e.target.value)"
                >
                  {{ newModelSpec.description }}
                </textarea>
              </p>
            </div>


            <button class="button is-fullwidth" style="margin-top: 25px">
              <span>Import pictures of the model</span>
              <span class="icon">
                <i class="fa fa-plus"></i>
              </span>
            </button>



          </div>
        </div>
        <!-- BIG BUTTON ADD MODEL -->
        <button
          type="button"
          name="button"
          class="button is-success is-large"
          style="margin-top: 30px"
          @click="toggleModal"
        >
          Add the model
        </button>
      </div>

    </div>




    <div class="modal" :class="{ 'is-active': isModalOpen }">
      <div class="modal-background"></div>
      <div class="modal-card is-top-rounded">
        <section class="modal-card-body">
          <h4 class="title is-4">Confirm the new model</h4>
          <div class="content">
            <h5><u>Model name</u></h5>
            <p>{{ newModelSpec.name }}</p>

            <h5><u>Model description</u></h5>
            <p>{{ newModelSpec.description }}</p>

            <h5><u>Colors</u></h5>
            <p>
              <template v-for="(color, index) in newModelSpec.colors">
                {{ color }}
                <template v-if="index > -1 && index < newModelSpec.colors.length -1">,</template>
              </template>
            </p>

            <h5><u>Parts</u></h5>
            <p>
              <template v-for="(part, index) in newModelSpec.parts">
                {{ part }}
                <template v-if="index > -1 && index < newModelSpec.parts.length -1">,</template>
              </template>
            </p>

            <h5><u>Sizes</u></h5>
            <p>
              <template v-for="(size, index) in newModelSpec.sizes">
                {{ size }}
                <template v-if="index > -1 && index < newModelSpec.sizes.length -1">,</template>
              </template>
            </p>

            <h5><u>Price</u></h5>
            <p>
              {{ newModelSpec.price }}
              <template v-if="newModelSpec.price !== undefined">CHF</template>
            </p>
          </div>
        </section>
        <footer class="modal-card-foot is-flex is-flex-pulled-right">
          <a class="button" @click="toggleModal">Cancel</a>
          <a class="button is-success" @click="addNewModelSpecInDB">Save changes</a>
        </footer>
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
  name: 'ShoesManager',
  data () {
    return {
      isModalOpen: false
    }
  },
  computed: {
    ...mapGetters({
      newModelSpec: 'getNewModelSpec'
    })
  },
  methods: {
    ...mapActions([
      'updateNewModelPrice',
      'updateNewModelName',
      'updateNewModelDescription',
      'updateNewModelParts',
      'updateNewModelColors',
      'updateNewModelSizes',
      'addNewPartInput',
      'removePart',
      'addNewColorInput',
      'removeColor',
      'addNewSizeInput',
      'removeSize',
      'addNewModelSpecInDB'
    ]),
    updateParts (id, nameOfPart) {
      this.updateNewModelParts({ id, nameOfPart })
    },
    updateColors (id, color) {
      this.updateNewModelColors({ id, color })
    },
    updateSizes (id, size) {
      this.updateNewModelSizes({ id, size })
    },
    toggleModal () {
      this.isModalOpen = this.isModalOpen !== true
    }
  }
}
</script>

<style lang="sass" scoped>
  fieldset
    border: none
    border-radius: 5px
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)
    padding: 20px

  .vertical-separator
    height: calc(100vh - 145px)
    align-self: center
    width: 2px
    border-radius: 100px
    background: black

  .make-it-flex-centered
    display: flex
    justify-content: center

  .is-top-rounded
    border-top-left-radius: 5px
    border-top-right-radius: 5px

  .is-flex-pulled-right
    justify-content: flex-end

  .modal-card
    width: auto
    min-width: 400px
    max-width: 400px
    .tag:not(:first-child)
      margin-left: 5px

  li:not(:first-child)
    margin-top: 15px
</style>
