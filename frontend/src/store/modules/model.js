import * as types from '../mutations-types'

// initial state
/* eslint key-spacing: ["error", { "align": "colon" }] */
const state = {
  newModelSpec: {
    colors     : [''],
    sizes      : ['20'],
    parts      : [''],
    name       : '',
    price      : undefined,
    description: '',
    base_url   : ''
  },
  addModelMessage: '',
  error          : [],
  shoesImages    : undefined,
  newModelImages : undefined
}

// getters
const getters = {
  getNewModelSpec: state => state.newModelSpec,
  newModelImages : state => state.newModelImages
}

// actions
const actions = {
  addNewModelSpecInDB ({ commit, state, rootState }) {
    if (state.shoesImages === undefined) {
      commit(types.ADD_IMAGES_ERROR)
    } else {
      const plainObject = {
        ...state.newModelSpec,
        administrator_id: rootState.me.id
      }

      fetch('http://localhost:10010/api/v1/articles', {
        method : 'POST',
        headers: {
          'Accept'      : 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(plainObject)
      })
      .then(success       => success.json())
      .then(addArticleResponse => {
        if (addArticleResponse.code === 201) {
          commit(types.ADD_NEW_MODEL_IN_DB)
        }
      })

      fetch('http://localhost:10010/api/v1/shoes-images/upload', {
        method: 'POST',
        body  : state.shoesImages
      })
      .then(success       => success.json())
      .then(addShoesImagesResponse => {
        if (addShoesImagesResponse.code === 201) {
          console.log(addShoesImagesResponse)
        }
      })
    }
  },
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
  updateNewModelDescription ({ commit }, description) {
    commit(types.UPDATE_NEW_MODEL_DESCRIPTION, description)
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
  },
  updateShoesImages ({ commit, state }, evt) {
    let formData = new FormData()
    formData.append('modelName', state.newModelSpec.name)
    commit(types.PUSH_NEW_MODEL_IMAGES, evt.target.files)
    for (const file of evt.target.files) {
      formData.append('images', file, file.name)
    }
    commit(types.UPDATE_SHOES_IMAGES, formData)
  },
  updateBaseUrl ({ commit }, baseUrl) {
    commit(types.UPDATE_BASE_URL_IMAGE, baseUrl)
  }
}

// mutations
const mutations = {

  [types.UPDATE_BASE_URL_IMAGE] (state, baseUrl) {
    state.newModelSpec.base_url = baseUrl
  },

  [types.PUSH_NEW_MODEL_IMAGES] (state, array) {
    state.newModelImages = array
  },

  [types.ADD_NEW_MODEL_IN_DB] (state) {
    state.newModelSpec = {
      colors     : [''],
      sizes      : ['20'],
      parts      : [''],
      name       : '',
      price      : undefined,
      description: '',
      base_url   : ''
    }
    state.addModelMessage = ''
    state.error           = []
    state.shoesImages     = undefined
  },

  [types.UPDATE_NEW_MODEL_PRICE] (state, newPrice) {
    state.newModelSpec.price = newPrice
  },

  [types.UPDATE_NEW_MODEL_NAME] (state, newName) {
    state.newModelSpec.name = newName
  },

  [types.UPDATE_NEW_MODEL_DESCRIPTION] (state, description) {
    state.newModelSpec.description = description
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

  [types.UPDATE_SHOES_IMAGES] (state, imagesFormData) {
    state.shoesImages = imagesFormData
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
  },

  [types.ADD_IMAGES_ERROR] (state) {
    const error = state.error
    error.push('You have to upload at least 3 shoes images')
    state.error = error
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
