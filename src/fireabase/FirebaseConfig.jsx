// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU6vvpS2iUqHLcfkLXEtXoY8EhI62Hvfc",
  authDomain: "first-firebase-c2ae3.firebaseapp.com",
  projectId: "first-firebase-c2ae3",
  storageBucket: "first-firebase-c2ae3.appspot.com",
  messagingSenderId: "698505128389",
  appId: "1:698505128389:web:3ef0e41c76b8996f7c03ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}