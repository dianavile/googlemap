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

//TO TEST: add Foursquare API request to call all "Buenas Migas" lunch places in Barcelona
fetch('https://api.foursquare.com/v2/venues/explore?client_id=T24PWGNQT33GTQ1ZVJYJVUFFIOXPZTKIGYIA0WD1D2NQDVSJ&client_secret=EGPDEHMSUVQUZZXBRLAWE4FZ3OOIXVEDSWPSXDD5UXCZVDP0&v=20180101&limit=20&ll= 41.3851,2.1734&query=buenas+migas')    
.then(res => res.json())
.then(res => {
  // Code for handling API response
    console.log(res);
    })
  .catch(function(err) {
  // Code for handling errors
    console.log(err)
  });
