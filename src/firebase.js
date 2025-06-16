import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace these with your actual config values from Firebase Console

const firebaseConfig = {
    apiKey: "AIzaSyDTUb1TjHUDKyg4-jZq-KM_bpdSxRLvrJk",
    authDomain: "nesavaruvirevamp.firebaseapp.com",
    projectId: "nesavaruvirevamp",
    storageBucket: "nesavaruvirevamp.firebasestorage.app",
    messagingSenderId: "527349248706",
    appId: "1:527349248706:web:2edcd49566509d8843815b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);


