import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBQ-RECC2z7fvNWl00pPkghb2AgQ2sIIyE",
    authDomain: "portfolio-afbbf.firebaseapp.com",
    projectId: "portfolio-afbbf",
    storageBucket: "portfolio-afbbf.appspot.com",
    messagingSenderId: "383812689502",
    appId: "1:383812689502:web:2ccdb5510018a6c2fe1ecf",
    measurementId: "G-639QYQT0G2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);