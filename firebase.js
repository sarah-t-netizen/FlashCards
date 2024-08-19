// Import the necessary functions from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGD0Eb3UP5zmXYjFtzlbDVINyPFOVOT9U",
  authDomain: "flashcard-saas-9b598.firebaseapp.com",
  projectId: "flashcard-saas-9b598",
  storageBucket: "flashcard-saas-9b598.appspot.com",
  messagingSenderId: "534312962814",
  appId: "1:534312962814:web:483c156ac03a1a8c4473af",
  measurementId: "G-PW57P7Z8Q7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (optional, can be removed if not needed)
const analytics = getAnalytics(app);

export default db;
