<template>
  <a :href="link" target="_blank" class="soundcloud">
    <icon name="soundcloud" scale="1.3"></icon>
  </a>
</template>

<script>
  export default {
    name: 'soundcloud',
    props: ['link']
  }
</script>

<style>
  .soundcloud icon {
    color: gray;
  }
  .soundcloud icon:hover {
    color: rgb(255, 119, 0);
  }
</style>
