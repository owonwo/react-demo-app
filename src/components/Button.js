import React from 'react'
import styled, { css } from 'styled-components'

function isRegular(props){
    if(props.regular){
        return css`
            background-color: purple;
            color:#fff;
        `
    }
}

function isOutline(props){
    if(props.outline){
        return css`
            background-color:transparent;
            color: #bbb;
            border:solid 1px  #bbb;

            &:focus {
                color: purple;
                border:solid 1px  purple;
            }
            `

    }
}

const isSmall = props => {
    return props.small && css`
        padding: .8rem 1.5rem;
    `
}

const ButtonStyle = styled.button`
    padding:1rem 1.5rem ;
    background-color:#ddd;
    border-radius: 38px;
    border:none;

    ${isSmall}
    ${isOutline}
    ${isRegular}
`

export default ButtonStyle