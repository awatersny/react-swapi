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
    <div className='icon-container'>
      {starShips.length ?
        starShips.map(starShip => 
          <div 
            className='ship-div'
            key={starShip.name}
          >
            <Link
              to={starShip.url.slice(21)}
              state={{starShip}}
              className='link'
            >
              <h2>{starShip.name}</h2>
            </Link>
          </div>
        )
        :
        <h2>Loading starship data...</h2>
      }
    </div>
  );
}

export default StarShips;