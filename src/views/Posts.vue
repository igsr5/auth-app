<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import Axios from 'axios'
export default {
  data: () => {
    return {
      posts: [],
    };
  },
  mounted() {
    Axios
      .get("/api/v1/posts")
      .then((response) => {
        this.posts = response.data.data
      })
      .catch((e) => {
        alert(e);
      });
  }
};
</script>
