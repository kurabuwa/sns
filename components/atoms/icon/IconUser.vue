<template>
  <div class='icon-user' @click='$emit("emit")'>
    <img :class='addClass' :src='src'>
  </div>
</template>

<script>

  export default {
      props: {
        src: String,
        small: Boolean,
        large: Boolean,
      },
      computed :{
        addClass() {
          return {
            'icon-user__img': true,
            'icon-user--small': this.small,
            'icon-user--large': this.large,
          }
        },
      },
  }
</script>

<style lang="scss">
    .icon-user {
      &__img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
      }
      &--small {
        width: 3rem;
        height: 3rem;
      }
      &--large {
        width: 5rem;
        height: 5rem;
      }
    }
</style>