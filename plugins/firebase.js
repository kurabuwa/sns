import firebase from 'firebase/app';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyDusOgg1x-xWCdbXD2lSPUocDMjNS8rhGk",
        authDomain: "potrfolio-sns.firebaseapp.com",
        databaseURL: "https://potrfolio-sns.firebaseio.com",
        projectId: "potrfolio-sns",
        storageBucket: "potrfolio-sns.appspot.com",
        messagingSenderId: "755266003477",
        appId: "1:755266003477:web:877ac1d4ad6be316b0241c"
    }
  )
}

export default firebase