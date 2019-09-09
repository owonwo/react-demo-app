import React from 'react'


const Button = (props) =>{
    let className;
    if(props.regular){
        className = 'btn regular'
    }else if(props.outline){
        className = 'btn outline'
    }
    return (
        <button {...props} className={className}>
            {props.children}
        </button>
    )
}

export default Button