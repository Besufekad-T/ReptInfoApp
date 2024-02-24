// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGz5zkIa4wnj5i3TVwG_eDUF8WfbbV1cA",
  authDomain: "reptinfo-e1dbd.firebaseapp.com",
  projectId: "reptinfo-e1dbd",
  storageBucket: "reptinfo-e1dbd.appspot.com",
  messagingSenderId: "950487379870",
  appId: "1:950487379870:web:7c3ec3d5260f498ab9308f",
};

// Initialize Firebase
export const Firebase_app = initializeApp(firebaseConfig);
export const Firebase_auth= getAuth(Firebase_app)

export const db = getFirestore(Firebase_app);
