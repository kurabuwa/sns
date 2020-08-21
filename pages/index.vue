<template>
  <div>
    <button @click='logout'>
    ログアウト
    </button>
    <post-tire-box
      :postData='post'
      @emit='movePage'
      />
  </div>
</template>

<script>
  import PostTireBox from '@/components/molecules/post/PostTireBox';
  import  firebase from '~/plugins/firebase';
  import 'firebase/auth';
  import 'firebase/firestore';
  import { mapState, mapGetters } from 'vuex';

  export default {
    data() {
      return {
        db: firebase.firestore(),
        post: [],
      }
    },
    firestore() {
      return {
        post: db.collection('post').orderBy('createdAt')

      }
    },
    computed: {
      ...mapState(['userData', 'postData']),
      ...mapGetters(['getPostData']),
    },
    components: {
      PostTireBox,
    },
    created() {
      Object.assign(this.post, this.postData);
    },
    mounted() {
    this.$store.watch(
      (state, getters) => getters.getPostData,
      (newValue) => {
        this.post.splice(-this.post.length);
        Object.assign(this.post,newValue);
      }
    )
    },
    methods: {
      movePage(name, params, query) {
      this.$router.push({ name, params, query }, () => {});
      },
      logout() {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
        firebase.auth().signOut()
      },
    },
  }
</script>

<style lang="scss">
</style>