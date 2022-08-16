import firebase, { initializeApp } from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyADJQR-uJx_bczdWhMuubnGKK-qza2ouTo",
  authDomain: "abbouds-ropa.firebaseapp.com",
  projectId: "abbouds-ropa",
  storageBucket: "abbouds-ropa.appspot.com",
  messagingSenderId: "183378311205",
  appId: "1:183378311205:web:d6d54506742789332fa7cc",
};

if (!firebase.apps.length) {
  firebase, initializeApp(config);
}

const firestore = firebase.firestore();
export { firestore };

