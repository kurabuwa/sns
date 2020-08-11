<template>
  <div class='layout-footer is-convex'>
    <div @click='movePage("index")' class='layout-footer__home'>
      <i class="fas fa-home layout-footer__home__icon"></i>
      <p>ホーム</p>
    </div>
    <div @click='movePage("search")' class='layout-footer__search'>
      <i class="fas fa-search layout-footer__search__icon"></i>
      <p>検索</p>
    </div>
    <div @click='movePage("notice")' class='layout-footer__notice'>
      <i class="far fa-bell layout-footer__notice__icon"></i>
      <p>通知</p>
    </div>
    <div @click='movePage("dm")'class='layout-footer__dm'>
      <i class="far fa-envelope layout-footer__dm__icon"></i>
      <p>DM</p>
    </div>
  </div>
</template>

<script>

  export default {
    methods: {
      movePage(name, params, query) {
      this.$router.push({ name, params, query }, () => {});
    },
    }
  }
</script>

<style lang="scss">
  %navi {
      text-align: center;
      flex-grow: 1
  }
  %icon {
    font-size: 2.5rem;
  }
  .layout-footer {
    width: 100vw;
    height: 5rem;
    position: fixed;
    bottom: 0; 
    display: flex;
    justify-content: space-around;
    align-items: center;
    &__home {
      @extend %navi;
      &__icon {
          @extend %icon;
      }
    }
    &__search {
      @extend %navi;
      &__icon {
        @extend %icon;
      }
    }
    &__notice {
      @extend %navi;
      &__icon {
        @extend %icon;
      }
    }
    &__dm {
      @extend %navi;
      &__icon {
        @extend %icon;
      }
    }
  }
</style>