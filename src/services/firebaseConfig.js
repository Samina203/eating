import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqlwZKyPytcD85AaKzxewxXQy30A8gpmo",
  authDomain: "eating-d0a18.firebaseapp.com",
  projectId: "eating-d0a18",
  storageBucket: "eating-d0a18.appspot.com",
  messagingSenderId: "165669342035",
  appId: "1:165669342035:web:7e2371180b953f73bc2fa6",
  measurementId: "G-NR9Q1CMGE5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
