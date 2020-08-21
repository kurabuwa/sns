<template>
  <button :class='addClass' @click='$emit("emit")' :disabled='disabled'>
    <i class="fas fa-paper-plane button-post__paper"></i>
  </button>
</template>

<script>

export default {
  props: {
    small: Boolean,
    disabled: Boolean,
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
