<template>
  <div class='post-tire-thread'>
    <ul>
      <li v-for='(thread, index) in threadData' :key='thread.id' class='post-tire-thread__list'>
        <div class='post-tire-thread__list__left'>
          <icon-user :src='thread.src' small/>
          <border-vertical
            class='post-tire-thread__list__left__border'
            v-if='threadData.length !== index + 1'/>
        </div>
        <div class='post-tire-thread__list__right'>
          <div @click='$emit("emit", "post-id", {id: thread.id})'>
            <p class='post-tire-thread__list__right__title'>{{thread.userName}}</p>
            <p class='post-tire-thread__list__right__text'>{{thread.text}}</p>
          </div>
          <div class='post-tire-thread__list__right__buttons'>
            <button-action class='post-tire-thread__list__right__buttons__button'
              v-for='name in buttonName'
              :key='name.id'
              @emit='pressed($event, { id: thread.id, index: index})'
              :press='thread.press[name]'
              :name='name'
              :count='thread.press[name].length'/>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { ButtonAction }from '@/components/atoms/button';
  import { IconUser } from '@/components/atoms/icon';
  import { BorderVertical } from '@/components/atoms/border';
  import  firebase from '~/plugins/firebase';
  import 'firebase/firestore';

  export default {
    props: {
      threadData: Array,
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
      BorderVertical,
    },
    created() {
    },
    methods: {
      pressed(name, data) {
        const dataPost = [];
        Object.assign(dataPost,　this.threadData[data.index].press[name]);
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
        db.doc(data.id).update({
          [`press.${name}`]: dataPost,
        })
      }
    }
  }
</script>

<style lang="scss">

.post-tire-thread {
  margin: 0 auto;

  &__list {
  border-radius: 2rem;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 0;
  width: 90%;
  display: flex;
    &__left {
      &__border {
        margin-top: 1rem;
      }
    }
    &__right {
      margin-left: 1rem;

      &__title {
        font-size: 1.6rem;
        margin: .7rem 0;
      }

      &__text {
        font-size: 1.4rem;
        margin-bottom: 1rem;
      }

      &__buttons {
        display: flex;


        &__button {
          padding-right: 6rem;

          &:last-of-type {
            padding-right: 2rem;
          }
        }
      }
    }
  }
}
</style>