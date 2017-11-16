import Vuex from 'vuex'
import Vue from 'vue'

Vue.use (Vuex);

const state = {
  bgWidth: 0,
  bgHeight: 0,
  frWidth: 0,
  frHeight: 0,
};

const mutations = {

  setBgSize (bgWidth, bgHeight) {
    state.bgWidth = bgWidth;
    state.bgHeight = bgHeight;
  },

  setFrSize (frWidth, frHeight) {
    state.frWidth = frWidth;
    state.frHeight = frHeight;
  }

};

const actions = {
};

const getters = {

  bgWidth: state => state.bgWidth,

  bgHeight: state => state.bgHeight,

  frWidth: state => state.frWidth,

  frHeight: state => state.frHeight


};

const window = new Vuex.Store ({
  state,
  getters,
  actions,
  mutations
});

export default window;
