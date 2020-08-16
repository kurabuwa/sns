<template>
    <div class='post-id'> 
      <div class='post-id__wrapper'>
        <input type='text' class='post-id__contents'>
        </input>
      </div>
    </div>
</template>

<script>

  export default {
    transition: {
      name: 'post',
    }
  }
</script>

<style lang="scss">
@import '~/assets/sass/variables';
.post-id {
  position: relative;
  z-index: 999;
  width: 100vw;

  &__wrapper {
    position: absolute;
    top: -6rem;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: $color-bg;
  }

  &__contents {
    position: absolute;
    bottom: 0;
  }
}

.post-enter {
  transform: translateX(100vw);
}

.post-enter-active {
  transition: all .1s;
}
.post-leave-to {
  transform: translateX(100vw);
}

.post-leave-active {
  transition: all .1s;
}
</style>