<template>
  <div class='post-tire'>
    <ul>
      <li v-for='(post, index) in postData' :key='post.id' class='post-tire__list is-convex'>
        <div class='post-tire__list__left'>
          <icon-user :src='post.src'/>
        </div>
        <div class='post-tire__list__right'>
          <div @click='$emit("emit", "post-id", {id: post.id})'>
            <p class='post-tire__list__right__title'>{{post.userName}}</p>
            <p class='post-tire__list__right__text'>{{post.text}}</p>
          </div>
          <div class='post-tire__list__right__buttons'>
            <button-action class='post-tire__list__right__buttons__button'
              v-for='name in buttonName'
              :key='name.id'
              @emit='pressed($event, post.id)'
              :press='post.press[name]'
              :name='name'
              :count='post.pressedCount[name]'/>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { ButtonAction }from '@/components/atoms/button';
  import { IconUser } from '@/components/atoms/icon';

  export default {
    props: {
      postData: Array,
    },
    data() {
      return {
        buttonName: [ 'reply', 'heart', 'retweet'],
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
        this.$store.commit('pressed', { name: name, id: id} );
      }
    }
  }
</script>

<style lang="scss">

.post-tire {
  margin: 0 auto;

  &__list {
  border-radius: 2rem;
  margin: 0 auto 1rem;
  padding: 1rem;
  width: 90%;
  display: flex;
    
    &__right {
      margin-left: 1rem;

      &__title {
        font-size: 1.6rem;
        margin: 1.5rem 0 .5rem;
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