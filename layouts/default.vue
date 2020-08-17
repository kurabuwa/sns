<template>
  <div class='wrapper'>
    <transition name='header'>
      <layout-header :class='isHiddenHeader'/>
    </transition>
      <Nuxt class='content'/>
    <transition name='footer'>
        <layout-footer :class='isHiddenFooter'/>
    </transition>
  </div>
</template>

<script>
  import LayoutHeader from '@/components/layout/LayoutHeader';
  import LayoutFooter from '@/components/layout/LayoutFooter';

  export default {
    transition: {
      name: 'page',
    },
    data() {
      return {
        hiddenHeaderName: ['post-id', 'login'],
        hiddenFooterName: ['post-id', 'login'],
      }
    },
    components: {
      LayoutFooter,
    },
    computed: {
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
    methods: {
      searchPageName(value) {
        return this.$route.name === value;
      }
    }
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
