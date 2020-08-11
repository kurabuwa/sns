<template>
  <div>
    <layout-header />
    <Nuxt />
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
  word-spacing: 1px;
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

.layout {
  max-width: 375px;
  margin: 0 auto;
}
</style>
