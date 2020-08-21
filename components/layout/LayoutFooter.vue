<template>
  <div id='hidden' class='layout-footer is-convex' v-if='isActive.window'>
    <div @click='movePage("index")' class='layout-footer__home' :class='addClass("index")'>
      <i class="fas fa-home layout-footer__home__icon"></i>
      <p>ホーム</p>
    </div>
    <div @click='movePage("search")' class='layout-footer__search' :class='addClass("search")'>
      <i class="fas fa-search layout-footer__search__icon"></i>
      <p>検索</p>
    </div>
    <div @click='movePage("notice")' class='layout-footer__notice' :class='addClass("notice")'>
      <i class="far fa-bell layout-footer__notice__icon"></i>
      <p>通知</p>
    </div>
    <div @click='movePage("dm")'class='layout-footer__dm' :class='addClass("dm")'>
      <i class="far fa-envelope layout-footer__dm__icon"></i>
      <p>DM</p>
    </div>
    <div class='layout-footer__post' @click='movePage("post")'>
      <i class="fas fa-plus"></i>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      windowHeight: 0,
      isActive: {
        window: true,
      }
    }
  },
  created() {
    if(process.client){
    this.windowHeight = window.innerHeight
    }
  },
  mounted() {
    if(process.client){
      window.addEventListener('resize', this.handleResize)
    }
  },
  beforeDestroy() {
    if(process.clinet){
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
      movePage(name, params, query) {
      this.$router.push({ name, params, query }, () => {});
      },
      addClass(pageType) {
        return {
          'is-concave': pageType === this.$route.name,
        }
      },
      handleResize: function() {
      if(process.client){
        console.log('resize');
        const elem = document.getElementById('hidden');
        if(this.windowHeight - window.innerHeight >= 10){
          elem.style.transform = 'translateY(200%)';
        } else {
          elem.style.transform = 'translateY(0)';
        };
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/variables';

  %navi {
      text-align: center;
      height: 4rem;
      width: 20%;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      transition: 0.2s;
  }
  %icon {
    font-size: 2rem;
  }
  .layout-footer {
    z-index: 990;
    width: 100%;
    height: 5rem;
    position: sticky;
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

    &__post {
      position: absolute;
      width: 3rem;
      height: 3rem;
      bottom : 6rem;
      right: 4rem;
      background-color: #707070;
      color: $color-bg;
      font-size: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 6px 6px 10px #707070;
    }
  }

</style>