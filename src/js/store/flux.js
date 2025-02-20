const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
			people: [],
			planets: [],
			starships: [],
			favorites: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			GetPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(respJson => {
						const people = respJson.results;
						setStore({ people: people })
						console.log("people", people)
					})
			},
			GetPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(respuestaJson => {
						const planets = respuestaJson.results;
						setStore({ planets: planets })
						console.log("planets", planets)
					})
			},
			GetStarships: () => {
				fetch("https://www.swapi.tech/api/starships/")
					.then(response => response.json())
					.then(respuestaJson => {
						const starships = respuestaJson.results;
						setStore({ starships: starships })
						console.log("starships", starships)
					})
			},
			toggleFavorite: (uid, name, type) => {
				const store = getStore();
				const favorites = store.favorites;
				const existingFavorite = favorites.find(fav => fav.uid === uid && fav.type === type);
				if (existingFavorite) {
					setStore({
						favorites: favorites.filter(fav => !(fav.uid === uid && fav.type === type))
					});
				}
				else {
					setStore({
						favorites: [...favorites, { uid, name, type }]
					});
				}
			}
		}
	};
};

export default getState;
