<template>
  <div class='layout-header is-convex'>
    <icon-user class='layout-header__icon__img' :src='iconSrc' />
    <p class='layout-header__title'　v-if='pageType !== "search"'>{{title}}</p>
    <input class='is-concave layout-header__search'
      type='text'
      :placeholder='title'
      v-if='pageType === "search"' />
    <p class='layout-header__post'>+</p>
  </div>
</template>

<script>
  import { IconUser } from '@/components/atoms/icon';
  import IconUserSelf from '~/assets/img/avatar_self.jpeg';

  export default {
    components: {
      IconUser,
    },
    data() {
      return {
        iconSrc: IconUserSelf,
        pageType: '',
        title: '投稿',
      };
    },
    created() {
      this.pageType = this.$route.name;
       if(this.pageType === 'index'){
        this.title = '投稿'
      } else if(this.pageType === 'search'){
        this.title = 'キーワード検索'
      } else if(this.pageType === 'notice'){
        this.title = '通知'
      }　else if(this.pageType === 'dm'){
        this.title = 'DM'
      }
    },
    watch: {
      $route (to, from) {
        this.pageType = this.$route.name;
        if(to.name === 'index'){
          this.title = '投稿'
        } else if(to.name === 'search'){
          this.title = 'キーワード検索'
        } else if(to.name === 'notice'){
          this.title = '通知'
        }　else if(to.name === 'dm'){
          this.title = 'DM'
        }
      }
    }
  }
</script>

<style lang="scss">
  .layout-header {
    width: 100vw;
    height: 5rem;
    position: sticky;
    top: 0rem;
    display: flex;
    justify-content: space-between;
    padding: .5rem 1.5rem;
    align-items: center;

    &__title {
      font-size: 1.8rem;
      line-height: 2.4rem;
      padding: .6rem 1.5rem;
    }

    &__post {
      width: 4rem;
      line-height: 2.4rem;
      text-align: center;
      font-size: 2.4rem;
      
    }

    &__search {
      @extend .layout-header__title;
      position: relative;
      top: .1rem;
      border-radius: 2rem;
      width: 70%;
    }
  }
</style>