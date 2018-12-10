import React, {Component} from 'react';
import './App.css';
import mapStyle from './mapStyle';

//Class Map Component
class Map extends Component {

  state = {
    map: {},
    mapstyle: mapStyle,    
    marker: [],
    //infowindow: [],
    //TO ADD: venues: [],
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
* Initialize google map to show GoogleMap
* The location of Barcelona, center and zoom are required.
*/
  initMap = () => {
  // eslint-disable-next-line
    const mapstyle = mapStyle;   
    const google = window.google;
    const locations = [
      ['Barcelona',  41.3851, 2.1734],
      ['Baixada Santa Clara', 41.383819, 2.177359],
      ['Balmes', 41.410117, 2.137342],
      ['BonSucces', 41.383817, 2.16963],
      ['Bon Pastor', 41.383817, 2.16963],
      ['El Triangle', 41.385917, 2.169042],
      ['Baixada Santa Clara', 41.383819, 2.177359],
      ['Glories',41.405328, 2.191703],
      ['L´illa', 41.389044, 2.136188],
      ['Mallorca', 41.393231, 2.1621],
      ['Paral.lel', 41.3752, 2.161237],
      ['Passeig de Gracia', 41.397569, 2.15878],
      ['Plaza del Mar', 41.375384, 2.189576],
      ['Plaza Espany', 41.375606, 2.14847],
      ['Plaza Sagrada Familia', 41.402412,2.17428],
      ['Plaza Universitat', 41.385259, 2.163294],
      ['Ronda Sant Pere', 41.389969, 2.174795],
    ];
  
    this.map = new window.google.maps.Map(
      document.getElementById('map'),
      {
        center: { lat: 41.3851, lng: 2.1734 },
        zoom: 14,
        styles: mapStyle,
      });     
 
      // add infoWindow
    let infowindow = new google.maps.InfoWindow();
    // add marker
    let marker, i;
  
  locations.map ((location, index) => { 
    marker = new google.maps.Marker({
    position: new google.maps.LatLng(location[1], location[2]),
    map: this.map
  });
  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent('<H2>'+ location[0]+'</H2> <p></p>');
      infowindow.open(this.map, marker);
    }
  })(marker, i));  
  });
}

// add Marker bounce effect
toggleBounce() {
  if (this.getAnimation() != null) {
    this.setAnimation(null);
  } else {
    this.setAnimation(window.google.maps.Animation.BOUNCE);
  }
}

  render() {
    return (
      <main>
        <div id='map' role='application' style={{ width: '100vw', height: 850 }}></div>
        <div id='mapStyle'></div>
      </main>
    );    
  }
}

export default Map;

//loadfunction from https://github.com/elharony/Udacity-P8-Neighborhood-Map-Project-Explained
function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}
