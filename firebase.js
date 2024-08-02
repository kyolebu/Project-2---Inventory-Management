// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0oKg7eWb09c4MEtLhyOzjy4iyy3vmrW4",
  authDomain: "inventory-management-5b354.firebaseapp.com",
  projectId: "inventory-management-5b354",
  storageBucket: "inventory-management-5b354.appspot.com",
  messagingSenderId: "405276997941",
  appId: "1:405276997941:web:53d446fd2404542192f47c",
  measurementId: "G-FPHCV8YNQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}