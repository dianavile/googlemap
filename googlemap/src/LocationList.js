import React from 'react'

class Locationlist extends React.Component {

    render() {
        return (
            <nav>                  
                <div className='search-locations'>
                    <input
                        type='text'
                        className=""
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
                    </ul>
                </div>                
            </nav>
        )
    }
}

export default Locationlist
