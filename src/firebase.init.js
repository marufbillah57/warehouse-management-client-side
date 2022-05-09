// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ujt9Ad1KWHi_R5B_Bq_PcZYzpkhb_OE",
  authDomain: "fruits-warehouse-ba587.firebaseapp.com",
  projectId: "fruits-warehouse-ba587",
  storageBucket: "fruits-warehouse-ba587.appspot.com",
  messagingSenderId: "274467870647",
  appId: "1:274467870647:web:d684224eff0058723dfa32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;