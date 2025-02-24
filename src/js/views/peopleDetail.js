import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const PeopleDetail = () => {
  const [people, setPeople] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${id}`)
      .then(response => response.json())
      .then(respJson => {
        const characterDetails = respJson.result.properties;
        setPeople(characterDetails);
      })
      .catch(error => console.error('Error fetching character details:', error));
  }, [id]);

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
  };

  const imageUrl = people ? charactersImg[people.name] : '';

  if (!people) return <div>Loading...</div>;

  return (
    <div className="detail-container">
      <div className="image-container">
        <img
          src={imageUrl}
          alt={people.name}
        />
      </div>
      <div className="info-container">
        <h5 className="card-title">{people.name}</h5>
        <p className="card-text"><strong>Gender:</strong> {people.gender}</p>
        <p className="card-text"><strong>Skin:</strong> {people.skin_color}</p>
        <p className="card-text"><strong>Height:</strong> {people.height}</p>
        <p className="card-text"><strong>Homeworld:</strong> {people.homeworld}</p>
        <button className="btn" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};
