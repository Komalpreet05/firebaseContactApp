// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCj96BRfNM7Tga98S2yl3Muao3tW5UZfug",
    authDomain: "vite-contact-d98ee.firebaseapp.com",
    projectId: "vite-contact-d98ee",
    storageBucket: "vite-contact-d98ee.appspot.com",
    messagingSenderId: "730572587672",
    appId: "1:730572587672:web:3e765755254702967bc6ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);