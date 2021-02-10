<template>
  <div class="login">
    <input type="text" v-model="email" />
    <input type="password" v-model="password" />
    <button @click="setToken">login</button>
  </div>
</template>

<script lang="ts">
export default {
  data: function() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.commit("create", this.email);
      this.$router.push({
        name: "Home",
      });
    },
    setToken() {
      this.$store.dispatch('authRequest', { email: this.email, password: this.password });
    },
  },
};

//export default class Login extends Vue {}
</script>
