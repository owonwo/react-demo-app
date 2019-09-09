import React from 'react';
import {H4} from './Headings';
import t from 'prop-types';

const Card = (props) => {
    return(
        <article className="card">
            <img src={props.image} />
            <H4>{props.title}</H4>
            <p>{props.description}</p>
        </article>

    )
}

Card.defaultProps = {
    image: "https://www.bing.com/th?id=OIP.QMG3ZMlCNI4L-GJWFAO5hgHaFo&pid=Api&rs=1",
}

Card.propTypes = {
    image: t.string,
    title: t.string.isRequired,
    description: t.string,
}

export default Card;