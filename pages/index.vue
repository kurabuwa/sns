<template>
  <div>
    <post-tire
      :postData='postData'
      />
  </div>
</template>

<script>
  import PostTire from '@/components/molecules/post/PostTire';

  export default {
    data() {
      return {
        postData: this.$store.state.postData,
      }
    },
    components: {
      PostTire,
    },
  }
</script>

<style lang="scss">
</style>