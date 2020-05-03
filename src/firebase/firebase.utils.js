import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDjPVfTb8Smi68CDW6gTXJvJ3EV60KAzfo",
    authDomain: "ecommerce-52770.firebaseapp.com",
    databaseURL: "https://ecommerce-52770.firebaseio.com",
    projectId: "ecommerce-52770",
    storageBucket: "ecommerce-52770.appspot.com",
    messagingSenderId: "168299645160",
    appId: "1:168299645160:web:a14fa0497aafc318f7e15d",
    measurementId: "G-2L0LK1SW96"
  }

  firebase.initializeApp(config);
  export const firestore = firebase.firestore();
  export const auth = firebase.auth();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () =>auth.signInWithPopup(provider);
  
  export default firebase;