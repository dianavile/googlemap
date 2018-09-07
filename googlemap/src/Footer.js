import React from 'react'
import './App.css';

//Stateless Functional Component
const Footer = (props) => {
    return (
        <footer id='footer-wrapper'>           
            <p className="copyright">2018.Udacity Front End Developer Nanodegree program. Created by <a id='footer-link' target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/dianavile/'>Diana Vilé</a>.
             Data retrieved from <a href='https://developer.foursquare.com/'> GoogleFoursquare API</a></p>
            </footer>
        )
    
}

export default Footer
      