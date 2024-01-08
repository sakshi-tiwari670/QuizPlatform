
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB7w5UwMmuNFzsaooQ2uIhwBm_LuX3Qrd4",
  authDomain: "react-quiz-7c267.firebaseapp.com",
  projectId: "react-quiz-7c267",
  storageBucket: "react-quiz-7c267.appspot.com",
  messagingSenderId: "505486809631",
  appId: "1:505486809631:web:6213250dd3bcadbb15d32a"
};


export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app);