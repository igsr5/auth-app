import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {
    create(state, token) {
      state.token = token;
    },
    destroy(state) {
      state.token = "";
    },
  },
  actions: {
    authRequest({ state, commit }, { email, password }) {
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(
          "auth",
          {
            email: email,
            password: password,
          },
          {
            headers: headers,
          }
        )
        .then((res) => {
          commit('create', res.data.token)
        })
        .catch((e) => {
          alert(e);
        });
    },
  },
  modules: {},
  plugins: [createPersistedState({ storage: window.sessionStorage })],
});
