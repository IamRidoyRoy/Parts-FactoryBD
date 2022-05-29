// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {

    // apiKey: process.env.REACT_APP_APIKEY,
    // authDomain: process.env.REACT_APP_AUTHDOMAIN,
    // projectId: process.env.REACT_APP_PROJECTID,
    // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    // appId: process.env.REACT_APP_APPID,

    apiKey: "AIzaSyAPmJlK23sUUHcTvCQ6nF2Vkv8Tc6e0qRc",
    authDomain: "bike-parts-factory.firebaseapp.com",
    projectId: "bike-parts-factory",
    storageBucket: "bike-parts-factory.appspot.com",
    messagingSenderId: "634663584100",
    appId: "1:634663584100:web:ac0616246012860f76fa71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;