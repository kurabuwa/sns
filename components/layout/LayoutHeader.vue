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
  import { mapMutations } from 'vuex';
  import  firebase from '~/plugins/firebase';
  import 'firebase/auth';

  export default {
    components: {
      IconUser,
    },
    data() {
      return {
        iconSrc: this.$store.state.iconSelf,
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
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setLoginInfo(user);
        } else {
          this.movePage('login');
        }
      });
    },
    methods: {
      ...mapMutations(['setLoginInfo']),
      pressed(name, id) {
        this.$store.commit('pressed', { name: name, id: id} );
      },
      movePage(name, params, query) {
      this.$router.push({ name, params, query }, () => {});
      },
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
    z-index: 990;
    margin-bottom: 1rem;
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