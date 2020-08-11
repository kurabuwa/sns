<template>
    <img class='icon' :src='src'>
</template>

<script>

  export default {
      props: {
          src: String,
      }
  }
</script>

<style lang="scss">
    .icon {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
</style>