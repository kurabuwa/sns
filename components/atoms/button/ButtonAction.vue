<template>
  <div :class="`button-${name}`" @click='$emit( "emit", name)'>
    <div :class='addClass'>
      <i :class="`fas fa-${iconName}`"></i>
    </div>
    <p>{{count}}</p>
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
      return {
        'button-favorite__content': true,
        'is-convex': !this.press,
        'is-concave': this.press,
      }
    },
    iconName() {
      if(this.name === 'favorite'){
        return 'heart';
      }
      return this.name;
    }
  },
}
</script>

<style lang="scss">

.button-favorite__content {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>