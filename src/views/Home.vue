<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="logout">logout</button>
  </div>
</template>


<script lang="ts">
export default {
  methods: {
      logout() {
          this.$store.commit('destroy')
          this.$router.push({
              name: 'Login'
            })
        }
    }
  }
</script>
