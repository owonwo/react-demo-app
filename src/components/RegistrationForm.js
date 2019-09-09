import React, {useState} from 'react'
import Button from '../components/Button.js'

const RegistrationForm = (props) =>{
    const [inputFields, setInputFields] = useState({
        'fullname': '',
        'email' : '',
        'password' : '',
    });
    const handleInputFields = (inputValue) => (evt) =>{
        setInputFields({...inputFields, [inputValue]: evt.target.value});
            console.log(inputFields);
    }

    console.log('The', inputFields);

    return (
        <>
            <input type="text" placeholder="Fullname" onChange={handleInputFields('fullname')} />
            <input type="email" placeholder="E-mail Address" onChange={handleInputFields('email')} />
            <input type="password" placeholder="Enter Password" onChange={handleInputFields('password')} />
            <input type="password" placeholder="Confirm Password" onChange={handleInputFields('password')} />
            <Button regular onClick={() => props.onSubmit(inputFields)} >Sign Up</Button>

        </>
    )
}

export default RegistrationForm