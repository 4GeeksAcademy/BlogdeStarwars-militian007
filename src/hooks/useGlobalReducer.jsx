import { useContext } from "react";
import { Context } from "../appContext.jsx";

const useGlobalReducer = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useGlobalReducer debe ser usado dentro de un StoreProvider o Context.Provider");
    }
    return context;
};

export default useGlobalReducer;