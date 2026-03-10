const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [], // Mantenemos la lista de vehículos
			favorites: []
		},
		actions: {
			set_data: (endpoint, data) => {
				const store = getStore();
				setStore({ ...store, [endpoint]: data });
			},
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