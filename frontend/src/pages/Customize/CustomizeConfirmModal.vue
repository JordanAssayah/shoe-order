<template lang="html">
  <div id="customize-confirm-modal">
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <section class="modal-card-body">
          <h4 class="title is-4">Confirm your customization</h4>
          <div class="content">
            <h5><u>Preview</u></h5>
            <img :src="actualCustomizationImgUrl" style="width: 600px; height: auto" alt="Image" v-if="actualCustomizationImgUrl !== ' '">
          </div>
        </section>
        <footer class="modal-card-foot">
          <a class="button is-success">Add to basket</a>
          <a class="button" @click="onExitModal">Cancel</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTSCustomizeConfirmModal',
  props: [
    'actualCustomizationImgUrl',
    'isActive',
    'onExitModal'
  ]
}
</script>

<style lang="sass">
</style>
