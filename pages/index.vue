<template>
  <div>
    <post-tire
      :postData='postData'
      />
    <post-tire
      :postData='postData'
      />
    <post-tire
      :postData='postData'
      />
    <post-tire
      :postData='postData'
      />
  </div>
</template>

<script>
  import PostTire from '@/components/molecules/post/PostTire';
  import IconUserImg from '~/assets/img/avatar_cat.jpg';

  export default {
    data() {
      return {
        postData: [
          {
            src: IconUserImg,
            userName: '我輩は猫である名前はまだない',
            text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
            press: {
              reply: false,
              favorite: false,
              share: false,
            }
          },
          {
            src: IconUserImg,
            userName: '我輩は猫である名前はまだない',
            text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
            press: {
              reply: false,
              favorite: false,
              share: false,
            }
          },
          {
            src: IconUserImg,
            userName: '我輩は猫である名前はまだない',
            text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
            press: {
              reply: false,
              favorite: false,
              share: false,
            }
          },
          {
            src: IconUserImg,
            userName: '我輩は猫である名前はまだない',
            text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
            press: {
              reply: false,
              favorite: false,
              share: false,
            }
          },
          {
            src: IconUserImg,
            userName: '我輩は猫である名前はまだない',
            text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
            press: {
              reply: false,
              favorite: false,
              share: false,
            }
          },
          {
            src: IconUserImg,
            userName: '我輩は猫である名前はまだない',
            text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
            press: {
              reply: false,
              favorite: false,
              share: false,
            }
          },
        ],
      }
    },
    components: {
      PostTire,
    },
    
  }
</script>

<style lang="scss">
</style>