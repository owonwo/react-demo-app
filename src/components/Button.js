import React from 'react'
import styled, { css } from 'styled-components'

function isRegular(props){
    if(props.regular){
        return css`
        background-color:red;
        color:#fff;`
    }
}
function isOutline(props){
    if(props.outline){
        return css`
            color:red;
            background-color:transparent;
            border:solid 1px red;`
    }
}

const ButtonStyle = styled.button`

    padding:1rem 1.5rem ;
    background-color:#ddd;
    border-radius: 38px;
    border:none;

    ${isOutline}
    ${isRegular}
`
const Button = (props) =>{
    return (
        <ButtonStyle regular >
            {props.children}
        </ButtonStyle>
    )
}

export default Button