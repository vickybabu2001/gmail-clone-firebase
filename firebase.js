 
//import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseconfig = {
  apiKey: "AIzaSyDolJPh3QMx9SlGwZ5DVRUDgHUBd1LqyS0",
  authDomain: "clone-d87ba.firebaseapp.com",
  projectId: "clone-d87ba",
  storageBucket: "clone-d87ba.appspot.com",
  messagingSenderId: "3429571463",
  appId: "1:3429571463:web:62765dae4e448af1685122"
};
const app=initializeApp(firebaseconfig);
const db=Firestore(app);
export default db;

 
 

 