import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";

export const Single = () => {
    const { theId } = useParams();
    const [item, setItem] = useState(null);
    const [type, setType] = useState(""); 
    const [loading, setLoading] = useState(true);
    const [imgSource, setImgSource] = useState("");
    const errorCount = useRef(0);

    useEffect(() => {
        const getDetails = async () => {
            setLoading(true);
            errorCount.current = 0;
            const endpoints = ["people", "planets", "vehicles"];
            
            for (let endpoint of endpoints) {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/${endpoint}/${theId}`);
                    const data = await response.json();
                    if (data.message === "ok") {
                        setItem(data.result);
                        setType(endpoint);
                        const folder = endpoint === "people" ? "characters" : endpoint;
                        setImgSource(`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/guides/${folder}/${theId}.jpg`);
                        setLoading(false);
                        return; 
                    }
                } catch (error) { console.error(error); }
            }
            setLoading(false);
        };
        getDetails();
    }, [theId]);

    if (loading) return <div className="text-center mt-5 text-white py-5"><h3>Consultando archivos de la República...</h3></div>;
    if (!item) return <div className="text-center mt-5 text-white">No encontrado</div>;

    const { properties } = item;

    return (
        <div className="container p-5 mt-5 rounded shadow-lg text-white" style={{ backgroundColor: "rgba(20, 20, 20, 0.85)", border: "1px solid #444" }}>
            <div className="row">
                <div className="col-md-6 text-center">
                    <img 
                        src={imgSource} 
                        onError={() => setImgSource("https://starwars-visualguide.com/assets/img/placeholder.jpg")}
                        className="img-fluid rounded border border-secondary shadow" 
                        alt={properties.name} 
                    />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-3 text-danger fw-bold">{properties.name}</h1>
                    <p className="fs-5 text-secondary">ID de Registro: {theId}</p>
                </div>
            </div>

            <hr className="my-5 border-danger" />

            <div className="row text-center text-danger fw-bold gy-4">
                {type === "people" && (
                    <>
                        <div className="col-6 col-md-2 border-end border-secondary">Birth Year<br/><span className="text-white fw-normal">{properties.birth_year}</span></div>
                        <div className="col-6 col-md-2 border-end border-secondary">Gender<br/><span className="text-white fw-normal">{properties.gender}</span></div>
                        <div className="col-6 col-md-2 border-end border-secondary">Height<br/><span className="text-white fw-normal">{properties.height}</span></div>
                        <div className="col-6 col-md-2 border-end border-secondary">Mass<br/><span className="text-white fw-normal">{properties.mass}</span></div>
                        <div className="col-6 col-md-2 border-end border-secondary">Eye Color<br/><span className="text-white fw-normal">{properties.eye_color}</span></div>
                        <div className="col-6 col-md-2">Skin Color<br/><span className="text-white fw-normal">{properties.skin_color}</span></div>
                    </>
                )}
                {type === "planets" && (
                    <>
                        <div className="col-6 col-md-2 border-end border-secondary">Climate<br/><span className="text-white fw-normal">{properties.climate}</span></div>
                        <div className="col-6 col-md-2 border-end border-secondary">Population<br/><span className="text-white fw-normal">{properties.population}</span></div>
                        <div className="col-6 col-md-2 border-end border-secondary">Diameter<br/><span className="text-white fw-normal">{properties.diameter}</span></div>
                        <div className="col-6 col-md-2 border-end border-secondary">Terrain<br/><span className="text-white fw-normal">{properties.terrain}</span></div>
                        <div className="col-6 col-md-2 border-end border-secondary">Gravity<br/><span className="text-white fw-normal">{properties.gravity}</span></div>
                        <div className="col-6 col-md-2">Rotation<br/><span className="text-white fw-normal">{properties.rotation_period}</span></div>
                    </>
                )}
            </div>

            <div className="mt-5">
                <Link to="/" className="btn btn-outline-danger px-4">Volver al Inicio</Link>
            </div>
        </div>
    );
};