import config from '~/config'

export const state = () => ({
  // State > Config
  callpowerCampaignId: null,
  donateUrl: config.donateUrl,
  callScript: null,
  isArchived: config.isArchived,

  // State > Modal
  modalVisible: !!config.isArchived,
  modalType: config.isArchived ? 'archived' : null,
  modalData: null,

  // State > Map
  mapboxToken: config.mapboxToken,
  map: {
    zoom: null,
    currentPin: null
  },

  // State > Petition Form Fields
  name: null,
  email: null,
  address: null,
  zipCode: null,
  phone: null,

  // State > Photo Gallery
  selfies: null,
  selfiesCurPageNum: 1,

  // State > Photo Submissions
  photoSource: null,
  selfie: {}
})

export const mutations = {
  // Mutations > Modal
  setModalVisibility(state, value) {
    state.modalVisible = value
  },

  setModalType(state, value) {
    state.modalType = value
  },

  setModalData(state, value) {
    state.modalData = value
  },

  // Mutations > Map
  setMapZoom(state, value) {
    state.map.zoom = value
  },

  setMapCurrentPin(state, value) {
    state.map.currentPin = value
  },

  // Mutations > Petition Form Fields
  setName(state, value) {
    state.name = value
  },

  setEmail(state, value) {
    state.email = value
  },

  setAddress(state, value) {
    state.address = value
  },

  setZipCode(state, value) {
    state.zipCode = value
  },

  setPhone(state, value) {
    state.phone = value
  },

  // Mutations > Calls
  setCallpowerCampaignId(state, value) {
    state.callpowerCampaignId = value
  },

  setCallScript(state, value) {
    state.callScript = value
  },

  // Mutations > Photo Gallery & Submissions
  setPhotoSource(state, value) {
    state.photoSource = value
  },

  setSelfie(state, value) {
    state.selfie = value
  },

  setSelfies(state, value) {
    state.selfies = value
    state.selfiesCurPageNum = 1
  },

  addSelfies(state, value) {
    state.selfies.data = state.selfies.data.concat(value.data)
    state.selfies.pages = value.pages
  },

  setSelfiesCurPageNum(state, value) {
    state.selfiesCurPageNum = value
  }
}

export const actions = {
  // Actions > Photo Gallery
  async getSelfies({ commit, state }, query) {
    let q = ''
    if (query && query.page) {
      q = `-page${query.page}`
    } else if (query && query.state) {
      q = `-${query.state}`
    }

    try {
      // TODO: genericize URL or change per project
      const { data } = await this.$axios.get(`https://data.battleforthenet.com/deadline/selfies${q}.json`)
      if (query && query.page > 1) {
        commit('addSelfies', data)
      } else {
        commit('setSelfies', data)
      }
    } catch (error) {
      console.log('Something went wrong with fetching the selfies')
    }
  },

  openSelfieModal({ commit, state }, selfie) {
    commit('setModalVisibility', true)
    commit('setModalType', 'selfie')
    commit('setModalData', selfie)
  }
}
