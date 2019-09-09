import React from 'react'
import '../style/custom.css';


function Cover(props){
    return (
        <section className="cover">
            {props.children}
        </section>
    );
}

export default Cover