<template>
    <div class='post-id'> 
      <div class='post-id__wrapper'>
        <div class='post-id__contents is-convex'>
          <div class='post-id__contents__parent'>
            <i @click='$router.go(-1)'class="fas fa-chevron-left post-id__contents__parent__return"></i>
            <post-tire-plane
              :postData='postData'
              />
            <border-normal class='post-id__contents__border'/>
          </div>
          <div class='post-id__contents__child'>
            <post-tire-thread 
              :threadData='$store.state.postData'
              @emit='movePage'/>
            <border-normal class='post-id__contents__child__border'/>
            <post-tire-thread 
              :threadData='$store.state.postData'
              @emit='movePage'/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { BorderNormal } from '@/components/atoms/border';
  import PostTirePlane from '@/components/molecules/post/PostTirePlane';
  import PostTireThread from '@/components/molecules/post/PostTireThread';

  export default {
    transition: {
      name: 'post',
    },
    data() {
      return {
        postData: {},
      }
    },
    components: {
      BorderNormal,
      PostTirePlane,
      PostTireThread,
    },
    created() {
      this.getPostData();
    },
    methods: {
      movePage(name, params, query) {
        this.$router.push({name ,params,  query}, () => {});
      },
      getPostData() {
        this.postData = this.$store.state.postData.filter((data) => {
          if(data.id === this.$route.params.id) return true;
        })[0];
      }
    }
  }
</script>

<style lang="scss">
@import '~/assets/sass/variables';
.post-id {
  position: relative;
  z-index: 999;
  width: 100vw;

  &__wrapper {
    position: absolute;
    top: -6rem;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: $color-bg;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__contents {
    width: calc(100vw - 3rem);
    height: calc(100vh - 3rem);
    border-radius: 1rem;
    overflow-y: scroll;

    &__parent {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      padding-top: 1rem;
      position: sticky;
      top: -0rem;
      background-color: $color-bg;

      &__return {
        font-size: 2rem;
        margin-top: 2rem;
        transform: translateY(-50%);
      }
    }

    &__border {
      margin-top: 1rem;
    }

    &__child {
      margin-bottom: 1rem;

      &__border {
        width: 85%;
        margin-top: 1rem;
      }
    }
  }
}

.post-enter {
  transform: translateX(100vw);
}

.post-enter-active {
  transition: all .1s;
}
.post-leave-to {
  transform: translateX(100vw);
}

.post-leave-active {
  transition: all .1s;
}
</style>