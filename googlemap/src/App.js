import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import LocationList from './LocationList';
import Footer from './Footer.js';

class App extends Component {


 /* Show Map on pageload*/
  componentDidMount() {
    this.loadGoogleMap()
  }

/* Add GoogleMaps
* Load the API from the specified URL- see further loadscript() function
*/
  loadGoogleMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBTtVemxpZPtEsbI6cw84CSstMfpo90ElU&callback=initMap")
    window.initMap = this.initMap
  }
   
//Initialize google map
  // The location of Barcelona, center and zoom are required.
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.3851, lng: 2.1734 },
    zoom: 12
  });
}

  render(){
        return (
      <div className="App">
        <Header />
        <main>
          <div id='map'></div>    
        </main>   
        <LocationList /> 
        <Footer />
      </div>
    );
  }
}

/* Add GoogleMaps
* The async attribute allows the browser to render the page while the API loads
* The key parameter contain own API key(https://developers.google.com/maps/documentation/javascript/versions)
* The callback parameter executes the initMap() function
*/

function loadScript(url){
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
  
}

export default App;
