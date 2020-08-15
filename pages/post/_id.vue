<template>
  <transition name='post'>
    <div class='fsd'> 動的ルーティング{{$route.params.id}} </div>
    </nuxt-link>
  </transition>
</template>

<script>

  export default {
  }
</script>

<style lang="scss">
.fsd {
  width: 100vw;
  height: 100vh;
  background-color: red;
}

.post-enter {
  transform: translateX(100vw)
}

.post-enter-active {
  transition: transform 1s;
}

.post-leave-to {
  transform: translateX(-100vw)
}

.post-leave-active {
  transition: transform 1s;
}
</style>