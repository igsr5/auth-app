<template>
  <div class="login">
    <input type="text" v-model="email"/>
    <input type="password" v-model="password"/>
    <button @click="login">login</button>
  </div>
</template>

<script lang="ts">

export default {
  data: function() {
      return {
          email: '',
          password: ''
        }
    },
    methods: {
        login() {
          this.$store.commit('create', this.email)
          this.$router.push({
              name: 'Home'
            })
          }
      }
  }

//export default class Login extends Vue {}
</script>
