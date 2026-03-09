import React, { useReducer, useContext, createContext } from "react";
import storeReducer, { initialStore } from "../store.js";

const Context = createContext();

export const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(storeReducer, initialStore());
    return (
        <Context.Provider value={{ store, dispatch }}>
            {children}
        </Context.Provider>
    );
};

const useGlobalReducer = () => useContext(Context);

export default useGlobalReducer;