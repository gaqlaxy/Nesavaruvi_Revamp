import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const useCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const products = querySnapshot.docs.map((doc) => doc.data());

            const categoryMap = new Map();

            products.forEach((product) => {
                if (!categoryMap.has(product.category)) {
                    categoryMap.set(product.category, {
                        category: product.category,
                        image: product.image,
                    });
                }
            });

            setCategories(Array.from(categoryMap.values()));
        };

        fetchCategories();
    }, []);

    return categories;
};

export default useCategories;
