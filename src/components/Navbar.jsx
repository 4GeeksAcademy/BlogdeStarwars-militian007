import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../appContext.jsx"; 

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-dark bg-black mb-3 px-5 py-2 border-bottom border-secondary shadow">
            <div className="container-fluid">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    
                    <div style={{
                        color: 'black',
                        fontSize: '40px',
                        fontWeight: '900',
                        letterSpacing: '-2px',
                        WebkitTextStroke: '1.5px #FFE81F', 
                        fontFamily: 'sans-serif',
                        lineHeight: '0.9'
                    }}>
                        STAR<br/>WARS
                    </div>
                </Link>
                
                <div className="ml-auto">
                    <div className="dropdown">
                        <button 
                            className="btn btn-primary dropdown-toggle fw-bold" 
                            type="button" 
                            data-bs-toggle="dropdown" 
                        >
                            Favorites 
                            <span className="badge bg-danger ms-2">{store.favorites.length}</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end bg-dark border border-secondary">
                            {store.favorites.length === 0 ? (
                                <li className="dropdown-item text-white text-center py-2">(Empty)</li>
                            ) : (
                                store.favorites.map((fav, index) => (
                                    <li key={index} className="dropdown-item d-flex justify-content-between align-items-center text-white border-bottom border-secondary py-2">
                                        <span>{fav}</span>
                                        <i 
                                            className="fas fa-trash-alt text-danger ms-3" 
                                            style={{ cursor: "pointer" }}
                                            onClick={() => actions.add_favorite(fav)}
                                        ></i>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};