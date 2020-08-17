<template>
  <div>
    <button @click='logout'>
    ログアウト
    {{$store.state.userData.name}}
    </button>
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
  import  firebase from '~/plugins/firebase';
  import 'firebase/auth';

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
      logout() {
        firebase.auth().signOut()
      }
    },
  }
</script>

<style lang="scss">
</style>