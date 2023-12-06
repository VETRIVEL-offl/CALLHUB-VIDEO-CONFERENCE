
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAEpmjMwQi9LkI_6nzMBcgV5dmwbslHdK8",
  authDomain: "callhub-9c3d5.firebaseapp.com",
  projectId: "callhub-9c3d5",
  storageBucket: "callhub-9c3d5.appspot.com",
  messagingSenderId: "638064224329",
  appId: "1:638064224329:web:aa4cb2138eadbc2c5ef798",
  measurementId: "G-J5951JL4LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB,"users");
export const meetingsRef = collection(firebaseDB, "meetings");
