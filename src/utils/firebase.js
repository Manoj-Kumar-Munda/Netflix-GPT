// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxrfTnAxCTwjdJwTrEKEWx7BIecH2L-Tw",
  authDomain: "netflixgpt-ea287.firebaseapp.com",
  projectId: "netflixgpt-ea287",
  storageBucket: "netflixgpt-ea287.appspot.com",
  messagingSenderId: "262604029983",
  appId: "1:262604029983:web:ee7ab5d7830c33d3b2152a",
  measurementId: "G-9HKDQWJKTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()