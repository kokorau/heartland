<template>
  <a :href="link">
    <icon name="soundcloud" class="soundcloud-icon"></icon>
  </a>
</template>

<script>
  export default {
    name: 'soundcloud',
    props: ['link']
  }
</script>

<style>
  .soundcloud-icon {
    color: gray;
  }
  .soundcloud-icon:hover {
    color: rgb(255, 119, 0);
  }
</style>
