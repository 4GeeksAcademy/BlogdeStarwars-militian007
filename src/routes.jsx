import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Single } from "./pages/Single.jsx";
import injectContext from "./appContext.jsx"; 
import { Navbar } from "./components/Navbar.jsx";

const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Single />} path="/single/:category/:theId" />
                <Route element={<h1>Not found!</h1>} path="*" />
            </Routes>
        </BrowserRouter>
    );
};

export default injectContext(Layout);