import React from 'react'
import './App.css';
//import Data from "./Data.json";

/* Filter the list of locations
* This component contains all needed to filter the locations
*/
class Locations extends React.Component {

    state = {
        query: '',    
    }

     render() {
        return (
            <nav>
                <div className='search-locations'>
                    <input
                        aria-label='search field' 
                        type='text'                        
                        placeholder='Search for a location'
                    />
                </div>
                <div className="menu">
                    <ul>
                        {/*eslint-disable-next-lin */}
                        <li><a href='#Location1'>BuenasMigas1</a></li>
                        <li><a href='#Location2'>BuenasMigas2</a></li>
                        <li><a href='#Location3'>BuenasMigas3</a></li>
                        <li><a href='#Location4'>BuenasMigas4</a></li>
                        <li><a href='#Location5'>BuenasMigas5</a></li>
                        <li><a href='#Location6'>BuenasMigas6</a></li>
                        <li><a href='#Location7'>BuenasMigas7</a></li>
                        <li><a href='#Location8'>BuenasMigas8</a></li>
                        <li><a href='#Location9'>BuenasMigas9</a></li>
                        <li><a href='#Location10'>BuenasMigas10</a></li>
                        <li><a href='#Location10'>BuenasMigas11</a></li>
                        <li><a href='#Location10'>BuenasMigas12</a></li>
                        <li><a href='#Location10'>BuenasMigas13</a></li>
                        <li><a href='#Location10'>BuenasMigas14</a></li>
                        <li><a href='#Location10'>BuenasMigas15</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Locations;

        
/* ensure roles and tab index are correct for ARIA and a11y compliance
*Tyler McGinnis course here
* ensure event handlers are passed in as props, per the rubric
* binding needs to happen else the app won't behave correctly
*<li
    role="button"
    tabIndex="0"
    onKeyPress={this.props.openInfoWindow.bind(this, this.props.data.marker)} 
    onClick={this.props.openInfoWindow.bind(this, this.props.data.marker)}>
    this.props.data.Locations}
*</li>
*/




