// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKRjUoV44tjCejV6xIWSF5oOEKQ4QZpLg",
  authDomain: "instagram-clone-d1811.firebaseapp.com",
  projectId: "instagram-clone-d1811",
  storageBucket: "instagram-clone-d1811.appspot.com",
  messagingSenderId: "130494163604",
  appId: "1:130494163604:web:9c26b61c6900b0236ca281",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
