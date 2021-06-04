import React from 'react';
import '../Buttons/button.css'

function Button({...props}) {

    return(
        <React.Fragment>
            <button className={props.className}>{props.title}</button>
        </React.Fragment>
    )
}

export default Button