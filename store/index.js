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
    desc: '',
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
    });
  },
  setPostData(state, data) {
    if(state.postData.length >= 100) {
      state.postData.splice(0, 1);
    }
    let result = -1;
    state.postData.forEach((dataPost, index) => {
      if(dataPost.id === data.id) {
        result = index;
      }
    });
    if(result !== -1) {
      state.postData.splice(result, 1, data)
    } else {
      state.postData.splice(0, 0, data);
    }
  },
  resetPostData(state) {
    state.postData = [];
  },
  setLoginInfo(state, value) {
    state.userData.uid = value.uid;
    state.userData.name = value.name;
    state.userData.avatar = value.avatar;
    state.userData.desc = value.desc;
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
    const db = firebase.firestore()
    commit('resetPostData');
    db.collection("post").orderBy('createdAt').onSnapshot((querySnapshot) => {
        const post = [];
        querySnapshot.docChanges().forEach((changes, index) => {
          const data = changes.doc.data();
          post.push({
            uid: data.uid,
            id: changes.doc.id,
            src: data.src,
            name: data.name,
            press: data.press,
            // pressedCount: data.pressedCount,
            text: data.text,
            createdAt: data.createdAt
          });
        });
        post.forEach( (data) => {
          commit('setPostData',data);
        } )
      });
  }
}