<template>
    <div class='user-id'> 
      <div class='user-id__wrapper'>
        <div class='user-id__prof is-convex'>
          <div class='user-id__prof__header is-concave'>
            <div class='user-id__prof__header__img__wrapper'>
              <img class='user-id__prof__header__img'src='https://firebasestorage.googleapis.com/v0/b/potrfolio-sns.appspot.com/o/a1f230a48780c557587cf3653d690f21_t.jpeg?alt=media&token=db9f4318-beb1-4cc5-827c-227975875920'>
            </div>
          </div>
          <div class='user-id__prof__contents' >
            <div class='user-id__prof__contents__top'>
              <div class='user-id__prof__contents__top__icon__wrapper is-convex'>
                <icon-user :src='userData.avatar' large/>
              </div>
              <div class='user-id__prof__contents__top__right'>
                <div class='user-id__prof__contents__top__right__dm is-convex'>
                  <i v-if='false' class="far fa-envelope layout-footer__dm__icon"></i>
                  <i class="fas fa-cog layout-footer__dm__icon" @click='movePage("setting")'></i>
                </div>
                <p class='user-id__prof__contents__top__right__follow is-convex'>
                  フォローする
                </p>
              </div>
            </div>
            <p class='user-id__prof__contents__username'>
              {{ userData.name }}
            </p>
            <p class='user-id__prof__contents__desc'>
              {{userData.desc}}
            </p>
          </div>
        </div>
        <post-tire-box 
          class='user-id__post'
          :postData='postData'
          @emit='movePage'/>
      </div>
    </div>
</template>

<script>
  import { IconUser } from '@/components/atoms/icon';
  import PostTireBox from '@/components/molecules/post/PostTireBox';
  import  firebase from '~/plugins/firebase';
  import 'firebase/firestore';

  export default {
    transition: {
      name: 'slide',
    },
    data() {
      return {
        userData: this.$store.state.userData,
        postData: []
      }
    },
    components: {
      IconUser,
      PostTireBox,
    },
    created() {
      this.checkPost();
    },
    methods: {
      movePage(name, params, query) {
        this.$router.push({name ,params,  query}, () => {});
      },
      checkPost() {
        const db = firebase.firestore()
        db.collection("post").where('uid', '==', this.userData.uid).onSnapshot((querySnapshot) => {
          const post = [];
          querySnapshot.docChanges().forEach((changes, index) => {
            const data = changes.doc.data();
            post.push({
              uid: data.uid,
              id: changes.doc.id,
              src: data.src,
              name: data.name,
              press: data.press,
              text: data.text,
              createdAt: data.createdAt
            });
          });
          post.forEach( (data) => {
            this.setPostData(data)
          })
        });
      },
      setPostData(data) {
        if(this.postData.length >= 100) {
          state.postData.splice(0, 1);
        }
        let result = -1;
        this.postData.forEach((dataPost, index) => {
          if(dataPost.id === data.id) {
            result = index;
          }
        });
        if(result !== -1) {
          this.postData.splice(result, 1, data)
        } else {
          this.postData.splice(0, 0, data);
        }
      },
    }
  }
</script>

<style lang="scss">
@import '~/assets/sass/variables';
@import '~/assets/sass/common';
.user-id {
  position: relative;
  z-index: 991;
  width: 100vw;

  &__wrapper {

    overflow: scroll;
    position: absolute;
    top: -6rem;
    z-index: 100;
    width: 100vw;
    height: calc(100vh - 5rem);
    background-color: $color-bg;
    padding: 1.5rem 1rem 0;
  }

  &__prof {
    padding: 1rem;
    width: 100%;
    border-radius: 1rem;

    &__header {
      position: relative;
      z-index: 1;
      width: 100%;
      padding: .5rem;
      border-radius: 1rem;

      &__img {
        width: 100vw;

        &__wrapper {
          width: 100%;
          overflow: hidden;
          border-radius: 1rem;
          height: 10rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    &__contents {
      position: relative;
      z-index: 2;
      transform: translateY(-2rem);

      &__top {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        &__icon {
          
          &__wrapper {
            padding: .5rem;
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
          }
        }

        &__right {
          display: flex;
          align-items: center;
          &__dm {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          &__follow {
            padding: .5rem;
            border-radius: 10rem;
            margin-left: 1rem;
            font-size: 1.4rem;
          }
        }
      }

      &__username {
        margin-top: 1rem;
        font-size: 1.8rem;
        margin-left: .5rem;
      }

      &__desc {
        font-size: 1.2rem;
        margin-top: 1rem;
        margin-left: .5rem;
      }
    }
  }

  &__post {
    margin-top: 1rem;
  }
}


</style>