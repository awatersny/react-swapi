import React, { useState, useEffect, useImperativeHandle } from 'react';
import { getAllStarShips } from '../services/sw-api';
import { Link } from 'react-router-dom'

const StarShips = (props) => {
  const [starShips, setStarShips] = useState([]);

  useEffect(()=>{
    getAllStarShips()
    .then(starShipData => setStarShips(starShipData.results))
  });

  console.log(starShips.map)

  return ( 
    <>
      <h2>All StarShips</h2>
      {starShips.map(starShip => 
        <div key={starShip.name}>
          <h1>StarShip</h1>
        </div>
      )}
    </>
  );
}

export default StarShips;