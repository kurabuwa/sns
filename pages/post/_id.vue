<template>
  <transition>
    <nuxt-link to='/' class='fsd'> 動的ルーティング{{$route.params.id}}
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

.v-enter {
  transform: translateX(100vw)
}

.v-enter-active {
  transition: transform 1s;
}

.v-leave-to {
  transform: translateX(-100vw)
}

.v-leave-active {
  transition: transform 1s;
}
</style>