import {useState} from "react";
import { Rating } from 'react-simple-star-rating'


const Modal = ({ getFilm, setShowModal, getFavorites, setFavorites }) => {

    function addToFavorites() {
        const favItem = {
            image: getFilm.image,
            title: getFilm.title,
            genre: getFilm.genre,
            rating: getFilm.rating,
            duration: getFilm.duration
        }

        setFavorites([...getFavorites, favItem])
        
    }
      
    return (
        <div className="modal-container">
            
            <img src={getFilm.image} />
            <div>{getFilm.titleLtu}</div>           
            <p>{getFilm.genre.join(", ")}</p>           
            <Rating ratingValue={getFilm.imdbRating * 10} readonly={true} />
            <h4>Duration: {getFilm.duration}</h4>
            <p>Description: {getFilm.description}</p>
            <button className="favorites" onClick={addToFavorites}>Add to Favorites</button>
            <button className="close" onClick={() => setShowModal(false)}>X</button>
            
        </div>
    );
};

export default Modal