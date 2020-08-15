<template>
  <h1> 動的ルーティング{{$route.params.id}} </h1>
</template>

<script>

  export default {
  }
</script>

<style lang="scss">

 .page-enter {
   opacity: 0;
 }
 .page-enter-active {
   transition: opacity .2s;
 }
</style>