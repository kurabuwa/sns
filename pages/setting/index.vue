<template>
    <div class='setting'> 
      <div class='setting__wrapper'>
        <div class='setting__prof is-convex'>
          <div class='setting__prof__header is-concave'>
            <div class='setting__prof__header__img__wrapper'>
              <img class='setting__prof__header__img'src='https://firebasestorage.googleapis.com/v0/b/potrfolio-sns.appspot.com/o/a1f230a48780c557587cf3653d690f21_t.jpeg?alt=media&token=db9f4318-beb1-4cc5-827c-227975875920'>
            </div>
          </div>
          <div class='setting__prof__contents' >
            <div class='setting__prof__contents__top'>
              <div class='setting__prof__contents__top__icon__wrapper is-convex'>
                <icon-user :src='userData.avatar' large/>
              </div>
              <button
                class='is-convex setting__prof__contents__top__register'
                @click='setUser()'
                :disabled='varidation'>
                登録する
              </button>
            </div>
            <textarea 
              v-model='userData.name'
              class='setting__prof__contents__username is-concave'
              rows='1'
              maxlength='15'
              wrap='off'>{{userData.name}}</textarea>
            <textarea
              v-model='userData.desc'
              class='setting__prof__contents__desc is-concave'
              maxlength='100'>{{userData.desc}}</textarea>
          </div>
        </div>
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
        userData: {
          name: '',
          desc:'',
        },
      }
    },
    computed: {
      varidation() {
        if((this.userData.name && this.userData.desc) !== ''){
          return false;
        }
        return true;
      }
    },
    components: {
      IconUser,
      PostTireBox,
    },
    created() {
      this.userData.name = this.$store.state.userData.name;
      this.userData.avatar = this.$store.state.userData.avatar;
      this.userData.uid = this.$store.state.userData.uid;
      this.userData.desc = this.$store.state.userData.desc;
      this.userData.setData = this.$store.state.userData.desc;
    },
    methods: {
      movePage(name, params, query) {
        this.$router.push({name ,params,  query}, () => {});
      },
      setUser() {
        const db = firebase.firestore();
        db.collection("user").doc(this.userData.uid).set({
          avatar: this.userData.avatar,
          name: this.userData.name,
          uid: this.userData.uid,
          desc: this.userData.desc,
          dataSet: true,
        }, { merge: true })
        .then((docRef) => {
          console.log('margeUser');
          this.$store.commit('setLoginInfo', this.userData);
          this.$router.go(-1);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
      },
    },
  }
</script>

<style lang="scss">
@import '~/assets/sass/variables';
@import '~/assets/sass/common';
.setting {
  position: relative;
  z-index: 991;
  width: 100vw;

  &__wrapper {
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

        &__register {
          padding: .5rem;
          font-size: 1.4rem;
          border-radius: 10rem;
        }
      }

      &__username {
        margin-top: 1rem;
        font-size: 1.8rem;
        margin-left: .5rem;
        border: none;
        outline: none;
        resize: none;
        border-radius:1rem;
        width: 100%;
        height: 3rem;
      }

      &__desc {
        font-size: 1.2rem;
        margin-top: 1rem;
        margin-left: .5rem;
        border: none;
        outline: none;
        resize: none;
        border-radius: 1rem;
        width: 100%;
        height: 10rem;
      }
    }
  }

  &__post {
    margin-top: 1rem;
  }
}


</style>