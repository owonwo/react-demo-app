import React from 'react'

function Navbar(props){
    return(
        <header>
            <h3>Design.co</h3>
            <ul>
                {props.children}
            </ul>
        </header>
    );
    
}
export default Navbar