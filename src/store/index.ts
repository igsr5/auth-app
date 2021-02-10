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
      console.log(email);
      console.log(password);
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
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  modules: {},
  plugins: [createPersistedState({ storage: window.sessionStorage })],
});
