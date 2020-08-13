<template>
  <div class='button-share'  @click='$emit( "emit")'>
    <div :class='addClass'>
      <i class="fas fa-retweet"></i>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    press: Boolean,
  },
  computed: {
    addClass() {
      return {
        'button-share__content': true,
        'is-convex': !this.press,
        'is-concave': this.press,
      }
    },
  },
}
</script>

<style lang="scss">

.button-share__content {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>