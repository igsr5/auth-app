<template>
  <ul>
    <li v-for="(post, index) in posts" :key="index">{{ post.title }}</li>
  </ul>
</template>

<script lang="ts">
export default {
    data: () => {
        return {
            posts: [
              {title: 'aaaa'},
              {title: 'bbbb'},
              {title: 'cccc'},
            ]
          }
      }
  }
</script>
