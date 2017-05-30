import * as types from '../mutations-types'
import _          from 'lodash'

/* eslint key-spacing: ["error", { "align": "colon" }] */

// initial state
const state = {
  customization: {
    parts: { },
    size : ' '
  },
  articleConfiguration: {
    name  : ' ',
    parts : [ ],
    colors: [ ],
    sizes : [ ]
  },
  imagesForThisModel: [ ],
  shoeImage         : ' ',
  selectionType     : 'parts',
  partSelected      : undefined,
  colorSelected     : undefined,
  showConfirmation  : false
}

// getters
const getters = {
  customization       : state => state.customization,
  articleConfiguration: state => state.articleConfiguration,
  partSelected        : state => state.partSelected,
  shoeImage           : state => state.shoeImage,
  showConfirmation    : state => state.showConfirmation
}

// actions
const actions = {
  getArticleConfiguration ({ commit, rootState }) {
    const articleId = rootState.route.params.articleId
    fetch(`http://localhost:10010/api/v1/articles/${articleId}`)
    .then(success => success.json())
    .then(getArticleResponse => {
      commit(types.UPDATE_ARTICLE_CONFIGURATION_FOR_CUSTOMIZATION, {
        article: getArticleResponse.article,
        commit
      })
    })
  },
  getImagesForThisModel ({ commit, state }) {
    fetch(`http://localhost:10010/shoes-images-list?modelName=${state.articleConfiguration.name}`)
    .then(success => success.json())
    .then(getImagesForThisModelResponse => {
      if (getImagesForThisModelResponse.code === 200) {
        commit(types.UPDATE_IMAGES_FOR_THIS_MODEL, getImagesForThisModelResponse['image-list'])
      }
    })
  },
  selectPart ({ commit }, part) {
    commit(types.SELECT_PART, part)
  },
  selectColor ({ commit, state }, color) {
    commit(types.SELECT_COLOR, { color, commit })
  },
  updateCustomizationSize ({ commit }, size) {
    commit(types.UPDATE_CUSTOMIZATION_SIZE, size)
  },
  /*
    decodeURIComponent is used because of the imgUrl that contains "#"
    Keeping the "#" let us directly parse and use hexadecimal colors
   */
  updatePreview ({ commit, state }) {
    const baseShoeImage        = state.shoeImage
    let newDecodedShoeImageUrl = decodeURIComponent(baseShoeImage)
    let partAndColorToReplace

    /* For each part in the actual customization configuration,
       we will replace the partWithColor (ex: 'sole#818181')
       with the new selected parameters
     */
    _.mapKeys(state.customization.parts, (color, part) => {
      if (newDecodedShoeImageUrl.indexOf(part) !== -1) {
        partAndColorToReplace  = _.replace(newDecodedShoeImageUrl, `http://localhost:10010/shoes/${state.articleConfiguration.name}/`, '')
        partAndColorToReplace  = _.replace(partAndColorToReplace, '.png', '')
        partAndColorToReplace  = partAndColorToReplace.substring(partAndColorToReplace.indexOf(part), partAndColorToReplace.length)
        if (partAndColorToReplace.indexOf('_') !== -1) {
          partAndColorToReplace  = partAndColorToReplace.substring(0, partAndColorToReplace.search('_'))
        }
        newDecodedShoeImageUrl = _.replace(newDecodedShoeImageUrl, `http://localhost:10010/shoes/${state.articleConfiguration.name}/`, '')
        newDecodedShoeImageUrl = _.replace(newDecodedShoeImageUrl, partAndColorToReplace, String(part + color))
      }
    })
    const newDecodedImgUrl = newDecodedShoeImageUrl
    commit(types.UPDATE_PREVIEW, newDecodedImgUrl)
  },
  toggleCustomizeConfirmationModal ({ commit }) {
    commit(types.BUY_CUSTOMIZATION)
  }
}

// mutations
const mutations = {
  [types.UPDATE_ARTICLE_CONFIGURATION_FOR_CUSTOMIZATION] (state, { article, commit }) {
    state.articleConfiguration = article
    state.shoeImage = 'http://localhost:10010/shoes/' + article.name + '/' + encodeURIComponent('sole#818181_intern#818181.png')
    actions.getImagesForThisModel({ commit, state })
  },

  [types.UPDATE_IMAGES_FOR_THIS_MODEL] (state, images) {
    state.imagesForThisModel = images
  },

  [types.UPDATE_CUSTOMIZATION_SIZE] (state, size) {
    state.customization.size = size
  },

  [types.SELECT_PART] (state, part) {
    state.partSelected = part
  },

  [types.SELECT_COLOR] (state, { color, commit }) {
    state.colorSelected = color
    state.customization.parts[state.partSelected] = color
    state.partSelected = undefined
    actions.updatePreview({ commit, state })
  },

  [types.UPDATE_PREVIEW] (state, newDecodedImgUrl) {
    state.shoeImage = 'http://localhost:10010/shoes/' + state.articleConfiguration.name + '/' + encodeURIComponent(newDecodedImgUrl)
  },

  [types.BUY_CUSTOMIZATION] (state) {
    state.showConfirmation = state.showConfirmation !== true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
