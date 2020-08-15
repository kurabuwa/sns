import IconUserImg from '~/assets/img/avatar_cat.jpg';
import IconUserSelf from '~/assets/img/avatar_self.jpeg';

export const state = () => ({
  iconSelf: IconUserSelf,
  postData: [
    {
      id: 1,
      src: IconUserImg,
      userName: '我輩は猫である名前はまだない',
      text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
      pressedCount: {
        reply: 4,
        heart: 4,
        retweet: 1,
      },
      press: {
        reply: false,
        heart: false,
        retweet: false,
      }
    },
    {
      id: 2,
      src: IconUserImg,
      userName: '我輩は猫である名前はまだない',
      text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
      pressedCount: {
        reply: 4,
        heart: 4,
        retweet: 1,
      },
      press: {
        reply: false,
        heart: false,
        retweet: false,
      }
    },
    {
      id: 3,
      src: IconUserImg,
      userName: '我輩は猫である名前はまだない',
      text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
      pressedCount: {
        reply: 4,
        heart: 4,
        retweet: 1,
      },
      press: {
        reply: false,
        heart: false,
        retweet: false,
      }
    },
    {
      id: 4,
      src: IconUserImg,
      userName: '我輩は猫である名前はまだない',
      text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
      pressedCount: {
        reply: 4,
        heart: 4,
        retweet: 1,
      },
      press: {
        reply: false,
        heart: false,
        retweet: false,
      }
    },
    {
      id: 5,
      src: IconUserImg,
      userName: '我輩は猫である名前はまだない',
      text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
      pressedCount: {
        reply: 4,
        heart: 4,
        retweet: 1,
      },
      press: {
        reply: false,
        heart: false,
        retweet: false,
      }
    },
    {
      id: 6,
      src: IconUserImg,
      userName: '我輩は猫である名前はまだない',
      text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
      pressedCount: {
        reply: 4,
        heart: 4,
        retweet: 1,
      },
      press: {
        reply: false,
        heart: false,
        retweet: false,
      }
    },
  ],
})

export const mutations = {
  pressed(state, pressedData) {
    let pressedIndex;
    state.postData.forEach( (data, index) => {
      if(data.id === pressedData.id) {
        pressedIndex = index;
      }
    })
    console.log(pressedData.id, pressedData.name);
    state.postData[pressedIndex].press[pressedData.name] = !state.postData[pressedIndex].press[pressedData.name];
    console.log(state.postData[pressedIndex].press[pressedData.name]);
  }
}