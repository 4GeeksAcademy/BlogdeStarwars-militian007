import React, { useState, createContext } from "react";
import storeReducer, { initialStore } from "./store.js";

export const Context = createContext(null);

const injectContext = PassedComponent => {
    const ContextWrapper = props => {
        const [state, setState] = useState(initialStore());

        const dispatch = (action) => {
            setState(storeReducer(state, action));
        };

        return (
            <Context.Provider value={{ store: state, dispatch }}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return ContextWrapper;
};

export default injectContext;