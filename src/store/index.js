import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    advisorFavState: [
      {
        id: 0,
        favState: false,
      },
      {
        id: 1,
        favState: false,
      },
      {
        id: 2,
        favState: false,
      },
      {
        id: 3,
        favState: false,
      },
      {
        id: 4,
        favState: false,
      },
      {
        id: 5,
        favState: false,
      },
      {
        id: 6,
        favState: false,
      },
      {
        id: 7,
        favState: false,
      },
    ],
  },
  getters: {},
  mutations: {
    initLocalStorage(state) {
      /* 
        localStorage只能存放字符串
      */
      localStorage.setItem(
        "advisorFavState",
        JSON.stringify(state.advisorFavState)
      );
    },
    changeData(state, id) {
      state.advisorFavState[id].favState = !state.advisorFavState[id].favState;
      localStorage.setItem(
        "advisorFavState",
        JSON.stringify(state.advisorFavState)
      );
    },
    getDataStorage() {
      return JSON.parse(localStorage.getItem("advisorFavState"));
    },
  },
  actions: {},
  modules: {},
});
