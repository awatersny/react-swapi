import React, { useState, useEffect, useImperativeHandle } from 'react';
import { getAllStarShips } from '../services/sw-api';
import { Link } from 'react-router-dom'

const StarShips = (props) => {
  const [starShips, setStarShips] = useState([]);

  useEffect(()=>{
    getAllStarShips()
    .then(starShipData => setStarShips(starShipData.results))
  }, []);

  console.log(starShips)

  return ( 
    <>
        {starShips.map(starShip => 
          <div 
            className='icon-container'
            key={starShip.name}
          >
            <Link
              to={starShip.url.slice(21)}
              state={{starShip}}
            >
              <h2>{starShip.name}</h2>
            </Link>
          </div>
        )}
    </>
  );
}

export default StarShips;