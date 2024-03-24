// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Ap1a2So0d90NmLI-KI6fPBAiX-j35zY",
  authDomain: "realtor-clone-react-9960f.firebaseapp.com",
  projectId: "realtor-clone-react-9960f",
  storageBucket: "realtor-clone-react-9960f.appspot.com",
  messagingSenderId: "984990429118",
  appId: "1:984990429118:web:2e3f8413382d23d23053ef"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()