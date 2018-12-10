import React, { Component } from 'react';
import './App.css';

import Header from './Header.js';
import Locations from './Locations.js';
import Map from './Map.js';
import Footer from './Footer.js';

class App extends Component {

  //state = {
    //allLocations: [],
    //Locations: [],
    //Markers: [],
    //latLong: '41.3851, 2.1734'
//}

  //componentDidMount(){
  
  //}
  render() { 
   
    return (
      <div className="App">
        <a href="#menu" className="skip-link">Skip to content</a>
        <Header />
        <Locations />
        <Map/>
        <Footer />
      </div>
    );
  }
}

export default App;
