import React, { use, useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import People from "../component/people.js";
import Planets from "../component/planets.js";
import Vehicles from "../component/vehicles.js";


export const Home = () => {

	const { store, actions } = useContext(Context);

	const charactersImg = {
		"Luke Skywalker": "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796",
		"C-3PO": "https://www.gamereactor.es/media/70/light_upc_3pohead_4357033_650x.jpg",
		"R2-D2": "https://i.blogs.es/6de2fa/r2d2/1366_2000.webp",
		"Darth Vader": "https://imagenes.cadena100.es/files/og_thumbnail/uploads/2024/09/20/66ed7d3989217.jpeg",
		"Leia Organa": "https://cinepremiere.com.mx/wp-content/uploads/2020/06/Leia-Organa-Star-Wars--1024x559.jpg",
		"Owen Lars": "https://images2.minutemediacdn.com/image/upload/c_crop,x_762,y_0,w_2847,h_1601/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/ImageExchange/mmsport/319/01j042f763qcer531j30.jpg",
		"Beru Whitesun lars": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgAqKX72ZgFxo2DihDl89cGLdXep_nc25g1A&s",
		"R5-D4": "https://static.wikia.nocookie.net/star-wars-canon-extended/images/2/23/R5.jpg/revision/latest/scale-to-width-down/374?cb=20160123232521",
		"Biggs Darklighter": "https://i.insider.com/555219ca6bb3f7a502baac2c?width=700",
		"Obi-Wan Kenobi": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/12/obi-wan-kenobi.jpg?fit=2052%2C1155&quality=50&strip=all&ssl=1"
	}
	const PlanetsImg = {
		"Tatooine": "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357",
		"Alderaan": "https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830",
		"Yavin IV": "https://static.wikia.nocookie.net/esstarwars/images/d/d4/Yavin-4-SWCT.png/revision/latest?cb=20170924222729",
		"Hoth": "https://static.wikia.nocookie.net/esstarwars/images/8/81/Hoth_AoRCR.png/revision/latest?cb=20220720013233",
		"Dagobah": "https://static.wikia.nocookie.net/esstarwars/images/1/1c/Dagobah.jpg/revision/latest?cb=20061117132132",
		"Bespin": "https://static.wikia.nocookie.net/esstarwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170527220537",
		"Endor": "https://static.wikia.nocookie.net/esstarwars/images/e/e5/Endor-SWCT.png/revision/latest?cb=20170629180854",
		"Naboo": "https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190928214307",
		"Coruscant": "https://static.wikia.nocookie.net/esstarwars/images/1/16/Coruscant-EotE.jpg/revision/latest?cb=20221030195452",
		"Kamino": "https://static.wikia.nocookie.net/esstarwars/images/a/a9/Eaw_Kamino.jpg/revision/latest?cb=20210616005549"
	}
	const StarshipsImg = {
		"CR90 corvette": "https://lh4.googleusercontent.com/proxy/eoTL6ht_11pN5wTt3-CpHi6VaSloShUzYfB4dqpgWHxOA63koNMZ9NBKDaKkH32qKPvo9NqDknCftn1AGgAAP7yQte2VdBrzod-TaTI-oVZbZ4l-B9gz",
		"Star Destroyer": "https://i.etsystatic.com/8461382/r/il/395b99/1021787906/il_fullxfull.1021787906_hyhw.jpg",
		"Sentinel-class landing craft": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6z5pAOPz8RLqYh66Qtz54_sFKZOpb5JPoqw&s",
		"Death Star": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdn6bexS8Hdf9VEz_Qw4Tzzui9X5vLFGr4g&s",
		"Y-wing": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjhhCd1CLhrhsEmZN_JQ1bW6ZZVajrj1QjA&s",
		"Millennium Falcon": "https://cdn.mos.cms.futurecdn.net/uciG9WygFRtEDcvw9gitTd.jpg",
		"TIE Advanced x1": "https://cdnb.artstation.com/p/assets/images/images/028/086/799/large/donny-versiga-sw-tie-advanced-01.jpg?1593449609",
		"Executor": "https://static.wikia.nocookie.net/esstarwars/images/3/30/Executor_BF2.png/revision/latest?cb=20190810045012",
		"X-wing": "https://p.turbosquid.com/ts-thumb/p4/gieJXZ/OZ/screenshot000/png/1650377267/600x600/fit_q87/3686652c5724136118665b70438d2d82114e9663/screenshot000.jpg",
		"Rebel transport": "https://static.wikia.nocookie.net/esstarwars/images/6/67/GR-75_Medium_Transport_TAEtrivia.png/revision/latest?cb=20190128000951"
	}

	useEffect(() => {
		actions.GetPeople(),
		actions.GetPlanets(),
		actions.GetStarships()
	}, [])

	return (
		<div className="m-3">
			<h5>Characters:</h5>
			<div className="cardWrapper text-center">
				{
					store.people.map(people => {
						const imageUrl = charactersImg[people.name] || 'url-a-placeholder';
						return (
							<People
								key={people.uid}
								uid={people.uid}
								name={people.name}
								imageUrl={imageUrl}
							/>
						);
					})
				}
			</div>
			<h5>Planets:</h5>
			<div className="cardWrapper text-center">
				{
					store.planets.map(planets => {
						const imageUrl = PlanetsImg[planets.name] || 'url-a-placeholder';
						return (
							<Planets
								key={planets.uid}
								uid={planets.uid}
								name={planets.name}
								imageUrl={imageUrl}
							/>
						);
					})
				}
			</div>
			<h5>Starships:</h5>
			<div className="cardWrapper text-center">
				{
					store.starships.map(starships => {
						const imageUrl = StarshipsImg[starships.name] || 'url-a-placeholder';
						return (
							<Vehicles
								key={starships.uid}
								uid={starships.uid}
								name={starships.name}
								imageUrl={imageUrl}
							/>
						);
					})
				}
			</div>
		</div>
	)
}

