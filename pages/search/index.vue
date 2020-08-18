<template>

    <button @click='logout'>
    ログアウト
    {{$store.state.userData.name}}
    </button>
</template>

<script>
  import ButtonNormal from '@/components/atoms/bottonNormal';
  import  firebase from '~/plugins/firebase';
  import 'firebase/auth';

  export default {
    components: {
      ButtonNormal,
    },
    methods: {
      movePage(name, params, query) {
      this.$router.push({ name, params, query }, () => {});
      },
      logout() {
        firebase.auth().signOut();
        this.$store.commit('deleteLoginInfo');
        this.movePage('index');
      }
    }
  }
</script>

<style lang="scss">
</style>