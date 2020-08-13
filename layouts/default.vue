<template>
  <div class='wrapper'>
    <layout-header />
    <Nuxt class='content'/>
    <layout-footer />
  </div>
</template>

<script>
  import LayoutHeader from '@/components/layout/LayoutHeader';
  import LayoutFooter from '@/components/layout/LayoutFooter';

  export default {
    components: {
      LayoutFooter,
    },
  }
</script>

<style>
.content {
  z-index: 1;
  margin-bottom: 6rem;
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

#_layout {
  max-width: 375px;
  margin: 0 auto;
}

.wrapper {
}
</style>
