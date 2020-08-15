<template>
    <div class='fsd'> 
    <nuxt-link to='/'>
    動的ルーティング{{$route.params.id}} 
    </nuxt-link>
    </div>
    </nuxt-link>
</template>

<script>

  export default {
  }
</script>

<style lang="scss">
.fsd {
  position: absolute;
  top: 0rem;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  background-color: white;
}

</style>