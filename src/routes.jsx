import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Single } from "./pages/Single.jsx";
import injectContext from "./appContext.jsx"; // Asegúrate que la ruta sea correcta

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                {/* Esta línea es la que permite que Single reciba la categoría e ID */}
                <Route element={<Single />} path="/single/:category/:theId" />
                <Route element={<h1>Not found!</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default injectContext(Layout);