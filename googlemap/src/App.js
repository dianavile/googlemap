import React, { Component } from 'react';
import Header from './Header.js';
import LocationList from './LocationList';
//import Map from './Map.js';
import mapStyle from './mapStyle.json';
import Footer from './Footer.js';
import './App.css';
//import './Responsive.css';

//Stateless Functional Component
const Map = ({ map }) => {
  return (
    <main>
      <div id='map' style={{ width: '100vw', height: 800 }}></div>
      <div id='mapStyle'></div>     
    </main>
  );
}

class App extends Component {

  state = {
    map: {},
    mapstyle: mapStyle,
  }
  
 /* Show Map on pageload*/
  componentDidMount() {
    this.loadGoogleMap()
    console.log(this.state)
  }

/* Add GoogleMap 
* Load the API from the specified URL asynchronously- see further loadscript() function below
* The async attribute allows the browser to render the page while the API loads
* The key parameter contain own API key(https://developers.google.com/maps/documentation/javascript/versions)
* The callback parameter executes the initMap() function
*/
  loadGoogleMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBTtVemxpZPtEsbI6cw84CSstMfpo90ElU&v=3.33&callback=initMap")
    window.initMap = this.initMap
  }

/*
* Initialize google map
* The location of Barcelona, center and zoom are required.
*/
  initMap = () => {
    const mapstyle = mapStyle;
    this.map = new window.google.maps.Map(
      document.getElementById('map'),
      {
        center: { lat: 41.3851, lng: 2.1734 },
        zoom: 15,       
        style: mapStyle
      });
    console.log(this.map);
  }

  /* TODO: figure out how to add hamburger, toggle menu
  openNav() {
    document.querySelector(".menu").style.width = "250px";
  }
  closeNav() {
    document.querySelector(".menu").style.width = "0";
  }
  in header add:  /*openNav={this.openNav} */

    /* TODO: lateron DEFINE MARKER
  // Create marker for locations in venues array in state
    marker = new window.google.maps.Marker({
    position: { myCenter }, // location details to let marker appear
    map: map.setMap(map), // Let marker appear on the map
    title: location.venue.name, // Add location name when hovering over marker 
    animation: window.google.maps.Animation.DROP,  // Add drop down animation to marker 
    icon: icon // display icon
  }); */

  render(){
    const { mapStyle, center, zoom, } = this.state
    return (
    <div className="App">
    <a href="#menu" className="skip-link">Skip to content</a>
      <Header />  
      <LocationList />
      <Map 
        style={mapStyle}
        center={center}
        zoom={zoom}
      />  
      <Footer />
    </div>
    );
  }
}

//loadfunction from https://github.com/elharony/Udacity-P8-Neighborhood-Map-Project-Explained
function loadScript(url){
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
  
}

export default App;
