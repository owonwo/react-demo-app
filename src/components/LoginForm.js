import React, { useState } from 'react'
import Button from '../components/Button.js'
import { tsPropertySignature } from '@babel/types';

const LoginForm = (props) =>{
    const [fields, setField] = useState({
        email: '',
        password: '',
    })
    // const handleEmailChange = (e) =>{
    //     console.log(e.target.value);
    //     setField({ ...fields, email: e.target.value });
    //     console.log(fields);
    // }
    // const handlePassword = (e) =>{
    //     console.log(e.target.value);
    //     setField({ ...fields, password: e.target.value });
    //     console.log(fields);
    // }
    const handleInput = (fieldName) => (e) => {
        setField({...fields, [fieldName]: e.target.value });
        console.log(fields);
    }
    console.log('The', fields);
    return (
        <>
            <input type="text" placeholder="E-mail Address..." onChange={ (e)=> handleInput('email')(e)} />
            <input type="password" placeholder="Password..." onChange={handleInput('password')} />
            <Button regular onClick={() => props.onSubmit(fields)}>Login</Button>
        </>
    )
}


export default LoginForm