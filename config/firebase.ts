import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXEv76J-q8_xdoxplP2l0kKewq-C7ujDM",
  authDomain: "aerozonix.firebaseapp.com",
  databaseURL:
    "https://aerozonix-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aerozonix",
  storageBucket: "aerozonix.appspot.com",
  messagingSenderId: "984380429936",
  appId: "1:984380429936:web:2ea1d7df38586bca3686b5",
  measurementId: "G-GXZPV168EL",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
