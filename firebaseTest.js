// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/compat/firestore";
// import firestore from '@react-native-firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa9Xv1bxWA4oSNQrInosc5-OlFsOGuGKU",
  authDomain: "instagram-clone-rn-575d6.firebaseapp.com",
  projectId: "instagram-clone-rn-575d6",
  storageBucket: "instagram-clone-rn-575d6.appspot.com",
  messagingSenderId: "565205886001",
  appId: "1:565205886001:web:77a36accb502f31d4ce110"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
!firebase.apps.length? firebase.initializeApp(firebaseConfig): firebase.app()

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export  {firebase, db}