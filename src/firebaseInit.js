// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDil6JWd-ZcjWopxU4diZDsAsE-K5z_Pbk",
    authDomain: "e-commerce-1a16e.firebaseapp.com",
    projectId: "e-commerce-1a16e",
    storageBucket: "e-commerce-1a16e.appspot.com",
    messagingSenderId: "376011111303",
    appId: "1:376011111303:web:18b55f6fcd754fa738b122"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth();

export default db;
export { app, auth };

