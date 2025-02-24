import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const StarshipsDetail = () => {
    const [starships, setstarships] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/starships/${id}`)
            .then(response => response.json())
            .then(respJson => {
                const starshipsDetails = respJson.result.properties;
                setstarships(starshipsDetails);
            })
            .catch(error => console.error('Error fetching vehicles details:', error));
    }, [id]);

    const starshipsImg = {
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
    };

    const imageUrl = starships ? starshipsImg[starships.name] : '';

    if (!starships) return <div>Loading...</div>;

    return (
        <div className="detail-container">
            <div className="image-container">
                <img
                    src={imageUrl}
                    alt={starships.name}
                />
            </div>
            <div className="info-container">
                <h5 className="card-title">{starships.name}</h5>
                <p className="card-text"><strong>Model:</strong> {starships.model}</p>
                <p className="card-text"><strong>Crew:</strong> {starships.crew}</p>
                <p className="card-text"><strong>Length:</strong> {starships.length}</p>
                <p className="card-text"><strong>Films:</strong> {starships.films}</p>
                <button className="btn" onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    );
};
