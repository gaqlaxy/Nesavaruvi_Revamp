import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import productData from "./data/fullProdcuts.json";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
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
