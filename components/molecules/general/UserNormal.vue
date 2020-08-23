<template>
  <div class='user-normal'>
    <icon-user :src='avatar' small></icon-user>
    <div class='left'>
      <p class='user-normal__userName'>{{name}}</p>
      <p class='user-normal__text'>{{text}}</p>
    </div>
  </div>
</template>

<script>
import { IconUser } from '@/components/atoms/icon';

export default {
  props: {
    text: String,
    name: String,
    avatar: String,
  },
  components: {
    IconUser,
  },
}
</script>

<style lang="scss">
.user-normal {
  display: flex;
  align-items: center;

  &__icon {
    font-size: 1.8rem;
  }
  &__userName{
    font-size: 1.4rem;
    margin-left: 1rem;
  }
  &__text {
    font-size: 1.8rem;
    margin-left: 1rem;
  }
}
</style>