import React, { useEffect, useContext } from "react";
import { Context } from "../appContext.jsx";
import { Card } from "../components/Card.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		const fetchData = async (endpoint) => {
			try {
				const response = await fetch(`https://www.swapi.tech/api/${endpoint}`);
				const data = await response.json();
				// Guardamos los datos usando la acción set_data para evitar errores de dispatch
				actions.set_data(endpoint, data.results || data.result);
			} catch (error) {
				console.error("Error cargando " + endpoint, error);
			}
		};

		if (store.people.length === 0) fetchData("people");
		if (store.planets.length === 0) fetchData("planets");
		if (store.vehicles.length === 0) fetchData("vehicles");
	}, []);

	return (
		<div className="container-fluid bg-black text-white min-vh-100 p-5">
			<h1 className="text-danger fw-bold mb-4">Characters</h1>
			<div className="d-flex flex-row overflow-auto pb-4 mb-5">
				{store.people.map((p) => <Card key={p.uid} item={p} endpoint="people" />)}
			</div>

			<h1 className="text-danger fw-bold mb-4">Planets</h1>
			<div className="d-flex flex-row overflow-auto pb-4 mb-5">
				{store.planets.map((pl) => <Card key={pl.uid} item={pl} endpoint="planets" />)}
			</div>

			{/* SECCIÓN RECUPERADA: Vehicles */}
			<h1 className="text-danger fw-bold mb-4">Vehicles</h1>
			<div className="d-flex flex-row overflow-auto pb-4">
				{store.vehicles.map((v) => <Card key={v.uid} item={v} endpoint="vehicles" />)}
			</div>
		</div>
	);
};