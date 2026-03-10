import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../appContext.jsx";

export const Card = ({ item, category }) => {
    const { store, actions } = useContext(Context);

    // --- LÓGICA DE IMAGEN IGUAL A LA DEL SINGLE ---
    // Usamos 'people' para personajes y la categoría original para el resto.
    // Usamos item.uid porque es el número que el servidor reconoce.
    const folder = category === "people" ? "people" : category;
    const imgUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${folder}/${item.uid}.jpg`;

    return (
        <div className="card bg-dark text-white m-2 shadow" style={{ minWidth: "18rem", border: "1px solid #333" }}>
            <img 
                src={imgUrl} 
                className="card-img-top" 
                alt={item.name}
                style={{ height: "250px", objectFit: "cover" }}
                onError={(e) => {
                    // Evitamos parpadeos: si falla, ponemos el placeholder y paramos
                    e.target.onerror = null; 
                    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }} 
            />
            <div className="card-body">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <div className="d-flex justify-content-between mt-4">
                    {/* El link usa item.uid para que el Single sepa qué ID cargar */}
                    <Link to={`/single/${category}/${item.uid}`} className="btn btn-outline-primary">
                        Learn more!
                    </Link>
                    <button 
                        className="btn btn-outline-warning" 
                        onClick={() => actions.add_favorite(item.name)}
                    >
                        <i className={`${store.favorites?.includes(item.name) ? "fas" : "far"} fa-heart`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};