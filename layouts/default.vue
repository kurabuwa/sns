<template>
  <div class='wrapper'　@touchmove='onScroll($event)' @touchend='leave'>
    <div v-if='!(loginCheck ===  "" || loginCheck ===  "dummy")'>
      <transition name='header'>
        <layout-header :class='isHiddenHeader'/>
      </transition>
        <Nuxt class='content'/>
      <transition name='footer'>
          <layout-footer :class='isHiddenFooter'/>
      </transition>
    </div>
    <button v-if='!loginCheck' @click='login()'>
      googleでログイン
    </button>
    <button v-if='loginCheck === "dummy"' @click='login()'>
      googleでログイン中
    </button>
  </div>
</template>

<script>
  import LayoutHeader from '@/components/layout/LayoutHeader';
  import LayoutFooter from '@/components/layout/LayoutFooter';
  import  firebase from '~/plugins/firebase';
  import 'firebase/auth';
  import { mapState, mapMutations, mapGetters } from 'vuex';

  export default {
    transition: {
      name: 'page',
    },
    data() {
      return {
        hiddenHeaderName: ['post-id', 'login'],
        hiddenFooterName: ['post-id', 'login'],
        isActive: false,
        swipe: {
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
    },
    mounted() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setLoginInfo(user);
          firebase.auth().currentUser.getIdToken(true).then((idToken) => {
            this.setLoginInfoToken(idToken); 
          }).catch(function(error) {
            console.log('/default/tokenの取得に失敗しました');
          });
        }else {
          this.deleteLoginInfo();
        }
        this.isActive = true;
      });
    },
    methods: {
    ...mapMutations(['setLoginInfo', 'deleteLoginInfo', 'setLoginInfoToken']),
      login() {
        this.$store.dispatch('login');
      },
      movePage(name, params, query) {
      this.$router.push({ name, params, query }, () => {});
      },
      searchPageName(value) {
        return this.$route.name === value;
      },
      onScroll(e) {
        let calc = 0;
        const ev = e.changedTouches[0];
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
        const calc = this.swipe.x / this.swipe.y;
        if(calc > 5){
          this.$router.go(-1);
        }
        this.swipe.point.x.before = 0;
        this.swipe.point.x.after = 0;
        this.swipe.point.y.before = 0;
        this.swipe.point.y.after = 0;
        this.swipe.x = 0;
        this.swipe.y = 0;
      }
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

</style>
