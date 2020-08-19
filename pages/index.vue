<template>
  <div>
    <button @click='addPost'>
    記事投稿
    </button>
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
      // this.db.collection("post").onSnapshot((querySnapshot) => {
      //   this.post.splice(0, this.post.length)
      //   querySnapshot.forEach((doc, index) => {
      //     const data = doc.data();
      //     this.post.push({
      //       uid: this.userData.uid,
      //       id: doc.id,
      //       src: data.src,
      //       userName: data.userName,
      //       press: data.press,
      //       pressedCount: data.pressedCount,
      //       text: data.text
      //       });
      //   });
      //   // this.$store.commit('setPostData', this.post);
      // });
    },
    mounted() {
      this.$store.dispatch('checkPost')
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
        firebase.auth().signOut()
      },
      addPost() {
        const dbb = firebase.firestore();
        dbb.collection("post").add({
          src: this.userData.avatar,
          userName: this.userData.name,
          text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
          pressedCount: {
            reply: 4,
            heart: 4,
            retweet: 1,
          },
          press: {
            reply: false,
            heart: false,
            retweet: false,
          },
          createdAt: new Date(),
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
      }
    },
  }
</script>

<style lang="scss">
</style>