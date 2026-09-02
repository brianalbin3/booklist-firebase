import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmq3VFPBzF-nFVR1-DA6W8z_0blgaAnB0",
  authDomain: "book-list-with-firebase-620c2.firebaseapp.com",
  projectId: "book-list-with-firebase-620c2",
  storageBucket: "book-list-with-firebase-620c2.firebasestorage.app",
  messagingSenderId: "489699891875",
  appId: "1:489699891875:web:d57010eea4aea9ced23d16"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);