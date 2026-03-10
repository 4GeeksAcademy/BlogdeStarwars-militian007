import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../appContext.jsx";

export const Card = ({ item, endpoint }) => {
    const { store, actions } = useContext(Context);
    
    // Esta función es la clave: convierte "Luke Skywalker" en "luke-skywalker"
    const formatName = (name) => name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
    
    // URL corregida para apuntar a la base de datos de imágenes correcta
    const imgUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${endpoint === "people" ? "characters" : endpoint}/${endpoint === "people" ? formatName(item.name) : item.uid}.jpg`;

    return (
        <div className="card bg-dark text-white border-secondary h-100 mx-2 shadow" style={{ minWidth: "18rem" }}>
            <img 
                src={imgUrl} 
                className="card-img-top" 
                style={{ height: "250px", objectFit: "cover" }}
                // Si la imagen no existe en el servidor, ponemos este respaldo
                onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} 
            />
            <div className="card-body d-flex flex-column justify-content-between text-center">
                <h5 className="card-title text-danger fw-bold">{item.name}</h5>
                <div className="d-flex justify-content-between mt-3">
                    <Link to={`/single/${endpoint}/${item.uid}`} className="btn btn-outline-primary">Learn more!</Link>
                    <button 
                        className="btn btn-outline-warning" 
                        onClick={() => actions.add_favorite(item.name)}
                    >
                        <i className={store.favorites.includes(item.name) ? "fas fa-heart" : "far fa-heart"}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};