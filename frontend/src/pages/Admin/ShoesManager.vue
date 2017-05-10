<template>
  <div id="ShoesManager">
    <h1 class="title is-1 has-text-centered">Add a new model</h1>
    <div class="columns is-multiline">
      <!-- column for explainations -->
      <div class="column is-12-tablet is-2-desktop">
        <div class="" style="height: 100%;">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

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
            <fieldset>
              <legend>Colors</legend>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field has-addons">
                    <p class="control has-icons-left">
                      <input class="input" type="text" placeholder="Color">
                      <span class="icon is-small is-left">
                        <i class="fa fa-paint-brush"></i>
                      </span>
                    </p>
                    <p class="control">
                      <button type="submit" class="button">
                        <span class="icons">
                          <i class="fa fa-times fa-2x" style="color:#ff3860"></i>
                        </span>
                      </button>
                    </p>
                  </div>
                  <div class="field has-addons">
                    <p class="control has-icons-left">
                      <input class="input" type="text" placeholder="Color">
                      <span class="icon is-small is-left">
                        <i class="fa fa-paint-brush"></i>
                      </span>
                    </p>
                    <p class="control">
                      <button type="submit" class="button">
                        <span class="icons">
                          <i class="fa fa-times fa-2x" style="color:#ff3860"></i>
                        </span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <p><u>add a new color</u></p>
            </fieldset>
            <fieldset style="margin-top: 15px">
              <legend>Parts</legend>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field has-addons">
                    <p class="control has-icons-left">
                      <input class="input" type="text" placeholder="Part">
                      <span class="icon is-small is-left">
                        <i class="fa fa-cube"></i>
                      </span>
                    </p>
                    <p class="control">
                      <button type="submit" class="button">
                        <span class="icons">
                          <i class="fa fa-times fa-2x" style="color:#ff3860"></i>
                        </span>
                      </button>
                    </p>
                  </div>
                  <div class="field has-addons">
                    <p class="control has-icons-left">
                      <input class="input" type="text" placeholder="Part">
                      <span class="icon is-small is-left">
                        <i class="fa fa-cube"></i>
                      </span>
                    </p>
                    <p class="control">
                      <button type="submit" class="button">
                        <span class="icons">
                          <i class="fa fa-times fa-2x" style="color:#ff3860"></i>
                        </span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <p><u>add a new color</u></p>
            </fieldset>
            <button type="button" name="button" class="button is-primary is-large" style="margin-top: 30px">
              <span>Add the model</span>
              <span class="icon">
                <i class="fa fa-plus"></i>
              </span>
            </button>
          </div>
          <div class="column is-full-tablet is-5-desktop">
            <fieldset>
              <legend>Sizes</legend>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field has-addons">
                    <div class="control has-icons-left">
                      <div class="select is-fullwidth">
                        <select>
                          <option>Business development</option>
                          <option>Marketing</option>
                          <option>Sales</option>
                        </select>
                      </div>
                    </div>
                    <p class="control">
                      <button type="submit" class="button">
                        <span class="icons">
                          <i class="fa fa-times fa-2x" style="color:#ff3860"></i>
                        </span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <p><u>add a new size</u></p>
            </fieldset>



            <div class="field" style="margin-top: 15px">
              <label class="label">Model Name</label>
              <p class="control">
                <input class="input" type="text">
              </p>
            </div>




            <div class="field" style="margin-top: 15px">
              <label class="label">Price of the model</label>
              <p class="control">
                <input class="input" type="number" min="0">
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

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoesManager'
}
</script>

<style lang="sass">
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
</style>
