<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import Axios from "axios";
export default {
  data: () => {
    return {
      posts: [],
    };
  },
  mounted() {
    Axios.get("users", { headers: { Authorization: "Token "+this.$store.state.token } ,data: {}})
      .then((response) => {
        console.log(response)
        this.posts = response.data;
      })
      .catch((e) => {
        alert(e);
      });
  },
};
</script>
