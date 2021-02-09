<template>
  <ul>
    <li v-for="(post, index) in posts" :key="index" @click="getIp">{{ post.title }}</li>
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
      },
      methods: {
          getIp() {
              this.axios.get('https://httpbin.org/get')
                .then((response) => {
                    alert(response.data.origin);
                  })
                .catch((e) => {
                    alert(e)
                  })
            }
        }
  }
</script>
