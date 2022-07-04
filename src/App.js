import { useState, useRef, useEffect } from 'react';
import './App.css';

import FilmCard from './Components/FilmCard';
import Modal from './Components/Modal';
import filmai from "./Components/movies.json";




function App() {
  console.log(filmai)



  const [getFilm, setFilm] = useState({})
  const [getShowModal, setShowModal] = useState(false)
  const [getFavorites, setFavorites] = useState([])
  const [getToFav, setToFav] = useState(false)

  const films = filmai.slice(0, 10)


  


  return (
    <div className="App">

      <div className="cards-container">
        {films.map((x, i) => <FilmCard item={x} key={i} setFilm={setFilm} setShowModal={setShowModal} />)}

      </div>
      {getShowModal && <Modal setShowModal={setShowModal} getFilm={getFilm}  />}

    </div>
  );
}

export default App;
