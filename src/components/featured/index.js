import React from 'react';
import Carrousel from "./Carrousel";
import Countdown from "./Countdown";


function Featured() {
  return (
    <div style={{ position: "relative"}}>
        <Carrousel />
        <div clasName="artist_name">
          <div clasName="wrapper"> Mohsen Chavoshi </div>
          </div>
        <Countdown />
    </div>
  );
}

export default Featured;
