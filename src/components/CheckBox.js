import React, { useState } from 'react';
import styled, { css } from 'styled-components'
import t from 'prop-types'

const isChecked = props =>{
    if(props.checked){

        return css`background-color: #c603c6`
        
    }
}

const CheckBoxStyle = styled.div`
    width: 15px;
    height: 15px;
    border: solid 2px purple;
    display: inline-block;

    ${isChecked}
`

const CheckBox = (props) => {
    const [checked, setChecked] = useState(false)

    const handleClick = () => {
      setChecked(!checked);
      props.onChange();
    };

    return (
        <CheckBoxStyle 
            checked={checked}
            onClick={handleClick} />
    )
}

CheckBoxStyle.propTypes = {
    checked: t.bool.isRequired,
    onChange: t.func,
}

export default CheckBox