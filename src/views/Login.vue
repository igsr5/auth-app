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
          window.location.href = '/'
          }
      }
  }

//export default class Login extends Vue {}
</script>
