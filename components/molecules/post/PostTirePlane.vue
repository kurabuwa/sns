<template>
  <div class='post-tire-plane'>
    <div @click='$emit("emit", "post-id", {id: postData.id})'>
      <div class='post-tire-plane__user'>
        <icon-user :src='postData.src' :small='iconSmall'/>
        <p class='post-tire-plane__user__title'>{{postData.name}}</p>
      </div>
      <p class='post-tire-plane__text'>{{postData.text}}</p>
    </div>
    <div class='post-tire-plane__buttons'>
      <button-action class='post-tire-plane__buttons__button'
        v-for='name in buttonName'
        :key='name.id'
        @emit='pressed($event, postData.id)'
        :press='postData.press[name]'
        :name='name'
        :count='postData.press[name].length'/>
    </div>
  </div>
</template>

<script>
  import { ButtonAction }from '@/components/atoms/button';
  import { IconUser } from '@/components/atoms/icon';
  import  firebase from '~/plugins/firebase';
  import 'firebase/firestore';

  export default {
    props: {
      postData: Object,
      iconSmall: Boolean,
    },
    data() {
      return {
        buttonName: [ 'reply', 'heart', 'retweet'],
        uid: this.$store.state.userData.uid,
      }
    },
    components: {
      ButtonAction,
      IconUser,
    },
    created() {
    },
    methods: {
      pressed(name, id) {
        const dataPost = [];
        Object.assign(dataPost,　this.postData.press[name]);
        if(!dataPost.includes(this.uid)) {
          dataPost.push(this.uid);
        } else {
          dataPost.forEach((item, index) => {
            if(item === this.uid) {
              dataPost.splice(index, 1);
            }
          })
        }
        const db = firebase.firestore().collection('post');
        db.doc(id).update({
          [`press.${name}`]: dataPost,
        })
      }
    }
  }
</script>

<style lang="scss">

.post-tire-plane {
    margin: 0 auto;
    border-radius: 2rem;
    width: 90%;
      &__user {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        &__title {
          margin-left: 1rem;
          font-size: 1.6rem;
        }
      }

      &__text {
        font-size: 1.4rem;
        margin-bottom: 1rem;
        margin-left: 1rem;
      }

      &__buttons {
        display: flex;
        margin-left: 1rem;
        justify-content: space-around;

        &__button {
          padding-right: 6rem;

          &:last-of-type {
            padding-right: 2rem;
          }
        }
      
    }
}
</style>