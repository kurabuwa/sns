<template>
  <div class='search'>
    <ul class='search__tab'>
      <li
        :class='{
          "search__tab__text": true,
          "is-convex": index === currentTab,
          }'
        v-for='(text, index) in tabText'
        @click='changeTab(index)'
        :key='text.id'>
        <p>
          {{text}}
        </p>
      </li>
      <div class='search__tab__line'/>
    </ul>
    <div class='search__result is-convex'>
      <div class='search__result__contents'>
        <ul
          v-if='currentTab === 0'
          class='search__result__contents__histry'
          >
          <li
            v-for='(text, index) in searchData.histry.text'
            :key='text.id'
            >
            <search-histry 
              class='search__result__contents__histry__content'
              :text='text'
              />
            <border-normal />
            <search-histry 
              class='search__result__contents__histry__content'
              :text='text'
              />
            <border-normal />
            <search-histry 
              class='search__result__contents__histry__content'
              :text='text'
              />
            <border-normal />
          </li>
        </ul>
        <ul
          v-if='currentTab === 1'
          class='search__result__contents__user'
          >
          <li
            v-for='(user, index) in searchData.user'
            :key='user.id'
            >
            <user-normal
              class='search__result__contents__user__content'
              :userName='user.userName'
              :avatar='user.src'
              />
            <border-normal />
            <user-normal
              class='search__result__contents__user__content'
              :userName='user.userName'
              :avatar='user.src'
              />
            <border-normal />
            <user-normal
              class='search__result__contents__user__content'
              :userName='user.userName'
              :avatar='user.src'
              />
            <border-normal />
          </li>
        </ul>
        <ul
          v-if='currentTab === 2'
          class='search__result__contents__post'
          >
          <li
            v-for='(post, index) in searchData.post'
            :key='post.id'
            >
            <post-tire-plane
              class='search__result__contents__post__content'
              :postData='post'
              />
            <border-normal />
            <post-tire-plane
              class='search__result__contents__post__content'
              :postData='post'
              />
            <border-normal />
            <post-tire-plane
              class='search__result__contents__post__content'
              :postData='post'
              />
            <border-normal />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import UserNormal from '@/components/molecules/general/UserNormal';
  import { BorderNormal } from '@/components/atoms/border';
  import PostTirePlane from '@/components/molecules/post/PostTirePlane';
  import SearchHistry from '@/components/molecules/search/SearchHistry';
  import  firebase from '~/plugins/firebase';
  import 'firebase/auth';

  export default {
    components: {
      UserNormal,
      SearchHistry,
      BorderNormal,
      
    },
    data() {
      return {
        tabText: ['検索結果', 'ユーザー',　'投稿'],
        currentTab: 0,
        searchData: {
          histry: {
            text: ['私は誰だ','私は誰だ','私は誰だ','私は誰だ','私は誰だ','私は誰だ','私は誰だ','私は誰だ','私は誰だ','私は誰だ']
          },
          user: this.$store.state.postData,
          post: this.$store.state.postData,
        },
      }
    },
    methods: {
      movePage(name, params, query) {
      this.$router.push({ name, params, query }, () => {});
      },
      changeTab(index) {
        this.currentTab = index;
        console.log(index);
      }
    }
  }
</script>

<style lang="scss">
@import '~/assets/sass/variables';

.search {
  margin: 0 2rem;
  height: 200%;

  &__tab {
    display: flex;
    margin-top: 1rem;
    height: 2.5rem;
    position: relative;

    &__text {
      font-size: 1.4rem;
      padding: 0 1rem;
      height: 100%;
      display:flex;
      align-items: flex-end;
      position: relative;
      border-radius: 1rem 1rem 0 0;

    }
    &__line {
      width: 100%;
      border-radius: 1rem;
      height: 1rem;
      position: absolute;
      bottom: -.92rem;
      left: 0;
      background-color: $color-bg;
    }
  }

  &__result {
    height: calc(100vh - 16rem);
    overflow-y: scroll;
    border-radius: 1rem;

    &__line {
      height: 1rem;
      position: sticky;
      width: 100%;
      background-color: $color-bg;
    }
    &__contents {
      &__histry {
        margin-top: 1rem;

        &__content {
          padding: 1rem 4rem;
        }
      }
      &__user {
        margin-top: 1rem;

        &__content {
          padding: 1rem 4rem;
        }
      }
      &__post {
        margin-top: 1rem;

        &__content {
          padding: 1rem 1rem;
        }
      }
    }
  }
}
</style>