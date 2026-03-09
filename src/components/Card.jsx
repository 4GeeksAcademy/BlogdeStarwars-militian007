import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Card = ({ item, endpoint }) => {
    const { store, dispatch } = useGlobalReducer();
    const errorCount = useRef(0);

    
    const idFromUrl = item.url ? item.url.split("/").filter(Boolean).pop() : item.uid;
    const folder = endpoint === "people" ? "characters" : endpoint;
    
    const [imgSource, setImgSource] = useState(`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/guides/${folder}/${idFromUrl}.jpg`);

    useEffect(() => {
        setImgSource(`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/guides/${folder}/${idFromUrl}.jpg`);
        errorCount.current = 0;
    }, [idFromUrl, folder]);

    const handleImgError = () => {
        if (errorCount.current === 0) {
            errorCount.current = 1;
            setImgSource(`https://starwars-visualguide.com/assets/img/${folder}/${idFromUrl}.jpg`);
        } else if (errorCount.current === 1) {
            errorCount.current = 2;
            setImgSource("https://starwars-visualguide.com/assets/img/placeholder.jpg");
        }
    };

    const isFavorite = store.favorites.includes(item.name);

    return (
        <div className="card bg-dark text-white border-secondary h-100 shadow" style={{ minWidth: "18rem", maxWidth: "18rem" }}>
            <img 
                src={imgSource} 
                className="card-img-top" 
                alt={item.name} 
                onError={handleImgError}
                style={{ height: "250px", objectFit: "cover", objectPosition: "top" }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-danger fw-bold">{item.name}</h5>
                <div className="d-flex justify-content-between mt-3">
                    <Link to={`/single/${idFromUrl}`} className="btn btn-outline-primary px-3">
                        Learn more!
                    </Link>
                    <button 
                        className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={() => dispatch({ type: "add_favorite", payload: item.name })}
                    >
                        <i className={`${isFavorite ? "fas" : "far"} fa-heart`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};