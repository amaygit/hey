// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoyCPjSYmWAtlisR1AHuUhq22GzafCCtg",
  authDomain: "imagegen-5b90a.firebaseapp.com",
  projectId: "imagegen-5b90a",
  storageBucket: "imagegen-5b90a.appspot.com",
  messagingSenderId: "622310509965",
  appId: "1:622310509965:web:78b4a56d989b805c0401c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth=getAuth(app)
const Provider=new GoogleAuthProvider()
const db=getFirestore(app)
const storage=getStorage(app)
const API_TOKEN = "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";

export {Auth,Provider,db,storage,API_TOKEN}

