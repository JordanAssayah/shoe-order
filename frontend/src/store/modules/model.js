import * as types from '../mutations-types'

// initial state
/* eslint key-spacing: ["error", { "align": "colon" }] */
const state = {
  newModelSpec: {
    colors: [''],
    sizes : ['20'],
    parts : [''],
    name  : '',
    price : undefined
  }
}

// getters
const getters = {
  getNewModelSpec: state => state.newModelSpec
}

// actions
const actions = {
  addNewPartInput ({ commit }) {
    commit(types.ADD_NEW_PART_INPUT)
  },
  addNewColorInput ({ commit }) {
    commit(types.ADD_NEW_COLOR_INPUT)
  },
  addNewSizeInput ({ commit }) {
    commit(types.ADD_NEW_SIZE_INPUT)
  },
  updateNewModelPrice ({ commit }, newPrice) {
    commit(types.UPDATE_NEW_MODEL_PRICE, newPrice)
  },
  updateNewModelName ({ commit }, newName) {
    commit(types.UPDATE_NEW_MODEL_NAME, newName)
  },
  updateNewModelParts ({ commit }, partToUpdate) {
    commit(types.UPDATE_NEW_MODEL_PARTS, partToUpdate)
  },
  updateNewModelColors ({ commit }, colorToUpdate) {
    commit(types.UPDATE_NEW_MODEL_COLORS, colorToUpdate)
  },
  updateNewModelSizes ({ commit }, sizeToUpdate) {
    commit(types.UPDATE_NEW_MODEL_SIZES, sizeToUpdate)
  },
  removePart ({ commit }, id) {
    commit(types.REMOVE_A_PART, id)
  },
  removeColor ({ commit }, id) {
    commit(types.REMOVE_A_COLOR, id)
  },
  removeSize ({ commit }, id) {
    commit(types.REMOVE_A_SIZE, id)
  }
}

// mutations
const mutations = {

  [types.UPDATE_NEW_MODEL_PRICE] (state, newPrice) {
    state.newModelSpec.price = newPrice
  },

  [types.UPDATE_NEW_MODEL_NAME] (state, newName) {
    state.newModelSpec.name = newName
  },

  [types.UPDATE_NEW_MODEL_PARTS] (state, {id, nameOfPart}) {
    const partsArray = state.newModelSpec.parts
    partsArray[id] = nameOfPart
    state.newModelSpec.parts = partsArray
  },

  [types.UPDATE_NEW_MODEL_COLORS] (state, {id, color}) {
    const colorsArray = state.newModelSpec.colors
    colorsArray[id] = color
    state.newModelSpec.colors = colorsArray
  },

  [types.UPDATE_NEW_MODEL_SIZES] (state, {id, size}) {
    const sizesArray = state.newModelSpec.sizes
    sizesArray[id] = size
    state.newModelSpec.sizes = sizesArray
  },

  [types.ADD_NEW_PART_INPUT] (state) {
    const partsArray = state.newModelSpec.parts
    partsArray.push('')
    state.newModelSpec.parts = partsArray
  },

  [types.ADD_NEW_COLOR_INPUT] (state) {
    const colorsArray = state.newModelSpec.colors
    colorsArray.push('')
    state.newModelSpec.colors = colorsArray
  },

  [types.ADD_NEW_SIZE_INPUT] (state) {
    const sizesArray = state.newModelSpec.sizes
    sizesArray.push('20')
    state.newModelSpec.sizes = sizesArray
  },

  [types.REMOVE_A_PART] (state, id) {
    const partsArray = state.newModelSpec.parts
    partsArray.splice(id, 1)
    state.newModelSpec.parts = partsArray
  },

  [types.REMOVE_A_COLOR] (state, id) {
    const colorsArray = state.newModelSpec.colors
    colorsArray.splice(id, 1)
    state.newModelSpec.colors = colorsArray
  },

  [types.REMOVE_A_SIZE] (state, id) {
    const sizesArray = state.newModelSpec.sizes
    sizesArray.splice(id, 1)
    state.newModelSpec.sizes = sizesArray
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
