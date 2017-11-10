<template>
  <a :href="link">
    <icon name="twitter" class="twitter-icon"></icon>
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
