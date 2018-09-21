import React from 'react';
import './App.css';

//Stateless Functional Component
const Header = (props) => {
    return (
        <header className='header'>
            <div className='header-titles'>
                <h1 className="header-title">Buenas Migas Barcelona</h1>
                <h4 className="header-subtitle">FOCACCERIA</h4>
            </div>
        </header>
    );
}

export default Header;

//TO ADD under header: <div className='header-hamburger'>
//<span className='open-btn' onClick={props.openNav()}>&#9776; open</span>
//</div>
//tutorial for hamburgermenu https://www.w3schools.com/howto/howto_js_off-canvas.asp AND https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav_push
