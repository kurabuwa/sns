<template>
  <div class='pc'>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.button-action {
  display: flex;
  align-items: center;
}
.button-action__content {
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-action__count {
  margin-left: 1rem;
}

.button-action {
  &__heart {
    color: #FF7C7C;
    font-size: .95rem;
  }
  &__retweet {
    font-size: .95rem;
    color: #5DD159;
  }
}
</style>