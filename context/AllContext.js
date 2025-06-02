"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createContext } from "react";

export const AllContext = createContext();

const Wrapper = ({ children }) => {
    const [category, setCategory] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCategory = localStorage.getItem("category");
            if (storedCategory == null) {
                localStorage.setItem("category", "default");
                router.push("/login");
            } else {
                setCategory(storedCategory);
            }
        }
    }, []);

    const temp = "hello";

    return (
        <AllContext.Provider value={{ temp, category }}>
            {children}
        </AllContext.Provider>
    );
};

export default Wrapper;