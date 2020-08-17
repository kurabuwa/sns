<template>
  <div>
    <post-tire-box
      :postData='postData'
      @emit='movePage'
      />
    <post-tire-box
      :postData='postData'
      @emit='movePage'
      />
  </div>
</template>

<script>
  import PostTireBox from '@/components/molecules/post/PostTireBox';

  export default {
    data() {
      return {
        postData: this.$store.state.postData,
      }
    },
    components: {
      PostTireBox,
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