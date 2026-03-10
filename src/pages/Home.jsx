import React, { useContext, useEffect } from "react";
import { Context } from "../appContext.jsx"; // Ruta según tu árbol de archivos
import { Card } from "../components/Card.jsx";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // Pedimos los datos solo una vez para evitar el parpadeo infinito
        actions.getStarWarsData("people");
        actions.getStarWarsData("planets");
        actions.getStarWarsData("vehicles");
    }, []); // IMPORTANTE: No quites estos corchetes

    return (
        <div className="container mt-5 pb-5">
            <h1 className="text-danger mb-4">Characters</h1>
            <div className="d-flex flex-row overflow-auto mb-5 pb-3 border-bottom border-secondary">
                {store.people && store.people.length > 0 ? (
                    store.people.map((person) => (
                        <Card key={person.uid} item={person} category="people" />
                    ))
                ) : (
                    <div className="spinner-border text-danger" role="status"></div>
                )}
            </div>

            <h1 className="text-danger mb-4">Planets</h1>
            <div className="d-flex flex-row overflow-auto mb-5 pb-3 border-bottom border-secondary">
                {store.planets && store.planets.length > 0 ? (
                    store.planets.map((planet) => (
                        <Card key={planet.uid} item={planet} category="planets" />
                    ))
                ) : (
                    <div className="spinner-border text-danger" role="status"></div>
                )}
            </div>

            <h1 className="text-danger mb-4">Vehicles</h1>
            <div className="d-flex flex-row overflow-auto pb-3">
                {store.vehicles && store.vehicles.length > 0 ? (
                    store.vehicles.map((vehicle) => (
                        <Card key={vehicle.uid} item={vehicle} category="vehicles" />
                    ))
                ) : (
                    <div className="spinner-border text-danger" role="status"></div>
                )}
            </div>
        </div>
    );
};