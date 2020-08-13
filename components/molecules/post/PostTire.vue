<template>
  <div class='post-tire'>
    <ul>
      <li v-for='(post, index) in postData' :key='post.id' class='post-tire__list is-convex'>
        <div class='post-tire__list__left'>
          <icon-user :src='post.src'/>
        </div>
        <div class='post-tire__list__right'>
          <p class='post-tire__list__right__title'>{{post.userName}}</p>
          <p class='post-tire__list__right__text'>{{post.text}}</p>
          <div class='post-tire__list__right__buttons'>
            <button-reply class='post-tire__list__right__buttons__button' @emit='reply(index)' :press='post.press.reply' />
            <button-favorite class='post-tire__list__right__buttons__button' @emit='favorite(index)' :press='post.press.favorite' />
            <button-share class='post-tire__list__right__buttons__button' @emit='share(index)' :press='post.press.share' />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { ButtonReply, ButtonFavorite, ButtonShare }from '@/components/atoms/button';
  import { IconUser } from '@/components/atoms/icon';

  export default {
    props: {
      postData: Array,
    },
    components: {
      ButtonReply,
      ButtonFavorite,
      ButtonShare,
      IconUser,
    },
    creted() {
      console.log(this.postData)
    },
    methods: {
      reply(index) {
        this.postData[index].press.reply = !this.postData[index].press.reply;
      },
      favorite(index) {
        this.postData[index].press.favorite = !this.postData[index].press.favorite;
      },
      share(index) {
        this.postData[index].press.share = !this.postData[index].press.share;
      },
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
        font-size: 1.8rem;
      }

      &__text {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      &__buttons {
        display: flex;


        &__button {
          padding-right: 8rem;

          &:last-of-type {
            padding-right: 2rem;
          }
        }
      }
    }
  }
}
</style>