import React from 'react';
// import {H4} from './Headings';
import t from 'prop-types';

const ContactList = props => {
    return (
        <div>
            <ul>
                {props.list.map(e => 
                    <li>{e.name}:{e.phone}</li>
                )}
                {/* <H4>Name: {props.list[i].name}</H4>
                <H4> phone: {props.list[i].phone}</H4> */}
            </ul>
        </div>
    )
}

Math.sqrt(4567)

ContactList.propType = {
    list: t.array.isRequired,
}

export default ContactList;