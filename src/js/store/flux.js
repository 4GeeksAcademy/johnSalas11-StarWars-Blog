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
			starships: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://www.swapi.tech/api/people/")
				.then(response => response.json())
				.then(respJson => {
					const people = respJson.results;
					setStore({people: people})	
				})

				fetch("https://www.swapi.tech/api/planets/")
				.then(response => response.json())
				.then(respuestaJson => {
					const planets = respuestaJson.results;
					setStore({planets: planets})
				})
				fetch("https://www.swapi.tech/api/starships/")
				.then(response => response.json())
				.then(respuestaJson => {
					const starships = respuestaJson.results;
					setStore({starships: starships})
				})
			},




			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
