import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people")
            .then(res => res.json())
            .then(data => dispatch({ type: "set_people", payload: data.results }))
            .catch(err => console.error(err));

        fetch("https://www.swapi.tech/api/planets")
            .then(res => res.json())
            .then(data => dispatch({ type: "set_planets", payload: data.results }))
            .catch(err => console.error(err));

        fetch("https://www.swapi.tech/api/vehicles")
            .then(res => res.json())
            .then(data => dispatch({ type: "set_vehicles", payload: data.results }))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container-fluid mt-5 px-5">
            <h1 className="text-danger fw-bold mb-4 mt-5">Characters</h1>
            <div className="d-flex flex-row flex-nowrap overflow-auto pb-4 custom-scrollbar">
                {store.people && store.people.map((item) => (
                    <div key={item.uid} className="me-4">
                        <Card item={item} endpoint="people" />
                    </div>
                ))}
            </div>

            <h1 className="text-danger fw-bold mb-4 mt-5">Planets</h1>
            <div className="d-flex flex-row flex-nowrap overflow-auto pb-4 custom-scrollbar">
                {store.planets && store.planets.map((item) => (
                    <div key={item.uid} className="me-4">
                        <Card item={item} endpoint="planets" />
                    </div>
                ))}
            </div>
        </div>
    );
};