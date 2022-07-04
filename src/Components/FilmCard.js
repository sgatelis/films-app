import { useState } from "react";
import { Rating } from 'react-simple-star-rating'

const FilmCard = ({item, setFilm, setShowModal}) => {

   
    function addToModal() {
        const card = {
            image: item.image,
            title: item.titleLtu,
            genre: item.genre,
            rating: item.imdbRating,
            duration: item.duration,
            description: item.description
        }
        setFilm(card)
        setShowModal(true)
    }
    
return (
    <div>
        <div className="card">
            <img onClick={addToModal} src={item.image}/>
            <h3>{item.titleLtu}</h3>            
            <p>{item.genre.join(", ")}</p>             
            <Rating ratingValue={item.imdbRating * 10} readonly={true} />
            <h4>Duration: {item.duration}</h4>
        </div>
    </div>
)
}



export default FilmCard