<template>
  <div class='icon-user'>
    <img :class='addClass' :src='src'>
  </div>
</template>

<script>

  export default {
      props: {
        src: String,
        small: Boolean,
      },
      computed :{
        addClass() {
          return {
            'icon-user__img': true,
            'icon-user__img--small': this.small,
            'icon-user__img--large': this.large,
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
      }
    }
</style>