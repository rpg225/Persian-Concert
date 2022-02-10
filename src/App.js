import React from 'react';
import ReactDOM from 'react-dom';
import Header from  './Header';
import Featured from "./components/featured";
import Highlights from "./components/highlights";
import "./Highlights.css";
import "./App.css";
import "./Countdown.css";
import "./Carrousel.css";
import "./ConcertInfo.css";
import ConcertInfo from "./components/concertInfo";
// import { StylesProvider } from '@mui/styles';



function App() {
  return (
  //  <StylesProvider jss={jss}>
      <div style= {{ height: "1500px", background:"lightblue"}}>
      <Header />
      <Featured />
        <ConcertInfo />
       // <Highlights />
    </div>
//  </StylesProvider>
  )
}

export default App
