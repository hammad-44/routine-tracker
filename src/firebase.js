
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB65KiC7lE31ldkrg5Jd8FYCFD0JWE8KII",
  authDomain: "routine-tracker-f3c11.firebaseapp.com",
  projectId: "routine-tracker-f3c11",
  storageBucket: "routine-tracker-f3c11.appspot.com",
  messagingSenderId: "754491866277",
  appId: "1:754491866277:web:9093e9cc10b13f0a6d614c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}