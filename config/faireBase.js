import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA98JHyKkmbdBi9IcNwzRlWNCFzpFOZSeI",
  authDomain: "expensify-d92ea.firebaseapp.com",
  projectId: "expensify-d92ea",
  storageBucket: "expensify-d92ea.appspot.com",
  messagingSenderId: "558070090101",
  appId: "1:558070090101:web:ff5a479554f5b233faeb3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); // Fix the typo here
export const auth = getAuth(app);
export const tripsRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');
export default app;
