"use client"
import { createContext } from "react";

export const AllContext = createContext();

const Wrapper = ({children}) => {
    const temp = "hello"
    return <AllContext.Provider value={{temp}}>
        {children}
    </AllContext.Provider>
};

export default Wrapper;