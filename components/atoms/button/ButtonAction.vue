<template>
  <div :class="`button-action`" @click='$emit("emit", name)'>
    <div :class='addClass'>
      <i :class="`fas fa-${name}`"></i>
    </div>
    <p class='button-action__count'>{{count}}</p>
  </div>
</template>

<script>
export default {
  props: {
    press: Array,
    count: Number,
    name: String,
  },
  computed: {
    addClass() {
      return {
        'is-convex': this.press.indexOf(this.$store.state.userData.uid) === -1,
        'button-action__content': true,
        'button-action__heart': this.name === 'heart' && this.press.indexOf(this.$store.state.userData.uid) !== -1 ? true : false,
        'button-action__retweet': this.name === 'retweet' && this.press.indexOf(this.$store.state.userData.uid) !== -1 ? true: false,
        'is-concave': this.press.indexOf(this.$store.state.userData.uid) !== -1,
      }
    },
  },
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