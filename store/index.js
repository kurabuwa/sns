import IconUserImg from '~/assets/img/avatar_cat.jpg';
import IconUserSelf from '~/assets/img/avatar_self.jpeg';
import firebase from '~/plugins/firebase';
import 'firebase/auth';

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const state = () => ({
  iconSelf: IconUserSelf,
  userData: {
    uid: 'dummy',
    name: '',
    avatar: '',
  },
  postData: [],
})

export const getters = {
  loginCheck (state) {
    return state.userData.uid;
  },
  getPostData(state) {
    return state.postData;
  }
}

export const mutations = {
  updateUserData(state, userData) {
    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: userData.name,
      photoURL: userData.avatar,
    }).then((data) => {
      console.log(state.userData);
    });
  },
  setPostData(state, data) {
    state.postData = data;
    console.log('set');
  },
  setLoginInfo(state, value) {
    console.log(value);
    state.userData.uid = value.uid;
    state.userData.name = value.displayName;
    state.userData.avatar = value.photoURL;
  },
  setLoginInfoToken(state, value) {
    state.userData.token = value;
  },
  deleteLoginInfo(state) {
    state.userData.uid = '';
    state.userData.name = '';
    state.userData.token = '';
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
  },
  checkPost({commit, state}) {
    console.log('check');
    const db = firebase.firestore()
    db.collection("post").orderBy('createdAt', "desc").onSnapshot((querySnapshot) => {
        const post = [];
        querySnapshot.forEach((doc, index) => {
          const data = doc.data();
          post.push({
            uid: state.userData.uid,
            id: doc.id,
            src: data.src,
            userName: data.userName,
            press: data.press,
            pressedCount: data.pressedCount,
            text: data.text,
            createdAt: data.createdAt
            });
            console.log(data);
        });
        commit('setPostData',post);
        // console.log('tuoka ');
      });
  }
}