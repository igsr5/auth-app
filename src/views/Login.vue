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
    setToken() {
      this.$store.dispatch("authRequest", {
        email: this.email,
        password: this.password,
      });
      this.$router.push({
        name: "Home",
      });
    },
  },
};

//export default class Login extends Vue {}
</script>
