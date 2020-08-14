import IconUserImg from '~/assets/img/avatar_cat.jpg';

export const state = () => ({
  postData: [
    {
      id: 1,
      src: IconUserImg,
      userName: '我輩は猫である名前はまだない',
      text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
      pressedCount: {
        reply: 4,
        favorite: 4,
        share: 1,
      },
      press: {
        reply: false,
        favorite: false,
        share: false,
      }
    },
    {
      id: 2,
      src: IconUserImg,
      userName: '我輩は猫である名前はまだない',
      text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
      pressedCount: {
        reply: 4,
        favorite: 4,
        share: 1,
      },
      press: {
        reply: false,
        favorite: false,
        share: false,
      }
    },
    {
      id: 3,
      src: IconUserImg,
      userName: '我輩は猫である名前はまだない',
      text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
      pressedCount: {
        reply: 4,
        favorite: 4,
        share: 1,
      },
      press: {
        reply: false,
        favorite: false,
        share: false,
      }
    },
    {
      id: 4,
      src: IconUserImg,
      userName: '我輩は猫である名前はまだない',
      text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
      pressedCount: {
        reply: 4,
        favorite: 4,
        share: 1,
      },
      press: {
        reply: false,
        favorite: false,
        share: false,
      }
    },
    {
      id: 5,
      src: IconUserImg,
      userName: '我輩は猫である名前はまだない',
      text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
      pressedCount: {
        reply: 4,
        favorite: 4,
        share: 1,
      },
      press: {
        reply: false,
        favorite: false,
        share: false,
      }
    },
    {
      id: 6,
      src: IconUserImg,
      userName: '我輩は猫である名前はまだない',
      text: 'nyaaaaa nyaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaa aaaaa aaaaa aaaaaaaa',
      pressedCount: {
        reply: 4,
        favorite: 4,
        share: 1,
      },
      press: {
        reply: false,
        favorite: false,
        share: false,
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
    state.postData[pressedIndex].press[pressedData.name] = !state.postData[pressedIndex].press[pressedData.name];
  }
}