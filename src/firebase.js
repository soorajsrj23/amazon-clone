
import {initializeApp}from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import  {getAuth,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "",
  authDomain: ".firebaseapp.com",
  projectId: "",
  storageBucket: ".appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: "G-"
};

const app =initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth();
export const provider=new  GoogleAuthProvider();



