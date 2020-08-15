<template>
  <div class='wrapper'>
    <layout-header v-if='isActiveHeader'/>
    <Nuxt class='content'/>
    <layout-footer v-if='isActiveFooter'/>
  </div>
</template>

<script>
  import LayoutHeader from '@/components/layout/LayoutHeader';
  import LayoutFooter from '@/components/layout/LayoutFooter';

  export default {
    data() {
      return {
        hiddenHeaderName: ['post-id'],
        hiddenFooterName: ['post-id'],
      }
    },
    components: {
      LayoutFooter,
    },
    computed: {
      isActiveHeader() {
        const result = this.hiddenHeaderName.filter(this.searchPageName)
        if(result.length !== 0){
          return false;
        }
        return true;
      },
      isActiveFooter() {
        const result = this.hiddenFooterName.filter(this.searchPageName)
        if(result.length !== 0){
          return false;
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
  min-height: 100vh;
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
}

.page-enter {
  opacity: 0;
}

.page-enter-active {
  transition: opacity .2s;
}
</style>
