import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Locations from './Locations.js';
//import * as Data from './Data.json';
import Map from './Map.js';
import mapStyle from './mapStyle.json';
import Footer from './Footer.js';

class App extends Component {

  state = {
    map: {},
    mapstyle: mapStyle,    
    //Data: Data,// load the Locations array  as Data from the JSON file
    //TO ADD: venues: [],
    //marker: [],
    //infowindow: [],
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
    // eslint-disable-next-line
    const mapstyle = mapStyle;   
    this.map = new window.google.maps.Map(
      document.getElementById('map'),
      {
        center: { lat: 41.3851, lng: 2.1734 },
        zoom: 15,
        styles: mapStyle,
      });
    console.log(this.map);
  }

  //TODO: Add VEnues from Foursquare API
  //Client ID: "T24PWGNQT33GTQ1ZVJYJVUFFIOXPZTKIGYIA0WD1D2NQDVSJ"
  //Client Secret: "EGPDEHMSUVQUZZXBRLAWE4FZ3OOIXVEDSWPSXDD5UXCZVDP0"

  render() { 
    const { mapStyle, center, zoom, } = this.state   
    return (
      <div className="App">
        <a href="#menu" className="skip-link">Skip to content</a>
        <Header />
        <Locations />
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

export default App;

//loadfunction from https://github.com/elharony/Udacity-P8-Neighborhood-Map-Project-Explained
function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}
