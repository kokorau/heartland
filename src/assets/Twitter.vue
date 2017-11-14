<template>
  <a :href="link" target="_blank">
    <icon name="twitter" class="twitter-icon" scale="1.1"></icon>
  </a>
</template>

<script>
  export default {
    name: 'twitter',
    props: ['link']
  }
</script>

<style>
  .twitter-icon {
    color: gray;
  }
  .twitter-icon:hover {
    color: rgb(0, 172, 237);
  }
</style>
