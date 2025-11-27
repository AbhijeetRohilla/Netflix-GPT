// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAtSZcAd9Gbw-Dg7DrnbQGKQAaqIrWXzo",
  authDomain: "netflixgpt-41224.firebaseapp.com",
  projectId: "netflixgpt-41224",
  storageBucket: "netflixgpt-41224.firebasestorage.app",
  messagingSenderId: "1006106392544",
  appId: "1:1006106392544:web:d5558ba8a3adbcc6ab5d85",
  measurementId: "G-R2G1M2PH7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);