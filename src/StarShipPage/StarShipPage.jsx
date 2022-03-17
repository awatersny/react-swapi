import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getStarShipDetails } from '../services/sw-api';
import { Link } from 'react-router-dom';
const StarShipPage = (props) => {
  const [shipDetails, setShipDetails] = useState([]);
  let location = useLocation();

  useEffect(()=>{
    getStarShipDetails(location.state.starShip.url)
    .then(shipData => setShipDetails(shipData))
  }, [])

  console.log(shipDetails)

  return ( 
    <div className='icon-container'>
      {shipDetails.length ? 
        <div className='ship-deet-div'>
          <h2>NAME: {shipDetails.name}</h2>
          <h2>MODEL: {shipDetails.model}</h2>
          <Link 
            to='/'
            className='link'
          >
            <h2>RETURN</h2>
          </Link>
        </div>
      : 
        <h2>Loading ship details...</h2>
      }
    </div> 
  );
}

export default StarShipPage;