import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <nav className="navbar navbar-dark bg-dark mb-3 px-5 border-bottom border-secondary">
            <Link to="/">
                <img 
                    src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG34.png" 
                    alt="Star Wars Logo" 
                    style={{ width: "80px" }} 
                />
            </Link>

            <div className="ml-auto">
                <div className="dropdown">
                    <button 
                        className="btn btn-primary dropdown-toggle" 
                        type="button" 
                        id="dropdownMenuButton1" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        Favorites <span className="badge bg-secondary ms-1">{store.favorites.length}</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end bg-dark border-secondary" aria-labelledby="dropdownMenuButton1">
                        {store.favorites.length === 0 ? (
                            <li className="dropdown-item text-white text-center">Empty</li>
                        ) : (
                            store.favorites.map((fav, index) => (
                                <li key={index} className="dropdown-item text-white d-flex justify-content-between align-items-center">
                                    <span>{fav}</span>
                                    <i 
                                        className="fas fa-trash text-danger ms-3" 
                                        style={{ cursor: "pointer" }}
                                        onClick={() => dispatch({ type: "remove_favorite", payload: fav })}
                                    ></i>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};