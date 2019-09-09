import React, { useState } from 'react'

const Toggle = () => {
    const [state, setState] = useState(true)

    return <small onClick={() => setState(!state)} 
        style={{ letterSpacing: '3px' }}>
        {state ? 'SHOW' : 'HIDE'}
    </small>
}

export default Toggle 