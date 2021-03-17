import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAt56o8ULcsX6ss6uCT3FDiUjehniDJp-M',
  authDomain: 'snapchat-clone-853d8.firebaseapp.com',
  projectId: 'snapchat-clone-853d8',
  storageBucket: 'snapchat-clone-853d8.appspot.com',
  messagingSenderId: '206016473815',
  appId: '1:206016473815:web:d37b62baae89c43b255e92',
};

const firbaseApp = firebase.initializeApp(firebaseConfig);
const db = firbaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
