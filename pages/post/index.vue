<template>
  <div class='post'>
    <div class='post__wrapper'>
      <div class='post__header'>
        <button
          class='post__header__cansel is-convex'
          @click='movePageBack'
          :disabled='disabled'
          >
          ×
        </button>
        <icon-user 
          :src='avatar'
          class='post__header__avatar' />
        <buttonPost class='post__header__post is-convex' @emit='addPost' 
          :disabled='disabled'/>
      </div>
      <textarea v-model='text' maxlength='20s0' class='post__textarea is-concave'/>
    </div>
  </div>
</template>

<script>
import { IconUser } from '@/components/atoms/icon';
import { ButtonPost } from '@/components/atoms/button';
import  firebase from '~/plugins/firebase';
import 'firebase/firestore';

export default {
  transition: {
    name: 'slide'
  },
  components: {
    IconUser,
    ButtonPost,
  },
  data() {
    return {
      text: '',
      disabled: true,
    }
  },
  computed: {
    avatar() {
      return this.$store.state.userData.avatar;
    }
  },
  methods: {
    addPost() {
      this.disabled = true;
      const db = firebase.firestore();
      db.collection("post").add({
        uid: this.$store.state.userData.uid,
        src: this.$store.state.userData.avatar,
        userName: this.$store.state.userData.name,
        text: this.text,
        press: {
          reply: [],
          heart: [],
          retweet: [],
        },
        createdAt: new Date(),
      })
      .then((docRef) => {
        this.disabled = false;
        this.movePageBack();
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    },
    movePageBack() {
      this.$router.go(-1);
    }
  },
  watch: {
    text(val) {
      if(val !== '') {
        this.disabled = false;
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/variables';
@import '~/assets/sass/common';
.post {
  position: relative;
  z-index: 999;
  width: 100vw;

  &__wrapper {
    position: absolute;
    top: -6rem;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    background-color: $color-bg;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    &__cansel {
      width: 4rem;
      height: 4rem;
      font-size: 3rem;
      color: #707070;
      border-radius: 50%;
    }

    &__avatar {
      margin-left: 2rem;
      flex-grow: 1;
    }
  }

  &__textarea {
    margin: 1.5rem 10%;
    padding: 1.5rem;
    width: 80%;
    height: 30rem;
    border: none;
    outline: none;
    resize: none;
    border-radius: 1rem;
  }
}
</style>