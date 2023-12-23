// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWvxGC2lbptuJurelXiv-u740FJDSpDqc",
  authDomain: "fir-3d763.firebaseapp.com",
  projectId: "fir-3d763",
  storageBucket: "fir-3d763.appspot.com",
  messagingSenderId: "606295971595",
  appId: "1:606295971595:web:5f7eddd889fcf3cee2b40e",
  measurementId: "G-P50K1KSNYC"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db=app.firestore();

export {auth,db};