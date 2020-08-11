<template>
  <div class='layout-header is-convex'>
    <icon-user :src='iconSrc' />
    <p class='layout-header__title'>{{title}}</p>
    <p class='layout-header__post'>+</p>
  </div>
</template>

<script>
  import IconUser from '@/components/atoms/icon/iconUser';
  import IconUserSelf from '~/assets/img/avatar_self.jpeg';

  export default {
    components: {
      IconUser,
    },
    data() {
      return {
        iconSrc: IconUserSelf,
        title: '投稿',
      };
    },
    created() {
       if(this.$route.name === 'index'){
        this.title = '投稿'
      } else if(this.$route.name === 'search'){
        this.title = '検索'
      } else if(this.$route.name === 'notice'){
        this.title = '通知'
      }　else if(this.$route.name === 'dm'){
        this.title = 'DM'
      }
    },
    watch: {
      $route (to, from) {
        if(to.name === 'index'){
        this.title = '投稿'
      } else if(to.name === 'search'){
        this.title = '検索'
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
    margin-top: .5rem;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: .5rem 1.5rem;
    align-items: center;

    &__title {
      font-size: 2.4rem;
    }

    &__post {
      width: 4rem;
      line-height: 2.4rem;
      text-align: center;
      font-size: 2.4rem;
      
    }
  }
</style>