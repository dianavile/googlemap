import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import LocationList from './LocationList';
import GoogleMap from './GoogleMap.js';
import Footer from './Footer.js';

class App extends Component {
/*
  state = {
    map: {},
  }*/
/*
  //Initialize google map
  initMap = () => {
    const GoogleMap = new window.google.maps.Map(document.getElementById('map'), { //Constructor creates a map centered at Barcelona
      center: { lat: 41.3851, lng: 2.1734 },  // The location of Barcelona, center and zoom are required.
      zoom: 12,      
    });
*/
  render(){
        return (
      <div className="App">
        <Header />
        <main>
          <LocationList />
          <GoogleMap />  
            <div id='map'></div>
        </main>   
        <Footer />
      </div>
    );
  }
}

export default App;
