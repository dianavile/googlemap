import React from 'react';
import './App.css';

//Stateless Functional Component
const Map = ({ map }) => {
    return (
        <main>
            <div id='map' role='application' style={{ width: '100vw', height: 850 }}></div>
            <div id='mapStyle'></div>
        </main>
    );
}

export default Map;
