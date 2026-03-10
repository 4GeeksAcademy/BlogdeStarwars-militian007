const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Función para cargar los datos iniciales de la Home
			getStarWarsData: async (endpoint) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/${endpoint}`);
					const data = await response.json();
					setStore({ [endpoint]: data.results });
				} catch (error) {
					console.error("Error cargando " + endpoint, error);
				}
			},

			// Función para gestionar favoritos
			add_favorite: (name) => {
				const store = getStore();
				if (store.favorites.includes(name)) {
					setStore({ favorites: store.favorites.filter((fav) => fav !== name) });
				} else {
					setStore({ favorites: [...store.favorites, name] });
				}
			}
		}
	};
};

export default getState;