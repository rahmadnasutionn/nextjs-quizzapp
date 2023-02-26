// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: "nextjs-quiz-app-507ee",
  storageBucket: "nextjs-quiz-app-507ee.appspot.com",
  messagingSenderId: "413428842611",
  appId: "1:413428842611:web:e736d46988c5bb974cea06",
  measurementId: "G-6ESCPJBC5Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()