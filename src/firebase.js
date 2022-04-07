import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAftQgelKPTiiVofNrqYq_IUBPW7UfCw00",
  authDomain: "fipugram-9e7db.firebaseapp.com",
  projectId: "fipugram-9e7db",
  storageBucket: "fipugram-9e7db.appspot.com",
  messagingSenderId: "569523346489",
  appId: "1:569523346489:web:69dd74ef34330f426d01e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {firebase}
