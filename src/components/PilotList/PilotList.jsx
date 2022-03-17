import React, { useState, useEffect } from 'react';
import { getDetails } from '../../services/sw-api';

const PilotList = (props) => {
  console.log(props.pilots);

  return ( 
    <>
      <h2>PILOTS:</h2>
      {props.pilots.length ?
        props.pilots.map(pilot => 
          <h3 key={pilot}>Pilot</h3>
        )
      :
        <h3>There are no pilots</h3>
      }
    </>
  );
}

export default PilotList;