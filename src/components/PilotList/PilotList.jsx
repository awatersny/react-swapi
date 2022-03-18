import React, { useState, useEffect } from 'react';
import { getPilots } from '../../services/sw-api';

const PilotList = (props) => {
  const [pilotList, setPilotList] = useState([]);

  useEffect(() => {
    getPilots(props.pilots)
    .then(pilotData => setPilotList(pilotData))
  }, [])


  console.log(pilotList)

  return ( 
    <>
      <h2>PILOTS:</h2>
      {pilotList.length ?
        pilotList.map(pilot => 
          <h3 key={pilot.url}>{pilot.name}</h3>
        )
      :
        <h3>There are no pilots</h3>
      }
    </>
  );
}

export default PilotList;