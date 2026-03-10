import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const Single = () => {
    const { category, theId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Hacemos el fetch a la API según la categoría y el ID de la URL
        fetch(`https://www.swapi.tech/api/${category}/${theId}`)
            .then(res => res.json())
            .then(data => {
                if (data.result && data.result.properties) {
                    setItem(data.result.properties);
                }
            })
            .catch(err => console.error("Error al cargar detalles:", err));
    }, [category, theId]);

    if (!item) return <h1 className="text-center text-white mt-5">Cargando datos de la galaxia...</h1>;

    // Configuración de la imagen: carpeta 'people' para personajes, el resto igual
    const folder = category === "people" ? "people" : category;
    const imgUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${folder}/${theId}.jpg`;

    return (
        <div className="container mt-5 mb-5">
            {/* SECCIÓN SUPERIOR: IMAGEN Y DESCRIPCIÓN */}
            <div className="row bg-dark text-white p-4 border-0 shadow-lg rounded" style={{ backgroundColor: "rgba(33, 37, 41, 0.9)" }}>
                <div className="col-md-6 text-center">
                    <img 
                        src={imgUrl} 
                        className="img-fluid rounded shadow" 
                        alt={item.name}
                        style={{ maxHeight: "450px", objectFit: "contain" }}
                        onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }} 
                    />
                </div>
                <div className="col-md-6 text-center d-flex flex-column justify-content-center px-4">
                    <h1 className="text-danger display-3 fw-bold mb-4">{item.name}</h1>
                    <p className="fs-5 lh-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                        dicta sunt explicabo. Un elemento icónico de la saga Star Wars.
                    </p>
                </div>
            </div>

            {/* SECCIÓN INFERIOR: DETALLES TÉCNICOS (ROJO Y BLANCO) */}
            <div className="row mt-4 bg-dark text-white p-4 rounded shadow-lg text-center border-top border-danger pt-4 fw-bold" style={{ backgroundColor: "rgba(33, 37, 41, 0.9)" }}>
                
                {/* Nombre siempre visible */}
                <div className="col-md-2 mb-3">
                    <span className="text-danger">Name</span><br/>
                    <span className="text-white fw-normal">{item.name}</span>
                </div>

                {/* DETALLES DE PERSONAJES */}
                {category === "people" && (
                    <>
                        <div className="col-md-2 mb-3"><span className="text-danger">Birth Year</span><br/><span className="fw-normal">{item.birth_year}</span></div>
                        <div className="col-md-2 mb-3"><span className="text-danger">Gender</span><br/><span className="fw-normal">{item.gender}</span></div>
                        <div className="col-md-2 mb-3"><span className="text-danger">Height</span><br/><span className="fw-normal">{item.height}</span></div>
                        <div className="col-md-2 mb-3"><span className="text-danger">Skin Color</span><br/><span className="fw-normal">{item.skin_color}</span></div>
                        <div className="col-md-2 mb-3"><span className="text-danger">Eye Color</span><br/><span className="fw-normal">{item.eye_color}</span></div>
                    </>
                )}

                {/* DETALLES DE PLANETAS */}
                {category === "planets" && (
                    <>
                        <div className="col-md-2 mb-3"><span className="text-danger">Climate</span><br/><span className="fw-normal">{item.climate}</span></div>
                        <div className="col-md-2 mb-3"><span className="text-danger">Population</span><br/><span className="fw-normal">{item.population}</span></div>
                        <div className="col-md-2 mb-3"><span className="text-danger">Orbital Period</span><br/><span className="fw-normal">{item.orbital_period}</span></div>
                        <div className="col-md-2 mb-3"><span className="text-danger">Rotation Period</span><br/><span className="fw-normal">{item.rotation_period}</span></div>
                        <div className="col-md-2 mb-3"><span className="text-danger">Diameter</span><br/><span className="fw-normal">{item.diameter}</span></div>
                    </>
                )}

                {/* DETALLES DE VEHÍCULOS / NAVES (CORREGIDO) */}
                {category === "vehicles" && (
                    <>
                        <div className="col-md-2 mb-3"><span className="text-danger">Model</span><br/><span className="fw-normal">{item.model}</span></div>
                        <div className="col-md-2 mb-3"><span className="text-danger">Class</span><br/><span className="fw-normal">{item.vehicle_class}</span></div>
                        <div className="col-md-2 mb-3"><span className="text-danger">Manufacturer</span><br/><span className="fw-normal">{item.manufacturer}</span></div>
                        <div className="col-md-2 mb-3"><span className="text-danger">Cost</span><br/><span className="fw-normal">{item.cost_in_credits}</span></div>
                        <div className="col-md-2 mb-3"><span className="text-danger">Speed</span><br/><span className="fw-normal">{item.max_atmosphering_speed}</span></div>
                        <div className="col-md-2 mb-3"><span className="text-danger">Length</span><br/><span className="fw-normal">{item.length}</span></div>
                    </>
                )}
            </div>

            <div className="text-center mt-5">
                <Link to="/" className="btn btn-outline-danger px-5 py-2 shadow-lg fw-bold">
                    BACK TO HOME
                </Link>
            </div>
        </div>
    );
};