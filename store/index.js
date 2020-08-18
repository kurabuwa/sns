import IconUserImg from '~/assets/img/avatar_cat.jpg';
import IconUserSelf from '~/assets/img/avatar_self.jpeg';
import firebase from '~/plugins/firebase';

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const state = () => ({
  iconSelf: IconUserSelf,
  userData: {
    token: 'dummy',
    name: '',
  },
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

export const getters = {
  loginCheck (state) {
    return state.userData.token;
  }
}

export const mutations = {
  setLoginInfo(state, value) {
    state.userData.token = value.uid;
    state.userData.name = value.displayName;
  },
  deleteLoginInfo(state) {
    state.userData.token = '';
    state.userData.name = '';
  },
  pressed(state, pressedData) {
    let pressedIndex;
    state.postData.forEach( (data, index) => {
      if(data.id === pressedData.id) {
        pressedIndex = index;
      }
    })
    if(!state.postData[pressedIndex].press[pressedData.name]) {
      state.postData[pressedIndex].pressedCount[pressedData.name] += 1;
    } else {
      state.postData[pressedIndex].pressedCount[pressedData.name] -= 1;
    }
    state.postData[pressedIndex].press[pressedData.name] = !state.postData[pressedIndex].press[pressedData.name];
  },
}

export const actions = {
  login() {
      firebase.auth().signInWithRedirect(googleProvider);
  }
}