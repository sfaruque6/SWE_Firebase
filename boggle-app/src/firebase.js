// Import the functions you need from the SDKs you need
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1WdX0EAqdhIpMwZioG8IeTe61XOR4Z8g",
  authDomain: "rqe-d70c5.firebaseapp.com",
  projectId: "rqe-d70c5",
  storageBucket: "rqe-d70c5.appspot.com",
  messagingSenderId: "180990853898",
  appId: "1:180990853898:web:14593054bc2e38ada4f0f3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;