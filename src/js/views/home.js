import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store } = useContext(Context)
	console.log(store);

	return (

		<div className="text-center mt-5">
			<h3>Characters:</h3>
			<div className="cardWrapper">
				{
					store.people.map(people => (
						<div key={people.uid} className="card mx-1" style={{width: "50rem"}}>
							<img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{people.name}</h5>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
						
					))
				}
			</div>
			<h3>Planets:</h3>
			<div className="cardWrapper">
				{
					store.planets.map(planet => (
						<div key={planet.uid} className="card mx-1" style={{width: "50rem"}}>
							<img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{planet.name}</h5>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
						
					))
				}
			</div>
			<h3>Starships:</h3>
			<div className="cardWrapper">
				{
					store.starships.map(starship => (
						<div key={starship.uid} className="card mx-1" style={{width: "50rem"}}>
							<img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{starship.name}</h5>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
						
					))
				}
			</div>
		</div>
	)
}

