// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDq3ASM5eSAdvR0iLGQC0xuCdyWt2YlB2w",
  authDomain: "miniwageringgameapp-4f3d4.firebaseapp.com",
  projectId: "miniwageringgameapp-4f3d4",
  storageBucket: "miniwageringgameapp-4f3d4.appspot.com",
  messagingSenderId: "585489286851",
  appId: "1:585489286851:android:84d64c3ba383e274e9c476"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
