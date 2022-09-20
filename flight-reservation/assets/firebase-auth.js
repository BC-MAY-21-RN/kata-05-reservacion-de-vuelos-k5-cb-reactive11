// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgPFuOpLJJptX5Izin1VFDQYFUDVZ8MwA",
  authDomain: "fir-auth-410d1.firebaseapp.com",
  projectId: "fir-auth-410d1",
  storageBucket: "fir-auth-410d1.appspot.com",
  messagingSenderId: "634710085174",
  appId: "1:634710085174:web:389cbc84987913bfa1d297",
};

// Initialize Firebase
let app;

if (firebase.getApps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}

const auth = firebaseAuth.getAuth();

export { auth };
