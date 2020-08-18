<template>
  <div class='wrapper'>
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
        }else {
          this.deleteLoginInfo();
        }
        console.log('mount');
        this.isActive = true;
      });
    },
    methods: {
    ...mapMutations(['setLoginInfo', 'deleteLoginInfo']),
      login() {
        this.$store.dispatch('login');
      },
      movePage(name, params, query) {
      this.$router.push({ name, params, query }, () => {});
      },
      searchPageName(value) {
        return this.$route.name === value;
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
