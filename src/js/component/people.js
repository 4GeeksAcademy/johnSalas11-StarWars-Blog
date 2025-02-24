import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaHeart } from 'react-icons/fa';

const People = ({ uid, name, imageUrl }) => {
  const { store, actions } = useContext(Context);
  const isFavorite = store.favorites.some(fav => fav.uid === uid && fav.type === "character");

  return (
    <div className="card p-1">
      <div>
        <img src={imageUrl} alt={name} />
        <h5 className="card-title">{name}</h5>
        <Link to={`/people/${uid}`} className="btn btn-primary">Learn</Link>
        <button
          className={`heart-btn ${isFavorite ? "favorito" : ""} ${isFavorite ? "btn-danger" : "btn-outline-danger"}`}
          onClick={() => actions.toggleFavorite(uid, name, "character")}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default People;
