
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// //   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
const firebaseConfig = {
    apiKey: "AIzaSyAOqOUk8Is27AFBk2YdFF00uQcVUHOAVxo",
    authDomain: "skillsetgo2.firebaseapp.com",
    projectId: "skillsetgo2",
    storageBucket: "skillsetgo2.appspot.com",
    messagingSenderId: "137974661928",
    appId: "1:137974661928:web:7bc613aa15ee5c7973861d",
    measurementId: "G-WFNJPC3TWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
