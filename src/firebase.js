import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAvX9RONR8_nmKi5q3M26zOTJpF_Unl16o",
    authDomain: "discord-331e2.firebaseapp.com",
    projectId: "discord-331e2",
    storageBucket: "discord-331e2.appspot.com",
    messagingSenderId: "630870928080",
    appId: "1:630870928080:web:65e48ce7fab4edfc2e4cd5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
