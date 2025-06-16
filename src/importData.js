import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import productData from "./data/fullProdcuts.json";

const firebaseConfig = {
    apiKey: "AIzaSyDTUb1TjHUDKyg4-jZq-KM_bpdSxRLvrJk",
    authDomain: "nesavaruvirevamp.firebaseapp.com",
    projectId: "nesavaruvirevamp",
    storageBucket: "nesavaruvirevamp.firebasestorage.app",
    messagingSenderId: "527349248706",
    appId: "1:527349248706:web:2edcd49566509d8843815b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const uploadProducts = async () => {
    try {
        const productsRef = collection(db, "products");
        for (const item of productData) {
            await addDoc(productsRef, item);
        }
        console.log("All products uploaded successfully!");
    } catch (error) {
        console.error("Upload failed:", error);
    }
};

uploadProducts();