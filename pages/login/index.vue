<template>
  <div>
    <button @click='login()'>
      googleでログイン
    </button>
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
    created() {
      if(!this.$store.state.userData.token) {
        this.movePage('login');
      }
    },
    mounted() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.$store.commit('setLoginInfo', user);
          this.movePage('index');
        }
      });
    },
    methods: {
      login() {
        this.$store.dispatch('login');
      },
      movePage(name, params, query) {
      this.$router.push({ name, params, query }, () => {});
      },
    }
  }
</script>

<style lang="scss">
</style>