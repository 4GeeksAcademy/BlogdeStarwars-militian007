import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
import injectContext from "../appContext.jsx";

const Layout = () => {
    return (
        <div className="d-flex flex-column h-100 bg-dark text-white">
            <Navbar />
            <div className="container-fluid flex-grow-1 mt-5">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

// Aquí inyectamos el contexto a toda la aplicación
export default injectContext(Layout);