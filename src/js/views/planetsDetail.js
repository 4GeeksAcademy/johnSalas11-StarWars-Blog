import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const PlanetDetail = () => {
  const [planet, setplanet] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${id}`)
      .then(response => response.json())
      .then(respJson => {
        const planetDetails = respJson.result.properties;
        setplanet(planetDetails);
      })
      .catch(error => console.error('Error fetching character details:', error));
  }, [id]);

  const planetsImg = {
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
  };

  const imageUrl = planet ? planetsImg[planet.name] : '';

  if (!planet) return <div>Loading...</div>;

  return (
    <div className="detail-container">
      <div className="image-container">
        <img
          src={imageUrl}
          alt={planet.name}
        />
      </div>
      <div className="info-container">
        <h5 className="card-title">{planet.name}</h5>
        <p className="card-text"><strong>climate:</strong> {planet.climate}</p>
        <p className="card-text"><strong>gravity:</strong> {planet.gravity}</p>
        <p className="card-text"><strong>population:</strong> {planet.population}</p>
        <p className="card-text"><strong>terrain:</strong> {planet.terrain}</p>
        <button className="btn" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};
