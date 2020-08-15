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
    press: Boolean,
    count: Number,
    name: String,
  },
  computed: {
    addClass() {
      console.log(this.press)
      return {
        'is-convex': !this.press,
        'button-heart__content': true,
        'button-retweet__content': true,
        'button-reply__content': true,
        'is-concave': this.press,
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
.button-heart__content {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-retweet__content {
  @extend .button-heart__content;
}

.button-reply__content {
  @extend .button-heart__content;
}

.button-action__count {
  margin-left: 1rem;
}
</style>