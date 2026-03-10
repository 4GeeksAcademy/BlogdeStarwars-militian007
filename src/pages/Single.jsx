import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const Single = () => {
    const { category, theId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://www.swapi.tech/api/${category}/${theId}`)
            .then(res => res.json())
            .then(data => {
                if (data.result) {
                    setItem(data.result);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error:", err);
                setLoading(false);
            });
    }, [category, theId]);

    if (loading) return <div className="text-center mt-5 text-white"><h1>Cargando detalles...</h1></div>;
    if (!item) return <div className="text-center mt-5 text-white"><h1>No se encontró la información</h1></div>;

    const props = item.properties;
    
    // Lógica de imagen única para Single
    const formatName = (name) => name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
    const imgUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${category === "people" ? "characters" : category}/${category === "people" ? formatName(props.name) : theId}.jpg`;

    return (
        <div className="container text-white mt-5">
            {/* Parte superior: Imagen y Descripción */}
            <div className="row bg-dark p-4 rounded shadow-lg border-0">
                <div className="col-md-6 text-center">
                    <img 
                        src={imgUrl} 
                        className="img-fluid rounded" 
                        style={{ maxHeight: "450px", objectFit: "contain", border: "1px solid #444" }}
                        onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} 
                    />
                </div>
                <div className="col-md-6 text-center d-flex flex-column justify-content-center px-4">
                    <h1 className="text-danger display-4 fw-bold mb-4">{props.name}</h1>
                    <p className="fs-5 lh-base">
                        {item.description || "Esta es una entrada detallada de la base de datos de Star Wars. Aquí se recopilan todas las especificaciones técnicas y biográficas de este elemento de la galaxia."}
                    </p>
                </div>
            </div>

            {/* Fila de Detalles Técnicos (Los 6 bloques rojos) */}
            <div className="row mt-5 text-danger text-center border-top border-danger pt-4 fw-bold gx-0">
                <div className="col-md-2 border-end border-danger border-opacity-25">
                    Name<br/><span className="text-white fw-normal d-block mt-2">{props.name}</span>
                </div>

                {category === "people" && (
                    <>
                        <div className="col-md-2 border-end border-danger border-opacity-25">Birth Year<br/><span className="text-white fw-normal d-block mt-2">{props.birth_year}</span></div>
                        <div className="col-md-2 border-end border-danger border-opacity-25">Gender<br/><span className="text-white fw-normal d-block mt-2">{props.gender}</span></div>
                        <div className="col-md-2 border-end border-danger border-opacity-25">Height<br/><span className="text-white fw-normal d-block mt-2">{props.height}</span></div>
                        <div className="col-md-2 border-end border-danger border-opacity-25">Skin Color<br/><span className="text-white fw-normal d-block mt-2">{props.skin_color}</span></div>
                        <div className="col-md-2">Eye Color<br/><span className="text-white fw-normal d-block mt-2">{props.eye_color}</span></div>
                    </>
                )}

                {category === "planets" && (
                    <>
                        <div className="col-md-2 border-end border-danger border-opacity-25">Climate<br/><span className="text-white fw-normal d-block mt-2">{props.climate}</span></div>
                        <div className="col-md-2 border-end border-danger border-opacity-25">Population<br/><span className="text-white fw-normal d-block mt-2">{props.population}</span></div>
                        <div className="col-md-2 border-end border-danger border-opacity-25">Orbital Period<br/><span className="text-white fw-normal d-block mt-2">{props.orbital_period}</span></div>
                        <div className="col-md-2 border-end border-danger border-opacity-25">Rotation Period<br/><span className="text-white fw-normal d-block mt-2">{props.rotation_period}</span></div>
                        <div className="col-md-2">Diameter<br/><span className="text-white fw-normal d-block mt-2">{props.diameter}</span></div>
                    </>
                )}

                {category === "vehicles" && (
                    <>
                        <div className="col-md-2 border-end border-danger border-opacity-25">Model<br/><span className="text-white fw-normal d-block mt-2">{props.model}</span></div>
                        <div className="col-md-2 border-end border-danger border-opacity-25">Class<br/><span className="text-white fw-normal d-block mt-2">{props.vehicle_class}</span></div>
                        <div className="col-md-2 border-end border-danger border-opacity-25">Manufacturer<br/><span className="text-white fw-normal d-block mt-2">{props.manufacturer}</span></div>
                        <div className="col-md-2 border-end border-danger border-opacity-25">Cost<br/><span className="text-white fw-normal d-block mt-2">{props.cost_in_credits}</span></div>
                        <div className="col-md-2">Length<br/><span className="text-white fw-normal d-block mt-2">{props.length}</span></div>
                    </>
                )}
            </div>

            <div className="text-center mt-5 mb-5">
                <Link to="/" className="btn btn-outline-danger px-5 py-2">Back to home</Link>
            </div>
        </div>
    );
};