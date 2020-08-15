<template>
  <div>
    <post-tire
      :postData='postData'
      @emit='movePage'
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
    methods: {

      movePage(name, params, query) {
      this.$router.push({ name, params, query }, () => {});
      },
    }
  }
</script>

<style lang="scss">
</style>