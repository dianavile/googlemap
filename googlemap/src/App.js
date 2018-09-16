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
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBTtVemxpZPtEsbI6cw84CSstMfpo90ElU&v=3.33&callback=initMap")
    window.initMap = this.initMap
  }
 
  //Initialize google map
  // The location of Barcelona, center and zoom are required.
  initMap = () => {
    this.map = new window.google.maps.Map(
      document.getElementById('map'),
      {center: { lat: 41.3851, lng: 2.1734 },
        zoom: 15
      }
    );
    console.log(this.map);
  }

  /*
  openNav() {
    document.querySelector(".menu").style.width = "250px";

  }

  closeNav() {
    document.querySelector(".menu").style.width = "0";

  }
  in header add:  /*openNav={this.openNav} */

  render(){
        return (
      <div className="App">
            <Header />  
        <LocationList /> 
        <main>
          <div id='map' style={{ width: '100vw', height: 500 }}></div>  
        </main>   
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
