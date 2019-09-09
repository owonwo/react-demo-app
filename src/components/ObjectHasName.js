import React from  'react'

const ObjectHasName = (props) =>{
    props.object.hasOwnProperty('name') ? props.whenTrue() : props.whenFalse()

    return (
        <div>
            The Object: {JSON.stringify(props.object)}
        </div>
    )
}

export default ObjectHasName