<template>
  <div :class='addClass' @click='$emit("emit")'>
    <i class="fas fa-paper-plane button-post__paper"></i>
  </div>
</template>

<script>

export default {
  props: {
    small: Boolean,
  },
  computed: {
    addClass() {
      return {
        'button-post': true,
        'button-post--small': this.small,
      }
    }
  }
}
</script>

<style lang="scss">
.button-post {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-.5rem);
}
</style>
