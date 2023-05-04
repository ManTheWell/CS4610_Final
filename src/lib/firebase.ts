// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwi4nTNRBdFvcNcmCelHKZ-jj30AyeRPo",
  authDomain: "cs4610-final-project-mapsaver.firebaseapp.com",
  projectId: "cs4610-final-project-mapsaver",
  storageBucket: "cs4610-final-project-mapsaver.appspot.com",
  messagingSenderId: "614435212314",
  appId: "1:614435212314:web:be852dc3c19bafebd355a3",
  measurementId: "G-VX24TK3Q2E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);