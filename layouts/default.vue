<template>
  <div class='wrapper'　@touchmove='onScroll($event)' @touchend='leave' @touchstart='start' v-if='!isPc'>
    <div v-if='!(loginCheck ===  "" || loginCheck ===  "dummy")'>
      <transition name='header'>
        <layout-header :class='isHiddenHeader'/>
      </transition>
        <Nuxt class='content'/>
      <transition name='footer'>
          <layout-footer :class='isHiddenFooter'/>
      </transition>
    </div>
    <button v-if='!loginCheck' @click='login()' class='login is-convex'>
      googleでログイン
    </button>
    <button v-if='loginCheck === "dummy"' @click='login()' class='loading'>
      <div class="orbit-spinner orbit">
        <div class="orbit"></div>
        <div class="orbit"></div>
        <div class="orbit"></div>
      </div>
    </button>
  </div>
  <div class='pc' v-else-if='isPc'>
    <img src='https://firebasestorage.googleapis.com/v0/b/potrfolio-sns.appspot.com/o/QR.png?alt=media&token=b2c27afb-72af-4062-ada9-5a097c167356'>
  </div>
</template>

<script>
  import LayoutHeader from '@/components/layout/LayoutHeader';
  import LayoutFooter from '@/components/layout/LayoutFooter';
  import  firebase from '~/plugins/firebase';
  import 'firebase/auth';
  import 'firebase/firestore';
  import { mapState, mapMutations, mapGetters } from 'vuex';

  export default {
    loading: false,
    transition: {
      name: 'page',
    },
    data() {
      return {
        resetUserData: {
          avatar: 'https://firebasestorage.googleapis.com/v0/b/potrfolio-sns.appspot.com/o/avatar_cat.jpg?alt=media&token=3d8b33fe-d4ac-4778-9a6d-c1de84a9be2a',
          name: 'みんなは猫である',
          uid: '',
          desc: '猫にされてしまった！'
        },
        userDataCheck: false,
        isPc: false,
        hiddenHeaderName: ['post-id', 'login', 'post', 'pc', 'user-id', 'setting'],
        hiddenFooterName: ['post-id', 'login', 'post', 'pc'],
        isActive: false,
        windowsize: 0,
        calcSize: 0,
        swipe: {
          time: {
            before: 0,
            after: 0,
          },
          x: 0,
          y: 0,
          point: {
            x: {
              befor: 0,
              after: 0,
            },
            y: {
              befor: 0,
              after: 0,
            }
          }
        }
      }
    },
    components: {
      LayoutFooter,
    },
    computed: {
      ...mapState(['userData', 'isLogin']),
      ...mapGetters(['loginCheck']),
      isHiddenHeader() {
        const result = this.hiddenHeaderName.filter(this.searchPageName)
        if(result.length !== 0){
          return {
            'hidden': true,
          };
        }
        return false;
      },
      isHiddenFooter() {
        const result = this.hiddenFooterName.filter(this.searchPageName)
        if(result.length !== 0){
          return {
            'hidden': true,
          };
        }
        return true;
      },
    },
    created() {
      if(process.client) {
        const ua = window.navigator.userAgent.toLowerCase();
        if (!((ua.indexOf('iphone') !== -1 || ua.indexOf('ipad') !== -1 || (ua.indexOf('macintosh') && 'ontouchend' in document))
          || ua.indexOf('android') !== -1)) {
          this.isPc = true;
        }
      }
    },
    mounted() {
      this.$store.dispatch('checkPost');
      if(process.client){
        this.windowSize = document.body.clientWidth;
      }
      this.authCheck();
    },
    methods: {
    ...mapMutations(['setLoginInfo', 'deleteLoginInfo', 'setLoginInfoToken', 'updateUserData']),
      login() {
        this.$store.dispatch('login');
      },
      movePage(name, params, query) {
      this.$router.push({ name, params, query }, () => {});
      },
      async authCheck(){
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.getUser(user.uid);
          }else {
            this.deleteLoginInfo();

          }
          this.isActive = true;
        });
      },
      searchPageName(value) {
        return this.$route.name === value;
      },
      start() {
        const date = new Date();
        this.swipe.time.before = date.getSeconds()* 1000 + date.getMilliseconds() ;
      },
      onScroll(e) {
        const ev = e.changedTouches[0];
        let calc = 0;
        this.swipe.point.x.before = this.swipe.point.x.after
        this.swipe.point.x.after = ev.pageX
        if(this.swipe.point.x.before !== 0) {
          this.swipe.x += this.swipe.point.x.after - this.swipe.point.x.before;
        }
        this.swipe.point.y.before = this.swipe.point.y.after;
        this.swipe.point.y.after = ev.pageY;
        if(this.swipe.point.y.before !== 0) {
          this.swipe.y += Math.abs(this.swipe.point.y.after - this.swipe.point.y.before);
        }
      },
      leave() {
        const calcPoint = this.swipe.x / this.swipe.y;
        const date = new Date();
        this.swipe.time.after = date.getSeconds()* 1000 + date.getMilliseconds();
        const calcTime = this.swipe.time.after - this.swipe.time.before;
        this.calcSize =  this.swipe.x / this.windowSize;
        if(calcPoint > 5 && calcTime < 150 && this.calcSize > 0.2 ){
          this.$router.go(-1);
        }
        this.swipe.point.x.before = 0;
        this.swipe.point.x.after = 0;
        this.swipe.point.y.before = 0;
        this.swipe.point.y.after = 0;
        this.swipe.x = 0;
        this.swipe.y = 0;
      },
      resetUser(uid) {
        const db = firebase.firestore();
        db.collection("user").doc(uid).set({
          avatar: this.resetUserData.avatar,
          name: this.resetUserData.name,
          uid: uid,
          desc: this.resetUserData.desc,
          dataSet: false,
        }, { merge: true })
        .then((docRef) => {
          console.log('margeUser');
          this.resetUserData.uid = uid;
          this.setLoginInfo(this.resetUserData);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
      },
      getUser(uid) {
        const db = firebase.firestore();
        db.collection("user").doc(uid).get()
        .then((doc) => {
          if(doc.exists) {
            this.userDataCheck = doc.data().dataSet;
          }
          if(!this.userDataCheck){
            this.resetUser(uid);
          }else {

            this.setLoginInfo(doc.data());
          }
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
      },
    },
  }
</script>

<style>

.content {
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 11rem);
}

.hidden {
  opacity: 0;
  position: relative;
}

.hidden:after {
  content:'';
  width: 100%;
  height: 5rem;
  position: absolute;
  top:0;
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 2.67vw;
  color: #707070;
  height: 100%;
  word-spacing: .1rem;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  border: none;
}

.wrapper {
  height: 100%;
  overflow-x: hidden;
}

.login {
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: #707070;
  padding: .5rem 1rem;
  border-radius: 3rem;
}
.loading {
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  background-color: #F4FBFF;
}
</style>
