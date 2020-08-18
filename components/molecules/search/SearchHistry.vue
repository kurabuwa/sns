<template>
  <div class='search-histry'>
    <i class="fas fa-search search-histry__icon"></i>
    <p class='search-histry__text'>{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>

<style lang="scss">
.search-histry {
  display: flex;
  align-items: center;

  &__icon {
    font-size: 1.8rem;
  }

  &__text {
    font-size: 1.8rem;
  }
}
</style>