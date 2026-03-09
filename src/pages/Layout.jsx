import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop.jsx";

import { Home } from "./Home.jsx";
import { Single } from "./Single.jsx";
import { Demo } from "./Demo.jsx";
import injectContext from "../appContext.jsx";

import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";

const Layout = () => {
    
    return (
        <div className="d-flex flex-column h-100">
            <BrowserRouter>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theId" />
                        <Route element={<h1 className="text-center mt-5 text-white">Not found!</h1>} path="*" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);