// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATa5dNATqL-DtVe31yMdoXJvs9M6FP39I",
  authDomain: "eco-adventures-9.firebaseapp.com",
  projectId: "eco-adventures-9",
  storageBucket: "eco-adventures-9.firebasestorage.app",
  messagingSenderId: "91666908847",
  appId: "1:91666908847:web:5201ad96db51e8b446365a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;